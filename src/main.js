import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueClipboard from 'vue-clipboard2';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueClipboard)

app.mount('#app')
