import { createRouter, createWebHistory } from 'vue-router'
import ContractsList from '@/components/ContractsList.vue'
import ContractDetails from '@/components/ContractDetails.vue'

export const routes = [
  {
    path: '/',
    redirect: '/contracts', // Редирект на страницу списка договоров
  },
  {
    path: '/contracts',
    name: 'ContractsList',
    component: ContractsList,
  },
  {
    path: '/contracts/:id',
    name: 'ContractDetails',
    component: ContractDetails,
    props: true, // Передача параметров как props
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
