import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  { path: '/', component:  async () => await import('./pages/IndexPage.vue') },
  { path: '/about', component:  async () => await import('./pages/AboutPage.vue') },
  { path: '/stock/:name', component:  async () => await import('./pages/StockDetailPage.vue') },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})