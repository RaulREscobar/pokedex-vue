import axios from 'axios';

export default () => {
    return axios.create({
        baseURL: 'https://pokeapi.co/api/v2/pokemon',
        headers: {
            'Accept':'aplication/json',
            'Content-Type': 'aplication/json'
        }
    })
}