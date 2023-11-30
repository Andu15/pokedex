<template>
  <div class="pokedex">
    <div class="pokedex-left">
      <div class="pokedex-left-top">
        <div class="light is-sky is-big in-animated"/>
        <div class="light is-red" />
        <div class="light is-yellow" />
        <div class="light is-green" />
      </div>
      <div class="pokedex-screen-container">
        <pokedex-screen />
      </div>
      <div class="pokedex-left-bottom">
        <div>
          <div class="pokedex-left-bottom-lights">
            <div class="light is-blue is-medium dark-shadow" />
            <div class="light is-green is-large dark-shadow" />
            <div class="light is-orange is-large dark-shadow" />
          </div>
          <pokedex-form/>
        </div>
        <div class="arrow-btns-group">
          <button class="arrow-up-btn">
            <img src="@/assets/icons/arrow-up.svg" alt="arriba" />
          </button>
          <button class="arrow-left-btn">
            <img src="@/assets/icons/arrow-left.svg" alt="izquierda" />
          </button>
          <button class="arrow-ok-btn">
            OK
          </button>
          <button class="arrow-right-btn">
            <img src="@/assets/icons/arrow-right.svg" alt="derecha" />
          </button>
          <button class="arrow-down-btn">
            <img src="@/assets/icons/arrow-down.svg" alt="abajo" />
          </button>
        </div>
      </div>
    </div>
    <div class="pokedex-right-front" >
      <div class="pokedex-triangle"></div>
      <p class="pokedex-bar"></p>
    </div>
    <div class="pokedex-right-back" />
  </div>
</template>
<script>
    import pokedexScreen from '@/components/PokedexScreen.vue'
    import pokedexForm from '@/components/PokedexForm.vue'

    import { getRandomPokemonData } from '@/assets/services/pokemonApi'

    export default {
        name: 'PokedexView',
        props: {},
        components: {
          'pokedex-screen': pokedexScreen,
          'pokedex-form' : pokedexForm
        },
        data(){
            return {
              error: false,
              loading: true,
              pokemon: null,
              pokemonId: Math.floor(Math.random() * 806 + 1).toString()
            }
        },
        computed: {},
        watch: {},
        methods: {
        },
        beforeCreate(){},
        created(){
          console.log("this.getRandomPokemonData(pokemonId)", this.getRandomPokemonData(pokemonId))
        },
        beforeMount(){},
        mounted(){},
        beforeUpdate(){},
        updated(){},
        beforeDestroy(){},
        destroyed(){}
    }
</script>
<style lang="scss" scoped>
  @import "@/assets/sass/views/PokedexView.scss";
</style>