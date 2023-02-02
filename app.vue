<script lang="ts" setup>
useHead({
    htmlAttrs: {
        lang: 'fr'
    },
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/images/favicon.ico' }]
})
useSeoMeta({
    title: 'Accueil',
    description:
        '"Améliorez votre situation financière avec Budget Efficace. Conseils sur l\'épargne, investissement, gestion des dépenses, astuces pour économiser. Histoires inspirantes, conseils pour étudiants/jeunes adultes. Parcourez notre archive pour économiser dès maintenant.'
})
defineOgImageScreenshot({
    alt: 'Accueil Budget Efficace'
})
useSchemaOrg([
    defineOrganization({
        name: 'Budget Efficace',
        logo: '/images/logo/credit-et-dettes-efficace.svg'
    }),
    defineWebSite({
        name: 'Budget Efficace'
    }),
    defineWebPage()
])
</script>

<template>
    <Html>
        <Body>
            <NuxtPage />
        </Body>
    </Html>
</template>
