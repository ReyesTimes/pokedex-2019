<template lang="pug">
    #app
        Modal(v-if="modal.show")
        Header
        Main
</template>

<script>
    import Header from '@/components/Header.vue'
    import Main from '@/components/Main.vue'
    import Modal from '@/components/Modal.vue'

    import { mapState } from 'vuex'

    export default {
        name: 'app',

        computed: {
            ...mapState(['modal'])
        },

        components: {
            Main,
            Header,
            Modal
        },   
    }
</script>

<style lang="stylus">
    @import url('https://fonts.googleapis.com/css?family=Sarabun');

    body, html
        margin: 0px
        paddding: 0px

    *
        box-sizing: border-box

    #app
        background-image url('assets/pokepattern.jpg')
        height 100vh
</style>

