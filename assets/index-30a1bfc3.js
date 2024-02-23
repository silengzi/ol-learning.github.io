import{g,M as w,V as y}from"./Layer-227d2e40.js";import{_ as h,i as _,o as v,c as b,b as e,t as a,g as n,F as S,j as I,p as x,k as V}from"./index-eb0ea342.js";import{T as M}from"./Tile-69a5f37c.js";import{O as j}from"./OSM-829eb14e.js";import{V as L}from"./Vector-dc05cca5.js";import{V as P}from"./Vector-1db23811.js";import{M as k,S as D}from"./Snap-a4705223.js";import{D as E}from"./Draw-0b13e345.js";import"./BaseTile-962ada93.js";import"./TileProperty-167ee2c2.js";import"./TileLayer-94aa49a8.js";import"./Layer-10451559.js";import"./XYZ-f63b0d91.js";import"./TileImage-97dc110f.js";import"./UrlTile-27538029.js";import"./featureloader-41324978.js";import"./Style-f78957a3.js";import"./VectorLayer-cfa00b56.js";import"./hitdetect-d04d171e.js";import"./vector-841020ca.js";import"./Circle-12fbc9db.js";import"./GeometryCollection-66a09ebd.js";import"./LineString-72752817.js";import"./MultiPolygon-4cf6e085.js";import"./MultiPoint-97d710ff.js";const B="Draw and Modify Features",G=`
  <div id="map" class="map"></div>
  <form>
    <label for="type">Geometry type &nbsp;</label>
    <select id="type">
      <option value="Point">Point</option>
      <option value="LineString">LineString</option>
      <option value="Polygon">Polygon</option>
      <option value="Circle">Circle</option>
    </select>
  </form>
`,T=`
  .map {
    width: 100%;
    height: 400px;
  }
`,C=`
  import Map from 'ol/Map.js';
  import View from 'ol/View.js';
  import {Draw, Modify, Snap} from 'ol/interaction.js';
  import {OSM, Vector as VectorSource} from 'ol/source.js';
  import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';
  import {get} from 'ol/proj.js';

  const raster = new TileLayer({
    source: new OSM(),
  });

  const source = new VectorSource();
  const vector = new VectorLayer({
    source: source,
    style: {
      'fill-color': 'rgba(255, 255, 255, 0.2)',
      'stroke-color': '#ffcc33',
      'stroke-width': 2,
      'circle-radius': 7,
      'circle-fill-color': '#ffcc33',
    },
  });

  // Limit multi-world panning to one world east and west of the real world.
  // Geometry coordinates have to be within that range.
  const extent = get('EPSG:3857').getExtent().slice();
  extent[0] += extent[0];
  extent[2] += extent[2];
  const map = new Map({
    layers: [raster, vector],
    target: 'map',
    view: new View({
      center: [-11000000, 4600000],
      zoom: 4,
      extent,
    }),
  });

  const modify = new Modify({source: source});
  map.addInteraction(modify);

  let draw, snap; // global so we can remove them later
  const typeSelect = document.getElementById('type');

  function addInteractions() {
    draw = new Draw({
      source: source,
      type: typeSelect.value,
    });
    map.addInteraction(draw);
    snap = new Snap({source: source});
    map.addInteraction(snap);
  }

  /**
   * Handle change event.
   */
  typeSelect.onchange = function () {
    map.removeInteraction(draw);
    map.removeInteraction(snap);
    addInteractions();
  };

  addInteractions();
`,O=`
  {
    "name": "draw-and-modify-features",
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
`;const l=c=>(x("data-v-ce7460b5"),c=c(),V(),c),F={id:"title"},z=I('<div id="map" class="map" data-v-ce7460b5></div><form data-v-ce7460b5><label for="type" data-v-ce7460b5>Geometry type  </label><select id="type" data-v-ce7460b5><option value="Point" data-v-ce7460b5>Point</option><option value="LineString" data-v-ce7460b5>LineString</option><option value="Polygon" data-v-ce7460b5>Polygon</option><option value="Circle" data-v-ce7460b5>Circle</option></select></form><p data-v-ce7460b5>Example of using the ol/interaction/Draw interaction together with the ol/interaction/Modify interaction.</p><h5 class="source-heading" data-v-ce7460b5>html</h5>',4),N={class:"language-html"},A=l(()=>e("h5",{class:"source-heading"},"css",-1)),H={class:"language-css"},q=l(()=>e("h5",{class:"source-heading"},"js",-1)),J={class:"language-js"},K=l(()=>e("h5",{class:"source-heading"},"package.json",-1)),Q={class:"language-json"},R={__name:"index",setup(c){return _(()=>{const p=new M({source:new j}),t=new L,u=new P({source:t,style:{"fill-color":"rgba(255, 255, 255, 0.2)","stroke-color":"#ffcc33","stroke-width":2,"circle-radius":7,"circle-fill-color":"#ffcc33"}}),o=g("EPSG:3857").getExtent().slice();o[0]+=o[0],o[2]+=o[2];const r=new w({layers:[p,u],target:"map",view:new y({center:[-11e6,46e5],zoom:4,extent:o})}),f=new k({source:t});r.addInteraction(f);let i,s;const d=document.getElementById("type");function m(){i=new E({source:t,type:d.value}),r.addInteraction(i),s=new D({source:t}),r.addInteraction(s)}d.onchange=function(){r.removeInteraction(i),r.removeInteraction(s),m()},m(),Prism.highlightAll()}),(p,t)=>(v(),b(S,null,[e("h4",F,a(n(B)),1),z,e("pre",null,[e("code",N,a("  "+n(G).trim()),1)]),A,e("pre",null,[e("code",H,a("  "+n(T).trim()),1)]),q,e("pre",null,[e("code",J,a("  "+n(C).trim()),1)]),K,e("pre",null,[e("code",Q,a("  "+n(O).trim()),1)])],64))}},_e=h(R,[["__scopeId","data-v-ce7460b5"]]);export{_e as default};
