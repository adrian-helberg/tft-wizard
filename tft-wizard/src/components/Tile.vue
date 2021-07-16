<template>
  <a href="#" class="tile" :style="{width: width, height: height}">Tile</a>
</template>

<script>
export default {
    name: "Tile",
    props: ["width", "height"],
}
</script>

<style>
.tile {
    display: flex;    
    background-color: green;
    margin: 12px;
}

.tile:hover {
    background-color: red;
}
</style>