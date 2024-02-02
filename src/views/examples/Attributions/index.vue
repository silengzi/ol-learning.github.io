<template>
  <h4 id="title">{{title}}</h4>

  <div id="map" class="map"></div>

  <p>When the map gets too small because of a resize, the attribution will be collapsed. This is because the <code>collapsible</code> option is set to true if the width of the map gets smaller than 600 pixels.</p>

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
import {Attribution, defaults as defaultControls} from 'ol/control.js';

onMounted(() => {

  const attribution = new Attribution({
    collapsible: false,
  });
  const map = new Map({
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
    ],
    controls: defaultControls({attribution: false}).extend([attribution]),
    target: 'map',
    view: new View({
      center: [0, 0],
      zoom: 2,
    }),
  });

  function checkSize() {
    //  检查地图宽度是否小于600像素
    const small = map.getSize()[0] < 600;
    attribution.setCollapsible(small);
    attribution.setCollapsed(small);
  }

  window.addEventListener('resize', checkSize);
  checkSize();

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
