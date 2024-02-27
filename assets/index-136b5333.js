import{K as v}from"./KML-c4ac6c3a.js";import{M as k,V as S,L as x}from"./Layer-3211d6ef.js";import{S as M}from"./StadiaMaps-c230dd67.js";import{V}from"./Vector-163f0152.js";import{t as b}from"./render-84d5e35f.js";import{_ as j,i as F,o as C,c as z,b as e,t as s,g as a,F as L,p as I,k as q}from"./index-8e73cb60.js";import{V as E}from"./Vector-2de0a908.js";import{T as P}from"./Tile-d932c51d.js";import{a as u,F as T,S as K}from"./Style-22e788f3.js";import{I as B}from"./featureloader-4f961e27.js";import"./GeometryCollection-03015b2a.js";import"./LineString-d3d6f49c.js";import"./MultiPolygon-f290964a.js";import"./MultiPoint-e6eff345.js";import"./Feature-5a984f38.js";import"./string-30bf5402.js";import"./XYZ-2a4e8198.js";import"./TileImage-a70beb77.js";import"./TileProperty-f0a52f17.js";import"./UrlTile-7d5bd7ce.js";import"./OSM-39b8e613.js";import"./vector-01534e8d.js";import"./VectorLayer-f045426f.js";import"./hitdetect-4f776f31.js";import"./Layer-8f64fa5e.js";import"./BaseTile-47530170.js";import"./TileLayer-d6ace1df.js";const D="Earthquakes with custom symbols",G=`
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
`;const t=r=>(I("data-v-d0d8476e"),r=r(),q(),r),W={id:"title"},H=t(()=>e("div",{id:"map",class:"map"},null,-1)),J=t(()=>e("p",null,"This example parses a KML file and renders the features as a vector layer. The layer is given a style that renders earthquake locations with a custom lightning symbol and a size relative to their magnitude.",-1)),O=t(()=>e("h5",{class:"source-heading"},"html",-1)),Q={class:"language-html"},U=t(()=>e("h5",{class:"source-heading"},"css",-1)),X={class:"language-css"},Y=t(()=>e("h5",{class:"source-heading"},"js",-1)),Z={class:"language-js"},$=t(()=>e("h5",{class:"source-heading"},"package.json",-1)),ee={class:"language-json"},te={__name:"index",setup(r){return F(()=>{const l=[[0,0],[4,2],[6,0],[10,5],[6,3],[4,5],[0,0]];let n;const h=function(c){return[c[0]*n,c[1]*n]},m={},_=function(c){const f=c.get("name"),w=parseFloat(f.substr(2)),o=parseInt(10+40*(w-5),10);n=o/10;let i=m[o];if(!i){const p=document.createElement("canvas"),d=b(p.getContext("2d"),{size:[o,o],pixelRatio:1});d.setStyle(new u({fill:new T({color:"rgba(255, 153, 0, 0.4)"}),stroke:new K({color:"rgba(255, 204, 0, 0.2)",width:2})})),d.drawGeometry(new x([l.map(h)])),i=new u({image:new B({img:p,rotation:1.2})}),m[o]=i}return i},g=new E({source:new V({url:"data/kml/2012_Earthquakes_Mag5.kml",format:new v({extractStyles:!1})}),style:_}),y=new P({source:new M({layer:"stamen_toner"})});new k({layers:[y,g],target:"map",view:new S({center:[0,0],zoom:2})}),Prism.highlightAll()}),(l,n)=>(C(),z(L,null,[e("h4",W,s(a(D)),1),H,J,O,e("pre",null,[e("code",Q,s("  "+a(G).trim()),1)]),U,e("pre",null,[e("code",X,s("  "+a(R).trim()),1)]),Y,e("pre",null,[e("code",Z,s("  "+a(A).trim()),1)]),$,e("pre",null,[e("code",ee,s("  "+a(N).trim()),1)])],64))}},Ce=j(te,[["__scopeId","data-v-d0d8476e"]]);export{Ce as default};
