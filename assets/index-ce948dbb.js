import{G as D}from"./GeoJSON-690a4bb4.js";import{a3 as f,aN as V,_ as x,bz as M,a6 as A,aI as E,Y as W,K as C,bZ as z,aS as q,aO as G,a9 as H,aW as J,aP as $,aV as K,as as X,L as Y,M as Z,V as Q,f as U,X as ee}from"./Layer-3b715193.js";import{R as te}from"./featureloader-a90a5108.js";import{a as F,V as ae}from"./Vector-a4e726e1.js";import{c as se,d as _,e as P,f as ne,h as N,E as re,i as ie,j as oe,k as O,l as le,m as de}from"./ShaderBuilder-d8651322.js";import{c as ce,W as R,a as he,g as pe}from"./worldUtil-7fa77630.js";import{p as ue}from"./styleparser-870cae1d.js";import{_ as me,i as fe,o as ge,c as ye,b as g,t as S,g as L,F as _e,j as ve,p as be,k as Se}from"./index-92068577.js";import{T as Le}from"./Tile-70490af9.js";import{O as Ee}from"./OSM-f0f00429.js";import{M as Te}from"./Modify-1b63adae.js";import{D as Ce}from"./Draw-ef2bdca3.js";import{S as Fe}from"./Snap-db5089e1.js";import"./JSONFeature-5a5c1876.js";import"./Feature-627996e0.js";import"./MultiPolygon-d7736349.js";import"./LineString-eed53b5a.js";import"./length-c6ba5b73.js";import"./MultiPoint-74fca651.js";import"./TileProperty-e33ea24b.js";import"./BaseTile-8ab94efc.js";import"./TileLayer-7c629c64.js";import"./Layer-37ea9c2e.js";import"./XYZ-80208d03.js";import"./TileImage-1df58d67.js";import"./UrlTile-dc2c26ed.js";import"./Vector-6fff18f8.js";import"./VectorLayer-ef6da1be.js";import"./hitdetect-486e5612.js";import"./vector-4e067f94.js";import"./Circle-afc346a3.js";const we="Draw lines rendered with WebGL",Re=`
  <div id="map" class="map"></div>
  <form>
    <div class="form-group">Cap type &nbsp;
      <label class="radio-inline">
        <input type="radio" class="uniform" name="capType" value="butt" checked/> <code>butt</code>&nbsp;
      </label>
      <label class="radio-inline">
        <input type="radio" class="uniform" name="capType" value="round"/> <code>round</code>&nbsp;
      </label>
      <label class="radio-inline">
        <input type="radio" class="uniform" name="capType" value="square"/> <code>square</code>&nbsp;
      </label>
    </div>
    <div class="form-group">Join type &nbsp;
      <label class="radio-inline">
        <input type="radio" class="uniform" name="joinType" value="miter" checked/> <code>miter</code>&nbsp;
      </label>
      <label class="radio-inline">
        <input type="radio" class="uniform" name="joinType" value="round"/> <code>round</code>&nbsp;
      </label>
      <label class="radio-inline">
        <input type="radio" class="uniform" name="joinType" value="bevel"/> <code>bevel</code>&nbsp;
      </label>
    </div>
    <div class="form-group">
      <label>
        Line width (pixels)
        <input type="range" class="uniform" name="width" min="1" max="40" value="8">
      </label>
      <span id="value-width">12</span>
    </div>
    <div class="form-group">
      <label>
        Miter limit (ratio)
        <input type="range" class="uniform" name="miterLimit" min="1" max="20" value="10" step="0.1">
      </label>
      <span id="value-miterLimit">10</span>
    </div>
    <div class="form-group">
      <label>
        Line offset (pixels)
        <input type="range" class="uniform" name="offset" min="-40" max="40" value="0">
      </label>
      <span id="value-offset">0</span>
    </div>
    <div class="form-group">
      <label>
        <input type="checkbox" class="rebuild" id="dashEnable">
        Enable dashes
      </label>
      </div>
    <div class="form-group" style="margin-left: 18px">
      <label>
        Line dash pattern (px)
        <input type="number" class="uniform" name="dashLength1" min="0" max="100" value="25">
        <input type="number" class="uniform" name="dashLength2" min="0" max="100" value="15">
        <input type="number" class="uniform" name="dashLength3" min="0" max="100" value="15">
        <input type="number" class="uniform" name="dashLength4" min="0" max="100" value="15">
      </label>
    </div>
    <div class="form-group" style="margin-left: 18px">
      <label>
        Line dash offset (pixels)
        <input type="range" class="uniform" name="dashOffset" min="-200" max="200" value="0">
      </label>
      <span id="value-dashOffset">0</span>
    </div>
    <div class="form-group">
      <label>
        <input type="checkbox" class="rebuild" id="patternEnable">
        Enable image pattern
      </label>
    </div>
    <div class="form-group" style="margin-left: 18px">
      <label>
        Pattern spacing (pixels)
        <input type="range" class="uniform" name="patternSpacing" min="0" max="64" value="0">
      </label>
      <span id="value-patternSpacing">0</span>
    </div>
  </form>
`,Be=`
  .map {
    width: 100%;
    height: 400px;
  }
  .form-group label {
    display: flex;
    align-items: center;
    gap: 6px;
    height: 30px;
  }
  .form-group {
    display: flex;
    align-items: center;
    gap: 6px;
  }
`,xe=`
  import GeoJSON from 'ol/format/GeoJSON.js';
  import Layer from 'ol/layer/Layer.js';
  import Map from 'ol/Map.js';
  import View from 'ol/View.js';
  import WebGLVectorLayerRenderer from 'ol/renderer/webgl/VectorLayer.js';
  import {Draw, Modify, Snap} from 'ol/interaction.js';
  import {OSM, Vector as VectorSource} from 'ol/source.js';
  import {Tile as TileLayer} from 'ol/layer.js';
  import {fromLonLat} from 'ol/proj.js';

  /**
   * @type {import('ol/style/webgl.js').WebGLStyle}
   */
  let style;

  class WebGLLayer extends Layer {
    createRenderer() {
      return new WebGLVectorLayerRenderer(this, {
        className: this.getClassName(),
        style,
      });
    }
  }

  const source = new VectorSource({
    url: 'data/geojson/switzerland.geojson',
    format: new GeoJSON(),
  });

  /**
   * @param {boolean} dash Include line dash
   * @param {boolean} pattern Include image pattern
   * @return {import('ol/style/webgl.js').WebGLStyle} Generated style
   */
  const getStyle = (dash, pattern) => {
    let newStyle = {
      variables: style
        ? style.variables
        : {
            width: 12,
            offset: 0,
            capType: 'butt',
            joinType: 'miter',
            miterLimit: 10, // ratio
            dashLength1: 25,
            dashLength2: 15,
            dashLength3: 15,
            dashLength4: 15,
            dashOffset: 0,
            patternSpacing: 0,
          },
      'stroke-width': ['var', 'width'],
      'stroke-color': 'rgba(24,86,34,0.7)',
      'stroke-offset': ['var', 'offset'],
      'stroke-miter-limit': ['var', 'miterLimit'],
      'stroke-line-cap': ['var', 'capType'],
      'stroke-line-join': ['var', 'joinType'],
    };
    if (dash) {
      newStyle = {
        ...newStyle,
        'stroke-line-dash': [
          ['var', 'dashLength1'],
          ['var', 'dashLength2'],
          ['var', 'dashLength3'],
          ['var', 'dashLength4'],
        ],
        'stroke-line-dash-offset': ['var', 'dashOffset'],
      };
    }
    if (pattern) {
      delete newStyle['stroke-color'];
      newStyle = {
        ...newStyle,
        'stroke-pattern-src': 'data/dot.svg',
        'stroke-pattern-spacing': ['var', 'patternSpacing'],
      };
    }
    return newStyle;
  };

  style = getStyle(false, false);

  let vector = new WebGLLayer({
    source,
  });

  const map = new Map({
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
      vector,
    ],
    target: 'map',
    view: new View({
      center: fromLonLat([8.43, 46.82]),
      zoom: 7,
    }),
  });

  const rebuildStyle = () => {
    const dash = document.getElementById('dashEnable').checked;
    const pattern = document.getElementById('patternEnable').checked;
    style = getStyle(dash, pattern);
    map.removeLayer(vector);
    vector = new WebGLLayer({
      source,
    });
    map.addLayer(vector);
  };

  const modify = new Modify({source: source});
  map.addInteraction(modify);

  let draw, snap; // global so we can remove them later

  function addInteractions() {
    draw = new Draw({
      source: source,
      type: 'LineString',
    });
    map.addInteraction(draw);
    snap = new Snap({source: source});
    map.addInteraction(snap);
  }

  addInteractions();

  const inputListener = (event) => {
    const variables = style.variables;
    const variableName = event.target.name;
    if (event.target.type === 'radio') {
      variables[variableName] = event.target.value;
    } else {
      variables[variableName] = parseFloat(event.target.value);
    }
    const valueSpan = document.getElementById(\`value-\${variableName}\`);
    if (valueSpan) {
      valueSpan.textContent = variables[variableName];
    }
    map.render();
  };
  document
    .querySelectorAll('input.uniform')
    .forEach((input) => input.addEventListener('input', inputListener));
  document
    .querySelectorAll('input.rebuild')
    .forEach((input) => input.addEventListener('input', rebuildStyle));
`,Ae=`
  {
    "name": "webgl-draw-line",
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
`;class ke{constructor(){this.globalCounter_=0,this.refToFeature_=new Map,this.uidToRef_=new Map,this.freeGlobalRef_=[],this.polygonBatch={entries:{},geometriesCount:0,verticesCount:0,ringsCount:0},this.pointBatch={entries:{},geometriesCount:0},this.lineStringBatch={entries:{},geometriesCount:0,verticesCount:0}}addFeatures(e,t){for(let s=0;s<e.length;s++)this.addFeature(e[s],t)}addFeature(e,t){let s=e.getGeometry();s&&(t&&(s=s.clone(),s.applyTransform(t)),this.addGeometry_(s,e))}clearFeatureEntryInPointBatch_(e){const t=this.pointBatch.entries[f(e)];if(t)return this.pointBatch.geometriesCount-=t.flatCoordss.length,delete this.pointBatch.entries[f(e)],t}clearFeatureEntryInLineStringBatch_(e){const t=this.lineStringBatch.entries[f(e)];if(t)return this.lineStringBatch.verticesCount-=t.verticesCount,this.lineStringBatch.geometriesCount-=t.flatCoordss.length,delete this.lineStringBatch.entries[f(e)],t}clearFeatureEntryInPolygonBatch_(e){const t=this.polygonBatch.entries[f(e)];if(t)return this.polygonBatch.verticesCount-=t.verticesCount,this.polygonBatch.ringsCount-=t.ringsCount,this.polygonBatch.geometriesCount-=t.flatCoordss.length,delete this.polygonBatch.entries[f(e)],t}addGeometry_(e,t){const s=e.getType();switch(s){case"GeometryCollection":{const a=e.getGeometriesArray();for(const n of a)this.addGeometry_(n,t);break}case"MultiPolygon":{const a=e;this.addCoordinates_(s,a.getFlatCoordinates(),a.getEndss(),t,f(t),a.getStride());break}case"MultiLineString":{const a=e;this.addCoordinates_(s,a.getFlatCoordinates(),a.getEnds(),t,f(t),a.getStride());break}case"MultiPoint":{const a=e;this.addCoordinates_(s,a.getFlatCoordinates(),null,t,f(t),a.getStride());break}case"Polygon":{const a=e;this.addCoordinates_(s,a.getFlatCoordinates(),a.getEnds(),t,f(t),a.getStride());break}case"Point":{const a=e;this.addCoordinates_(s,a.getFlatCoordinates(),null,t,f(t),a.getStride());break}case"LineString":case"LinearRing":{const a=e;this.addCoordinates_(s,a.getFlatCoordinates(),null,t,f(t),a.getStride());break}}}addCoordinates_(e,t,s,a,n,r){let l;switch(e){case"MultiPolygon":{const i=s;for(let o=0,h=i.length;o<h;o++){let d=i[o];const u=o>0?i[o-1]:null,p=u?u[u.length-1]:0,y=d[d.length-1];d=p>0?d.map(m=>m-p):d,this.addCoordinates_("Polygon",t.slice(p,y),d,a,n,r)}break}case"MultiLineString":{const i=s;for(let o=0,h=i.length;o<h;o++){const d=o>0?i[o-1]:0;this.addCoordinates_("LineString",t.slice(d,i[o]),null,a,n,r)}break}case"MultiPoint":for(let i=0,o=t.length;i<o;i+=r)this.addCoordinates_("Point",t.slice(i,i+2),null,a,n,null);break;case"Polygon":{const i=s;if(a instanceof te){const d=V(t,i);if(d.length>1){this.addCoordinates_("MultiPolygon",t,d,a,n,r);return}}this.polygonBatch.entries[n]||(this.polygonBatch.entries[n]=this.addRefToEntry_(n,{feature:a,flatCoordss:[],verticesCount:0,ringsCount:0,ringsVerticesCounts:[]})),l=t.length/r;const o=s.length,h=s.map((d,u,p)=>u>0?(d-p[u-1])/r:d/r);this.polygonBatch.verticesCount+=l,this.polygonBatch.ringsCount+=o,this.polygonBatch.geometriesCount++,this.polygonBatch.entries[n].flatCoordss.push(j(t,r)),this.polygonBatch.entries[n].ringsVerticesCounts.push(h),this.polygonBatch.entries[n].verticesCount+=l,this.polygonBatch.entries[n].ringsCount+=o;for(let d=0,u=i.length;d<u;d++){const p=d>0?i[d-1]:0;this.addCoordinates_("LinearRing",t.slice(p,i[d]),null,a,n,r)}break}case"Point":this.pointBatch.entries[n]||(this.pointBatch.entries[n]=this.addRefToEntry_(n,{feature:a,flatCoordss:[]})),this.pointBatch.geometriesCount++,this.pointBatch.entries[n].flatCoordss.push(t);break;case"LineString":case"LinearRing":this.lineStringBatch.entries[n]||(this.lineStringBatch.entries[n]=this.addRefToEntry_(n,{feature:a,flatCoordss:[],verticesCount:0})),l=t.length/r,this.lineStringBatch.verticesCount+=l,this.lineStringBatch.geometriesCount++,this.lineStringBatch.entries[n].flatCoordss.push(j(t,r)),this.lineStringBatch.entries[n].verticesCount+=l;break}}addRefToEntry_(e,t){const s=this.uidToRef_.get(e),a=s||this.freeGlobalRef_.pop()||++this.globalCounter_;return t.ref=a,s||(this.refToFeature_.set(a,t.feature),this.uidToRef_.set(e,a)),t}returnRef_(e,t){if(!e)throw new Error("This feature has no ref: "+t);this.refToFeature_.delete(e),this.uidToRef_.delete(t),this.freeGlobalRef_.push(e)}changeFeature(e){this.removeFeature(e);const t=e.getGeometry();t&&this.addGeometry_(t,e)}removeFeature(e){let t;t=this.clearFeatureEntryInPointBatch_(e)||t,t=this.clearFeatureEntryInPolygonBatch_(e)||t,t=this.clearFeatureEntryInLineStringBatch_(e)||t,t&&this.returnRef_(t.ref,f(t.feature))}clear(){this.polygonBatch.entries={},this.polygonBatch.geometriesCount=0,this.polygonBatch.verticesCount=0,this.polygonBatch.ringsCount=0,this.lineStringBatch.entries={},this.lineStringBatch.geometriesCount=0,this.lineStringBatch.verticesCount=0,this.pointBatch.entries={},this.pointBatch.geometriesCount=0,this.globalCounter_=0,this.freeGlobalRef_=[],this.refToFeature_.clear(),this.uidToRef_.clear()}getFeatureFromRef(e){return this.refToFeature_.get(e)}}function j(c,e){return e===2?c:c.filter((t,s)=>s%e<2)}const Ie=ke;function k(c,e,t,s){let a=0;for(const n in e){const r=e[n],l=r.callback.call(t,t.feature);c[s+a++]=l[0]??l,!(!r.size||r.size===1)&&(c[s+a++]=l[1],!(r.size<3)&&(c[s+a++]=l[2],!(r.size<4)&&(c[s+a++]=l[3])))}return a}function w(c){return Object.keys(c).reduce((e,t)=>e+(c[t].size||1),0)}function Ge(c,e,t,s){const a=(2+w(t))*c.geometriesCount;(!e||e.length!==a)&&(e=new Float32Array(a));const n=[];let r=0;for(const l in c.entries){const i=c.entries[l];for(let o=0,h=i.flatCoordss.length;o<h;o++)n[0]=i.flatCoordss[o][0],n[1]=i.flatCoordss[o][1],x(s,n),e[r++]=n[0],e[r++]=n[1],r+=k(e,t,i,r)}return e}function Pe(c,e,t,s){const a=2*c.verticesCount+(1+w(t))*c.geometriesCount;(!e||e.length!==a)&&(e=new Float32Array(a));const n=[];let r=0;for(const l in c.entries){const i=c.entries[l];for(let o=0,h=i.flatCoordss.length;o<h;o++){n.length=i.flatCoordss[o].length,M(i.flatCoordss[o],0,n.length,2,s,n),r+=k(e,t,i,r),e[r++]=n.length/2;for(let d=0,u=n.length;d<u;d+=2)e[r++]=n[d],e[r++]=n[d+1]}}return e}function Ne(c,e,t,s){const a=2*c.verticesCount+(1+w(t))*c.geometriesCount+c.ringsCount;(!e||e.length!==a)&&(e=new Float32Array(a));const n=[];let r=0;for(const l in c.entries){const i=c.entries[l];for(let o=0,h=i.flatCoordss.length;o<h;o++){n.length=i.flatCoordss[o].length,M(i.flatCoordss[o],0,n.length,2,s,n),r+=k(e,t,i,r),e[r++]=i.ringsVerticesCounts[o].length;for(let d=0,u=i.ringsVerticesCounts[o].length;d<u;d++)e[r++]=i.ringsVerticesCounts[o][d];for(let d=0,u=n.length;d<u;d+=2)e[r++]=n[d],e[r++]=n[d+1]}}return e}const Oe=[],B=ce();let je=0;const v={POSITION:"a_position",INDEX:"a_index",SEGMENT_START:"a_segmentStart",SEGMENT_END:"a_segmentEnd",PARAMETERS:"a_parameters",JOIN_ANGLES:"a_joinAngles",DISTANCE:"a_distance"};class Me{constructor(e,t,s){this.helper_=t,this.hitDetectionEnabled_=s;let a=e;if(!("builder"in e)){const i=ue(e);a={builder:i.builder,attributes:i.attributes,uniforms:i.uniforms}}this.hasFill_=!!a.builder.getFillVertexShader(),this.hasFill_&&(this.fillVertexShader_=a.builder.getFillVertexShader(),this.fillFragmentShader_=a.builder.getFillFragmentShader(),this.fillProgram_=this.helper_.getProgram(this.fillFragmentShader_,this.fillVertexShader_)),this.hasStroke_=!!a.builder.getStrokeVertexShader(),this.hasStroke_&&(this.strokeVertexShader_=a.builder.getStrokeVertexShader(),this.strokeFragmentShader_=a.builder.getStrokeFragmentShader(),this.strokeProgram_=this.helper_.getProgram(this.strokeFragmentShader_,this.strokeVertexShader_)),this.hasSymbol_=!!a.builder.getSymbolVertexShader(),this.hasSymbol_&&(this.symbolVertexShader_=a.builder.getSymbolVertexShader(),this.symbolFragmentShader_=a.builder.getSymbolFragmentShader(),this.symbolProgram_=this.helper_.getProgram(this.symbolFragmentShader_,this.symbolVertexShader_));const r=this.hitDetectionEnabled_?{hitColor:{callback(){return se(this.ref,Oe)},size:4}}:{};this.customAttributes_=Object.assign({},r,a.attributes),this.uniforms_=a.uniforms;const l=Object.entries(this.customAttributes_).map(([i,o])=>({name:`a_prop_${i}`,size:o.size||1,type:_.FLOAT}));this.polygonAttributesDesc_=[{name:v.POSITION,size:2,type:_.FLOAT},...l],this.lineStringAttributesDesc_=[{name:v.SEGMENT_START,size:2,type:_.FLOAT},{name:v.SEGMENT_END,size:2,type:_.FLOAT},{name:v.JOIN_ANGLES,size:2,type:_.FLOAT},{name:v.DISTANCE,size:1,type:_.FLOAT},{name:v.PARAMETERS,size:1,type:_.FLOAT},...l],this.pointAttributesDesc_=[{name:v.POSITION,size:2,type:_.FLOAT},{name:v.INDEX,size:1,type:_.FLOAT},...l],a.uniforms&&this.helper_.addUniforms(a.uniforms)}async generateBuffers(e,t){const s=this.generateRenderInstructions_(e,t),[a,n,r]=await Promise.all([this.generateBuffersForType_(s.polygonInstructions,"Polygon",t),this.generateBuffersForType_(s.lineStringInstructions,"LineString",t),this.generateBuffersForType_(s.pointInstructions,"Point",t)]),l=A(E(),t);return{polygonBuffers:a,lineStringBuffers:n,pointBuffers:r,invertVerticesTransform:l}}generateRenderInstructions_(e,t){const s=this.hasFill_?Ne(e.polygonBatch,new Float32Array(0),this.customAttributes_,t):null,a=this.hasStroke_?Pe(e.lineStringBatch,new Float32Array(0),this.customAttributes_,t):null,n=this.hasSymbol_?Ge(e.pointBatch,new Float32Array(0),this.customAttributes_,t):null;return{polygonInstructions:s,lineStringInstructions:a,pointInstructions:n}}generateBuffersForType_(e,t,s){if(e===null)return null;const a=je++;let n;switch(t){case"Polygon":n=R.GENERATE_POLYGON_BUFFERS;break;case"LineString":n=R.GENERATE_LINE_STRING_BUFFERS;break;case"Point":n=R.GENERATE_POINT_BUFFERS;break}const r={id:a,type:n,renderInstructions:e.buffer,renderInstructionsTransform:s,customAttributesSize:w(this.customAttributes_)};return B.postMessage(r,[e.buffer]),e=null,new Promise(l=>{const i=o=>{const h=o.data;if(h.id!==a||(B.removeEventListener("message",i),!this.helper_.getGL()))return;const d=new P(ne,N).fromArrayBuffer(h.vertexBuffer),u=new P(re,N).fromArrayBuffer(h.indexBuffer);this.helper_.flushBufferData(d),this.helper_.flushBufferData(u),l([u,d])};B.addEventListener("message",i)})}render(e,t,s){this.hasFill_&&this.renderInternal_(e.polygonBuffers[0],e.polygonBuffers[1],this.fillProgram_,this.polygonAttributesDesc_,t,s),this.hasStroke_&&this.renderInternal_(e.lineStringBuffers[0],e.lineStringBuffers[1],this.strokeProgram_,this.lineStringAttributesDesc_,t,s),this.hasSymbol_&&this.renderInternal_(e.pointBuffers[0],e.pointBuffers[1],this.symbolProgram_,this.pointAttributesDesc_,t,s)}renderInternal_(e,t,s,a,n,r){const l=e.getSize();l!==0&&(this.helper_.useProgram(s,n),this.helper_.bindBuffer(t),this.helper_.bindBuffer(e),this.helper_.enableAttributes(a),r(),this.helper_.drawElements(0,l))}}const De=Me,b={...de,RENDER_EXTENT:"u_renderExtent",PATTERN_ORIGIN:"u_patternOrigin",GLOBAL_ALPHA:"u_globalAlpha"};class Ve extends ie{constructor(e,t){const s={[b.RENDER_EXTENT]:[0,0,0,0],[b.PATTERN_ORIGIN]:[0,0],[b.GLOBAL_ALPHA]:1};super(e,{uniforms:s,postProcesses:t.postProcesses}),this.hitDetectionEnabled_=!t.disableHitDetection,this.hitRenderTarget_,this.sourceRevision_=-1,this.previousExtent_=W(),this.currentTransform_=E(),this.tmpCoords_=[0,0],this.tmpTransform_=E(),this.tmpMat4_=oe(),this.currentFrameStateTransform_=E(),this.styles_=[],this.styleRenderers_=[],this.buffers_=[],this.applyOptions_(t),this.batch_=new Ie,this.initialFeaturesAdded_=!1,this.sourceListenKeys_=null}addInitialFeatures_(e){const t=this.getLayer().getSource();let s;this.batch_.addFeatures(t.getFeatures(),s),this.sourceListenKeys_=[C(t,F.ADDFEATURE,this.handleSourceFeatureAdded_.bind(this,s),this),C(t,F.CHANGEFEATURE,this.handleSourceFeatureChanged_,this),C(t,F.REMOVEFEATURE,this.handleSourceFeatureDelete_,this),C(t,F.CLEAR,this.handleSourceFeatureClear_,this)]}applyOptions_(e){this.styles_=Array.isArray(e.style)?e.style:[e.style]}createRenderers_(){this.buffers_=[],this.styleRenderers_=this.styles_.map(e=>new De(e,this.helper,this.hitDetectionEnabled_))}reset(e){this.applyOptions_(e),this.helper&&this.createRenderers_(),super.reset(e)}afterHelperCreated(){this.createRenderers_(),this.hitDetectionEnabled_&&(this.hitRenderTarget_=new he(this.helper))}handleSourceFeatureAdded_(e,t){const s=t.feature;this.batch_.addFeature(s,e)}handleSourceFeatureChanged_(e){const t=e.feature;this.batch_.changeFeature(t)}handleSourceFeatureDelete_(e){const t=e.feature;this.batch_.removeFeature(t)}handleSourceFeatureClear_(){this.batch_.clear()}applyUniforms_(e){z(this.tmpTransform_,this.currentFrameStateTransform_),q(this.tmpTransform_,e),this.helper.setUniformMatrixValue(b.PROJECTION_MATRIX,O(this.tmpMat4_,this.tmpTransform_)),A(this.tmpTransform_,this.tmpTransform_),this.helper.setUniformMatrixValue(b.SCREEN_TO_WORLD_MATRIX,O(this.tmpMat4_,this.tmpTransform_)),this.tmpCoords_[0]=0,this.tmpCoords_[1]=0,A(this.tmpTransform_,e),x(this.tmpTransform_,this.tmpCoords_),this.helper.setUniformFloatVec2(b.PATTERN_ORIGIN,this.tmpCoords_)}renderFrame(e){const t=this.helper.getGL();this.preRender(t,e);const[s,a,n]=pe(e,this.getLayer());this.helper.prepareDraw(e),this.renderWorlds(e,!1,s,a,n),this.helper.finalizeDraw(e);const r=this.helper.getCanvas(),i=e.layerStatesArray[e.layerIndex].opacity;return i!==parseFloat(r.style.opacity)&&(r.style.opacity=String(i)),this.hitDetectionEnabled_&&(this.renderWorlds(e,!0,s,a,n),this.hitRenderTarget_.clearCachedData()),this.postRender(t,e),r}prepareFrameInternal(e){this.initialFeaturesAdded_||(this.addInitialFeatures_(e),this.initialFeaturesAdded_=!0);const t=this.getLayer(),s=t.getSource(),a=e.viewState,n=!e.viewHints[G.ANIMATING]&&!e.viewHints[G.INTERACTING],r=!H(this.previousExtent_,e.extent),l=this.sourceRevision_<s.getRevision();if(l&&(this.sourceRevision_=s.getRevision()),n&&(r||l)){const i=a.projection,o=a.resolution,h=t instanceof J?t.getRenderBuffer():0,d=$(e.extent,h*o);s.loadFeatures(d,o,i),this.ready=!1;const u=this.helper.makeProjectionTransform(e,E()),p=this.styleRenderers_.map((y,m)=>y.generateBuffers(this.batch_,u).then(T=>{this.buffers_[m]=T}));Promise.all(p).then(()=>{this.ready=!0,this.getLayer().changed()}),this.previousExtent_=e.extent.slice()}return!0}renderWorlds(e,t,s,a,n){let r=s;t&&(this.hitRenderTarget_.setSize([Math.floor(e.size[0]/2),Math.floor(e.size[1]/2)]),this.helper.prepareDrawToRenderTarget(e,this.hitRenderTarget_,!0)),this.currentFrameStateTransform_=this.helper.makeProjectionTransform(e,this.currentFrameStateTransform_);do{for(let l=0,i=this.styleRenderers_.length;l<i;l++){const o=this.styleRenderers_[l],h=this.buffers_[l];h&&o.render(h,e,()=>{this.applyUniforms_(h.invertVerticesTransform),this.helper.applyHitDetectionUniform(t)})}K(this.currentFrameStateTransform_,n,0)}while(++r<a)}forEachFeatureAtCoordinate(e,t,s,a,n){if(X(this.hitDetectionEnabled_,"`forEachFeatureAtCoordinate` cannot be used on a WebGL layer if the hit detection logic has been disabled using the `disableHitDetection: true` option."),!this.styleRenderers_.length||!this.hitDetectionEnabled_)return;const r=x(t.coordinateToPixelTransform,e.slice()),l=this.hitRenderTarget_.readPixel(r[0]/2,r[1]/2),i=[l[0]/255,l[1]/255,l[2]/255,l[3]/255],o=le(i),h=this.batch_.getFeatureFromRef(o);if(h)return a(h,this.getLayer(),null)}disposeInternal(){this.sourceListenKeys_&&(this.sourceListenKeys_.forEach(function(e){Y(e)}),this.sourceListenKeys_=null),super.disposeInternal()}}const We=Ve;const I=c=>(be("data-v-77d9f0a5"),c=c(),Se(),c),ze={id:"title"},qe=ve('<div id="map" class="map" data-v-77d9f0a5></div><form data-v-77d9f0a5><div class="form-group" data-v-77d9f0a5>Cap type   <label class="radio-inline" data-v-77d9f0a5><input type="radio" class="uniform" name="capType" value="butt" checked data-v-77d9f0a5> <code data-v-77d9f0a5>butt</code>  </label><label class="radio-inline" data-v-77d9f0a5><input type="radio" class="uniform" name="capType" value="round" data-v-77d9f0a5> <code data-v-77d9f0a5>round</code>  </label><label class="radio-inline" data-v-77d9f0a5><input type="radio" class="uniform" name="capType" value="square" data-v-77d9f0a5> <code data-v-77d9f0a5>square</code>  </label></div><div class="form-group" data-v-77d9f0a5>Join type   <label class="radio-inline" data-v-77d9f0a5><input type="radio" class="uniform" name="joinType" value="miter" checked data-v-77d9f0a5> <code data-v-77d9f0a5>miter</code>  </label><label class="radio-inline" data-v-77d9f0a5><input type="radio" class="uniform" name="joinType" value="round" data-v-77d9f0a5> <code data-v-77d9f0a5>round</code>  </label><label class="radio-inline" data-v-77d9f0a5><input type="radio" class="uniform" name="joinType" value="bevel" data-v-77d9f0a5> <code data-v-77d9f0a5>bevel</code>  </label></div><div class="form-group" data-v-77d9f0a5><label data-v-77d9f0a5> Line width (pixels) <input type="range" class="uniform" name="width" min="1" max="40" value="8" data-v-77d9f0a5></label><span id="value-width" data-v-77d9f0a5>12</span></div><div class="form-group" data-v-77d9f0a5><label data-v-77d9f0a5> Miter limit (ratio) <input type="range" class="uniform" name="miterLimit" min="1" max="20" value="10" step="0.1" data-v-77d9f0a5></label><span id="value-miterLimit" data-v-77d9f0a5>10</span></div><div class="form-group" data-v-77d9f0a5><label data-v-77d9f0a5> Line offset (pixels) <input type="range" class="uniform" name="offset" min="-40" max="40" value="0" data-v-77d9f0a5></label><span id="value-offset" data-v-77d9f0a5>0</span></div><div class="form-group" data-v-77d9f0a5><label data-v-77d9f0a5><input type="checkbox" class="rebuild" id="dashEnable" data-v-77d9f0a5> Enable dashes </label></div><div class="form-group" style="margin-left:18px;" data-v-77d9f0a5><label data-v-77d9f0a5> Line dash pattern (px) <input type="number" class="uniform" name="dashLength1" min="0" max="100" value="25" data-v-77d9f0a5><input type="number" class="uniform" name="dashLength2" min="0" max="100" value="15" data-v-77d9f0a5><input type="number" class="uniform" name="dashLength3" min="0" max="100" value="15" data-v-77d9f0a5><input type="number" class="uniform" name="dashLength4" min="0" max="100" value="15" data-v-77d9f0a5></label></div><div class="form-group" style="margin-left:18px;" data-v-77d9f0a5><label data-v-77d9f0a5> Line dash offset (pixels) <input type="range" class="uniform" name="dashOffset" min="-200" max="200" value="0" data-v-77d9f0a5></label><span id="value-dashOffset" data-v-77d9f0a5>0</span></div><div class="form-group" data-v-77d9f0a5><label data-v-77d9f0a5><input type="checkbox" class="rebuild" id="patternEnable" data-v-77d9f0a5> Enable image pattern </label></div><div class="form-group" style="margin-left:18px;" data-v-77d9f0a5><label data-v-77d9f0a5> Pattern spacing (pixels) <input type="range" class="uniform" name="patternSpacing" min="0" max="64" value="0" data-v-77d9f0a5></label><span id="value-patternSpacing" data-v-77d9f0a5>0</span></div></form><p data-v-77d9f0a5>This example lets you tweak the stroke styling options dynamically to see how they affect line rendering. The line string showing by default can be modified and new ones can be drawn by single-clicking on the map.</p><h5 class="source-heading" data-v-77d9f0a5>html</h5>',4),He={class:"language-html"},Je=I(()=>g("h5",{class:"source-heading"},"css",-1)),$e={class:"language-css"},Ke=I(()=>g("h5",{class:"source-heading"},"js",-1)),Xe={class:"language-js"},Ye=I(()=>g("h5",{class:"source-heading"},"package.json",-1)),Ze={class:"language-json"},Qe={__name:"index",setup(c){return fe(()=>{let e;class t extends ee{createRenderer(){return new We(this,{className:this.getClassName(),style:e})}}const s=new ae({url:"data/geojson/switzerland.geojson",format:new D}),a=(p,y)=>{let m={variables:e?e.variables:{width:12,offset:0,capType:"butt",joinType:"miter",miterLimit:10,dashLength1:25,dashLength2:15,dashLength3:15,dashLength4:15,dashOffset:0,patternSpacing:0},"stroke-width":["var","width"],"stroke-color":"rgba(24,86,34,0.7)","stroke-offset":["var","offset"],"stroke-miter-limit":["var","miterLimit"],"stroke-line-cap":["var","capType"],"stroke-line-join":["var","joinType"]};return p&&(m={...m,"stroke-line-dash":[["var","dashLength1"],["var","dashLength2"],["var","dashLength3"],["var","dashLength4"]],"stroke-line-dash-offset":["var","dashOffset"]}),y&&(delete m["stroke-color"],m={...m,"stroke-pattern-src":"data/dot.svg","stroke-pattern-spacing":["var","patternSpacing"]}),m};e=a(!1,!1);let n=new t({source:s});const r=new Z({layers:[new Le({source:new Ee}),n],target:"map",view:new Q({center:U([8.43,46.82]),zoom:7})}),l=()=>{const p=document.getElementById("dashEnable").checked,y=document.getElementById("patternEnable").checked;e=a(p,y),r.removeLayer(n),n=new t({source:s}),r.addLayer(n)},i=new Te({source:s});r.addInteraction(i);let o,h;function d(){o=new Ce({source:s,type:"LineString"}),r.addInteraction(o),h=new Fe({source:s}),r.addInteraction(h)}d();const u=p=>{const y=e.variables,m=p.target.name;p.target.type==="radio"?y[m]=p.target.value:y[m]=parseFloat(p.target.value);const T=document.getElementById(`value-${m}`);T&&(T.textContent=y[m]),r.render()};document.querySelectorAll("input.uniform").forEach(p=>p.addEventListener("input",u)),document.querySelectorAll("input.rebuild").forEach(p=>p.addEventListener("input",l)),Prism.highlightAll()}),(e,t)=>(ge(),ye(_e,null,[g("h4",ze,S(L(we)),1),qe,g("pre",null,[g("code",He,S("  "+L(Re).trim()),1)]),Je,g("pre",null,[g("code",$e,S("  "+L(Be).trim()),1)]),Ke,g("pre",null,[g("code",Xe,S("  "+L(xe).trim()),1)]),Ye,g("pre",null,[g("code",Ze,S("  "+L(Ae).trim()),1)])],64))}},xt=me(Qe,[["__scopeId","data-v-77d9f0a5"]]);export{xt as default};
