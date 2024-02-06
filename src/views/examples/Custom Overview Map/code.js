const title = 'Custom Overview Map'

const html_str = `
  <div id="map" class="map"></div>
  <div><label><input type="checkbox" id="rotateWithView"> Rotate with view</label></div>
`

const css_str = `
  .map {
    width: 100%;
    height: 400px;
  }

  .map .ol-custom-overviewmap,
  .map .ol-custom-overviewmap.ol-uncollapsible {
    bottom: auto;
    left: auto;
    right: 0;
    top: 0;
  }

  .map .ol-custom-overviewmap:not(.ol-collapsed)  {
    border: 1px solid black;
  }

  .map .ol-custom-overviewmap .ol-overviewmap-map {
    border: none;
    width: 300px;
  }

  .map .ol-custom-overviewmap .ol-overviewmap-box {
    border: 2px solid red;
  }

  .map .ol-custom-overviewmap:not(.ol-collapsed) button{
    bottom: auto;
    left: auto;
    right: 1px;
    top: 1px;
  }

  .map .ol-rotate {
    top: 170px;
    right: 0;
  }
`

const js_str = `
  import Map from 'ol/Map.js';
  import OSM from 'ol/source/OSM.js';
  import TileLayer from 'ol/layer/Tile.js';
  import View from 'ol/View.js';
  import {
    DragRotateAndZoom,
    defaults as defaultInteractions,
  } from 'ol/interaction.js';
  import {OverviewMap, defaults as defaultControls} from 'ol/control.js';

  const rotateWithView = document.getElementById('rotateWithView');

  const overviewMapControl = new OverviewMap({
    // see in overviewmap-custom.html to see the custom CSS used
    className: 'ol-overviewmap ol-custom-overviewmap',
    layers: [
      new TileLayer({
        source: new OSM({
          'url':
            'https://{a-c}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png' +
            '?apikey=Your API key from https://www.thunderforest.com/docs/apikeys/ here',
        }),
      }),
    ],
    collapseLabel: '\u00BB',
    label: '\u00AB',
    collapsed: false,
  });

  rotateWithView.addEventListener('change', function () {
    overviewMapControl.setRotateWithView(this.checked);
  });

  const map = new Map({
    controls: defaultControls().extend([overviewMapControl]),
    interactions: defaultInteractions().extend([new DragRotateAndZoom()]),
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
    ],
    target: 'map',
    view: new View({
      center: [500000, 6000000],
      zoom: 7,
    }),
  });
`

const package_str = `
  {
    "name": "overviewmap-custom",
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