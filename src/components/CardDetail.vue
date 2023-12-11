<script setup>
import Btn from './Btn.vue';
import DetailPokemon from './DetailPokemon.vue';
import IconItemList from './IconItemList.vue';
import Icons from './Icons.vue';
import AvatarPokemon from '@/components/AvatarPokemon.vue'
import ListPokemonsService from '../services/ListPokemonsService.js'
import { useFavoritesStore } from '@/stores/favorites';
import { ref } from 'vue';

const props = defineProps({
    name: { type: String, require: true, },
    isFav: { type: Boolean } 
})

const storeFavorite = useFavoritesStore();
const { addFavorite } = storeFavorite;

const { getPokemon } = ListPokemonsService;
const dataPokemon = ref({})

const response = await getPokemon(props.name)
dataPokemon.value = response.data;

const detail = ref({
    name: props.name,
    weight: dataPokemon.value.weight,
    height: dataPokemon.value.height,
    types : dataPokemon.value.types,
})
const img = ref(dataPokemon.value.sprites.front_default)


</script>

<template>
    <div class="modal" @click="$emit('close')">
        <div class="modal-inner" @click="$emit('no-close')">
            <div class="modal-closed" @click="$emit('close')">
                <Icons name="close" color="#FFF"/>
            </div>
            <AvatarPokemon :img="img" />
            <DetailPokemon :detail="detail" />
            <div class="buttom-bar">
                <Btn text="Share to my friends" v-clipboard:copy="name" />
                <IconItemList :isFav="isFav" @click="addFavorite(name)"/>
            </div>
        </div>
    </div>
</template>

<style scoped>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    padding: 32px 16px 120px;
    height: 100vh;
    width: 100%;
    display: grid;
    place-items: center;
    background-color: #00000099;
    z-index: 5;
}

.modal-closed {
    position: absolute;
    height: 26px;
    width: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 15px;
    right: 15px;
    font-size: 20px;
}

.modal-inner {
    background-color: #fff;
    color: #000;
    position: relative;
    width: 315px;
    max-width: 95%;
    border-radius: 8px;
    box-shadow: 0 5px 5px #000020;
    transition: all 250ms ease-in-out;
    z-index: 99;
}

.buttom-bar {
    display: flex;
    justify-content: space-around;
    margin: 20px 0;
}
</style>