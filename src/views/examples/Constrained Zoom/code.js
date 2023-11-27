const title = 'Constrained Zoom'

const html_str = `
  <div id="map" class="map"></div>
`

const css_str = `
  .map {
    width: 100%;
    height: 400px;
  }
`

const js_str = `
  import Map from 'ol/Map.js';
  import TileLayer from 'ol/layer/Tile.js';
  import View from 'ol/View.js';
  import XYZ from 'ol/source/XYZ.js';

  const key = 'Get your own API key at https://www.maptiler.com/cloud/';
  const attributions =
    '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> ' +
    '<a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>';

  const map = new Map({
    target: 'map',
    layers: [
      new TileLayer({
        source: new XYZ({
          attributions: attributions,
          url:
            'https://api.maptiler.com/tiles/satellite/{z}/{x}/{y}.jpg?key=' + key,
        }),
      }),
    ],
    view: new View({
      center: [-13553864, 5918250],
      zoom: 11,
      minZoom: 9,
      maxZoom: 13,
    }),
  });
`

const package_str = `
  {
    "name": "zoom-constrained",
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