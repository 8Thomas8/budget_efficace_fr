<script setup lang="ts">
useHead({
    meta: [{ name: 'robots', content: 'noindex' }]
})
</script>

<template>
    <div>
        <NavBar />

        <div class="space-y-6 lg:space-y-8">
            <div class="relative bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
                <div class="mx-auto max-w-7xl">
                    <div class="flex flex-1 items-stretch overflow-hidden space-x-12">
                        <main class="flex-1 overflow-y-auto">
                            <section
                                aria-labelledby="primary-heading"
                                class="flex h-full min-w-0 flex-1 flex-col lg:order-last">
                                <div class="max-w-none prose">
                                    <slot />
                                </div>
                            </section>
                        </main>

                        <aside class="hidden w-96 overflow-y-auto lg:block"></aside>
                    </div>
                </div>
            </div>

            <LazyFooter />
        </div>
    </div>
</template>
