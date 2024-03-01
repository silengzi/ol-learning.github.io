import{M as d}from"./MVT-82b11897.js";import{a as u,F as l,S as c,T as _,M as g,V as f}from"./Layer-3b715193.js";import{T as h}from"./TileDebug-96281eb6.js";import{T as w}from"./Tile-70490af9.js";import{V as y,a as T}from"./VectorTile-d2941be4.js";import{_ as v,i as x,o as S,c as b,b as e,t as o,g as r,F as V,p as j,k as L,d as n}from"./index-92068577.js";import"./Feature-627996e0.js";import"./featureloader-a90a5108.js";import"./MultiPolygon-d7736349.js";import"./LineString-eed53b5a.js";import"./length-c6ba5b73.js";import"./MultiPoint-74fca651.js";import"./XYZ-80208d03.js";import"./TileImage-1df58d67.js";import"./TileProperty-e33ea24b.js";import"./UrlTile-dc2c26ed.js";import"./BaseTile-8ab94efc.js";import"./TileLayer-7c629c64.js";import"./Layer-37ea9c2e.js";import"./hitdetect-486e5612.js";import"./vector-4e067f94.js";const k="Custom Canvas Tiles",M=`
  <div id="map" class="map"></div>
`,z=`
  .map {
    width: 100%;
    height: 400px;
  }
`,D=`
  import MVT from 'ol/format/MVT.js';
  import Map from 'ol/Map.js';
  import TileDebug from 'ol/source/TileDebug.js';
  import TileLayer from 'ol/layer/Tile.js';
  import VectorTileLayer from 'ol/layer/VectorTile.js';
  import VectorTileSource from 'ol/source/VectorTile.js';
  import View from 'ol/View.js';
  import {Fill, Stroke, Style, Text} from 'ol/style.js';

  const style = new Style({
    fill: new Fill({
      color: 'rgba(255, 255, 255, 0.6)',
    }),
    stroke: new Stroke({
      color: '#319FD3',
      width: 1,
    }),
    text: new Text({
      font: '12px Calibri,sans-serif',
      fill: new Fill({
        color: '#000',
      }),
      stroke: new Stroke({
        color: '#fff',
        width: 3,
      }),
    }),
  });

  const vtLayer = new VectorTileLayer({
    declutter: true,
    source: new VectorTileSource({
      maxZoom: 15,
      format: new MVT(),
      url:
        'https://ahocevar.com/geoserver/gwc/service/tms/1.0.0/' +
        'ne:ne_10m_admin_0_countries@EPSG%3A900913@pbf/{z}/{x}/{-y}.pbf',
    }),
    style: function (feature) {
      style.getText().setText(feature.get('name'));
      return style;
    },
  });

  const debugLayer = new TileLayer({
    source: new TileDebug({
      template: 'z:{z} x:{x} y:{-y}',
      projection: vtLayer.getSource().getProjection(),
      tileGrid: vtLayer.getSource().getTileGrid(),
      zDirection: 1,
    }),
  });

  const map = new Map({
    layers: [vtLayer, debugLayer],
    target: 'map',
    view: new View({
      center: [0, 6000000],
      zoom: 4,
    }),
  });
`,F=`
  {
    "name": "canvas-tiles-tms",
    "dependencies": {
      "ol": "8.2.0"
    },
    "devDependencies": {
      "vite": "^3.2.3"
    },
    "scripts": {
      "start": "vite",
      "build": "vite build"
    }
  }
`;const t=s=>(j("data-v-529f0e79"),s=s(),L(),s),G={id:"title"},P=t(()=>e("div",{id:"map",class:"map"},null,-1)),C=t(()=>e("p",null,[n("The black grid tiles are generated on the client with an HTML5 canvas. The displayed TMS tile coordinates are produced using a custom template for TMS, the vector tile source's 512 pixel tile grid and the "),e("code",null,"zDirection"),n(" setting for vector tiles. Notice how the country polygons can be split between tiles and vector labels may appear in each tile.")],-1)),I=t(()=>e("h5",{class:"source-heading"},"html",-1)),A={class:"language-html"},B=t(()=>e("h5",{class:"source-heading"},"css",-1)),E={class:"language-css"},N=t(()=>e("h5",{class:"source-heading"},"js",-1)),Z={class:"language-js"},H=t(()=>e("h5",{class:"source-heading"},"package.json",-1)),q={class:"language-json"},J={__name:"index",setup(s){return x(()=>{const a=new u({fill:new l({color:"rgba(255, 255, 255, 0.6)"}),stroke:new c({color:"#319FD3",width:1}),text:new _({font:"12px Calibri,sans-serif",fill:new l({color:"#fff"}),stroke:new c({color:"#fff",width:3})})}),i=new y({declutter:!0,source:new T({maxZoom:15,format:new d,url:"https://ahocevar.com/geoserver/gwc/service/tms/1.0.0/ne:ne_10m_admin_0_countries@EPSG%3A900913@pbf/{z}/{x}/{-y}.pbf"}),style:function(p){return a.getText().setText(p.get("name")),a}}),m=new w({source:new h({template:"z:{z} x:{x} y:{-y}",projection:i.getSource().getProjection(),tileGrid:i.getSource().getTileGrid(),zDirection:1})});new g({layers:[i,m],target:"map",view:new f({center:[0,6e6],zoom:4})}),Prism.highlightAll()}),(a,i)=>(S(),b(V,null,[e("h4",G,o(r(k)),1),P,C,I,e("pre",null,[e("code",A,o("  "+r(M).trim()),1)]),B,e("pre",null,[e("code",E,o("  "+r(z).trim()),1)]),N,e("pre",null,[e("code",Z,o("  "+r(D).trim()),1)]),H,e("pre",null,[e("code",q,o("  "+r(F).trim()),1)])],64))}},de=v(J,[["__scopeId","data-v-529f0e79"]]);export{de as default};
