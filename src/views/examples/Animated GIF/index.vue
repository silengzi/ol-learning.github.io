<template>
  <h4 id="title">{{title}}</h4>
  
  <div id="map" class="map"></div>

  <!-- <script src="https://cdn.jsdelivr.net/npm/gifler@0.1.0/gifler.min.js"></script> -->

  <p>Example of using an animated GIF as an icon. Animation is achieved using the <a href="https://themadcreator.github.io/gifler/" target="_blank">Gifler</a> library.</p>
  

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
import "./utils"
import { title, html_str, css_str, js_str, package_str } from "./code"

import Feature from 'ol/Feature.js';
import Map from 'ol/Map.js';
import Point from 'ol/geom/Point.js';
import View from 'ol/View.js';
import {Icon, Style} from 'ol/style.js';
import {StadiaMaps, Vector as VectorSource} from 'ol/source.js';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';

onMounted(() => {
  const iconFeature = new Feature({
    geometry: new Point([0, 0]),
  });

  const vectorSource = new VectorSource({
    features: [iconFeature],
  });

  const vectorLayer = new VectorLayer({
    source: vectorSource,
  });

  const rasterLayer = new TileLayer({
    source: new StadiaMaps({
      layer: 'stamen_toner',
    }),
  });

  const map = new Map({
    layers: [rasterLayer, vectorLayer],
    target: document.getElementById('map'),
    view: new View({
      center: [0, 0],
      zoom: 2,
    }),
  });

  const gifUrl = 'https://openlayers.org/en/latest/examples/data/globe.gif';
  //  加载 GIF 图片并使用 gifler 库处理每一帧
  //  使用 gifler 库加载指定 URL 的 GIF 图片，创建一个可以处理 GIF 的对象 gif
  const gif = gifler(gifUrl);
  //  处理 GIF 的每一帧
  //  使用 gif.frames() 方法遍历 GIF 图片的每一帧，并对每一帧执行指定的回调函数。
  gif.frames(
    //  第一个参数是一个用于绘制的 canvas 元素
    document.createElement('canvas'),
    //  第二个参数是每一帧的回调函数，用于对每一帧进行处理。
    //  在这里，回调函数使用 ctx（绘图上下文）和 frame（当前帧的信息）进行操作
    function (ctx, frame) {
      if (!iconFeature.getStyle()) {
        iconFeature.setStyle(
          new Style({
            image: new Icon({
              img: ctx.canvas,
              opacity: 0.8,
            }),
          })
        );
      }
      // 清空绘图上下文
      ctx.clearRect(0, 0, frame.width, frame.height);
      // 将 frame.buffer 绘制到上下文中
      ctx.drawImage(frame.buffer, frame.x, frame.y);
      map.render();
    },
    //  第三个参数是一个布尔值，表示是否循环播放 GIF。在这里设置为 true，即循环播放。
    true
  );

  // change mouse cursor when over icon
  map.on('pointermove', function (e) {
    //  获取鼠标事件 e 的像素坐标
    const pixel = map.getEventPixel(e.originalEvent);
    //  判断在鼠标位置是否有地图要素
    const hit = map.hasFeatureAtPixel(pixel);
    map.getTarget().style.cursor = hit ? 'pointer' : '';
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
