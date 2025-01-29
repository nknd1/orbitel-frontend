<template>
  <div>
    <!-- Навигационная панель для ПК -->
    <nav v-if="!isMobile" class="desktop-nav">
      <ul>
        <li><a href="contracts">Мои договоры</a></li>
        <li><a href="#">Настройки</a></li>
        <li><a href="logout">Выйти</a></li>
      </ul>
    </nav>


    <!-- Навигационная панель для мобильных устройств -->
    <div v-else class="mobile-nav">
        <button>
            <a href="contracts">Мои договоры</a>
        </button>
        <button>
          <a href="#">Настройки</a>
        </button>
      </div>
  </div>
</template>

<script setup lang="ts">
import { useMediaQuery } from '@vueuse/core'

// Проверяем, мобильный ли экран
const isMobile = useMediaQuery('(max-width: 768px)')
</script>

<style scoped>

/* Стили для ПК */
.desktop-nav ul {
  display: flex;
  gap: 20px;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
  list-style: none;
  padding: 0;
  margin: 0;
}

.desktop-nav ul li a {
  text-decoration: none;
  color: #000;
}

/* Стили для мобильных устройств */
.mobile-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  flex: 1 30px;
  background-color: #fff;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.mobile-nav ul {
  display: flex;
  justify-content: flex-end;
  list-style: none;
  padding: 10px 0;
  margin: 0;
}

.mobile-nav ul li a {
  font-size: 20px;
  text-decoration: none;
  color: #000;
}
</style>
