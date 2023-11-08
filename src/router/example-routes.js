import { defineAsyncComponent } from "vue";
const AccessibleMap = defineAsyncComponent(() => import('@/views/examples/Accessible Map.vue'))
const SimpleMap = defineAsyncComponent(() => import('@/views/examples/Simple Map.vue'))

const routes = [
  {
    path: 'accessible-map',
    name: 'AccessibleMap',
    component: AccessibleMap
  },
  {
    path: 'simple-map',
    name: 'SimpleMap',
    component: SimpleMap
  },
]

export default routes;
