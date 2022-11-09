<template>
  <div class="row g-6 g-xl-6 mb-6">
    <div class="col-md-6 col-xl-3">
      <AssetClassesCardItem
        widget-classes="card-xl-stretch mb-xl-8"
        icon="media/icons/duotune/finance/fin006.svg"
        color="white"
        icon-color="primary"
        :value="totalAssets"
        description="Number of Assets"
        unit="Assets"
      ></AssetClassesCardItem>
    </div>

    <div class="col-md-6 col-xl-3">
      <AssetClassesCardItem
        widget-classes="card-xl-stretch mb-xl-8"
        icon="media/icons/duotune/finance/fin008.svg"
        color="white"
        icon-color="primary"
        :value="totalValue"
        description="Total porfolio value"
        unit="kr"
      ></AssetClassesCardItem>
    </div>

    <div class="col-md-6 col-xl-3">
      <AssetClassesCardItem
        widget-classes="card-xl-stretch mb-xl-8"
        icon="media/icons/duotune/general/gen032.svg"
        color="white"
        icon-color="primary"
        :value="totalProfit"
        description="Total profit"
        unit="kr"
      ></AssetClassesCardItem>
    </div>

    <div class="col-md-6 col-xl-3">
      <AssetClassesCardItem
        widget-classes="card-xl-stretch mb-xl-8"
        :icon="
          totalRoi > 0
            ? 'media/icons/duotune/arrows/arr056.svg'
            : 'media/icons/duotune/arrows/arr057.svg'
        "
        color="white"
        icon-color="success"
        :value="totalRoi"
        description="All time ROI"
        unit="%"
      ></AssetClassesCardItem>
    </div>
  </div>

  <div class="row g-6 g-xl-6">
    <!--begin::Asset types-->
    <div class="col-md-6 col">
      <AssetClassesCard></AssetClassesCard>
    </div>
    <!--end::Asset types-->

    <!--begin::Top Assets-->
    <div class="col-md-6 col">
      <TopAssetsCard></TopAssetsCard>
    </div>
    <!--end::Top Assets-->
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";
import { useStore } from "vuex";
import AssetClassesCardItem from "@/modules/asset_management/dashboard/components/AssetClassesCardItem.vue";
import AssetClassesCard from "@/modules/asset_management/dashboard/components/AssetClassesCard.vue";
import TopAssetsCard from "@/modules/asset_management/dashboard/components/TopAssetsCard.vue";
import { AssetData } from "@/modules/asset_management/store/models/assetsData";
import { Actions, Getters } from "@/modules/asset_management/store/StoreEnums";
import { computeTotalProfit } from "@/modules/asset_management/dashboard/components/helpers";
import {
  computeTotalRoi,
  computeTotalValue,
  toCommaSeparated,
} from "@/modules/asset_management/common/helpers";

export default defineComponent({
  name: "DashboardView",
  components: {
    AssetClassesCardItem,
    AssetClassesCard,
    TopAssetsCard,
  },
  setup() {
    const store = useStore();
    const assetsMap: Map<string, AssetData> = store.getters[Getters.GET_ASSETS];
    const totalAssets = computed(() => {
      // :value prop in AssetsCard expects a String
      return String(assetsMap.size);
    });
    const totalValue = computed(() => {
      return toCommaSeparated(computeTotalValue(assetsMap));
    });
    const totalProfit = computed(() => {
      return toCommaSeparated(computeTotalProfit(assetsMap));
    });
    const totalRoi = computed(() => {
      return toCommaSeparated(computeTotalRoi(assetsMap), 1);
    });

    onMounted(() => {
      store.dispatch(Actions.GET_ASSETS);
    });

    return { totalAssets, totalValue, totalProfit, totalRoi };
  },
});
</script>
