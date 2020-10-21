import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

var app = createApp(App)
app.use(router)
app.config.performance = true
app.mount('#app')
