<template>
  <!--begin::Toolbar wrapper-->
  <div class="d-flex align-items-stretch flex-shrink-0">
    <div class="topbar d-flex align-items-stretch flex-shrink-0">
      <!--begin::Search-->
      <div class="d-flex align-items-stretch ms-1 ms-lg-3">
        <KTSearch />
      </div>
      <!--end::Search-->

      <!--begin::Activities-->
      <div class="d-flex align-items-center ms-1 ms-lg-3">
        <!--begin::drawer toggle-->
        <div
          id="kt_activities_toggle"
          class="btn btn-icon btn-color-gray-700 btn-active-color-primary btn-outline w-40px h-40px position-relative"
        >
          <span class="svg-icon svg-icon-1">
            <inline-svg src="media/icons/duotune/general/gen007.svg" />
          </span>
        </div>
        <!--end::drawer toggle-->
      </div>
      <!--end::Activities-->

    

      <button
        id="kt_sidebar_toggler"
        class="btn btn-icon btn-active-icon-primary w-40px h-40px d-xxl-none ms-2 me-n2"
      >
        <span class="svg-icon svg-icon-2x">
          <inline-svg src="media/icons/duotune/coding/cod001.svg" />
        </span>
      </button>
    </div>
  </div>
  <!--end::Toolbar wrapper-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import KTSearch from "@/layouts/main-layout/header/partials/Search.vue";

export default defineComponent({
    name: "LayoutTopbar",
    components: {
        KTSearch,
    },
});
</script>
