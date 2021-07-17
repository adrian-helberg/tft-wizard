<template>
  <MainLayout>
      <div>
          <h2>Wizard for set {{this.$store.state.version}}</h2>
          <div class="container">
            <div>
                <input type="text" placeholder="Search for champion" />
            </div>
            <div class="champions">
                <div v-for="champion of this.$store.state.champions" :key="champion.id">
                    <Champion :champion="champion" :size="40" />
                </div>
            </div>
            
          </div>
      </div>
  </MainLayout>
</template>

<script>
import MainLayout from '../layouts/MainLayout.vue';
import Champion from '../components/Champion.vue';

export default {
    name: "Wizard",
    components: {
        MainLayout, Champion
    }
}
</script>