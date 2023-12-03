<template>
    <section class="pokedex-screen">
        <div class="pokemon-info" v-if="loading">
            <initial-transition />
        </div>
        <div class="pokemon-info" v-else-if="error">
            <Pokeball/>
        </div>
        <div class="pokemon-info" else>
            <img
            class="pokemon-img"
            v-if="pokemonData && pokemonData.sprites && pokemonData.sprites.other && pokemonData.sprites.other.dream_world.front_default"
            v-bind:src="pokemonData.sprites.other.dream_world.front_default"
            :alt="pokemonData.name" />
        </div>
    </section>
</template>
<script>
    import Pokeball from '@/components/Pokeball.vue'
    import InitialTransitionView from '@/views/InitialTransitionView.vue'

    export default {
        name: 'PokedexScreen',
        props: {
            pokemonData: {
                type: Object,
                default: () => {}
            },
            loading: {
                type: Boolean,
                default: () => false
            },
            error: {
                type: Boolean,
                default: () => false
            }
        },
        components: {
            Pokeball,
            "initial-transition" : InitialTransitionView
        }
    }
</script>
<style lang="scss" scoped>
    @import "@/assets/sass/components/_PokedexScreen.scss";
</style>