<template>
  <h4 id="title">{{title}}</h4>

  <div id="map" class="map"></div>

  <p>This map has a view that is constrained in an extent. This is done using the <code>extent</code> view option. Please note that specifying <code>constrainOnlyCenter: true</code> would only apply the extent restriction to the view center.</p>

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
import ZoomSlider from 'ol/control/ZoomSlider.js';
import {defaults as defaultControls} from 'ol/control.js';

onMounted(() => {

  const view = new View({
    center: [328627.563458, 5921296.662223],
    zoom: 8,
    extent: [-572513.341856, 5211017.966314, 916327.095083, 6636950.728974],
  });

  new Map({
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
    ],
    keyboardEventTarget: document,
    target: 'map',
    view: view,
    controls: defaultControls().extend([new ZoomSlider()]),
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
