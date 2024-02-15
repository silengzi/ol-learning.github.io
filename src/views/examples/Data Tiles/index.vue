<template>
  <h4 id="title">{{title}}</h4>
  
  <div id="map" class="map"></div>

  <p>This example generates RGBA tile data from scratch.</p>

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

import DataTile from 'ol/source/DataTile.js';
import Map from 'ol/Map.js';
import TileLayer from 'ol/layer/WebGLTile.js';
import View from 'ol/View.js';

onMounted(() => {

  const size = 256;

  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;

  const context = canvas.getContext('2d');
  context.strokeStyle = 'white';
  context.textAlign = 'center';
  context.font = '24px sans-serif';
  const lineHeight = 30;

  const map = new Map({
    target: 'map',
    layers: [
      new TileLayer({
        source: new DataTile({
          loader: function (z, x, y) {
            const half = size / 2;
            context.clearRect(0, 0, size, size);
            context.fillStyle = 'rgba(100, 100, 100, 0.5)';
            context.fillRect(0, 0, size, size);
            context.fillStyle = 'black';
            context.fillText(`z: ${z}`, half, half - lineHeight);
            context.fillText(`x: ${x}`, half, half);
            context.fillText(`y: ${y}`, half, half + lineHeight);
            context.strokeRect(0, 0, size, size);
            const data = context.getImageData(0, 0, size, size).data;
            // converting to Uint8Array for increased browser compatibility
            return new Uint8Array(data.buffer);
          },
          // disable opacity transition to avoid overlapping labels during tile loading
          transition: 0,
        }),
      }),
    ],
    view: new View({
      center: [0, 0],
      zoom: 0,
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
