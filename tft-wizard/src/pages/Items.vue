<template>
  <MainLayout>
      <template v-slot:header>
        <div>Item Overview</div>
        </template>
        <template v-slot:content>
        <div class="items">
            <ElementList :elements="$store.state.baseItems" :size="60" />
            <hr width="100%">
            <ElementList :elements="$store.state.combinedItems" :size="60" />
        </div>
        </template>
        <template v-slot:footer>
        <div></div>
        </template>
  </MainLayout>
</template>

<script>
import MainLayout from '../layouts/MainLayout.vue';
import ElementList from '../components/ElementList.vue';

export default {
    name: "Items",
    components: {
        MainLayout, ElementList
    },
}
</script>

<style lang="scss">
.items { 
    display: flex;
    flex-wrap: wrap;
}
</style>