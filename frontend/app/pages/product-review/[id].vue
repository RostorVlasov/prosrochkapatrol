<template>
    <ShopDetails v-if="shop" :shop="shop" />
</template>

<script setup lang="ts">
const route = useRoute()
import type { ShopDoc } from '~/types/shops.types';
import { NotFoundError } from '~/utils/notFoundError';

const { data: shop } = await useApiFetch<ShopDoc>(`/api/shops/${route.params.id}`, {
    key: `shop-${route.params.id}`,
})

if(!shop.value) {
    NotFoundError()
}

</script>