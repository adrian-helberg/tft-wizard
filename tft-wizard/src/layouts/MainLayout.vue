<template>
  <div id="root">
    <div class="App">
      <header>
        <div class="head-line">
          <a href="/">
            <img
              src="../assets/wizard.png"
              width="30px"
              height="30px"
              alt="tft-wizard"
            />
            <div id="heading">tft-wizard</div>
          </a>
        </div>
        <div class="navigation">
          <Link href="/wizard">Wizard</Link>
        </div>
      </header>
      <content>
        <div class="content-header">
          <slot name="header"></slot>
        </div>
        <div class="content-text">
          <slot name="content"></slot>
        </div>
        <div class="content-footer">
          <slot name="footer"></slot>
        </div>
      </content>
      <footer>
        <div>
          Icons made by
          <a href="https://www.freepik.com" title="Freepik">Freepik</a> from
          <a href="https://www.flaticon.com/" title="Flaticon"
            >www.flaticon.com</a
          >
        </div>
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
  display: flex;
  flex-direction: column;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  height: 100vh;
  background: #051622 url("https://slumber.fm/assets/img/bg_star.png") repeat-y;
  background-size: cover;
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

      &:link,
      &:visited,
      &:hover,
      &:active {
        color: $heading;
      }

      &:hover {
        color: $text;
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
    border-top: $layout-border-size solid $heading;
    border-bottom: $layout-border-size solid $heading;
  }
}

content {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  flex-basis: 1000px;
  padding: 12px;
  overflow-y: auto;
  color: $heading;

  .content-header {
    font-size: 2em;
  }

  .content-text {
    justify-content: center;
    width: 800px;
    flex-grow: 1;
    margin-top: 24px;
  }
}

footer {
  display: flex;
  justify-content: center;
  padding: 12px;
  border-top: $layout-border-size solid $heading;
  color: $text;
}
</style>
