import { defineAsyncComponent } from "vue";
const AccessibleMap = defineAsyncComponent(() => import('@/views/examples/Accessible Map/index.vue'))

const routes = [
  {
    path: 'accessiblemap',
    name: 'AccessibleMap',
    component: AccessibleMap
  },
]

export default routes;
