<template lang="pug">
    #app
        Header
        Main
</template>

<script>
  import Header from '@/components/Header.vue'
  import Main from '@/components/Main.vue'

  export default {
      name: 'app',
      components: {
          Main,
          Header
      }
  }
</script>
