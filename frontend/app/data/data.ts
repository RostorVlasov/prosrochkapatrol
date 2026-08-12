import type { IconName } from '~/components/ui/AppIcon.vue'
import {
    TELEGRAM_CHANNEL,
    TELEGRAM_FOUNDER,
    VK_GROUP,
    VK_FOUNDER,
    TIKTOK,
    EMAIL,
    PHONE,
    TELEGRAM_CHANNEL_PLACEHOLDER,
    VK_GROUP_PLACEHOLDER,
    TIKTOK_PLACEHOLDER,
    TELEGRAM_FOUNDER_PLACEHOLDER,
    VK_FOUNDER_PLACEHOLDER,
    EMAIL_PLACEHOLDER,
    PHONE_PLACEHOLDER,
} from '~/data/social'

import type {
    StatCardProps,
    StepCardProps,
    TeamMemberCardProps,
    TeamInfoCardProps,
    BenefitRowProps,
    SocialLinkProps,
    ContactButtonProps,
    PrincipleProps,
    TestimonialCardProps,
} from '~/types/props.types'
import { BADGES_DOC_URL, DECLARATION_DOC_URL, PUBLIC_POLICY_DOC_URL, REGULATION_DOC_URL } from './docs'

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────

export interface LegalItem {
    label: string | null
    text: string
}

export interface LegalBlock {
    icon: IconName
    title: string
    note: string
    items: LegalItem[]
}

export interface FeatureBlockData {
    icon: IconName
    title: string
    bgClass: string
    glowClass: string
    iconBgClass: string
    iconBgHoverClass: string
    iconClass: string
    bodyClass: string
    body: string
}

// ─────────────────────────────────────────────
// Home — Feature Blocks
// ─────────────────────────────────────────────

export const featureBlocksTop: FeatureBlockData[] = [
    {
        icon: 'magnifyingGlass',
        title: 'Открытый мониторинг',
        bgClass: 'bg-gray-500 text-white',
        glowClass: 'bg-beige-500/20',
        iconBgClass: 'bg-beige-500/20',
        iconBgHoverClass: 'group-hover:bg-beige-500/40',
        iconClass: 'text-beige-100',
        bodyClass: 'text-beige-100/80',
        body: 'Мы заходим в магазины как <span class="italic">обычные покупатели</span>, обращаем внимание на сроки годности, условия хранения и чистоту. Каждый визит сопровождается фотофиксацией.',
    },
    {
        icon: 'chatBubble',
        title: 'Диалог прежде всего',
        bgClass: 'bg-beige-500 text-white',
        glowClass: 'bg-white/10',
        iconBgClass: 'bg-white/15',
        iconBgHoverClass: 'group-hover:bg-white/25',
        iconClass: 'text-white',
        bodyClass: 'text-white/90',
        body: 'Замечаем недочёт? Сначала спокойно обсуждаем его с администрацией и даём рекомендации. В 98% случаев проблема решается на месте — без конфликтов и жалоб.',
    },
]

export const featureBlocksBottom: FeatureBlockData[] = [
    {
        icon: 'documentText',
        title: 'Объективные обзоры',
        bgClass: 'bg-slate text-white',
        glowClass: 'bg-beige-500/20',
        iconBgClass: 'bg-beige-500/20',
        iconBgHoverClass: 'group-hover:bg-beige-500/40',
        iconClass: 'text-beige-100',
        bodyClass: 'text-beige-100/80',
        body: 'Все визиты мы описываем <span class="font-semibold">открыто, с фотофиксацией</span> и честным рейтингом. Жители Астрахани видят реальную картину и делают осознанный выбор магазина.',
    },
    {
        icon: 'scale',
        title: 'В рамках закона',
        bgClass: 'bg-beige-100 text-slate border border-beige-500/20',
        glowClass: 'bg-beige-500/10',
        iconBgClass: 'bg-beige-500/15',
        iconBgHoverClass: 'group-hover:bg-beige-500/30',
        iconClass: 'text-beige-500',
        bodyClass: 'text-gray-500',
        body: 'Каждый наш шаг опирается на <span class="italic">Конституцию РФ</span>, закон о защите прав потребителей и правила продажи товаров. Мы действуем как обычные граждане — без претензий на властные полномочия.',
    },
]

