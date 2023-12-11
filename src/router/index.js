import { createRouter, createWebHistory } from 'vue-router';
import WelcomeView from '@/views/WelcomeView.vue';
import ListView from '@/views/ListView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: WelcomeView
    },
    {
      path: '/list',
      name: 'list',
      component: ListView,
    },
  ]
})

export default router
