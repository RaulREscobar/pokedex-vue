<script setup>
import Icons from './Icons.vue';

defineProps({
    text: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: false,
        default: '#F22539'
    },
    icon: {
        type: String,
        required: false,
    }
})
</script>

<template>
    <div class="btn-container">
        <Icons :name="icon" color="#FFFF" class="icon" v-if="icon" />
        <button class="btn">{{ text }}</button>
    </div>
</template>

<style scoped>
.btn-container {
    display: flex;
    justify-content: center;
    color: var(--vt-c-white);
    background-color: v-bind(color);
    width: 50%;
    max-width: 270px;
    height: 44px;
    padding: 11px, 20px, 11px, 20px;
    border-radius: 60px;
    border: none;
}

.icon {
    width: 25px;
}

.btn {
    color: var(--vt-c-white);
    background-color: v-bind(color);
    padding: 11px, 20px, 11px, 20px;
    border-radius: 60px;
    border: none;

}
</style>