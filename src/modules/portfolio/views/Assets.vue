<template>
  <AssetList></AssetList>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import AssetList from "@/modules/portfolio/components/AssetList.vue";

export default defineComponent({
  name: "assets",
  components: {
    AssetList,
  },
  setup() {
    onMounted(() => {
    });
  },
});
</script>
