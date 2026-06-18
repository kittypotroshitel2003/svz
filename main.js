/* ═══════════════════════════════════════════════════════════
   Smart Valley Zvartnots — main.js
   Animations, Map, FAQ, Nav
   ═══════════════════════════════════════════════════════════ */

/* ─── SCROLL RESTORATION ─────────────────────────────────── */
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
window.scrollTo(0, 0);

/* ─── PRELOADER ─────────────────────────────────────────── */
(function () {
  const preloader = document.getElementById('preloader');
  if (!preloader) return;

  // Skip preloader when navigating from another page on same site (not on refresh/direct)
  const navType = (performance.getEntriesByType('navigation')[0] || {}).type;
  const isReload = navType === 'reload';
  const isInternalNav = !isReload && !!document.referrer && (() => {
    try { return new URL(document.referrer).origin === location.origin; } catch { return false; }
  })();

  if (!preloader || typeof gsap === 'undefined' || isInternalNav) {
    if (preloader) preloader.style.display = 'none';
    document.body.classList.remove('pl-active');
    document.querySelector('.hero__heading')?.classList.add('visible');
    return;
  }

  const vw = window.innerWidth;

  /* dynamic sizes (match CSS clamp values) */
  const iconW   = Math.min(Math.max(vw * 0.152,  100), 292);
  const logoW   = Math.min(Math.max(vw * 0.3344, 175), 642);
  const logoGap = Math.min(Math.max(vw * 0.0271,   8),  52);
  const groupW  = iconW + logoGap + logoW;

  /* final x-offsets from viewport center (xPercent: -50 base) */
  const iconFinalX = -(groupW / 2 - iconW / 2);
  const logoFinalX =   groupW / 2 - logoW / 2;
  /* logo starts just past right edge */
  const logoStartX = vw * 0.504;

  /* clear pre-render inline transforms so GSAP starts clean */
  document.querySelectorAll('#pl-squares, #pl-icon-white, #pl-icon, #pl-logo').forEach(function(el) {
    el.style.transform = '';
  });

  /* set initial transforms (GSAP owns all transforms) */
  gsap.set(['#pl-squares', '#pl-icon-white', '#pl-icon', '#pl-logo'], {
    xPercent: -50, yPercent: -50
  });
  gsap.set('#pl-logo', { x: logoStartX, opacity: 0 });

  const tl = gsap.timeline({
    delay: 0.1,
    onComplete () {
      preloader.style.display = 'none';
      document.body.classList.remove('pl-active');
      document.querySelector('.hero__heading')?.classList.add('visible');
      requestAnimationFrame(() => {
        if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
        // Force-reveal elements that are already in/above viewport after preloader
        document.querySelectorAll('.reveal:not(.visible),.reveal--left:not(.visible),.reveal--right:not(.visible)').forEach(el => {
          const r = el.getBoundingClientRect();
          if (r.top < window.innerHeight && r.bottom > 0) el.classList.add('visible');
        });
      });
    }
  });

  /* ① квадраты вращаются с небольшим stagger */
  tl.to('.pl-sq', {
    rotation: 45,
    duration: 0.35,
    ease: 'power2.inOut',
    stagger: { each: 0.05, from: 'start' }
  });

  /* ② плавный кросс-фейд: квадраты → белая иконка */
  tl.to('#pl-squares',    { opacity: 0, duration: 0.22, ease: 'power1.inOut' }, '+=0.04')
    .to('#pl-icon-white', { opacity: 1, duration: 0.22, ease: 'power1.inOut' }, '<');

  /* ③ плавный кросс-фейд: белая → цветная иконка */
  tl.to('#pl-icon-white', { opacity: 0, duration: 0.22, ease: 'power1.inOut' }, '+=0.1')
    .to('#pl-icon',        { opacity: 1, duration: 0.22, ease: 'power1.inOut' }, '<');

  /* ④ иконка уезжает влево, надпись въезжает справа — иконка остаётся видимой */
  tl.to('#pl-icon', { x: iconFinalX, duration: 0.32, ease: 'expo.out' }, '+=0.08')
    .to('#pl-logo',  { x: logoFinalX, opacity: 1, duration: 0.36, ease: 'expo.out' }, '<+=0.12');

  /* ⑤ пауза → плавное исчезновение */
  tl.to(preloader, { opacity: 0, duration: 0.3, ease: 'power1.inOut' }, '+=0.25');
})();

/* ─── NAV scroll effect ────────────────────────────────── */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

/* ─── HERO parallax (GPU, без дрожания) ─────────────────── */
const heroBg = document.querySelector('.hero__bg');
if (heroBg) {
  let rafPending = false;
  window.addEventListener('scroll', () => {
    if (rafPending) return;
    rafPending = true;
    requestAnimationFrame(() => {
      const y = window.scrollY;
      if (y < window.innerHeight) {
        heroBg.style.transform = `scale(1.08) translateY(${y * 0.22}px)`;
      }
      rafPending = false;
    });
  }, { passive: true });
}

