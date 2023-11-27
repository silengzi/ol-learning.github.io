<template>
  <h4 id="title">{{title}}</h4>

  <div id="map" class="map"></div>

  <p>Tiled data from a Cloud Optimized GeoTIFF (COG) can be rendered as a layer. In this example, a single 3-band GeoTIFF is used to render RGB data from a Blob.</p>

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

import GeoTIFF from 'ol/source/GeoTIFF.js';
import Map from 'ol/Map.js';
import TileLayer from 'ol/layer/WebGLTile.js';

onMounted(() => {

  fetch('https://openlayers.org/en/latest/examples/data/example.tif')
    .then((response) => response.blob())
    .then((blob) => {
      const source = new GeoTIFF({
        sources: [
          {
            blob: blob,
          },
        ],
      });

      const map = new Map({
        target: 'map',
        layers: [
          new TileLayer({
            source: source,
          }),
        ],
        view: source.getView().then((viewConfig) => {
          viewConfig.showFullExtent = true;
          return viewConfig;
        }),
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
