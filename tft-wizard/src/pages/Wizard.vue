<template>
  <MainLayout>
      <div>
          <div>Wizard for set {{this.$store.state.version}}</div>
      </div>
      <template v-slot:header>
          <div>TFT Build Suggestions for the current state of your game</div>
      </template>
      <template v-slot:content>
          <div class="wizard">Test</div>
      </template>
      <template v-slot:footer>
          <div>Test</div>
      </template>
  </MainLayout>
</template>

<script>
import MainLayout from '../layouts/MainLayout.vue';

export default {
    name: "Wizard",
    components: {
        MainLayout
    }
}
</script>

<style lang="scss">
.wizard {
    display: flex;
    justify-content: center;
}
</style>