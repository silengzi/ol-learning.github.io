import{M as d,V as m}from"./Layer-3b715193.js";import{O as h}from"./OSM-f0f00429.js";import{T as u}from"./Tile-70490af9.js";import{_,i as w,r as g,o as y,c as v,b as e,t as s,g as o,a as f,F as x,p as k,k as M,d as i}from"./index-92068577.js";import"./XYZ-80208d03.js";import"./TileImage-1df58d67.js";import"./TileProperty-e33ea24b.js";import"./UrlTile-dc2c26ed.js";import"./BaseTile-8ab94efc.js";import"./TileLayer-7c629c64.js";import"./Layer-37ea9c2e.js";const C="Custom map element",E=`
  <ol-map id="map" class="map"></ol-map>
`,S=`
  .map {
    width: 100%;
    height: 400px;
  }
`,T=`
  import Map from 'ol/Map.js';
  import OSM from 'ol/source/OSM.js';
  import TileLayer from 'ol/layer/Tile.js';
  import View from 'ol/View.js';

  class OLComponent extends HTMLElement {
    constructor() {
      super();
      this.shadow = this.attachShadow({mode: 'open'});
      const link = document.createElement('link');
      link.setAttribute('rel', 'stylesheet');
      link.setAttribute('href', 'https://openlayers.org/en/latest/examples/theme/ol.css');
      this.shadow.appendChild(link);
      const style = document.createElement('style');
      style.innerText = \`
        :host {
          display: block;
        }
      \`;
      this.shadow.appendChild(style);
      const div = document.createElement('div');
      div.style.width = '100%';
      div.style.height = '100%';
      this.shadow.appendChild(div);

      this.map = new Map({
        target: div,
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
        ],
        view: new View({
          center: [0, 0],
          zoom: 2,
        }),
      });
    }
  }

  customElements.define('ol-map', OLComponent);
`,b=`
  {
    "name": "es2015-custom-element",
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
`;const a=n=>(k("data-v-5c52a476"),n=n(),M(),n),j={id:"title"},O=a(()=>e("p",null,[i("The example creates and registers a custom element, "),e("code",null,"ol-map"),i(", which contains a simple map. "),e("strong",null,"Note:"),i(" Only works in browsers that supports "),e("code",null,"ShadowRoot"),i(".")],-1)),L=a(()=>e("h5",{class:"source-heading"},"html",-1)),V={class:"language-html"},A=a(()=>e("h5",{class:"source-heading"},"css",-1)),I={class:"language-css"},N=a(()=>e("h5",{class:"source-heading"},"js",-1)),B={class:"language-js"},z=a(()=>e("h5",{class:"source-heading"},"package.json",-1)),D={class:"language-json"},F={__name:"index",setup(n){return w(()=>{class c extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"});const t=document.createElement("link");t.setAttribute("rel","stylesheet"),t.setAttribute("href","https://openlayers.org/en/latest/examples/theme/ol.css"),this.shadow.appendChild(t);const p=document.createElement("style");p.innerText=`
        :host {
          display: block;
        }
      `,this.shadow.appendChild(p);const l=document.createElement("div");l.style.width="100%",l.style.height="100%",this.shadow.appendChild(l),this.map=new d({target:l,layers:[new u({source:new h})],view:new m({center:[0,0],zoom:2})})}}try{customElements.define("ol-map",c)}catch{console.log("ol-map 元素注册失败，因为已经被注册过了")}Prism.highlightAll()}),(c,r)=>{const t=g("ol-map");return y(),v(x,null,[e("h4",j,s(o(C)),1),f(t,{id:"map",class:"map"}),O,L,e("pre",null,[e("code",V,s("  "+o(E).trim()),1)]),A,e("pre",null,[e("code",I,s("  "+o(S).trim()),1)]),N,e("pre",null,[e("code",B,s("  "+o(T).trim()),1)]),z,e("pre",null,[e("code",D,s("  "+o(b).trim()),1)])],64)}}},Y=_(F,[["__scopeId","data-v-5c52a476"]]);export{Y as default};