/* ─── GENERIC REVEAL (IntersectionObserver) ─────────────── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.05 });

// Observe AFTER all GSAP/ScrollTrigger inits (spacers, pins) so initial rects are stable
function initRevealObserver() {
  document.querySelectorAll('.reveal, .reveal--left, .reveal--right').forEach(el => revealObserver.observe(el));
}

/* ─── WAREHOUSE SCROLL ANIMATION ────────────────────────── */
(function initWarehouseAnim() {
  const roof       = document.getElementById('warehouse-roof');
  const leftCards  = document.querySelectorAll('.warehouse-cards--left .infra-card');
  const rightCards = document.querySelectorAll('.warehouse-cards--right .infra-card');
  if (!roof) return;

  let sliderInited = false;

  function runAnim() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
      setTimeout(runAnim, 100);
      return;
    }
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    // ── DESKTOP (>980px): pin + scrub ──────────────────────
    mm.add('(min-width: 981px)', () => {
      gsap.set(roof,       { y: 0 });
      gsap.set(leftCards,  { opacity: 0, x: -40 });
      gsap.set(rightCards, { opacity: 0, x: 40 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '#infrastructure',
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          start: 'top top',
          end: '+=800',
          scrub: 0.8,
        }
      });

      tl.to(roof, { y: -150, ease: 'none', duration: 0.5 }, 0);
      leftCards.forEach((card, i) => {
        tl.to(card, { opacity: 1, x: 0, ease: 'power2.out', duration: 0.3 }, 0.25 + i * 0.1);
      });
      rightCards.forEach((card, i) => {
        tl.to(card, { opacity: 1, x: 0, ease: 'power2.out', duration: 0.3 }, 0.25 + i * 0.1);
      });

      // Cleanup when viewport narrows to mobile — removes pin spacer + inline styles
      return () => {
        gsap.set([...leftCards, ...rightCards], { clearProps: 'opacity,x,transform' });
        gsap.set(roof, { clearProps: 'y,transform' });
      };
    });

    // ── MOBILE/TABLET (≤980px): auto animation + slider ────
    mm.add('(max-width: 980px)', () => {
      gsap.set([...leftCards, ...rightCards], { opacity: 1, x: 0 });

      const section = document.getElementById('infrastructure');
      if (section) {
        gsap.set(roof, { y: 0 });
        const roofTarget = document.getElementById('warehouse-scene') || section;
        const roofObs = new IntersectionObserver(entries => {
          if (!entries[0].isIntersecting) return;
          roofObs.disconnect();
          gsap.to(roof, { y: -70, duration: 1.4, ease: 'power2.out', delay: 0.2 });
        }, { threshold: 0.3 });
        roofObs.observe(roofTarget);
      }

      if (!sliderInited && window.matchMedia('(max-width: 640px)').matches) {
        initInfraSlider([...leftCards, ...rightCards]);
        sliderInited = true;
      }
    });
  }

  runAnim();
})();

/* ─── INFRA CARD SLIDER (mobile) ────────────────────────── */
function initInfraSlider(cards) {
  const layout = document.getElementById('warehouse-layout');
  if (!layout || !cards.length) return;

  const slider = document.createElement('div');
  slider.className = 'infra-slider';

  cards.forEach(card => {
    card.style.opacity = '1';
    card.style.transform = 'none';
    slider.appendChild(card);
  });

  layout.parentNode.insertBefore(slider, layout.nextSibling);

  // Pagination dots
  const dotsWrap = document.createElement('div');
  dotsWrap.className = 'infra-slider__dots';
  const dots = [];
  cards.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.className = 'infra-slider__dot' + (i === 0 ? ' is-active' : '');
    dotsWrap.appendChild(dot);
    dots.push(dot);
  });
  slider.parentNode.insertBefore(dotsWrap, slider.nextSibling);

  // Update active dot on scroll
  let lastActive = 0;
  slider.addEventListener('scroll', () => {
    const cardW = slider.querySelector('.infra-card').offsetWidth + 12;
    const idx = Math.min(Math.round(slider.scrollLeft / cardW), dots.length - 1);
    if (idx !== lastActive) {
      dots[lastActive].classList.remove('is-active');
      dots[idx].classList.add('is-active');
      lastActive = idx;
    }
  }, { passive: true });
}

/* ─── GLOBAL JOURNEY LINE ───────────────────────────────── */
(function initJourneyLine() {
  const fill = document.getElementById('journey-fill');
  if (!fill) return;

  function run() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
      setTimeout(run, 100);
      return;
    }
    gsap.registerPlugin(ScrollTrigger);

    gsap.set(fill, { scaleY: 0, transformOrigin: 'top center' });

    // Grows with scroll from the about section through to the footer.
    // scrub: 2 gives a smooth lagging "ink drawing" feel.
    // The warehouse pin adds extra scroll space — ScrollTrigger accounts
    // for this automatically, so the line keeps growing during the pin.
    gsap.to(fill, {
      scaleY: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: '#about',
        start: 'top bottom',
        endTrigger: 'footer',
        end: 'bottom bottom',
        scrub: 2,
      },
    });
  }

  run();
})();

