<template>
  <MainLayout>
      <div>
          <div>Wizard for set {{this.$store.state.version}}</div>
      </div>
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