// ─────────────────────────────────────────────
// Home — Stats
// ─────────────────────────────────────────────


export const reportSteps: StepCardProps[] = [
    {
        number: 1,
        title: 'Напишите нам',
        desc: 'Отправьте сообщение в Telegram или через форму на сайте: укажите название магазина, адрес и суть наблюдения.',
    },
    {
        number: 2,
        title: 'Мы проверяем*',
        desc: 'В течение 30 дней наш волонтёр посещает магазин, фиксирует ситуацию и обсуждает её с администрацией.',
    },
    {
        number: 3,
        title: 'Публикуем результат',
        desc: 'Отчёт с фото и рейтингом появляется на сайте и в наших каналах. Вы видите, что изменилось.',
    },
]

// ─────────────────────────────────────────────
// Home — Process Steps
// ─────────────────────────────────────────────

export const processSteps = [
    { icon: 'userPlus' as const,          title: 'Визит',      desc: 'Заходим в магазин как обычные покупатели. При возможности представляемся администрации.' },
    { icon: 'cameraHero' as const,        title: 'Наблюдение', desc: 'Осматриваем полки, фиксируем сроки годности и условия хранения. Делаем фото для отчёта.' },
    { icon: 'chatBubbleSingle' as const,  title: 'Диалог',     desc: 'Делимся наблюдениями с сотрудниками, даём рекомендации. В большинстве случаев всё решается на месте.' },
    { icon: 'globeAlt' as const,          title: 'Обзор',      desc: 'В течение 30 дней публикуем открытый отчёт с фото и рейтингом — для всех жителей Астрахани.' },
]

// ─────────────────────────────────────────────
// Home — Principles
// ─────────────────────────────────────────────

export const principles: PrincipleProps[] = [
    { icon: 'scale',            title: 'Законность',        desc: 'Строго в рамках Конституции РФ и закона о защите прав потребителей' },
    { icon: 'checkCircle',      title: 'Честность',         desc: 'Публикуем только то, что видели своими глазами — без домыслов' },
    { icon: 'eye',              title: 'Прозрачность',      desc: 'Все отчёты, методика и документы открыты для всех желающих' },
    { icon: 'handRaised',       title: 'Безопасность',      desc: 'Здоровье семей — главный приоритет каждого нашего визита' },
    { icon: 'chatBubbleLeft',   title: 'Партнёрство',       desc: 'Сначала диалог с администрацией, а не жалобы и конфликты' },
    { icon: 'arrowPath',        title: 'Соразмерность',     desc: 'Реакция соответствует серьёзности нарушения — без лишней эскалации' },
    { icon: 'userHero',         title: 'Уважение',          desc: 'Не снимаем и не публикуем лица сотрудников без их согласия' },
    { icon: 'bolt',             title: 'Независимость',     desc: 'Не принимаем финансирования, которое влияло бы на оценки' },
    { icon: 'chatBubble',       title: 'Диалог',            desc: 'Открыты к обратной связи и готовы исправлять собственные ошибки' },
    { icon: 'globeAlt',         title: 'Общественная польза', desc: 'Цель — среда безопасных и честных магазинов для всей Астрахани' },
]

// ─────────────────────────────────────────────
// Home — Testimonials
// ─────────────────────────────────────────────

export const testimonials: TestimonialCardProps[] = [
    {
        text: 'Очень приятно, что кто-то реально следит за качеством. Убрали просроченные грибы и помятые банки в соседнем магазине. Спасибо!',
        author: 'Ирина К.',
        location: 'Кировский район',
    },
    {
        text: 'Поделилась наблюдением про просроченный йогурт днём. К вечеру всё убрали и даже пост сделали. Теперь доверяю этому магазину намного больше.',
        author: 'Мария Л.',
        location: 'Советский район',
    },
    {
        text: 'Как папа с годовалым малышом скажу: спасибо, что обращаете внимание на молочку и детское питание. Для нас это вопрос здоровья сына.',
        author: 'Андрей М.',
        location: 'Ленинский район',
    },
]

// ─────────────────────────────────────────────
// Home — Team
// ─────────────────────────────────────────────

