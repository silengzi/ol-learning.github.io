<template>
  <h4 id="title">{{title}}</h4>
  
  <div id="map" class="map"></div>

  <p>This example shows how to customize the buttons tooltips with Bootstrap. For the tooltips to work in fullscreen mode, set the container property to a selector that matches the map target.</p>

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
import "./utils"

import Map from 'ol/Map.js';
import OSM from 'ol/source/OSM.js';
import TileLayer from 'ol/layer/Tile.js';
import View from 'ol/View.js';

onMounted(() => {

  const map = new Map({
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
    ],
    target: 'map',
    view: new View({
      center: [-8730000, 5930000],
      rotation: Math.PI / 5,
      zoom: 8,
    }),
  });

  document
    .querySelectorAll('.ol-zoom-in, .ol-zoom-out, .ol-rotate-reset')
    .forEach(function (el) {
      new bootstrap.Tooltip(el, {
        container: '#map',
      });
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
<style>
@import url(./bootstrap.css);
</style>
