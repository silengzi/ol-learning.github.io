import{M as c,V as p}from"./Layer-5200258f.js";import{T as l}from"./Tile-aca76f7d.js";import{X as m}from"./XYZ-7263712f.js";import{_ as d,i as _,o as h,c as u,b as e,t as o,g as s,F as g,p as w,k as y,d as i}from"./index-c940254e.js";import"./BaseTile-53865aab.js";import"./TileProperty-ab86017d.js";import"./TileLayer-7e43e564.js";import"./Layer-a8143b89.js";import"./TileImage-4a3fae9a.js";import"./UrlTile-d31c8ece.js";const f="Constrained Zoom",v=`
  <div id="map" class="map"></div>
`,b=`
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
`;const t=a=>(w("data-v-d368e7dd"),a=a(),y(),a),j={id:"title"},Z=t(()=>e("div",{id:"map",class:"map"},null,-1)),M=t(()=>e("p",null,[i("This map has a view that is constrained between zoom levels 9 and 13. This is done using the "),e("code",null,"minZoom"),i(" and "),e("code",null,"maxZoom"),i(" view options.")],-1)),T=t(()=>e("h5",{class:"source-heading"},"html",-1)),V={class:"language-html"},z=t(()=>e("h5",{class:"source-heading"},"css",-1)),I={class:"language-css"},S=t(()=>e("h5",{class:"source-heading"},"js",-1)),X={class:"language-js"},Y=t(()=>e("h5",{class:"source-heading"},"package.json",-1)),P={class:"language-json"},B={__name:"index",setup(a){return _(()=>{const r="WYPadsIvfisd0PUHFJ6K",n='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>';new c({target:"map",layers:[new l({source:new m({attributions:n,url:"https://api.maptiler.com/tiles/satellite/{z}/{x}/{y}.jpg?key="+r})})],view:new p({center:[-13553864,5918250],zoom:11,minZoom:9,maxZoom:13})}),Prism.highlightAll()}),(r,n)=>(h(),u(g,null,[e("h4",j,o(s(f)),1),Z,M,T,e("pre",null,[e("code",V,o("  "+s(v).trim()),1)]),z,e("pre",null,[e("code",I,o("  "+s(b).trim()),1)]),S,e("pre",null,[e("code",X,o("  "+s(k).trim()),1)]),Y,e("pre",null,[e("code",P,o("  "+s(x).trim()),1)])],64))}},J=d(B,[["__scopeId","data-v-d368e7dd"]]);export{J as default};
