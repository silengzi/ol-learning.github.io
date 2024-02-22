import{T as f,D as m}from"./WebGLTile-360166ba.js";import{M as _,V as g}from"./Layer-763025a3.js";import{_ as x,i as u,o as z,c as y,b as e,t as a,g as i,F as v,p as w,k as T}from"./index-87bb3bb9.js";import"./expressions-6baa81d4.js";import"./TileProperty-b49a7745.js";import"./BaseTile-115b346f.js";const b="Data Tiles",k=`
  <div id="map" class="map"></div>
`,D=`
  .map {
    width: 100%;
    height: 400px;
  }
`,S=`
  import DataTile from 'ol/source/DataTile.js';
  import Map from 'ol/Map.js';
  import TileLayer from 'ol/layer/WebGLTile.js';
  import View from 'ol/View.js';

  const size = 256;

  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;

  const context = canvas.getContext('2d');
  context.strokeStyle = 'white';
  context.textAlign = 'center';
  context.font = '24px sans-serif';
  const lineHeight = 30;

  const map = new Map({
    target: 'map',
    layers: [
      new TileLayer({
        source: new DataTile({
          loader: function (z, x, y) {
            const half = size / 2;
            context.clearRect(0, 0, size, size);
            context.fillStyle = 'rgba(100, 100, 100, 0.5)';
            context.fillRect(0, 0, size, size);
            context.fillStyle = 'black';
            context.fillText(\`z: \${z}\`, half, half - lineHeight);
            context.fillText(\`x: \${x}\`, half, half);
            context.fillText(\`y: \${y}\`, half, half + lineHeight);
            context.strokeRect(0, 0, size, size);
            const data = context.getImageData(0, 0, size, size).data;
            // converting to Uint8Array for increased browser compatibility
            return new Uint8Array(data.buffer);
          },
          // disable opacity transition to avoid overlapping labels during tile loading
          transition: 0,
        }),
      }),
    ],
    view: new View({
      center: [0, 0],
      zoom: 0,
    }),
  });
`,j=`
  {
    "name": "data-tiles",
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
`;const s=n=>(w("data-v-7954303a"),n=n(),T(),n),A={id:"title"},R=s(()=>e("div",{id:"map",class:"map"},null,-1)),I=s(()=>e("p",null,"This example generates RGBA tile data from scratch.",-1)),M=s(()=>e("h5",{class:"source-heading"},"html",-1)),V={class:"language-html"},$=s(()=>e("h5",{class:"source-heading"},"css",-1)),B={class:"language-css"},H=s(()=>e("h5",{class:"source-heading"},"js",-1)),L={class:"language-js"},E=s(()=>e("h5",{class:"source-heading"},"package.json",-1)),U={class:"language-json"},C={__name:"index",setup(n){return u(()=>{const o=document.createElement("canvas");o.width=256,o.height=256;const t=o.getContext("2d");t.strokeStyle="white",t.textAlign="center",t.font="24px sans-serif";const l=30;new _({target:"map",layers:[new f({source:new m({loader:function(r,d,h){t.clearRect(0,0,256,256),t.fillStyle="rgba(100, 100, 100, 0.5)",t.fillRect(0,0,256,256),t.fillStyle="black",t.fillText(`z: ${r}`,128,128-l),t.fillText(`x: ${d}`,128,128),t.fillText(`y: ${h}`,128,128+l),t.strokeRect(0,0,256,256);const p=t.getImageData(0,0,256,256).data;return new Uint8Array(p.buffer)},transition:0})})],view:new g({center:[0,0],zoom:0})}),Prism.highlightAll()}),(c,o)=>(z(),y(v,null,[e("h4",A,a(i(b)),1),R,I,M,e("pre",null,[e("code",V,a("  "+i(k).trim()),1)]),$,e("pre",null,[e("code",B,a("  "+i(D).trim()),1)]),H,e("pre",null,[e("code",L,a("  "+i(S).trim()),1)]),E,e("pre",null,[e("code",U,a("  "+i(j).trim()),1)])],64))}},K=x(C,[["__scopeId","data-v-7954303a"]]);export{K as default};
