import{M as o,T as i,O as c,V as n}from"./Tile-a51fb408.js";import{_ as l,i as p,o as r,c as _,b as e,t,F as d,p as m,k as h}from"./index-1aa40be1.js";const s=a=>(m("data-v-a9a58d20"),a=a(),h(),a),u=s(()=>e("div",{id:"map",class:"map"},null,-1)),g=s(()=>e("p",null,"该页的map元素的tabindex属性设置为“0”，这使得它可以聚焦。要聚焦到该元素，您可以使用“tab”键导航到它，也可以点击跳转链接。当地图元素处于聚焦状态时，您可以使用键盘的+和-键来对地图进行放大和缩小，以及可以使用键盘方向键来平移地图。",-1)),w=s(()=>e("p",null,"点击地图下方的“放大”和“缩小”按钮可以放大和缩小地图。您可以使用“tab”键聚焦到按钮上，然后键盘按下回车“enter”键来触发缩放操作。",-1)),M=s(()=>e("h5",{class:"source-heading"},"html",-1)),v={class:"language-html"},S=s(()=>e("h5",{class:"source-heading"},"css",-1)),f={class:"language-css"},j=s(()=>e("h5",{class:"source-heading"},"js",-1)),y={class:"language-js"},b=s(()=>e("h5",{class:"source-heading"},"package.json",-1)),x={class:"language-json"},V="Simple Map",k=`
  <div id="map" class="map"></div>
`,O=`
  .map {
    width: 100%;
    height: 400px;
  }
`,T=`
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
      center: [0, 0],
      zoom: 2,
    }),
  });
`,I=`
  {
    "name": "simple",
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
`,B={__name:"Simple Map",setup(a){return p(()=>{new o({layers:[new i({source:new c})],target:"map",view:new n({center:[0,0],zoom:2})}),Prism.highlightAll()}),(L,z)=>(r(),_(d,null,[e("h4",{id:"title"},t(V)),u,g,w,M,e("pre",null,[e("code",v,t("  "+k.trim()),1)]),S,e("pre",null,[e("code",f,t("  "+O.trim()),1)]),j,e("pre",null,[e("code",y,t("  "+T.trim()),1)]),b,e("pre",null,[e("code",x,t("  "+I.trim()),1)])],64))}},A=l(B,[["__scopeId","data-v-a9a58d20"]]);export{A as default};
