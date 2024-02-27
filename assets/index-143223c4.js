import"./bootstrap-4f4e5ffc.js";import{K as v}from"./KML-c4ac6c3a.js";import{M as w,V as x}from"./Layer-3211d6ef.js";import{S as k}from"./StadiaMaps-c230dd67.js";import{V as F}from"./Vector-163f0152.js";import{_ as S,i as E,o as b,c as M,b as e,t as c,g as p,F as j,p as V,k as L}from"./index-8e73cb60.js";import{V as C}from"./Vector-2de0a908.js";import{T}from"./Tile-d932c51d.js";import{a as I,C as q,F as K,S as P}from"./Style-22e788f3.js";import"./GeometryCollection-03015b2a.js";import"./featureloader-4f961e27.js";import"./LineString-d3d6f49c.js";import"./MultiPolygon-f290964a.js";import"./MultiPoint-e6eff345.js";import"./Feature-5a984f38.js";import"./string-30bf5402.js";import"./XYZ-2a4e8198.js";import"./TileImage-a70beb77.js";import"./TileProperty-f0a52f17.js";import"./UrlTile-7d5bd7ce.js";import"./OSM-39b8e613.js";import"./VectorLayer-f045426f.js";import"./hitdetect-4f776f31.js";import"./vector-01534e8d.js";import"./Layer-8f64fa5e.js";import"./BaseTile-47530170.js";import"./TileLayer-d6ace1df.js";const B="Earthquakes in KML",z=`
  <div id="map" class="map">
    <div id="info"></div>
  </div>

  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"><\/script>
`,A=`
  .map {
    width: 100%;
    height: 400px;
  }
  #map {
    position: relative;
  }
  #info {
    position: absolute;
    height: 1px;
    width: 1px;
    z-index: 100;
  }
  .tooltip.in {
    opacity: 1;
  }
  .tooltip.top .tooltip-arrow {
    border-top-color: white;
  }
  .tooltip-inner {
    border: 2px solid white;
  }
`,D=`
  import KML from 'ol/format/KML.js';
  import Map from 'ol/Map.js';
  import StadiaMaps from 'ol/source/StadiaMaps.js';
  import VectorSource from 'ol/source/Vector.js';
  import View from 'ol/View.js';
  import {Circle as CircleStyle, Fill, Stroke, Style} from 'ol/style.js';
  import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';

  const styleCache = {};
  const styleFunction = function (feature) {
    // 2012_Earthquakes_Mag5.kml stores the magnitude of each earthquake in a
    // standards-violating <magnitude> tag in each Placemark.  We extract it from
    // the Placemark's name instead.
    const name = feature.get('name');
    const magnitude = parseFloat(name.substr(2));
    const radius = 5 + 20 * (magnitude - 5);
    let style = styleCache[radius];
    if (!style) {
      style = new Style({
        image: new CircleStyle({
          radius: radius,
          fill: new Fill({
            color: 'rgba(255, 153, 0, 0.4)',
          }),
          stroke: new Stroke({
            color: 'rgba(255, 204, 0, 0.2)',
            width: 1,
          }),
        }),
      });
      styleCache[radius] = style;
    }
    return style;
  };

  const vector = new VectorLayer({
    source: new VectorSource({
      url: 'data/kml/2012_Earthquakes_Mag5.kml',
      format: new KML({
        extractStyles: false,
      }),
    }),
    style: styleFunction,
  });

  const raster = new TileLayer({
    source: new StadiaMaps({
      layer: 'stamen_toner',
    }),
  });

  const map = new Map({
    layers: [raster, vector],
    target: 'map',
    view: new View({
      center: [0, 0],
      zoom: 2,
    }),
  });

  const info = document.getElementById('info');
  info.style.pointerEvents = 'none';
  const tooltip = new bootstrap.Tooltip(info, {
    animation: false,
    customClass: 'pe-none',
    offset: [0, 5],
    title: '-',
    trigger: 'manual',
  });

  let currentFeature;
  const displayFeatureInfo = function (pixel, target) {
    const feature = target.closest('.ol-control')
      ? undefined
      : map.forEachFeatureAtPixel(pixel, function (feature) {
          return feature;
        });
    if (feature) {
      info.style.left = pixel[0] + 'px';
      info.style.top = pixel[1] + 'px';
      if (feature !== currentFeature) {
        tooltip.setContent({'.tooltip-inner': feature.get('name')});
      }
      if (currentFeature) {
        tooltip.update();
      } else {
        tooltip.show();
      }
    } else {
      tooltip.hide();
    }
    currentFeature = feature;
  };

  map.on('pointermove', function (evt) {
    if (evt.dragging) {
      tooltip.hide();
      currentFeature = undefined;
      return;
    }
    const pixel = map.getEventPixel(evt.originalEvent);
    displayFeatureInfo(pixel, evt.originalEvent.target);
  });

  map.on('click', function (evt) {
    displayFeatureInfo(evt.pixel, evt.originalEvent.target);
  });

  map.getTargetElement().addEventListener('pointerleave', function () {
    tooltip.hide();
    currentFeature = undefined;
  });
`,N=`
  {
    "name": "kml-earthquakes",
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
`;const n=m=>(V("data-v-927c51a9"),m=m(),L(),m),W={id:"title"},G=n(()=>e("div",{id:"map",class:"map"},[e("div",{id:"info"})],-1)),H=n(()=>e("p",null,"This example parses a KML file and renders the features as a vector layer. The layer is given a style that renders earthquake locations with a size relative to their magnitude.",-1)),J=n(()=>e("h5",{class:"source-heading"},"html",-1)),O={class:"language-html"},Q=n(()=>e("h5",{class:"source-heading"},"css",-1)),R={class:"language-css"},U=n(()=>e("h5",{class:"source-heading"},"js",-1)),X={class:"language-js"},Y=n(()=>e("h5",{class:"source-heading"},"package.json",-1)),Z={class:"language-json"},$={__name:"index",setup(m){return E(()=>{const f={},g=function(t){const i=t.get("name"),l=5+20*(parseFloat(i.substr(2))-5);let d=f[l];return d||(d=new I({image:new q({radius:l,fill:new K({color:"rgba(255, 153, 0, 0.4)"}),stroke:new P({color:"rgba(255, 204, 0, 0.2)",width:1})})}),f[l]=d),d},_=new C({source:new F({url:"data/kml/2012_Earthquakes_Mag5.kml",format:new v({extractStyles:!1})}),style:g}),y=new T({source:new k({layer:"stamen_toner"})}),r=new w({layers:[y,_],target:"map",view:new x({center:[0,0],zoom:2})}),u=document.getElementById("info");u.style.pointerEvents="none";const o=new bootstrap.Tooltip(u,{animation:!1,customClass:"pe-none",offset:[0,5],title:"-",trigger:"manual"});let a;const h=function(t,i){const s=i.closest(".ol-control")?void 0:r.forEachFeatureAtPixel(t,function(l){return l});s?(u.style.left=t[0]+"px",u.style.top=t[1]+"px",s!==a&&o.setContent({".tooltip-inner":s.get("name")}),a?o.update():o.show()):o.hide(),a=s};r.on("pointermove",function(t){if(t.dragging){o.hide(),a=void 0;return}const i=r.getEventPixel(t.originalEvent);h(i,t.originalEvent.target)}),r.on("click",function(t){h(t.pixel,t.originalEvent.target)}),r.getTargetElement().addEventListener("pointerleave",function(){o.hide(),a=void 0}),Prism.highlightAll()}),(f,g)=>(b(),M(j,null,[e("h4",W,c(p(B)),1),G,H,J,e("pre",null,[e("code",O,c("  "+p(z).trim()),1)]),Q,e("pre",null,[e("code",R,c("  "+p(A).trim()),1)]),U,e("pre",null,[e("code",X,c("  "+p(D).trim()),1)]),Y,e("pre",null,[e("code",Z,c("  "+p(N).trim()),1)])],64))}},Me=S($,[["__scopeId","data-v-927c51a9"]]);export{Me as default};
