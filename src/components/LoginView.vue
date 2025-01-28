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

<style scoped>
div {
  display: flex; /* flex */
  align-items: center; /* items-center */
  justify-content: center; /* justify-center */
  min-height: 100vh; /* min-h-screen */
  background-color: #f3f4f6; /* bg-gray-100 */
}

form {
  background-color: white; /* bg-white */
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05); /* shadow-lg */
  border-radius: 0.5rem; /* rounded-lg */
  padding: 1.25rem; /* p-5 */
  width: 20rem; /* w-80 */
}

.error-message {
  color: #ef4444; /* text-red-500 */
  margin-top: 0.5rem; /* mt-2 */
  font-size: 0.875rem; /* text-sm */
}
</style>
