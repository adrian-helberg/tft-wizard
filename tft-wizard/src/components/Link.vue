<template>
  <a class="link" :href="href" :class="{ active: isActive }">
    <slot></slot>
  </a>
</template>

<script>
export default {
    name: "Link",
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
}
</script>

<style lang="scss">
@import '../styles/colors.scss';

.link {
    display: flex;
    justify-content: center;
    color: $text;
    text-decoration: none;
    padding: 6px;
    width: 100px;

    &:hover {
      
    }
}

.active {
  background-color: $background-light;
}
</style>