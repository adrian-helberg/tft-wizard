<template>
  <iframe id="i_frame" :src="src" 
    width="800" height="1000" name="mobalytics">
    Unable to load mobalytics page
  </iframe>
</template>

<script>
export default {
    name: "IFrame",
    props: ["src"]
}
</script>

<style>

</style>