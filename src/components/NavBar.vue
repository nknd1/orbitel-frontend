<template>


  <v-toolbar>
    <!-- Навигационная панель для ПК -->
    <nav v-if="!isMobile" class="desktop-nav">
      <ul>
        <li><a href="contracts">Мои договоры</a></li>
        <li><a href="#">Профиль</a></li>
        <li><a href="#">Настройки</a></li>
      </ul>
    </nav>

    <!-- Навигационная панель для мобильных устройств -->
    <v-layout v-else class="mobile-nav" style="height: 56px;">
      <v-bottom-navigation
        v-model="value"
        color="primary"
        active
      >
        <v-btn>
          <v-icon>mdi-history</v-icon>

          Recents
        </v-btn>

        <v-btn>
          <v-icon>mdi-heart</v-icon>

          Favorites
        </v-btn>

        <v-btn>
          <v-icon>mdi-map-marker</v-icon>

          <span>Nearby</span>
        </v-btn>
      </v-bottom-navigation>
    </v-layout>
  </v-toolbar>


  <!-- Навигационная панель для мобильных устройств
  <nav v-else class="mobile-nav">
    <ul>
      <li><a href="#">Мои договоры</a></li>
      <li><a href="#">Профиль</a></li>
      <li><a href="#">Настройки</a></li>
    </ul>
  </nav>
  -->
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
  background-color: #fff;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.mobile-nav ul {
  display: flex;
  justify-content: space-around;
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
