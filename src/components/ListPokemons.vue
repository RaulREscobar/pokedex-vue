<script setup>
import ItemListPokemons from './ItemListPokemons.vue';

defineProps({
    pokemons: {
        type: Array,
    }
})

</script>

<template>
    <div class="list-container">
        <ItemListPokemons v-for="(pokemon, i) in pokemons" :key="i" :name="pokemon.name" />
    </div>
</template>

<style scoped>
.list-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 10px;
}
</style>