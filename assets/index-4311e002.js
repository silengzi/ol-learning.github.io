import{M as i,d as n,V as c}from"./Layer-3b715193.js";import{T as l}from"./Tile-70490af9.js";import{T as p,S as _}from"./ScaleLine-cca21c10.js";import{_ as m,i as d,o as h,c as u,b as e,t,g as o,F as g,p as f,k as w}from"./index-92068577.js";import"./BaseTile-8ab94efc.js";import"./TileProperty-e33ea24b.js";import"./TileLayer-7c629c64.js";import"./Layer-37ea9c2e.js";import"./TileImage-1df58d67.js";import"./UrlTile-dc2c26ed.js";import"./common-c2bf7a3a.js";import"./string-30bf5402.js";const S="EPSG:4326",v=`
  <div id="map" class="map"></div>
`,T=`
  .map {
    width: 100%;
    height: 400px;
  }
`,j=`
  import Map from 'ol/Map.js';
  import TileLayer from 'ol/layer/Tile.js';
  import TileWMS from 'ol/source/TileWMS.js';
  import View from 'ol/View.js';
  import {ScaleLine, defaults as defaultControls} from 'ol/control.js';

  const layers = [
    new TileLayer({
      source: new TileWMS({
        url: 'https://ahocevar.com/geoserver/wms',
        params: {
          'LAYERS': 'ne:NE1_HR_LC_SR_W_DR',
          'TILED': true,
        },
      }),
    }),
  ];

  const map = new Map({
    controls: defaultControls().extend([
      new ScaleLine({
        units: 'degrees',
      }),
    ]),
    layers: layers,
    target: 'map',
    view: new View({
      projection: 'EPSG:4326',
      center: [0, 0],
      zoom: 2,
    }),
  });
`,y=`
  {
    "name": "epsg-4326",
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
`;const s=a=>(f("data-v-57ff998a"),a=a(),w(),a),L={id:"title"},x=s(()=>e("div",{id:"map",class:"map"},null,-1)),E=s(()=>e("p",null,"This example shows how to create a map in EPSG:4326.",-1)),M=s(()=>e("h5",{class:"source-heading"},"html",-1)),R={class:"language-html"},D=s(()=>e("h5",{class:"source-heading"},"css",-1)),I={class:"language-css"},V=s(()=>e("h5",{class:"source-heading"},"js",-1)),W={class:"language-js"},k=s(()=>e("h5",{class:"source-heading"},"package.json",-1)),P={class:"language-json"},C={__name:"index",setup(a){return d(()=>{const r=[new l({source:new p({url:"https://ahocevar.com/geoserver/wms",params:{LAYERS:"ne:NE1_HR_LC_SR_W_DR",TILED:!0}})})];new i({controls:n().extend([new _({units:"degrees"})]),layers:r,target:"map",view:new c({projection:"EPSG:4326",center:[0,0],zoom:2})}),Prism.highlightAll()}),(r,G)=>(h(),u(g,null,[e("h4",L,t(o(S)),1),x,E,M,e("pre",null,[e("code",R,t("  "+o(v).trim()),1)]),D,e("pre",null,[e("code",I,t("  "+o(T).trim()),1)]),V,e("pre",null,[e("code",W,t("  "+o(j).trim()),1)]),k,e("pre",null,[e("code",P,t("  "+o(y).trim()),1)])],64))}},Q=m(C,[["__scopeId","data-v-57ff998a"]]);export{Q as default};
