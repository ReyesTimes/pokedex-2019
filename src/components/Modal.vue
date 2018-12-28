<template lang="pug">
    .modal(v-if="modal.show")
        .modal__container
            .modal__container--pokemon hola
            a.modal__container--close(@click.prevent="closeModal") ✖
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        computed: {
            ...mapState(['modal'])
        },

        methods: {
            closeModal() {
                this.$store.commit('setModal', { show: false })
            }
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
</style>

