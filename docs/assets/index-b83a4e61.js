import{bw as d,M as p,bx as u,V as m}from"./TileLayer-f9f86bd4.js";import{O as _}from"./OSM-cb70612a.js";import{T as h}from"./Tile-a0d0c745.js";import{_ as b,i as g,o as f,c as w,b as e,t as s,g as o,F as v,p as S,k as x,d as r}from"./index-4acf93cb.js";const z="Attributions",j=`
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
`;const t=a=>(S("data-v-46e2be94"),a=a(),x(),a),T={id:"title"},V=t(()=>e("div",{id:"map",class:"map"},null,-1)),C=t(()=>e("p",null,[r("When the map gets too small because of a resize, the attribution will be collapsed. This is because the "),e("code",null,"collapsible"),r(" option is set to true if the width of the map gets smaller than 600 pixels.")],-1)),A=t(()=>e("h5",{class:"source-heading"},"html",-1)),L={class:"language-html"},O=t(()=>e("h5",{class:"source-heading"},"css",-1)),I={class:"language-css"},B=t(()=>e("h5",{class:"source-heading"},"js",-1)),E={class:"language-js"},D=t(()=>e("h5",{class:"source-heading"},"package.json",-1)),F={class:"language-json"},N={__name:"index",setup(a){return g(()=>{const i=new d({collapsible:!1}),l=new p({layers:[new h({source:new _})],controls:u({attribution:!1}).extend([i]),target:"map",view:new m({center:[0,0],zoom:2})});function n(){const c=l.getSize()[0]<600;i.setCollapsible(c),i.setCollapsed(c)}window.addEventListener("resize",n),n(),Prism.highlightAll()}),(i,l)=>(f(),w(v,null,[e("h4",T,s(o(z)),1),V,C,A,e("pre",null,[e("code",L,s("  "+o(j).trim()),1)]),O,e("pre",null,[e("code",I,s("  "+o(M).trim()),1)]),B,e("pre",null,[e("code",E,s("  "+o(k).trim()),1)]),D,e("pre",null,[e("code",F,s("  "+o(y).trim()),1)])],64))}},H=b(N,[["__scopeId","data-v-46e2be94"]]);export{H as default};
