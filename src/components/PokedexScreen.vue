<template>
    <section class="pokedex-screen">
        <div v-if="status==='wait'">
            <p>Por favor, ingresa el nombre de tu pokemón</p>
            <Pokeball />
        </div>
        <div v-else-if="status==='loading'">
            <img src="" alt="Estamos cargando la información" class="pokedex-no-screen"/>
        </div>
        <div v-else-if="status==='error'">
            <img src="" alt="Hubo un error" class="pokedex-no-screen"/>
        </div>
        <div v-else></div>
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