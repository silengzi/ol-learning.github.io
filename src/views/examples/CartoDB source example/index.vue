<template>
  <h4 id="title">{{title}}</h4>

  <div id="map" class="map"></div>
  <form class="row">
    <div class="col-auto">
      <div class="input-group">
        <label for="country-area" class="input-group-text">Show european countries larger than</label>
        <select id="country-area" class="form-select">
          <option value="0" default>0 ㎢</option>
          <option value="5000">5000 ㎢</option>
          <option value="10000">10000 ㎢</option>
          <option value="50000">50000 ㎢</option>
          <option value="100000">100000 ㎢</option>
        </select>
      </div>
    </div>
  </form>

  <p>A simple example with an anonymous cartodb map.</p>

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
import TileLayer from 'ol/layer/Tile.js';
import View from 'ol/View.js';
import {CartoDB, OSM} from 'ol/source.js';

onMounted(() => {

  //  该图层使用 CartoDB 类型，并且使用指定的 CartoCSS 样式来渲染地图
  const mapConfig = {
    'layers': [
      {
        'type': 'cartodb',
        'options': {
          'cartocss_version': '2.1.1',
          'cartocss': '#layer { polygon-fill: #F00; }',
        },
      },
    ],
  };

  function setArea(n) {
    mapConfig.layers[0].options.sql =
      'select * from european_countries_e where area > ' + n;
  }
  const areaSelect = document.getElementById('country-area');
  setArea(areaSelect.value);

  const cartoDBSource = new CartoDB({
    //  账户
    account: 'documentation',
    config: mapConfig,
  });

  areaSelect.addEventListener('change', function () {
    setArea(this.value);
    cartoDBSource.setConfig(mapConfig);
  });

  const map = new Map({
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
      new TileLayer({
        source: cartoDBSource,
      }),
    ],
    target: 'map',
    view: new View({
      center: [8500000, 8500000],
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
</style>
