<template>
  <div id="app">
    <HeaderComponent/>
    <HeroComponent/>
  </div>
</template>

<script>
  import HeroComponent from './components/HeroComponent.vue';
  import HeaderComponent from './components/HeaderComponent.vue';

  export default {
    name: 'App',
    components: {
        HeroComponent,
        HeaderComponent,
    }
  }
</script>

<style lang="scss">
  @import './styles/index.scss';
</style>
