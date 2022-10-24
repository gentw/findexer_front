<template>
  <!--begin::Modal-->
  <div
    class="modal fade"
    id="modal-add-asset"
    ref="addAssetModalRef"
    tabindex="-1"
    aria-hidden="true"
  >
    <!--begin::Modal dialog-->
    <div class="modal-dialog modal-dialog-centered mw-650px">
      <!--begin::Modal content-->
      <div class="modal-content rounded">
        <!--begin::Modal header-->
        <div class="modal-header pb-0 border-0 justify-content-end">
          <!--begin::Close-->
          <div
            class="btn btn-sm btn-icon btn-active-color-primary"
            data-bs-dismiss="modal"
          >
            <span class="svg-icon svg-icon-1">
              <inline-svg src="media/icons/duotune/arrows/arr061.svg" />
            </span>
          </div>
          <!--end::Close-->
        </div>
        <!--end::Modal header-->

        <!--begin::Modal body-->
        <div class="modal-body scroll-y px-10 px-lg-15 pt-0 pb-15">
          <!--begin:Form-->
          <el-form
            id="modal-add-asset-form"
            @submit.prevent="submit()"
            :model="addAssetData"
            :rules="rules"
            ref="formRef"
            class="form"
          >
            <!--begin::Heading-->
            <div class="mb-10">
              <!--begin::Title-->
              <h1 class="mb-3">Add manual Asset</h1>
              <!--end::Title-->

              <!--begin::Description-->
              <div class="text-gray-400 fw-bold fs-5">
                If you need more info, please check
                <a href="#" class="fw-bolder link-primary">FAQ page</a>.
              </div>
              <!--end::Description-->
            </div>
            <!--end::Heading-->

            <!--begin::Input group-->
            <div class="d-flex flex-column mb-10">
              <!--begin::Details-->
              <div class="d-flex">
                <!--begin: Pic-->
                <div class="symbol symbol-100px me-10 ms-10">
                  <img src="media/logos/logo.svg" alt="findex" />
                </div>
                <!--end::Pic-->
                <!--begin::Column-->
                <div class="flex-column-fluid">
                  <!--begin::Select-->
                  <el-form-item prop="type">
                    <el-select
                      v-model="addAssetData.type"
                      placeholder="Select type of Asset"
                      name="type"
                      as="select"
                    >
                      <el-option
                        v-for="[type] in assetTypes"
                        :value="type"
                        :key="type"
                        >{{ type }}</el-option
                      >
                    </el-select>
                  </el-form-item>
                  <div class="fv-plugins-message-container">
                    <div class="fv-help-block">
                      <ErrorMessage name="type" />
                    </div>
                  </div>
                  <!--end::Select-->
                  <!--begin::Input-->
                  <el-form-item prop="name">
                    <el-input
                      v-model="addAssetData.name"
                      placeholder="Name of Asset"
                      name="assetName"
                    ></el-input>
                  </el-form-item>
                  <!--end::Input-->
                </div>
                <!--end::Row-->
              </div>
              <!--end::Details-->
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="d-flex flex-column">
              <!--begin::Label-->
              <div class="d-flex flex-row justify-content-start">
                <label class="fs-5 mb-2 me-1">Initial price per unit</label>
                <label class="required fs-5 mb-2 text-gray-500">(SEK)</label>
              </div>
              <!--end::Label-->
              <!--begin::Input-->
              <el-form-item prop="initialPricePerUnit">
                <el-input
                  v-model.number="addAssetData.initialPricePerUnit"
                  placeholder="500"
                  name="initialPricePerUnit"
                  type="number"
                  step="any"
                ></el-input>
              </el-form-item>
              <!--end::Input-->
              <!--begin::Label-->
              <div class="d-flex flex-row justify-content-start">
                <label class="fs-5 mb-2 me-1">Current price per unit</label>
                <label class="required fs-5 mb-2 text-gray-500">(SEK)</label>
              </div>

              <!--end::Label-->
              <!--begin::Input-->
              <el-form-item prop="currentPricePerUnit">
                <el-input
                  v-model.number="addAssetData.currentPricePerUnit"
                  placeholder="1000"
                  name="currentPricePerUnit"
                  type="number"
                  step="any"
                ></el-input>
              </el-form-item>
              <!--end::Input-->
              <!--begin::Label-->
              <label class="required fs-5 mb-2" v-if="showQuantity"
                >Number of units</label
              >
              <!--end::Label-->
              <!--begin::Input-->
              <el-form-item prop="quantity" v-if="showQuantity">
                <el-input
                  v-model="addAssetData.quantity"
                  placeholder="23"
                  name="quantity"
                  type="number"
                ></el-input>
              </el-form-item>
              <!--end::Input-->
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="mb-10">
              <!--begin::Wrapper-->
              <div class="d-flex flex-stack"></div>
              <!--end::Wrapper-->
            </div>
            <!--end::Input group-->

            <!--begin::Col-->
            <div class="d-flex flex-column">
              <!--begin::Row-->
              <div class="d-flex flex-row justify-content-between">
                <!--begin::Col-->
                <div class="col-3">
                  <!--begin::Label-->
                  <div class="me-3">
                    <label class="fs-5">Current value</label>
                    <div class="fs-5 text-gray-400">{{ currentValue }} kr</div>
                  </div>
                  <!--end::Label-->
                </div>
                <!--end::Col-->
                <!--begin::Col-->
                <div class="col-3">
                  <!--begin::Label-->
                  <div class="me-3">
                    <label class="fs-5">ROI</label>
                    <!--end::Label-->
                    <div class="fs-5 text-gray-400">{{ roi }} %</div>
                  </div>
                  <!--end::Label-->
                </div>
                <!--end::Col-->
                <!--begin::Button-->
                <button
                  type="reset"
                  class="btn btn-white me-3"
                  @click="clearAddAssetData"
                >
                  Clear
                </button>
                <!--end::Button-->
                <!--begin::Button-->
                <button
                  :data-kt-indicator="loading ? 'on' : null"
                  class="btn btn-lg btn-primary"
                  type="submit"
                >
                  <span v-if="!loading" class="indicator-label">
                    Add Asset
                  </span>
                  <span v-if="loading" class="indicator-progress">
                    Please wait...
                    <span
                      class="spinner-border spinner-border-sm align-middle ms-2"
                    ></span>
                  </span>
                </button>
                <!--end::Button-->
              </div>
              <!--end::Row-->
            </div>
            <!--end::Col-->
          </el-form>
          <!--end:Form-->
        </div>
        <!--end::Modal body-->
      </div>
      <!--end::Modal content-->
    </div>
    <!--end::Modal dialog-->
  </div>
  <!--end::Modal-->
