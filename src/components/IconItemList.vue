<script setup>
    defineProps({
        isFav: {
            type: Boolean,
            default: false
        }
    })
</script>

<template>
    <img src="@/assets/fav-active.svg" alt="" v-if="isFav">
    <img src="@/assets/fav-disabled.svg" alt="" v-else>
</template>

<style></style>