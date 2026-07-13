/* ═══════════════════════════════════════════════════════════
   Smart Valley Zvartnots — main.js
   Animations, Map, FAQ, Nav
   ═══════════════════════════════════════════════════════════ */

/* ─── SCROLL RESTORATION ─────────────────────────────────── */
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
window.scrollTo(0, 0);

/* ─── I18N ──────────────────────────────────────────────── */
(function () {
  const T = {
    ru: {
      'meta.title': 'Smart Valley Zvartnots — Складские блоки нового поколения',
      'nav.about': 'О комплексе',
      'nav.infra': 'Инфраструктура',
      'nav.news': 'Новости',
      'nav.contacts': 'Контакты',
      'nav.cta': 'Связаться',
      'hero.heading': 'Современное<br class="mob-br"> складское<br class="mob-br"> бизнес-пространство',
      'about.label': 'о компании',
      'about.text': '— логистический комплекс международного уровня вблизи аэропорта Звартноц, объединяющий в себе стратегическую локацию, современные технологии и ESG-подход для эффективного развития бизнеса и международной торговли.',
      'infra.label': 'о комплексе',
      'infra.heading': 'Инфраструктура, которая адаптируется под ваш бизнес',
      'infra.desc': 'Smart Valley Zvartnots — современный складской комплекс с модульной системой блоков, гибкой внутренней структурой, инженерными системами, безопасностью и возможностью адаптации помещений под задачи арендаторов.',
      'card.modular.title': 'Модульные блоки',
      'card.modular.text': 'Отдельные складские блоки для арендаторов со своим входом и готовой инфраструктурой.',
      'card.docks.title': 'Универсальный док',
      'card.docks.text': 'Подходит для обслуживания еврофур, а также малого и среднего коммерческого транспорта.',
      'card.flexible.title': 'Гибкое пространство',
      'card.flexible.text': 'Офисные зоны, антресоли и дополнительные площади внутри складского блока.',
      'card.security.title': 'Современная безопасность',
      'card.security.text': 'Ограждение, КПП, охрана и доступ к складским блокам 24/7.',
      'card.engineering.title': 'Инженерные системы',
      'card.engineering.text': 'Спринклерное пожаротушение с возможностью локального срабатывания.',
      'card.energy.title': 'Энергоэффективность',
      'card.energy.text': 'Солнечные панели, автоматизация обслуживания и снижение эксплуатационных затрат.',
      'faq.label': 'вопросы',
      'faq.heading': 'Перед тем как выбрать складской блок',
      'faq.desc': 'Здесь собраны ответы на ключевые вопросы об аренде, инфраструктуре и возможностях Smart Valley Zvartnots.',
      'faq.tab.all': 'Общее',
      'faq.tab.lease': 'Аренда и условия',
      'faq.tab.infra': 'Инфраструктура',
      'faq.tab.tech': 'Технологии и оснащение',
      'faq.contact.title': 'Остались вопросы?',
      'faq.contact.text': 'Наша команда готова помочь вам с выбором.<br><br><a href="#contact-form" class="faq__contact-link">Связаться с нами →</a>',
      'faq.q1': 'Какие складские блоки доступны арендаторам?',
      'faq.a1': 'Складской комплекс состоит из модульных блоков, которые могут использоваться как самостоятельные пространства с отдельным входом, зонами доступа и собственной инфраструктурой. Внутри блока могут быть организованы складские, офисные и дополнительные функциональные зоны.',
      'faq.q2': 'Как проходит процесс выбора складского блока?',
      'faq.a2': 'Наш менеджер проводит консультацию, уточняет требования к площади и логистике, после чего предлагает оптимальный вариант из доступных блоков. Осмотр объекта возможен как очно, так и онлайн.',
      'faq.q3': 'Можно ли посмотреть объект до принятия решения?',
      'faq.a3': 'Да, мы организуем ознакомительный визит на территорию комплекса для всех потенциальных арендаторов. Запись — через форму на сайте или по телефону.',
      'faq.q4': 'Можно ли объединить склад и офис в одном помещении?',
      'faq.a4': 'Да, блоки поддерживают антресольные зоны, отдельные офисные помещения и дополнительные площади. Планировка согласовывается индивидуально под задачи арендатора.',
      'faq.q5': 'Подойдёт ли комплекс для растущего бизнеса?',
      'faq.a5': 'Модульная структура позволяет расширять арендуемую площадь без переезда — просто добавляя смежные блоки по мере роста потребностей бизнеса.',
      'faq.q6': 'Кто поможет подобрать подходящий формат?',
      'faq.a6': 'Наш отдел аренды — leasing@sv-zvartnots.com. Специалисты проконсультируют по всем форматам и помогут найти оптимальное решение.',
      'faq.q7': 'Какой минимальный срок аренды?',
      'faq.a7': 'Минимальный срок аренды составляет 12 месяцев. Для долгосрочного сотрудничества предусмотрены специальные условия и фиксированные ставки на весь период договора.',
      'faq.q8': 'Входят ли коммунальные услуги в арендную ставку?',
      'faq.a8': 'Электроснабжение, теплоснабжение и водоснабжение оплачиваются отдельно по фактическому потреблению. Охрана и обслуживание общей территории включены в базовую ставку.',
      'faq.q9': 'Предусмотрена ли индексация арендной ставки?',
      'faq.a9': 'Условия индексации фиксируются в договоре аренды. Ставка пересматривается не чаще одного раза в год по заранее согласованному коэффициенту.',
      'faq.q10': 'Можно ли арендовать несколько блоков одновременно?',
      'faq.a10': 'Да, предусмотрены групповые условия для арендаторов, занимающих более одного блока. Размер скидки обсуждается индивидуально в зависимости от объёма площади и срока договора.',
      'faq.q11': 'Каков порядок внесения обеспечительного депозита?',
      'faq.a11': 'Депозит составляет 1–2 месячных платежа и возвращается по истечении договора при отсутствии задолженностей и повреждений имущества.',
      'faq.q12': 'Какие документы нужны для заключения договора?',
      'faq.a12': 'Для юридических лиц: свидетельство о регистрации, устав, паспорт руководителя. Для ИП: паспорт и свидетельство о регистрации. Менеджер уточнит полный пакет при первичном обращении.',
      'faq.q13': 'Какова высота потолков в складских блоках?',
      'faq.a13': 'Стандартная высота до подкровельных конструкций — 8–12 метров в зависимости от типа блока. Это позволяет использовать стеллажное хранение до 5–6 ярусов.',
      'faq.q14': 'Есть ли зоны погрузки и разгрузки?',
      'faq.a14': 'На территории предусмотрены грузовые доки, рампы и крытые зоны погрузки. Количество ворот на блок согласовывается при планировании пространства.',
      'faq.q15': 'Как организована безопасность периметра?',
      'faq.a15': 'Периметр оборудован видеонаблюдением, системой контроля доступа и круглосуточной охраной КПП. Возможна интеграция с собственными системами безопасности арендатора.',
      'faq.q16': 'Какое электроснабжение предусмотрено в блоках?',
      'faq.a16': 'Каждый блок подключён к выделенной электрической линии. Базовая мощность — 50 кВт, расширение до 150 кВт по запросу. Предусмотрено резервное питание для критических потребителей.',
      'faq.q17': 'Есть ли парковка для грузовых автомобилей?',
      'faq.a17': 'Территория включает парковочные зоны для грузовиков (в том числе фур) и легковых автомобилей. Грузовые маршруты полностью отделены от пешеходных зон.',
      'faq.q18': 'Как организованы отопление и вентиляция?',
      'faq.a18': 'Блоки оснащены системой центрального отопления и принудительной вентиляцией. По запросу возможна установка климатического оборудования для поддержания заданного температурного режима хранения.',
      'faq.q19': 'Поддерживается ли интеграция с WMS-системами?',
      'faq.a19': 'Инженерные сети подготовлены для подключения систем управления складом (WMS). Кабельные каналы и серверные ниши предусмотрены на этапе строительства блока.',
      'faq.q20': 'Есть ли высокоскоростной интернет на территории?',
      'faq.a20': 'Комплекс обеспечен волоконно-оптической магистралью. Каждый блок получает выделенный канал; возможно подключение к нескольким провайдерам для резервирования.',
      'faq.q21': 'Можно ли установить собственное оборудование?',
      'faq.a21': 'Да, арендатор вправе монтировать собственное оборудование при соблюдении технических регламентов. Допустимые нагрузки на перекрытия и вводные параметры сетей уточняются при согласовании.',
      'faq.q22': 'Используется ли энергоэффективное освещение?',
      'faq.a22': 'Блоки оснащены LED-освещением с датчиками движения и системой управления освещённостью. Солнечные панели на кровле снижают общую нагрузку на электросеть комплекса.',
      'faq.q23': 'Можно ли оборудовать блок холодильными камерами?',
      'faq.a23': 'Технически возможно в блоках с соответствующими нагрузками и электрической мощностью. Решение согласовывается с технической службой комплекса.',
      'faq.q24': 'Автоматизированы ли ворота и системы доступа?',
      'faq.a24': 'Секционные ворота оснащены электроприводом с дистанционным управлением. Система контроля доступа поддерживает карточные и мобильные идентификаторы.',
      'news.label': 'новости',
      'news.heading': 'Новости Smart Valley Zvartnots',
      'news.desc': 'Следите за развитием комплекса, новыми этапами строительства, запуском инфраструктуры и событиями, связанными с развитием складского хаба.',
      'news.c1.label': 'Развитие комплекса',
      'news.c1.title': 'Старт реализации первой очереди проекта',
      'news.c1.text': 'Подготовительные работы на территории комплекса завершены. Проект переходит к следующему этапу строительства складской инфраструктуры.',
      'news.c2.label': 'Инфраструктура',
      'news.c2.title': 'Продолжается развитие инженерных систем',
      'news.c2.text': 'В рамках проекта ведётся развитие инженерной системы комплекса с акцентом на снижение эксплуатационных затрат.',
      'news.c3.title': 'Энергоэффективность',
      'news.c3.text': 'Проектирование энергоэффективной инфраструктуры',
      'news.c4.label': 'Развитие транспортной инфраструктуры',
      'news.readmore': 'Читать новость',
      'news.all': 'Читать все новости',
      'ticker.dist': 'Дистрибуция',
      'ticker.log': 'Логистика',
      'ticker.mfg': 'Производство',
      'ticker.scale': 'Масштабирование',
      'contacts.label': 'контакты',
      'contacts.heading': 'Контактная информация',
      'contact.address.label': 'Адрес',
      'contact.address.value': 'ул. Комитаса, 36/1, Паракар, Армавирский марз, Армения',
      'contact.location.label': 'Расположение',
      'contact.location.value': 'Рядом с аэропортом «Звартноц»',
      'contact.phone.label': 'Телефон',
      'contact.email.label': 'E-mail',
      'form.label': 'заказать звонок',
      'form.heading': 'Получите предложение под задачи вашего бизнеса',
      'form.desc': 'Расскажите о требованиях к площади, логистике и организации хранения — мы подготовим решение, соответствующее вашим операционным задачам.',
      'form.name': 'Имя',
      'form.company': 'Компания',
      'form.phone': 'Телефон',
      'form.submit': 'Отправить',
      'form.legal': 'Отправляя заявку, вы соглашаетесь с обработкой персональных данных.',
      'form.err.name': 'Пожалуйста, введите ваше имя',
      'form.err.company': 'Пожалуйста, введите название компании',
      'form.err.phone': 'Введите корректный номер телефона',
      'footer.tagline': 'Современное складское пространство с гибкой модульной системой хранения',
      'footer.nav.complex': 'Комплекс',
      'faq.label2': 'Вопросы',
      'footer.legal.privacy': 'Политика конфиденциальности',
      'footer.legal.personal': 'Согласие на обработку персональных данных',
      'footer.legal.terms': 'Пользовательское соглашение',
      'footer.copy': '2026, Smart Valley Zvartnots. Все права защищены.',
      'footer.made': 'разработано',
      'popup.features.label': 'Что включает',
      'popup.close': 'Закрыть',
      'success.title': 'Заявка отправлена',
      'success.desc': 'Наш менеджер свяжется с вами в течение рабочего дня. Спасибо за интерес к Smart Valley Zvartnots.',
      'success.btn': 'Отлично',
      'cookie.text': '<strong>Мы используем cookies</strong> Для корректной работы сайта и улучшения вашего опыта мы используем файлы cookie. Продолжая использование сайта, вы соглашаетесь с <a href="#">политикой обработки данных</a>.',
      'cookie.accept': 'Принять',
      'cookie.decline': 'Отклонить',
      'globe.label': 'Ереван',
      // News page
      'news.page.heading': 'Новости',
      'news.page.count': '4 материала',
      'news.list.read': 'Читать',
      'news.list.c1.cat': 'Развитие комплекса',
      'news.list.c1.title': 'Старт реализации первой очереди проекта',
      'news.list.c1.desc': 'Подготовительные работы на территории комплекса завершены. Проект переходит к следующему этапу — строительству складской инфраструктуры первой очереди.',
      'news.list.c2.cat': 'Инфраструктура',
      'news.list.c2.title': 'Продолжается развитие инженерных систем',
      'news.list.c2.desc': 'В рамках проекта ведётся развитие инженерной системы комплекса с акцентом на снижение эксплуатационных затрат и повышение надёжности.',
      'news.list.c3.cat': 'Технологии',
      'news.list.c3.title': 'Энергоэффективность как основа комплекса',
      'news.list.c3.desc': 'Проектирование энергоэффективной инфраструктуры: солнечные панели, автоматизированное управление и LED-освещение с датчиками движения.',
      'news.list.c4.cat': 'Логистика',
      'news.list.c4.title': 'Развитие транспортной инфраструктуры',
      'news.list.c4.desc': 'Комплекс Smart Valley Zvartnots формирует транспортный хаб у аэропорта Звартноц с доками для еврофур и организованной системой въезда.',
      // Articles shared
      'art.back': 'Все новости',
      'art.related.heading': 'Читайте также',
      'art.related.all': 'Все новости →',
      // Article 1
      'a1.label': 'Развитие комплекса',
      'a1.heading': 'Старт реализации первой очереди проекта',
      'a1.meta.date': '06 июня 2026',
      'a1.meta.read': '5 мин чтения',
      'a1.lead': 'Подготовительные работы на территории Smart Valley Zvartnots завершены в установленные сроки. Проект переходит к строительству складской инфраструктуры первой очереди — ключевому этапу, который определит облик комплекса и возможности первых арендаторов.',
      'a1.p1': 'Первая очередь включает 12 модульных складских блоков общей площадью около 50 000 м². Каждый блок проектируется как самостоятельная единица с собственным входом, зоной разгрузки и готовой инженерной инфраструктурой. Принцип модульности позволяет гибко масштабировать арендуемую площадь без переезда — от небольшого блока до нескольких смежных секций.',
      'a1.p2': 'Территория комплекса располагается в непосредственной близости от международного аэропорта «Звартноц», что формирует ключевое логистическое преимущество: близость к воздушному грузовому хабу сокращает транзитные расходы и открывает прямой доступ к международным поставкам.',
      'a1.figcaption': 'Территория Smart Valley Zvartnots в процессе подготовки к строительству',
      'a1.h2.1': 'Что входит в первую очередь',
      'a1.p3': 'В рамках первой очереди предусмотрено строительство складских блоков с высотой потолков до 12 метров, доков для еврофур и коммерческого транспорта, а также объектов общей инфраструктуры: КПП, системы видеонаблюдения, освещения периметра и дорожной сети внутри территории.',
      'a1.li1': '12 складских блоков площадью от 2 000 до 6 000 м² каждый',
      'a1.li2': 'Доки для еврофур и малого/среднего коммерческого транспорта',
      'a1.li3': 'Офисные антресольные зоны внутри блоков',
      'a1.li4': 'Спринклерное пожаротушение с локальным срабатыванием',
      'a1.li5': 'Выделенные электрические линии на каждый блок',
      'a1.h2.2': 'Сроки и этапы',
      'a1.p4': 'Строительство первой очереди запланировано с завершением в IV квартале 2026 года. Работы ведутся поэтапно: сначала возводится несущая конструкция и кровля, затем — внутренние инженерные системы и отделка. Такой подход позволяет первым арендаторам входить в блоки по мере готовности каждой секции.',
      'a1.p5': 'Параллельно со строительством ведётся монтаж инженерных коммуникаций: вводятся магистральные водопровод, канализация и электросеть. Волоконно-оптическая инфраструктура для высокоскоростного интернета закладывается на этапе строительства, что исключает необходимость дополнительных работ в готовом блоке.',
      'a1.fact1.label': 'м² общей площади первой очереди',
      'a1.fact2.label': 'модульных складских блоков',
      'a1.fact3.label': '2026 — плановый срок завершения',
      'a1.h2.3': 'Следующие шаги',
      'a1.p6': 'После завершения первой очереди будет запущен процесс приёма заявок от арендаторов. Команда по аренде уже проводит консультации для компаний, заинтересованных в заблаговременном бронировании складских блоков. Обратиться можно по адресу leasing@sv-zvartnots.com или через форму на сайте.',
      'a1.p7': 'Вторая очередь проекта, включающая расширение инфраструктуры и строительство дополнительных блоков, запланирована на 2027 год. Детали будут раскрыты по мере подготовки проектной документации.',
      'a1.rel.c1.cat': 'Инфраструктура', 'a1.rel.c1.title': 'Продолжается развитие инженерных систем',
      'a1.rel.c2.cat': 'Технологии',     'a1.rel.c2.title': 'Энергоэффективность как основа комплекса',
      'a1.rel.c3.cat': 'Логистика',      'a1.rel.c3.title': 'Развитие транспортной инфраструктуры',
      // Article 2
      'a2.label': 'Инфраструктура',
      'a2.heading': 'Продолжается развитие инженерных систем',
      'a2.meta.date': '06 июня 2026',
      'a2.meta.read': '4 мин чтения',
      'a2.lead': 'В рамках подготовки первой очереди ведётся комплексное развитие инженерных систем Smart Valley Zvartnots. Основной акцент — на надёжность, снижение операционных затрат и возможность масштабирования без дополнительных перестроек.',
      'a2.p1': 'Проектирование инженерной части комплекса шло параллельно с проработкой архитектурного решения. Задача инженеров — создать инфраструктуру, которая работает в фоновом режиме, не требует постоянного вмешательства персонала и при этом легко интегрируется с оборудованием арендаторов.',
      'a2.h2.1': 'Системы пожарной безопасности',
      'a2.p2': 'Каждый складской блок оснащается спринклерной системой с возможностью локального срабатывания. В отличие от традиционных решений с зональным активированием, система Smart Valley Zvartnots реагирует точечно — только в зоне возгорания. Это существенно снижает риск порчи товара в других частях склада при аварийном срабатывании.',
      'a2.p3': 'Спринклерные линии прокладываются ещё на этапе строительства, что позволяет арендаторам получить готовую систему без дополнительных капиталовложений. Трубная разводка рассчитана с запасом для возможной установки дополнительных секций при изменении внутренней планировки блока.',
      'a2.h2.2': 'Электроснабжение и резервирование',
      'a2.p4': 'Каждый блок подключён к выделенной электрической линии. Базовая мощность составляет 50 кВт, с возможностью расширения до 150 кВт по запросу арендатора. Кабельные каналы для дополнительного оборудования закладываются заранее.',
      'a2.p5': 'Для критически важных потребителей предусмотрена возможность подключения резервного питания. Распределительные щиты размещены в легкодоступных зонах и позволяют арендаторам управлять нагрузкой самостоятельно.',
      'a2.h2.3': 'Отопление и вентиляция',
      'a2.p6': 'Складские блоки оснащены системой централизованного теплоснабжения и принудительной вентиляцией. По запросу возможна установка климатического оборудования для поддержания заданного температурного режима хранения.',
      'a2.fact1.label': 'максимальная мощность на блок',
      'a2.fact2.label': 'мониторинг инженерных систем',
      'a2.fact3.label': 'покрытие спринклерной системой',
      'a2.h2.4': 'Интеграция с системами арендаторов',
      'a2.p7': 'Инженерная инфраструктура спроектирована с учётом возможной интеграции с WMS-системами управления складом. Кабельные каналы и серверные ниши предусмотрены на этапе строительства. Волоконно-оптическая магистраль обеспечивает каждый блок высокоскоростным выделенным интернет-каналом.',
      'a2.p8': 'Секционные ворота оснащены электроприводом с дистанционным управлением. Система контроля доступа поддерживает карточные и мобильные идентификаторы — арендаторы могут выдавать права доступа своим сотрудникам без участия администрации.',
      'a2.rel.c1.cat': 'Развитие комплекса', 'a2.rel.c1.title': 'Старт реализации первой очереди проекта',
      'a2.rel.c2.cat': 'Технологии',         'a2.rel.c2.title': 'Энергоэффективность как основа комплекса',
      'a2.rel.c3.cat': 'Логистика',           'a2.rel.c3.title': 'Развитие транспортной инфраструктуры',
      // Article 3
      'a3.label': 'Технологии',
      'a3.heading': 'Энергоэффективность как основа комплекса',
      'a3.meta.date': '05 июня 2026',
      'a3.meta.read': '4 мин чтения',
      'a3.lead': 'ESG-подход — не просто декларация, а инженерное решение, заложенное в проект Smart Valley Zvartnots с первого дня. Энергоэффективность снижает операционные расходы арендаторов, уменьшает нагрузку на электросеть и делает комплекс устойчивым к колебаниям тарифов.',
      'a3.p1': 'Основу энергетической концепции составляют три взаимосвязанных элемента: солнечная генерация на крышах складских блоков, интеллектуальное LED-освещение и автоматизированные системы управления зданием.',
      'a3.h2.1': 'Солнечная генерация',
      'a3.p2': 'На кровлях складских блоков первой очереди будет размещено 2 500 м² фотовольтаических панелей. Солнечные установки работают в режиме частичного самоснабжения: выработанная электроэнергия направляется на освещение территории, работу ворот и систему безопасности.',
      'a3.p3': 'Панели выбраны с учётом климатических особенностей региона: высокой инсоляции и значительного числа солнечных дней в году. Армения входит в число стран с наиболее благоприятными солнечными ресурсами на постсоветском пространстве.',
      'a3.figcaption': 'Проектирование солнечной инфраструктуры Smart Valley Zvartnots',
      'a3.h2.2': 'Интеллектуальное освещение',
      'a3.p4': 'Все складские зоны оснащаются LED-светильниками с датчиками движения и освещённости. В зонах без активного присутствия людей система автоматически снижает яркость или переводит освещение в дежурный режим.',
      'a3.p5': 'Территория комплекса — парковки, подъездные пути, зоны погрузки — также оснащены интеллектуальным уличным освещением. Сценарии управления настраиваются централизованно.',
      'a3.h2.3': 'Автоматизация управления',
      'a3.p6': 'Строительная автоматика (BMS) объединяет управление климатом, освещением, воротами, доступом и мониторингом потребления в единый интерфейс.',
      'a3.fact1.label': 'снижение потребления электроэнергии',
      'a3.fact2.label': 'м² солнечных панелей в первой очереди',
      'a3.fact3.label': 'срок службы фотовольтаических панелей',
      'a3.h2.4': 'Выгода для арендаторов',
      'a3.p7': 'Снижение энергопотребления напрямую влияет на операционные расходы. Арендаторы, использующие энергоёмкие технологии, получают инфраструктуру с пониженным базовым потреблением.',
      'a3.p8': 'Для компаний с ESG-отчётностью использование склада с сертифицированными показателями энергоэффективности позволяет улучшить экологические метрики цепочки поставок.',
      'a3.rel.c1.cat': 'Развитие комплекса', 'a3.rel.c1.title': 'Старт реализации первой очереди проекта',
      'a3.rel.c2.cat': 'Инфраструктура',     'a3.rel.c2.title': 'Продолжается развитие инженерных систем',
      'a3.rel.c3.cat': 'Логистика',           'a3.rel.c3.title': 'Развитие транспортной инфраструктуры',
      // Article 4
      'a4.label': 'Логистика',
      'a4.heading': 'Развитие транспортной инфраструктуры',
      'a4.meta.date': '04 июня 2026',
      'a4.meta.read': '5 мин чтения',
      'a4.lead': 'Транспортная доступность — одно из главных конкурентных преимуществ Smart Valley Zvartnots. Расположение в 3 км от аэропорта Звартноц, развитая дорожная сеть и продуманная внутренняя логистика делают комплекс точкой притяжения для компаний, работающих в сфере международной торговли.',
      'a4.p1': 'Развитие транспортной инфраструктуры ведётся по нескольким направлениям: строительство внутренних дорог, организация въездных узлов, монтаж погрузочных доков и формирование парковочных зон.',
      'a4.h2.1': 'Доки для разных типов транспорта',
      'a4.p2': 'Проект предусматривает доки двух типов: для крупнотоннажных еврофур и для малого/среднего коммерческого транспорта. Это позволяет арендаторам работать с разными сценариями поставок в рамках одного блока.',
      'a4.p3': 'Доки для еврофур оснащены нивелирующими платформами, что обеспечивает удобную стыковку независимо от типа полуприцепа. Зоны ожидания транспорта организованы так, чтобы фуры не создавали помех движению.',
      'a4.figcaption': 'Зоны погрузки и разгрузки первой очереди комплекса',
      'a4.h2.2': 'Разделение транспортных потоков',
      'a4.p4': 'Одна из ключевых задач при проектировании — полное разделение грузовых маршрутов и пешеходных зон. Въезды для грузовых автомобилей и пешеходные проходы организованы через разные КПП и не пересекаются.',
      'a4.p5': 'Внутренние дороги рассчитаны на нагрузку от тяжёлой грузовой техники и имеют достаточную ширину для встречного движения двух еврофур.',
      'a4.h2.3': 'Связь с аэропортом и городом',
      'a4.p6': 'Расстояние от комплекса до аэропорта Звартноц составляет около 3 км, что обеспечивает прямой доступ к воздушным грузовым операциям. Авиационный грузооборот через Ереван растёт: маршрутная сеть аэропорта включает хабы в Европе, Азии и на Ближнем Востоке.',
      'a4.p7': 'Комплекс также находится в непосредственной близости от основных автодорог, связывающих Ереван с регионами Армении и соседними странами — Грузией, Ираном, Турцией.',
      'a4.fact1.label': 'до аэропорта Звартноц',
      'a4.fact2.label': 'типа погрузочных доков',
      'a4.fact3.label': 'доступ для арендаторов',
      'a4.h2.4': 'Парковка и зоны ожидания',
      'a4.p8': 'На территории предусмотрены отдельные парковки для легковых автомобилей сотрудников и гостей, а также зоны долгосрочного ожидания для грузовиков.',
      'a4.p9': 'Все транспортные зоны охвачены видеонаблюдением. Номерные знаки фиксируются автоматически при въезде и выезде. Система доступа интегрирована с КПП.',
      'a4.rel.c1.cat': 'Развитие комплекса', 'a4.rel.c1.title': 'Старт реализации первой очереди проекта',
      'a4.rel.c2.cat': 'Инфраструктура',     'a4.rel.c2.title': 'Продолжается развитие инженерных систем',
      'a4.rel.c3.cat': 'Технологии',          'a4.rel.c3.title': 'Энергоэффективность как основа комплекса',
    },
    en: {
      'meta.title': 'Smart Valley Zvartnots — Modern Warehouse Business Space',
      'nav.about': 'About',
      'nav.infra': 'Infrastructure',
      'nav.news': 'News',
      'nav.contacts': 'Contacts',
      'nav.cta': 'Get in touch',
      'hero.heading': 'Modern<br class="mob-br"> warehouse<br class="mob-br"> business space',
      'about.label': 'about us',
      'about.text': '— an international-grade logistics complex near Zvartnots Airport, combining a strategic location, modern technology, and an ESG-driven approach to support business growth and international trade.',
      'infra.label': 'the complex',
      'infra.heading': 'Infrastructure that adapts to your business',
      'infra.desc': 'Smart Valley Zvartnots is a modern warehouse complex with a modular unit system, flexible interiors, engineering infrastructure, security, and full adaptability to tenant needs.',
      'card.modular.title': 'Modular units',
      'card.modular.text': 'Standalone warehouse units for tenants with private entrances and ready-to-use infrastructure.',
      'card.docks.title': 'Universal dock',
      'card.docks.text': 'Suitable for handling Euro semi-trailers as well as small and medium commercial vehicles.',
      'card.flexible.title': 'Flexible space',
      'card.flexible.text': 'Office zones, mezzanine levels, and additional areas within the warehouse unit.',
      'card.security.title': 'Advanced security',
      'card.security.text': 'Fencing, checkpoints, security staff, and 24/7 access to warehouse units.',
      'card.engineering.title': 'Engineering systems',
      'card.engineering.text': 'Sprinkler fire suppression with zone-level activation capability.',
      'card.energy.title': 'Energy efficiency',
      'card.energy.text': 'Solar panels, automated maintenance, and reduced operating costs.',
      'faq.label': 'faq',
      'faq.heading': 'Before choosing a warehouse unit',
      'faq.desc': 'Answers to key questions about leasing, infrastructure, and what Smart Valley Zvartnots has to offer.',
      'faq.tab.all': 'General',
      'faq.tab.lease': 'Lease & terms',
      'faq.tab.infra': 'Infrastructure',
      'faq.tab.tech': 'Technology & equipment',
      'faq.contact.title': 'Still have questions?',
      'faq.contact.text': 'Our team is ready to help you find the right fit.<br><br><a href="#contact-form" class="faq__contact-link">Contact us →</a>',
      'faq.q1': 'What warehouse units are available to tenants?',
      'faq.a1': 'The complex consists of modular units that function as independent spaces with private entrances, access zones, and their own infrastructure. Each unit can accommodate warehouse, office, and additional functional areas.',
      'faq.q2': 'How does the unit selection process work?',
      'faq.a2': 'Our manager will consult with you, clarify your space and logistics requirements, and recommend the best available option. Site visits can be arranged in person or online.',
      'faq.q3': 'Can we visit before making a decision?',
      'faq.a3': 'Yes, we organize introductory site tours for all prospective tenants. Schedule a visit through the form on this page or by phone.',
      'faq.q4': 'Can we combine a warehouse and office in one unit?',
      'faq.a4': 'Yes, units support mezzanine levels, separate office spaces, and additional areas. The layout is tailored to the tenant\'s specific operations.',
      'faq.q5': 'Is the complex suitable for a growing business?',
      'faq.a5': 'The modular structure lets you expand your leased area without relocating — by simply adding adjacent units as your business grows.',
      'faq.q6': 'Who can help us choose the right format?',
      'faq.a6': 'Contact our leasing team at leasing@sv-zvartnots.com — specialists will advise on all available options and help you find the best fit.',
      'faq.q7': 'What is the minimum lease term?',
      'faq.a7': 'The minimum lease term is 12 months. Long-term tenants benefit from special conditions and fixed rates for the full contract period.',
      'faq.q8': 'Are utilities included in the lease rate?',
      'faq.a8': 'Electricity, heating, and water are billed separately based on actual consumption. Security and common area maintenance are included in the base rate.',
      'faq.q9': 'Is the lease rate subject to indexation?',
      'faq.a9': 'Indexation terms are specified in the lease agreement. Rates are reviewed no more than once a year, based on a pre-agreed coefficient.',
      'faq.q10': 'Can we lease multiple units at once?',
      'faq.a10': 'Yes, group terms are available for tenants occupying more than one unit. Discounts are negotiated individually based on total area and lease duration.',
      'faq.q11': 'How does the security deposit work?',
      'faq.a11': 'The deposit is equivalent to 1–2 monthly payments and is refunded at the end of the lease, provided there are no outstanding debts or property damage.',
      'faq.q12': 'What documents are required to sign the lease?',
      'faq.a12': 'For companies: certificate of registration, charter, and director\'s ID. For sole traders: passport and registration certificate. Our manager will confirm the full package at first contact.',
      'faq.q13': 'What is the ceiling height in warehouse units?',
      'faq.a13': 'Standard clear height to the roof structure is 8–12 meters depending on the unit type, allowing rack storage up to 5–6 tiers.',
      'faq.q14': 'Are there loading and unloading areas?',
      'faq.a14': 'The site includes freight docks, ramps, and covered loading zones. The number of gates per unit is confirmed during space planning.',
      'faq.q15': 'How is perimeter security organized?',
      'faq.a15': 'The perimeter has CCTV, access control, and 24/7 checkpoint security. Integration with tenant\'s own security systems is possible.',
      'faq.q16': 'What power supply is available in the units?',
      'faq.a16': 'Each unit has a dedicated electrical line. Base capacity is 50 kW, expandable to 150 kW on request. Backup power is available for critical loads.',
      'faq.q17': 'Is there parking for trucks?',
      'faq.a17': 'The site includes parking zones for trucks (including semi-trailers) and passenger vehicles. Freight routes are fully separated from pedestrian areas.',
      'faq.q18': 'How is heating and ventilation managed?',
      'faq.a18': 'Units are equipped with central heating and forced ventilation. Climate control equipment can be installed on request to maintain specific storage temperatures.',
      'faq.q19': 'Is WMS integration supported?',
      'faq.a19': 'Engineering networks are prepared for warehouse management system (WMS) connectivity. Cable conduits and server niches are built in at the construction stage.',
      'faq.q20': 'Is high-speed internet available on site?',
      'faq.a20': 'The complex has a fiber-optic backbone. Each unit receives a dedicated channel with the option to connect multiple providers for redundancy.',
      'faq.q21': 'Can we install our own equipment?',
      'faq.a21': 'Yes, tenants may install their own equipment within technical regulations. Permitted floor loads and network parameters are confirmed during the planning phase.',
      'faq.q22': 'Is energy-efficient lighting used?',
      'faq.a22': 'Units are fitted with LED lighting with motion sensors and a lighting management system. Roof-mounted solar panels reduce the overall electrical load.',
      'faq.q23': 'Can a unit be fitted with refrigeration chambers?',
      'faq.a23': 'This is technically possible in units with the appropriate load ratings and power capacity. The solution is agreed with the complex\'s technical team.',
      'faq.q24': 'Are gates and access systems automated?',
      'faq.a24': 'Sectional gates have electric drives with remote control. The access control system supports card and mobile identifiers.',
      'news.label': 'news',
      'news.heading': 'Smart Valley Zvartnots News',
      'news.desc': 'Follow the development of the complex — construction milestones, infrastructure launches, and events from the warehouse hub.',
      'news.c1.label': 'Complex development',
      'news.c1.title': 'Phase one construction begins',
      'news.c1.text': 'Site preparation at the complex is complete. The project moves to the next stage of warehouse infrastructure construction.',
      'news.c2.label': 'Infrastructure',
      'news.c2.title': 'Engineering systems development continues',
      'news.c2.text': 'Work on the complex\'s engineering systems is ongoing, with a focus on reducing operating costs.',
      'news.c3.title': 'Energy efficiency',
      'news.c3.text': 'Designing an energy-efficient infrastructure',
      'news.c4.label': 'Transport infrastructure development',
      'news.readmore': 'Read article',
      'news.all': 'All news',
      'ticker.dist': 'Distribution',
      'ticker.log': 'Logistics',
      'ticker.mfg': 'Manufacturing',
      'ticker.scale': 'Scaling',
      'contacts.label': 'contacts',
      'contacts.heading': 'Contact information',
      'contact.address.label': 'Address',
      'contact.address.value': '36/1 Komitas St., Parakar, Armavir Province, Armenia',
      'contact.location.label': 'Location',
      'contact.location.value': 'Near Zvartnots Airport',
      'contact.phone.label': 'Phone',
      'contact.email.label': 'Email',
      'form.label': 'request a call',
      'form.heading': 'Get a proposal tailored to your business',
      'form.desc': 'Tell us about your space, logistics, and storage requirements — we\'ll put together a solution that fits your operations.',
      'form.name': 'Name',
      'form.company': 'Company',
      'form.phone': 'Phone',
      'form.submit': 'Submit',
      'form.legal': 'By submitting this form, you agree to the processing of your personal data.',
      'form.err.name': 'Please enter your name',
      'form.err.company': 'Please enter your company name',
      'form.err.phone': 'Please enter a valid phone number',
      'footer.tagline': 'Modern warehouse space with a flexible modular storage system',
      'footer.nav.complex': 'Complex',
      'faq.label2': 'FAQ',
      'footer.legal.privacy': 'Privacy policy',
      'footer.legal.personal': 'Personal data consent',
      'footer.legal.terms': 'Terms of use',
      'footer.copy': '2026, Smart Valley Zvartnots. All rights reserved.',
      'footer.made': 'built by',
      'popup.features.label': 'What\'s included',
      'popup.close': 'Close',
      'success.title': 'Request submitted',
      'success.desc': 'Our manager will be in touch within one business day. Thank you for your interest in Smart Valley Zvartnots.',
      'success.btn': 'Great',
      'cookie.text': '<strong>We use cookies</strong> To ensure the site works correctly and improve your experience, we use cookies. By continuing to use the site, you agree to our <a href="#">data processing policy</a>.',
      'cookie.accept': 'Accept',
      'cookie.decline': 'Decline',
      'globe.label': 'Yerevan',
      // News page
      'news.page.heading': 'News',
      'news.page.count': '4 articles',
      'news.list.read': 'Read',
      'news.list.c1.cat': 'Complex development',
      'news.list.c1.title': 'Phase one construction begins',
      'news.list.c1.desc': 'Site preparation at the complex is complete. The project moves to the next stage — warehouse infrastructure construction.',
      'news.list.c2.cat': 'Infrastructure',
      'news.list.c2.title': 'Engineering systems development continues',
      'news.list.c2.desc': 'Work on the complex\'s engineering systems is ongoing, with a focus on reducing operating costs and improving reliability.',
      'news.list.c3.cat': 'Technology',
      'news.list.c3.title': 'Energy efficiency as the foundation',
      'news.list.c3.desc': 'Designing an energy-efficient infrastructure: solar panels, automated management, and LED lighting with motion sensors.',
      'news.list.c4.cat': 'Logistics',
      'news.list.c4.title': 'Transport infrastructure development',
      'news.list.c4.desc': 'Smart Valley Zvartnots is forming a transport hub near Zvartnots Airport with semi-truck docks and an organized access system.',
      'art.back': 'All news',
      'art.related.heading': 'Read also',
      'art.related.all': 'All news →',
      'a1.label': 'Complex development',
      'a1.heading': 'Phase one construction begins',
      'a1.meta.date': 'June 6, 2026',
      'a1.meta.read': '5 min read',
      'a1.lead': 'Site preparation at Smart Valley Zvartnots has been completed on schedule. The project now moves to warehouse infrastructure construction — the key phase that will define the complex\'s profile and opportunities for its first tenants.',
      'a1.p1': 'Phase one includes 12 modular warehouse units with a total area of approximately 50,000 m². Each unit is designed as an independent space with its own entrance, unloading zone, and ready-to-use engineering infrastructure. The modular principle allows tenants to scale their leased area without relocating.',
      'a1.p2': 'The complex is located immediately adjacent to Zvartnots International Airport, creating a key logistics advantage: proximity to the air cargo hub reduces transit costs and provides direct access to international supply chains.',
      'a1.figcaption': 'Smart Valley Zvartnots site during construction preparation',
      'a1.h2.1': 'What phase one includes',
      'a1.p3': 'Phase one covers warehouse units with ceiling heights up to 12 meters, docks for semi-trucks and commercial vehicles, and shared infrastructure: checkpoints, CCTV, perimeter lighting, and an internal road network.',
      'a1.li1': '12 warehouse units ranging from 2,000 to 6,000 m² each',
      'a1.li2': 'Docks for semi-trucks and small/medium commercial vehicles',
      'a1.li3': 'Mezzanine office zones within units',
      'a1.li4': 'Sprinkler fire suppression with zone-level activation',
      'a1.li5': 'Dedicated electrical lines per unit',
      'a1.h2.2': 'Timeline and phases',
      'a1.p4': 'Phase one construction is planned for completion in Q4 2026. Work is staged: structural frame and roof first, then internal engineering systems and fit-out. This allows first tenants to move in as each section is completed.',
      'a1.p5': 'Alongside construction, utility networks are being installed: water, sewage, and power mains. Fiber-optic infrastructure for high-speed internet is built in at the construction stage, eliminating the need for additional work after handover.',
      'a1.fact1.label': 'm² total area in phase one',
      'a1.fact2.label': 'modular warehouse units',
      'a1.fact3.label': '2026 — planned completion',
      'a1.h2.3': 'Next steps',
      'a1.p6': 'Once phase one is complete, tenant applications will open. The leasing team is already consulting with companies interested in early reservations. Contact us at leasing@sv-zvartnots.com or through the form on this site.',
      'a1.p7': 'Phase two — expanding infrastructure and adding more units — is planned for 2027. Details will be published once project documentation is ready.',
      'a1.rel.c1.cat': 'Infrastructure',       'a1.rel.c1.title': 'Engineering systems development continues',
      'a1.rel.c2.cat': 'Technology',            'a1.rel.c2.title': 'Energy efficiency as the foundation',
      'a1.rel.c3.cat': 'Logistics',             'a1.rel.c3.title': 'Transport infrastructure development',
      'a2.label': 'Infrastructure',
      'a2.heading': 'Engineering systems development continues',
      'a2.meta.date': 'June 6, 2026',
      'a2.meta.read': '4 min read',
      'a2.lead': 'As part of phase one preparation, a comprehensive engineering development program is underway at Smart Valley Zvartnots. The focus is on reliability, lower operating costs, and the ability to scale without major reconstruction.',
      'a2.p1': 'Engineering design ran in parallel with the architectural development. The goal: infrastructure that operates in the background, requires minimal staff intervention, and integrates easily with tenant systems.',
      'a2.h2.1': 'Fire safety systems',
      'a2.p2': 'Each warehouse unit is equipped with a sprinkler system that activates at zone level. Unlike traditional approaches that activate entire sections, the Smart Valley Zvartnots system responds precisely at the point of ignition — significantly reducing the risk of stock damage elsewhere.',
      'a2.p3': 'Sprinkler lines are installed at the construction stage, so tenants receive a ready system at no additional cost. The pipe layout is designed with capacity for additional sections if the interior configuration changes.',
      'a2.h2.2': 'Power supply and redundancy',
      'a2.p4': 'Each unit has a dedicated electrical line with base capacity of 50 kW, expandable to 150 kW on request. Cable conduits for additional equipment are pre-installed.',
      'a2.p5': 'Backup power connection is available for critical consumers. Distribution boards are positioned for easy access, allowing tenants to manage their load independently.',
      'a2.h2.3': 'Heating and ventilation',
      'a2.p6': 'Units have central heating and forced ventilation. On request, climate control can be installed to maintain specific storage temperatures for temperature-sensitive goods.',
      'a2.fact1.label': 'maximum power per unit',
      'a2.fact2.label': 'engineering system monitoring',
      'a2.fact3.label': 'sprinkler system coverage',
      'a2.h2.4': 'Integration with tenant systems',
      'a2.p7': 'Engineering infrastructure is designed for WMS integration. Cable conduits and server niches are built in. Fiber-optic provides each unit with a dedicated high-speed channel and multi-provider redundancy.',
      'a2.p8': 'Sectional gates have electric drives with remote control. The access system supports card and mobile IDs — tenants manage their own staff access without involving complex administration.',
      'a2.rel.c1.cat': 'Complex development', 'a2.rel.c1.title': 'Phase one construction begins',
      'a2.rel.c2.cat': 'Technology',           'a2.rel.c2.title': 'Energy efficiency as the foundation',
      'a2.rel.c3.cat': 'Logistics',            'a2.rel.c3.title': 'Transport infrastructure development',
      'a3.label': 'Technology',
      'a3.heading': 'Energy efficiency as the foundation',
      'a3.meta.date': 'June 5, 2026',
      'a3.meta.read': '4 min read',
      'a3.lead': 'ESG isn\'t just a declaration — it\'s an engineering decision baked into Smart Valley Zvartnots from day one. Energy efficiency lowers tenant operating costs, reduces grid load, and makes the complex resilient to tariff fluctuations.',
      'a3.p1': 'The energy concept rests on three interconnected elements: solar generation on warehouse rooftops, intelligent LED lighting, and automated building management systems.',
      'a3.h2.1': 'Solar generation',
      'a3.p2': '2,500 m² of photovoltaic panels will be installed on the rooftops of phase one units. The solar system operates in partial self-supply mode: generated power goes first to site lighting, gate operation, and security systems.',
      'a3.p3': 'Panels were selected for the region\'s climate characteristics: high solar irradiance and many sunny days per year. Armenia ranks among the countries with the most favorable solar resources in the post-Soviet space.',
      'a3.figcaption': 'Designing solar infrastructure for Smart Valley Zvartnots',
      'a3.h2.2': 'Intelligent lighting',
      'a3.p4': 'All warehouse zones are fitted with LED fixtures with motion and brightness sensors. In areas with no active occupancy, the system automatically dims or switches to standby mode.',
      'a3.p5': 'The complex grounds — parking, access roads, loading zones — also feature intelligent outdoor lighting with centrally managed schedules.',
      'a3.h2.3': 'Management automation',
      'a3.p6': 'Building automation (BMS) integrates climate, lighting, gates, access control, and consumption monitoring in a single interface.',
      'a3.fact1.label': 'reduction in electricity consumption',
      'a3.fact2.label': 'm² of solar panels in phase one',
      'a3.fact3.label': 'photovoltaic panel service life',
      'a3.h2.4': 'Benefits for tenants',
      'a3.p7': 'Lower energy consumption directly reduces operating costs. Energy-intensive tenants get infrastructure with a reduced baseline, leaving more capacity headroom without rate increases.',
      'a3.p8': 'For ESG-reporting companies, using a warehouse with certified energy performance metrics improves the environmental footprint of their supply chain.',
      'a3.rel.c1.cat': 'Complex development', 'a3.rel.c1.title': 'Phase one construction begins',
      'a3.rel.c2.cat': 'Infrastructure',      'a3.rel.c2.title': 'Engineering systems development continues',
      'a3.rel.c3.cat': 'Logistics',           'a3.rel.c3.title': 'Transport infrastructure development',
      'a4.label': 'Logistics',
      'a4.heading': 'Transport infrastructure development',
      'a4.meta.date': 'June 4, 2026',
      'a4.meta.read': '5 min read',
      'a4.lead': 'Transport access is one of Smart Valley Zvartnots\'s key competitive advantages. Located 3 km from Zvartnots Airport, with a developed road network and thoughtfully designed internal logistics, the complex is a natural hub for international trade and distribution.',
      'a4.p1': 'Transport infrastructure is being developed across several fronts simultaneously: internal roads, entry nodes, loading docks, and parking zones for freight vehicles.',
      'a4.h2.1': 'Docks for every vehicle type',
      'a4.p2': 'The project includes two dock types: for heavy semi-trucks and for small/medium commercial vehicles. Tenants can handle multiple delivery scenarios from a single unit without splitting inbound flows.',
      'a4.p3': 'Semi-truck docks are equipped with leveling platforms for smooth docking regardless of trailer type. Waiting areas are arranged so queued trucks don\'t block internal traffic.',
      'a4.figcaption': 'Loading and unloading zones in phase one of the complex',
      'a4.h2.2': 'Separating transport flows',
      'a4.p4': 'A key design goal was full separation of freight routes and pedestrian zones. Freight and staff entrances use separate checkpoints and never cross on site.',
      'a4.p5': 'Internal roads are rated for heavy freight loads and are wide enough for two semi-trucks to pass. Turning areas are provided at every unit.',
      'a4.h2.3': 'Airport and city connections',
      'a4.p6': 'The complex sits approximately 3 km from Zvartnots Airport, providing direct access to air cargo operations. Yerevan\'s air freight volume is growing, with the airport\'s route network covering hubs in Europe, Asia, and the Middle East.',
      'a4.p7': 'The complex is also close to the main roads connecting Yerevan with Armenia\'s regions and neighboring countries — Georgia, Iran, and Turkey.',
      'a4.fact1.label': 'from Zvartnots Airport',
      'a4.fact2.label': 'loading dock types',
      'a4.fact3.label': 'tenant access',
      'a4.h2.4': 'Parking and waiting areas',
      'a4.p8': 'Separate parking is provided for staff and visitor cars, plus long-term waiting zones for freight vehicles.',
      'a4.p9': 'All transport zones are covered by CCTV. License plates are automatically logged on entry and exit. The access system is integrated with the checkpoints.',
      'a4.rel.c1.cat': 'Complex development', 'a4.rel.c1.title': 'Phase one construction begins',
      'a4.rel.c2.cat': 'Infrastructure',      'a4.rel.c2.title': 'Engineering systems development continues',
      'a4.rel.c3.cat': 'Technology',           'a4.rel.c3.title': 'Energy efficiency as the foundation',
    },
    hy: {
      'meta.title': 'Smart Valley Zvartnots — Պահեստային բիզնես տարածք',
      'nav.about': 'Համալիրի մասին',
      'nav.infra': 'Ենթակառուցվածք',
      'nav.news': 'Նորություններ',
      'nav.contacts': 'Կոնտակտներ',
      'nav.cta': 'Կապ հաստատել',
      'hero.heading': 'Արդիական<br class="mob-br"> պահեստային<br class="mob-br"> բիզնես-տարածք',
      'about.label': 'մեր մասին',
      'about.text': '— միջազգային մակարդակի լոգիստիկ համալիր Զվարթնոց օդանավակայանի մոտ, որը համատեղում է ռազմավարական դիրք, ժամանակակից տեխնոլոգիաներ և ESG-մոտեցում բիզնեսի արդյունավետ զարգացման և միջազգային առևտրի համար։',
      'infra.label': 'համալիրի մասին',
      'infra.heading': 'Ենթակառուցվածք, որը հարմարվում է ձեր բիզնեսին',
      'infra.desc': 'Smart Valley Zvartnots-ը ժամանակակից պահեստային համալիր է մոդուլային բլոկների համակարգով, ճկուն ներքին կառուցվածքով, ճարտարագիտական ​​համակարգերով, անվտանգությամբ և վարձակալների կարիքներին ամբողջական հարմարեցման հնարավորությամբ։',
      'card.modular.title': 'Մոդուլային բլոկներ',
      'card.modular.text': 'Վարձակալների համար առանձին պահեստային բլոկներ՝ սեփական մուտքով և պատրաստ ենթակառուցվածքով։',
      'card.docks.title': 'Ունիվերսալ դոկ',
      'card.docks.text': 'Հարմար ե Եվրոփուրնի, ինչպես նաև փոքր և միջին կոմերցիոնական տրանսպորտի սպասարկման համար։',
      'card.flexible.title': 'Ճկուն տարածք',
      'card.flexible.text': 'Գրասենյակային գոտիներ, մեززանիններ և լրացուցիչ տարածքներ պահեստային բլոկի ներսում։',
      'card.security.title': 'Ժամանակակից անվտանգություն',
      'card.security.text': 'Ցանկապատ, անցակետ, պահակ և 24/7 մուտք պահեստային բլոկներ։',
      'card.engineering.title': 'Ճարտարագիտական համակարգեր',
      'card.engineering.text': 'Սփրինքլերային հրշեջ՝ տեղային ակտիվացման հնարավորությամբ։',
      'card.energy.title': 'Էներգաարդյունավետություն',
      'card.energy.text': 'Արևային վահանակներ, սպասարկման ավտոմատացում և շահագործման ծախսերի կրճատում։',
      'faq.label': 'հաճախ տրվող հարցեր',
      'faq.heading': 'Նախքան պահեստային բլոկ ընտրելը',
      'faq.desc': 'Պատասխաններ վարձակալության, ենթակառուցվածքի և Smart Valley Zvartnots-ի հնարավորությունների վերաբերյալ հիմնական հարցերին։',
      'faq.tab.all': 'Ընդհանուր',
      'faq.tab.lease': 'Վարձակալություն',
      'faq.tab.infra': 'Ենթակառուցվածք',
      'faq.tab.tech': 'Տեխնոլոգիա',
      'faq.contact.title': 'Ունե՞ք հարցեր',
      'faq.contact.text': 'Մեր թիմը պատրաստ է օգնել ձեզ ընտրություն կատարել։<br><br><a href="#contact-form" class="faq__contact-link">Կապ հաստատել →</a>',
      'faq.q1': 'Ի՞նչ պահեստային բլոկներ կան վարձակալների համար։',
      'faq.a1': 'Համալիրը բաղկացած է մոդուլային բլոկներից, որոնք կարող են օգտագործվել որպես անկախ տարածքներ՝ առանձին մուտքով, մուտքային գոտիներով և սեփական ենթակառուցվածքով։',
      'faq.q2': 'Ինչպե՞ս է ընթանում բլոկի ընտրության գործընթացը։',
      'faq.a2': 'Մեր մենեջերը խորհրդատվություն կանի, կպարզաբանի տարածքի և լոգիստիկայի պահանջները, այնուհետև կառաջարկի լավագույն տարբերակը։',
      'faq.q3': 'Կարո՞ղ ենք այցելել օբյեկտ որոշում կայացնելուց առաջ։',
      'faq.a3': 'Այո, մենք կազմակերպում ենք ծանոթացողական այցեր բոլոր հնարավոր վարձակալների համար։ Գրանցումը՝ կայքի ձևի կամ հեռախոսի միջոցով։',
      'faq.q4': 'Կարո՞ղ ենք պահեստը և գրասենյակը համատեղել մեկ բլոկում։',
      'faq.a4': 'Այո, բլոկներն աջակցում են մեזזանինային գոտիներ, առանձին գրասենյակ և լրացուցիչ տարածքներ։ Հատակագիծը համաձայնեցվում է անհատապես։',
      'faq.q5': 'Հարմա՞ր է համալիրը աճող բիզնեսի համար։',
      'faq.a5': 'Մոդուլային կառուցվածքը թույլ է տալիս ընդլայնել վարձակալվող մակերեսը՝ ավելացնելով հարակից բլոկներ, առանց տեղափոխության։',
      'faq.q6': 'Ո՞վ կօգնի ճիշտ ձևաչափ ընտրել։',
      'faq.a6': 'Մեր վարձակալության բաժինը՝ leasing@sv-zvartnots.com։ Մասնագետները կխորհրդատրեն բոլոր ձևաչափների վերաբերյալ։',
      'faq.q7': 'Ո՞րն է վարձակալության նվազագույն ժամկետը։',
      'faq.a7': 'Վարձակալության նվազագույն ժամկետը 12 ամիս է։ Երկարաժամկետ համագործակցության համար նախատեսված են հատուկ պայմաններ։',
      'faq.q8': 'Կոմունալ ծառայությունները ներառվա՞ծ են վարձի մեջ։',
      'faq.a8': 'Էլեկտրաէներգիան, ջեռուցումն ու ջրամատակարարումն վճարվում են առանձին՝ ըստ փաստացի սպառման։ Անվտանգությունն ու ընդհանուր տարածքի սպասարկումը ներառված են հիմնական դրույքաչափում։',
      'faq.q9': 'Նախատեսվա՞ծ է վարձի ինդեքսավորում։',
      'faq.a9': 'Ինդեքսավորման պայմանները նախատեսված են վարձակալության պայմանագրում։ Դրույքաչափը վերանայվում է ոչ ավելի, քան տարեկան մեկ անգամ։',
      'faq.q10': 'Կարո՞ղ ենք վարձակալել մի քանի բլոկ միաժամանակ։',
      'faq.a10': 'Այո, մեկից ավելի բլոկ վարձակալողների համար կան խմբային պայմաններ։ Զեղչի չափը քննարկվում է անհատապես։',
      'faq.q11': 'Ի՞նչ կարգ է ապահովագրական ավանդի ներդրման համար։',
      'faq.a11': 'Ավանդը կազմում է 1–2 ամսական վճար և վերադարձվում է պայմանագրի ավարտին, եթե պարտքեր կամ վնասներ չկան։',
      'faq.q12': 'Ի՞նչ փաստաթղթեր են անհրաժեշտ պայմանագիր կնքելու համար։',
      'faq.a12': 'Իրավաբանական անձանց համար՝ գրանցման վկայական, կանոնադրություն, տնօրենի անձնագիր։ Անհատ ձեռնարկատերերի համար՝ անձնագիր և գրանցման վկայական։',
      'faq.q13': 'Ո՞րն է առաստաղի բարձրությունը պահեստային բլոկներում։',
      'faq.a13': 'Ստանդարտ բարձրությունը կրծկի կառուցվածքներին 8–12 մ է՝ կախված բլոկի տեսակից, ինչը թույլ է տալիս 5–6 հարկ դարակային պահեստ։',
      'faq.q14': 'Կա՞ն բեռնման-բեռնաթափման գոտիներ։',
      'faq.a14': 'Տարածքն ունի բեռնային դոկ-կայաններ, ռամպաներ և ծածկված բեռնման գոտիներ։ Բլոկի բամբ-կայանների քանակը համաձայնեցվում է տարածքի պլանավորման ժամանակ։',
      'faq.q15': 'Ինչպե՞ս է կազմակերպված պարագծի անվտանգությունը։',
      'faq.a15': 'Պարագիծն ունի տեսախցիկ, մուտքի վերահսկման համակարգ և 24/7 անցակետային պահակ։ Հնարավոր է ինտեգրում վարձակալի սեփական անվտանգության համակարգերի հետ։',
      'faq.q16': 'Ի՞նչ էլեկտրամատակարարում կա բլոկներում։',
      'faq.a16': 'Յուրաքանչյուր բլոք ունի նվիրված էլեկտրական գիծ։ Հիմնական հզորությունը 50 կՎտ է, ըստ պահանջի ընդլայնելի մինչև 150 կՎտ։',
      'faq.q17': 'Կա՞ կայանատեղի բեռնատարների համար։',
      'faq.a17': 'Տարածքն ունի կայանատեղի բեռնատարների (ներառյալ կիսակցվածների) և մարդատար մեքենաների համար։ Բեռնային երթուղիները բաժանված են հետիոտն գոտիներից։',
      'faq.q18': 'Ինչպե՞ս են կազմակերպված ջեռուցումն ու օդափոխությունը։',
      'faq.a18': 'Բլոկներն ունեն կենտրոնական ջեռուցման համակարգ և հարկադիր օդափոխություն։ Ըստ պահանջի հնարավոր է կլիմայական սարքավորումների տեղադրում։',
      'faq.q19': 'Աջակցվո՞ւմ է WMS-համակարգի ինտեգրումը։',
      'faq.a19': 'Ճարտարագիտական ​​ցանցերը պատրաստ են պահեստի կառավարման համակարգերի (WMS) միացման համար։',
      'faq.q20': 'Կա՞ արագընթաց ինտերնետ տարածքում։',
      'faq.a20': 'Համալիրն ունի մանրաթելային-օպտիկական ողնաշար։ Յուրաքանչյուր բլոք ստանում է նվիրված ալիք։',
      'faq.q21': 'Կարո՞ղ ենք տեղադրել սեփական սարքավորումներ։',
      'faq.a21': 'Այո, վարձակալն իրավունք ունի տեղադրել սեփական սարքավորումներ՝ տեխնիկական կանոնակարգերի պահպանմամբ։',
      'faq.q22': 'Օգտագործվո՞ւմ է էներգաարդյունավետ լուսավորություն։',
      'faq.a22': 'Բլոկները հագեցած են LED լուսավորությամբ՝ շարժման տվիչներով։ Տանիքի արևային վահանակները կրճատում են էլեկտրական ծանրաբեռնվածությունը։',
      'faq.q23': 'Կարո՞ղ է բլոքը հագեցվել սառնարանային խցիկներով։',
      'faq.a23': 'Տեխնիկապես հնարավոր է համապատասխան ծանրաբեռնվածությամբ և հզորությամբ բլոկներում։ Լուծումը համաձայնեցվում է տեխնիկական ծառայության հետ։',
      'faq.q24': 'Ավտոմատ են արդյո՞ք դարպասները և մուտքի համակարգերը։',
      'faq.a24': 'Ծալովի դարպասներն ունեն էլեկտրական շարժիչ՝ հեռակառավարմամբ։ Մուտքի վերահսկման համակարգն աջակցում է քարտ և բջջային նույնականացուցիչներ։',
      'news.label': 'նորություններ',
      'news.heading': 'Smart Valley Zvartnots Նորություններ',
      'news.desc': 'Հետևեք համալիրի զարգացմանը՝ շինարարության փուլերին, ենթակառուցվածքի գործարկմանը և կայքի կյանքի կարևոր իրադարձություններին։',
      'news.c1.label': 'Համալիրի զարգացում',
      'news.c1.title': 'Սկսվում է նախագծի առաջին փուլը',
      'news.c1.text': 'Համալիրի նախապատրաստական աշխատանքներն ավարտված են։ Նախագիծն անցնում է պահեստային ենթակառուցվածքի շինարարության հաջորդ փուլ։',
      'news.c2.label': 'Ենթակառուցվածք',
      'news.c2.title': 'Շարունակվում է ճարտարագիտական ​​համակարգերի զարգացումը',
      'news.c2.text': 'Ճարտարագիտական ​​համակարգի մշակումն ընթանում է շահագործման ծախսերի կրճատման շեշտադրմամբ։',
      'news.c3.title': 'Էներգաարդյունավետություն',
      'news.c3.text': 'Էներգաարդյունավետ ենթակառուցվածքի նախագծում',
      'news.c4.label': 'Տրանսպորտային ենթակառուցվածքի զարգացում',
      'news.readmore': 'Կարդալ հոդվածը',
      'news.all': 'Բոլոր նորությունները',
      'ticker.dist': 'Բաշխում',
      'ticker.log': 'Լոգիստիկա',
      'ticker.mfg': 'Արտադրություն',
      'ticker.scale': 'Մասշտաբում',
      'contacts.label': 'կոնտակտներ',
      'contacts.heading': 'Կոնտակտային տեղեկություններ',
      'contact.address.label': 'Հասցե',
      'contact.address.value': 'Կոմիտասի պող. 36/1, Պարակար, Արմավիրի մարզ, Հայաստան',
      'contact.location.label': 'Գտնվություն',
      'contact.location.value': 'Զվարթնոց օդանավակայանի մոտ',
      'form.label': 'հետ կանչ պատվիրել',
      'form.heading': 'Ստացեք ձեր բիզնեսին հարմար առաջարկ',
      'form.desc': 'Պատմեք տարածքի, լոգիստիկայի և պահեստավորման պահանջների մասին — մենք կպատրաստենք ձեր գործառնական կարիքներին համապատասխան լուծում։',
      'form.name': 'Անուն',
      'form.company': 'Ընկերություն',
      'form.phone': 'Հեռախոս',
      'form.submit': 'Ուղարկել',
      'form.legal': 'Հայտ ուղարկելով՝ դուք համաձայնվում եք ձեր անձնական տվյալների մշակմանը։',
      'form.err.name': 'Խնդրում ենք մուտքագրել ձեր անունը',
      'form.err.company': 'Խնդրում ենք մուտքագրել ընկերության անունը',
      'form.err.phone': 'Մուտքագրեք ճիշտ հեռախոսահամար',
      'footer.tagline': 'Ժամանակակից պահեստային տարածք՝ ճկուն մոդուլային պահեստավորման համակարգով',
      'footer.nav.complex': 'Համալիր',
      'faq.label2': 'ՀՏՀ',
      'footer.legal.privacy': 'Գաղտնիության քաղաքականություն',
      'footer.legal.personal': 'Համաձայնություն անձնական տվյալների մշակմանը',
      'footer.legal.terms': 'Օգտատիրոջ պայմանագիր',
      'footer.copy': '2026, Smart Valley Zvartnots. Բոլոր իրավունքները պաշտպանված են։',
      'footer.made': 'մշակված',
      'popup.features.label': 'Ինչ է ներառում',
      'popup.close': 'Փակել',
      'success.title': 'Հայտն ուղարկված է',
      'success.desc': 'Մեր մենեջերը կկապվի ձեզ հետ աշխատանքային մեկ օրվա ընթացքում։ Շնորհակալ ենք Smart Valley Zvartnots-ի նկատմամբ հետաքրքրության համար։',
      'success.btn': 'Հիանալի',
      'cookie.text': '<strong>Մենք օգտագործում ենք cookie</strong> Կայքի ճիշտ աշխատանքի և ձեր փորձառության բարելավման համար մենք օգտագործում ենք cookie ֆայլեր։ Կայքի օգտագործումը շարունակելով՝ դուք համաձայնվում եք <a href="#">տվյալների մշակման քաղաքականությանը</a>։',
      'cookie.accept': 'Ընդունել',
      'cookie.decline': 'Մերժել',
      'globe.label': 'Երևան',
      // News page
      'news.page.heading': 'Նորություններ',
      'news.page.count': '4 հոդված',
      'news.list.read': 'Կարդալ',
      'news.list.c1.cat': 'Համալիրի զարգացում',
      'news.list.c1.title': 'Սկսվում է նախագծի առաջին փուլը',
      'news.list.c1.desc': 'Համալիրի նախապատրաստական աշխատանքներն ավարտված են։ Նախագիծն անցնում է հաջորդ փուլ՝ պահեստային ենթակառուցվածքի շինարարություն։',
      'news.list.c2.cat': 'Ենթակառուցվածք',
      'news.list.c2.title': 'Շարունակվում է ճարտարագիտական համակարգերի զարգացումը',
      'news.list.c2.desc': 'Ճարտարագիտական համակարգի մշակումն ընթանում է շահագործման ծախսերի կրճատման և հուսալիության բարձրացման շեշտադրմամբ։',
      'news.list.c3.cat': 'Տեխնոլոգիա',
      'news.list.c3.title': 'Էներգաարդյունավետությունը՝ որպես հիմք',
      'news.list.c3.desc': 'Էներգաարդյունավետ ենթակառուցվածքի նախագծում՝ արևային վահանակներ, ավտոմատ կառավարում և LED լուսավորություն։',
      'news.list.c4.cat': 'Լոգիստիկա',
      'news.list.c4.title': 'Տրանսպորտային ենթակառուցվածքի զարգացում',
      'news.list.c4.desc': 'Smart Valley Zvartnots-ը ձևավորում է տրանսպորտային հանգույց Զվարթնոցի օդանավակայանի մոտ՝ կիսակցված բեռնատարների դոկ-կայաններով։',
      'art.back': 'Բոլոր նորությունները',
      'art.related.heading': 'Կարդացեք նաև',
      'art.related.all': 'Բոլոր նորությունները →',
      'a1.label': 'Համալիրի զարգացում',
      'a1.heading': 'Սկսվում է նախագծի առաջին փուլը',
      'a1.meta.date': '2026 թ. հունիսի 6',
      'a1.meta.read': '5 րոպե ընթերցում',
      'a1.lead': 'Smart Valley Zvartnots-ի կայքի նախապատրաստական աշխատանքներն ավարտվել են ժամանակին։ Նախագիծն անցնում է պահեստային ենթակառուցվածքի շինարարության փուլ՝ հիմնական փուլ, որը կորոշի համալիրի կերպարն ու առաջին վարձակալների հնարավորությունները։',
      'a1.p1': 'Առաջին փուլը ներառում է 12 մոդուլային պահեստային բլոկ` մոտ 50 000 մ² ընդհանուր մակերեսով։ Յուրաքանչյուր բլոկ նախագծված է որպես ինքնուրույն միավոր` սեփական մուտքով, բեռնաթափման գոտիով և պատրաստ ճարտարագիտական ​​ենթակառուցվածքով։',
      'a1.p2': 'Համալիրը գտնվում է Զվարթնոց միջազգային օդանավակայանի անմիջական հարևանությամբ, ինչը ձևավորում է հիմնական լոգիստիկ առավելություն՝ ուղղակի մուտք դեպի միջազգային մատակարարման շղթաներ։',
      'a1.figcaption': 'Smart Valley Zvartnots-ի կայքը նախապատրաստական աշխատանքների ընթացքում',
      'a1.h2.1': 'Ինչ է ներառում առաջին փուլը',
      'a1.p3': 'Առաջին փուլն ընդգրկում է 12 մ-ը կտուրային կառուցվածքներ ունեցող պահեստային բլոկներ, դոկ-կայաններ և ընդհանուր ենթակառուցվածք՝ անցակետ, տեսախցիկ, շրջագծի լուսավորություն։',
      'a1.li1': '12 պահեստային բլոկ` 2 000-ից 6 000 մ² մեկ բլոկ',
      'a1.li2': 'Կիսակցված բեռնատարների և փոքր/միջին տրանսպորտի դոկ-կայաններ',
      'a1.li3': 'Գրասենյակային մեזזանինային գոտիներ բլոկներում',
      'a1.li4': 'Սփրինքլերային հրշեջ` տեղային ակտիվացմամբ',
      'a1.li5': 'Նվիրված էլեկտրական գծեր յուրաքանչյուր բլոկի համար',
      'a1.h2.2': 'Ժամանակացույց և փուլեր',
      'a1.p4': 'Առաջին փուլի շինարարությունը պլանավորված է ավարտել 2026 թ. IV եռամսյակում։ Աշխատանքներն ընթանում են փուլ առ փուլ՝ կրող կառուցվածք, կտուր, ապա ճարտարագիտական ​​համակարգեր։',
      'a1.p5': 'Շինարարության հետ մեկտեղ տեղադրվում են կոմունալ ցանցեր՝ ջուր, կոյուղի, էլեկտրահաղորդիչ։ Մանրաթելային-օպտիկական ենթակառուցվածքը կառուցվում է հիմնական փուլում։',
      'a1.fact1.label': 'մ² ընդհանուր մակերես առաջին փուլում',
      'a1.fact2.label': 'մոդուլային պահեստային բլոկ',
      'a1.fact3.label': '2026 — պլանային ավարտ',
      'a1.h2.3': 'Հաջորդ քայլերը',
      'a1.p6': 'Առաջին փուլի ավարտից հետո կբացվի վարձակալության դիմումների ընդունումը։ Վարձակալության թիմն արդեն խորհրդատրություններ է անցկացնում։ Կապ hաստատեք leasing@sv-zvartnots.com-ի կամ կայքի ձևի միջոցով։',
      'a1.p7': 'Երկրորդ փուլը՝ ենթակառուցվածքի ընդլայնում և լրացուցիչ բլոկների կառուցում, նախատեսված է 2027 թ.-ին։',
      'a1.rel.c1.cat': 'Ենթակառուցվածք',    'a1.rel.c1.title': 'Շարունակվում է ճարտարագիտական համակարգերի զարգացումը',
      'a1.rel.c2.cat': 'Տեխնոլոգիա',        'a1.rel.c2.title': 'Էներգաարդյունավետությունը՝ որպես հիմք',
      'a1.rel.c3.cat': 'Լոգիստիկա',         'a1.rel.c3.title': 'Տրանսպորտային ենթակառուցվածքի զարգացում',
      'a2.label': 'Ենթակառուցվածք',
      'a2.heading': 'Շարունակվում է ճարտարագիտական համակարգերի զարգացումը',
      'a2.meta.date': '2026 թ. հունիսի 6',
      'a2.meta.read': '4 րոպե ընթերցում',
      'a2.lead': 'Առաջին փուլի նախապատրաստման շրջանակներում Smart Valley Zvartnots-ում ընթանում է ճարտարագիտական ​​համակարգերի համալիր մշակում` հուսալիությամբ, ծախսերի կրճատմամբ և մասշտաբման հնարավորությամբ։',
      'a2.p1': 'Ճարտարագիտական մասի նախագծումն ընթացել է ճարտարապետական լուծման հետ զուգահեռ։ Նպատակն է ստեղծել ենթակառուցվածք, որն աշխատում է ֆոնային ռեժիմով և հեշտ ինտեգրվում վարձակալի սարքավորումների հետ։',
      'a2.h2.1': 'Հրդեհային անվտանգության համակարգեր',
      'a2.p2': 'Յուրաքանչյուր պահեստային բլոք հագեցած է սփրինքլերային համակարգով` տեղային ակտիվացման հնարավորությամբ։ Համակարգը ռեակցիա է ցուցաբերում կետայնորեն՝ նվազեցնելով ապրանքի վնասման ռիսկը։',
      'a2.p3': 'Սփրինքլերային գծերը տեղադրվում են շինարարության փուլում, ինչի շնորհիվ վարձակալներն ստանում են պատրաստ համակարգ` լրացուցիչ ներդրումներ չպահանջելով։',
      'a2.h2.2': 'Էլեկտրամատակարարում և ռեզերվ',
      'a2.p4': 'Յուրաքանչյուր բլոք ունի նվիրված էլեկտրական գիծ։ Հիմնական հզորությունը 50 կՎտ է, ըստ պահանջի ընդլայնելի մինչև 150 կՎտ։',
      'a2.p5': 'Կրիտիկական սպառողների համար հնարավոր է ռեզերվ սնուցման կապ։ Բաշխիչ վահանակները հեշտ հասանելի գոտիներում են։',
      'a2.h2.3': 'Ջեռուցում և օդափոխություն',
      'a2.p6': 'Բլոկներն ունեն կենտրոնական ջեռուցում և հարկադիր օդափոխություն։ Ըստ պահանջի հնարավոր է կլիմայական սարքավորումների տեղադրում։',
      'a2.fact1.label': 'առավելագույն հզորություն մեկ բլոկի համար',
      'a2.fact2.label': 'ճարտարագիտական համակարգերի մոնիտորինգ',
      'a2.fact3.label': 'սփրինքլերային ծածկույթ',
      'a2.h2.4': 'Ինտեգրում վարձակալի համակարգերի հետ',
      'a2.p7': 'Ճարտարագիտական ​​ենթակառուցվածքը նախագծված է WMS ինտեգրման համար։ Մանրաթելային-օպտիկական ցանցն ապահովում է նվիրված ալիք` մի քանի մատակարարի կապի հնարավորությամբ։',
      'a2.p8': 'Ծալովի դարպասներն ունեն հեռակառավարվող էլեկտրաշարժ։ Մուտքի վերահսկման համակարգն աջակցում է քարտ և բջջային նույնականացուցիչ։',
      'a2.rel.c1.cat': 'Համալիրի զարգացում', 'a2.rel.c1.title': 'Սկսվում է նախագծի առաջին փուլը',
      'a2.rel.c2.cat': 'Տեխնոլոգիա',         'a2.rel.c2.title': 'Էներգաարդյունավետությունը՝ որպես հիմք',
      'a2.rel.c3.cat': 'Լոգիստիկա',          'a2.rel.c3.title': 'Տրանսպորտային ենթակառուցվածքի զարգացում',
      'a3.label': 'Տեխնոլոգիա',
      'a3.heading': 'Էներգաարդյունավետությունը՝ որպես հիմք',
      'a3.meta.date': '2026 թ. հունիսի 5',
      'a3.meta.read': '4 րոպե ընթերցում',
      'a3.lead': 'ESG-ը ոչ թե պարզ հռչակ է, այլ ճարտարագիտական լուծում, որը Smart Valley Zvartnots-ում ներդրված է ի սկզբանե։ Էներգաարդյունավետությունը կրճատում է վարձակալների ծախսերը և համալիրը դարձնում կայուն։',
      'a3.p1': 'Էներգետիկ հայեցակարգի հիմքն են երեք փոխկապակցված տարրեր՝ արևային գեներացիա, LED լուսավորություն և ավտոմատ կառավարման համակարգ։',
      'a3.h2.1': 'Արևային գեներացիա',
      'a3.p2': 'Առաջին փուլի կտուրներին կտեղադրվի 2 500 մ² ֆոտովոլտաիկ վահանակ։ Արտադրված հոսանքն ուղղվում է լուսավորությանը, դարպասներին և անվտանգության համակարգին։',
      'a3.p3': 'Վահանակներն ընտրվել են տարածաշրջանի կլիմային համապատասխան` բարձր ինսոլյացիա և արևոտ օրերի մեծ թիվ։ Հայաստանն ամենաբարենպաստ արևային ռեսուրս ունեցող երկրների շարքում է։',
      'a3.figcaption': 'Smart Valley Zvartnots-ի արևային ենթակառուցվածքի նախագծում',
      'a3.h2.2': 'Խելացի լուսավորություն',
      'a3.p4': 'Բոլոր պահեստային գոտիներն ունեն LED ֆիքստ` շարժման և լուսավորության տվիչներով։ Անգործ գոտիներում ինտենսիվությունն ավտոմատ կրճատվում է։',
      'a3.p5': 'Համալիրի տարածքը` կայանատեղիներ, ճանապարհներ, բեռնման գոտիներ, նույնպես հագեցած է խելացի արտաքին լուսավորությամբ։',
      'a3.h2.3': 'Կառավարման ավտոմատացում',
      'a3.p6': 'BMS-ն ինտեգրում է կլիմա, լուսավորություն, դարպաս, մուտք և սպառման մոնիտորինգ` մեկ ինտերֆեյսում։',
      'a3.fact1.label': 'էներգասպառման կրճատում',
      'a3.fact2.label': 'մ² արևային վահանակ առաջին փուլում',
      'a3.fact3.label': 'ֆոտովոլտաիկ վահանակների ծառայության ժամկետ',
      'a3.h2.4': 'Առավելությունը վարձակալների համար',
      'a3.p7': 'Էներգասպառման կրճատումն ուղղակիորեն ազդում է ծախսերի վրա։ Բարձր էներգածախս ունեցող վարձակալները ստանում են ցածր բազային սպառման ենթակառուցվածք։',
      'a3.p8': 'ESG-հաշվետու ընկերությունների համար էներգաարդյունավետ պահեստի օգտագործումն բարելավում է մատակարարման շղթայի բնապահպանական ցուցիչները։',
      'a3.rel.c1.cat': 'Համալիրի զարգացում', 'a3.rel.c1.title': 'Սկսվում է նախագծի առաջին փուլը',
      'a3.rel.c2.cat': 'Ենթակառուցվածք',    'a3.rel.c2.title': 'Շարունակվում է ճարտարագիտական համակարգերի զարգացումը',
      'a3.rel.c3.cat': 'Լոգիստիկա',         'a3.rel.c3.title': 'Տրանսպորտային ենթակառուցվածքի զարգացում',
      'a4.label': 'Լոգիստիկա',
      'a4.heading': 'Տրանսպորտային ենթակառուցվածքի զարգացում',
      'a4.meta.date': '2026 թ. հունիսի 4',
      'a4.meta.read': '5 րոպե ընթերցում',
      'a4.lead': 'Տրանսպորտային մատչելիությունը Smart Valley Zvartnots-ի հիմնական մրցակցային առավելություններից է։ Գտնվելով Զվարթնոց օդանավակայանից 3 կմ հեռավորության վրա, համալիրը գրավիչ կետ է միջազգային առևտրով զբաղվող ընկերությունների համար։',
      'a4.p1': 'Տրանսպորտային ենթակառուցվածքը մշակվում է մի քանի ուղղություններով` ներքին ճանապարհներ, մուտքային հանգույցներ, դոկ-կայաններ, կայանատեղիներ։',
      'a4.h2.1': 'Դոկ-կայաններ բոլոր տեսակի տրանսպորտի համար',
      'a4.p2': 'Նախագիծն ունի երկու տեսակի դոկ-կայան՝ ծանրաբեռ կիսակցված բեռնատարների և փոքր/միջին կոմերցիոն տրանսպորտի համար։',
      'a4.p3': 'Կիսակցված բեռնատարների դոկ-կայաններն ունեն նիveliruyushchy հարթակներ՝ կայուն ստեղծումն ապահովելու համար։ Սպասման գոտիները կազմակերպված են ներքին երթևեկության անխափան ապահովման համար։',
      'a4.figcaption': 'Բեռնման-բեռնաթափման գոտիներ համալիրի առաջին փուլում',
      'a4.h2.2': 'Տրանսպորտային հոսքերի տարանջատում',
      'a4.p4': 'Հիմնական նախագծային նպատակներից մեկն է բեռնային մուտքերի և հետիոտն գոտիների ամբողջական տարանջատումը' +
              '՝ հատ են տարբեր անցակետերի միջոցով։',
      'a4.p5': 'Ներքին ճանապարհները դիմադրում են ծանր բեռնատար տեխնիկայի բեռին և բավականաչափ լայն են երկու կիսակցված բեռնատারների հանդիպելու համար։',
      'a4.h2.3': 'Կապ օդանավակայանի և քաղաքի հետ',
      'a4.p6': 'Հեռավորությունը Զվարթնոց օդանավակայան կազմում է մոտ 3 կմ, ինչն ապահովում է ուղղակի մուտք օդային բեռնային գործառնությունների։ Երևանի միջոցով անցնող ավիա բեռնաշրջանառությունն աճում է. երթուղային ցանցն ընդգրկում է Եվրոպա, Ասիա, Մերձավոր Արևելք։',
      'a4.p7': 'Համալիրն ուղղակիորեն հարում է Հայաստանի մարզերն ու հարևան երկրները` Վրաստան, Իրան, Թուրքիա կապող հիմնական ճանապարհներին։',
      'a4.fact1.label': 'Զվարթնոց օդանավակայանից',
      'a4.fact2.label': 'բեռնման դոկ-կայանի տեսակ',
      'a4.fact3.label': 'վարձակալի մուտք',
      'a4.h2.4': 'Կայանատեղի և սպասման գոտիներ',
      'a4.p8': 'Նախատեսված են առանձին կայանատեղիներ ավտոմեքենաների և բեռնատարների համար։',
      'a4.p9': 'Բոլոր տրանսպորտային գոտիները ծածկված են տեսախցիկներով։ Հ/Ն համարանիշները ավտոմատ ֆիքսվում են մուտքի/ելքի ժամանակ։',
      'a4.rel.c1.cat': 'Համալիրի զարգացում', 'a4.rel.c1.title': 'Սկսվում է նախագծի առաջին փուլը',
      'a4.rel.c2.cat': 'Ենթակառուցվածք',    'a4.rel.c2.title': 'Շարունակվում է ճարտարագիտական համակարգերի զարգացումը',
      'a4.rel.c3.cat': 'Տեխնոլոգիա',        'a4.rel.c3.title': 'Էներգաարդյունավետությունը՝ որպես հիմք',
    },
  };

  function setLang(lang) {
    if (!T[lang]) return;
    window.__svzLang = lang;
    localStorage.setItem('svz-lang', lang);
    document.documentElement.lang = lang;

    // Update title
    document.title = T[lang]['meta.title'] || document.title;

    // data-i18n: textContent
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (T[lang][key] !== undefined) el.textContent = T[lang][key];
    });

    // data-i18n-html: innerHTML
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.dataset.i18nHtml;
      if (T[lang][key] !== undefined) el.innerHTML = T[lang][key];
    });

    // data-i18n-placeholder: placeholder attribute
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.dataset.i18nPlaceholder;
      if (T[lang][key] !== undefined) el.placeholder = T[lang][key];
    });

    // data-i18n-aria: aria-label attribute
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const key = el.dataset.i18nAria;
      if (T[lang][key] !== undefined) el.setAttribute('aria-label', T[lang][key]);
    });

    // Update lang switcher buttons active state
    document.querySelectorAll('.nav__lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Update globe label text if globe is initialized
    if (window.__svzGlobeLabel) {
      window.__svzGlobeLabel.textContent = T[lang]['globe.label'] || 'Ереван';
    }
    // Update country labels
    if (window.__svzCountryEls) {
      window.__svzCountryEls.forEach(c => {
        c.el.textContent = c.names[lang] || c.names.ru;
      });
    }
  }

  function initLang() {
    const saved = localStorage.getItem('svz-lang');
    const lang = (saved && T[saved]) ? saved : 'en';
    setLang(lang);
  }

  // Bind all lang buttons (nav + mobile)
  document.querySelectorAll('.nav__lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });

  // Expose globally
  window.svzSetLang = setLang;
  window.__svzT = T;

  initLang();
})();

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

  function startGlobe() {
    // Canvas
    const canvas = document.createElement('canvas');
    canvas.style.cssText = 'display:block;width:100%;height:100%;cursor:grab;opacity:0;transition:opacity 1.2s ease;touch-action:none';
    container.style.position = 'relative';
    container.appendChild(canvas);

    // Yerevan label
    const label = document.createElement('div');
    const lang = window.__svzLang || 'ru';
    const labelTexts = { ru: 'Ереван', en: 'Yerevan', hy: 'Երևան' };
    label.textContent = labelTexts[lang] || 'Ереван';
    window.__svzGlobeLabel = label;
    label.style.cssText = [
      'position:absolute',
      'background:#1a273f',
      'color:#fff',
      'font-size:11px',
      'font-weight:600',
      'letter-spacing:.08em',
      'text-transform:uppercase',
      'padding:3px 8px',
      'border-radius:3px',
      'box-shadow:0 2px 8px rgba(0,0,0,.2)',
      'pointer-events:none',
      'transform:translate(-50%,-130%)',
      'opacity:0',
      'transition:opacity .35s',
      'white-space:nowrap',
      'font-family:inherit',
    ].join(';');
    container.appendChild(label);

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w   = Math.round(container.getBoundingClientRect().width || container.offsetWidth || 500);

    // Cartesian precompute — matches cobe's own lat/lng-to-sphere convention
    // so labels line up with the dot map instead of floating off it.
    function toCartesian(lat, lng) {
      const latR = lat * Math.PI / 180, lngR = lng * Math.PI / 180 - Math.PI;
      const a = Math.cos(latR);
      return {
        x: -a * Math.cos(lngR),
        y: Math.sin(latR),
        z: a * Math.sin(lngR),
      };
    }

    // Project point to canvas coords given current phi/theta (inverse of
    // cobe's rotation matrix), scaled by the 0.8 sphere radius cobe renders at.
    function projectPoint(pt, phi, theta) {
      const cphi = Math.cos(phi), sphi = Math.sin(phi);
      const cth  = Math.cos(theta), sth  = Math.sin(theta);
      const vx = cphi * pt.x + sphi * pt.z;
      const vy = sphi * sth * pt.x + cth * pt.y - cphi * sth * pt.z;
      const vz = -sphi * cth * pt.x + sth * pt.y + cphi * cth * pt.z;
      const bx = 0.8 * vx, by = 0.8 * vy;
      return { sx: (bx + 1) / 2 * w, sy: (1 - by) / 2 * w, vis: vz };
    }

    // Yerevan
    const yvPt = toCartesian(40.173811, 44.457587);

    // Country labels
    const COUNTRY_DEFS = [
      { names: { ru: 'Россия',         en: 'Russia',      hy: 'Ռուսաստան'     }, lat: 57,  lng: 40  },
      { names: { ru: 'Германия',       en: 'Germany',     hy: 'Գերմանիա'      }, lat: 51,  lng: 10  },
      { names: { ru: 'Великобритания', en: 'UK',          hy: 'Մեծ Բրիտանիա' }, lat: 52,  lng: -2  },
      { names: { ru: 'Турция',         en: 'Turkey',      hy: 'Թուրքիա'       }, lat: 39,  lng: 35  },
      { names: { ru: 'ОАЭ',           en: 'UAE',         hy: 'ԱՄԷ'           }, lat: 24,  lng: 54  },
      { names: { ru: 'Индия',          en: 'India',       hy: 'Հնդկաստան'     }, lat: 22,  lng: 78  },
      { names: { ru: 'Китай',          en: 'China',       hy: 'Չինաստան'      }, lat: 36,  lng: 103 },
      { names: { ru: 'США',            en: 'USA',         hy: 'ԱՄՆ'           }, lat: 38,  lng: -96 },
      { names: { ru: 'Грузия',         en: 'Georgia',     hy: 'Վրաստան'       }, lat: 42,  lng: 43  },
      { names: { ru: 'Казахстан',      en: 'Kazakhstan',  hy: 'Ղազախստան'     }, lat: 48,  lng: 67  },
    ];

    const countryEls = COUNTRY_DEFS.map(c => {
      const el = document.createElement('div');
      const curLang = window.__svzLang || 'ru';
      el.textContent = c.names[curLang] || c.names.ru;
      el.style.cssText = [
        'position:absolute',
        'color:#1a273f',
        'background:rgba(255,255,255,.88)',
        'font-size:10px',
        'font-weight:700',
        'letter-spacing:.05em',
        'text-transform:uppercase',
        'padding:2px 6px',
        'border-radius:3px',
        'box-shadow:0 1px 4px rgba(0,0,0,.12)',
        'pointer-events:none',
        'transform:translate(-50%,-50%)',
        'opacity:0',
        'transition:opacity .4s',
        'white-space:nowrap',
        'font-family:inherit',
      ].join(';');
      container.appendChild(el);
      return { el, pt: toCartesian(c.lat, c.lng), names: c.names };
    });

    // Expose country els for lang switch updates
    window.__svzCountryEls = countryEls;

    let phi         = 0.8;
    let phiOffset   = 0;
    let thetaOffset = 0;
    let dragPhi     = 0;
    let dragTheta   = 0;
    let isPaused    = false;
    let pointerStart = null;

    const globe = window._createGlobe(canvas, {
      devicePixelRatio: dpr,
      width:  w * dpr,
      height: w * dpr,
      phi,
      theta: 0.2,
      dark: 0,
      diffuse: 1.5,
      mapSamples: 16000,
      mapBrightness: 10,
      baseColor:   [1, 1, 1],
      markerColor: [249 / 255, 88 / 255, 56 / 255],
      glowColor:   [0.94, 0.93, 0.91],
      markers: [
        { location: [40.173811, 44.457587], size: 0.04 },
      ],
      onRender(state) {
        if (!isPaused) phi += 0.003;
        const totalPhi   = phi + phiOffset + dragPhi;
        const totalTheta = 0.2 + thetaOffset + dragTheta;
        state.phi   = totalPhi;
        state.theta = totalTheta;

        // Collision avoidance: each label claims a padded box; a label only
        // shows if its box is free, so tight clusters (Yerevan/Georgia/
        // Turkey…) don't render on top of each other.
        const placedBoxes = [];
        const LABEL_PAD = 5;
        function claimBox(cx, cy, w, h, anchoredAbove) {
          const box = anchoredAbove
            ? { left: cx - w / 2 - LABEL_PAD, right: cx + w / 2 + LABEL_PAD, top: cy - 1.3 * h - LABEL_PAD, bottom: cy - 0.3 * h + LABEL_PAD }
            : { left: cx - w / 2 - LABEL_PAD, right: cx + w / 2 + LABEL_PAD, top: cy - h / 2 - LABEL_PAD, bottom: cy + h / 2 + LABEL_PAD };
          for (const b of placedBoxes) {
            if (box.left < b.right && box.right > b.left && box.top < b.bottom && box.bottom > b.top) return false;
          }
          placedBoxes.push(box);
          return true;
        }

        // Yerevan label — always highest priority
        const p = projectPoint(yvPt, totalPhi, totalTheta);
        label.style.left = p.sx + 'px';
        label.style.top  = p.sy + 'px';
        const yvShown = p.vis > 0.05 && claimBox(p.sx, p.sy, label.offsetWidth, label.offsetHeight, true);
        label.style.opacity = yvShown ? String(Math.min(1, p.vis * 3)) : '0';

        // Country labels — most front-facing ones win collisions
        countryEls
          .map(c => ({ c, cp: projectPoint(c.pt, totalPhi, totalTheta) }))
          .sort((a, b) => b.cp.vis - a.cp.vis)
          .forEach(({ c, cp }) => {
            c.el.style.left = cp.sx + 'px';
            c.el.style.top  = cp.sy + 'px';
            const shown = cp.vis > 0.05 && claimBox(cp.sx, cp.sy, c.el.offsetWidth, c.el.offsetHeight, false);
            c.el.style.opacity = shown ? String(Math.min(1, (cp.vis - 0.05) * 4)) : '0';
          });
      },
    });

    setTimeout(() => { canvas.style.opacity = '1'; }, 100);

    canvas.addEventListener('pointerdown', e => {
      pointerStart = { x: e.clientX, y: e.clientY };
      isPaused = true;
      canvas.style.cursor = 'grabbing';
    });
    window.addEventListener('pointermove', e => {
      if (!pointerStart) return;
      dragPhi   = (e.clientX - pointerStart.x) / 300;
      dragTheta = (e.clientY - pointerStart.y) / 1000;
    }, { passive: true });
    window.addEventListener('pointerup', () => {
      if (!pointerStart) return;
      phiOffset   += dragPhi;
      thetaOffset += dragTheta;
      dragPhi = dragTheta = 0;
      pointerStart = null;
      isPaused = false;
      canvas.style.cursor = 'grab';
    }, { passive: true });
  }

  const obs = new IntersectionObserver(entries => {
    if (!entries[0].isIntersecting) return;
    obs.disconnect();
    import('https://cdn.jsdelivr.net/npm/cobe@0.6.3/+esm')
      .then(m => { window._createGlobe = m.default; startGlobe(); })
      .catch(e => console.error('cobe load error:', e));
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

    const t = (window.__svzT && window.__svzT[window.__svzLang || 'ru']) || {};

    if (!nameInp.value.trim()) {
      showError(nameInp, t['form.err.name'] || 'Пожалуйста, введите ваше имя');
      valid = false;
    } else {
      markSuccess(nameInp);
    }

    const digits = phoneInp.value.replace(/\D/g, '');
    if (!phoneInp.value.trim()) {
      showError(phoneInp, t['form.err.phone'] || 'Введите корректный номер телефона');
      valid = false;
    } else if (digits.length < 7) {
      showError(phoneInp, t['form.err.phone'] || 'Введите корректный номер телефона');
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
    ru: {
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
        title: 'Универсальный док',
        desc: 'Подходит для обслуживания еврофур, а также малого и среднего коммерческого транспорта.',
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
          { name: 'Офис внутри блока',         text: 'Административные помещения располагаются непосредственно рядом со складской зоной.' },
          { name: 'Антресольные этажи',        text: 'Дополнительный уровень для рабочих мест, переговорных комнат или хранения.' },
          { name: 'Дополнительные площади',    text: 'Зоны комплектации, упаковки, сервисные участки под задачи арендатора.' },
          { name: 'Масштабирование без переезда', text: 'Гибкая структура помещений адаптируется под рост бизнеса без реконфигурации объекта.' },
        ]
      },
      security: {
        img: 'popup-infra-8.webp',
        title: 'Защита территории, инфраструктуры и складских операций',
        desc: 'Комплекс оснащён многоуровневой системой безопасности, обеспечивающей контроль доступа, мониторинг территории и защиту имущества арендаторов в круглосуточном режиме.',
        features: [
          { name: 'Охраняемая территория',   text: 'Вся территория комплекса ограждена и находится под постоянным контролем службы безопасности.' },
          { name: 'Контроль доступа',        text: 'Въезд и проход через КПП с системами контроля доступа.' },
          { name: 'Видеонаблюдение',         text: 'Ключевые зоны, транспортные маршруты и доки под круглосуточным видеомониторингом.' },
          { name: 'Доступ 24/7',             text: 'Арендаторы могут работать в удобном режиме с круглосуточным доступом к своим блокам.' },
          { name: 'Инженерная безопасность', text: 'Современные системы мониторинга для своевременного реагирования на внештатные ситуации.' },
          { name: 'Защита бизнеса',          text: 'Надёжное хранение товаров и контроль операционных процессов.' },
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
          { name: 'Инженерный контроль',   text: 'Системы мониторинга поддерживают безопасную эксплуатацию оборудования.' },
        ]
      },
      energy: {
        img: 'popup-infra-12.webp', // RU: original Russian diagram
        title: 'Инфраструктура для снижения эксплуатационных затрат',
        desc: 'Комплекс предусматривает энергоэффективные решения, которые помогают оптимизировать обслуживание складских блоков и снижать операционную нагрузку на арендаторов.',
        features: [
          { name: 'Солнечные панели',             text: 'Дополнительный источник энергии для поддержки инфраструктуры комплекса.' },
          { name: 'Автоматизация обслуживания',   text: 'Системы управления контролируют работу инженерных процессов.' },
          { name: 'Автоматизация безопасности',   text: 'Интеграция систем контроля снижает нагрузку на эксплуатацию.' },
          { name: 'Низкий OPEX',                  text: 'Энергоэффективность и автоматизация сокращают текущие расходы на обслуживание.' },
        ]
      },
    },
    en: {
      modular: {
        img: 'popup-infra-2.webp',
        title: 'A dedicated space for every tenant',
        desc: 'Each warehouse unit is designed as an independent space — with its own entrance, loading zone, optional office area, and ready-to-use infrastructure for day-to-day operations.',
        features: [
          { name: 'Private entrance',     text: 'Separate access for staff, clients, and logistics teams.' },
          { name: 'Loading zone',         text: 'Dedicated area for receiving and shipping goods within your own unit.' },
          { name: 'In-unit office',       text: 'Administrative space right next to your warehouse operations.' },
          { name: 'Mezzanine level',      text: 'An extra floor for office use, technical needs, or additional storage.' },
          { name: 'Ready infrastructure', text: 'Units can be adapted to your business format without major reconstruction.' },
        ]
      },
      docks: {
        img: 'popup-infra-4.webp',
        title: 'Universal dock',
        desc: 'Suitable for handling Euro semi-trailers as well as small and medium commercial vehicles.',
        features: [
          { name: 'Semi-truck docks',      text: 'Full-size docks built for heavy transport and large cargo volumes.' },
          { name: 'Light vehicle access',  text: 'Separate zones for city deliveries and regular distribution runs.' },
          { name: 'Separated flow',        text: 'Different transport scenarios can run independently without cross-traffic.' },
          { name: 'Efficient unloading',   text: 'Loading and unloading workflows adapt to each tenant\'s business model.' },
        ]
      },
      flexible: {
        img: 'popup-infra-6.webp',
        title: 'Space that adapts to your workflow',
        desc: 'The interior of each warehouse unit can be configured to match specific operational needs — combining storage, office space, mezzanines, and functional zones in a single block.',
        features: [
          { name: 'In-unit office',          text: 'Administrative space positioned right next to the warehouse floor.' },
          { name: 'Mezzanine floors',        text: 'Extra level for workstations, meeting rooms, or additional storage.' },
          { name: 'Flexible zones',          text: 'Order picking, packing, and service areas arranged to your spec.' },
          { name: 'Scale without moving',    text: 'Modular layout grows with your business without full reconfiguration.' },
        ]
      },
      security: {
        img: 'popup-infra-8.webp',
        title: 'Multi-layer protection for your operations',
        desc: 'The complex is equipped with a multi-tier security system — covering access control, perimeter monitoring, and around-the-clock protection of tenant assets.',
        features: [
          { name: 'Secured perimeter',     text: 'The entire site is fenced and under constant guard.' },
          { name: 'Access control',        text: 'Entry via checkpoints with badge and vehicle control systems.' },
          { name: 'CCTV coverage',         text: 'Key areas, transport routes, and docks monitored 24/7.' },
          { name: '24/7 access',           text: 'Tenants can operate on their own schedule with round-the-clock access.' },
          { name: 'Engineering safety',    text: 'Monitoring systems enable fast response to any incident.' },
          { name: 'Asset protection',      text: 'Reliable storage conditions and operational process oversight.' },
        ]
      },
      engineering: {
        img: 'popup-infra-10.webp',
        title: 'Targeted fire suppression to protect stock',
        desc: 'Warehouse units are equipped with modern sprinkler systems that activate locally at the point of incident — minimizing damage to goods in the rest of the facility.',
        features: [
          { name: 'Sprinkler grid',         text: 'Pipe and nozzle system installed throughout warehouse zones.' },
          { name: 'Zone-level activation',  text: 'Fire suppression triggers only in the affected area.' },
          { name: 'Stock protection',       text: 'Localized response avoids unnecessary water damage elsewhere.' },
          { name: 'Engineering oversight',  text: 'Monitoring systems keep equipment in safe operating condition.' },
        ]
      },
      energy: {
        img: 'popup-infra-12-en.png',
        title: 'Infrastructure built to lower operating costs',
        desc: 'The complex integrates energy-efficient systems designed to reduce maintenance overhead and keep operational costs low for tenants.',
        features: [
          { name: 'Solar panels',              text: 'On-site renewable energy to support facility infrastructure.' },
          { name: 'Maintenance automation',    text: 'Smart management systems keep engineering processes in check.' },
          { name: 'Security automation',       text: 'Integrated monitoring reduces manual oversight burden.' },
          { name: 'Low OPEX',                  text: 'Energy efficiency and automation cut ongoing service costs.' },
        ]
      },
    },
    hy: {
      modular: {
        img: 'popup-infra-2.webp',
        title: 'Անհատական տարածք յուրաքանչյուր վարձակալի համար',
        desc: 'Պահեստային յուրաքանչյուր բլոկ նախագծված է որպես ինքնուրույն միավոր՝ սեփական մուտքով, բեռնման գոտիով, գրասենյակային տարածքով և օրական աշխատանքի համար պատրաստ ենթակառուցվածքով։',
        features: [
          { name: 'Սեփական մուտք',         text: 'Անջատ մուտք աշխատակիցների, հաճախորդների և լոգիստիկ թիմի համար։' },
          { name: 'Բեռնման գոտի',           text: 'Ապրանքների ընդունման և բեռնման համար նախատեսված տարածք։' },
          { name: 'Գրասենյակ ներսում',      text: 'Վարչական տարածք՝ անմիջապես պահեստի կողքին։' },
          { name: 'Մեззանին հարկ',          text: 'Լրացուցիչ հարկ գրասենյակի, տեխնիկական կամ պահեստային կարիքների համար։' },
          { name: 'Պատրաստ ենթակառուցվածք', text: 'Բլոկը կարող է հարմարեցվել բիզնեսի ձևաչափին մեծ վերակառուցումից։' },
        ]
      },
      docks: {
        img: 'popup-infra-4.webp',
        title: 'Ունիվերսալ դոկ',
        desc: 'Հարմար ե Եվրոփուրնի, ինչպես նաև փոքր և միջին կոմերցիոնական տրանսպորտի սպասարկման համար։',
        features: [
          { name: 'Կիսակցված բեռնատարների դոկ', text: 'Ծանրաբեռ տրանսպորտի և մեծ ծավալների համար նախատեսված դոկ-կայաններ։' },
          { name: 'Փոքր տրանսպորտ',             text: 'Քաղաքային առաքումների և կանոնավոր բաշխման համար առանձին գոտիներ։' },
          { name: 'Հոսքերի տարանջատում',         text: 'Տրանսպորտային տարբեր սցենարներ կազմակերպվում են առանց հատվելու։' },
          { name: 'Արդյունավետ բեռնաթափում',     text: 'Բեռնման-բեռնաթափման գործընթացները հարմարեցվում են վարձակալի ձևաչափին։' },
        ]
      },
      flexible: {
        img: 'popup-infra-6.webp',
        title: 'Տարածք, որը հարմարվում է ձեր բիզնեսին',
        desc: 'Պահեստային բլոկների ներքին հատակագիծը կարող է կազմաձևվել կոնկրետ վարձակալի կարիքներին՝ համատեղելով պահեստ, գրասենյակ, մեززանին և ֆունկցիոնալ գոտիներ։',
        features: [
          { name: 'Ներբլոկային գրասենյակ',      text: 'Վարչական տարածք անմիջապես պահեստային հատակի կողքին։' },
          { name: 'Մեززանին հարկ',               text: 'Լրացուցիչ հարկ աշխատատեղերի, հանդիպումների կամ պահեստի համար։' },
          { name: 'Ճկուն գոտիներ',              text: 'Պատվերների հավաքման, փաթեթավորման և սպասարկման տարածքներ։' },
          { name: 'Տեղափոխությամբ չմեծանալ',    text: 'Մոդուլային կառուցվածքն աճում է բիզնեսի հետ՝ առանց ամբողջական վերակազմաձևման։' },
        ]
      },
      security: {
        img: 'popup-infra-8.webp',
        title: 'Բազմաշերտ պաշտպանություն ձեր գործառնությունների համար',
        desc: 'Համալիրը հագեցած է բազմաշերտ անվտանգության համակարգով, որն ապահովում է մուտքի վերահսկում, պարագծի մոնիտորինգ և վարձակալների ունեցվածքի շուրջօրյա պաշտպանություն։',
        features: [
          { name: 'Պահպանվող պարագիծ',       text: 'Ողջ տարածքը ցանկապատված է և շուրջօրյա հսկողության տակ։' },
          { name: 'Մուտքի վերահսկում',        text: 'Մուտքը` անցակետերով, կրծքանշանների և տրանսպորտային վերահսկման համակարգով։' },
          { name: 'Տեսախցիկային ծածկույթ',   text: 'Հիմնական գոտիները, տրանսպորտային երթուղիները և դոկերը 24/7 մոնիտորինգի տակ են։' },
          { name: '24/7 մուտք',               text: 'Վարձակալները կարող են աշխատել ցանկացած ժամ ` շուրջօրյա մուտքով։' },
          { name: 'Ճարտարագիտական անվտանգություն', text: 'Մոնիտորինգի համակարգերն ապահովում են արագ արձագանք ցանկացած ինֆցիդենտի։' },
          { name: 'Ակտիվների պաշտպանություն', text: 'Ապրանքների հուսալի պահպանություն և գործառնական գործընթացների վերահսկում։' },
        ]
      },
      engineering: {
        img: 'popup-infra-10.webp',
        title: 'Տեղային հրշեջ համակարգ ապրանքների պաշտպանության համար',
        desc: 'Պահեստային բլոկները հագեցված են ժամանակակից սփրինքլերային համակարգերով, որոնք ակտիվանում են ինֆցիդենտի վայրում՝ նվազագույնի հասցնելով վնասը շրջակա գոտիներում։',
        features: [
          { name: 'Սփրինքլերային ցանց',     text: 'Խողովակների և ցայտիչների համակարգ` պահեստային գոտիներում։' },
          { name: 'Գոտիային ակտիվացում',    text: 'Հրշեջ ռեակցիան կետայնորեն գործում է ազդեցության գոտում։' },
          { name: 'Ապրանքի պաշտպանություն', text: 'Տեղային ռեակցիան կանխում է ավելորդ ջրային վնասը ողջ շենքում։' },
          { name: 'Ճարտարագիտական հսկողություն', text: 'Մոնիտորինգի համակարգերն ապահովում են սարքավորումների անվտանգ շահագործում։' },
        ]
      },
      energy: {
        img: 'popup-infra-12-hy.png',
        title: 'Ենթակառուցվածք` շահագործման ծախսերի կրճատման համար',
        desc: 'Համալիրը ինտեգրում է էներգաարդյունավետ լուծումներ, որոնք նվազեցնում են սպասարկման բեռը և պահում են գործառնական ծախսերը ցածր մակարդակի վրա։',
        features: [
          { name: 'Արևային վահանակներ',          text: 'Վայրում վերականգնվող էներգիա` ենթակառուցվածքի սպասարկման համար։' },
          { name: 'Սպասարկման ավտոմատացում',     text: 'Խելացի կառավարման համակարգեր` ճարտարագիտական գործընթացների համար։' },
          { name: 'Անվտանգության ավտոմատացում',  text: 'Ինտեգրված մոնիտորինգ` ձեռքի հսկողության կրճատման համար։' },
          { name: 'Ցածր OPEX',                   text: 'Էներգաարդյունավետությունն ու ավտոմատացումը կրճատում են ընթացիկ ծախսերը։' },
        ]
      },
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
    const lang = window.__svzLang || 'ru';
    const d = (POPUP_DATA[lang] || POPUP_DATA.ru)[id];
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
