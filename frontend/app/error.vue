<template>
    <AppContainer>
        <NotFound :status="props.error.status" />
    </AppContainer>
</template>

<script lang="ts" setup>
const toast = useToast()

interface ErrorResponse {
    data: {
        path: string;
    };
    error: "true";
    message: string;
    stack: string;
    status: number;
    statusCode: number;
    statusMessage: string;
    statusText: string;
    url: string;
}

const props = defineProps<{
    error: ErrorResponse
}>()

onMounted(() => {
    if(props.error.status === 404) return
    toast.add({
        id: 'page-error',
        color: 'error',
        title: 'Ошибка ' + String(props.error.status),
        description: String(props.error.statusMessage),
        duration: 4000,
    })
})

</script>