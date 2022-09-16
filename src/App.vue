<template>
  <div id="app">
    <HeaderComponent/>
    <MainContent/>
    <FooterComponent/>
  </div>
</template>

<script>
  import HeaderComponent from './components/HeaderComponent.vue';
  import MainContent from './components/MainContent.vue';
  import FooterComponent from './components/FooterComponent.vue';

  export default {
    name: 'App',
    components: {
      HeaderComponent,
      MainContent,
      FooterComponent,
    }
  }
</script>

<style lang="scss">
  @import './styles/index.scss';
</style>
