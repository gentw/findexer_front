<template>
  <div class="d-flex me-lg-15 mb-10 mb-lg-0 add_assets_top_bar justify-content-between align-items-center">
    <div class="add_assets_top_bar__left">
      <a style="cursor: pointer" class="add_assets_top_bar__left--link" @click="$router.go(-1)">Go Back</a>
    </div>

    <div class="add_assets_top_bar__right">
      <a @click="$router.go(-1)" style="cursor: pointer" class="close_component"></a>
    </div>          
  </div>
  
  
  <!--begin::Card-->
  <div class="card asset_steps">
    <!--begin::Card body-->
    <div class="card-body">
      <!--begin::Stepper-->
      <div
        class="stepper stepper-links d-flex flex-row justify-content-center align-content-center"
        id="kt_create_account_stepper"
        ref="horizontalWizardRef">
        <div>
          <h3 class="m-0">Add Asset</h3>
        </div>
        <!--begin::Nav-->
        <div class="stepper-nav">
          <div class="stepper-item current" data-kt-stepper-element="nav"></div>
          <div class="stepper-item" data-kt-stepper-element="nav"></div>
          <div class="stepper-item" data-kt-stepper-element="nav"></div>
        </div>
        <!--end::Nav-->

      
        <!--end::Form-->
      </div>
      <!--end::Stepper-->
    </div>
    <!--end::Card body-->
  </div>
  <!--end::Card-->
  </template>
  
  <script lang="ts">
  import { computed, defineComponent, onMounted, ref  } from "vue";
  import { StepperComponent } from "@/assets/ts/components";
  import { useStore } from "vuex";
  import { Mutations } from "@/store/enums/StoreEnums";
  
  
  export default defineComponent({
    name: "AddAsset",
    components: {
     
    },
  
    //
  
    setup() {
      const store = useStore();
      store.commit(Mutations.SET_LAYOUT_CONFIG_PROPERTY, {property: "aside.display", value: false});
      store.commit(Mutations.SET_LAYOUT_CONFIG_PROPERTY, {property: "header.display", value: false});
    }
  });
  </script>