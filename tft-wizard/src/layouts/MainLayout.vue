<template>
  <div id="root">
    <div class="App">
      <header>
        <div class="head-line">
          <a href="/">
            <img src="../assets/wizard.png" width="30px" height="30px" alt="tft-wizard" />
            <div id="heading">tft-wizard</div>
          </a>
        </div>        
        <div class="navigation">
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
    Link
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
  display: flex;
  flex-direction: column;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  height: 100vh;
}

header {
  color: $heading;
  
  .head-line {
    display: flex;
    justify-content: center;

    > a {
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;

      > * {
        margin: 6px;
      }

      &:link, &:visited, &:hover, &:active {
          color: $text;
      }

      &:hover {
        color: $text
      }
    }
  }

  #heading {
    font-size: 1.4em;
  }

  .navigation {
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: $layout-border-size solid $background-dark;
    border-bottom: $layout-border-size solid $background-dark;
  }
}

content {
  display: flex;
  justify-content: center;
  flex-grow: 1;
  padding: 12px;
  overflow-y: auto;
  color: $text;
}

footer {
  display: flex;
  justify-content: center;
  padding: 12px;
  border-top: $layout-border-size solid $background-dark;
  border-bottom: $layout-border-size solid $background-dark;
  color: $text;
}
</style>