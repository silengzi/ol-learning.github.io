import { defineAsyncComponent } from "vue";
import { createRouter,createWebHashHistory } from "vue-router";
const Layout = defineAsyncComponent(() => import('@/components/layout/Layout.vue'))
const Home = defineAsyncComponent(() => import('@/views/Home.vue'))
const About = defineAsyncComponent(() => import('@/views/About.vue'))
const Ol = defineAsyncComponent(() => import('@/views/Ol.vue'))

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
