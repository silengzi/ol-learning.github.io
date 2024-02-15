const title = 'Declutter Group'

const html_str = `
  <div id="map" class="map"></div>
`

const css_str = `
  .map {
    width: 100%;
    height: 400px;
  }
  .map .ol-rotate {
    left: .5em;
    bottom: .5em;
    top: auto;
    right: auto;
  }
  .map:-webkit-full-screen {
    height: 100%;
    margin: 0;
  }
  .map:fullscreen {
    height: 100%;
  }
`

const js_str = `
  import {Feature, Map, View} from 'ol/index.js';
  import {Group as LayerGroup, Vector as VectorLayer} from 'ol/layer.js';
  import {Vector as VectorSource} from 'ol/source.js';
  import {apply} from 'ol-mapbox-style';
  import {fromExtent} from 'ol/geom/Polygon.js';
  import {getCenter} from 'ol/extent.js';

  const square = [-12e6, 3.5e6, -10e6, 5.5e6];
  const overlay = new VectorLayer({
    source: new VectorSource({
      features: [new Feature(fromExtent(square))],
    }),
    style: {
      'stroke-color': 'rgba(180, 180, 255, 1)',
      'stroke-width': 1,
      'fill-color': 'rgba(200, 200, 255, 0.85)',
    },
  });

  const layer = new LayerGroup();
  apply(
    layer,
    'https://api.maptiler.com/maps/topo-v2/style.json?key=Get your own API key at https://www.maptiler.com/cloud/'
  );

  const map = new Map({
    target: 'map',
    view: new View({
      center: getCenter(square),
      zoom: 4,
    }),
    layers: [layer, overlay],
  });

  overlay.on('prerender', () => map.flushDeclutterItems());
`

const package_str = `
  {
    "name": "declutter-group",
    "dependencies": {
      "ol": "8.2.0",
      "ol-mapbox-style": "^12.0.0"
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