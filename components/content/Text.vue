<script setup lang="ts">
const props = defineProps({
    content: {
        type: String,
        required: true,
        default: 'Aucun texte défini'
    }
})
</script>

<template>
    <p>{{ content }}</p>
</template>
