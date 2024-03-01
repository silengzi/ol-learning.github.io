<template>
  <h4 id="title">{{title}}</h4>
  
  <div id="map" class="map"></div>

  <p>In this example two different styles are created for the polygons:</p>
  <ul>
    <li>The first style is for the polygons themselves.</li>
    <li>The second style is to draw the vertices of the polygons.</li>
  </ul>

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

import GeoJSON from 'ol/format/GeoJSON.js';
import Map from 'ol/Map.js';
import MultiPoint from 'ol/geom/MultiPoint.js';
import VectorLayer from 'ol/layer/Vector.js';
import VectorSource from 'ol/source/Vector.js';
import View from 'ol/View.js';
import {Circle as CircleStyle, Fill, Stroke, Style} from 'ol/style.js';

onMounted(() => {

  const styles = [
    /* We are using two different styles for the polygons:
    *  - The first style is for the polygons themselves.
    *  - The second style is to draw the vertices of the polygons.
    *    In a custom `geometry` function the vertices of a polygon are
    *    returned as `MultiPoint` geometry, which will be used to render
    *    the style.
    */
    new Style({
      stroke: new Stroke({
        color: 'blue',
        width: 3,
      }),
      fill: new Fill({
        color: 'rgba(0, 0, 255, 0.1)',
      }),
    }),
    new Style({
      image: new CircleStyle({
        radius: 5,
        fill: new Fill({
          color: 'orange',
        }),
      }),
      geometry: function (feature) {
        // return the coordinates of the first ring of the polygon
        const coordinates = feature.getGeometry().getCoordinates()[0];
        return new MultiPoint(coordinates);
      },
    }), 
  ];

  const geojsonObject = {
    'type': 'FeatureCollection',
    'crs': {
      'type': 'name',
      'properties': {
        'name': 'EPSG:3857',
      },
    },
    'features': [
      {
        'type': 'Feature',
        'geometry': {
          'type': 'Polygon',
          'coordinates': [
            [
              [-5e6, 6e6],
              [-5e6, 8e6],
              [-3e6, 8e6],
              [-3e6, 6e6],
              [-5e6, 6e6],
            ],
          ],
        },
      },
      {
        'type': 'Feature',
        'geometry': {
          'type': 'Polygon',
          'coordinates': [
            [
              [-2e6, 6e6],
              [-2e6, 8e6],
              [0, 8e6],
              [0, 6e6],
              [-2e6, 6e6],
            ],
          ],
        },
      },
      {
        'type': 'Feature',
        'geometry': {
          'type': 'Polygon',
          'coordinates': [
            [
              [1e6, 6e6],
              [1e6, 8e6],
              [3e6, 8e6],
              [3e6, 6e6],
              [1e6, 6e6],
            ],
          ],
        },
      },
      {
        'type': 'Feature',
        'geometry': {
          'type': 'Polygon',
          'coordinates': [
            [
              [-2e6, -1e6],
              [-1e6, 1e6],
              [0, -1e6],
              [-2e6, -1e6],
            ],
          ],
        },
      },
    ],
  };

  const source = new VectorSource({
    features: new GeoJSON().readFeatures(geojsonObject),
  });

  const layer = new VectorLayer({
    source: source,
    style: styles,
  });

  const map = new Map({
    layers: [layer],
    target: 'map',
    view: new View({
      center: [0, 3000000],
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
