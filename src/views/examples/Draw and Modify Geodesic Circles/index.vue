<template>
  <h4 id="title">{{title}}</h4>
  
  <div id="map" class="map"></div>
  <form>
    <label for="type">Geometry type &nbsp;</label>
    <select id="type">
      <option value="Point">Point</option>
      <option value="LineString">LineString</option>
      <option value="Polygon">Polygon</option>
      <option value="Circle">Circle Geometry</option>
      <option value="Geodesic" selected>Geodesic Circle</option>
    </select>
  </form>

  <p>Example of using the ol/interaction/Draw interaction with a custom geometry function together with the ol/interaction/Modify interaction to draw and modify geodesic circles (a ol/geom/Polygon#circular polygon representing a circle on the surface of the Earth's sphere). The polygon is placed in a ol/geom/GeometryCollection together with a ol/geom/Point which allows the Modify interaction to adjust the circle center as well as the radius. Custom style functions ensure the correct final geometry is displayed throughout. ol/geom/Circle projected (planar) geometries can also be drawn and modified. The difference between geodesic and projected circles can be seen when their centers are moved between northern and southern latitudes in the Web Mercator projection. The ol/interaction/Snap interaction can be used to create concentric circles.</p>

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

import Map from 'ol/Map.js';
import View from 'ol/View.js';
import {Circle as CircleStyle, Fill, Stroke, Style} from 'ol/style.js';
import {Draw, Modify, Snap} from 'ol/interaction.js';
import {GeometryCollection, Point, Polygon} from 'ol/geom.js';
import {OSM, Vector as VectorSource} from 'ol/source.js';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';
import {circular} from 'ol/geom/Polygon.js';
import {getDistance} from 'ol/sphere.js';
import {transform} from 'ol/proj.js';

onMounted(() => {

  const raster = new TileLayer({
    source: new OSM(),
  });

  const source = new VectorSource();

  const style = new Style({
    fill: new Fill({
      color: 'rgba(255, 255, 255, 0.2)',
    }),
    stroke: new Stroke({
      color: '#33cc33',
      width: 2,
    }),
    image: new CircleStyle({
      radius: 7,
      fill: new Fill({
        color: '#ffcc33',
      }),
    }),
  });

  const geodesicStyle = new Style({
    geometry: function (feature) {
      return feature.get('modifyGeometry') || feature.getGeometry();
    },
    fill: new Fill({
      color: 'rgba(255, 255, 255, 0.2)',
    }),
    stroke: new Stroke({
      color: '#ff3333',
      width: 2,
    }),
    image: new CircleStyle({
      radius: 7,
      fill: new Fill({
        color: 'rgba(0, 0, 0, 0)',
      }),
    }),
  });

  const vector = new VectorLayer({
    source: source,
    style: function (feature) {
      const geometry = feature.getGeometry();
      return geometry.getType() === 'GeometryCollection' ? geodesicStyle : style;
    },
  });

  const map = new Map({
    layers: [raster, vector],
    target: 'map',
    view: new View({
      center: [-11000000, 6600000],
      zoom: 3,
    }),
  });

  const defaultStyle = new Modify({source: source})
    .getOverlay()
    .getStyleFunction();

  const modify = new Modify({
    source: source,
    style: function (feature) {
      feature.get('features').forEach(function (modifyFeature) {
        const modifyGeometry = modifyFeature.get('modifyGeometry');
        if (modifyGeometry) {
          const modifyPoint = feature.getGeometry().getCoordinates();
          const geometries = modifyFeature.getGeometry().getGeometries();
          const polygon = geometries[0].getCoordinates()[0];
          const center = geometries[1].getCoordinates();
          const projection = map.getView().getProjection();
          let first, last, radius;
          if (modifyPoint[0] === center[0] && modifyPoint[1] === center[1]) {
            // center is being modified
            // get unchanged radius from diameter between polygon vertices
            first = transform(polygon[0], projection, 'EPSG:4326');
            last = transform(
              polygon[(polygon.length - 1) / 2],
              projection,
              'EPSG:4326'
            );
            radius = getDistance(first, last) / 2;
          } else {
            // radius is being modified
            first = transform(center, projection, 'EPSG:4326');
            last = transform(modifyPoint, projection, 'EPSG:4326');
            radius = getDistance(first, last);
          }
          // update the polygon using new center or radius
          const circle = circular(
            transform(center, projection, 'EPSG:4326'),
            radius,
            128
          );
          circle.transform('EPSG:4326', projection);
          geometries[0].setCoordinates(circle.getCoordinates());
          // save changes to be applied at the end of the interaction
          modifyGeometry.setGeometries(geometries);
        }
      });
      return defaultStyle(feature);
    },
  });

  modify.on('modifystart', function (event) {
    event.features.forEach(function (feature) {
      const geometry = feature.getGeometry();
      if (geometry.getType() === 'GeometryCollection') {
        feature.set('modifyGeometry', geometry.clone(), true);
      }
    });
  });

  modify.on('modifyend', function (event) {
    event.features.forEach(function (feature) {
      const modifyGeometry = feature.get('modifyGeometry');
      if (modifyGeometry) {
        feature.setGeometry(modifyGeometry);
        feature.unset('modifyGeometry', true);
      }
    });
  });

  map.addInteraction(modify);

  let draw, snap; // global so we can remove them later
  const typeSelect = document.getElementById('type');

  function addInteractions() {
    let value = typeSelect.value;
    let geometryFunction;
    if (value === 'Geodesic') {
      value = 'Circle';
      geometryFunction = function (coordinates, geometry, projection) {
        if (!geometry) {
          geometry = new GeometryCollection([
            new Polygon([]),
            new Point(coordinates[0]),
          ]);
        }
        const geometries = geometry.getGeometries();
        const center = transform(coordinates[0], projection, 'EPSG:4326');
        const last = transform(coordinates[1], projection, 'EPSG:4326');
        const radius = getDistance(center, last);
        const circle = circular(center, radius, 128);
        circle.transform('EPSG:4326', projection);
        geometries[0].setCoordinates(circle.getCoordinates());
        geometry.setGeometries(geometries);
        return geometry;
      };
    }
    draw = new Draw({
      source: source,
      type: value,
      geometryFunction: geometryFunction,
    });
    map.addInteraction(draw);
    snap = new Snap({source: source});
    map.addInteraction(snap);
  }

  /**
   * Handle change event.
   */
  typeSelect.onchange = function () {
    map.removeInteraction(draw);
    map.removeInteraction(snap);
    addInteractions();
  };

  addInteractions();

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
