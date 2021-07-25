<template>
   <div class="flyout">
        <slot></slot>
    </div>
</template>

<script>

export default {
    name: "Flyout",
}
</script>

<style lang="scss">
@import "../styles/colors.scss";

.flyout {
    display: inline;
    position: absolute;
    top: 0;
    left: 0;
    border: 1px solid $heading;
    background-color: $background;
    z-index: 1;
}
</style>