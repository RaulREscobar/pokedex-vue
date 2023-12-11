import { ref, computed } from 'vue'
import { defineStore } from 'pinia';
import ListPokemonsService from '../services/ListPokemonsService.js'

const { getAllPokemons, getPokemon } = ListPokemonsService
const response = await getAllPokemons()

export const usePokemonsStore = defineStore('pokemons', () => {
  
  const pokemonsList = ref([]);

  function setPokemons(){ 
    pokemonsList.value = response.data.results 
  }
  
 function setPokemonsFavorite() {
    let storage = localStorage.getItem('pokeFav')
    let arrayStorage = storage.split(',')
    
    pokemonsList.value = []
    arrayStorage.forEach( pokemon => {
      
      if(pokemon !== "null"){
        pokemonsList.value.push({name:pokemon})
      }
    })
    console.log(pokemonsList.value)
  }

  async function searchList(text) {
    const pokemonsFiltered = response.data.results.filter((pokemon) => {
      return pokemon.name.includes(text)
    })
    pokemonsList.value = pokemonsFiltered
  }

  return { pokemonsList, setPokemons, setPokemonsFavorite, searchList  }
})
