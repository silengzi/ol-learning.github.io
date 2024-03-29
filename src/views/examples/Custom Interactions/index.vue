<template>
  <h4 id="title">{{title}}</h4>
  
  <div id="map" class="map"></div>

  <p>This example demonstrates creating a custom interaction by subclassing ol/interaction/Pointer. Note that the built in interaction <code>ol/interaction/Translate</code> might be a better option for moving features.</p>

  <h5 class="source-heading">html</h5>
  <pre><code class="language-html">{{"  " + html_str.trim()}}</code></pre>
  <h5 class="source-heading">css</h5>
  <pre><code class="language-css">{{"  " + css_str.trim()}}</code></pre>
  <h5 class="source-heading">js</h5>
  <pre><code class="language-js">{{"  " + js_str.trim()}}</code></pre>
  <h5 class="source-heading">package.json</h5>
  <pre><code class="language-json">{{"  " + package_str.trim()}}</code></pre>
</template>

<script setup>
import { onMounted } from "vue";
import { title, html_str, css_str, js_str, package_str } from "./code"

import Feature from 'ol/Feature.js';
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import {LineString, Point, Polygon} from 'ol/geom.js';
import {OGCMapTile, Vector as VectorSource} from 'ol/source.js';
import {
  Pointer as PointerInteraction,
  defaults as defaultInteractions,
} from 'ol/interaction.js';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';

onMounted(() => {

  class Drag extends PointerInteraction {
    constructor() {
      super({
        handleDownEvent: handleDownEvent,
        handleDragEvent: handleDragEvent,
        handleMoveEvent: handleMoveEvent,
        handleUpEvent: handleUpEvent,
      });

      /**
       * @type {import("../src/ol/coordinate.js").Coordinate}
       * @private
       */
      this.coordinate_ = null;

      /**
       * @type {string|undefined}
       * @private
       */
      this.cursor_ = 'pointer';

      /**
       * @type {Feature}
       * @private
       */
      this.feature_ = null;

      /**
       * @type {string|undefined}
       * @private
       */
      this.previousCursor_ = undefined;
    }
  }

  /**
   * @param {import("../src/ol/MapBrowserEvent.js").default} evt Map browser event.
   * @return {boolean} `true` to start the drag sequence.
   */
  function handleDownEvent(evt) {
    const map = evt.map;

    const feature = map.forEachFeatureAtPixel(evt.pixel, function (feature) {
      return feature;
    });

    if (feature) {
      this.coordinate_ = evt.coordinate;
      this.feature_ = feature;
    }

    return !!feature;
  }

  /**
   * @param {import("../src/ol/MapBrowserEvent.js").default} evt Map browser event.
   */
  function handleDragEvent(evt) {
    const deltaX = evt.coordinate[0] - this.coordinate_[0];
    const deltaY = evt.coordinate[1] - this.coordinate_[1];

    const geometry = this.feature_.getGeometry();
    geometry.translate(deltaX, deltaY);

    this.coordinate_[0] = evt.coordinate[0];
    this.coordinate_[1] = evt.coordinate[1];
  }

  /**
   * @param {import("../src/ol/MapBrowserEvent.js").default} evt Event.
   */
  function handleMoveEvent(evt) {
    if (this.cursor_) {
      const map = evt.map;
      const feature = map.forEachFeatureAtPixel(evt.pixel, function (feature) {
        return feature;
      });
      const element = evt.map.getTargetElement();
      if (feature) {
        if (element.style.cursor != this.cursor_) {
          this.previousCursor_ = element.style.cursor;
          element.style.cursor = this.cursor_;
        }
      } else if (this.previousCursor_ !== undefined) {
        element.style.cursor = this.previousCursor_;
        this.previousCursor_ = undefined;
      }
    }
  }

  /**
   * @return {boolean} `false` to stop the drag sequence.
   */
  function handleUpEvent() {
    this.coordinate_ = null;
    this.feature_ = null;
    return false;
  }

  const pointFeature = new Feature(new Point([0, 0]));

  const lineFeature = new Feature(
    new LineString([
      [-1e7, 1e6],
      [-1e6, 3e6],
    ])
  );

  const polygonFeature = new Feature(
    new Polygon([
      [
        [-3e6, -1e6],
        [-3e6, 1e6],
        [-1e6, 1e6],
        [-1e6, -1e6],
        [-3e6, -1e6],
      ],
    ])
  );

  const map = new Map({
    interactions: defaultInteractions().extend([new Drag()]),
    layers: [
      new TileLayer({
        source: new OGCMapTile({
          url: 'https://maps.gnosis.earth/ogcapi/collections/NaturalEarth:raster:HYP_HR_SR_OB_DR/map/tiles/WebMercatorQuad',
          crossOrigin: '',
        }),
      }),
      new VectorLayer({
        source: new VectorSource({
          features: [pointFeature, lineFeature, polygonFeature],
        }),
        style: {
          'icon-src': 'https://openlayers.org/en/latest/examples/data/icon.png',
          'icon-opacity': 0.95,
          'icon-anchor': [0.5, 46],
          //  'fraction' 表示图标定位点的水平单位是相对于图标自身宽度的比例
          'icon-anchor-x-units': 'fraction',
          'icon-anchor-y-units': 'pixels',
          'stroke-width': 3,
          'stroke-color': [255, 0, 0, 1],
          'fill-color': [0, 0, 255, 0.6],
        },
      }),
    ],
    target: 'map',
    view: new View({
      center: [0, 0],
      zoom: 2,
    }),
  });

  // 代码块高亮
  Prism.highlightAll();
});

</script>

<style scoped>
  .map {
    width: 100%;
    height: 400px;
  }
</style>
