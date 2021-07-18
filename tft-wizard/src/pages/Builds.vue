<template>
  <MainLayout>
    <div>
      <h2>Builds</h2>
      <div class="builds">
        <div v-for="build in this.$store.state.builds" :key="build.id">
          <Build :build="build" />
        </div>
      </div>
    </div>    
  </MainLayout>
</template>

<script>
  import MainLayout from '../layouts/MainLayout.vue';
  import Build from '../components/Build.vue';
  
  export default {
    name: "Builds",
    components: {
      MainLayout, Build
    }
  }
</script>