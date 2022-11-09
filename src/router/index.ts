import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import store from "@/store";
import { Mutations } from "@/store/enums/StoreEnums";
import { authGuard } from '@auth0/auth0-vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: { name: "Dashboard" },
    name: "Main",
    component: () => import("@/layouts/main-layout/MainLayout.vue"),
    beforeEnter: authGuard,
    children: []
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/error/404.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
  },
];

const router = createRouter({
  /**
   * https://router.vuejs.org/guide/essentials/history-mode.html
   * TODO(sanjin): Can't find resources, i.e., "public/media" etc.
   * if not in HashHistory mode. The path gets wrong and appends the
   * parent path of views at the front, e.g. /manager/public/media...
   */
  history: createWebHashHistory(),

  routes,
});

router.beforeEach(() => {
  store.commit(Mutations.RESET_LAYOUT_CONFIG);

  // Scroll page to top on every route change
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 100);
});

export default router;
