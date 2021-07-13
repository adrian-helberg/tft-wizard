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

    <ul>
      <li v-for="(todo, index) in todos" v-bind:key="todo.id" :class="{'finished': todo.finished}">
        <input type="checkbox" :checked="todo.finished" />
        <a :href="`?id=${index}`">Show</a>
        {{ ++index }}. {{ todo.name }}
      </li>
    </ul>

    <button @click="test">Test</button>
  </div>
</template>

<script lang="ts">
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
    todos: [
      { id: 0, name: "Todo #1", finished: false },
      { id: 1, name: "Todo #2", finished: true },
      { id: 2, name: "Todo #3", finished: false },
      { id: 3, name: "Todo #4", finished: false },
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
