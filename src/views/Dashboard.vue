<template>
  <div class="row g-6 g-xl-6 mb-6">
    <div class="col-md-6 col-xl-3">
      <AssetAggregateCard
        widget-classes="card-xl-stretch mb-xl-8"
        icon="media/icons/duotune/finance/fin006.svg"
        color="white"
        icon-color="primary"
        :value="totalAssets"
        description="Number of Assets"
        unit="Assets"
      ></AssetAggregateCard>
    </div>

    <div class="col-md-6 col-xl-3">
      <AssetAggregateCard
        widget-classes="card-xl-stretch mb-xl-8"
        icon="media/icons/duotune/finance/fin008.svg"
        color="white"
        icon-color="primary"
        :value="totalValue"
        description="Total porfolio value"
        unit="kr"
      ></AssetAggregateCard>
    </div>

    <div class="col-md-6 col-xl-3">
      <AssetAggregateCard
        widget-classes="card-xl-stretch mb-xl-8"
        icon="media/icons/duotune/general/gen032.svg"
        color="white"
        icon-color="primary"
        :value="totalProfit"
        description="Total profit"
        unit="kr"
      ></AssetAggregateCard>
    </div>

    <div class="col-md-6 col-xl-3">
      <AssetAggregateCard
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
      ></AssetAggregateCard>
    </div>
  </div>

  <div class="row g-6 g-xl-6">
    <!--begin::Asset types-->
    <div class="col-md-6 col">
      <AssetTypesCard></AssetTypesCard>
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

import AssetAggregateCard from "@/components/widgets/dashboard/AssetAggregateCard.vue";
import TopAssetsCard from "@/components/widgets/dashboard/TopAssetsCard.vue";
import AssetTypesCard from "@/components/widgets/dashboard/AssetTypesCard.vue";

import { AssetData } from "@/store/modules/assets/helpers/AssetsData";
import store from "@/store";
import { Actions } from "@/store/enums/StoreEnums";
import {
  computeTotalProfit,
  computeTotalRoi,
  computeTotalValue,
  toCommaSeparated,
} from "@/components/helpers";

export default defineComponent({
  name: "dashboard",
  components: {
    AssetAggregateCard,
    AssetTypesCard,
    TopAssetsCard,
  },
  setup() {
    const assetsMap: Map<string, AssetData> = store.getters.getAssetsMap;
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
