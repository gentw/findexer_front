<template>
    <div class="d-flex flex-column add_assets_infos">
       <div class="flex-column add_assets_infos__head">
               <div class="card card-flush pt-10 mt-7 mb-xl-10">
                   <div class="card-header flex-column add_assets_infos__head--title_section">
                   <h1>Unlisted Company</h1>
               </div>
               <div class="card-body add_assets_infos__head-details">
                   <div class="row">
                       <div class="col-md-6">
                           <div class="add_assets_infos__head-details__asset d-flex">
                               <div class="add_assets_infos__head-details__asset--image_container d-flex align-items-center justify-content-center">
                                   <img src="" alt="logo_container">
                               </div>
   
                               <div class="add_assets_infos__head-details__asset--info mx-5">
                                   <h2>Findexer Technologies A2</h2>
                                   <span class="badge badge-white mt-2">Manual Asset</span>
                               </div>
                           </div>
                       </div>
   
                       <div class="col-md-6 mt-10 mt-md-0">
                           <div class="row">
                               <div class="col-md-6">
                                   <div class="card add_assets_infos__head-details__statistic_box mb-5 mb-md-6">
                                       <div class="card-body p-3 d-flex flex-column align-items-center">
                                           <h4 class="fw-bold">Latest Share Price</h4>
                                           <h2 class="fw-bold">1837</h2>
                                           <h5 class="fw-light mt-2">SEK</h5>
                                       </div>
                                   </div>
                               </div>
   
                               <div class="col-md-6">
                                   <div class="card add_assets_infos__head-details__statistic_box mb-5 mb-md-6">
                                       <div class="card-body p-3 d-flex flex-column align-items-center">
                                           <h4 class="fw-bold">I Own</h4>
                                           <h2 class="fw-bold">580</h2>
                                           <h5 class="fw-light mt-2">Shares</h5>
                                       </div>
                                   </div>
                               </div>
   
                               <div class="col-md-6">
                                   <div class="card add_assets_infos__head-details__statistic_box mb-5 mb-md-0">
                                       <div class="card-body p-3 d-flex flex-column align-items-center">
                                           <h4 class="fw-bold">My Holdings</h4>
                                           <h2 class="fw-bold">696 000</h2>
                                           <h5 class="fw-light mt-2">SEK</h5>
                                       </div>
                                   </div>
                               </div>
                               <div class="col-md-6">
                                   <div class="card add_assets_infos__head-details__statistic_box mb-5 mb-md-0">
                                       <div class="card-body p-3 d-flex flex-column align-items-center">
                                           <h4 class="fw-bold">Total ROI</h4>
                                           <h2 class="fw-bold">+53</h2>
                                           <h5 class="fw-light mt-2">%</h5>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </div>

       <div class="d-flex flex-lg-row justify-content-between">
        <div class="mb-10 mb-lg-0 add_assets_infos__side">     
            <div class="card card-flush mb-10 mb-xl-10 add_assets_infos__side-card">
                <div class="card-header flex-row align-items-center">
                    <h2 class="mb-5">Asset event history</h2>
                    <p class="add_assets_infos_side--total_events">Events Added: <span class="count">1</span></p>
                </div>
                <div class="card-body pt-0">
                    <div class="card add_assets_infos__side-card__events_tab">
                        <div class="card-header card-header-stretch px-0 border-0">
                        <!--begin::Toolbar-->
                        <div class="card-toolbar m-0">
                            <!--begin::Tab nav-->
                            <ul
                            class="nav nav-tabs nav-line-tabs nav-stretch fs-6 border-0 fw-bold"
                            role="tablist"
                            >
                            <li class="nav-item" role="presentation">
                                <a
                                id="manual_tab"
                                class="nav-link justify-content-center text-active-gray-800 active"
                                data-bs-toggle="tab"
                                role="tab"
                                href="#manual"
                                >
                                Manual
                                </a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a
                                id="automatic_tab"
                                class="nav-link justify-content-center text-active-gray-800"
                                data-bs-toggle="tab"
                                role="tab"
                                href="#automatic"
                                >
                                Automatic
                                </a>
                            </li>
                            </ul>
                            <!--end::Tab nav-->
                        </div>
                        <!--end::Toolbar-->
                    </div>
                    <!--begin::Card body-->
                    <div class="card-body">
                    <!--begin::Tab Content-->
                    <div class="tab-content">
                   

                        <!--begin::Tab panel-->
                        <div
                        id="manual"
                        class="card-body p-0 tab-pane fade show active"
                        role="tabpanel"
                        aria-labelledby="manual_tab"
                        >
                        <!--begin::Timeline-->
                        <div class="timeline">
                            <AssetEvents></AssetEvents>
                        </div>
                        <!--end::Timeline-->
                        </div>
                        <!--end::Tab panel-->

                        <!--begin::Tab panel-->
                        <div
                        id="automatic"
                        class="card-body p-0 tab-pane fade show"
                        role="tabpanel"
                        aria-labelledby="automatic_tab"
                        >
                        <!--begin::Timeline-->
                        <div class="timeline">
                            <AssetEvents></AssetEvents>
                        </div>
                        <!--end::Timeline-->
                        </div>
                        <!--end::Tab panel-->
                    </div>
                    <!--end::Tab Content-->
                    </div>
                    <!--end::Card body-->
                    </div>
                </div>

            </div>
        </div>

        <div class="flex-column flex-lg-row-auto mb-10 add_assets_infos__form">
                <div class="card card-flush pb-10 mb-10 mb-xl-10 add_assets_infos__form-details">
                
                    <div class="card-body px-0 pt-0">
                        <div class="row add_assets_infos__form-details__event_form_input">
                            <div class="add_assets_infos__form-details__event_form_input-fields">
                                <div class="row mx-0">

                                    <div class="col-md-12 p-10 pb-0 add_assets_infos__form-details__event_form_input-top_bar d-flex justify-content-between align-items-center add_white_bg">
                                        <h2>Asset Event</h2>
                                        
                                        <div class="row">
                                            <label class="col-sm-6 col-form-label fw-bold fs-6 add_assets_infos__form-details__event_form_input-top_bar--label">Currency</label>

                                            <div class="col-sm-6">
                                                <select class="form-select form-select-solid add_assets_infos__form-details__event_form_input-top_bar--input" aria-label="Select example">
                                                    <option value="1">SEK</option>
                                                    <option value="2">EUR</option>
                                                    <option value="3">USD</option>
                                                </select>
                                            </div>

                                        </div>
                                    </div><!--end top_bar -->

                                    

                                    <div class="col-md-12 add_white_bg p-10">
                                        <label class="fw-bold fs-12 pb-3 add_assets_infos__form-details__event_form_input-fields--label">Type of event</label>
                                        <div class="add_assets_infos__form-details__currency_wrap-custom_radio">

                                            <div class="btn-group">
                                                <input type="radio" class="btn-check" name="options" id="option1" autocomplete="off" checked />
                                                <label class="btn btn-secondary" for="option1">Purchased</label>

                                                <input type="radio" class="btn-check" name="options" id="option2" autocomplete="off" />
                                                <label class="btn btn-secondary" for="option2">Sold</label>

                                                <input type="radio" class="btn-check" name="options" id="option3" autocomplete="off" />
                                                <label class="btn btn-secondary" for="option3">Value Update</label>
                                            </div>

                                            
                                        </div>
                                    </div>

                                    <div class="col-md-6 add_white_bg px-10 pb-10">
                                        <label class="fw-bold fs-12 pb-3 add_assets_infos__form-details__event_form_input-fields--label">No. of shares</label>
                                        <div class="add_assets_infos__form-details__currency_wrap">
                                            <input type="text" class="form-control fs-14 form-control-solid add_assets_infos__form-details__currency_wrap--text" placeholder="0"/>
                                            <span class="add_assets_infos__form-details__currency_wrap--code">UNITS</span>
                                        </div>
                                    </div>

                                    <div class="col-md-6 add_white_bg px-10 pb-10">
                                        <label class="fw-bold fs-12 pb-3 add_assets_infos__form-details__event_form_input-fields--label">Share buy price</label>
                                        <div class="add_assets_infos__form-details__currency_wrap">
                                            <input type="text" class="form-control fs-14 form-control-solid add_assets_infos__form-details__currency_wrap--text" placeholder="0"/>
                                            <span class="add_assets_infos__form-details__currency_wrap--code">SEK</span>
                                        </div>
                                    </div>

                                    <div class="col-md-12 add_white_bg px-10 pb-10">
                                        <label class="fw-bold fs-12 pb-3 add_assets_infos__form-details__event_form_input-fields--label">Buy date</label>
                                        <div class="input-group date" id="datepicker">
                                            <input type="text" class="form-control" placeholder="Select Date"/>
                                        </div>
                                    </div>

                                    <div class="col-md-12 mx-0 px-10 add_white_bg pb-10">
                                        <input class="btn btn-primary add_assets_infos__form-details__event_form_input-fields--submit fs-14 pt-6 pb-6" type="submit" value="Add Event"/>
                                    </div>
                                </div>
                                
                            </div>

                            
                        </div>
                    </div>
                    
                </div>
        </div>
    </div>

    </div> 
   </template>
   
   <script lang="ts">
     import { defineComponent, defineEmits, onMounted, ref, getCurrentInstance, computed, reactive } from "vue";
     import { Form, Field, ErrorMessage } from "vee-validate";
     import { useStore } from 'vuex'
     import { Actions, Getters, Mutations } from "@/modules/asset_management/store/StoreEnums";
     import AssetsModule from "@/modules/asset_management/store/Module";
     import AssetEvents from "@/modules/asset_management/add_asset/components/AssetEvents.vue";
    
     
     export default defineComponent({
       name: "assets",
       components: {
           Field,
           Form,
           AssetEvents
       },
       setup(props, context) {
           const store = useStore();
   
           onMounted(() => {
           });
       },
       
     });
     </script>
   
     