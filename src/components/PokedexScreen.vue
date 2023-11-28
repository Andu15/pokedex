<template>
    <section class="pokedex-screen">
        <div v-if="status==='wait'" style="display:flex; justify-content: center;">
            <Pokeball />
        </div>
        <div v-else-if="status==='loading'">
            <img src="" alt="Estamos cargando la información" class="pokedex-no-screen"/>
        </div>
        <div v-else-if="status==='error'">
            <img src="" alt="Hubo un error" class="pokedex-no-screen"/>
        </div>
        <div v-else class="pokemon-info" >
            <!-- <h2 class="pokemon-name">{{pokemon.name}}</h2>
            <img
            class="pokemon-img"
            v-bind:src="pokemon.sprites.front_default"
            v-bind:alt="pokemon.name" />
            <ul class="pokemon-stats">
                <Stat
                v-bind:item="item"
                v-for="item in pokemon.stats"
                v-bind:key="item.stat.name"
                />
            </ul> -->
        </div>
    </section>
</template>
<script>
    import Pokeball from '@/components/Pokeball.vue'

    export default {
        name: 'PokedexScreen',
        props: {},
        components: {
            Pokeball,
        },
        data(){
            return {
                // error | loading | done | wait
                status: 'wait'
            }
        },
        computed: {},
        watch: {},
        methods: {},
        beforeCreate(){},
        created(){},
        beforeMount(){},
        mounted(){},
        beforeUpdate(){},
        updated(){},
        beforeDestroy(){},
        destroyed(){}
    }
</script>
<style lang="scss" scoped>
    @import "@/assets/sass/components/_PokedexScreen.scss";
</style>