// Start reveal observer after all GSAP inits complete
requestAnimationFrame(initRevealObserver);

// Re-measure ScrollTrigger after all images/fonts load to prevent spacer gap
window.addEventListener('load', function() {
  if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh(true);
});

/* ─── FAQ ACCORDION ─────────────────────────────────────── */
(function initFaq() {
  const items = document.querySelectorAll('.faq__item');

  items.forEach(item => {
    const question = item.querySelector('.faq__question');
    const answer = item.querySelector('.faq__answer');
    if (!question || !answer) return;

    if (item.classList.contains('open')) {
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }

    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      items.forEach(i => {
        i.classList.remove('open');
        const a = i.querySelector('.faq__answer');
        if (a) a.style.maxHeight = '0';
      });
      if (!isOpen) {
        item.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  document.querySelectorAll('.faq__tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const cat = tab.dataset.cat;
      document.querySelectorAll('.faq__tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Show/hide items by category
      const allItems = document.querySelectorAll('.faq__item');
      allItems.forEach(item => {
        item.style.display = (item.dataset.cat === cat) ? '' : 'none';
        item.classList.remove('open');
        const a = item.querySelector('.faq__answer');
        if (a) a.style.maxHeight = '0';
      });

      // Open the first visible item
      const first = document.querySelector(`.faq__item[data-cat="${cat}"]`);
      if (first) {
        first.classList.add('open');
        const a = first.querySelector('.faq__answer');
        if (a) a.style.maxHeight = a.scrollHeight + 'px';
      }
    });
  });
})();

/* ─── MAPLIBRE GLOBE MAP (lazy-loaded) ──────────────────────── */
(function initMap() {
  const container = document.getElementById('map');
  if (!container) return;

  function startMap() {
    const map = new maplibregl.Map({
      container: 'map',
      style: 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json',
      center: [20, 20],
      zoom: 2.2,
      bearing: 0,
      pitch: 0,
      renderWorldCopies: false,
      attributionControl: { compact: true },
    });

    let styleTimer = null;
    map.on('styledata', () => {
      if (styleTimer) clearTimeout(styleTimer);
      styleTimer = setTimeout(() => {
        try { map.setProjection({ type: 'globe' }); } catch(e) {}
      }, 100);
    });

    map.on('load', () => {
      try {
        map.setFog({
          'color':          '#f0f0f0',
          'high-color':     '#f0f0f0',
          'horizon-blend':  0.02,
          'space-color':    '#f0f0f0',
          'star-intensity': 0,
        });
      } catch(e) {}

      map.getStyle().layers.forEach(layer => {
        if (layer.type === 'symbol' && layer.layout && layer.layout['text-field']) {
          map.setLayoutProperty(layer.id, 'text-field', [
            'coalesce', ['get', 'name:ru'], ['get', 'name']
          ]);
        }
      });

      const el = document.createElement('div');
      el.style.cssText = 'width:10px;height:10px;background:#f95838;border:2px solid #fff;border-radius:50%;box-shadow:0 0 0 3px rgba(249,88,56,0.3)';
      new maplibregl.Marker({ element: el })
        .setLngLat([44.457587, 40.173811])
        .addTo(map);
    });

    let isInteracting = false;
    let resumeTimer = null;
    let lastTs = 0;
    const degreesPerSecond = 6;

    map.on('mousedown',  () => { isInteracting = true;  clearTimeout(resumeTimer); });
    map.on('touchstart', () => { isInteracting = true;  clearTimeout(resumeTimer); });
    map.on('mouseup',    () => { resumeTimer = setTimeout(() => { isInteracting = false; }, 1500); });
    map.on('touchend',   () => { resumeTimer = setTimeout(() => { isInteracting = false; }, 1500); });

    function spin(ts) {
      if (!isInteracting) {
        const dt = lastTs ? Math.min((ts - lastTs) / 1000, 0.1) : 0;
        const c = map.getCenter();
        c.lng -= degreesPerSecond * dt;
        map.setCenter(c);
      }
      lastTs = ts;
      requestAnimationFrame(spin);
    }
    requestAnimationFrame(spin);
  }

  function loadMapLibre() {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/maplibre-gl@5.3.0/dist/maplibre-gl.css';
    link.integrity = 'sha384-Nq6PQ+9vJPvw7U/VfDELyrWoGQMsy0gi6QShhaSrGzkpF5KkM40csg2leky+YMTd';
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = 'https://unpkg.com/maplibre-gl@5.3.0/dist/maplibre-gl.js';
    script.integrity = 'sha384-lwoweBvLd/SJV/pFn4C9Dj9MR+0hltVUArfmLy5PPNG2vOnTCmy+w+gxbO/wzFgH';
    script.crossOrigin = 'anonymous';
    script.onload = startMap;
    document.head.appendChild(script);
  }

  const obs = new IntersectionObserver(entries => {
    if (!entries[0].isIntersecting) return;
    obs.disconnect();
    loadMapLibre();
  }, { rootMargin: '400px' });

  obs.observe(container);
})();

/* ─── SECTION LABEL ENTRANCES ───────────────────────────── */
(function initSectionLabels() {
  const labels = document.querySelectorAll('.section-label');
  labels.forEach(label => {
    const dot  = label.querySelector('.section-label__dot');
    const text = label.querySelector('.section-label__text');
    if (dot) {
      dot.style.transform  = 'scale(0)';
      dot.style.transition = 'transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1)';
    }
    if (text) {
      text.style.opacity   = '0';
      text.style.transform = 'translateX(-12px)';
      text.style.transition = 'opacity 0.5s ease 0.2s, transform 0.5s ease 0.2s';
    }
  });
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const dot  = entry.target.querySelector('.section-label__dot');
      const text = entry.target.querySelector('.section-label__text');
      if (dot)  dot.style.transform = 'scale(1)';
      if (text) { text.style.opacity = '1'; text.style.transform = 'none'; }
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.7 });
  labels.forEach(label => obs.observe(label));
})();

