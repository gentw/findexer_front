<template>
  <!--begin::Asset List-->
  <div class="card">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label fs-1 mb-1">{{ totalAssets }} Assets</span>

        <span class="text-muted mt-1 fs-6"
          >Total value {{ totalValue }} SEK ({{ roiSign
          }}{{ totalRoi }} %)</span
        >
      </h3>

      <!--begin::Menu-->
      <div class="me-0">
        <button
          class="btn btn-primary"
          data-kt-menu-trigger="click"
          data-kt-menu-placement="bottom-end"
          data-kt-menu-flip="top-end"
        >
          <i class="fa-solid fa-caret-down"></i>
          Add Asset
        </button>
      </div>
      <!--end::Menu-->
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body py-3">
      <!--begin::Table container-->
      <div class="table-responsive">
        <!--begin::Table-->
        <table
          class="
            table table-row-dashed table-row-gray-300
            align-middle
            gs-0
            gy-4
          "
        >
          <!--begin::Table head-->
          <thead>
            <tr class="fs-5 text-muted">
              <th class="min-w-120px">Asset</th>
              <th class="min-w-60px">Type</th>
              <th class="min-w-60px">Investment (SEK)</th>
              <th class="min-w-60px">Value (SEK)</th>
              <th class="min-w-60px">ROI (%)</th>
              <th class="min-w-60px">Updated</th>
            </tr>
          </thead>
          <!--end::Table head-->

          <!--begin::Table body-->
          <tbody>
            <template
              v-for="assetItem in sortedAssetsMap"
              :item="assetItem"
              :key="assetItem.id"
            >
              <tr>
                <!-- Asset -->
                <td>
                  <div class="d-flex align-items-center">
                    <div class="symbol symbol-45px me-5">
                      <img :src="assetItem.image" alt="" />
                    </div>
                    <div class="d-flex justify-content-start flex-column">
                      <div class="fs-5 text-gray-700 text-dark">
                        {{ assetItem.name }}
                      </div>
                      <p class="text-gray-400 fw-bold fs-6 mb-1">
                        {{ assetItem.type }}
                      </p>
                    </div>
                  </div>
                </td>

                <!-- Asset type -->
                <td>
                  <div class="d-flex justify-content-start flex-column">
                    <div class="text-gray-700 fs-6 text-dark">
                      {{ assetItem.addMethod }}
                    </div>
                    <p class="text-gray-400 fw-bold fs-5 mb-1">
                      {{ assetItem.origin }}
                    </p>
                  </div>
                </td>

                <!-- Total investment -->
                <td>
                  <div class="d-flex justify-content-start flex-column">
                    <div class="fs-6 text-gray-700 text-dark">
                      {{ toCommaSeparated(assetItem.totalInvestment) }} kr
                    </div>
                  </div>
                </td>

                <!-- Current value -->
                <td>
                  <div class="d-flex justify-content-start flex-column">
                    <div class="fs-6 text-gray-700 text-dark">
                      {{ toCommaSeparated(assetItem.totalValue) }} kr
                    </div>
                  </div>
                </td>

                <!-- ROI -->
                <td>
                  <div class="d-flex justify-content-start flex-column">
                    <div class="fs-6 text-gray-700 text-dark">
                      {{ toCommaSeparated(assetItem.roi, 1) }} %
                    </div>
                  </div>
                </td>

                <!-- Last updated -->
                <td>
                  <div class="fs-6 text-gray-700 text-dark">
                    {{ assetItem.lastUpdated }}
                  </div>
                </td>

                <!-- Action -->
                <td class="text-end">
                  <!-- Edit -->
                  <a
                    class="
                      btn btn-icon btn-bg-light btn-active-color-primary btn-sm
                      me-1
                    "
                    @click="setSelectedAssetItem(assetItem.id)"
                    data-bs-toggle="modal"
                    :data-bs-target="`#modal-edit-asset`"
                  >
                    <span class="svg-icon svg-icon-3">
                      <inline-svg src="media/icons/duotune/art/art005.svg" />
                    </span>
                  </a>
                  <!-- Delete -->
                  <a
                    class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm">
                    <span class="svg-icon svg-icon-3">
                      <inline-svg
                        src="media/icons/duotune/general/gen027.svg"
                      />
                    </span>
                  </a>
                </td>
              </tr>
            </template>
          </tbody>
          <!--end::Table body-->
        </table>
        <!--end::Table-->
      </div>
      <!--end::Table container-->
    </div>
  </div>
  <!--end::Asset List-->

  <!--begin::Edit Asset modal-->
  <EditAssetModal :assetItem="selectedAssetItem"></EditAssetModal>
  <!--end::Edit Asset modal-->
</template>

<style lang="scss">
// Hide ugly arrows from number input (Chrome), looks fine in Firefox
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
  margin: 0 !important;
}
</style>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
import store from "@/store";
import { Actions } from "@/store/enums/StoreEnums";
import EditAssetModal from "@/components/modals/EditAssetModal.vue";
import { AssetData } from "@/store/modules/assets/helpers/AssetsData";
import {
  computeTotalRoi,
  computeTotalValue,
  toCommaSeparated,
} from "@/components/helpers";
import { sortAssets } from "../dashboard/helpers";

export default defineComponent({
  name: "assets-list",
  components: {
    EditAssetModal,
  },
  setup() {
    const assetsMap: Map<string, AssetData> = store.getters.getAssetsMap;
    const totalAssets = computed(() => {
      return assetsMap.size;
    });
    const sortedAssetsMap = computed(() => {
      return sortAssets(assetsMap, "epochTime", totalAssets.value);
    });
    const roiSign = ref<string>();
    const totalValue = computed(() => {
      return toCommaSeparated(computeTotalValue(assetsMap), 0);
    });
    const totalRoi = computed(() => {
      const totalRoi = computeTotalRoi(assetsMap);
      roiSign.value = totalRoi > 0 ? "+" : "";
      return toCommaSeparated(totalRoi);
    });
    /**
     * In order to pass assetId and assetName to DeleteAssetModal (props),
     * we need to set the variables on click. Placing DeleteAssetModal
     * component inside Table item overrides props in each loop.
     */
    const selectedAssetItem = ref<AssetData>();
    function setSelectedAssetItem(assetId: string) {
      selectedAssetItem.value = assetsMap.get(assetId);
    }

    onMounted(() => {
      store.dispatch(Actions.GET_ASSETS);
    });

    return {
      sortedAssetsMap,
      totalAssets,
      selectedAssetItem,
      setSelectedAssetItem,
      toCommaSeparated,
      totalValue,
      totalRoi,
      roiSign,
    };
  },
});
</script>
