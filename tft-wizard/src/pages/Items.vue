<template>
  <MainLayout>
      <div>
        <h2>Items</h2>
        <div class="items">
            <ElementList :elements="this.$store.state.items" :size="60" />
          </div>
      </div>
  </MainLayout>
</template>

<script>
import MainLayout from '../layouts/MainLayout.vue';
import ElementList from '../components/ElementList.vue';

export default {
    name: "Items",
    components: {
        MainLayout, ElementList
    }
}
</script>

<style lang="scss">
.items { 
    display: flex;
    flex-wrap: wrap;
}
</style>