export const teamMembers: TeamMemberCardProps[] = [
    {
        initials: 'РТ',
        name: 'Роман Трошин',
        role: 'Основатель',
        quote: 'Запустил проект в августе 2025 года, чтобы сделать магазины Астрахани честнее',
        bgClass: 'bg-gradient-to-br from-beige-500/10 to-beige-100/10 dark:from-beige-500/20 dark:to-gray-500/20',
        borderClass: 'border border-beige-500/20',
        avatarBgClass: 'bg-beige-500',
        avatarTextClass: 'text-white',
    },
    {
        initials: 'Б',
        name: 'Борис',
        role: 'Технический директор',
        quote: 'Отвечаю за то, чтобы сайт работал быстро, а данные — не терялись',
        bgClass: 'bg-gradient-to-br from-gray-500/10 to-slate/10 dark:from-gray-500/20 dark:to-gray-900/20',
        borderClass: 'border border-gray-500/20',
        avatarBgClass: 'bg-gray-500',
        avatarTextClass: 'text-white',
    },
    {
        initials: 'Д',
        name: 'Дарья',
        role: 'Мониторинг',
        quote: 'Проверяю* полки лично — потому что хочу быть уверенной в продуктах для своей семьи',
        bgClass: 'bg-gradient-to-br from-slate/10 to-gray-500/10 dark:from-slate/20 dark:to-gray-500/20',
        borderClass: 'border border-gray-500/20',
        avatarBgClass: 'bg-slate',
        avatarTextClass: 'text-white',
    },
    {
        initials: 'РК',
        name: 'Роман К',
        role: 'Мониторинг',
        quote: 'Важно не найти нарушение, а помочь магазину стать лучше — через диалог, а не конфликт',
        bgClass: 'bg-gradient-to-br from-beige-100/10 to-beige-500/10 dark:from-beige-100/20 dark:to-beige-500/20',
        borderClass: 'border border-beige-500/20',
        avatarBgClass: 'bg-beige-100',
        avatarTextClass: 'text-slate',
    },
]

export const teamInfo: TeamInfoCardProps[] = [
    {
        icon: 'users',
        title: 'Обычные жители',
        desc: 'Проект запустили в августе 2025 года. Мы не чиновники, не журналисты и не представители надзорных органов. Мы — ваши соседи, родители, покупатели.',
    },
    {
        icon: 'heart',
        title: 'Безвозмездно',
        desc: 'Мы не получаем зарплату, не берём деньги с магазинов и не продаём рейтинги. Это добровольческая инициатива ради общей пользы.',
    },
    {
        icon: 'identification',
        title: 'С бейджами и открыто',
        desc: 'Каждый участник имеет персональный бейдж с кодом, который любой может проверить на нашем сайте. Мы представляемся администрации и не скрываем своих целей.',
    },
]

// ─────────────────────────────────────────────
// Home — Benefits
// ─────────────────────────────────────────────

