<template>
    <section v-if="pokemonData && pokemonData.stats">
        <div class="pokemon-stat"  v-for="(stat, index) in pokemonData.stats" :key="index">
            <p style="line-height: 1px">{{ stat.stat.name }}:</p>
            <progress id="progress-stat" max="100" :value="stat.base_stat">{{ stat.base_stat }}</progress>
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
<style lang="scss"></style>