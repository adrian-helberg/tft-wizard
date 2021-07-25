<template>
  <MainLayout>
    <template v-slot:header>
        <div>Components catalog</div>
    </template>
    <template v-slot:content>
        <div class="catalog">
            <div class="entry">
                Item component
                <Item :item="$store.state.items[0]" />
            </div>
            <!-- <div class="entry">
                Item
                <Item :item="$store.state.items[13]" />
            </div> -->
            <div>
                Champion
                <Champion :champion="$store.state.builds[0].champions[0]" />
            </div>
            <div>
                Tier
                <Tier :tier="$store.state.builds[0].tier" />
            </div>
        </div>
    </template>
  </MainLayout>
</template>

<script>

export default {
    name: "Catalog"
}
</script>

<style lang="scss">
.catalog {
    display: flex;
    flex-wrap: wrap;

    > div {
        display: flex;
        flex-direction: column;
        padding: 0 12px;
        cursor: pointer;
    }
}
</style>