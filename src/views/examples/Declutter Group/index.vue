<template>
  <h4 id="title">{{title}}</h4>
  
  <div id="map" class="map"></div>

  <p>This shows how to specify when vector(tile) layers are decluttered if declutter is set to true. By default, all decluttering will happen after all layers have been rendered. Calling the map's flushDeclutter() method makes decluttering occur immediately. This is useful for layers that need to be entirely rendered above the declutter items of layers lower in the layer stack. In the example, the blue square overlay displays above the decluttered vector symbols and labels.</p>

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

import {Feature, Map, View} from 'ol/index.js';
import {Group as LayerGroup, Vector as VectorLayer} from 'ol/layer.js';
import {Vector as VectorSource} from 'ol/source.js';
import {apply} from 'ol-mapbox-style';
import {fromExtent} from 'ol/geom/Polygon.js';
import {getCenter} from 'ol/extent.js';

onMounted(() => {

  const square = [-12e6, 3.5e6, -10e6, 5.5e6];
  const overlay = new VectorLayer({
    source: new VectorSource({
      features: [new Feature(fromExtent(square))],
    }),
    style: {
      'stroke-color': 'rgba(180, 180, 255, 1)',
      'stroke-width': 1,
      'fill-color': 'rgba(200, 200, 255, 0.85)',
    },
  });

  const layer = new LayerGroup();
  apply(
    layer,
    // 'https://api.maptiler.com/maps/topo-v2/style.json?key=Get your own API key at https://www.maptiler.com/cloud/'
    'https://api.maptiler.com/maps/topo-v2/style.json?key=UvzNAwhugDuwndyxsHmE'
  );

  const map = new Map({
    target: 'map',
    view: new View({
      center: getCenter(square),
      zoom: 4,
    }),
    layers: [layer, overlay],
  });

  overlay.on('prerender', () => map.flushDeclutterItems());

  // 代码块高亮
  Prism.highlightAll();
});

</script>

<style scoped>
  .map {
    width: 100%;
    height: 400px;
  }
  .map .ol-rotate {
    left: .5em;
    bottom: .5em;
    top: auto;
    right: auto;
  }
  .map:-webkit-full-screen {
    height: 100%;
    margin: 0;
  }
  .map:fullscreen {
    height: 100%;
  }
</style>
