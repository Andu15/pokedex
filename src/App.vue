<template>
  <div id="app">
    <template v-if="!isInitialCharge" >
      <initial-transition />
    </template>
    <template v-else >
      <router-view />
    </template>
  </div>
</template>
<script>
  import InitialTransitionView from '@/views/InitialTransitionView.vue';

  export default {
    name: 'App',
    components: {
      "initial-transition" : InitialTransitionView
    },
    data(){
      return {
        isInitialCharge: false
      }
    },
    mounted() {
      window.addEventListener('load', () => {
        this.isInitialCharge = true;
      });
    }
  }
</script>
<style lang="scss">
  @import '@/assets/sass/views/app.scss';
</style>
