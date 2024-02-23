<template>
  <h4 id="title">{{title}}</h4>

  <div id="map" class="map"></div>
  Set the layer style
  <select id="style">
    <option value="trueColor">True Color</option>
    <!-- 假彩色 -->
    <option value="falseColor">False Color</option>
    <option value="ndvi">NDVI</option>
    <option value="ndviPalettePlasma">NDVI w/ palette 1</option>
    <option value="ndviPaletteViridis">NDVI w/ palette 2</option>
  </select>

  <p>When you want to change the style of a WebGL tile layer based on some change in your application state, you should use the <code>layer.updateStyleVariables()</code> method. A layer can be efficiently rendered even if style variables are changed on every render frame. In cases where you need to completely replace the style of a layer, you can call the <code>layer.setStyle()</code> method. This method should not be called in response to frequent user events (e.g. mouse movement, dragging a slider, etc.).</p>
  <p>当您希望根据应用程序状态的某些更改来更改WebGL平铺层的样式时，应使用layer.updateStyleVariables()方法。即使在每个渲染帧上更改了样式变量，也可以有效地渲染层。在需要完全替换层的样式的情况下，可以调用layer.setStyle()方法。不应在频繁的用户事件（例如，鼠标移动、拖动滑块等）时调用此方法</p>

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

import GeoTIFF from 'ol/source/GeoTIFF.js';
import Map from 'ol/Map.js';
import TileLayer from 'ol/layer/WebGLTile.js';
import View from 'ol/View.js';

onMounted(() => {

  // 归一化处理
  const max = 3000;
  function normalize(value) {
    //  value/max
    return ['/', value, max];
  }

  const red = normalize(['band', 1]);
  const green = normalize(['band', 2]);
  const blue = normalize(['band', 3]);
  const nir = normalize(['band', 4]);

  const trueColor = {
    color: ['array', red, green, blue, 1],
    //  图像的亮度和对比度调整
    gamma: 1.1,
  };

  const falseColor = {
    color: ['array', nir, red, green, 1],
    gamma: 1.1,
  };

  const ndvi = {
    color: [
      'interpolate',
      ['linear'],
      ['/', ['-', nir, red], ['+', nir, red]],
      // color ramp for NDVI values, ranging from -1 to 1
      -0.2,
      [191, 191, 191],
      -0.1,
      [219, 219, 219],
      0,
      [255, 255, 224],
      0.025,
      [255, 250, 204],
      0.05,
      [237, 232, 181],
      0.075,
      [222, 217, 156],
      0.1,
      [204, 199, 130],
      0.125,
      [189, 184, 107],
      0.15,
      [176, 194, 97],
      0.175,
      [163, 204, 89],
      0.2,
      [145, 191, 82],
      0.25,
      [128, 179, 71],
      0.3,
      [112, 163, 64],
      0.35,
      [97, 150, 54],
      0.4,
      [79, 138, 46],
      0.45,
      [64, 125, 36],
      0.5,
      [48, 110, 28],
      0.55,
      [33, 97, 18],
      0.6,
      [15, 84, 10],
      0.65,
      [0, 69, 0],
    ],
  };

  const ndviPalettePlasma = {
    color: [
      'palette',
      [
        'interpolate',
        ['linear'],
        ['/', ['-', nir, red], ['+', nir, red]],
        -0.2,
        0,
        0.65,
        4,
      ],
      ['#0d0887', '#7e03a8', '#cb4778', '#f89540', '#f0f921'],
    ],
  };
  const ndviPaletteViridis = {
    color: [
      'palette',
      [
        'interpolate',
        ['linear'],
        ['/', ['-', nir, red], ['+', nir, red]],
        -0.2,
        0,
        0.65,
        4,
      ],
      ['#440154', '#3b528b', '#21918c', '#5ec962', '#fde725'],
    ],
  };

  const layer = new TileLayer({
    style: trueColor,
    source: new GeoTIFF({
      //  不进行归一化处理
      normalize: false,
      sources: [
        {
          url: 'https://s2downloads.eox.at/demo/EOxCloudless/2020/rgbnir/s2cloudless2020-16bits_sinlge-file_z0-4.tif',
        },
      ],
    }),
  });

  const map = new Map({
    target: 'map',
    layers: [layer],
    view: new View({
      projection: 'EPSG:4326',
      center: [0, 0],
      zoom: 2,
      maxZoom: 6,
    }),
  });

  const styles = {
    trueColor,
    falseColor,
    ndvi,
    ndviPalettePlasma,
    ndviPaletteViridis,
  };

  const styleSelector = document.getElementById('style');

  function update() {
    const style = styles[styleSelector.value];
    layer.setStyle(style);
  }
  styleSelector.addEventListener('change', update);

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
