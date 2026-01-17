import { createRouter, createWebHistory } from 'vue-router'

const HomeView = () => import('../views/HomeView.vue')
const AddMovieView = () => import('../views/AddMovieView.vue')
const NotFoundView = () => import('../views/NotFoundView.vue')

//routing i bookmarkable
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/addmovie',
      name: 'addmovie',
      component: AddMovieView
    },
//dinamičko usmjeravanje (404 catch all)
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundView
    }
  ]
})

export default router