export const benefitRows: BenefitRowProps[] = [
    {
        icon: 'shoppingBag',
        title: 'Покупателям',
        subtitle: 'Жителям Астрахани, которые хотят уверенности в свежести продуктов',
        panelClass: 'bg-beige-100 dark:bg-gray-900',
        titleClass: 'text-slate dark:text-white',
        subtitleClass: 'text-gray-500 dark:text-beige-100/70',
        items: [
            { icon: 'bellAlert',          title: 'Выбирайте',       titleItalic: 'осознанно', desc: 'Свежие обзоры и рейтинги магазинов рядом с домом помогают выбрать лучшее место для покупок в вашем микрорайоне.' },
            { icon: 'heart',              title: 'Заботьтесь о',    titleItalic: 'семье',     desc: 'Обращайте особое внимание на детское питание, молочку и мясо в магазинах с нашими обзорами — и покупайте со спокойной душой.' },
            { icon: 'cursorArrowRipple', title: 'Участвуйте в',    titleItalic: 'улучшениях', desc: 'Ваше наблюдение запускает визит именно в тот магазин, куда вы ходите. И вы увидите результат — свежую полку и отзыв администрации.' },
        ],
    },
    {
        icon: 'buildingStorefront',
        title: 'Магазинам',
        subtitle: 'Руководителям и сотрудникам, которые хотят улучшить сервис',
        panelClass: 'bg-gray-500 text-white',
        titleClass: 'text-white',
        subtitleClass: 'text-beige-100/80',
        items: [
            { icon: 'handRaised', title: 'Никаких внезапных штрафов',  desc: 'Мы не проверяющий орган. Наша цель — вежливо указать на недочёт, чтобы вы могли быстро его исправить.' },
            { icon: 'arrowPath',  title: 'Бесплатный внутренний аудит', desc: 'Взгляд со стороны помогает вовремя заметить то, что пропустили в повседневной суете.' },
            { icon: 'trophy',     title: 'Повышение доверия покупателей', desc: 'Магазины, которые оперативно реагируют на замечания, получают более высокий рейтинг и лояльность соседей.' },
        ],
    },
    {
        icon: 'buildingOffice',
        title: 'Руководству',
        subtitle: 'Директора, владельцы, администрация — те, кто отвечает за качество',
        panelClass: 'bg-slate',
        titleClass: 'text-white',
        subtitleClass: 'text-beige-100/80',
        items: [
            { icon: 'clipboardDocumentCheck', title: 'Бесплатный аудит качества', desc: 'Наши визиты — это взгляд внимательного покупателя, который замечает то, что можно упустить в рутине. Ценный источник обратной связи.' },
            { icon: 'arrowTrendingUp',         title: 'Укрепление доверия',        desc: 'Высокий рейтинг FreshCheck = больше лояльных клиентов из района. Это честный маркетинг, который работает за вас.' },
            { icon: 'trophy',                  title: 'Знак «Одобрено FreshCheck»', desc: 'Видимый знак качества для магазинов с рейтингом 5/5. Выделяет вас среди соседей и привлекает сознательных покупателей.' },
        ],
    },
]

// ─────────────────────────────────────────────
// Home — Badge
// ─────────────────────────────────────────────

export const badgePerks: string[] = [
    'Покупатели сразу понимают: здесь безопасно и свежо',
    'Рост лояльности — семьи выбирают такие магазины',
    'Бесплатный маркетинг — наклейка работает 24/7',
    'Конкурентное преимущество среди соседних точек',
]

// ─────────────────────────────────────────────
// Contacts & Socials
// ─────────────────────────────────────────────

export const socialLinks: SocialLinkProps[] = [
    { href: TELEGRAM_CHANNEL, icon: 'telegram', name: 'Telegram',   handle: TELEGRAM_CHANNEL_PLACEHOLDER,    desc: 'Оперативные новости и обзоры', iconBgClass: 'bg-telegram', hoverBorderClass: 'hover:border-telegram' },
    { href: VK_GROUP,         icon: 'vk',       name: 'ВКонтакте',  handle: VK_GROUP_PLACEHOLDER,            desc: 'Сообщество проекта',           iconBgClass: 'bg-vk',       hoverBorderClass: 'hover:border-vk' },
    { href: TIKTOK,           icon: 'tiktok',   name: 'TikTok',     handle: TIKTOK_PLACEHOLDER,              desc: 'Познавательный контент',        iconBgClass: '',    hoverBorderClass: 'hover:border-black' },
]

export const contactButtons: ContactButtonProps[] = [
    { href: TELEGRAM_FOUNDER, icon: 'telegram', title: 'Telegram',   value: TELEGRAM_FOUNDER_PLACEHOLDER },
    { href: VK_FOUNDER,       icon: 'vk',       title: 'ВКонтакте',  value: VK_FOUNDER_PLACEHOLDER },
    { href: EMAIL,            icon: 'envelope', title: 'Email',      value: EMAIL_PLACEHOLDER },
    { href: PHONE,            icon: 'phone',    title: 'Телефон',    value: PHONE_PLACEHOLDER },
]

// ─────────────────────────────────────────────
// Admin page
// ─────────────────────────────────────────────

export const goals: string[] = [
    'Защитить покупателей от некачественных товаров',
    'Помочь магазину оперативно выявить и устранить любые дефекты',
    'Способствовать формированию культуры качества',
]

export const notDoing: string[] = [
    'Не выписываем штрафы',
    'Не составляем официальные протоколы и акты',
    'Не имеем права закрывать магазин',
    'Не являемся представителями госорганов',
    'Не передаём материалы в Роспотребнадзор без диалога',
]

