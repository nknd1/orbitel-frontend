<template>
  <form>
    <input type="text" placeholder="Логин" />
    <input type="password" placeholder="Пароль" required />
    <ButtonComponent
      :loading="isLoading"
      @click="submitForm"
      buttonText="Войти"
    ButtonComponent/>
  </form>
</template>

<script lang="ts">
import ButtonComponent from '@/components/ButtonComponent.vue'
import { toast } from 'vue3-toastify';
import "vue3-toastify/dist/index.css";

export default {
  components: {
    ButtonComponent,
  },
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    async submitForm() {
      
      this.isLoading = true;

      await new Promise((resolve) => setTimeout(resolve, 10));

      this.isLoading = false;

    toast("пажжи!", {  
      "theme": "auto",
  "type": "success",
  "position": "bottom-right",
  "transition": "flip",
  "dangerouslyHTMLString": true
})
    } 
  }
}
</script>

<style scoped lang="sass">

input
  @apply w-full mx-0 my-2.5 border-solid text-2xl p-2 text-black placeholder-gray-400 transition duration-100 ease-in-out bg-white border border-gray-300 rounded shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed

button
  @apply cursor-pointer w-full py-3.5 my-5 border-[none] bg-[#008fcf]


</style>