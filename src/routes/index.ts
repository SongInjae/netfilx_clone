import { createRouter, createWebHistory } from 'vue-router'
import AppContent from '~/components/AppContent.vue'
import MainPage from '~/routes/MainPage.vue'
import NotFoundPage from '~/routes/NotFoundPage.vue'

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
