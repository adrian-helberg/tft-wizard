<template>
  <div id="root">
    <div class="App">
      <header>
        <div class="head-line">
          <img src="../assets/wizard.png" width="30px" height="30px" alt="tft-wizard" />
          <div id="heading">tft-wizard</div>
        </div>        
        <div class="navigation">
          <Link href="/">Home</Link>
          <Link href="/wizard">Wizard</Link>
          <Link href="/champions">Champions</Link>
          <Link href="/items">Items</Link>
          <Link href="/builds">Builds</Link>
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
import Link from "../components/Link.vue";
export default {
  name: "MainLayout",
  components: {
    Link,
  },
};
</script>

<style lang="scss">
@import "../styles/colors.scss";
@import "../styles/sizes.scss";

body {
  margin: 0;
}

.App {
  flex-direction: column;
  background-color: $c4;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

header {
  color: $c5;
  
  .head-line {
    display: flex;
    justify-content: center;
    align-items: center;

    > * {
      margin: 6px;
    }
  }

  #heading {
    font-size: 1.4em;
  }

  .navigation {
    padding: 12px;
    border-top: $layout-border-size solid $c2;
    border-bottom: $layout-border-size solid $c2;
    background-color: $c3;
  }
}

content {
  display: flex;
  padding: 12px;
}

footer {
  padding: 12px;
  border-top: $layout-border-size solid $c2;
  border-bottom: $layout-border-size solid $c2;
  background-color: $c3;
}
</style>