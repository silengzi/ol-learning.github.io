const title = 'Earthquakes Heatmap'

const html_str = `
  <div id="map" class="map"></div>
  <form>
    <label for="radius">radius size</label>
    <input id="radius" type="range" min="1" max="50" step="1" value="5"/>
    <label for="blur">blur size</label>
    <input id="blur" type="range" min="1" max="50" step="1" value="15"/>
  </form>
`

const css_str = `
  .map {
    width: 100%;
    height: 400px;
  }
`

const js_str = `
  import KML from 'ol/format/KML.js';
  import Map from 'ol/Map.js';
  import StadiaMaps from 'ol/source/StadiaMaps.js';
  import VectorSource from 'ol/source/Vector.js';
  import View from 'ol/View.js';
  import {Heatmap as HeatmapLayer, Tile as TileLayer} from 'ol/layer.js';

  const blur = document.getElementById('blur');
  const radius = document.getElementById('radius');

  const vector = new HeatmapLayer({
    source: new VectorSource({
      url: 'data/kml/2012_Earthquakes_Mag5.kml',
      format: new KML({
        extractStyles: false,
      }),
    }),
    blur: parseInt(blur.value, 10),
    radius: parseInt(radius.value, 10),
    weight: function (feature) {
      // 2012_Earthquakes_Mag5.kml stores the magnitude of each earthquake in a
      // standards-violating <magnitude> tag in each Placemark.  We extract it from
      // the Placemark's name instead.
      const name = feature.get('name');
      const magnitude = parseFloat(name.substr(2));
      return magnitude - 5;
    },
  });

  const raster = new TileLayer({
    source: new StadiaMaps({
      layer: 'stamen_toner',
    }),
  });

  new Map({
    layers: [raster, vector],
    target: 'map',
    view: new View({
      center: [0, 0],
      zoom: 2,
    }),
  });

  blur.addEventListener('input', function () {
    vector.setBlur(parseInt(blur.value, 10));
  });

  radius.addEventListener('input', function () {
    vector.setRadius(parseInt(radius.value, 10));
  });
`

const package_str = `
  {
    "name": "heatmap-earthquakes",
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