/* ─── FAQ SIDEBAR ENTRANCE ──────────────────────────────── */
(function initFaqSidebarAnim() {
  const tabs    = document.querySelectorAll('.faq__tab');
  const contact = document.querySelector('.faq__contact');
  const trigger = document.querySelector('.faq__left');
  if (!trigger) return;
  const els = [...tabs, contact].filter(Boolean);
  els.forEach((el, i) => {
    el.style.opacity   = '0';
    el.style.transform = 'translateX(-20px)';
    el.style.transition = `opacity 0.5s ease ${i * 0.07}s, transform 0.5s ease ${i * 0.07}s`;
  });
  const obs = new IntersectionObserver(entries => {
    if (!entries[0].isIntersecting) return;
    els.forEach(el => { el.style.opacity = '1'; el.style.transform = 'none'; });
    obs.disconnect();
  }, { threshold: 0.15 });
  obs.observe(trigger);
})();

/* ─── CONTACT BLOCKS STAGGER ────────────────────────────── */
(function initContactBlocksAnim() {
  const blocks  = document.querySelectorAll('.contact-block');
  const trigger = document.querySelector('.contacts__info');
  if (!blocks.length || !trigger) return;
  blocks.forEach((block, i) => {
    block.style.opacity   = '0';
    block.style.transform = 'translateY(20px)';
    block.style.transition = `opacity 0.55s ease ${i * 0.09}s, transform 0.55s ease ${i * 0.09}s`;
  });
  const obs = new IntersectionObserver(entries => {
    if (!entries[0].isIntersecting) return;
    blocks.forEach(block => { block.style.opacity = '1'; block.style.transform = 'none'; });
    obs.disconnect();
  }, { threshold: 0.1 });
  obs.observe(trigger);
})();

/* ─── FORM FIELDS STAGGER ───────────────────────────────── */
(function initFormFieldsAnim() {
  const fields  = document.querySelectorAll('.form__input, .form__submit');
  const trigger = document.querySelector('.form__fields');
  if (!fields.length || !trigger) return;
  fields.forEach((field, i) => {
    field.style.opacity   = '0';
    field.style.transform = 'translateY(18px)';
    field.style.transition = `opacity 0.5s ease ${i * 0.08}s, transform 0.5s ease ${i * 0.08}s`;
  });
  const obs = new IntersectionObserver(entries => {
    if (!entries[0].isIntersecting) return;
    fields.forEach(field => { field.style.opacity = '1'; field.style.transform = 'none'; });
    obs.disconnect();
  }, { threshold: 0.2 });
  obs.observe(trigger);
})();

/* ─── FOOTER ENTRANCE ───────────────────────────────────── */
(function initFooterAnim() {
  const inner   = document.querySelector('.site-footer__inner');
  if (!inner) return;
  const tagline = document.querySelector('.site-footer__tagline');
  const navLinks = document.querySelectorAll('.site-footer__nav a');
  const logoRow = document.querySelector('.site-footer__logo-row');
  const copy    = document.querySelector('.site-footer__copy');

  if (tagline) {
    tagline.style.opacity   = '0';
    tagline.style.transform = 'translateY(20px)';
    tagline.style.transition = 'opacity 0.6s ease 0s, transform 0.6s ease 0s';
  }

  // Each nav link appears one by one
  navLinks.forEach((link, i) => {
    link.style.opacity   = '0';
    link.style.transform = 'translateY(14px)';
    link.style.transition = `opacity 0.45s ease ${0.08 + i * 0.07}s, transform 0.45s ease ${0.08 + i * 0.07}s`;
  });

  if (logoRow) {
    logoRow.style.opacity   = '0';
    logoRow.style.transform = 'translateY(36px)';
    logoRow.style.transition = 'opacity 0.9s ease 0.35s, transform 0.9s ease 0.35s';
  }
  if (copy) {
    copy.style.opacity   = '0';
    copy.style.transition = 'opacity 0.6s ease 0.7s';
  }

  const obs = new IntersectionObserver(entries => {
    if (!entries[0].isIntersecting) return;
    if (tagline) { tagline.style.opacity = '1'; tagline.style.transform = 'none'; }
    navLinks.forEach(link => { link.style.opacity = '1'; link.style.transform = 'none'; });
    if (logoRow) { logoRow.style.opacity = '1'; logoRow.style.transform = 'none'; }
    if (copy)    { copy.style.opacity    = '1'; }
    obs.disconnect();
  }, { threshold: 0.08 });
  obs.observe(inner);
})();

