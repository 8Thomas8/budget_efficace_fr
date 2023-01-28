<template>
    <div>
        <NavBar />

        <HomeHerosection />

        <div class="space-y-6 lg:space-y-8">
            <div class="relative bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
                <LazyHomeLastArticles />
            </div>

            <LazyFooter />
        </div>
    </div>
</template>
