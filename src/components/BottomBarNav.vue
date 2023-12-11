<script setup>
import { ref } from 'vue';
import Btn from './Btn.vue';
import { usePokemonsStore } from '@/stores/pokemons';

const storePokemons = usePokemonsStore();

const textAll = ref("All");
const textFavorites = ref("Favorites");
const colorActive = ref("#F22539");
const colorDisable = ref('#BFBFBF');
const colorAll = ref(colorActive.value);
const colorFav = ref(colorDisable.value)

const viewAll = () => {
    colorAll.value = colorActive.value
    colorFav.value = colorDisable.value
    storePokemons.setPokemons()
}

const viewFavorites = () => {
    colorAll.value = colorDisable.value
    colorFav.value = colorActive.value
    storePokemons.setPokemonsFavorite()
}

</script>

<template>
    <div class="bottom-bar">
        <Btn :text=textAll icon="list" :color="colorAll" @click="viewAll" />
        <Btn :text=textFavorites icon="star" :color="colorFav" @click="viewFavorites"/>
    </div>
</template>

<style scoped>
.bottom-bar {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: sticky;
    bottom: 0;
    padding: 30px, 18px;
    background: #FFF;
    flex-shrink: 0;
    box-shadow: 0px -5px 4px 0px rgba(0, 0, 0, 0.05);
    gap: 30px;
}
</style>