export const legalBlocks: LegalBlock[] = [
    {
        icon: 'camera',
        title: 'Что мы можем фиксировать (фото/видео)',
        note: 'Мы всегда замазываем лица людей, случайно попавших в кадр.',
        items: [
            { label: 'Статья 29 Конституции РФ',      text: ' — право искать информацию.' },
            { label: 'Постановление № 2463 (п. 2)',    text: ' — запрет ограничивать фотосъёмку товара.' },
            { label: 'Статья 152.1 ГК РФ',             text: ' — съёмка в местах открытого доступа.' },
        ],
    },
    {
        icon: 'scale',
        title: 'Почему общественный мониторинг законен',
        note: 'Наши внутренние документы открыты и не налагают на вас обязательств.',
        items: [
            { label: 'Ст. 29 Конституции РФ',          text: ' — право распространять информацию.' },
            { label: 'Закон о защите прав потребителей', text: ' (ст. 7, 8–10, 18).' },
            { label: null,                              text: 'Никакого специального разрешения не требуется.' },
        ],
    },
]


interface ProjectDoc {
    code: string,
    title: string,
    date: string,
    icon: IconName,
    description: string,
    link: string
}

export const projectDocs: ProjectDoc[]= [
    {
        code: 'FC-PP-2026-01',
        title: 'Публичная политика',
        date: '02 апреля 2026 г. (Редакция от 01 июня 2026 г.)',
        icon: 'documentText',
        description: 'Правовой статус, цели, правовые основания, порядок мониторинга, рейтинговая система, ответственность. Документ носит открытый характер и может быть предъявлен в споре как доказательство прозрачности и законности работы проекта.',
        link: PUBLIC_POLICY_DOC_URL
    },
    {
        code: 'FC-PD-2026-02',
        title: 'Положение о деятельности',
        date: '02 апреля 2026 г. (Редакция от 01 июня 2026 г.)',
        icon: 'clipboardDocumentCheck',
        description: 'Основной внутренний регламент: права и обязанности участников, этапы визита, публикация материалов, хранение записей, взаимодействие с надзорными органами, использование материалов СМИ.',
        link: REGULATION_DOC_URL 
    },
    {
        code: 'FC-DP-2026-03',
        title: 'Декларация принципов',
        date: '02 апреля 2026 г. (Редакция от 01 июня 2026 г.)',
        icon: 'starHero',
        description: '10 ценностей и нравственных обязательств: законность, честность, прозрачность, партнёрство, безопасность, соразмерность, уважение, независимость, диалог, общественная польза. Идеологическая основа проекта.',
        link: DECLARATION_DOC_URL
    },
    {
        code: 'FC-BB-2026-04',
        title: 'Положение о системе бейджей',
        date: '28 апреля 2026 г. (Редакция от 01 июня 2026 г.)',
        icon: 'identification',
        description: 'Формат кодов #[ТИП][НОМЕР]-AST[БУКВА], правила проверки подлинности, реестр на сайте, признаки поддельного бейджа. Защита жителей и бизнеса от самозванцев.',
        link: BADGES_DOC_URL
    }
]


// export const mainPartnerBase = {
//     name: 'Молодёжное движение «Новые»',
//     type: 'Молодёжная организация',
//     description: '«Новые» — молодёжное движение, созданное партией «Новые люди». Проект ориентирован на школьников и студентов, помогает выстраивать карьерные траектории и запускает социальные лифты для молодого поколения. Для FreshCheck «Новые» — настоящие партнёры. Помогают с материалами (например, бейджами), поддерживают наши инициативы и участвуют в жизни проекта. Сотрудничество строится на общих ценностях: честность, открытость и желание менять город к лучшему.',
//     tags: ['Молодёжь', 'Образование', 'Партнёрство'],
//     status: 'Активен',
//     link: 'https://t.me/novieastrakhan'
// }

