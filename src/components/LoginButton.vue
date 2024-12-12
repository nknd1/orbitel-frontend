<template>
  <button :class="buttonClasses" :disabled="loading" @click="handleClick">
    <span v-if="loading" class="flex items-center">
      <svg
        class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 0112-7.29A6.005 6.005 0 0012 4a6.002 6.002 0 00-5.306 3.162A7.978 7.978 0 004 12z"
        ></path>
      </svg>
      Loading...
    </span>
    <span v-else>{{ buttonText }}</span>
  </button>
</template>

<script lang="ts">
export default {
  props: {
    buttonText: {
      type: String,
      default: 'Submit',
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    buttonClasses() {
      return `flex items-center justify-center px-4 py-2 ${
        this.loading ? 'bg-gray-600' : 'bg-blue-500'
      } text-white font-bold rounded`
    },
  },
  methods: {
    handleClick() {
      this.$emit('click')
    },
  },
}
</script>

<style scoped lang="sass">
button
  @apply cursor-pointer w-full py-3.5 my-5 border-[none] bg-blue-500 size-12
</style>
