<template>
  <div class="build">
    <div class="tier">
      <img :src="build.tier.src" :title="build.tier.name" />
    </div>
    <div class="comb">
      <div class="name">{{ build.name }}</div>
      <div>{{ build.playstyle }}</div>
      <div>{{ build.difficulty }}</div>
      <div v-if="build.stats">
        {{ `(${build.stats.completedItems}/${build.stats.maxItems}) items` }}
      </div>
      <div v-if="build.stats">
        {{
          `(${build.stats.currentComponents}/${build.stats.maxComponents}) components`
        }}
      </div>
    </div>
    <div class="champions">
      
    </div>
  </div>
</template>

<script>

export default {
  name: "Build",
  props: ["build"]
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
    padding: 6px;
    margin: 6px;
  }

  .comb {
    flex-basis: 38%;
    display: flex;
    flex-direction: column;

    .name {
      font-size: 1.2em;
      font-style: oblique;
    }

    > div:not(.name) {
      color: $text;
    }
  }

  .champions {
    flex-basis: 60%;
  }
}
</style>
