import{M as d,V as u}from"./Layer-5200258f.js";import{T as p}from"./Tile-aca76f7d.js";import{_ as m,i as h,o as _,c as g,b as a,t as n,g as r,F as v,j as f,p as y,k as b}from"./index-c940254e.js";import{X as w}from"./XYZ-7263712f.js";import{O as S}from"./OSM-7231e773.js";import"./BaseTile-53865aab.js";import"./TileProperty-ab86017d.js";import"./TileLayer-7e43e564.js";import"./Layer-a8143b89.js";import"./TileImage-4a3fae9a.js";import"./UrlTile-d31c8ece.js";class C extends w{constructor(e){super({attributions:e.attributions,cacheSize:e.cacheSize,crossOrigin:e.crossOrigin,maxZoom:e.maxZoom!==void 0?e.maxZoom:18,minZoom:e.minZoom,projection:e.projection,transition:e.transition,wrapX:e.wrapX,zDirection:e.zDirection}),this.account_=e.account,this.mapId_=e.map||"",this.config_=e.config||{},this.templateCache_={},this.initializeMap_()}getConfig(){return this.config_}updateConfig(e){Object.assign(this.config_,e),this.initializeMap_()}setConfig(e){this.config_=e||{},this.initializeMap_()}initializeMap_(){const e=JSON.stringify(this.config_);if(this.templateCache_[e]){this.applyTemplate_(this.templateCache_[e]);return}let o="https://"+this.account_+".carto.com/api/v1/map";this.mapId_&&(o+="/named/"+this.mapId_);const t=new XMLHttpRequest;t.addEventListener("load",this.handleInitResponse_.bind(this,e)),t.addEventListener("error",this.handleInitError_.bind(this)),t.open("POST",o),t.setRequestHeader("Content-type","application/json"),t.send(JSON.stringify(this.config_))}handleInitResponse_(e,o){const t=o.target;if(!t.status||t.status>=200&&t.status<300){let s;try{s=JSON.parse(t.responseText)}catch{this.setState("error");return}this.applyTemplate_(s),this.templateCache_[e]=s,this.setState("ready")}else this.setState("error")}handleInitError_(e){this.setState("error")}applyTemplate_(e){const o="https://"+e.cdn_url.https+"/"+this.account_+"/api/v1/map/"+e.layergroupid+"/{z}/{x}/{y}.png";this.setUrl(o)}}const x=C,j="CartoDB source example",B=`
  <div id="map" class="map"></div>
  <form class="row">
    <div class="col-auto">
      <div class="input-group">
        <label for="country-area" class="input-group-text">Show european countries larger than</label>
        <select id="country-area" class="form-select">
          <option value="0" default>0 ㎢</option>
          <option value="5000">5000 ㎢</option>
          <option value="10000">10000 ㎢</option>
          <option value="50000">50000 ㎢</option>
          <option value="100000">100000 ㎢</option>
        </select>
      </div>
    </div>
  </form>
`,M=`
  .map {
    width: 100%;
    height: 400px;
  }
`,D=`
  import Map from 'ol/Map.js';
  import TileLayer from 'ol/layer/Tile.js';
  import View from 'ol/View.js';
  import {CartoDB, OSM} from 'ol/source.js';

  const mapConfig = {
    'layers': [
      {
        'type': 'cartodb',
        'options': {
          'cartocss_version': '2.1.1',
          'cartocss': '#layer { polygon-fill: #F00; }',
        },
      },
    ],
  };

  function setArea(n) {
    mapConfig.layers[0].options.sql =
      'select * from european_countries_e where area > ' + n;
  }
  const areaSelect = document.getElementById('country-area');
  setArea(areaSelect.value);

  const cartoDBSource = new CartoDB({
    account: 'documentation',
    config: mapConfig,
  });

  areaSelect.addEventListener('change', function () {
    setArea(this.value);
    cartoDBSource.setConfig(mapConfig);
  });

  const map = new Map({
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
      new TileLayer({
        source: cartoDBSource,
      }),
    ],
    target: 'map',
    view: new View({
      center: [8500000, 8500000],
      zoom: 2,
    }),
  });
`,I=`
  {
    "name": "cartodb",
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
`;const c=i=>(y("data-v-4e671db1"),i=i(),b(),i),z={id:"title"},O=f('<div id="map" class="map" data-v-4e671db1></div><form class="row" data-v-4e671db1><div class="col-auto" data-v-4e671db1><div class="input-group" data-v-4e671db1><label for="country-area" class="input-group-text" data-v-4e671db1>Show european countries larger than</label><select id="country-area" class="form-select" data-v-4e671db1><option value="0" default data-v-4e671db1>0 ㎢</option><option value="5000" data-v-4e671db1>5000 ㎢</option><option value="10000" data-v-4e671db1>10000 ㎢</option><option value="50000" data-v-4e671db1>50000 ㎢</option><option value="100000" data-v-4e671db1>100000 ㎢</option></select></div></div></form><p data-v-4e671db1>A simple example with an anonymous cartodb map.</p><h5 class="source-heading" data-v-4e671db1>html</h5>',4),T={class:"language-html"},E=c(()=>a("h5",{class:"source-heading"},"css",-1)),L={class:"language-css"},V=c(()=>a("h5",{class:"source-heading"},"js",-1)),A={class:"language-js"},Z=c(()=>a("h5",{class:"source-heading"},"package.json",-1)),k={class:"language-json"},N={__name:"index",setup(i){return h(()=>{const e={layers:[{type:"cartodb",options:{cartocss_version:"2.1.1",cartocss:"#layer { polygon-fill: #F00; }"}}]};function o(l){e.layers[0].options.sql="select * from european_countries_e where area > "+l}const t=document.getElementById("country-area");o(t.value);const s=new x({account:"documentation",config:e});t.addEventListener("change",function(){o(this.value),s.setConfig(e)}),new d({layers:[new p({source:new S}),new p({source:s})],target:"map",view:new u({center:[85e5,85e5],zoom:2})}),Prism.highlightAll()}),(e,o)=>(_(),g(v,null,[a("h4",z,n(r(j)),1),O,a("pre",null,[a("code",T,n("  "+r(B).trim()),1)]),E,a("pre",null,[a("code",L,n("  "+r(M).trim()),1)]),V,a("pre",null,[a("code",A,n("  "+r(D).trim()),1)]),Z,a("pre",null,[a("code",k,n("  "+r(I).trim()),1)])],64))}},K=m(N,[["__scopeId","data-v-4e671db1"]]);export{K as default};
