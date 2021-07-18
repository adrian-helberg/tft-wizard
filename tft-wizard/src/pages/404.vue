<template>
  <MainLayout>    
    <template v-slot:header>404 Not Found</template>
    <template v-slot:content>Requested page was not found</template>
    <template v-slot:footer>¯\_(ツ)_/¯</template>
  </MainLayout>
</template>

<script>
  import MainLayout from '../layouts/MainLayout.vue'
  export default {
    name: "404",
    components: {
      MainLayout
    }
  }
</script>