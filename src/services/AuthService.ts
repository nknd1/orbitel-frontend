import axios from 'axios'
import { API_URL } from '@/utils/ApiBase'

export const login = async (login: string, passwordHash: string) => {
  const response = await axios.post(`${API_URL}/Auth/Login`, { login, passwordHash });
  return response.data
}
