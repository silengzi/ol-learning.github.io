<template>
  <h4 id="title">{{title}}</h4>
  
  <div id="map" class="map"></div>
  <input id="external-map-button" type="button" value="Open external map">
  <span id="blocker-notice" hidden>Could not open map in external window. If you are using a popup or ad blocker you may need to disable it for this example.</span>

  <p>Move a map to a separate window.</p>

  <h5 class="source-heading">html</h5>
  <pre><code class="language-html">{{"  " + html_str.trim()}}</code></pre>
  <h5 class="source-heading">css</h5>
  <pre><code class="language-css">{{"  " + css_str.trim()}}</code></pre>
  <h5 class="source-heading">js</h5>
  <pre><code class="language-js">{{"  " + js_str.trim()}}</code></pre>
  <h5 class="source-heading">resources/external-map-map.html</h5>
  <pre><code class="language-html">{{"  " + external_map_str.trim()}}</code></pre>
  <h5 class="source-heading">package.json</h5>
  <pre><code class="language-json">{{"  " + package_str.trim()}}</code></pre>
</template>

<script setup>
import { onMounted } from "vue";
import { title, html_str, css_str, js_str, package_str, external_map_str } from "./code"

import Map from 'ol/Map.js';
import OSM from 'ol/source/OSM.js';
import TileLayer from 'ol/layer/Tile.js';
import View from 'ol/View.js';
import {
  Control,
  FullScreen,
  defaults as defaultControls,
} from 'ol/control.js';
import {fromLonLat} from 'ol/proj.js';

onMounted(() => {

  class UnusableMask extends Control {
    constructor() {
      super({
        element: document.createElement('div'),
      });
      this.element.setAttribute('hidden', 'hidden');
      this.element.className = 'ol-mask';
      this.element.innerHTML = '<div>Map not usable</div>';
    }
  }

  const localMapTarget = document.getElementById('map');

  const map = new Map({
    target: localMapTarget,
    controls: defaultControls().extend([new FullScreen(), new UnusableMask()]),
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
    ],
    view: new View({
      center: fromLonLat([37.41, 8.82]),
      zoom: 4,
    }),
  });

  let mapWindow;
  function closeMapWindow() {
    if (mapWindow) {
      mapWindow.close();
      mapWindow = undefined;
    }
  }
  // Close external window in case the main page is closed or reloaded
  window.addEventListener('pagehide', closeMapWindow);

  const button = document.getElementById('external-map-button');

  function resetMapTarget() {
    localMapTarget.style.height = '';
    map.setTarget(localMapTarget);
    button.disabled = false;
  }

  function updateOverlay() {
    if (!mapWindow) {
      return;
    }
    const externalMapTarget = mapWindow.document.getElementById('map');
    if (!externalMapTarget) {
      return;
    }
    if (document.visibilityState === 'visible') {
      // Show controls and enable keyboard input
      externalMapTarget.classList.remove('unusable');
      externalMapTarget.setAttribute('tabindex', '0');
      externalMapTarget.focus();
    } else {
      // Hide all controls and disable keyboard input
      externalMapTarget.removeAttribute('tabindex');
      externalMapTarget.classList.add('unusable');
    }
  }
  window.addEventListener('visibilitychange', updateOverlay);

  button.addEventListener('click', function () {
    const blockerNotice = document.getElementById('blocker-notice');
    blockerNotice.setAttribute('hidden', 'hidden');
    button.disabled = true;

    // Reset button and map target in case window did not load or open
    let timeoutKey = setTimeout(function () {
      closeMapWindow();
      resetMapTarget();
      blockerNotice.removeAttribute('hidden');
      timeoutKey = undefined;
    }, 3000);

    mapWindow = window.open(
      'resources/external-map-map.html',
      'MapWindow',
      'toolbar=0,location=0,menubar=0,width=800,height=600',
    );
    mapWindow.addEventListener('DOMContentLoaded', function () {
      const externalMapTarget = mapWindow.document.getElementById('map');
      localMapTarget.style.height = '0px';
      map.setTarget(externalMapTarget);

      if (timeoutKey) {
        timeoutKey = clearTimeout(timeoutKey);
      }
      mapWindow.addEventListener('pagehide', function () {
        resetMapTarget();
        // Close window in case user does a page reload
        closeMapWindow();
      });

      updateOverlay();
    });
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
