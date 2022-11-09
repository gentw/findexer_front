<template>
  <!--begin::Item-->
  <div class="d-flex flex-stack mb-5">
    <!--begin::Section-->
    <div class="d-flex align-items-center me-2">
      <!--begin::Symbol-->
      <div class="symbol symbol-50px me-3">
        <div class="symbol-label bg-light">
          <img :src="topAssetData.image" alt="findex" class="h-50" />
        </div>
      </div>
      <!--end::Symbol-->

      <!--begin::Title-->
      <div class="py-1">
        <a class="fs-6 text-gray-800 text-hover-primary fw-bolder">{{
          topAssetData.name
        }}</a>

        <div class="fs-7 text-muted fw-bold mt-1">
          Value: {{ topAssetData.totalValue }} kr
        </div>
      </div>
      <!--end::Title-->
    </div>
    <!--end::Section-->

    <!--begin::Label-->
    <div class="badge badge-light fw-bold py-4 px-3">
      {{ roiSign }}{{ topAssetData.roi }}%
    </div>
    <!--end::Label-->
  </div>
  <!--end::Item-->
</template>

<script lang="ts">
import { computed, defineComponent, ref, toRefs } from "vue";
import { AssetData } from "@/store/modules/assets/helpers/AssetsData";
import { TopAssetData, emptyTopAssetData } from "@/modules/dashboard/components/models/topAssetData"
import { toCommaSeparated } from "@/modules/common/helpers";

export default defineComponent({
  name: "TopAssetsCardItem",
  props: ["assetItem"],
  setup(props) {
    const { assetItem } = toRefs(props);
    const roiSign = ref<string>();
    const topAssetData = computed(() => {
      const item: AssetData = assetItem.value;
      if (item) {
        // Show '+' when roi > 0, else number is already negative
        roiSign.value = item.roi > 0 ? "+" : "";
        return {
          name: item.name,
          image: item.image,
          totalValue: toCommaSeparated(item.totalValue),
          roi: toCommaSeparated(item.roi, 1),
        } as TopAssetData;
      } else {
        return emptyTopAssetData();
      }
    });

    return {
      topAssetData,
      roiSign,
    };
  },
});
</script>
