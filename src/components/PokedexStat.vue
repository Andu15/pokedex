<template>
    <section v-if="pokemonData && pokemonData.stats">
        <div class="pokemon-stat"  v-for="(stat, index) in pokemonData.stats" :key="index">
            <p class="pokemon-stat-name" >{{ stat.stat.name.toUpperCase() }}:</p>
            <div class="pokemon-stat-progress">
                <progress class="pokemon-stat-progress-bar" id="progress-stat" max="200" :value="stat.base_stat" />
                <span class="pokemon-stat-base">{{ stat.base_stat }}</span>
            </div>
        </div>
    </section>
</template>
<script>
    export default {
        name: 'PokedexStat',
        props: {
            pokemonData: {
                type: Object,
                default: () => {}
            }
        },
        components: {},
        data(){
            return {
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
<style lang="scss">
    @import "@/assets/sass/components/PokedexStat.scss";
</style>