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
          <li>
            <a href="#">Выйти</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
header {
  background-color: #2563eb; /* bg-blue-600 */
  color: white; /* text-white */
  padding: 1rem; /* p-4 */
}

header div {
  max-width: 1280px; /* container */
  margin-left: auto; /* mx-auto */
  margin-right: auto;
  display: flex; /* flex */
  justify-content: space-between; /* justify-between */
  align-items: center; /* items-center */
}

header h1 {
  font-size: 1.5rem; /* text-2xl */
  font-weight: 700; /* font-bold */
}

header ul {
  display: flex; /* flex */
  gap: 1rem; /* space-x-4 */
}

header a {
  transition: color 0.3s;
}

header a:hover {
  color: #93c5fd; /* hover:text-blue-300 */
}
</style>


<script setup lang="ts">
let a = "ауцауцуаццуа";

</script>
