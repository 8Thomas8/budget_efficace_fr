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
                        class="text-sm font-medium text-primary-base escape-link hover:text-secondary-base ease-in-out duration-150">
                        <span>{{ article._dir[0].toUpperCase() + article._dir.slice(1) }} </span>
                    </p>
                    <div class="mt-2 block">
                        <p class="text-xl font-semibold text-gray-900">{{ article.title }}</p>
                        <p class="mt-3 text-base text-gray-500 line-clamp-5">{{ article.description }}</p>
                    </div>
                </div>
                <div class="mt-6 flex items-center">
                    <!--                    <div class="flex-shrink-0">-->
                    <!--                        <a href="#">-->
                    <!--                            <span class="sr-only">{{ article.author }}</span>-->
                    <!--                            <img-->
                    <!--                                class="h-10 w-10 rounded-full"-->
                    <!--                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"-->
                    <!--                                alt="" />-->
                    <!--                        </a>-->
                    <!--                    </div>-->
                    <!--                    <div class="ml-3">-->
                    <!--                        <p class="text-sm font-medium text-gray-900">-->
                    <!--                            <a-->
                    <!--                                href="#"-->
                    <!--                                class="hover:underline"-->
                    <!--                                >{{ article.author }}</a-->
                    <!--                            >-->
                    <!--                        </p>-->
                    <div class="flex text-sm text-gray-500 space-x-1">
                        <time datetime="{{article.createdAt}}"
                            >{{ new Date(article.createdAt).toLocaleDateString() }}
                        </time>
                        <!--                        <span aria-hidden="true">&middot;</span>-->
                        <!--                        <span>6 min read</span>-->
                    </div>
                    <!--                    </div>-->
                </div>
            </div>
        </nuxt-link>
    </div>
</template>
