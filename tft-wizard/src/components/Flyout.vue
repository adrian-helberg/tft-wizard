<template>
   <div class="flyout" :style="{ left: right + 'px' }">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "Flyout",
    props: ["right"]
}
</script>

<style lang="scss">
@import "../styles/colors.scss";

.flyout {
    display: inline;
    position: absolute;
    top: 0;
    border: 1px solid $heading;
    background-color: $background;
    z-index: 1;
}
</style>