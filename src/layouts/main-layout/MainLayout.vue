<template>
  <KTLoader
    v-if="loaderEnabled"
    :logo="loaderLogo"
  />

  <!-- begin:: Body -->
  <div class="page d-flex flex-row flex-column-fluid">
    <div
      id="kt_wrapper"
      class="wrapper d-flex flex-column flex-row-fluid"
    >
      <KTHeader v-if="headerDisplay" />

      <!-- begin:: Content -->
      <div
        id="kt_content"
        class="d-flex flex-column-fluid align-items-start"
        :class="{
          'container-fluid': contentWidthFluid,
          'container-xxl': !contentWidthFluid,
        }"
      >
        <KTAside
          v-if="asideEnabled && asideDisplay"
          :light-logo="themeLightLogo"
          :dark-logo="themeDarkLogo"
        />
        <div
          id="kt_content_container"
          class="content flex-row-fluid"
        >
          <router-view />
        </div>
      </div>
      <!-- end:: Content -->
      <KTFooter />
    </div>
  </div>
  <!-- end:: Body -->
  <KTScrollTop />
</template>

<script lang="ts">
import { defineComponent, onMounted, watch, nextTick, reactive, computed, onUpdated } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import KTAside from "@/layouts/main-layout/aside/Aside.vue";
import KTHeader from "@/layouts/main-layout/header/Header.vue";
import KTFooter from "@/layouts/main-layout/footer/Footer.vue";
import HtmlClass from "@/core/services/LayoutService";
import KTScrollTop from "@/layouts/main-layout/extras/ScrollTop.vue";
import KTLoader from "@/components/Loader.vue";
import { Actions } from "@/store/enums/StoreEnums";
import { MenuComponent } from "@/assets/ts/components";
import { reinitializeComponents } from "@/core/plugins/keenthemes";
import { removeModalBackdrop } from "@/core/helpers/dom";
import { Mutations } from "@/store/enums/StoreEnums";
import {
    toolbarDisplay,
    loaderEnabled,
    contentWidthFluid,
    loaderLogo,
    asideEnabled,
    subheaderDisplay,
    themeLightLogo,
    themeDarkLogo,
    displaySidebar,
} from "@/core/helpers/config";

export default defineComponent({
    name: "MasterLayout",
   
    components: {
        KTAside,
        KTHeader,
        KTFooter,
        KTScrollTop,
        KTLoader,
    },
    setup() {
        const store = useStore();
        const route = useRoute();
        

        let asideDisplay = store.getters.layoutConfig('aside').display;
        let headerDisplay = store.getters.layoutConfig('header').display;

        // show page loading
        store.dispatch(Actions.ADD_BODY_CLASSNAME, "page-loading");


        onMounted(() => {
          
            // initialize html element classes
            HtmlClass.init();
            nextTick(() => {
                reinitializeComponents();

                if(!asideDisplay) {
                  let kt_wrapper = document.getElementById('kt_wrapper')?.classList;
                  kt_wrapper?.remove('wrapper');
                  kt_wrapper?.add('wrapper_2');   
                } 
            });
            // Simulate the delay page loading
            setTimeout(() => {
                // Remove page loader after some time
                store.dispatch(Actions.REMOVE_BODY_CLASSNAME, "page-loading");
            }, 500);
        });


        watch(
            () => route.path,
            () => {
                MenuComponent.hideDropdowns(undefined);

                removeModalBackdrop();
                nextTick(() => {                    
                    reinitializeComponents();

                    if(!asideDisplay) {  
                      let kt_wrapper = document.getElementById('kt_wrapper')?.classList;
                      kt_wrapper?.remove('wrapper');
                      kt_wrapper?.add('wrapper_2');   
                    }                    
                    
                });
            },

          
        );

        return {
            toolbarDisplay,
            loaderEnabled,
            contentWidthFluid,
            loaderLogo,
            asideEnabled,
            subheaderDisplay,
            displaySidebar,
            themeLightLogo,
            themeDarkLogo,
            asideDisplay,
            headerDisplay
        };
    },
});
</script>
