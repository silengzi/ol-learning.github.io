import{G as g}from"./GeoJSON-a3eacfc4.js";import{V as v,M as h}from"./Layer-3211d6ef.js";import{_ as f,i as w,o as b,c as _,b as t,t as a,g as n,d as l,F as x,j as p,p as z,k as y}from"./index-8e73cb60.js";import{V as k}from"./Vector-163f0152.js";import{V as S}from"./Vector-2de0a908.js";import{T as L}from"./Tile-d932c51d.js";import{O as V}from"./OSM-39b8e613.js";import"./GeometryCollection-03015b2a.js";import"./JSONFeature-2245ccdf.js";import"./Feature-5a984f38.js";import"./LineString-d3d6f49c.js";import"./featureloader-4f961e27.js";import"./Style-22e788f3.js";import"./MultiPolygon-f290964a.js";import"./MultiPoint-e6eff345.js";import"./VectorLayer-f045426f.js";import"./hitdetect-4f776f31.js";import"./vector-01534e8d.js";import"./Layer-8f64fa5e.js";import"./BaseTile-47530170.js";import"./TileProperty-f0a52f17.js";import"./TileLayer-d6ace1df.js";import"./XYZ-2a4e8198.js";import"./TileImage-a70beb77.js";import"./UrlTile-7d5bd7ce.js";const j="Advanced View Positioning(高级视图定位)",E=`
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
`,G=`
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
`,O=`
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
`;const s=i=>(z("data-v-6d82a86c"),i=i(),y(),i),I={id:"title"},B=p('<div class="mapcontainer" data-v-6d82a86c><div id="map" class="map" data-v-6d82a86c></div><div class="padding-top" data-v-6d82a86c></div><div class="padding-left" data-v-6d82a86c></div><div class="padding-right" data-v-6d82a86c></div><div class="padding-bottom" data-v-6d82a86c></div><div class="center" data-v-6d82a86c></div></div><button id="zoomtoswitzerland" data-v-6d82a86c>Zoom to Switzerland</button>',2),M=s(()=>t("br",null,null,-1)),D=s(()=>t("button",{id:"zoomtolausanne"},"Zoom to Lausanne",-1)),N=p('<br data-v-6d82a86c><button id="centerlausanne" data-v-6d82a86c>Center on Lausanne</button><p data-v-6d82a86c>此示例演示了如何调整地图的视图，以便将几何图形或坐标定位在特定的像素位置。上面的贴图在视口内部应用了顶部、右侧、底部和左侧填充.。视图的<code data-v-6d82a86c>fit</code>方法用于使用相同的填充来拟合视图中的几何体。视图的<code data-v-6d82a86c>centerOn</code>方法用于将坐标（Lausanne）定位在特定的像素位置（the center of the black box）。</p><p data-v-6d82a86c>使用 <code data-v-6d82a86c>Alt+Shift+Drag</code> 旋转地图。</p><p data-v-6d82a86c><b data-v-6d82a86c>提示:</b> 此示例不会移动视图中心。因此，缩放控件和旋转贴图仍将使用视口的中心作为锚点。要基于填充移动整个视图，请在视图上使用<code data-v-6d82a86c>padding</code>选项，如view-padding.html示例所示。</p><h5 class="source-heading" data-v-6d82a86c>html</h5>',6),T={class:"language-html"},C=s(()=>t("h5",{class:"source-heading"},"css",-1)),J={class:"language-css"},Z=s(()=>t("h5",{class:"source-heading"},"js",-1)),A={class:"language-js"},P=s(()=>t("h5",{class:"source-heading"},"package.json",-1)),R={class:"language-json"},q={__name:"index",setup(i){return w(()=>{const e=new k({url:"https://openlayers.org/en/latest/examples/data/geojson/switzerland.geojson",format:new g}),c=new S({source:e,style:{"fill-color":"rgba(255, 255, 255, 0.6)","stroke-width":1,"stroke-color":"#319FD3","circle-radius":5,"circle-fill-color":"rgba(255, 255, 255, 0.6)","circle-stroke-width":1,"circle-stroke-color":"#319FD3"}}),r=new v({center:[0,0],zoom:1}),m=new h({layers:[new L({source:new V}),c],target:"map",view:r});document.getElementById("zoomtoswitzerland").addEventListener("click",function(){const o=e.getFeatures()[0].getGeometry();r.fit(o,{padding:[170,50,30,150]})},!1),document.getElementById("zoomtolausanne").addEventListener("click",function(){const o=e.getFeatures()[1].getGeometry();r.fit(o,{padding:[170,50,30,150],minResolution:50})},!1),document.getElementById("centerlausanne").addEventListener("click",function(){const o=e.getFeatures()[1].getGeometry(),u=m.getSize();r.centerOn(o.getCoordinates(),u,[570,500])},!1),Prism.highlightAll()}),(e,c)=>(b(),_(x,null,[t("h4",I,a(n(j)),1),B,l(" (best fit)."),M,D,l(" (with min resolution),"),N,t("pre",null,[t("code",T,a("  "+n(E).trim().toString()),1)]),C,t("pre",null,[t("code",J,a("  "+n(F).trim().toString()),1)]),Z,t("pre",null,[t("code",A,a("  "+n(G).trim().toString()),1)]),P,t("pre",null,[t("code",R,a("  "+n(O).trim()),1)])],64))}},_t=f(q,[["__scopeId","data-v-6d82a86c"]]);export{_t as default};
