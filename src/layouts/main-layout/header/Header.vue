<template>
  <!--begin::Header-->
  <div
    id="kt_header"
    class="header align-items-stretch"
    :data-kt-sticky="isHeaderSticky"
    data-kt-sticky-name="header"
    data-kt-sticky-offset="{default: '200px', lg: '300px'}"
  >
    <!--begin::Container-->
    <div
      id="kt_header_container"
      :class="{
        'container-fluid': headerWidthFluid,
        'container-xxl': !headerWidthFluid,
      }"
      class="d-flex flex-stack flex-wrap gap-2"
    >
      <div class="d-flex d-lg-none align-items-center ms-n2 me-2">
        <!--begin::Aside mobile toggle-->
        <div
          id="kt_aside_toggle"
          class="btn btn-icon btn-active-icon-primary"
        >
          <span class="svg-icon svg-icon-1 mt-1">
            <inline-svg src="media/icons/duotune/abstract/abs015.svg" />
          </span>
        </div>
        <!--end::Aside mobile toggle-->

        <!--begin::Logo-->
        <router-link
          to="/dashboard"
          class="d-flex align-items-center"
        >
          <img
            alt="Logo"
            src="media/logos/logo.svg"
            class="h-20px"
          >
        </router-link>
        <!--end::Logo-->
      </div>

      <PageTitle />

      <!--begin::Wrapper-->
      <div
        class="d-flex align-items-stretch justify-content-between flex-lg-grow-1"
      >
        <!--begin::Navbar-->
        <div
          id="kt_header_nav"
          class="d-flex align-items-stretch"
        >
        </div>
        <!--end::Navbar-->

        <!--begin::Topbar-->
        <div class="d-flex align-items-stretch flex-shrink-0">
          <KTTopbar />
        </div>
        <!--end::Topbar-->
      </div>
      <!--end::Wrapper-->
    </div>
    <!--end::Container-->
  </div>
  <!--end::Header-->
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import KTTopbar from "@/layouts/main-layout/header/Topbar.vue";
import PageTitle from "@/layouts/main-layout/page-title/PageTitle.vue";

import {
    headerWidthFluid,
    headerFixed,
    headerFixedOnMobile,
    headerLeft,
    asideDisplay,
} from "@/core/helpers/config";

export default defineComponent({
    name: "KTHeader",
    components: {
        KTTopbar,
        PageTitle,
    },
    setup() {
        const isHeaderSticky = computed(() => {
            if (window.innerWidth > 768) {
                return headerFixed.value;
            } else {
                return headerFixedOnMobile.value;
            }
        });

        return {
            headerWidthFluid,
            headerLeft,
            asideDisplay,
            isHeaderSticky,
        };
    },
});
</script>
