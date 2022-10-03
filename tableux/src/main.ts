import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import route from './router'
import './assets/tailwind.css'

createApp(App).use(route).use(store).mount('#app')
