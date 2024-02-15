import{F,a as T,V as k}from"./Vector-11367a1e.js";import{f as L,M as V,V as j}from"./Layer-cbc2c204.js";import{_ as M,i as O,o as R,c as P,b as t,t as n,g as i,F as D,p as I,k as A}from"./index-6f5c947f.js";import{C as B}from"./Circle-0f97cc54.js";import{a as E}from"./featureloader-7b741d7b.js";import{T as q}from"./Tile-5ad7cb7a.js";import{O as z}from"./OSM-5fe5d198.js";import"./Layer-507d0438.js";import"./BaseTile-e6733ef3.js";import"./TileProperty-3eb4f721.js";import"./TileLayer-53174085.js";import"./XYZ-b4ddf721.js";import"./TileImage-5f4c9ca1.js";import"./UrlTile-a7096405.js";const G="Custom Hit Detection Render",W=`
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
`;const l=d=>(I("data-v-ba3d2065"),d=d(),A(),d),K={id:"title"},Q=l(()=>t("div",{id:"map",class:"map"},null,-1)),U=l(()=>t("p",null,"This example demonstrates the use of 'ol/style/Style' hitDetectionRender option function in detecting if pointer is over a particular feature. Move pointer over the label for Columbus Circle feature and see that only label is used in hit detection.",-1)),X=l(()=>t("h5",{class:"source-heading"},"html",-1)),Y={class:"language-html"},Z=l(()=>t("h5",{class:"source-heading"},"css",-1)),$={class:"language-css"},ee=l(()=>t("h5",{class:"source-heading"},"js",-1)),te={class:"language-js"},oe=l(()=>t("h5",{class:"source-heading"},"package.json",-1)),re={class:"language-json"},ae={__name:"index",setup(d){return O(()=>{const m=L([-73.98189,40.76805]),x="rgba(120, 120, 120, 1)",g="Columbus Circle";let u=null;const f=(e,r,o,a)=>{e.fillStyle="rgba(255,0,0,1)",e.strokeStyle=a,e.lineWidth=1,e.textAlign="center",e.textBaseline="middle",e.font="bold 30px verdana",e.filter="drop-shadow(7px 7px 2px #e81)",e.fillText(g,r,o),e.strokeText(g,r,o)},c=new F({geometry:new B(m,50)});c.set("label-color",x),c.setStyle(new E({renderer(e,r){const[[o,a],[b,S]]=e,s=r.context,y=b-o,_=S-a,v=Math.sqrt(y*y+_*_),w=0,C=v*1.4,p=s.createRadialGradient(o,a,w,o,a,C);p.addColorStop(0,"rgba(255,0,0,0)"),p.addColorStop(.6,"rgba(255,0,0,0.2)"),p.addColorStop(1,"rgba(255,0,0,0.8)"),s.beginPath(),s.arc(o,a,v,0,2*Math.PI,!0),s.fillStyle=p,s.fill(),s.strokeStyle="rgba(255,0,0,1)",s.stroke(),f(s,o,a,c.get("label-color"))},hitDetectionRenderer(e,r){const[o,a]=e[0],b=r.context;f(b,o,a,c.get("label-color"))}}));const h=new V({layers:[new q({source:new z,visible:!0}),new T({source:new k({features:[c]})})],target:"map",view:new j({center:m,zoom:19})});h.on("pointermove",e=>{const r=h.forEachFeatureAtPixel(e.pixel,o=>(o.set("label-color","rgba(255,255,255,1)"),o));u&&u!=r&&u.set("label-color",x),u=r}),Prism.highlightAll()}),(m,x)=>(R(),P(D,null,[t("h4",K,n(i(G)),1),Q,U,X,t("pre",null,[t("code",Y,n("  "+i(W).trim()),1)]),Z,t("pre",null,[t("code",$,n("  "+i(H).trim()),1)]),ee,t("pre",null,[t("code",te,n("  "+i(N).trim()),1)]),oe,t("pre",null,[t("code",re,n("  "+i(J).trim()),1)])],64))}},ye=M(ae,[["__scopeId","data-v-ba3d2065"]]);export{ye as default};