</template>

<style lang="scss" scoped>
.el-select {
  width: 100% !important;
}
.flex-column-fluid {
  width: 100% !important;
  flex: inherit !important;
}
</style>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
import { hideModal } from "@/core/helpers/dom";
import { ErrorMessage, Field } from "vee-validate";
import store from "@/store";
import { Actions } from "@/store/enums/StoreEnums";
import {
  AddAssetData,
  emptyAddAssetData,
} from "@/store/modules/assets/helpers/AssetsData";
import {
  assetDataRules,
  popUpConfirmation,
  computeCurrentValue,
} from "@/components/modals/helpers";
import { computeRoi } from "../helpers";
import { hasAssetQuantity } from "@/store/modules/assets/helpers/helpers";

export default defineComponent({
  name: "add-asset-modal",
  components: { Field, ErrorMessage },
  setup() {
    const formRef = ref<null | HTMLFormElement>(null);
    const rules = ref(assetDataRules);
    const addAssetModalRef = ref<null | HTMLElement>(null);
    const loading = ref<boolean>(false);
    const addAssetData = ref<AddAssetData>(emptyAddAssetData());
    const assetTypes: Map<string, string> = store.getters.getAssetTypesMap;
    const currentValue = computed(() => {
      /**
       * TODO: Fix hack to not compute currentValue when 'Debt' or
       * 'Real Estate' is selected and quantity value has not been reset
       * from adding an Asset, i.e., make clearAddAssetData work as intended.
       */
      return showQuantity.value
        ? computeCurrentValue(
            addAssetData.value.quantity,
            addAssetData.value.currentPricePerUnit
          )
        : addAssetData.value.currentPricePerUnit;
    });
    const roi = computed(() => {
      return computeRoi(
        addAssetData.value.initialPricePerUnit,
        addAssetData.value.currentPricePerUnit
      );
    });
    const showQuantity = computed(() => {
      return hasAssetQuantity(addAssetData.value.type);
    });

    function submit() {
      if (!formRef.value) {
        return;
      }
      formRef.value.validate((valid) => {
        if (valid) {
          loading.value = true;
          store
            .dispatch(Actions.ADD_ASSET, addAssetData.value)
            .then((status) => {
              if (status) {
                setTimeout(() => {
                  loading.value = false;
                  // Update Assets list
                  store.dispatch(Actions.GET_ASSETS, true);
                  popUpConfirmation(
                    "Asset has been added.",
                    "success",
                    false,
                    "OK",
                    "btn btn-primary"
                  ).then(() => {
                    hideModal(addAssetModalRef.value);
                  });
                }, 1000);
              } else {
                loading.value = false;
                popUpConfirmation(
                  "Could not add Asset.",
                  "error",
                  false,
                  "OK",
                  "btn btn-primary"
                );
                return false;
              }
            });
        } else {
          popUpConfirmation(
            "Looks like there are some errors, please try again.",
            "error",
            false,
            "OK",
            "btn btn-primary"
          );
          return false;
        }
      });
    }

    function clearAddAssetData(): void {
      // TODO: reset currentValue, roi, showQuality on clearAddAssetData
    }

    onMounted(() => {
      store.dispatch(Actions.GET_ASSET_TYPES);
    });

    return {
      formRef,
      rules,
      addAssetModalRef,
      loading,
      assetTypes,
      addAssetData,
      currentValue,
      roi,
      showQuantity,
      submit,
      clearAddAssetData,
    };
  },
});
</script>
