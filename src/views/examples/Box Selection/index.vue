<template>
  <h4 id="title">{{title}}</h4>

  <div id="map" class="map"></div>
  <div>Selected regions: <span id="info">None</span></div>

  <p>This example shows how to use a <code>DragBox</code> interaction to select features. Selected features are added to the feature overlay of a select interaction (<code>ol/interaction/Select</code>) for highlighting.</p>
  <p>Use <code>Ctrl+Drag</code> (<code>Command+Drag</code> on Mac) to draw boxes.</p>

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

import GeoJSON from 'ol/format/GeoJSON.js';
import Map from 'ol/Map.js';
import VectorLayer from 'ol/layer/Vector.js';
import VectorSource from 'ol/source/Vector.js';
import View from 'ol/View.js';
import {DragBox, Select} from 'ol/interaction.js';
import {Fill, Stroke, Style} from 'ol/style.js';
import {getWidth} from 'ol/extent.js';
import {platformModifierKeyOnly} from 'ol/events/condition.js';

onMounted(() => {

  const vectorSource = new VectorSource({
    url: 'https://openlayers.org/data/vector/ecoregions.json',
    format: new GeoJSON(),
  });

  const style = new Style({
    fill: new Fill({
      //  在这里是不是可以不设置颜色?
      color: '#eeeeee',
    }),
  });

  const map = new Map({
    layers: [
      new VectorLayer({
        source: vectorSource,
        background: '#1a2b39',
        style: function (feature) {
          const color = feature.get('COLOR_BIO') || '#eeeeee';
          style.getFill().setColor(color);
          return style;
        },
      }),
    ],
    target: 'map',
    view: new View({
      center: [0, 0],
      zoom: 2,
      //  表示地图的旋转将被限制在 16 的倍数
      constrainRotation: 16,
    }),
  });

  const selectedStyle = new Style({
    fill: new Fill({
      color: 'rgba(255, 255, 255, 0.6)',
    }),
    stroke: new Stroke({
      color: 'rgba(255, 255, 255, 0.7)',
      width: 2,
    }),
  });

  // a normal select interaction to handle click
  const select = new Select({
    style: function (feature) {
      const color = feature.get('COLOR_BIO') || '#eeeeee';
      selectedStyle.getFill().setColor(color);
      return selectedStyle;
    },
  });
  map.addInteraction(select);

  const selectedFeatures = select.getFeatures();

  // a DragBox interaction used to select features by drawing boxes
  const dragBox = new DragBox({
    //  用于指定事件触发条件的一种设置
    //  platformModifierKeyOnly 表示事件只在同时按下平台相关的修饰键时才触发
    //  例如在 Windows 上是 Ctrl 键，在 Mac 上是 Command 键
    condition: platformModifierKeyOnly,
  });

  map.addInteraction(dragBox);
  
  //  dragBox 是 OpenLayers 中用于创建拖拽框的交互对象。
  //  拖拽框 (dragBox) 结束绘制时触发
  dragBox.on('boxend', function () {
    //  getExtent() 用于获取几何图形对象的范围，返回一个包含四个坐标值的数组，表示左下角和右上角的坐标。
    const boxExtent = dragBox.getGeometry().getExtent();

    // if the extent crosses the antimeridian process each world separately
    //  用于检查绘制的框是否横跨了地图的反子午线。如果是，可能需要分别处理两个半球的情况。
    const worldExtent = map.getView().getProjection().getExtent();
    const worldWidth = getWidth(worldExtent);
    const startWorld = Math.floor((boxExtent[0] - worldExtent[0]) / worldWidth);
    const endWorld = Math.floor((boxExtent[2] - worldExtent[0]) / worldWidth);

    //  遍历横跨的半球，将绘制的框的范围在每个半球上进行处理
    for (let world = startWorld; world <= endWorld; ++world) {
      const left = Math.max(boxExtent[0] - world * worldWidth, worldExtent[0]);
      const right = Math.min(boxExtent[2] - world * worldWidth, worldExtent[2]);
      const extent = [left, boxExtent[1], right, boxExtent[3]];

      const boxFeatures = vectorSource
        .getFeaturesInExtent(extent)
        .filter(
          (feature) =>
            !selectedFeatures.getArray().includes(feature) &&
            feature.getGeometry().intersectsExtent(extent)
        );

      // features that intersect the box geometry are added to the
      // collection of selected features

      // if the view is not obliquely rotated the box geometry and
      // its extent are equalivalent so intersecting features can
      // be added directly to the collection
      const rotation = map.getView().getRotation();
      const oblique = rotation % (Math.PI / 2) !== 0;

      // when the view is obliquely rotated the box extent will
      // exceed its geometry so both the box and the candidate
      // feature geometries are rotated around a common anchor
      // to confirm that, with the box geometry aligned with its
      // extent, the geometries intersect
      if (oblique) {
        const anchor = [0, 0];
        const geometry = dragBox.getGeometry().clone();
        geometry.translate(-world * worldWidth, 0);
        geometry.rotate(-rotation, anchor);
        const extent = geometry.getExtent();
        boxFeatures.forEach(function (feature) {
          const geometry = feature.getGeometry().clone();
          geometry.rotate(-rotation, anchor);
          if (geometry.intersectsExtent(extent)) {
            selectedFeatures.push(feature);
          }
        });
      } else {
        selectedFeatures.extend(boxFeatures);
      }
    }
  });

  // clear selection when drawing a new box and when clicking on the map
  dragBox.on('boxstart', function () {
    selectedFeatures.clear();
  });

  const infoBox = document.getElementById('info');

  selectedFeatures.on(['add', 'remove'], function () {
    const names = selectedFeatures.getArray().map((feature) => {
      return feature.get('ECO_NAME');
    });
    if (names.length > 0) {
      infoBox.innerHTML = names.join(', ');
    } else {
      infoBox.innerHTML = 'None';
    }
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
