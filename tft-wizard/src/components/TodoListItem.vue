<template>
    <li :class="{'finished': item.finished}">
        <input type="checkbox" :checked="item.finished" />
        <button @click="toggleItem">toggle</button>
        {{ item.name }}
    </li>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: "TodoListItem",
    props: ["item"],
    methods: {
        toggleItem() {
             this.$emit("toggle", this.item);
        }
    }
});
</script>

<style lang="scss" scoped>
button {
    color: blue;
}
</style>