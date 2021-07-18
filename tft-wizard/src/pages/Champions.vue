<template>
  <MainLayout>
    <template v-slot:header>
        <div>Champion Overview</div>
    </template>
    <template v-slot:content>
      <div class="champions">
        <ElementList :elements="$store.state.champions" :size="60" />
      </div>
    </template>
    <template v-slot:footer>
      <div></div>
    </template>
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