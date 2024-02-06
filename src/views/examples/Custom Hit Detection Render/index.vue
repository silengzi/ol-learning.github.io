<template>
  <h4 id="title">{{title}}</h4>
  
  <div id="map" class="map"></div>

  <p>This example demonstrates the use of 'ol/style/Style' hitDetectionRender option function in detecting if pointer is over a particular feature. Move pointer over the label for Columbus Circle feature and see that only label is used in hit detection.</p>

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
import {fromLonLat} from 'ol/proj.js';

onMounted(() => {
  const columbusCircleCoords = fromLonLat([-73.98189, 40.76805]);
  const labelTextStroke = 'rgba(120, 120, 120, 1)';
  const labelText = 'Columbus Circle';

  let pointerOverFeature = null;

  const renderLabelText = (ctx, x, y, stroke) => {
    ctx.fillStyle = 'rgba(255,0,0,1)';
    ctx.strokeStyle = stroke;
    ctx.lineWidth = 1;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = `bold 30px verdana`;
    ctx.filter = 'drop-shadow(7px 7px 2px #e81)';
    ctx.fillText(labelText, x, y);
    ctx.strokeText(labelText, x, y);
  };

  const circleFeature = new Feature({
    geometry: new Circle(columbusCircleCoords, 50),
  });

  circleFeature.set('label-color', labelTextStroke);

  circleFeature.setStyle(
    new Style({
      renderer(coordinates, state) {
        const [[x, y], [x1, y1]] = coordinates;
        const ctx = state.context;
        const dx = x1 - x;
        const dy = y1 - y;
        const radius = Math.sqrt(dx * dx + dy * dy);

        const innerRadius = 0;
        const outerRadius = radius * 1.4;

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
        ctx.strokeStyle = 'rgba(255,0,0,1)';
        ctx.stroke();

        renderLabelText(ctx, x, y, circleFeature.get('label-color'));
      },
      hitDetectionRenderer(coordinates, state) {
        const [x, y] = coordinates[0];
        const ctx = state.context;
        renderLabelText(ctx, x, y, circleFeature.get('label-color'));
      },
    })
  );

  const map = new Map({
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
      center: columbusCircleCoords,
      zoom: 19,
    }),
  });

  map.on('pointermove', (evt) => {
    const featureOver = map.forEachFeatureAtPixel(evt.pixel, (feature) => {
      feature.set('label-color', 'rgba(255,255,255,1)');
      return feature;
    });

    if (pointerOverFeature && pointerOverFeature != featureOver) {
      pointerOverFeature.set('label-color', labelTextStroke);
    }
    pointerOverFeature = featureOver;
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
