import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        pokemonList: [],
        currentPokemon: {},
        modal: {
            show: false,
            data: {}
        }
    },

    mutations: {
        setModal(state, modal) {
            state.modal = { ...modal }
        },

        updateDataModal(state, newData) {
            state.modal.data = {...state.modal.data, ...newData }
        },

        setPokemonList(state, list) {
            state.pokemonList = [...list]
        },

        updatePokemonList(state, list) {
            state.pokemonList = [...list]
        },
    },
})
