<script setup>
defineProps({
    paragraph:{
        type: String,
        required: true,
    }
})
</script>

<template>
    <p>{{ paragraph }}</p>
</template>