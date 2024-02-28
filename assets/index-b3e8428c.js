import{W as V,d7 as P,dc as D,d8 as j,db as g,cY as y,P as C,d4 as H,aj as U,u as b,cF as S,h as m,aF as k,dd as E,M as q,V as A,cE as N}from"./Layer-3b715193.js";import{F as _}from"./featureloader-a90a5108.js";import{V as v}from"./Vector-6fff18f8.js";import{V as w}from"./Vector-a4e726e1.js";import{O as X}from"./OSM-f0f00429.js";import{T as G}from"./Tile-70490af9.js";import{_ as W,i as L,o as z,c as K,b as a,t as h,g as p,F as B,p as R,k as Y}from"./index-c958856c.js";import"./VectorLayer-ef6da1be.js";import"./hitdetect-486e5612.js";import"./Layer-37ea9c2e.js";import"./vector-4e067f94.js";import"./length-c6ba5b73.js";import"./XYZ-80208d03.js";import"./TileImage-1df58d67.js";import"./TileProperty-e33ea24b.js";import"./UrlTile-dc2c26ed.js";import"./BaseTile-8ab94efc.js";import"./TileLayer-7c629c64.js";const J={EXTENTCHANGED:"extentchanged"};class Q extends k{constructor(e){super(J.EXTENTCHANGED),this.extent=e}}class Z extends V{constructor(e){e=e||{},super(e),this.on,this.once,this.un,this.condition_=e.condition?e.condition:P,this.extent_=null,this.pointerHandler_=null,this.pixelTolerance_=e.pixelTolerance!==void 0?e.pixelTolerance:10,this.snappedToVertex_=!1,this.extentFeature_=null,this.vertexFeature_=null,e||(e={}),this.extentOverlay_=new v({source:new w({useSpatialIndex:!1,wrapX:!!e.wrapX}),style:e.boxStyle?e.boxStyle:$(),updateWhileAnimating:!0,updateWhileInteracting:!0}),this.vertexOverlay_=new v({source:new w({useSpatialIndex:!1,wrapX:!!e.wrapX}),style:e.pointerStyle?e.pointerStyle:ee(),updateWhileAnimating:!0,updateWhileInteracting:!0}),e.extent&&this.setExtent(e.extent)}snapToVertex_(e,t){const l=t.getCoordinateFromPixelInternal(e),r=function(c,i){return E(l,c)-E(l,i)},s=this.getExtentInternal();if(s){const c=te(s);c.sort(r);const i=c[0];let o=D(l,i);const u=t.getPixelFromCoordinateInternal(o);if(j(e,u)<=this.pixelTolerance_){const T=t.getPixelFromCoordinateInternal(i[0]),O=t.getPixelFromCoordinateInternal(i[1]),x=g(u,T),f=g(u,O),M=Math.sqrt(Math.min(x,f));return this.snappedToVertex_=M<=this.pixelTolerance_,this.snappedToVertex_&&(o=x>f?i[1]:i[0]),o}}return null}handlePointerMove_(e){const t=e.pixel,l=e.map;let r=this.snapToVertex_(t,l);r||(r=l.getCoordinateFromPixelInternal(t)),this.createOrUpdatePointerFeature_(r)}createOrUpdateExtentFeature_(e){let t=this.extentFeature_;return t?e?t.setGeometry(y(e)):t.setGeometry(void 0):(e?t=new _(y(e)):t=new _({}),this.extentFeature_=t,this.extentOverlay_.getSource().addFeature(t)),t}createOrUpdatePointerFeature_(e){let t=this.vertexFeature_;return t?t.getGeometry().setCoordinates(e):(t=new _(new C(e)),this.vertexFeature_=t,this.vertexOverlay_.getSource().addFeature(t)),t}handleEvent(e){return!e.originalEvent||!this.condition_(e)?!0:(e.type==H.POINTERMOVE&&!this.handlingDownUpSequence&&this.handlePointerMove_(e),super.handleEvent(e),!1)}handleDownEvent(e){const t=e.pixel,l=e.map,r=this.getExtentInternal();let s=this.snapToVertex_(t,l);const c=function(i){let o=null,u=null;return i[0]==r[0]?o=r[2]:i[0]==r[2]&&(o=r[0]),i[1]==r[1]?u=r[3]:i[1]==r[3]&&(u=r[1]),o!==null&&u!==null?[o,u]:null};if(s&&r){const i=s[0]==r[0]||s[0]==r[2]?s[0]:null,o=s[1]==r[1]||s[1]==r[3]?s[1]:null;i!==null&&o!==null?this.pointerHandler_=F(c(s)):i!==null?this.pointerHandler_=I(c([i,r[1]]),c([i,r[3]])):o!==null&&(this.pointerHandler_=I(c([r[0],o]),c([r[2],o])))}else s=l.getCoordinateFromPixelInternal(t),this.setExtent([s[0],s[1],s[0],s[1]]),this.pointerHandler_=F(s);return!0}handleDragEvent(e){if(this.pointerHandler_){const t=e.coordinate;this.setExtent(this.pointerHandler_(t)),this.createOrUpdatePointerFeature_(t)}}handleUpEvent(e){this.pointerHandler_=null;const t=this.getExtentInternal();return(!t||U(t)===0)&&this.setExtent(null),!1}setMap(e){this.extentOverlay_.setMap(e),this.vertexOverlay_.setMap(e),super.setMap(e)}getExtent(){return b(this.getExtentInternal(),this.getMap().getView().getProjection())}getExtentInternal(){return this.extent_}setExtent(e){this.extent_=e||null,this.createOrUpdateExtentFeature_(e),this.dispatchEvent(new Q(this.extent_))}}function $(){const n=S();return function(e,t){return n.Polygon}}function ee(){const n=S();return function(e,t){return n.Point}}function F(n){return function(e){return m([n,e])}}function I(n,e){return n[0]==e[0]?function(t){return m([n,[t[0],e[1]]])}:n[1]==e[1]?function(t){return m([n,[e[0],t[1]]])}:null}function te(n){return[[[n[0],n[1]],[n[0],n[3]]],[[n[0],n[3]],[n[2],n[3]]],[[n[2],n[3]],[n[2],n[1]]],[[n[2],n[1]],[n[0],n[1]]]]}const ne=Z,re="Extent Interaction",se=`
  <div id="map" class="map"></div>
`,ie=`
  .map {
    width: 100%;
    height: 400px;
  }
`,ae=`
  import ExtentInteraction from 'ol/interaction/Extent.js';
  import Map from 'ol/Map.js';
  import OSM from 'ol/source/OSM.js';
  import TileLayer from 'ol/layer/Tile.js';
  import View from 'ol/View.js';
  import {shiftKeyOnly} from 'ol/events/condition.js';

  const map = new Map({
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
    ],
    target: 'map',
    view: new View({
      center: [0, 0],
      zoom: 2,
    }),
  });

  const extent = new ExtentInteraction({condition: shiftKeyOnly});
  map.addInteraction(extent);
`,oe=`
{
  "name": "extent-interaction",
  "dependencies": {
    "ol": "9.0.0"
  },
  "devDependencies": {
    "vite": "^3.2.3"
  },
  "scripts": {
    "start": "vite",
    "build": "vite build"
  }
}
`;const d=n=>(R("data-v-9fc14da6"),n=n(),Y(),n),le={id:"title"},ce=d(()=>a("div",{id:"map",class:"map"},null,-1)),ue=d(()=>a("p",null,"This example shows how to use an Extent interaction to draw a modifiable extent.",-1)),de=d(()=>a("p",null,"Use Shift+Drag to draw an extent. Shift+Drag on the corners or edges of the extent to resize it. Shift+Click off the extent to remove it.",-1)),he=d(()=>a("h5",{class:"source-heading"},"html",-1)),pe={class:"language-html"},_e=d(()=>a("h5",{class:"source-heading"},"css",-1)),me={class:"language-css"},xe=d(()=>a("h5",{class:"source-heading"},"js",-1)),fe={class:"language-js"},ge=d(()=>a("h5",{class:"source-heading"},"package.json",-1)),ye={class:"language-json"},Ee={__name:"index",setup(n){return L(()=>{const e=new q({layers:[new G({source:new X})],target:"map",view:new A({center:[0,0],zoom:2})}),t=new ne({condition:N});e.addInteraction(t),Prism.highlightAll()}),(e,t)=>(z(),K(B,null,[a("h4",le,h(p(re)),1),ce,ue,de,he,a("pre",null,[a("code",pe,h("  "+p(se).trim()),1)]),_e,a("pre",null,[a("code",me,h("  "+p(ie).trim()),1)]),xe,a("pre",null,[a("code",fe,h("  "+p(ae).trim()),1)]),ge,a("pre",null,[a("code",ye,h("  "+p(oe).trim()),1)])],64))}},Ae=W(Ee,[["__scopeId","data-v-9fc14da6"]]);export{Ae as default};
