<template>
  <div id="root">
    <div class="App">
      <header>
        <img src="../assets/wizard.png" width="30px" height="30px" alt="tft-wizard" />
        <h1>tft-wizard</h1>
        <div class="navigation">
          <Navigation href="/">Home</Navigation>
          <Navigation href="/wizard">Wizard</Navigation>
          <Navigation href="/champions">Champions</Navigation>
          <Navigation href="/items">Items</Navigation>
          <Navigation href="/builds">Builds</Navigation>
        </div>
      </header>
      <content>
        <slot></slot>
      </content>
      <footer>
        <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      </footer>
    </div>
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

<style lang="scss">
// Color palette
$orange: #F4D06F;
$orange-dark: #FF8811;
$background: #392F5A;
$font: #fff8f0;
$border: #9DD9D2;

.App {
  display: flex;
  flex-direction: column;
}

header {
  // TODO: remove
  background-color: green;
}

content {
  // TODO: remove
  background-color: blue;
  flex: 1 0 auto;
}

footer {
  // TODO: remove
  background-color: red;
}
</style>