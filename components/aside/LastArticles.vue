<script setup lang="ts">
const { data: articlesArray } = await useAsyncData('articlesArray', () => {
    return queryContent('blog')
        .where({ isArticle: { $eq: 'true' } })
        .only(['title', '_path'])
        .sort({ createdAt: -1 })
        .limit(5)
        .find()
})
</script>

<template v-if="articlesArray.length">
    <div class="border-2 border-secondary-base rounded-md p-4 shadow-lg lg:p-6">
        <div class="prose">
            <h3>Les 5 derniers articles</h3>
            <ul>
                <template v-for="article in articlesArray">
                    <li>
                        <nuxt-link
                            :to="article._path"
                            :title="article.title"
                            >{{ article.title }}
                        </nuxt-link>
                    </li>
                </template>
            </ul>
        </div>
    </div>
</template>
