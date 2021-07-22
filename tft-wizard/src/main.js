import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";
import App from "./App.vue";
import Home from "./pages/Home.vue";
import Wizard from "./pages/Wizard.vue";
import Champions from "./pages/Champions.vue";
import Builds from "./pages/Builds.vue";
import Items from "./pages/Items.vue";
import NotFound from "./pages/404.vue";
import Axios from "axios";
import BuildsJSON from "./assets/builds.json";
import ChampionsJSON from "./assets/champions.json";
import ItemsJSON from "./assets/items.json";

// Make axios globally available
Vue.prototype.$axios = Axios;
// Integrate vuex state management
Vue.use(Vuex);
// Integrate vue router
Vue.use(VueRouter);

Vue.config.productionTip = false;

const tierRatings = {
  S: 3,
  A: 2,
  B: 1,
};

const GET_BUILDS = "GET_BUILDS";
const GET_CHAMPIONS = "GET_CHAMPIONS";
const GET_ITEMS = "GET_ITEMS";
const ADD_CURRENT_ITEM = "SET_CURRENT_ITEMS";
const REMOVE_CURRENT_ITEM = "REMOVE_CURRENT_ITEMS";
const CLEAR_CURRENT_LISTS = "CLEAR_CURRENT_LISTS";
const UPDATE_SUGGESTIONS = "UPDATE_SUGGESTIONS";

const store = new Vuex.Store({
  state: {
    builds: [],
    champions: [],
    items: [],
    currentItems: [],
    suggestions: [],
  },
  mutations: {
    [GET_BUILDS](state, builds) {
      state.builds = builds;
      // Attach champions and items from own db
      // state.builds.forEach((build) => {
      //   let components = [];
      //   build.champions.forEach((champion) => {
      //     const foundChampion = state.champions.filter(
      //       (x) => x.name == champion.name
      //     )[0];
      //     champion.id = foundChampion.id;
      //     const items = [];
      //     champion.items.forEach((item) => {
      //       const foundItem = state.items.filter((x) => x.name == item.name);
      //       if (foundItem.length > 0) {
      //         items.push(foundItem[0]);
      //         components = components.concat(foundItem[0].receipe);
      //       }
      //     });
      //     champion.items = items;
      //   });
      //   build.components = components;
      // });
      // Copy all builds as default suggestions
      state.suggestions = JSON.parse(JSON.stringify(builds));
    },
    [GET_CHAMPIONS](state, champions) {
      state.champions = champions;
    },
    [GET_ITEMS](state, items) {
      state.items = items;
    },
    [ADD_CURRENT_ITEM](state, item) {
      state.currentItems.push(item);
    },
    [REMOVE_CURRENT_ITEM](state, item) {
      const index = state.currentItems.indexOf(item);
      if (index > -1) state.currentItems.splice(index, 1);
    },
    [CLEAR_CURRENT_LISTS](state) {
      state.currentItems = [];
      // Reset suggestion with a copy of builds
      state.suggestions = JSON.parse(JSON.stringify(state.builds));
    },
    [UPDATE_SUGGESTIONS](state) {
      const s = JSON.parse(JSON.stringify(state.builds));
      for (const suggestion of s) {
        // Stats
        let maxItems = 0;
        let completedItems = 0;
        const maxComponents = suggestion.components.length;
        let currentComponents = 0;

        for (const champion of suggestion.champions) {
          maxItems += champion.items.length;

          for (const suggestedItem of state.currentItems) {
            completedItems += (champion.items.filter(
              (x) => x.name == suggestedItem.name
            ).length > 0 ? 1 : 0);
            currentComponents += (suggestion.components.filter(
              (x) => x.name == suggestedItem.name
            ).length > 0 ? 1 : 0);
          }
        }
        suggestion.stats = {
          maxItems: maxItems,
          completedItems: completedItems,
          maxComponents: maxComponents,
          currentComponents: 0,
          score:
            (completedItems / maxItems) * 10 +
            (currentComponents / maxComponents) * 10 +
            tierRatings[suggestion.tier],
        };
      }
      state.suggestions = s.sort((a, b) =>
        a.stats.score <= b.stats.score
          ? 1
          : b.stats.score < a.stats.score
          ? -1
          : 0
      );
    },
  },
  actions: {
    load({ commit }) {
      commit(GET_CHAMPIONS, ChampionsJSON);
      commit(GET_ITEMS, ItemsJSON);
      commit(GET_BUILDS, BuildsJSON);
    },
    addCurrentItem({ commit }, item) {
      commit(ADD_CURRENT_ITEM, item);
      commit(UPDATE_SUGGESTIONS);
    },
    removeCurrentItem({ commit }, item) {
      commit(REMOVE_CURRENT_ITEM, item);
      commit(UPDATE_SUGGESTIONS);
    },
    clearCurrentLists({ commit }) {
      commit(CLEAR_CURRENT_LISTS);
      commit(UPDATE_SUGGESTIONS);
    },
  },
});

const router = new VueRouter({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/wizard",
      name: "Wizard",
      component: Wizard,
    },
    {
      path: "/champions",
      name: "Champions",
      component: Champions,
    },
    {
      path: "/items",
      name: "Items",
      component: Items,
    },
    {
      path: "/builds",
      name: "Builds",
      component: Builds,
    },
  ],
});

new Vue({
  render(h) {
    return h(App);
  },
  router,
  data: {
    currentRoute: window.location.pathname,
  },
  store: store,
  components: {
    App,
    Home,
    Wizard,
    Champions,
    Items,
    Builds,
    NotFound,
  },
  created: function () {
    this.$store.dispatch("load");
  },
}).$mount("#app");
