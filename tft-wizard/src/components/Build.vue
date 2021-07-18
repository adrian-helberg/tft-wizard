<template>
  <div class="build">
    {{ build.tier }}, {{ build.playstyle }}, {{ build.name }}
    <hr />
    <div class="champion" v-for="champion in build.champions" :key="champion.id" >
      <img :src="champion.img" width="20px" height="20px" />
      {{ champion.name }}
      <span v-if="champion.items.length > 0">(</span>
      <div v-for="item in champion.items" :key="item.id">
        {{ item.name }}
        <span v-if="champion.items.indexOf(item) != champion.items.length - 1">,</span>
      </div>
      <span v-if="champion.items.length > 0">)</span>
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  name: "Build",
  props: ["build"],
};
</script>

<style scoped>
.champion {
  display: flex;
}
</style>
