<script setup>
import BottomBarNav from '@/components/BottomBarNav.vue';
import ListPokemons from '@/components/ListPokemons.vue';
import Search from '@/components/Search.vue';
import Loading from '@/components/Loading.vue';
import EmptyList from '@/components/EmptyList.vue';
import { watch, ref } from 'vue';
import { usePokemonsStore } from '@/stores/pokemons';

const storePokemons = usePokemonsStore();
storePokemons.setPokemons()

const list = ref(storePokemons.pokemonsList);
const loading = ref(false)

watch(storePokemons, () => {
    loading.value = true;
    list.value = storePokemons.pokemonsList;
    loading.value = false;
})

</script>

<template>
    <div v-if="loading">
        <Loading />
    </div>
    <div v-else>
        <Search />
        <div>
            <ListPokemons :pokemons="list" />
            <EmptyList v-if="!loading && list.length === 0" />
            <BottomBarNav />
        </div>
    </div>
</template>

