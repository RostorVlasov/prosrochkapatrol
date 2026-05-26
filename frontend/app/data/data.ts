import {
  TELEGRAM_CHANNEL,
  TELEGRAM_FOUNDER,
  VK_GROUP,
  VK_FOUNDER,
  INSTAGRAM,
  TIKTOK,
  EMAIL,
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
  FaqItem,
} from '~/types/props.types'

export const processSteps = [
  { icon: 'userPlus' as const, title: 'Визит', desc: 'Заходим в магазин как обычные покупатели. При возможности представляемся администрации.' },
  { icon: 'cameraHero' as const, title: 'Наблюдение', desc: 'Осматриваем полки, фиксируем сроки годности и условия хранения. Делаем фото для отчёта.' },
  { icon: 'chatBubbleSingle' as const, title: 'Диалог', desc: 'Делимся наблюдениями с сотрудниками, даём рекомендации. В большинстве случаев всё решается на месте.' },
  { icon: 'globeAlt' as const, title: 'Обзор', desc: 'В течение 1–3 дней публикуем открытый отчёт с фото и рейтингом — для всех жителей Астрахани.' },
]

export const principles: PrincipleProps[] = [
  { icon: 'scale' as const,                title: 'Законность',         desc: 'Строго в рамках Конституции РФ и закона о защите прав потребителей' },
  { icon: 'checkCircle' as const,          title: 'Честность',          desc: 'Публикуем только то, что видели своими глазами — без домыслов' },
  { icon: 'eye' as const,                  title: 'Прозрачность',       desc: 'Все отчёты, методика и документы открыты для всех желающих' },
  { icon: 'handRaised' as const,           title: 'Безопасность',       desc: 'Здоровье семей — главный приоритет каждого нашего визита' },
  { icon: 'chatBubbleLeft' as const,       title: 'Партнёрство',        desc: 'Сначала диалог с администрацией, а не жалобы и конфликты' },
  { icon: 'arrowPath' as const,            title: 'Соразмерность',      desc: 'Реакция соответствует серьёзности нарушения — без лишней эскалации' },
  { icon: 'userHero' as const,             title: 'Уважение',           desc: 'Не снимаем и не публикуем лица сотрудников без их согласия' },
  { icon: 'bolt' as const,                 title: 'Независимость',      desc: 'Не принимаем финансирования, которое влияло бы на оценки' },
  { icon: 'chatBubble' as const,           title: 'Диалог',             desc: 'Открыты к обратной связи и готовы исправлять собственные ошибки' },
  { icon: 'globeAlt' as const,             title: 'Общественная польза', desc: 'Цель — среда безопасных и честных магазинов для всей Астрахани' },
]

export const testimonials: TestimonialCardProps[] = [
  { text: 'Очень приятно, что кто-то реально следит за качеством. Убрали просроченные грибы и помятые банки в соседнем магазине. Спасибо!', author: 'Ирина К.', location: 'Кировский район' },
  { text: 'Поделилась наблюдением про просроченный йогурт днём. К вечеру всё убрали и даже пост сделали. Теперь доверяю этому магазину намного больше.', author: 'Мария Л.', location: 'Советский район' },
  { text: 'Как папа с годовалым малышом скажу: спасибо, что обращаете внимание на молочку и детское питание. Для нас это вопрос здоровья сына.', author: 'Андрей М.', location: 'Ленинский район' },
]

export const faq: FaqItem[] = [
  { q: 'Вы из Роспотребнадзора или полиции?', a: 'Нет. FreshCheck — независимая гражданская инициатива жителей Астрахани. Мы не являемся государственным органом, не выдаём предписаний и не выписываем штрафов. Мы действуем как обычные покупатели, реализуя конституционное право на информацию (ст. 29 Конституции РФ).' },
  { q: 'Законно ли снимать в магазине?', a: 'Да. Постановление Правительства РФ № 2463 (п. 2) прямо подтверждает право потребителей фотографировать товары и ценники в торговых залах. Съёмка в местах свободного доступа также разрешена ст. 152.1 ГК РФ. Мы снимаем только полки, товары и ценники — лица и голоса людей мы не публикуем.' },
  { q: 'Вы штрафуете магазины или заставляете платить?', a: 'Нет. FreshCheck — некоммерческий волонтёрский проект. Мы не выписываем штрафов, не составляем актов, не берём деньги с магазинов за визиты, рейтинги или наклейки. Наша цель — диалог и рекомендации. В 98% случаев недочёты устраняются на месте, без эскалации.' },
  { q: 'Кто вам платит? Вы независимы?', a: 'Никто. Участники работают добровольно, мы не принимаем финансирования, которое могло бы повлиять на объективность. Рейтинги не продаются и не покупаются — знак «Одобрено FreshCheck» зарабатывается реальным качеством магазина.' },
  { q: 'Что если магазин не отреагирует на ваши рекомендации?', a: 'Мы всегда начинаем с диалога. Если нарушения носят систематический характер и администрация не реагирует после нескольких визитов — мы можем помочь жителям оформить официальное обращение в Роспотребнадзор с нашей фотофиксацией как доказательной базой.' },
]

