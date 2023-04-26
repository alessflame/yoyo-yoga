import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueYouTubeEmbed from 'vue-youtube-embed'
import App from './App.vue'
import router from './router'
import VuePlyr from 'vue-plyr'
import 'vue-plyr/dist/vue-plyr.css'

import "./index.css";
const app = createApp(App)

app.use(VuePlyr, {
    plyr: {}
  })

app.use(createPinia())
app.use(router)

app.mount('#app')
