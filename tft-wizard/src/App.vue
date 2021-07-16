<template>
  <div id="app">
    {{ greetings }}
    <div class="age">
      <span v-if="alter < 18">minderjährig</span>
      <span v-else-if="alter >= 18">volljährig</span>
    </div>

    <h3>Wohnorte:</h3>
    <ul>
      <li v-for="city in cities" v-bind:key="city.id">
        {{ city.id }}. {{ city.name }}
      </li>
    </ul>

    <span v-for="n in 10" v-bind:key="n">{{ n }}</span>

    <TodoList />

    <button @click="test">Test</button>
    <br />
    <a href="?seite=23" @click.right.prevent="hello">Gehe zu Seite 23</a>
    <br />
    <a href="?seite=24" @mouseup="adios">Gehe zu Seite 24</a>
    <br />
    <input type="text" @keydown.enter.esc="yeah" />
    <br />
    <br />
    <NavigationLink url="www.google.de">
      <template v-slot:image>
        <img src="https://rerollcdn.com/characters/Skin/5/Kalista.png" alt="Kalista" width="50px" height="50px" />
      </template>
      Zum Profil
    </NavigationLink>
  </div>
</template>

<script lang="ts">
import TodoList from "./components/TodoList.vue";
import NavigationLink from "./components/NavigationLink.vue";

export default {
  name: "App",
  data: () => ({
    vorname: "Adrian",
    nachname: "Helberg",
    alter: 29,
    cities: [
      { id: 1, name: "Stuttgart" },
      { id: 2, name: "Hamburg" },
      { id: 3, name: "Berlin" },
      { id: 4, name: "Köln" },
    ],
  }),
  methods: {
    test() { 
      alert("Hi!"); 
    },
    hello() {
      alert("Hello!");
    },
    adios() {
      alert("Adios!");
    },
    yeah() {
      alert("yeah!");
    }
  },
  computed: {
    greetings() {
      return `Hi, ${this.vorname} ${this.nachname}!`;
    },
  },
  components: {
    TodoList, NavigationLink
  }
};
</script>

<style>
.finished {
  text-decoration: line-through;
}
.age {
  border: 1px solid red;
  margin: 5px;
  padding: 10px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