/* ─── FORM SUBMIT WITH VALIDATION ──────────────────────── */
(function initFormSubmit() {
  const form = document.getElementById('form-main');
  if (!form) return;

  function showError(input, msg) {
    input.classList.add('is-error');
    input.classList.remove('is-success');
    const err = input.closest('.form__field-wrap')?.querySelector('.form__error');
    if (err) { err.textContent = msg; err.style.display = 'block'; }
  }
  function clearError(input) {
    input.classList.remove('is-error');
    const err = input.closest('.form__field-wrap')?.querySelector('.form__error');
    if (err) err.style.display = 'none';
  }
  function markSuccess(input) {
    input.classList.remove('is-error');
    input.classList.add('is-success');
    clearError(input);
  }

  form.querySelectorAll('.form__input').forEach(inp => {
    inp.addEventListener('input', () => { if (inp.classList.contains('is-error')) clearError(inp); });
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    let valid = true;
    const nameInp  = form.querySelector('[name="name"]');
    const phoneInp = form.querySelector('[name="phone"]');

    if (!nameInp.value.trim()) {
      showError(nameInp, 'Пожалуйста, введите ваше имя');
      valid = false;
    } else {
      markSuccess(nameInp);
    }

    const digits = phoneInp.value.replace(/\D/g, '');
    if (!phoneInp.value.trim()) {
      showError(phoneInp, 'Пожалуйста, введите номер телефона');
      valid = false;
    } else if (digits.length < 7) {
      showError(phoneInp, 'Введите корректный номер телефона');
      valid = false;
    } else {
      markSuccess(phoneInp);
    }

    if (!valid) return;

    const overlay = document.getElementById('form-success-overlay');
    if (overlay) {
      overlay.classList.add('is-open');
      overlay.setAttribute('aria-hidden', 'false');
      document.body.classList.add('popup-open');
    }
    form.reset();
    form.querySelectorAll('.form__input').forEach(inp => inp.classList.remove('is-success', 'is-error'));
  });
})();

/* ─── SUCCESS POPUP CLOSE ────────────────────────────────── */
(function () {
  const overlay = document.getElementById('form-success-overlay');
  if (!overlay) return;
  function close() {
    overlay.classList.remove('is-open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('popup-open');
  }
  document.getElementById('success-popup-close')?.addEventListener('click', close);
  document.getElementById('success-popup-ok')?.addEventListener('click', close);
  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && overlay.classList.contains('is-open')) close();
  });
})();

/* ─── COOKIE BANNER ──────────────────────────────────────── */
(function () {
  if (localStorage.getItem('svz_cookie')) return;
  const banner = document.getElementById('cookie-banner');
  if (!banner) return;
  setTimeout(() => banner.classList.add('is-visible'), 1400);
  function dismiss() {
    banner.classList.remove('is-visible');
    setTimeout(() => banner.remove(), 450);
  }
  document.getElementById('cookie-accept')?.addEventListener('click', () => {
    localStorage.setItem('svz_cookie', '1');
    dismiss();
  });
  document.getElementById('cookie-decline')?.addEventListener('click', () => {
    localStorage.setItem('svz_cookie', '0');
    dismiss();
  });
})();

/* ─── SMOOTH SCROLL ─────────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ─── STAGGER reveal for news cards ─────────────────────── */
document.querySelectorAll('.news-card').forEach((card, i) => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(28px)';
  card.style.transition = `opacity 0.65s ease ${i * 0.12}s, transform 0.65s ease ${i * 0.12}s`;
});

const cardObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      cardObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.06 });

document.querySelectorAll('.news-card').forEach(card => cardObserver.observe(card));

/* ─── NEWS LISTING PAGE: entrance animation ──────────────── */
(function initNewsListPage() {
  const cards = document.querySelectorAll('.news-list-card');
  if (!cards.length) return;

  const heading = document.querySelector('.news-page-hero__heading');
  const count   = document.querySelector('.news-page-hero__count');

  const heroEls = [heading, count].filter(Boolean);
  const allEls  = [...heroEls, ...Array.from(cards)];

  allEls.forEach(el => {
    el.style.opacity   = '0';
    el.style.transform = 'translateY(36px)';
  });

  setTimeout(() => {
    heroEls.forEach((el, i) => {
      el.style.transition = `opacity 0.65s ease ${i * 0.1}s, transform 0.65s ease ${i * 0.1}s`;
      el.style.opacity    = '1';
      el.style.transform  = 'translateY(0)';
    });

    cards.forEach((card, i) => {
      const delay = 0.18 + i * 0.1;
      card.style.transition = `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`;
      card.style.opacity    = '1';
      card.style.transform  = 'translateY(0)';
    });

    // Clean up inline styles after all animations finish to preserve hover effects
    const totalDuration = (0.18 + (cards.length - 1) * 0.1 + 0.75) * 1000;
    setTimeout(() => {
      cards.forEach(card => {
        card.style.opacity   = '';
        card.style.transform = '';
        card.style.transition = '';
      });
    }, totalDuration);
  }, 50);
})();

