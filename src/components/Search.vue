<script setup>
import { ref, watch } from 'vue';
import { usePokemonsStore } from '@/stores/pokemons'
import Icons from './Icons.vue';

const storePokemons = usePokemonsStore();


const text = ref('')
const textSearch = ref('Search')

watch(text, () => {
    storePokemons.searchList(text.value)
})

</script>

<template>
    <div class="container">
        <div class="search-container">
            <Icons class="icon-search" name="search" color="#BFBFBF" />
            <input class="search" type="text" :placeholder="textSearch" v-model="text">
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
}

.search-container {
    display: flex;
    gap: 10px;
    width: 100%;
    justify-content: center;
    width: 85%;
    max-width: 570px;
    background: var(--vt-c-white);
    height: 50px;
    margin-bottom: 30px;
    padding: 14px 15px 14px 15px;
    border-radius: 5px;
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.04);
}

.search {
    border: none;
    outline: none;
    display: flex;
    width: 100%;
    height: 20px;
    margin-bottom: 40px;
    align-items: center;
    background: var(--vt-c-white);
}

.icon-search {
    width: 18px;
}
</style>