<script setup lang="ts">
const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())
const showCategories = ref(false)
const showMobileMenu = ref(false)

const closeMobileMenu = () => {
    showMobileMenu.value = false
    showCategories.value = false
}
</script>

<template>
    <div>
        <nav class="bg-white shadow border-b">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="flex h-16 justify-between">
                    <div class="flex">
                        <div class="flex flex-shrink-0 items-center">
                            <nuxt-link
                                to="/"
                                title="Accueil">
                                <img
                                    src="/images/logo/budget-efficace.svg"
                                    class="h-12 w-auto"
                                    alt="Logo budget efficace" />
                            </nuxt-link>
                        </div>
                        <div class="hidden sm:space-x-8 sm:ml-6 sm:flex">
                            <template v-for="item in navigation">
                                <template v-if="!Object.keys(item).includes('children')">
                                    <nuxt-link
                                        :to="item._path"
                                        :title="item.title"
                                        class="escape-link ease-in-out duration-150 hover:text-primary-base inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
                                        {{ item.title }}
                                    </nuxt-link>
                                </template>
                                <template v-else>
                                    <template v-if="!item._path.includes('legislation')">
                                        <div class="relative inline-flex cursor-pointer">
                                            <a
                                                @click.prevent="showCategories = !showCategories"
                                                class="escape-link ease-in-out duration-150 hover:text-primary-base inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
                                                {{ item.title }}
                                                <svg
                                                    :class="showCategories ? '-rotate-180' : 'rotate-0'"
                                                    class="ml-2 h-5 w-5 transform text-gray-400 transition-all duration-300 ease-in-out group-hover:text-gray-500"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true">
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                            </a>
                                            <Transition
                                                class="transform transition-all duration-150 ease-in-out"
                                                enter-to-class="opacity-100"
                                                enter-from-class="-translate-y-4 opacity-0"
                                                leave-from-class="opacity-100"
                                                leave-to-class="-translate-y-4 opacity-0">
                                                <div
                                                    v-if="showCategories"
                                                    @click="showCategories = !showCategories"
                                                    class="absolute z-10 -ml-4 mt-[3.75rem] w-screen max-w-xs transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                                                    <div
                                                        class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                                        <div
                                                            class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                                            <template v-for="subItem in item.children">
                                                                <nuxt-link
                                                                    v-if="subItem._path !== '/blog'"
                                                                    :to="subItem._path"
                                                                    class="escape-link ease-in-out duration-150 hover:text-primary-base inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500">
                                                                    {{ subItem.title }}
                                                                </nuxt-link>
                                                            </template>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Transition>
                                        </div>
                                    </template>
                                </template>
                            </template>
                        </div>
                    </div>
                    <div class="-mr-2 flex items-center sm:hidden">
                        <button
                            type="button"
                            @click="showMobileMenu = !showMobileMenu"
                            class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                            :aria-expanded="showMobileMenu">
                            <span class="sr-only">Ouvrir le menu</span>

                            <svg
                                v-if="!showMobileMenu"
                                class="block h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                aria-hidden="true">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>

                            <svg
                                v-if="showMobileMenu"
                                class="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                aria-hidden="true">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <Transition
                class="transform transition-all duration-150 ease-in-out"
                enter-to-class="opacity-100"
                enter-from-class="-translate-y-4 opacity-0"
                leave-from-class="opacity-100"
                leave-to-class="-translate-y-4 opacity-0">
                <div
                    v-if="showMobileMenu"
                    class="fixed bg-white z-[1] top-16 w-full border-b-2 sm:hidden"
                    id="mobile-menu">
                    <div class="pt-2 pb-3 space-y-1">
                        <template v-for="item in navigation">
                            <template v-if="!Object.keys(item).includes('children')">
                                <nuxt-link
                                    :to="item._path"
                                    :title="item.title"
                                    class="block border-l-4 border-transparent py-2 pr-4 pl-3 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                                    >{{ item.title }}
                                </nuxt-link>
                            </template>
                            <template v-else>
                                <template v-if="!item._path.includes('legislation')">
                                    <div class="relative inline-flex w-full cursor-pointer flex-col">
                                        <a
                                            @click.prevent="showCategories = !showCategories"
                                            class="flex w-full items-center border-l-4 border-transparent py-2 pr-4 pl-3 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                                            >{{ item.title }}
                                            <svg
                                                :class="showCategories ? '-rotate-180' : 'rotate-0'"
                                                class="ml-2 h-5 w-5 transform transition-all ease-in-out duration-300text-gray-400 group-hover:text-gray-500"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                aria-hidden="true">
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                        </a>
                                        <Transition
                                            class="transform transition-all duration-150 ease-in-out"
                                            enter-to-class="opacity-100"
                                            enter-from-class="-translate-y-4 opacity-0"
                                            leave-from-class="opacity-100"
                                            leave-to-class="-translate-y-4 opacity-0">
                                            <div
                                                v-if="showCategories"
                                                @click="closeMobileMenu()"
                                                class="pl-4">
                                                <template v-for="subItem in item.children">
                                                    <nuxt-link
                                                        v-if="subItem._path !== '/blog'"
                                                        :to="subItem._path"
                                                        class="block border-l-4 border-transparent py-2 pr-4 pl-3 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700">
                                                        {{ subItem.title }}
                                                    </nuxt-link>
                                                </template>
                                            </div>
                                        </Transition>
                                    </div>
                                </template>
                            </template>
                        </template>
                    </div>
                </div>
            </Transition>
        </nav>
    </div>
</template>
