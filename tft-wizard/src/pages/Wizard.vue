<template>
  <MainLayout>
      <div>
          <div>Wizard for set {{this.$store.state.version}}</div>
      </div>
      <template v-slot:header>
          <div>TFT Build Suggestions for the current state of your game</div>
      </template>
      <template v-slot:content>
          <div class="wizard">
              <hr width="100%">
              <div class="wizard-grid">
                <div class="c1">Current champions:</div>
                <div class="c2">
                    <div class="placeholder" v-if="$store.state.currentChampions.length == 0">Select Champions to get better suggestions!</div>
                    <ElementList :elements="$store.state.currentChampions" :size="40" :clickFun="removeCurrentChampion" />
                </div>
                <div class="c3">Current items:</div>
                <div class="c4">
                    <div class="placeholder" v-if="$store.state.currentItems.length == 0">Select Items to get better suggestions!</div>
                    <ElementList :elements="$store.state.currentItems" :size="40" :clickFun="removeCurrentItem" />
                </div>
                <div class="c5">Champions</div>
                <div class="c6">Items</div>
                <div class="c7">
                    <ElementList :elements="$store.state.champions" :size="40" :clickFun="addCurrentChampion" />
                </div>
                <div class="c8">
                    <ElementList :elements="$store.state.items" :size="40" :clickFun="addCurrentItem" />
                </div>
            </div>
            <hr width="100%">
            <div>Build suggestions:</div>
            <hr width="100%">
            <div class="suggestions">
                  <div v-for="suggestion of suggestions" :key="suggestion.id">
                      <Build :build="suggestion" :size="50" /> 
                  </div>
              </div>
          </div>
      </template>
  </MainLayout>
</template>

<script lang="ts">
import MainLayout from '../layouts/MainLayout.vue';
import ElementList from '../components/ElementList.vue';
import Build from '../components/Build.vue';

export default {
    name: "Wizard",
    created: function() {
        this.suggestions = this.$store.state.builds
    },
    methods: {
        addCurrentChampion(champion) {
            this.$store.dispatch("addCurrentChampion", champion);
        },
        removeCurrentChampion(champion) {
            this.$store.dispatch("removeCurrentChampion", champion);
        },
        addCurrentItem(item) {
            this.$store.dispatch("addCurrentItem", item);
        },
        removeCurrentItem(item) {
            this.$store.dispatch("removeCurrentItem", item);
        }
    },
    components: {
        MainLayout, ElementList, Build
    }
}
</script>

<style lang="scss">
@import "../styles/colors.scss";
.wizard {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .suggestions {
        display: flex;
        flex-direction: column;
        padding-top: 6px;
    }

    .wizard-grid {
        display: grid;

        > div {
            padding: 6px;
        }

        .c1 {
            grid-column: 1/2;
            grid-row: 1;
        }

        .c2 {
            grid-column: 2/2;
            grid-row: 1;
        }

        .c3 {
            grid-column: 1/2;
            grid-row: 2;
        }

        .c4 {
            grid-column: 2/2;
            grid-row: 2;
        }

        .c5 {
            grid-column: 1/2;
            grid-row: 3;
        }

        .c6 {
            grid-column: 2/2;
            grid-row: 3;
        }

        .c7 {
            grid-column: 1/2;
            grid-row: 4;
        }

        .c8 {
            grid-column: 2/2;
            grid-row: 4;
        }
    }
}

.placeholder {
    color: $text;
}
</style>