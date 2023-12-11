<script setup>
import { ref } from 'vue';
import Title from '@/components/Title.vue';
import Paragraph from '@/components/Paragraph.vue';
import Btn from '@/components/Btn.vue';
import LogoPikachu from '@/components/LogoPikachu.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const goTo = (name) => router.push({ name: name })

const title = ref('Welcome to Pokédex');
const paragraph = ref('The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the Pokémon world.');
const textBtn = ref('Get started');

</script>

<template>
    <div class="container">
        <LogoPikachu />
        <Title :title=title />
        <Paragraph :paragraph=paragraph />
        <Btn :text="textBtn" @click="goTo('list')" />
    </div>
</template>    

<style scoped>
.container {
    padding: 22px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 80vh;
    align-items: center;
}
</style>