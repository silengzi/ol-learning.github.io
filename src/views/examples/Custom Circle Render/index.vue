<template>
  <h4 id="title">{{title}}</h4>

  <div id="map" class="map"></div>

  <p>This example demonstrates the use of 'ol/style/Style' render option function to render circle feature.</p>

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

import Feature from 'ol/Feature.js';
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import {Circle} from 'ol/geom.js';
import {OSM, Vector as VectorSource} from 'ol/source.js';
import {Style} from 'ol/style.js';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';

onMounted(() => {

  const circleFeature = new Feature({
    geometry: new Circle([12127398.797692968, 4063894.123105166], 50),
  });
  circleFeature.setStyle(
    new Style({
      renderer(coordinates, state) {
        //  表示圆形的中心点和边界点
        const [[x, y], [x1, y1]] = coordinates;
        const ctx = state.context;
        const dx = x1 - x;
        const dy = y1 - y;
        const radius = Math.sqrt(dx * dx + dy * dy);

        //  内径
        const innerRadius = 0;
        //  外径
        const outerRadius = radius * 1.4;

        //  创建了一个径向渐变
        const gradient = ctx.createRadialGradient(
          x,
          y,
          innerRadius,
          x,
          y,
          outerRadius
        );
        gradient.addColorStop(0, 'rgba(255,0,0,0)');
        gradient.addColorStop(0.6, 'rgba(255,0,0,0.2)');
        gradient.addColorStop(1, 'rgba(255,0,0,0.8)');
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI, true);
        ctx.fillStyle = gradient;
        ctx.fill();

        ctx.arc(x, y, radius, 0, 2 * Math.PI, true);
        ctx.strokeStyle = 'rgba(255,0,0,1)';
        ctx.stroke();
      },
    })
  );

  new Map({
    layers: [
      new TileLayer({
        source: new OSM(),
        visible: true,
      }),
      new VectorLayer({
        source: new VectorSource({
          features: [circleFeature],
        }),
      }),
    ],
    target: 'map',
    view: new View({
      center: [12127398.797692968, 4063894.123105166],
      zoom: 19,
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
