import { createRouter,createWebHashHistory } from "vue-router";
const Layout = () => import('@/components/layout/Layout.vue')
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Ol from '../views/Ol.vue'

const routes = [
  {
    path:'/',
    component: Layout,  // 网站的整体布局
    children: [
      {
        path: '',
        redirect: '/home',   // 重定向至首页
      },
      {
        path:'home',
        name:Home,
        component:Home
      },
      {
        path:'about',
        component:About
      },
      {
        path:'ol',
        component:Ol
      }
    ]
  }
]

const router = createRouter({
  history:createWebHashHistory(),
  routes
})

export default router
