<template>
  <h4 id="title">{{title}}</h4>
  
  <div id="map" class="map"></div>
  <div class="row">
    <div class="col-auto">
      <span class="input-group">
        <label class="input-group-text" for="type">Shape type:</label>
        <select class="form-select" id="type">
          <option value="Circle">Circle</option>
          <option value="Square">Square</option>
          <option value="Box">Box</option>
          <option value="Star">Star</option>
          <option value="None">None</option>
        </select>
        <input class="form-control" type="button" value="Undo" id="undo">
      </span>
    </div>
  </div>

  <p>This demonstrates the use of the geometryFunction option for the ol/interaction/Draw. Select a shape type from the dropdown above to start drawing. To activate freehand drawing, hold the Shift key. Square drawing is achieved by using type: 'Circle' type with a geometryFunction that creates a 4-sided regular polygon instead of a circle. Box drawing uses type: 'Circle' with a geometryFunction that creates a box-shaped polygon instead of a circle. Star drawing uses a custom geometry function that converts a circle into a star using the center and radius provided by the draw interaction.</p>

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

import Draw, {
  createBox,
  createRegularPolygon,
} from 'ol/interaction/Draw.js';
import Map from 'ol/Map.js';
import Polygon from 'ol/geom/Polygon.js';
import View from 'ol/View.js';
import {OSM, Vector as VectorSource} from 'ol/source.js';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';

onMounted(() => {

  const raster = new TileLayer({
    source: new OSM(),
  });

  const source = new VectorSource({wrapX: false});

  const vector = new VectorLayer({
    source: source,
  });

  const map = new Map({
    layers: [raster, vector],
    target: 'map',
    view: new View({
      center: [-11000000, 4600000],
      zoom: 4,
    }),
  });

  const typeSelect = document.getElementById('type');

  let draw; // global so we can remove it later
  function addInteraction() {
    let value = typeSelect.value;
    if (value !== 'None') {
      let geometryFunction;
      if (value === 'Square') {
        value = 'Circle';
        geometryFunction = createRegularPolygon(4);
      } else if (value === 'Box') {
        value = 'Circle';
        geometryFunction = createBox();
      } else if (value === 'Star') {
        value = 'Circle';
        geometryFunction = function (coordinates, geometry) {
          const center = coordinates[0];
          const last = coordinates[coordinates.length - 1];
          const dx = center[0] - last[0];
          const dy = center[1] - last[1];
          const radius = Math.sqrt(dx * dx + dy * dy);
          const rotation = Math.atan2(dy, dx);
          const newCoordinates = [];
          const numPoints = 12;
          for (let i = 0; i < numPoints; ++i) {
            const angle = rotation + (i * 2 * Math.PI) / numPoints;
            const fraction = i % 2 === 0 ? 1 : 0.5;
            const offsetX = radius * fraction * Math.cos(angle);
            const offsetY = radius * fraction * Math.sin(angle);
            newCoordinates.push([center[0] + offsetX, center[1] + offsetY]);
          }
          newCoordinates.push(newCoordinates[0].slice());
          if (!geometry) {
            geometry = new Polygon([newCoordinates]);
          } else {
            geometry.setCoordinates([newCoordinates]);
          }
          return geometry;
        };
      }
      draw = new Draw({
        source: source,
        type: value,
        geometryFunction: geometryFunction,
      });
      map.addInteraction(draw);
    }
  }

  /**
   * Handle change event.
   */
  typeSelect.onchange = function () {
    map.removeInteraction(draw);
    addInteraction();
  };

  document.getElementById('undo').addEventListener('click', function () {
    draw.removeLastPoint();
  });

  addInteraction();

  // 代码块高亮
  Prism.highlightAll();
});

</script>

<style scoped>
  @import url(../../../assets/css/bootstrap.css);
  .map {
    width: 100%;
    height: 400px;
  }
</style>
