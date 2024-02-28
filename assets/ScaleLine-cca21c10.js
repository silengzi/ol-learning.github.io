import{T as A}from"./TileImage-1df58d67.js";import{D as v}from"./common-c2bf7a3a.js";import{c as L}from"./string-30bf5402.js";import{d0 as P,e as j,a0 as I,Y as N,g as U,am as C,aP as M,ak as F,y as W,z as w,an as y,aA as G}from"./Layer-3b715193.js";import{u as V,j as B}from"./TileProperty-e33ea24b.js";function x(d,e){const t=[];Object.keys(e).forEach(function(i){e[i]!==null&&e[i]!==void 0&&t.push(i+"="+encodeURIComponent(e[i]))});const r=t.join("&");return d=d.replace(/[?&]$/,""),d+=d.includes("?")?"&":"?",d+r}const b="1.3.0";function D(d,e,t,r,i){i.WIDTH=t[0],i.HEIGHT=t[1];const a=r.getAxisOrientation();let s;const l=L(i.VERSION,"1.3")>=0;return i[l?"CRS":"SRS"]=r.getCode(),l&&a.substr(0,2)=="ne"?s=[e[1],e[0],e[3],e[2]]:s=e,i.BBOX=s.join(","),x(d,i)}function k(d,e,t,r,i,a,s){a=Object.assign({REQUEST:"GetMap"},a);const l=e/t,c=[P(j(d)/l,v),P(I(d)/l,v)];if(t!=1)switch(s){case"geoserver":const n=90*t+.5|0;"FORMAT_OPTIONS"in a?a.FORMAT_OPTIONS+=";dpi:"+n:a.FORMAT_OPTIONS="dpi:"+n;break;case"mapserver":a.MAP_RESOLUTION=90*t;break;case"carmentaserver":case"qgis":a.DPI=90*t;break;default:throw new Error("Unknown `serverType` configured")}return D(i,d,c,r,a)}function O(d,e){return Object.assign({REQUEST:e,SERVICE:"WMS",VERSION:b,FORMAT:"image/png",STYLES:"",TRANSPARENT:!0},d)}class $ extends A{constructor(e){e=e||{};const t=Object.assign({},e.params),r="TRANSPARENT"in t?t.TRANSPARENT:!0;super({attributions:e.attributions,attributionsCollapsible:e.attributionsCollapsible,cacheSize:e.cacheSize,crossOrigin:e.crossOrigin,interpolate:e.interpolate,opaque:!r,projection:e.projection,reprojectionErrorThreshold:e.reprojectionErrorThreshold,tileClass:e.tileClass,tileGrid:e.tileGrid,tileLoadFunction:e.tileLoadFunction,url:e.url,urls:e.urls,wrapX:e.wrapX!==void 0?e.wrapX:!0,transition:e.transition,zDirection:e.zDirection}),this.gutter_=e.gutter!==void 0?e.gutter:0,this.params_=t,this.v13_=!0,this.serverType_=e.serverType,this.hidpi_=e.hidpi!==void 0?e.hidpi:!0,this.tmpExtent_=N(),this.updateV13_(),this.setKey(this.getKeyForParams_())}getFeatureInfoUrl(e,t,r,i){const a=U(r),s=this.getProjection()||a;let l=this.getTileGrid();l||(l=this.getTileGridForProjection(s));const c=C(e,a,s),o=V(s,a,e,t),n=l.getZForResolution(o,this.zDirection),g=l.getResolution(n),u=l.getTileCoordForCoordAndZ(c,n);if(l.getResolutions().length<=u[0])return;let h=l.getTileCoordExtent(u,this.tmpExtent_);const f=this.gutter_;f!==0&&(h=M(h,g*f,h));const _={QUERY_LAYERS:this.params_.LAYERS};Object.assign(_,O(this.params_,"GetFeatureInfo"),i);const E=Math.floor((c[0]-h[0])/g),T=Math.floor((h[3]-c[1])/g);return _[this.v13_?"I":"X"]=E,_[this.v13_?"J":"Y"]=T,this.getRequestUrl_(u,h,1,s||a,_)}getLegendUrl(e,t){if(this.urls[0]===void 0)return;const r={SERVICE:"WMS",VERSION:b,REQUEST:"GetLegendGraphic",FORMAT:"image/png"};if(t===void 0||t.LAYER===void 0){const i=this.params_.LAYERS;if(!(!Array.isArray(i)||i.length===1))return;r.LAYER=i}if(e!==void 0){const i=this.getProjection()?this.getProjection().getMetersPerUnit():1,a=28e-5;r.SCALE=e*i/a}return Object.assign(r,t),x(this.urls[0],r)}getGutter(){return this.gutter_}getParams(){return this.params_}getRequestUrl_(e,t,r,i,a){const s=this.urls;if(!s)return;let l;if(s.length==1)l=s[0];else{const c=F(B(e),s.length);l=s[c]}return k(t,(this.tileGrid||this.getTileGridForProjection(i)).getResolution(e[0]),r,i,l,a,this.serverType_)}getTilePixelRatio(e){return!this.hidpi_||this.serverType_===void 0?1:e}getKeyForParams_(){let e=0;const t=[];for(const r in this.params_)t[e++]=r+"-"+this.params_[r];return t.join("/")}updateParams(e){Object.assign(this.params_,e),this.updateV13_(),this.setKey(this.getKeyForParams_())}updateV13_(){const e=this.params_.VERSION||b;this.v13_=L(e,"1.3")>=0}tileUrlFunction(e,t,r){let i=this.getTileGrid();if(i||(i=this.getTileGridForProjection(r)),i.getResolutions().length<=e[0])return;t!=1&&(!this.hidpi_||this.serverType_===void 0)&&(t=1);const a=i.getResolution(e[0]);let s=i.getTileCoordExtent(e,this.tmpExtent_);const l=this.gutter_;l!==0&&(s=M(s,a*l,s));const c=Object.assign({},O(this.params_,"GetMap"));return this.getRequestUrl_(e,s,t,r,c)}}const Z=$,R="units",Y=[1,2,5],S=25.4/.28;class q extends W{constructor(e){e=e||{};const t=document.createElement("div");t.style.pointerEvents="none",super({element:t,render:e.render,target:e.target}),this.on,this.once,this.un;const r=e.className!==void 0?e.className:e.bar?"ol-scale-bar":"ol-scale-line";this.innerElement_=document.createElement("div"),this.innerElement_.className=r+"-inner",this.element.className=r+" "+w,this.element.appendChild(this.innerElement_),this.viewState_=null,this.minWidth_=e.minWidth!==void 0?e.minWidth:64,this.maxWidth_=e.maxWidth,this.renderedVisible_=!1,this.renderedWidth_=void 0,this.renderedHTML_="",this.addChangeListener(R,this.handleUnitsChanged_),this.setUnits(e.units||"metric"),this.scaleBar_=e.bar||!1,this.scaleBarSteps_=e.steps||4,this.scaleBarText_=e.text||!1,this.dpi_=e.dpi||void 0}getUnits(){return this.get(R)}handleUnitsChanged_(){this.updateElement_()}setUnits(e){this.set(R,e)}setDpi(e){this.dpi_=e}updateElement_(){const e=this.viewState_;if(!e){this.renderedVisible_&&(this.element.style.display="none",this.renderedVisible_=!1);return}const t=e.center,r=e.projection,i=this.getUnits(),a=i=="degrees"?"degrees":"m";let s=y(r,e.resolution,t,a);const l=this.minWidth_*(this.dpi_||S)/S,c=this.maxWidth_!==void 0?this.maxWidth_*(this.dpi_||S)/S:void 0;let o=l*s,n="";if(i=="degrees"){const m=G.degrees;o*=m,o<m/60?(n="″",s*=3600):o<m?(n="′",s*=60):n="°"}else if(i=="imperial")o<.9144?(n="in",s/=.0254):o<1609.344?(n="ft",s/=.3048):(n="mi",s/=1609.344);else if(i=="nautical")s/=1852,n="NM";else if(i=="metric")o<1e-6?(n="nm",s*=1e9):o<.001?(n="μm",s*=1e6):o<1?(n="mm",s*=1e3):o<1e3?n="m":(n="km",s/=1e3);else if(i=="us")o<.9144?(n="in",s*=39.37):o<1609.344?(n="ft",s/=.30480061):(n="mi",s/=1609.3472);else throw new Error("Invalid units");let g=3*Math.floor(Math.log(l*s)/Math.log(10)),u,h,f,_,E,T;for(;;){f=Math.floor(g/3);const m=Math.pow(10,f);if(u=Y[(g%3+3)%3]*m,h=Math.round(u/s),isNaN(h)){this.element.style.display="none",this.renderedVisible_=!1;return}if(c!==void 0&&h>=c){u=_,h=E,f=T;break}else if(h>=l)break;_=u,E=h,T=f,++g}const p=this.scaleBar_?this.createScaleBar(h,u,n):u.toFixed(f<0?-f:0)+" "+n;this.renderedHTML_!=p&&(this.innerElement_.innerHTML=p,this.renderedHTML_=p),this.renderedWidth_!=h&&(this.innerElement_.style.width=h+"px",this.renderedWidth_=h),this.renderedVisible_||(this.element.style.display="",this.renderedVisible_=!0)}createScaleBar(e,t,r){const i=this.getScaleForResolution(),a=i<1?Math.round(1/i).toLocaleString()+" : 1":"1 : "+Math.round(i).toLocaleString(),s=this.scaleBarSteps_,l=e/s,c=[this.createMarker("absolute")];for(let n=0;n<s;++n){const g=n%2===0?"ol-scale-singlebar-odd":"ol-scale-singlebar-even";c.push(`<div><div class="ol-scale-singlebar ${g}" style="width: ${l}px;"></div>`+this.createMarker("relative")+(n%2===0||s===2?this.createStepText(n,e,!1,t,r):"")+"</div>")}return c.push(this.createStepText(s,e,!0,t,r)),(this.scaleBarText_?`<div class="ol-scale-text" style="width: ${e}px;">`+a+"</div>":"")+c.join("")}createMarker(e){return`<div class="ol-scale-step-marker" style="position: ${e}; top: ${e==="absolute"?3:-10}px;"></div>`}createStepText(e,t,r,i,a){const l=(e===0?0:Math.round(i/this.scaleBarSteps_*e*100)/100)+(e===0?"":" "+a),c=e===0?-3:t/this.scaleBarSteps_*-1,o=e===0?0:t/this.scaleBarSteps_*2;return`<div class="ol-scale-step-text" style="margin-left: ${c}px;text-align: ${e===0?"left":"center"};min-width: ${o}px;left: ${r?t+"px":"unset"};">`+l+"</div>"}getScaleForResolution(){const e=y(this.viewState_.projection,this.viewState_.resolution,this.viewState_.center,"m"),t=this.dpi_||S,r=1e3/25.4;return e*r*t}render(e){const t=e.frameState;t?this.viewState_=t.viewState:this.viewState_=null,this.updateElement_()}}const J=q;export{J as S,Z as T};
