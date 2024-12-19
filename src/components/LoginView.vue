<template>
  <div class="flex items-center justify-center min-h-screen">
    <form @submit.prevent="handleLogin" class="bg-white shadow-lg rounded-lg p-5 w-80">
      <LoginTitle />
      <LoginInput v-model="login" />
      <PasswordInput v-model="password" />
      <LoginButton :loading="isLoading" buttonText="Войти" />
      <p v-if="error">{{ error }}</p>
    </form>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '@/stores/authStore'
import LoginButton from '@/components/LoginButton.vue'
import LoginInput from '@/components/LoginInput.vue'
import LoginTitle from '@/components/LoginTitle.vue'
import PasswordInput from '@/components/PasswordInput.vue'


export default {
  components: { PasswordInput, LoginTitle, LoginInput, LoginButton },
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
        error.value = 'Неверный логин или пароль'
      } finally {

        error.value = 'Ошибка сервера'
      }
    }

    return { login, password, handleLogin, error }
  },
}
</script>

<style scoped lang="sass">

</style>
