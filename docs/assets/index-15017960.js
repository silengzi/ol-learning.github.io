import{Z as xe,_ as V,$ as X,R as Y,F as U,a0 as Ee,a1 as ve,a2 as we,a3 as Fe,g as Ge,a4 as b,f as D,W,m as Ce,l as Re,o as w,r as ce,a5 as Ie,a6 as be,a7 as Oe,a8 as Se,a9 as Te,aa as Z,e as Ae,ab as Le,w as N,ac as Ne,ad as je,ae as Pe,af as q,n as M,ag as k,I as De,J as Me,ah as Q,ai as ke,aj as ze,ak as Ue,al as ee,am as Ve,s as Xe,v as We,q as Be,x as Ke,an as He,ao as Je,ap as Ye,V as $e,M as Ze}from"./TileLayer-114b24fd.js";import{F as qe,t as de,L as Qe,b as et,a as tt,M as rt,R as nt,x as te,H as T,c as st,h as it,C as re,j as ne,g as ot,E as se,r as ie,k as at,B as lt}from"./featureloader-b50c1721.js";import{_ as ct,i as dt,o as ut,c as ht,b as E,t as A,g as L,d as oe,F as gt,j as ue,p as mt,k as ft}from"./index-a4704495.js";import{T as pt,O as yt}from"./Tile-10839265.js";class $ extends xe{constructor(e){if(super(),this.on,this.once,this.un,this.id_=void 0,this.geometryName_="geometry",this.style_=null,this.styleFunction_=void 0,this.geometryChangeKey_=null,this.addChangeListener(this.geometryName_,this.handleGeometryChanged_),e)if(typeof e.getSimplifiedGeometry=="function"){const t=e;this.setGeometry(t)}else{const t=e;this.setProperties(t)}}clone(){const e=new $(this.hasProperties()?this.getProperties():null);e.setGeometryName(this.getGeometryName());const t=this.getGeometry();t&&e.setGeometry(t.clone());const r=this.getStyle();return r&&e.setStyle(r),e}getGeometry(){return this.get(this.geometryName_)}getId(){return this.id_}getGeometryName(){return this.geometryName_}getStyle(){return this.style_}getStyleFunction(){return this.styleFunction_}handleGeometryChange_(){this.changed()}handleGeometryChanged_(){this.geometryChangeKey_&&(V(this.geometryChangeKey_),this.geometryChangeKey_=null);const e=this.getGeometry();e&&(this.geometryChangeKey_=X(e,Y.CHANGE,this.handleGeometryChange_,this)),this.changed()}setGeometry(e){this.set(this.geometryName_,e)}setStyle(e){this.style_=e,this.styleFunction_=e?_t(e):void 0,this.changed()}setId(e){this.id_=e,this.changed()}setGeometryName(e){this.removeChangeListener(this.geometryName_,this.handleGeometryChanged_),this.geometryName_=e,this.addChangeListener(this.geometryName_,this.handleGeometryChanged_),this.handleGeometryChanged_()}}function _t(i){if(typeof i=="function")return i;let e;return Array.isArray(i)?e=i:(U(typeof i.getZIndex=="function","Expected an `ol/style/Style` or an array of `ol/style/Style.js`"),e=[i]),function(){return e}}const xt=$;class B extends Ee{constructor(e){super(),this.geometries_=e||null,this.changeEventsKeys_=[],this.listenGeometriesChange_()}unlistenGeometriesChange_(){this.changeEventsKeys_.forEach(V),this.changeEventsKeys_.length=0}listenGeometriesChange_(){if(this.geometries_)for(let e=0,t=this.geometries_.length;e<t;++e)this.changeEventsKeys_.push(X(this.geometries_[e],Y.CHANGE,this.changed,this))}clone(){const e=new B(null);return e.setGeometries(this.geometries_),e.applyProperties(this),e}closestPointXY(e,t,r,n){if(n<ve(this.getExtent(),e,t))return n;const s=this.geometries_;for(let o=0,a=s.length;o<a;++o)n=s[o].closestPointXY(e,t,r,n);return n}containsXY(e,t){const r=this.geometries_;for(let n=0,s=r.length;n<s;++n)if(r[n].containsXY(e,t))return!0;return!1}computeExtent(e){we(e);const t=this.geometries_;for(let r=0,n=t.length;r<n;++r)Fe(e,t[r].getExtent());return e}getGeometries(){return ae(this.geometries_)}getGeometriesArray(){return this.geometries_}getGeometriesArrayRecursive(){let e=[];const t=this.geometries_;for(let r=0,n=t.length;r<n;++r)t[r].getType()===this.getType()?e=e.concat(t[r].getGeometriesArrayRecursive()):e.push(t[r]);return e}getSimplifiedGeometry(e){if(this.simplifiedGeometryRevision!==this.getRevision()&&(this.simplifiedGeometryMaxMinSquaredTolerance=0,this.simplifiedGeometryRevision=this.getRevision()),e<0||this.simplifiedGeometryMaxMinSquaredTolerance!==0&&e<this.simplifiedGeometryMaxMinSquaredTolerance)return this;const t=[],r=this.geometries_;let n=!1;for(let s=0,o=r.length;s<o;++s){const a=r[s],l=a.getSimplifiedGeometry(e);t.push(l),l!==a&&(n=!0)}if(n){const s=new B(null);return s.setGeometriesArray(t),s}return this.simplifiedGeometryMaxMinSquaredTolerance=e,this}getType(){return"GeometryCollection"}intersectsExtent(e){const t=this.geometries_;for(let r=0,n=t.length;r<n;++r)if(t[r].intersectsExtent(e))return!0;return!1}isEmpty(){return this.geometries_.length===0}rotate(e,t){const r=this.geometries_;for(let n=0,s=r.length;n<s;++n)r[n].rotate(e,t);this.changed()}scale(e,t,r){r||(r=Ge(this.getExtent()));const n=this.geometries_;for(let s=0,o=n.length;s<o;++s)n[s].scale(e,t,r);this.changed()}setGeometries(e){this.setGeometriesArray(ae(e))}setGeometriesArray(e){this.unlistenGeometriesChange_(),this.geometries_=e,this.listenGeometriesChange_(),this.changed()}applyTransform(e){const t=this.geometries_;for(let r=0,n=t.length;r<n;++r)t[r].applyTransform(e);this.changed()}translate(e,t){const r=this.geometries_;for(let n=0,s=r.length;n<s;++n)r[n].translate(e,t);this.changed()}disposeInternal(){this.unlistenGeometriesChange_(),super.disposeInternal()}}function ae(i){const e=[];for(let t=0,r=i.length;t<r;++t)e.push(i[t].clone());return e}const Et=B,vt="Advanced View Positioning",wt=`
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
`,Ft=`
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
`,Gt=`
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
`,Ct=`
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
`;class Rt extends qe{constructor(){super()}getType(){return"json"}readFeature(e,t){return this.readFeatureFromObject(z(e),this.getReadOptions(e,t))}readFeatures(e,t){return this.readFeaturesFromObject(z(e),this.getReadOptions(e,t))}readFeatureFromObject(e,t){return b()}readFeaturesFromObject(e,t){return b()}readGeometry(e,t){return this.readGeometryFromObject(z(e),this.getReadOptions(e,t))}readGeometryFromObject(e,t){return b()}readProjection(e){return this.readProjectionFromObject(z(e))}readProjectionFromObject(e){return b()}writeFeature(e,t){return JSON.stringify(this.writeFeatureObject(e,t))}writeFeatureObject(e,t){return b()}writeFeatures(e,t){return JSON.stringify(this.writeFeaturesObject(e,t))}writeFeaturesObject(e,t){return b()}writeGeometry(e,t){return JSON.stringify(this.writeGeometryObject(e,t))}writeGeometryObject(e,t){return b()}}function z(i){if(typeof i=="string"){const e=JSON.parse(i);return e||null}return i!==null?i:null}const It=Rt;class bt extends It{constructor(e){e=e||{},super(),this.dataProjection=D(e.dataProjection?e.dataProjection:"EPSG:4326"),e.featureProjection&&(this.defaultFeatureProjection=D(e.featureProjection)),this.geometryName_=e.geometryName,this.extractGeometryName_=e.extractGeometryName,this.supportedMediaTypes=["application/geo+json","application/vnd.geo+json"]}readFeatureFromObject(e,t){let r=null;e.type==="Feature"?r=e:r={type:"Feature",geometry:e,properties:null};const n=H(r.geometry,t),s=new xt;return this.geometryName_?s.setGeometryName(this.geometryName_):this.extractGeometryName_&&"geometry_name"in r!==void 0&&s.setGeometryName(r.geometry_name),s.setGeometry(n),"id"in r&&s.setId(r.id),r.properties&&s.setProperties(r.properties,!0),s}readFeaturesFromObject(e,t){const r=e;let n=null;if(r.type==="FeatureCollection"){const s=e;n=[];const o=s.features;for(let a=0,l=o.length;a<l;++a)n.push(this.readFeatureFromObject(o[a],t))}else n=[this.readFeatureFromObject(e,t)];return n}readGeometryFromObject(e,t){return H(e,t)}readProjectionFromObject(e){const t=e.crs;let r;if(t)if(t.type=="name")r=D(t.properties.name);else if(t.type==="EPSG")r=D("EPSG:"+t.properties.code);else throw new Error("Unknown SRS type");else r=this.dataProjection;return r}writeFeatureObject(e,t){t=this.adaptOptions(t);const r={type:"Feature",geometry:null,properties:null},n=e.getId();if(n!==void 0&&(r.id=n),!e.hasProperties())return r;const s=e.getProperties(),o=e.getGeometry();return o&&(r.geometry=J(o,t),delete s[e.getGeometryName()]),W(s)||(r.properties=s),r}writeFeaturesObject(e,t){t=this.adaptOptions(t);const r=[];for(let n=0,s=e.length;n<s;++n)r.push(this.writeFeatureObject(e[n],t));return{type:"FeatureCollection",features:r}}writeGeometryObject(e,t){return J(e,this.adaptOptions(t))}}function H(i,e){if(!i)return null;let t;switch(i.type){case"Point":{t=St(i);break}case"LineString":{t=Tt(i);break}case"Polygon":{t=jt(i);break}case"MultiPoint":{t=Lt(i);break}case"MultiLineString":{t=At(i);break}case"MultiPolygon":{t=Nt(i);break}case"GeometryCollection":{t=Ot(i);break}default:throw new Error("Unsupported GeoJSON type: "+i.type)}return de(t,!1,e)}function Ot(i,e){const t=i.geometries.map(function(r){return H(r,e)});return new Et(t)}function St(i){return new Ce(i.coordinates)}function Tt(i){return new Qe(i.coordinates)}function At(i){return new et(i.coordinates)}function Lt(i){return new tt(i.coordinates)}function Nt(i){return new rt(i.coordinates)}function jt(i){return new Re(i.coordinates)}function J(i,e){i=de(i,!0,e);const t=i.getType();let r;switch(t){case"Point":{r=Ut(i);break}case"LineString":{r=Dt(i);break}case"Polygon":{r=Vt(i,e);break}case"MultiPoint":{r=kt(i);break}case"MultiLineString":{r=Mt(i);break}case"MultiPolygon":{r=zt(i,e);break}case"GeometryCollection":{r=Pt(i,e);break}case"Circle":{r={type:"GeometryCollection",geometries:[]};break}default:throw new Error("Unsupported geometry type: "+t)}return r}function Pt(i,e){return e=Object.assign({},e),delete e.featureProjection,{type:"GeometryCollection",geometries:i.getGeometriesArray().map(function(r){return J(r,e)})}}function Dt(i,e){return{type:"LineString",coordinates:i.getCoordinates()}}function Mt(i,e){return{type:"MultiLineString",coordinates:i.getCoordinates()}}function kt(i,e){return{type:"MultiPoint",coordinates:i.getCoordinates()}}function zt(i,e){let t;return e&&(t=e.rightHanded),{type:"MultiPolygon",coordinates:i.getCoordinates(t)}}function Ut(i,e){return{type:"Point",coordinates:i.getCoordinates()}}function Vt(i,e){let t;return e&&(t=e.rightHanded),{type:"Polygon",coordinates:i.getCoordinates(t)}}const Xt=bt;class Wt{constructor(e){this.rbush_=new nt(e),this.items_={}}insert(e,t){const r={minX:e[0],minY:e[1],maxX:e[2],maxY:e[3],value:t};this.rbush_.insert(r),this.items_[w(t)]=r}load(e,t){const r=new Array(t.length);for(let n=0,s=t.length;n<s;n++){const o=e[n],a=t[n],l={minX:o[0],minY:o[1],maxX:o[2],maxY:o[3],value:a};r[n]=l,this.items_[w(a)]=l}this.rbush_.load(r)}remove(e){const t=w(e),r=this.items_[t];return delete this.items_[t],this.rbush_.remove(r)!==null}update(e,t){const r=this.items_[w(t)],n=[r.minX,r.minY,r.maxX,r.maxY];ce(n,e)||(this.remove(t),this.insert(e,t))}getAll(){return this.rbush_.all().map(function(t){return t.value})}getInExtent(e){const t={minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]};return this.rbush_.search(t).map(function(n){return n.value})}forEach(e){return this.forEach_(this.getAll(),e)}forEachInExtent(e,t){return this.forEach_(this.getInExtent(e),t)}forEach_(e,t){let r;for(let n=0,s=e.length;n<s;n++)if(r=t(e[n]),r)return r;return r}isEmpty(){return W(this.items_)}clear(){this.rbush_.clear(),this.items_={}}getExtent(e){const t=this.rbush_.toJSON();return Ie(t.minX,t.minY,t.maxX,t.maxY,e)}concat(e){this.rbush_.load(e.rbush_.all());for(const t in e.items_)this.items_[t]=e.items_[t]}}const le=Wt,F={ADDFEATURE:"addfeature",CHANGEFEATURE:"changefeature",CLEAR:"clear",REMOVEFEATURE:"removefeature",FEATURESLOADSTART:"featuresloadstart",FEATURESLOADEND:"featuresloadend",FEATURESLOADERROR:"featuresloaderror"};function Bt(i,e){return[[-1/0,-1/0,1/0,1/0]]}class I extends Ne{constructor(e,t,r){super(e),this.feature=t,this.features=r}}class Kt extends be{constructor(e){e=e||{},super({attributions:e.attributions,interpolate:!0,projection:void 0,state:"ready",wrapX:e.wrapX!==void 0?e.wrapX:!0}),this.on,this.once,this.un,this.loader_=Oe,this.format_=e.format,this.overlaps_=e.overlaps===void 0?!0:e.overlaps,this.url_=e.url,e.loader!==void 0?this.loader_=e.loader:this.url_!==void 0&&(U(this.format_,"`format` must be set when `url` is set"),this.loader_=te(this.url_,this.format_)),this.strategy_=e.strategy!==void 0?e.strategy:Bt;const t=e.useSpatialIndex!==void 0?e.useSpatialIndex:!0;this.featuresRtree_=t?new le:null,this.loadedExtentsRtree_=new le,this.loadingExtentsCount_=0,this.nullGeometryFeatures_={},this.idIndex_={},this.uidIndex_={},this.featureChangeKeys_={},this.featuresCollection_=null;let r,n;Array.isArray(e.features)?n=e.features:e.features&&(r=e.features,n=r.getArray()),!t&&r===void 0&&(r=new Se(n)),n!==void 0&&this.addFeaturesInternal(n),r!==void 0&&this.bindFeaturesCollection_(r)}addFeature(e){this.addFeatureInternal(e),this.changed()}addFeatureInternal(e){const t=w(e);if(!this.addToIndex_(t,e)){this.featuresCollection_&&this.featuresCollection_.remove(e);return}this.setupChangeEvents_(t,e);const r=e.getGeometry();if(r){const n=r.getExtent();this.featuresRtree_&&this.featuresRtree_.insert(n,e)}else this.nullGeometryFeatures_[t]=e;this.dispatchEvent(new I(F.ADDFEATURE,e))}setupChangeEvents_(e,t){this.featureChangeKeys_[e]=[X(t,Y.CHANGE,this.handleFeatureChange_,this),X(t,Te.PROPERTYCHANGE,this.handleFeatureChange_,this)]}addToIndex_(e,t){let r=!0;const n=t.getId();return n!==void 0&&(n.toString()in this.idIndex_?r=!1:this.idIndex_[n.toString()]=t),r&&(U(!(e in this.uidIndex_),"The passed `feature` was already added to the source"),this.uidIndex_[e]=t),r}addFeatures(e){this.addFeaturesInternal(e),this.changed()}addFeaturesInternal(e){const t=[],r=[],n=[];for(let s=0,o=e.length;s<o;s++){const a=e[s],l=w(a);this.addToIndex_(l,a)&&r.push(a)}for(let s=0,o=r.length;s<o;s++){const a=r[s],l=w(a);this.setupChangeEvents_(l,a);const c=a.getGeometry();if(c){const d=c.getExtent();t.push(d),n.push(a)}else this.nullGeometryFeatures_[l]=a}if(this.featuresRtree_&&this.featuresRtree_.load(t,n),this.hasListener(F.ADDFEATURE))for(let s=0,o=r.length;s<o;s++)this.dispatchEvent(new I(F.ADDFEATURE,r[s]))}bindFeaturesCollection_(e){let t=!1;this.addEventListener(F.ADDFEATURE,function(r){t||(t=!0,e.push(r.feature),t=!1)}),this.addEventListener(F.REMOVEFEATURE,function(r){t||(t=!0,e.remove(r.feature),t=!1)}),e.addEventListener(Z.ADD,r=>{t||(t=!0,this.addFeature(r.element),t=!1)}),e.addEventListener(Z.REMOVE,r=>{t||(t=!0,this.removeFeature(r.element),t=!1)}),this.featuresCollection_=e}clear(e){if(e){for(const r in this.featureChangeKeys_)this.featureChangeKeys_[r].forEach(V);this.featuresCollection_||(this.featureChangeKeys_={},this.idIndex_={},this.uidIndex_={})}else if(this.featuresRtree_){const r=n=>{this.removeFeatureInternal(n)};this.featuresRtree_.forEach(r);for(const n in this.nullGeometryFeatures_)this.removeFeatureInternal(this.nullGeometryFeatures_[n])}this.featuresCollection_&&this.featuresCollection_.clear(),this.featuresRtree_&&this.featuresRtree_.clear(),this.nullGeometryFeatures_={};const t=new I(F.CLEAR);this.dispatchEvent(t),this.changed()}forEachFeature(e){if(this.featuresRtree_)return this.featuresRtree_.forEach(e);this.featuresCollection_&&this.featuresCollection_.forEach(e)}forEachFeatureAtCoordinateDirect(e,t){const r=[e[0],e[1],e[0],e[1]];return this.forEachFeatureInExtent(r,function(n){if(n.getGeometry().intersectsCoordinate(e))return t(n)})}forEachFeatureInExtent(e,t){if(this.featuresRtree_)return this.featuresRtree_.forEachInExtent(e,t);this.featuresCollection_&&this.featuresCollection_.forEach(t)}forEachFeatureIntersectingExtent(e,t){return this.forEachFeatureInExtent(e,function(r){if(r.getGeometry().intersectsExtent(e)){const s=t(r);if(s)return s}})}getFeaturesCollection(){return this.featuresCollection_}getFeatures(){let e;return this.featuresCollection_?e=this.featuresCollection_.getArray().slice(0):this.featuresRtree_&&(e=this.featuresRtree_.getAll(),W(this.nullGeometryFeatures_)||Ae(e,Object.values(this.nullGeometryFeatures_))),e}getFeaturesAtCoordinate(e){const t=[];return this.forEachFeatureAtCoordinateDirect(e,function(r){t.push(r)}),t}getFeaturesInExtent(e,t){if(this.featuresRtree_){if(!(t&&t.canWrapX()&&this.getWrapX()))return this.featuresRtree_.getInExtent(e);const n=Le(e,t);return[].concat(...n.map(s=>this.featuresRtree_.getInExtent(s)))}return this.featuresCollection_?this.featuresCollection_.getArray().slice(0):[]}getClosestFeatureToCoordinate(e,t){const r=e[0],n=e[1];let s=null;const o=[NaN,NaN];let a=1/0;const l=[-1/0,-1/0,1/0,1/0];return t=t||je,this.featuresRtree_.forEachInExtent(l,function(c){if(t(c)){const d=c.getGeometry(),u=a;if(a=d.closestPointXY(r,n,o,a),a<u){s=c;const h=Math.sqrt(a);l[0]=r-h,l[1]=n-h,l[2]=r+h,l[3]=n+h}}}),s}getExtent(e){return this.featuresRtree_.getExtent(e)}getFeatureById(e){const t=this.idIndex_[e.toString()];return t!==void 0?t:null}getFeatureByUid(e){const t=this.uidIndex_[e];return t!==void 0?t:null}getFormat(){return this.format_}getOverlaps(){return this.overlaps_}getUrl(){return this.url_}handleFeatureChange_(e){const t=e.target,r=w(t),n=t.getGeometry();if(!n)r in this.nullGeometryFeatures_||(this.featuresRtree_&&this.featuresRtree_.remove(t),this.nullGeometryFeatures_[r]=t);else{const o=n.getExtent();r in this.nullGeometryFeatures_?(delete this.nullGeometryFeatures_[r],this.featuresRtree_&&this.featuresRtree_.insert(o,t)):this.featuresRtree_&&this.featuresRtree_.update(o,t)}const s=t.getId();if(s!==void 0){const o=s.toString();this.idIndex_[o]!==t&&(this.removeFromIdIndex_(t),this.idIndex_[o]=t)}else this.removeFromIdIndex_(t),this.uidIndex_[r]=t;this.changed(),this.dispatchEvent(new I(F.CHANGEFEATURE,t))}hasFeature(e){const t=e.getId();return t!==void 0?t in this.idIndex_:w(e)in this.uidIndex_}isEmpty(){return this.featuresRtree_?this.featuresRtree_.isEmpty()&&W(this.nullGeometryFeatures_):this.featuresCollection_?this.featuresCollection_.getLength()===0:!0}loadFeatures(e,t,r){const n=this.loadedExtentsRtree_,s=this.strategy_(e,t,r);for(let o=0,a=s.length;o<a;++o){const l=s[o];n.forEachInExtent(l,function(d){return N(d.extent,l)})||(++this.loadingExtentsCount_,this.dispatchEvent(new I(F.FEATURESLOADSTART)),this.loader_.call(this,l,t,r,d=>{--this.loadingExtentsCount_,this.dispatchEvent(new I(F.FEATURESLOADEND,void 0,d))},()=>{--this.loadingExtentsCount_,this.dispatchEvent(new I(F.FEATURESLOADERROR))}),n.insert(l,{extent:l.slice()}))}this.loading=this.loader_.length<4?!1:this.loadingExtentsCount_>0}refresh(){this.clear(!0),this.loadedExtentsRtree_.clear(),super.refresh()}removeLoadedExtent(e){const t=this.loadedExtentsRtree_;let r;t.forEachInExtent(e,function(n){if(ce(n.extent,e))return r=n,!0}),r&&t.remove(r)}removeFeature(e){if(!e)return;const t=w(e);t in this.nullGeometryFeatures_?delete this.nullGeometryFeatures_[t]:this.featuresRtree_&&this.featuresRtree_.remove(e),this.removeFeatureInternal(e)&&this.changed()}removeFeatureInternal(e){const t=w(e),r=this.featureChangeKeys_[t];if(!r)return;r.forEach(V),delete this.featureChangeKeys_[t];const n=e.getId();return n!==void 0&&delete this.idIndex_[n.toString()],delete this.uidIndex_[t],this.dispatchEvent(new I(F.REMOVEFEATURE,e)),e}removeFromIdIndex_(e){let t=!1;for(const r in this.idIndex_)if(this.idIndex_[r]===e){delete this.idIndex_[r],t=!0;break}return t}setLoader(e){this.loader_=e}setUrl(e){U(this.format_,"`format` must be set when `url` is set"),this.url_=e,this.setLoader(te(e,this.format_))}}const Ht=Kt;class Jt extends Pe{constructor(e){super(e),this.boundHandleStyleImageChange_=this.handleStyleImageChange_.bind(this),this.animatingOrInteracting_,this.hitDetectionImageData_=null,this.renderedFeatures_=null,this.renderedRevision_=-1,this.renderedResolution_=NaN,this.renderedExtent_=q(),this.wrappedRenderedExtent_=q(),this.renderedRotation_,this.renderedCenter_=null,this.renderedProjection_=null,this.renderedRenderOrder_=null,this.replayGroup_=null,this.replayGroupChanged=!0,this.declutterExecutorGroup=null,this.clipping=!0,this.compositionContext_=null,this.opacity_=1}renderWorlds(e,t,r){const n=t.extent,s=t.viewState,o=s.center,a=s.resolution,l=s.projection,c=s.rotation,d=l.getExtent(),u=this.getLayer().getSource(),h=t.pixelRatio,f=t.viewHints,p=!(f[M.ANIMATING]||f[M.INTERACTING]),m=this.compositionContext_,_=Math.round(t.size[0]*h),g=Math.round(t.size[1]*h),v=u.getWrapX()&&l.canWrapX(),R=v?k(d):null,G=v?Math.ceil((n[2]-d[2])/R)+1:1;let S=v?Math.floor((n[0]-d[0])/R):0;do{const O=this.getRenderTransform(o,a,c,h,_,g,S*R);e.execute(m,1,O,c,p,void 0,r)}while(++S<G)}setupCompositionContext_(){if(this.opacity_!==1){const e=De(this.context.canvas.width,this.context.canvas.height,Q);this.compositionContext_=e}else this.compositionContext_=this.context}releaseCompositionContext_(){if(this.opacity_!==1){const e=this.context.globalAlpha;this.context.globalAlpha=this.opacity_,this.context.drawImage(this.compositionContext_.canvas,0,0),this.context.globalAlpha=e,Me(this.compositionContext_),Q.push(this.compositionContext_.canvas),this.compositionContext_=null}}renderDeclutter(e){this.declutterExecutorGroup&&(this.setupCompositionContext_(),this.renderWorlds(this.declutterExecutorGroup,e,e.declutterTree),this.releaseCompositionContext_())}renderFrame(e,t){const r=e.pixelRatio,n=e.layerStatesArray[e.layerIndex];ke(this.pixelTransform,1/r,1/r),ze(this.inversePixelTransform,this.pixelTransform);const s=Ue(this.pixelTransform);this.useContainer(t,s,this.getBackground(e));const o=this.context,a=o.canvas,l=this.replayGroup_,c=this.declutterExecutorGroup;let d=l&&!l.isEmpty()||c&&!c.isEmpty();if(!d&&!(this.getLayer().hasListener(ee.PRERENDER)||this.getLayer().hasListener(ee.POSTRENDER)))return null;const u=Math.round(e.size[0]*r),h=Math.round(e.size[1]*r);a.width!=u||a.height!=h?(a.width=u,a.height=h,a.style.transform!==s&&(a.style.transform=s)):this.containerReused||o.clearRect(0,0,u,h),this.preRender(o,e);const f=e.viewState;f.projection,this.opacity_=n.opacity,this.setupCompositionContext_();let p=!1;if(d&&n.extent&&this.clipping){const m=Ve(n.extent);d=Xe(m,e.extent),p=d&&!N(m,e.extent),p&&this.clipUnrotated(this.compositionContext_,e,m)}return d&&this.renderWorlds(l,e),p&&this.compositionContext_.restore(),this.releaseCompositionContext_(),this.postRender(o,e),this.renderedRotation_!==f.rotation&&(this.renderedRotation_=f.rotation,this.hitDetectionImageData_=null),this.container}getFeatures(e){return new Promise(t=>{if(!this.hitDetectionImageData_&&!this.animatingOrInteracting_){const r=[this.context.canvas.width,this.context.canvas.height];We(this.pixelTransform,r);const n=this.renderedCenter_,s=this.renderedResolution_,o=this.renderedRotation_,a=this.renderedProjection_,l=this.wrappedRenderedExtent_,c=this.getLayer(),d=[],u=r[0]*T,h=r[1]*T;d.push(this.getRenderTransform(n,s,o,T,u,h,0).slice());const f=c.getSource(),p=a.getExtent();if(f.getWrapX()&&a.canWrapX()&&!N(p,l)){let m=l[0];const _=k(p);let g=0,v;for(;m<p[0];)--g,v=_*g,d.push(this.getRenderTransform(n,s,o,T,u,h,v).slice()),m+=_;for(g=0,m=l[2];m>p[2];)++g,v=_*g,d.push(this.getRenderTransform(n,s,o,T,u,h,v).slice()),m-=_}this.hitDetectionImageData_=st(r,d,this.renderedFeatures_,c.getStyleFunction(),l,s,o)}t(it(e,this.renderedFeatures_,this.hitDetectionImageData_))})}forEachFeatureAtCoordinate(e,t,r,n,s){if(!this.replayGroup_)return;const o=t.viewState.resolution,a=t.viewState.rotation,l=this.getLayer(),c={},d=function(f,p,m){const _=w(f),g=c[_];if(g){if(g!==!0&&m<g.distanceSq){if(m===0)return c[_]=!0,s.splice(s.lastIndexOf(g),1),n(f,l,p);g.geometry=p,g.distanceSq=m}}else{if(m===0)return c[_]=!0,n(f,l,p);s.push(c[_]={feature:f,layer:l,geometry:p,distanceSq:m,callback:n})}};let u;const h=[this.replayGroup_];return this.declutterExecutorGroup&&h.push(this.declutterExecutorGroup),h.some(f=>u=f.forEachFeatureAtCoordinate(e,o,a,r,d,f===this.declutterExecutorGroup&&t.declutterTree?t.declutterTree.all().map(p=>p.value):null)),u}handleFontsChanged(){const e=this.getLayer();e.getVisible()&&this.replayGroup_&&e.changed()}handleStyleImageChange_(e){this.renderIfReadyAndVisible()}prepareFrame(e){const t=this.getLayer(),r=t.getSource();if(!r)return!1;const n=e.viewHints[M.ANIMATING],s=e.viewHints[M.INTERACTING],o=t.getUpdateWhileAnimating(),a=t.getUpdateWhileInteracting();if(this.ready&&!o&&n||!a&&s)return this.animatingOrInteracting_=!0,!0;this.animatingOrInteracting_=!1;const l=e.extent,c=e.viewState,d=c.projection,u=c.resolution,h=e.pixelRatio,f=t.getRevision(),p=t.getRenderBuffer();let m=t.getRenderOrder();m===void 0&&(m=at);const _=c.center.slice(),g=Be(l,p*u),v=g.slice(),R=[g.slice()],G=d.getExtent();if(r.getWrapX()&&d.canWrapX()&&!N(G,e.extent)){const y=k(G),C=Math.max(k(g)/2,y);g[0]=G[0]-C,g[2]=G[2]+C,Ke(_,d);const x=He(R[0],d);x[0]<G[0]&&x[2]<G[2]?R.push([x[0]+y,x[1],x[2]+y,x[3]]):x[0]>G[0]&&x[2]>G[2]&&R.push([x[0]-y,x[1],x[2]-y,x[3]])}if(this.ready&&this.renderedResolution_==u&&this.renderedRevision_==f&&this.renderedRenderOrder_==m&&N(this.wrappedRenderedExtent_,g))return Je(this.renderedExtent_,v)||(this.hitDetectionImageData_=null,this.renderedExtent_=v),this.renderedCenter_=_,this.replayGroupChanged=!1,!0;this.replayGroup_=null;const S=new re(ne(u,h),g,u,h);let O;this.getLayer().getDeclutter()&&(O=new re(ne(u,h),g,u,h));let he;for(let y=0,C=R.length;y<C;++y)r.loadFeatures(R[y],u,d);const ge=ot(u,h);let K=!0;const me=y=>{let C;const x=y.getStyleFunction()||t.getStyleFunction();if(x&&(C=x(y,u)),C){const _e=this.renderFeature(y,ge,C,S,he,O);K=K&&!_e}},fe=Ye(g),P=r.getFeaturesInExtent(fe);m&&P.sort(m);for(let y=0,C=P.length;y<C;++y)me(P[y]);this.renderedFeatures_=P,this.ready=K;const pe=S.finish(),ye=new se(g,u,h,r.getOverlaps(),pe,t.getRenderBuffer());return O&&(this.declutterExecutorGroup=new se(g,u,h,r.getOverlaps(),O.finish(),t.getRenderBuffer())),this.renderedResolution_=u,this.renderedRevision_=f,this.renderedRenderOrder_=m,this.renderedExtent_=v,this.wrappedRenderedExtent_=g,this.renderedCenter_=_,this.renderedProjection_=d,this.replayGroup_=ye,this.hitDetectionImageData_=null,this.replayGroupChanged=!0,!0}renderFeature(e,t,r,n,s,o){if(!r)return!1;let a=!1;if(Array.isArray(r))for(let l=0,c=r.length;l<c;++l)a=ie(n,e,r[l],t,this.boundHandleStyleImageChange_,s,o)||a;else a=ie(n,e,r,t,this.boundHandleStyleImageChange_,s,o);return a}}const Yt=Jt;class $t extends lt{constructor(e){super(e)}createRenderer(){return new Yt(this)}}const Zt=$t;const j=i=>(mt("data-v-27300de2"),i=i(),ft(),i),qt={id:"title"},Qt=ue('<div class="mapcontainer" data-v-27300de2><div id="map" class="map" data-v-27300de2></div><div class="padding-top" data-v-27300de2></div><div class="padding-left" data-v-27300de2></div><div class="padding-right" data-v-27300de2></div><div class="padding-bottom" data-v-27300de2></div><div class="center" data-v-27300de2></div></div><button id="zoomtoswitzerland" data-v-27300de2>Zoom to Switzerland</button>',2),er=j(()=>E("br",null,null,-1)),tr=j(()=>E("button",{id:"zoomtolausanne"},"Zoom to Lausanne",-1)),rr=ue('<br data-v-27300de2><button id="centerlausanne" data-v-27300de2>Center on Lausanne</button><p data-v-27300de2>This example demonstrates how a map&#39;s view can be adjusted so a geometry or coordinate is positioned at a specific pixel location. The map above has top, right, bottom, and left padding applied inside the viewport. The view&#39;s <code data-v-27300de2>fit</code> method is used to fit a geometry in the view with the same padding. The view&#39;s <code data-v-27300de2>centerOn</code> method is used to position a coordinate (Lausanne) at a specific pixel location (the center of the black box).</p><p data-v-27300de2>Use <code data-v-27300de2>Alt+Shift+Drag</code> to rotate the map.</p><p data-v-27300de2><b data-v-27300de2>Note:</b> This example does not shift the view center. So the zoom controls and rotating the map will still use the center of the viewport as anchor. To shift the whole view based on a padding, use the <code data-v-27300de2>padding</code> option on the view, as shown in the view-padding.html example.</p><h5 class="source-heading" data-v-27300de2>html</h5>',6),nr={class:"language-html"},sr=j(()=>E("h5",{class:"source-heading"},"css",-1)),ir={class:"language-css"},or=j(()=>E("h5",{class:"source-heading"},"js",-1)),ar={class:"language-js"},lr=j(()=>E("h5",{class:"source-heading"},"package.json",-1)),cr={class:"language-json"},dr={__name:"index",setup(i){return dt(()=>{const e=new Ht({url:"https://openlayers.org/en/latest/examples/data/geojson/switzerland.geojson",format:new Xt}),t=new Zt({source:e,style:{"fill-color":"rgba(255, 255, 255, 0.6)","stroke-width":1,"stroke-color":"#319FD3","circle-radius":5,"circle-fill-color":"rgba(255, 255, 255, 0.6)","circle-stroke-width":1,"circle-stroke-color":"#319FD3"}}),r=new $e({center:[0,0],zoom:1}),n=new Ze({layers:[new pt({source:new yt}),t],target:"map",view:r});document.getElementById("zoomtoswitzerland").addEventListener("click",function(){const c=e.getFeatures()[0].getGeometry();r.fit(c,{padding:[170,50,30,150]})},!1),document.getElementById("zoomtolausanne").addEventListener("click",function(){const c=e.getFeatures()[1].getGeometry();r.fit(c,{padding:[170,50,30,150],minResolution:50})},!1),document.getElementById("centerlausanne").addEventListener("click",function(){const c=e.getFeatures()[1].getGeometry(),d=n.getSize();r.centerOn(c.getCoordinates(),d,[570,500])},!1),Prism.highlightAll()}),(e,t)=>(ut(),ht(gt,null,[E("h4",qt,A(L(vt)),1),Qt,oe(" (best fit)."),er,tr,oe(" (with min resolution),"),rr,E("pre",null,[E("code",nr,A("  "+L(wt).trim().toString()),1)]),sr,E("pre",null,[E("code",ir,A("  "+L(Ft).trim().toString()),1)]),or,E("pre",null,[E("code",ar,A("  "+L(Gt).trim().toString()),1)]),lr,E("pre",null,[E("code",cr,A("  "+L(Ct).trim()),1)])],64))}},fr=ct(dr,[["__scopeId","data-v-27300de2"]]);export{fr as default};
