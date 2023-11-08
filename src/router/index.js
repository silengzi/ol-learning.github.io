import { defineAsyncComponent } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import examplesRoutes from "./example-routes"

const Layout = defineAsyncComponent(() => import('@/components/layout/Layout.vue'))
const Home = defineAsyncComponent(() => import('@/views/Home.vue'))
const ExampleList = defineAsyncComponent(() => import('@/views/ExampleList.vue'))

const routes = [
  {
    path: '/',
    component: Layout,  // 网站的整体布局
    children: [
      {
        path: '',
        redirect: '/home',   // 重定向至首页
      },
      {
        path: 'home',
        name: "Home",
        component: Home
      },
      {
        path: 'example',
        name: 'ExampleList',
        component: ExampleList
      },
      {
        path: 'examples',
        children: examplesRoutes  // 
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
