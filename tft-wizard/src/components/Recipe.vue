<template>
  <div class="recipe">
      <Item :item="recipe[0]" />
      <div class="sign">+</div>
      <Item :item="recipe[1]" />
  </div>
</template>

<script>

export default {
    name: "Recipe",
    props: ["recipe"]
}
</script>

<style lang="scss">
.recipe {
  display: flex;
  align-items: center;

  .sign{
    font-size: 3em;
  }
}
</style>