import{D as P,c as j,a as F}from"./Draw-3837a0e3.js";import{M as L,V as k,L as q}from"./Layer-3211d6ef.js";import{_ as D,i as N,o as E,c as T,b as e,t as a,g as n,F as X,j as O,p as R,k as Y}from"./index-8e73cb60.js";import{T as z}from"./Tile-d932c51d.js";import{O as U}from"./OSM-39b8e613.js";import{V as A}from"./Vector-163f0152.js";import{V as H}from"./Vector-2de0a908.js";import"./Circle-60dfd31b.js";import"./GeometryCollection-03015b2a.js";import"./LineString-d3d6f49c.js";import"./featureloader-4f961e27.js";import"./Style-22e788f3.js";import"./MultiPolygon-f290964a.js";import"./MultiPoint-e6eff345.js";import"./BaseTile-47530170.js";import"./TileProperty-f0a52f17.js";import"./TileLayer-d6ace1df.js";import"./Layer-8f64fa5e.js";import"./XYZ-2a4e8198.js";import"./TileImage-a70beb77.js";import"./UrlTile-7d5bd7ce.js";import"./VectorLayer-f045426f.js";import"./hitdetect-4f776f31.js";import"./vector-01534e8d.js";const G="Draw Shapes",J=`
  <div id="map" class="map"></div>
  <div class="row">
    <div class="col-auto">
      <span class="input-group">
        <label class="input-group-text" for="type">Shape type:</label>
        <select class="form-select" id="type">
          <option value="Circle">Circle</option>
          <option value="Square">Square</option>
          <option value="Box">Box</option>
          <option value="Star">Star</option>
          <option value="None">None</option>
        </select>
        <input class="form-control" type="button" value="Undo" id="undo">
      </span>
    </div>
  </div>

  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css">
`,K=`
  .map {
    width: 100%;
    height: 400px;
  }
`,Q=`
  import Draw, {
    createBox,
    createRegularPolygon,
  } from 'ol/interaction/Draw.js';
  import Map from 'ol/Map.js';
  import Polygon from 'ol/geom/Polygon.js';
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
    let value = typeSelect.value;
    if (value !== 'None') {
      let geometryFunction;
      if (value === 'Square') {
        value = 'Circle';
        geometryFunction = createRegularPolygon(4);
      } else if (value === 'Box') {
        value = 'Circle';
        geometryFunction = createBox();
      } else if (value === 'Star') {
        value = 'Circle';
        geometryFunction = function (coordinates, geometry) {
          const center = coordinates[0];
          const last = coordinates[coordinates.length - 1];
          const dx = center[0] - last[0];
          const dy = center[1] - last[1];
          const radius = Math.sqrt(dx * dx + dy * dy);
          const rotation = Math.atan2(dy, dx);
          const newCoordinates = [];
          const numPoints = 12;
          for (let i = 0; i < numPoints; ++i) {
            const angle = rotation + (i * 2 * Math.PI) / numPoints;
            const fraction = i % 2 === 0 ? 1 : 0.5;
            const offsetX = radius * fraction * Math.cos(angle);
            const offsetY = radius * fraction * Math.sin(angle);
            newCoordinates.push([center[0] + offsetX, center[1] + offsetY]);
          }
          newCoordinates.push(newCoordinates[0].slice());
          if (!geometry) {
            geometry = new Polygon([newCoordinates]);
          } else {
            geometry.setCoordinates([newCoordinates]);
          }
          return geometry;
        };
      }
      draw = new Draw({
        source: source,
        type: value,
        geometryFunction: geometryFunction,
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
`,W=`
  {
    "name": "draw-shapes",
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
`;const g=s=>(R("data-v-5bd04c74"),s=s(),Y(),s),Z={id:"title"},$=O('<div id="map" class="map" data-v-5bd04c74></div><div class="row" data-v-5bd04c74><div class="col-auto" data-v-5bd04c74><span class="input-group" data-v-5bd04c74><label class="input-group-text" for="type" data-v-5bd04c74>Shape type:</label><select class="form-select" id="type" data-v-5bd04c74><option value="Circle" data-v-5bd04c74>Circle</option><option value="Square" data-v-5bd04c74>Square</option><option value="Box" data-v-5bd04c74>Box</option><option value="Star" data-v-5bd04c74>Star</option><option value="None" data-v-5bd04c74>None</option></select><input class="form-control" type="button" value="Undo" id="undo" data-v-5bd04c74></span></div></div><p data-v-5bd04c74>This demonstrates the use of the geometryFunction option for the ol/interaction/Draw. Select a shape type from the dropdown above to start drawing. To activate freehand drawing, hold the Shift key. Square drawing is achieved by using type: &#39;Circle&#39; type with a geometryFunction that creates a 4-sided regular polygon instead of a circle. Box drawing uses type: &#39;Circle&#39; with a geometryFunction that creates a box-shaped polygon instead of a circle. Star drawing uses a custom geometry function that converts a circle into a star using the center and radius provided by the draw interaction.</p><h5 class="source-heading" data-v-5bd04c74>html</h5>',4),ee={class:"language-html"},te=g(()=>e("h5",{class:"source-heading"},"css",-1)),oe={class:"language-css"},ae=g(()=>e("h5",{class:"source-heading"},"js",-1)),ne={class:"language-js"},se=g(()=>e("h5",{class:"source-heading"},"package.json",-1)),re={class:"language-json"},ce={__name:"index",setup(s){return N(()=>{const h=new z({source:new U}),p=new A({wrapX:!1}),M=new H({source:p}),f=new L({layers:[h,M],target:"map",view:new k({center:[-11e6,46e5],zoom:4})}),y=document.getElementById("type");let r;function w(){let t=y.value;if(t!=="None"){let c;t==="Square"?(t="Circle",c=j(4)):t==="Box"?(t="Circle",c=F()):t==="Star"&&(t="Circle",c=function(u,i){const l=u[0],_=u[u.length-1],m=l[0]-_[0],v=l[1]-_[1],S=Math.sqrt(m*m+v*v),I=Math.atan2(v,m),o=[],b=12;for(let d=0;d<b;++d){const x=I+d*2*Math.PI/b,C=d%2===0?1:.5,B=S*C*Math.cos(x),V=S*C*Math.sin(x);o.push([l[0]+B,l[1]+V])}return o.push(o[0].slice()),i?i.setCoordinates([o]):i=new q([o]),i}),r=new P({source:p,type:t,geometryFunction:c}),f.addInteraction(r)}}y.onchange=function(){f.removeInteraction(r),w()},document.getElementById("undo").addEventListener("click",function(){r.removeLastPoint()}),w(),Prism.highlightAll()}),(h,p)=>(E(),T(X,null,[e("h4",Z,a(n(G)),1),$,e("pre",null,[e("code",ee,a("  "+n(J).trim()),1)]),te,e("pre",null,[e("code",oe,a("  "+n(K).trim()),1)]),ae,e("pre",null,[e("code",ne,a("  "+n(Q).trim()),1)]),se,e("pre",null,[e("code",re,a("  "+n(W).trim()),1)])],64))}},Le=D(ce,[["__scopeId","data-v-5bd04c74"]]);export{Le as default};
