import{V as L,F as T}from"./VectorLayer-8feade0f.js";import{a5 as M,M as b,V as F,P as k,f as O,a6 as P,a2 as x}from"./Layer-d95863ce.js";import{g as R,b as G,a as I,C as B,S as D}from"./featureloader-ea3986d0.js";import{_ as K,i as X,o as q,c as z,b as e,t as i,g as c,F as A,p as E,k as N,d as h}from"./index-ceda08fa.js";import{T as W}from"./Tile-26a716d9.js";import{O as H}from"./OSM-4c2d3aa4.js";import{V as J}from"./Vector-3d640e4b.js";import"./Layer-4850cb8d.js";import"./BaseTile-0f70055b.js";import"./TileProperty-0dbbd060.js";import"./TileLayer-121ec467.js";import"./XYZ-73edd6ba.js";import"./TileImage-f7288716.js";import"./UrlTile-563a27f8.js";function Q(t){if(!(t.context instanceof CanvasRenderingContext2D))throw new Error("Only works for render events from Canvas 2D layers");const a=t.inversePixelTransform[0],o=t.inversePixelTransform[1],l=Math.sqrt(a*a+o*o),s=t.frameState,d=M(t.inversePixelTransform.slice(),s.coordinateToPixelTransform),m=R(s.viewState.resolution,l);let u;return new G(t.context,l,s.extent,d,s.viewState.rotation,m,u)}const U="Custom Animation",Y=`
  <div id="map" class="map"></div>
`,Z=`
  .map {
    width: 100%;
    height: 400px;
  }
`,$=`
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
`,ee=`
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
`;const r=t=>(E("data-v-d45e374a"),t=t(),N(),t),te={id:"title"},oe=r(()=>e("div",{id:"map",class:"map"},null,-1)),ae=r(()=>e("p",null,[h("This example shows how to use "),e("b",null,"postrender"),h(" and "),e("b",null,"vectorContext"),h(" to animate features. Here we choose to do a flash animation each time a feature is added to the layer.")],-1)),se=r(()=>e("h5",{class:"source-heading"},"html",-1)),re={class:"language-html"},ne=r(()=>e("h5",{class:"source-heading"},"css",-1)),ie={class:"language-css"},ce=r(()=>e("h5",{class:"source-heading"},"js",-1)),le={class:"language-js"},me=r(()=>e("h5",{class:"source-heading"},"package.json",-1)),de={class:"language-json"},ue={__name:"index",setup(t){return X(()=>{const a=new W({source:new H({wrapX:!1})}),o=new L({wrapX:!1}),l=new J({source:o}),s=new b({layers:[a,l],target:"map",view:new F({center:[0,0],zoom:1,multiWorld:!0})});function d(){const n=Math.random()*360-180,p=Math.random()*170-85,f=new k(O([n,p])),w=new T(f);o.addFeature(w)}const m=3e3;function u(n){const p=Date.now(),f=n.getGeometry().clone(),w=a.on("postrender",V);function V(y){const _=y.frameState.time-p;if(_>=m){P(w);return}const g=Q(y),S=_/m,C=x(S)*25+5,v=x(1-S),j=new I({image:new B({radius:C,stroke:new D({color:"rgba(255, 0, 0, "+v+")",width:.25+v})})});g.setStyle(j),g.drawGeometry(f),s.render()}}o.on("addfeature",function(n){u(n.feature)}),window.setInterval(d,1e3),Prism.highlightAll()}),(a,o)=>(q(),z(A,null,[e("h4",te,i(c(U)),1),oe,ae,se,e("pre",null,[e("code",re,i("  "+c(Y).trim()),1)]),ne,e("pre",null,[e("code",ie,i("  "+c(Z).trim()),1)]),ce,e("pre",null,[e("code",le,i("  "+c($).trim()),1)]),me,e("pre",null,[e("code",de,i("  "+c(ee).trim()),1)])],64))}},Me=K(ue,[["__scopeId","data-v-d45e374a"]]);export{Me as default};
