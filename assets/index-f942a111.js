import{F as b}from"./featureloader-a90a5108.js";import{M as y,R as C,V as I}from"./Layer-3b715193.js";import{c as x}from"./TileProperty-e33ea24b.js";import{_ as V,i as T,o as E,c as M,b as o,t as i,g as s,F as S,j as D,p as L,k as j}from"./index-c958856c.js";import{D as B,G as k,I as F,T as X}from"./TopoJSON-61977e9c.js";import{G}from"./GeoJSON-690a4bb4.js";import{K as O}from"./KML-c43cd689.js";import{T as Y}from"./Tile-70490af9.js";import{O as Z}from"./OSM-f0f00429.js";import{V as A}from"./Vector-a4e726e1.js";import{V as P}from"./Vector-6fff18f8.js";import{M as N}from"./MVT-82b11897.js";import"./LineString-eed53b5a.js";import"./length-c6ba5b73.js";import"./MultiPolygon-d7736349.js";import"./MultiPoint-74fca651.js";import"./Feature-627996e0.js";import"./TextFeature-d99bec1a.js";import"./JSONFeature-5a5c1876.js";import"./string-30bf5402.js";import"./BaseTile-8ab94efc.js";import"./TileLayer-7c629c64.js";import"./Layer-37ea9c2e.js";import"./XYZ-80208d03.js";import"./TileImage-1df58d67.js";import"./UrlTile-dc2c26ed.js";import"./VectorLayer-ef6da1be.js";import"./hitdetect-486e5612.js";import"./vector-4e067f94.js";const J="Custom Drag-and-Drop (MVT preview)",R=`
  <div id="map" class="map"></div>
  <br />
  <div class="tileCoord">
    <a id="download" download></a>
    <span>Tile coordinate&nbsp;&nbsp;</span>
    <span>&nbsp;z: <input type="number" id="tileCoordZ" value="6" /></span>
    <span>&nbsp;x: <input type="number" id="tileCoordX" value="30" /></span>
    <span>&nbsp;y: <input type="number" id="tileCoordY" value="20" /></span>
    <span>&nbsp;&nbsp;</span>
    <button id="download-mvt">Download sample</button>
  </div>
  <br />
  <div id="info">&nbsp;</div>
`,z=`
  .map {
    width: 100%;
    height: 400px;
  }
  .tileCoord input {
    width: 60px;
  }
`,H=`
  import Feature from 'ol/Feature.js';
  import Map from 'ol/Map.js';
  import View from 'ol/View.js';
  import {
    DragAndDrop,
    defaults as defaultInteractions,
  } from 'ol/interaction.js';
  import {GPX, GeoJSON, IGC, KML, MVT, TopoJSON} from 'ol/format.js';
  import {OSM, Vector as VectorSource} from 'ol/source.js';
  import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';
  import {createXYZ} from 'ol/tilegrid.js';

  // Define a custom MVT format as ol/format/MVT requires an extent

  const tileCoordZ = document.getElementById('tileCoordZ');
  const tileCoordX = document.getElementById('tileCoordX');
  const tileCoordY = document.getElementById('tileCoordY');

  class customMVT extends MVT {
    constructor() {
      super({featureClass: Feature});
    }
    readFeatures(source, options) {
      options.extent = createXYZ().getTileCoordExtent([
        parseInt(tileCoordZ.value),
        parseInt(tileCoordX.value),
        parseInt(tileCoordY.value),
      ]);
      return super.readFeatures(source, options);
    }
  }

  // Set up map with Drag and Drop interaction

  const dragAndDropInteraction = new DragAndDrop({
    formatConstructors: [customMVT, GPX, GeoJSON, IGC, KML, TopoJSON],
  });

  const map = new Map({
    interactions: defaultInteractions().extend([dragAndDropInteraction]),
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
    ],
    target: 'map',
    view: new View({
      center: [0, 0],
      zoom: 2,
    }),
  });

  dragAndDropInteraction.on('addfeatures', function (event) {
    const vectorSource = new VectorSource({
      features: event.features,
    });
    map.addLayer(
      new VectorLayer({
        source: vectorSource,
      })
    );
    map.getView().fit(vectorSource.getExtent());
  });

  const displayFeatureInfo = function (pixel) {
    const features = [];
    map.forEachFeatureAtPixel(pixel, function (feature) {
      features.push(feature);
    });
    if (features.length > 0) {
      const info = [];
      let i, ii;
      for (i = 0, ii = features.length; i < ii; ++i) {
        const description =
          features[i].get('name') ||
          features[i].get('_name') ||
          features[i].get('layer');
        if (description) {
          info.push(description);
        }
      }
      document.getElementById('info').innerHTML = info.join(', ') || '&nbsp';
    } else {
      document.getElementById('info').innerHTML = '&nbsp;';
    }
  };

  map.on('pointermove', function (evt) {
    if (evt.dragging) {
      return;
    }
    const pixel = map.getEventPixel(evt.originalEvent);
    displayFeatureInfo(pixel);
  });

  map.on('click', function (evt) {
    displayFeatureInfo(evt.pixel);
  });

  // Sample data download

  const link = document.getElementById('download');

  function download(fullpath, filename) {
    fetch(fullpath)
      .then(function (response) {
        return response.blob();
      })
      .then(function (blob) {
        link.href = URL.createObjectURL(blob);
        link.download = filename;
        link.click();
      });
  }

  document.getElementById('download-mvt').addEventListener('click', function () {
    const fullpath =
      'https://basemaps.arcgis.com/arcgis/rest/services/World_Basemap_v2/VectorTileServer/tile/' +
      tileCoordZ.value +
      '/' +
      tileCoordY.value +
      '/' +
      tileCoordX.value +
      '.pbf';
    const filename =
      tileCoordZ.value + '-' + tileCoordX.value + '-' + tileCoordY.value + '.mvt';
    download(fullpath, filename);
  });
`,K=`
  {
    "name": "drag-and-drop-custom-mvt",
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
`;const m=d=>(L("data-v-31e88a09"),d=d(),j(),d),U={id:"title"},W=D('<div id="map" class="map" data-v-31e88a09></div><br data-v-31e88a09><div class="tileCoord" data-v-31e88a09><a id="download" download data-v-31e88a09></a><span data-v-31e88a09>Tile coordinate  </span><span data-v-31e88a09> z: <input type="number" id="tileCoordZ" value="6" data-v-31e88a09></span><span data-v-31e88a09> x: <input type="number" id="tileCoordX" value="30" data-v-31e88a09></span><span data-v-31e88a09> y: <input type="number" id="tileCoordY" value="20" data-v-31e88a09></span><span data-v-31e88a09>  </span><button id="download-mvt" data-v-31e88a09>Download sample</button></div><br data-v-31e88a09><div id="info" data-v-31e88a09> </div><p data-v-31e88a09>Example of using the drag-and-drop interaction with a custom format to preview MVT tiles. In addition to the formats used in the <code data-v-31e88a09>Drag-and-Drop</code> example individual MVT tiles can be previewed. There is no projection transform support, so this will only work with data in EPSG:4326 and EPSG:3857.</p><h5 class="source-heading" data-v-31e88a09>html</h5>',7),q={class:"language-html"},Q=m(()=>o("h5",{class:"source-heading"},"css",-1)),$={class:"language-css"},ee=m(()=>o("h5",{class:"source-heading"},"js",-1)),te={class:"language-js"},oe=m(()=>o("h5",{class:"source-heading"},"package.json",-1)),ae={class:"language-json"},ne={__name:"index",setup(d){return T(()=>{const l=document.getElementById("tileCoordZ"),c=document.getElementById("tileCoordX"),p=document.getElementById("tileCoordY");class w extends N{constructor(){super({featureClass:b})}readFeatures(e,a){return a.extent=x().getTileCoordExtent([parseInt(l.value),parseInt(c.value),parseInt(p.value)]),super.readFeatures(e,a)}}const f=new B({formatConstructors:[w,k,G,F,O,X]}),n=new y({interactions:C().extend([f]),layers:[new Y({source:new Z})],target:"map",view:new I({center:[0,0],zoom:2})});f.on("addfeatures",function(t){const e=new A({features:t.features});n.addLayer(new P({source:e})),n.getView().fit(e.getExtent())});const v=function(t){const e=[];if(n.forEachFeatureAtPixel(t,function(a){e.push(a)}),e.length>0){const a=[];let r,g;for(r=0,g=e.length;r<g;++r){const h=e[r].get("name")||e[r].get("_name")||e[r].get("layer");h&&a.push(h)}document.getElementById("info").innerHTML=a.join(", ")||"&nbsp"}else document.getElementById("info").innerHTML="&nbsp;"};n.on("pointermove",function(t){if(t.dragging)return;const e=n.getEventPixel(t.originalEvent);v(e)}),n.on("click",function(t){v(t.pixel)});const u=document.getElementById("download");function _(t,e){fetch(t).then(function(a){return a.blob()}).then(function(a){u.href=URL.createObjectURL(a),u.download=e,u.click()})}document.getElementById("download-mvt").addEventListener("click",function(){const t="https://basemaps.arcgis.com/arcgis/rest/services/World_Basemap_v2/VectorTileServer/tile/"+l.value+"/"+p.value+"/"+c.value+".pbf",e=l.value+"-"+c.value+"-"+p.value+".mvt";_(t,e)}),Prism.highlightAll()}),(l,c)=>(E(),M(S,null,[o("h4",U,i(s(J)),1),W,o("pre",null,[o("code",q,i("  "+s(R).trim()),1)]),Q,o("pre",null,[o("code",$,i("  "+s(z).trim()),1)]),ee,o("pre",null,[o("code",te,i("  "+s(H).trim()),1)]),oe,o("pre",null,[o("code",ae,i("  "+s(K).trim()),1)])],64))}},ke=V(ne,[["__scopeId","data-v-31e88a09"]]);export{ke as default};
