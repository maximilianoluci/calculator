import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "calculator",
      component: () => import("@/views/CalculatorView.vue"),
    },
    {
      path: "/stack",
      name: "stack",
      component: () => import("@/views/StackView.vue"),
    },
  ],
});

export default router;
