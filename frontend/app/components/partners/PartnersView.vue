<template>
    <LandingContainer>
        <PartnersHero />

        <div class="mb-12">
            <MainPartner v-bind="mainPartner"/>
        </div>
        <section class="max-w-7xl mx-auto pb-24">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <PartnerCard v-for="(partner, index) in partners" :key="index" v-bind="partner" />
            </div>
        </section>

        <PartnersCTA link="https://t.me/FreshCheckAstraAdmin" />

    </LandingContainer>
</template>

<script setup lang="ts">
const mode = useColorMode()

const isDark = computed(() => mode.value === 'dark')

const mainPartnerBase = {
    name: 'Молодёжное движение «Новые»',
    type: 'Молодёжная организация',
    description: '«Новые» — молодёжное движение, созданное партией «Новые люди». Проект ориентирован на школьников и студентов, помогает выстраивать карьерные траектории и запускает социальные лифты для молодого поколения. Для FreshCheck «Новые» — настоящие партнёры. Помогают с материалами (например, бейджами), поддерживают наши инициативы и участвуют в жизни проекта. Сотрудничество строится на общих ценностях: честность, открытость и желание менять город к лучшему.',
    tags: ['Молодёжь', 'Образование', 'Партнёрство'],
    status: 'Активен',
    link: 'https://t.me/novieastrakhan'
}

const mainPartner = computed(() => ({
    ...mainPartnerBase,
    logo: isDark.value ? '/news_people_white.png' : '/news_people_black.png'
}))

const partners = [
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
</script>