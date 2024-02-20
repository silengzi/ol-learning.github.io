const title = 'Drag-and-Drop'

const html_str = `
  <div id="map" class="map"></div>
  <div><label><input type="checkbox" id="extractstyles" checked /> Extract styles from KML</label></div>
  <br />
  <div>
    <a id="download" download></a>
    Download samples:&nbsp;&nbsp;
    <button id="download-gpx">GPX</button>
    &nbsp;
    <button id="download-geojson">GeoJSON</button>
    &nbsp;
    <button id="download-igc">IGC</button>
    &nbsp;
    <button id="download-kml">KML</button>
    &nbsp;
    <button id="download-topojson">TopoJSON</button>
  </div>
  <br />
  <div id="info">&nbsp;</div>
`

const css_str = `
  .map {
    width: 100%;
    height: 400px;
  }
`

const js_str = `
  import DragAndDrop from 'ol/interaction/DragAndDrop.js';
  import Map from 'ol/Map.js';
  import View from 'ol/View.js';
  import {GPX, GeoJSON, IGC, KML, TopoJSON} from 'ol/format.js';
  import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';
  import {Vector as VectorSource, XYZ} from 'ol/source.js';

  const key = 'Get your own API key at https://www.maptiler.com/cloud/';
  const attributions =
    '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> ' +
    '<a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>';

  const map = new Map({
    layers: [
      new TileLayer({
        source: new XYZ({
          attributions: attributions,
          url:
            'https://api.maptiler.com/tiles/satellite/{z}/{x}/{y}.jpg?key=' + key,
          maxZoom: 20,
        }),
      }),
    ],
    target: 'map',
    view: new View({
      center: [0, 0],
      zoom: 2,
    }),
  });

  const extractStyles = document.getElementById('extractstyles');
  let dragAndDropInteraction;

  function setInteraction() {
    if (dragAndDropInteraction) {
      map.removeInteraction(dragAndDropInteraction);
    }
    dragAndDropInteraction = new DragAndDrop({
      formatConstructors: [
        GPX,
        GeoJSON,
        IGC,
        // use constructed format to set options
        new KML({extractStyles: extractStyles.checked}),
        TopoJSON,
      ],
    });
    dragAndDropInteraction.on('addfeatures', function (event) {
      const vectorSource = new VectorSource({
        features: event.features,
      });
      map.addLayer(
        new VectorLayer({
          source: vectorSource,
        })
      );
      map.getView().fit(vectorSource.getExtent());
    });
    map.addInteraction(dragAndDropInteraction);
  }
  setInteraction();

  extractStyles.addEventListener('change', setInteraction);

  const displayFeatureInfo = function (pixel) {
    const features = [];
    map.forEachFeatureAtPixel(pixel, function (feature) {
      features.push(feature);
    });
    if (features.length > 0) {
      const info = [];
      let i, ii;
      for (i = 0, ii = features.length; i < ii; ++i) {
        info.push(features[i].get('name'));
      }
      document.getElementById('info').innerHTML = info.join(', ') || '&nbsp';
    } else {
      document.getElementById('info').innerHTML = '&nbsp;';
    }
  };

  map.on('pointermove', function (evt) {
    if (evt.dragging) {
      return;
    }
    const pixel = map.getEventPixel(evt.originalEvent);
    displayFeatureInfo(pixel);
  });

  map.on('click', function (evt) {
    displayFeatureInfo(evt.pixel);
  });

  // Sample data downloads

  const link = document.getElementById('download');

  function download(fullpath, filename) {
    fetch(fullpath)
      .then(function (response) {
        return response.blob();
      })
      .then(function (blob) {
        link.href = URL.createObjectURL(blob);
        link.download = filename;
        link.click();
      });
  }

  document.getElementById('download-gpx').addEventListener('click', function () {
    download('data/gpx/fells_loop.gpx', 'fells_loop.gpx');
  });

  document
    .getElementById('download-geojson')
    .addEventListener('click', function () {
      download('data/geojson/roads-seoul.geojson', 'roads-seoul.geojson');
    });

  document.getElementById('download-igc').addEventListener('click', function () {
    download('data/igc/Ulrich-Prinz.igc', 'Ulrich-Prinz.igc');
  });

  document.getElementById('download-kml').addEventListener('click', function () {
    download('data/kml/states.kml', 'states.kml');
  });

  document
    .getElementById('download-topojson')
    .addEventListener('click', function () {
      download('data/topojson/fr-departments.json', 'fr-departments.json');
    });
`

const package_str = `
  {
    "name": "drag-and-drop",
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