<script setup lang="ts">
const articlesArray = await queryContent('/blog').find()
const { page } = useContent()
const sortArticles = () => {
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

    return articles
}
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
                            <h1 class="text-center">
                                {{ page.title }}
                            </h1>
                            <p class="mt-3 text-center text-gray-500">
                                Retrouvez sur cette page tous les articles
                                {{ page.title !== 'Blog' ? `catégorie ${page.title.toLowerCase()}` : 'du blog' }}.
                            </p>
                        </div>

                        <LazyListeArticles :articles="sortArticles()" />

                        <div class="mt-10">
                            <LazyPaginationBlog />
                        </div>
                    </div>
                </div>
            </div>

            <LazyFooter />
        </div>
    </div>
</template>
