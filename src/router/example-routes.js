import { defineAsyncComponent } from "vue";

const AccessibleMap = defineAsyncComponent(() => import('@/views/examples/Accessible Map/index.vue'))
const AdvancedMapboxVectorTiles = defineAsyncComponent(() => import('@/views/examples/Advanced Mapbox Vector Tiles/index.vue'))
const AdvancedViewPositioning = defineAsyncComponent(() => import('@/views/examples/Advanced View Positioning/index.vue'))
const AnimatedGIF = defineAsyncComponent(() => import('@/views/examples/Animated GIF/index.vue'))
const ArcGISRESTFeatureService = defineAsyncComponent(() => import('@/views/examples/ArcGIS REST Feature Service/index.vue'))

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
  {
    path: 'animated-gIF',
    name: 'AnimatedGIF',
    component: AnimatedGIF
  },
  {
    path: 'ArcGIS-REST-feature-service',
    name: 'ArcGISRESTFeatureService',
    component: ArcGISRESTFeatureService
  },
]

export default routes;
