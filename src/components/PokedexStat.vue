<template>
    <!-- <div v-if="pokemonData.stats">
        <li class="pokemon-stat"  v-for="(stat, index) in pokemonData.stats" :key="index">
            <span class="stat-name">
                <b>{{ stat.stat.name }}: </b>
            </span>
            <span>{{ stat.base_stat }}</span>
        </li>
    </div> -->
    <div class="stats">
        <canvas id="stats" ref="stats" width="200" height="200"></canvas>
    </div>
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
<style lang="scss"></style>