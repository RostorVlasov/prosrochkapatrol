import { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
    slug: 'site-settings',
    label: 'Настройки сайта',
    admin: {
        hidden: ({ user }) => user?.role !== 'admin',
        description: 'Глобальные настройки сайта, доступные только администраторам. Пока все что описано здесь нигде не используется, но в будущем может пригодиться для хранения различных параметров и конфигураций. Make FreshCheck Great Again!',
    },
    access: {
        read: () => true,
        update: ({ req: { user } }) => user?.role === 'admin',
    },
    fields: [
        {
            type: 'tabs',
            tabs: [
                {
                    label: 'Основное',
                    fields: [
                        {
                            name: 'site_name',
                            label: 'Название сайта',
                            type: 'text',
                            required: true,
                            defaultValue: 'FreshCheck',
                            admin: {
                                description: 'Отображается в заголовке браузера и шапке сайта',
                            },
                        },
                        {
                            name: 'site_description',
                            label: 'Описание сайта',
                            type: 'textarea',
                            admin: {
                                description: 'Краткое описание для SEO (meta description)',
                            },
                        },
                        {
                            name: 'logo',
                            label: 'Логотип',
                            type: 'upload',
                            relationTo: 'media',
                            admin: {
                                description: 'Основной логотип сайта',
                            },
                        },
                        {
                            name: 'favicon',
                            label: 'Favicon',
                            type: 'upload',
                            relationTo: 'media',
                            admin: {
                                description: 'Иконка сайта в браузере',
                            },
                        },
                    ],
                },
                {
                    label: 'Контакты',
                    fields: [
                        {
                            name: 'contact_email',
                            label: 'Email для связи',
                            type: 'email',
                            admin: {
                                description: 'Публичный email для обращений',
                            },
                        },
                        {
                            name: 'contact_phone',
                            label: 'Телефон',
                            type: 'text',
                            admin: {
                                description: 'Контактный телефон в формате +7 (999) 000-00-00',
                            },
                        },
                        {
                            name: 'address',
                            label: 'Адрес организации',
                            type: 'textarea',
                            admin: {
                                description: 'Физический адрес организации',
                            },
                        },
                        {
                            name: 'working_hours',
                            label: 'Часы работы',
                            type: 'text',
                            admin: {
                                description: 'Например: Пн–Пт с 9:00 до 18:00',
                            },
                        },
                    ],
                },
                {
                    label: 'Соцсети',
                    fields: [
                        {
                            name: 'social_vk',
                            label: 'ВКонтакте',
                            type: 'text',
                            admin: { description: 'Ссылка на страницу ВКонтакте' },
                        },
                        {
                            name: 'social_telegram',
                            label: 'Telegram',
                            type: 'text',
                            admin: { description: 'Ссылка на Telegram-канал или бот' },
                        },
                        {
                            name: 'social_youtube',
                            label: 'YouTube',
                            type: 'text',
                            admin: { description: 'Ссылка на YouTube-канал' },
                        },
                    ],
                },
                {
                    label: 'SEO',
                    fields: [
                        {
                            name: 'seo_keywords',
                            label: 'Ключевые слова',
                            type: 'text',
                            admin: {
                                description: 'Через запятую, для meta keywords',
                            },
                        },
                        {
                            name: 'google_analytics_id',
                            label: 'Google Analytics ID',
                            type: 'text',
                            admin: {
                                description: 'Например: G-XXXXXXXXXX',
                            },
                        },
                        {
                            name: 'yandex_metrika_id',
                            label: 'Яндекс.Метрика ID',
                            type: 'text',
                            admin: {
                                description: 'Числовой идентификатор счётчика Метрики',
                            },
                        },
                    ],
                },
                {
                    label: 'Уведомления',
                    fields: [
                        {
                            name: 'notification_email',
                            label: 'Email для уведомлений',
                            type: 'email',
                            admin: {
                                description: 'На этот адрес будут приходить уведомления о новых жалобах',
                            },
                        },
                        {
                            name: 'telegram_bot_token',
                            label: 'Telegram Bot Token',
                            type: 'text',
                            admin: {
                                description: 'Токен бота для отправки уведомлений в Telegram',
                            },
                        },
                        {
                            name: 'telegram_chat_id',
                            label: 'Telegram Chat ID',
                            type: 'text',
                            admin: {
                                description: 'ID чата или канала куда бот отправляет уведомления',
                            },
                        },
                    ],
                },
            ],
        },
    ],
}