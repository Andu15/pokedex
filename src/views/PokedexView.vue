<template>
  <div class="pokedex">
    hola
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
        <div class="pokedex-left-bottom-lights">
          <div class="light is-blue is-medium" />
          <div class="light is-green is-large" />
          <div class="light is-orange is-large" />
        </div>
        <pokedex-form/>
      </div>
    </div>
    <div class="pokedex-right-front" />
    <div class="pokedex-right-back" />
  </div>
</template>
<script>
    import pokedexScreen from '@/components/PokedexScreen.vue'
    import pokedexForm from '@/components/PokedexForm.vue'

    export default {
        name: 'PokedexView',
        props: {},
        components: {
          'pokedex-screen': pokedexScreen,
          'pokedex-form' : pokedexForm
        },
        data(){
            return {}
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