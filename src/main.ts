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

import PortfolioModule from "@/modules/portfolio";
import { registerModules } from "@/utils/moduleRegistry";

const modules = {
    portfolio: PortfolioModule
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
