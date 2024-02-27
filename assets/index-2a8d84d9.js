import{G as ee}from"./GeoJSON-a3eacfc4.js";import{Y as y,aC as P,c0 as te,R as ae,aK as X,$ as H,aA as x,Q as ne,F as w,bN as ie,aQ as se,c as oe,aT as D,aM as G,a2 as re,aN as le,G as ce,M as de,V as he,f as pe,O as ue}from"./Layer-3211d6ef.js";import{B as me}from"./featureloader-4f961e27.js";import{a as T,V as fe}from"./Vector-163f0152.js";import{e as f,V as h,u as ge,a as j,s as z,g as V,b as S,c as U,d as ve,f as W,E as ye,h as _e,i as be,j as q,k as Se}from"./expressions-a7c2bfa9.js";import{S as Ee,c as Le,W as A}from"./ShaderBuilder-1887eb2e.js";import{_ as Re,i as ke,o as Be,c as xe,b,t as k,g as B,F as we,j as Te,p as Fe,k as $e}from"./index-8e73cb60.js";import{T as Ae}from"./Tile-d932c51d.js";import{O as Ne}from"./OSM-39b8e613.js";import{M as Ce}from"./Modify-16614c1f.js";import{D as Pe}from"./Draw-3837a0e3.js";import{S as Oe}from"./Snap-c3076181.js";import"./GeometryCollection-03015b2a.js";import"./JSONFeature-2245ccdf.js";import"./Feature-5a984f38.js";import"./LineString-d3d6f49c.js";import"./MultiPolygon-f290964a.js";import"./MultiPoint-e6eff345.js";import"./Style-22e788f3.js";import"./TileProperty-f0a52f17.js";import"./BaseTile-47530170.js";import"./TileLayer-d6ace1df.js";import"./Layer-8f64fa5e.js";import"./XYZ-2a4e8198.js";import"./TileImage-a70beb77.js";import"./UrlTile-7d5bd7ce.js";import"./Vector-2de0a908.js";import"./VectorLayer-f045426f.js";import"./hitdetect-4f776f31.js";import"./vector-01534e8d.js";import"./Circle-60dfd31b.js";function Y(t){const e=P(t),a=e[0]*256,i=e[1],s=e[2]*256,o=Math.round(e[3]*255);return[a+i,s+o]}const Me=`vec4 unpackColor(vec2 packedColor) {
  return fract(packedColor[1] / 256.0) * vec4(
    fract(floor(packedColor[0] / 256.0) / 256.0),
    fract(packedColor[0] / 256.0),
    fract(floor(packedColor[1] / 256.0) / 256.0),
    1.0
  );
}`;function K(t){return t===h.COLOR?2:t===h.NUMBER_ARRAY?4:1}function N(t){const e=K(t);return e>1?`vec${e}`:"float"}function O(t,e,a,i){let s;if(`${i}radius`in t&&i!=="icon-"?s=f(a,t[`${i}radius`],h.NUMBER):`${i}radius1`in t&&i==="shape-"&&(s=f(a,t[`${i}radius1`],h.NUMBER)),s!==void 0&&(`${i}stroke-width`in t&&(s=`(${s} + ${f(a,t[`${i}stroke-width`],h.NUMBER)} * 0.5)`),e.setSymbolSizeExpression(`vec2(${s} * 2. + 0.5)`)),`${i}scale`in t){const o=f(a,t[`${i}scale`],h.NUMBER|h.NUMBER_ARRAY);e.setSymbolSizeExpression(`${e.getSymbolSizeExpression()} * ${o}`)}`${i}displacement`in t&&e.setSymbolOffsetExpression(f(a,t[`${i}displacement`],h.NUMBER_ARRAY)),`${i}rotation`in t&&e.setSymbolRotationExpression(f(a,t[`${i}rotation`],h.NUMBER)),`${i}rotate-with-view`in t&&e.setSymbolRotateWithView(!!t[`${i}rotate-with-view`])}function Q(t,e,a,i,s){let o="vec4(0.)";if(e!==null&&(o=e),a!==null&&i!==null){const l=`smoothstep(-${i} + 0.63, -${i} - 0.58, ${t})`;o=`mix(${a}, ${o}, ${l})`}const n=`(1.0 - smoothstep(-0.63, 0.58, ${t}))`;let c=`${o} * ${n}`;return s!==null&&(c=`${c} * ${s}`),c}function Ie(t,e,a,i,s){s.functions.circleDistanceField=`float circleDistanceField(vec2 point, float radius) {
  return length(point) - radius;
}`,O(t,e,i,"circle-");let o=null;"circle-opacity"in t&&(o=f(s,t["circle-opacity"],h.NUMBER));let n="coordsPx";"circle-scale"in t&&(n=`coordsPx / ${f(s,t["circle-scale"],h.NUMBER|h.NUMBER_ARRAY)}`);let c=null;"circle-fill-color"in t&&(c=f(s,t["circle-fill-color"],h.COLOR));let l=null;"circle-stroke-color"in t&&(l=f(s,t["circle-stroke-color"],h.COLOR));let r=f(s,t["circle-radius"],h.NUMBER),u=null;"circle-stroke-width"in t&&(u=f(s,t["circle-stroke-width"],h.NUMBER),r=`(${r} + ${u} * 0.5)`);const p=`circleDistanceField(${n}, ${r})`,v=Q(p,c,l,u,o);e.setSymbolColorExpression(v)}function De(t,e,a,i,s){s.functions.round=`float round(float v) {
  return sign(v) * floor(abs(v) + 0.5);
}`,s.functions.starDistanceField=`float starDistanceField(vec2 point, float numPoints, float radiusIn, float radiusOut, float angle) {
  float startAngle = -PI * 0.5 + angle; // tip starts upwards and rotates clockwise with angle
  float c = cos(startAngle);
  float s = sin(startAngle);
  vec2 pointRotated = vec2(c * point.x - s * point.y, s * point.x + c * point.y); 
  float alpha = TWO_PI / numPoints; // the angle of one sector
  float beta = atan(pointRotated.y, pointRotated.x);
  float gamma = round(beta / alpha) * alpha; // angle in sector
  c = cos(-gamma);
  s = sin(-gamma);
  vec2 inSector = vec2(c * pointRotated.x - s * pointRotated.y, abs(s * pointRotated.x + c * pointRotated.y));
  vec2 tipToPoint = inSector + vec2(-radiusOut, 0.);
  vec2 edgeNormal = vec2(radiusIn * sin(alpha * 0.5), -radiusIn * cos(alpha * 0.5) + radiusOut);
  return dot(normalize(edgeNormal), tipToPoint);
}`,s.functions.regularDistanceField=`float regularDistanceField(vec2 point, float numPoints, float radius, float angle) {
  float startAngle = -PI * 0.5 + angle; // tip starts upwards and rotates clockwise with angle
  float c = cos(startAngle);
  float s = sin(startAngle);
  vec2 pointRotated = vec2(c * point.x - s * point.y, s * point.x + c * point.y); 
  float alpha = TWO_PI / numPoints; // the angle of one sector
  float radiusIn = radius * cos(PI / numPoints);
  float beta = atan(pointRotated.y, pointRotated.x);
  float gamma = round((beta - alpha * 0.5) / alpha) * alpha + alpha * 0.5; // angle in sector from mid
  c = cos(-gamma);
  s = sin(-gamma);
  vec2 inSector = vec2(c * pointRotated.x - s * pointRotated.y, abs(s * pointRotated.x + c * pointRotated.y));
  return inSector.x - radiusIn;
}`,O(t,e,i,"shape-");let o=null;"shape-opacity"in t&&(o=f(s,t["shape-opacity"],h.NUMBER));let n="coordsPx";"shape-scale"in t&&(n=`coordsPx / ${f(s,t["shape-scale"],h.NUMBER|h.NUMBER_ARRAY)}`);let c=null;"shape-fill-color"in t&&(c=f(s,t["shape-fill-color"],h.COLOR));let l=null;"shape-stroke-color"in t&&(l=f(s,t["shape-stroke-color"],h.COLOR));let r=null;"shape-stroke-width"in t&&(r=f(s,t["shape-stroke-width"],h.NUMBER));const u=f(s,t["shape-points"],h.NUMBER);let p="0.";"shape-angle"in t&&(p=f(s,t["shape-angle"],h.NUMBER));let v;if("shape-radius"in t){let m=f(s,t["shape-radius"],h.NUMBER);r!==null&&(m=`${m} + ${r} * 0.5`),v=`regularDistanceField(${n}, ${u}, ${m}, ${p})`}else{let m=f(s,t["shape-radius1"],h.NUMBER),g=f(s,t["shape-radius2"],h.NUMBER);r!==null&&(m=`${m} + ${r} * 0.5`,g=`${g} + ${r} * 0.5`),v=`starDistanceField(${n}, ${u}, ${g}, ${m}, ${p})`}const d=Q(v,c,l,r,o);e.setSymbolColorExpression(d)}function Ge(t,e,a,i,s){s.functions.samplePremultiplied=`vec4 samplePremultiplied(sampler2D sampler, vec2 texCoord) {
  vec4 color = texture2D(sampler, texCoord);
  return vec4(color.rgb * color.a, color.a);
}`;let o="vec4(1.0)";"icon-color"in t&&(o=f(s,t["icon-color"],h.COLOR)),"icon-opacity"in t&&(o=`${o} * ${f(s,t["icon-opacity"],h.NUMBER)}`);let n,c;const l=y(t);if("icon-src"in t?(n=new Image,n.crossOrigin=t["icon-cross-origin"]===void 0?"anonymous":t["icon-cross-origin"],n.src=t["icon-src"],a[`u_texture${l}_size`]=()=>n.complete?[n.width,n.height]:[0,0],c=`u_texture${l}_size`,e.addUniform(`vec2 u_texture${l}_size`)):(n=t["icon-img"],n instanceof HTMLImageElement?n.complete&&n.width&&n.height?c=j([n.width,n.height]):(a[`u_texture${l}_size`]=()=>n.complete?[n.width,n.height]:[0,0],c=`u_texture${l}_size`):c=j([n.width,n.height])),a[`u_texture${l}`]=n,e.addUniform(`sampler2D u_texture${l}`).setSymbolColorExpression(`${o} * samplePremultiplied(u_texture${l}, v_texCoord)`).setSymbolSizeExpression(c),"icon-width"in t&&"icon-height"in t&&e.setSymbolSizeExpression(`vec2(${f(i,t["icon-width"],h.NUMBER)}, ${f(i,t["icon-height"],h.NUMBER)})`),"icon-offset"in t&&"icon-size"in t){let r=f(i,t["icon-offset"],h.NUMBER_ARRAY);const u=f(i,t["icon-size"],h.NUMBER_ARRAY),p=e.getSymbolSizeExpression();if(e.setSymbolSizeExpression(u),"icon-offset-origin"in t)switch(t["icon-offset-origin"]){case"top-right":r=`vec2(v_quadSizePx.x, 0.) + ${u} * vec2(-1., 0.) + ${r} * vec2(-1., 1.)`;break;case"bottom-left":r=`vec2(0., v_quadSizePx.y) + ${u} * vec2(0., -1.) + ${r} * vec2(1., -1.)`;break;case"bottom-right":r=`v_quadSizePx - ${u} - ${r}`;break}e.setTextureCoordinateExpression(`(vec4((${r}).xyxy) + vec4(0., 0., ${u})) / (${p}).xyxy`)}if(O(t,e,i,"icon-"),"icon-anchor"in t){const r=f(i,t["icon-anchor"],h.NUMBER_ARRAY);let u="1.0";"icon-scale"in t&&(u=f(i,t["icon-scale"],h.NUMBER|h.NUMBER_ARRAY));let p;t["icon-anchor-x-units"]==="pixels"&&t["icon-anchor-y-units"]==="pixels"?p=`${r} * ${u}`:t["icon-anchor-x-units"]==="pixels"?p=`${r} * vec2(vec2(${u}).x, v_quadSizePx.y)`:t["icon-anchor-y-units"]==="pixels"?p=`${r} * vec2(v_quadSizePx.x, vec2(${u}).x)`:p=`${r} * v_quadSizePx`;let v=`v_quadSizePx * vec2(0.5, -0.5) + ${p} * vec2(-1., 1.)`;if("icon-anchor-origin"in t)switch(t["icon-anchor-origin"]){case"top-right":v=`v_quadSizePx * -0.5 + ${p}`;break;case"bottom-left":v=`v_quadSizePx * 0.5 - ${p}`;break;case"bottom-right":v=`v_quadSizePx * vec2(-0.5, 0.5) + ${p} * vec2(1., -1.)`;break}e.setSymbolOffsetExpression(`${e.getSymbolOffsetExpression()} + ${v}`)}}function je(t,e,a,i,s){if("stroke-color"in t&&e.setStrokeColorExpression(f(s,t["stroke-color"],h.COLOR)),"stroke-width"in t&&e.setStrokeWidthExpression(f(i,t["stroke-width"],h.NUMBER)),"stroke-offset"in t&&e.setStrokeOffsetExpression(f(i,t["stroke-offset"],h.NUMBER)),"stroke-line-cap"in t&&e.setStrokeCapExpression(f(i,t["stroke-line-cap"],h.STRING)),"stroke-line-join"in t&&e.setStrokeJoinExpression(f(i,t["stroke-line-join"],h.STRING)),"stroke-miter-limit"in t&&e.setStrokeMiterLimitExpression(f(i,t["stroke-miter-limit"],h.NUMBER)),"stroke-line-dash"in t){s.functions.getSingleDashDistance=`float getSingleDashDistance(float distance, float radius, float dashOffset, float dashLength, float dashLengthTotal, float capType) {
  float localDistance = mod(distance, dashLengthTotal);
  float distanceSegment = abs(localDistance - dashOffset - dashLength * 0.5) - dashLength * 0.5;
  distanceSegment = min(distanceSegment, dashLengthTotal - localDistance);
  if (capType == ${z("square")}) {
    distanceSegment -= v_width * 0.5;
  } else if (capType == ${z("round")}) {
    distanceSegment = min(distanceSegment, sqrt(distanceSegment * distanceSegment + radius * radius) - v_width * 0.5);
  }
  return distanceSegment;
}`;let o=t["stroke-line-dash"].map(d=>f(s,d,h.NUMBER));o.length%2===1&&(o=[...o,...o]);let n="0.";"stroke-line-dash-offset"in t&&(n=f(i,t["stroke-line-dash-offset"],h.NUMBER));let c=JSON.stringify(t["stroke-line-dash"]).split("").reduce((d,m)=>(d<<5)-d+m.charCodeAt(0),0);c=c>>>0;const l=`dashDistanceField_${c}`,r=o.map((d,m)=>`float dashLength${m} = ${d};`),u=o.map((d,m)=>`dashLength${m}`).join(" + ");let p="0.",v=`getSingleDashDistance(distance, radius, ${p}, dashLength0, totalDashLength, capType)`;for(let d=2;d<o.length;d+=2)p=`${p} + dashLength${d-2} + dashLength${d-1}`,v=`min(${v}, getSingleDashDistance(distance, radius, ${p}, dashLength${d}, totalDashLength, capType))`;s.functions[l]=`float ${l}(float distance, float radius, float capType) {
  ${r.join(`
  `)}
  float totalDashLength = ${u};
  return ${v};
}`,e.setStrokeDistanceFieldExpression(`${l}(currentLengthPx + ${n}, currentRadiusPx, capType)`)}}function ze(t,e,a,i,s){"fill-color"in t&&e.setFillColorExpression(f(s,t["fill-color"],h.COLOR))}function Ve(t){const e={inFragmentShader:!1,variables:[],attributes:[],functions:{},style:t},a={inFragmentShader:!0,variables:e.variables,attributes:[],functions:{},style:t},i=new Ee,s={};if("icon-src"in t||"icon-img"in t?Ge(t,i,s,e,a):"shape-points"in t?De(t,i,s,e,a):"circle-radius"in t&&Ie(t,i,s,e,a),je(t,i,s,e,a),ze(t,i,s,e,a),t.filter){const n=f(a,t.filter,h.BOOLEAN);i.setFragmentDiscardExpression(`!${n}`)}a.variables.forEach(function(n){const c=ge(n.name);i.addUniform(`${N(n.type)} ${c}`);let l;n.type===h.STRING?l=()=>V(t.variables[n.name]):n.type===h.COLOR?l=()=>Y([...P(t.variables[n.name]||"#eee")]):n.type===h.BOOLEAN?l=()=>t.variables[n.name]?1:0:l=()=>t.variables[n.name],s[c]=l}),a.attributes.forEach(function(n){e.attributes.find(r=>r.name===n.name)||e.attributes.push(n);let c=N(n.type),l=`a_${n.name}`;n.type===h.COLOR&&(c="vec4",l=`unpackColor(${l})`,i.addVertexShaderFunction(Me)),i.addVarying(`v_${n.name}`,c,l)}),e.attributes.forEach(function(n){i.addAttribute(`${N(n.type)} a_${n.name}`)});const o=e.attributes.map(function(n){let c;return n.callback?c=n.callback:n.type===h.STRING?c=l=>V(l.get(n.name)):n.type===h.COLOR?c=l=>Y([...P(l.get(n.name)||"#eee")]):n.type===h.BOOLEAN?c=l=>l.get(n.name)?1:0:c=l=>l.get(n.name),{name:n.name,size:K(n.type),callback:c}});for(const n in e.functions)i.addVertexShaderFunction(e.functions[n]);for(const n in a.functions)i.addFragmentShaderFunction(a.functions[n]);return{builder:i,attributes:o.reduce((n,c)=>({...n,[c.name]:{callback:c.callback,size:c.size}}),{}),uniforms:s}}const Ue="Draw lines rendered with WebGL",We=`
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
`,qe=`
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
`,Ye=`
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
`,Je=`
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
`;class Xe{constructor(){this.polygonBatch={entries:{},geometriesCount:0,verticesCount:0,ringsCount:0},this.pointBatch={entries:{},geometriesCount:0},this.lineStringBatch={entries:{},geometriesCount:0,verticesCount:0}}addFeatures(e){for(let a=0;a<e.length;a++)this.addFeature(e[a])}addFeature(e){const a=e.getGeometry();a&&this.addGeometry_(a,e)}clearFeatureEntryInPointBatch_(e){const a=this.pointBatch.entries[y(e)];a&&(this.pointBatch.geometriesCount-=a.flatCoordss.length,delete this.pointBatch.entries[y(e)])}clearFeatureEntryInLineStringBatch_(e){const a=this.lineStringBatch.entries[y(e)];a&&(this.lineStringBatch.verticesCount-=a.verticesCount,this.lineStringBatch.geometriesCount-=a.flatCoordss.length,delete this.lineStringBatch.entries[y(e)])}clearFeatureEntryInPolygonBatch_(e){const a=this.polygonBatch.entries[y(e)];a&&(this.polygonBatch.verticesCount-=a.verticesCount,this.polygonBatch.ringsCount-=a.ringsCount,this.polygonBatch.geometriesCount-=a.flatCoordss.length,delete this.polygonBatch.entries[y(e)])}addGeometry_(e,a){const i=e.getType();switch(i){case"GeometryCollection":const s=e.getGeometriesArray();for(const p of s)this.addGeometry_(p,a);break;case"MultiPolygon":const o=e;this.addCoordinates_(i,o.getFlatCoordinates(),o.getEndss(),a,y(a),o.getStride());break;case"MultiLineString":const n=e;this.addCoordinates_(i,n.getFlatCoordinates(),n.getEnds(),a,y(a),n.getStride());break;case"MultiPoint":const c=e;this.addCoordinates_(i,c.getFlatCoordinates(),null,a,y(a),c.getStride());break;case"Polygon":const l=e;this.addCoordinates_(i,l.getFlatCoordinates(),l.getEnds(),a,y(a),l.getStride());break;case"Point":const r=e;this.addCoordinates_(i,r.getFlatCoordinates(),null,a,y(a),r.getStride());break;case"LineString":case"LinearRing":const u=e;this.addCoordinates_(i,u.getFlatCoordinates(),null,a,y(a),u.getStride());break}}addCoordinates_(e,a,i,s,o,n){let c;switch(e){case"MultiPolygon":const l=i;for(let d=0,m=l.length;d<m;d++){let g=l[d];const _=d>0?l[d-1]:null,L=_?_[_.length-1]:0,R=g[g.length-1];g=L>0?g.map(Z=>Z-L):g,this.addCoordinates_("Polygon",a.slice(L,R),g,s,o,n)}break;case"MultiLineString":const r=i;for(let d=0,m=r.length;d<m;d++){const g=d>0?r[d-1]:0;this.addCoordinates_("LinearRing",a.slice(g,r[d]),null,s,o,n)}break;case"MultiPoint":for(let d=0,m=a.length;d<m;d+=n)this.addCoordinates_("Point",a.slice(d,d+2),null,s,o,null);break;case"Polygon":const u=i;for(let d=1,m=u.length;d<m;d++){const g=u[d-1];if(d>0&&te(a,g,u[d],n)){this.addCoordinates_("Polygon",a.slice(0,g),u.slice(0,d),s,o,n),this.addCoordinates_("Polygon",a.slice(g),u.slice(d).map(_=>_-u[d-1]),s,o,n);return}}this.polygonBatch.entries[o]||(this.polygonBatch.entries[o]={feature:s,flatCoordss:[],verticesCount:0,ringsCount:0,ringsVerticesCounts:[]}),c=a.length/n;const p=i.length,v=i.map((d,m,g)=>m>0?(d-g[m-1])/n:d/n);this.polygonBatch.verticesCount+=c,this.polygonBatch.ringsCount+=p,this.polygonBatch.geometriesCount++,this.polygonBatch.entries[o].flatCoordss.push(J(a,n)),this.polygonBatch.entries[o].ringsVerticesCounts.push(v),this.polygonBatch.entries[o].verticesCount+=c,this.polygonBatch.entries[o].ringsCount+=p;for(let d=0,m=u.length;d<m;d++){const g=d>0?u[d-1]:0;this.addCoordinates_("LinearRing",a.slice(g,u[d]),null,s,o,n)}break;case"Point":this.pointBatch.entries[o]||(this.pointBatch.entries[o]={feature:s,flatCoordss:[]}),this.pointBatch.geometriesCount++,this.pointBatch.entries[o].flatCoordss.push(a);break;case"LineString":case"LinearRing":this.lineStringBatch.entries[o]||(this.lineStringBatch.entries[o]={feature:s,flatCoordss:[],verticesCount:0}),c=a.length/n,this.lineStringBatch.verticesCount+=c,this.lineStringBatch.geometriesCount++,this.lineStringBatch.entries[o].flatCoordss.push(J(a,n)),this.lineStringBatch.entries[o].verticesCount+=c;break}}changeFeature(e){this.clearFeatureEntryInPointBatch_(e),this.clearFeatureEntryInPolygonBatch_(e),this.clearFeatureEntryInLineStringBatch_(e);const a=e.getGeometry();a&&this.addGeometry_(a,e)}removeFeature(e){this.clearFeatureEntryInPointBatch_(e),this.clearFeatureEntryInPolygonBatch_(e),this.clearFeatureEntryInLineStringBatch_(e)}clear(){this.polygonBatch.entries={},this.polygonBatch.geometriesCount=0,this.polygonBatch.verticesCount=0,this.polygonBatch.ringsCount=0,this.lineStringBatch.entries={},this.lineStringBatch.geometriesCount=0,this.lineStringBatch.verticesCount=0,this.pointBatch.entries={},this.pointBatch.geometriesCount=0}}function J(t,e){return e===2?t:t.filter((a,i)=>i%e<2)}const He=Xe;function M(t,e,a,i){let s=0;for(const o in e){const n=e[o],c=n.callback(a.feature);t[i+s++]=c[0]||c,!(!n.size||n.size===1)&&(t[i+s++]=c[1],!(n.size<3)&&(t[i+s++]=c[2],!(n.size<4)&&(t[i+s++]=c[3])))}return s}function $(t){return Object.keys(t).reduce((e,a)=>e+(t[a].size||1),0)}function Ke(t,e,a,i){const s=(2+$(a))*t.geometriesCount;(!e||e.length!==s)&&(e=new Float32Array(s));const o=[];let n=0;for(const c in t.entries){const l=t.entries[c];for(let r=0,u=l.flatCoordss.length;r<u;r++)o[0]=l.flatCoordss[r][0],o[1]=l.flatCoordss[r][1],ae(i,o),e[n++]=o[0],e[n++]=o[1],n+=M(e,a,l,n)}return e}function Qe(t,e,a,i){const s=2*t.verticesCount+(1+$(a))*t.geometriesCount;(!e||e.length!==s)&&(e=new Float32Array(s));const o=[];let n=0;for(const c in t.entries){const l=t.entries[c];for(let r=0,u=l.flatCoordss.length;r<u;r++){o.length=l.flatCoordss[r].length,X(l.flatCoordss[r],0,o.length,2,i,o),n+=M(e,a,l,n),e[n++]=o.length/2;for(let p=0,v=o.length;p<v;p+=2)e[n++]=o[p],e[n++]=o[p+1]}}return e}function Ze(t,e,a,i){const s=2*t.verticesCount+(1+$(a))*t.geometriesCount+t.ringsCount;(!e||e.length!==s)&&(e=new Float32Array(s));const o=[];let n=0;for(const c in t.entries){const l=t.entries[c];for(let r=0,u=l.flatCoordss.length;r<u;r++){o.length=l.flatCoordss[r].length,X(l.flatCoordss[r],0,o.length,2,i,o),n+=M(e,a,l,n),e[n++]=l.ringsVerticesCounts[r].length;for(let p=0,v=l.ringsVerticesCounts[r].length;p<v;p++)e[n++]=l.ringsVerticesCounts[r][p];for(let p=0,v=o.length;p<v;p+=2)e[n++]=o[p],e[n++]=o[p+1]}}return e}const C=Le();let et=0;const E={POSITION:"a_position",INDEX:"a_index",SEGMENT_START:"a_segmentStart",SEGMENT_END:"a_segmentEnd",PARAMETERS:"a_parameters",JOIN_ANGLES:"a_joinAngles",DISTANCE:"a_distance"};class tt{constructor(e,a){var n,c,l;this.helper_=a;let i=e;if(!("fill"in e||"stroke"in e||"symbol"in e&&"vertex"in e.symbol)){const r=Ve(e);i={fill:{vertex:r.builder.getFillVertexShader(),fragment:r.builder.getFillFragmentShader()},stroke:{vertex:r.builder.getStrokeVertexShader(),fragment:r.builder.getStrokeFragmentShader()},symbol:{vertex:r.builder.getSymbolVertexShader(),fragment:r.builder.getSymbolFragmentShader()},attributes:r.attributes,uniforms:r.uniforms}}this.hasFill_=!!((n=i.fill)!=null&&n.vertex),this.hasFill_&&(this.fillVertexShader_=i.fill.vertex,this.fillFragmentShader_=i.fill.fragment,this.fillProgram_=this.helper_.getProgram(this.fillFragmentShader_,this.fillVertexShader_)),this.hasStroke_=!!((c=i.stroke)!=null&&c.vertex),this.hasStroke_&&(this.strokeVertexShader_=i.stroke&&i.stroke.vertex,this.strokeFragmentShader_=i.stroke&&i.stroke.fragment,this.strokeProgram_=this.helper_.getProgram(this.strokeFragmentShader_,this.strokeVertexShader_)),this.hasSymbol_=!!((l=i.symbol)!=null&&l.vertex),this.hasSymbol_&&(this.symbolVertexShader_=i.symbol&&i.symbol.vertex,this.symbolFragmentShader_=i.symbol&&i.symbol.fragment,this.symbolProgram_=this.helper_.getProgram(this.symbolFragmentShader_,this.symbolVertexShader_)),this.customAttributes_=i.attributes,this.uniforms_=i.uniforms;const o=Object.keys(this.customAttributes_).map(r=>({name:`a_${r}`,size:this.customAttributes_[r].size||1,type:S.FLOAT}));this.polygonAttributesDesc_=[{name:E.POSITION,size:2,type:S.FLOAT},...o],this.lineStringAttributesDesc_=[{name:E.SEGMENT_START,size:2,type:S.FLOAT},{name:E.SEGMENT_END,size:2,type:S.FLOAT},{name:E.JOIN_ANGLES,size:2,type:S.FLOAT},{name:E.DISTANCE,size:1,type:S.FLOAT},{name:E.PARAMETERS,size:1,type:S.FLOAT},...o],this.pointAttributesDesc_=[{name:E.POSITION,size:2,type:S.FLOAT},{name:E.INDEX,size:1,type:S.FLOAT},...o],i.uniforms&&this.helper_.addUniforms(i.uniforms)}async generateBuffers(e,a){const i=this.generateRenderInstructions_(e,a),[s,o,n]=await Promise.all([this.generateBuffersForType_(i.polygonInstructions,"Polygon",a),this.generateBuffersForType_(i.lineStringInstructions,"LineString",a),this.generateBuffersForType_(i.pointInstructions,"Point",a)]),c=H(x(),a);return{polygonBuffers:s,lineStringBuffers:o,pointBuffers:n,invertVerticesTransform:c}}generateRenderInstructions_(e,a){const i=this.hasFill_?Ze(e.polygonBatch,new Float32Array(0),this.customAttributes_,a):null,s=this.hasStroke_?Qe(e.lineStringBatch,new Float32Array(0),this.customAttributes_,a):null,o=this.hasSymbol_?Ke(e.pointBatch,new Float32Array(0),this.customAttributes_,a):null;return{polygonInstructions:i,lineStringInstructions:s,pointInstructions:o}}generateBuffersForType_(e,a,i){if(e===null)return null;const s=et++;let o;switch(a){case"Polygon":o=A.GENERATE_POLYGON_BUFFERS;break;case"LineString":o=A.GENERATE_LINE_STRING_BUFFERS;break;case"Point":o=A.GENERATE_POINT_BUFFERS;break}const n={id:s,type:o,renderInstructions:e.buffer,renderInstructionsTransform:i,customAttributesSize:$(this.customAttributes_)};return C.postMessage(n,[e.buffer]),e=null,new Promise(c=>{const l=r=>{const u=r.data;if(u.id!==s||(C.removeEventListener("message",l),!this.helper_.getGL()))return;const p=new U(ve,W).fromArrayBuffer(u.vertexBuffer),v=new U(ye,W).fromArrayBuffer(u.indexBuffer);this.helper_.flushBufferData(p),this.helper_.flushBufferData(v),c([v,p])};C.addEventListener("message",l)})}render(e,a,i){this.hasFill_&&this.renderInternal_(e.polygonBuffers[0],e.polygonBuffers[1],this.fillProgram_,this.polygonAttributesDesc_,a,i),this.hasStroke_&&this.renderInternal_(e.lineStringBuffers[0],e.lineStringBuffers[1],this.strokeProgram_,this.lineStringAttributesDesc_,a,i),this.hasSymbol_&&this.renderInternal_(e.pointBuffers[0],e.pointBuffers[1],this.symbolProgram_,this.pointAttributesDesc_,a,i)}renderInternal_(e,a,i,s,o,n){this.helper_.useProgram(i,o),this.helper_.bindBuffer(a),this.helper_.bindBuffer(e),this.helper_.enableAttributes(s),n();const c=e.getSize();this.helper_.drawElements(0,c)}}const at=tt,F={...Se,RENDER_EXTENT:"u_renderExtent",GLOBAL_ALPHA:"u_globalAlpha"};class nt extends _e{constructor(e,a){const i={[F.RENDER_EXTENT]:[0,0,0,0],[F.GLOBAL_ALPHA]:1};super(e,{uniforms:i,postProcesses:a.postProcesses}),this.sourceRevision_=-1,this.previousExtent_=ne(),this.currentTransform_=x(),this.tmpTransform_=x(),this.tmpMat4_=be(),this.currentFrameStateTransform_=x(),this.styles_=[],this.styleRenderers_=[],this.buffers_=[],this.applyOptions_(a),this.batch_=new He;const s=this.getLayer().getSource();this.batch_.addFeatures(s.getFeatures()),this.sourceListenKeys_=[w(s,T.ADDFEATURE,this.handleSourceFeatureAdded_,this),w(s,T.CHANGEFEATURE,this.handleSourceFeatureChanged_,this),w(s,T.REMOVEFEATURE,this.handleSourceFeatureDelete_,this),w(s,T.CLEAR,this.handleSourceFeatureClear_,this)]}applyOptions_(e){this.styles_=Array.isArray(e.style)?e.style:[e.style]}createRenderers_(){this.buffers_=[],this.styleRenderers_=this.styles_.map(e=>new at(e,this.helper))}reset(e){this.applyOptions_(e),this.helper&&this.createRenderers_(),super.reset(e)}afterHelperCreated(){this.createRenderers_()}handleSourceFeatureAdded_(e){const a=e.feature;this.batch_.addFeature(a)}handleSourceFeatureChanged_(e){const a=e.feature;this.batch_.changeFeature(a)}handleSourceFeatureDelete_(e){const a=e.feature;this.batch_.removeFeature(a)}handleSourceFeatureClear_(){this.batch_.clear()}applyUniforms_(e){ie(this.tmpTransform_,this.currentFrameStateTransform_),se(this.tmpTransform_,e),this.helper.setUniformMatrixValue(F.PROJECTION_MATRIX,q(this.tmpMat4_,this.tmpTransform_)),H(this.tmpTransform_,this.tmpTransform_),this.helper.setUniformMatrixValue(F.SCREEN_TO_WORLD_MATRIX,q(this.tmpMat4_,this.tmpTransform_))}renderFrame(e){const a=this.helper.getGL();this.preRender(a,e),this.helper.prepareDraw(e),this.currentFrameStateTransform_=this.helper.makeProjectionTransform(e,this.currentFrameStateTransform_);const s=this.getLayer().getSource(),o=e.viewState.projection,n=s.getWrapX()&&o.canWrapX(),c=o.getExtent(),l=e.extent,r=n?oe(c):null,u=n?Math.ceil((l[2]-c[2])/r)+1:1;let p=n?Math.floor((l[0]-c[0])/r):0;D(this.currentFrameStateTransform_,p*r,0);do{for(let g=0,_=this.styleRenderers_.length;g<_;g++){const L=this.styleRenderers_[g],R=this.buffers_[g];R&&L.render(R,e,()=>{this.applyUniforms_(R.invertVerticesTransform)})}D(this.currentFrameStateTransform_,r,0)}while(++p<u);this.helper.finalizeDraw(e);const v=this.helper.getCanvas(),m=e.layerStatesArray[e.layerIndex].opacity;return m!==parseFloat(v.style.opacity)&&(v.style.opacity=String(m)),this.postRender(a,e),v}prepareFrameInternal(e){const a=this.getLayer(),i=a.getSource(),s=e.viewState,o=!e.viewHints[G.ANIMATING]&&!e.viewHints[G.INTERACTING],n=!re(this.previousExtent_,e.extent),c=this.sourceRevision_<i.getRevision();if(c&&(this.sourceRevision_=i.getRevision()),o&&(n||c)){const l=s.projection,r=s.resolution,u=a instanceof me?a.getRenderBuffer():0,p=le(e.extent,u*r);i.loadFeatures(p,r,l),this.ready=!1;const v=this.helper.makeProjectionTransform(e,x()),d=this.styleRenderers_.map((m,g)=>m.generateBuffers(this.batch_,v).then(_=>{this.buffers_[g]=_}));Promise.all(d).then(()=>{this.ready=!0,this.getLayer().changed()}),this.previousExtent_=e.extent.slice()}return!0}forEachFeatureAtCoordinate(e,a,i,s,o){}disposeInternal(){this.sourceListenKeys_.forEach(function(e){ce(e)}),this.sourceListenKeys_=null,super.disposeInternal()}}const it=nt;const I=t=>(Fe("data-v-77d9f0a5"),t=t(),$e(),t),st={id:"title"},ot=Te('<div id="map" class="map" data-v-77d9f0a5></div><form data-v-77d9f0a5><div class="form-group" data-v-77d9f0a5>Cap type   <label class="radio-inline" data-v-77d9f0a5><input type="radio" class="uniform" name="capType" value="butt" checked data-v-77d9f0a5> <code data-v-77d9f0a5>butt</code>  </label><label class="radio-inline" data-v-77d9f0a5><input type="radio" class="uniform" name="capType" value="round" data-v-77d9f0a5> <code data-v-77d9f0a5>round</code>  </label><label class="radio-inline" data-v-77d9f0a5><input type="radio" class="uniform" name="capType" value="square" data-v-77d9f0a5> <code data-v-77d9f0a5>square</code>  </label></div><div class="form-group" data-v-77d9f0a5>Join type   <label class="radio-inline" data-v-77d9f0a5><input type="radio" class="uniform" name="joinType" value="miter" checked data-v-77d9f0a5> <code data-v-77d9f0a5>miter</code>  </label><label class="radio-inline" data-v-77d9f0a5><input type="radio" class="uniform" name="joinType" value="round" data-v-77d9f0a5> <code data-v-77d9f0a5>round</code>  </label><label class="radio-inline" data-v-77d9f0a5><input type="radio" class="uniform" name="joinType" value="bevel" data-v-77d9f0a5> <code data-v-77d9f0a5>bevel</code>  </label></div><div class="form-group" data-v-77d9f0a5><label data-v-77d9f0a5> Line width (pixels) <input type="range" class="uniform" name="width" min="1" max="40" value="8" data-v-77d9f0a5></label><span id="value-width" data-v-77d9f0a5>12</span></div><div class="form-group" data-v-77d9f0a5><label data-v-77d9f0a5> Miter limit (ratio) <input type="range" class="uniform" name="miterLimit" min="1" max="20" value="10" step="0.1" data-v-77d9f0a5></label><span id="value-miterLimit" data-v-77d9f0a5>10</span></div><div class="form-group" data-v-77d9f0a5><label data-v-77d9f0a5> Line offset (pixels) <input type="range" class="uniform" name="offset" min="-40" max="40" value="0" data-v-77d9f0a5></label><span id="value-offset" data-v-77d9f0a5>0</span></div><div class="form-group" data-v-77d9f0a5><label data-v-77d9f0a5><input type="checkbox" class="rebuild" id="dashEnable" data-v-77d9f0a5> Enable dashes </label></div><div class="form-group" style="margin-left:18px;" data-v-77d9f0a5><label data-v-77d9f0a5> Line dash pattern (px) <input type="number" class="uniform" name="dashLength1" min="0" max="100" value="25" data-v-77d9f0a5><input type="number" class="uniform" name="dashLength2" min="0" max="100" value="15" data-v-77d9f0a5><input type="number" class="uniform" name="dashLength3" min="0" max="100" value="15" data-v-77d9f0a5><input type="number" class="uniform" name="dashLength4" min="0" max="100" value="15" data-v-77d9f0a5></label></div><div class="form-group" style="margin-left:18px;" data-v-77d9f0a5><label data-v-77d9f0a5> Line dash offset (pixels) <input type="range" class="uniform" name="dashOffset" min="-200" max="200" value="0" data-v-77d9f0a5></label><span id="value-dashOffset" data-v-77d9f0a5>0</span></div><div class="form-group" data-v-77d9f0a5><label data-v-77d9f0a5><input type="checkbox" class="rebuild" id="patternEnable" data-v-77d9f0a5> Enable image pattern </label></div><div class="form-group" style="margin-left:18px;" data-v-77d9f0a5><label data-v-77d9f0a5> Pattern spacing (pixels) <input type="range" class="uniform" name="patternSpacing" min="0" max="64" value="0" data-v-77d9f0a5></label><span id="value-patternSpacing" data-v-77d9f0a5>0</span></div></form><p data-v-77d9f0a5>This example lets you tweak the stroke styling options dynamically to see how they affect line rendering. The line string showing by default can be modified and new ones can be drawn by single-clicking on the map.</p><h5 class="source-heading" data-v-77d9f0a5>html</h5>',4),rt={class:"language-html"},lt=I(()=>b("h5",{class:"source-heading"},"css",-1)),ct={class:"language-css"},dt=I(()=>b("h5",{class:"source-heading"},"js",-1)),ht={class:"language-js"},pt=I(()=>b("h5",{class:"source-heading"},"package.json",-1)),ut={class:"language-json"},mt={__name:"index",setup(t){return ke(()=>{let e;class a extends ue{createRenderer(){return new it(this,{className:this.getClassName(),style:e})}}const i=new fe({url:"data/geojson/switzerland.geojson",format:new ee}),s=(d,m)=>{let g={variables:e?e.variables:{width:12,offset:0,capType:"butt",joinType:"miter",miterLimit:10,dashLength1:25,dashLength2:15,dashLength3:15,dashLength4:15,dashOffset:0,patternSpacing:0},"stroke-width":["var","width"],"stroke-color":"rgba(24,86,34,0.7)","stroke-offset":["var","offset"],"stroke-miter-limit":["var","miterLimit"],"stroke-line-cap":["var","capType"],"stroke-line-join":["var","joinType"]};return d&&(g={...g,"stroke-line-dash":[["var","dashLength1"],["var","dashLength2"],["var","dashLength3"],["var","dashLength4"]],"stroke-line-dash-offset":["var","dashOffset"]}),m&&(delete g["stroke-color"],g={...g,"stroke-pattern-src":"data/dot.svg","stroke-pattern-spacing":["var","patternSpacing"]}),g};e=s(!1,!1);let o=new a({source:i});const n=new de({layers:[new Ae({source:new Ne}),o],target:"map",view:new he({center:pe([8.43,46.82]),zoom:7})}),c=()=>{const d=document.getElementById("dashEnable").checked,m=document.getElementById("patternEnable").checked;e=s(d,m),n.removeLayer(o),o=new a({source:i}),n.addLayer(o)},l=new Ce({source:i});n.addInteraction(l);let r,u;function p(){r=new Pe({source:i,type:"LineString"}),n.addInteraction(r),u=new Oe({source:i}),n.addInteraction(u)}p();const v=d=>{const m=e.variables,g=d.target.name;d.target.type==="radio"?m[g]=d.target.value:m[g]=parseFloat(d.target.value);const _=document.getElementById(`value-${g}`);_&&(_.textContent=m[g]),n.render()};document.querySelectorAll("input.uniform").forEach(d=>d.addEventListener("input",v)),document.querySelectorAll("input.rebuild").forEach(d=>d.addEventListener("input",c)),Prism.highlightAll()}),(e,a)=>(Be(),xe(we,null,[b("h4",st,k(B(Ue)),1),ot,b("pre",null,[b("code",rt,k("  "+B(We).trim()),1)]),lt,b("pre",null,[b("code",ct,k("  "+B(qe).trim()),1)]),dt,b("pre",null,[b("code",ht,k("  "+B(Ye).trim()),1)]),pt,b("pre",null,[b("code",ut,k("  "+B(Je).trim()),1)])],64))}},qt=Re(mt,[["__scopeId","data-v-77d9f0a5"]]);export{qt as default};
