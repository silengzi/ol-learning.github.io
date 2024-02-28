import"./bootstrap-4f4e5ffc.js";import{K as v}from"./KML-c43cd689.js";import{M as w,V as x,a as k,C as F,F as E,S}from"./Layer-3b715193.js";import{S as b}from"./StadiaMaps-e9ded0c3.js";import{V as M}from"./Vector-a4e726e1.js";import{_ as j,i as V,o as L,c as C,b as e,t as c,g as p,F as T,p as I,k as q}from"./index-c958856c.js";import{V as K}from"./Vector-6fff18f8.js";import{T as P}from"./Tile-70490af9.js";import"./featureloader-a90a5108.js";import"./MultiPolygon-d7736349.js";import"./LineString-eed53b5a.js";import"./length-c6ba5b73.js";import"./MultiPoint-74fca651.js";import"./Feature-627996e0.js";import"./string-30bf5402.js";import"./XYZ-80208d03.js";import"./TileImage-1df58d67.js";import"./TileProperty-e33ea24b.js";import"./UrlTile-dc2c26ed.js";import"./OSM-f0f00429.js";import"./VectorLayer-ef6da1be.js";import"./hitdetect-486e5612.js";import"./Layer-37ea9c2e.js";import"./vector-4e067f94.js";import"./BaseTile-8ab94efc.js";import"./TileLayer-7c629c64.js";const B="Earthquakes in KML",z=`
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
`;const n=u=>(I("data-v-927c51a9"),u=u(),q(),u),W={id:"title"},G=n(()=>e("div",{id:"map",class:"map"},[e("div",{id:"info"})],-1)),H=n(()=>e("p",null,"This example parses a KML file and renders the features as a vector layer. The layer is given a style that renders earthquake locations with a size relative to their magnitude.",-1)),J=n(()=>e("h5",{class:"source-heading"},"html",-1)),O={class:"language-html"},Q=n(()=>e("h5",{class:"source-heading"},"css",-1)),R={class:"language-css"},U=n(()=>e("h5",{class:"source-heading"},"js",-1)),X={class:"language-js"},Y=n(()=>e("h5",{class:"source-heading"},"package.json",-1)),Z={class:"language-json"},$={__name:"index",setup(u){return V(()=>{const f={},g=function(t){const s=t.get("name"),l=5+20*(parseFloat(s.substr(2))-5);let m=f[l];return m||(m=new k({image:new F({radius:l,fill:new E({color:"rgba(255, 153, 0, 0.4)"}),stroke:new S({color:"rgba(255, 204, 0, 0.2)",width:1})})}),f[l]=m),m},_=new K({source:new M({url:"data/kml/2012_Earthquakes_Mag5.kml",format:new v({extractStyles:!1})}),style:g}),y=new P({source:new b({layer:"stamen_toner"})}),a=new w({layers:[y,_],target:"map",view:new x({center:[0,0],zoom:2})}),d=document.getElementById("info");d.style.pointerEvents="none";const o=new bootstrap.Tooltip(d,{animation:!1,customClass:"pe-none",offset:[0,5],title:"-",trigger:"manual"});let r;const h=function(t,s){const i=s.closest(".ol-control")?void 0:a.forEachFeatureAtPixel(t,function(l){return l});i?(d.style.left=t[0]+"px",d.style.top=t[1]+"px",i!==r&&o.setContent({".tooltip-inner":i.get("name")}),r?o.update():o.show()):o.hide(),r=i};a.on("pointermove",function(t){if(t.dragging){o.hide(),r=void 0;return}const s=a.getEventPixel(t.originalEvent);h(s,t.originalEvent.target)}),a.on("click",function(t){h(t.pixel,t.originalEvent.target)}),a.getTargetElement().addEventListener("pointerleave",function(){o.hide(),r=void 0}),Prism.highlightAll()}),(f,g)=>(L(),C(T,null,[e("h4",W,c(p(B)),1),G,H,J,e("pre",null,[e("code",O,c("  "+p(z).trim()),1)]),Q,e("pre",null,[e("code",R,c("  "+p(A).trim()),1)]),U,e("pre",null,[e("code",X,c("  "+p(D).trim()),1)]),Y,e("pre",null,[e("code",Z,c("  "+p(N).trim()),1)])],64))}},be=j($,[["__scopeId","data-v-927c51a9"]]);export{be as default};
