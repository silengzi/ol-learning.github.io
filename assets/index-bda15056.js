import{M as c,V as p}from"./Layer-d95863ce.js";import{T as l}from"./Tile-26a716d9.js";import{X as m}from"./XYZ-73edd6ba.js";import{_ as d,i as _,o as h,c as u,b as t,t as o,g as s,F as g,p as w,k as y,d as i}from"./index-ceda08fa.js";import"./BaseTile-0f70055b.js";import"./TileProperty-0dbbd060.js";import"./TileLayer-121ec467.js";import"./Layer-4850cb8d.js";import"./TileImage-f7288716.js";import"./UrlTile-563a27f8.js";const b="Constrained Zoom",f=`
  <div id="map" class="map"></div>
`,v=`
  .map {
    width: 100%;
    height: 400px;
  }
`,k=`
  import Map from 'ol/Map.js';
  import TileLayer from 'ol/layer/Tile.js';
  import View from 'ol/View.js';
  import XYZ from 'ol/source/XYZ.js';

  const key = 'Get your own API key at https://www.maptiler.com/cloud/';
  const attributions =
    '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> ' +
    '<a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>';

  const map = new Map({
    target: 'map',
    layers: [
      new TileLayer({
        source: new XYZ({
          attributions: attributions,
          url:
            'https://api.maptiler.com/tiles/satellite/{z}/{x}/{y}.jpg?key=' + key,
        }),
      }),
    ],
    view: new View({
      center: [-13553864, 5918250],
      zoom: 11,
      minZoom: 9,
      maxZoom: 13,
    }),
  });
`,x=`
  {
    "name": "zoom-constrained",
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
`;const e=a=>(w("data-v-8676ba09"),a=a(),y(),a),j={id:"title"},Z=e(()=>t("div",{id:"map",class:"map"},null,-1)),M=e(()=>t("p",null,[i("This map has a view that is constrained between zoom levels 9 and 13. This is done using the "),t("code",null,"minZoom"),i(" and "),t("code",null,"maxZoom"),i(" view options.")],-1)),T=e(()=>t("h5",{class:"source-heading"},"html",-1)),V={class:"language-html"},z=e(()=>t("h5",{class:"source-heading"},"css",-1)),I={class:"language-css"},S=e(()=>t("h5",{class:"source-heading"},"js",-1)),X={class:"language-js"},Y=e(()=>t("h5",{class:"source-heading"},"package.json",-1)),P={class:"language-json"},B={__name:"index",setup(a){return _(()=>{const r="WYPadsIvfisd0PUHFJ6K",n='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>';new c({target:"map",layers:[new l({source:new m({attributions:n,url:"https://api.maptiler.com/tiles/satellite/{z}/{x}/{y}.jpg?key="+r})})],view:new p({center:[-13553864,5918250],zoom:11,minZoom:9,maxZoom:13})}),Prism.highlightAll()}),(r,n)=>(h(),u(g,null,[t("h4",j,o(s(b)),1),Z,M,T,t("pre",null,[t("code",V,o("  "+s(f).trim()),1)]),z,t("pre",null,[t("code",I,o("  "+s(v).trim()),1)]),S,t("pre",null,[t("code",X,o("  "+s(k).trim()),1)]),Y,t("pre",null,[t("code",P,o("  "+s(x).trim()),1)])],64))}},J=d(B,[["__scopeId","data-v-8676ba09"]]);export{J as default};
