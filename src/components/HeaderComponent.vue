<template>
  <header>
    <div>
      <h1>Мой Орбител</h1>
      <nav>
        <ul>
          <li>
            <a href="#">Мои договоры</a>
          </li>
          <li>
            <a href="#">Мой профиль</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="sass">

header
  @apply bg-blue-600 text-white p-4

div
  @apply container mx-auto flex justify-between items-center

h1
  @apply text-2xl font-bold

ul
  @apply flex space-x-4

a
  @apply hover:text-blue-300
</style>

<script setup lang="ts"></script>
