import{V as C,F as b}from"./VectorLayer-8feade0f.js";import{u as I,E as v,m as _,v as E,w as M,x as V,y as T,z as j,P as S,F as k,M as L,V as z,G as P}from"./Layer-d95863ce.js";import{_ as B,i as G,o as R,c as A,b as i,t as f,g as h,F as O,j as N,p as H,k as U}from"./index-ceda08fa.js";import{V as X}from"./Vector-3d640e4b.js";import{a as $,C as q,S as J,F as x,T as K}from"./featureloader-ea3986d0.js";import{T as Q}from"./Tile-26a716d9.js";import{O as W}from"./OSM-4c2d3aa4.js";import"./Layer-4850cb8d.js";import"./BaseTile-0f70055b.js";import"./TileProperty-0dbbd060.js";import"./TileLayer-121ec467.js";import"./XYZ-73edd6ba.js";import"./TileImage-f7288716.js";import"./UrlTile-563a27f8.js";class Y extends C{constructor(e){super({attributions:e.attributions,wrapX:e.wrapX}),this.resolution=void 0,this.distance=e.distance!==void 0?e.distance:20,this.minDistance=e.minDistance||0,this.interpolationRatio=0,this.features=[],this.geometryFunction=e.geometryFunction||function(s){const t=s.getGeometry();return I(!t||t.getType()==="Point","The default `geometryFunction` can only handle `Point` or null geometries"),t},this.createCustomCluster_=e.createCluster,this.source=null,this.boundRefresh_=this.refresh.bind(this),this.updateDistance(this.distance,this.minDistance),this.setSource(e.source||null)}clear(e){this.features.length=0,super.clear(e)}getDistance(){return this.distance}getSource(){return this.source}loadFeatures(e,s,t){this.source.loadFeatures(e,s,t),s!==this.resolution&&(this.resolution=s,this.refresh())}setDistance(e){this.updateDistance(e,this.minDistance)}setMinDistance(e){this.updateDistance(this.distance,e)}getMinDistance(){return this.minDistance}setSource(e){this.source&&this.source.removeEventListener(v.CHANGE,this.boundRefresh_),this.source=e,e&&e.addEventListener(v.CHANGE,this.boundRefresh_),this.refresh()}refresh(){this.clear(),this.cluster(),this.addFeatures(this.features)}updateDistance(e,s){const t=e===0?0:Math.min(s,e)/e,a=e!==this.distance||this.interpolationRatio!==t;this.distance=e,this.minDistance=s,this.interpolationRatio=t,a&&this.refresh()}cluster(){if(this.resolution===void 0||!this.source)return;const e=k(),s=this.distance*this.resolution,t=this.source.getFeatures(),a={};for(let n=0,d=t.length;n<d;n++){const r=t[n];if(!(_(r)in a)){const c=this.geometryFunction(r);if(c){const p=c.getCoordinates();E(p,e),M(e,s,e);const y=this.source.getFeaturesInExtent(e).filter(function(g){const o=_(g);return o in a?!1:(a[o]=!0,!0)});this.features.push(this.createCluster(y,e))}}}}createCluster(e,s){const t=[0,0];for(let r=e.length-1;r>=0;--r){const c=this.geometryFunction(e[r]);c?V(t,c.getCoordinates()):e.splice(r,1)}T(t,1/e.length);const a=j(s),n=this.interpolationRatio,d=new S([t[0]*(1-n)+a[0]*n,t[1]*(1-n)+a[1]*n]);return this.createCustomCluster_?this.createCustomCluster_(d,e):new b({geometry:d,features:e})}}const Z=Y,ee="Clustered Features",te=`
  <div id="map" class="map"></div>
  <form>
    <div class="form-group">
      <label for="distance" class="col-form-label pb-0">Cluster distance</label>
      <input id="distance" class="form-range" type="range" min="0" max="200" step="1" value="40"/>
      <small class="form-text text-muted">
        The distance within which features will be clustered together.
      </small>
    </div>
    <div class="form-group">
      <label for="min-distance" class="col-form-label pb-0">Minimum distance</label>
      <input id="min-distance" class="form-range" type="range" min="0" max="200" step="1" value="20"/>
      <small class="form-text text-muted">
        The minimum distance between clusters. Can't be larger than the configured distance.
      </small>
    </div>
  </form>
`,se=`
  .map {
    width: 100%;
    height: 400px;
  }
`,ne=`
  import Feature from 'ol/Feature.js';
  import Map from 'ol/Map.js';
  import Point from 'ol/geom/Point.js';
  import View from 'ol/View.js';
  import {
    Circle as CircleStyle,
    Fill,
    Stroke,
    Style,
    Text,
  } from 'ol/style.js';
  import {Cluster, OSM, Vector as VectorSource} from 'ol/source.js';
  import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';
  import {boundingExtent} from 'ol/extent.js';

  const distanceInput = document.getElementById('distance');
  const minDistanceInput = document.getElementById('min-distance');

  const count = 20000;
  const features = new Array(count);
  const e = 4500000;
  for (let i = 0; i < count; ++i) {
    const coordinates = [2 * e * Math.random() - e, 2 * e * Math.random() - e];
    features[i] = new Feature(new Point(coordinates));
  }

  const source = new VectorSource({
    features: features,
  });

  const clusterSource = new Cluster({
    distance: parseInt(distanceInput.value, 10),
    minDistance: parseInt(minDistanceInput.value, 10),
    source: source,
  });

  const styleCache = {};
  const clusters = new VectorLayer({
    source: clusterSource,
    style: function (feature) {
      const size = feature.get('features').length;
      let style = styleCache[size];
      if (!style) {
        style = new Style({
          image: new CircleStyle({
            radius: 10,
            stroke: new Stroke({
              color: '#fff',
            }),
            fill: new Fill({
              color: '#3399CC',
            }),
          }),
          text: new Text({
            text: size.toString(),
            fill: new Fill({
              color: '#fff',
            }),
          }),
        });
        styleCache[size] = style;
      }
      return style;
    },
  });

  const raster = new TileLayer({
    source: new OSM(),
  });

  const map = new Map({
    layers: [raster, clusters],
    target: 'map',
    view: new View({
      center: [0, 0],
      zoom: 2,
    }),
  });

  distanceInput.addEventListener('input', function () {
    clusterSource.setDistance(parseInt(distanceInput.value, 10));
  });

  minDistanceInput.addEventListener('input', function () {
    clusterSource.setMinDistance(parseInt(minDistanceInput.value, 10));
  });

  map.on('click', (e) => {
    clusters.getFeatures(e.pixel).then((clickedFeatures) => {
      if (clickedFeatures.length) {
        // Get clustered Coordinates
        const features = clickedFeatures[0].get('features');
        if (features.length > 1) {
          const extent = boundingExtent(
            features.map((r) => r.getGeometry().getCoordinates())
          );
          map.getView().fit(extent, {duration: 1000, padding: [50, 50, 50, 50]});
        }
      }
    });
  });
`,ie=`
  {
    "name": "cluster",
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
`;const w=m=>(H("data-v-7f264001"),m=m(),U(),m),ae={id:"title"},re=N('<div id="map" class="map" data-v-7f264001></div><form data-v-7f264001><div class="form-group" data-v-7f264001><label for="distance" class="col-form-label pb-0" data-v-7f264001>Cluster distance</label><input id="distance" class="form-range" type="range" min="0" max="200" step="1" value="40" data-v-7f264001><small class="form-text text-muted" data-v-7f264001> The distance within which features will be clustered together. </small></div><div class="form-group" data-v-7f264001><label for="min-distance" class="col-form-label pb-0" data-v-7f264001>Minimum distance</label><input id="min-distance" class="form-range" type="range" min="0" max="200" step="1" value="20" data-v-7f264001><small class="form-text text-muted" data-v-7f264001> The minimum distance between clusters. Can&#39;t be larger than the configured distance. </small></div></form><p data-v-7f264001>This example shows how to do clustering on point features.</p><h5 class="source-heading" data-v-7f264001>html</h5>',4),oe={class:"language-html"},ce=w(()=>i("h5",{class:"source-heading"},"css",-1)),le={class:"language-css"},ue=w(()=>i("h5",{class:"source-heading"},"js",-1)),de={class:"language-js"},me=w(()=>i("h5",{class:"source-heading"},"package.json",-1)),fe={class:"language-json"},he={__name:"index",setup(m){return G(()=>{const e=document.getElementById("distance"),s=document.getElementById("min-distance"),t=2e4,a=new Array(t),n=45e5;for(let o=0;o<t;++o){const l=[2*n*Math.random()-n,2*n*Math.random()-n];a[o]=new b(new S(l))}const d=new C({features:a}),r=new Z({distance:parseInt(e.value,10),minDistance:parseInt(s.value,10),source:d}),c={},p=new X({source:r,style:function(o){const l=o.get("features").length;let u=c[l];return u||(u=new $({image:new q({radius:10,stroke:new J({color:"#fff"}),fill:new x({color:"#3399CC"})}),text:new K({text:l.toString(),fill:new x({color:"#fff"})})}),c[l]=u),u}}),y=new Q({source:new W}),g=new L({layers:[y,p],target:"map",view:new z({center:[0,0],zoom:2})});e.addEventListener("input",function(){r.setDistance(parseInt(e.value,10))}),s.addEventListener("input",function(){r.setMinDistance(parseInt(s.value,10))}),g.on("click",o=>{p.getFeatures(o.pixel).then(l=>{if(l.length){const u=l[0].get("features");if(u.length>1){const F=P(u.map(D=>D.getGeometry().getCoordinates()));g.getView().fit(F,{duration:1e3,padding:[50,50,50,50]})}}})}),Prism.highlightAll()}),(e,s)=>(R(),A(O,null,[i("h4",ae,f(h(ee)),1),re,i("pre",null,[i("code",oe,f("  "+h(te).trim()),1)]),ce,i("pre",null,[i("code",le,f("  "+h(se).trim()),1)]),ue,i("pre",null,[i("code",de,f("  "+h(ne).trim()),1)]),me,i("pre",null,[i("code",fe,f("  "+h(ie).trim()),1)])],64))}},Me=B(he,[["__scopeId","data-v-7f264001"]]);export{Me as default};
