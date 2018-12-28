<template lang="pug">
    .skeleton__list
        .skeleton--element(v-for="value in 18")
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
            margin-bottom 1.5em
            border-radius 5px

            @media (min-width: 0px)
                width 100%
                margin 0px
                margin-bottom 1em

            @media (min-width: 768px)
                width 32%
                margin-right 2%
                
                &:nth-child(3n + 0)
                    margin-right 0px

            @media (min-width: 992px)
                width 18.6%
                margin-right 1.7%
                
                &:nth-child(3n + 0)
                    margin-right 1.7%

                &:nth-child(5n + 0)
                    margin-right 0px

            @media (min-width: 1200px)
                width 15.5%
                margin-right 1.4%

                &:nth-child(3n + 0), &:nth-child(5n + 0)
                    margin-right 1.4%

                &:nth-child(6n + 0)
                    margin-right 0px
</style>

