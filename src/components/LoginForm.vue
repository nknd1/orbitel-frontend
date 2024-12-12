<template>
  <div class="container">
    <form>
      <LoginTitle />
      <LoginInput />
      <PasswordInput />
      <LoginButton
        :loading="isLoading"
        @click="submitForm"
        buttonText="Войти"
        LoginButtonComponent
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

      await new Promise((resolve) => setTimeout(resolve, 10))

      this.isLoading = false

      toast('пажжи!', {
        theme: 'auto',
        type: 'success',
        position: 'bottom-right',
        transition: 'flip',
        dangerouslyHTMLString: true,
      })
    },
  },
}
</script>

<style scoped lang="sass">

.container
  @apply drop-shadow-2xl bg-[white] shadow-[#00abfa] w-[360px] p-5 rounded-lg flex flex-col items-center justify-center
</style>
