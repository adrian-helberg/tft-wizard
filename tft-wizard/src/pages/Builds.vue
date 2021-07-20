<template>
  <MainLayout>
    <template v-slot:header>
        <div>Build Overview</div>
    </template>
    <template v-slot:content>
        <div v-for="build in $store.state.builds" :key="build.id">
          <Build :build="build" :size="52" />
        </div>
    </template>
    <template v-slot:footer>

    </template>  
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