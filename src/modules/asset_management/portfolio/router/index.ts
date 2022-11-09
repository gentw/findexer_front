import { RouteRecordRaw } from "vue-router";

const router: RouteRecordRaw = {
    path: "/portfolio",
    redirect: { name: "AssetList" },
    name: "Portfolio",
    component: () => import("@/modules/asset_management/portfolio/PortfolioModule.vue"),
    children: [
        {
            path: "/portfolio",
            name: "AssetList",
            component: () => import("@/modules/asset_management/portfolio/views/Portfolio.vue"),
            meta: {
                pageTitle: "Portfolio",
                breadcrumbs: ["Assets"],
            },
        },
    ]
};

export default router;