/* ─── PAGE LINE — плавное появление при входе в секции ───── */
(function initPageLine() {
  const line = document.getElementById('page-line');
  if (!line) return;

  // Появляется когда about-секция достигает верха viewport
  const about = document.getElementById('about');
  if (!about) return;

  const obs = new IntersectionObserver(entries => {
    const e = entries[0];
    // Показываем когда about пересекает верхний край
    line.style.opacity = e.isIntersecting ? '1' : '0';
  }, {
    rootMargin: '0px 0px -80% 0px', // срабатывает когда верхний край секции виден
    threshold: 0
  });
  obs.observe(about);
})();

/* ─── INFRA POPUPS ──────────────────────────────────────── */
(function () {
  const POPUP_DATA = {
    modular: {
      img: 'popup-infra-2.webp',
      title: 'Отдельное пространство под задачи арендатора',
      desc: 'Каждый складской блок спроектирован как самостоятельная единица: со своим входом, зоной загрузки, офисным или дополнительным пространством внутри и готовой инфраструктурой для ежедневной работы.',
      features: [
        { name: 'Собственный вход',        text: 'Отдельный доступ для сотрудников, клиентов и операционной команды.' },
        { name: 'Зона загрузки',           text: 'Возможность организовать приём и отгрузку товаров внутри своего блока.' },
        { name: 'Офис внутри склада',      text: 'Административная зона рядом с операционными процессами.' },
        { name: 'Антресоль',               text: 'Дополнительный уровень для офиса, технических задач или хранения.' },
        { name: 'Готовая инфраструктура',  text: 'Блок можно адаптировать под формат бизнеса без сложной перестройки.' },
      ]
    },
    docks: {
      img: 'popup-infra-4.webp',
      title: 'Логистика для разного транспорта',
      desc: 'Складские блоки предусматривают доки для еврофур, а также для малого и среднего коммерческого транспорта. Это позволяет организовать удобную разгрузку и отгрузку под разные сценарии поставок.',
      features: [
        { name: 'Для еврофур',                  text: 'Доки рассчитаны на работу с крупнотоннажным транспортом и большими партиями товара.' },
        { name: 'Для коммерческого транспорта', text: 'Отдельные зоны подходят для малого и среднего транспорта, городских поставок и регулярной дистрибуции.' },
        { name: 'Разделение потоков',           text: 'Разные транспортные сценарии можно организовать без лишних пересечений.' },
        { name: 'Удобная разгрузка',            text: 'Погрузочно-разгрузочные процессы выстраиваются под формат бизнеса арендатора.' },
      ]
    },
    flexible: {
      img: 'popup-infra-6.webp',
      title: 'Адаптация под процессы вашего бизнеса',
      desc: 'Внутреннее пространство складских блоков позволяет создавать конфигурации хранения и работы, соответствующие задачам конкретного арендатора. В одном блоке могут быть объединены складские зоны, офисные помещения, антресоли и дополнительные функциональные площади.',
      features: [
        { name: 'Офис внутри блока',         text: 'Административные помещения располагаются непосредственно рядом со складской зоной, обеспечивая удобное взаимодействие между офисом и операционными процессами.' },
        { name: 'Антресольные этажи',        text: 'Дополнительный уровень может использоваться для размещения рабочих мест, переговорных комнат, технических помещений или хранения.' },
        { name: 'Дополнительные площади',    text: 'Конфигурация пространства позволяет организовывать зоны комплектации заказов, упаковки, сервисные участки и другие функциональные пространства.' },
        { name: 'Масштабирование без переезда', text: 'Гибкая структура помещений помогает адаптировать склад под развитие бизнеса и изменение операционных задач без необходимости полной реконфигурации объекта.' },
      ]
    },
    security: {
      img: 'popup-infra-8.webp',
      title: 'Защита территории, инфраструктуры и складских операций',
      desc: 'Комплекс оснащён многоуровневой системой безопасности, обеспечивающей контроль доступа, мониторинг территории и защиту имущества арендаторов в круглосуточном режиме.',
      features: [
        { name: 'Охраняемая территория',   text: 'Вся территория комплекса ограждена и находится под постоянным контролем службы безопасности.' },
        { name: 'Контроль доступа',        text: 'Въезд и проход на территорию осуществляются через КПП и системы контроля доступа, что позволяет ограничивать доступ посторонних лиц.' },
        { name: 'Видеонаблюдение',         text: 'Ключевые зоны комплекса, транспортные маршруты, доки и общие пространства находятся под круглосуточным видеомониторингом.' },
        { name: 'Доступ 24/7',             text: 'Арендаторы могут организовывать работу в удобном для бизнеса режиме с возможностью круглосуточного доступа к своим складским блокам.' },
        { name: 'Инженерная безопасность', text: 'Комплекс предусматривает современные системы мониторинга и контроля, помогающие своевременно реагировать на внештатные ситуации.' },
        { name: 'Защита бизнеса',          text: 'Инфраструктура безопасности создаёт условия для надёжного хранения товаров, стабильной работы персонала и контроля операционных процессов.' },
      ]
    },
    engineering: {
      img: 'popup-infra-10.webp',
      title: 'Локальное пожаротушение для защиты товара',
      desc: 'Складские блоки оснащаются современными спринклерными системами, которые могут срабатывать локально в зоне инцидента. Это помогает быстро реагировать на внештатную ситуацию и снижать риск повреждения товара в других частях склада.',
      features: [
        { name: 'Спринклерные линии',    text: 'Система труб и распылителей размещается над складскими зонами.' },
        { name: 'Локальное срабатывание',text: 'Пожаротушение активируется в конкретной зоне, где требуется реагирование.' },
        { name: 'Защита товара',         text: 'Локальный принцип работы помогает избежать излишнего воздействия на весь склад.' },
        { name: 'Инженерный контроль',   text: 'Системы мониторинга помогают отслеживать состояние оборудования и поддерживать безопасную эксплуатацию.' },
      ]
    },
    energy: {
      img: 'popup-infra-12.webp',
      title: 'Инфраструктура для снижения эксплуатационных затрат',
      desc: 'Комплекс предусматривает энергоэффективные решения, которые помогают оптимизировать обслуживание складских блоков и снижать операционную нагрузку на арендаторов.',
      features: [
        { name: 'Солнечные панели',             text: 'Дополнительный источник энергии для поддержки инфраструктуры комплекса.' },
        { name: 'Автоматизация обслуживания',   text: 'Системы управления помогают контролировать работу инженерных процессов.' },
        { name: 'Автоматизация безопасности',   text: 'Интеграция систем контроля и мониторинга снижает нагрузку на эксплуатацию.' },
        { name: 'Низкий OPEX',                  text: 'Энергоэффективность и автоматизация помогают сокращать текущие расходы на обслуживание комплекса.' },
      ]
    },
  };

  const overlay   = document.getElementById('infra-popup-overlay');
  const imgEl     = document.getElementById('popup-img-el');
  const titleEl   = document.getElementById('popup-title-el');
  const descEl    = document.getElementById('popup-desc-el');
  const featuresEl= document.getElementById('popup-features-el');
  const closeBtn  = document.getElementById('popup-close');
  let lastFocused = null;

  function openPopup(id) {
    const d = POPUP_DATA[id];
    if (!d) return;
    imgEl.style.opacity = '0';
    imgEl.onload = () => { imgEl.style.opacity = '1'; };
    imgEl.src = d.img;
    imgEl.alt = d.title;
    titleEl.textContent = d.title;
    descEl.textContent  = d.desc;
    featuresEl.innerHTML = d.features.map(f =>
      `<div class="popup__feature">
        <div class="popup__feature-name">${f.name}</div>
        <div class="popup__feature-text">${f.text}</div>
      </div>`
    ).join('');
    document.getElementById('popup-content-el').scrollTop = 0;
    lastFocused = document.activeElement;
    overlay.setAttribute('aria-hidden', 'false');
    overlay.classList.add('is-open');
    document.body.classList.add('popup-open');
    requestAnimationFrame(() => closeBtn.focus());
  }

  function closePopup() {
    overlay.classList.remove('is-open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('popup-open');
    lastFocused?.focus();
  }

  /* card clicks */
  document.querySelectorAll('.infra-card[data-popup]').forEach(card => {
    card.addEventListener('click', () => openPopup(card.dataset.popup));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openPopup(card.dataset.popup); }
    });
  });

  /* close: button, backdrop, Esc */
  closeBtn.addEventListener('click', closePopup);
  overlay.addEventListener('click', e => { if (e.target === overlay) closePopup(); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && overlay.classList.contains('is-open')) closePopup();
  });
})();

