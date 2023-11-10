import { defineAsyncComponent } from "vue";
const AccessibleMap = defineAsyncComponent(() => import('@/views/examples/Accessible Map/index.vue'))
const AdvancedMapboxVectorTiles = defineAsyncComponent(() => import('@/views/examples/Advanced Mapbox Vector Tiles/index.vue'))

const routes = [
  {
    path: 'accessible-map',
    name: 'AccessibleMap',
    component: AccessibleMap
  },
  {
    path: 'advanced-mapbox-vector-tiles',
    name: 'AdvancedMapboxVectorTiles',
    component: AdvancedMapboxVectorTiles
  },
]

export default routes;
