<template>
  <MainLayout>
      <template v-slot:header>
        
      </template>
      <template v-slot:content>
        <IFrame src="https://app.mobalytics.gg/tft/champions" />
      </template>
    </MainLayout>
</template>

<script>
export default {
    name: "Champions"
}
</script>