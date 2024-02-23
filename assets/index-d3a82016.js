import{M as n,S as i,V as r}from"./Layer-227d2e40.js";import{O as c}from"./OSM-829eb14e.js";import{T as l}from"./Tile-69a5f37c.js";import{_ as d,i as p,o as m,c as _,b as e,t as o,g as s,F as h,p as u,k as g}from"./index-eb0ea342.js";import{D as f}from"./DragRotateAndZoom-615cf0c9.js";import"./XYZ-f63b0d91.js";import"./TileImage-97dc110f.js";import"./TileProperty-167ee2c2.js";import"./UrlTile-27538029.js";import"./BaseTile-962ada93.js";import"./TileLayer-94aa49a8.js";import"./Layer-10451559.js";const w="Drag, Rotate, and Zoom",v=`
  <div id="map" class="map"></div>
`,j=`
  .map {
    width: 100%;
    height: 400px;
  }
`,x=`
  import Map from 'ol/Map.js';
  import OSM from 'ol/source/OSM.js';
  import TileLayer from 'ol/layer/Tile.js';
  import View from 'ol/View.js';
  import {
    DragRotateAndZoom,
    defaults as defaultInteractions,
  } from 'ol/interaction.js';

  const map = new Map({
    interactions: defaultInteractions().extend([new DragRotateAndZoom()]),
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
    ],
    target: 'map',
    view: new View({
      center: [0, 0],
      zoom: 2,
    }),
  });
`,M=`
  {
    "name": "drag-rotate-and-zoom",
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
`;const t=a=>(u("data-v-08fbe963"),a=a(),g(),a),S={id:"title"},y=t(()=>e("div",{id:"map",class:"map"},null,-1)),D=t(()=>e("p",null,"Shift+Drag to rotate and zoom the map around its center.",-1)),b=t(()=>e("h5",{class:"source-heading"},"html",-1)),I={class:"language-html"},V=t(()=>e("h5",{class:"source-heading"},"css",-1)),k={class:"language-css"},O=t(()=>e("h5",{class:"source-heading"},"js",-1)),T={class:"language-js"},z=t(()=>e("h5",{class:"source-heading"},"package.json",-1)),A={class:"language-json"},R={__name:"index",setup(a){return p(()=>{new n({interactions:i().extend([new f]),layers:[new l({source:new c})],target:"map",view:new r({center:[0,0],zoom:2})}),Prism.highlightAll()}),(Z,B)=>(m(),_(h,null,[e("h4",S,o(s(w)),1),y,D,b,e("pre",null,[e("code",I,o("  "+s(v).trim()),1)]),V,e("pre",null,[e("code",k,o("  "+s(j).trim()),1)]),O,e("pre",null,[e("code",T,o("  "+s(x).trim()),1)]),z,e("pre",null,[e("code",A,o("  "+s(M).trim()),1)])],64))}},U=d(R,[["__scopeId","data-v-08fbe963"]]);export{U as default};
