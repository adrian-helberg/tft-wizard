<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// Register components
import Vue from "vue";
import Build from "./components/Build.vue";
import Champion from "./components/Champion.vue";
import Flyout from "./components/Flyout.vue";
import Item from "./components/Item.vue";
import Link from "./components/Link.vue";
import Recipe from "./components/Recipe.vue";
import Tier from "./components/Tier.vue";
import IFrame from "./components/IFrame.vue";
// Register lyouts
import MainLayout from "./layouts/MainLayout.vue";
// Register SFCs
Vue.component("Build", Build);
Vue.component("Champion", Champion);
Vue.component("Flyout", Flyout);
Vue.component("Item", Item);
Vue.component("Link", Link);
Vue.component("Recipe", Recipe);
Vue.component("Tier", Tier);
Vue.component("IFrame", IFrame);
Vue.component("MainLayout", MainLayout);

export default {
  name: "App",
};
</script>