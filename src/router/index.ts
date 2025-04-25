import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/palace-manager",
      name: "palace-manager",
      component: () => import("../views/PalaceManager.vue"),
    },
    {
      path: "/palace/:id",
      name: "RoomView",
      component: () => import("../views/RoomView.vue"),
    },
  ],
});

export default router;
