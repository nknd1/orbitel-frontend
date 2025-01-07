import { createRouter, createWebHistory } from "vue-router";
import ContractsList from "@/components/ContractsList.vue";
import ContractDetails from "@/components/ContractDetails.vue";

const routes = [
  {
    path: "/contracts",
    name: "ContractsList",
    component: ContractsList,
  },
  {
    path: "/contracts/:id",
    name: "ContractDetails",
    component: ContractDetails,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
