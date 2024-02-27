import{g,M as w,V as y}from"./Layer-3211d6ef.js";import{_ as h,i as _,o as v,c as b,b as e,t as a,g as n,F as S,j as I,p as x,k as V}from"./index-8e73cb60.js";import{T as M}from"./Tile-d932c51d.js";import{O as j}from"./OSM-39b8e613.js";import{V as L}from"./Vector-163f0152.js";import{V as P}from"./Vector-2de0a908.js";import{M as k}from"./Modify-16614c1f.js";import{D}from"./Draw-3837a0e3.js";import{S as E}from"./Snap-c3076181.js";import"./BaseTile-47530170.js";import"./TileProperty-f0a52f17.js";import"./TileLayer-d6ace1df.js";import"./Layer-8f64fa5e.js";import"./XYZ-2a4e8198.js";import"./TileImage-a70beb77.js";import"./UrlTile-7d5bd7ce.js";import"./featureloader-4f961e27.js";import"./Style-22e788f3.js";import"./VectorLayer-f045426f.js";import"./hitdetect-4f776f31.js";import"./vector-01534e8d.js";import"./Circle-60dfd31b.js";import"./GeometryCollection-03015b2a.js";import"./LineString-d3d6f49c.js";import"./MultiPolygon-f290964a.js";import"./MultiPoint-e6eff345.js";const B="Draw and Modify Features",G=`
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
`;const l=c=>(x("data-v-ce7460b5"),c=c(),V(),c),F={id:"title"},z=I('<div id="map" class="map" data-v-ce7460b5></div><form data-v-ce7460b5><label for="type" data-v-ce7460b5>Geometry type  </label><select id="type" data-v-ce7460b5><option value="Point" data-v-ce7460b5>Point</option><option value="LineString" data-v-ce7460b5>LineString</option><option value="Polygon" data-v-ce7460b5>Polygon</option><option value="Circle" data-v-ce7460b5>Circle</option></select></form><p data-v-ce7460b5>Example of using the ol/interaction/Draw interaction together with the ol/interaction/Modify interaction.</p><h5 class="source-heading" data-v-ce7460b5>html</h5>',4),N={class:"language-html"},A=l(()=>e("h5",{class:"source-heading"},"css",-1)),H={class:"language-css"},q=l(()=>e("h5",{class:"source-heading"},"js",-1)),J={class:"language-js"},K=l(()=>e("h5",{class:"source-heading"},"package.json",-1)),Q={class:"language-json"},R={__name:"index",setup(c){return _(()=>{const p=new M({source:new j}),t=new L,u=new P({source:t,style:{"fill-color":"rgba(255, 255, 255, 0.2)","stroke-color":"#ffcc33","stroke-width":2,"circle-radius":7,"circle-fill-color":"#ffcc33"}}),o=g("EPSG:3857").getExtent().slice();o[0]+=o[0],o[2]+=o[2];const r=new w({layers:[p,u],target:"map",view:new y({center:[-11e6,46e5],zoom:4,extent:o})}),f=new k({source:t});r.addInteraction(f);let i,s;const d=document.getElementById("type");function m(){i=new D({source:t,type:d.value}),r.addInteraction(i),s=new E({source:t}),r.addInteraction(s)}d.onchange=function(){r.removeInteraction(i),r.removeInteraction(s),m()},m(),Prism.highlightAll()}),(p,t)=>(v(),b(S,null,[e("h4",F,a(n(B)),1),z,e("pre",null,[e("code",N,a("  "+n(G).trim()),1)]),A,e("pre",null,[e("code",H,a("  "+n(T).trim()),1)]),q,e("pre",null,[e("code",J,a("  "+n(C).trim()),1)]),K,e("pre",null,[e("code",Q,a("  "+n(O).trim()),1)])],64))}},ve=h(R,[["__scopeId","data-v-ce7460b5"]]);export{ve as default};
