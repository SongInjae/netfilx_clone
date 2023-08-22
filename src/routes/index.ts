import { createRouter, createWebHistory } from 'vue-router'
import SearchList from '~/components/SearchList.vue'
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
          component: SearchList,
        },
      ],
    },
    {
      path: '/:notFound(.*)',
      component: NotFoundPage,
    },
  ],
})
