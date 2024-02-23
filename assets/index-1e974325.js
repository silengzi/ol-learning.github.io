import"./bootstrap-4f4e5ffc.js";import{M as r,V as n}from"./Layer-227d2e40.js";import{O as c}from"./OSM-829eb14e.js";import{T as l}from"./Tile-69a5f37c.js";import{_ as p,i as m,o as d,c as _,b as t,t as o,g as s,F as h,p as u,k as g}from"./index-eb0ea342.js";import"./XYZ-f63b0d91.js";import"./TileImage-97dc110f.js";import"./TileProperty-167ee2c2.js";import"./UrlTile-27538029.js";import"./BaseTile-962ada93.js";import"./TileLayer-94aa49a8.js";import"./Layer-10451559.js";const w="Custom Tooltips",f=`
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
