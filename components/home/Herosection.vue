<template>
    <div class="relative bg-gray-50">
        <main class="lg:relative">
            <div class="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-48 lg:text-left">
                <div class="px-6 sm:px-8 lg:w-1/2 xl:pr-16">
                    <h1
                        class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                        <span class="block xl:inline">Data to enrich your</span>
                        <span class="block text-primary-base xl:inline"> online business</span>
                    </h1>
                    <p class="mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit
                        sunt amet fugiat veniam occaecat fugiat aliqua.
                    </p>
                    <div class="mt-10 sm:flex sm:justify-center lg:justify-start">
                        <div class="rounded-md shadow">
                            <nuxt-link
                                to="/blog"
                                alt="Voir tous les articles"
                                class="flex w-full items-center justify-center rounded-md border border-transparent ease-in-out duration-150 bg-primary-base px-8 py-3 text-base font-medium text-white hover:bg-secondary-base md:px-10 md:py-4 md:text-lg escape-link"
                                >Voir tous les articles</nuxt-link
                            >
                        </div>
                    </div>
                </div>
            </div>
            <div class="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
                <img
                    class="absolute inset-0 h-full w-full object-cover"
                    src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
                    alt="" />
            </div>
        </main>
    </div>
</template>
