import { createRouter, createWebHistory } from 'vue-router'

const Welcome = () => import('../Welcome.vue')
const Todo = () => import('../Todo')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Todo
  },
  {
    path: '/todo',
    name: 'Todo',
    components: Welcome
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'Home' }
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router