export const partners = [
    {
        name: 'Никита Цоер',
        type: 'Авторский канал',
        logo: '/tsoer.jpg',
        description: 'Никита Цоер — автор канала об истории Астрахани. Изучает город по архивам, книгам и картам, снимает видео на улицах. Привлекает к съёмкам местных гидов и экспертов. Проводит офлайн-встречи с подписчиками. Публикуется в Telegram, VK, YouTube и других соцсетях. Совместно с FreshCheck ведёт рубрику #НеПроверка.',
        tags: ['История города', 'Топонимика', '#НеПроверка'],
        status: 'Активен',
        link: 'https://t.me/nikita_tsoer'
    },
    {
        name: 'Астраханские транспортные новости',
        type: 'Городское медиа',
        logo: '/news.jpg',
        description: 'Независимый канал об изменениях маршрутов, новом подвижном составе, городской мобильности и инфраструктуре Астрахани. Оперативно освещает решения областного минтранса и помогает горожанам ориентироваться в транспортной сети. Совместные материалы — в рубрике #НовостиТранспорта.',
        tags: ['Транспорт', 'Маршруты', '#НовостиТранспорта'],
        status: 'Активен',
        link: 'https://t.me/newstransport30'
    }
]

export const codeExplanation = [
  { label: '#P', desc: 'Проверяющий* (проводит мониторинг)' },
  { label: '#YOU', desc: 'Блогер (ведёт видеосъёмку для каналов)' },
  { label: 'НОМЕР', desc: 'уникальный номер (01, 02, …)' },
  { label: 'AST', desc: 'код Астрахани' },
  { label: 'БУКВА (опционально)', desc: 'именной суффикс (R, D, RK, A)' }
]

export const fakeBadgeSigns = [
  'Код не содержит # или -AST',
  'Номер отсутствует в реестре на сайте',
  'Есть символика госорганов или надзорных структур'
]

interface StatItem {
  value: string;
  title: string;
  desc: string;
  icon: IconName;
}

export const PressStats: StatItem[] = [
  {
    value: "Авг. 2025",
    title: "Дата запуска",
    desc: "Проект работает с августа 2025 года как инициатива жителей Астрахани",
    icon: "calendar"
  },
  {
    value: "4",
    title: "Документа проекта",
    desc: "Публичная политика, положение о деятельности, декларация принципов, положение о бейджах",
    icon: "documentText"
  },
  {
    value: "10",
    title: "Принципов работы",
    desc: "Законность, честность, прозрачность, партнёрство, безопасность, соразмерность, уважение, независимость, диалог, общественная польза",
    icon: "scale"
  }
]

interface principleType {
  icon: IconName
  title: string
  description: string
}

export const principlesCards: principleType[] = [
  {
    icon: 'bolt',
    title: 'Независимость',
    description: 'Мы независимы от политических структур, коммерческих интересов и конкурентов магазинов. Сотрудничество не меняет этого.'
  },
  {
    icon: 'chatBubbleLeft',
    title: 'Открытость к диалогу',
    description: 'Готовы обсуждать формат взаимодействия с каждым партнёром индивидуально. Упоминание может быть в любом формате.'
  },
  {
    icon: 'globeAlt',
    title: 'Общественная польза',
    description: 'Вся деятельность направлена на формирование среды, где свежие и безопасные продукты — норма для Астрахани.'
  }
]

export const formatsList = [
  'Совместные информационные и просветительские материалы',
  'Публикации в наших каналах (Telegram, VK, TikTok)',
  'Размещение в разделе «Наши друзья и партнёры» на сайте',
  'Сквозные баннеры и репосты в социальных сетях',
  'Помощь в распространении материалов о правах потребителей',
  'Гостевые подарки и пожертвования (не влияют на объективность оценок)'
]

export const whoWeAreList = [
    '<span class="font-bold">FreshCheck</span> — независимая гражданская инициатива жителей Астрахани с августа 2025 года.',
    'Не зарегистрированы как юрлицо, НКО, ИП или общественное объединение. Участники действуют как обычные граждане — потребители.',
    'Не являемся представителями Роспотребнадзора, полиции или иных госорганов.',
    'Деятельность некоммерческая. Рейтинги не продаются и не покупаются.'
]

export const whatWeDoList = [
    'Общественный мониторинг качества товаров в магазинах Астрахани',
    'Публикация открытых отчётов с рейтингами и фотофиксацией',
    'Просвещение: статьи о правах потребителей, разборы законов и технических регламентов',
    'Новости Астрахани, исторические факты о городе, материалы партнёров',
    'Помощь жителям в составлении жалоб в Роспотребнадзор'
]
