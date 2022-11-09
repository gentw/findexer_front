<template>
  <AssetList></AssetList>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AssetList from "@/modules/asset_management/portfolio/components/AssetList.vue";

export default defineComponent({
  name: "PortfolioView",
  components: {
    AssetList,
  }
});
</script>
