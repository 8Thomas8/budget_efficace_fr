<script setup lang="ts">
const articlesArray = await queryContent('/blog').find()
const returnLastArticles = () => {
    let articles = articlesArray.filter(e => !['/blog', '/blog/budget'].includes(e._path as string))

    articles.sort((a, b) => {
        let dateA = new Date(a.createdAt)
        let dateB = new Date(b.createdAt)
        if (dateA < dateB) {
            return 1
        } else if (dateA > dateB) {
            return -1
        } else {
            dateA = new Date(a.updatedAt)
            dateB = new Date(b.updatedAt)
            if (dateA < dateB) {
                return 1
            } else if (dateA > dateB) {
                return -1
            } else {
                return 0
            }
        }
    })

    articles = articles.slice(0, 6)

    return articles
}
</script>

<template>
    <div>
        <div class="absolute inset-0">
            <div class="h-1/3 bg-white sm:h-2/3"></div>
        </div>
        <div class="relative mx-auto max-w-7xl">
            <div class="text-center">
                <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Les derniers articles</h2>
                <p class="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus
                    sed.
                </p>
            </div>

            <div class="mx-auto mt-12 grid max-w-lg gap-5 lg:gap-8 lg:max-w-none lg:grid-cols-3">
                <template v-for="article in returnLastArticles()">
                    <CardsBlog :article="article" />
                </template>
            </div>
            <div class="mt-10 sm:flex justify-center">
                <div class="rounded-md shadow">
                    <nuxt-link
                        to="/blog"
                        alt="Voir tous les articles"
                        class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
                        >Voir tous les articles
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>
