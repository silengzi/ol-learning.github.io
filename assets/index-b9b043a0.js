import{D as u}from"./Draw-90c2be1f.js";import{M as m,V as v}from"./Layer-d95863ce.js";import{_ as f,i as g,o as h,c as y,b as e,t,g as o,F as _,j as w,p as b,k as S}from"./index-ceda08fa.js";import{T as V}from"./Tile-26a716d9.js";import{O as I}from"./OSM-4c2d3aa4.js";import{V as L}from"./VectorLayer-8feade0f.js";import{V as j}from"./Vector-3d640e4b.js";import"./Circle-f362869a.js";import"./GeometryCollection-e31ac581.js";import"./LineString-da25bcd7.js";import"./featureloader-ea3986d0.js";import"./MultiPolygon-f37fd2e0.js";import"./BaseTile-0f70055b.js";import"./TileProperty-0dbbd060.js";import"./TileLayer-121ec467.js";import"./Layer-4850cb8d.js";import"./XYZ-73edd6ba.js";import"./TileImage-f7288716.js";import"./UrlTile-563a27f8.js";const x="Draw Features",P=`
  <div id="map" class="map"></div>
  <div class="row">
    <div class="col-auto">
      <span class="input-group">
        <label class="input-group-text" for="type">Geometry type:</label>
        <select class="form-select" id="type">
          <option value="Point">Point</option>
          <option value="LineString">LineString</option>
          <option value="Polygon">Polygon</option>
          <option value="Circle">Circle</option>
          <option value="None">None</option>
        </select>
        <input class="form-control" type="button" value="Undo" id="undo">
      </span>
    </div>
  </div>

  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css">
`,k=`
  .map {
    width: 100%;
    height: 400px;
  }
`,D=`
  import Draw from 'ol/interaction/Draw.js';
  import Map from 'ol/Map.js';
  import View from 'ol/View.js';
  import {OSM, Vector as VectorSource} from 'ol/source.js';
  import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';

  const raster = new TileLayer({
    source: new OSM(),
  });

  const source = new VectorSource({wrapX: false});

  const vector = new VectorLayer({
    source: source,
  });

  const map = new Map({
    layers: [raster, vector],
    target: 'map',
    view: new View({
      center: [-11000000, 4600000],
      zoom: 4,
    }),
  });

  const typeSelect = document.getElementById('type');

  let draw; // global so we can remove it later
  function addInteraction() {
    const value = typeSelect.value;
    if (value !== 'None') {
      draw = new Draw({
        source: source,
        type: typeSelect.value,
      });
      map.addInteraction(draw);
    }
  }

  /**
   * Handle change event.
   */
  typeSelect.onchange = function () {
    map.removeInteraction(draw);
    addInteraction();
  };

  document.getElementById('undo').addEventListener('click', function () {
    draw.removeLastPoint();
  });

  addInteraction();
`,M=`
  {
    "name": "draw-features",
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
`;const i=a=>(b("data-v-638f6b2a"),a=a(),S(),a),E={id:"title"},N=w('<div id="map" class="map" data-v-638f6b2a></div><div class="row" data-v-638f6b2a><div class="col-auto" data-v-638f6b2a><span class="input-group" data-v-638f6b2a><label class="input-group-text" for="type" data-v-638f6b2a>Geometry type:</label><select class="form-select" id="type" data-v-638f6b2a><option value="Point" data-v-638f6b2a>Point</option><option value="LineString" data-v-638f6b2a>LineString</option><option value="Polygon" data-v-638f6b2a>Polygon</option><option value="Circle" data-v-638f6b2a>Circle</option><option value="None" data-v-638f6b2a>None</option></select><input class="form-control" type="button" value="Undo" id="undo" data-v-638f6b2a></span></div></div><p data-v-638f6b2a>Example of using the Draw interaction. Select a geometry type from the dropdown above to start drawing. To finish drawing, click the last point. To activate freehand drawing for lines, polygons, and circles, hold the Shift key. To remove the last point of a line or polygon, press &quot;Undo&quot;.</p><h5 class="source-heading" data-v-638f6b2a>html</h5>',4),T={class:"language-html"},B=i(()=>e("h5",{class:"source-heading"},"css",-1)),C={class:"language-css"},O=i(()=>e("h5",{class:"source-heading"},"js",-1)),F={class:"language-js"},U=i(()=>e("h5",{class:"source-heading"},"package.json",-1)),q={class:"language-json"},z={__name:"index",setup(a){return g(()=>{const c=new V({source:new I}),s=new L({wrapX:!1}),d=new j({source:s}),l=new m({layers:[c,d],target:"map",view:new v({center:[-11e6,46e5],zoom:4})}),r=document.getElementById("type");let n;function p(){r.value!=="None"&&(n=new u({source:s,type:r.value}),l.addInteraction(n))}r.onchange=function(){l.removeInteraction(n),p()},document.getElementById("undo").addEventListener("click",function(){n.removeLastPoint()}),p(),Prism.highlightAll()}),(c,s)=>(h(),y(_,null,[e("h4",E,t(o(x)),1),N,e("pre",null,[e("code",T,t("  "+o(P).trim()),1)]),B,e("pre",null,[e("code",C,t("  "+o(k).trim()),1)]),O,e("pre",null,[e("code",F,t("  "+o(D).trim()),1)]),U,e("pre",null,[e("code",q,t("  "+o(M).trim()),1)])],64))}},ce=f(z,[["__scopeId","data-v-638f6b2a"]]);export{ce as default};
