import './assets/main.sass'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import App from './App.vue'
const vuetify = createVuetify({
  components,
  directives,
})
const app = createApp(App).use(vuetify)

app.use(createPinia())

app.mount('#app')
