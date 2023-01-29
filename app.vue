<script lang="ts" setup>
useSeoMeta({
    title: 'Accueil',
    description:
        "Budget Efficace est votre source d'inspiration pour améliorer votre situation financière. Découvrez nos conseils sur l'épargne, l'investissement, la gestion des dépenses et les astuces pour économiser de l'argent. Lisez des histoires inspirantes de personnes qui ont réussi à atteindre leurs objectifs financiers, et obtenez des conseils spécifiques pour les étudiants et les jeunes adultes. Commencez à économiser dès maintenant en parcourant notre archive d'articles sur la gestion de credit-et-dettes efficace."
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
        <Head />
        <Body>
            <NuxtPage />
        </Body>
    </Html>
</template>
