<template>
  <AssetList></AssetList>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import AssetList from "@/modules/asset_management/portfolio/components/AssetList.vue";
import { Mutations } from "@/store/enums/StoreEnums";

export default defineComponent({
  name: "PortfolioView",
  components: {
    AssetList,
  },
  setup() {
    const store = useStore();
    store.commit(Mutations.SET_LAYOUT_CONFIG_PROPERTY, {property: "aside.display", value: true});
    store.commit(Mutations.SET_LAYOUT_CONFIG_PROPERTY, {property: "header.display", value: true});
  }
});
</script>
