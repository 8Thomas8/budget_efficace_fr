<script setup lang="ts">
import { Ref } from 'vue'
import { ParsedContent } from '@nuxt/content/dist/runtime/types'

let articlesArray: Ref<Pick<ParsedContent, any>[]> = ref([])

await queryContent('blog')
    .where({ isArticle: { $eq: 'true' } })
    .only(['title', '_path', 'image', '_dir', 'description', 'createdAt'])
    .sort({ createdAt: -1 })
    .limit(6)
    .find()
    .then(res => (articlesArray.value = res))
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
                    Découvrez les <strong>derniers conseils et astuces</strong> sur la gestion d'un budget efficace
                    parmis notre section d'articles. Nous mettons à jour régulièrement notre blog avec des
                    <strong>informations exclusives</strong> sur les meilleures pratiques pour
                    <strong>économiser de l'argent</strong>. Trouvez l'inspiration pour vous aider à atteindre vos
                    objectifs.
                </p>
            </div>

            <div
                v-if="articlesArray.length"
                class="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3 lg:gap-8">
                <template v-for="article in articlesArray">
                    <CardsBlog :article="article" />
                </template>
            </div>
            <div class="mt-10 justify-center sm:flex">
                <div class="rounded-md shadow">
                    <nuxt-link
                        to="/blog"
                        alt="Voir tous les articles"
                        class="escape-link flex w-full items-center justify-center rounded-md bg-primary-base px-8 py-3 text-base font-medium text-white ease-in-out duration-150 hover:bg-secondary-base md:px-10 md:py-4 md:text-lg"
                        >Voir tous les articles
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>
