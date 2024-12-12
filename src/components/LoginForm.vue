<template>
  <div>
    <form>
      <LoginTitle />
      <LoginInput />
      <PasswordInput />
      <LoginButton
        :loading="isLoading"
        @click="submitForm"
        buttonText="Войти"
      />
    </form>
  </div>
</template>

<script lang="ts">
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import LoginInput from '@/components/LoginInput.vue'
import PasswordInput from '@/components/PasswordInput.vue'
import LoginButton from '@/components/LoginButton.vue'
import LoginTitle from '@/components/LoginTitle.vue'

export default {
  components: {
    LoginTitle,
    LoginButton,
    PasswordInput,
    LoginInput,
  },
  data() {
    return {
      isLoading: false,
    }
  },
  methods: {
    async submitForm() {
      this.isLoading = true

      await new Promise((resolve) => setTimeout(resolve, 1000)) // Увеличил время для демонстрации загрузки

      this.isLoading = false

      toast('Успешно!', {
        theme: 'auto',
        type: 'success',
        position: 'bottom-right',
        transition: 'flip',
        dangerouslyHTMLString: true,
        progressStyle: {

        }
      })
    },
  },
}
</script>

<style scoped lang="sass">
div
  @apply flex items-center justify-center min-h-screen

form
  @apply bg-white shadow-lg rounded-lg p-5 w-80
</style>
