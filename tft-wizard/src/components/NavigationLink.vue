<template>
    <a :href="url">
        <slot name="image"></slot>
        <slot></slot>
    </a>
</template>

<script lang="ts">
export default {
    name: "NavigationLink",
    props: ["url"]
}
</script>