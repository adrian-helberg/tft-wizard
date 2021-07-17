<template>
  <MainLayout>
    <div>
      <h2>Champions</h2>
      <div class="champions">
        <div v-for="champion of this.$store.state.champions" :key="champion.id">
          <Champion :champion="champion" :size="30" />
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script>
  import MainLayout from '../layouts/MainLayout.vue'
  import Champion from '../components/Champion.vue';

  export default {
    name: "Champions",
    components: {
      MainLayout, Champion
    }
  }
</script>

<style>
.champions {
  display: flex;
  flex-wrap: wrap;
}
</style>