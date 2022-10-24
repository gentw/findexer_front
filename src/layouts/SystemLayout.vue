<template>
  <!--begin::System Layout-->
  <div
    id="kt_app_root"
    class="d-flex flex-column flex-root"
  >
    <router-view />
  </div>
  <!--end::System Layout-->
</template>

<script>
import { defineComponent, onMounted } from "vue";
import { useStore } from "vuex";
import { Actions } from "@/store/enums/StoreEnums";

export default defineComponent({
    name: "SystemLayout",
    components: {},
    setup() {
        const store = useStore();

        onMounted(() => {
            store.dispatch(Actions.ADD_BODY_CLASSNAME, "app-blank");

            store.dispatch(Actions.ADD_BODY_CLASSNAME, "bgi-size-cover");

            store.dispatch(Actions.ADD_BODY_CLASSNAME, "bgi-position-center");

            store.dispatch(Actions.ADD_BODY_CLASSNAME, "bgi-no-repeat");
        });
    },
});
</script>
