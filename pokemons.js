const axios = require('axios');

const getPokemones = async() => {

    try {
        const { data: { results } } = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=150')

        const requests = results.map(x => axios.get(x.url))

        const result = await Promise.all(requests)

        return result.map(x => x.data).sort(() => .5 - Math.random())

    } catch (error) {
        console.log(error)
    }

}

module.exports = getPokemones