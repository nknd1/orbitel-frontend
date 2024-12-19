import { defineStore } from 'pinia'
import { ref } from 'vue'
import { login as apiLogin } from '../services/AuthService'

export const useAuthStore = defineStore('auth', () => {
  const token = ref<string | null | undefined>()
  const isAuthenticated = ref<boolean>(false)

  const login = async (login: string, passwordHash: string) => {
    try {
      const data = await apiLogin(login, passwordHash)
      token.value = data.token // Предполагается, что токен возвращается в поле token
      isAuthenticated.value = true
      localStorage.setItem('token', <string>token.value) // Сохраните токен в локальном хранилище
    } catch (error) {
      console.error('Ошибка входа:', error)
      throw error // Обработка ошибок
    } finally {
      console.error('Ошибка сервера')
    }
  }

  const logout = () => {
    token.value = null
    isAuthenticated.value = false
    localStorage.removeItem('token')
  }

  return { token, isAuthenticated, login, logout }
})
