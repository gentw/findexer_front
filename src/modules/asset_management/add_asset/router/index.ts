import { RouteRecordRaw } from "vue-router";

const router: RouteRecordRaw = {
    path: "/add_asset",
    redirect: { name: "AddAsset" },
    name: "AddAsset",
    component: () => import("@/modules/asset_management/add_asset/AddAssetModule.vue"),
    children: [
       
    ]
};

export default router;