export const stats: StatCardProps[] = [
  { icon: 'shoppingBag' as const, value: '2760+', title: 'Единиц товара убрано', desc: 'С полок магазинов в ходе совместной работы с администрацией' },
  { icon: 'buildingStorefront' as const, value: '11', title: 'Магазинов в мониторинге', desc: 'Регулярно посещаем торговые точки в разных районах Астрахани' },
  { icon: 'handThumbUp' as const, value: '98%', title: 'Решено на месте', desc: 'Недочёты устраняются в диалоге с сотрудниками, без эскалации' },
]

export const reportSteps: StepCardProps[] = [
  { number: 1, title: 'Напишите нам', desc: 'Отправьте сообщение в Telegram или через форму на сайте: укажите название магазина, адрес и суть наблюдения.' },
  { number: 2, title: 'Мы проверяем', desc: 'В течение 1–3 дней наш волонтёр посещает магазин, фиксирует ситуацию и обсуждает её с администрацией.' },
  { number: 3, title: 'Публикуем результат', desc: 'Отчёт с фото и рейтингом появляется на сайте и в наших каналах. Вы видите, что изменилось.' },
]

export const teamMembers: TeamMemberCardProps[] = [
  {
    initials: 'РТ', name: 'Роман Трошин', role: 'Основатель',
    quote: 'Запустил проект в августе 2025 года, чтобы сделать магазины Астрахани честнее',
    bgClass: 'bg-gradient-to-br from-beige-500/10 to-beige-100/10 dark:from-beige-500/20 dark:to-gray-500/20',
    borderClass: 'border border-beige-500/20', avatarBgClass: 'bg-beige-500', avatarTextClass: 'text-white',
  },
  {
    initials: 'Б', name: 'Борис', role: 'Технический директор',
    quote: 'Отвечаю за то, чтобы сайт работал быстро, а данные — не терялись',
    bgClass: 'bg-gradient-to-br from-gray-500/10 to-slate/10 dark:from-gray-500/20 dark:to-gray-900/20',
    borderClass: 'border border-gray-500/20', avatarBgClass: 'bg-gray-500', avatarTextClass: 'text-white',
  },
  {
    initials: 'Д', name: 'Дарья', role: 'Мониторинг',
    quote: 'Проверяю полки лично — потому что хочу быть уверенной в продуктах для своей семьи',
    bgClass: 'bg-gradient-to-br from-slate/10 to-gray-500/10 dark:from-slate/20 dark:to-gray-500/20',
    borderClass: 'border border-gray-500/20', avatarBgClass: 'bg-slate', avatarTextClass: 'text-white',
  },
  {
    initials: 'РК', name: 'Роман К', role: 'Мониторинг',
    quote: 'Важно не найти нарушение, а помочь магазину стать лучше — через диалог, а не конфликт',
    bgClass: 'bg-gradient-to-br from-beige-100/10 to-beige-500/10 dark:from-beige-100/20 dark:to-beige-500/20',
    borderClass: 'border border-beige-500/20', avatarBgClass: 'bg-beige-100', avatarTextClass: 'text-slate',
  },
]

export const teamInfo: TeamInfoCardProps[] = [
  { icon: 'users' as const, title: 'Обычные жители', desc: 'Проект запустили в августе 2025 года. Мы не чиновники, не журналисты и не представители надзорных органов. Мы — ваши соседи, родители, покупатели.' },
  { icon: 'heart' as const, title: 'Безвозмездно', desc: 'Мы не получаем зарплату, не берём деньги с магазинов и не продаём рейтинги. Это добровольческая инициатива ради общей пользы.' },
  { icon: 'identification' as const, title: 'С бейджами и открыто', desc: 'Каждый участник имеет персональный бейдж с кодом, который любой может проверить на нашем сайте. Мы представляемся администрации и не скрываем своих целей.' },
]

