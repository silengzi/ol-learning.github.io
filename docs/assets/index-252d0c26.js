import{F as x,V as S,a as P}from"./Vector-c43c78f5.js";import{Z as k,_ as z,$ as F,R as M,a0 as O,a1 as E,a2 as L,g as C,f as g,W as j,m as N,l as T,V,M as I}from"./TileLayer-f9f86bd4.js";import{J}from"./JSONFeature-66f83bc6.js";import{t as _,L as A,b as B,a as R,M as K}from"./MultiPolygon-1c2bad20.js";import{_ as U,i as X,o as Y,c as Z,b as a,t as m,g as u,d as w,F as D,j as G,p as H,k as $}from"./index-4acf93cb.js";import{T as W}from"./Tile-a0d0c745.js";import{O as Q}from"./OSM-cb70612a.js";import"./featureloader-3de5b58a.js";class h extends k{constructor(e){super(),this.geometries_=e||null,this.changeEventsKeys_=[],this.listenGeometriesChange_()}unlistenGeometriesChange_(){this.changeEventsKeys_.forEach(z),this.changeEventsKeys_.length=0}listenGeometriesChange_(){if(this.geometries_)for(let e=0,o=this.geometries_.length;e<o;++e)this.changeEventsKeys_.push(F(this.geometries_[e],M.CHANGE,this.changed,this))}clone(){const e=new h(null);return e.setGeometries(this.geometries_),e.applyProperties(this),e}closestPointXY(e,o,t,r){if(r<O(this.getExtent(),e,o))return r;const n=this.geometries_;for(let s=0,c=n.length;s<c;++s)r=n[s].closestPointXY(e,o,t,r);return r}containsXY(e,o){const t=this.geometries_;for(let r=0,n=t.length;r<n;++r)if(t[r].containsXY(e,o))return!0;return!1}computeExtent(e){E(e);const o=this.geometries_;for(let t=0,r=o.length;t<r;++t)L(e,o[t].getExtent());return e}getGeometries(){return v(this.geometries_)}getGeometriesArray(){return this.geometries_}getGeometriesArrayRecursive(){let e=[];const o=this.geometries_;for(let t=0,r=o.length;t<r;++t)o[t].getType()===this.getType()?e=e.concat(o[t].getGeometriesArrayRecursive()):e.push(o[t]);return e}getSimplifiedGeometry(e){if(this.simplifiedGeometryRevision!==this.getRevision()&&(this.simplifiedGeometryMaxMinSquaredTolerance=0,this.simplifiedGeometryRevision=this.getRevision()),e<0||this.simplifiedGeometryMaxMinSquaredTolerance!==0&&e<this.simplifiedGeometryMaxMinSquaredTolerance)return this;const o=[],t=this.geometries_;let r=!1;for(let n=0,s=t.length;n<s;++n){const c=t[n],l=c.getSimplifiedGeometry(e);o.push(l),l!==c&&(r=!0)}if(r){const n=new h(null);return n.setGeometriesArray(o),n}return this.simplifiedGeometryMaxMinSquaredTolerance=e,this}getType(){return"GeometryCollection"}intersectsExtent(e){const o=this.geometries_;for(let t=0,r=o.length;t<r;++t)if(o[t].intersectsExtent(e))return!0;return!1}isEmpty(){return this.geometries_.length===0}rotate(e,o){const t=this.geometries_;for(let r=0,n=t.length;r<n;++r)t[r].rotate(e,o);this.changed()}scale(e,o,t){t||(t=C(this.getExtent()));const r=this.geometries_;for(let n=0,s=r.length;n<s;++n)r[n].scale(e,o,t);this.changed()}setGeometries(e){this.setGeometriesArray(v(e))}setGeometriesArray(e){this.unlistenGeometriesChange_(),this.geometries_=e,this.listenGeometriesChange_(),this.changed()}applyTransform(e){const o=this.geometries_;for(let t=0,r=o.length;t<r;++t)o[t].applyTransform(e);this.changed()}translate(e,o){const t=this.geometries_;for(let r=0,n=t.length;r<n;++r)t[r].translate(e,o);this.changed()}disposeInternal(){this.unlistenGeometriesChange_(),super.disposeInternal()}}function v(i){const e=[];for(let o=0,t=i.length;o<t;++o)e.push(i[o].clone());return e}const q=h,ee="Advanced View Positioning",te=`
  <div class="mapcontainer">
  <div id="map" class="map"></div>
  <div class="padding-top"></div>
  <div class="padding-left"></div>
  <div class="padding-right"></div>
  <div class="padding-bottom"></div>
  <div class="center"></div>
  </div>
  <button id="zoomtoswitzerland">Zoom to Switzerland</button> (best fit).<br/>
  <button id="zoomtolausanne">Zoom to Lausanne</button> (with min resolution),<br/>
  <button id="centerlausanne">Center on Lausanne</button>
`,oe=`
  .map {
    width: 100%;
    height: 400px;
  }
  .mapcontainer {
    position: relative;
    margin-bottom: 20px;
  }
  .map {
    width: 1000px;
    height: 600px;
  }
  .map .ol-zoom {
    top: 178px;
    left: 158px;
  }
  .map .ol-rotate {
    top: 178px;
    right: 58px;
  }
  .map .ol-attribution,
  .map .ol-attribution.ol-uncollapsible {
    bottom: 30px;
    right: 50px;
  }
  .padding-top {
    position: absolute;
    top: 0;
    left: 0px;
    width: 1000px;
    height: 170px;
    background: rgba(255, 255, 255, 0.5);
  }
  .padding-left {
    position: absolute;
    top: 170px;
    left: 0;
    width: 150px;
    height: 400px;
    background: rgba(255, 255, 255, 0.5);
  }
  .padding-right {
    position: absolute;
    top: 170px;
    left: 950px;
    width: 50px;
    height: 400px;
    background: rgba(255, 255, 255, 0.5);
  }
  .padding-bottom {
    position: absolute;
    top: 570px;
    left: 0px;
    width: 1000px;
    height: 30px;
    background: rgba(255, 255, 255, 0.5);
  }
  .center {
    position: absolute;
    border: solid 1px black;
    top: 490px;
    left: 560px;
    width: 20px;
    height: 20px;
  }
`,ie=`
  import GeoJSON from 'ol/format/GeoJSON.js';
  import Map from 'ol/Map.js';
  import View from 'ol/View.js';
  import {OSM, Vector as VectorSource} from 'ol/source.js';
  import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';

  const source = new VectorSource({
    url: 'data/geojson/switzerland.geojson',
    format: new GeoJSON(),
  });

  const vectorLayer = new VectorLayer({
    source: source,
    style: {
      'fill-color': 'rgba(255, 255, 255, 0.6)',
      'stroke-width': 1,
      'stroke-color': '#319FD3',
      'circle-radius': 5,
      'circle-fill-color': 'rgba(255, 255, 255, 0.6)',
      'circle-stroke-width': 1,
      'circle-stroke-color': '#319FD3',
    },
  });

  const view = new View({
    center: [0, 0],
    zoom: 1,
  });
  const map = new Map({
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
      vectorLayer,
    ],
    target: 'map',
    view: view,
  });

  const zoomtoswitzerland = document.getElementById('zoomtoswitzerland');
  zoomtoswitzerland.addEventListener(
    'click',
    function () {
      const feature = source.getFeatures()[0];
      const polygon = feature.getGeometry();
      view.fit(polygon, {padding: [170, 50, 30, 150]});
    },
    false
  );

  const zoomtolausanne = document.getElementById('zoomtolausanne');
  zoomtolausanne.addEventListener(
    'click',
    function () {
      const feature = source.getFeatures()[1];
      const point = feature.getGeometry();
      view.fit(point, {padding: [170, 50, 30, 150], minResolution: 50});
    },
    false
  );

  const centerlausanne = document.getElementById('centerlausanne');
  centerlausanne.addEventListener(
    'click',
    function () {
      const feature = source.getFeatures()[1];
      const point = feature.getGeometry();
      const size = map.getSize();
      view.centerOn(point.getCoordinates(), size, [570, 500]);
    },
    false
  );
`,re=`
  {
    "name": "center",
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
`;class ne extends J{constructor(e){e=e||{},super(),this.dataProjection=g(e.dataProjection?e.dataProjection:"EPSG:4326"),e.featureProjection&&(this.defaultFeatureProjection=g(e.featureProjection)),this.geometryName_=e.geometryName,this.extractGeometryName_=e.extractGeometryName,this.supportedMediaTypes=["application/geo+json","application/vnd.geo+json"]}readFeatureFromObject(e,o){let t=null;e.type==="Feature"?t=e:t={type:"Feature",geometry:e,properties:null};const r=f(t.geometry,o),n=new x;return this.geometryName_?n.setGeometryName(this.geometryName_):this.extractGeometryName_&&"geometry_name"in t!==void 0&&n.setGeometryName(t.geometry_name),n.setGeometry(r),"id"in t&&n.setId(t.id),t.properties&&n.setProperties(t.properties,!0),n}readFeaturesFromObject(e,o){const t=e;let r=null;if(t.type==="FeatureCollection"){const n=e;r=[];const s=n.features;for(let c=0,l=s.length;c<l;++c)r.push(this.readFeatureFromObject(s[c],o))}else r=[this.readFeatureFromObject(e,o)];return r}readGeometryFromObject(e,o){return f(e,o)}readProjectionFromObject(e){const o=e.crs;let t;if(o)if(o.type=="name")t=g(o.properties.name);else if(o.type==="EPSG")t=g("EPSG:"+o.properties.code);else throw new Error("Unknown SRS type");else t=this.dataProjection;return t}writeFeatureObject(e,o){o=this.adaptOptions(o);const t={type:"Feature",geometry:null,properties:null},r=e.getId();if(r!==void 0&&(t.id=r),!e.hasProperties())return t;const n=e.getProperties(),s=e.getGeometry();return s&&(t.geometry=y(s,o),delete n[e.getGeometryName()]),j(n)||(t.properties=n),t}writeFeaturesObject(e,o){o=this.adaptOptions(o);const t=[];for(let r=0,n=e.length;r<n;++r)t.push(this.writeFeatureObject(e[r],o));return{type:"FeatureCollection",features:t}}writeGeometryObject(e,o){return y(e,this.adaptOptions(o))}}function f(i,e){if(!i)return null;let o;switch(i.type){case"Point":{o=ae(i);break}case"LineString":{o=ce(i);break}case"Polygon":{o=ue(i);break}case"MultiPoint":{o=de(i);break}case"MultiLineString":{o=le(i);break}case"MultiPolygon":{o=me(i);break}case"GeometryCollection":{o=se(i);break}default:throw new Error("Unsupported GeoJSON type: "+i.type)}return _(o,!1,e)}function se(i,e){const o=i.geometries.map(function(t){return f(t,e)});return new q(o)}function ae(i){return new N(i.coordinates)}function ce(i){return new A(i.coordinates)}function le(i){return new B(i.coordinates)}function de(i){return new R(i.coordinates)}function me(i){return new K(i.coordinates)}function ue(i){return new T(i.coordinates)}function y(i,e){i=_(i,!0,e);const o=i.getType();let t;switch(o){case"Point":{t=we(i);break}case"LineString":{t=ge(i);break}case"Polygon":{t=ve(i,e);break}case"MultiPoint":{t=fe(i);break}case"MultiLineString":{t=he(i);break}case"MultiPolygon":{t=ye(i,e);break}case"GeometryCollection":{t=pe(i,e);break}case"Circle":{t={type:"GeometryCollection",geometries:[]};break}default:throw new Error("Unsupported geometry type: "+o)}return t}function pe(i,e){return e=Object.assign({},e),delete e.featureProjection,{type:"GeometryCollection",geometries:i.getGeometriesArray().map(function(t){return y(t,e)})}}function ge(i,e){return{type:"LineString",coordinates:i.getCoordinates()}}function he(i,e){return{type:"MultiLineString",coordinates:i.getCoordinates()}}function fe(i,e){return{type:"MultiPoint",coordinates:i.getCoordinates()}}function ye(i,e){let o;return e&&(o=e.rightHanded),{type:"MultiPolygon",coordinates:i.getCoordinates(o)}}function we(i,e){return{type:"Point",coordinates:i.getCoordinates()}}function ve(i,e){let o;return e&&(o=e.rightHanded),{type:"Polygon",coordinates:i.getCoordinates(o)}}const _e=ne;const p=i=>(H("data-v-45d86aff"),i=i(),$(),i),Ge={id:"title"},be=G('<div class="mapcontainer" data-v-45d86aff><div id="map" class="map" data-v-45d86aff></div><div class="padding-top" data-v-45d86aff></div><div class="padding-left" data-v-45d86aff></div><div class="padding-right" data-v-45d86aff></div><div class="padding-bottom" data-v-45d86aff></div><div class="center" data-v-45d86aff></div></div><button id="zoomtoswitzerland" data-v-45d86aff>Zoom to Switzerland</button>',2),xe=p(()=>a("br",null,null,-1)),Se=p(()=>a("button",{id:"zoomtolausanne"},"Zoom to Lausanne",-1)),Pe=G('<br data-v-45d86aff><button id="centerlausanne" data-v-45d86aff>Center on Lausanne</button><p data-v-45d86aff>This example demonstrates how a map&#39;s view can be adjusted so a geometry or coordinate is positioned at a specific pixel location. The map above has top, right, bottom, and left padding applied inside the viewport. The view&#39;s <code data-v-45d86aff>fit</code> method is used to fit a geometry in the view with the same padding. The view&#39;s <code data-v-45d86aff>centerOn</code> method is used to position a coordinate (Lausanne) at a specific pixel location (the center of the black box).</p><p data-v-45d86aff>Use <code data-v-45d86aff>Alt+Shift+Drag</code> to rotate the map.</p><p data-v-45d86aff><b data-v-45d86aff>Note:</b> This example does not shift the view center. So the zoom controls and rotating the map will still use the center of the viewport as anchor. To shift the whole view based on a padding, use the <code data-v-45d86aff>padding</code> option on the view, as shown in the view-padding.html example.</p><h5 class="source-heading" data-v-45d86aff>html</h5>',6),ke={class:"language-html"},ze=p(()=>a("h5",{class:"source-heading"},"css",-1)),Fe={class:"language-css"},Me=p(()=>a("h5",{class:"source-heading"},"js",-1)),Oe={class:"language-js"},Ee=p(()=>a("h5",{class:"source-heading"},"package.json",-1)),Le={class:"language-json"},Ce={__name:"index",setup(i){return X(()=>{const e=new S({url:"https://openlayers.org/en/latest/examples/data/geojson/switzerland.geojson",format:new _e}),o=new P({source:e,style:{"fill-color":"rgba(255, 255, 255, 0.6)","stroke-width":1,"stroke-color":"#319FD3","circle-radius":5,"circle-fill-color":"rgba(255, 255, 255, 0.6)","circle-stroke-width":1,"circle-stroke-color":"#319FD3"}}),t=new V({center:[0,0],zoom:1}),r=new I({layers:[new W({source:new Q}),o],target:"map",view:t});document.getElementById("zoomtoswitzerland").addEventListener("click",function(){const d=e.getFeatures()[0].getGeometry();t.fit(d,{padding:[170,50,30,150]})},!1),document.getElementById("zoomtolausanne").addEventListener("click",function(){const d=e.getFeatures()[1].getGeometry();t.fit(d,{padding:[170,50,30,150],minResolution:50})},!1),document.getElementById("centerlausanne").addEventListener("click",function(){const d=e.getFeatures()[1].getGeometry(),b=r.getSize();t.centerOn(d.getCoordinates(),b,[570,500])},!1),Prism.highlightAll()}),(e,o)=>(Y(),Z(D,null,[a("h4",Ge,m(u(ee)),1),be,w(" (best fit)."),xe,Se,w(" (with min resolution),"),Pe,a("pre",null,[a("code",ke,m("  "+u(te).trim().toString()),1)]),ze,a("pre",null,[a("code",Fe,m("  "+u(oe).trim().toString()),1)]),Me,a("pre",null,[a("code",Oe,m("  "+u(ie).trim().toString()),1)]),Ee,a("pre",null,[a("code",Le,m("  "+u(re).trim()),1)])],64))}},Re=U(Ce,[["__scopeId","data-v-45d86aff"]]);export{Re as default};
