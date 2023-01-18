<template>
  <!--begin::Card-->
  <div class="card">
    <!--begin::Card body-->
    <div class="card-body">
      <!--begin::Stepper-->
      <div
        class="stepper stepper-links d-flex flex-column"
        id="kt_create_account_stepper"
        ref="horizontalWizardRef"
      >
        <div>
          <h3>Add Asset</h3>
        </div>
        <!--begin::Nav-->
        <div class="stepper-nav py-5 mt-5">
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


export default defineComponent({
  name: "AddAsset",
  components: {
   
  }
});
</script>
