<template>
  <h4 id="title">{{title}}</h4>
  
  <div id="map" class="map">
    <div id="info"></div>
  </div>

  <p>This example parses a KML file and renders the features as a vector layer. The layer is given a style that renders earthquake locations with a size relative to their magnitude.</p>

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
import "../../../assets/js/bootstrap"

import KML from 'ol/format/KML.js';
import Map from 'ol/Map.js';
import StadiaMaps from 'ol/source/StadiaMaps.js';
import VectorSource from 'ol/source/Vector.js';
import View from 'ol/View.js';
import {Circle as CircleStyle, Fill, Stroke, Style} from 'ol/style.js';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';

onMounted(() => {

  const styleCache = {};
  const styleFunction = function (feature) {
    // 2012_Earthquakes_Mag5.kml stores the magnitude of each earthquake in a
    // standards-violating <magnitude> tag in each Placemark.  We extract it from
    // the Placemark's name instead.
    const name = feature.get('name');
    const magnitude = parseFloat(name.substr(2));
    const radius = 5 + 20 * (magnitude - 5);
    let style = styleCache[radius];
    if (!style) {
      style = new Style({
        image: new CircleStyle({
          radius: radius,
          fill: new Fill({
            color: 'rgba(255, 153, 0, 0.4)',
          }),
          stroke: new Stroke({
            color: 'rgba(255, 204, 0, 0.2)',
            width: 1,
          }),
        }),
      });
      styleCache[radius] = style;
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

  const info = document.getElementById('info');
  info.style.pointerEvents = 'none';
  const tooltip = new bootstrap.Tooltip(info, {
    animation: false,
    customClass: 'pe-none',
    offset: [0, 5],
    title: '-',
    trigger: 'manual',
  });

  let currentFeature;
  const displayFeatureInfo = function (pixel, target) {
    const feature = target.closest('.ol-control')
      ? undefined
      : map.forEachFeatureAtPixel(pixel, function (feature) {
          return feature;
        });
    if (feature) {
      info.style.left = pixel[0] + 'px';
      info.style.top = pixel[1] + 'px';
      if (feature !== currentFeature) {
        tooltip.setContent({'.tooltip-inner': feature.get('name')});
      }
      if (currentFeature) {
        tooltip.update();
      } else {
        tooltip.show();
      }
    } else {
      tooltip.hide();
    }
    currentFeature = feature;
  };

  map.on('pointermove', function (evt) {
    if (evt.dragging) {
      tooltip.hide();
      currentFeature = undefined;
      return;
    }
    const pixel = map.getEventPixel(evt.originalEvent);
    displayFeatureInfo(pixel, evt.originalEvent.target);
  });

  map.on('click', function (evt) {
    displayFeatureInfo(evt.pixel, evt.originalEvent.target);
  });

  map.getTargetElement().addEventListener('pointerleave', function () {
    tooltip.hide();
    currentFeature = undefined;
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
  #map {
    position: relative;
  }
  #info {
    position: absolute;
    height: 1px;
    width: 1px;
    z-index: 100;
  }
</style>
<style>
  @import url(../../../assets/css/bootstrap.css);
  .tooltip.in {
    opacity: 1;
  }
  .tooltip.top .tooltip-arrow {
    border-top-color: white;
  }
  .tooltip-inner {
    border: 2px solid white;
  }
</style>