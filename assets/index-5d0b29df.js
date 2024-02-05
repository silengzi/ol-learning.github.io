import{G as l,T as c}from"./WebGLTile-70eb1a06.js";import{M as d}from"./Layer-5200258f.js";import{_ as p,i as _,o as m,c as h,b as e,t,g as o,F as u,p as g,k as b}from"./index-f7249d0d.js";import"./TileProperty-ab86017d.js";import"./_commonjsHelpers-39b5b250.js";import"./BaseTile-53865aab.js";const f="Cloud Optimized GeoTIFF (COG) from a Blob",F=`
  <div id="map" class="map"></div>
`,w=`
  .map {
    width: 100%;
    height: 400px;
  }
`,v=`
  import GeoTIFF from 'ol/source/GeoTIFF.js';
  import Map from 'ol/Map.js';
  import TileLayer from 'ol/layer/WebGLTile.js';

  fetch('data/example.tif')
    .then((response) => response.blob())
    .then((blob) => {
      const source = new GeoTIFF({
        sources: [
          {
            blob: blob,
          },
        ],
      });

      const map = new Map({
        target: 'map',
        layers: [
          new TileLayer({
            source: source,
          }),
        ],
        view: source.getView().then((viewConfig) => {
          viewConfig.showFullExtent = true;
          return viewConfig;
        }),
      });
    });
`,x=`
  {
    "name": "cog-blob",
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
`;const s=a=>(g("data-v-6aa593db"),a=a(),b(),a),T={id:"title"},G=s(()=>e("div",{id:"map",class:"map"},null,-1)),I=s(()=>e("p",null,"Tiled data from a Cloud Optimized GeoTIFF (COG) can be rendered as a layer. In this example, a single 3-band GeoTIFF is used to render RGB data from a Blob.",-1)),y=s(()=>e("h5",{class:"source-heading"},"html",-1)),j={class:"language-html"},B=s(()=>e("h5",{class:"source-heading"},"css",-1)),C={class:"language-css"},M=s(()=>e("h5",{class:"source-heading"},"js",-1)),k={class:"language-js"},L=s(()=>e("h5",{class:"source-heading"},"package.json",-1)),O={class:"language-json"},S={__name:"index",setup(a){return _(()=>{fetch("https://openlayers.org/en/latest/examples/data/example.tif").then(n=>n.blob()).then(n=>{const r=new l({sources:[{blob:n}]});new d({target:"map",layers:[new c({source:r})],view:r.getView().then(i=>(i.showFullExtent=!0,i))})}),Prism.highlightAll()}),(n,r)=>(m(),h(u,null,[e("h4",T,t(o(f)),1),G,I,y,e("pre",null,[e("code",j,t("  "+o(F).trim()),1)]),B,e("pre",null,[e("code",C,t("  "+o(w).trim()),1)]),M,e("pre",null,[e("code",k,t("  "+o(v).trim()),1)]),L,e("pre",null,[e("code",O,t("  "+o(x).trim()),1)])],64))}},P=p(S,[["__scopeId","data-v-6aa593db"]]);export{P as default};
