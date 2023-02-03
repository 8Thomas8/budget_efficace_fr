<script setup lang="ts">
const props = defineProps({
    article: {
        type: Object,
        required: true,
        default: () => null
    }
})
</script>

<template>
    <div>
        <nuxt-link
            class="flex flex-col overflow-hidden rounded-lg shadow-lg hover:shadow-2xl"
            :title="article.title"
            :to="article._path">
            <div class="h-48 flex-shrink-0">
                <img
                    v-if="article.image && article.image.src"
                    class="h-full w-full object-cover"
                    :src="article.image.src"
                    :alt="article.image.alt || 'Illustration'" />
            </div>
            <div class="flex flex-1 flex-col justify-between bg-white p-6">
                <div class="flex-1">
                    <p
                        class="text-sm font-medium duration-150 ease-in-out text-primary-base escape-link hover:text-secondary-base">
                        <span>{{ article._dir[0].toUpperCase() + article._dir.slice(1).replaceAll('-', ' ') }} </span>
                    </p>
                    <div class="mt-2 block">
                        <p class="text-xl font-semibold text-gray-900 h-[56px] line-clamp-2">{{ article.title }}</p>
                        <p class="mt-3 text-base text-gray-500 h-[120px] line-clamp-5">{{ article.description }}</p>
                    </div>
                </div>
            </div>
        </nuxt-link>
    </div>
</template>
