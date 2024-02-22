import{ai as u,m as d,a6 as g,W as E,g as I}from"./Layer-763025a3.js";import{I as K,g as k,f as p,h as R,R as U,i as _}from"./TileProperty-b49a7745.js";import{U as b}from"./UrlTile-ce5b3cbe.js";class L extends b{constructor(e){super({attributions:e.attributions,cacheSize:e.cacheSize,opaque:e.opaque,projection:e.projection,state:e.state,tileGrid:e.tileGrid,tileLoadFunction:e.tileLoadFunction?e.tileLoadFunction:w,tilePixelRatio:e.tilePixelRatio,tileUrlFunction:e.tileUrlFunction,url:e.url,urls:e.urls,wrapX:e.wrapX,transition:e.transition,interpolate:e.interpolate!==void 0?e.interpolate:!0,key:e.key,attributionsCollapsible:e.attributionsCollapsible,zDirection:e.zDirection}),this.crossOrigin=e.crossOrigin!==void 0?e.crossOrigin:null,this.tileClass=e.tileClass!==void 0?e.tileClass:K,this.tileCacheForProjection={},this.tileGridForProjection={},this.reprojectionErrorThreshold_=e.reprojectionErrorThreshold,this.renderReprojectionEdges_=!1}canExpireCache(){if(this.tileCache.canExpireCache())return!0;for(const e in this.tileCacheForProjection)if(this.tileCacheForProjection[e].canExpireCache())return!0;return!1}expireCache(e,i){const t=this.getTileCacheForProjection(e);this.tileCache.expireCache(this.tileCache==t?i:{});for(const s in this.tileCacheForProjection){const n=this.tileCacheForProjection[s];n.expireCache(n==t?i:{})}}getGutterForProjection(e){return this.getProjection()&&e&&!u(this.getProjection(),e)?0:this.getGutter()}getGutter(){return 0}getKey(){let e=super.getKey();return this.getInterpolate()||(e+=":disable-interpolation"),e}getOpaque(e){return this.getProjection()&&e&&!u(this.getProjection(),e)?!1:super.getOpaque(e)}getTileGridForProjection(e){const i=this.getProjection();if(this.tileGrid&&(!i||u(i,e)))return this.tileGrid;const t=d(e);return t in this.tileGridForProjection||(this.tileGridForProjection[t]=k(e)),this.tileGridForProjection[t]}getTileCacheForProjection(e){const i=this.getProjection();if(!i||u(i,e))return this.tileCache;const t=d(e);return t in this.tileCacheForProjection||(this.tileCacheForProjection[t]=new p(this.tileCache.highWaterMark)),this.tileCacheForProjection[t]}createTile_(e,i,t,s,n,r){const l=[e,i,t],c=this.getTileCoordForTileUrlFunction(l,n),o=c?this.tileUrlFunction(c,s,n):void 0,a=new this.tileClass(l,o!==void 0?g.IDLE:g.EMPTY,o!==void 0?o:"",this.crossOrigin,this.tileLoadFunction,this.tileOptions);return a.key=r,a.addEventListener(E.CHANGE,this.handleTileChange.bind(this)),a}getTile(e,i,t,s,n){const r=this.getProjection();if(!r||!n||u(r,n))return this.getTileInternal(e,i,t,s,r||n);const l=this.getTileCacheForProjection(n),c=[e,i,t];let o;const a=R(c);l.containsKey(a)&&(o=l.get(a));const T=this.getKey();if(o&&o.key==T)return o;const P=this.getTileGridForProjection(r),f=this.getTileGridForProjection(n),F=this.getTileCoordForTileUrlFunction(c,n),h=new U(r,P,n,f,c,F,this.getTilePixelRatio(s),this.getGutter(),(j,y,G,m)=>this.getTileInternal(j,y,G,m,r),this.reprojectionErrorThreshold_,this.renderReprojectionEdges_,this.getInterpolate());return h.key=T,o?(h.interimTile=o,h.refreshInterimChain(),l.replace(a,h)):l.set(a,h),h}getTileInternal(e,i,t,s,n){let r=null;const l=_(e,i,t),c=this.getKey();if(!this.tileCache.containsKey(l))r=this.createTile_(e,i,t,s,n,c),this.tileCache.set(l,r);else if(r=this.tileCache.get(l),r.key!=c){const o=r;r=this.createTile_(e,i,t,s,n,c),o.getState()==g.IDLE?r.interimTile=o.interimTile:r.interimTile=o,r.refreshInterimChain(),this.tileCache.replace(l,r)}return r}setRenderReprojectionEdges(e){if(this.renderReprojectionEdges_!=e){this.renderReprojectionEdges_=e;for(const i in this.tileCacheForProjection)this.tileCacheForProjection[i].clear();this.changed()}}setTileGridForProjection(e,i){const t=I(e);if(t){const s=d(t);s in this.tileGridForProjection||(this.tileGridForProjection[s]=i)}}clear(){super.clear();for(const e in this.tileCacheForProjection)this.tileCacheForProjection[e].clear()}}function w(C,e){C.getImage().src=e}const D=L;export{D as T};
