<template>
  <!--begin::Aside-->
  <div
    id="kt_aside"
    class="aside py-9"
    data-kt-drawer="true"
    data-kt-drawer-name="aside"
    data-kt-drawer-activate="{default: true, lg: false}"
    data-kt-drawer-overlay="true"
    data-kt-drawer-width="{default:'200px', '300px': '250px'}"
    data-kt-drawer-direction="start"
    data-kt-drawer-toggle="#kt_aside_toggle"
  >
    <!--begin::Aside logo-->
    <div
      id="kt_aside_logo"
      class="aside-logo flex-column-auto px-9 mb-9"
    >
      <!--begin::Logo-->
      <router-link to="/dashboard">
        <img
          alt="Logo"
          src="media/logos/demo3.svg"
          class="h-20px logo theme-light-show"
        >
        <img
          alt="Logo"
          src="media/logos/demo3-dark.svg"
          class="h-20px logo theme-dark-show"
        >
      </router-link>
      <!--end::Logo-->
    </div>
    <!--end::Aside logo-->

    <!--begin::Aside menu-->
    <div class="aside-menu flex-column-fluid ps-5 pe-3">
      <SideMenu />
    </div>
    <!--end::Aside menu-->

    <!--begin::Footer-->
    <div
      id="kt_aside_footer"
      class="aside-footer flex-column-auto px-9"
    >
    
    </div>
    <!--end::Footer-->
  </div>
  <!--end::Aside-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";
import SideMenu from "@/layouts/main-layout/aside/Menu.vue";
import { asideTheme } from "@/core/helpers/config";

export default defineComponent({
    name: "KTAside",
    components: {
        SideMenu,
    },
    props: {
        lightLogo: String,
        darkLogo: String,
    },
    setup() {
        const { t } = useI18n();

        return {
            asideTheme,
            t,
        };
    },
});
</script>
