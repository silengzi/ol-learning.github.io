import{G as I}from"./GeoJSON-1b8bad54.js";import{M as W,V as k,D as G,p as C,k as N}from"./Layer-227d2e40.js";import{V as L}from"./Vector-1db23811.js";import{V as D}from"./Vector-dc05cca5.js";import{_ as R,i as q,o as A,c as P,b as t,t as i,g as l,F as T,j as H,p as J,k as K}from"./index-0efe29ff.js";import{a as E,F,S as z}from"./Style-f78957a3.js";import{S as U}from"./Select-94dcaaad.js";import"./GeometryCollection-66a09ebd.js";import"./JSONFeature-4dcaaca7.js";import"./Feature-315822cb.js";import"./LineString-72752817.js";import"./featureloader-41324978.js";import"./MultiPolygon-4cf6e085.js";import"./MultiPoint-97d710ff.js";import"./VectorLayer-cfa00b56.js";import"./hitdetect-d04d171e.js";import"./vector-841020ca.js";import"./Layer-10451559.js";const Q="Box Selection",X=`
  <div id="map" class="map"></div>
  <div>Selected regions: <span id="info">None</span></div>
`,Y=`
  .map {
    width: 100%;
    height: 400px;
  }
`,Z=`
  import GeoJSON from 'ol/format/GeoJSON.js';
  import Map from 'ol/Map.js';
  import VectorLayer from 'ol/layer/Vector.js';
  import VectorSource from 'ol/source/Vector.js';
  import View from 'ol/View.js';
  import {DragBox, Select} from 'ol/interaction.js';
  import {Fill, Stroke, Style} from 'ol/style.js';
  import {getWidth} from 'ol/extent.js';
  import {platformModifierKeyOnly} from 'ol/events/condition.js';

  const vectorSource = new VectorSource({
    url: 'https://openlayers.org/data/vector/ecoregions.json',
    format: new GeoJSON(),
  });

  const style = new Style({
    fill: new Fill({
      color: '#eeeeee',
    }),
  });

  const map = new Map({
    layers: [
      new VectorLayer({
        source: vectorSource,
        background: '#1a2b39',
        style: function (feature) {
          const color = feature.get('COLOR_BIO') || '#eeeeee';
          style.getFill().setColor(color);
          return style;
        },
      }),
    ],
    target: 'map',
    view: new View({
      center: [0, 0],
      zoom: 2,
      constrainRotation: 16,
    }),
  });

  const selectedStyle = new Style({
    fill: new Fill({
      color: 'rgba(255, 255, 255, 0.6)',
    }),
    stroke: new Stroke({
      color: 'rgba(255, 255, 255, 0.7)',
      width: 2,
    }),
  });

  // a normal select interaction to handle click
  const select = new Select({
    style: function (feature) {
      const color = feature.get('COLOR_BIO') || '#eeeeee';
      selectedStyle.getFill().setColor(color);
      return selectedStyle;
    },
  });
  map.addInteraction(select);

  const selectedFeatures = select.getFeatures();

  // a DragBox interaction used to select features by drawing boxes
  const dragBox = new DragBox({
    condition: platformModifierKeyOnly,
  });

  map.addInteraction(dragBox);

  dragBox.on('boxend', function () {
    const boxExtent = dragBox.getGeometry().getExtent();

    // if the extent crosses the antimeridian process each world separately
    const worldExtent = map.getView().getProjection().getExtent();
    const worldWidth = getWidth(worldExtent);
    const startWorld = Math.floor((boxExtent[0] - worldExtent[0]) / worldWidth);
    const endWorld = Math.floor((boxExtent[2] - worldExtent[0]) / worldWidth);

    for (let world = startWorld; world <= endWorld; ++world) {
      const left = Math.max(boxExtent[0] - world * worldWidth, worldExtent[0]);
      const right = Math.min(boxExtent[2] - world * worldWidth, worldExtent[2]);
      const extent = [left, boxExtent[1], right, boxExtent[3]];

      const boxFeatures = vectorSource
        .getFeaturesInExtent(extent)
        .filter(
          (feature) =>
            !selectedFeatures.getArray().includes(feature) &&
            feature.getGeometry().intersectsExtent(extent)
        );

      // features that intersect the box geometry are added to the
      // collection of selected features

      // if the view is not obliquely rotated the box geometry and
      // its extent are equalivalent so intersecting features can
      // be added directly to the collection
      const rotation = map.getView().getRotation();
      const oblique = rotation % (Math.PI / 2) !== 0;

      // when the view is obliquely rotated the box extent will
      // exceed its geometry so both the box and the candidate
      // feature geometries are rotated around a common anchor
      // to confirm that, with the box geometry aligned with its
      // extent, the geometries intersect
      if (oblique) {
        const anchor = [0, 0];
        const geometry = dragBox.getGeometry().clone();
        geometry.translate(-world * worldWidth, 0);
        geometry.rotate(-rotation, anchor);
        const extent = geometry.getExtent();
        boxFeatures.forEach(function (feature) {
          const geometry = feature.getGeometry().clone();
          geometry.rotate(-rotation, anchor);
          if (geometry.intersectsExtent(extent)) {
            selectedFeatures.push(feature);
          }
        });
      } else {
        selectedFeatures.extend(boxFeatures);
      }
    }
  });

  // clear selection when drawing a new box and when clicking on the map
  dragBox.on('boxstart', function () {
    selectedFeatures.clear();
  });

  const infoBox = document.getElementById('info');

  selectedFeatures.on(['add', 'remove'], function () {
    const names = selectedFeatures.getArray().map((feature) => {
      return feature.get('ECO_NAME');
    });
    if (names.length > 0) {
      infoBox.innerHTML = names.join(', ');
    } else {
      infoBox.innerHTML = 'None';
    }
  });
`,$=`
  {
    "name": "box-selection",
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
`;const p=d=>(J("data-v-29cbc306"),d=d(),K(),d),ee={id:"title"},te=H('<div id="map" class="map" data-v-29cbc306></div><div data-v-29cbc306>Selected regions: <span id="info" data-v-29cbc306>None</span></div><p data-v-29cbc306>This example shows how to use a <code data-v-29cbc306>DragBox</code> interaction to select features. Selected features are added to the feature overlay of a select interaction (<code data-v-29cbc306>ol/interaction/Select</code>) for highlighting.</p><p data-v-29cbc306>Use <code data-v-29cbc306>Ctrl+Drag</code> (<code data-v-29cbc306>Command+Drag</code> on Mac) to draw boxes.</p><h5 class="source-heading" data-v-29cbc306>html</h5>',5),oe={class:"language-html"},ne=p(()=>t("h5",{class:"source-heading"},"css",-1)),re={class:"language-css"},se=p(()=>t("h5",{class:"source-heading"},"js",-1)),ae={class:"language-js"},ce=p(()=>t("h5",{class:"source-heading"},"package.json",-1)),ie={class:"language-json"},le={__name:"index",setup(d){return q(()=>{const g=new D({url:"https://openlayers.org/data/vector/ecoregions.json",format:new I}),u=new E({fill:new F({color:"#eeeeee"})}),m=new W({layers:[new L({source:g,background:"#1a2b39",style:function(e){const o=e.get("COLOR_BIO")||"#eeeeee";return u.getFill().setColor(o),u}})],target:"map",view:new k({center:[0,0],zoom:2,constrainRotation:16})}),x=new E({fill:new F({color:"rgba(255, 255, 255, 0.6)"}),stroke:new z({color:"rgba(255, 255, 255, 0.7)",width:2})}),w=new U({style:function(e){const o=e.get("COLOR_BIO")||"#eeeeee";return x.getFill().setColor(o),x}});m.addInteraction(w);const n=w.getFeatures(),r=new G({condition:C});m.addInteraction(r),r.on("boxend",function(){const e=r.getGeometry().getExtent(),o=m.getView().getProjection().getExtent(),s=N(o),B=Math.floor((e[0]-o[0])/s),M=Math.floor((e[2]-o[0])/s);for(let a=B;a<=M;++a){const j=Math.max(e[0]-a*s,o[0]),O=Math.min(e[2]-a*s,o[2]),b=[j,e[1],O,e[3]],_=g.getFeaturesInExtent(b).filter(c=>!n.getArray().includes(c)&&c.getGeometry().intersectsExtent(b)),h=m.getView().getRotation();if(h%(Math.PI/2)!==0){const c=[0,0],f=r.getGeometry().clone();f.translate(-a*s,0),f.rotate(-h,c);const V=f.getExtent();_.forEach(function(v){const S=v.getGeometry().clone();S.rotate(-h,c),S.intersectsExtent(V)&&n.push(v)})}else n.extend(_)}}),r.on("boxstart",function(){n.clear()});const y=document.getElementById("info");n.on(["add","remove"],function(){const e=n.getArray().map(o=>o.get("ECO_NAME"));e.length>0?y.innerHTML=e.join(", "):y.innerHTML="None"}),Prism.highlightAll()}),(g,u)=>(A(),P(T,null,[t("h4",ee,i(l(Q)),1),te,t("pre",null,[t("code",oe,i("  "+l(X).trim()),1)]),ne,t("pre",null,[t("code",re,i("  "+l(Y).trim()),1)]),se,t("pre",null,[t("code",ae,i("  "+l(Z).trim()),1)]),ce,t("pre",null,[t("code",ie,i("  "+l($).trim()),1)])],64))}},Oe=R(le,[["__scopeId","data-v-29cbc306"]]);export{Oe as default};