/* ─── NEWS VIDEOS: play on scroll ───────────────────────── */
(function () {
  const videos = document.querySelectorAll('.news-card__photo-wrap video');
  if (!videos.length) return;
  const obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      const v = entry.target;
      if (entry.isIntersecting) {
        if (v.paused) v.play().catch(function () {});
      } else {
        v.pause();
      }
    });
  }, { threshold: 0.1 });
  videos.forEach(function (v) { obs.observe(v); });
})();

/* ─── MOBILE MENU (HAMBURGER) ────────────────────────────── */
(function initMobileMenu() {
  const burger = document.getElementById('nav-burger');
  const menu   = document.getElementById('mobile-menu');
  const nav    = document.getElementById('nav');
  if (!burger || !menu) return;

  function openMenu() {
    burger.classList.add('is-open');
    burger.setAttribute('aria-expanded', 'true');
    menu.classList.add('is-open');
    menu.setAttribute('aria-hidden', 'false');
    document.body.classList.add('menu-open');
    nav.classList.add('scrolled'); // keep nav dark while menu is open
  }

  function closeMenu() {
    burger.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
    menu.classList.remove('is-open');
    menu.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('menu-open');
    // Restore nav state based on scroll position
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }

  burger.addEventListener('click', () => {
    burger.classList.remove('burger-clicked');
    void burger.offsetWidth; // force reflow to restart animation
    burger.classList.add('burger-clicked');
    burger.addEventListener('animationend', () => burger.classList.remove('burger-clicked'), { once: true });
    menu.classList.contains('is-open') ? closeMenu() : openMenu();
  });

  // Close on any nav link click
  menu.querySelectorAll('.mobile-menu__link, .mobile-menu__cta').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close on Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && menu.classList.contains('is-open')) closeMenu();
  });
})();

