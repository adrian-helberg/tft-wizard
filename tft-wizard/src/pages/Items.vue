<template>
  <MainLayout>
      <template v-slot:header>
        
      </template>
      <template v-slot:content>
        <IFrame src="https://app.mobalytics.gg/tft/items/combined" />
      </template>
    </MainLayout>
</template>

<script>
export default {
    name: "Items"
}
</script>