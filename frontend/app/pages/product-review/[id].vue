<template>
    <ShopDetails v-if="shop" :shop="shop" />
    <NotFound v-else/>
</template>

<script setup lang="ts">
const route = useRoute()
import type { ShopDoc } from '~/types/shops.types';

const { data: shop } = await useApiFetch<ShopDoc>(`/api/shops/${route.params.id}`, {
    key: `shop-${route.params.id}`,
})

</script>