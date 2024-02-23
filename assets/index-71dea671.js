import{V as C,F as M}from"./Vector-dc05cca5.js";import{M as F,V as O,P as b,f as k,O as G,J as w}from"./Layer-227d2e40.js";import{g as R}from"./render-a00713a0.js";import{_ as T,i as B,o as I,c as K,b as e,t as a,g as s,F as P,p as D,k as X,d}from"./index-0efe29ff.js";import{T as z}from"./Tile-69a5f37c.js";import{O as A}from"./OSM-829eb14e.js";import{V as N}from"./Vector-1db23811.js";import{a as W,C as E,S as H}from"./Style-f78957a3.js";import"./featureloader-41324978.js";import"./vector-841020ca.js";import"./BaseTile-962ada93.js";import"./TileProperty-167ee2c2.js";import"./TileLayer-94aa49a8.js";import"./Layer-10451559.js";import"./XYZ-f63b0d91.js";import"./TileImage-97dc110f.js";import"./UrlTile-27538029.js";import"./VectorLayer-cfa00b56.js";import"./hitdetect-d04d171e.js";const J="Custom Animation",q=`
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
`;const t=r=>(D("data-v-d45e374a"),r=r(),X(),r),Z={id:"title"},$=t(()=>e("div",{id:"map",class:"map"},null,-1)),ee=t(()=>e("p",null,[d("This example shows how to use "),e("b",null,"postrender"),d(" and "),e("b",null,"vectorContext"),d(" to animate features. Here we choose to do a flash animation each time a feature is added to the layer.")],-1)),te=t(()=>e("h5",{class:"source-heading"},"html",-1)),oe={class:"language-html"},ae=t(()=>e("h5",{class:"source-heading"},"css",-1)),se={class:"language-css"},re=t(()=>e("h5",{class:"source-heading"},"js",-1)),ne={class:"language-js"},ie=t(()=>e("h5",{class:"source-heading"},"package.json",-1)),ce={class:"language-json"},le={__name:"index",setup(r){return B(()=>{const i=new z({source:new A({wrapX:!1})}),n=new C({wrapX:!1}),g=new N({source:n}),S=new F({layers:[i,g],target:"map",view:new O({center:[0,0],zoom:1,multiWorld:!0})});function v(){const o=Math.random()*360-180,c=Math.random()*170-85,l=new b(k([o,c])),m=new M(l);n.addFeature(m)}const u=3e3;function x(o){const c=Date.now(),l=o.getGeometry().clone(),m=i.on("postrender",V);function V(p){const f=p.frameState.time-c;if(f>=u){G(m);return}const h=R(p),y=f/u,j=w(y)*25+5,_=w(1-y),L=new W({image:new E({radius:j,stroke:new H({color:"rgba(255, 0, 0, "+_+")",width:.25+_})})});h.setStyle(L),h.drawGeometry(l),S.render()}}n.on("addfeature",function(o){x(o.feature)}),window.setInterval(v,1e3),Prism.highlightAll()}),(i,n)=>(I(),K(P,null,[e("h4",Z,a(s(J)),1),$,ee,te,e("pre",null,[e("code",oe,a("  "+s(q).trim()),1)]),ae,e("pre",null,[e("code",se,a("  "+s(Q).trim()),1)]),re,e("pre",null,[e("code",ne,a("  "+s(U).trim()),1)]),ie,e("pre",null,[e("code",ce,a("  "+s(Y).trim()),1)])],64))}},be=T(le,[["__scopeId","data-v-d45e374a"]]);export{be as default};
