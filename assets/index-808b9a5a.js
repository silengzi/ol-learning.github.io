import{M as n,V as r}from"./Layer-227d2e40.js";import{T as i}from"./Tile-69a5f37c.js";import{_ as c,i as l,o as p,c as d,b as e,t,g as o,F as _,p as m,k as h}from"./index-0efe29ff.js";import{O as u}from"./OSM-829eb14e.js";import{T as g}from"./TileDebug-11a320bf.js";import"./BaseTile-962ada93.js";import"./TileProperty-167ee2c2.js";import"./TileLayer-94aa49a8.js";import"./Layer-10451559.js";import"./XYZ-f63b0d91.js";import"./TileImage-97dc110f.js";import"./UrlTile-27538029.js";const w="Canvas Tiles",f=`
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
