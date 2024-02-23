import{n as o,l as s,s as t}from"./expressions-9328156f.js";const f={GENERATE_POLYGON_BUFFERS:"GENERATE_POLYGON_BUFFERS",GENERATE_POINT_BUFFERS:"GENERATE_POINT_BUFFERS",GENERATE_LINE_STRING_BUFFERS:"GENERATE_LINE_STRING_BUFFERS"};function c(){const i='const e="GENERATE_POLYGON_BUFFERS",t="GENERATE_POINT_BUFFERS",n="GENERATE_LINE_STRING_BUFFERS";function r(e,t){const n=t[0],r=t[1];return t[0]=e[0]*n+e[2]*r+e[4],t[1]=e[1]*n+e[3]*r+e[5],t}function x(e,t){const n=(r=t)[0]*r[3]-r[1]*r[2];var r;!function(e,t){if(!e)throw new Error(t)}(0!==n,"Transformation matrix cannot be inverted");const x=t[0],i=t[1],u=t[2],o=t[3],f=t[4],s=t[5];return e[0]=o/n,e[1]=-i/n,e[2]=-u/n,e[3]=x/n,e[4]=(u*s-o*f)/n,e[5]=-(x*s-i*f)/n,e}function i(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}new Array(6);var u={exports:{}};function o(e,t,n){n=n||2;var r,x,i,u,o,s,l,v=t&&t.length,c=v?t[0]*n:e.length,h=f(e,0,c,n,!0),g=[];if(!h||h.next===h.prev)return g;if(v&&(h=function(e,t,n,r){var x,i,u,o=[];for(x=0,i=t.length;x<i;x++)(u=f(e,t[x]*r,x<i-1?t[x+1]*r:e.length,r,!1))===u.next&&(u.steiner=!0),o.push(d(u));for(o.sort(p),x=0;x<o.length;x++)n=y(o[x],n);return n}(e,t,h,n)),e.length>80*n){r=i=e[0],x=u=e[1];for(var b=n;b<c;b+=n)(o=e[b])<r&&(r=o),(s=e[b+1])<x&&(x=s),o>i&&(i=o),s>u&&(u=s);l=0!==(l=Math.max(i-r,u-x))?32767/l:0}return a(h,g,n,r,x,l,0),g}function f(e,t,n,r,x){var i,u;if(x===O(e,t,n,r)>0)for(i=t;i<n;i+=r)u=P(i,e[i],e[i+1],u);else for(i=n-r;i>=t;i-=r)u=P(i,e[i],e[i+1],u);return u&&m(u,u.next)&&(B(u),u=u.next),u}function s(e,t){if(!e)return e;t||(t=e);var n,r=e;do{if(n=!1,r.steiner||!m(r,r.next)&&0!==M(r.prev,r,r.next))r=r.next;else{if(B(r),(r=t=r.prev)===r.next)break;n=!0}}while(n||r!==t);return t}function a(e,t,n,r,x,i,u){if(e){!u&&i&&function(e,t,n,r){var x=e;do{0===x.z&&(x.z=b(x.x,x.y,t,n,r)),x.prevZ=x.prev,x.nextZ=x.next,x=x.next}while(x!==e);x.prevZ.nextZ=null,x.prevZ=null,function(e){var t,n,r,x,i,u,o,f,s=1;do{for(n=e,e=null,i=null,u=0;n;){for(u++,r=n,o=0,t=0;t<s&&(o++,r=r.nextZ);t++);for(f=s;o>0||f>0&&r;)0!==o&&(0===f||!r||n.z<=r.z)?(x=n,n=n.nextZ,o--):(x=r,r=r.nextZ,f--),i?i.nextZ=x:e=x,x.prevZ=i,i=x;n=r}i.nextZ=null,s*=2}while(u>1)}(x)}(e,r,x,i);for(var o,f,p=e;e.prev!==e.next;)if(o=e.prev,f=e.next,i?v(e,r,x,i):l(e))t.push(o.i/n|0),t.push(e.i/n|0),t.push(f.i/n|0),B(e),e=f.next,p=f.next;else if((e=f)===p){u?1===u?a(e=c(s(e),t,n),t,n,r,x,i,2):2===u&&h(e,t,n,r,x,i):a(s(e),t,n,r,x,i,1);break}}}function l(e){var t=e.prev,n=e,r=e.next;if(M(t,n,r)>=0)return!1;for(var x=t.x,i=n.x,u=r.x,o=t.y,f=n.y,s=r.y,a=x<i?x<u?x:u:i<u?i:u,l=o<f?o<s?o:s:f<s?f:s,v=x>i?x>u?x:u:i>u?i:u,c=o>f?o>s?o:s:f>s?f:s,h=r.next;h!==t;){if(h.x>=a&&h.x<=v&&h.y>=l&&h.y<=c&&Z(x,o,i,f,u,s,h.x,h.y)&&M(h.prev,h,h.next)>=0)return!1;h=h.next}return!0}function v(e,t,n,r){var x=e.prev,i=e,u=e.next;if(M(x,i,u)>=0)return!1;for(var o=x.x,f=i.x,s=u.x,a=x.y,l=i.y,v=u.y,c=o<f?o<s?o:s:f<s?f:s,h=a<l?a<v?a:v:l<v?l:v,p=o>f?o>s?o:s:f>s?f:s,y=a>l?a>v?a:v:l>v?l:v,g=b(c,h,t,n,r),d=b(p,y,t,n,r),w=e.prevZ,m=e.nextZ;w&&w.z>=g&&m&&m.z<=d;){if(w.x>=c&&w.x<=p&&w.y>=h&&w.y<=y&&w!==x&&w!==u&&Z(o,a,f,l,s,v,w.x,w.y)&&M(w.prev,w,w.next)>=0)return!1;if(w=w.prevZ,m.x>=c&&m.x<=p&&m.y>=h&&m.y<=y&&m!==x&&m!==u&&Z(o,a,f,l,s,v,m.x,m.y)&&M(m.prev,m,m.next)>=0)return!1;m=m.nextZ}for(;w&&w.z>=g;){if(w.x>=c&&w.x<=p&&w.y>=h&&w.y<=y&&w!==x&&w!==u&&Z(o,a,f,l,s,v,w.x,w.y)&&M(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;m&&m.z<=d;){if(m.x>=c&&m.x<=p&&m.y>=h&&m.y<=y&&m!==x&&m!==u&&Z(o,a,f,l,s,v,m.x,m.y)&&M(m.prev,m,m.next)>=0)return!1;m=m.nextZ}return!0}function c(e,t,n){var r=e;do{var x=r.prev,i=r.next.next;!m(x,i)&&A(x,r,r.next,i)&&F(x,i)&&F(i,x)&&(t.push(x.i/n|0),t.push(r.i/n|0),t.push(i.i/n|0),B(r),B(r.next),r=e=i),r=r.next}while(r!==e);return s(r)}function h(e,t,n,r,x,i){var u=e;do{for(var o=u.next.next;o!==u.prev;){if(u.i!==o.i&&w(u,o)){var f=I(u,o);return u=s(u,u.next),f=s(f,f.next),a(u,t,n,r,x,i,0),void a(f,t,n,r,x,i,0)}o=o.next}u=u.next}while(u!==e)}function p(e,t){return e.x-t.x}function y(e,t){var n=function(e,t){var n,r=t,x=e.x,i=e.y,u=-1/0;do{if(i<=r.y&&i>=r.next.y&&r.next.y!==r.y){var o=r.x+(i-r.y)*(r.next.x-r.x)/(r.next.y-r.y);if(o<=x&&o>u&&(u=o,n=r.x<r.next.x?r:r.next,o===x))return n}r=r.next}while(r!==t);if(!n)return null;var f,s=n,a=n.x,l=n.y,v=1/0;r=n;do{x>=r.x&&r.x>=a&&x!==r.x&&Z(i<l?x:u,i,a,l,i<l?u:x,i,r.x,r.y)&&(f=Math.abs(i-r.y)/(x-r.x),F(r,e)&&(f<v||f===v&&(r.x>n.x||r.x===n.x&&g(n,r)))&&(n=r,v=f)),r=r.next}while(r!==s);return n}(e,t);if(!n)return t;var r=I(n,e);return s(r,r.next),s(n,n.next)}function g(e,t){return M(e.prev,e,t.prev)<0&&M(t.next,e,e.next)<0}function b(e,t,n,r,x){return(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-n)*x|0)|e<<8))|e<<4))|e<<2))|e<<1))|(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=(t-r)*x|0)|t<<8))|t<<4))|t<<2))|t<<1))<<1}function d(e){var t=e,n=e;do{(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next}while(t!==e);return n}function Z(e,t,n,r,x,i,u,o){return(x-u)*(t-o)>=(e-u)*(i-o)&&(e-u)*(r-o)>=(n-u)*(t-o)&&(n-u)*(i-o)>=(x-u)*(r-o)}function w(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!function(e,t){var n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&A(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}(e,t)&&(F(e,t)&&F(t,e)&&function(e,t){var n=e,r=!1,x=(e.x+t.x)/2,i=(e.y+t.y)/2;do{n.y>i!=n.next.y>i&&n.next.y!==n.y&&x<(n.next.x-n.x)*(i-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next}while(n!==e);return r}(e,t)&&(M(e.prev,e,t.prev)||M(e,t.prev,t))||m(e,t)&&M(e.prev,e,e.next)>0&&M(t.prev,t,t.next)>0)}function M(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function m(e,t){return e.x===t.x&&e.y===t.y}function A(e,t,n,r){var x=z(M(e,t,n)),i=z(M(e,t,r)),u=z(M(n,r,e)),o=z(M(n,r,t));return x!==i&&u!==o||(!(0!==x||!E(e,n,t))||(!(0!==i||!E(e,r,t))||(!(0!==u||!E(n,e,r))||!(0!==o||!E(n,t,r)))))}function E(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function z(e){return e>0?1:e<0?-1:0}function F(e,t){return M(e.prev,e,e.next)<0?M(e,t,e.next)>=0&&M(e,e.prev,t)>=0:M(e,t,e.prev)<0||M(e,e.next,t)<0}function I(e,t){var n=new _(e.i,e.x,e.y),r=new _(t.i,t.x,t.y),x=e.next,i=t.prev;return e.next=t,t.prev=e,n.next=x,x.prev=n,r.next=n,n.prev=r,i.next=r,r.prev=i,r}function P(e,t,n,r){var x=new _(e,t,n);return r?(x.next=r.next,x.prev=r,r.next.prev=x,r.next=x):(x.prev=x,x.next=x),x}function B(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function _(e,t,n){this.i=e,this.x=t,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function O(e,t,n,r){for(var x=0,i=t,u=n-r;i<n;i+=r)x+=(e[u]-e[i])*(e[i+1]+e[u+1]),u=i;return x}u.exports=o,u.exports.default=o,o.deviation=function(e,t,n,r){var x=t&&t.length,i=x?t[0]*n:e.length,u=Math.abs(O(e,0,i,n));if(x)for(var o=0,f=t.length;o<f;o++){var s=t[o]*n,a=o<f-1?t[o+1]*n:e.length;u-=Math.abs(O(e,s,a,n))}var l=0;for(o=0;o<r.length;o+=3){var v=r[o]*n,c=r[o+1]*n,h=r[o+2]*n;l+=Math.abs((e[v]-e[h])*(e[c+1]-e[v+1])-(e[v]-e[c])*(e[h+1]-e[v+1]))}return 0===u&&0===l?0:Math.abs((l-u)/u)},o.flatten=function(e){for(var t=e[0][0].length,n={vertices:[],holes:[],dimensions:t},r=0,x=0;x<e.length;x++){for(var i=0;i<e[x].length;i++)for(var u=0;u<t;u++)n.vertices.push(e[x][i][u]);x>0&&(r+=e[x-1].length,n.holes.push(r))}return n};var N=i(u.exports);const R=[],S={vertexPosition:0,indexPosition:0};function T(e,t,n,r,x){e[t+0]=n,e[t+1]=r,e[t+2]=x}function U(e,t,n,r,x,i){const u=3+x,o=e[t+0],f=e[t+1],s=R;s.length=x;for(let n=0;n<s.length;n++)s[n]=e[t+2+n];let a=i?i.vertexPosition:0,l=i?i.indexPosition:0;const v=a/u;return T(n,a,o,f,0),s.length&&n.set(s,a+3),a+=u,T(n,a,o,f,1),s.length&&n.set(s,a+3),a+=u,T(n,a,o,f,2),s.length&&n.set(s,a+3),a+=u,T(n,a,o,f,3),s.length&&n.set(s,a+3),a+=u,r[l++]=v,r[l++]=v+1,r[l++]=v+3,r[l++]=v+1,r[l++]=v+2,r[l++]=v+3,S.vertexPosition=a,S.indexPosition=l,S}function k(e,t,n,x,i,u,o,f,s,a){const l=8+f.length,v=u.length/l,c=[e[t+0],e[t+1]],h=[e[n],e[n+1]],p=r(s,[...c]),y=r(s,[...h]);function g(e,t,n){const r=Math.sqrt((t[0]-e[0])*(t[0]-e[0])+(t[1]-e[1])*(t[1]-e[1])),x=[(t[0]-e[0])/r,(t[1]-e[1])/r],i=[-x[1],x[0]],u=Math.sqrt((n[0]-e[0])*(n[0]-e[0])+(n[1]-e[1])*(n[1]-e[1])),o=[(n[0]-e[0])/u,(n[1]-e[1])/u],f=0===r||0===u?0:Math.acos((s=o[0]*x[0]+o[1]*x[1],a=-1,l=1,Math.min(Math.max(s,a),l)));var s,a,l;return o[0]*i[0]+o[1]*i[1]>0?f:2*Math.PI-f}let b=-1,d=-1;const Z=null!==i;if(null!==x){b=g(p,y,r(s,[...[e[x],e[x+1]]]))}if(Z){d=g(y,p,r(s,[...[e[i],e[i+1]]]))}return u.push(c[0],c[1],h[0],h[1],b,d,a,0),u.push(...f),u.push(c[0],c[1],h[0],h[1],b,d,a,1),u.push(...f),u.push(c[0],c[1],h[0],h[1],b,d,a,2),u.push(...f),u.push(c[0],c[1],h[0],h[1],b,d,a,3),u.push(...f),o.push(v,v+1,v+2,v+1,v+3,v+2),a+Math.sqrt((y[0]-p[0])*(y[0]-p[0])+(y[1]-p[1])*(y[1]-p[1]))}function G(e,t,n,r,x){const i=2+x;let u=t;const o=e.slice(u,u+x);u+=x;const f=e[u++];let s=0;const a=new Array(f-1);for(let t=0;t<f;t++)s+=e[u++],t<f-1&&(a[t]=s);const l=e.slice(u,u+2*s),v=N(l,a,2);for(let e=0;e<v.length;e++)r.push(v[e]+n.length/i);for(let e=0;e<l.length;e+=2)n.push(l[e],l[e+1],...o);return u+2*s}const j=self;j.onmessage=r=>{const i=r.data;switch(i.type){case t:{const e=3,t=2,n=i.customAttributesSize,r=t+n,x=new Float32Array(i.renderInstructions),u=x.length/r,o=4*u*(n+e),f=new Uint32Array(6*u),s=new Float32Array(o);let a;for(let e=0;e<x.length;e+=r)a=U(x,e,s,f,n,a);const l=Object.assign({vertexBuffer:s.buffer,indexBuffer:f.buffer,renderInstructions:x.buffer},i);j.postMessage(l,[s.buffer,f.buffer,x.buffer]);break}case n:{const e=[],t=[],n=i.customAttributesSize,r=2,u=new Float32Array(i.renderInstructions);let o=0;const f=[1,0,0,1,0,0];let s,a;for(x(f,i.renderInstructionsTransform);o<u.length;){a=Array.from(u.slice(o,o+n)),o+=n,s=u[o++];const x=o,i=o+(s-1)*r,l=u[x]===u[i]&&u[x+1]===u[i+1];let v=0;for(let n=0;n<s-1;n++){let c=null;n>0?c=o+(n-1)*r:l&&(c=i-r);let h=null;n<s-2?h=o+(n+2)*r:l&&(h=x+r),v=k(u,o+n*r,o+(n+1)*r,c,h,e,t,a,f,v)}o+=s*r}const l=Uint32Array.from(t),v=Float32Array.from(e),c=Object.assign({vertexBuffer:v.buffer,indexBuffer:l.buffer,renderInstructions:u.buffer},i);j.postMessage(c,[v.buffer,l.buffer,u.buffer]);break}case e:{const e=[],t=[],n=i.customAttributesSize,r=new Float32Array(i.renderInstructions);let x=0;for(;x<r.length;)x=G(r,x,e,t,n);const u=Uint32Array.from(t),o=Float32Array.from(e),f=Object.assign({vertexBuffer:o.buffer,indexBuffer:u.buffer,renderInstructions:r.buffer},i);j.postMessage(f,[o.buffer,u.buffer,r.buffer]);break}}};';return new Worker(typeof Blob>"u"?"data:application/javascript;base64,"+Buffer.from(i,"binary").toString("base64"):URL.createObjectURL(new Blob([i],{type:"application/javascript"})))}function u(){return{"fill-color":"rgba(255,255,255,0.4)","stroke-color":"#3399CC","stroke-width":1.25,"circle-radius":5,"circle-fill-color":"rgba(255,255,255,0.4)","circle-stroke-width":1.25,"circle-stroke-color":"#3399CC"}}const n=`#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
uniform mat4 u_projectionMatrix;
uniform mat4 u_screenToWorldMatrix;
uniform vec2 u_viewportSizePx;
uniform float u_pixelRatio;
uniform float u_globalAlpha;
uniform float u_time;
uniform float u_zoom;
uniform float u_resolution;
uniform float u_rotation;
uniform vec4 u_renderExtent;
uniform mediump int u_hitDetection;

const float PI = 3.141592653589793238;
const float TWO_PI = 2.0 * PI;
`,r=u();class v{constructor(){this.uniforms_=[],this.attributes_=[],this.varyings_=[],this.hasSymbol_=!1,this.symbolSizeExpression_=`vec2(${o(r["circle-radius"])} + ${o(r["circle-stroke-width"]*.5)})`,this.symbolRotationExpression_="0.0",this.symbolOffsetExpression_="vec2(0.0)",this.symbolColorExpression_=s(r["circle-fill-color"]),this.texCoordExpression_="vec4(0.0, 0.0, 1.0, 1.0)",this.discardExpression_="false",this.symbolRotateWithView_=!1,this.hasStroke_=!1,this.strokeWidthExpression_=o(r["stroke-width"]),this.strokeColorExpression_=s(r["stroke-color"]),this.strokeOffsetExpression_="0.",this.strokeCapExpression_=t("round"),this.strokeJoinExpression_=t("round"),this.strokeMiterLimitExpression_="10.",this.strokeDistanceFieldExpression_="-1000.",this.hasFill_=!1,this.fillColorExpression_=s(r["fill-color"]),this.vertexShaderFunctions_=[],this.fragmentShaderFunctions_=[]}addUniform(e){return this.uniforms_.push(e),this}addAttribute(e){return this.attributes_.push(e),this}addVarying(e,a,l){return this.varyings_.push({name:e,type:a,expression:l}),this}setSymbolSizeExpression(e){return this.hasSymbol_=!0,this.symbolSizeExpression_=e,this}getSymbolSizeExpression(){return this.symbolSizeExpression_}setSymbolRotationExpression(e){return this.symbolRotationExpression_=e,this}setSymbolOffsetExpression(e){return this.symbolOffsetExpression_=e,this}getSymbolOffsetExpression(){return this.symbolOffsetExpression_}setSymbolColorExpression(e){return this.hasSymbol_=!0,this.symbolColorExpression_=e,this}getSymbolColorExpression(){return this.symbolColorExpression_}setTextureCoordinateExpression(e){return this.texCoordExpression_=e,this}setFragmentDiscardExpression(e){return this.discardExpression_=e,this}setSymbolRotateWithView(e){return this.symbolRotateWithView_=e,this}setStrokeWidthExpression(e){return this.hasStroke_=!0,this.strokeWidthExpression_=e,this}setStrokeColorExpression(e){return this.hasStroke_=!0,this.strokeColorExpression_=e,this}setStrokeOffsetExpression(e){return this.strokeOffsetExpression_=e,this}setStrokeCapExpression(e){return this.strokeCapExpression_=e,this}setStrokeJoinExpression(e){return this.strokeJoinExpression_=e,this}setStrokeMiterLimitExpression(e){return this.strokeMiterLimitExpression_=e,this}setStrokeDistanceFieldExpression(e){return this.strokeDistanceFieldExpression_=e,this}setFillColorExpression(e){return this.hasFill_=!0,this.fillColorExpression_=e,this}addVertexShaderFunction(e){this.vertexShaderFunctions_.includes(e)||this.vertexShaderFunctions_.push(e)}addFragmentShaderFunction(e){this.fragmentShaderFunctions_.includes(e)||this.fragmentShaderFunctions_.push(e)}getSymbolVertexShader(){return this.hasSymbol_?`${n}
${this.uniforms_.map(function(e){return"uniform "+e+";"}).join(`
`)}
attribute vec2 a_position;
attribute float a_index;
attribute vec4 a_hitColor;
${this.attributes_.map(function(e){return"attribute "+e+";"}).join(`
`)}
varying vec2 v_texCoord;
varying vec2 v_quadCoord;
varying vec4 v_hitColor;
varying vec2 v_centerPx;
varying float v_angle;
varying vec2 v_quadSizePx;
${this.varyings_.map(function(e){return"varying "+e.type+" "+e.name+";"}).join(`
`)}
${this.vertexShaderFunctions_.join(`
`)}
vec2 pxToScreen(vec2 coordPx) {
  vec2 scaled = coordPx / u_viewportSizePx / 0.5;
  ${this.symbolRotateWithView_?"scaled = vec2(scaled.x * cos(-u_rotation) - scaled.y * sin(-u_rotation), scaled.x * sin(-u_rotation) + scaled.y * cos(-u_rotation));":""}
  return scaled;
}

vec2 screenToPx(vec2 coordScreen) {
  return (coordScreen * 0.5 + 0.5) * u_viewportSizePx;
}

void main(void) {
  v_quadSizePx = ${this.symbolSizeExpression_};
  vec2 halfSizePx = v_quadSizePx * 0.5;
  vec2 centerOffsetPx = ${this.symbolOffsetExpression_};
  vec2 offsetPx = centerOffsetPx;
  if (a_index == 0.0) {
    offsetPx -= halfSizePx;
  } else if (a_index == 1.0) {
    offsetPx += halfSizePx * vec2(1., -1.);
  } else if (a_index == 2.0) {
    offsetPx += halfSizePx;
  } else {
    offsetPx += halfSizePx * vec2(-1., 1.);
  }
  float angle = ${this.symbolRotationExpression_};
  float c = cos(-angle);
  float s = sin(-angle);
  offsetPx = vec2(c * offsetPx.x - s * offsetPx.y, s * offsetPx.x + c * offsetPx.y);
  vec4 center = u_projectionMatrix * vec4(a_position, 0.0, 1.0);
  gl_Position = center + vec4(pxToScreen(offsetPx), 0., 0.);
  vec4 texCoord = ${this.texCoordExpression_};
  float u = a_index == 0.0 || a_index == 3.0 ? texCoord.s : texCoord.p;
  float v = a_index == 2.0 || a_index == 3.0 ? texCoord.t : texCoord.q;
  v_texCoord = vec2(u, v);
  v_hitColor = a_hitColor;
  v_angle = angle;
  ${this.symbolRotateWithView_?"v_angle += u_rotation;":""}
  c = cos(-v_angle);
  s = sin(-v_angle);
  centerOffsetPx = vec2(c * centerOffsetPx.x - s * centerOffsetPx.y, s * centerOffsetPx.x + c * centerOffsetPx.y); 
  v_centerPx = screenToPx(center.xy) + centerOffsetPx;
${this.varyings_.map(function(e){return"  "+e.name+" = "+e.expression+";"}).join(`
`)}
}`:null}getSymbolFragmentShader(){return this.hasSymbol_?`${n}
${this.uniforms_.map(function(e){return"uniform "+e+";"}).join(`
`)}
varying vec2 v_texCoord;
varying vec4 v_hitColor;
varying vec2 v_centerPx;
varying float v_angle;
varying vec2 v_quadSizePx;
${this.varyings_.map(function(e){return"varying "+e.type+" "+e.name+";"}).join(`
`)}
${this.fragmentShaderFunctions_.join(`
`)}

void main(void) {
  if (${this.discardExpression_}) { discard; }
  vec2 coordsPx = gl_FragCoord.xy / u_pixelRatio - v_centerPx; // relative to center
  float c = cos(v_angle);
  float s = sin(v_angle);
  coordsPx = vec2(c * coordsPx.x - s * coordsPx.y, s * coordsPx.x + c * coordsPx.y);
  gl_FragColor = ${this.symbolColorExpression_};
  if (u_hitDetection > 0) {
    if (gl_FragColor.a < 0.05) { discard; };
    gl_FragColor = v_hitColor;
  }
}`:null}getStrokeVertexShader(){return this.hasStroke_?`${n}
${this.uniforms_.map(function(e){return"uniform "+e+";"}).join(`
`)}
attribute vec2 a_position;
attribute float a_index;
attribute vec2 a_segmentStart;
attribute vec2 a_segmentEnd;
attribute float a_parameters;
attribute float a_distance;
attribute vec2 a_joinAngles;
attribute vec4 a_hitColor;
${this.attributes_.map(function(e){return"attribute "+e+";"}).join(`
`)}
varying vec2 v_segmentStart;
varying vec2 v_segmentEnd;
varying float v_angleStart;
varying float v_angleEnd;
varying float v_width;
varying vec4 v_hitColor;
varying float v_distanceOffsetPx;
${this.varyings_.map(function(e){return"varying "+e.type+" "+e.name+";"}).join(`
`)}
${this.vertexShaderFunctions_.join(`
`)}
vec2 worldToPx(vec2 worldPos) {
  vec4 screenPos = u_projectionMatrix * vec4(worldPos, 0.0, 1.0);
  return (0.5 * screenPos.xy + 0.5) * u_viewportSizePx;
}

vec4 pxToScreen(vec2 pxPos) {
  vec2 screenPos = 2.0 * pxPos / u_viewportSizePx - 1.0;
  return vec4(screenPos, 0.0, 1.0);
}

bool isCap(float joinAngle) {
  return joinAngle < -0.1;
}

vec2 getJoinOffsetDirection(vec2 normalPx, float joinAngle) {
  float halfAngle = joinAngle / 2.0;
  float c = cos(halfAngle);
  float s = sin(halfAngle);
  vec2 angleBisectorNormal = vec2(s * normalPx.x + c * normalPx.y, -c * normalPx.x + s * normalPx.y);
  float length = 1.0 / s;
  return angleBisectorNormal * length;
}

vec2 getOffsetPoint(vec2 point, vec2 normal, float joinAngle, float offsetPx) {
  // if on a cap or the join angle is too high, offset the line along the segment normal
  if (cos(joinAngle) > 0.998 || isCap(joinAngle)) {
    return point - normal * offsetPx;
  }
  // offset is applied along the inverted normal (positive offset goes "right" relative to line direction)
  return point - getJoinOffsetDirection(normal, joinAngle) * offsetPx;
}

void main(void) {
  v_angleStart = a_joinAngles.x;
  v_angleEnd = a_joinAngles.y;
  float vertexNumber = a_parameters;

  float lineWidth = ${this.strokeWidthExpression_};
  float lineOffsetPx = ${this.strokeOffsetExpression_};

  // compute segment start/end in px with offset
  vec2 segmentStartPx = worldToPx(a_segmentStart);
  vec2 segmentEndPx = worldToPx(a_segmentEnd);
  vec2 tangentPx = normalize(segmentEndPx - segmentStartPx);
  vec2 normalPx = vec2(-tangentPx.y, tangentPx.x);
  segmentStartPx = getOffsetPoint(segmentStartPx, normalPx, v_angleStart, lineOffsetPx),
  segmentEndPx = getOffsetPoint(segmentEndPx, normalPx, v_angleEnd, lineOffsetPx);
  
  // compute current vertex position
  float normalDir = vertexNumber < 0.5 || (vertexNumber > 1.5 && vertexNumber < 2.5) ? 1.0 : -1.0;
  float tangentDir = vertexNumber < 1.5 ? 1.0 : -1.0;
  float angle = vertexNumber < 1.5 ? v_angleStart : v_angleEnd;
  vec2 joinDirection;
  vec2 positionPx = vertexNumber < 1.5 ? segmentStartPx : segmentEndPx;
  // if angle is too high, do not make a proper join
  if (cos(angle) > 0.985 || isCap(angle)) {
    joinDirection = normalPx * normalDir - tangentPx * tangentDir;
  } else {
    joinDirection = getJoinOffsetDirection(normalPx * normalDir, angle);
  }
  positionPx = positionPx + joinDirection * lineWidth * 0.5;
  gl_Position = pxToScreen(positionPx);

  v_segmentStart = segmentStartPx;
  v_segmentEnd = segmentEndPx;
  v_width = lineWidth;
  v_hitColor = a_hitColor;
  v_distanceOffsetPx = a_distance / u_resolution;
${this.varyings_.map(function(e){return"  "+e.name+" = "+e.expression+";"}).join(`
`)}
}`:null}getStrokeFragmentShader(){return this.hasStroke_?`${n}
${this.uniforms_.map(function(e){return"uniform "+e+";"}).join(`
`)}
varying vec2 v_segmentStart;
varying vec2 v_segmentEnd;
varying float v_angleStart;
varying float v_angleEnd;
varying float v_width;
varying vec4 v_hitColor;
varying float v_distanceOffsetPx;
${this.varyings_.map(function(e){return"varying "+e.type+" "+e.name+";"}).join(`
`)}
${this.fragmentShaderFunctions_.join(`
`)}

vec2 pxToWorld(vec2 pxPos) {
  vec2 screenPos = 2.0 * pxPos / u_viewportSizePx - 1.0;
  return (u_screenToWorldMatrix * vec4(screenPos, 0.0, 1.0)).xy;
}

bool isCap(float joinAngle) {
  return joinAngle < -0.1;
}

float segmentDistanceField(vec2 point, vec2 start, vec2 end, float width) {
  vec2 tangent = normalize(end - start);
  vec2 normal = vec2(-tangent.y, tangent.x);
  vec2 startToPoint = point - start;
  return abs(dot(startToPoint, normal)) - width * 0.5;
}

float buttCapDistanceField(vec2 point, vec2 start, vec2 end) {
  vec2 startToPoint = point - start;
  vec2 tangent = normalize(end - start);
  return dot(startToPoint, -tangent);
}

float squareCapDistanceField(vec2 point, vec2 start, vec2 end, float width) {
  return buttCapDistanceField(point, start, end) - width * 0.5;
}

float roundCapDistanceField(vec2 point, vec2 start, vec2 end, float width) {
  float onSegment = max(0., 1000. * dot(point - start, end - start)); // this is very high when inside the segment
  return length(point - start) - width * 0.5 - onSegment;
}

float roundJoinDistanceField(vec2 point, vec2 start, vec2 end, float width) {
  return roundCapDistanceField(point, start, end, width);
}

float bevelJoinField(vec2 point, vec2 start, vec2 end, float width, float joinAngle) {
  vec2 startToPoint = point - start;
  vec2 tangent = normalize(end - start);
  float c = cos(joinAngle * 0.5);
  float s = sin(joinAngle * 0.5);
  float direction = -sign(sin(joinAngle));
  vec2 bisector = vec2(c * tangent.x - s * tangent.y, s * tangent.x + c * tangent.y);
  float radius = width * 0.5 * s;
  return dot(startToPoint, bisector * direction) - radius;
}

float miterJoinDistanceField(vec2 point, vec2 start, vec2 end, float width, float joinAngle) {
  if (cos(joinAngle) > 0.985) { // avoid risking a division by zero
    return bevelJoinField(point, start, end, width, joinAngle);
  }
  float miterLength = 1. / sin(joinAngle * 0.5);
  float miterLimit = ${this.strokeMiterLimitExpression_};
  if (miterLength > miterLimit) {
    return bevelJoinField(point, start, end, width, joinAngle);
  }
  return -1000.;
}

float capDistanceField(vec2 point, vec2 start, vec2 end, float width, float capType) {
   if (capType == ${t("butt")}) {
    return buttCapDistanceField(point, start, end);
  } else if (capType == ${t("square")}) {
    return squareCapDistanceField(point, start, end, width);
  }
  return roundCapDistanceField(point, start, end, width);
}

float joinDistanceField(vec2 point, vec2 start, vec2 end, float width, float joinAngle, float joinType) {
  if (joinType == ${t("bevel")}) {
    return bevelJoinField(point, start, end, width, joinAngle);
  } else if (joinType == ${t("miter")}) {
    return miterJoinDistanceField(point, start, end, width, joinAngle);
  }
  return roundJoinDistanceField(point, start, end, width);
}

float computeSegmentPointDistance(vec2 point, vec2 start, vec2 end, float width, float joinAngle, float capType, float joinType) {
  if (isCap(joinAngle)) {
    return capDistanceField(point, start, end, width, capType);
  }
  return joinDistanceField(point, start, end, width, joinAngle, joinType);
}

void main(void) {
  vec2 currentPoint = gl_FragCoord.xy / u_pixelRatio;
  #ifdef GL_FRAGMENT_PRECISION_HIGH
  vec2 v_worldPos = pxToWorld(currentPoint);
  if (
    abs(u_renderExtent[0] - u_renderExtent[2]) > 0.0 && (
      v_worldPos[0] < u_renderExtent[0] ||
      v_worldPos[1] < u_renderExtent[1] ||
      v_worldPos[0] > u_renderExtent[2] ||
      v_worldPos[1] > u_renderExtent[3]
    )
  ) {
    discard;
  }
  #endif
  if (${this.discardExpression_}) { discard; }

  float segmentLength = length(v_segmentEnd - v_segmentStart);
  vec2 segmentTangent = (v_segmentEnd - v_segmentStart) / segmentLength;
  vec2 segmentNormal = vec2(-segmentTangent.y, segmentTangent.x);
  vec2 startToPoint = currentPoint - v_segmentStart;
  float currentLengthPx = max(0., min(dot(segmentTangent, startToPoint), segmentLength)) + v_distanceOffsetPx; 
  float currentRadiusPx = abs(dot(segmentNormal, startToPoint));
  vec4 color = ${this.strokeColorExpression_} * u_globalAlpha;
  float capType = ${this.strokeCapExpression_};
  float joinType = ${this.strokeJoinExpression_};
  float segmentStartDistance = computeSegmentPointDistance(currentPoint, v_segmentStart, v_segmentEnd, v_width, v_angleStart, capType, joinType);
  float segmentEndDistance = computeSegmentPointDistance(currentPoint, v_segmentEnd, v_segmentStart, v_width, v_angleEnd, capType, joinType);
  float distance = max(
    segmentDistanceField(currentPoint, v_segmentStart, v_segmentEnd, v_width),
    max(segmentStartDistance, segmentEndDistance)
  );
  distance = max(distance, ${this.strokeDistanceFieldExpression_});
  gl_FragColor = color * smoothstep(0., -1., distance);
  if (u_hitDetection > 0) {
    if (gl_FragColor.a < 0.1) { discard; };
    gl_FragColor = v_hitColor;
  }
}`:null}getFillVertexShader(){return this.hasFill_?`${n}
${this.uniforms_.map(function(e){return"uniform "+e+";"}).join(`
`)}
attribute vec2 a_position;
attribute vec4 a_hitColor;
${this.attributes_.map(function(e){return"attribute "+e+";"}).join(`
`)}
varying vec4 v_hitColor;
${this.varyings_.map(function(e){return"varying "+e.type+" "+e.name+";"}).join(`
`)}
${this.vertexShaderFunctions_.join(`
`)}
void main(void) {
  gl_Position = u_projectionMatrix * vec4(a_position, 0.0, 1.0);
${this.varyings_.map(function(e){return"  "+e.name+" = "+e.expression+";"}).join(`
`)}
}`:null}getFillFragmentShader(){return this.hasFill_?`${n}
${this.uniforms_.map(function(e){return"uniform "+e+";"}).join(`
`)}
varying vec4 v_hitColor;
${this.varyings_.map(function(e){return"varying "+e.type+" "+e.name+";"}).join(`
`)}
${this.fragmentShaderFunctions_.join(`
`)}
vec2 pxToWorld(vec2 pxPos) {
  vec2 screenPos = 2.0 * pxPos / u_viewportSizePx - 1.0;
  return (u_screenToWorldMatrix * vec4(screenPos, 0.0, 1.0)).xy;
}

void main(void) {
  #ifdef GL_FRAGMENT_PRECISION_HIGH
  vec2 v_worldPos = pxToWorld(gl_FragCoord.xy / u_pixelRatio);
  if (
    abs(u_renderExtent[0] - u_renderExtent[2]) > 0.0 && (
      v_worldPos[0] < u_renderExtent[0] ||
      v_worldPos[1] < u_renderExtent[1] ||
      v_worldPos[0] > u_renderExtent[2] ||
      v_worldPos[1] > u_renderExtent[3]
    )
  ) {
    discard;
  }
  #endif
  if (${this.discardExpression_}) { discard; }
  gl_FragColor = ${this.fillColorExpression_} * u_globalAlpha;
  if (u_hitDetection > 0) {
    if (gl_FragColor.a < 0.1) { discard; };
    gl_FragColor = v_hitColor;
  }
}`:null}}export{v as S,f as W,c};
