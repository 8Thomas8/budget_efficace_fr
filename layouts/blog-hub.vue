<script setup lang="ts">
import { Ref } from 'vue'
import { ParsedContent } from '@nuxt/content/dist/runtime/types'

useHead({
    meta: [{ name: 'robots', content: 'noindex' }]
})

const routing = ref(useRoute().params.slug)
const pageNo = ref(1)
const { page } = useContent()

let articlesArray: Ref<ParsedContent[]> = ref([])
let nextArticlesArray: Ref<ParsedContent[]> = ref([])
let prevArticlesArray: Ref<ParsedContent[]> = ref([])

await queryContent(routing.value[0], routing.value[1])
    .where({ isArticle: { $eq: 'true' } })
    .sort({ createdAt: -1 })
    .skip(6 * (pageNo.value - 1))
    .limit(6)
    .find()
    .then(res => (articlesArray.value = res))
await queryContent(routing.value[0], routing.value[1])
    .where({ isArticle: { $eq: 'true' } })
    .sort({ createdAt: -1 })
    .skip(6 * pageNo.value)
    .limit(6)
    .find()
    .then(res => (nextArticlesArray.value = res))
await queryContent(routing.value[0], routing.value[1])
    .where({ isArticle: { $eq: 'true' } })
    .sort({ createdAt: -1 })
    .skip(6 * (pageNo.value - 2))
    .limit(6)
    .find()
    .then(res => (prevArticlesArray.value = res))

watch(pageNo, async () => {
    await queryContent(routing.value[0], routing.value[1])
        .where({ isArticle: { $eq: 'true' } })
        .sort({ createdAt: -1 })
        .skip(6 * (pageNo.value - 1))
        .limit(6)
        .find()
        .then(res => (articlesArray.value = res))

    await queryContent(routing.value[0], routing.value[1])
        .where({ isArticle: { $eq: 'true' } })
        .sort({ createdAt: 1 })
        .skip(6 * pageNo.value)
        .limit(6)
        .find()
        .then(res => (nextArticlesArray.value = res))

    await queryContent(routing.value[0], routing.value[1])
        .where({ isArticle: { $eq: 'true' } })
        .sort({ createdAt: 1 })
        .skip(6 * (pageNo.value - 2))
        .limit(6)
        .find()
        .then(res => (prevArticlesArray.value = res))
})
</script>

<template>
    <div>
        <NavBar />

        <div class="space-y-6 lg:space-y-8">
            <div class="relative bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
                <div>
                    <div class="absolute inset-0">
                        <div class="h-1/3 bg-white sm:h-2/3"></div>
                    </div>
                    <div class="relative mx-auto max-w-7xl">
                        <div class="mx-auto max-w-screen-lg prose">
                            <h1 class="text-center">{{ page.title }}</h1>
                            <p class="mt-3 text-center text-gray-500">{{ page.chapeau }}</p>
                        </div>

                        <LazyListeArticles :articles="articlesArray" />

                        <div class="mt-10">
                            <LazyPaginationBlog
                                @prev-page="pageNo--"
                                @next-page="pageNo++"
                                :activePage="pageNo"
                                :next-articles="nextArticlesArray"
                                :prev-articles="prevArticlesArray" />
                        </div>
                    </div>
                </div>
            </div>

            <LazyFooter />
        </div>
    </div>
</template>
