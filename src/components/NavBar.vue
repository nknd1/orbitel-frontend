<template>
  <div>
    <!-- Навигационная панель для ПК -->
    <nav v-if="!isMobile" class="desktop-nav">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Contracts</a></li>
        <li><a href="#">Settings</a></li>
      </ul>
    </nav>

    <!-- Навигационная панель для мобильных устройств -->
    <nav v-else class="mobile-nav">
      <ul>
        <li><a href="#">🏠</a></li>
        <li><a href="#">📄</a></li>
        <li><a href="#">⚙️</a></li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { useMediaQuery } from '@vueuse/core';

export default {
  name: 'NavigationBar',
  setup() {
    // Проверяем, мобильный ли экран
    const isMobile = useMediaQuery('(max-width: 768px)');
    return { isMobile };
  },
};
</script>

<style scoped>
/* Стили для ПК */
.desktop-nav ul {
  display: flex;
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.desktop-nav ul li a {
  text-decoration: none;
  color: #000;
}

/* Стили для мобильных устройств */
.mobile-nav ul {
  display: flex;
  justify-content: space-around;
  list-style: none;
  padding: 0;
  margin: 0;
}

.mobile-nav ul li a {
  font-size: 20px;
  text-decoration: none;
  color: #000;
}
</style>
