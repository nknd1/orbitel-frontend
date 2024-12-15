<script lang="ts">
export default {
  data() {
    return {
      showPassword: false,
      password: null
    };
  },
  computed: {
    buttonLabel() {
      return (this.showPassword) ? "Hide" : "Show";
    }
  },
  methods: {
    toggleShow() {
      this.showPassword = !this.showPassword;
    }
  }
};
</script>

<template>
      <input v-if="showPassword" type="text" class="input" v-model="password" />
      <input v-else type="password" class="input" v-model="password">
  <div class="control">
    <button class="button" @click="toggleShow"><span class="icon is-small is-right">
            <i class="fas" :class="{ 'fa-eye-slash': showPassword, 'fa-eye': !showPassword }"></i>
          </span>
    </button>
  </div>


</template>

<style scoped lang="sass">
input
  @apply w-full mx-0 my-2.5 border-solid text-2xl p-2 text-black placeholder-gray-400 transition duration-100 ease-in-out bg-white border border-gray-300 rounded shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed
</style>
