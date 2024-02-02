const title = 'Advanced View Positioning(高级视图定位)'

const html_str = `
  <div class="mapcontainer">
  <div id="map" class="map"></div>
  <div class="padding-top"></div>
  <div class="padding-left"></div>
  <div class="padding-right"></div>
  <div class="padding-bottom"></div>
  <div class="center"></div>
  </div>
  <button id="zoomtoswitzerland">Zoom to Switzerland</button> (best fit).<br/>
  <button id="zoomtolausanne">Zoom to Lausanne</button> (with min resolution),<br/>
  <button id="centerlausanne">Center on Lausanne</button>
`

const css_str = `
  .map {
    width: 100%;
    height: 400px;
  }
  .mapcontainer {
    position: relative;
    margin-bottom: 20px;
  }
  .map {
    width: 1000px;
    height: 600px;
  }
  .map .ol-zoom {
    top: 178px;
    left: 158px;
  }
  .map .ol-rotate {
    top: 178px;
    right: 58px;
  }
  .map .ol-attribution,
  .map .ol-attribution.ol-uncollapsible {
    bottom: 30px;
    right: 50px;
  }
  .padding-top {
    position: absolute;
    top: 0;
    left: 0px;
    width: 1000px;
    height: 170px;
    background: rgba(255, 255, 255, 0.5);
  }
  .padding-left {
    position: absolute;
    top: 170px;
    left: 0;
    width: 150px;
    height: 400px;
    background: rgba(255, 255, 255, 0.5);
  }
  .padding-right {
    position: absolute;
    top: 170px;
    left: 950px;
    width: 50px;
    height: 400px;
    background: rgba(255, 255, 255, 0.5);
  }
  .padding-bottom {
    position: absolute;
    top: 570px;
    left: 0px;
    width: 1000px;
    height: 30px;
    background: rgba(255, 255, 255, 0.5);
  }
  .center {
    position: absolute;
    border: solid 1px black;
    top: 490px;
    left: 560px;
    width: 20px;
    height: 20px;
  }
`

const js_str = `
  import GeoJSON from 'ol/format/GeoJSON.js';
  import Map from 'ol/Map.js';
  import View from 'ol/View.js';
  import {OSM, Vector as VectorSource} from 'ol/source.js';
  import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';

  const source = new VectorSource({
    url: 'data/geojson/switzerland.geojson',
    format: new GeoJSON(),
  });

  const vectorLayer = new VectorLayer({
    source: source,
    style: {
      'fill-color': 'rgba(255, 255, 255, 0.6)',
      'stroke-width': 1,
      'stroke-color': '#319FD3',
      'circle-radius': 5,
      'circle-fill-color': 'rgba(255, 255, 255, 0.6)',
      'circle-stroke-width': 1,
      'circle-stroke-color': '#319FD3',
    },
  });

  const view = new View({
    center: [0, 0],
    zoom: 1,
  });
  const map = new Map({
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
      vectorLayer,
    ],
    target: 'map',
    view: view,
  });

  const zoomtoswitzerland = document.getElementById('zoomtoswitzerland');
  zoomtoswitzerland.addEventListener(
    'click',
    function () {
      const feature = source.getFeatures()[0];
      const polygon = feature.getGeometry();
      view.fit(polygon, {padding: [170, 50, 30, 150]});
    },
    false
  );

  const zoomtolausanne = document.getElementById('zoomtolausanne');
  zoomtolausanne.addEventListener(
    'click',
    function () {
      const feature = source.getFeatures()[1];
      const point = feature.getGeometry();
      view.fit(point, {padding: [170, 50, 30, 150], minResolution: 50});
    },
    false
  );

  const centerlausanne = document.getElementById('centerlausanne');
  centerlausanne.addEventListener(
    'click',
    function () {
      const feature = source.getFeatures()[1];
      const point = feature.getGeometry();
      const size = map.getSize();
      view.centerOn(point.getCoordinates(), size, [570, 500]);
    },
    false
  );
`

const package_str = `
  {
    "name": "center",
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