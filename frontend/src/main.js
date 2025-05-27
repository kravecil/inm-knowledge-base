import { createApp } from 'vue'
import '@/style.css'
import App from '@/App.vue'

import { usePluginRouter } from '@/plugins/router'
import { usePluginPinia } from '@/plugins/pinia'
import { usePluginQuasar } from '@/plugins/quasar'

const app = createApp(App)

usePluginRouter(app)
usePluginPinia(app)
usePluginQuasar(app)

app.mount('#app')
