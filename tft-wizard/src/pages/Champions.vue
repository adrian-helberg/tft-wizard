<template>
  <MainLayout>
    <div>
      <h2>Champions</h2>
      <div class="champions">
        <ElementList :elements="this.$store.state.champions" :size="60" />
      </div>
    </div>
  </MainLayout>
</template>

<script>
  import MainLayout from '../layouts/MainLayout.vue'
  import ElementList from '../components/ElementList.vue';

  export default {
    name: "Champions",
    components: {
      MainLayout, ElementList
    }
  }
</script>

<style lang="scss">
.champions {
  display: flex;
  flex-wrap: wrap;
}
</style>