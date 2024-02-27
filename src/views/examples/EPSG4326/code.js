const title = 'EPSG:4326'

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
  import TileWMS from 'ol/source/TileWMS.js';
  import View from 'ol/View.js';
  import {ScaleLine, defaults as defaultControls} from 'ol/control.js';

  const layers = [
    new TileLayer({
      source: new TileWMS({
        url: 'https://ahocevar.com/geoserver/wms',
        params: {
          'LAYERS': 'ne:NE1_HR_LC_SR_W_DR',
          'TILED': true,
        },
      }),
    }),
  ];

  const map = new Map({
    controls: defaultControls().extend([
      new ScaleLine({
        units: 'degrees',
      }),
    ]),
    layers: layers,
    target: 'map',
    view: new View({
      projection: 'EPSG:4326',
      center: [0, 0],
      zoom: 2,
    }),
  });
`

const package_str = `
  {
    "name": "epsg-4326",
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