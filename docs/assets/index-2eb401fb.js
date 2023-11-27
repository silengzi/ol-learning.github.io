import{G as f}from"./GeoJSON-45a42f0d.js";import{V as g,M as h}from"./Layer-5200258f.js";import{_ as v,i as w,o as b,c as _,b as e,t as a,g as n,d as l,F as x,j as p,p as z,k as y}from"./index-c940254e.js";import{V as k,a as S}from"./Vector-296c2e9e.js";import{T as L}from"./Tile-aca76f7d.js";import{O as V}from"./OSM-7231e773.js";import"./JSONFeature-755d0ee7.js";import"./MultiPolygon-2ad6ba11.js";import"./featureloader-ed474c2d.js";import"./Layer-a8143b89.js";import"./BaseTile-53865aab.js";import"./TileProperty-ab86017d.js";import"./TileLayer-7e43e564.js";import"./XYZ-7263712f.js";import"./TileImage-4a3fae9a.js";import"./UrlTile-d31c8ece.js";const j="Advanced View Positioning",E=`
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
`,F=`
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
`,T=`
  import GeoJSON from 'ol/format/GeoJSON.js';
  import Map from 'ol/Map.js';
  import View from 'ol/View.js';
  import {OSM, Vector as VectorSource} from 'ol/source.js';
  import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';

  const source = new VectorSource({
    url: 'data/geojson/switzerland.geojson',
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
      const polygon = feature.getGeometry();
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
      view.centerOn(point.getCoordinates(), size, [570, 500]);
    },
    false
  );
`,G=`
  {
    "name": "center",
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
`;const i=s=>(z("data-v-45d86aff"),s=s(),y(),s),O={id:"title"},I=p('<div class="mapcontainer" data-v-45d86aff><div id="map" class="map" data-v-45d86aff></div><div class="padding-top" data-v-45d86aff></div><div class="padding-left" data-v-45d86aff></div><div class="padding-right" data-v-45d86aff></div><div class="padding-bottom" data-v-45d86aff></div><div class="center" data-v-45d86aff></div></div><button id="zoomtoswitzerland" data-v-45d86aff>Zoom to Switzerland</button>',2),B=i(()=>e("br",null,null,-1)),M=i(()=>e("button",{id:"zoomtolausanne"},"Zoom to Lausanne",-1)),N=p('<br data-v-45d86aff><button id="centerlausanne" data-v-45d86aff>Center on Lausanne</button><p data-v-45d86aff>This example demonstrates how a map&#39;s view can be adjusted so a geometry or coordinate is positioned at a specific pixel location. The map above has top, right, bottom, and left padding applied inside the viewport. The view&#39;s <code data-v-45d86aff>fit</code> method is used to fit a geometry in the view with the same padding. The view&#39;s <code data-v-45d86aff>centerOn</code> method is used to position a coordinate (Lausanne) at a specific pixel location (the center of the black box).</p><p data-v-45d86aff>Use <code data-v-45d86aff>Alt+Shift+Drag</code> to rotate the map.</p><p data-v-45d86aff><b data-v-45d86aff>Note:</b> This example does not shift the view center. So the zoom controls and rotating the map will still use the center of the viewport as anchor. To shift the whole view based on a padding, use the <code data-v-45d86aff>padding</code> option on the view, as shown in the view-padding.html example.</p><h5 class="source-heading" data-v-45d86aff>html</h5>',6),D={class:"language-html"},C=i(()=>e("h5",{class:"source-heading"},"css",-1)),J={class:"language-css"},Z=i(()=>e("h5",{class:"source-heading"},"js",-1)),A={class:"language-js"},P=i(()=>e("h5",{class:"source-heading"},"package.json",-1)),R={class:"language-json"},U={__name:"index",setup(s){return w(()=>{const t=new k({url:"https://openlayers.org/en/latest/examples/data/geojson/switzerland.geojson",format:new f}),d=new S({source:t,style:{"fill-color":"rgba(255, 255, 255, 0.6)","stroke-width":1,"stroke-color":"#319FD3","circle-radius":5,"circle-fill-color":"rgba(255, 255, 255, 0.6)","circle-stroke-width":1,"circle-stroke-color":"#319FD3"}}),r=new g({center:[0,0],zoom:1}),m=new h({layers:[new L({source:new V}),d],target:"map",view:r});document.getElementById("zoomtoswitzerland").addEventListener("click",function(){const o=t.getFeatures()[0].getGeometry();r.fit(o,{padding:[170,50,30,150]})},!1),document.getElementById("zoomtolausanne").addEventListener("click",function(){const o=t.getFeatures()[1].getGeometry();r.fit(o,{padding:[170,50,30,150],minResolution:50})},!1),document.getElementById("centerlausanne").addEventListener("click",function(){const o=t.getFeatures()[1].getGeometry(),u=m.getSize();r.centerOn(o.getCoordinates(),u,[570,500])},!1),Prism.highlightAll()}),(t,d)=>(b(),_(x,null,[e("h4",O,a(n(j)),1),I,l(" (best fit)."),B,M,l(" (with min resolution),"),N,e("pre",null,[e("code",D,a("  "+n(E).trim().toString()),1)]),C,e("pre",null,[e("code",J,a("  "+n(F).trim().toString()),1)]),Z,e("pre",null,[e("code",A,a("  "+n(T).trim().toString()),1)]),P,e("pre",null,[e("code",R,a("  "+n(G).trim()),1)])],64))}},pe=v(U,[["__scopeId","data-v-45d86aff"]]);export{pe as default};
