<template>
  <div id="app">
    <MainLayout>
      <div>
          <h2>Home</h2>
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