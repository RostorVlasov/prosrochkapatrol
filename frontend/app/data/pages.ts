import type { IconName } from "~/components/ui/AppIcon.vue";

type PageItem = {
    url: string;
    name: string;
    icon: IconName;
};

type SidebarKeys = 'home' | 'news' | 'productReview' | 'contact';
type OtherKeys = 'badges' | 'docs' | 'faq' | 'forStores' | 'report' | 'privacy' | 'press' | 'partners';

export const pages: {
    sidebar: Record<SidebarKeys, PageItem>;
    other: Record<OtherKeys, PageItem>;
} = {
    sidebar: {
        home: {
            url: '/',
            name: 'Главная',
            icon: "home",
        },
        news: {
            url: '/news',
            name: 'Публикации',
            icon: "posts",
        },
        productReview: {
            url: '/product-review',
            name: 'Проверенные магазины',
            icon: "shops",
        },
        contact: {
            url: '/contact',
            name: 'Сообщить о нарушении',
            icon: 'megaphone',
        },
    },
    other: {
        docs: {
            url: '/docs',
            name: 'Документы проекта',
            icon: 'docs',
        },
        press: {
            url: '/press',
            name: 'Для партнеров и СМИ',
            icon: 'tv',
        },
        partners: {
            url: '/partners',
            name: 'Наши партнеры',
            icon: 'partners',
        },
        badges: {
            url: '/badges',
            name: 'Бейджи участников',
            icon: "badge",
        },
        faq: {
            url: '/faq',
            name: 'FAQ',
            icon: 'faq',
        },
        forStores: {
            url: '/for-stores',
            name: 'Для магазинов',
            icon: 'question',
        },
        report: {
            url: '/report',
            name: 'Ошибка в отчёте',
            icon: 'error',
        },
        privacy: {
            url: '/privacy',
            name: 'Политика конфиденциальности',
            icon: 'docs',
        },
    }
};