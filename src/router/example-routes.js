import { defineAsyncComponent } from "vue";

const AccessibleMap = defineAsyncComponent(() => import('@/views/examples/Accessible Map/index.vue'))
const AdvancedMapboxVectorTiles = defineAsyncComponent(() => import('@/views/examples/Advanced Mapbox Vector Tiles/index.vue'))
const AdvancedViewPositioning = defineAsyncComponent(() => import('@/views/examples/Advanced View Positioning/index.vue'))
const AnimatedGIF = defineAsyncComponent(() => import('@/views/examples/Animated GIF/index.vue'))
const ArcGISRESTFeatureService = defineAsyncComponent(() => import('@/views/examples/ArcGIS REST Feature Service/index.vue'))
const Attributions = defineAsyncComponent(() => import('@/views/examples/Attributions/index.vue'))
const BandContrastStretch = defineAsyncComponent(() => import('@/views/examples/Band Contrast Stretch/index.vue'))
const BingMaps = defineAsyncComponent(() => import('@/views/examples/Bing Maps/index.vue'))
const BoxSelection = defineAsyncComponent(() => import('@/views/examples/Box Selection/index.vue'))
const CanvasTiles = defineAsyncComponent(() => import('@/views/examples/Canvas Tiles/index.vue'))
const CartoDBSourceExample = defineAsyncComponent(() => import('@/views/examples/CartoDB source example/index.vue'))
const ChangeTileLayerStyle = defineAsyncComponent(() => import('@/views/examples/Change Tile Layer Style/index.vue'))
const CloudOptimizedGeoTIFFCOG = defineAsyncComponent(() => import('@/views/examples/Cloud Optimized GeoTIFF (COG)/index.vue'))
const CloudOptimizedGeoTIFFCOGfromaBlob = defineAsyncComponent(() => import('@/views/examples/Cloud Optimized GeoTIFF (COG) from a Blob/index.vue'))
const ClusteredFeatures = defineAsyncComponent(() => import('@/views/examples/Clustered Features/index.vue'))
const COGwithProjectionLookup = defineAsyncComponent(() => import('@/views/examples/COG with Projection Lookup/index.vue'))
const ColorManipulation = defineAsyncComponent(() => import('@/views/examples/Color Manipulation/index.vue'))
const ConstrainedExtent = defineAsyncComponent(() => import('@/views/examples/Constrained Extent/index.vue'))
const ConstrainedZoom = defineAsyncComponent(() => import('@/views/examples/Constrained Zoom/index.vue'))
const CustomAnimation = defineAsyncComponent(() => import('@/views/examples/Custom Animation/index.vue'))
const CustomCanvasTiles = defineAsyncComponent(() => import('@/views/examples/Custom Canvas Tiles/index.vue'))
const CustomCircleRender = defineAsyncComponent(() => import('@/views/examples/Custom Circle Render/index.vue'))
const CustomControls = defineAsyncComponent(() => import('@/views/examples/Custom Controls/index.vue'))
const CustomDragAndDropKMZ = defineAsyncComponent(() => import('@/views/examples/Custom Drag-and-Drop (KMZ)/index.vue'))
const CustomDragAndDropMVTPreview = defineAsyncComponent(() => import('@/views/examples/Custom Drag-and-Drop (MVT preview)/index.vue'))
const CustomHitDetectionRender = defineAsyncComponent(() => import('@/views/examples/Custom Hit Detection Render/index.vue'))
const CustomInteractions = defineAsyncComponent(() => import('@/views/examples/Custom Interactions/index.vue'))
const CustomMapElement = defineAsyncComponent(() => import('@/views/examples/Custom map element/index.vue'))
const CustomOverviewMap = defineAsyncComponent(() => import('@/views/examples/Custom Overview Map/index.vue'))
const CustomPolygonStyles = defineAsyncComponent(() => import('@/views/examples/Custom Polygon Styles/index.vue'))
const CustomTiledWMS = defineAsyncComponent(() => import('@/views/examples/Custom Tiled WMS/index.vue'))
const CustomTooltips = defineAsyncComponent(() => import('@/views/examples/Custom Tooltips/index.vue'))
const D3Integration = defineAsyncComponent(() => import('@/views/examples/d3 Integration/index.vue'))
const DataTiles = defineAsyncComponent(() => import('@/views/examples/Data Tiles/index.vue'))
const DeclutterGroup = defineAsyncComponent(() => import('@/views/examples/Declutter Group/index.vue'))
const DeviceOrientation = defineAsyncComponent(() => import('@/views/examples/Device Orientation/index.vue'))
const DoubleClickDragAndZoom = defineAsyncComponent(() => import('@/views/examples/Double click, Drag and Zoom/index.vue'))
const DragAndDrop = defineAsyncComponent(() => import('@/views/examples/Drag-and-Drop/index.vue'))
const DragAndDropImageVector = defineAsyncComponent(() => import('@/views/examples/Drag-and-Drop Image Vector/index.vue'))
const DragRotateAndZoom = defineAsyncComponent(() => import('@/views/examples/Drag, Rotate, and Zoom/index.vue'))
const DrawAndModifyFeatures = defineAsyncComponent(() => import('@/views/examples/Draw and Modify Features/index.vue'))
const DrawAndModifyGeodesicCircles = defineAsyncComponent(() => import('@/views/examples/Draw and Modify Geodesic Circles/index.vue'))
const DrawFeatures = defineAsyncComponent(() => import('@/views/examples/Draw Features/index.vue'))

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
  {
    path: 'attributions',
    name: 'Attributions',
    component: Attributions
  },
  {
    path: 'Band-Contrast-Stretch',
    name: 'BandContrastStretch',
    component: BandContrastStretch
  },
  {
    path: 'Bing-Maps',
    name: 'BingMaps',
    component: BingMaps
  },
  {
    path: 'Box-Selection',
    name: 'BoxSelection',
    component: BoxSelection
  },
  {
    path: 'Canvas-Tiles',
    name: 'CanvasTiles',
    component: CanvasTiles
  },
  {
    path: 'CartoDB-source-example',
    name: 'CartoDBSourceExample',
    component: CartoDBSourceExample
  },
  {
    path: 'Change-Tile-Layer-Style',
    name: 'ChangeTileLayerStyle',
    component: ChangeTileLayerStyle
  },
  {
    path: 'Cloud-Optimized-GeoTIFF-COG',
    name: 'CloudOptimizedGeoTIFFCOG',
    component: CloudOptimizedGeoTIFFCOG
  },
  {
    path: 'Cloud-Optimized-GeoTIFF-COG-from-a-Blob',
    name: 'CloudOptimizedGeoTIFFCOGfromaBlob',
    component: CloudOptimizedGeoTIFFCOGfromaBlob
  },
  {
    path: 'Clustered-Features',
    name: 'ClusteredFeatures',
    component: ClusteredFeatures
  },
  {
    path: 'COG-with-Projection-Lookup',
    name: 'COGwithProjectionLookup',
    component: COGwithProjectionLookup
  },
  {
    path: 'Color-Manipulation',
    name: 'ColorManipulation',
    component: ColorManipulation
  },
  {
    path: 'Constrained-Extent',
    name: 'ConstrainedExtent',
    component: ConstrainedExtent
  },
  {
    path: 'Constrained-Zoom',
    name: 'ConstrainedZoom',
    component: ConstrainedZoom
  },
  {
    path: 'Custom-Animation',
    name: 'CustomAnimation',
    component: CustomAnimation
  },
  {
    path: 'Custom-Canvas-Tiles',
    name: 'CustomCanvasTiles',
    component: CustomCanvasTiles
  },
  {
    path: 'Custom-Circle-Render',
    name: 'CustomCircleRender',
    component: CustomCircleRender
  },
  {
    path: 'Custom-Controls',
    name: 'CustomControls',
    component: CustomControls
  },
  {
    path: 'Custom-Drag-And-Drop-KMZ',
    name: 'CustomDragAndDropKMZ',
    component: CustomDragAndDropKMZ
  },
  {
    path: 'Custom-Drag-And-Drop-MVT-Preview',
    name: 'CustomDragAndDropMVTPreview',
    component: CustomDragAndDropMVTPreview
  },
  {
    path: 'Custom-Hit-Detection-Render',
    name: 'CustomHitDetectionRender',
    component: CustomHitDetectionRender
  },
  {
    path: 'Custom-Interactions',
    name: 'CustomInteractions',
    component: CustomInteractions
  },
  {
    path: 'Custom-Map-Element',
    name: 'CustomMapElement',
    component: CustomMapElement
  },
  {
    path: 'Custom-Overview-Map',
    name: 'CustomOverviewMap',
    component: CustomOverviewMap
  },
  {
    path: 'Custom-Polygon-Styles',
    name: 'CustomPolygonStyles',
    component: CustomPolygonStyles
  },
  {
    path: 'Custom-Tiled-WMS',
    name: 'CustomTiledWMS',
    component: CustomTiledWMS
  },
  {
    path: 'Custom-Tooltips',
    name: 'CustomTooltips',
    component: CustomTooltips
  },
  {
    path: 'D3-Integration',
    name: 'D3Integration',
    component: D3Integration
  },
  {
    path: 'Data-Tiles',
    name: 'DataTiles',
    component: DataTiles
  },
  {
    path: 'Declutter-Group',
    name: 'DeclutterGroup',
    component: DeclutterGroup
  },
  {
    path: 'Device-Orientation',
    name: 'DeviceOrientation',
    component: DeviceOrientation
  },
  {
    path: 'Double-Click-Drag-And-Zoom',
    name: 'DoubleClickDragAndZoom',
    component: DoubleClickDragAndZoom
  },
  {
    path: 'Drag-And-Drop',
    name: 'DragAndDrop',
    component: DragAndDrop
  },
  {
    path: 'Drag-And-Drop-Image-Vector',
    name: 'DragAndDropImageVector',
    component: DragAndDropImageVector
  },
  {
    path: 'Drag-Rotate-And-Zoom',
    name: 'DragRotateAndZoom',
    component: DragRotateAndZoom
  },
  {
    path: 'Draw-And-Modify-Features',
    name: 'DrawAndModifyFeatures',
    component: DrawAndModifyFeatures
  },
  {
    path: 'Draw-And-Modify-Geodesic-Circles',
    name: 'DrawAndModifyGeodesicCircles',
    component: DrawAndModifyGeodesicCircles
  },
  {
    path: 'Draw-Features',
    name: 'DrawFeatures',
    component: DrawFeatures
  },
]

export default routes;
