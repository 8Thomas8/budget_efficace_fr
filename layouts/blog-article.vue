<template>
    <div>
        <NavBar />

        <div class="space-y-6 lg:space-y-8">
            <div class="relative bg-gray-50 px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
                <div class="mx-auto max-w-7xl">
                    <!-- Main content -->
                    <div class="flex flex-1 space-x-12 items-stretch overflow-hidden">
                        <main class="flex-1 overflow-y-auto">
                            <!-- Primary column -->
                            <section
                                aria-labelledby="primary-heading"
                                class="flex h-full min-w-0 flex-1 flex-col lg:order-last">
                                <!-- Your content -->
                                <div class="prose max-w-none">
                                    <slot />
                                </div>
                            </section>
                        </main>

                        <!-- Secondary column (hidden on smaller screens) -->
                        <aside class="hidden w-96 overflow-y-auto lg:block">
                            <!-- Your content -->
                        </aside>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    </div>
</template>
