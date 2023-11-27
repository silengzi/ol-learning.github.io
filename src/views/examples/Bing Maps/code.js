const title = 'Bing Maps'

const html_str = `
  <div id="map" class="map"></div>
  <select id="layer-select">
    <option value="Aerial">Aerial</option>
    <option value="AerialWithLabelsOnDemand" selected>Aerial with labels</option>
    <option value="RoadOnDemand">Road</option>
    <option value="CanvasDark">Road dark</option>
    <option value="OrdnanceSurvey">Ordnance Survey</option>
  </select>
`

const css_str = `
  .map {
    width: 100%;
    height: 400px;
  }
`

const js_str = `
  import BingMaps from 'ol/source/BingMaps.js';
  import Map from 'ol/Map.js';
  import TileLayer from 'ol/layer/Tile.js';
  import View from 'ol/View.js';

  const styles = [
    'RoadOnDemand',
    'Aerial',
    'AerialWithLabelsOnDemand',
    'CanvasDark',
    'OrdnanceSurvey',
  ];
  const layers = [];
  let i, ii;
  for (i = 0, ii = styles.length; i < ii; ++i) {
    layers.push(
      new TileLayer({
        visible: false,
        preload: Infinity,
        source: new BingMaps({
          key: 'Your Bing Maps Key from https://www.bingmapsportal.com/ here',
          imagerySet: styles[i],
          // placeholderTiles: false, // Optional. Prevents showing of BingMaps placeholder tiles
        }),
      })
    );
  }
  const map = new Map({
    layers: layers,
    target: 'map',
    view: new View({
      center: [-6655.5402445057125, 6709968.258934638],
      zoom: 13,
    }),
  });

  const select = document.getElementById('layer-select');
  function onChange() {
    const style = select.value;
    for (let i = 0, ii = layers.length; i < ii; ++i) {
      layers[i].setVisible(styles[i] === style);
    }
  }
  select.addEventListener('change', onChange);
  onChange();

`

const package_str = `
  {
    "name": "bing-maps",
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