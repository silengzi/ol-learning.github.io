import{K as v}from"./KML-c43cd689.js";import{M as k,V as x,a as u,F as S,S as M,U as V,I as b}from"./Layer-3b715193.js";import{S as j}from"./StadiaMaps-e9ded0c3.js";import{V as F}from"./Vector-a4e726e1.js";import{t as C}from"./render-6e2d2a79.js";import{_ as z,i as L,o as I,c as q,b as e,t as s,g as a,F as E,p as P,k as T}from"./index-c958856c.js";import{V as K}from"./Vector-6fff18f8.js";import{T as B}from"./Tile-70490af9.js";import"./featureloader-a90a5108.js";import"./MultiPolygon-d7736349.js";import"./LineString-eed53b5a.js";import"./length-c6ba5b73.js";import"./MultiPoint-74fca651.js";import"./Feature-627996e0.js";import"./string-30bf5402.js";import"./XYZ-80208d03.js";import"./TileImage-1df58d67.js";import"./TileProperty-e33ea24b.js";import"./UrlTile-dc2c26ed.js";import"./OSM-f0f00429.js";import"./vector-4e067f94.js";import"./VectorLayer-ef6da1be.js";import"./hitdetect-486e5612.js";import"./Layer-37ea9c2e.js";import"./BaseTile-8ab94efc.js";import"./TileLayer-7c629c64.js";const D="Earthquakes with custom symbols",G=`
  <div id="map" class="map"></div>
`,R=`
  .map {
    width: 100%;
    height: 400px;
  }
`,A=`
  import KML from 'ol/format/KML.js';
  import Map from 'ol/Map.js';
  import Polygon from 'ol/geom/Polygon.js';
  import StadiaMaps from 'ol/source/StadiaMaps.js';
  import VectorSource from 'ol/source/Vector.js';
  import View from 'ol/View.js';
  import {Fill, Icon, Stroke, Style} from 'ol/style.js';
  import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';
  import {toContext} from 'ol/render.js';

  const symbol = [
    [0, 0],
    [4, 2],
    [6, 0],
    [10, 5],
    [6, 3],
    [4, 5],
    [0, 0],
  ];
  let scale;
  const scaleFunction = function (coordinate) {
    return [coordinate[0] * scale, coordinate[1] * scale];
  };

  const styleCache = {};
  const styleFunction = function (feature) {
    // 2012_Earthquakes_Mag5.kml stores the magnitude of each earthquake in a
    // standards-violating <magnitude> tag in each Placemark.  We extract it from
    // the Placemark's name instead.
    const name = feature.get('name');
    const magnitude = parseFloat(name.substr(2));
    const size = parseInt(10 + 40 * (magnitude - 5), 10);
    scale = size / 10;
    let style = styleCache[size];
    if (!style) {
      const canvas = document.createElement('canvas');
      const vectorContext = toContext(canvas.getContext('2d'), {
        size: [size, size],
        pixelRatio: 1,
      });
      vectorContext.setStyle(
        new Style({
          fill: new Fill({color: 'rgba(255, 153, 0, 0.4)'}),
          stroke: new Stroke({color: 'rgba(255, 204, 0, 0.2)', width: 2}),
        })
      );
      vectorContext.drawGeometry(new Polygon([symbol.map(scaleFunction)]));
      style = new Style({
        image: new Icon({
          img: canvas,
          rotation: 1.2,
        }),
      });
      styleCache[size] = style;
    }
    return style;
  };

  const vector = new VectorLayer({
    source: new VectorSource({
      url: 'data/kml/2012_Earthquakes_Mag5.kml',
      format: new KML({
        extractStyles: false,
      }),
    }),
    style: styleFunction,
  });

  const raster = new TileLayer({
    source: new StadiaMaps({
      layer: 'stamen_toner',
    }),
  });

  const map = new Map({
    layers: [raster, vector],
    target: 'map',
    view: new View({
      center: [0, 0],
      zoom: 2,
    }),
  });
`,N=`
  {
    "name": "earthquake-custom-symbol",
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
`;const t=r=>(P("data-v-d0d8476e"),r=r(),T(),r),U={id:"title"},W=t(()=>e("div",{id:"map",class:"map"},null,-1)),H=t(()=>e("p",null,"This example parses a KML file and renders the features as a vector layer. The layer is given a style that renders earthquake locations with a custom lightning symbol and a size relative to their magnitude.",-1)),J=t(()=>e("h5",{class:"source-heading"},"html",-1)),O={class:"language-html"},Q=t(()=>e("h5",{class:"source-heading"},"css",-1)),X={class:"language-css"},Y=t(()=>e("h5",{class:"source-heading"},"js",-1)),Z={class:"language-js"},$=t(()=>e("h5",{class:"source-heading"},"package.json",-1)),ee={class:"language-json"},te={__name:"index",setup(r){return L(()=>{const l=[[0,0],[4,2],[6,0],[10,5],[6,3],[4,5],[0,0]];let n;const h=function(c){return[c[0]*n,c[1]*n]},m={},_=function(c){const f=c.get("name"),w=parseFloat(f.substr(2)),o=parseInt(10+40*(w-5),10);n=o/10;let i=m[o];if(!i){const p=document.createElement("canvas"),d=C(p.getContext("2d"),{size:[o,o],pixelRatio:1});d.setStyle(new u({fill:new S({color:"rgba(255, 153, 0, 0.4)"}),stroke:new M({color:"rgba(255, 204, 0, 0.2)",width:2})})),d.drawGeometry(new V([l.map(h)])),i=new u({image:new b({img:p,rotation:1.2})}),m[o]=i}return i},g=new K({source:new F({url:"data/kml/2012_Earthquakes_Mag5.kml",format:new v({extractStyles:!1})}),style:_}),y=new B({source:new j({layer:"stamen_toner"})});new k({layers:[y,g],target:"map",view:new x({center:[0,0],zoom:2})}),Prism.highlightAll()}),(l,n)=>(I(),q(E,null,[e("h4",U,s(a(D)),1),W,H,J,e("pre",null,[e("code",O,s("  "+a(G).trim()),1)]),Q,e("pre",null,[e("code",X,s("  "+a(R).trim()),1)]),Y,e("pre",null,[e("code",Z,s("  "+a(A).trim()),1)]),$,e("pre",null,[e("code",ee,s("  "+a(N).trim()),1)])],64))}},Fe=z(te,[["__scopeId","data-v-d0d8476e"]]);export{Fe as default};
