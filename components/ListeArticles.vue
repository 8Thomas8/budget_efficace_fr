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
        <template v-if="articles.length">
            <div class="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3 lg:gap-8">
                <template
                    v-if="articles.length"
                    v-for="article in articles">
                    <CardsBlog :article="article" />
                </template>
            </div>
        </template>
        <template v-else>
            <div class="mx-auto mt-12">
                <p class="text-center mx-auto italic opacity-50">Aucun article pour le moment ...</p>
            </div>
        </template>
    </div>
</template>
