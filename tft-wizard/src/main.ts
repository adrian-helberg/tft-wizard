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
// tftactics
//import ItemsJSON from "./assets/items.json";
// mobalytics
import BaseItemsJSON from "./assets/baseItems.json";
import CombinedItemsJSON from "./assets/combinedItems.json";

// Make axios globally available
Vue.prototype.$axios = Axios;
// Integrate vuex state management
Vue.use(Vuex);
// Integrate vue router
Vue.use(VueRouter);

Vue.config.productionTip = false;

type item = {
  id: number;
  name: string;
  img: string;
  bonus: string;
  tierImg: string;
  tierName: string;
  receipe: item[];
};

type champion = {
  id: number;
  name: string;
  img: string;
  items: item[];
};

type stats = {
  maxItems: number;
  completedItems: number;
  maxComponents: number;
  currentComponents: number;
  score: number;
}

type team = {
  id: number;
  name: string;
  tier: string;
  playstyle: string;
  stats: stats;
  champions: champion[];
  components: item[];
};

const tierRatings: { [id: string]: number } = {
  "S": 3,
  "A": 2,
  "B": 1,
};

const GET_BUILDS = "GET_BUILDS";
const GET_CHAMPIONS = "GET_CHAMPIONS";
const GET_SET_VERSION = "GET_SET_VERSION";
const GET_BASE_ITEMS = "GET_BASE_ITEMS";
const GET_COMBINED_ITEMS = "GET_COMBINED_ITEMS";

const ADD_CURRENT_ITEM = "SET_CURRENT_ITEMS";
const REMOVE_CURRENT_ITEM = "REMOVE_CURRENT_ITEMS";
const CLEAR_CURRENT_LISTS = "CLEAR_CURRENT_LISTS";
const UPDATE_SUGGESTIONS = "UPDATE_SUGGESTIONS";

const store = new Vuex.Store({
  state: {
    version: 0,
    builds: [] as team[],
    champions: [] as champion[],
    baseItems: [] as item[],
    combinedItems: [] as item[],
    currentItems: [] as item[],
    suggestions: [] as team[]
  },
  mutations: {
    [GET_SET_VERSION](state, version) {
        state.version = version
    },
    [GET_BUILDS](state, builds) {
      state.builds = builds;
      state.builds.forEach((build: team) => {
        let components:item[] = [];
        build.champions.forEach((champion: champion) => {
          const foundChampion = state.champions.filter(x => x.name == champion.name)[0];
          champion.id = foundChampion.id;
          const tmp: item[] = [];
          champion.items.forEach((item: item) => {
            const asd = state.combinedItems.filter(x => x.name == item.name);            
            if (asd.length > 0) {
              tmp.push(asd[0]);

              for (const r of asd[0].receipe) {
                const foundBaseItem = state.baseItems.filter(x => x.name == r.name)
              }
              components = components.concat(asd[0].receipe);
            }
          });
          champion.items = tmp;
        });
        build.components = components;
      });
      state.suggestions = JSON.parse(JSON.stringify(builds));
    },
    [GET_CHAMPIONS](state, champions) {
      state.champions = champions;
    },
    [GET_BASE_ITEMS](state, items) {
      state.baseItems = items;
    },
    [GET_COMBINED_ITEMS](state, items) {
      state.combinedItems = items;
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
      state.suggestions = JSON.parse(JSON.stringify(state.builds));
    },
    [UPDATE_SUGGESTIONS](state) {
      const s: team[] = JSON.parse(JSON.stringify(state.builds));
      for (const suggestion of s) {
        // Stats
        let maxItems = 0;
        let completedItems = 0;
        const maxComponents = suggestion.components.length;
        let currentComponents = 0;

        for (const champion of suggestion.champions) {
           maxItems += champion.items.length;

           for (const suggestedItem of state.currentItems) {
              completedItems += champion.items.filter((x: item) => x.name == suggestedItem.name).length;
              currentComponents += suggestion.components.filter((x:item) => x.name == suggestedItem.name).length;
           }
        }
        suggestion.stats = {
            maxItems: maxItems,
            completedItems: completedItems,
            maxComponents: maxComponents,
            currentComponents: 0,
            score: ((completedItems / maxItems) * 10) + ((currentComponents / maxComponents) * 10) + tierRatings[suggestion.tier]
        };        
      }
      state.suggestions = s.sort((a, b) => ( a.stats.score <= b.stats.score) ? 1 : ( (b.stats.score < a.stats.score) ? -1 : 0 ));
    }
  },
  actions: {
    load({ commit }, config) {
      commit(GET_SET_VERSION, process.env.VUE_APP_SET_VERSION);
      commit(GET_COMBINED_ITEMS, CombinedItemsJSON);      
      commit(GET_CHAMPIONS, ChampionsJSON);
      commit(GET_BASE_ITEMS, BaseItemsJSON);
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
    clearCurrentLists({ commit }, config) {
      commit(CLEAR_CURRENT_LISTS);
      commit(UPDATE_SUGGESTIONS);
    }
  },
});

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/wizard',
      name: 'Wizard',
      component: Wizard
    },
    {
      path: '/champions',
      name: 'Champions',
      component: Champions
    },
    {
      path: '/items',
      name: 'Items',
      component: Items
    },
    {
      path: '/builds',
      name: 'Builds',
      component: Builds
    }
  ]
});

const app = new Vue({
  render (h): any { return h(App) },
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