import{V as b,a as y,F as C}from"./Vector-844a0c6a.js";import{M as I,a9 as x,V as T}from"./Layer-da76b588.js";import{c as V}from"./TileProperty-0f8ad975.js";import{_ as E,i as M,o as S,c as D,b as o,t as i,g as s,F as L,j,p as B,k}from"./index-ceb9aa48.js";import{D as F,G as X,I as G,K as O,T as Y}from"./TopoJSON-99a2bb35.js";import{G as Z}from"./GeoJSON-1f2a259b.js";import{T as A}from"./Tile-71d632e2.js";import{O as P}from"./OSM-9750d531.js";import{M as N}from"./MVT-20be828b.js";import"./featureloader-5ea9ad61.js";import"./Layer-5d5c7c57.js";import"./LineString-e19dc84a.js";import"./MultiPolygon-79cfbc3b.js";import"./string-30bf5402.js";import"./JSONFeature-c33571f5.js";import"./BaseTile-bf862043.js";import"./TileLayer-65677d1f.js";import"./XYZ-abf237e7.js";import"./TileImage-66662d8b.js";import"./UrlTile-ef3e4dbe.js";import"./_commonjsHelpers-39b5b250.js";const J="Custom Drag-and-Drop (MVT preview)",z=`
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
`,H=`
  .map {
    width: 100%;
    height: 400px;
  }
  .tileCoord input {
    width: 60px;
  }
`,K=`
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
`,R=`
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
`;const m=d=>(B("data-v-31e88a09"),d=d(),k(),d),U={id:"title"},W=j('<div id="map" class="map" data-v-31e88a09></div><br data-v-31e88a09><div class="tileCoord" data-v-31e88a09><a id="download" download data-v-31e88a09></a><span data-v-31e88a09>Tile coordinate  </span><span data-v-31e88a09> z: <input type="number" id="tileCoordZ" value="6" data-v-31e88a09></span><span data-v-31e88a09> x: <input type="number" id="tileCoordX" value="30" data-v-31e88a09></span><span data-v-31e88a09> y: <input type="number" id="tileCoordY" value="20" data-v-31e88a09></span><span data-v-31e88a09>  </span><button id="download-mvt" data-v-31e88a09>Download sample</button></div><br data-v-31e88a09><div id="info" data-v-31e88a09> </div><p data-v-31e88a09>Example of using the drag-and-drop interaction with a custom format to preview MVT tiles. In addition to the formats used in the <code data-v-31e88a09>Drag-and-Drop</code> example individual MVT tiles can be previewed. There is no projection transform support, so this will only work with data in EPSG:4326 and EPSG:3857.</p><h5 class="source-heading" data-v-31e88a09>html</h5>',7),q={class:"language-html"},Q=m(()=>o("h5",{class:"source-heading"},"css",-1)),$={class:"language-css"},ee=m(()=>o("h5",{class:"source-heading"},"js",-1)),te={class:"language-js"},oe=m(()=>o("h5",{class:"source-heading"},"package.json",-1)),ae={class:"language-json"},ne={__name:"index",setup(d){return M(()=>{const l=document.getElementById("tileCoordZ"),c=document.getElementById("tileCoordX"),p=document.getElementById("tileCoordY");class w extends N{constructor(){super({featureClass:C})}readFeatures(e,a){return a.extent=V().getTileCoordExtent([parseInt(l.value),parseInt(c.value),parseInt(p.value)]),super.readFeatures(e,a)}}const f=new F({formatConstructors:[w,X,Z,G,O,Y]}),n=new I({interactions:x().extend([f]),layers:[new A({source:new P})],target:"map",view:new T({center:[0,0],zoom:2})});f.on("addfeatures",function(t){const e=new b({features:t.features});n.addLayer(new y({source:e})),n.getView().fit(e.getExtent())});const v=function(t){const e=[];if(n.forEachFeatureAtPixel(t,function(a){e.push(a)}),e.length>0){const a=[];let r,g;for(r=0,g=e.length;r<g;++r){const h=e[r].get("name")||e[r].get("_name")||e[r].get("layer");h&&a.push(h)}document.getElementById("info").innerHTML=a.join(", ")||"&nbsp"}else document.getElementById("info").innerHTML="&nbsp;"};n.on("pointermove",function(t){if(t.dragging)return;const e=n.getEventPixel(t.originalEvent);v(e)}),n.on("click",function(t){v(t.pixel)});const u=document.getElementById("download");function _(t,e){fetch(t).then(function(a){return a.blob()}).then(function(a){u.href=URL.createObjectURL(a),u.download=e,u.click()})}document.getElementById("download-mvt").addEventListener("click",function(){const t="https://basemaps.arcgis.com/arcgis/rest/services/World_Basemap_v2/VectorTileServer/tile/"+l.value+"/"+p.value+"/"+c.value+".pbf",e=l.value+"-"+c.value+"-"+p.value+".mvt";_(t,e)}),Prism.highlightAll()}),(l,c)=>(S(),D(L,null,[o("h4",U,i(s(J)),1),W,o("pre",null,[o("code",q,i("  "+s(z).trim()),1)]),Q,o("pre",null,[o("code",$,i("  "+s(H).trim()),1)]),ee,o("pre",null,[o("code",te,i("  "+s(K).trim()),1)]),oe,o("pre",null,[o("code",ae,i("  "+s(R).trim()),1)])],64))}},Ve=E(ne,[["__scopeId","data-v-31e88a09"]]);export{Ve as default};