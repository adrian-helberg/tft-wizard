<template>
  <div>
    <div class="main-layout">
        <Navigation href="/">Home</Navigation>
        <Navigation href="/wizard">Wizard</Navigation>
        <Navigation href="/champions">Champions</Navigation>
        <Navigation href="/items">Items</Navigation>
        <Navigation href="/builds">Builds</Navigation>
    </div>
    <h1>tft-wizard</h1>
    <slot></slot>
  </div>
</template>

<script>
import Navigation from "../components/Navigation.vue";
export default {
  name: "MainLayout",
  components: {
    Navigation,
  },
};
</script>

<style>
  .main-layout {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;  
  color: #2c3e50;
  margin-top: 30px;
}
</style>