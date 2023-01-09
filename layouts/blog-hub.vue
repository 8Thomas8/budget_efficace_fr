<script setup lang="ts">
const data = await queryContent('/blog/category1').find()
</script>

<template>
    <div>
        <p>Blog Hub layout</p>
        <pre
            v-for="(item, index) in data"
            :key="index">
      {{ item }}
    </pre
        >
        <hr />
        <slot />
    </div>
</template>
