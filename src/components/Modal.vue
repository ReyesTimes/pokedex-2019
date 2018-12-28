<template lang="pug">
    .modal
        .modal__container
            .modal__header
                img(:src='renderURLPokemon(modal.data.id)')
                .modal__info
                    span {{ renderPokemonNumber(modal.data.id) }}
                    strong.modal__info--name {{ modal.data.name }}
                    div(v-if="modal.data.types")
                        span.type--tag(v-for="pokemonType in modal.data.types" :class="`type--${pokemonType.type.name}`") {{ pokemonType.type.name }}
                .modal__bodily
                    span Height: {{ modal.data.height }}
                    span Weight: {{ modal.data.weight }}
            a.modal--close(@click.prevent="closeModal") ✖
</template>

<script>
    import gnrlService from '@/services/index'
    import pokemonMixin from '@/mixins/pokemon'
    import { mapState } from 'vuex'

    export default {
        mixins: [pokemonMixin],

        computed: {
            ...mapState(['modal'])
        },

        created() {
            gnrlService(this.$store.state.modal.url, {}, 'GET', false)
            .then(({ data }) => {
                this.$store.commit('updateDataModal', data)
            })
        },

        methods: {
            closeModal() {
                this.$store.commit('setModal', { show: false, data: {} })
            },
        }
    }
</script>

<style lang="stylus">
    .modal
        background-image: linear-gradient(-180deg, rgba(172, 230, 186, 0.8), rgba(120, 207, 198, 0.8))
        width: 100%
        height: 100vh
        position: fixed
        display: flex
        align-items: center
        justify-content: center

        &__container
            background-color: white
            position relative
            padding 1.5em
            border-radius 4 px
            min-width 30%

        &--close
            cursor pointer
            font-size: 0.6em
            background-color: white
            border: 1px solid #E3E3E3
            padding 0.2em 0.4em
            position: absolute
            top: -10%
            right -3%
        
        &__header
            display flex

        &__info, &__bodily
            display flex
            flex-direction column
            
            &--name
                text-transform capitalize
                margin-bottom 0.5em

    .type
        &--tag
            border-radius 5px
            color #ffffff
            padding 0.2em 0.4em
            font-size 0.8rem
        
        &--fire
            background-color #ff9441
        
        &--water
            background-color #5A8BCD
        
        &--electric
            background-color #F6BD20
</style>

