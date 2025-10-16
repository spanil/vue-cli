import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Jobsview from '../views/Jobs/JobsView.vue'
import JobDetailsView from '@/views/Jobs/JobDetailsView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue'),
      component: AboutView
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: Jobsview
    },
    {
      path: '/jobs/:id',
      name: 'JobDetails',
      component: JobDetailsView,
      props: true
    },
    //redirect
    {
      path: '/all-jobs',
      redirect: '/jobs'
    },
    //catch all 404
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFoundView
    }
  ],
})

export default router
