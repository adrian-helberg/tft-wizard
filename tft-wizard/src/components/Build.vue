<template>
  <div class="build">
    <div class="stats">
      {{ build.completedItems }}
    </div>
    <div class="tier">{{ build.tier }}</div>
    <div class="comb">
      <div>{{ build.name }}</div>
      <div>{{ build.playstyle }}</div>
    </div>
    <div class="champions">
      <ElementList :size="size" :elements="build.champions" />
    </div>
  </div>
</template>

<script>
import ElementList from "../components/ElementList.vue";

export default {
  name: "Build",
  props: ["build", "size"],
  components: {
    ElementList
  }
};
</script>

<style scoped lang="scss">
@import "../styles/colors.scss";

.build {
  display: flex;
  border: 1px solid $heading;
  padding: 12px;
  margin-bottom: 24px;
  align-items: center;

  .tier {
    display: flex;
    flex-basis: 2%;
    justify-content: center;
    align-items: center;
    border: 1px solid $text;
    padding: 6px;
    margin: 6px;
  }

  .comb {
    flex-basis: 28%;
    display: flex;
    flex-direction: column;
  }

  .champions {
    flex-basis: 70%;
  }
}
</style>
