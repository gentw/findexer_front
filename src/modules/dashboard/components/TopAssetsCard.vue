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
          <TopAssetsCardItem :asset-item="assetItem"> </TopAssetsCardItem>
        </template>
      </div>
      <!--end::Items-->
    </div>
    <!--end::Body-->
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from "vue";
import { useStore } from "vuex";
import TopAssetsCardItem from "@/modules/dashboard/components/TopAssetsCardItem.vue";
import { AssetData } from "@/store/modules/assets/helpers/AssetsData";
import { Getters } from "@/store/enums/StoreEnums";
import { sortAssets } from "@/modules/common/helpers";

export default defineComponent({
  name: "TopAssetsCard",
  components: {
    TopAssetsCardItem,
  },
  setup() {
    const store = useStore();
    const assetsMap: Map<string, AssetData> = reactive(store.getters[Getters.GET_ASSETS]);
    const sortedAssets = computed(() => {
      return sortAssets(assetsMap, "roi", 5);
    });

    return { sortedAssets };
  },
});
</script>
