import{M as c,T as m,O as l,V as p}from"./Tile-a51fb408.js";import{_ as d,i as r,o as u,c as _,b as o,t,F as g,j as h,p as w,k as v}from"./index-1aa40be1.js";const n=s=>(w("data-v-09152037"),s=s(),v(),s),b=h('<a class="skiplink" href="#map" data-v-09152037>Go to map</a><div id="map" class="map" tabindex="0" data-v-09152037></div><button id="zoom-out" data-v-09152037>Zoom out</button><button id="zoom-in" data-v-09152037>Zoom in</button><p data-v-09152037>该页的map元素的tabindex属性设置为“0”，这使得它可以聚焦。要聚焦到该元素，您可以使用“tab”键导航到它，也可以点击跳转链接。当地图元素处于聚焦状态时，您可以使用键盘的+和-键来对地图进行放大和缩小，以及可以使用键盘方向键来平移地图。</p><p data-v-09152037>点击地图下方的“放大”和“缩小”按钮可以放大和缩小地图。您可以使用“tab”键聚焦到按钮上，然后键盘按下回车“enter”键来触发缩放操作。</p><h5 class="source-heading" data-v-09152037>html</h5>',7),f={class:"language-html"},k=n(()=>o("h5",{class:"source-heading"},"css",-1)),z={class:"language-css"},x=n(()=>o("h5",{class:"source-heading"},"js",-1)),M={class:"language-js"},y=n(()=>o("h5",{class:"source-heading"},"package.json",-1)),Z={class:"language-json"},V="Accessible Map",j=`
  <a class="skiplink" href="#map">Go to map</a>
  <div id="map" class="map" tabindex="0"></div>
  <button id="zoom-out">Zoom out</button>
  <button id="zoom-in">Zoom in</button>
`,S=`
  .map {
    width: 100%;
    height: 400px;
  }
  a.skiplink {
    position: absolute;
    clip: rect(1px, 1px, 1px, 1px);
    padding: 0;
    border: 0;
    height: 1px;
    width: 1px;
    overflow: hidden;
  }
  a.skiplink:focus {
    clip: auto;
    height: auto;
    width: auto;
    background-color: #fff;
    padding: 0.3em;
  }
  #map:focus {
    outline: #4A74A8 solid 0.15em;
  }
`,I=`
  import Map from 'ol/Map.js';
  import OSM from 'ol/source/OSM.js';
  import TileLayer from 'ol/layer/Tile.js';
  import View from 'ol/View.js';

  const map = new Map({
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
    ],
    target: 'map',
    view: new View({
      center: [0, 0],
      zoom: 2,
    }),
  });

  document.getElementById('zoom-out').onclick = function () {
    const view = map.getView();
    const zoom = view.getZoom();
    view.setZoom(zoom - 1);
  };

  document.getElementById('zoom-in').onclick = function () {
    const view = map.getView();
    const zoom = view.getZoom();
    view.setZoom(zoom + 1);
  };
`,A=`
  {
    "name": "accessible",
    "dependencies": {
      "ol": "8.1.0"
    },
    "devDependencies": {
      "vite": "^3.2.3"
    },
    "scripts": {
      "start": "vite",
      "build": "vite build"
    }
  }
`,B={__name:"Accessible Map",setup(s){return r(()=>{const a=new c({layers:[new m({source:new l})],target:"map",view:new p({center:[0,0],zoom:2})});document.getElementById("zoom-out").onclick=function(){const e=a.getView(),i=e.getZoom();e.setZoom(i-1)},document.getElementById("zoom-in").onclick=function(){const e=a.getView(),i=e.getZoom();e.setZoom(i+1)},Prism.highlightAll()}),(a,e)=>(u(),_(g,null,[o("h4",{id:"title"},t(V)),b,o("pre",null,[o("code",f,t("  "+j.trim()),1)]),k,o("pre",null,[o("code",z,t("  "+S.trim()),1)]),x,o("pre",null,[o("code",M,t("  "+I.trim()),1)]),y,o("pre",null,[o("code",Z,t("  "+A.trim()),1)])],64))}},T=d(B,[["__scopeId","data-v-09152037"]]);export{T as default};
