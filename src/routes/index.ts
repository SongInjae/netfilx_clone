import { createRouter, createWebHistory } from 'vue-router'
import MainPage from './MainPage.vue'
import AppContent from '../components/AppContent.vue'
import NotFoundPage from './NotFoundPage.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: MainPage,
      children: [
        {
          path: '/search',
          component: AppContent,
        },
      ],
    },
    {
      path: '/:notFound(.*)',
      component: NotFoundPage,
    },
  ],
})
