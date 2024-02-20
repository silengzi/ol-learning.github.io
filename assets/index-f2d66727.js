import{M as n,V as r}from"./Layer-da76b588.js";import{T as i}from"./Tile-71d632e2.js";import{_ as c,i as l,o as p,c as d,b as e,t,g as o,F as _,p as m,k as h}from"./index-ceb9aa48.js";import{O as u}from"./OSM-9750d531.js";import{T as g}from"./TileDebug-8212404b.js";import"./BaseTile-bf862043.js";import"./TileProperty-0f8ad975.js";import"./TileLayer-65677d1f.js";import"./Layer-5d5c7c57.js";import"./XYZ-abf237e7.js";import"./TileImage-66662d8b.js";import"./UrlTile-ef3e4dbe.js";const w="Canvas Tiles",f=`
  <div id="map" class="map"></div>
`,v=`
  .map {
    width: 100%;
    height: 400px;
  }
`,T=`
  import Map from 'ol/Map.js';
  import TileLayer from 'ol/layer/Tile.js';
  import View from 'ol/View.js';
  import {OSM, TileDebug} from 'ol/source.js';

  const map = new Map({
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
      new TileLayer({
        source: new TileDebug(),
      }),
    ],
    target: 'map',
    view: new View({
      center: [0, 0],
      zoom: 1,
    }),
  });
`,y=`
  {
    "name": "canvas-tiles",
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
`;const s=a=>(m("data-v-a3f10f40"),a=a(),h(),a),M={id:"title"},j=s(()=>e("div",{id:"map",class:"map"},null,-1)),x=s(()=>e("p",null,"The black grid tiles are generated on the client with an HTML5 canvas. The displayed tile coordinates are the XYZ tile coordinates.",-1)),b=s(()=>e("h5",{class:"source-heading"},"html",-1)),S={class:"language-html"},k=s(()=>e("h5",{class:"source-heading"},"css",-1)),V={class:"language-css"},D=s(()=>e("h5",{class:"source-heading"},"js",-1)),L={class:"language-js"},I=s(()=>e("h5",{class:"source-heading"},"package.json",-1)),O={class:"language-json"},B={__name:"index",setup(a){return l(()=>{new n({layers:[new i({source:new u}),new i({source:new g})],target:"map",view:new r({center:[0,0],zoom:1})}),Prism.highlightAll()}),(z,F)=>(p(),d(_,null,[e("h4",M,t(o(w)),1),j,x,b,e("pre",null,[e("code",S,t("  "+o(f).trim()),1)]),k,e("pre",null,[e("code",V,t("  "+o(v).trim()),1)]),D,e("pre",null,[e("code",L,t("  "+o(T).trim()),1)]),I,e("pre",null,[e("code",O,t("  "+o(y).trim()),1)])],64))}},K=c(B,[["__scopeId","data-v-a3f10f40"]]);export{K as default};