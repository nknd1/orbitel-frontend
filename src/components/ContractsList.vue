<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router' // Импортируем useRouter для работы с маршрутизацией
import type { Contract } from '@/mock/contractsMock'
import { contractsMock } from '@/mock/contractsMock'

// Моковые данные договоров
const contracts = ref<Contract[]>(contractsMock)

// Экземпляр маршрутизатора
const router = useRouter()

// Функция для перехода на страницу деталей договора
const goToDetails = (id: number) => {
  router.push(`/contracts/${id}`)
}
</script>

<template>
  <q-card>
    <ul>
      <li v-for="contract in contracts" :key="contract.id" class="contract-item">
        <div class="contract-info">
          <h3>Номер договора: {{ contract.contractNumber }}</h3>
          <p>Тариф: {{ contract.tariff }}</p>
          <q-btn class="details-button" @click="goToDetails(contract.id)">Подробнее</q-btn>
        </div>
      </li>
    </ul>
  </q-card>
</template>

<style scoped>
.contracts-list {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
.contract-item {
  margin-bottom: 15px;
}
.contract-info {
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.details-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 5px;
}
.details-button:hover {
  background-color: #0056b3;
}
</style>
