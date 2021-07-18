<template>
  <div id="app">
    <MainLayout>
      <template v-slot:header>
          <div>Learning by doing great at Teamfight Tactics
            <div class="subtitle">- Get better while you play -</div>
          </div>
      </template>
      <template v-slot:content>
          <div class="text">Use the tft-wizard to get build suggestions for the current state of your game to climb the ladder</div>
      </template>
      <template v-slot:footer>
        Content Footer
      </template>
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

<style lang="scss">
.subtitle {
  text-align: center;
}

.text {
  display: flex;
  justify-content: center;
}
</style>