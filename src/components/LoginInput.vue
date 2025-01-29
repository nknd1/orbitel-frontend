<script setup lang="ts"></script>

<template>
  <input type="text" id="login" required placeholder="Логин" />
</template>

<style scoped>
input {
  width: 100%; /* w-full */
  /* mx-0 */
  /* my-2.5 (10px) */
  margin: 0.625rem 0;
  border-style: solid; /* border-solid */
  font-size: 1.5rem; /* text-2xl */
  padding: 0.5rem; /* p-2 */
  color: black; /* text-black */
  background-color: white; /* bg-white */
  border-radius: 0.375rem; /* rounded */
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05); /* shadow-sm */
  transition: all 0.1s ease-in-out; /* transition duration-100 ease-in-out */
}

input:focus {
  border-color: #3b82f6; /* focus:border-blue-500 */
  outline: none; /* focus:outline-none */
}

input:disabled {
  opacity: 0.5; /* disabled:opacity-50 */
  cursor: not-allowed; /* disabled:cursor-not-allowed */
}
</style>
