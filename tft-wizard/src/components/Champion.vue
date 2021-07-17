<template>
  <div>
      <img :src="champion.img" :width="`${size}px`" :height="`${size}px`" :alt="champion.name" :title="champion.name" />
  </div>
</template>

<script>
export default {
    name: "Champion",
    props: ["champion", "size"]
}
</script>

<style>

</style>