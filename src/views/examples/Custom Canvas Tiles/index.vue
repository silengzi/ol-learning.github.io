<template>
  <h4 id="title">{{title}}</h4>

  <div id="map" class="map"></div>

  <p>The black grid tiles are generated on the client with an HTML5 canvas. The displayed TMS tile coordinates are produced using a custom template for TMS, the vector tile source's 512 pixel tile grid and the <code>zDirection</code> setting for vector tiles. Notice how the country polygons can be split between tiles and vector labels may appear in each tile.</p>

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

import MVT from 'ol/format/MVT.js';
import Map from 'ol/Map.js';
import TileDebug from 'ol/source/TileDebug.js';
import TileLayer from 'ol/layer/Tile.js';
import VectorTileLayer from 'ol/layer/VectorTile.js';
import VectorTileSource from 'ol/source/VectorTile.js';
import View from 'ol/View.js';
import {Fill, Stroke, Style, Text} from 'ol/style.js';

onMounted(() => {

  const style = new Style({
    fill: new Fill({
      color: 'rgba(255, 255, 255, 0.6)',
    }),
    stroke: new Stroke({
      color: '#319FD3',
      width: 1,
    }),
    text: new Text({
      font: '12px Calibri,sans-serif',
      fill: new Fill({
        color: '#fff',
      }),
      stroke: new Stroke({
        color: '#fff',
        width: 3,
      }),
    }),
  });

  const vtLayer = new VectorTileLayer({
    //  标注去重
    declutter: true,
    source: new VectorTileSource({
      maxZoom: 15,
      format: new MVT(),
      url:
        'https://ahocevar.com/geoserver/gwc/service/tms/1.0.0/' +
        'ne:ne_10m_admin_0_countries@EPSG%3A900913@pbf/{z}/{x}/{-y}.pbf',
    }),
    style: function (feature) {
      style.getText().setText(feature.get('name'));
      return style;
    },
  });

  const debugLayer = new TileLayer({
    source: new TileDebug({
      template: 'z:{z} x:{x} y:{-y}',
      projection: vtLayer.getSource().getProjection(),
      tileGrid: vtLayer.getSource().getTileGrid(),
      zDirection: 1,
    }),
  });

  const map = new Map({
    layers: [vtLayer, debugLayer],
    target: 'map',
    view: new View({
      center: [0, 6000000],
      zoom: 4,
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
