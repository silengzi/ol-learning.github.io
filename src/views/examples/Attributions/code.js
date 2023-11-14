const title = 'Attributions'

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
  import OSM from 'ol/source/OSM.js';
  import TileLayer from 'ol/layer/Tile.js';
  import View from 'ol/View.js';
  import {Attribution, defaults as defaultControls} from 'ol/control.js';

  const attribution = new Attribution({
    collapsible: false,
  });
  const map = new Map({
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
    ],
    controls: defaultControls({attribution: false}).extend([attribution]),
    target: 'map',
    view: new View({
      center: [0, 0],
      zoom: 2,
    }),
  });

  function checkSize() {
    const small = map.getSize()[0] < 600;
    attribution.setCollapsible(small);
    attribution.setCollapsed(small);
  }

  window.addEventListener('resize', checkSize);
  checkSize();
`

const package_str = `
  {
    "name": "attributions",
    "dependencies": {
      "ol": "8.1.0"
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