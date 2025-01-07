<script lang="ts">
import { defineComponent, computed } from "vue";
import { useRoute } from "vue-router";
import type { Contract } from "@/mock/contractsMock";
import { contractsMock } from "@/mock/contractsMock";

export default defineComponent({
  name: "ContractDetails",
  setup() {
    const route = useRoute();
    const contractId = computed(() => Number(route.params.id)); // Получение id из маршрута
    const contract = computed(() =>
      contractsMock.find((c) => c.id === contractId.value)
    );

    return {
      contract,
    };
  },
});
</script>

<template>
  <div v-if="contract" class="contract-details">
    <h1>Детали договора</h1>
    <p><strong>Номер договора:</strong> {{ contract.contractNumber }}</p>
    <p><strong>Тариф:</strong> {{ contract.tariff }}</p>
    <p><strong>Описание:</strong> {{ contract.description }}</p>
    <router-link to="/contracts">
      <button class="back-button">Назад к списку</button>
    </router-link>
  </div>
  <div v-else>
    <p>Договор не найден.</p>
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
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 5px;
}
.back-button:hover {
  background-color: #0056b3;
}
</style>
