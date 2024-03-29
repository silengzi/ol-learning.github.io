<template>
  <h4 id="title">{{title}}</h4>
  
  <div id="map" class="map"></div>

  <p>Example of dynamic data.</p>

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

import Map from 'ol/Map.js';
import OSM from 'ol/source/OSM.js';
import TileLayer from 'ol/layer/Tile.js';
import View from 'ol/View.js';
import {Circle as CircleStyle, Fill, Stroke, Style} from 'ol/style.js';
import {MultiPoint, Point} from 'ol/geom.js';
import {getVectorContext} from 'ol/render.js';

onMounted(() => {

  const tileLayer = new TileLayer({
    source: new OSM(),
  });

  const map = new Map({
    layers: [tileLayer],
    target: 'map',
    view: new View({
      center: [0, 0],
      zoom: 2,
    }),
  });

  const imageStyle = new Style({
    image: new CircleStyle({
      radius: 5,
      fill: new Fill({color: 'yellow'}),
      stroke: new Stroke({color: 'red', width: 1}),
    }),
  });

  const headInnerImageStyle = new Style({
    image: new CircleStyle({
      radius: 2,
      fill: new Fill({color: 'blue'}),
    }),
  });

  const headOuterImageStyle = new Style({
    image: new CircleStyle({
      radius: 5,
      fill: new Fill({color: 'black'}),
    }),
  });

  const n = 200;
  const omegaTheta = 30000; // Rotation period in ms
  const R = 7e6;
  const r = 2e6;
  const p = 2e6;
  tileLayer.on('postrender', function (event) {
    const vectorContext = getVectorContext(event);
    const frameState = event.frameState;
    const theta = (2 * Math.PI * frameState.time) / omegaTheta;
    const coordinates = [];
    let i;
    for (i = 0; i < n; ++i) {
      const t = theta + (2 * Math.PI * i) / n;
      const x = (R + r) * Math.cos(t) + p * Math.cos(((R + r) * t) / r);
      const y = (R + r) * Math.sin(t) + p * Math.sin(((R + r) * t) / r);
      coordinates.push([x, y]);
    }
    vectorContext.setStyle(imageStyle);
    vectorContext.drawGeometry(new MultiPoint(coordinates));

    const headPoint = new Point(coordinates[coordinates.length - 1]);

    vectorContext.setStyle(headOuterImageStyle);
    vectorContext.drawGeometry(headPoint);

    vectorContext.setStyle(headInnerImageStyle);
    vectorContext.drawGeometry(headPoint);

    map.render();
  });
  map.render();

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
