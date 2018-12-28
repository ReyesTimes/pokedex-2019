<template lang="pug">
    #app
        Modal
        Header
        Main
</template>

<script>
    import Header from '@/components/Header.vue'
    import Main from '@/components/Main.vue'
    import Modal from '@/components/Modal.vue'

    export default {
        name: 'app',

        components: {
            Main,
            Header,
            Modal
        },   
    }
</script>

<style lang="stylus">
    body, html
        margin: 0px
        paddding: 0px

    *
        box-sizing: border-box

    #app
        background-image url('assets/pokepattern.jpg')
        height 100vh
</style>

