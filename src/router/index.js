import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Descargar from '@/views/Descargar.vue'
import Contacto from '@/views/Contacto.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
    path: '/about',
    name: 'about',
    component: AboutView
    },
    {
      path: '/descargar',
      name: 'descagar',
      component: Descargar
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: Contacto
    }
  ]
})

export default router
