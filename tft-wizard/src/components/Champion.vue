<template>
  <div class="champion">
      <img :src="champion.src" :alt="champion.name" :title="champion.name">
  </div>
</template>

<script>
export default {
    name: "Champion",
    props: ["champion"]
}
</script>

<style lang="scss">
.champion {

}
</style>