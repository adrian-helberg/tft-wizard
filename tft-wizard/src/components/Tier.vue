<template>
  <div class="tier">
      <img :src="tier.src" :alt="tier.name" :title="tier.name + '-tier'" />
  </div>
</template>

<script>
export default {
    name: "Tier",
    props: ["tier"]
}
</script>

<style class="scss">
.tier {

}
</style>