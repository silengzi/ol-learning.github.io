<template>
  <h4 id="title">{{title}}</h4>
  
  <ol-map id="map" class="map"></ol-map>

  <p>The example creates and registers a custom element, <code>ol-map</code>, which contains a simple map. <strong>Note:</strong> Only works in browsers that supports <code>ShadowRoot</code>.</p>

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
import OSM from 'ol/source/OSM.js';
import TileLayer from 'ol/layer/Tile.js';
import View from 'ol/View.js';

onMounted(() => {

  class OLComponent extends HTMLElement {
    constructor() {
      super();
      this.shadow = this.attachShadow({mode: 'open'});
      const link = document.createElement('link');
      link.setAttribute('rel', 'stylesheet');
      link.setAttribute('href', 'https://openlayers.org/en/latest/examples/theme/ol.css');
      this.shadow.appendChild(link);
      const style = document.createElement('style');
      style.innerText = `
        :host {
          display: block;
        }
      `;
      this.shadow.appendChild(style);
      const div = document.createElement('div');
      div.style.width = '100%';
      div.style.height = '100%';
      this.shadow.appendChild(div);

      this.map = new Map({
        target: div,
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
        ],
        view: new View({
          center: [0, 0],
          zoom: 2,
        }),
      });
    }
  }

  try {
    customElements.define('ol-map', OLComponent);
  } catch (error) {
    console.log('ol-map 元素注册失败，因为已经被注册过了'); // Element register failed, so it's registered
  }

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