/* ─── ARTICLE PAGE ANIMATIONS ───────────────────────────── */
(function initArticlePage() {
  const articleBody = document.querySelector('.article-body');
  if (!articleBody) return;

  // ── Hero entrance animation ──────────────────────────────
  const heroContent = document.querySelector('.article-hero__content');
  if (heroContent) {
    const heroBg    = document.querySelector('.article-hero__bg');
    const heroItems = Array.from(heroContent.querySelectorAll(
      '.article-hero__back, .article-hero__label, .article-hero__heading, .article-hero__meta'
    )).filter(el => getComputedStyle(el).display !== 'none');

    // Start hidden
    heroItems.forEach(el => {
      el.style.opacity   = '0';
      el.style.transform = 'translateY(22px)';
    });
    if (heroBg) {
      heroBg.style.transform  = 'scale(1.06)';
      heroBg.style.transition = 'transform 1.4s cubic-bezier(0.25,0.46,0.45,0.94)';
    }

    setTimeout(() => {
      heroItems.forEach((el, i) => {
        el.style.transition = `opacity 0.65s ease ${i * 0.13}s, transform 0.65s ease ${i * 0.13}s`;
        el.style.opacity    = '1';
        el.style.transform  = 'translateY(0)';
      });
      if (heroBg) heroBg.style.transform = 'scale(1)';
    }, 50);
  }

  // ── Counter helper ───────────────────────────────────────
  function animateFactNum(el) {
    if (typeof gsap === 'undefined') return;
    const emEl    = el.querySelector('em');
    const txtNode = Array.from(el.childNodes).find(n => n.nodeType === Node.TEXT_NODE);
    if (!txtNode) return;

    const mainRaw  = txtNode.textContent.trim();
    const mainInt  = parseInt(mainRaw, 10);
    if (isNaN(mainInt)) return;

    const originalHTML = el.innerHTML;
    const emText       = emEl ? emEl.textContent : '';
    const emStripped   = emText.replace(/\s/g, '');
    const emIsDigits   = emEl && /^\d+$/.test(emStripped) && emStripped !== '';

    const fullNum = emIsDigits
      ? parseInt(mainRaw.replace(/\s/g, '') + emStripped, 10)
      : mainInt;
    const suffix  = emIsDigits ? '' : (emEl ? emEl.outerHTML : '');

    if (isNaN(fullNum) || fullNum < 2) return;

    function fmt(n) { return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '\u00a0'); }

    const obj = { val: 0 };
    gsap.to(obj, {
      val: fullNum,
      duration: 1.8,
      ease: 'power3.out',
      onUpdate()  { el.innerHTML = fmt(Math.round(obj.val)) + suffix; },
      onComplete(){ el.innerHTML = originalHTML; }
    });
  }

  // ── Text reveal — inline styles (same mechanism as news cards, known to work) ──
  const bodyEls = Array.from(articleBody.querySelectorAll(
    'p, h2, h3, ul, ol, figure, .article-body__lead, .article-facts'
  ));
  const vh = window.innerHeight;

  function revealEl(el) {
    el.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
    el.style.opacity    = '1';
    el.style.transform  = 'none';
  }

  // Set all hidden immediately (before first paint)
  bodyEls.forEach(el => {
    el.style.opacity   = '0';
    el.style.transform = 'translateY(18px)';
  });

  const textObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      textObserver.unobserve(entry.target);
      revealEl(entry.target);

      // Start counters after facts block fades in
      if (entry.target.dataset.facts) {
        entry.target.querySelectorAll('.article-fact__num').forEach((numEl, i) => {
          setTimeout(() => animateFactNum(numEl), 400 + i * 150);
        });
      }
    });
  }, { threshold: 0.08 });

  bodyEls.forEach((el, i) => {
    if (el.classList.contains('article-facts')) el.dataset.facts = '1';
    if (el.getBoundingClientRect().top < vh) {
      // Above-fold: 50ms min so browser paints opacity:0 before revealing
      setTimeout(() => revealEl(el), 50 + i * 80);
    } else {
      textObserver.observe(el);
    }
  });
})();