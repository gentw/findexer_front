<template>
  <!--begin::Asset List-->
  <div class="card assets_list">
    

    <div class="card-header border-0 pt-6">
      <!--begin::Card title-->
      <div class="card-title">
        <!--begin::Search-->
        <div v-if="searchBarShow" class="d-flex align-items-center position-relative my-1">
          <span class="svg-icon svg-icon-1 position-absolute ms-6 assets_list--search_icon">
            <inline-svg src="media/icons/duotune/general/gen021.svg" />
          </span>
          <input
            type="text"
            v-model="search"
            @input="searchItems()"
            class="form-control form-control-solid w-250px ps-15 assets_list--search"
            placeholder="Search Assets"
          />
        </div>
        <!--end::Search-->
      </div>
      <!--begin::Card title-->
      <!--begin::Card toolbar-->
      <div class="card-toolbar">
        <!--begin::Toolbar-->
        <div
          v-if="selectedIds.length === 0"
          class="d-flex justify-content-end"
          data-kt-customer-table-toolbar="base"
          
        >
          <!--begin::Export-->
          <button
            type="button"
            class="btn btn-light-primary me-3 assets_list--filter"
            @click="showFilterSearch"
            v-if="filterBtnShow"
          >
            <span class="svg-icon svg-icon-2 new_svg_color">
              <inline-svg src="media/icons/duotune/others/filter.svg" />
            </span>
            Filter: All
          </button>
          <!--end::Export-->
          <!--begin::Add customer-->
          <router-link to="/assets/add_asset"
            class="btn assets_list--add_btn"
          >
            <span class="svg-icon svg-icon-2 new_svg_color">
              <inline-svg src="media/icons/duotune/arrows/arr075.svg" />
            </span>
            Add Asset
          </router-link>
          <!--end::Add customer-->
        </div>
        <!--end::Toolbar-->
        <!--begin::Group actions-->
        <div
          v-else
          class="d-flex justify-content-end align-items-center"
          data-kt-customer-table-toolbar="selected"
        >
          <div class="fw-bold me-5">
            <span class="me-2">{{ selectedIds.length }}</span
            >Selected
          </div>
          <button
            type="button"
            class="btn btn-danger"
            @click="deleteFewCustomers()"
          >
            Delete Selected
          </button>
        </div>
        <!--end::Group actions-->
        <!--begin::Group actions-->
        <div
          class="d-flex justify-content-end align-items-center d-none"
          data-kt-customer-table-toolbar="selected"
        >
          <div class="fw-bold me-5">
            <span
              class="me-2"
              data-kt-customer-table-select="selected_count"
            ></span
            >Selected
          </div>
          <button
            type="button"
            class="btn btn-danger"
            data-kt-customer-table-select="delete_selected"
          >
            Delete Selected
          </button>
        </div>
        <!--end::Group actions-->
      </div>
      <!--end::Card toolbar-->
    </div>

    <!--begin::Body-->
    <div class="card-body py-3 assets_list__table">
      <Datatable
        @on-sort="sort"
        @on-items-select="onItemSelect"
        :data="tableData"
        :header="tableHeader"
        :enable-items-per-page-dropdown="true"
        :checkbox-enabled="false"
        checkbox-label="id"
      >
        <template v-slot:asset="{ row: asset }">
          <div class="d-flex">
            <span class="svg-icon svg-icon-5 m-0 assets_list__table--svg_icon" v-html="asset.asset.logo"></span>
            <div class="ms-5">
              <h5>{{asset.asset.name}}</h5>
              <span class="assets_list__table--text_muted">{{asset.asset.type}}</span>
            </div>
          </div>
        </template>

        <template v-slot:maintained="{ row: asset }">
            
            <span v-if="asset.maintained == 'Automatic'" class="badge badge-primary"><span class="text-center">{{ asset.maintained }}</span></span>
            <span v-else-if="asset.maintained == 'IR Admin'" class="badge badge-info"><span class="text-center">{{ asset.maintained }}</span></span>
            <span v-else class="badge badge-dark"><span class="text-center">{{ asset.maintained }}</span></span>
          </template>
       
        <template v-slot:holdings="{ row: asset }">
            <p>{{ asset.holdings }}</p>
        </template>
        <template v-slot:total_roi="{ row: asset }">
        

        <span v-if="asset.total_roi.type == 'increase'" class="svg-icon svg-icon-2x me-10 svg-icon-success">
          <span>{{ asset.total_roi.percentage }}</span> <inline-svg src="media/icons/duotune/arrows/arr007.svg" />
        </span>

        <span v-else class="svg-icon svg-icon-2x me-10  svg-icon-danger">
          <span>{{ asset.total_roi.percentage }}</span> <inline-svg src="media/icons/duotune/arrows/arr006.svg" />
        </span>

        
        <div class="assets_list__table--text_muted">  
        {{ asset.total_roi.price }}
        </div>
        </template>
        <template v-slot:last_updated="{ row: asset }">
          <p>{{ asset.last_updated }}</p>
        </template>
        <template v-slot:actions="{ row: asset }">
          
          <a
              href="#"
              class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
            >
              <span class="svg-icon svg-icon-3 assets_list__table--svg_edit">
                <inline-svg src="media/icons/duotune/art/art005.svg" />
              </span>
            </a>

            <a
              href="#"
              class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1 px-8"
            >
              Open
            </a>
        </template>
      </Datatable>
    </div>
  </div>
  <!--end::Asset List-->

