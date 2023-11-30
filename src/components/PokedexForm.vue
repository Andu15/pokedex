<template>
    <form class="pokemon-form" @submit="handleSubmit"> 
        <input
        class="pokemon-input"
        type="text"
        name="pokemon"
        v-model="pokemonName"
        placeholder="Busca tu pokemon"
        autocomplete="off" 
        @input="emitSearchEvent" />
        <!-- <input
        type="submit"
        class="pokemon-btn"
        value="Ir"
        /> -->
    </form>
</template>
<script>
    export default {
        name: 'PokedexForm',
        props: {},
        components: {},
        data(){
            return {
                pokemonName: ''
            }
        },
        computed: {},
        watch: {},
        methods: {
            handleSubmit (e) {
                e.preventDefault()
                // const pokemonName = this.pokemonName
            },
            emitSearchEvent(){
                this.$emit("search", this.pokemonName);
            }
        },
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
    @import "@/assets/sass/components/_PokedexForm.scss";
</style>