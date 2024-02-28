import{cv as x,ch as m,cu as P,cw as $,aK as E,ci as f,cA as T}from"./Layer-3b715193.js";import{S as q,u as N,b as A,s as D,g as F,a as I}from"./ShaderBuilder-d8651322.js";function l(e,i,r){const o=T();return o.style=e.style,A(i,r,o,e)}function R(e){const i=E(e),r=i[0]*256,o=i[1],t=i[2]*256,n=Math.round(i[3]*255);return[r+o,t+n]}const j=`vec4 unpackColor(vec2 packedColor) {
  return fract(packedColor[1] / 256.0) * vec4(
    fract(floor(packedColor[0] / 256.0) / 256.0),
    fract(packedColor[0] / 256.0),
    fract(floor(packedColor[1] / 256.0) / 256.0),
    1.0
  );
}`;function L(e){return e===m?2:e===$?4:1}function z(e){const i=L(e);return i>1?`vec${i}`:"float"}function k(e){return(JSON.stringify(e).split("").reduce((r,o)=>(r<<5)-r+o.charCodeAt(0),0)>>>0).toString()}function b(e,i,r,o){if(`${o}radius`in e&&o!=="icon-"){let t=l(r,e[`${o}radius`],f);if(`${o}radius2`in e){const n=l(r,e[`${o}radius2`],f);t=`max(${t}, ${n})`}`${o}stroke-width`in e&&(t=`(${t} + ${l(r,e[`${o}stroke-width`],f)} * 0.5)`),i.setSymbolSizeExpression(`vec2(${t} * 2. + 0.5)`)}if(`${o}scale`in e){const t=l(r,e[`${o}scale`],f|$);i.setSymbolSizeExpression(`${i.getSymbolSizeExpression()} * ${t}`)}`${o}displacement`in e&&i.setSymbolOffsetExpression(l(r,e[`${o}displacement`],$)),`${o}rotation`in e&&i.setSymbolRotationExpression(l(r,e[`${o}rotation`],f)),`${o}rotate-with-view`in e&&i.setSymbolRotateWithView(!!e[`${o}rotate-with-view`])}function O(e,i,r,o,t){let n="vec4(0.)";if(i!==null&&(n=i),r!==null&&o!==null){const p=`smoothstep(-${o} + 0.63, -${o} - 0.58, ${e})`;n=`mix(${r}, ${n}, ${p})`}const s=`(1.0 - smoothstep(-0.63, 0.58, ${e}))`;let a=`${n} * ${s}`;return t!==null&&(a=`${a} * ${t}`),a}function w(e,i,r,o,t){const n=new Image;let s;return n.crossOrigin=e[`${o}cross-origin`]===void 0?"anonymous":e[`${o}cross-origin`],n.src=e[`${o}src`],n.complete&&n.width&&n.height?s=I([n.width,n.height]):(r[`u_texture${t}_size`]=()=>n.complete?[n.width,n.height]:[0,0],i.addUniform(`vec2 u_texture${t}_size`),s=`u_texture${t}_size`),r[`u_texture${t}`]=n,i.addUniform(`sampler2D u_texture${t}`),s}function _(e,i,r,o,t){let n=l(r,e[`${i}offset`],$);if(`${i}offset-origin`in e)switch(e[`${i}offset-origin`]){case"top-right":n=`vec2(${o}.x, 0.) + ${t} * vec2(-1., 0.) + ${n} * vec2(-1., 1.)`;break;case"bottom-left":n=`vec2(0., ${o}.y) + ${t} * vec2(0., -1.) + ${n} * vec2(1., -1.)`;break;case"bottom-right":n=`${o} - ${t} - ${n}`;break}return n}function W(e,i,r,o,t){t.functions.circleDistanceField=`float circleDistanceField(vec2 point, float radius) {
  return length(point) - radius;
}`,b(e,i,o,"circle-");let n=null;"circle-opacity"in e&&(n=l(t,e["circle-opacity"],f));let s="coordsPx";"circle-scale"in e&&(s=`coordsPx / ${l(t,e["circle-scale"],f|$)}`);let a=null;"circle-fill-color"in e&&(a=l(t,e["circle-fill-color"],m));let p=null;"circle-stroke-color"in e&&(p=l(t,e["circle-stroke-color"],m));let c=l(t,e["circle-radius"],f),u=null;"circle-stroke-width"in e&&(u=l(t,e["circle-stroke-width"],f),c=`(${c} + ${u} * 0.5)`);const d=`circleDistanceField(${s}, ${c})`,g=O(d,a,p,u,n);i.setSymbolColorExpression(g)}function G(e,i,r,o,t){t.functions.round=`float round(float v) {
  return sign(v) * floor(abs(v) + 0.5);
}`,t.functions.starDistanceField=`float starDistanceField(vec2 point, float numPoints, float radius, float radius2, float angle) {
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
  vec2 tipToPoint = inSector + vec2(-radius, 0.);
  vec2 edgeNormal = vec2(radius2 * sin(alpha * 0.5), -radius2 * cos(alpha * 0.5) + radius);
  return dot(normalize(edgeNormal), tipToPoint);
}`,t.functions.regularDistanceField=`float regularDistanceField(vec2 point, float numPoints, float radius, float angle) {
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
}`,b(e,i,o,"shape-");let n=null;"shape-opacity"in e&&(n=l(t,e["shape-opacity"],f));let s="coordsPx";"shape-scale"in e&&(s=`coordsPx / ${l(t,e["shape-scale"],f|$)}`);let a=null;"shape-fill-color"in e&&(a=l(t,e["shape-fill-color"],m));let p=null;"shape-stroke-color"in e&&(p=l(t,e["shape-stroke-color"],m));let c=null;"shape-stroke-width"in e&&(c=l(t,e["shape-stroke-width"],f));const u=l(t,e["shape-points"],f);let d="0.";"shape-angle"in e&&(d=l(t,e["shape-angle"],f));let g,h=l(t,e["shape-radius"],f);if(c!==null&&(h=`${h} + ${c} * 0.5`),"shape-radius2"in e){let S=l(t,e["shape-radius2"],f);c!==null&&(S=`${S} + ${c} * 0.5`),g=`starDistanceField(${s}, ${u}, ${h}, ${S}, ${d})`}else g=`regularDistanceField(${s}, ${u}, ${h}, ${d})`;const v=O(g,a,p,c,n);i.setSymbolColorExpression(v)}function V(e,i,r,o,t){let n="vec4(1.0)";"icon-color"in e&&(n=l(t,e["icon-color"],m)),"icon-opacity"in e&&(n=`${n} * ${l(t,e["icon-opacity"],f)}`);const s=k(e["icon-src"]),a=w(e,i,r,"icon-",s);if(i.setSymbolColorExpression(`${n} * samplePremultiplied(u_texture${s}, v_texCoord)`).setSymbolSizeExpression(a),"icon-width"in e&&"icon-height"in e&&i.setSymbolSizeExpression(`vec2(${l(o,e["icon-width"],f)}, ${l(o,e["icon-height"],f)})`),"icon-offset"in e&&"icon-size"in e){const p=l(o,e["icon-size"],$),c=i.getSymbolSizeExpression();i.setSymbolSizeExpression(p);const u=_(e,"icon-",o,"v_quadSizePx",p);i.setTextureCoordinateExpression(`(vec4((${u}).xyxy) + vec4(0., 0., ${p})) / (${c}).xyxy`)}if(b(e,i,o,"icon-"),"icon-anchor"in e){const p=l(o,e["icon-anchor"],$);let c="1.0";"icon-scale"in e&&(c=l(o,e["icon-scale"],f|$));let u;e["icon-anchor-x-units"]==="pixels"&&e["icon-anchor-y-units"]==="pixels"?u=`${p} * ${c}`:e["icon-anchor-x-units"]==="pixels"?u=`${p} * vec2(vec2(${c}).x, v_quadSizePx.y)`:e["icon-anchor-y-units"]==="pixels"?u=`${p} * vec2(v_quadSizePx.x, vec2(${c}).x)`:u=`${p} * v_quadSizePx`;let d=`v_quadSizePx * vec2(0.5, -0.5) + ${u} * vec2(-1., 1.)`;if("icon-anchor-origin"in e)switch(e["icon-anchor-origin"]){case"top-right":d=`v_quadSizePx * -0.5 + ${u}`;break;case"bottom-left":d=`v_quadSizePx * 0.5 - ${u}`;break;case"bottom-right":d=`v_quadSizePx * vec2(-0.5, 0.5) + ${u} * vec2(1., -1.)`;break}i.setSymbolOffsetExpression(`${i.getSymbolOffsetExpression()} + ${d}`)}}function K(e,i,r,o,t){if("stroke-color"in e&&i.setStrokeColorExpression(l(t,e["stroke-color"],m)),"stroke-pattern-src"in e){const n=k(e["stroke-pattern-src"]),s=w(e,i,r,"stroke-pattern-",n);let a=s,p="vec2(0.)";"stroke-pattern-offset"in e&&"stroke-pattern-size"in e&&(a=l(t,e["stroke-pattern-size"],$),p=_(e,"stroke-pattern-",t,s,a));let c="0.";"stroke-pattern-spacing"in e&&(c=l(t,e["stroke-pattern-spacing"],f)),t.functions.sampleStrokePattern=`vec4 sampleStrokePattern(sampler2D texture, vec2 textureSize, vec2 textureOffset, vec2 sampleSize, float spacingPx, float currentLengthPx, float currentRadiusRatio, float lineWidth) {
  float currentLengthScaled = currentLengthPx * sampleSize.y / lineWidth;
  float spacingScaled = spacingPx * sampleSize.y / lineWidth;
  float uCoordPx = mod(currentLengthScaled, (sampleSize.x + spacingScaled));
  // make sure that we're not sampling too close to the borders to avoid interpolation with outside pixels
  uCoordPx = clamp(uCoordPx, 0.5, sampleSize.x - 0.5);
  float vCoordPx = (-currentRadiusRatio * 0.5 + 0.5) * sampleSize.y;
  vec2 texCoord = (vec2(uCoordPx, vCoordPx) + textureOffset) / textureSize;
  return samplePremultiplied(texture, texCoord);
}`;const u=`u_texture${n}`;let d="1.";"stroke-color"in e&&(d=i.getStrokeColorExpression()),i.setStrokeColorExpression(`${d} * sampleStrokePattern(${u}, ${s}, ${p}, ${a}, ${c}, currentLengthPx, currentRadiusRatio, v_width)`)}if("stroke-width"in e&&i.setStrokeWidthExpression(l(o,e["stroke-width"],f)),"stroke-offset"in e&&i.setStrokeOffsetExpression(l(o,e["stroke-offset"],f)),"stroke-line-cap"in e&&i.setStrokeCapExpression(l(o,e["stroke-line-cap"],x)),"stroke-line-join"in e&&i.setStrokeJoinExpression(l(o,e["stroke-line-join"],x)),"stroke-miter-limit"in e&&i.setStrokeMiterLimitExpression(l(o,e["stroke-miter-limit"],f)),"stroke-line-dash"in e){t.functions.getSingleDashDistance=`float getSingleDashDistance(float distance, float radius, float dashOffset, float dashLength, float dashLengthTotal, float capType) {
  float localDistance = mod(distance, dashLengthTotal);
  float distanceSegment = abs(localDistance - dashOffset - dashLength * 0.5) - dashLength * 0.5;
  distanceSegment = min(distanceSegment, dashLengthTotal - localDistance);
  if (capType == ${D("square")}) {
    distanceSegment -= v_width * 0.5;
  } else if (capType == ${D("round")}) {
    distanceSegment = min(distanceSegment, sqrt(distanceSegment * distanceSegment + radius * radius) - v_width * 0.5);
  }
  return distanceSegment;
}`;let n=e["stroke-line-dash"].map(h=>l(t,h,f));n.length%2===1&&(n=[...n,...n]);let s="0.";"stroke-line-dash-offset"in e&&(s=l(o,e["stroke-line-dash-offset"],f));const p=`dashDistanceField_${k(e["stroke-line-dash"])}`,c=n.map((h,v)=>`float dashLength${v} = ${h};`),u=n.map((h,v)=>`dashLength${v}`).join(" + ");let d="0.",g=`getSingleDashDistance(distance, radius, ${d}, dashLength0, totalDashLength, capType)`;for(let h=2;h<n.length;h+=2)d=`${d} + dashLength${h-2} + dashLength${h-1}`,g=`min(${g}, getSingleDashDistance(distance, radius, ${d}, dashLength${h}, totalDashLength, capType))`;t.functions[p]=`float ${p}(float distance, float radius, float capType) {
  ${c.join(`
  `)}
  float totalDashLength = ${u};
  return ${g};
}`,i.setStrokeDistanceFieldExpression(`${p}(currentLengthPx + ${s}, currentRadiusPx, capType)`)}}function U(e,i,r,o,t){if("fill-color"in e&&i.setFillColorExpression(l(t,e["fill-color"],m)),"fill-pattern-src"in e){const n=k(e["fill-pattern-src"]),s=w(e,i,r,"fill-pattern-",n);let a=s,p="vec2(0.)";"fill-pattern-offset"in e&&"fill-pattern-size"in e&&(a=l(t,e["fill-pattern-size"],$),p=_(e,"fill-pattern-",t,s,a)),t.functions.sampleFillPattern=`vec4 sampleFillPattern(sampler2D texture, vec2 textureSize, vec2 textureOffset, vec2 sampleSize, vec2 pxOrigin, vec2 pxPosition) {
  float scaleRatio = pow(2., mod(u_zoom + 0.5, 1.) - 0.5);
  vec2 pxRelativePos = pxPosition - pxOrigin;
  // rotate the relative position from origin by the current view rotation
  pxRelativePos = vec2(pxRelativePos.x * cos(u_rotation) - pxRelativePos.y * sin(u_rotation), pxRelativePos.x * sin(u_rotation) + pxRelativePos.y * cos(u_rotation));
  // sample position is computed according to the sample offset & size
  vec2 samplePos = mod(pxRelativePos / scaleRatio, sampleSize);
  // also make sure that we're not sampling too close to the borders to avoid interpolation with outside pixels
  samplePos = clamp(samplePos, vec2(0.5), sampleSize - vec2(0.5));
  samplePos.y = sampleSize.y - samplePos.y; // invert y axis so that images appear upright
  return samplePremultiplied(texture, (samplePos + textureOffset) / textureSize);
}`;const c=`u_texture${n}`;let u="1.";"fill-color"in e&&(u=i.getFillColorExpression()),i.setFillColorExpression(`${u} * sampleFillPattern(${c}, ${s}, ${p}, ${a}, pxOrigin, pxPos)`)}}function M(e){const i={inFragmentShader:!1,properties:{},variables:{},functions:{},style:e},r={inFragmentShader:!0,variables:i.variables,properties:{},functions:{},style:e},o=new q,t={};if("icon-src"in e?V(e,o,t,i,r):"shape-points"in e?G(e,o,t,i,r):"circle-radius"in e&&W(e,o,t,i,r),K(e,o,t,i,r),U(e,o,t,i,r),e.filter){const s=l(r,e.filter,P);o.setFragmentDiscardExpression(`!${s}`)}Object.keys(r.variables).forEach(function(s){const a=r.variables[s],p=N(a.name);o.addUniform(`${z(a.type)} ${p}`);let c;a.type===x?c=()=>F(e.variables[a.name]):a.type===m?c=()=>R([...E(e.variables[a.name]||"#eee")]):a.type===P?c=()=>e.variables[a.name]?1:0:c=()=>e.variables[a.name],t[p]=c}),Object.keys(r.properties).forEach(function(s){const a=r.properties[s];i.properties[s]||(i.properties[s]=a);let p=z(a.type),c=`a_prop_${a.name}`;a.type===m&&(p="vec4",c=`unpackColor(${c})`,o.addVertexShaderFunction(j)),o.addVarying(`v_prop_${a.name}`,p,c)}),Object.keys(i.properties).forEach(function(s){const a=i.properties[s];o.addAttribute(`${z(a.type)} a_prop_${a.name}`)});const n=Object.keys(i.properties).map(function(s){const a=i.properties[s];let p;return a.evaluator?p=a.evaluator:a.type===x?p=c=>F(c.get(a.name)):a.type===m?p=c=>R([...E(c.get(a.name)||"#eee")]):a.type===P?p=c=>c.get(a.name)?1:0:p=c=>c.get(a.name),{name:a.name,size:L(a.type),callback:p}});for(const s in i.functions)o.addVertexShaderFunction(i.functions[s]);for(const s in r.functions)o.addFragmentShaderFunction(r.functions[s]);return{builder:o,attributes:n.reduce((s,a)=>({...s,[a.name]:{callback:a.callback,size:a.size}}),{}),uniforms:t}}export{l as e,M as p};
