import Api from './Api'

export default {
    getPokemons() {
        return Api().get('/')
    }, 
    getPokemon(name) {
        return Api().get(`/${name}`)
    },
    getAllPokemons() {
        return Api().get('?limit=10000&offset=0')
    },

}