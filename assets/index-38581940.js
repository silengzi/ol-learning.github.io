import{F as S,a as G,V as H}from"./Vector-50ee026e.js";import{g as X,U as B,a2 as N,P as W,a as Y,M as q,aQ as J,V as Q,bo as $}from"./Layer-668612ec.js";import{_ as K,i as Z,o as ee,c as te,b as p,t as E,g as T,F as re,p as ne,k as oe,d as O}from"./index-b74f03bf.js";import{L as ie}from"./LineString-4f7da608.js";import{T as se}from"./Tile-769b675a.js";import{T as ae}from"./TileImage-e3961663.js";import{T as ce}from"./TileProperty-0d2bd5df.js";import"./featureloader-f9c16155.js";import"./Layer-5b8d80c5.js";import"./BaseTile-a766243d.js";import"./TileLayer-d843ebf1.js";import"./UrlTile-bc3de61e.js";class le extends Error{constructor(e){const i="Unexpected response status: "+e.status;super(i),this.name="ResponseError",this.response=e}}class ue extends Error{constructor(e){super("Failed to issue request"),this.name="ClientError",this.client=e}}function D(r){return new Promise(function(e,i){function n(c){const o=c.target;if(!o.status||o.status>=200&&o.status<300){let w;try{w=JSON.parse(o.responseText)}catch(a){const h="Error parsing response text as JSON: "+a.message;i(new Error(h));return}e(w);return}i(new le(o))}function l(c){i(new ue(c.target))}const s=new XMLHttpRequest;s.addEventListener("load",n),s.addEventListener("error",l),s.open("GET",r),s.setRequestHeader("Accept","application/json"),s.send()})}function U(r,e){return e.includes("://")?e:new URL(e,r).href}const pe={"image/png":!0,"image/jpeg":!0,"image/gif":!0,"image/webp":!0},de={"application/vnd.mapbox-vector-tile":!0,"application/geo+json":!0};function he(r,e){let i,n;for(let l=0;l<r.length;++l){const s=r[l];if(s.rel==="item"){if(s.type===e){i=s.href;break}(pe[s.type]||!n&&s.type.startsWith("image/"))&&(n=s.href)}}if(!i)if(n)i=n;else throw new Error('Could not find "item" link');return i}function fe(r,e,i){let n,l;const s={};for(let c=0;c<r.length;++c){const o=r[c];if(s[o.type]=o.href,o.rel==="item"){if(o.type===e){n=o.href;break}de[o.type]&&(l=o.href)}}if(!n&&i)for(let c=0;c<i.length;++c){const o=i[c];if(s[o]){n=s[o];break}}if(!n)if(l)n=l;else throw new Error('Could not find "item" link');return n}function P(r,e,i,n){let l=r.projection;if(!l&&(l=X(e.crs),!l))throw new Error(`Unsupported CRS: ${e.crs}`);const s=l.getAxisOrientation().substr(0,2)!=="en",c=e.tileMatrices,o={};for(let t=0;t<c.length;++t){const f=c[t];o[f.id]=f}const w={},a=[];if(n)for(let t=0;t<n.length;++t){const f=n[t],d=f.tileMatrix;a.push(d),w[d]=f}else for(let t=0;t<c.length;++t){const f=c[t].id;a.push(f)}const h=a.length,u=new Array(h),m=new Array(h),b=new Array(h),L=new Array(h),F=[-1/0,-1/0,1/0,1/0];for(let t=0;t<h;++t){const f=a[t],d=o[f],y=d.pointOfOrigin;s?u[t]=[y[1],y[0]]:u[t]=y,m[t]=d.cellSize,b[t]=[d.matrixWidth,d.matrixHeight],L[t]=[d.tileWidth,d.tileHeight];const g=w[f];if(g){const M=d.cellSize*d.tileWidth,v=u[t][0]+g.minTileCol*M,j=u[t][0]+(g.maxTileCol+1)*M,_=d.cellSize*d.tileHeight,k=d.cornerOfOrigin==="bottomLeft";let C,R;k?(C=u[t][1]+g.minTileRow*_,R=u[t][1]+(g.maxTileRow+1)*_):(C=u[t][1]-(g.maxTileRow+1)*_,R=u[t][1]-g.minTileRow*_),B(F,[v,C,j,R],F)}}const V=new ce({origins:u,resolutions:m,sizes:b,tileSizes:L,extent:n?F:void 0}),z=r.context,A=r.url;function I(t,f,d){if(!t)return;const y=a[t[0]],g=o[y],M=g.cornerOfOrigin==="bottomLeft",v={tileMatrix:y,tileCol:t[1],tileRow:M?-t[2]-1:t[2]};if(n){const _=w[g.id];if(v.tileCol<_.minTileCol||v.tileCol>_.maxTileCol||v.tileRow<_.minTileRow||v.tileRow>_.maxTileRow)return}Object.assign(v,z);const j=i.replace(/\{(\w+?)\}/g,function(_,k){return v[k]});return U(A,j)}return{grid:V,urlTemplate:i,urlFunction:I}}function me(r,e){const i=e.tileMatrixSetLimits;let n;if(e.dataType==="map")n=he(e.links,r.mediaType);else if(e.dataType==="vector")n=fe(e.links,r.mediaType,r.supportedMediaTypes);else throw new Error('Expected tileset data type to be "map" or "vector"');if(e.tileMatrixSet)return P(r,e.tileMatrixSet,n,i);const l=e.links.find(o=>o.rel==="http://www.opengis.net/def/rel/ogc/1.0/tiling-scheme");if(!l)throw new Error("Expected http://www.opengis.net/def/rel/ogc/1.0/tiling-scheme link or tileMatrixSet");const s=l.href,c=U(r.url,s);return D(c).then(function(o){return P(r,o,n,i)})}function ge(r){return D(r.url).then(function(e){return me(r,e)})}class _e extends ae{constructor(e){super({attributions:e.attributions,cacheSize:e.cacheSize,crossOrigin:e.crossOrigin,interpolate:e.interpolate,projection:e.projection,reprojectionErrorThreshold:e.reprojectionErrorThreshold,state:"loading",tileLoadFunction:e.tileLoadFunction,wrapX:e.wrapX!==void 0?e.wrapX:!0,transition:e.transition});const i={url:e.url,projection:this.getProjection(),mediaType:e.mediaType,context:e.context||null};ge(i).then(this.handleTileSetInfo_.bind(this)).catch(this.handleError_.bind(this))}handleTileSetInfo_(e){this.tileGrid=e.grid,this.setTileUrlFunction(e.urlFunction,e.urlTemplate),this.setState("ready")}handleError_(e){N(e),this.setState("error")}}const we=_e,ve="Custom Interactions",ye=`
  <div id="map" class="map"></div>
`,xe=`
  .map {
    width: 100%;
    height: 400px;
  }
`,Ee=`
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
`;const x=r=>(ne("data-v-4d0d0fb7"),r=r(),oe(),r),be={id:"title"},Me=x(()=>p("div",{id:"map",class:"map"},null,-1)),Fe=x(()=>p("p",null,[O("This example demonstrates creating a custom interaction by subclassing ol/interaction/Pointer. Note that the built in interaction "),p("code",null,"ol/interaction/Translate"),O(" might be a better option for moving features.")],-1)),je=x(()=>p("h5",{class:"source-heading"},"html",-1)),ke={class:"language-html"},Ce=x(()=>p("h5",{class:"source-heading"},"css",-1)),Re={class:"language-css"},Se=x(()=>p("h5",{class:"source-heading"},"js",-1)),Le={class:"language-js"},Oe=x(()=>p("h5",{class:"source-heading"},"package.json",-1)),Pe={class:"language-json"},De={__name:"index",setup(r){return Z(()=>{class e extends ${constructor(){super({handleDownEvent:i,handleDragEvent:n,handleMoveEvent:l,handleUpEvent:s}),this.coordinate_=null,this.cursor_="pointer",this.feature_=null,this.previousCursor_=void 0}}function i(a){const u=a.map.forEachFeatureAtPixel(a.pixel,function(m){return m});return u&&(this.coordinate_=a.coordinate,this.feature_=u),!!u}function n(a){const h=a.coordinate[0]-this.coordinate_[0],u=a.coordinate[1]-this.coordinate_[1];this.feature_.getGeometry().translate(h,u),this.coordinate_[0]=a.coordinate[0],this.coordinate_[1]=a.coordinate[1]}function l(a){if(this.cursor_){const u=a.map.forEachFeatureAtPixel(a.pixel,function(b){return b}),m=a.map.getTargetElement();u?m.style.cursor!=this.cursor_&&(this.previousCursor_=m.style.cursor,m.style.cursor=this.cursor_):this.previousCursor_!==void 0&&(m.style.cursor=this.previousCursor_,this.previousCursor_=void 0)}}function s(){return this.coordinate_=null,this.feature_=null,!1}const c=new S(new W([0,0])),o=new S(new ie([[-1e7,1e6],[-1e6,3e6]])),w=new S(new Y([[[-3e6,-1e6],[-3e6,1e6],[-1e6,1e6],[-1e6,-1e6],[-3e6,-1e6]]]));new q({interactions:J().extend([new e]),layers:[new se({source:new we({url:"https://maps.gnosis.earth/ogcapi/collections/NaturalEarth:raster:HYP_HR_SR_OB_DR/map/tiles/WebMercatorQuad",crossOrigin:""})}),new G({source:new H({features:[c,o,w]}),style:{"icon-src":"https://openlayers.org/en/latest/examples/data/icon.png","icon-opacity":.95,"icon-anchor":[.5,46],"icon-anchor-x-units":"fraction","icon-anchor-y-units":"pixels","stroke-width":3,"stroke-color":[255,0,0,1],"fill-color":[0,0,255,.6]}})],target:"map",view:new Q({center:[0,0],zoom:2})}),Prism.highlightAll()}),(e,i)=>(ee(),te(re,null,[p("h4",be,E(T(ve)),1),Me,Fe,je,p("pre",null,[p("code",ke,E("  "+T(ye).trim()),1)]),Ce,p("pre",null,[p("code",Re,E("  "+T(xe).trim()),1)]),Se,p("pre",null,[p("code",Le,E("  "+T(Ee).trim()),1)]),Oe,p("pre",null,[p("code",Pe,E("  "+T(Te).trim()),1)])],64))}},qe=K(De,[["__scopeId","data-v-4d0d0fb7"]]);export{qe as default};
