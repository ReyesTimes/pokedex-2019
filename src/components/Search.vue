<template lang="pug">
    .search
        form(@submit.prevent="searchPokemon")
            input(
                type="text" 
                placeholder="Search by keywords..."
                v-model="searchValue"
            )
</template>


<script>
    export default {
        data() {
           return {
               searchValue: ''
           } 
        },

        methods: {
            searchPokemon() {
                /*if (this.searchValue) {
                    console.log('uno')
                } else {
                    console.log('dos')
                }*/
            }
        },
    }
</script>


<style lang="stylus">
    .search
        text-align center
        padding 1em 0 2em
        width 45%
        margin 0 auto

    input
            display block
            width 100%
            padding .375rem .75rem
            font-size 0.8rem
            line-height 1.5
            color #495057
            background-color #fff
            background-clip padding-box
            border 1px solid #ced4da
            border-radius .25rem
            transition border-color .15s ease-in-out,box-shadow .15s ease-in-out
</style>