export const benefitRows: BenefitRowProps[] = [
  {
    icon: 'shoppingBag' as const,
    title: 'Покупателям',
    subtitle: 'Жителям Астрахани, которые хотят уверенности в свежести продуктов',
    panelClass: 'bg-beige-100 dark:bg-gray-900',
    titleClass: 'text-slate dark:text-white',
    subtitleClass: 'text-gray-500 dark:text-beige-100/70',
    items: [
      { icon: 'bellAlert' as const, title: 'Выбирайте', titleItalic: 'осознанно', desc: 'Свежие обзоры и рейтинги магазинов рядом с домом помогают выбрать лучшее место для покупок в вашем микрорайоне.' },
      { icon: 'heart' as const, title: 'Заботьтесь о', titleItalic: 'семье', desc: 'Обращайте особое внимание на детское питание, молочку и мясо в магазинах с нашими обзорами — и покупайте со спокойной душой.' },
      { icon: 'cursorArrowRipple' as const, title: 'Участвуйте в', titleItalic: 'улучшениях', desc: 'Ваше наблюдение запускает визит именно в тот магазин, куда вы ходите. И вы увидите результат — свежую полку и отзыв администрации.' },
    ],
  },
  {
    icon: 'buildingStorefront' as const,
    title: 'Магазинам',
    subtitle: 'Руководителям и сотрудникам, которые хотят улучшить сервис',
    panelClass: 'bg-gray-500 text-white',
    titleClass: 'text-white',
    subtitleClass: 'text-beige-100/80',
    items: [
      { icon: 'handRaised' as const, title: 'Никаких внезапных штрафов', desc: 'Мы не проверяющий орган. Наша цель — вежливо указать на недочёт, чтобы вы могли быстро его исправить.' },
      { icon: 'arrowPath' as const, title: 'Бесплатный внутренний аудит', desc: 'Взгляд со стороны помогает вовремя заметить то, что пропустили в повседневной суете.' },
      { icon: 'trophy' as const, title: 'Повышение доверия покупателей', desc: 'Магазины, которые оперативно реагируют на замечания, получают более высокий рейтинг и лояльность соседей.' },
    ],
  },
  {
    icon: 'buildingOffice' as const,
    title: 'Руководству',
    subtitle: 'Директора, владельцы, администрация — те, кто отвечает за качество',
    panelClass: 'bg-slate',
    titleClass: 'text-white',
    subtitleClass: 'text-beige-100/80',
    items: [
      { icon: 'clipboardDocumentCheck' as const, title: 'Бесплатный аудит качества', desc: 'Наши визиты — это взгляд внимательного покупателя, который замечает то, что можно упустить в рутине. Ценный источник обратной связи.' },
      { icon: 'arrowTrendingUp' as const, title: 'Укрепление доверия', desc: 'Высокий рейтинг FreshCheck = больше лояльных клиентов из района. Это честный маркетинг, который работает за вас.' },
      { icon: 'trophy' as const, title: 'Знак «Одобрено FreshCheck»', desc: 'Видимый знак качества для магазинов с рейтингом 5/5. Выделяет вас среди соседей и привлекает сознательных покупателей.' },
    ],
  },
]

export const badgePerks: string[] = [
  'Покупатели сразу понимают: здесь безопасно и свежо',
  'Рост лояльности — семьи выбирают такие магазины',
  'Бесплатный маркетинг — наклейка работает 24/7',
  'Конкурентное преимущество среди соседних точек',
]

export const socialLinks: SocialLinkProps[] = [
  { href: TELEGRAM_CHANNEL, icon: 'telegram' as const, name: 'Telegram', handle: '@prosrochka_patrol', desc: 'Оперативные новости и обзоры', iconBgClass: 'bg-telegram', hoverBorderClass: 'hover:border-telegram' },
  { href: VK_GROUP, icon: 'vk' as const, name: 'ВКонтакте', handle: 'prosrochka_patrol_astrakhan', desc: 'Сообщество проекта', iconBgClass: 'bg-vk', hoverBorderClass: 'hover:border-vk' },
  { href: INSTAGRAM, icon: 'instagram' as const, name: 'Instagram*', handle: '@freshcheckastra', desc: 'Визуальный контент', iconBgClass: 'bg-instagram', hoverBorderClass: 'hover:border-pink-500' },
  { href: TIKTOK, icon: 'tiktok' as const, name: 'TikTok', handle: '@freshcheckastra', desc: 'Познавательный контент', iconBgClass: 'bg-black', hoverBorderClass: 'hover:border-black' },
]

export const contactButtons: ContactButtonProps[] = [
  { href: TELEGRAM_FOUNDER, icon: 'telegram' as const, label: 'Telegram', bgClass: 'bg-white hover:bg-beige-100', textClass: 'text-slate' },
  { href: VK_FOUNDER, icon: 'vk' as const, label: 'ВКонтакте', bgClass: 'bg-vk hover:bg-vk/80', textClass: 'text-white' },
  { href: EMAIL, icon: 'envelope' as const, label: 'Email', bgClass: 'bg-slate hover:bg-gray-700 border border-white/20', textClass: 'text-white' },
]