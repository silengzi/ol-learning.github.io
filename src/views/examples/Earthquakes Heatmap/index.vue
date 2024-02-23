<template>
  <h4 id="title">{{title}}</h4>
  
  <div id="map" class="map"></div>
  <form>
    <label for="radius">radius size</label>
    <input id="radius" type="range" min="1" max="50" step="1" value="5"/>
    <label for="blur">blur size</label>
    <input id="blur" type="range" min="1" max="50" step="1" value="15"/>
  </form>

  <p>This example parses a KML file and renders the features as a ol/layer/Heatmap layer.</p>

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

import KML from 'ol/format/KML.js';
import Map from 'ol/Map.js';
import StadiaMaps from 'ol/source/StadiaMaps.js';
import VectorSource from 'ol/source/Vector.js';
import View from 'ol/View.js';
import {Heatmap as HeatmapLayer, Tile as TileLayer} from 'ol/layer.js';

onMounted(() => {

  const blur = document.getElementById('blur');
  const radius = document.getElementById('radius');

  const vector = new HeatmapLayer({
    source: new VectorSource({
      url: 'data/kml/2012_Earthquakes_Mag5.kml',
      format: new KML({
        extractStyles: false,
      }),
    }),
    blur: parseInt(blur.value, 10),
    radius: parseInt(radius.value, 10),
    weight: function (feature) {
      // 2012_Earthquakes_Mag5.kml stores the magnitude of each earthquake in a
      // standards-violating <magnitude> tag in each Placemark.  We extract it from
      // the Placemark's name instead.
      const name = feature.get('name');
      const magnitude = parseFloat(name.substr(2));
      return magnitude - 5;
    },
  });

  const raster = new TileLayer({
    source: new StadiaMaps({
      layer: 'stamen_toner',
    }),
  });

  new Map({
    layers: [raster, vector],
    target: 'map',
    view: new View({
      center: [0, 0],
      zoom: 2,
    }),
  });

  blur.addEventListener('input', function () {
    vector.setBlur(parseInt(blur.value, 10));
  });

  radius.addEventListener('input', function () {
    vector.setRadius(parseInt(radius.value, 10));
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
