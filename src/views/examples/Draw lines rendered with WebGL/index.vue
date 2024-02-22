<template>
  <h4 id="title">{{title}}</h4>
  
  <div id="map" class="map"></div>
  <form>
    <div class="form-group">Cap type &nbsp;
      <label class="radio-inline">
        <input type="radio" class="uniform" name="capType" value="butt" checked/> <code>butt</code>&nbsp;
      </label>
      <label class="radio-inline">
        <input type="radio" class="uniform" name="capType" value="round"/> <code>round</code>&nbsp;
      </label>
      <label class="radio-inline">
        <input type="radio" class="uniform" name="capType" value="square"/> <code>square</code>&nbsp;
      </label>
    </div>
    <div class="form-group">Join type &nbsp;
      <label class="radio-inline">
        <input type="radio" class="uniform" name="joinType" value="miter" checked/> <code>miter</code>&nbsp;
      </label>
      <label class="radio-inline">
        <input type="radio" class="uniform" name="joinType" value="round"/> <code>round</code>&nbsp;
      </label>
      <label class="radio-inline">
        <input type="radio" class="uniform" name="joinType" value="bevel"/> <code>bevel</code>&nbsp;
      </label>
    </div>
    <div class="form-group">
      <label>
        Line width (pixels)
        <input type="range" class="uniform" name="width" min="1" max="40" value="8">
      </label>
      <span id="value-width">12</span>
    </div>
    <div class="form-group">
      <label>
        Miter limit (ratio)
        <input type="range" class="uniform" name="miterLimit" min="1" max="20" value="10" step="0.1">
      </label>
      <span id="value-miterLimit">10</span>
    </div>
    <div class="form-group">
      <label>
        Line offset (pixels)
        <input type="range" class="uniform" name="offset" min="-40" max="40" value="0">
      </label>
      <span id="value-offset">0</span>
    </div>
    <div class="form-group">
      <label>
        <input type="checkbox" class="rebuild" id="dashEnable">
        Enable dashes
      </label>
      </div>
    <div class="form-group" style="margin-left: 18px">
      <label>
        Line dash pattern (px)
        <input type="number" class="uniform" name="dashLength1" min="0" max="100" value="25">
        <input type="number" class="uniform" name="dashLength2" min="0" max="100" value="15">
        <input type="number" class="uniform" name="dashLength3" min="0" max="100" value="15">
        <input type="number" class="uniform" name="dashLength4" min="0" max="100" value="15">
      </label>
    </div>
    <div class="form-group" style="margin-left: 18px">
      <label>
        Line dash offset (pixels)
        <input type="range" class="uniform" name="dashOffset" min="-200" max="200" value="0">
      </label>
      <span id="value-dashOffset">0</span>
    </div>
    <div class="form-group">
      <label>
        <input type="checkbox" class="rebuild" id="patternEnable">
        Enable image pattern
      </label>
    </div>
    <div class="form-group" style="margin-left: 18px">
      <label>
        Pattern spacing (pixels)
        <input type="range" class="uniform" name="patternSpacing" min="0" max="64" value="0">
      </label>
      <span id="value-patternSpacing">0</span>
    </div>
  </form>

  <p>This example lets you tweak the stroke styling options dynamically to see how they affect line rendering. The line string showing by default can be modified and new ones can be drawn by single-clicking on the map.</p>

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

import GeoJSON from 'ol/format/GeoJSON.js';
import Layer from 'ol/layer/Layer.js';
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import WebGLVectorLayerRenderer from 'ol/renderer/webgl/VectorLayer.js';
import {Draw, Modify, Snap} from 'ol/interaction.js';
import {OSM, Vector as VectorSource} from 'ol/source.js';
import {Tile as TileLayer} from 'ol/layer.js';
import {fromLonLat} from 'ol/proj.js';

onMounted(() => {

  /**
   * @type {import('ol/style/webgl.js').WebGLStyle}
   */
  let style;

  class WebGLLayer extends Layer {
    createRenderer() {
      return new WebGLVectorLayerRenderer(this, {
        className: this.getClassName(),
        style,
      });
    }
  }

  const source = new VectorSource({
    url: 'data/geojson/switzerland.geojson',
    format: new GeoJSON(),
  });

  /**
   * @param {boolean} dash Include line dash
   * @param {boolean} pattern Include image pattern
   * @return {import('ol/style/webgl.js').WebGLStyle} Generated style
   */
  const getStyle = (dash, pattern) => {
    let newStyle = {
      variables: style
        ? style.variables
        : {
            width: 12,
            offset: 0,
            capType: 'butt',
            joinType: 'miter',
            miterLimit: 10, // ratio
            dashLength1: 25,
            dashLength2: 15,
            dashLength3: 15,
            dashLength4: 15,
            dashOffset: 0,
            patternSpacing: 0,
          },
      'stroke-width': ['var', 'width'],
      'stroke-color': 'rgba(24,86,34,0.7)',
      'stroke-offset': ['var', 'offset'],
      'stroke-miter-limit': ['var', 'miterLimit'],
      'stroke-line-cap': ['var', 'capType'],
      'stroke-line-join': ['var', 'joinType'],
    };
    if (dash) {
      newStyle = {
        ...newStyle,
        'stroke-line-dash': [
          ['var', 'dashLength1'],
          ['var', 'dashLength2'],
          ['var', 'dashLength3'],
          ['var', 'dashLength4'],
        ],
        'stroke-line-dash-offset': ['var', 'dashOffset'],
      };
    }
    if (pattern) {
      delete newStyle['stroke-color'];
      newStyle = {
        ...newStyle,
        'stroke-pattern-src': 'data/dot.svg',
        'stroke-pattern-spacing': ['var', 'patternSpacing'],
      };
    }
    return newStyle;
  };

  style = getStyle(false, false);

  let vector = new WebGLLayer({
    source,
  });

  const map = new Map({
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
      vector,
    ],
    target: 'map',
    view: new View({
      center: fromLonLat([8.43, 46.82]),
      zoom: 7,
    }),
  });

  const rebuildStyle = () => {
    const dash = document.getElementById('dashEnable').checked;
    const pattern = document.getElementById('patternEnable').checked;
    style = getStyle(dash, pattern);
    map.removeLayer(vector);
    vector = new WebGLLayer({
      source,
    });
    map.addLayer(vector);
  };

  const modify = new Modify({source: source});
  map.addInteraction(modify);

  let draw, snap; // global so we can remove them later

  function addInteractions() {
    draw = new Draw({
      source: source,
      type: 'LineString',
    });
    map.addInteraction(draw);
    snap = new Snap({source: source});
    map.addInteraction(snap);
  }

  addInteractions();

  const inputListener = (event) => {
    const variables = style.variables;
    const variableName = event.target.name;
    if (event.target.type === 'radio') {
      variables[variableName] = event.target.value;
    } else {
      variables[variableName] = parseFloat(event.target.value);
    }
    const valueSpan = document.getElementById(`value-${variableName}`);
    if (valueSpan) {
      valueSpan.textContent = variables[variableName];
    }
    map.render();
  };
  document
    .querySelectorAll('input.uniform')
    .forEach((input) => input.addEventListener('input', inputListener));
  document
    .querySelectorAll('input.rebuild')
    .forEach((input) => input.addEventListener('input', rebuildStyle));

  // 代码块高亮
  Prism.highlightAll();
});

</script>

<style scoped>
  .map {
    width: 100%;
    height: 400px;
  }
  .form-group label {
    display: flex;
    align-items: center;
    gap: 6px;
    height: 30px;
  }
  .form-group {
    display: flex;
    align-items: center;
    gap: 6px;
  }
</style>
