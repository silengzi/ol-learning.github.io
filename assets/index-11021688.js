import{M as d}from"./MVT-20be828b.js";import{M as u,V as _}from"./Layer-da76b588.js";import{T as g}from"./TileDebug-8212404b.js";import{T as h}from"./Tile-71d632e2.js";import{V as f,a as w}from"./VectorTile-3d2d8501.js";import{_ as y,i as T,o as v,c as x,b as e,t as o,g as r,F as S,p as b,k as V,d as c}from"./index-ceb9aa48.js";import{a as j,F as l,S as n,T as L}from"./featureloader-5ea9ad61.js";import"./MultiPolygon-79cfbc3b.js";import"./LineString-e19dc84a.js";import"./_commonjsHelpers-39b5b250.js";import"./XYZ-abf237e7.js";import"./TileImage-66662d8b.js";import"./TileProperty-0f8ad975.js";import"./UrlTile-ef3e4dbe.js";import"./BaseTile-bf862043.js";import"./TileLayer-65677d1f.js";import"./Layer-5d5c7c57.js";const k="Custom Canvas Tiles",M=`
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
`;const t=s=>(b("data-v-7136737c"),s=s(),V(),s),G={id:"title"},P=t(()=>e("div",{id:"map",class:"map"},null,-1)),C=t(()=>e("p",null,[c("The black grid tiles are generated on the client with an HTML5 canvas. The displayed TMS tile coordinates are produced using a custom template for TMS, the vector tile source's 512 pixel tile grid and the "),e("code",null,"zDirection"),c(" setting for vector tiles. Notice how the country polygons can be split between tiles and vector labels may appear in each tile.")],-1)),I=t(()=>e("h5",{class:"source-heading"},"html",-1)),A={class:"language-html"},B=t(()=>e("h5",{class:"source-heading"},"css",-1)),E={class:"language-css"},N=t(()=>e("h5",{class:"source-heading"},"js",-1)),Z={class:"language-js"},H=t(()=>e("h5",{class:"source-heading"},"package.json",-1)),q={class:"language-json"},J={__name:"index",setup(s){return T(()=>{const a=new j({fill:new l({color:"rgba(255, 255, 255, 0.6)"}),stroke:new n({color:"#319FD3",width:1}),text:new L({font:"12px Calibri,sans-serif",fill:new l({color:"#000"}),stroke:new n({color:"#fff",width:3})})}),i=new f({declutter:!0,source:new w({maxZoom:15,format:new d,url:"https://ahocevar.com/geoserver/gwc/service/tms/1.0.0/ne:ne_10m_admin_0_countries@EPSG%3A900913@pbf/{z}/{x}/{-y}.pbf"}),style:function(p){return a.getText().setText(p.get("name")),a}}),m=new h({source:new g({template:"z:{z} x:{x} y:{-y}",projection:i.getSource().getProjection(),tileGrid:i.getSource().getTileGrid(),zDirection:1})});new u({layers:[i,m],target:"map",view:new _({center:[0,6e6],zoom:4})}),Prism.highlightAll()}),(a,i)=>(v(),x(S,null,[e("h4",G,o(r(k)),1),P,C,I,e("pre",null,[e("code",A,o("  "+r(M).trim()),1)]),B,e("pre",null,[e("code",E,o("  "+r(z).trim()),1)]),N,e("pre",null,[e("code",Z,o("  "+r(D).trim()),1)]),H,e("pre",null,[e("code",q,o("  "+r(F).trim()),1)])],64))}},le=y(J,[["__scopeId","data-v-7136737c"]]);export{le as default};
