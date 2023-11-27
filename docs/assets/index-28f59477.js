import{M as m,V as d}from"./Layer-5200258f.js";import{O as p}from"./OSM-7231e773.js";import{T as r}from"./Tile-aca76f7d.js";import{_ as l,i as u,o as _,c as g,b as o,t as e,g as s,F as h,j as f,p as b,k as w}from"./index-c940254e.js";import"./XYZ-7263712f.js";import"./TileImage-4a3fae9a.js";import"./TileProperty-ab86017d.js";import"./UrlTile-d31c8ece.js";import"./BaseTile-53865aab.js";import"./TileLayer-7e43e564.js";import"./Layer-a8143b89.js";const v="Accessible Map",k=`
  <a class="skiplink" href="#map">Go to map</a>
  <div id="map" class="map" tabindex="0"></div>
  <button id="zoom-out">Zoom out</button>
  <button id="zoom-in">Zoom in</button>
`,x=`
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
`,z=`
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
`,y=`
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
`;const c=a=>(b("data-v-a9f79d1b"),a=a(),w(),a),Z={id:"title"},M=f('<a class="skiplink" href="#map" data-v-a9f79d1b>Go to map</a><div id="map" class="map" tabindex="0" data-v-a9f79d1b></div><button id="zoom-out" data-v-a9f79d1b>Zoom out</button><button id="zoom-in" data-v-a9f79d1b>Zoom in</button><p data-v-a9f79d1b>该页的map元素的tabindex属性设置为“0”，这使得它可以聚焦。要聚焦到该元素，您可以使用“tab”键导航到它，也可以点击跳转链接。当地图元素处于聚焦状态时，您可以使用键盘的+和-键来对地图进行放大和缩小，以及可以使用键盘方向键来平移地图。</p><p data-v-a9f79d1b>点击地图下方的“放大”和“缩小”按钮可以放大和缩小地图。您可以使用“tab”键聚焦到按钮上，然后键盘按下回车“enter”键来触发缩放操作。</p><h5 class="source-heading" data-v-a9f79d1b>html</h5>',7),V={class:"language-html"},j=c(()=>o("h5",{class:"source-heading"},"css",-1)),S={class:"language-css"},I=c(()=>o("h5",{class:"source-heading"},"js",-1)),B={class:"language-js"},E=c(()=>o("h5",{class:"source-heading"},"package.json",-1)),O={class:"language-json"},T={__name:"index",setup(a){return u(()=>{const i=new m({layers:[new r({source:new p})],target:"map",view:new d({center:[0,0],zoom:2})});document.getElementById("zoom-out").onclick=function(){const t=i.getView(),n=t.getZoom();t.setZoom(n-1)},document.getElementById("zoom-in").onclick=function(){const t=i.getView(),n=t.getZoom();t.setZoom(n+1)},Prism.highlightAll()}),(i,t)=>(_(),g(h,null,[o("h4",Z,e(s(v)),1),M,o("pre",null,[o("code",V,e("  "+s(k).trim()),1)]),j,o("pre",null,[o("code",S,e("  "+s(x).trim()),1)]),I,o("pre",null,[o("code",B,e("  "+s(z).trim()),1)]),E,o("pre",null,[o("code",O,e("  "+s(y).trim()),1)])],64))}},K=l(T,[["__scopeId","data-v-a9f79d1b"]]);export{K as default};
