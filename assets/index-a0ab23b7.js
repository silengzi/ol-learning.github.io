import{M as d}from"./MVT-18c483b0.js";import{M as u,V as _}from"./Layer-3211d6ef.js";import{T as g}from"./TileDebug-9fcbcc3c.js";import{T as f}from"./Tile-d932c51d.js";import{V as h,a as w}from"./VectorTile-4ebc535c.js";import{_ as y,i as T,o as v,c as x,b as e,t as o,g as r,F as S,p as b,k as V,d as l}from"./index-8e73cb60.js";import{a as j,F as c,S as n}from"./Style-22e788f3.js";import{T as L}from"./featureloader-4f961e27.js";import"./Feature-5a984f38.js";import"./LineString-d3d6f49c.js";import"./MultiPolygon-f290964a.js";import"./MultiPoint-e6eff345.js";import"./_commonjsHelpers-39b5b250.js";import"./XYZ-2a4e8198.js";import"./TileImage-a70beb77.js";import"./TileProperty-f0a52f17.js";import"./UrlTile-7d5bd7ce.js";import"./BaseTile-47530170.js";import"./TileLayer-d6ace1df.js";import"./Layer-8f64fa5e.js";import"./hitdetect-4f776f31.js";import"./vector-01534e8d.js";const k="Custom Canvas Tiles",M=`
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
`;const t=s=>(b("data-v-529f0e79"),s=s(),V(),s),G={id:"title"},P=t(()=>e("div",{id:"map",class:"map"},null,-1)),C=t(()=>e("p",null,[l("The black grid tiles are generated on the client with an HTML5 canvas. The displayed TMS tile coordinates are produced using a custom template for TMS, the vector tile source's 512 pixel tile grid and the "),e("code",null,"zDirection"),l(" setting for vector tiles. Notice how the country polygons can be split between tiles and vector labels may appear in each tile.")],-1)),I=t(()=>e("h5",{class:"source-heading"},"html",-1)),A={class:"language-html"},B=t(()=>e("h5",{class:"source-heading"},"css",-1)),E={class:"language-css"},N=t(()=>e("h5",{class:"source-heading"},"js",-1)),Z={class:"language-js"},H=t(()=>e("h5",{class:"source-heading"},"package.json",-1)),q={class:"language-json"},J={__name:"index",setup(s){return T(()=>{const a=new j({fill:new c({color:"rgba(255, 255, 255, 0.6)"}),stroke:new n({color:"#319FD3",width:1}),text:new L({font:"12px Calibri,sans-serif",fill:new c({color:"#fff"}),stroke:new n({color:"#fff",width:3})})}),i=new h({declutter:!0,source:new w({maxZoom:15,format:new d,url:"https://ahocevar.com/geoserver/gwc/service/tms/1.0.0/ne:ne_10m_admin_0_countries@EPSG%3A900913@pbf/{z}/{x}/{-y}.pbf"}),style:function(p){return a.getText().setText(p.get("name")),a}}),m=new f({source:new g({template:"z:{z} x:{x} y:{-y}",projection:i.getSource().getProjection(),tileGrid:i.getSource().getTileGrid(),zDirection:1})});new u({layers:[i,m],target:"map",view:new _({center:[0,6e6],zoom:4})}),Prism.highlightAll()}),(a,i)=>(v(),x(S,null,[e("h4",G,o(r(k)),1),P,C,I,e("pre",null,[e("code",A,o("  "+r(M).trim()),1)]),B,e("pre",null,[e("code",E,o("  "+r(z).trim()),1)]),N,e("pre",null,[e("code",Z,o("  "+r(D).trim()),1)]),H,e("pre",null,[e("code",q,o("  "+r(F).trim()),1)])],64))}},ue=y(J,[["__scopeId","data-v-529f0e79"]]);export{ue as default};
