const title = 'Extent Interaction'

const html_str = `
  <div id="map" class="map"></div>
  <input id="external-map-button" type="button" value="Open external map">
  <span id="blocker-notice" hidden>Could not open map in external window. If you are using a popup or ad blocker you may need to disable it for this example.</span>
`

const css_str = `
  .map {
    width: 100%;
    height: 400px;
  }
`

const js_str = `
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
`

const package_str = `
  {
    "name": "external-map",
    "dependencies": {
      "ol": "9.0.0"
    },
    "devDependencies": {
      "vite": "^3.2.3"
    },
    "scripts": {
      "start": "vite",
      "build": "vite build"
    }
  }
`

const external_map_str = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Map</title>
    <link rel="stylesheet" type="text/css" href="../theme/ol.css">
    <style>
      body {
        margin: 0;
      }
      .map {
        height: 100vh;
        width: 100vw;
      }
      .map.unusable .ol-mask {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        user-select: none;
        background-color: rgba(0, 0, 0, .7);
        color: white;
        font: bold 3rem 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      }
      .map.unusable .ol-control {
        display: none;
      }
    </style>
  </head>
  <body>
    <div id="map" class="map"></div>
  </body>
</html>
`

export {
  title, 
  html_str,
  css_str,
  js_str,
  package_str,
  external_map_str
}