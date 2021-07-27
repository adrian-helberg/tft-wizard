<template>
  <div class="champion"
    @mouseenter="showFlyout" 
    @mouseleave="hideFlyout"
    :style="{ width: size + 'px', height: size + 'px' }">
      <img :src="champion.src"
        :alt="champion.name" 
        :style="{ width: size + 'px', height: size + 'px' }" />
      <Flyout v-if="flyoutVisible" :offset="size">
        <slot></slot>
      </Flyout>
  </div>
</template>

<script>
export default {
    name: "Champion",
    props: [
      "champion",
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
.champion {
  position: relative;
}
</style>