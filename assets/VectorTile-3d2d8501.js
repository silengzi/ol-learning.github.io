import{d as U,g as Q,E as K,H as z,e as ee,h as te,r as k,B as re,l as ie}from"./featureloader-5ea9ad61.js";import{C as oe}from"./TileLayer-65677d1f.js";import{aW as ne,ah as C,b4 as D,m as I,X,w as P,as as se,j as O,G as le,ai as ae,c as ce,b5 as de,ar as ue,a7 as B,a5 as he,b6 as N,b7 as V,b8 as ge,u as Te,a8 as fe,aJ as pe,E as Z,i as Re,aS as Ee}from"./Layer-da76b588.js";import{b as j,n as W,e as Ce,c as ye,f as xe,o as Se,p as me,T as Ge,i as ve}from"./TileProperty-0f8ad975.js";import{U as _e}from"./UrlTile-ef3e4dbe.js";const Le={image:["Polygon","Circle","LineString","Image","Text"],hybrid:["Polygon","LineString"],vector:[]},Ie={hybrid:["Image","Text","Default"],vector:["Polygon","Circle","LineString","Image","Text","Default"]};class Fe extends oe{constructor(e){super(e),this.boundHandleStyleImageChange_=this.handleStyleImageChange_.bind(this),this.renderedLayerRevision_,this.renderedPixelToCoordinateTransform_=null,this.renderedRotation_,this.tmpTransform_=ne()}prepareTile(e,t,r){let i;const o=e.getState();return(o===C.LOADED||o===C.ERROR)&&(this.updateExecutorGroup_(e,t,r),this.tileImageNeedsRender_(e)&&(i=!0)),i}getTile(e,t,r,i){const o=i.pixelRatio,n=i.viewState,c=n.resolution,s=n.projection,a=this.getLayer(),l=a.getSource().getTile(e,t,r,o,s),p=i.viewHints,T=!(p[D.ANIMATING]||p[D.INTERACTING]);return(T||!l.wantedResolution)&&(l.wantedResolution=c),this.prepareTile(l,o,s)&&(T||Date.now()-i.time<8)&&a.getRenderMode()!=="vector"&&this.renderTileImage_(l,i),super.getTile(e,t,r,i)}isDrawableTile(e){const t=this.getLayer();return super.isDrawableTile(e)&&(t.getRenderMode()==="vector"?I(t)in e.executorGroups:e.hasContext(t))}getTileImage(e){return e.getImage(this.getLayer())}prepareFrame(e){const t=this.getLayer().getRevision();return this.renderedLayerRevision_!==t&&(this.renderedLayerRevision_=t,this.renderedTiles.length=0),super.prepareFrame(e)}updateExecutorGroup_(e,t,r){const i=this.getLayer(),o=i.getRevision(),n=i.getRenderOrder()||null,c=e.wantedResolution,s=e.getReplayState(i);if(!s.dirty&&s.renderedResolution===c&&s.renderedRevision==o&&s.renderedRenderOrder==n)return;const a=i.getSource(),l=i.getDeclutter(),p=a.getTileGrid(),d=a.getTileGridForProjection(r).getTileCoordExtent(e.wrappedTileCoord),u=a.getSourceTiles(t,r,e),g=I(i);delete e.hitDetectionImageData[g],e.executorGroups[g]=[],l&&(e.declutterExecutorGroups[g]=[]),s.dirty=!1;for(let R=0,y=u.length;R<y;++R){const f=u[R];if(f.getState()!=C.LOADED)continue;const h=f.tileCoord,E=p.getTileCoordExtent(h),m=X(d,E),_=P(m,i.getRenderBuffer()*c,this.tmpExtent),G=se(E,m)?null:_,x=new U(0,_,c,t),S=l?new U(0,m,c,t):void 0,w=Q(c,t),v=function(F){let b;const A=F.getStyleFunction()||i.getStyleFunction();if(A&&(b=A(F,c)),b){const J=this.renderFeature(F,w,b,x,S);s.dirty=s.dirty||J}},M=f.getFeatures();n&&n!==s.renderedRenderOrder&&M.sort(n);for(let F=0,b=M.length;F<b;++F){const A=M[F];(!G||O(G,A.getGeometry().getExtent()))&&v.call(this,A)}const Y=x.finish(),$=i.getRenderMode()!=="vector"&&l&&u.length===1?null:m,q=new K($,c,t,a.getOverlaps(),Y,i.getRenderBuffer());if(e.executorGroups[g].push(q),S){const F=new K(null,c,t,a.getOverlaps(),S.finish(),i.getRenderBuffer());e.declutterExecutorGroups[g].push(F)}}s.renderedRevision=o,s.renderedRenderOrder=n,s.renderedResolution=c}forEachFeatureAtCoordinate(e,t,r,i,o){const n=t.viewState.resolution,c=t.viewState.rotation;r=r??0;const s=this.getLayer(),l=s.getSource().getTileGridForProjection(t.viewState.projection),p=le([e]);P(p,n*r,p);const T={},d=function(R,y,f){let h=R.getId();h===void 0&&(h=I(R));const E=T[h];if(E){if(E!==!0&&f<E.distanceSq){if(f===0)return T[h]=!0,o.splice(o.lastIndexOf(E),1),i(R,s,y);E.geometry=y,E.distanceSq=f}}else{if(f===0)return T[h]=!0,i(R,s,y);o.push(T[h]={feature:R,layer:s,geometry:y,distanceSq:f,callback:i})}},u=this.renderedTiles;let g;for(let R=0,y=u.length;!g&&R<y;++R){const f=u[R],h=l.getTileCoordExtent(f.wrappedTileCoord);if(!O(h,p))continue;const E=I(s),m=[f.executorGroups[E]],_=f.declutterExecutorGroups[E];_&&m.push(_),m.some(G=>{const x=G===_?t.declutterTree.all().map(S=>S.value):null;for(let S=0,w=G.length;S<w;++S)if(g=G[S].forEachFeatureAtCoordinate(e,n,c,r,d,x),g)return!0})}return g}getFeatures(e){return new Promise((t,r)=>{const i=this.getLayer(),o=I(i),n=i.getSource(),c=this.renderedProjection,s=c.getExtent(),a=this.renderedResolution,l=n.getTileGridForProjection(c),p=ae(this.renderedPixelToCoordinateTransform_,e.slice()),T=l.getTileCoordForCoordAndResolution(p,a);let d;for(let h=0,E=this.renderedTiles.length;h<E;++h)if(T.toString()===this.renderedTiles[h].tileCoord.toString()){if(d=this.renderedTiles[h],d.getState()===C.LOADED){const m=l.getTileCoordExtent(d.tileCoord);n.getWrapX()&&c.canWrapX()&&!ce(s,m)&&de(p,c);break}d=void 0}if(!d||d.loadingSourceTiles>0){t([]);return}const u=l.getTileCoordExtent(d.wrappedTileCoord),g=ue(u),R=[(p[0]-g[0])/a,(g[1]-p[1])/a],y=d.getSourceTiles().reduce(function(h,E){return h.concat(E.getFeatures())},[]);let f=d.hitDetectionImageData[o];if(!f){const h=B(l.getTileSize(l.getZForResolution(a,n.zDirection))),E=this.renderedRotation_,m=[this.getRenderTransform(l.getTileCoordCenter(d.wrappedTileCoord),a,0,z,h[0]*z,h[1]*z,0)];f=ee(h,m,y,i.getStyleFunction(),l.getTileCoordExtent(d.wrappedTileCoord),d.getReplayState(i).renderedResolution,E),d.hitDetectionImageData[o]=f}t(te(R,y,f))})}handleFontsChanged(){const e=this.getLayer();e.getVisible()&&this.renderedLayerRevision_!==void 0&&e.changed()}handleStyleImageChange_(e){this.renderIfReadyAndVisible()}renderDeclutter(e){const t=this.context,r=t.globalAlpha;t.globalAlpha=this.getLayer().getOpacity();const i=e.viewHints,o=!(i[D.ANIMATING]||i[D.INTERACTING]),n=this.renderedTiles;for(let c=0,s=n.length;c<s;++c){const a=n[c],l=a.declutterExecutorGroups[I(this.getLayer())];if(l)for(let p=l.length-1;p>=0;--p)l[p].execute(this.context,1,this.getTileRenderTransform(a,e),e.viewState.rotation,o,void 0,e.declutterTree)}t.globalAlpha=r}getTileRenderTransform(e,t){const r=t.pixelRatio,i=t.viewState,o=i.center,n=i.resolution,c=i.rotation,s=t.size,a=Math.round(s[0]*r),l=Math.round(s[1]*r),T=this.getLayer().getSource().getTileGridForProjection(t.viewState.projection),d=e.tileCoord,u=T.getTileCoordExtent(e.wrappedTileCoord),g=T.getTileCoordExtent(d,this.tmpExtent)[0]-u[0];return he(N(this.inversePixelTransform.slice(),1/r,1/r),this.getRenderTransform(o,n,c,r,a,l,g))}postRender(e,t){const r=t.viewHints,i=!(r[D.ANIMATING]||r[D.INTERACTING]);this.renderedPixelToCoordinateTransform_=t.pixelToCoordinateTransform.slice(),this.renderedRotation_=t.viewState.rotation;const o=this.getLayer(),n=o.getRenderMode(),c=e.globalAlpha;e.globalAlpha=o.getOpacity();const s=Ie[n],a=t.viewState,l=a.rotation,p=o.getSource(),d=p.getTileGridForProjection(a.projection).getZForResolution(a.resolution,p.zDirection),u=this.renderedTiles,g=[],R=[];let y=!0;for(let f=u.length-1;f>=0;--f){const h=u[f];y=y&&!h.getReplayState(o).dirty;const E=h.executorGroups[I(o)].filter(S=>S.hasExecutors(s));if(E.length===0)continue;const m=this.getTileRenderTransform(h,t),_=h.tileCoord[0];let G=!1;const x=E[0].getClipCoords(m);if(x){for(let S=0,w=g.length;S<w;++S)if(d!==_&&_<R[S]){const v=g[S];O([x[0],x[3],x[4],x[7]],[v[0],v[3],v[4],v[7]])&&(G||(e.save(),G=!0),e.beginPath(),e.moveTo(x[0],x[1]),e.lineTo(x[2],x[3]),e.lineTo(x[4],x[5]),e.lineTo(x[6],x[7]),e.moveTo(v[6],v[7]),e.lineTo(v[4],v[5]),e.lineTo(v[2],v[3]),e.lineTo(v[0],v[1]),e.clip())}g.push(x),R.push(_)}for(let S=0,w=E.length;S<w;++S)E[S].execute(e,1,m,l,i,s);G&&e.restore()}e.globalAlpha=c,this.ready=y,super.postRender(e,t)}renderFeature(e,t,r,i,o){if(!r)return!1;let n=!1;if(Array.isArray(r))for(let c=0,s=r.length;c<s;++c)n=k(i,e,r[c],t,this.boundHandleStyleImageChange_,void 0,o)||n;else n=k(i,e,r,t,this.boundHandleStyleImageChange_,void 0,o);return n}tileImageNeedsRender_(e){const t=this.getLayer();if(t.getRenderMode()==="vector")return!1;const r=e.getReplayState(t),i=t.getRevision(),o=e.wantedResolution;return r.renderedTileResolution!==o||r.renderedTileRevision!==i}renderTileImage_(e,t){const r=this.getLayer(),i=e.getReplayState(r),o=r.getRevision(),n=e.executorGroups[I(r)];i.renderedTileRevision=o;const c=e.wrappedTileCoord,s=c[0],a=r.getSource();let l=t.pixelRatio;const T=t.viewState.projection,d=a.getTileGridForProjection(T),u=d.getResolution(e.tileCoord[0]),g=t.pixelRatio/e.wantedResolution*u,R=d.getResolution(s),y=e.getContext(r);l=Math.round(Math.max(l,g/l));const f=a.getTilePixelSize(s,l,T);y.canvas.width=f[0],y.canvas.height=f[1];const h=l/g;if(h!==1){const G=V(this.tmpTransform_);N(G,h,h),y.setTransform.apply(y,G)}const E=d.getTileCoordExtent(c,this.tmpExtent),m=g/R,_=V(this.tmpTransform_);N(_,m,-m),ge(_,-E[0],-E[3]);for(let G=0,x=n.length;G<x;++G)n[G].execute(y,h,_,0,!0,Le[r.getRenderMode()]);i.renderedTileResolution=e.wantedResolution}}const we=Fe;class De extends re{constructor(e){e=e||{};const t=Object.assign({},e);delete t.preload,delete t.useInterimTilesOnError,super(t),this.on,this.once,this.un;const r=e.renderMode||"hybrid";Te(r=="hybrid"||r=="vector","`renderMode` must be `'hybrid'` or `'vector'`"),this.renderMode_=r,this.setPreload(e.preload?e.preload:0),this.setUseInterimTilesOnError(e.useInterimTilesOnError!==void 0?e.useInterimTilesOnError:!0),this.getBackground,this.setBackground}createRenderer(){return new we(this)}getFeatures(e){return super.getFeatures(e)}getRenderMode(){return this.renderMode_}getPreload(){return this.get(j.PRELOAD)}getUseInterimTilesOnError(){return this.get(j.USE_INTERIM_TILES_ON_ERROR)}setPreload(e){this.set(j.PRELOAD,e)}setUseInterimTilesOnError(e){this.set(j.USE_INTERIM_TILES_ON_ERROR,e)}}const Ve=De;let Oe=class extends W{constructor(e,t,r,i,o,n){super(e,t,n),this.extent=null,this.format_=i,this.features_=null,this.loader_,this.projection=null,this.resolution,this.tileLoadFunction_=o,this.url_=r,this.key=r}getFormat(){return this.format_}getFeatures(){return this.features_}load(){this.state==C.IDLE&&(this.setState(C.LOADING),this.tileLoadFunction_(this,this.url_),this.loader_&&this.loader_(this.extent,this.resolution,this.projection))}onLoad(e,t){this.setFeatures(e)}onError(){this.setState(C.ERROR)}setFeatures(e){this.features_=e,this.setState(C.LOADED)}setLoader(e){this.loader_=e}};const be=Oe,H=[];class Ae extends W{constructor(e,t,r,i){super(e,t,{transition:0}),this.context_={},this.executorGroups={},this.declutterExecutorGroups={},this.loadingSourceTiles=0,this.hitDetectionImageData={},this.replayState_={},this.sourceTiles=[],this.errorTileKeys={},this.wantedResolution,this.getSourceTiles=i.bind(void 0,this),this.wrappedTileCoord=r}getContext(e){const t=I(e);return t in this.context_||(this.context_[t]=fe(1,1,H)),this.context_[t]}hasContext(e){return I(e)in this.context_}getImage(e){return this.hasContext(e)?this.getContext(e).canvas:null}getReplayState(e){const t=I(e);return t in this.replayState_||(this.replayState_[t]={dirty:!1,renderedRenderOrder:null,renderedResolution:NaN,renderedRevision:-1,renderedTileResolution:NaN,renderedTileRevision:-1,renderedTileZ:-1}),this.replayState_[t]}load(){this.getSourceTiles()}release(){for(const e in this.context_){const t=this.context_[e];pe(t),H.push(t.canvas),delete this.context_[e]}super.release()}}const Pe=Ae;class je extends _e{constructor(e){const t=e.projection||"EPSG:3857",r=e.extent||Ce(t),i=e.tileGrid||ye({extent:r,maxResolution:e.maxResolution,maxZoom:e.maxZoom!==void 0?e.maxZoom:22,minZoom:e.minZoom,tileSize:e.tileSize||512});super({attributions:e.attributions,attributionsCollapsible:e.attributionsCollapsible,cacheSize:e.cacheSize,interpolate:!0,opaque:!1,projection:t,state:e.state,tileGrid:i,tileLoadFunction:e.tileLoadFunction?e.tileLoadFunction:Me,tileUrlFunction:e.tileUrlFunction,url:e.url,urls:e.urls,wrapX:e.wrapX===void 0?!0:e.wrapX,transition:e.transition,zDirection:e.zDirection===void 0?1:e.zDirection}),this.format_=e.format?e.format:null,this.sourceTileCache=new xe(this.tileCache.highWaterMark),this.overlaps_=e.overlaps==null?!0:e.overlaps,this.tileClass=e.tileClass?e.tileClass:be,this.tileGrids_={}}getFeaturesInExtent(e){const t=[],r=this.tileCache;if(r.getCount()===0)return t;const i=Se(r.peekFirstKey())[0],o=this.tileGrid;return r.forEach(function(n){if(n.tileCoord[0]!==i||n.getState()!==C.LOADED)return;const c=n.getSourceTiles();for(let s=0,a=c.length;s<a;++s){const l=c[s],p=l.tileCoord;if(O(e,o.getTileCoordExtent(p))){const T=l.getFeatures();if(T)for(let d=0,u=T.length;d<u;++d){const g=T[d],R=g.getGeometry();O(e,R.getExtent())&&t.push(g)}}}}),t}getOverlaps(){return this.overlaps_}clear(){this.tileCache.clear(),this.sourceTileCache.clear()}expireCache(e,t){const r=this.getTileCacheForProjection(e),i=Object.keys(t).reduce((o,n)=>{const c=me(n),s=r.peek(c);if(s){const a=s.sourceTiles;for(let l=0,p=a.length;l<p;++l)o[a[l].getKey()]=!0}return o},{});super.expireCache(e,t),this.sourceTileCache.expireCache(i)}getSourceTiles(e,t,r){if(r.getState()===C.IDLE){r.setState(C.LOADING);const i=r.wrappedTileCoord,o=this.getTileGridForProjection(t),n=o.getTileCoordExtent(i),c=i[0],s=o.getResolution(c);P(n,-s,n);const a=this.tileGrid,l=a.getExtent();l&&X(n,l,n);const p=a.getZForResolution(s,this.zDirection);a.forEachTileCoord(n,p,T=>{const d=this.tileUrlFunction(T,e,t),u=this.sourceTileCache.containsKey(d)?this.sourceTileCache.get(d):new this.tileClass(T,d?C.IDLE:C.EMPTY,d,this.format_,this.tileLoadFunction);r.sourceTiles.push(u);const g=u.getState();if(g<C.LOADED){const R=y=>{this.handleTileChange(y);const f=u.getState();if(f===C.LOADED||f===C.ERROR){const h=u.getKey();h in r.errorTileKeys?u.getState()===C.LOADED&&delete r.errorTileKeys[h]:r.loadingSourceTiles--,f===C.ERROR?r.errorTileKeys[h]=!0:u.removeEventListener(Z.CHANGE,R),r.loadingSourceTiles===0&&r.setState(Re(r.errorTileKeys)?C.LOADED:C.ERROR)}};u.addEventListener(Z.CHANGE,R),r.loadingSourceTiles++}g===C.IDLE&&(u.extent=a.getTileCoordExtent(T),u.projection=t,u.resolution=a.getResolution(T[0]),this.sourceTileCache.set(d,u),u.load())}),r.loadingSourceTiles||r.setState(r.sourceTiles.some(T=>T.getState()===C.ERROR)?C.ERROR:C.LOADED)}return r.sourceTiles}getTile(e,t,r,i,o){const n=ve(e,t,r),c=this.getKey();let s;if(this.tileCache.containsKey(n)&&(s=this.tileCache.get(n),s.key===c))return s;const a=[e,t,r];let l=this.getTileCoordForTileUrlFunction(a,o);const p=this.getTileGrid().getExtent(),T=this.getTileGridForProjection(o);if(l&&p){const g=T.getTileCoordExtent(l);P(g,-T.getResolution(e),g),O(p,g)||(l=null)}let d=!0;if(l!==null){const g=this.tileGrid,R=T.getResolution(e),y=g.getZForResolution(R,1),f=T.getTileCoordExtent(l);P(f,-R,f),g.forEachTileCoord(f,y,h=>{d=d&&!this.tileUrlFunction(h,i,o)})}const u=new Pe(a,d?C.EMPTY:C.IDLE,l,this.getSourceTiles.bind(this,i,o));return u.key=c,s?(u.interimTile=s,u.refreshInterimChain(),this.tileCache.replace(n,u)):this.tileCache.set(n,u),u}getTileGridForProjection(e){const t=e.getCode();let r=this.tileGrids_[t];if(!r){const i=this.tileGrid,o=i.getResolutions().slice(),n=o.map(function(a,l){return i.getOrigin(l)}),c=o.map(function(a,l){return i.getTileSize(l)}),s=Ee+1;for(let a=o.length;a<s;++a)o.push(o[a-1]/2),n.push(n[a-1]),c.push(c[a-1]);r=new Ge({extent:i.getExtent(),origins:n,resolutions:o,tileSizes:c}),this.tileGrids_[t]=r}return r}getTilePixelRatio(e){return e}getTilePixelSize(e,t,r){const i=this.getTileGridForProjection(r),o=B(i.getTileSize(e),this.tmpSize);return[Math.round(o[0]*t),Math.round(o[1]*t)]}updateCacheSize(e,t){super.updateCacheSize(e*2,t),this.sourceTileCache.highWaterMark=this.getTileCacheForProjection(t).highWaterMark}}const He=je;function Me(L,e){L.setLoader(function(t,r,i){ie(e,L.getFormat(),t,r,i,L.onLoad.bind(L),L.onError.bind(L))})}export{Ve as V,He as a,be as b,Me as d};