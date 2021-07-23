import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";
import Axios from "axios";
import App from "./App.vue";
// Pages
import Home from "./pages/Home.vue";
import Wizard from "./pages/Wizard.vue";
import NotFound from "./pages/404.vue";
// JSON
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
  "s": 3,
  "a": 2,
  "b": 1,
};

const GET_BUILDS = "GET_BUILDS";
const GET_CHAMPIONS = "GET_CHAMPIONS";
const GET_ITEMS = "GET_ITEMS";
const ADD_CURRENT_ITEM = "SET_CURRENT_ITEMS";
const REMOVE_CURRENT_ITEM = "REMOVE_CURRENT_ITEMS";
const CLEAR_CURRENT_LISTS = "CLEAR_CURRENT_LISTS";
const UPDATE_SUGGESTIONS = "UPDATE_SUGGESTIONS";

const HIGHLIGHT = "HIGHLIGHT";

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
      // Attach items from own db
      // Note that champions are not attached (only corresponding ID)
      state.builds.forEach((build) => {
        let components = [];
        build.champions.forEach((champion) => {
          const foundChampion = state.champions.filter(
            (x) => x.name == champion.name
          )[0];
          champion.id = foundChampion.id;
          const items = [];
          champion.items.forEach((item) => {
            const foundItem = state.items.filter((x) => {
                const literals = item.split("-");
                return x.name.includes(literals[0] == "radiant" ? literals[1] : literals[0]);
            });            
            if (foundItem.length > 0) {
              items.push(foundItem[0]);
              components = components.concat(foundItem[0].receipe);
            }
          });
          champion.items = items;
        });
        build.components = components;
      });
      // Copy all builds as default suggestions
      state.suggestions = JSON.parse(JSON.stringify(builds));
    },
    [GET_CHAMPIONS](state, champions) {
      state.champions = champions;
    },
    [GET_ITEMS](state, items) {
      state.items = items;
      // Items are base items when they do not have receipe items
      state.items.forEach(item => {
        item.isBaseItem = !item.receipe;
        item.highlight = false;
      });
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

          // Handle item scoring
          champion.items.forEach(i => {
            const foundItem = state.currentItems.filter(x => x.name == i.name);
              if (foundItem.length > 0) completedItems++;
          });
        }

        // Handle component scoring
        let _components = JSON.parse(JSON.stringify(suggestion.components));
        state.currentItems.forEach(c => {
            const foundItems = _components.filter(cI => cI.id == c.id);
            if (foundItems.length > 0) {
              _components.splice(_components.indexOf(foundItems[0]), 1);
            };
        });
        currentComponents = maxComponents - _components.length;

        suggestion.stats = {
          maxItems: maxItems,
          completedItems: completedItems,
          maxComponents: maxComponents,
          currentComponents: currentComponents,
          score:
            (completedItems / maxItems) * 10 
            + (currentComponents / maxComponents) * 10            
            + tierRatings[suggestion.tier.name],
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
    [HIGHLIGHT](state, element) {
      element.receipe.forEach(i => {
        state.items.filter(x => x.id == i.id)[0].highlight = true;
      });
    }
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
    highlight({ commit }, element) {
      commit(HIGHLIGHT, element);
    }
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
      component: Wizard
    },
    {
      path: "*",
      name: "Not Found",
      component: NotFound
    }
  ],
});

new Vue({
  render(h) {
    return h(App);
  },
  data: {
    currentRoute: window.location.pathname,
  },
  router,
  store: store,
  components: {
    App,
    Home,
    Wizard,
    NotFound,
  },
  created: function () {
    this.$store.dispatch("load");
  },
}).$mount("#app");
