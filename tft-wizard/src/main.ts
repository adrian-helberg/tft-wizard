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
}

type team = {
  id: number;
  name: string;
  tier: string;
  playstyle: string;
  stats: stats;
  champions: champion[];
};

const GET_BUILDS = "GET_BUILDS";
const GET_CHAMPIONS = "GET_CHAMPIONS";
const GET_SET_VERSION = "GET_SET_VERSION";
const GET_BASE_ITEMS = "GET_BASE_ITEMS";
const GET_COMBINED_ITEMS = "GET_COMBINED_ITEMS";

const ADD_CURRENT_ITEM = "SET_CURRENT_ITEMS";
const REMOVE_CURRENT_ITEM = "REMOVE_CURRENT_ITEMS";
const ADD_CURRENT_CHAMPION = "ADD_CURRENT_CHAMPION";
const REMOVE_CURRENT_CHAMPION = "REMOVE_CURRENT_CHAMPION";

const CLEAR_CURRENT_LISTS = "CLEAR_CURRENT_LISTS";

const UPDATE_SUGGESTIONS = "UPDATE_SUGGESTIONS";

const store = new Vuex.Store({
  state: {
    version: 0,
    builds: [] as team[],
    champions: [] as champion[],
    baseItems: [] as item[],
    combinedItems: [] as item[],
    currentChampions: [] as champion[],
    currentItems: [] as item[],
    suggestions: [] as team[]
  },
  mutations: {
    [GET_SET_VERSION](state, version) {
        state.version = version
    },
    [GET_BUILDS](state, builds) {
      // Add item components to builds
      builds.forEach((build: team) => {
        const _champions: champion[] = [];
        build.champions.forEach((champion: champion) => {
          const foundChampion = state.champions.filter(x => x.name == champion.name)[0];
          // copy champion to prevent overriding them for the champions tab
          const _champion: champion = {
              id: foundChampion.id,
              img: foundChampion.img,
              name: foundChampion.name,
              items: [],
          };
          champion.items.forEach((item: item) => {
            const findItem = state.combinedItems.filter(x => x.name == item.name);
            if (findItem.length > 0) {
              _champion.items.push(findItem[0]);
            }
          });
          _champions.push(_champion);
        });
        build.champions = _champions;
      });
      state.builds = builds;
      state.suggestions = builds;
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
    [ADD_CURRENT_CHAMPION](state, champion) {
      state.currentChampions.push(champion);
    },
    [REMOVE_CURRENT_CHAMPION](state, champion) {
      const index = state.currentChampions.indexOf(champion);
      if (index > -1) state.currentChampions.splice(index, 1);
    },
    [CLEAR_CURRENT_LISTS](state) {
      state.currentChampions = [];
      state.currentItems = [];
    },
    [UPDATE_SUGGESTIONS](state, s) {
      state.suggestions = s;
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
      const i = {
        id: this.state.currentItems.length,
        name: item.name,
        img: item.img
      };
      commit(ADD_CURRENT_ITEM, i);

      const suggestions: team[] = [];
      for (const build of this.state.builds) {
        let maxItems = 0;
        let completedItems = 0;
        for (const champion of build.champions) {
           maxItems += champion.items?.length;
           for (const suggestedItem of this.state.currentItems) {
            completedItems += champion.items.filter(x => x.name == suggestedItem.name).length;
           }
        }
        suggestions.push({
            id: build.id,
            name: build.name,
            tier: build.tier,
            playstyle: build.playstyle,
            stats: {
              maxItems: maxItems,
              completedItems: completedItems,
              maxComponents: 0,
              currentComponents: 0
            },
            champions: build.champions
          } as team);        
      }
      commit(UPDATE_SUGGESTIONS, suggestions);
    },
    removeCurrentItem({ commit }, item) {
      commit(REMOVE_CURRENT_ITEM, item);
      commit(UPDATE_SUGGESTIONS);
    },
    addCurrentChampion({ commit }, champion) {
      const c = {
        id: this.state.currentChampions.length,
        name: champion.name,
        img: champion.img
      };
      commit(ADD_CURRENT_CHAMPION, c);
    },
    removeCurrentChampion({ commit }, champion) {
      commit(REMOVE_CURRENT_CHAMPION, champion);
    },
    clearCurrentLists({ commit }, config) {
      commit(CLEAR_CURRENT_LISTS);
      commit(UPDATE_SUGGESTIONS, this.state.builds);
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