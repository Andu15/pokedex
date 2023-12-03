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
        <pokedex-screen :pokemonData="pokemon" :loading="loading" :error="error" />
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
          <button class="arrow-left-btn" @click="getRandomImgPokemon">
            <img src="@/assets/icons/arrow-left.svg" alt="izquierda" />
          </button>
          <button class="arrow-ok-btn" @click="searchPokemon">
            OK
          </button>
          <button class="arrow-right-btn" @click="getRandomImgPokemon">
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
      <div class="readonly-textarea" v-html="pokemonInformation" readonly style="width:90%"></div>
      <div class="pokemonInfo-sections">
        <section>
          <pokedex-stat :pokemonData="pokemon" />
        </section>
        <section v-if="error === false && loading === false">
          <article class="img-container">
            <img class="random-pokemon-img" :src="randomImagesPokemon[getIndexRandom(randomImagesPokemon)]" alt="pokemon"/>
            <p class="random-pokemon-name">Fig. {{ pokemon.name }}</p>
          </article>
          <article>
            <p class="pokedex-type-text"><strong>Tipo:</strong></p>
            <img class="pokedex-type-img" v-for="type in pokemonTypes" :key="type.id" :src="type.img" :alt="type.value" />
          </article>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
    import pokedexScreen from '@/components/PokedexScreen.vue'
    import pokedexForm from '@/components/PokedexForm.vue'
    import pokedexStat from '@/components/PokedexStat.vue'

    import { getRandomPokemonData, requestHandler } from '@/assets/services/pokemonApi'
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
              pokemon: {},
              isPokemonFound: false,
              counterId: 1,
              searchedPokemonName: '',
              pokemonInformation: '',
              pokemonTypes: [],
              randomImagesPokemon: []
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
                                              <p>El pokemon que buscas no existe</p>`
                }
            },
            isPokemonFound(newValue, oldValue){
              if(newValue){
                this.getPokemonType
                this.pokemonInformation = `
                                          <p><strong>Identificador: </strong><span>${this.pokemon.id}</span></p>
                                          <p><strong>Nombre: </strong><span>${this.pokemon.name}</span></p>
                                          <p><strong>Altura: </strong><span>${this.pokemon.height} m</span></p>
                                          <p><strong>Peso: </strong><span>${this.pokemon.weight} Kg</span></p>
                                          <p><strong>Experiencia: </strong><span>${this.pokemon.base_experience}</span></p>
                                          `
              }
            },
            pokemon(newValue, oldValue){
              if(newValue){
                this.getRandomImgPokemon()
              }
            }
        },
        methods: {
          async getPokemonById(){
            this.loading = true
            this.error = false
            this.isPokemonFound = false
            // this.pokemon = null
            this.pokemonInformation = ''
            try {
              this.pokemon = await getRandomPokemonData(this.counterId)
              this.loading = false
              this.isPokemonFound = true
            } catch (error) {
              this.loading = false
              this.isPokemonFound = false
              this.error = true
            }
          },
          async getPokemonByName(pokemonName){
            this.loading = true
            this.error = false
            this.isPokemonFound = false
            this.pokemon = {}
            this.pokemonInformation = ''
            try {
              this.pokemon = await getRandomPokemonData(pokemonName)
              this.loading = false
              this.isPokemonFound = true
            } catch (error) {
              this.loading = false
              this.isPokemonFound = false
              this.error = true
            }
          },
          async getSpeciesByPokemon(httpSpecie){
            try {
              const formData = await requestHandler(httpSpecie)
              const imgArray = formData.sprites ? Object.values(formData.sprites) : []
              const arrayWithoutNulls = imgArray.filter(elemento => elemento !== null);
              this.randomImagesPokemon = arrayWithoutNulls
            } catch (error) {
              this.loading = false
              this.isPokemonFound = false
              this.error = true
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
          },
          getIndexRandom(array){
            const randomNumber = Math.random()
            const randomIndex = Math.floor(randomNumber * array.length);
            return randomIndex;
          },
          getRandomImgPokemon(){
            if (this.pokemon && this.pokemon.forms && this.pokemon.forms[0] && this.pokemon.forms[0].url) {
              this.getSpeciesByPokemon(this.pokemon.forms[0].url);
            }
          }
        },
        beforeCreate(){},
        async created(){
          await Promise.all([
            this.getPokemonById(),
            this.getRandomImgPokemon()
          ]);
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