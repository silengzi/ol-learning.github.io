<template>
  <h4 id="title">{{title}}</h4>
  
  <div id="map" class="map"></div>
  <div><label><input type="checkbox" id="rotateWithView"> Rotate with view</label></div>

  <p>This example demonstrates how you can customize the overviewmap control using its supported options as well as defining custom CSS. You can also rotate the map using the shift key to see how the overview map reacts.</p>

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
import {
  DragRotateAndZoom,
  defaults as defaultInteractions,
} from 'ol/interaction.js';
import {OverviewMap, defaults as defaultControls} from 'ol/control.js';

onMounted(() => {

  const rotateWithView = document.getElementById('rotateWithView');

  const overviewMapControl = new OverviewMap({
    // see in overviewmap-custom.html to see the custom CSS used
    className: 'ol-overviewmap ol-custom-overviewmap',
    layers: [
      new TileLayer({
        source: new OSM({
          'url':
            'https://{a-c}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png' +
            '?apikey=eec3b356356248ab93334fd724ccb404',
            // '?apikey=Your API key from https://www.thunderforest.com/docs/apikeys/ here',
        }),
      }),
    ],
    collapseLabel: '»',
    label: '«',
    collapsed: false,
  });

  rotateWithView.addEventListener('change', function () {
    overviewMapControl.setRotateWithView(this.checked);
  });

  const map = new Map({
    controls: defaultControls().extend([overviewMapControl]),
    interactions: defaultInteractions().extend([new DragRotateAndZoom()]),
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
    ],
    target: 'map',
    view: new View({
      center: [500000, 6000000],
      zoom: 7,
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

  .map :deep(.ol-custom-overviewmap),
  .map :deep(.ol-custom-overviewmap).ol-uncollapsible {
    bottom: auto;
    left: auto;
    right: 0;
    top: 0;
  }

  .map :deep(.ol-custom-overviewmap):not(.ol-collapsed)  {
    border: 1px solid black;
  }

  .map :deep(.ol-custom-overviewmap) .ol-overviewmap-map {
    border: none;
    width: 300px;
  }

  .map :deep(.ol-custom-overviewmap) .ol-overviewmap-box {
    border: 2px solid red;
  }

  .map :deep(.ol-custom-overviewmap):not(.ol-collapsed) button{
    bottom: auto;
    left: auto;
    right: 1px;
    top: 1px;
  }

  .map .ol-rotate {
    top: 170px;
    right: 0;
  }
</style>
