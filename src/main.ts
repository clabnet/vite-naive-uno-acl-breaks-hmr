import App from './App.vue'
import router from './router'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { provaAcl } from './plugins/provaAcl'

import 'virtual:uno.css'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// uncommenting this line will breaks Hot Module Reload !
 // app.use(provaAcl)

app.mount('#app')
