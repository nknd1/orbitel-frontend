import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import ContractsList from "@/components/ContractsList.vue";
import ContractDetails from "@/components/ContractDetails.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/contracts",
    name: "ContractsList",
    component: ContractsList,
  },
  {
    path: "/contracts/:id",
    name: "ContractDetails",
    component: ContractDetails,
    props: true, // Передача параметров как props
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
