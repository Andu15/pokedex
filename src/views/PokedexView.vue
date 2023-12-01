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
        <pokedex-screen :pokemonData="pokemon"/>
      </div>
      <div class="pokedex-left-bottom">
        <div>
          <div class="pokedex-left-bottom-lights">
            <div class="light is-blue is-medium dark-shadow" />
            <div class="light is-green is-large dark-shadow" />
            <div class="light is-orange is-large dark-shadow" />
          </div>
          <pokedex-form :pokemonData="pokemon" @search="handleSearch"/>
        </div>
        <div class="arrow-btns-group">
          <button class="arrow-up-btn" @click="getPokemonDecrease">
            <img src="@/assets/icons/arrow-up.svg" alt="arriba" />
          </button>
          <button class="arrow-left-btn">
            <img src="@/assets/icons/arrow-left.svg" alt="izquierda" />
          </button>
          <button class="arrow-ok-btn" @click="searchPokemon">
            OK
          </button>
          <button class="arrow-right-btn">
            <img src="@/assets/icons/arrow-right.svg" alt="derecha" />
          </button>
          <button class="arrow-down-btn" @click="getPokemonIncrease">
            <img src="@/assets/icons/arrow-down.svg" alt="abajo" />
          </button>
        </div>
      </div>
    </div>
    <div class="pokedex-right-front" >
      <div class="pokedex-triangle"></div>
      <p class="pokedex-bar"></p>
    </div>
    <div class="pokedex-right-back" >
      <div style="width:100%">
        <div class="readonly-textarea" v-html="pokemonInformation" readonly></div>
        <div>
          <p class="pokedex-type-text"><strong>Tipo:</strong></p>
          <img class="pokedex-type-img" v-for="type in pokemonTypes" :key="type.id" :src="type.img" :alt="type.value" />
        </div>
      </div>
      <div>
        <!-- <section>
          <ol v-if="pokemon && pokemon.moves">
            <li v-for="(move, index) in pokemon.moves" :key="index">{{ move.move.name }}</li>
          </ol>
        </section> -->
        <section>
          <!-- <ul class="pokemon-stats"> -->
            <pokedex-stat :pokemonData="pokemon" />
          <!-- </ul> -->
        </section>
      </div>
    </div>
  </div>
</template>
<script>
    import pokedexScreen from '@/components/PokedexScreen.vue'
    import pokedexForm from '@/components/PokedexForm.vue'
    import pokedexStat from '@/components/PokedexStat.vue'

    import { getRandomPokemonData } from '@/assets/services/pokemonApi'
    import pokemonTypes from '@/assets/utilities/pokemonTypes.js'

    export default {
        name: 'PokedexView',
        props: {},
        components: {
          'pokedex-screen': pokedexScreen,
          'pokedex-form' : pokedexForm,
          'pokedex-stat': pokedexStat
        },
        data(){
            return {
              error: false,
              loading: false,
              pokemon: null,
              isPokemonFound: false,
              // pokemonId: Math.floor(Math.random() * 806 + 1).toString(),
              counterId: 1,
              searchedPokemonName: '',
              pokemonInformation: '',
              pokemonTypes: []
            }
        },
        computed: {
          getPokemonType(){
            const arrayPokemonTypes = []
            pokemonTypes.map((type) => {
              this.pokemon.types.map((pokemonType) => {
                type.name === pokemonType.type.name ? arrayPokemonTypes.push(type) : false
              })
            })
            this.pokemonTypes = arrayPokemonTypes
          }
        },
        watch: {
            error(newValue, oldValue){
                if (newValue) {
                    this.pokemonInformation = `<h3>¡Lo sentimos!</h3>
                                              <p>El pokemon que buscas no existe, intenta nuevamente</p>`
                }
            },
            isPokemonFound(newValue, oldValue){
              if(newValue){
                this.getPokemonType
                console.log("this.pokemon", this.pokemon)
                this.pokemonInformation = `
                                          <p><strong>Identificador: </strong><span>${this.pokemon.id}</span></p>
                                          <p><strong>Nombre: </strong><span>${this.pokemon.name}</span></p>
                                          <p><strong>Altura: </strong><span>${this.pokemon.height}</span></p>
                                          <p><strong>Peso: </strong><span>${this.pokemon.weight}</span></p>
                                          <p><strong>Experiencia: </strong><span>${this.pokemon.base_experience}</span></p>
                                          `
              }
            }
        },
        methods: {
          async getPokemonById(){
            this.loading = true
            this.error = false
            this.isPokemonFound = false
            this.pokemonInformation = ''
            try {
              this.pokemon = await getRandomPokemonData(this.counterId)
              this.loading = false
              this.isPokemonFound = true
            } catch (error) {
              this.loading = false
              this.isPokemonFound = false
              this.error = true
              console.log("error", error)
              // throw error;
            }
          },
          async getPokemonByName(pokemonName){
            this.loading = true
            this.error = false
            this.isPokemonFound = false
            this.pokemonInformation = ''
            try {
              this.pokemon = await getRandomPokemonData(pokemonName)
              this.loading = false
              this.isPokemonFound = true
            } catch (error) {
              this.loading = false
              this.isPokemonFound = false
              this.error = true
              console.log("error", error)
              // throw error;
            }
          },
          increaseCounterId(){
            this.counterId++
          },
          decreaseCounterId(){
            this.counterId > 1 ? this.counterId-- : false
          },
          getPokemonDecrease(){
            this.decreaseCounterId()
            this.getPokemonById()
          },
          getPokemonIncrease(){
            this.increaseCounterId()
            this.getPokemonById()
          },
          handleSearch(searchText){
            this.searchedPokemonName = searchText;
          },
          searchPokemon(){
            if(this.searchedPokemonName.length > 0){
              this.getPokemonByName(this.searchedPokemonName)
            }
          }
        },
        beforeCreate(){},
        created(){
          this.getPokemonById()
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