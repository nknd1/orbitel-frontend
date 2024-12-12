<template>
  <footer>
    <div>
      <p>© 2023 My Website. All rights reserved.</p>
      <div>
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
        <a href="#">Instagram</a>
        <a href="#">LinkedIn</a>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="sass">

footer
 @apply bg-gray-800 text-white py-4

div
  @apply container mx-auto text-center

p
  @apply mb-2

div
  @apply flex justify-center space-x-4

a
  @apply hover:text-blue-400

</style>
