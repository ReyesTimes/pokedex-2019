const pokemonMixin = {
    methods: {
        renderURLPokemon(value) {
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${value}.png`
        },

        renderPokemonNumber(value) {
            let n_times = (3 - (value).toString().length) + 1

            return `#${Array(n_times).join('0').concat(value)}`
        }
    }
}

export default pokemonMixin