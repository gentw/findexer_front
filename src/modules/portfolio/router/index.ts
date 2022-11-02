import { RouteRecordRaw } from "vue-router";

const router: RouteRecordRaw = {
    path: "/portfolio",
    redirect: { name: "AssetList" },
    name: "Portfolio",
    component: () => import("@/modules/portfolio/PortfolioModule.vue"),
    children: [
        {
            path: "/portfolio",
            name: "AssetList",
            component: () => import("@/modules/portfolio/views/Portfolio.vue"),
            meta: {
                pageTitle: "Portfolio",
                breadcrumbs: ["Assets"],
            },
        },
    ]
};

export default router;
