<template lang="pug">
    .container
        List(v-if="!loading")
        SkeletonList(v-if="loading")
</template>

<script>
    import SkeletonList from '@/components/pokemon/SkeletonList.vue'
    import List from '@/components/pokemon/List.vue'

    import gnrlService from '@/services/index'

    export default {
        components: {
            SkeletonList,
            List
        },

        data() {
            return {
                loading: true
            }
        },

        mounted() {
            
            gnrlService('pokemon', { limit: 50 })
            .then(({ data }) => {
                let { results: list } = data

                this.loading = false
                this.$store.commit('setPokemonList', list)
            })
        },
    }
</script>

<style lang="stylus">
    .container
        width 100%
        padding-right 15px
        padding-left 15px
        margin-right auto
        margin-left auto

        @media (min-width: 576px)
            max-width: 540px

        @media (min-width: 768px)
            max-width: 720px

        @media (min-width: 992px)
            max-width: 960px

        @media (min-width: 1200px)
            max-width: 1140px
</style>

