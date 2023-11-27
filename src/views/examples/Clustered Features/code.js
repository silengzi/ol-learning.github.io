const title = 'Clustered Features'

const html_str = `
  <div id="map" class="map"></div>
  <form>
    <div class="form-group">
      <label for="distance" class="col-form-label pb-0">Cluster distance</label>
      <input id="distance" class="form-range" type="range" min="0" max="200" step="1" value="40"/>
      <small class="form-text text-muted">
        The distance within which features will be clustered together.
      </small>
    </div>
    <div class="form-group">
      <label for="min-distance" class="col-form-label pb-0">Minimum distance</label>
      <input id="min-distance" class="form-range" type="range" min="0" max="200" step="1" value="20"/>
      <small class="form-text text-muted">
        The minimum distance between clusters. Can't be larger than the configured distance.
      </small>
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
  import Feature from 'ol/Feature.js';
  import Map from 'ol/Map.js';
  import Point from 'ol/geom/Point.js';
  import View from 'ol/View.js';
  import {
    Circle as CircleStyle,
    Fill,
    Stroke,
    Style,
    Text,
  } from 'ol/style.js';
  import {Cluster, OSM, Vector as VectorSource} from 'ol/source.js';
  import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';
  import {boundingExtent} from 'ol/extent.js';

  const distanceInput = document.getElementById('distance');
  const minDistanceInput = document.getElementById('min-distance');

  const count = 20000;
  const features = new Array(count);
  const e = 4500000;
  for (let i = 0; i < count; ++i) {
    const coordinates = [2 * e * Math.random() - e, 2 * e * Math.random() - e];
    features[i] = new Feature(new Point(coordinates));
  }

  const source = new VectorSource({
    features: features,
  });

  const clusterSource = new Cluster({
    distance: parseInt(distanceInput.value, 10),
    minDistance: parseInt(minDistanceInput.value, 10),
    source: source,
  });

  const styleCache = {};
  const clusters = new VectorLayer({
    source: clusterSource,
    style: function (feature) {
      const size = feature.get('features').length;
      let style = styleCache[size];
      if (!style) {
        style = new Style({
          image: new CircleStyle({
            radius: 10,
            stroke: new Stroke({
              color: '#fff',
            }),
            fill: new Fill({
              color: '#3399CC',
            }),
          }),
          text: new Text({
            text: size.toString(),
            fill: new Fill({
              color: '#fff',
            }),
          }),
        });
        styleCache[size] = style;
      }
      return style;
    },
  });

  const raster = new TileLayer({
    source: new OSM(),
  });

  const map = new Map({
    layers: [raster, clusters],
    target: 'map',
    view: new View({
      center: [0, 0],
      zoom: 2,
    }),
  });

  distanceInput.addEventListener('input', function () {
    clusterSource.setDistance(parseInt(distanceInput.value, 10));
  });

  minDistanceInput.addEventListener('input', function () {
    clusterSource.setMinDistance(parseInt(minDistanceInput.value, 10));
  });

  map.on('click', (e) => {
    clusters.getFeatures(e.pixel).then((clickedFeatures) => {
      if (clickedFeatures.length) {
        // Get clustered Coordinates
        const features = clickedFeatures[0].get('features');
        if (features.length > 1) {
          const extent = boundingExtent(
            features.map((r) => r.getGeometry().getCoordinates())
          );
          map.getView().fit(extent, {duration: 1000, padding: [50, 50, 50, 50]});
        }
      }
    });
  });
`

const package_str = `
  {
    "name": "cluster",
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