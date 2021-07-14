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
  </div>
</template>

<script lang="ts">
import TodoList from "./components/TodoList.vue";

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
    }
  },
  computed: {
    greetings() {
      return `Hi, ${this.vorname} ${this.nachname}!`;
    },
  },
  components: {
    TodoList
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
