<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { contractsMock } from '@/mock/contractsMock'
// Импорт типа Contract для типизации
import type { Contract } from '@/mock/contractsMock'

// Получение параметров маршрута
const route = useRoute()

// Получение ID договора из параметров маршрута
const contractId = computed(() => Number(route.params.id))

// Поиск договора в моковых данных
const contract = computed<Contract | undefined>(() =>
  contractsMock.find((c) => c.id === contractId.value),
)
</script>

<template>
  <div v-if="contract" class="contract-details" title="Детали договора">
    <p><strong>Номер договора:</strong> {{ contract.contractNumber }}</p>
    <p><strong>Тариф:</strong> {{ contract.tariff }}</p>
    <router-link to="/contracts">
      <button class="back-button">Назад к списку</button>
    </router-link>
  </div>
</template>

<style scoped>
.contract-details {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
}
.back-button {
  background-color: #007bff;
  color: white;
  border: none;
  margin-top: 10px;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 5px;

}
.back-button:hover {
  background-color: #0056b3;
}
</style>
