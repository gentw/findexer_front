<template>
  <div class="d-flex me-lg-15 mb-10 mb-lg-0 add_assets_top_bar justify-content-between align-items-center">
    <div class="add_assets_top_bar__left">
      <div v-if="!route.params.id">
        <a v-if="currentStepIndex != 0" style="cursor: pointer" class="add_assets_top_bar__left--link" @click="prevStep">Go Back</a>
      </div>
      <div v-else>
        <h1 class="m-0">Edit Asset</h1>
      </div>
    </div>

    <div class="add_assets_top_bar__right">
      <a @click="$router.go(-1)" style="cursor: pointer" class="close_component"></a>
    </div>          
  </div>
  
  
  <div class="card asset_steps">
    <div class="card-body">
      <div
        class="stepper stepper-links d-flex flex-column"
        id="kt_create_account_stepper"
        ref="wizardRef">

        <div v-if="!editMode" class="d-flex justify-content-center align-content-center flex-row">
          <div>
            <h3 class="m-0">Add Asset</h3>
          </div>

          <div class="stepper-nav">
            <div class="stepper-item current" data-kt-stepper-element="nav"></div>
            <div class="stepper-item" data-kt-stepper-element="nav"></div>
            <div class="stepper-item" data-kt-stepper-element="nav"></div>
          </div>
        </div>

        <form
          class="mx-auto pt-15 pb-10 stepper-form-content"
          novalidate="novalidate"
          id="kt_add_asset_form"
          ref="addAssetForm"
        >
          <div class="current" data-kt-stepper-element="content">
            <div class="d-flex flex-column">
              <Step1 @next-step="nextStep"></Step1>
            </div>
          </div>

          <div data-kt-stepper-element="content">
            <div class="d-flex flex-column">
              <Step2 @next-step="nextStep"></Step2>
            </div>
          </div>

          <div data-kt-stepper-element="content">
            <div class="d-flex flex-column">
              <Step3 v-if="assetData" :asset="assetData" @next-step="nextStep"></Step3>
              <Step3 v-else :asset="{}" @next-step="nextStep"></Step3>
            </div>
          </div>

          
        </form>

      </div>
    </div>
  </div>
  </template>
  
  <script lang="ts">
  import { computed, defineComponent, onMounted, ref  } from "vue";
  import { StepperComponent } from "@/assets/ts/components";
  import { useStore } from "vuex";
  import { useForm } from "vee-validate";
  import { useRoute } from 'vue-router'
  import { Mutations } from "@/store/enums/StoreEnums";

  import { Actions } from "@/modules/asset_management/store/StoreEnums";

  import Step1 from "../components/wizard/steps/Step1.vue";
  import Step2 from "../components/wizard/steps/Step2.vue";
  import Step3 from "../components/wizard/steps/Step3.vue";

  import { emptyStepOneData } from "@/modules/asset_management/add_asset/components/wizard/steps/models/stepOneData";
  
  import { emptyStepTwoData } from "@/modules/asset_management/add_asset/components/wizard/steps/models/stepTwoData";
  
  export default defineComponent({
    name: "AddAsset",
    components: {
     Step1,
     Step2,
     Step3,
    
    },
  
    //
  
    setup() {
      const _stepperObj = ref<StepperComponent | null>(null);
      const wizardRef = ref<HTMLElement | null>(null);
      const currentStepIndex = ref(0);
      const route = useRoute()
      const store = useStore();

      const editMode = ref<Boolean>(false);

      const assetData = ref<Object>();

      const prevStep = (event) => {
        // console.log(event);
        currentStepIndex.value--;
        if (!_stepperObj.value) {
          return;
        }

        _stepperObj.value.goPrev();

        if(_stepperObj.value.currentStepIndex == 1) {
          store.commit("asset_management/updateFormDataStep1", emptyStepOneData());
          store.commit("asset_management/updateFormDataStep2", emptyStepTwoData());
        }
      }

      const nextStep = (payload) => {        
        currentStepIndex.value++;

        if (!_stepperObj.value) {
          return;
        }

        _stepperObj.value.goNext();
      }

      onMounted(() => {
        _stepperObj.value = StepperComponent.createInsance(
          wizardRef.value as HTMLElement
        );

        if(route.params.id) {
          if (!_stepperObj.value) {
            return;
          }

          _stepperObj.value.goLast();


          const promise = store.dispatch("asset_management/"+Actions.GET_ASSET_BY_ID, route.params.id);

          promise.then((result) => {
            assetData.value = result;
          }).catch((error) => {
            assetData.value = error;
          });

          setTimeout(()=>{
            editMode.value = true;
          },500);
        }

      });


      store.commit(Mutations.SET_LAYOUT_CONFIG_PROPERTY, {property: "aside.display", value: false});
      store.commit(Mutations.SET_LAYOUT_CONFIG_PROPERTY, {property: "header.display", value: false});

      return {
        wizardRef,
        currentStepIndex,
        prevStep,
        nextStep,
        assetData,
        route,
        editMode
      };
    }
  });
  </script>