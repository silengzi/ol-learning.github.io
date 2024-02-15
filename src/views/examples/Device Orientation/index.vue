<template>
  <h4 id="title">{{title}}</h4>
  
  <div id="map" class="map"></div>
  <p>
    <div>α : <code id="alpha"></code></div>
    <div>β : <code id="beta"></code></div>
    <div>γ : <code id="gamma"></code></div>
  </p>

  <p>This example shows how to track changes in device orientation. gyronorm.js library is used to access and normalize the events from the browser.</p>

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
import "./utils/GyroNorm"

import Map from 'ol/Map.js';
import OSM from 'ol/source/OSM.js';
import TileLayer from 'ol/layer/Tile.js';
import View from 'ol/View.js';
import {toRadians} from 'ol/math.js';

onMounted(() => {

  const view = new View({
    center: [0, 0],
    zoom: 2,
  });
  const map = new Map({
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
    ],
    target: 'map',
    view: view,
  });

  function el(id) {
    return document.getElementById(id);
  }

  const gn = new GyroNorm();

  gn.init().then(function () {
    gn.start(function (event) {
      const center = view.getCenter();
      const resolution = view.getResolution();
      const alpha = toRadians(event.do.alpha);
      const beta = toRadians(event.do.beta);
      const gamma = toRadians(event.do.gamma);

      el('alpha').innerText = alpha + ' [rad]';
      el('beta').innerText = beta + ' [rad]';
      el('gamma').innerText = gamma + ' [rad]';

      center[0] -= resolution * gamma * 25;
      center[1] += resolution * beta * 25;

      view.setCenter(center);
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
