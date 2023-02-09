<script setup lang="ts">
const { page } = useContent()
</script>

<template>
    <div>
        <NavBar />

        <div class="space-y-6 lg:space-y-8">
            <div class="relative bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
                <div class="mx-auto max-w-7xl space-y-8">
                    <div class="mx-auto max-w-screen-lg prose">
                        <span class="text-center w-full inline-block text-gray-500 text-sm">
                            <time datetime="{{page.createdAt}}"
                                >{{ new Date(page.createdAt).toLocaleDateString() }}
                            </time>
                        </span>
                        <h1 class="text-center">
                            {{ page.title }}
                        </h1>
                        <p class="mt-3 text-center text-gray-500">
                            {{ page.chapeau }}
                        </p>
                    </div>

                    <div class="flex flex-1 items-stretch space-x-12">
                        <main class="flex-1">
                            <section
                                aria-labelledby="primary-heading"
                                class="flex h-full min-w-0 flex-1 flex-col lg:order-last">
                                <div class="max-h-[360px] border-2 rounded-lg border-primary-base">
                                    <img
                                        :src="page.image.src"
                                        :alt="page.image.alt"
                                        class="h-full w-full rounded-md object-cover object-top shadow-lg" />
                                </div>
                                <div class="max-w-none prose">
                                    <slot />
                                </div>
                            </section>
                        </main>

                        <aside class="hidden w-96 lg:block">
                            <div class="lg:sticky lg:top-8">
                                <LazyAsideLastArticles />
                            </div>
                        </aside>
                    </div>
                </div>
            </div>

            <LazyFooter />
        </div>
    </div>
</template>
