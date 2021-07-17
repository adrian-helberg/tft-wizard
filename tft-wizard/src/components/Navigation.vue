<template>
  <a class="navigation" :href="href" :class="{ active: isActive }">
    <slot></slot>
  </a>
</template>

<script>
  export default {
    name: "Navigation",
    props: {
      href: {
        type: String,
        required: true 
      }
    },
    computed: {
      isActive () {
        return this.href === this.$root.currentRoute
      }
    },
    methods: {
    }
  }
</script>

<style scoped>
  .active {
    color: cornflowerblue;
  }
  .navigation {
    padding: 12px;
  }
</style>