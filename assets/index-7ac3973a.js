import{G as i}from"./GeoTIFF-c4e23fd7.js";import{M as n}from"./Layer-3b715193.js";import{T as r}from"./WebGLTile-c6cc51be.js";import{_ as l,i as d,o as _,c as p,b as e,t,g as o,F as m,p as u,k as h}from"./index-c958856c.js";import"./TileProperty-e33ea24b.js";import"./ShaderBuilder-d8651322.js";import"./BaseTile-8ab94efc.js";import"./styleparser-870cae1d.js";const g="Cloud Optimized GeoTIFF (COG)",w=`
  <div id="map" class="map"></div>
`,F=`
  .map {
    width: 100%;
    height: 400px;
  }
`,T=`
  import GeoTIFF from 'ol/source/GeoTIFF.js';
  import Map from 'ol/Map.js';
  import TileLayer from 'ol/layer/WebGLTile.js';

  const source = new GeoTIFF({
    sources: [
      {
        url: 'https://sentinel-cogs.s3.us-west-2.amazonaws.com/sentinel-s2-l2a-cogs/36/Q/WD/2020/7/S2A_36QWD_20200701_0_L2A/TCI.tif',
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
    view: source.getView(),
  });
`,f=`
  {
    "name": "cog",
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
`;const s=a=>(u("data-v-595cdcc5"),a=a(),h(),a),I={id:"title"},v=s(()=>e("div",{id:"map",class:"map"},null,-1)),G=s(()=>e("p",null,"Tiled data from a Cloud Optimized GeoTIFF (COG) can be rendered as a layer. In this example, a single 3-band GeoTIFF is used to render RGB data.",-1)),y=s(()=>e("h5",{class:"source-heading"},"html",-1)),x={class:"language-html"},j=s(()=>e("h5",{class:"source-heading"},"css",-1)),b={class:"language-css"},C=s(()=>e("h5",{class:"source-heading"},"js",-1)),D={class:"language-js"},L=s(()=>e("h5",{class:"source-heading"},"package.json",-1)),M={class:"language-json"},S={__name:"index",setup(a){return d(()=>{const c=new i({sources:[{url:"https://sentinel-cogs.s3.us-west-2.amazonaws.com/sentinel-s2-l2a-cogs/36/Q/WD/2020/7/S2A_36QWD_20200701_0_L2A/TCI.tif"}]});new n({target:"map",layers:[new r({source:c})],view:c.getView()}),Prism.highlightAll()}),(c,k)=>(_(),p(m,null,[e("h4",I,t(o(g)),1),v,G,y,e("pre",null,[e("code",x,t("  "+o(w).trim()),1)]),j,e("pre",null,[e("code",b,t("  "+o(F).trim()),1)]),C,e("pre",null,[e("code",D,t("  "+o(T).trim()),1)]),L,e("pre",null,[e("code",M,t("  "+o(f).trim()),1)])],64))}},N=l(S,[["__scopeId","data-v-595cdcc5"]]);export{N as default};
