<template>
  <div class="champion" :style="champion.style">
    <div style="width:27px;height:34px">
      <img class="grow" :src="champion.tier.src" />
    </div>    
    <div class="column">
      <div v-for="(trait,index) of champion.traits" :key="index">
        <img class="trait" :src="trait.src" />
        <div>{{ trait.name }}</div>
      </div>
    </div>
     <div>{{ champion.name }}({{champion.costs}})</div>
  </div>
</template>

<script>
export default {
  name: "Champion",
  props: ["champion"],
};
</script>

<style lang="scss">
.champion {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  div {
    display: flex;
  }
}

.grow {
  flex-grow: 1;
}

.column {
  flex-direction: column;
}

.trait {
  width: 20px;
  height: 20px;
}

.tier {
  width: 20px;
  height: 20px;
}
</style>
