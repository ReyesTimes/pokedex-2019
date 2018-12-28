<template lang="pug">
    .container__list
        a.list__element(v-for="(pokemon, index) in pokemonList" href="#" @click.prevent="openModal(pokemon, (index + 1))")
            div
                img(:src="renderURLPokemon(index + 1)")
            strong.list__element--name {{ pokemon.name }}
            span.list__element--number {{ renderPokemonNumber(index + 1) }}
</template>

<script>
    import pokemonMixin from '@/mixins/pokemon'
    import { mapState } from 'vuex'

    export default {
        mixins: [pokemonMixin],

        computed: {
            ...mapState(['pokemonList']),

        },

        methods: {
            openModal({ url, name }, index) {
                this.$store.commit('setModal', { show: true, url, data: { id: index, name } })
            },
        }
    }
</script>

<style lang="stylus">
    .container__list
        display flex
        flex-wrap wrap
        font-family: 'Sarabun', sans-serif;

    .list
        &__element
            background-color #ffffff
            width 15.5%
            min-height 200px
            margin-bottom 1.5em
            border-radius 5px
            -webkit-box-shadow 2px 1px 7px 0px rgba(199,199,199,1)
            -moz-box-shadow 2px 1px 7px 0px rgba(199,199,199,1)
            box-shadow 2px 1px 7px 0px rgba(199,199,199,1)
            display flex
            flex-direction column
            align-items center
            justify-content center
            padding 0.5em
            text-decoration none
            color black

            @media (min-width: 0px)
                width 100%
                margin 0px
                margin-bottom 1em

            @media (min-width: 768px)
                width 32%
                margin-right 2%
                
                &:nth-child(3n + 0)
                    margin-right 0px

            @media (min-width: 992px)
                width 18.6%
                margin-right 1.7%
                
                &:nth-child(3n + 0)
                    margin-right 1.7%

                &:nth-child(5n + 0)
                    margin-right 0px

            @media (min-width: 1200px)
                width 15.5%
                margin-right 1.4%

                &:nth-child(3n + 0), &:nth-child(5n + 0)
                    margin-right 1.4%

                &:nth-child(6n + 0)
                    margin-right 0px

            &--name
                text-transform capitalize
                margin-bottom 0.5em
            
            &--number
                font-size 0.8em
                color #808080
</style>