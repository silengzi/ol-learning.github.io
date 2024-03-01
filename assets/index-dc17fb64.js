import{F as C}from"./featureloader-a90a5108.js";import{M,V as F,P as b,f as k,N as O,a as G,C as R,S as T,J as w}from"./Layer-3b715193.js";import{g as B}from"./render-6e2d2a79.js";import{_ as I,i as K,o as P,c as D,b as e,t as a,g as s,F as X,p as N,k as z,d}from"./index-92068577.js";import{T as A}from"./Tile-70490af9.js";import{O as W}from"./OSM-f0f00429.js";import{V as E}from"./Vector-a4e726e1.js";import{V as H}from"./Vector-6fff18f8.js";import"./vector-4e067f94.js";import"./BaseTile-8ab94efc.js";import"./TileProperty-e33ea24b.js";import"./TileLayer-7c629c64.js";import"./Layer-37ea9c2e.js";import"./XYZ-80208d03.js";import"./TileImage-1df58d67.js";import"./UrlTile-dc2c26ed.js";import"./VectorLayer-ef6da1be.js";import"./hitdetect-486e5612.js";import"./length-c6ba5b73.js";const J="Custom Animation",q=`
  <div id="map" class="map"></div>
`,Q=`
  .map {
    width: 100%;
    height: 400px;
  }
`,U=`
  import Feature from 'ol/Feature.js';
  import Map from 'ol/Map.js';
  import Point from 'ol/geom/Point.js';
  import View from 'ol/View.js';
  import {Circle as CircleStyle, Stroke, Style} from 'ol/style.js';
  import {OSM, Vector as VectorSource} from 'ol/source.js';
  import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';
  import {easeOut} from 'ol/easing.js';
  import {fromLonLat} from 'ol/proj.js';
  import {getVectorContext} from 'ol/render.js';
  import {unByKey} from 'ol/Observable.js';

  const tileLayer = new TileLayer({
    source: new OSM({
      wrapX: false,
    }),
  });

  const source = new VectorSource({
    wrapX: false,
  });
  const vector = new VectorLayer({
    source: source,
  });

  const map = new Map({
    layers: [tileLayer, vector],
    target: 'map',
    view: new View({
      center: [0, 0],
      zoom: 1,
      multiWorld: true,
    }),
  });

  function addRandomFeature() {
    const x = Math.random() * 360 - 180;
    const y = Math.random() * 170 - 85;
    const geom = new Point(fromLonLat([x, y]));
    const feature = new Feature(geom);
    source.addFeature(feature);
  }

  const duration = 3000;
  function flash(feature) {
    const start = Date.now();
    const flashGeom = feature.getGeometry().clone();
    const listenerKey = tileLayer.on('postrender', animate);

    function animate(event) {
      const frameState = event.frameState;
      const elapsed = frameState.time - start;
      if (elapsed >= duration) {
        unByKey(listenerKey);
        return;
      }
      const vectorContext = getVectorContext(event);
      const elapsedRatio = elapsed / duration;
      // radius will be 5 at start and 30 at end.
      const radius = easeOut(elapsedRatio) * 25 + 5;
      const opacity = easeOut(1 - elapsedRatio);

      const style = new Style({
        image: new CircleStyle({
          radius: radius,
          stroke: new Stroke({
            color: 'rgba(255, 0, 0, ' + opacity + ')',
            width: 0.25 + opacity,
          }),
        }),
      });

      vectorContext.setStyle(style);
      vectorContext.drawGeometry(flashGeom);
      // tell OpenLayers to continue postrender animation
      map.render();
    }
  }

  source.on('addfeature', function (e) {
    flash(e.feature);
  });

  window.setInterval(addRandomFeature, 1000);
`,Y=`
  {
    "name": "feature-animation",
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
`;const t=r=>(N("data-v-1df95060"),r=r(),z(),r),Z={id:"title"},$=t(()=>e("div",{id:"map",class:"map"},null,-1)),ee=t(()=>e("p",null,[d("This example shows how to use "),e("b",null,"postrender"),d(" and "),e("b",null,"vectorContext"),d(" to animate features. Here we choose to do a flash animation each time a feature is added to the layer.")],-1)),te=t(()=>e("h5",{class:"source-heading"},"html",-1)),oe={class:"language-html"},ae=t(()=>e("h5",{class:"source-heading"},"css",-1)),se={class:"language-css"},re=t(()=>e("h5",{class:"source-heading"},"js",-1)),ne={class:"language-js"},ie=t(()=>e("h5",{class:"source-heading"},"package.json",-1)),ce={class:"language-json"},le={__name:"index",setup(r){return K(()=>{const i=new A({source:new W({wrapX:!1})}),n=new E({wrapX:!1}),g=new H({source:n}),S=new M({layers:[i,g],target:"map",view:new F({center:[0,0],zoom:1,multiWorld:!0})});function v(){const o=Math.random()*360-180,c=Math.random()*170-85,l=new b(k([o,c])),m=new C(l);n.addFeature(m)}const p=3e3;function x(o){const c=Date.now(),l=o.getGeometry().clone(),m=i.on("postrender",V);function V(u){const f=u.frameState.time-c;if(f>=p){O(m);return}const h=B(u),y=f/p,j=w(y)*25+5,_=w(1-y),L=new G({image:new R({radius:j,stroke:new T({color:"rgba(255, 0, 0, "+_+")",width:.25+_})})});h.setStyle(L),h.drawGeometry(l),S.render()}}n.on("addfeature",function(o){x(o.feature)}),window.setInterval(v,1e3),Prism.highlightAll()}),(i,n)=>(P(),D(X,null,[e("h4",Z,a(s(J)),1),$,ee,te,e("pre",null,[e("code",oe,a("  "+s(q).trim()),1)]),ae,e("pre",null,[e("code",se,a("  "+s(Q).trim()),1)]),re,e("pre",null,[e("code",ne,a("  "+s(U).trim()),1)]),ie,e("pre",null,[e("code",ce,a("  "+s(Y).trim()),1)])],64))}},ke=I(le,[["__scopeId","data-v-1df95060"]]);export{ke as default};
