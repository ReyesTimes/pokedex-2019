import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        pokemonList: [],
        currentPokemon: {},
        modal: {
            show: false,
        }
    },

    mutations: {
        setModal(state, modal) {
            state.modal = { ...modal }
        },

        setPokemonList(state, list) {
            state.pokemonList = [...list]
        },
    },
    
    actions: {

    }
})
