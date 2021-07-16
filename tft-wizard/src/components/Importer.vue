<script lang="ts">

var result = async function() {
    console.log("fetch data");
    let test = await function() {
        console.log("test");
    }
    test();
}

export default {
    name: "Importer",
    methods: {
        result
    }
}
</script>