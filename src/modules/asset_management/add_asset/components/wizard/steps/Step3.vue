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

    </div> 
   </template>
   
   <script lang="ts">
     import { defineComponent, defineEmits, onMounted, ref, getCurrentInstance, computed, reactive } from "vue";
     import { Form, Field, ErrorMessage } from "vee-validate";
     import { useStore } from 'vuex'
     import { Actions, Getters, Mutations } from "@/modules/asset_management/store/StoreEnums";
     import AssetsModule from "@/modules/asset_management/store/Module";
    
     
     export default defineComponent({
       name: "assets",
       components: {
           Field,
           Form
       },
       setup(props, context) {
           const store = useStore();
   
           onMounted(() => {
           });
       },
       
     });
     </script>
   
     