import { defineAsyncComponent } from "vue";
const AccessibleMap = defineAsyncComponent(() => import('@/views/examples/Accessible Map/index.vue'))
const AdvancedMapboxVectorTiles = defineAsyncComponent(() => import('@/views/examples/Advanced Mapbox Vector Tiles/index.vue'))
const AdvancedViewPositioning = defineAsyncComponent(() => import('@/views/examples/Advanced View Positioning/index.vue'))

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
  {
    path: 'advanced-view-positioning',
    name: 'AdvancedViewPositioning',
    component: AdvancedViewPositioning
  },
]

export default routes;
