<script setup lang="ts"></script>

<template>
  <input type="password" id="password" required placeholder="Пароль" />
</template>

<style scoped>
input {
  width: 100%; /* w-full */
  margin-left: 0; /* mx-0 */
  margin-right: 0;
  margin-top: 0.625rem; /* my-2.5 (10px) */
  margin-bottom: 0.625rem;
  border-style: solid; /* border-solid */
  font-size: 1.5rem; /* text-2xl */
  padding: 0.5rem; /* p-2 */
  color: black; /* text-black */
  background-color: white; /* bg-white */
  border: 1px solid #d1d5db; /* border-gray-300 */
  border-radius: 0.375rem; /* rounded */
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05); /* shadow-sm */
  transition: all 0.1s ease-in-out; /* transition duration-100 ease-in-out */
  placeholder-color: #9ca3af; /* placeholder-gray-400 */
}

input:focus {
  border-color: #3b82f6; /* focus:border-blue-500 */
  outline: none; /* focus:outline-none */
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5); /* focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 */
}

input:disabled {
  opacity: 0.5; /* disabled:opacity-50 */
  cursor: not-allowed; /* disabled:cursor-not-allowed */
}
</style>
