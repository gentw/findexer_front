import { createApp } from "vue";
import App from "./App.vue";

import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import i18n from "@/core/plugins/i18n";
import { Auth0Service } from '@/services/Auth0Service'

//imports for app initialization
import ApiService from "@/services/ApiService";
import { initApexCharts } from "@/core/plugins/apexcharts";
import { initInlineSvg } from "@/core/plugins/inline-svg";
import { initVeeValidate } from "@/core/plugins/vee-validate";

import "@/core/plugins/prismjs";
import "bootstrap";

import AssetManagementModule from "@/modules/asset_management";
import PortfolioModule from "@/modules/asset_management/portfolio";
import DashboardModule from "@/modules/asset_management/dashboard";
import AddAssetModule from "@/modules/asset_management/add_asset";
import { registerModules } from "@/utils/moduleRegistry";

const modules = {
    asset_management: AssetManagementModule,
    portfolio: PortfolioModule,
    dashboard: DashboardModule,
    add_asset: AddAssetModule
};
const app = createApp(App);

registerModules(modules);

app.use(store);
app.use(router);
app.use(ElementPlus);
app.use(i18n);
app.use(Auth0Service);

ApiService.init(app, Auth0Service);
initApexCharts(app);
initInlineSvg(app);
initVeeValidate();


app.mount("#app");
