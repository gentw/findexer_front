<template>
     <div v-if="events.length > 0" v-for="(event, key) in events" class="timeline-item">

      <div class="d-flex" v-if="!isEmptyObject(event)">
        <!--begin::Timeline line-->
        <div class="timeline-line w-40px"></div>
        <!--end::Timeline line-->
    
        <!--begin::Timeline icon-->
        <div class="timeline-icon symbol symbol-circle symbol-15px me-6 ms-4">
          <div class="d-flex symbol-flex">
              <div class="symbol-no me-3" v-if="key < 10">0{{ ++key }}</div>
              <div class="symbol-no me-3" v-else>{{ ++key }}</div>
              <div class="symbol-label timeline_bullet_inactive">
              </div>
          </div>
        </div>
        <!--end::Timeline icon-->
    
        <!--begin::Timeline content-->
        <div class="timeline-content mb-10 mt-n1">
          <!--begin::Description-->
          <div class="d-flex align-items-center mb-1 fs-6">
              <!--begin::Info-->
              <div class="event_date me-2 fs-14">
                  <span>{{ event.buy_date }}  |  {{ event.pub_date }}</span>
              </div>
              <!--end::Info-->
    
              
            </div>
            <!--end::Description-->
          <!--begin::Timeline heading-->
          <div class="pe-3 mb-5">
            <!--begin::Title-->
            <div class="fs-5 fw-semobold mb-2">
              +{{ event.no_shares }} shares for {{ event.share_buy_price }} {{ event.currency }} / share
            </div>
            <!--end::Title-->
    
          
          </div>
          <!--end::Timeline heading-->
    
          
        </div>
        <!--end::Timeline content-->
      </div>
      <div class="d-flex w-100" style="padding-right: 20px" v-else>
        <div class="timeline-line w-40px"></div>
          <!--end::Timeline line-->
      
          <!--begin::Timeline icon-->
          <div class="timeline-icon symbol symbol-circle symbol-15px me-6 ms-4">
            <div class="d-flex symbol-flex">
                <div class="symbol-no me-3" v-if="key < 10">0{{ ++key }}</div>
                <div class="symbol-no me-3" v-else>{{ ++key }}</div>
                <div class="symbol-label bg-light timeline_bullet_active">
                </div>
            </div>
          </div>
          <!--end::Timeline icon-->
      
          <!--begin::Timeline content-->
          <div class="timeline-content mb-10 mt-n1 timeline-content-active">
            <!--begin::Description-->
            <div class="d-flex align-items-center mb-1 fs-6">
                <!--begin::Info-->
                <div class="event_date me-2 fs-14">
                    <span>Adding new event</span>
                </div>
                <!--end::Info-->
      
                
              </div>
              <!--end::Description-->
            <!--begin::Timeline heading-->
            <div class="pe-3 mb-5">
              <!--begin::Title-->
              <div class="fs-5 fw-semobold mb-2">
                Details being added
              </div>
              <!--end::Title-->
            
            </div>
            <!--end::Timeline heading-->
          </div>
          <!--end::Timeline content-->
      </div>
    </div>

    <div class="timeline-item" v-else>
      <div class="timeline-line w-40px"></div>
      <!--end::Timeline line-->
  
      <!--begin::Timeline icon-->
      <div class="timeline-icon symbol symbol-circle symbol-15px me-6 ms-4">
        <div class="d-flex symbol-flex">
            <div class="symbol-no me-3">01</div>
            <div class="symbol-label bg-light timeline_bullet_active">
            </div>
        </div>
      </div>
      <!--end::Timeline icon-->
  
      <!--begin::Timeline content-->
      <div class="timeline-content mb-10 mt-n1 timeline-content-active">
         <!--begin::Description-->
         <div class="d-flex align-items-center mb-1 fs-6">
            <!--begin::Info-->
            <div class="event_date me-2 fs-14">
                <span>Adding new event</span>
            </div>
            <!--end::Info-->
  
            
          </div>
          <!--end::Description-->
        <!--begin::Timeline heading-->
        <div class="pe-3 mb-5">
          <!--begin::Title-->
          <div class="fs-5 fw-semobold mb-2">
            Details being added
          </div>
          <!--end::Title-->
         
        </div>
        <!--end::Timeline heading-->
      </div>
      <!--end::Timeline content-->
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, onMounted } from "vue";
  import {isEmptyObject} from "@/modules/asset_management/common/helpers";
  
  export default defineComponent({
    name: "item-1",
    props: {
        events: { type: Object, required: true },
    },
    components: {},

    setup(props, context) {
      const events = props.events;

      onMounted(()=>{
        
      });

      return {
        events, isEmptyObject
      };
    },
  });
  </script>
  