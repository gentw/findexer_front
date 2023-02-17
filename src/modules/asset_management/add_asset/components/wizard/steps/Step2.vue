<template>
    <div class="card add_asset_step_2 m-5">
        <div class="card-body">
            <div class="row align-items-center">
                <div class="col-lg-5 add_asset_step_2__branding d-flex flex-column align-items-end">
                        <div class="add_asset_step_2__branding--logo">
                            <img src="" alt="logo_container" />
                        </div>

                        <div class="add_asset_step_2__branding--title mt-10">
                            <h1>Add Unlisted Company</h1>
                        </div>
                </div>

                <div class="col-lg-7 add_asset_step_2__form_details">
                    <div class="row">
                        <div class="col-12">
                            <label class="fw-bold fs-12 pb-3">Company Name</label>
                            <input type="text" class="form-control form-control-solid fs-14" v-model="stepData.company_name" placeholder="E.g. Tesal Inc"/>
                        </div>
                        <div class="col-12 mt-6">
                            <label class="fw-bold fs-12 pb-3">Current share price</label>
                            <div class="add_asset_step_2__form_details-currency_wrap">
                                <input type="text" class="form-control fs-14 form-control-solid add_asset_step_2__form_details-currency_wrap--text" v-model="stepData.current_share_price" placeholder="0"/>
                                <span class="add_asset_step_2__form_details-currency_wrap--code">USD</span>
                            </div>
                        </div>
                        <div class="col-12 mt-6">
                            <input :disabled="!stepData.company_name || !stepData.current_share_price" class="btn btn-primary add_asset_step_2__form_details--submit fs-14 pt-6 pb-6" type="submit" value="Save &amp; Close" @click="handleSaveBtn"/>
                        </div>
                    </div>
                </div>
            </div>
            <div>               
            </div>
            
        </div>
    </div>   
</template>

<script lang="ts">
  import { defineComponent, defineEmits, onMounted, ref, getCurrentInstance, computed } from "vue";
  import { Form, Field, ErrorMessage } from "vee-validate";
  import { useStore } from 'vuex'
  import { Actions, Getters, Mutations } from "@/modules/asset_management/store/StoreEnums";
  import AssetsModule from "@/modules/asset_management/store/Module";

  export default defineComponent({
    name: "AddAsset_Step2",
    components: {
        Field,
        Form
    },
    setup(props, context) {
        const store = useStore();
        const emitName = 'next-step';
        defineEmits<{(e: typeof emitName, type: string): void }>();

        const stepData = computed(() => store.state.asset_management.formDataStep2);

      
        onMounted(() => {
            
        });

        const handleSaveBtn = (event) => {
            event.preventDefault();      

            context.emit('next-step', event.target.value);
        }

        return {stepData, handleSaveBtn}
    },
    
  });
  </script>