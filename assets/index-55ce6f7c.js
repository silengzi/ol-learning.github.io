import{G as re}from"./GeoJSON-f4e7d713.js";import{m as x,aQ as I,l as oe,a7 as se,aX as Q,ae as ee,aO as k,a5 as ae,Z as C,bx as le,b0 as ce,t as ue,b3 as U,aZ as W,ah as de,a_ as fe,_ as he,M as pe,V as me,f as ge,a4 as ve}from"./Layer-763025a3.js";import{B as xe}from"./featureloader-7313d5e8.js";import{a as A,V as _e}from"./VectorLayer-5fefefe7.js";import{n as N,c as O,s as E,e as m,V as d,u as ye,a as Z,g as q,b,d as J,f as be,h as Y,E as Se,i as Ee,j as Pe,k as H,l as we}from"./expressions-6baa81d4.js";import{_ as Fe,i as Re,o as Te,c as Le,b as y,t as T,g as L,F as ke,j as Ce,p as Ae,k as $e}from"./index-87bb3bb9.js";import{T as Be}from"./Tile-3c7ba04a.js";import{O as Ne}from"./OSM-c55a5667.js";import{M as Oe,S as Me}from"./Snap-9b449318.js";import{D as je}from"./Draw-8d037d12.js";import"./GeometryCollection-7f871795.js";import"./JSONFeature-7195c808.js";import"./Feature-5468377f.js";import"./LineString-a90d5a4b.js";import"./MultiPolygon-5da1c9b7.js";import"./MultiPoint-32d892b1.js";import"./vector-31d95deb.js";import"./Layer-79bf392c.js";import"./TileProperty-b49a7745.js";import"./BaseTile-115b346f.js";import"./TileLayer-fd6dc420.js";import"./XYZ-191849cc.js";import"./TileImage-d65ff5bd.js";import"./UrlTile-ce5b3cbe.js";import"./Vector-6dfa3c6b.js";import"./Circle-b8cdaae3.js";const M={GENERATE_POLYGON_BUFFERS:"GENERATE_POLYGON_BUFFERS",GENERATE_POINT_BUFFERS:"GENERATE_POINT_BUFFERS",GENERATE_LINE_STRING_BUFFERS:"GENERATE_LINE_STRING_BUFFERS"};function De(){const t='const e="GENERATE_POLYGON_BUFFERS",t="GENERATE_POINT_BUFFERS",n="GENERATE_LINE_STRING_BUFFERS";function r(e,t){const n=t[0],r=t[1];return t[0]=e[0]*n+e[2]*r+e[4],t[1]=e[1]*n+e[3]*r+e[5],t}function x(e,t){const n=(r=t)[0]*r[3]-r[1]*r[2];var r;!function(e,t){if(!e)throw new Error(t)}(0!==n,"Transformation matrix cannot be inverted");const x=t[0],i=t[1],u=t[2],o=t[3],f=t[4],s=t[5];return e[0]=o/n,e[1]=-i/n,e[2]=-u/n,e[3]=x/n,e[4]=(u*s-o*f)/n,e[5]=-(x*s-i*f)/n,e}function i(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}new Array(6);var u={exports:{}};function o(e,t,n){n=n||2;var r,x,i,u,o,s,l,v=t&&t.length,c=v?t[0]*n:e.length,h=f(e,0,c,n,!0),g=[];if(!h||h.next===h.prev)return g;if(v&&(h=function(e,t,n,r){var x,i,u,o=[];for(x=0,i=t.length;x<i;x++)(u=f(e,t[x]*r,x<i-1?t[x+1]*r:e.length,r,!1))===u.next&&(u.steiner=!0),o.push(d(u));for(o.sort(p),x=0;x<o.length;x++)n=y(o[x],n);return n}(e,t,h,n)),e.length>80*n){r=i=e[0],x=u=e[1];for(var b=n;b<c;b+=n)(o=e[b])<r&&(r=o),(s=e[b+1])<x&&(x=s),o>i&&(i=o),s>u&&(u=s);l=0!==(l=Math.max(i-r,u-x))?32767/l:0}return a(h,g,n,r,x,l,0),g}function f(e,t,n,r,x){var i,u;if(x===O(e,t,n,r)>0)for(i=t;i<n;i+=r)u=P(i,e[i],e[i+1],u);else for(i=n-r;i>=t;i-=r)u=P(i,e[i],e[i+1],u);return u&&m(u,u.next)&&(B(u),u=u.next),u}function s(e,t){if(!e)return e;t||(t=e);var n,r=e;do{if(n=!1,r.steiner||!m(r,r.next)&&0!==M(r.prev,r,r.next))r=r.next;else{if(B(r),(r=t=r.prev)===r.next)break;n=!0}}while(n||r!==t);return t}function a(e,t,n,r,x,i,u){if(e){!u&&i&&function(e,t,n,r){var x=e;do{0===x.z&&(x.z=b(x.x,x.y,t,n,r)),x.prevZ=x.prev,x.nextZ=x.next,x=x.next}while(x!==e);x.prevZ.nextZ=null,x.prevZ=null,function(e){var t,n,r,x,i,u,o,f,s=1;do{for(n=e,e=null,i=null,u=0;n;){for(u++,r=n,o=0,t=0;t<s&&(o++,r=r.nextZ);t++);for(f=s;o>0||f>0&&r;)0!==o&&(0===f||!r||n.z<=r.z)?(x=n,n=n.nextZ,o--):(x=r,r=r.nextZ,f--),i?i.nextZ=x:e=x,x.prevZ=i,i=x;n=r}i.nextZ=null,s*=2}while(u>1)}(x)}(e,r,x,i);for(var o,f,p=e;e.prev!==e.next;)if(o=e.prev,f=e.next,i?v(e,r,x,i):l(e))t.push(o.i/n|0),t.push(e.i/n|0),t.push(f.i/n|0),B(e),e=f.next,p=f.next;else if((e=f)===p){u?1===u?a(e=c(s(e),t,n),t,n,r,x,i,2):2===u&&h(e,t,n,r,x,i):a(s(e),t,n,r,x,i,1);break}}}function l(e){var t=e.prev,n=e,r=e.next;if(M(t,n,r)>=0)return!1;for(var x=t.x,i=n.x,u=r.x,o=t.y,f=n.y,s=r.y,a=x<i?x<u?x:u:i<u?i:u,l=o<f?o<s?o:s:f<s?f:s,v=x>i?x>u?x:u:i>u?i:u,c=o>f?o>s?o:s:f>s?f:s,h=r.next;h!==t;){if(h.x>=a&&h.x<=v&&h.y>=l&&h.y<=c&&Z(x,o,i,f,u,s,h.x,h.y)&&M(h.prev,h,h.next)>=0)return!1;h=h.next}return!0}function v(e,t,n,r){var x=e.prev,i=e,u=e.next;if(M(x,i,u)>=0)return!1;for(var o=x.x,f=i.x,s=u.x,a=x.y,l=i.y,v=u.y,c=o<f?o<s?o:s:f<s?f:s,h=a<l?a<v?a:v:l<v?l:v,p=o>f?o>s?o:s:f>s?f:s,y=a>l?a>v?a:v:l>v?l:v,g=b(c,h,t,n,r),d=b(p,y,t,n,r),w=e.prevZ,m=e.nextZ;w&&w.z>=g&&m&&m.z<=d;){if(w.x>=c&&w.x<=p&&w.y>=h&&w.y<=y&&w!==x&&w!==u&&Z(o,a,f,l,s,v,w.x,w.y)&&M(w.prev,w,w.next)>=0)return!1;if(w=w.prevZ,m.x>=c&&m.x<=p&&m.y>=h&&m.y<=y&&m!==x&&m!==u&&Z(o,a,f,l,s,v,m.x,m.y)&&M(m.prev,m,m.next)>=0)return!1;m=m.nextZ}for(;w&&w.z>=g;){if(w.x>=c&&w.x<=p&&w.y>=h&&w.y<=y&&w!==x&&w!==u&&Z(o,a,f,l,s,v,w.x,w.y)&&M(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;m&&m.z<=d;){if(m.x>=c&&m.x<=p&&m.y>=h&&m.y<=y&&m!==x&&m!==u&&Z(o,a,f,l,s,v,m.x,m.y)&&M(m.prev,m,m.next)>=0)return!1;m=m.nextZ}return!0}function c(e,t,n){var r=e;do{var x=r.prev,i=r.next.next;!m(x,i)&&A(x,r,r.next,i)&&F(x,i)&&F(i,x)&&(t.push(x.i/n|0),t.push(r.i/n|0),t.push(i.i/n|0),B(r),B(r.next),r=e=i),r=r.next}while(r!==e);return s(r)}function h(e,t,n,r,x,i){var u=e;do{for(var o=u.next.next;o!==u.prev;){if(u.i!==o.i&&w(u,o)){var f=I(u,o);return u=s(u,u.next),f=s(f,f.next),a(u,t,n,r,x,i,0),void a(f,t,n,r,x,i,0)}o=o.next}u=u.next}while(u!==e)}function p(e,t){return e.x-t.x}function y(e,t){var n=function(e,t){var n,r=t,x=e.x,i=e.y,u=-1/0;do{if(i<=r.y&&i>=r.next.y&&r.next.y!==r.y){var o=r.x+(i-r.y)*(r.next.x-r.x)/(r.next.y-r.y);if(o<=x&&o>u&&(u=o,n=r.x<r.next.x?r:r.next,o===x))return n}r=r.next}while(r!==t);if(!n)return null;var f,s=n,a=n.x,l=n.y,v=1/0;r=n;do{x>=r.x&&r.x>=a&&x!==r.x&&Z(i<l?x:u,i,a,l,i<l?u:x,i,r.x,r.y)&&(f=Math.abs(i-r.y)/(x-r.x),F(r,e)&&(f<v||f===v&&(r.x>n.x||r.x===n.x&&g(n,r)))&&(n=r,v=f)),r=r.next}while(r!==s);return n}(e,t);if(!n)return t;var r=I(n,e);return s(r,r.next),s(n,n.next)}function g(e,t){return M(e.prev,e,t.prev)<0&&M(t.next,e,e.next)<0}function b(e,t,n,r,x){return(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-n)*x|0)|e<<8))|e<<4))|e<<2))|e<<1))|(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=(t-r)*x|0)|t<<8))|t<<4))|t<<2))|t<<1))<<1}function d(e){var t=e,n=e;do{(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next}while(t!==e);return n}function Z(e,t,n,r,x,i,u,o){return(x-u)*(t-o)>=(e-u)*(i-o)&&(e-u)*(r-o)>=(n-u)*(t-o)&&(n-u)*(i-o)>=(x-u)*(r-o)}function w(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!function(e,t){var n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&A(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}(e,t)&&(F(e,t)&&F(t,e)&&function(e,t){var n=e,r=!1,x=(e.x+t.x)/2,i=(e.y+t.y)/2;do{n.y>i!=n.next.y>i&&n.next.y!==n.y&&x<(n.next.x-n.x)*(i-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next}while(n!==e);return r}(e,t)&&(M(e.prev,e,t.prev)||M(e,t.prev,t))||m(e,t)&&M(e.prev,e,e.next)>0&&M(t.prev,t,t.next)>0)}function M(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function m(e,t){return e.x===t.x&&e.y===t.y}function A(e,t,n,r){var x=z(M(e,t,n)),i=z(M(e,t,r)),u=z(M(n,r,e)),o=z(M(n,r,t));return x!==i&&u!==o||(!(0!==x||!E(e,n,t))||(!(0!==i||!E(e,r,t))||(!(0!==u||!E(n,e,r))||!(0!==o||!E(n,t,r)))))}function E(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function z(e){return e>0?1:e<0?-1:0}function F(e,t){return M(e.prev,e,e.next)<0?M(e,t,e.next)>=0&&M(e,e.prev,t)>=0:M(e,t,e.prev)<0||M(e,e.next,t)<0}function I(e,t){var n=new _(e.i,e.x,e.y),r=new _(t.i,t.x,t.y),x=e.next,i=t.prev;return e.next=t,t.prev=e,n.next=x,x.prev=n,r.next=n,n.prev=r,i.next=r,r.prev=i,r}function P(e,t,n,r){var x=new _(e,t,n);return r?(x.next=r.next,x.prev=r,r.next.prev=x,r.next=x):(x.prev=x,x.next=x),x}function B(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function _(e,t,n){this.i=e,this.x=t,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function O(e,t,n,r){for(var x=0,i=t,u=n-r;i<n;i+=r)x+=(e[u]-e[i])*(e[i+1]+e[u+1]),u=i;return x}u.exports=o,u.exports.default=o,o.deviation=function(e,t,n,r){var x=t&&t.length,i=x?t[0]*n:e.length,u=Math.abs(O(e,0,i,n));if(x)for(var o=0,f=t.length;o<f;o++){var s=t[o]*n,a=o<f-1?t[o+1]*n:e.length;u-=Math.abs(O(e,s,a,n))}var l=0;for(o=0;o<r.length;o+=3){var v=r[o]*n,c=r[o+1]*n,h=r[o+2]*n;l+=Math.abs((e[v]-e[h])*(e[c+1]-e[v+1])-(e[v]-e[c])*(e[h+1]-e[v+1]))}return 0===u&&0===l?0:Math.abs((l-u)/u)},o.flatten=function(e){for(var t=e[0][0].length,n={vertices:[],holes:[],dimensions:t},r=0,x=0;x<e.length;x++){for(var i=0;i<e[x].length;i++)for(var u=0;u<t;u++)n.vertices.push(e[x][i][u]);x>0&&(r+=e[x-1].length,n.holes.push(r))}return n};var N=i(u.exports);const R=[],S={vertexPosition:0,indexPosition:0};function T(e,t,n,r,x){e[t+0]=n,e[t+1]=r,e[t+2]=x}function U(e,t,n,r,x,i){const u=3+x,o=e[t+0],f=e[t+1],s=R;s.length=x;for(let n=0;n<s.length;n++)s[n]=e[t+2+n];let a=i?i.vertexPosition:0,l=i?i.indexPosition:0;const v=a/u;return T(n,a,o,f,0),s.length&&n.set(s,a+3),a+=u,T(n,a,o,f,1),s.length&&n.set(s,a+3),a+=u,T(n,a,o,f,2),s.length&&n.set(s,a+3),a+=u,T(n,a,o,f,3),s.length&&n.set(s,a+3),a+=u,r[l++]=v,r[l++]=v+1,r[l++]=v+3,r[l++]=v+1,r[l++]=v+2,r[l++]=v+3,S.vertexPosition=a,S.indexPosition=l,S}function k(e,t,n,x,i,u,o,f,s,a){const l=8+f.length,v=u.length/l,c=[e[t+0],e[t+1]],h=[e[n],e[n+1]],p=r(s,[...c]),y=r(s,[...h]);function g(e,t,n){const r=Math.sqrt((t[0]-e[0])*(t[0]-e[0])+(t[1]-e[1])*(t[1]-e[1])),x=[(t[0]-e[0])/r,(t[1]-e[1])/r],i=[-x[1],x[0]],u=Math.sqrt((n[0]-e[0])*(n[0]-e[0])+(n[1]-e[1])*(n[1]-e[1])),o=[(n[0]-e[0])/u,(n[1]-e[1])/u],f=0===r||0===u?0:Math.acos((s=o[0]*x[0]+o[1]*x[1],a=-1,l=1,Math.min(Math.max(s,a),l)));var s,a,l;return o[0]*i[0]+o[1]*i[1]>0?f:2*Math.PI-f}let b=-1,d=-1;const Z=null!==i;if(null!==x){b=g(p,y,r(s,[...[e[x],e[x+1]]]))}if(Z){d=g(y,p,r(s,[...[e[i],e[i+1]]]))}return u.push(c[0],c[1],h[0],h[1],b,d,a,0),u.push(...f),u.push(c[0],c[1],h[0],h[1],b,d,a,1),u.push(...f),u.push(c[0],c[1],h[0],h[1],b,d,a,2),u.push(...f),u.push(c[0],c[1],h[0],h[1],b,d,a,3),u.push(...f),o.push(v,v+1,v+2,v+1,v+3,v+2),a+Math.sqrt((y[0]-p[0])*(y[0]-p[0])+(y[1]-p[1])*(y[1]-p[1]))}function G(e,t,n,r,x){const i=2+x;let u=t;const o=e.slice(u,u+x);u+=x;const f=e[u++];let s=0;const a=new Array(f-1);for(let t=0;t<f;t++)s+=e[u++],t<f-1&&(a[t]=s);const l=e.slice(u,u+2*s),v=N(l,a,2);for(let e=0;e<v.length;e++)r.push(v[e]+n.length/i);for(let e=0;e<l.length;e+=2)n.push(l[e],l[e+1],...o);return u+2*s}const j=self;j.onmessage=r=>{const i=r.data;switch(i.type){case t:{const e=3,t=2,n=i.customAttributesSize,r=t+n,x=new Float32Array(i.renderInstructions),u=x.length/r,o=4*u*(n+e),f=new Uint32Array(6*u),s=new Float32Array(o);let a;for(let e=0;e<x.length;e+=r)a=U(x,e,s,f,n,a);const l=Object.assign({vertexBuffer:s.buffer,indexBuffer:f.buffer,renderInstructions:x.buffer},i);j.postMessage(l,[s.buffer,f.buffer,x.buffer]);break}case n:{const e=[],t=[],n=i.customAttributesSize,r=2,u=new Float32Array(i.renderInstructions);let o=0;const f=[1,0,0,1,0,0];let s,a;for(x(f,i.renderInstructionsTransform);o<u.length;){a=Array.from(u.slice(o,o+n)),o+=n,s=u[o++];const x=o,i=o+(s-1)*r,l=u[x]===u[i]&&u[x+1]===u[i+1];let v=0;for(let n=0;n<s-1;n++){let c=null;n>0?c=o+(n-1)*r:l&&(c=i-r);let h=null;n<s-2?h=o+(n+2)*r:l&&(h=x+r),v=k(u,o+n*r,o+(n+1)*r,c,h,e,t,a,f,v)}o+=s*r}const l=Uint32Array.from(t),v=Float32Array.from(e),c=Object.assign({vertexBuffer:v.buffer,indexBuffer:l.buffer,renderInstructions:u.buffer},i);j.postMessage(c,[v.buffer,l.buffer,u.buffer]);break}case e:{const e=[],t=[],n=i.customAttributesSize,r=new Float32Array(i.renderInstructions);let x=0;for(;x<r.length;)x=G(r,x,e,t,n);const u=Uint32Array.from(t),o=Float32Array.from(e),f=Object.assign({vertexBuffer:o.buffer,indexBuffer:u.buffer,renderInstructions:r.buffer},i);j.postMessage(f,[o.buffer,u.buffer,r.buffer]);break}}};';return new Worker(typeof Blob>"u"?"data:application/javascript;base64,"+Buffer.from(t,"binary").toString("base64"):URL.createObjectURL(new Blob([t],{type:"application/javascript"})))}function Ie(){return{"fill-color":"rgba(255,255,255,0.4)","stroke-color":"#3399CC","stroke-width":1.25,"circle-radius":5,"circle-fill-color":"rgba(255,255,255,0.4)","circle-stroke-width":1.25,"circle-stroke-color":"#3399CC"}}const P=`#ifdef GL_FRAGMENT_PRECISION_HIGH
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
`,w=Ie();class ze{constructor(){this.uniforms_=[],this.attributes_=[],this.varyings_=[],this.hasSymbol_=!1,this.symbolSizeExpression_=`vec2(${N(w["circle-radius"])} + ${N(w["circle-stroke-width"]*.5)})`,this.symbolRotationExpression_="0.0",this.symbolOffsetExpression_="vec2(0.0)",this.symbolColorExpression_=O(w["circle-fill-color"]),this.texCoordExpression_="vec4(0.0, 0.0, 1.0, 1.0)",this.discardExpression_="false",this.symbolRotateWithView_=!1,this.hasStroke_=!1,this.strokeWidthExpression_=N(w["stroke-width"]),this.strokeColorExpression_=O(w["stroke-color"]),this.strokeOffsetExpression_="0.",this.strokeCapExpression_=E("round"),this.strokeJoinExpression_=E("round"),this.strokeMiterLimitExpression_="10.",this.strokeDistanceFieldExpression_="-1000.",this.hasFill_=!1,this.fillColorExpression_=O(w["fill-color"]),this.vertexShaderFunctions_=[],this.fragmentShaderFunctions_=[]}addUniform(e){return this.uniforms_.push(e),this}addAttribute(e){return this.attributes_.push(e),this}addVarying(e,n,r){return this.varyings_.push({name:e,type:n,expression:r}),this}setSymbolSizeExpression(e){return this.hasSymbol_=!0,this.symbolSizeExpression_=e,this}getSymbolSizeExpression(){return this.symbolSizeExpression_}setSymbolRotationExpression(e){return this.symbolRotationExpression_=e,this}setSymbolOffsetExpression(e){return this.symbolOffsetExpression_=e,this}getSymbolOffsetExpression(){return this.symbolOffsetExpression_}setSymbolColorExpression(e){return this.hasSymbol_=!0,this.symbolColorExpression_=e,this}getSymbolColorExpression(){return this.symbolColorExpression_}setTextureCoordinateExpression(e){return this.texCoordExpression_=e,this}setFragmentDiscardExpression(e){return this.discardExpression_=e,this}setSymbolRotateWithView(e){return this.symbolRotateWithView_=e,this}setStrokeWidthExpression(e){return this.hasStroke_=!0,this.strokeWidthExpression_=e,this}setStrokeColorExpression(e){return this.hasStroke_=!0,this.strokeColorExpression_=e,this}setStrokeOffsetExpression(e){return this.strokeOffsetExpression_=e,this}setStrokeCapExpression(e){return this.strokeCapExpression_=e,this}setStrokeJoinExpression(e){return this.strokeJoinExpression_=e,this}setStrokeMiterLimitExpression(e){return this.strokeMiterLimitExpression_=e,this}setStrokeDistanceFieldExpression(e){return this.strokeDistanceFieldExpression_=e,this}setFillColorExpression(e){return this.hasFill_=!0,this.fillColorExpression_=e,this}addVertexShaderFunction(e){this.vertexShaderFunctions_.includes(e)||this.vertexShaderFunctions_.push(e)}addFragmentShaderFunction(e){this.fragmentShaderFunctions_.includes(e)||this.fragmentShaderFunctions_.push(e)}getSymbolVertexShader(){return this.hasSymbol_?`${P}
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
}`:null}getSymbolFragmentShader(){return this.hasSymbol_?`${P}
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
}`:null}getStrokeVertexShader(){return this.hasStroke_?`${P}
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
}`:null}getStrokeFragmentShader(){return this.hasStroke_?`${P}
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
   if (capType == ${E("butt")}) {
    return buttCapDistanceField(point, start, end);
  } else if (capType == ${E("square")}) {
    return squareCapDistanceField(point, start, end, width);
  }
  return roundCapDistanceField(point, start, end, width);
}

float joinDistanceField(vec2 point, vec2 start, vec2 end, float width, float joinAngle, float joinType) {
  if (joinType == ${E("bevel")}) {
    return bevelJoinField(point, start, end, width, joinAngle);
  } else if (joinType == ${E("miter")}) {
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
}`:null}getFillVertexShader(){return this.hasFill_?`${P}
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
}`:null}getFillFragmentShader(){return this.hasFill_?`${P}
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
}`:null}}function X(t){const e=I(t),n=e[0]*256,r=e[1],o=e[2]*256,s=Math.round(e[3]*255);return[n+r,o+s]}const Ge=`vec4 unpackColor(vec2 packedColor) {
  return fract(packedColor[1] / 256.0) * vec4(
    fract(floor(packedColor[0] / 256.0) / 256.0),
    fract(packedColor[0] / 256.0),
    fract(floor(packedColor[1] / 256.0) / 256.0),
    1.0
  );
}`;function te(t){return t===d.COLOR?2:t===d.NUMBER_ARRAY?4:1}function j(t){const e=te(t);return e>1?`vec${e}`:"float"}function z(t,e,n,r){let o;if(`${r}radius`in t&&r!=="icon-"?o=m(n,t[`${r}radius`],d.NUMBER):`${r}radius1`in t&&r==="shape-"&&(o=m(n,t[`${r}radius1`],d.NUMBER)),o!==void 0&&(`${r}stroke-width`in t&&(o=`(${o} + ${m(n,t[`${r}stroke-width`],d.NUMBER)} * 0.5)`),e.setSymbolSizeExpression(`vec2(${o} * 2. + 0.5)`)),`${r}scale`in t){const s=m(n,t[`${r}scale`],d.NUMBER|d.NUMBER_ARRAY);e.setSymbolSizeExpression(`${e.getSymbolSizeExpression()} * ${s}`)}`${r}displacement`in t&&e.setSymbolOffsetExpression(m(n,t[`${r}displacement`],d.NUMBER_ARRAY)),`${r}rotation`in t&&e.setSymbolRotationExpression(m(n,t[`${r}rotation`],d.NUMBER)),`${r}rotate-with-view`in t&&e.setSymbolRotateWithView(!!t[`${r}rotate-with-view`])}function ne(t,e,n,r,o){let s="vec4(0.)";if(e!==null&&(s=e),n!==null&&r!==null){const l=`smoothstep(-${r} + 0.63, -${r} - 0.58, ${t})`;s=`mix(${n}, ${s}, ${l})`}const i=`(1.0 - smoothstep(-0.63, 0.58, ${t}))`;let c=`${s} * ${i}`;return o!==null&&(c=`${c} * ${o}`),c}function Ve(t,e,n,r,o){o.functions.circleDistanceField=`float circleDistanceField(vec2 point, float radius) {
  return length(point) - radius;
}`,z(t,e,r,"circle-");let s=null;"circle-opacity"in t&&(s=m(o,t["circle-opacity"],d.NUMBER));let i="coordsPx";"circle-scale"in t&&(i=`coordsPx / ${m(o,t["circle-scale"],d.NUMBER|d.NUMBER_ARRAY)}`);let c=null;"circle-fill-color"in t&&(c=m(o,t["circle-fill-color"],d.COLOR));let l=null;"circle-stroke-color"in t&&(l=m(o,t["circle-stroke-color"],d.COLOR));let a=m(o,t["circle-radius"],d.NUMBER),h=null;"circle-stroke-width"in t&&(h=m(o,t["circle-stroke-width"],d.NUMBER),a=`(${a} + ${h} * 0.5)`);const f=`circleDistanceField(${i}, ${a})`,v=ne(f,c,l,h,s);e.setSymbolColorExpression(v)}function Ue(t,e,n,r,o){o.functions.round=`float round(float v) {
  return sign(v) * floor(abs(v) + 0.5);
}`,o.functions.starDistanceField=`float starDistanceField(vec2 point, float numPoints, float radiusIn, float radiusOut, float angle) {
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
}`,o.functions.regularDistanceField=`float regularDistanceField(vec2 point, float numPoints, float radius, float angle) {
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
}`,z(t,e,r,"shape-");let s=null;"shape-opacity"in t&&(s=m(o,t["shape-opacity"],d.NUMBER));let i="coordsPx";"shape-scale"in t&&(i=`coordsPx / ${m(o,t["shape-scale"],d.NUMBER|d.NUMBER_ARRAY)}`);let c=null;"shape-fill-color"in t&&(c=m(o,t["shape-fill-color"],d.COLOR));let l=null;"shape-stroke-color"in t&&(l=m(o,t["shape-stroke-color"],d.COLOR));let a=null;"shape-stroke-width"in t&&(a=m(o,t["shape-stroke-width"],d.NUMBER));const h=m(o,t["shape-points"],d.NUMBER);let f="0.";"shape-angle"in t&&(f=m(o,t["shape-angle"],d.NUMBER));let v;if("shape-radius"in t){let p=m(o,t["shape-radius"],d.NUMBER);a!==null&&(p=`${p} + ${a} * 0.5`),v=`regularDistanceField(${i}, ${h}, ${p}, ${f})`}else{let p=m(o,t["shape-radius1"],d.NUMBER),g=m(o,t["shape-radius2"],d.NUMBER);a!==null&&(p=`${p} + ${a} * 0.5`,g=`${g} + ${a} * 0.5`),v=`starDistanceField(${i}, ${h}, ${g}, ${p}, ${f})`}const u=ne(v,c,l,a,s);e.setSymbolColorExpression(u)}function We(t,e,n,r,o){o.functions.samplePremultiplied=`vec4 samplePremultiplied(sampler2D sampler, vec2 texCoord) {
  vec4 color = texture2D(sampler, texCoord);
  return vec4(color.rgb * color.a, color.a);
}`;let s="vec4(1.0)";"icon-color"in t&&(s=m(o,t["icon-color"],d.COLOR)),"icon-opacity"in t&&(s=`${s} * ${m(o,t["icon-opacity"],d.NUMBER)}`);let i,c;const l=x(t);if("icon-src"in t?(i=new Image,i.crossOrigin=t["icon-cross-origin"]===void 0?"anonymous":t["icon-cross-origin"],i.src=t["icon-src"],n[`u_texture${l}_size`]=()=>i.complete?[i.width,i.height]:[0,0],c=`u_texture${l}_size`,e.addUniform(`vec2 u_texture${l}_size`)):(i=t["icon-img"],i instanceof HTMLImageElement?i.complete&&i.width&&i.height?c=Z([i.width,i.height]):(n[`u_texture${l}_size`]=()=>i.complete?[i.width,i.height]:[0,0],c=`u_texture${l}_size`):c=Z([i.width,i.height])),n[`u_texture${l}`]=i,e.addUniform(`sampler2D u_texture${l}`).setSymbolColorExpression(`${s} * samplePremultiplied(u_texture${l}, v_texCoord)`).setSymbolSizeExpression(c),"icon-width"in t&&"icon-height"in t&&e.setSymbolSizeExpression(`vec2(${m(r,t["icon-width"],d.NUMBER)}, ${m(r,t["icon-height"],d.NUMBER)})`),"icon-offset"in t&&"icon-size"in t){let a=m(r,t["icon-offset"],d.NUMBER_ARRAY);const h=m(r,t["icon-size"],d.NUMBER_ARRAY),f=e.getSymbolSizeExpression();if(e.setSymbolSizeExpression(h),"icon-offset-origin"in t)switch(t["icon-offset-origin"]){case"top-right":a=`vec2(v_quadSizePx.x, 0.) + ${h} * vec2(-1., 0.) + ${a} * vec2(-1., 1.)`;break;case"bottom-left":a=`vec2(0., v_quadSizePx.y) + ${h} * vec2(0., -1.) + ${a} * vec2(1., -1.)`;break;case"bottom-right":a=`v_quadSizePx - ${h} - ${a}`;break}e.setTextureCoordinateExpression(`(vec4((${a}).xyxy) + vec4(0., 0., ${h})) / (${f}).xyxy`)}if(z(t,e,r,"icon-"),"icon-anchor"in t){const a=m(r,t["icon-anchor"],d.NUMBER_ARRAY);let h="1.0";"icon-scale"in t&&(h=m(r,t["icon-scale"],d.NUMBER|d.NUMBER_ARRAY));let f;t["icon-anchor-x-units"]==="pixels"&&t["icon-anchor-y-units"]==="pixels"?f=`${a} * ${h}`:t["icon-anchor-x-units"]==="pixels"?f=`${a} * vec2(vec2(${h}).x, v_quadSizePx.y)`:t["icon-anchor-y-units"]==="pixels"?f=`${a} * vec2(v_quadSizePx.x, vec2(${h}).x)`:f=`${a} * v_quadSizePx`;let v=`v_quadSizePx * vec2(0.5, -0.5) + ${f} * vec2(-1., 1.)`;if("icon-anchor-origin"in t)switch(t["icon-anchor-origin"]){case"top-right":v=`v_quadSizePx * -0.5 + ${f}`;break;case"bottom-left":v=`v_quadSizePx * 0.5 - ${f}`;break;case"bottom-right":v=`v_quadSizePx * vec2(-0.5, 0.5) + ${f} * vec2(1., -1.)`;break}e.setSymbolOffsetExpression(`${e.getSymbolOffsetExpression()} + ${v}`)}}function Ze(t,e,n,r,o){if("stroke-color"in t&&e.setStrokeColorExpression(m(o,t["stroke-color"],d.COLOR)),"stroke-width"in t&&e.setStrokeWidthExpression(m(r,t["stroke-width"],d.NUMBER)),"stroke-offset"in t&&e.setStrokeOffsetExpression(m(r,t["stroke-offset"],d.NUMBER)),"stroke-line-cap"in t&&e.setStrokeCapExpression(m(r,t["stroke-line-cap"],d.STRING)),"stroke-line-join"in t&&e.setStrokeJoinExpression(m(r,t["stroke-line-join"],d.STRING)),"stroke-miter-limit"in t&&e.setStrokeMiterLimitExpression(m(r,t["stroke-miter-limit"],d.NUMBER)),"stroke-line-dash"in t){o.functions.getSingleDashDistance=`float getSingleDashDistance(float distance, float radius, float dashOffset, float dashLength, float dashLengthTotal, float capType) {
  float localDistance = mod(distance, dashLengthTotal);
  float distanceSegment = abs(localDistance - dashOffset - dashLength * 0.5) - dashLength * 0.5;
  distanceSegment = min(distanceSegment, dashLengthTotal - localDistance);
  if (capType == ${E("square")}) {
    distanceSegment -= v_width * 0.5;
  } else if (capType == ${E("round")}) {
    distanceSegment = min(distanceSegment, sqrt(distanceSegment * distanceSegment + radius * radius) - v_width * 0.5);
  }
  return distanceSegment;
}`;let s=t["stroke-line-dash"].map(u=>m(o,u,d.NUMBER));s.length%2===1&&(s=[...s,...s]);let i="0.";"stroke-line-dash-offset"in t&&(i=m(r,t["stroke-line-dash-offset"],d.NUMBER));let c=JSON.stringify(t["stroke-line-dash"]).split("").reduce((u,p)=>(u<<5)-u+p.charCodeAt(0),0);c=c>>>0;const l=`dashDistanceField_${c}`,a=s.map((u,p)=>`float dashLength${p} = ${u};`),h=s.map((u,p)=>`dashLength${p}`).join(" + ");let f="0.",v=`getSingleDashDistance(distance, radius, ${f}, dashLength0, totalDashLength, capType)`;for(let u=2;u<s.length;u+=2)f=`${f} + dashLength${u-2} + dashLength${u-1}`,v=`min(${v}, getSingleDashDistance(distance, radius, ${f}, dashLength${u}, totalDashLength, capType))`;o.functions[l]=`float ${l}(float distance, float radius, float capType) {
  ${a.join(`
  `)}
  float totalDashLength = ${h};
  return ${v};
}`,e.setStrokeDistanceFieldExpression(`${l}(currentLengthPx + ${i}, currentRadiusPx, capType)`)}}function qe(t,e,n,r,o){"fill-color"in t&&e.setFillColorExpression(m(o,t["fill-color"],d.COLOR))}function Je(t){const e={inFragmentShader:!1,variables:[],attributes:[],functions:{},style:t},n={inFragmentShader:!0,variables:e.variables,attributes:[],functions:{},style:t},r=new ze,o={};if("icon-src"in t||"icon-img"in t?We(t,r,o,e,n):"shape-points"in t?Ue(t,r,o,e,n):"circle-radius"in t&&Ve(t,r,o,e,n),Ze(t,r,o,e,n),qe(t,r,o,e,n),t.filter){const i=m(n,t.filter,d.BOOLEAN);r.setFragmentDiscardExpression(`!${i}`)}n.variables.forEach(function(i){const c=ye(i.name);r.addUniform(`${j(i.type)} ${c}`);let l;i.type===d.STRING?l=()=>q(t.variables[i.name]):i.type===d.COLOR?l=()=>X([...I(t.variables[i.name]||"#eee")]):i.type===d.BOOLEAN?l=()=>t.variables[i.name]?1:0:l=()=>t.variables[i.name],o[c]=l}),n.attributes.forEach(function(i){e.attributes.find(a=>a.name===i.name)||e.attributes.push(i);let c=j(i.type),l=`a_${i.name}`;i.type===d.COLOR&&(c="vec4",l=`unpackColor(${l})`,r.addVertexShaderFunction(Ge)),r.addVarying(`v_${i.name}`,c,l)}),e.attributes.forEach(function(i){r.addAttribute(`${j(i.type)} a_${i.name}`)});const s=e.attributes.map(function(i){let c;return i.callback?c=i.callback:i.type===d.STRING?c=l=>q(l.get(i.name)):i.type===d.COLOR?c=l=>X([...I(l.get(i.name)||"#eee")]):i.type===d.BOOLEAN?c=l=>l.get(i.name)?1:0:c=l=>l.get(i.name),{name:i.name,size:te(i.type),callback:c}});for(const i in e.functions)r.addVertexShaderFunction(e.functions[i]);for(const i in n.functions)r.addFragmentShaderFunction(n.functions[i]);return{builder:r,attributes:s.reduce((i,c)=>({...i,[c.name]:{callback:c.callback,size:c.size}}),{}),uniforms:o}}const Ye="Draw lines rendered with WebGL",He=`
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
`,Xe=`
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
`,Ke=`
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
`,Qe=`
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
`;class et{constructor(){this.polygonBatch={entries:{},geometriesCount:0,verticesCount:0,ringsCount:0},this.pointBatch={entries:{},geometriesCount:0},this.lineStringBatch={entries:{},geometriesCount:0,verticesCount:0}}addFeatures(e){for(let n=0;n<e.length;n++)this.addFeature(e[n])}addFeature(e){const n=e.getGeometry();n&&this.addGeometry_(n,e)}clearFeatureEntryInPointBatch_(e){const n=this.pointBatch.entries[x(e)];n&&(this.pointBatch.geometriesCount-=n.flatCoordss.length,delete this.pointBatch.entries[x(e)])}clearFeatureEntryInLineStringBatch_(e){const n=this.lineStringBatch.entries[x(e)];n&&(this.lineStringBatch.verticesCount-=n.verticesCount,this.lineStringBatch.geometriesCount-=n.flatCoordss.length,delete this.lineStringBatch.entries[x(e)])}clearFeatureEntryInPolygonBatch_(e){const n=this.polygonBatch.entries[x(e)];n&&(this.polygonBatch.verticesCount-=n.verticesCount,this.polygonBatch.ringsCount-=n.ringsCount,this.polygonBatch.geometriesCount-=n.flatCoordss.length,delete this.polygonBatch.entries[x(e)])}addGeometry_(e,n){const r=e.getType();switch(r){case"GeometryCollection":const o=e.getGeometriesArray();for(const f of o)this.addGeometry_(f,n);break;case"MultiPolygon":const s=e;this.addCoordinates_(r,s.getFlatCoordinates(),s.getEndss(),n,x(n),s.getStride());break;case"MultiLineString":const i=e;this.addCoordinates_(r,i.getFlatCoordinates(),i.getEnds(),n,x(n),i.getStride());break;case"MultiPoint":const c=e;this.addCoordinates_(r,c.getFlatCoordinates(),null,n,x(n),c.getStride());break;case"Polygon":const l=e;this.addCoordinates_(r,l.getFlatCoordinates(),l.getEnds(),n,x(n),l.getStride());break;case"Point":const a=e;this.addCoordinates_(r,a.getFlatCoordinates(),null,n,x(n),a.getStride());break;case"LineString":case"LinearRing":const h=e;this.addCoordinates_(r,h.getFlatCoordinates(),null,n,x(n),h.getStride());break}}addCoordinates_(e,n,r,o,s,i){let c;switch(e){case"MultiPolygon":const l=r;for(let u=0,p=l.length;u<p;u++){let g=l[u];const _=u>0?l[u-1]:null,F=_?_[_.length-1]:0,R=g[g.length-1];g=F>0?g.map(ie=>ie-F):g,this.addCoordinates_("Polygon",n.slice(F,R),g,o,s,i)}break;case"MultiLineString":const a=r;for(let u=0,p=a.length;u<p;u++){const g=u>0?a[u-1]:0;this.addCoordinates_("LinearRing",n.slice(g,a[u]),null,o,s,i)}break;case"MultiPoint":for(let u=0,p=n.length;u<p;u+=i)this.addCoordinates_("Point",n.slice(u,u+2),null,o,s,null);break;case"Polygon":const h=r;for(let u=1,p=h.length;u<p;u++){const g=h[u-1];if(u>0&&oe(n,g,h[u],i)){this.addCoordinates_("Polygon",n.slice(0,g),h.slice(0,u),o,s,i),this.addCoordinates_("Polygon",n.slice(g),h.slice(u).map(_=>_-h[u-1]),o,s,i);return}}this.polygonBatch.entries[s]||(this.polygonBatch.entries[s]={feature:o,flatCoordss:[],verticesCount:0,ringsCount:0,ringsVerticesCounts:[]}),c=n.length/i;const f=r.length,v=r.map((u,p,g)=>p>0?(u-g[p-1])/i:u/i);this.polygonBatch.verticesCount+=c,this.polygonBatch.ringsCount+=f,this.polygonBatch.geometriesCount++,this.polygonBatch.entries[s].flatCoordss.push(K(n,i)),this.polygonBatch.entries[s].ringsVerticesCounts.push(v),this.polygonBatch.entries[s].verticesCount+=c,this.polygonBatch.entries[s].ringsCount+=f;for(let u=0,p=h.length;u<p;u++){const g=u>0?h[u-1]:0;this.addCoordinates_("LinearRing",n.slice(g,h[u]),null,o,s,i)}break;case"Point":this.pointBatch.entries[s]||(this.pointBatch.entries[s]={feature:o,flatCoordss:[]}),this.pointBatch.geometriesCount++,this.pointBatch.entries[s].flatCoordss.push(n);break;case"LineString":case"LinearRing":this.lineStringBatch.entries[s]||(this.lineStringBatch.entries[s]={feature:o,flatCoordss:[],verticesCount:0}),c=n.length/i,this.lineStringBatch.verticesCount+=c,this.lineStringBatch.geometriesCount++,this.lineStringBatch.entries[s].flatCoordss.push(K(n,i)),this.lineStringBatch.entries[s].verticesCount+=c;break}}changeFeature(e){this.clearFeatureEntryInPointBatch_(e),this.clearFeatureEntryInPolygonBatch_(e),this.clearFeatureEntryInLineStringBatch_(e);const n=e.getGeometry();n&&this.addGeometry_(n,e)}removeFeature(e){this.clearFeatureEntryInPointBatch_(e),this.clearFeatureEntryInPolygonBatch_(e),this.clearFeatureEntryInLineStringBatch_(e)}clear(){this.polygonBatch.entries={},this.polygonBatch.geometriesCount=0,this.polygonBatch.verticesCount=0,this.polygonBatch.ringsCount=0,this.lineStringBatch.entries={},this.lineStringBatch.geometriesCount=0,this.lineStringBatch.verticesCount=0,this.pointBatch.entries={},this.pointBatch.geometriesCount=0}}function K(t,e){return e===2?t:t.filter((n,r)=>r%e<2)}const tt=et;function G(t,e,n,r){let o=0;for(const s in e){const i=e[s],c=i.callback(n.feature);t[r+o++]=c[0]||c,!(!i.size||i.size===1)&&(t[r+o++]=c[1],!(i.size<3)&&(t[r+o++]=c[2],!(i.size<4)&&(t[r+o++]=c[3])))}return o}function B(t){return Object.keys(t).reduce((e,n)=>e+(t[n].size||1),0)}function nt(t,e,n,r){const o=(2+B(n))*t.geometriesCount;(!e||e.length!==o)&&(e=new Float32Array(o));const s=[];let i=0;for(const c in t.entries){const l=t.entries[c];for(let a=0,h=l.flatCoordss.length;a<h;a++)s[0]=l.flatCoordss[a][0],s[1]=l.flatCoordss[a][1],se(r,s),e[i++]=s[0],e[i++]=s[1],i+=G(e,n,l,i)}return e}function it(t,e,n,r){const o=2*t.verticesCount+(1+B(n))*t.geometriesCount;(!e||e.length!==o)&&(e=new Float32Array(o));const s=[];let i=0;for(const c in t.entries){const l=t.entries[c];for(let a=0,h=l.flatCoordss.length;a<h;a++){s.length=l.flatCoordss[a].length,Q(l.flatCoordss[a],0,s.length,2,r,s),i+=G(e,n,l,i),e[i++]=s.length/2;for(let f=0,v=s.length;f<v;f+=2)e[i++]=s[f],e[i++]=s[f+1]}}return e}function rt(t,e,n,r){const o=2*t.verticesCount+(1+B(n))*t.geometriesCount+t.ringsCount;(!e||e.length!==o)&&(e=new Float32Array(o));const s=[];let i=0;for(const c in t.entries){const l=t.entries[c];for(let a=0,h=l.flatCoordss.length;a<h;a++){s.length=l.flatCoordss[a].length,Q(l.flatCoordss[a],0,s.length,2,r,s),i+=G(e,n,l,i),e[i++]=l.ringsVerticesCounts[a].length;for(let f=0,v=l.ringsVerticesCounts[a].length;f<v;f++)e[i++]=l.ringsVerticesCounts[a][f];for(let f=0,v=s.length;f<v;f+=2)e[i++]=s[f],e[i++]=s[f+1]}}return e}const D=De();let ot=0;const S={POSITION:"a_position",INDEX:"a_index",SEGMENT_START:"a_segmentStart",SEGMENT_END:"a_segmentEnd",PARAMETERS:"a_parameters",JOIN_ANGLES:"a_joinAngles",DISTANCE:"a_distance"};class st{constructor(e,n){var i,c,l;this.helper_=n;let r=e;if(!("fill"in e||"stroke"in e||"symbol"in e&&"vertex"in e.symbol)){const a=Je(e);r={fill:{vertex:a.builder.getFillVertexShader(),fragment:a.builder.getFillFragmentShader()},stroke:{vertex:a.builder.getStrokeVertexShader(),fragment:a.builder.getStrokeFragmentShader()},symbol:{vertex:a.builder.getSymbolVertexShader(),fragment:a.builder.getSymbolFragmentShader()},attributes:a.attributes,uniforms:a.uniforms}}this.hasFill_=!!((i=r.fill)!=null&&i.vertex),this.hasFill_&&(this.fillVertexShader_=r.fill.vertex,this.fillFragmentShader_=r.fill.fragment,this.fillProgram_=this.helper_.getProgram(this.fillFragmentShader_,this.fillVertexShader_)),this.hasStroke_=!!((c=r.stroke)!=null&&c.vertex),this.hasStroke_&&(this.strokeVertexShader_=r.stroke&&r.stroke.vertex,this.strokeFragmentShader_=r.stroke&&r.stroke.fragment,this.strokeProgram_=this.helper_.getProgram(this.strokeFragmentShader_,this.strokeVertexShader_)),this.hasSymbol_=!!((l=r.symbol)!=null&&l.vertex),this.hasSymbol_&&(this.symbolVertexShader_=r.symbol&&r.symbol.vertex,this.symbolFragmentShader_=r.symbol&&r.symbol.fragment,this.symbolProgram_=this.helper_.getProgram(this.symbolFragmentShader_,this.symbolVertexShader_)),this.customAttributes_=r.attributes,this.uniforms_=r.uniforms;const s=Object.keys(this.customAttributes_).map(a=>({name:`a_${a}`,size:this.customAttributes_[a].size||1,type:b.FLOAT}));this.polygonAttributesDesc_=[{name:S.POSITION,size:2,type:b.FLOAT},...s],this.lineStringAttributesDesc_=[{name:S.SEGMENT_START,size:2,type:b.FLOAT},{name:S.SEGMENT_END,size:2,type:b.FLOAT},{name:S.JOIN_ANGLES,size:2,type:b.FLOAT},{name:S.DISTANCE,size:1,type:b.FLOAT},{name:S.PARAMETERS,size:1,type:b.FLOAT},...s],this.pointAttributesDesc_=[{name:S.POSITION,size:2,type:b.FLOAT},{name:S.INDEX,size:1,type:b.FLOAT},...s],r.uniforms&&this.helper_.addUniforms(r.uniforms)}async generateBuffers(e,n){const r=this.generateRenderInstructions_(e,n),[o,s,i]=await Promise.all([this.generateBuffersForType_(r.polygonInstructions,"Polygon",n),this.generateBuffersForType_(r.lineStringInstructions,"LineString",n),this.generateBuffersForType_(r.pointInstructions,"Point",n)]),c=ee(k(),n);return{polygonBuffers:o,lineStringBuffers:s,pointBuffers:i,invertVerticesTransform:c}}generateRenderInstructions_(e,n){const r=this.hasFill_?rt(e.polygonBatch,new Float32Array(0),this.customAttributes_,n):null,o=this.hasStroke_?it(e.lineStringBatch,new Float32Array(0),this.customAttributes_,n):null,s=this.hasSymbol_?nt(e.pointBatch,new Float32Array(0),this.customAttributes_,n):null;return{polygonInstructions:r,lineStringInstructions:o,pointInstructions:s}}generateBuffersForType_(e,n,r){if(e===null)return null;const o=ot++;let s;switch(n){case"Polygon":s=M.GENERATE_POLYGON_BUFFERS;break;case"LineString":s=M.GENERATE_LINE_STRING_BUFFERS;break;case"Point":s=M.GENERATE_POINT_BUFFERS;break}const i={id:o,type:s,renderInstructions:e.buffer,renderInstructionsTransform:r,customAttributesSize:B(this.customAttributes_)};return D.postMessage(i,[e.buffer]),e=null,new Promise(c=>{const l=a=>{const h=a.data;if(h.id!==o||(D.removeEventListener("message",l),!this.helper_.getGL()))return;const f=new J(be,Y).fromArrayBuffer(h.vertexBuffer),v=new J(Se,Y).fromArrayBuffer(h.indexBuffer);this.helper_.flushBufferData(f),this.helper_.flushBufferData(v),c([v,f])};D.addEventListener("message",l)})}render(e,n,r){this.hasFill_&&this.renderInternal_(e.polygonBuffers[0],e.polygonBuffers[1],this.fillProgram_,this.polygonAttributesDesc_,n,r),this.hasStroke_&&this.renderInternal_(e.lineStringBuffers[0],e.lineStringBuffers[1],this.strokeProgram_,this.lineStringAttributesDesc_,n,r),this.hasSymbol_&&this.renderInternal_(e.pointBuffers[0],e.pointBuffers[1],this.symbolProgram_,this.pointAttributesDesc_,n,r)}renderInternal_(e,n,r,o,s,i){this.helper_.useProgram(r,s),this.helper_.bindBuffer(n),this.helper_.bindBuffer(e),this.helper_.enableAttributes(o),i();const c=e.getSize();this.helper_.drawElements(0,c)}}const at=st,$={...we,RENDER_EXTENT:"u_renderExtent",GLOBAL_ALPHA:"u_globalAlpha"};class lt extends Ee{constructor(e,n){const r={[$.RENDER_EXTENT]:[0,0,0,0],[$.GLOBAL_ALPHA]:1};super(e,{uniforms:r,postProcesses:n.postProcesses}),this.sourceRevision_=-1,this.previousExtent_=ae(),this.currentTransform_=k(),this.tmpTransform_=k(),this.tmpMat4_=Pe(),this.currentFrameStateTransform_=k(),this.styles_=[],this.styleRenderers_=[],this.buffers_=[],this.applyOptions_(n),this.batch_=new tt;const o=this.getLayer().getSource();this.batch_.addFeatures(o.getFeatures()),this.sourceListenKeys_=[C(o,A.ADDFEATURE,this.handleSourceFeatureAdded_,this),C(o,A.CHANGEFEATURE,this.handleSourceFeatureChanged_,this),C(o,A.REMOVEFEATURE,this.handleSourceFeatureDelete_,this),C(o,A.CLEAR,this.handleSourceFeatureClear_,this)]}applyOptions_(e){this.styles_=Array.isArray(e.style)?e.style:[e.style]}createRenderers_(){this.buffers_=[],this.styleRenderers_=this.styles_.map(e=>new at(e,this.helper))}reset(e){this.applyOptions_(e),this.helper&&this.createRenderers_(),super.reset(e)}afterHelperCreated(){this.createRenderers_()}handleSourceFeatureAdded_(e){const n=e.feature;this.batch_.addFeature(n)}handleSourceFeatureChanged_(e){const n=e.feature;this.batch_.changeFeature(n)}handleSourceFeatureDelete_(e){const n=e.feature;this.batch_.removeFeature(n)}handleSourceFeatureClear_(){this.batch_.clear()}applyUniforms_(e){le(this.tmpTransform_,this.currentFrameStateTransform_),ce(this.tmpTransform_,e),this.helper.setUniformMatrixValue($.PROJECTION_MATRIX,H(this.tmpMat4_,this.tmpTransform_)),ee(this.tmpTransform_,this.tmpTransform_),this.helper.setUniformMatrixValue($.SCREEN_TO_WORLD_MATRIX,H(this.tmpMat4_,this.tmpTransform_))}renderFrame(e){const n=this.helper.getGL();this.preRender(n,e),this.helper.prepareDraw(e),this.currentFrameStateTransform_=this.helper.makeProjectionTransform(e,this.currentFrameStateTransform_);const o=this.getLayer().getSource(),s=e.viewState.projection,i=o.getWrapX()&&s.canWrapX(),c=s.getExtent(),l=e.extent,a=i?ue(c):null,h=i?Math.ceil((l[2]-c[2])/a)+1:1;let f=i?Math.floor((l[0]-c[0])/a):0;U(this.currentFrameStateTransform_,f*a,0);do{for(let g=0,_=this.styleRenderers_.length;g<_;g++){const F=this.styleRenderers_[g],R=this.buffers_[g];R&&F.render(R,e,()=>{this.applyUniforms_(R.invertVerticesTransform)})}U(this.currentFrameStateTransform_,a,0)}while(++f<h);this.helper.finalizeDraw(e);const v=this.helper.getCanvas(),p=e.layerStatesArray[e.layerIndex].opacity;return p!==parseFloat(v.style.opacity)&&(v.style.opacity=String(p)),this.postRender(n,e),v}prepareFrameInternal(e){const n=this.getLayer(),r=n.getSource(),o=e.viewState,s=!e.viewHints[W.ANIMATING]&&!e.viewHints[W.INTERACTING],i=!de(this.previousExtent_,e.extent),c=this.sourceRevision_<r.getRevision();if(c&&(this.sourceRevision_=r.getRevision()),s&&(i||c)){const l=o.projection,a=o.resolution,h=n instanceof xe?n.getRenderBuffer():0,f=fe(e.extent,h*a);r.loadFeatures(f,a,l),this.ready=!1;const v=this.helper.makeProjectionTransform(e,k()),u=this.styleRenderers_.map((p,g)=>p.generateBuffers(this.batch_,v).then(_=>{this.buffers_[g]=_}));Promise.all(u).then(()=>{this.ready=!0,this.getLayer().changed()}),this.previousExtent_=e.extent.slice()}return!0}forEachFeatureAtCoordinate(e,n,r,o,s){}disposeInternal(){this.sourceListenKeys_.forEach(function(e){he(e)}),this.sourceListenKeys_=null,super.disposeInternal()}}const ct=lt;const V=t=>(Ae("data-v-77d9f0a5"),t=t(),$e(),t),ut={id:"title"},dt=Ce('<div id="map" class="map" data-v-77d9f0a5></div><form data-v-77d9f0a5><div class="form-group" data-v-77d9f0a5>Cap type   <label class="radio-inline" data-v-77d9f0a5><input type="radio" class="uniform" name="capType" value="butt" checked data-v-77d9f0a5> <code data-v-77d9f0a5>butt</code>  </label><label class="radio-inline" data-v-77d9f0a5><input type="radio" class="uniform" name="capType" value="round" data-v-77d9f0a5> <code data-v-77d9f0a5>round</code>  </label><label class="radio-inline" data-v-77d9f0a5><input type="radio" class="uniform" name="capType" value="square" data-v-77d9f0a5> <code data-v-77d9f0a5>square</code>  </label></div><div class="form-group" data-v-77d9f0a5>Join type   <label class="radio-inline" data-v-77d9f0a5><input type="radio" class="uniform" name="joinType" value="miter" checked data-v-77d9f0a5> <code data-v-77d9f0a5>miter</code>  </label><label class="radio-inline" data-v-77d9f0a5><input type="radio" class="uniform" name="joinType" value="round" data-v-77d9f0a5> <code data-v-77d9f0a5>round</code>  </label><label class="radio-inline" data-v-77d9f0a5><input type="radio" class="uniform" name="joinType" value="bevel" data-v-77d9f0a5> <code data-v-77d9f0a5>bevel</code>  </label></div><div class="form-group" data-v-77d9f0a5><label data-v-77d9f0a5> Line width (pixels) <input type="range" class="uniform" name="width" min="1" max="40" value="8" data-v-77d9f0a5></label><span id="value-width" data-v-77d9f0a5>12</span></div><div class="form-group" data-v-77d9f0a5><label data-v-77d9f0a5> Miter limit (ratio) <input type="range" class="uniform" name="miterLimit" min="1" max="20" value="10" step="0.1" data-v-77d9f0a5></label><span id="value-miterLimit" data-v-77d9f0a5>10</span></div><div class="form-group" data-v-77d9f0a5><label data-v-77d9f0a5> Line offset (pixels) <input type="range" class="uniform" name="offset" min="-40" max="40" value="0" data-v-77d9f0a5></label><span id="value-offset" data-v-77d9f0a5>0</span></div><div class="form-group" data-v-77d9f0a5><label data-v-77d9f0a5><input type="checkbox" class="rebuild" id="dashEnable" data-v-77d9f0a5> Enable dashes </label></div><div class="form-group" style="margin-left:18px;" data-v-77d9f0a5><label data-v-77d9f0a5> Line dash pattern (px) <input type="number" class="uniform" name="dashLength1" min="0" max="100" value="25" data-v-77d9f0a5><input type="number" class="uniform" name="dashLength2" min="0" max="100" value="15" data-v-77d9f0a5><input type="number" class="uniform" name="dashLength3" min="0" max="100" value="15" data-v-77d9f0a5><input type="number" class="uniform" name="dashLength4" min="0" max="100" value="15" data-v-77d9f0a5></label></div><div class="form-group" style="margin-left:18px;" data-v-77d9f0a5><label data-v-77d9f0a5> Line dash offset (pixels) <input type="range" class="uniform" name="dashOffset" min="-200" max="200" value="0" data-v-77d9f0a5></label><span id="value-dashOffset" data-v-77d9f0a5>0</span></div><div class="form-group" data-v-77d9f0a5><label data-v-77d9f0a5><input type="checkbox" class="rebuild" id="patternEnable" data-v-77d9f0a5> Enable image pattern </label></div><div class="form-group" style="margin-left:18px;" data-v-77d9f0a5><label data-v-77d9f0a5> Pattern spacing (pixels) <input type="range" class="uniform" name="patternSpacing" min="0" max="64" value="0" data-v-77d9f0a5></label><span id="value-patternSpacing" data-v-77d9f0a5>0</span></div></form><p data-v-77d9f0a5>This example lets you tweak the stroke styling options dynamically to see how they affect line rendering. The line string showing by default can be modified and new ones can be drawn by single-clicking on the map.</p><h5 class="source-heading" data-v-77d9f0a5>html</h5>',4),ft={class:"language-html"},ht=V(()=>y("h5",{class:"source-heading"},"css",-1)),pt={class:"language-css"},mt=V(()=>y("h5",{class:"source-heading"},"js",-1)),gt={class:"language-js"},vt=V(()=>y("h5",{class:"source-heading"},"package.json",-1)),xt={class:"language-json"},_t={__name:"index",setup(t){return Re(()=>{let e;class n extends ve{createRenderer(){return new ct(this,{className:this.getClassName(),style:e})}}const r=new _e({url:"data/geojson/switzerland.geojson",format:new re}),o=(u,p)=>{let g={variables:e?e.variables:{width:12,offset:0,capType:"butt",joinType:"miter",miterLimit:10,dashLength1:25,dashLength2:15,dashLength3:15,dashLength4:15,dashOffset:0,patternSpacing:0},"stroke-width":["var","width"],"stroke-color":"rgba(24,86,34,0.7)","stroke-offset":["var","offset"],"stroke-miter-limit":["var","miterLimit"],"stroke-line-cap":["var","capType"],"stroke-line-join":["var","joinType"]};return u&&(g={...g,"stroke-line-dash":[["var","dashLength1"],["var","dashLength2"],["var","dashLength3"],["var","dashLength4"]],"stroke-line-dash-offset":["var","dashOffset"]}),p&&(delete g["stroke-color"],g={...g,"stroke-pattern-src":"data/dot.svg","stroke-pattern-spacing":["var","patternSpacing"]}),g};e=o(!1,!1);let s=new n({source:r});const i=new pe({layers:[new Be({source:new Ne}),s],target:"map",view:new me({center:ge([8.43,46.82]),zoom:7})}),c=()=>{const u=document.getElementById("dashEnable").checked,p=document.getElementById("patternEnable").checked;e=o(u,p),i.removeLayer(s),s=new n({source:r}),i.addLayer(s)},l=new Oe({source:r});i.addInteraction(l);let a,h;function f(){a=new je({source:r,type:"LineString"}),i.addInteraction(a),h=new Me({source:r}),i.addInteraction(h)}f();const v=u=>{const p=e.variables,g=u.target.name;u.target.type==="radio"?p[g]=u.target.value:p[g]=parseFloat(u.target.value);const _=document.getElementById(`value-${g}`);_&&(_.textContent=p[g]),i.render()};document.querySelectorAll("input.uniform").forEach(u=>u.addEventListener("input",v)),document.querySelectorAll("input.rebuild").forEach(u=>u.addEventListener("input",c)),Prism.highlightAll()}),(e,n)=>(Te(),Le(ke,null,[y("h4",ut,T(L(Ye)),1),dt,y("pre",null,[y("code",ft,T("  "+L(He).trim()),1)]),ht,y("pre",null,[y("code",pt,T("  "+L(Xe).trim()),1)]),mt,y("pre",null,[y("code",gt,T("  "+L(Ke).trim()),1)]),vt,y("pre",null,[y("code",xt,T("  "+L(Qe).trim()),1)])],64))}},Zt=Fe(_t,[["__scopeId","data-v-77d9f0a5"]]);export{Zt as default};
