<template>
  <div>
    <MainLayout>
      <template v-slot:header>
        <div>
          Learning by doing great at Teamfight Tactics
          <div class="subtitle">- Get better while you play -</div>
        </div>
      </template>
      <template v-slot:content>
        <div class="wrapper">
          <div>
            Use the tft-wizard to get build suggestions for the current state of
            your game to climb the ladder
          </div>
        </div>
      </template>
    </MainLayout>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style lang="scss">
.subtitle {
  text-align: center;
}

.wrapper {
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
