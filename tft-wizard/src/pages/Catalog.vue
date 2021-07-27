<template>
  <MainLayout>
    <template v-slot:header>
        <div>Components catalog</div>
    </template>
    <template v-slot:content>
        <div class="catalog">
            <div>
                Component
                <Item :item="$store.state.items[0]" :size="50">
                    {{$store.state.items[0].displayName}}
                </Item>
            </div>
            <div>
                Item
                <Item :item="$store.state.items[13]" :size="50">
                    <Recipe :recipe="$store.state.items[13].recipe" />
                </Item>
            </div>
            <div>
                Champion
                <Champion :champion="$store.state.builds[0].champions[0]" :size="50">
                    {{$store.state.builds[0].champions[0].name}}
                </Champion>
            </div>
            <div>
                Tier
                <Tier :tier="$store.state.builds[0].tier" />
            </div>
            <div>
                Link
                <Link :href="'/catalog'">Hier</Link>
            </div>
            <div>
                Build
                <Build :build="$store.state.builds[0]" />
            </div>
            <div>
                Recipe
                <Recipe :recipe="$store.state.items[10].recipe" />
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