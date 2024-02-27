import{M as k,V as b,P as V}from"./Layer-3211d6ef.js";import{O as F}from"./OSM-39b8e613.js";import{T as O}from"./Tile-d932c51d.js";import{g as T}from"./render-84d5e35f.js";import{_ as L,i as R,o as G,c as D,b as e,t as n,g as a,F as B,p as z,k as E}from"./index-8e73cb60.js";import{a as h,C as y,F as w,S as A}from"./Style-22e788f3.js";import{M as N}from"./MultiPoint-e6eff345.js";import"./XYZ-2a4e8198.js";import"./TileImage-a70beb77.js";import"./TileProperty-f0a52f17.js";import"./UrlTile-7d5bd7ce.js";import"./BaseTile-47530170.js";import"./TileLayer-d6ace1df.js";import"./Layer-8f64fa5e.js";import"./vector-01534e8d.js";const q="Dynamic Data",H=`
  <div id="map" class="map"></div>
`,J=`
  .map {
    width: 100%;
    height: 400px;
  }
`,K=`
  import Map from 'ol/Map.js';
  import OSM from 'ol/source/OSM.js';
  import TileLayer from 'ol/layer/Tile.js';
  import View from 'ol/View.js';
  import {Circle as CircleStyle, Fill, Stroke, Style} from 'ol/style.js';
  import {MultiPoint, Point} from 'ol/geom.js';
  import {getVectorContext} from 'ol/render.js';

  const tileLayer = new TileLayer({
    source: new OSM(),
  });

  const map = new Map({
    layers: [tileLayer],
    target: 'map',
    view: new View({
      center: [0, 0],
      zoom: 2,
    }),
  });

  const imageStyle = new Style({
    image: new CircleStyle({
      radius: 5,
      fill: new Fill({color: 'yellow'}),
      stroke: new Stroke({color: 'red', width: 1}),
    }),
  });

  const headInnerImageStyle = new Style({
    image: new CircleStyle({
      radius: 2,
      fill: new Fill({color: 'blue'}),
    }),
  });

  const headOuterImageStyle = new Style({
    image: new CircleStyle({
      radius: 5,
      fill: new Fill({color: 'black'}),
    }),
  });

  const n = 200;
  const omegaTheta = 30000; // Rotation period in ms
  const R = 7e6;
  const r = 2e6;
  const p = 2e6;
  tileLayer.on('postrender', function (event) {
    const vectorContext = getVectorContext(event);
    const frameState = event.frameState;
    const theta = (2 * Math.PI * frameState.time) / omegaTheta;
    const coordinates = [];
    let i;
    for (i = 0; i < n; ++i) {
      const t = theta + (2 * Math.PI * i) / n;
      const x = (R + r) * Math.cos(t) + p * Math.cos(((R + r) * t) / r);
      const y = (R + r) * Math.sin(t) + p * Math.sin(((R + r) * t) / r);
      coordinates.push([x, y]);
    }
    vectorContext.setStyle(imageStyle);
    vectorContext.drawGeometry(new MultiPoint(coordinates));

    const headPoint = new Point(coordinates[coordinates.length - 1]);

    vectorContext.setStyle(headOuterImageStyle);
    vectorContext.drawGeometry(headPoint);

    vectorContext.setStyle(headInnerImageStyle);
    vectorContext.drawGeometry(headPoint);

    map.render();
  });
  map.render();
`,Q=`
  {
    "name": "dynamic-data",
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
`;const s=r=>(z("data-v-c7bfa34d"),r=r(),E(),r),U={id:"title"},W=s(()=>e("div",{id:"map",class:"map"},null,-1)),X=s(()=>e("p",null,"Example of dynamic data.",-1)),Y=s(()=>e("h5",{class:"source-heading"},"html",-1)),Z={class:"language-html"},$=s(()=>e("h5",{class:"source-heading"},"css",-1)),ee={class:"language-css"},te=s(()=>e("h5",{class:"source-heading"},"js",-1)),oe={class:"language-js"},se=s(()=>e("h5",{class:"source-heading"},"package.json",-1)),ne={class:"language-json"},ae={__name:"index",setup(r){return R(()=>{const d=new O({source:new F}),p=new k({layers:[d],target:"map",view:new b({center:[0,0],zoom:2})}),f=new h({image:new y({radius:5,fill:new w({color:"yellow"}),stroke:new A({color:"red",width:1})})}),M=new h({image:new y({radius:2,fill:new w({color:"blue"})})}),v=new h({image:new y({radius:5,fill:new w({color:"black"})})}),_=200,x=3e4,i=7e6,t=2e6,g=2e6;d.on("postrender",function(u){const o=T(u),C=u.frameState,I=2*Math.PI*C.time/x,c=[];let l;for(l=0;l<_;++l){const m=I+2*Math.PI*l/_,P=(i+t)*Math.cos(m)+g*Math.cos((i+t)*m/t),j=(i+t)*Math.sin(m)+g*Math.sin((i+t)*m/t);c.push([P,j])}o.setStyle(f),o.drawGeometry(new N(c));const S=new V(c[c.length-1]);o.setStyle(v),o.drawGeometry(S),o.setStyle(M),o.drawGeometry(S),p.render()}),p.render(),Prism.highlightAll()}),(d,p)=>(G(),D(B,null,[e("h4",U,n(a(q)),1),W,X,Y,e("pre",null,[e("code",Z,n("  "+a(H).trim()),1)]),$,e("pre",null,[e("code",ee,n("  "+a(J).trim()),1)]),te,e("pre",null,[e("code",oe,n("  "+a(K).trim()),1)]),se,e("pre",null,[e("code",ne,n("  "+a(Q).trim()),1)])],64))}},Me=L(ae,[["__scopeId","data-v-c7bfa34d"]]);export{Me as default};
