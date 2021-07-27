<template>
  <div class="item" 
    @mouseenter="showFlyout" 
    @mouseleave="hideFlyout"
    :style="{ width: size + 'px', height: size + 'px' }">
      <img :src="item.src" 
        :alt="item.displayName" 
        :style="{ width: size + 'px', height: size + 'px' }"/>
      <Flyout v-if="flyoutVisible" :offset="size">
        <slot></slot>
      </Flyout>
  </div>
</template>

<script>

export default {
  name: "Item",
  props: [
    "item",
    "size"
  ],
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
    }
  }
}
</script>

<style lang="scss">
.item {
    position: relative;
}
</style>