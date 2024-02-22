import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/ChronometreView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/chronometre',
      name: 'chronometre',
      meta: { pos: 1 },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ChronometreView.vue')
    },
    {
      path: '/intervalle',
      name: 'intervalle',
      meta: { pos: 2 },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/TimerView.vue')
      
    }
  ]
})

router.afterEach((to, from) => {
  to.meta.transition = to.meta.pos < from.meta.pos ? 'slide-right' : 'slide-left'
})

export default router
