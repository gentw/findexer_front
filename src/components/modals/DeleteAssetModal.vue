<template>
  <!--begin::Modal-->
  <div
    class="modal fade"
    id="modal-delete-asset"
    ref="deleteAssetModalRef"
    tabindex="-1"
    aria-hidden="true"
  >
    <!--begin::Modal dialog-->
    <div class="modal-dialog modal-dialog-centered mw-600px">
      <!--begin::Modal content-->
      <div class="modal-content rounded">
        <!--begin::Modal body-->
        <div class="modal-body px-10 px-lg-15 pt-15 pb-15">
          <!--begin:Form-->
          <el-form
            id="modal-delete-asset-form"
            @submit.prevent="submit(assetItem ? assetItem.id : '')"
            class="form"
          >
            <!--begin::Heading-->
            <div class="d-flex flex-row justify-content-center">
              <!--begin::Title-->
              <div class="text-gray-500 fw-bold fs-1 me-2" v-if="assetItem">
                Do you want to delete
              </div>
              <div class="text-gray-800 fw-bold fs-1 me-2">
                {{
                  assetItem ? assetItem.name : "Could not find selected Asset."
                }}
              </div>
              <div class="text-gray-500 fw-bold fs-1" v-if="assetItem">?</div>
              <!--end::Title-->
            </div>
            <!--end::Title-->

            <!--begin::Title error: no assetItem-->
            <div class="d-flex flex-row justify-content-center">
              <div class="text-gray-500 fw-bold fs-1" v-if="!assetItem">
                Please try to reload page.
              </div>
              <!--end::Title error: no assetItem-->
            </div>

            <!--end::Heading-->

            <!--begin::Row-->
            <div class="d-flex flex-row justify-content-center mt-10">
              <!--begin::Button-->
              <button
                type="button"
                data-bs-dismiss="modal"
                class="btn btn-white me-10"
              >
                Cancel
              </button>
              <!--begin::Button-->
              <button
                :data-kt-indicator="loading ? 'on' : null"
                class="btn btn-lg btn-danger"
                type="submit"
                v-if="assetItem"
              >
                <!--end::Button-->
                <span v-if="!loading" class="indicator-label">
                  Delete Asset
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

<script lang="ts">
import { defineComponent, ref } from "vue";
import { hideModal, removeModalBackdrop } from "@/core/helpers/dom";
import { ErrorMessage, Field } from "vee-validate";
import store from "@/store";
import { Actions, Mutations } from "@/store/enums/StoreEnums";
import { popUpConfirmation } from "@/components/modals/helpers";

export default defineComponent({
  name: "delete-asset-modal",
  props: ["assetItem"],
  components: { Field, ErrorMessage },
  setup() {
    const loading = ref<boolean>(false);
    const deleteAssetModalRef = ref<null | HTMLElement>(null);

    function submit(assetId: string) {
      loading.value = true;
      store.dispatch(Actions.DELETE_ASSET, assetId).then((status) => {
        if (status) {
          setTimeout(() => {
            loading.value = false;
            // Update Assets list
            store.commit(Mutations.DELETE_ASSET_ITEM, assetId);
            popUpConfirmation(
              "Asset has been deleted.",
              "success",
              false,
              "OK",
              "btn btn-primary"
            ).then(() => {
              hideModal(deleteAssetModalRef.value);
              removeModalBackdrop();
            });
          }, 1000);
        } else {
          loading.value = false;
          popUpConfirmation(
            "Could not delete asset.",
            "error",
            false,
            "OK",
            "btn btn-primary"
          );
          return false;
        }
      });
    }

    return { loading, deleteAssetModalRef, submit };
  },
});
</script>
