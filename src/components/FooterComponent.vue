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

<style scoped>
footer {
  background-color: #1f2937; /* bg-gray-800 */
  color: white; /* text-white */
  padding-top: 1rem; /* py-4 */
  padding-bottom: 1rem;
}

footer div {
  max-width: 1280px; /* container */
  margin-left: auto; /* mx-auto */
  margin-right: auto;
  text-align: center; /* text-center */
}

footer p {
  margin-bottom: 0.5rem; /* mb-2 */
}

footer div:last-child {
  display: flex; /* flex */
  justify-content: center; /* justify-center */
  gap: 1rem; /* space-x-4 */
}

footer a {
  transition: color 0.3s;
}

footer a:hover {
  color: #60a5fa; /* hover:text-blue-400 */
}
</style>
