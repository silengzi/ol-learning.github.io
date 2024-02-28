const title = 'Extent Interaction'

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
  import ExtentInteraction from 'ol/interaction/Extent.js';
  import Map from 'ol/Map.js';
  import OSM from 'ol/source/OSM.js';
  import TileLayer from 'ol/layer/Tile.js';
  import View from 'ol/View.js';
  import {shiftKeyOnly} from 'ol/events/condition.js';

  const map = new Map({
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
    ],
    target: 'map',
    view: new View({
      center: [0, 0],
      zoom: 2,
    }),
  });

  const extent = new ExtentInteraction({condition: shiftKeyOnly});
  map.addInteraction(extent);
`

const package_str = `
{
  "name": "extent-interaction",
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

export {
  title, 
  html_str,
  css_str,
  js_str,
  package_str
}