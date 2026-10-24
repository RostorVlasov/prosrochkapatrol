<template>
    <section id="what" class="py-24">
        <BaseSectionHeader pill="Наш подход" title-before="Как мы" title-italic="наблюдаем"
            subtitle="До приостановки мониторинга мы осматривали товары в магазинах, делились замечаниями с администрацией и публиковали результаты." />
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6 mt-12">
            <FeatureBlock v-for="feature in featureBlocksTop" :key="feature.title" v-bind="feature">
                <span v-html="feature.body" />
            </FeatureBlock>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <FeatureBlock v-for="feature in featureBlocksBottom" :key="feature.title" v-bind="feature">
                <span v-html="feature.body" />
            </FeatureBlock>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { featureBlocksBottom, featureBlocksTop } from '~/data/data';

</script>