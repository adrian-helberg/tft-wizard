<template>
  <div class="item" @mouseenter="showFlyout" @mouseleave="hideFlyout">
      <img :src="item.src" :alt="item.displayName"/>
      <Flyout v-if="flyoutVisible && itemHasRecipe(item)">
        <Recipe :recipe="item.recipe" />
      </Flyout>
  </div>
</template>

<script>

export default {
    name: "Item",
    props: ["item"],
    data: function() {
      return {
        flyoutVisible: false
      }      
    },
    methods: {
        showFlyout() {
            this.flyoutVisible = true;
        },
        hideFlyout() {
            this.flyoutVisible = false;
        },
        itemHasRecipe(item) {
          return Object.prototype.hasOwnProperty.call(item, 'receipe');
        }
    }
}
</script>

<style lang="scss">
.item {
    position: relative;
}
</style>