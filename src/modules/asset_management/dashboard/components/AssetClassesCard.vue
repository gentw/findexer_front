<template>
  <div class="card">
    <!--begin::Header-->
    <div class="card-header border-0">
      <h3 class="card-title fw-bolder text-dark">Portfolio Diversification</h3>
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body pt-0">
      <template v-for="(item, index) in list" :key="index">
        <!--begin::Item-->
        <div
          :class="['mb-7' && list.length - 1 !== index, `bg-light-${item.color}`]"
          class="d-flex align-items-center rounded p-5 mb-7"
        >
          <!--begin::Icon-->
          <span :class="`svg-icon-${item.color}`" class="svg-icon me-5">
            <span class="svg-icon svg-icon-1">
              <inline-svg src="media/icons/duotune/abstract/abs027.svg" />
            </span>
          </span>
          <!--end::Icon-->

          <!--begin::Title-->
          <div class="flex-grow-1 me-2">
            <a href="#" class="fw-bolder text-gray-800 text-hover-primary fs-6">{{
              item.type
            }}</a>

            <span class="text-muted fw-bold d-block">Value: {{ item.value }} kr</span>
          </div>
          <!--end::Title-->

          <!--begin::Lable-->
          <span :class="`text-${item.color}`" class="fw-bolder py-1"
            >{{ item.percentage }} %</span
          >
          <!--end::Lable-->
        </div>
        <!--end::Item-->
      </template>
    </div>
    <!--end::Body-->
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import { AssetData } from "@/modules/asset_management/store/models/assetsData";
import { Getters } from "@/modules/asset_management/store/StoreEnums";
import {
  AssetClassesCardListItem,
  buildAssetClassesCardList,
  sortMapArray,
} from "@/modules/asset_management/dashboard/components/helpers";

export default defineComponent({
  name: "AssetClassesCard",
  setup() {
    const store = useStore();
    const assetsMap: Map<string, AssetData> = store.getters[Getters.GET_ASSETS];
    const list = computed(() => {
      const assetsAggregateList: Array<AssetClassesCardListItem> = buildAssetClassesCardList(
        assetsMap
      );
      return sortMapArray(assetsAggregateList, "percentage", assetsAggregateList.length);
    });

    return {
      list,
    };
  },
});
</script>