</template>

<style lang="scss">
// Hide ugly arrows from number input (Chrome), looks fine in Firefox
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
  margin: 0 !important;
}
</style>



<script lang="ts">
import { defineComponent, ref, onMounted, computed } from "vue";
import Datatable from "@/components/datatable/DataTable.vue";
import { Sort } from "@/components/datatable/table-partials/models";

import assets from "./models/assetsData";
import { assetsData } from "./models/assetsData";
import arraySort from "array-sort";

export default defineComponent({
  name: "assets-listing",
  components: {
    Datatable,
  },
  setup() {
    const searchBarShow = ref(false);
    const filterBtnShow = ref(true);
    
    const tableHeader = ref([
      {
        columnName: "Asset",
        columnLabel: "asset",
        sortEnabled: true,
        columnWidth: 300,
      },
      { 
        columnName: "Maintained",
        columnLabel: "maintained",
        sortEnabled: true,
        columnWidth: 175,
      },
      {
        columnName: "My Holdings",
        columnLabel: "holdings",
        sortEnabled: true,
        columnWidth: 175,
      },
      {
        columnName: "Total ROI",
        columnLabel: "total_roi",
        sortEnabled: true,
        columnWidth: 175,
      },
      {
        columnName: "Last Updated",
        columnLabel: "last_updated",
        sortEnabled: true,
        columnWidth: 100,
      },
      {
        columnName: "Actions",
        columnLabel: "actions",
        sortEnabled: false,
        columnWidth: 135,
      },
    ]);
    const selectedIds = ref<Array<number>>([]);

    const tableData = ref<Array<assetsData>>(assets);
    const initAssets = ref<Array<assetsData>>([]);

    onMounted(() => {
      initAssets.value.splice(0, tableData.value.length, ...tableData.value);

     
    });

    const deleteFewCustomers = () => {
      selectedIds.value.forEach((item) => {
        deleteCustomer(item);
      });
      selectedIds.value.length = 0;
    };

    const deleteCustomer = (id) => {
      for (let i = 0; i < tableData.value.length; i++) {
        if (tableData.value[i].id === id) {
          tableData.value.splice(i, 1);
        }
      }
    };

    const search = ref<string>("");
    const searchItems = () => {
      tableData.value.splice(0, tableData.value.length, ...initAssets.value);
      if (search.value !== "") {
        let results: Array<assetsData> = [];
        for (let j = 0; j < tableData.value.length; j++) {
          if (searchingFunc(tableData.value[j], search.value)) {
            results.push(tableData.value[j]);
          }
        }
        tableData.value.splice(0, tableData.value.length, ...results);
      }
    };

    const searchingFunc = (obj, value): boolean => {
      for (let key in obj) {
        if (!Number.isInteger(obj[key]) && !(typeof obj[key] === "object")) {
          if (obj[key].indexOf(value) != -1) {
            return true;
          }
        }
      }
      return false;
    };

    const sort = (sort: Sort) => {
      const reverse: boolean = sort.order === "asc";
      if (sort.label) {
        arraySort(tableData.value, sort.label, { reverse });
      }
    };
    const onItemSelect = (selectedItems: Array<number>) => {
      selectedIds.value = selectedItems;
    };

    const showFilterSearch = () => {
      searchBarShow.value = true;
      filterBtnShow.value = false;
    };

    return {
      tableData,
      tableHeader,
      deleteCustomer,
      search,
      searchItems,
      selectedIds,
      deleteFewCustomers,
      sort,
      onItemSelect,
      searchBarShow,
      filterBtnShow,
      showFilterSearch
    };
  },
});
</script>