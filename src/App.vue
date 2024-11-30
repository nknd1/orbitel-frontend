<template>
  <div class="container">
    <LoginTitle />
    <LoginForm />
  </div>
</template>

<script setup lang="ts">
import LoginTitle from './components/LoginTitle.vue';
import LoginForm from './components/LoginForm.vue';
</script>

<style scoped lang="sass">
.container
  @apply bg-[white] shadow-[#00abfa] w-[360px] p-5 rounded-lg
</style>
