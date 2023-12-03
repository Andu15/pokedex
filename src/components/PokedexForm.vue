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
    </form>
</template>
<script>
    export default {
        name: 'PokedexForm',
        props: {
            pokemonData: {
                type: Object,
                default: () => {}
            }
        },
        components: {},
        data(){
            return {
                pokemonName: ''
            }
        },
        computed: {},
        watch: {
            pokemonData(newValue, oldValue){
                if (newValue && newValue.name) {
                    this.pokemonName = newValue.name;
                }
            }
        },
        methods: {
            handleSubmit (e) {
                e.preventDefault()
            },
            emitSearchEvent(){
                this.$emit("search", this.pokemonName.toLowerCase());
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import "@/assets/sass/components/_PokedexForm.scss";
</style>