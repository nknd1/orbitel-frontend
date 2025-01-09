<template>
  <div>
    <form @submit.prevent="handleLogin">
      <LoginTitle />
      <LoginInput v-model="login" />
      <PasswordInput v-model="password" />
      <LoginButton :loading="isLoading" buttonText="Войти" />
      <p v-if="error" class="error-message">{{ error }}</p>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '@/stores/authStore'
import LoginButton from '@/components/LoginButton.vue'
import LoginInput from '@/components/LoginInput.vue'
import LoginTitle from '@/components/LoginTitle.vue'
import PasswordInput from '@/components/PasswordInput.vue'

// Использование состояния из Pinia
const authStore = useAuthStore()

// Локальные состояния
const login = ref('')
const password = ref('')
const error = ref('')
const isLoading = ref(false)

// Функция обработки логина
const handleLogin = async () => {
  isLoading.value = true // Отображаем индикатор загрузки
  error.value = '' // Сбрасываем ошибку

  try {
    await authStore.login(login.value, password.value)

    // Редирект или действие после успешного входа
    console.log('Успешный вход')
  } catch (err) {
    error.value = 'Неверный логин или пароль'
  } finally {
    isLoading.value = false // Скрываем индикатор загрузки
  }
}
</script>

<style scoped lang="sass">
div
  @apply flex items-center justify-center min-h-screen bg-gray-100

form
  @apply bg-white shadow-lg rounded-lg p-5 w-80

.error-message
  @apply text-red-500 mt-2 text-sm
</style>
