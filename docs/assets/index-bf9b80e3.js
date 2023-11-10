import{U as I,I as v,e as g,g as T,a as O,T as k,b as _,E as G,c as z,R,d as S,f as L,h as Z,i as M,L as U,j as p,C as D,M as K,V}from"./TileLayer-9c9734e6.js";import{_ as X,i as q,o as B,c as A,b as c,t as m,g as f,F as N,j as Y,p as $,k as H}from"./index-2ef17a65.js";const W="Accessible Map",J=`
  <a class="skiplink" href="#map">Go to map</a>
  <div id="map" class="map" tabindex="0"></div>
  <button id="zoom-out">Zoom out</button>
  <button id="zoom-in">Zoom in</button>
`,Q=`
  .map {
    width: 100%;
    height: 400px;
  }
  a.skiplink {
    position: absolute;
    clip: rect(1px, 1px, 1px, 1px);
    padding: 0;
    border: 0;
    height: 1px;
    width: 1px;
    overflow: hidden;
  }
  a.skiplink:focus {
    clip: auto;
    height: auto;
    width: auto;
    background-color: #fff;
    padding: 0.3em;
  }
  #map:focus {
    outline: #4A74A8 solid 0.15em;
  }
`,ee=`
  import Map from 'ol/Map.js';
  import OSM from 'ol/source/OSM.js';
  import TileLayer from 'ol/layer/Tile.js';
  import View from 'ol/View.js';

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

  document.getElementById('zoom-out').onclick = function () {
    const view = map.getView();
    const zoom = view.getZoom();
    view.setZoom(zoom - 1);
  };

  document.getElementById('zoom-in').onclick = function () {
    const view = map.getView();
    const zoom = view.getZoom();
    view.setZoom(zoom + 1);
  };
`,te=`
  {
    "name": "accessible",
    "dependencies": {
      "ol": "8.1.0"
    },
    "devDependencies": {
      "vite": "^3.2.3"
    },
    "scripts": {
      "start": "vite",
      "build": "vite build"
    }
  }
`;class ie extends I{constructor(e){super({attributions:e.attributions,cacheSize:e.cacheSize,opaque:e.opaque,projection:e.projection,state:e.state,tileGrid:e.tileGrid,tileLoadFunction:e.tileLoadFunction?e.tileLoadFunction:re,tilePixelRatio:e.tilePixelRatio,tileUrlFunction:e.tileUrlFunction,url:e.url,urls:e.urls,wrapX:e.wrapX,transition:e.transition,interpolate:e.interpolate!==void 0?e.interpolate:!0,key:e.key,attributionsCollapsible:e.attributionsCollapsible,zDirection:e.zDirection}),this.crossOrigin=e.crossOrigin!==void 0?e.crossOrigin:null,this.tileClass=e.tileClass!==void 0?e.tileClass:v,this.tileCacheForProjection={},this.tileGridForProjection={},this.reprojectionErrorThreshold_=e.reprojectionErrorThreshold,this.renderReprojectionEdges_=!1}canExpireCache(){if(this.tileCache.canExpireCache())return!0;for(const e in this.tileCacheForProjection)if(this.tileCacheForProjection[e].canExpireCache())return!0;return!1}expireCache(e,t){const i=this.getTileCacheForProjection(e);this.tileCache.expireCache(this.tileCache==i?t:{});for(const n in this.tileCacheForProjection){const o=this.tileCacheForProjection[n];o.expireCache(o==i?t:{})}}getGutterForProjection(e){return this.getProjection()&&e&&!g(this.getProjection(),e)?0:this.getGutter()}getGutter(){return 0}getKey(){let e=super.getKey();return this.getInterpolate()||(e+=":disable-interpolation"),e}getOpaque(e){return this.getProjection()&&e&&!g(this.getProjection(),e)?!1:super.getOpaque(e)}getTileGridForProjection(e){const t=this.getProjection();if(this.tileGrid&&(!t||g(t,e)))return this.tileGrid;const i=T(e);return i in this.tileGridForProjection||(this.tileGridForProjection[i]=O(e)),this.tileGridForProjection[i]}getTileCacheForProjection(e){const t=this.getProjection();if(!t||g(t,e))return this.tileCache;const i=T(e);return i in this.tileCacheForProjection||(this.tileCacheForProjection[i]=new k(this.tileCache.highWaterMark)),this.tileCacheForProjection[i]}createTile_(e,t,i,n,o,r){const a=[e,t,i],d=this.getTileCoordForTileUrlFunction(a,o),s=d?this.tileUrlFunction(d,n,o):void 0,u=new this.tileClass(a,s!==void 0?_.IDLE:_.EMPTY,s!==void 0?s:"",this.crossOrigin,this.tileLoadFunction,this.tileOptions);return u.key=r,u.addEventListener(G.CHANGE,this.handleTileChange.bind(this)),u}getTile(e,t,i,n,o){const r=this.getProjection();if(!r||!o||g(r,o))return this.getTileInternal(e,t,i,n,r||o);const a=this.getTileCacheForProjection(o),d=[e,t,i];let s;const u=z(d);a.containsKey(u)&&(s=a.get(u));const C=this.getKey();if(s&&s.key==C)return s;const P=this.getTileGridForProjection(r),F=this.getTileGridForProjection(o),w=this.getTileCoordForTileUrlFunction(d,o),h=new R(r,P,o,F,d,w,this.getTilePixelRatio(n),this.getGutter(),(b,E,y,x)=>this.getTileInternal(b,E,y,x,r),this.reprojectionErrorThreshold_,this.renderReprojectionEdges_,this.getInterpolate());return h.key=C,s?(h.interimTile=s,h.refreshInterimChain(),a.replace(u,h)):a.set(u,h),h}getTileInternal(e,t,i,n,o){let r=null;const a=L(e,t,i),d=this.getKey();if(!this.tileCache.containsKey(a))r=this.createTile_(e,t,i,n,o,d),this.tileCache.set(a,r);else if(r=this.tileCache.get(a),r.key!=d){const s=r;r=this.createTile_(e,t,i,n,o,d),s.getState()==_.IDLE?r.interimTile=s.interimTile:r.interimTile=s,r.refreshInterimChain(),this.tileCache.replace(a,r)}return r}setRenderReprojectionEdges(e){if(this.renderReprojectionEdges_!=e){this.renderReprojectionEdges_=e;for(const t in this.tileCacheForProjection)this.tileCacheForProjection[t].clear();this.changed()}}setTileGridForProjection(e,t){const i=S(e);if(i){const n=T(i);n in this.tileGridForProjection||(this.tileGridForProjection[n]=t)}}clear(){super.clear();for(const e in this.tileCacheForProjection)this.tileCacheForProjection[e].clear()}}function re(l,e){l.getImage().src=e}const oe=ie;class ne extends oe{constructor(e){e=e||{};const t=e.projection!==void 0?e.projection:"EPSG:3857",i=e.tileGrid!==void 0?e.tileGrid:Z({extent:M(t),maxResolution:e.maxResolution,maxZoom:e.maxZoom,minZoom:e.minZoom,tileSize:e.tileSize});super({attributions:e.attributions,cacheSize:e.cacheSize,crossOrigin:e.crossOrigin,interpolate:e.interpolate,opaque:e.opaque,projection:t,reprojectionErrorThreshold:e.reprojectionErrorThreshold,tileGrid:i,tileLoadFunction:e.tileLoadFunction,tilePixelRatio:e.tilePixelRatio,tileUrlFunction:e.tileUrlFunction,url:e.url,urls:e.urls,wrapX:e.wrapX!==void 0?e.wrapX:!0,transition:e.transition,attributionsCollapsible:e.attributionsCollapsible,zDirection:e.zDirection}),this.gutter_=e.gutter!==void 0?e.gutter:0}getGutter(){return this.gutter_}}const se=ne,ae='&#169; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors.';class ce extends se{constructor(e){e=e||{};let t;e.attributions!==void 0?t=e.attributions:t=[ae];const i=e.crossOrigin!==void 0?e.crossOrigin:"anonymous",n=e.url!==void 0?e.url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png";super({attributions:t,attributionsCollapsible:!1,cacheSize:e.cacheSize,crossOrigin:i,interpolate:e.interpolate,maxZoom:e.maxZoom!==void 0?e.maxZoom:19,opaque:e.opaque!==void 0?e.opaque:!0,reprojectionErrorThreshold:e.reprojectionErrorThreshold,tileLoadFunction:e.tileLoadFunction,transition:e.transition,url:n,wrapX:e.wrapX,zDirection:e.zDirection})}}const le=ce;class de extends U{constructor(e){e=e||{};const t=Object.assign({},e);delete t.preload,delete t.useInterimTilesOnError,super(t),this.on,this.once,this.un,this.setPreload(e.preload!==void 0?e.preload:0),this.setUseInterimTilesOnError(e.useInterimTilesOnError!==void 0?e.useInterimTilesOnError:!0)}getPreload(){return this.get(p.PRELOAD)}setPreload(e){this.set(p.PRELOAD,e)}getUseInterimTilesOnError(){return this.get(p.USE_INTERIM_TILES_ON_ERROR)}setUseInterimTilesOnError(e){this.set(p.USE_INTERIM_TILES_ON_ERROR,e)}getData(e){return super.getData(e)}}const ue=de;class he extends ue{constructor(e){super(e)}createRenderer(){return new D(this)}}const ge=he;const j=l=>($("data-v-6219f5f8"),l=l(),H(),l),me={id:"title"},fe=Y('<a class="skiplink" href="#map" data-v-6219f5f8>Go to map</a><div id="map" class="map" tabindex="0" data-v-6219f5f8></div><button id="zoom-out" data-v-6219f5f8>Zoom out</button><button id="zoom-in" data-v-6219f5f8>Zoom in</button><p data-v-6219f5f8>该页的map元素的tabindex属性设置为“0”，这使得它可以聚焦。要聚焦到该元素，您可以使用“tab”键导航到它，也可以点击跳转链接。当地图元素处于聚焦状态时，您可以使用键盘的+和-键来对地图进行放大和缩小，以及可以使用键盘方向键来平移地图。</p><p data-v-6219f5f8>点击地图下方的“放大”和“缩小”按钮可以放大和缩小地图。您可以使用“tab”键聚焦到按钮上，然后键盘按下回车“enter”键来触发缩放操作。</p><h5 class="source-heading" data-v-6219f5f8>html</h5>',7),pe={class:"language-html"},Te=j(()=>c("h5",{class:"source-heading"},"css",-1)),_e={class:"language-css"},je=j(()=>c("h5",{class:"source-heading"},"js",-1)),Ce={class:"language-js"},Pe=j(()=>c("h5",{class:"source-heading"},"package.json",-1)),Fe={class:"language-json"},we={__name:"index",setup(l){return q(()=>{const e=new K({layers:[new ge({source:new le})],target:"map",view:new V({center:[0,0],zoom:2})});document.getElementById("zoom-out").onclick=function(){const t=e.getView(),i=t.getZoom();t.setZoom(i-1)},document.getElementById("zoom-in").onclick=function(){const t=e.getView(),i=t.getZoom();t.setZoom(i+1)},Prism.highlightAll()}),(e,t)=>(B(),A(N,null,[c("h4",me,m(f(W)),1),fe,c("pre",null,[c("code",pe,m("  "+f(J).trim()),1)]),Te,c("pre",null,[c("code",_e,m("  "+f(Q).trim()),1)]),je,c("pre",null,[c("code",Ce,m("  "+f(ee).trim()),1)]),Pe,c("pre",null,[c("code",Fe,m("  "+f(te).trim()),1)])],64))}},ye=X(we,[["__scopeId","data-v-6219f5f8"]]);export{ye as default};
