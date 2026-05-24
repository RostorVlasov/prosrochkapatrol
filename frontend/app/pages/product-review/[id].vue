<template>
    <ShopDetails v-if="shop" :shop="shop"/>
    <div v-else>
        Магазин не найден!
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useShopStore } from '~/stores/shops';
const route = useRoute()
const {fetchShop} = useShopStore()

const shop = await fetchShop(route.params.id as string)


</script>
