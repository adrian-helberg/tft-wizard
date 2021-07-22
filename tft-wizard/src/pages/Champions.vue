<template>
  <MainLayout>
    <template v-slot:header>
      <div>Champion Overview</div>
    </template>
    <template v-slot:content>
      <div class="champions">
        <div v-for="champion of $store.state.champions" :key="champion.key">
            <Champion :champion="champion" />
        </div>
      </div>
    </template>
    <template v-slot:footer>
      <div></div>
    </template>
  </MainLayout>
</template>

<script>
import MainLayout from "../layouts/MainLayout.vue";
import Champion from '../components/Champion.vue';


export default {
  name: "Champions",
  components: {
    MainLayout,
    Champion,
  },
};
</script>

<style lang="scss">
.champions {
  display: flex;
  flex-wrap: wrap;

  > div {
    width: 200px;
    height: 175px;  
  }
}
</style>
