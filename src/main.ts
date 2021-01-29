import { createApp } from 'vue'
import { createWebHistory, createRouter, RouteRecordRaw } from 'vue-router'

const AsyncPage1 = () => import('./components/AsyncPage1.vue')
const AsyncPage2 = () => import('./components/AsyncPage2.vue')
const AsyncCompositionPage1 = () => import('./components/AsyncCompositionPage1.vue')
import Page1 from './components/Page1.vue'
import Page2 from './components/Page2.vue'

const routes: RouteRecordRaw[] = [
  { name: 'page1', path: '/page1', component: Page1 },
  { name: 'page2', path: '/page2', component: Page2 },
  { name: 'asyncpage1', path: '/asyncpage1', component: AsyncPage1 },
  { name: 'asyncpage2', path: '/asyncpage2', component: AsyncPage2 },
  { name: 'asynccompositionpage1', path: '/asynccompositionpage1', component: AsyncCompositionPage1 },
]

const router = createRouter({
  linkActiveClass: 'active',
  history: createWebHistory(),
  routes,
})

// TypeScript error? Run VSCode command
// TypeScript: Select TypeScript version - > Use Workspace Version
import App from './App.vue'

createApp(App)
.use(router)
.mount('#app')
