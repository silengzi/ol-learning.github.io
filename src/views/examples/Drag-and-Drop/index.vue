<template>
  <h4 id="title">{{title}}</h4>
  
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

  <p>Example of using the drag-and-drop interaction. Drag and drop GPX, GeoJSON, IGC, KML, or TopoJSON files on to the map. There is no projection transform support, so this will only work with data in EPSG:4326 and EPSG:3857.</p>

  <h5 class="source-heading">html</h5>
  <pre><code class="language-html">{{"  " + html_str.trim()}}</code></pre>
  <h5 class="source-heading">css</h5>
  <pre><code class="language-css">{{"  " + css_str.trim()}}</code></pre>
  <h5 class="source-heading">js</h5>
  <pre><code class="language-js">{{"  " + js_str.trim()}}</code></pre>
  <h5 class="source-heading">package.json</h5>
  <pre><code class="language-json">{{"  " + package_str.trim()}}</code></pre>
</template>

<script setup>
import { onMounted } from "vue";
import { title, html_str, css_str, js_str, package_str } from "./code"

import DragAndDrop from 'ol/interaction/DragAndDrop.js';
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import {GPX, GeoJSON, IGC, KML, TopoJSON} from 'ol/format.js';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';
import {Vector as VectorSource, XYZ} from 'ol/source.js';

onMounted(() => {

  // const key = 'Get your own API key at https://www.maptiler.com/cloud/';
  const key = 'UvzNAwhugDuwndyxsHmE';
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

  // 代码块高亮
  Prism.highlightAll();
});

</script>

<style scoped>
  .map {
    width: 100%;
    height: 400px;
  }
</style>
