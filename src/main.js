import { createApp } from 'vue'
import '@/style.css'
import App from '@/App.vue'

import { usePluginQuasar } from '@/plugins/quasar'
import { usePluginRouter } from '@/plugins/router'

const app = createApp(App)

usePluginRouter(app)
usePluginQuasar(app)

app.mount('#app')
