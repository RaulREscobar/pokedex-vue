<script setup>
import { ref } from 'vue';
import Title from './Title.vue';
import Paragraph from './Paragraph.vue';
import Btn from '@/components/Btn.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const goTo = (name) => router.push({ name: name })

const title = ref('Uh-oh!');
const text = ref('You look lost on yout journey!');
const textButton = ref('Go to back home');

</script>
<template>
    <div class="container">
        <Title :title="title" />
        <Paragraph :paragraph="text" />
        <Btn :text="textButton" @click="goTo('home')" />
    </div>
</template>
<style scoped>
.container{
    padding: 22px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    height: 70vh;
    align-items: center;
}
</style>