import { createRouter, createWebHistory } from 'vue-router'

const HomeView = () => import('../views/HomeView.vue')
const AddMovieView = () => import('../views/AddMovieView.vue')
//const WatchDetailView = () => import('../views/WatchDetailView.vue')
const NotFoundView = () => import('../views/NotFoundView.vue')

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
//    {
//      path: '/watchlist/:id',
//      name: 'watch-detail',
//      component: WatchDetailView,
//      props: true
//    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundView
    }
  ]
})

export default router
