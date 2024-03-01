import{F}from"./featureloader-a90a5108.js";import{f as T,a as k,M as L,V}from"./Layer-3b715193.js";import{_ as j,i as M,o as O,c as R,b as t,t as c,g as n,F as P,p as D,k as I}from"./index-92068577.js";import{C as A}from"./Circle-afc346a3.js";import{T as B}from"./Tile-70490af9.js";import{O as E}from"./OSM-f0f00429.js";import{V as q}from"./Vector-6fff18f8.js";import{V as z}from"./Vector-a4e726e1.js";import"./BaseTile-8ab94efc.js";import"./TileProperty-e33ea24b.js";import"./TileLayer-7c629c64.js";import"./Layer-37ea9c2e.js";import"./XYZ-80208d03.js";import"./TileImage-1df58d67.js";import"./UrlTile-dc2c26ed.js";import"./VectorLayer-ef6da1be.js";import"./hitdetect-486e5612.js";import"./vector-4e067f94.js";import"./length-c6ba5b73.js";const G="Custom Hit Detection Render",W=`
  <div id="map" class="map"></div>
`,H=`
  .map {
    width: 100%;
    height: 400px;
  }
`,N=`
  import Feature from 'ol/Feature.js';
  import Map from 'ol/Map.js';
  import View from 'ol/View.js';
  import {Circle} from 'ol/geom.js';
  import {OSM, Vector as VectorSource} from 'ol/source.js';
  import {Style} from 'ol/style.js';
  import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';
  import {fromLonLat} from 'ol/proj.js';

  const columbusCircleCoords = fromLonLat([-73.98189, 40.76805]);
  const labelTextStroke = 'rgba(120, 120, 120, 1)';
  const labelText = 'Columbus Circle';

  let pointerOverFeature = null;

  const renderLabelText = (ctx, x, y, stroke) => {
    ctx.fillStyle = 'rgba(255,0,0,1)';
    ctx.strokeStyle = stroke;
    ctx.lineWidth = 1;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = \`bold 30px verdana\`;
    ctx.filter = 'drop-shadow(7px 7px 2px #e81)';
    ctx.fillText(labelText, x, y);
    ctx.strokeText(labelText, x, y);
  };

  const circleFeature = new Feature({
    geometry: new Circle(columbusCircleCoords, 50),
  });

  circleFeature.set('label-color', labelTextStroke);

  circleFeature.setStyle(
    new Style({
      renderer(coordinates, state) {
        const [[x, y], [x1, y1]] = coordinates;
        const ctx = state.context;
        const dx = x1 - x;
        const dy = y1 - y;
        const radius = Math.sqrt(dx * dx + dy * dy);

        const innerRadius = 0;
        const outerRadius = radius * 1.4;

        const gradient = ctx.createRadialGradient(
          x,
          y,
          innerRadius,
          x,
          y,
          outerRadius
        );
        gradient.addColorStop(0, 'rgba(255,0,0,0)');
        gradient.addColorStop(0.6, 'rgba(255,0,0,0.2)');
        gradient.addColorStop(1, 'rgba(255,0,0,0.8)');
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI, true);
        ctx.fillStyle = gradient;
        ctx.fill();
        ctx.strokeStyle = 'rgba(255,0,0,1)';
        ctx.stroke();

        renderLabelText(ctx, x, y, circleFeature.get('label-color'));
      },
      hitDetectionRenderer(coordinates, state) {
        const [x, y] = coordinates[0];
        const ctx = state.context;
        renderLabelText(ctx, x, y, circleFeature.get('label-color'));
      },
    })
  );

  const map = new Map({
    layers: [
      new TileLayer({
        source: new OSM(),
        visible: true,
      }),
      new VectorLayer({
        source: new VectorSource({
          features: [circleFeature],
        }),
      }),
    ],
    target: 'map',
    view: new View({
      center: columbusCircleCoords,
      zoom: 19,
    }),
  });

  map.on('pointermove', (evt) => {
    const featureOver = map.forEachFeatureAtPixel(evt.pixel, (feature) => {
      feature.set('label-color', 'rgba(255,255,255,1)');
      return feature;
    });

    if (pointerOverFeature && pointerOverFeature != featureOver) {
      pointerOverFeature.set('label-color', labelTextStroke);
    }
    pointerOverFeature = featureOver;
  });
`,J=`
  {
    "name": "custom-hit-detection-renderer",
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
`;const l=d=>(D("data-v-257ffeb8"),d=d(),I(),d),K={id:"title"},Q=l(()=>t("div",{id:"map",class:"map"},null,-1)),U=l(()=>t("p",null,"This example demonstrates the use of 'ol/style/Style' hitDetectionRender option function in detecting if pointer is over a particular feature. Move pointer over the label for Columbus Circle feature and see that only label is used in hit detection.",-1)),X=l(()=>t("h5",{class:"source-heading"},"html",-1)),Y={class:"language-html"},Z=l(()=>t("h5",{class:"source-heading"},"css",-1)),$={class:"language-css"},ee=l(()=>t("h5",{class:"source-heading"},"js",-1)),te={class:"language-js"},oe=l(()=>t("h5",{class:"source-heading"},"package.json",-1)),re={class:"language-json"},se={__name:"index",setup(d){return M(()=>{const m=T([-73.98189,40.76805]),x="rgba(120, 120, 120, 1)",b="Columbus Circle";let u=null;const g=(e,r,o,s)=>{e.fillStyle="rgba(255,0,0,1)",e.strokeStyle=s,e.lineWidth=1,e.textAlign="center",e.textBaseline="middle",e.font="bold 30px verdana",e.filter="drop-shadow(7px 7px 2px #e81)",e.fillText(b,r,o),e.strokeText(b,r,o)},i=new F({geometry:new A(m,50)});i.set("label-color",x),i.setStyle(new k({renderer(e,r){const[[o,s],[f,S]]=e,a=r.context,y=f-o,_=S-s,v=Math.sqrt(y*y+_*_),w=0,C=v*1.4,p=a.createRadialGradient(o,s,w,o,s,C);p.addColorStop(.1,"rgba(255,0,0,0)"),p.addColorStop(.6,"rgba(255,0,0,0.2)"),p.addColorStop(1,"rgba(255,0,0,0.8)"),a.beginPath(),a.arc(o,s,v,0,2*Math.PI,!0),a.fillStyle=p,a.fill(),a.strokeStyle="rgba(255,0,0,1)",a.stroke(),g(a,o,s,i.get("label-color"))},hitDetectionRenderer(e,r){const[o,s]=e[0],f=r.context;g(f,o,s,i.get("label-color"))}}));const h=new L({layers:[new B({source:new E,visible:!0}),new q({source:new z({features:[i]})})],target:"map",view:new V({center:m,zoom:19})});h.on("pointermove",e=>{const r=h.forEachFeatureAtPixel(e.pixel,o=>(o.set("label-color","rgba(255,255,255,1)"),o));u&&u!=r&&u.set("label-color",x),u=r}),Prism.highlightAll()}),(m,x)=>(O(),R(P,null,[t("h4",K,c(n(G)),1),Q,U,X,t("pre",null,[t("code",Y,c("  "+n(W).trim()),1)]),Z,t("pre",null,[t("code",$,c("  "+n(H).trim()),1)]),ee,t("pre",null,[t("code",te,c("  "+n(N).trim()),1)]),oe,t("pre",null,[t("code",re,c("  "+n(J).trim()),1)])],64))}},Ce=j(se,[["__scopeId","data-v-257ffeb8"]]);export{Ce as default};
