<script setup lang="ts">
const props = defineProps({
    articles: {
        type: Array,
        required: true,
        default: () => null
    }
})
</script>

<template>
    <div>
        <div class="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3 lg:gap-8">
            <template v-for="article in articles">
                <CardsBlog :article="article" />
            </template>
        </div>
    </div>
</template>
