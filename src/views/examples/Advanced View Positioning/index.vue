<template>
  <h4 id="title">{{title}}</h4>
  
  <div class="mapcontainer">
    <div id="map" class="map"></div>
    <div class="padding-top"></div>
    <div class="padding-left"></div>
    <div class="padding-right"></div>
    <div class="padding-bottom"></div>
    <div class="center"></div>
  </div>
  <button id="zoomtoswitzerland">Zoom to Switzerland</button> (best fit).<br/>
  <button id="zoomtolausanne">Zoom to Lausanne</button> (with min resolution),<br/>
  <button id="centerlausanne">Center on Lausanne</button>

  <!-- <p>This example demonstrates how a map's view can be adjusted so a geometry or coordinate is positioned at a specific pixel location. The map above has top, right, bottom, and left padding applied inside the viewport. The view's <code>fit</code> method is used to fit a geometry in the view with the same padding. The view's <code>centerOn</code> method is used to position a coordinate (Lausanne) at a specific pixel location (the center of the black box).</p> -->
  <p>此示例演示了如何调整地图的视图，以便将几何图形或坐标定位在特定的像素位置。上面的贴图在视口内部应用了顶部、右侧、底部和左侧填充.。视图的<code>fit</code>方法用于使用相同的填充来拟合视图中的几何体。视图的<code>centerOn</code>方法用于将坐标（Lausanne）定位在特定的像素位置（the center of the black box）。</p>
  <!-- <p>Use <code>Alt+Shift+Drag</code> to rotate the map.</p> -->
  <p>使用 <code>Alt+Shift+Drag</code> 旋转地图。</p>
  <!-- <p><b>Note:</b> This example does not shift the view center. So the zoom controls and rotating the map will still use the center of the viewport as anchor. To shift the whole view based on a padding, use the <code>padding</code> option on the view, as shown in the view-padding.html example.</p> -->
  <p><b>提示:</b> 此示例不会移动视图中心。因此，缩放控件和旋转贴图仍将使用视口的中心作为锚点。要基于填充移动整个视图，请在视图上使用<code>padding</code>选项，如view-padding.html示例所示。</p>

  <h5 class="source-heading">html</h5>
  <pre><code class="language-html">{{"  " + html_str.trim().toString()}}</code></pre>
  <h5 class="source-heading">css</h5>
  <pre><code class="language-css">{{"  " + css_str.trim().toString()}}</code></pre>
  <h5 class="source-heading">js</h5>
  <pre><code class="language-js">{{"  " + js_str.trim().toString()}}</code></pre>
  <h5 class="source-heading">package.json</h5>
  <pre><code class="language-json">{{"  " + package_str.trim()}}</code></pre>
</template>

<script setup>
import { onMounted } from "vue";
import { title, html_str, css_str, js_str, package_str } from "./code"

import GeoJSON from 'ol/format/GeoJSON.js';
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import {OSM, Vector as VectorSource} from 'ol/source.js';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';

onMounted(() => {
  const source = new VectorSource({
    // url: 'data/geojson/switzerland.geojson',
    url: 'https://openlayers.org/en/latest/examples/data/geojson/switzerland.geojson',
    format: new GeoJSON(),
  });

  const vectorLayer = new VectorLayer({
    source: source,
    style: {
      'fill-color': 'rgba(255, 255, 255, 0.6)',
      'stroke-width': 1,
      'stroke-color': '#319FD3',
      'circle-radius': 5,
      'circle-fill-color': 'rgba(255, 255, 255, 0.6)',
      'circle-stroke-width': 1,
      'circle-stroke-color': '#319FD3',
    },
  });

  const view = new View({
    center: [0, 0],
    zoom: 1,
  });
  const map = new Map({
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
      vectorLayer,
    ],
    target: 'map',
    view: view,
  });

  const zoomtoswitzerland = document.getElementById('zoomtoswitzerland');
  zoomtoswitzerland.addEventListener(
    'click',
    function () {
      const feature = source.getFeatures()[0];
      // console.log(source.getFeatures())
      const polygon = feature.getGeometry();
      //  调整地图视图以适应所选特征的几何信息
      //  view.fit 是用于调整地图视图的方法
      //  padding 提供了在适应时添加到地图边界的额外像素
      view.fit(polygon, {padding: [170, 50, 30, 150]});
    },
    false
  );

  const zoomtolausanne = document.getElementById('zoomtolausanne');
  zoomtolausanne.addEventListener(
    'click',
    function () {
      const feature = source.getFeatures()[1];
      const point = feature.getGeometry();
      //  调整地图视图以适应所选特征的几何信息
      //  view.fit 是用于调整地图视图的方法
      //  minResolution 设置了适应的最小分辨率。
      view.fit(point, {padding: [170, 50, 30, 150], minResolution: 50});
    },
    false
  );

  const centerlausanne = document.getElementById('centerlausanne');
  centerlausanne.addEventListener(
    'click',
    function () {
      const feature = source.getFeatures()[1];
      const point = feature.getGeometry();
      const size = map.getSize();
      //  [570, 500] 是指定的像素坐标，表示在地图视图居中时，这个像素坐标将位于地图容器的中心。
      //  [570, 500] 这个像素坐标是一个点在地图容器中的像素位置。具体来说，这个数组表示该点距离地图容器左上角的水平和垂直像素偏移。
      //  第一个值 570 表示水平方向（从左到右）的像素偏移量。
      //  第二个值 500 表示垂直方向（从上到下）的像素偏移量。
      //  在地图的视图中，地图容器的左上角是坐标原点 (0, 0)，水平向右是正方向，垂直向下是正方向。
      view.centerOn(point.getCoordinates(), size, [570, 500]);
    },
    false
  );

  // 代码块高亮
  Prism.highlightAll();
});

</script>

<style scoped>
.map {
  width: 100%;
  height: 400px;
}
.mapcontainer {
  position: relative;
  margin-bottom: 20px;
}
.map {
  width: 1000px;
  height: 600px;
}
.map .ol-zoom {
  top: 178px;
  left: 158px;
}
.map .ol-rotate {
  top: 178px;
  right: 58px;
}
.map .ol-attribution,
.map .ol-attribution.ol-uncollapsible {
  bottom: 30px;
  right: 50px;
}
.padding-top {
  position: absolute;
  top: 0;
  left: 0px;
  width: 1000px;
  height: 170px;
  background: rgba(255, 255, 255, 0.5);
}
.padding-left {
  position: absolute;
  top: 170px;
  left: 0;
  width: 150px;
  height: 400px;
  background: rgba(255, 255, 255, 0.5);
}
.padding-right {
  position: absolute;
  top: 170px;
  left: 950px;
  width: 50px;
  height: 400px;
  background: rgba(255, 255, 255, 0.5);
}
.padding-bottom {
  position: absolute;
  top: 570px;
  left: 0px;
  width: 1000px;
  height: 30px;
  background: rgba(255, 255, 255, 0.5);
}
.center {
  position: absolute;
  border: solid 1px black;
  top: 490px;
  left: 560px;
  width: 20px;
  height: 20px;
}
</style>
