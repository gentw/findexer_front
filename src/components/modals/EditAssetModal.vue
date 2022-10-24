<template>
  <!--begin::Modal-->
  <div
    class="modal fade"
    id="modal-edit-asset"
    ref="editAssetModalRef"
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
            id="modal-edit-asset-form"
            @submit.prevent="submit()"
            :model="editAssetData"
            :rules="rules"
            ref="formRef"
            class="form"
          >
            <!--begin::Heading-->
            <div class="mb-10">
              <!--begin::Title-->
              <h1 class="mb-3">Edit Asset</h1>
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
                      v-model="editAssetData.type"
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
                      v-model="editAssetData.name"
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
                  v-model.number="editAssetData.initialPricePerUnit"
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
                  v-model.number="editAssetData.currentPricePerUnit"
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
                  v-model.number="editAssetData.quantity"
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
                  type="button"
                  class="btn btn-white me-3"
                  @click="resetEditAssetData"
                >
                  Reset
                </button>
                <!--end::Button-->
                <!--begin::Button-->
                <button
                  :data-kt-indicator="loading ? 'on' : null"
                  class="btn btn-lg btn-primary"
                  type="submit"
                >
                  <span v-if="!loading" class="indicator-label">
                    Edit Asset
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
  width: 100%;
}
</style>

<script lang="ts">
import { computed, defineComponent, onMounted, ref, toRefs, watch } from "vue";
import { hideModal } from "@/core/helpers/dom";
import { ErrorMessage, Field } from "vee-validate";
import store from "@/store";
import { Actions } from "@/store/enums/StoreEnums";
import {
  assetDataRules,
  popUpConfirmation,
  computeCurrentValue,
} from "@/components/modals/helpers";
import {
  AssetData,
  EditAssetData,
  emptyEditAssetData,
} from "@/store/modules/assets/helpers/AssetsData";
import { computeRoi } from "../helpers";
import { hasAssetQuantity } from "@/store/modules/assets/helpers/helpers";

export default defineComponent({
  name: "edit-asset-modal",
  props: ["assetItem"],
  components: { Field, ErrorMessage },
  setup(props) {
    const formRef = ref<null | HTMLFormElement>(null);
    const rules = ref(assetDataRules);
    const editAssetModalRef = ref<null | HTMLElement>(null);
    const loading = ref<boolean>(false);
    // Pass props to toRefs() to retaining reactivity
    const { assetItem } = toRefs(props);
    const editAssetData = ref<EditAssetData>(emptyEditAssetData());
    const assetTypes: Map<string, string> = store.getters.getAssetTypesMap;
    const currentValue = computed(() => {
      return computeCurrentValue(
        editAssetData.value.quantity,
        editAssetData.value.currentPricePerUnit
      );
    });
    const roi = computed(() => {
      return computeRoi(
        editAssetData.value.initialPricePerUnit,
        editAssetData.value.currentPricePerUnit
      );
    });
    const showQuantity = computed(() => {
      return hasAssetQuantity(editAssetData.value.type);
    });

    function submit() {
      if (!formRef.value) {
        return;
      }
      formRef.value.validate((valid) => {
        if (valid) {
          loading.value = true;
          store
            .dispatch(Actions.EDIT_ASSET, editAssetData.value)
            .then((status) => {
              if (status) {
                setTimeout(() => {
                  loading.value = false;
                  // Update Assets list
                  store.dispatch(Actions.GET_ASSETS, true);
                  popUpConfirmation(
                    "Asset has been edited.",
                    "success",
                    false,
                    "OK",
                    "btn btn-primary"
                  ).then(() => {
                    hideModal(editAssetModalRef.value);
                  });
                }, 1000);
              } else {
                loading.value = false;
                popUpConfirmation(
                  "Could not edit asset.",
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
            "Looks like there are some errors, please try again..",
            "error",
            false,
            "OK",
            "btn btn-primary"
          );
          return false;
        }
      });
    }

    function populateEditAssetData(data: EditAssetData, item: AssetData) {
      data.id = item.id;
      data.type = item.type;
      data.name = item.name;
      data.initialPricePerUnit = item.investment;
      data.currentPricePerUnit = item.value;
      data.quantity = item.quantity;
    }

    function resetEditAssetData(): void {
      if (assetItem) {
        const item = assetItem.value;
        const data = editAssetData.value;
        populateEditAssetData(data, item);
      }
    }
    // Watch reactive props since they are undefined on setup
    watch(assetItem, (item) => {
      const data = editAssetData.value;
      populateEditAssetData(data, item);
    });

    onMounted(() => {
      store.dispatch(Actions.GET_ASSET_TYPES);
    });

    return {
      formRef,
      rules,
      editAssetModalRef,
      loading,
      assetTypes,
      editAssetData,
      currentValue,
      roi,
      showQuantity,
      submit,
      resetEditAssetData,
    };
  },
});
</script>
