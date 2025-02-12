import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import ReferalPage from '../pages/ReferalPage.vue'
import CoinPage from '../pages/CoinPage.vue'
import BalancesPage from '../pages/BalancesPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    meta: {
      title: 'Главная',
      spinner: true,
      duration: 1500,
    },
  },
  {
    path: '/referal',
    name: 'referal',
    component: ReferalPage,
    meta: {
      title: 'Рефералка',
    },
  },
  {
    path: '/coins',
    name: 'coins',
    component: CoinPage,
    meta: {
      title: 'Монетки',
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
