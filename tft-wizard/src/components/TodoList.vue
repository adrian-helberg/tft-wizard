<template>
    <ul>
      <TodoListItem v-for="todo in todos" :key="todo.id" :item="todo" @toggle="toggleListItem" />
    </ul>
</template>

<script lang="ts">
import Vue from 'vue'
import TodoListItem from "./TodoListItem.vue";

export default Vue.extend({
    name: "TodoList",
    data: () => ({
        todos: [
            { id: 0, name: "Todo #1", finished: false },
            { id: 1, name: "Todo #2", finished: true },
            { id: 2, name: "Todo #3", finished: false },
            { id: 3, name: "Todo #4", finished: false },
        ],
    }),
    components: {
        TodoListItem
    },
    methods: {
        toggleListItem(el) {
            el.finished = !el.finished;
        }
    }
})
</script>

<style lang="sass">

</style>