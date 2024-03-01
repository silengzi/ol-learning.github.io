<template>
  <h4 id="title">{{title}}</h4>

  <div id="map" class="map"></div>

  <p>This example creates a "rotate to north" button.</p>

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
import OSM from 'ol/source/OSM.js';
import TileLayer from 'ol/layer/Tile.js';
import View from 'ol/View.js';
import {Control, defaults as defaultControls} from 'ol/control.js';

onMounted(() => {

  //
  // Define rotate to north control.
  //

  class RotateNorthControl extends Control {
    /**
     * @param {Object} [opt_options] Control options.
     */
    constructor(opt_options) {
      const options = opt_options || {};

      const button = document.createElement('button');
      button.innerHTML = 'N';

      const element = document.createElement('div');
      element.className = 'rotate-north ol-unselectable ol-control';
      element.appendChild(button);

      // 调用父类的构造函数，传递配置对象
      // target 属性设置为传入的目标元素。
      super({
        element: element,
        target: options.target,
      });

      // 通过 bind(this) 来确保在执行时函数内部的 this 关键字指向当前的 RotateNorthControl 实例
      // 因为在事件监听器中，函数内部的 this 默认指向触发事件的 DOM 元素，而不是 RotateNorthControl 实例
      button.addEventListener('click', this.handleRotateNorth.bind(this), false);
    }

    handleRotateNorth() {
      this.getMap().getView().setRotation(0);
    }
  }

  //
  // Create map, giving it a rotate to north control.
  //

  const map = new Map({
    controls: defaultControls().extend([new RotateNorthControl()]),
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
    ],
    target: 'map',
    view: new View({
      center: [0, 0],
      zoom: 3,
      rotation: 1,
    }),
  });

  // 代码块高亮
  Prism.highlightAll();
});

</script>

<style>
  .map {
    width: 100%;
    height: 400px;
  }
  .rotate-north {
    top: 65px;
    left: 0.5em;
  }
  .ol-touch .rotate-north {
    top: 80px;
  }
</style>
