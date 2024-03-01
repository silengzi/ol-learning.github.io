import{F as P}from"./featureloader-a90a5108.js";import{g as X,w as B,r as H,P as W,U as Y,M as N,R as q,V as Q,W as $}from"./Layer-3b715193.js";import{_ as J,i as K,o as Z,c as ee,b as u,t as T,g as E,F as te,p as re,k as ne,d as L}from"./index-92068577.js";import{L as oe}from"./LineString-eed53b5a.js";import{T as ie}from"./Tile-70490af9.js";import{T as se}from"./TileImage-1df58d67.js";import{T as ae}from"./TileProperty-e33ea24b.js";import{g as S,r as U}from"./net-fa57392a.js";import{V as le}from"./Vector-6fff18f8.js";import{V as ce}from"./Vector-a4e726e1.js";import"./length-c6ba5b73.js";import"./BaseTile-8ab94efc.js";import"./TileLayer-7c629c64.js";import"./Layer-37ea9c2e.js";import"./UrlTile-dc2c26ed.js";import"./VectorLayer-ef6da1be.js";import"./hitdetect-486e5612.js";import"./vector-4e067f94.js";const ue={"image/png":!0,"image/jpeg":!0,"image/gif":!0,"image/webp":!0},pe={"application/vnd.mapbox-vector-tile":!0,"application/geo+json":!0};function de(r,e){let i,n;for(let a=0;a<r.length;++a){const s=r[a];if(s.rel==="item"){if(s.type===e){i=s.href;break}(ue[s.type]||!n&&s.type.startsWith("image/"))&&(n=s.href)}}if(!i)if(n)i=n;else throw new Error('Could not find "item" link');return i}function he(r,e,i){let n,a;const s={};for(let d=0;d<r.length;++d){const o=r[d];if(s[o.type]=o.href,o.rel==="item"){if(o.type===e){n=o.href;break}pe[o.type]&&(a=o.href)}}if(!n&&i)for(let d=0;d<i.length;++d){const o=i[d];if(s[o]){n=s[o];break}}if(!n)if(a)n=a;else throw new Error('Could not find "item" link');return n}function R(r,e,i,n){let a=r.projection;if(!a&&(a=X(e.crs),!a))throw new Error(`Unsupported CRS: ${e.crs}`);const s=e.orderedAxes,d=(s?s.slice(0,2).map(t=>t.replace(/E|X|Lon/i,"e").replace(/N|Y|Lat/i,"n")).join(""):a.getAxisOrientation().substr(0,2))!=="en",o=e.tileMatrices,x={};for(let t=0;t<o.length;++t){const m=o[t];x[m.id]=m}const l={},_=[];if(n)for(let t=0;t<n.length;++t){const m=n[t],p=m.tileMatrix;_.push(p),l[p]=m}else for(let t=0;t<o.length;++t){const m=o[t].id;_.push(m)}const h=_.length,c=new Array(h),b=new Array(h),O=new Array(h),V=new Array(h),j=[-1/0,-1/0,1/0,1/0];for(let t=0;t<h;++t){const m=_[t],p=x[m],v=p.pointOfOrigin;d?c[t]=[v[1],v[0]]:c[t]=v,b[t]=p.cellSize,O[t]=[p.matrixWidth,p.matrixHeight],V[t]=[p.tileWidth,p.tileHeight];const f=l[m];if(f){const M=p.cellSize*p.tileWidth,w=c[t][0]+f.minTileCol*M,F=c[t][0]+(f.maxTileCol+1)*M,g=p.cellSize*p.tileHeight,k=p.cornerOfOrigin==="bottomLeft";let C,D;k?(C=c[t][1]+f.minTileRow*g,D=c[t][1]+(f.maxTileRow+1)*g):(C=c[t][1]-(f.maxTileRow+1)*g,D=c[t][1]-f.minTileRow*g),B(j,[w,C,F,D],j)}}const A=new ae({origins:c,resolutions:b,sizes:O,tileSizes:V,extent:n?j:void 0}),z=r.context,I=r.url;function G(t,m,p){if(!t)return;const v=_[t[0]],f=x[v],M=f.cornerOfOrigin==="bottomLeft",w={tileMatrix:v,tileCol:t[1],tileRow:M?-t[2]-1:t[2]};if(n){const g=l[f.id];if(w.tileCol<g.minTileCol||w.tileCol>g.maxTileCol||w.tileRow<g.minTileRow||w.tileRow>g.maxTileRow)return}Object.assign(w,z);const F=i.replace(/\{(\w+?)\}/g,function(g,k){return w[k]});return U(I,F)}return{grid:A,urlTemplate:i,urlFunction:G}}function me(r,e){const i=e.tileMatrixSetLimits;let n;if(e.dataType==="map")n=de(e.links,r.mediaType);else if(e.dataType==="vector")n=he(e.links,r.mediaType,r.supportedMediaTypes);else throw new Error('Expected tileset data type to be "map" or "vector"');if(e.tileMatrixSet)return R(r,e.tileMatrixSet,n,i);const a=e.links.find(o=>o.rel==="http://www.opengis.net/def/rel/ogc/1.0/tiling-scheme");if(!a)throw new Error("Expected http://www.opengis.net/def/rel/ogc/1.0/tiling-scheme link or tileMatrixSet");const s=a.href,d=U(r.url,s);return S(d).then(function(o){return R(r,o,n,i)})}function fe(r){return S(r.url).then(function(e){return me(r,e)})}class ge extends se{constructor(e){super({attributions:e.attributions,cacheSize:e.cacheSize,crossOrigin:e.crossOrigin,interpolate:e.interpolate,projection:e.projection,reprojectionErrorThreshold:e.reprojectionErrorThreshold,state:"loading",tileLoadFunction:e.tileLoadFunction,wrapX:e.wrapX!==void 0?e.wrapX:!0,transition:e.transition});const i={url:e.url,projection:this.getProjection(),mediaType:e.mediaType,context:e.context||null};fe(i).then(this.handleTileSetInfo_.bind(this)).catch(this.handleError_.bind(this))}handleTileSetInfo_(e){this.tileGrid=e.grid,this.setTileUrlFunction(e.urlFunction,e.urlTemplate),this.setState("ready")}handleError_(e){H(e),this.setState("error")}}const _e=ge,we="Custom Interactions",ve=`
  <div id="map" class="map"></div>
`,ye=`
  .map {
    width: 100%;
    height: 400px;
  }
`,xe=`
  import Feature from 'ol/Feature.js';
  import Map from 'ol/Map.js';
  import View from 'ol/View.js';
  import {LineString, Point, Polygon} from 'ol/geom.js';
  import {OGCMapTile, Vector as VectorSource} from 'ol/source.js';
  import {
    Pointer as PointerInteraction,
    defaults as defaultInteractions,
  } from 'ol/interaction.js';
  import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';

  class Drag extends PointerInteraction {
    constructor() {
      super({
        handleDownEvent: handleDownEvent,
        handleDragEvent: handleDragEvent,
        handleMoveEvent: handleMoveEvent,
        handleUpEvent: handleUpEvent,
      });

      /**
       * @type {import("../src/ol/coordinate.js").Coordinate}
       * @private
       */
      this.coordinate_ = null;

      /**
       * @type {string|undefined}
       * @private
       */
      this.cursor_ = 'pointer';

      /**
       * @type {Feature}
       * @private
       */
      this.feature_ = null;

      /**
       * @type {string|undefined}
       * @private
       */
      this.previousCursor_ = undefined;
    }
  }

  /**
   * @param {import("../src/ol/MapBrowserEvent.js").default} evt Map browser event.
   * @return {boolean} \`true\` to start the drag sequence.
   */
  function handleDownEvent(evt) {
    const map = evt.map;

    const feature = map.forEachFeatureAtPixel(evt.pixel, function (feature) {
      return feature;
    });

    if (feature) {
      this.coordinate_ = evt.coordinate;
      this.feature_ = feature;
    }

    return !!feature;
  }

  /**
   * @param {import("../src/ol/MapBrowserEvent.js").default} evt Map browser event.
   */
  function handleDragEvent(evt) {
    const deltaX = evt.coordinate[0] - this.coordinate_[0];
    const deltaY = evt.coordinate[1] - this.coordinate_[1];

    const geometry = this.feature_.getGeometry();
    geometry.translate(deltaX, deltaY);

    this.coordinate_[0] = evt.coordinate[0];
    this.coordinate_[1] = evt.coordinate[1];
  }

  /**
   * @param {import("../src/ol/MapBrowserEvent.js").default} evt Event.
   */
  function handleMoveEvent(evt) {
    if (this.cursor_) {
      const map = evt.map;
      const feature = map.forEachFeatureAtPixel(evt.pixel, function (feature) {
        return feature;
      });
      const element = evt.map.getTargetElement();
      if (feature) {
        if (element.style.cursor != this.cursor_) {
          this.previousCursor_ = element.style.cursor;
          element.style.cursor = this.cursor_;
        }
      } else if (this.previousCursor_ !== undefined) {
        element.style.cursor = this.previousCursor_;
        this.previousCursor_ = undefined;
      }
    }
  }

  /**
   * @return {boolean} \`false\` to stop the drag sequence.
   */
  function handleUpEvent() {
    this.coordinate_ = null;
    this.feature_ = null;
    return false;
  }

  const pointFeature = new Feature(new Point([0, 0]));

  const lineFeature = new Feature(
    new LineString([
      [-1e7, 1e6],
      [-1e6, 3e6],
    ])
  );

  const polygonFeature = new Feature(
    new Polygon([
      [
        [-3e6, -1e6],
        [-3e6, 1e6],
        [-1e6, 1e6],
        [-1e6, -1e6],
        [-3e6, -1e6],
      ],
    ])
  );

  const map = new Map({
    interactions: defaultInteractions().extend([new Drag()]),
    layers: [
      new TileLayer({
        source: new OGCMapTile({
          url: 'https://maps.gnosis.earth/ogcapi/collections/NaturalEarth:raster:HYP_HR_SR_OB_DR/map/tiles/WebMercatorQuad',
          crossOrigin: '',
        }),
      }),
      new VectorLayer({
        source: new VectorSource({
          features: [pointFeature, lineFeature, polygonFeature],
        }),
        style: {
          'icon-src': 'data/icon.png',
          'icon-opacity': 0.95,
          'icon-anchor': [0.5, 46],
          'icon-anchor-x-units': 'fraction',
          'icon-anchor-y-units': 'pixels',
          'stroke-width': 3,
          'stroke-color': [255, 0, 0, 1],
          'fill-color': [0, 0, 255, 0.6],
        },
      }),
    ],
    target: 'map',
    view: new View({
      center: [0, 0],
      zoom: 2,
    }),
  });
`,Te=`
  {
    "name": "custom-interactions",
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
`;const y=r=>(re("data-v-d7d525cb"),r=r(),ne(),r),Ee={id:"title"},be=y(()=>u("div",{id:"map",class:"map"},null,-1)),Me=y(()=>u("p",null,[L("This example demonstrates creating a custom interaction by subclassing ol/interaction/Pointer. Note that the built in interaction "),u("code",null,"ol/interaction/Translate"),L(" might be a better option for moving features.")],-1)),je=y(()=>u("h5",{class:"source-heading"},"html",-1)),Fe={class:"language-html"},ke=y(()=>u("h5",{class:"source-heading"},"css",-1)),Ce={class:"language-css"},De=y(()=>u("h5",{class:"source-heading"},"js",-1)),Pe={class:"language-js"},Oe=y(()=>u("h5",{class:"source-heading"},"package.json",-1)),Ve={class:"language-json"},Le={__name:"index",setup(r){return K(()=>{class e extends ${constructor(){super({handleDownEvent:i,handleDragEvent:n,handleMoveEvent:a,handleUpEvent:s}),this.coordinate_=null,this.cursor_="pointer",this.feature_=null,this.previousCursor_=void 0}}function i(l){const h=l.map.forEachFeatureAtPixel(l.pixel,function(c){return c});return h&&(this.coordinate_=l.coordinate,this.feature_=h),!!h}function n(l){const _=l.coordinate[0]-this.coordinate_[0],h=l.coordinate[1]-this.coordinate_[1];this.feature_.getGeometry().translate(_,h),this.coordinate_[0]=l.coordinate[0],this.coordinate_[1]=l.coordinate[1]}function a(l){if(this.cursor_){const h=l.map.forEachFeatureAtPixel(l.pixel,function(b){return b}),c=l.map.getTargetElement();h?c.style.cursor!=this.cursor_&&(this.previousCursor_=c.style.cursor,c.style.cursor=this.cursor_):this.previousCursor_!==void 0&&(c.style.cursor=this.previousCursor_,this.previousCursor_=void 0)}}function s(){return this.coordinate_=null,this.feature_=null,!1}const d=new P(new W([0,0])),o=new P(new oe([[-1e7,1e6],[-1e6,3e6]])),x=new P(new Y([[[-3e6,-1e6],[-3e6,1e6],[-1e6,1e6],[-1e6,-1e6],[-3e6,-1e6]]]));new N({interactions:q().extend([new e]),layers:[new ie({source:new _e({url:"https://maps.gnosis.earth/ogcapi/collections/NaturalEarth:raster:HYP_HR_SR_OB_DR/map/tiles/WebMercatorQuad",crossOrigin:""})}),new le({source:new ce({features:[d,o,x]}),style:{"icon-src":"https://openlayers.org/en/latest/examples/data/icon.png","icon-opacity":.95,"icon-anchor":[.5,46],"icon-anchor-x-units":"fraction","icon-anchor-y-units":"pixels","stroke-width":3,"stroke-color":[255,0,0,1],"fill-color":[0,0,255,.6]}})],target:"map",view:new Q({center:[0,0],zoom:2})}),Prism.highlightAll()}),(e,i)=>(Z(),ee(te,null,[u("h4",Ee,T(E(we)),1),be,Me,je,u("pre",null,[u("code",Fe,T("  "+E(ve).trim()),1)]),ke,u("pre",null,[u("code",Ce,T("  "+E(ye).trim()),1)]),De,u("pre",null,[u("code",Pe,T("  "+E(xe).trim()),1)]),Oe,u("pre",null,[u("code",Ve,T("  "+E(Te).trim()),1)])],64))}},Ze=J(Le,[["__scopeId","data-v-d7d525cb"]]);export{Ze as default};
