const title = 'CartoDB source example'

const html_str = `
  <div id="map" class="map"></div>
  <form class="row">
    <div class="col-auto">
      <div class="input-group">
        <label for="country-area" class="input-group-text">Show european countries larger than</label>
        <select id="country-area" class="form-select">
          <option value="0" default>0 ㎢</option>
          <option value="5000">5000 ㎢</option>
          <option value="10000">10000 ㎢</option>
          <option value="50000">50000 ㎢</option>
          <option value="100000">100000 ㎢</option>
        </select>
      </div>
    </div>
  </form>
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
  import {CartoDB, OSM} from 'ol/source.js';

  const mapConfig = {
    'layers': [
      {
        'type': 'cartodb',
        'options': {
          'cartocss_version': '2.1.1',
          'cartocss': '#layer { polygon-fill: #F00; }',
        },
      },
    ],
  };

  function setArea(n) {
    mapConfig.layers[0].options.sql =
      'select * from european_countries_e where area > ' + n;
  }
  const areaSelect = document.getElementById('country-area');
  setArea(areaSelect.value);

  const cartoDBSource = new CartoDB({
    account: 'documentation',
    config: mapConfig,
  });

  areaSelect.addEventListener('change', function () {
    setArea(this.value);
    cartoDBSource.setConfig(mapConfig);
  });

  const map = new Map({
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
      new TileLayer({
        source: cartoDBSource,
      }),
    ],
    target: 'map',
    view: new View({
      center: [8500000, 8500000],
      zoom: 2,
    }),
  });
`

const package_str = `
  {
    "name": "cartodb",
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