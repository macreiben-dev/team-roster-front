import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserProfile from '@/components/UserProfile.vue'
import LoginView from '@/views/LoginInView.vue'
import CreateTeamView from '@/views/CreateTeamView.vue'

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
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: UserProfile
    },
    {
      path: '/loginin',
      name: 'loginin',
      component: LoginView
    },
    {
      path: '/teams/create',
      name: 'create-team',
      component: CreateTeamView
    }
  ]
})

export default router
