<template>
  <h4 id="title">{{title}}</h4>
  
  <div id="map" class="map"></div>

  <p>This example parses a KML file and renders the features as clusters on a vector layer. The styling in this example is quite involved. Single earthquake locations (rendered as stars) have a size relative to their magnitude. Clusters have an opacity relative to the number of features in the cluster, and a size that represents the extent of the features that make up the cluster. When clicking or hovering on a cluster, the individual features that make up the cluster will be shown.</p>
  <p>To achieve this, we make heavy use of style functions.</p>

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

import KML from 'ol/format/KML.js';
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import {
  Circle as CircleStyle,
  Fill,
  RegularShape,
  Stroke,
  Style,
  Text,
} from 'ol/style.js';
import {Cluster, StadiaMaps, Vector as VectorSource} from 'ol/source.js';
import {
  Select,
  defaults as defaultInteractions,
} from 'ol/interaction.js';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';
import {createEmpty, extend, getHeight, getWidth} from 'ol/extent.js';

onMounted(() => {

  const earthquakeFill = new Fill({
    color: 'rgba(255, 153, 0, 0.8)',
  });
  const earthquakeStroke = new Stroke({
    color: 'rgba(255, 204, 0, 0.2)',
    width: 1,
  });
  const textFill = new Fill({
    color: '#fff',
  });
  const textStroke = new Stroke({
    color: 'rgba(0, 0, 0, 0.6)',
    width: 3,
  });
  const invisibleFill = new Fill({
    color: 'rgba(255, 255, 255, 0.01)',
  });

  function createEarthquakeStyle(feature) {
    // 2012_Earthquakes_Mag5.kml stores the magnitude of each earthquake in a
    // standards-violating <magnitude> tag in each Placemark.  We extract it
    // from the Placemark's name instead.
    const name = feature.get('name');
    const magnitude = parseFloat(name.substr(2));
    const radius = 5 + 20 * (magnitude - 5);

    return new Style({
      geometry: feature.getGeometry(),
      image: new RegularShape({
        radius1: radius,
        radius2: 3,
        points: 5,
        angle: Math.PI,
        fill: earthquakeFill,
        stroke: earthquakeStroke,
      }),
    });
  }

  let maxFeatureCount;
  let vector = null;
  const calculateClusterInfo = function (resolution) {
    maxFeatureCount = 0;
    const features = vector.getSource().getFeatures();
    let feature, radius;
    for (let i = features.length - 1; i >= 0; --i) {
      feature = features[i];
      const originalFeatures = feature.get('features');
      const extent = createEmpty();
      let j, jj;
      for (j = 0, jj = originalFeatures.length; j < jj; ++j) {
        extend(extent, originalFeatures[j].getGeometry().getExtent());
      }
      maxFeatureCount = Math.max(maxFeatureCount, jj);
      radius = (0.25 * (getWidth(extent) + getHeight(extent))) / resolution;
      feature.set('radius', radius);
    }
  };

  let currentResolution;
  function styleFunction(feature, resolution) {
    if (resolution != currentResolution) {
      calculateClusterInfo(resolution);
      currentResolution = resolution;
    }
    let style;
    const size = feature.get('features').length;
    if (size > 1) {
      style = new Style({
        image: new CircleStyle({
          radius: feature.get('radius'),
          fill: new Fill({
            color: [255, 153, 0, Math.min(0.8, 0.4 + size / maxFeatureCount)],
          }),
        }),
        text: new Text({
          text: size.toString(),
          fill: textFill,
          stroke: textStroke,
        }),
      });
    } else {
      const originalFeature = feature.get('features')[0];
      style = createEarthquakeStyle(originalFeature);
    }
    return style;
  }

  function selectStyleFunction(feature) {
    const styles = [
      new Style({
        image: new CircleStyle({
          radius: feature.get('radius'),
          fill: invisibleFill,
        }),
      }),
    ];
    const originalFeatures = feature.get('features');
    let originalFeature;
    for (let i = originalFeatures.length - 1; i >= 0; --i) {
      originalFeature = originalFeatures[i];
      styles.push(createEarthquakeStyle(originalFeature));
    }
    return styles;
  }

  vector = new VectorLayer({
    source: new Cluster({
      distance: 40,
      source: new VectorSource({
        url: 'data/kml/2012_Earthquakes_Mag5.kml',
        format: new KML({
          extractStyles: false,
        }),
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
    interactions: defaultInteractions().extend([
      new Select({
        condition: function (evt) {
          return evt.type == 'pointermove' || evt.type == 'singleclick';
        },
        style: selectStyleFunction,
      }),
    ]),
    target: 'map',
    view: new View({
      center: [0, 0],
      zoom: 2,
    }),
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
