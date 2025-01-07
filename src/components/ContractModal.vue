<template>
  <div v-if="visible" class="modal-overlay">
    <div class="modal">
      <h2>Детали договора: {{ contract.contractNumber }}</h2>
      <p><strong>Тариф:</strong> {{ contract.tariff }}</p>
      <p><strong>Дата начала:</strong> {{ contract.startDate }}</p>
      <p><strong>Дата окончания:</strong> {{ contract.endDate }}</p>
      <p><strong>Статус:</strong> {{ contract.status }}</p>
      <button @click="closeModal">Закрыть</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import type { Contract } from "@/mock/contractsMock";

export default defineComponent({
  name: "ContractModal",
  props: {
    visible: {
      type: Boolean,
      required: true,
    },
    contract: {
      type: Object as PropType<Contract>,
      required: true,
    },
  },
  emits: ["close"],
  setup(_, { emit }) {
    const closeModal = () => {
      emit("close");
    };

    return {
      closeModal,
    };
  },
});
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #fff;
  padding: 20px;
  border-radius: 5px;
  max-width: 400px;
  width: 90%;
}
</style>
