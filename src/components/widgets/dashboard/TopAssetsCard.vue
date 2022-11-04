<template>
  <div class="card">
    <!--begin::Beader-->
    <div class="card-header border-0 py-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label fw-bolder fs-3">Top performing Assets</span>
      </h3>
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body d-flex flex-column">
      <!--begin::Items-->
      <div class="mt-0">
        <template v-for="assetItem in sortedAssets" :key="assetItem.id">
          <TopAssetItem
            :assetItem="assetItem"
            :svgIcon="'media/logos/logo.svg'"
          >
          </TopAssetItem>
        </template>
      </div>
      <!--end::Items-->
    </div>
    <!--end::Body-->
  </div>
</template>

<script lang="ts">
import store from "@/store";
import { AssetData } from "@/store/modules/assets/helpers/AssetsData";
import TopAssetItem from "@/components/widgets/dashboard/TopAssetItem.vue";
import { computed, defineComponent, reactive } from "vue";
import { sortAssets } from "./helpers";
import { Getters } from "@/store/enums/StoreEnums";

export default defineComponent({
  name: "top-performing-assets-card",
  components: {
    TopAssetItem,
  },
  setup() {
    const assetsMap: Map<string, AssetData> = reactive(
      store.getters[Getters.GET_ASSETS]
    );
    const sortedAssets = computed(() => {
      return sortAssets(assetsMap, "roi", 5);
    });

    return { sortedAssets };
  },
});
</script>
