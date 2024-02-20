import{A as p,M as d,b as m,V as u}from"./Layer-da76b588.js";import{O as _}from"./OSM-9750d531.js";import{T as h}from"./Tile-71d632e2.js";import{_ as g,i as f,o as b,c as w,b as e,t as s,g as o,F as v,p as S,k as x,d as c}from"./index-ceb9aa48.js";import"./XYZ-abf237e7.js";import"./TileImage-66662d8b.js";import"./TileProperty-0f8ad975.js";import"./UrlTile-ef3e4dbe.js";import"./BaseTile-bf862043.js";import"./TileLayer-65677d1f.js";import"./Layer-5d5c7c57.js";const z="Attributions",j=`
  <div id="map" class="map"></div>
`,M=`
  .map {
    width: 100%;
    height: 400px;
  }
`,k=`
  import Map from 'ol/Map.js';
  import OSM from 'ol/source/OSM.js';
  import TileLayer from 'ol/layer/Tile.js';
  import View from 'ol/View.js';
  import {Attribution, defaults as defaultControls} from 'ol/control.js';

  const attribution = new Attribution({
    collapsible: false,
  });
  const map = new Map({
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
    ],
    controls: defaultControls({attribution: false}).extend([attribution]),
    target: 'map',
    view: new View({
      center: [0, 0],
      zoom: 2,
    }),
  });

  function checkSize() {
    const small = map.getSize()[0] < 600;
    attribution.setCollapsible(small);
    attribution.setCollapsed(small);
  }

  window.addEventListener('resize', checkSize);
  checkSize();
`,y=`
  {
    "name": "attributions",
    "dependencies": {
      "ol": "8.1.0"
    },
    "devDependencies": {
      "vite": "^3.2.3"
    },
    "scripts": {
      "start": "vite",
      "build": "vite build"
    }
  }
`;const t=a=>(S("data-v-a84a10ed"),a=a(),x(),a),T={id:"title"},V=t(()=>e("div",{id:"map",class:"map"},null,-1)),A=t(()=>e("p",null,[c("When the map gets too small because of a resize, the attribution will be collapsed. This is because the "),e("code",null,"collapsible"),c(" option is set to true if the width of the map gets smaller than 600 pixels.")],-1)),C=t(()=>e("h5",{class:"source-heading"},"html",-1)),L={class:"language-html"},O=t(()=>e("h5",{class:"source-heading"},"css",-1)),I={class:"language-css"},B=t(()=>e("h5",{class:"source-heading"},"js",-1)),E={class:"language-js"},D=t(()=>e("h5",{class:"source-heading"},"package.json",-1)),F={class:"language-json"},N={__name:"index",setup(a){return f(()=>{const i=new p({collapsible:!1}),l=new d({layers:[new h({source:new _})],controls:m({attribution:!1}).extend([i]),target:"map",view:new u({center:[0,0],zoom:2})});function n(){const r=l.getSize()[0]<600;i.setCollapsible(r),i.setCollapsed(r)}window.addEventListener("resize",n),n(),Prism.highlightAll()}),(i,l)=>(b(),w(v,null,[e("h4",T,s(o(z)),1),V,A,C,e("pre",null,[e("code",L,s("  "+o(j).trim()),1)]),O,e("pre",null,[e("code",I,s("  "+o(M).trim()),1)]),B,e("pre",null,[e("code",E,s("  "+o(k).trim()),1)]),D,e("pre",null,[e("code",F,s("  "+o(y).trim()),1)])],64))}},Y=g(N,[["__scopeId","data-v-a84a10ed"]]);export{Y as default};