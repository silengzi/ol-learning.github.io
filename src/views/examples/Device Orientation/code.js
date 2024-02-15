const title = 'Device Orientation'

const html_str = `
  <div id="map" class="map"></div>
  <p>
    <div>α : <code id="alpha"></code></div>
    <div>β : <code id="beta"></code></div>
    <div>γ : <code id="gamma"></code></div>
  </p>

  <script src="https://cdn.jsdelivr.net/npm/gyronorm@2.0.6/dist/gyronorm.complete.min.js"></script>
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
  import {toRadians} from 'ol/math.js';

  const view = new View({
    center: [0, 0],
    zoom: 2,
  });
  const map = new Map({
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
    ],
    target: 'map',
    view: view,
  });

  function el(id) {
    return document.getElementById(id);
  }

  const gn = new GyroNorm();

  gn.init().then(function () {
    gn.start(function (event) {
      const center = view.getCenter();
      const resolution = view.getResolution();
      const alpha = toRadians(event.do.alpha);
      const beta = toRadians(event.do.beta);
      const gamma = toRadians(event.do.gamma);

      el('alpha').innerText = alpha + ' [rad]';
      el('beta').innerText = beta + ' [rad]';
      el('gamma').innerText = gamma + ' [rad]';

      center[0] -= resolution * gamma * 25;
      center[1] += resolution * beta * 25;

      view.setCenter(center);
    });
  });
`

const package_str = `
  {
    "name": "device-orientation",
    "dependencies": {
      "ol": "8.2.0"
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

export {
  title, 
  html_str,
  css_str,
  js_str,
  package_str
}