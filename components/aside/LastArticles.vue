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

    articles = articles.slice(0, 5)

    return articles
}
</script>

<template>
    <div class="border-2 border-secondary-base rounded-md px-4 lg:px-6">
        <div class="prose">
            <h3>Les 5 derniers articles</h3>
            <ul>
                <template v-for="article in returnLastArticles()">
                    <li>
                        <nuxt-link
                            :top="article._path"
                            :title="article.title"
                            >{{ article.title }}
                        </nuxt-link>
                    </li>
                </template>
            </ul>
        </div>
    </div>
</template>
