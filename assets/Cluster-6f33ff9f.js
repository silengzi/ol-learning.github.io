import{aq as g,H as h,a1 as u,aK as m,aS as C,cg as p,ch as y,w as D,P as F,W as b}from"./Layer-227d2e40.js";import{V as E,F as R}from"./Vector-dc05cca5.js";class _ extends E{constructor(t){super({attributions:t.attributions,wrapX:t.wrapX}),this.resolution=void 0,this.distance=t.distance!==void 0?t.distance:20,this.minDistance=t.minDistance||0,this.interpolationRatio=0,this.features=[],this.geometryFunction=t.geometryFunction||function(s){const e=s.getGeometry();return g(!e||e.getType()==="Point","The default `geometryFunction` can only handle `Point` or null geometries"),e},this.createCustomCluster_=t.createCluster,this.source=null,this.boundRefresh_=this.refresh.bind(this),this.updateDistance(this.distance,this.minDistance),this.setSource(t.source||null)}clear(t){this.features.length=0,super.clear(t)}getDistance(){return this.distance}getSource(){return this.source}loadFeatures(t,s,e){this.source.loadFeatures(t,s,e),s!==this.resolution&&(this.resolution=s,this.refresh())}setDistance(t){this.updateDistance(t,this.minDistance)}setMinDistance(t){this.updateDistance(this.distance,t)}getMinDistance(){return this.minDistance}setSource(t){this.source&&this.source.removeEventListener(h.CHANGE,this.boundRefresh_),this.source=t,t&&t.addEventListener(h.CHANGE,this.boundRefresh_),this.refresh()}refresh(){this.clear(),this.cluster(),this.addFeatures(this.features)}updateDistance(t,s){const e=t===0?0:Math.min(s,t)/t,i=t!==this.distance||this.interpolationRatio!==e;this.distance=t,this.minDistance=s,this.interpolationRatio=e,i&&this.refresh()}cluster(){if(this.resolution===void 0||!this.source)return;const t=b(),s=this.distance*this.resolution,e=this.source.getFeatures(),i={};for(let r=0,o=e.length;r<o;r++){const n=e[r];if(!(u(n)in i)){const a=this.geometryFunction(n);if(a){const l=a.getCoordinates();m(l,t),C(t,s,t);const d=this.source.getFeaturesInExtent(t).filter(function(f){const c=u(f);return c in i?!1:(i[c]=!0,!0)});this.features.push(this.createCluster(d,t))}}}}createCluster(t,s){const e=[0,0];for(let n=t.length-1;n>=0;--n){const a=this.geometryFunction(t[n]);a?p(e,a.getCoordinates()):t.splice(n,1)}y(e,1/t.length);const i=D(s),r=this.interpolationRatio,o=new F([e[0]*(1-r)+i[0]*r,e[1]*(1-r)+i[1]*r]);return this.createCustomCluster_?this.createCustomCluster_(o,t):new R({geometry:o,features:t})}}const x=_;export{x as C};
