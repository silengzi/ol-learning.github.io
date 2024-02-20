import{F as P,a as G,V as X}from"./Vector-844a0c6a.js";import{g as B,X as H,R as W,P as Y,a as N,M as q,a9 as Q,V as $,af as J}from"./Layer-da76b588.js";import{_ as K,i as Z,o as ee,c as te,b as p,t as T,g as E,F as re,p as ne,k as oe,d as O}from"./index-ceb9aa48.js";import{L as ie}from"./LineString-e19dc84a.js";import{T as se}from"./Tile-71d632e2.js";import{T as ae}from"./TileImage-66662d8b.js";import{T as le}from"./TileProperty-0f8ad975.js";import{g as V,r as L}from"./net-6888c94c.js";import"./featureloader-5ea9ad61.js";import"./Layer-5d5c7c57.js";import"./BaseTile-bf862043.js";import"./TileLayer-65677d1f.js";import"./UrlTile-ef3e4dbe.js";const ce={"image/png":!0,"image/jpeg":!0,"image/gif":!0,"image/webp":!0},ue={"application/vnd.mapbox-vector-tile":!0,"application/geo+json":!0};function pe(r,e){let i,n;for(let a=0;a<r.length;++a){const l=r[a];if(l.rel==="item"){if(l.type===e){i=l.href;break}(ce[l.type]||!n&&l.type.startsWith("image/"))&&(n=l.href)}}if(!i)if(n)i=n;else throw new Error('Could not find "item" link');return i}function de(r,e,i){let n,a;const l={};for(let u=0;u<r.length;++u){const o=r[u];if(l[o.type]=o.href,o.rel==="item"){if(o.type===e){n=o.href;break}ue[o.type]&&(a=o.href)}}if(!n&&i)for(let u=0;u<i.length;++u){const o=i[u];if(l[o]){n=l[o];break}}if(!n)if(a)n=a;else throw new Error('Could not find "item" link');return n}function R(r,e,i,n){let a=r.projection;if(!a&&(a=B(e.crs),!a))throw new Error(`Unsupported CRS: ${e.crs}`);const l=a.getAxisOrientation().substr(0,2)!=="en",u=e.tileMatrices,o={};for(let t=0;t<u.length;++t){const h=u[t];o[h.id]=h}const x={},s=[];if(n)for(let t=0;t<n.length;++t){const h=n[t],d=h.tileMatrix;s.push(d),x[d]=h}else for(let t=0;t<u.length;++t){const h=u[t].id;s.push(h)}const _=s.length,c=new Array(_),f=new Array(_),b=new Array(_),S=new Array(_),F=[-1/0,-1/0,1/0,1/0];for(let t=0;t<_;++t){const h=s[t],d=o[h],v=d.pointOfOrigin;l?c[t]=[v[1],v[0]]:c[t]=v,f[t]=d.cellSize,b[t]=[d.matrixWidth,d.matrixHeight],S[t]=[d.tileWidth,d.tileHeight];const m=x[h];if(m){const M=d.cellSize*d.tileWidth,w=c[t][0]+m.minTileCol*M,j=c[t][0]+(m.maxTileCol+1)*M,g=d.cellSize*d.tileHeight,k=d.cornerOfOrigin==="bottomLeft";let C,D;k?(C=c[t][1]+m.minTileRow*g,D=c[t][1]+(m.maxTileRow+1)*g):(C=c[t][1]-(m.maxTileRow+1)*g,D=c[t][1]-m.minTileRow*g),H(F,[w,C,j,D],F)}}const U=new le({origins:c,resolutions:f,sizes:b,tileSizes:S,extent:n?F:void 0}),z=r.context,I=r.url;function A(t,h,d){if(!t)return;const v=s[t[0]],m=o[v],M=m.cornerOfOrigin==="bottomLeft",w={tileMatrix:v,tileCol:t[1],tileRow:M?-t[2]-1:t[2]};if(n){const g=x[m.id];if(w.tileCol<g.minTileCol||w.tileCol>g.maxTileCol||w.tileRow<g.minTileRow||w.tileRow>g.maxTileRow)return}Object.assign(w,z);const j=i.replace(/\{(\w+?)\}/g,function(g,k){return w[k]});return L(I,j)}return{grid:U,urlTemplate:i,urlFunction:A}}function he(r,e){const i=e.tileMatrixSetLimits;let n;if(e.dataType==="map")n=pe(e.links,r.mediaType);else if(e.dataType==="vector")n=de(e.links,r.mediaType,r.supportedMediaTypes);else throw new Error('Expected tileset data type to be "map" or "vector"');if(e.tileMatrixSet)return R(r,e.tileMatrixSet,n,i);const a=e.links.find(o=>o.rel==="http://www.opengis.net/def/rel/ogc/1.0/tiling-scheme");if(!a)throw new Error("Expected http://www.opengis.net/def/rel/ogc/1.0/tiling-scheme link or tileMatrixSet");const l=a.href,u=L(r.url,l);return V(u).then(function(o){return R(r,o,n,i)})}function fe(r){return V(r.url).then(function(e){return he(r,e)})}class me extends ae{constructor(e){super({attributions:e.attributions,cacheSize:e.cacheSize,crossOrigin:e.crossOrigin,interpolate:e.interpolate,projection:e.projection,reprojectionErrorThreshold:e.reprojectionErrorThreshold,state:"loading",tileLoadFunction:e.tileLoadFunction,wrapX:e.wrapX!==void 0?e.wrapX:!0,transition:e.transition});const i={url:e.url,projection:this.getProjection(),mediaType:e.mediaType,context:e.context||null};fe(i).then(this.handleTileSetInfo_.bind(this)).catch(this.handleError_.bind(this))}handleTileSetInfo_(e){this.tileGrid=e.grid,this.setTileUrlFunction(e.urlFunction,e.urlTemplate),this.setState("ready")}handleError_(e){W(e),this.setState("error")}}const ge=me,_e="Custom Interactions",we=`
  <div id="map" class="map"></div>
`,ve=`
  .map {
    width: 100%;
    height: 400px;
  }
`,ye=`
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
`,xe=`
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
`;const y=r=>(ne("data-v-4d0d0fb7"),r=r(),oe(),r),Te={id:"title"},Ee=y(()=>p("div",{id:"map",class:"map"},null,-1)),be=y(()=>p("p",null,[O("This example demonstrates creating a custom interaction by subclassing ol/interaction/Pointer. Note that the built in interaction "),p("code",null,"ol/interaction/Translate"),O(" might be a better option for moving features.")],-1)),Me=y(()=>p("h5",{class:"source-heading"},"html",-1)),Fe={class:"language-html"},je=y(()=>p("h5",{class:"source-heading"},"css",-1)),ke={class:"language-css"},Ce=y(()=>p("h5",{class:"source-heading"},"js",-1)),De={class:"language-js"},Pe=y(()=>p("h5",{class:"source-heading"},"package.json",-1)),Se={class:"language-json"},Oe={__name:"index",setup(r){return Z(()=>{class e extends J{constructor(){super({handleDownEvent:i,handleDragEvent:n,handleMoveEvent:a,handleUpEvent:l}),this.coordinate_=null,this.cursor_="pointer",this.feature_=null,this.previousCursor_=void 0}}function i(s){const c=s.map.forEachFeatureAtPixel(s.pixel,function(f){return f});return c&&(this.coordinate_=s.coordinate,this.feature_=c),!!c}function n(s){const _=s.coordinate[0]-this.coordinate_[0],c=s.coordinate[1]-this.coordinate_[1];this.feature_.getGeometry().translate(_,c),this.coordinate_[0]=s.coordinate[0],this.coordinate_[1]=s.coordinate[1]}function a(s){if(this.cursor_){const c=s.map.forEachFeatureAtPixel(s.pixel,function(b){return b}),f=s.map.getTargetElement();c?f.style.cursor!=this.cursor_&&(this.previousCursor_=f.style.cursor,f.style.cursor=this.cursor_):this.previousCursor_!==void 0&&(f.style.cursor=this.previousCursor_,this.previousCursor_=void 0)}}function l(){return this.coordinate_=null,this.feature_=null,!1}const u=new P(new Y([0,0])),o=new P(new ie([[-1e7,1e6],[-1e6,3e6]])),x=new P(new N([[[-3e6,-1e6],[-3e6,1e6],[-1e6,1e6],[-1e6,-1e6],[-3e6,-1e6]]]));new q({interactions:Q().extend([new e]),layers:[new se({source:new ge({url:"https://maps.gnosis.earth/ogcapi/collections/NaturalEarth:raster:HYP_HR_SR_OB_DR/map/tiles/WebMercatorQuad",crossOrigin:""})}),new G({source:new X({features:[u,o,x]}),style:{"icon-src":"https://openlayers.org/en/latest/examples/data/icon.png","icon-opacity":.95,"icon-anchor":[.5,46],"icon-anchor-x-units":"fraction","icon-anchor-y-units":"pixels","stroke-width":3,"stroke-color":[255,0,0,1],"fill-color":[0,0,255,.6]}})],target:"map",view:new $({center:[0,0],zoom:2})}),Prism.highlightAll()}),(e,i)=>(ee(),te(re,null,[p("h4",Te,T(E(_e)),1),Ee,be,Me,p("pre",null,[p("code",Fe,T("  "+E(we).trim()),1)]),je,p("pre",null,[p("code",ke,T("  "+E(ve).trim()),1)]),Ce,p("pre",null,[p("code",De,T("  "+E(ye).trim()),1)]),Pe,p("pre",null,[p("code",Se,T("  "+E(xe).trim()),1)])],64))}},Ne=K(Oe,[["__scopeId","data-v-4d0d0fb7"]]);export{Ne as default};
