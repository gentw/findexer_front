<template>
  <a href="#" :class="[`bg-${color}`]" class="card hoverable">
    <!--begin::Body-->
    <div class="card-body">
      <span :class="`svg-icon-${iconColor}`" class="svg-icon svg-icon-3x mx-n1">
        <inline-svg :src="icon" />
      </span>

      <div :class="`text-inverse-${color}`" class="fw-bolder fs-2 mb-2 mt-5">
        {{ value }} {{ unit }}
      </div>
      <div :class="`text-inverse-${color}`" class="fw-bold fs-7">
        {{ description }}
      </div>
    </div>
    <!--end::Body-->
  </a>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AssetClassesCardItem",
  props: {
    color: {
      type: String,
      required: true,
    },
    iconColor: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    unit: {
      type: String,
      required: true,
    },
  },
});
</script>
