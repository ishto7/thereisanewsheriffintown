import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'
import '@/index.css'

// Import pages
import Home from '@/pages/Home.vue'
import Jokes from '@/pages/Jokes.vue'
import Sayings from '@/pages/Sayings.vue'
import Social from '@/pages/Social.vue'
import NotFound from '@/pages/NotFound.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/jokes', component: Jokes },
    { path: '/sayings', component: Sayings },
    { path: '/social', component: Social },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')