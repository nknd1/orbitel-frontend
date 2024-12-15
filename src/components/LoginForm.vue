<template>
  <div>
    <form @submit.prevent="handleLogin">
      <h2>Вход в личный кабинет</h2>
      <input type="text" v-model="login" id="login" required placeholder="Логин" />
      <input type="password" v-model="password" id="password" required placeholder="Пароль" />
      <LoginButton :loading="isLoading" buttonText="Войти" />
      <p v-if="error">{{ error }}</p>
    </form>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '@/stores/authStore'
import LoginButton from '@/components/LoginButton.vue'

export default {
  components: { LoginButton },
  data() {
    return { isLoading: false }
  },
  setup() {
    const authStore = useAuthStore()
    const login = ref('')
    const password = ref('')
    const error = ref('')

    const handleLogin = async () => {
      try {
        await authStore.login(login.value, password.value)
        // Редирект или действие после успешного входа
      } catch (err) {
        error.value = 'Неверный логин или пароль.'
      }
    }

    return { login, password, handleLogin, error }
  },
}
</script>

<style scoped lang="sass">
div
  @apply flex items-center justify-center min-h-screen

form
  @apply bg-white shadow-lg rounded-lg p-5 w-80

input
  @apply w-full mx-0 my-2.5 border-solid text-2xl p-2 text-black placeholder-gray-400 transition duration-100 ease-in-out bg-white border border-gray-300 rounded shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed

h2
  @apply text-center text-blue-500 py-3.5 text-2xl
</style>
