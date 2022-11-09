import { RouteRecordRaw } from "vue-router";

const router: RouteRecordRaw = {
    path: "/dashboard",
    redirect: { name: "AssetOverview" },
    name: "Dashboard",
    component: () => import("@/modules/asset_management/dashboard/DashboardModule.vue"),
    children: [
        {
            path: "/dashboard",
            name: "AssetOverview",
            component: () => import("@/modules/asset_management/dashboard/views/Dashboard.vue"),
            meta: {
                pageTitle: "Dashboard",
                breadcrumbs: ["Asset overview"],
            },
        },
    ]
};

export default router;
