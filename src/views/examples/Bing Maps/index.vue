<template>
  <h4 id="title">{{title}}</h4>

  <div id="map" class="map"></div>
  <select id="layer-select">
    <option value="Aerial">Aerial</option>
    <option value="AerialWithLabelsOnDemand" selected>Aerial with labels</option>
    <option value="RoadOnDemand">Road</option>
    <option value="CanvasDark">Road dark</option>
    <option value="OrdnanceSurvey">Ordnance Survey</option>
  </select>

  <p>When the Bing Maps tile service doesn't have tiles for a given resolution and region it returns "placeholder" tiles by default for `Aerial` and `OrdnanceSurvey' styles. If you want OpenLayers to display stretched tiles in place of "placeholder" tiles at zoom levels where Bing Maps does not have tiles available then set <code>placeholderTiles</code> to <code>false</code> in the options passed to <code>ol/source/BingMaps</code>.</p>

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

import BingMaps from 'ol/source/BingMaps.js';
import Map from 'ol/Map.js';
import TileLayer from 'ol/layer/Tile.js';
import View from 'ol/View.js';

onMounted(() => {

  const styles = [
    'RoadOnDemand',
    'Aerial',
    'AerialWithLabelsOnDemand',
    'CanvasDark',
    'OrdnanceSurvey',
  ];
  const layers = [];
  let i, ii;
  for (i = 0, ii = styles.length; i < ii; ++i) {
    layers.push(
      new TileLayer({
        //  设置图层初始时不可见
        visible: false,
        //  指定图层在地图可见区域之外也进行预加载，这可以提高用户在移动或缩放地图时的加载性能
        preload: Infinity,
        source: new BingMaps({
          // key: 'Your Bing Maps Key from https://www.bingmapsportal.com/ here',
          key: 'At0AC5clqqASpeFYI62kMtfRYAlAWKodmuMnyQj9ZzR-F_qHEMeIQALDng0tH7ML',
          imagerySet: styles[i],
          // placeholderTiles: false, // Optional. Prevents showing of BingMaps placeholder tiles
        }),
      })
    );
  }
  const map = new Map({
    layers: layers,
    target: 'map',
    view: new View({
      center: [-6655.5402445057125, 6709968.258934638],
      zoom: 13,
    }),
  });

  const select = document.getElementById('layer-select');
  function onChange() {
    const style = select.value;
    for (let i = 0, ii = layers.length; i < ii; ++i) {
      layers[i].setVisible(styles[i] === style);
    }
  }
  select.addEventListener('change', onChange);
  onChange();

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
