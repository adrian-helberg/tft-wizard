<template>
   <div class="flyout no-wrap" :style="{ left: offset + 10 + 'px' }">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "Flyout",
    props: ["offset"]
}
</script>

<style lang="scss">
@import "../styles/colors.scss";

.flyout {
    display: inline;
    position: absolute;
    border: 1px solid $heading;
    background-color: $background;
    z-index: 1;
    padding: 6px;
}
.no-wrap {
    white-space: nowrap;
}
</style>