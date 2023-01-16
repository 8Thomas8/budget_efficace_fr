<script setup lang="ts">
const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())
const showCategories = ref(false)
const showMobileMenu = ref(false)
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
                                <svg
                                    viewBox="0 0 230 105"
                                    class="h-12 w-auto">
                                    <g
                                        transform="matrix(1,0,0,1,0,0)"
                                        fill="#1E293B">
                                        <rect
                                            y="0"
                                            height="1"
                                            width="1"
                                            opacity="0"></rect>
                                        <rect
                                            y="100"
                                            width="230"
                                            height="5"></rect>
                                    </g>
                                    <g
                                        transform="matrix(1.1931883008379087,0,0,1.1931883008379087,-14.316592567455487,-7.702031402353917)"
                                        fill="#7E81FF">
                                        <g xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M73.671,47.992c0.728-0.026,1.286-0.886,1.248-1.923c-0.032-1.036-0.651-1.857-1.377-1.83   c-0.723,0.023-1.283,0.886-1.245,1.924C72.332,47.197,72.947,48.014,73.671,47.992z"></path>
                                            <path
                                                d="M86.613,47.788c-0.598-0.623-1.453-0.866-2.501-0.743c-0.354,0.041-0.708,0.086-1.065,0.133   c-0.627,0.082-1.266,0.166-1.945,0.219c-0.385,0-1.274-0.882-1.479-2.088c-0.736-4.318-2.48-8.032-5.055-11.08   c1.472-1.31,3.224-3.032,1.78-4.753c-1.217-1.449-4.511-1.082-7.743-0.254c-4.761-2.808-10.84-4.329-17.946-4.329   c-16.853,0-28.047,8.739-29.177,22.466c-0.672-0.097-1.475-0.288-2.136-0.679c0.85-0.596,1.445-1.352,1.799-2.131   c0.683-1.506,0.479-3.094-0.498-3.862c-0.673-0.527-1.524-0.656-2.337-0.351c-1.077,0.404-1.876,1.469-2.139,2.85   c-0.184,0.973-0.16,1.853,0.07,2.631c-0.809,0.133-1.813,0.131-3.058-0.103c-0.543-0.102-1.066,0.256-1.167,0.798   c-0.102,0.543,0.255,1.065,0.798,1.167c1.785,0.335,3.278,0.266,4.497-0.065c1.157,1.165,2.85,1.59,4.078,1.749   c-0.001,0.106-0.008,0.211-0.008,0.318c0,7.277,2.69,13.304,7.471,17.596l-0.755,6.347c-0.094,0.796,0.15,1.588,0.669,2.172   c0.519,0.583,1.276,0.918,2.077,0.918h5.697c1.273,0,2.734-0.753,3.474-1.791c0.009-0.014,1.011-1.327,2.141-1.087l0.04-0.189   c2.626,0.537,5.453,0.822,8.465,0.822c2.981,0,5.819-0.272,8.471-0.782l0.032,0.148c1.146-0.242,2.139,1.082,2.141,1.085   c0.738,1.039,2.199,1.792,3.474,1.792h5.7c0.802,0,1.559-0.335,2.078-0.919c0.519-0.585,0.762-1.377,0.667-2.173l-0.708-5.954   c0.63-0.549,1.223-1.123,1.761-1.731c0.625-0.56,1.329-0.81,2.272-0.81c0.775,0,1.564,0.17,2.328,0.334   c1.379,0.296,2.65,0.425,3.486-0.158c1.941-1.353,0.546-3.855-0.287-5.35c-0.05-0.089-0.104-0.187-0.158-0.285   c0.211-0.072,0.439-0.145,0.637-0.208c0.68-0.216,1.45-0.461,2.185-0.813c2.441-1.165,2.576-5.052,2.666-7.625l0.016-0.447   C87.47,49.319,87.207,48.407,86.613,47.788z M18.122,45.102c-0.103-0.443-0.098-0.955,0.013-1.542   c0.154-0.812,0.568-1.235,0.876-1.351c0.065-0.024,0.121-0.034,0.17-0.034c0.103,0,0.174,0.043,0.229,0.085   c0.117,0.092,0.267,0.681-0.087,1.463C19.187,44.023,18.846,44.612,18.122,45.102z M37.569,73.184   c-0.173,0.244-0.732,0.532-1.03,0.532h-5.434l0.512-4.3c1.928,1.277,4.102,2.329,6.492,3.138   C37.898,72.772,37.708,72.988,37.569,73.184z M50.658,71.471c-16.209,0-26.278-8.349-26.278-21.789   c0-10.922,6.65-18.482,17.841-20.931l0.297,2.17L44.5,30.65c1.611-0.221,4.317-0.336,6.158-0.336s4.547,0.115,6.158,0.336   l1.982,0.271l0.292-2.137c1.918,0.427,3.713,0.997,5.359,1.72c-1.12,0.398-2.078,0.773-2.705,1.029   c-0.511,0.209-0.756,0.793-0.547,1.304c0.208,0.511,0.792,0.755,1.304,0.547c0.065-0.027,0.13-0.051,0.195-0.078   c5.693-2.301,11.325-3.49,12.118-2.546c0.281,0.334-1.153,1.601-1.841,2.208c-0.662,0.584-1.346,1.189-1.819,1.804   c-1.116,1.451-2.273,4.604-2.931,6.71c-0.088,0.284-0.169,0.552-0.238,0.791c-0.154,0.531,0.152,1.085,0.683,1.238   c0.093,0.027,0.187,0.04,0.278,0.04c0.434,0,0.833-0.285,0.96-0.723c0.651-2.253,1.688-5.012,2.545-6.405   c2.146,2.61,3.594,5.757,4.213,9.387c0.033,0.195,0.091,0.392,0.146,0.588c0.136,1.077,0.218,2.191,0.218,3.34   c0,5.513-1.618,10.308-4.665,13.904c-0.059,0.051-0.126,0.087-0.184,0.141l-0.107,0.111C67.856,68.71,60.051,71.471,50.658,71.471z    M70.211,73.715h-5.436c-0.298,0-0.856-0.288-1.029-0.531c-0.121-0.169-0.279-0.355-0.455-0.544   c2.378-0.756,4.542-1.737,6.444-2.925L70.211,73.715z M84.421,50.454l-0.017,0.466c-0.146,4.188-0.719,4.906-0.961,5.022   c-0.549,0.263-1.186,0.465-1.8,0.661c-1.429,0.455-3.049,0.97-3.049,2.596c0,0.676,0.36,1.322,0.858,2.216   c0.17,0.305,0.45,0.806,0.649,1.239c-0.19-0.037-0.395-0.081-0.596-0.125c-0.831-0.179-1.865-0.401-2.959-0.401   c-0.242,0-0.467,0.037-0.698,0.059c2.084-3.52,3.181-7.751,3.181-12.446c0-0.022-0.002-0.044-0.002-0.067   c0.619,0.44,1.318,0.724,2.076,0.724c0.083,0,0.166-0.003,0.248-0.01c0.72-0.057,1.409-0.146,2.085-0.234   c0.329-0.043,0.655-0.085,0.983-0.124C84.425,50.134,84.429,50.273,84.421,50.454z"></path>
                                        </g>
                                    </g>
                                    <g
                                        transform="matrix(1.1467342333557329,0,0,1.1467342333557329,108.16522478918644,4.606147085282483)"
                                        fill="#1E293B">
                                        <path
                                            d="M8.24 12 c4.56 0 6.52 2.12 6.52 6.44 l0 1 c0 2.88 -0.88 4.68 -2.84 5.6 l0 0.08 c2.36 0.92 3.28 3 3.28 5.96 l0 2.28 c0 4.32 -2.28 6.64 -6.68 6.64 l-6.92 0 l0 -28 l6.64 0 z M7.96 27.4 l-1.96 0 l0 8.6 l2.52 0 c1.48 0 2.28 -0.68 2.28 -2.76 l0 -2.44 c0 -2.6 -0.84 -3.4 -2.84 -3.4 z M8.12 16 l-2.12 0 l0 7.4 l1.72 0 c1.64 0 2.64 -0.72 2.64 -2.96 l0 -1.56 c0 -2 -0.68 -2.88 -2.24 -2.88 z M20.345 12 l4.4 0 l0 21.6 c0 2 0.88 2.72 2.28 2.72 s2.28 -0.72 2.28 -2.72 l0 -21.6 l4.16 0 l0 21.32 c0 4.48 -2.24 7.04 -6.56 7.04 s-6.56 -2.56 -6.56 -7.04 l0 -21.32 z M39.17 40 l0 -28 l6.96 0 c4.4 0 6.56 2.44 6.56 6.92 l0 14.16 c0 4.48 -2.16 6.92 -6.56 6.92 l-6.96 0 z M46.05 16 l-2.48 0 l0 20 l2.48 0 c1.4 0 2.24 -0.72 2.24 -2.72 l0 -14.56 c0 -2 -0.84 -2.72 -2.24 -2.72 z M64.795 28.4 l0 -4 l6.16 0 l0 8.88 c0 4.48 -2.24 7.04 -6.56 7.04 s-6.56 -2.56 -6.56 -7.04 l0 -14.56 c0 -4.48 2.24 -7.04 6.56 -7.04 s6.56 2.56 6.56 7.04 l0 2.72 l-4.16 0 l0 -3 c0 -2 -0.88 -2.76 -2.28 -2.76 s-2.28 0.76 -2.28 2.76 l0 15.12 c0 2 0.88 2.72 2.28 2.72 s2.28 -0.72 2.28 -2.72 l0 -5.16 l-2 0 z M80.9 16 l0 7.8 l6.04 0 l0 4 l-6.04 0 l0 8.2 l7.6 0 l0 4 l-12 0 l0 -28 l12 0 l0 4 l-7.6 0 z M92.645 16 l0 -4 l13.6 0 l0 4 l-4.6 0 l0 24 l-4.4 0 l0 -24 l-4.6 0 z"></path>
                                    </g>
                                    <g
                                        transform="matrix(0.938269698969538,0,0,0.938269698969538,108.49876812372726,50.04101231410975)"
                                        fill="#1E293B">
                                        <path
                                            d="M6 16 l0 7.8 l6.04 0 l0 4 l-6.04 0 l0 8.2 l7.6 0 l0 4 l-12 0 l0 -28 l12 0 l0 4 l-7.6 0 z M23.425 16 l0 8.44 l5.68 0 l0 4 l-5.68 0 l0 11.56 l-4.4 0 l0 -28 l11.64 0 l0 4 l-7.24 0 z M39.89 16 l0 8.44 l5.68 0 l0 4 l-5.68 0 l0 11.56 l-4.4 0 l0 -28 l11.64 0 l0 4 l-7.24 0 z M51.955000000000005 40 l0 -28 l4.4 0 l0 28 l-4.4 0 z M70.86 29.560000000000002 l4.16 0 l0 3.72 c0 4.48 -2.24 7.04 -6.56 7.04 s-6.56 -2.56 -6.56 -7.04 l0 -14.56 c0 -4.48 2.24 -7.04 6.56 -7.04 s6.56 2.56 6.56 7.04 l0 2.72 l-4.16 0 l0 -3 c0 -2 -0.88 -2.76 -2.28 -2.76 s-2.28 0.76 -2.28 2.76 l0 15.12 c0 2 0.88 2.72 2.28 2.72 s2.28 -0.72 2.28 -2.72 l0 -4 z M90.165 12 l4.48 28 l-4.44 0 l-0.76 -5.08 l-5.4 0 l-0.76 5.08 l-4.04 0 l4.48 -28 l6.44 0 z M86.685 16.96 l-2.08 14.16 l4.24 0 l-2.08 -14.16 l-0.08 0 z M107.95 29.560000000000002 l4.16 0 l0 3.72 c0 4.48 -2.24 7.04 -6.56 7.04 s-6.56 -2.56 -6.56 -7.04 l0 -14.56 c0 -4.48 2.24 -7.04 6.56 -7.04 s6.56 2.56 6.56 7.04 l0 2.72 l-4.16 0 l0 -3 c0 -2 -0.88 -2.76 -2.28 -2.76 s-2.28 0.76 -2.28 2.76 l0 15.12 c0 2 0.88 2.72 2.28 2.72 s2.28 -0.72 2.28 -2.72 l0 -4 z M121.895 16 l0 7.8 l6.04 0 l0 4 l-6.04 0 l0 8.2 l7.6 0 l0 4 l-12 0 l0 -28 l12 0 l0 4 l-7.6 0 z"></path>
                                    </g>
                                </svg>
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
