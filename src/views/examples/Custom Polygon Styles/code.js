const title = 'Custom Polygon Styles'

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
  import GeoJSON from 'ol/format/GeoJSON.js';
  import Map from 'ol/Map.js';
  import MultiPoint from 'ol/geom/MultiPoint.js';
  import VectorLayer from 'ol/layer/Vector.js';
  import VectorSource from 'ol/source/Vector.js';
  import View from 'ol/View.js';
  import {Circle as CircleStyle, Fill, Stroke, Style} from 'ol/style.js';

  const styles = [
    /* We are using two different styles for the polygons:
    *  - The first style is for the polygons themselves.
    *  - The second style is to draw the vertices of the polygons.
    *    In a custom \`geometry\` function the vertices of a polygon are
    *    returned as \`MultiPoint\` geometry, which will be used to render
    *    the style.
    */
    new Style({
      stroke: new Stroke({
        color: 'blue',
        width: 3,
      }),
      fill: new Fill({
        color: 'rgba(0, 0, 255, 0.1)',
      }),
    }),
    new Style({
      image: new CircleStyle({
        radius: 5,
        fill: new Fill({
          color: 'orange',
        }),
      }),
      geometry: function (feature) {
        // return the coordinates of the first ring of the polygon
        const coordinates = feature.getGeometry().getCoordinates()[0];
        return new MultiPoint(coordinates);
      },
    }),
  ];

  const geojsonObject = {
    'type': 'FeatureCollection',
    'crs': {
      'type': 'name',
      'properties': {
        'name': 'EPSG:3857',
      },
    },
    'features': [
      {
        'type': 'Feature',
        'geometry': {
          'type': 'Polygon',
          'coordinates': [
            [
              [-5e6, 6e6],
              [-5e6, 8e6],
              [-3e6, 8e6],
              [-3e6, 6e6],
              [-5e6, 6e6],
            ],
          ],
        },
      },
      {
        'type': 'Feature',
        'geometry': {
          'type': 'Polygon',
          'coordinates': [
            [
              [-2e6, 6e6],
              [-2e6, 8e6],
              [0, 8e6],
              [0, 6e6],
              [-2e6, 6e6],
            ],
          ],
        },
      },
      {
        'type': 'Feature',
        'geometry': {
          'type': 'Polygon',
          'coordinates': [
            [
              [1e6, 6e6],
              [1e6, 8e6],
              [3e6, 8e6],
              [3e6, 6e6],
              [1e6, 6e6],
            ],
          ],
        },
      },
      {
        'type': 'Feature',
        'geometry': {
          'type': 'Polygon',
          'coordinates': [
            [
              [-2e6, -1e6],
              [-1e6, 1e6],
              [0, -1e6],
              [-2e6, -1e6],
            ],
          ],
        },
      },
    ],
  };

  const source = new VectorSource({
    features: new GeoJSON().readFeatures(geojsonObject),
  });

  const layer = new VectorLayer({
    source: source,
    style: styles,
  });

  const map = new Map({
    layers: [layer],
    target: 'map',
    view: new View({
      center: [0, 3000000],
      zoom: 2,
    }),
  });
`

const package_str = `
  {
    "name": "polygon-styles",
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