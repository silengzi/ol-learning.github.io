import{D as f}from"./Draw-0b13e345.js";import{M as v,V as w}from"./Layer-227d2e40.js";import{_ as y,i as g,o as h,c as _,b as e,t as o,g as t,F as S,j as k,p as V,k as I}from"./index-0efe29ff.js";import{T as b}from"./Tile-69a5f37c.js";import{O as P}from"./OSM-829eb14e.js";import{V as L}from"./Vector-dc05cca5.js";import{V as j}from"./Vector-1db23811.js";import"./Circle-12fbc9db.js";import"./GeometryCollection-66a09ebd.js";import"./LineString-72752817.js";import"./featureloader-41324978.js";import"./Style-f78957a3.js";import"./MultiPolygon-4cf6e085.js";import"./MultiPoint-97d710ff.js";import"./BaseTile-962ada93.js";import"./TileProperty-167ee2c2.js";import"./TileLayer-94aa49a8.js";import"./Layer-10451559.js";import"./XYZ-f63b0d91.js";import"./TileImage-97dc110f.js";import"./UrlTile-27538029.js";import"./VectorLayer-cfa00b56.js";import"./hitdetect-d04d171e.js";import"./vector-841020ca.js";const x="Drawing Features Style",D=`
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
      </span>
    </div>
  </div>
`,M=`
  .map {
    width: 100%;
    height: 400px;
  }
`,N=`
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
  const styles = {
    Point: {
      'circle-radius': 5,
      'circle-fill-color': 'red',
    },
    LineString: {
      'circle-radius': 5,
      'circle-fill-color': 'red',
      'stroke-color': 'yellow',
      'stroke-width': 2,
    },
    Polygon: {
      'circle-radius': 5,
      'circle-fill-color': 'red',
      'stroke-color': 'yellow',
      'stroke-width': 2,
      'fill-color': 'blue',
    },
    Circle: {
      'circle-radius': 5,
      'circle-fill-color': 'red',
      'stroke-color': 'blue',
      'stroke-width': 2,
      'fill-color': 'yellow',
    },
  };

  const typeSelect = document.getElementById('type');

  let draw; // global so we can remove it later
  function addInteraction() {
    const value = typeSelect.value;
    if (value !== 'None') {
      draw = new Draw({
        source: source,
        type: typeSelect.value,
        style: styles[value],
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

  addInteraction();
`,T=`
  {
    "name": "draw-features-style",
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
`;const s=r=>(V("data-v-a80438ef"),r=r(),I(),r),C={id:"title"},B=k('<div id="map" class="map" data-v-a80438ef></div><div class="row" data-v-a80438ef><div class="col-auto" data-v-a80438ef><span class="input-group" data-v-a80438ef><label class="input-group-text" for="type" data-v-a80438ef>Geometry type:</label><select class="form-select" id="type" data-v-a80438ef><option value="Point" data-v-a80438ef>Point</option><option value="LineString" data-v-a80438ef>LineString</option><option value="Polygon" data-v-a80438ef>Polygon</option><option value="Circle" data-v-a80438ef>Circle</option><option value="None" data-v-a80438ef>None</option></select></span></div></div><p data-v-a80438ef>The Draw interaction in this example uses a custom drawing style. Select a geometry type from the dropdown above to start drawing. To finish drawing, click the last point. To activate freehand drawing for lines, polygons, and circles, hold the Shift key.</p><h5 class="source-heading" data-v-a80438ef>html</h5>',4),O={class:"language-html"},E=s(()=>e("h5",{class:"source-heading"},"css",-1)),F={class:"language-css"},z=s(()=>e("h5",{class:"source-heading"},"js",-1)),G={class:"language-js"},X=s(()=>e("h5",{class:"source-heading"},"package.json",-1)),A={class:"language-json"},H={__name:"index",setup(r){return g(()=>{const c=new b({source:new P}),a=new L({wrapX:!1}),u=new j({source:a}),n=new v({layers:[c,u],target:"map",view:new w({center:[-11e6,46e5],zoom:4})}),m={Point:{"circle-radius":5,"circle-fill-color":"red"},LineString:{"circle-radius":5,"circle-fill-color":"red","stroke-color":"yellow","stroke-width":2},Polygon:{"circle-radius":5,"circle-fill-color":"red","stroke-color":"yellow","stroke-width":2,"fill-color":"blue"},Circle:{"circle-radius":5,"circle-fill-color":"red","stroke-color":"blue","stroke-width":2,"fill-color":"yellow"}},i=document.getElementById("type");let l;function p(){const d=i.value;d!=="None"&&(l=new f({source:a,type:i.value,style:m[d]}),n.addInteraction(l))}i.onchange=function(){n.removeInteraction(l),p()},p(),Prism.highlightAll()}),(c,a)=>(h(),_(S,null,[e("h4",C,o(t(x)),1),B,e("pre",null,[e("code",O,o("  "+t(D).trim()),1)]),E,e("pre",null,[e("code",F,o("  "+t(M).trim()),1)]),z,e("pre",null,[e("code",G,o("  "+t(N).trim()),1)]),X,e("pre",null,[e("code",A,o("  "+t(T).trim()),1)])],64))}},fe=y(H,[["__scopeId","data-v-a80438ef"]]);export{fe as default};
