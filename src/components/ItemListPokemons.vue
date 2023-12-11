<script setup>
import { useFavoritesStore } from '@/stores/favorites';
import IconItemList from './IconItemList.vue';
import NameItemList from './NameItemList.vue';
import CardDetail from './CardDetail.vue';
import { ref } from 'vue';

defineProps({
    name: {
        type: String
    },
    url: {
        type: String
    },
})
const storeFavorite = useFavoritesStore();
const { pokemonsFav, addFavorite } = storeFavorite;

const show = ref(false);
const noClose = () => {
show.value = true
}

</script>

<template>
    <div class="item-container">
        <Suspense>
            <CardDetail v-if="show" :name="name" :isFav="pokemonsFav.includes(name)" @close="show = !show"/>
        </Suspense>
        <NameItemList :name="name" @click="show = !show" />
        <IconItemList :isFav="pokemonsFav.includes(name)" @click="addFavorite(name)" />
    </div>
</template>

<style scoped>
.item-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 85%;
    max-width: 570px;
    height: 60px;
    flex-shrink: 0;
    border-radius: 5px;
    background: #FFF;
    padding: 0 20px;
}
</style>