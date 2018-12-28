<template lang="pug">
    .container__list
        .container__list--element(v-for="pokemon in pokemonList")
            div {{ pokemon.name }}
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        computed: {
            ...mapState(['pokemonList'])
        },    
    }
</script>

<style lang="stylus">
    .container__list
        display flex
        flex-wrap wrap

        &--element
            background-color #ffffff
            width 15.5%
            min-height 200px
            margin-right 1.4%
            margin-bottom 1.5em
            border-radius 5px
            -webkit-box-shadow 2px 1px 7px 0px rgba(199,199,199,1)
            -moz-box-shadow 2px 1px 7px 0px rgba(199,199,199,1)
            box-shadow 2px 1px 7px 0px rgba(199,199,199,1)
            display flex
            justify-content center
            padding 0.5em

            &:nth-child(6n + 0)
                margin-right 0px
</style>