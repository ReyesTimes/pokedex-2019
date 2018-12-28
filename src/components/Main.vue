<template lang="pug">
    main
        Search
        PokemonContainer
</template>

<script>
    import Search from '@/components/Search.vue'
    import PokemonContainer from '@/components/pokemon/PokemonContainer.vue'

    export default {
        components: {
            Search,
            PokemonContainer
        }    
    }
</script>
