<template>
  <div v-if="contract" class="contract-details">
    <h1>Детали договора: {{ contract.contractNumber }}</h1>
    <p><strong>Тариф:</strong> {{ contract.tariff }}</p>
    <p><strong>Дата начала:</strong> {{ contract.startDate }}</p>
    <p><strong>Дата окончания:</strong> {{ contract.endDate }}</p>
    <p><strong>Статус:</strong> {{ contract.status }}</p>
  </div>
  <div v-else>
    <p>Договор не найден.</p>
  </div>
</template>


<script lang="ts">
import { defineComponent, computed } from "vue";
import { useRoute } from "vue-router";
import { contractsMock} from "@/mock/contractsMock";
import type { Contract } from "@/mock/contractsMock";

export default defineComponent({
  name: "ContractDetails",
  setup() {
    const route = useRoute();
    const contractId = computed(() => Number(route.params.id));
    const contract = computed<Contract | undefined>(() =>
      contractsMock.find((c) => c.id === contractId.value)
    );

    return {
      contract,
    };
  },
});

</script>

<style scoped>
.contract-details {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
}
</style>
