import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routes'
import vuetify from './plugins/vuetify'

const app = createApp(App)

app.use(router)
app.use(vuetify)
app.mount('#app')
