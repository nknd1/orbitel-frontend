import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from '@/router'
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { Quasar } from 'quasar'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'
const app = createApp(App);

const vuetify = createVuetify({
  components,
  directives,
})

app.use(Quasar, {
  plugins: {}, })

app.use(vuetify)
app.use(createPinia())
app.use(router)
app.mount('#app')
