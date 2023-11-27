import{M as n,V as r}from"./Layer-5200258f.js";import{T as i}from"./Tile-aca76f7d.js";import{_ as c,i as l,o as p,c as d,b as e,t,g as o,F as _,p as m,k as h}from"./index-c940254e.js";import{O as u}from"./OSM-7231e773.js";import{T as g}from"./TileDebug-21fe8d1c.js";import"./BaseTile-53865aab.js";import"./TileProperty-ab86017d.js";import"./TileLayer-7e43e564.js";import"./Layer-a8143b89.js";import"./XYZ-7263712f.js";import"./TileImage-4a3fae9a.js";import"./UrlTile-d31c8ece.js";const w="Canvas Tiles",v=`
  <div id="map" class="map"></div>
`,T=`
  .map {
    width: 100%;
    height: 400px;
  }
`,f=`
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
`;const s=a=>(m("data-v-e3073e9b"),a=a(),h(),a),b={id:"title"},M=s(()=>e("div",{id:"map",class:"map"},null,-1)),j=s(()=>e("p",null,"The black grid tiles are generated on the client with an HTML5 canvas. The displayed tile coordinates are the XYZ tile coordinates.",-1)),x=s(()=>e("h5",{class:"source-heading"},"html",-1)),S={class:"language-html"},k=s(()=>e("h5",{class:"source-heading"},"css",-1)),V={class:"language-css"},D=s(()=>e("h5",{class:"source-heading"},"js",-1)),L={class:"language-js"},I=s(()=>e("h5",{class:"source-heading"},"package.json",-1)),O={class:"language-json"},B={__name:"index",setup(a){return l(()=>{new n({layers:[new i({source:new u}),new i({source:new g})],target:"map",view:new r({center:[0,0],zoom:1})}),Prism.highlightAll()}),(z,F)=>(p(),d(_,null,[e("h4",b,t(o(w)),1),M,j,x,e("pre",null,[e("code",S,t("  "+o(v).trim()),1)]),k,e("pre",null,[e("code",V,t("  "+o(T).trim()),1)]),D,e("pre",null,[e("code",L,t("  "+o(f).trim()),1)]),I,e("pre",null,[e("code",O,t("  "+o(y).trim()),1)])],64))}},K=c(B,[["__scopeId","data-v-e3073e9b"]]);export{K as default};
