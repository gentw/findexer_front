<template>
    <div class="timeline-item">
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
  
  export default defineComponent({
    name: "item-1",
    components: {},

    setup(props, context) {
      

      onMounted(()=>{
      });

      return {
      };
    },
  });
  </script>
  