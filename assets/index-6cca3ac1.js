import{g,M as w,V as y}from"./Layer-763025a3.js";import{_ as h,i as _,o as v,c as b,b as e,t as n,g as r,F as S,j as I,p as x,k as V}from"./index-87bb3bb9.js";import{T as M}from"./Tile-3c7ba04a.js";import{O as j}from"./OSM-c55a5667.js";import{V as L}from"./VectorLayer-5fefefe7.js";import{V as P}from"./Vector-6dfa3c6b.js";import{M as k,S as D}from"./Snap-9b449318.js";import{D as E}from"./Draw-8d037d12.js";import"./BaseTile-115b346f.js";import"./TileProperty-b49a7745.js";import"./TileLayer-fd6dc420.js";import"./Layer-79bf392c.js";import"./XYZ-191849cc.js";import"./TileImage-d65ff5bd.js";import"./UrlTile-ce5b3cbe.js";import"./featureloader-7313d5e8.js";import"./vector-31d95deb.js";import"./Circle-b8cdaae3.js";import"./GeometryCollection-7f871795.js";import"./LineString-a90d5a4b.js";import"./MultiPolygon-5da1c9b7.js";import"./MultiPoint-32d892b1.js";const B="Draw and Modify Features",G=`
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
`;const l=c=>(x("data-v-ce7460b5"),c=c(),V(),c),F={id:"title"},z=I('<div id="map" class="map" data-v-ce7460b5></div><form data-v-ce7460b5><label for="type" data-v-ce7460b5>Geometry type  </label><select id="type" data-v-ce7460b5><option value="Point" data-v-ce7460b5>Point</option><option value="LineString" data-v-ce7460b5>LineString</option><option value="Polygon" data-v-ce7460b5>Polygon</option><option value="Circle" data-v-ce7460b5>Circle</option></select></form><p data-v-ce7460b5>Example of using the ol/interaction/Draw interaction together with the ol/interaction/Modify interaction.</p><h5 class="source-heading" data-v-ce7460b5>html</h5>',4),N={class:"language-html"},A=l(()=>e("h5",{class:"source-heading"},"css",-1)),H={class:"language-css"},q=l(()=>e("h5",{class:"source-heading"},"js",-1)),J={class:"language-js"},K=l(()=>e("h5",{class:"source-heading"},"package.json",-1)),Q={class:"language-json"},R={__name:"index",setup(c){return _(()=>{const p=new M({source:new j}),t=new L,u=new P({source:t,style:{"fill-color":"rgba(255, 255, 255, 0.2)","stroke-color":"#ffcc33","stroke-width":2,"circle-radius":7,"circle-fill-color":"#ffcc33"}}),o=g("EPSG:3857").getExtent().slice();o[0]+=o[0],o[2]+=o[2];const a=new w({layers:[p,u],target:"map",view:new y({center:[-11e6,46e5],zoom:4,extent:o})}),f=new k({source:t});a.addInteraction(f);let i,s;const d=document.getElementById("type");function m(){i=new E({source:t,type:d.value}),a.addInteraction(i),s=new D({source:t}),a.addInteraction(s)}d.onchange=function(){a.removeInteraction(i),a.removeInteraction(s),m()},m(),Prism.highlightAll()}),(p,t)=>(v(),b(S,null,[e("h4",F,n(r(B)),1),z,e("pre",null,[e("code",N,n("  "+r(G).trim()),1)]),A,e("pre",null,[e("code",H,n("  "+r(T).trim()),1)]),q,e("pre",null,[e("code",J,n("  "+r(C).trim()),1)]),K,e("pre",null,[e("code",Q,n("  "+r(O).trim()),1)])],64))}},we=h(R,[["__scopeId","data-v-ce7460b5"]]);export{we as default};
