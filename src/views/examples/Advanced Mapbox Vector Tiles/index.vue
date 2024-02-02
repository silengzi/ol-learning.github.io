<template>
  <h4 id="title">{{title}}</h4>
  
  <div id="map" class="map"></div>

  <!-- <script src="https://openlayers.org/en/v8.1.0/examples/resources/mapbox-streets-v6-style.js"></script> -->

  <!-- <p>A vector tiles map which reuses the same source tiles for subsequent zoom levels to save bandwidth on mobile devices. Note: No map will be visible when the access token has expired.</p> -->
  <p>矢量瓦片映射，在后续缩放级别中重复使用相同的源瓦片，以节省移动设备上的带宽。注意：当访问令牌过期时，将看不到任何映射</p>

  <h5 class="source-heading">html</h5>
  <pre><code class="language-html">{{"  " + html_str.trim().toString()}}</code></pre>
  <h5 class="source-heading">css</h5>
  <pre><code class="language-css">{{"  " + css_str.trim().toString()}}</code></pre>
  <h5 class="source-heading">js</h5>
  <pre><code class="language-js">{{"  " + js_str.trim().toString()}}</code></pre>
  <h5 class="source-heading">package.json</h5>
  <pre><code class="language-json">{{"  " + package_str.trim()}}</code></pre>
</template>

<script setup>
import { onMounted } from "vue";
import { title, html_str, css_str, js_str, package_str } from "./code"
import { createMapboxStreetsV6Style } from "./utils"

import MVT from 'ol/format/MVT.js';
import Map from 'ol/Map.js';
import TileGrid from 'ol/tilegrid/TileGrid.js';
import VectorTileLayer from 'ol/layer/VectorTile.js';
import VectorTileSource from 'ol/source/VectorTile.js';
import View from 'ol/View.js';
import {Fill, Icon, Stroke, Style, Text} from 'ol/style.js';
import {get as getProjection} from 'ol/proj.js';

onMounted(() => {
  const key =
    // 'Your Mapbox access token from https://mapbox.com/ here';
    'pk.eyJ1Ijoic2lsZW5nIiwiYSI6ImNsb3N5Z2hjdDA0ZWQya2xxN2x5cGd3MTAifQ.Fe6VQp9WZpDi705C_vpBig';

  // Calculation of resolutions that match zoom levels 1, 3, 5, 7, 9, 11, 13, 15.

  //  存储地图的分辨率
  const resolutions = [];
  for (let i = 0; i <= 8; ++i) {
    resolutions.push(156543.03392804097 / Math.pow(2, i * 2));
  }
  // Calculation of tile urls for zoom levels 1, 3, 5, 7, 9, 11, 13, 15.

  //  这是一个用于生成瓦片 URL 的函数 tileUrlFunction。它使用 Mapbox 矢量地图服务的 URL 模板，替换其中的 {z}, {x}, {y}, {a-d} 和 {key} 字符串，以生成特定瓦片坐标对应的 URL。
  //  {z}, {x}, {y} 代表瓦片的缩放级别、水平坐标和垂直坐标。
  //  {a-d} 代表子域，它在 a、b、c、d 之间切换，以分散地图瓦片的请求。
  //  {key} 是访问 Mapbox 服务的访问令牌。
  function tileUrlFunction(tileCoord) {
    return (
      'https://{a-d}.tiles.mapbox.com/v4/mapbox.mapbox-streets-v6/' +
      '{z}/{x}/{y}.vector.pbf?access_token=' +
      key
    )
      .replace('{z}', String(tileCoord[0] * 2 - 1))
      .replace('{x}', String(tileCoord[1]))
      .replace('{y}', String(tileCoord[2]))
      .replace(
        '{a-d}',
        'abcd'.substr(((tileCoord[1] << tileCoord[0]) + tileCoord[2]) % 4, 1)
      );
        // console.log(tileCood)
  }

  const map = new Map({
    layers: [
      new VectorTileLayer({
        source: new VectorTileSource({
          attributions:
            '© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> ' +
            '© <a href="https://www.openstreetmap.org/copyright">' +
            'OpenStreetMap contributors</a>',
          format: new MVT(),
          tileGrid: new TileGrid({
            extent: getProjection('EPSG:3857').getExtent(),
            resolutions: resolutions,
            tileSize: 512,
          }),
          tileUrlFunction: tileUrlFunction,
        }),
        style: createMapboxStreetsV6Style(Style, Fill, Stroke, Icon, Text),
      }),
    ],
    target: 'map',
    view: new View({
      center: [0, 0],
      minZoom: 1,
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
.map {
  background: #f8f4f0;
}
</style>
