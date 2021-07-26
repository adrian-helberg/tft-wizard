<template>
  <div class="recipe">
      <Item :item="recipe[0]" :size="30">
        {{recipe[0].displayName}}
      </Item>
      <div class="sign">+</div>
      <Item :item="recipe[1]" :size="30">
        {{recipe[0].displayName}}
      </Item>
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