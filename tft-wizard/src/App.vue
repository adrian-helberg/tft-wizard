<template>
  <div id="app">
    <h1>TFT-WIZARD</h1>
    <hr />
    <div class="tiles">
      <Tile width="50px" height="80px" />
      <Tile width="30px" height="120px" />
      <Tile width="30px" height="120px" />
      <Tile width="30px" height="12px" />
      <Tile width="30px" height="120px" />
      <Tile width="130px" height="120px" />
      <Tile width="130px" height="120px" />
      <Tile width="130px" height="120px" />
      <Tile width="130px" height="120px" />
      <Tile width="130px" height="120px" />
      <Tile width="130px" height="120px" />
      <Tile width="130px" height="120px" />
      <Tile width="130px" height="120px" />
      <Tile width="130px" height="120px" />
      <Tile width="130px" height="120px" />
      <Tile width="130px" height="120px" />
      <Tile width="130px" height="120px" />
      <Tile width="130px" height="120px" />
      <Tile width="130px" height="120px" />
      <Tile width="130px" height="120px" />
      <Tile width="130px" height="120px" />
    </div>
    <hr />
  </div>
</template>

<script lang="ts">
import Tile from "./components/Tile.vue";
import Importer from "./components/Importer.vue";

export default {
  name: "App",
  data: () => ({
    
  }),
  methods: {

  },
  computed: {

  },
  components: {
    Tile
  },
  mixins: [Importer],
  created: function() {
    this.result();
  }
};
</script>

<style>
.tiles {
  display: flex;
  flex-wrap: wrap;
}
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
