import{D as v,G as y,I as _,K as k,T as x}from"./TopoJSON-e16566b9.js";import{M as I,V as E}from"./Layer-d95863ce.js";import{_ as j,i as L,o as S,c as D,b as t,t as r,g as s,F as G,j as M,p as B,k as T}from"./index-ceda08fa.js";import{T as V}from"./Tile-26a716d9.js";import{X as P}from"./XYZ-73edd6ba.js";import{G as A}from"./GeoJSON-18d2e23d.js";import{V as O}from"./VectorLayer-8feade0f.js";import{V as N}from"./Vector-3d640e4b.js";import"./LineString-da25bcd7.js";import"./featureloader-ea3986d0.js";import"./MultiPolygon-f37fd2e0.js";import"./Feature-ba88f75c.js";import"./GeometryCollection-e31ac581.js";import"./string-30bf5402.js";import"./JSONFeature-6b9607e0.js";import"./BaseTile-0f70055b.js";import"./TileProperty-0dbbd060.js";import"./TileLayer-121ec467.js";import"./Layer-4850cb8d.js";import"./TileImage-f7288716.js";import"./UrlTile-563a27f8.js";const J="Drag-and-Drop",X=`
  <div id="map" class="map"></div>
  <div><label><input type="checkbox" id="extractstyles" checked /> Extract styles from KML</label></div>
  <br />
  <div>
    <a id="download" download></a>
    Download samples:&nbsp;&nbsp;
    <button id="download-gpx">GPX</button>
    &nbsp;
    <button id="download-geojson">GeoJSON</button>
    &nbsp;
    <button id="download-igc">IGC</button>
    &nbsp;
    <button id="download-kml">KML</button>
    &nbsp;
    <button id="download-topojson">TopoJSON</button>
  </div>
  <br />
  <div id="info">&nbsp;</div>
`,z=`
  .map {
    width: 100%;
    height: 400px;
  }
`,K=`
  import DragAndDrop from 'ol/interaction/DragAndDrop.js';
  import Map from 'ol/Map.js';
  import View from 'ol/View.js';
  import {GPX, GeoJSON, IGC, KML, TopoJSON} from 'ol/format.js';
  import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';
  import {Vector as VectorSource, XYZ} from 'ol/source.js';

  const key = 'Get your own API key at https://www.maptiler.com/cloud/';
  const attributions =
    '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> ' +
    '<a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>';

  const map = new Map({
    layers: [
      new TileLayer({
        source: new XYZ({
          attributions: attributions,
          url:
            'https://api.maptiler.com/tiles/satellite/{z}/{x}/{y}.jpg?key=' + key,
          maxZoom: 20,
        }),
      }),
    ],
    target: 'map',
    view: new View({
      center: [0, 0],
      zoom: 2,
    }),
  });

  const extractStyles = document.getElementById('extractstyles');
  let dragAndDropInteraction;

  function setInteraction() {
    if (dragAndDropInteraction) {
      map.removeInteraction(dragAndDropInteraction);
    }
    dragAndDropInteraction = new DragAndDrop({
      formatConstructors: [
        GPX,
        GeoJSON,
        IGC,
        // use constructed format to set options
        new KML({extractStyles: extractStyles.checked}),
        TopoJSON,
      ],
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
    map.addInteraction(dragAndDropInteraction);
  }
  setInteraction();

  extractStyles.addEventListener('change', setInteraction);

  const displayFeatureInfo = function (pixel) {
    const features = [];
    map.forEachFeatureAtPixel(pixel, function (feature) {
      features.push(feature);
    });
    if (features.length > 0) {
      const info = [];
      let i, ii;
      for (i = 0, ii = features.length; i < ii; ++i) {
        info.push(features[i].get('name'));
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

  // Sample data downloads

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

  document.getElementById('download-gpx').addEventListener('click', function () {
    download('data/gpx/fells_loop.gpx', 'fells_loop.gpx');
  });

  document
    .getElementById('download-geojson')
    .addEventListener('click', function () {
      download('data/geojson/roads-seoul.geojson', 'roads-seoul.geojson');
    });

  document.getElementById('download-igc').addEventListener('click', function () {
    download('data/igc/Ulrich-Prinz.igc', 'Ulrich-Prinz.igc');
  });

  document.getElementById('download-kml').addEventListener('click', function () {
    download('data/kml/states.kml', 'states.kml');
  });

  document
    .getElementById('download-topojson')
    .addEventListener('click', function () {
      download('data/topojson/fr-departments.json', 'fr-departments.json');
    });
`,U=`
  {
    "name": "drag-and-drop",
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
`;const m=c=>(B("data-v-974dbe81"),c=c(),T(),c),C={id:"title"},F=M('<div id="map" class="map" data-v-974dbe81></div><div data-v-974dbe81><label data-v-974dbe81><input type="checkbox" id="extractstyles" checked data-v-974dbe81> Extract styles from KML</label></div><br data-v-974dbe81><div data-v-974dbe81><a id="download" download data-v-974dbe81></a> Download samples:   <button id="download-gpx" data-v-974dbe81>GPX</button>   <button id="download-geojson" data-v-974dbe81>GeoJSON</button>   <button id="download-igc" data-v-974dbe81>IGC</button>   <button id="download-kml" data-v-974dbe81>KML</button>   <button id="download-topojson" data-v-974dbe81>TopoJSON</button></div><br data-v-974dbe81><div id="info" data-v-974dbe81> </div><p data-v-974dbe81>Example of using the drag-and-drop interaction. Drag and drop GPX, GeoJSON, IGC, KML, or TopoJSON files on to the map. There is no projection transform support, so this will only work with data in EPSG:4326 and EPSG:3857.</p><h5 class="source-heading" data-v-974dbe81>html</h5>',8),H={class:"language-html"},Z=m(()=>t("h5",{class:"source-heading"},"css",-1)),R={class:"language-css"},Y=m(()=>t("h5",{class:"source-heading"},"js",-1)),q={class:"language-js"},Q=m(()=>t("h5",{class:"source-heading"},"package.json",-1)),W={class:"language-json"},$={__name:"index",setup(c){return L(()=>{const u="UvzNAwhugDuwndyxsHmE",g='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',n=new I({layers:[new V({source:new P({attributions:g,url:"https://api.maptiler.com/tiles/satellite/{z}/{x}/{y}.jpg?key="+u,maxZoom:20})})],target:"map",view:new E({center:[0,0],zoom:2})}),f=document.getElementById("extractstyles");let d;function w(){d&&n.removeInteraction(d),d=new v({formatConstructors:[y,A,_,new k({extractStyles:f.checked}),x]}),d.on("addfeatures",function(o){const e=new O({features:o.features});n.addLayer(new N({source:e})),n.getView().fit(e.getExtent())}),n.addInteraction(d)}w(),f.addEventListener("change",w);const b=function(o){const e=[];if(n.forEachFeatureAtPixel(o,function(a){e.push(a)}),e.length>0){const a=[];let l,h;for(l=0,h=e.length;l<h;++l)a.push(e[l].get("name"));document.getElementById("info").innerHTML=a.join(", ")||"&nbsp"}else document.getElementById("info").innerHTML="&nbsp;"};n.on("pointermove",function(o){if(o.dragging)return;const e=n.getEventPixel(o.originalEvent);b(e)}),n.on("click",function(o){b(o.pixel)});const p=document.getElementById("download");function i(o,e){fetch(o).then(function(a){return a.blob()}).then(function(a){p.href=URL.createObjectURL(a),p.download=e,p.click()})}document.getElementById("download-gpx").addEventListener("click",function(){i("data/gpx/fells_loop.gpx","fells_loop.gpx")}),document.getElementById("download-geojson").addEventListener("click",function(){i("data/geojson/roads-seoul.geojson","roads-seoul.geojson")}),document.getElementById("download-igc").addEventListener("click",function(){i("data/igc/Ulrich-Prinz.igc","Ulrich-Prinz.igc")}),document.getElementById("download-kml").addEventListener("click",function(){i("data/kml/states.kml","states.kml")}),document.getElementById("download-topojson").addEventListener("click",function(){i("data/topojson/fr-departments.json","fr-departments.json")}),Prism.highlightAll()}),(u,g)=>(S(),D(G,null,[t("h4",C,r(s(J)),1),F,t("pre",null,[t("code",H,r("  "+s(X).trim()),1)]),Z,t("pre",null,[t("code",R,r("  "+s(z).trim()),1)]),Y,t("pre",null,[t("code",q,r("  "+s(K).trim()),1)]),Q,t("pre",null,[t("code",W,r("  "+s(U).trim()),1)])],64))}},_t=j($,[["__scopeId","data-v-974dbe81"]]);export{_t as default};
