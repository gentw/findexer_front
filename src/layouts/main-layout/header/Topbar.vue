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

      <!--begin::User panel-->
      <div class="ms-1 ms-lg-3 d-flex flex-stack">
        <!--begin::Wrapper-->
        <div class="d-flex align-items-center">
          <!--begin::Avatar-->
          <div class="symbol symbol-circle symbol-40px">
            <img
              src="media/avatars/300-1.jpg"
              alt="photo"
            >
          </div>
          <!--end::Avatar-->

          <!--begin::User info-->
          <div class="ms-2">
            <!--begin::Name-->
            <a
              href="#"
              class="text-gray-800 text-hover-primary fs-6 fw-bold lh-1"
            >Paul Melone</a>
            <!--end::Name-->

            <!--begin::Major-->
            <span class="text-muted fw-semobold d-block fs-7 lh-1">Python Dev</span>
            <!--end::Major-->
          </div>
          <!--end::User info-->
        </div>
        <!--end::Wrapper-->

        <!--begin::User menu-->
        <div class="ms-1">
          <div
            class="btn btn-sm btn-icon btn-active-color-primary position-relative me-n2"
            data-kt-menu-trigger="click"
            data-kt-menu-overflow="true"
            data-kt-menu-placement="top-end"
          >
            <span class="svg-icon svg-icon-1">
              <inline-svg src="media/icons/duotune/coding/cod001.svg" />
            </span>
          </div>
          <UserMenu />
        </div>
        <!--end::User menu-->
      </div>
      <!--end::User panel-->

      

    

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
import UserMenu from "@/layouts/main-layout/header/partials/UserMenu.vue";

export default defineComponent({
    name: "LayoutTopbar",
    components: {
        KTSearch,
        UserMenu,
    },
});
</script>
