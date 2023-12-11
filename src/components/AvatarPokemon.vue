<script setup>
defineProps({
    img: { type: String, required: true }
})
</script>
<template>
    <div class="bg-image">
        <img :src="img" width="180" height="220px" alt="">
    </div>
</template>
<style scoped>
.bg-image {
    background-image: url('@/assets/bg-pokemon.png');
    width: 100%;
    width: 315px;
    height: 220px;
    display: grid;
    place-items: center;
    border-radius: 5px;
}
</style>