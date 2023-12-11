import { ref } from 'vue'
import { defineStore } from 'pinia';

export const useFavoritesStore = defineStore('favorites', () => {

  const pokemonsFav = ref([]);

  function setPokemonsFav() {
    localStorage.getItem('pokeFav') ? null : localStorage.setItem("pokeFav", null)
    const pokeFav = localStorage.getItem('pokeFav').split(",");
    pokemonsFav.value = pokeFav;
  }
  setPokemonsFav()

  function deleteFavorite(pokemon) {
    const index = pokemonsFav.value.indexOf(pokemon);
    pokemonsFav.value.splice(index, 1)
    localStorage.setItem("pokeFav", pokemonsFav.value)
  }

  function addFavorite(pokemon, url) {
    if (pokemonsFav.value.includes(pokemon)) {
      deleteFavorite(pokemon)
    } else {
      pokemonsFav.value.push(pokemon)
      localStorage.setItem("pokeFav", pokemonsFav.value)
    }
  }

  return { pokemonsFav, addFavorite, setPokemonsFav }
})
