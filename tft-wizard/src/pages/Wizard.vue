<template>
  <MainLayout>
    <div>
      <div>Wizard for set {{ this.$store.state.version }}</div>
    </div>
    <template v-slot:header>
      <div>TFT Build Suggestions for the current state of your game</div>
    </template>
    <template v-slot:content>
      <div class="wizard">
        <button class="button-clear" @click="clear">Clear</button>
        <hr width="100%" />
        <div class="container">
          <div class="left">
            <div class="left-title-1">Current Items</div>
            <div class="left-content-1">
              <div
                class="placeholder"
                v-if="$store.state.currentItems.length == 0"
              >
                Select Items to get better suggestions!
              </div>
              <div v-for="(currentItem, index) of $store.state.currentItems" :key="index">
                <Item :item="currentItem" :size="30" />
              </div>
            </div>
            <div class="left-title-2">Items</div>
            <div class="left-content-2">
              <div v-for="(item, index) of $store.state.items" :key="index">
                <Item :item="item" :size="50" />
              </div>
            </div>
          </div>
          <div class="right">
            <div class="right-title">Build Suggestions</div>
            <div class="right-content">
              <div
                v-for="(suggestion, index) of $store.state.suggestions"
                :key="index"
              >
                <Build :build="suggestion" :size="56" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </MainLayout>
</template>

<script>
export default {
  name: "Wizard",
  methods: {
    addCurrentItem(item) {
      this.$store.dispatch("addCurrentItem", item);
    },
    removeCurrentItem(item) {
      this.$store.dispatch("removeCurrentItem", item);
    },
    clear() {
      this.$store.dispatch("clearCurrentLists");
    }
  }
};
</script>

<style scoped lang="scss">
@import "../styles/colors.scss";

.button-clear {
  display: flex;
  cursor: pointer;
  align-self: flex-end;
  background-color: $heading;
}

.placeholder {
  color: $text;
}

.container {
  display: grid;
  grid-template-columns: 0.6fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas: "left right";
}

.left {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 30px minmax(30px, min-content) 30px min-content;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "left-title-1"
    "left-content-1"
    "left-title-2"
    "left-content-2";
  grid-area: left;
}

.left-title-1 {
  grid-area: left-title-1;
}

.left-content-1 {
  grid-area: left-content-1;
}

.left-title-2 {
  grid-area: left-title-2;
}

.left-content-2 {
  grid-area: left-content-2;
  display: flex;
  flex-wrap: wrap;
}

.right {
  margin-left: 12px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 30px auto;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "right-title"
    "right-content";
  grid-area: right;
}

.right-title {
  grid-area: right-title;
}

.right-content {
  grid-area: right-content;
}
</style>
