const title = 'Earthquakes with custom symbols'

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
  import KML from 'ol/format/KML.js';
  import Map from 'ol/Map.js';
  import Polygon from 'ol/geom/Polygon.js';
  import StadiaMaps from 'ol/source/StadiaMaps.js';
  import VectorSource from 'ol/source/Vector.js';
  import View from 'ol/View.js';
  import {Fill, Icon, Stroke, Style} from 'ol/style.js';
  import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';
  import {toContext} from 'ol/render.js';

  const symbol = [
    [0, 0],
    [4, 2],
    [6, 0],
    [10, 5],
    [6, 3],
    [4, 5],
    [0, 0],
  ];
  let scale;
  const scaleFunction = function (coordinate) {
    return [coordinate[0] * scale, coordinate[1] * scale];
  };

  const styleCache = {};
  const styleFunction = function (feature) {
    // 2012_Earthquakes_Mag5.kml stores the magnitude of each earthquake in a
    // standards-violating <magnitude> tag in each Placemark.  We extract it from
    // the Placemark's name instead.
    const name = feature.get('name');
    const magnitude = parseFloat(name.substr(2));
    const size = parseInt(10 + 40 * (magnitude - 5), 10);
    scale = size / 10;
    let style = styleCache[size];
    if (!style) {
      const canvas = document.createElement('canvas');
      const vectorContext = toContext(canvas.getContext('2d'), {
        size: [size, size],
        pixelRatio: 1,
      });
      vectorContext.setStyle(
        new Style({
          fill: new Fill({color: 'rgba(255, 153, 0, 0.4)'}),
          stroke: new Stroke({color: 'rgba(255, 204, 0, 0.2)', width: 2}),
        })
      );
      vectorContext.drawGeometry(new Polygon([symbol.map(scaleFunction)]));
      style = new Style({
        image: new Icon({
          img: canvas,
          rotation: 1.2,
        }),
      });
      styleCache[size] = style;
    }
    return style;
  };

  const vector = new VectorLayer({
    source: new VectorSource({
      url: 'data/kml/2012_Earthquakes_Mag5.kml',
      format: new KML({
        extractStyles: false,
      }),
    }),
    style: styleFunction,
  });

  const raster = new TileLayer({
    source: new StadiaMaps({
      layer: 'stamen_toner',
    }),
  });

  const map = new Map({
    layers: [raster, vector],
    target: 'map',
    view: new View({
      center: [0, 0],
      zoom: 2,
    }),
  });
`

const package_str = `
  {
    "name": "earthquake-custom-symbol",
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