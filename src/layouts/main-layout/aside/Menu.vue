<template>
  <!--begin::Menu wrapper-->
  <div
    id="kt_aside_menu_wrapper"
    ref="scrollElRef"
    class="w-100 hover-scroll-overlay-y d-flex pe-2"
    data-kt-scroll="true"
    data-kt-scroll-activate="{default: false, lg: true}"
    data-kt-scroll-height="auto"
    data-kt-scroll-dependencies="#kt_aside_logo, #kt_aside_footer"
    data-kt-scroll-wrappers="#kt_aside, #kt_aside_menu, #kt_aside_menu_wrapper"
    data-kt-scroll-offset="100"
  >
    <!--begin::Menu-->
    <div
      id="#kt_aside_menu"
      class="menu menu-column menu-rounded menu-sub-indention menu-active-bg fw-semibold my-auto"
      data-kt-menu="true"
    >
      <template
        v-for="(item, i) in MainMenuConfig"
        :key="i"
      >
          <div class="menu-item">
            <router-link
              class="menu-link"
              active-class="active"
              :to="item.route"
            >
              <span
                v-if="item.svgIcon || item.fontIcon"
                class="menu-icon"
              >
                <i
                  v-if="asideMenuIcons === 'font'"
                  :class="item.fontIcon"
                  class="bi fs-3"
                />
                <span
                  v-else-if="asideMenuIcons === 'svg'"
                  class="svg-icon svg-icon-5"
                >
                  <inline-svg :src="item.svgIcon" />
                </span>
              </span>
              <span class="menu-title">{{ translate(item.heading) }}</span>
            </router-link>
          </div>
      </template>
    </div>
    <!--end::Menu-->
  </div>
  <!--end::Menu wrapper-->
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";
import { asideMenuIcons } from "@/core/helpers/config";
import MainMenuConfig from "@/core/config/MainMenuConfig";

export default defineComponent({
    name: "SideMenu",
    components: {},
    setup() {
        const { t, te } = useI18n();
        const route = useRoute();
        const scrollElRef = ref<null | HTMLElement>(null);

        onMounted(() => {
            if (scrollElRef.value) {
                scrollElRef.value.scrollTop = 0;
            }
        });

        const translate = (text) => {
            if (te(text)) {
                return t(text);
            } else {
                return text;
            }
        };

        const hasActiveChildren = (match) => {
            return route.path.indexOf(match) !== -1;
        };

        return {
            hasActiveChildren,
            MainMenuConfig,
            asideMenuIcons,
            translate
        };
    },
});
</script>
