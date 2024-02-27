import"./bootstrap-4f4e5ffc.js";import{M as r,V as n}from"./Layer-3211d6ef.js";import{O as c}from"./OSM-39b8e613.js";import{T as l}from"./Tile-d932c51d.js";import{_ as p,i as m,o as d,c as _,b as t,t as o,g as s,F as h,p as u,k as g}from"./index-8e73cb60.js";import"./XYZ-2a4e8198.js";import"./TileImage-a70beb77.js";import"./TileProperty-f0a52f17.js";import"./UrlTile-7d5bd7ce.js";import"./BaseTile-47530170.js";import"./TileLayer-d6ace1df.js";import"./Layer-8f64fa5e.js";const w="Custom Tooltips",f=`
  <div id="map" class="map"></div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"><\/script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css">
`,v=`
  .map {
    width: 100%;
    height: 400px;
  }
`,y=`
  import Map from 'ol/Map.js';
  import OSM from 'ol/source/OSM.js';
  import TileLayer from 'ol/layer/Tile.js';
  import View from 'ol/View.js';

  const map = new Map({
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
    ],
    target: 'map',
    view: new View({
      center: [-8730000, 5930000],
      rotation: Math.PI / 5,
      zoom: 8,
    }),
  });

  document
    .querySelectorAll('.ol-zoom-in, .ol-zoom-out, .ol-rotate-reset')
    .forEach(function (el) {
      new bootstrap.Tooltip(el, {
        container: '#map',
      });
    });
`,j=`
  {
    "name": "button-title",
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
`;const e=i=>(u("data-v-12503856"),i=i(),g(),i),b={id:"title"},M=e(()=>t("div",{id:"map",class:"map"},null,-1)),x=e(()=>t("p",null,"This example shows how to customize the buttons tooltips with Bootstrap. For the tooltips to work in fullscreen mode, set the container property to a selector that matches the map target.",-1)),S=e(()=>t("h5",{class:"source-heading"},"html",-1)),T={class:"language-html"},k=e(()=>t("h5",{class:"source-heading"},"css",-1)),z={class:"language-css"},I=e(()=>t("h5",{class:"source-heading"},"js",-1)),V={class:"language-js"},O=e(()=>t("h5",{class:"source-heading"},"package.json",-1)),B={class:"language-json"},A={__name:"index",setup(i){return m(()=>{new r({layers:[new l({source:new c})],target:"map",view:new n({center:[-873e4,593e4],rotation:Math.PI/5,zoom:8})}),document.querySelectorAll(".ol-zoom-in, .ol-zoom-out, .ol-rotate-reset").forEach(function(a){new bootstrap.Tooltip(a,{container:"#map"})}),Prism.highlightAll()}),(a,E)=>(d(),_(h,null,[t("h4",b,o(s(w)),1),M,x,S,t("pre",null,[t("code",T,o("  "+s(f).trim()),1)]),k,t("pre",null,[t("code",z,o("  "+s(v).trim()),1)]),I,t("pre",null,[t("code",V,o("  "+s(y).trim()),1)]),O,t("pre",null,[t("code",B,o("  "+s(j).trim()),1)])],64))}},R=p(A,[["__scopeId","data-v-12503856"]]);export{R as default};
