<template>
  <h4 id="title">{{title}}</h4>
  
  <div id="map" class="map"></div>
  <form>
    <div id="status">Show impacts between <span class="min-year"></span> and <span class="max-year"></span></div>

    <label for="min-year">Minimum year:</label>
    <input id="min-year" type="range" min="1850" max="2015" step="1" value="1850"/>
    <label for="max-year">Maximum year:</label>
    <input id="max-year" type="range" min="1850" max="2015" step="1" value="2015"/>
  </form>

  <p>This example shows how to use <code>ol/layer/WebGLPoints</code> with a literal style to dynamically filter a large amount of point geometries. The above map is based on a dataset from the NASA containing 45k recorded meteorite landing sites. Each meteorite is marked by a circle on the map (the bigger the circle, the heavier the object). A pulse effect has been added, which is slightly offset by the year of the impact.</p>
  <p>Adjusting the sliders causes the objects outside of the date range to be filtered out of the map. This is done by mutating the variables in the style object provided to the WebGL layer. Also note that the last snippet of code is necessary to make sure the map refreshes itself every frame.</p>
  <p>（<strong>注意：</strong>This example uses features that are not part of the stable API and subject to change between releases. Consult the API documentation to see what is supported in the latest release.）</p>

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
import Point from 'ol/geom/Point.js';
import StadiaMaps from 'ol/source/StadiaMaps.js';
import TileLayer from 'ol/layer/Tile.js';
import View from 'ol/View.js';
import WebGLPointsLayer from 'ol/layer/WebGLPoints.js';
import {Vector} from 'ol/source.js';
import {fromLonLat} from 'ol/proj.js';

onMounted(() => {

  const vectorSource = new Vector({
    attributions: 'NASA',
  });

  const oldColor = 'rgba(242,56,22,0.61)';
  const newColor = '#ffe52c';
  const period = 12; // animation period in seconds
  const animRatio = [
    '^',
    [
      '/',
      [
        '%',
        [
          '+',
          ['time'],
          ['interpolate', ['linear'], ['get', 'year'], 1850, 0, 2015, period],
        ],
        period,
      ],
      period,
    ],
    0.5,
  ];

  const style = {
    variables: {
      minYear: 1850,
      maxYear: 2015,
    },
    filter: ['between', ['get', 'year'], ['var', 'minYear'], ['var', 'maxYear']],
    'circle-radius': [
      '*',
      ['interpolate', ['linear'], ['get', 'mass'], 0, 4, 200000, 13],
      ['-', 1.75, ['*', animRatio, 0.75]],
    ],
    'circle-fill-color': [
      'interpolate',
      ['linear'],
      animRatio,
      0,
      newColor,
      1,
      oldColor,
    ],
    'circle-opacity': ['-', 1.0, ['*', animRatio, 0.75]],
  };

  // handle input values & events
  const minYearInput = document.getElementById('min-year');
  const maxYearInput = document.getElementById('max-year');

  function updateStatusText() {
    const div = document.getElementById('status');
    div.querySelector('span.min-year').textContent = minYearInput.value;
    div.querySelector('span.max-year').textContent = maxYearInput.value;
  }

  minYearInput.addEventListener('input', function () {
    style.variables.minYear = parseInt(minYearInput.value);
    updateStatusText();
  });
  maxYearInput.addEventListener('input', function () {
    style.variables.maxYear = parseInt(maxYearInput.value);
    updateStatusText();
  });
  updateStatusText();

  // load data;
  const client = new XMLHttpRequest();
  client.open('GET', 'data/csv/meteorite_landings.csv');
  client.onload = function () {
    const csv = client.responseText;
    const features = [];

    let prevIndex = csv.indexOf('\n') + 1; // scan past the header line

    let curIndex;
    while ((curIndex = csv.indexOf('\n', prevIndex)) != -1) {
      const line = csv.substr(prevIndex, curIndex - prevIndex).split(',');
      prevIndex = curIndex + 1;

      const coords = fromLonLat([parseFloat(line[4]), parseFloat(line[3])]);
      if (isNaN(coords[0]) || isNaN(coords[1])) {
        // guard against bad data
        continue;
      }

      features.push(
        new Feature({
          mass: parseFloat(line[1]) || 0,
          year: parseInt(line[2]) || 0,
          geometry: new Point(coords),
        }),
      );
    }

    vectorSource.addFeatures(features);
  };
  client.send();

  const map = new Map({
    layers: [
      new TileLayer({
        source: new StadiaMaps({
          layer: 'stamen_toner',
        }),
      }),
      new WebGLPointsLayer({
        style: style,
        source: vectorSource,
        disableHitDetection: true,
      }),
    ],
    target: document.getElementById('map'),
    view: new View({
      center: [0, 0],
      zoom: 2,
    }),
  });

  // animate the map
  function animate() {
    map.render();
    window.requestAnimationFrame(animate);
  }
  animate();

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
