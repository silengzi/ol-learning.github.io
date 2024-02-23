<template>
  <h4 id="title">{{title}}</h4>

  <div id="map" class="map"></div>

  <p>Example of using <code>fromEPSGCode()</code> to enable a COG to be rendered over another layer in a different projection.</p>
  <p>使用fromEPSGCode()使COG能够在不同投影中的另一层上渲染的示例</p>

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
import XYZ from 'ol/source/XYZ.js';
import proj4 from 'proj4';
import {
  epsgLookupMapTiler,
  fromEPSGCode,
  register,
  setEPSGLookup,
} from 'ol/proj/proj4.js';

onMounted(() => {

  // const key = 'Get your own API key at https://www.maptiler.com/cloud/';
  const key = 'WYPadsIvfisd0PUHFJ6K';
  const attributions =
    '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> ' +
    '<a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>';

  register(proj4);
  setEPSGLookup(epsgLookupMapTiler(key));

  const cogSource = new GeoTIFF({
    sources: [
      {
        url: 'https://mikenunn.net/data/MiniScale_(std_with_grid)_R23.tif',
        //  表示像素值为 0 的像素被视为无效或无数据的像素
        nodata: 0,
      },
    ],
  });

  cogSource.setAttributions(
    'Contains OS data © Crown Copyright and database right ' +
      new Date().getFullYear()
  );

  const map = new Map({
    target: 'map',
    layers: [
      new TileLayer({
        source: new XYZ({
          attributions: attributions,
          url:
            'https://api.maptiler.com/tiles/satellite/{z}/{x}/{y}.jpg?key=' + key,
          maxZoom: 20,
          //  确保浏览器在加载图像资源时不会受到 CORS 限制，适用于同源图像或已配置为允许跨域共享的图像
          crossOrigin: '',
        }),
        //  增加图像的亮度   曝光度
        style: {exposure: 0.2},
      }),
      new TileLayer({
        source: cogSource,
        opacity: 0.7,
        style: {gamma: 0.7},
      }),
    ],
    view: cogSource
      .getView()
      .then((viewConfig) =>
        fromEPSGCode(viewConfig.projection.getCode()).then(() => viewConfig)
      ),
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
