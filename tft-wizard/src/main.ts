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

type item = {
  id: number;
  name: string;
  img: string;
};

type champion = {
  id: number;
  name: string;
  img: string;
  items: item[];
};

type team = {
  id: number;
  name: string;
  tier: string;
  playstyle: string;
  champions: champion[];
};

const GET_BUILDS = "GET_BUILDS";
const GET_CHAMPIONS = "GET_CHAMPIONS";
const GET_ITEMS = "GET_ITEMS";
const GET_SET_VERSION = "GET_SET_VERSION";

const ADD_CURRENT_ITEM = "SET_CURRENT_ITEMS";
const REMOVE_CURRENT_ITEM = "REMOVE_CURRENT_ITEMS";
const ADD_CURRENT_CHAMPION = "ADD_CURRENT_CHAMPION";
const REMOVE_CURRENT_CHAMPION = "REMOVE_CURRENT_CHAMPION";

const CLEAR_CURRENT_LISTS = "CLEAR_CURRENT_LISTS";

const store = new Vuex.Store({
  state: {
    version: 0,
    builds: [] as team[],
    champions: [] as champion[],
    items: [] as item[],
    currentChampions: [] as Champions[],
    currentItems: [] as item[]
  },
  mutations: {
    [GET_SET_VERSION](state, version) {
        state.version = version
    },
    [GET_BUILDS](state, builds) {
      state.builds = builds;
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
    }
  },
  actions: {
    load({ commit }, config) {
      commit(GET_SET_VERSION, process.env.VUE_APP_SET_VERSION);
      commit(GET_BUILDS, BuildsJSON);
      commit(GET_CHAMPIONS, ChampionsJSON);
      commit(GET_ITEMS, ItemsJSON);
    },
    addCurrentItem({ commit }, item) {
      const i = {
        id: this.state.currentItems.length,
        name: item.name,
        img: item.img
      };
      commit(ADD_CURRENT_ITEM, i);
    },
    removeCurrentItem({ commit }, item) {
      commit(REMOVE_CURRENT_ITEM, item);
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