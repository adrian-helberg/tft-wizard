import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import Wizard from "./pages/Wizard.vue";
import Champions from "./pages/Champions.vue";
import Builds from "./pages/Builds.vue";
import Items from "./pages/Items.vue";
import NotFound from "./pages/404.vue";
import Axios from "axios";
import BuildsJSON from "./assets/builds.json";
import ChampionsJSON from "./assets/champions.json";

// Make axios globally available
Vue.prototype.$axios = Axios;
// Integrate vuex state management
Vue.use(Vuex);

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
const GET_SET_VERSION = "GET_SET_VERSION";

const store = new Vuex.Store({
  state: {
    version: 0,
    builds: [] as team[],
    champions: [] as champion[],
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
  },
  actions: {
    load({ commit }, config) {
      commit(GET_SET_VERSION, process.env.VUE_APP_SET_VERSION);
      commit(GET_BUILDS, BuildsJSON);
      commit(GET_CHAMPIONS, ChampionsJSON);
    },
  },
});

const routes: any = {
  "/": App,
  "/wizard": Wizard,
  "/champions": Champions,
  "/items": Items,
  "/builds": Builds,
};

const app = new Vue({
  data: {
    currentRoute: window.location.pathname,
  },
  computed: {
    ViewComponent(): any {
      return routes[this.currentRoute] || NotFound
    }
  },
  render (h): any { return h(this.ViewComponent) },
  store: store,
  components: {
    App,
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