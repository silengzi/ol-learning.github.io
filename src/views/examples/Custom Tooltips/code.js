const title = 'Custom Tooltips'

const html_str = `
  <div id="map" class="map"></div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css">
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

  const map = new Map({
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
    ],
    target: 'map',
    view: new View({
      center: [-8730000, 5930000],
      rotation: Math.PI / 5,
      zoom: 8,
    }),
  });

  document
    .querySelectorAll('.ol-zoom-in, .ol-zoom-out, .ol-rotate-reset')
    .forEach(function (el) {
      new bootstrap.Tooltip(el, {
        container: '#map',
      });
    });
`

const package_str = `
  {
    "name": "button-title",
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