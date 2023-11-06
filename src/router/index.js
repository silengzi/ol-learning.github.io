import { createRouter,createWebHashHistory } from "vue-router";
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Ol from '../views/Ol.vue'

const routes = [
  {
    path:'/',
    name:Home,
    redirect: '/home'
  },
  {
    path:'/home',
    name:Home,
    component:Home
  },
  {
    path:'/about',
    component:About
  },
  {
    path:'/ol',
    component:Ol
  }
]

const router = createRouter({
  history:createWebHashHistory(),
  routes
})

export default router
