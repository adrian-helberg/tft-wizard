<template>
  <div class="list">
    <div
      v-for="(element, index) in elements"
      :key="index"
      @click="clickFun(element)"
    >
      <img
        :src="element.src"
        :alt="element.name"
        :title="element.displayName"
        :style="{ width: size + 'px', height: size + 'px' }"
      />
      <div class="item" v-if="element.hasOwnProperty('items')">
        <ElementList :elements="element.items" :size="size / 4" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ElementList",
  props: {
    elements: Array,
    size: Number,
    clickFun: {
      type: Function,
      default: function () {
        return;
      },
    },
  },
};
</script>

<style lang="scss">
@import "../styles/colors.scss";

.list {
  display: flex;
  flex-wrap: wrap;

  > div {
    padding: 2px;
    cursor: pointer;
    // For zoom animation
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.5);
    }
  }

  .item {
    height: 23px;
    margin-top: -20px;
  }
}
</style>
