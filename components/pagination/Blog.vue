<script setup lang="ts">
import { ParsedContent } from '@nuxt/content/dist/runtime/types'

const props = defineProps({
    activePage: {
        type: Number,
        required: true,
        default: 1
    },
    prevArticles: {
        type: Array,
        required: true,
        default: [] as ParsedContent[]
    },
    nextArticles: {
        type: Array,
        required: true,
        default: [] as ParsedContent[]
    }
})
const emits = defineEmits(['nextPage', 'prevPage'])
</script>

<template>
    <div>
        <nav class="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0">
            <div class="-mt-px flex w-0 flex-1">
                <a
                    @click.prevent="$emit('prevPage')"
                    :class="activePage == 1 ? 'invisible' : 'cursor-pointer'"
                    class="inline-flex items-center border-t-2 border-transparent pt-4 pr-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
                    <!-- Heroicon name: mini/arrow-long-left -->
                    <svg
                        class="mr-3 h-5 w-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true">
                        <path
                            fill-rule="evenodd"
                            d="M18 10a.75.75 0 01-.75.75H4.66l2.1 1.95a.75.75 0 11-1.02 1.1l-3.5-3.25a.75.75 0 010-1.1l3.5-3.25a.75.75 0 111.02 1.1l-2.1 1.95h12.59A.75.75 0 0118 10z"
                            clip-rule="evenodd" />
                    </svg>
                    Articles précédent
                </a>
            </div>
            <div class="-mt-px flex w-0 flex-1 justify-end">
                <a
                    @click.prevent="$emit('nextPage')"
                    :class="nextArticles.length < 1 ? 'invisible' : 'cursor-pointer'"
                    class="inline-flex items-center border-t-2 border-transparent pt-4 pl-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
                    Articles suivant
                    <!-- Heroicon name: mini/arrow-long-right -->
                    <svg
                        class="ml-3 h-5 w-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true">
                        <path
                            fill-rule="evenodd"
                            d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                            clip-rule="evenodd" />
                    </svg>
                </a>
            </div>
        </nav>
    </div>
</template>
