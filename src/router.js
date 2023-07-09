import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import Hello from '@/components/HelloWorld.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/', component: () => Home,
    },
    {
      path: '/helloworld',
      component: () => Hello,
    },
  ],
})