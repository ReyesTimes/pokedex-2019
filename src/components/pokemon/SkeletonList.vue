<template lang="pug">
    .skeleton__list
        .skeleton--element(v-for="value in 12")
</template>

<style lang="stylus">
    .skeleton
        &__list
            display flex
            flex-wrap wrap

        &--element
            background-color #eaeaea
            width 15.5%
            min-height 200px
            margin-right 1.4%
            margin-bottom 1.5em
            border-radius 5px
            -webkit-box-shadow: 2px 1px 6px 1px rgba(199,199,199,1);
            -moz-box-shadow: 2px 1px 6px 1px rgba(199,199,199,1);
            box-shadow: 2px 1px 6px 1px rgba(199,199,199,1);

            &:nth-child(6n + 0)
                margin-right 0px
</style>

