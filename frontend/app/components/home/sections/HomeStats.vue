<template>
    <section class="py-24">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard v-for="stat in stats" :key="stat.value" v-bind="stat" />
        </div>
    </section>
</template>

<script setup lang="ts">
import type { StatCardProps } from '~/types/props.types';

const props = defineProps<{
    shopsCount?: number,
}>()

const stats: StatCardProps[] = [
    {
        icon: 'shoppingBag',
        value: '2760+',
        title: 'Единиц товара убрано',
        desc: 'С полок магазинов в ходе совместной работы с администрацией',
        disclaimer: '*по мнению участников проекта',
    },
    {
        icon: 'buildingStorefront',
        value: String(props.shopsCount || '15+'),
        title: 'Магазинов в мониторинге',
        desc: 'Регулярно посещаем торговые точки в разных районах Астрахани',
    },
    {
        icon: 'handThumbUp',
        value: '98%',
        title: 'Решено на месте',
        desc: 'Недочёты устраняются в диалоге с сотрудниками, без эскалации',
        disclaimer: '*по мнению участников проекта',
    },
]

</script>