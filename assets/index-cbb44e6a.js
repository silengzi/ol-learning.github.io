import{F as b,V as S}from"./VectorLayer-5fefefe7.js";import{P as I,M as C,V,u as F}from"./Layer-763025a3.js";import{_ as M,i as j,o as k,c as T,b as e,t as n,g as o,F as D,j as E,p as L,k as z}from"./index-87bb3bb9.js";import{C as B}from"./Cluster-a3556287.js";import{V as P}from"./Vector-6dfa3c6b.js";import{a as O,C as A,S as G,F as w}from"./vector-31d95deb.js";import{T as N}from"./featureloader-7313d5e8.js";import{T as q}from"./Tile-3c7ba04a.js";import{O as H}from"./OSM-c55a5667.js";import"./Layer-79bf392c.js";import"./BaseTile-115b346f.js";import"./TileProperty-b49a7745.js";import"./TileLayer-fd6dc420.js";import"./XYZ-191849cc.js";import"./TileImage-d65ff5bd.js";import"./UrlTile-ce5b3cbe.js";const J="Clustered Features",K=`
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
`,Q=`
  .map {
    width: 100%;
    height: 400px;
  }
`,R=`
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
`,U=`
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
`;const m=r=>(L("data-v-7f264001"),r=r(),z(),r),W={id:"title"},X=E('<div id="map" class="map" data-v-7f264001></div><form data-v-7f264001><div class="form-group" data-v-7f264001><label for="distance" class="col-form-label pb-0" data-v-7f264001>Cluster distance</label><input id="distance" class="form-range" type="range" min="0" max="200" step="1" value="40" data-v-7f264001><small class="form-text text-muted" data-v-7f264001> The distance within which features will be clustered together. </small></div><div class="form-group" data-v-7f264001><label for="min-distance" class="col-form-label pb-0" data-v-7f264001>Minimum distance</label><input id="min-distance" class="form-range" type="range" min="0" max="200" step="1" value="20" data-v-7f264001><small class="form-text text-muted" data-v-7f264001> The minimum distance between clusters. Can&#39;t be larger than the configured distance. </small></div></form><p data-v-7f264001>This example shows how to do clustering on point features.</p><h5 class="source-heading" data-v-7f264001>html</h5>',4),Y={class:"language-html"},Z=m(()=>e("h5",{class:"source-heading"},"css",-1)),$={class:"language-css"},ee=m(()=>e("h5",{class:"source-heading"},"js",-1)),te={class:"language-js"},se=m(()=>e("h5",{class:"source-heading"},"package.json",-1)),ae={class:"language-json"},ne={__name:"index",setup(r){return j(()=>{const i=document.getElementById("distance"),c=document.getElementById("min-distance"),d=2e4,p=new Array(d),l=45e5;for(let s=0;s<d;++s){const t=[2*l*Math.random()-l,2*l*Math.random()-l];p[s]=new b(new I(t))}const v=new S({features:p}),u=new B({distance:parseInt(i.value,10),minDistance:parseInt(c.value,10),source:v}),f={},g=new P({source:u,style:function(s){const t=s.get("features").length;let a=f[t];return a||(a=new O({image:new A({radius:10,stroke:new G({color:"#fff"}),fill:new w({color:"#3399CC"})}),text:new N({text:t.toString(),fill:new w({color:"#fff"})})}),f[t]=a),a}}),_=new q({source:new H}),h=new C({layers:[_,g],target:"map",view:new V({center:[0,0],zoom:2})});i.addEventListener("input",function(){u.setDistance(parseInt(i.value,10))}),c.addEventListener("input",function(){u.setMinDistance(parseInt(c.value,10))}),h.on("click",s=>{g.getFeatures(s.pixel).then(t=>{if(t.length){const a=t[0].get("features");if(a.length>1){const y=F(a.map(x=>x.getGeometry().getCoordinates()));h.getView().fit(y,{duration:1e3,padding:[50,50,50,50]})}}})}),Prism.highlightAll()}),(i,c)=>(k(),T(D,null,[e("h4",W,n(o(J)),1),X,e("pre",null,[e("code",Y,n("  "+o(K).trim()),1)]),Z,e("pre",null,[e("code",$,n("  "+o(Q).trim()),1)]),ee,e("pre",null,[e("code",te,n("  "+o(R).trim()),1)]),se,e("pre",null,[e("code",ae,n("  "+o(U).trim()),1)])],64))}},xe=M(ne,[["__scopeId","data-v-7f264001"]]);export{xe as default};
