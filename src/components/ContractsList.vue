<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router"; // Импорт useRouter
import type { Contract } from "@/mock/contractsMock";
import { contractsMock } from "@/mock/contractsMock";

export default defineComponent({
  name: "ContractsList",
  setup() {
    const contracts = ref<Contract[]>(contractsMock); // Список договоров
    const router = useRouter(); // Доступ к маршрутизатору

    const goToDetails = (id: number) => {
      router.push(`/contracts/${id}`); // Переход к деталям договора
    };

    return {
      contracts,
      goToDetails,
    };
  },
});
</script>

<template>
  <div class="contracts-list">
    <h1>Список договоров</h1>
    <ul>
      <li v-for="contract in contracts" :key="contract.id" class="contract-item">
        <div class="contract-info">
          <h3>Номер договора: {{ contract.contractNumber }}</h3>
          <p>Тариф: {{ contract.tariff }}</p>
          <button
            class="details-button"
            @click="goToDetails(contract.id)"
          >
            Подробнее
          </button>
        </div>
      </li>
    </ul>
  </div>
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
  transition: background-color 0.3s ease;
}

.contract-info:hover {
  background-color: #f0f0f0;
}

.details-button {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 8px 12px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.details-button:hover {
  background-color: #0056b3;
}
</style>
