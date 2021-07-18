<template>
  <div class="list">
      <div v-for="element in elements" :key="element.id">
          <img  :src="element.img" 
                :alt="element.name" 
                :title="element.name" 
                :style="{width: size + 'px', height: size + 'px'}" />
      </div>
  </div>
</template>

<script>
export default {
    name: "ElementList",
    props: ["elements", "size"]
}
</script>

<style lang="scss">
.list {
    display: flex;
    flex-wrap: wrap;
}
</style>