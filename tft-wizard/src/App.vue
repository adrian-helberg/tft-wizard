<template>
  <div id="app">
    <MainLayout>
      <div class="content">
        <div class="content-header">
            <div class="title padding">Learning by doing great at Teamfight Tactics</div>
            <div class="subtitle padding">Get better while you play</div>
        </div>
        <div class="content-text padding">
            Use the tft-wizard to get build suggestions for<br> the current state of your game
            to climb the ladder
        </div>
        <div class="content-footer padding">
          Content Footer
        </div>
      </div>
    </MainLayout>
  </div>
</template>

<script lang="ts">
import MainLayout from './layouts/MainLayout.vue'
export default {
  name: "App",
  components: {
    MainLayout
  }
};
</script>

<style scoped lang="scss">
@import "./styles/colors.scss";
.content {
  display: flex;
  flex-direction: column;
  color: $text;

  .padding {
    padding: 12px;
  }

  .content-header {
    display: flex;
    flex-direction: column;

    .title, .subtitle {
      color: $heading;
      align-self: center;
    }

    .title {
      font-size: 2em;
    }

    .subtitle {
      align-self: center;
      font-size: 1em;
    }
  }

  .content-text {
    display: flex;
    flex-grow: 1;
    justify-content: center;
    border-top: 1px solid $background-dark;
    border-bottom: 1px solid $background-dark;
  }

  .content-footer {
    display: flex;
    justify-content: center;
  }
}
</style>