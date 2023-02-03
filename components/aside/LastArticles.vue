<script setup lang="ts">
import { Ref } from 'vue'
import { ParsedContent } from '@nuxt/content/dist/runtime/types'

let articlesArray: Ref<Pick<ParsedContent, any>[]> = ref([])

await queryContent('blog')
    .where({ isArticle: { $eq: 'true' } })
    .only(['title', '_path'])
    .sort({ createdAt: -1 })
    .limit(5)
    .find()
    .then(res => (articlesArray.value = res))
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
