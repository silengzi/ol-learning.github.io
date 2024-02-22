import{aO as T,a7 as w,cx as V,t as C,a9 as E,aZ as x,cb as b,W as L,b5 as S,ac as A,M as D,a2 as P,V as F}from"./Layer-763025a3.js";import{_ as j,i as G,o as M,c as k,b as r,t as u,g,F as O,p as N,k as B}from"./index-87bb3bb9.js";import{D as H,G as J,I as X,K as z,T as Z}from"./TopoJSON-51caf471.js";import{G as K}from"./GeoJSON-f4e7d713.js";import{T as Y}from"./Tile-3c7ba04a.js";import{X as $}from"./XYZ-191849cc.js";import{C as W,V as U}from"./VectorLayer-5fefefe7.js";import{R as q,B as Q}from"./featureloader-7313d5e8.js";import{C as ee,I as te,f as oe}from"./ImageLayer-5fb84f58.js";import"./LineString-a90d5a4b.js";import"./MultiPolygon-5da1c9b7.js";import"./MultiPoint-32d892b1.js";import"./Feature-5468377f.js";import"./vector-31d95deb.js";import"./GeometryCollection-7f871795.js";import"./string-30bf5402.js";import"./JSONFeature-7195c808.js";import"./BaseTile-115b346f.js";import"./TileProperty-b49a7745.js";import"./TileLayer-fd6dc420.js";import"./Layer-79bf392c.js";import"./TileImage-d65ff5bd.js";import"./UrlTile-ce5b3cbe.js";class re extends ee{constructor(e){super(e),this.vectorRenderer_=new W(e),this.layerImageRatio_=e.getImageRatio(),this.coordinateToVectorPixelTransform_=T(),this.renderedPixelToCoordinateTransform_=null}disposeInternal(){this.vectorRenderer_.dispose(),super.disposeInternal()}getFeatures(e){if(!this.vectorRenderer_)return Promise.resolve([]);const n=w(this.coordinateToVectorPixelTransform_,w(this.renderedPixelToCoordinateTransform_,e.slice()));return this.vectorRenderer_.getFeatures(n)}handleFontsChanged(){this.vectorRenderer_.handleFontsChanged()}prepareFrame(e){const n=e.pixelRatio,i=e.viewState,a=i.resolution,s=e.viewHints,o=this.vectorRenderer_;let t=e.extent;this.layerImageRatio_!==1&&(t=t.slice(0),V(t,this.layerImageRatio_));const c=C(t)/a,l=E(t)/a;if(!s[x.ANIMATING]&&!s[x.INTERACTING]&&!b(t)){o.useContainer(null,null);const f=o.context,I=e.layerStatesArray[e.layerIndex],R=Object.assign({},I,{opacity:1}),h=Object.assign({},e,{declutterTree:new q(9),extent:t,size:[c,l],viewState:Object.assign({},e.viewState,{rotation:0}),layerStatesArray:[R],layerIndex:0});let v=!0;const m=new te(t,a,n,f.canvas,function(_){o.prepareFrame(h)&&o.replayGroupChanged&&(o.clipping=!1,o.renderFrame(h,null)&&(o.renderDeclutter(h),v=!1),_())});m.addEventListener(L.CHANGE,()=>{if(m.getState()!==S.LOADED)return;this.image_=v?null:m;const _=m.getPixelRatio(),y=oe(m.getResolution())*n/_;this.renderedResolution=y,this.coordinateToVectorPixelTransform_=A(this.coordinateToVectorPixelTransform_,c/2,l/2,1/y,-1/y,0,-i.center[0],-i.center[1])}),m.load()}return this.image_&&(this.renderedPixelToCoordinateTransform_=e.pixelToCoordinateTransform.slice()),!!this.image_}preRender(){}postRender(){}renderDeclutter(){}forEachFeatureAtCoordinate(e,n,i,a,s){return this.vectorRenderer_?this.vectorRenderer_.forEachFeatureAtCoordinate(e,n,i,a,s):super.forEachFeatureAtCoordinate(e,n,i,a,s)}}const ne=re;class ae extends Q{constructor(e){e=e||{};const n=Object.assign({},e);delete n.imageRatio,super(n),this.imageRatio_=e.imageRatio!==void 0?e.imageRatio:1}getImageRatio(){return this.imageRatio_}createRenderer(){return new ne(this)}}const ie=ae,se="Drag-and-Drop Image Vector",ce=`
  <div id="map" class="map"></div>
  <div id="info">&nbsp;</div>
`,le=`
  .map {
    width: 100%;
    height: 400px;
  }
`,pe=`
  import Map from 'ol/Map.js';
  import View from 'ol/View.js';
  import {
    DragAndDrop,
    defaults as defaultInteractions,
  } from 'ol/interaction.js';
  import {GPX, GeoJSON, IGC, KML, TopoJSON} from 'ol/format.js';
  import {
    Tile as TileLayer,
    VectorImage as VectorImageLayer,
  } from 'ol/layer.js';
  import {Vector as VectorSource, XYZ} from 'ol/source.js';

  const dragAndDropInteraction = new DragAndDrop({
    formatConstructors: [GPX, GeoJSON, IGC, KML, TopoJSON],
  });

  const key = 'Get your own API key at https://www.maptiler.com/cloud/';
  const attributions =
    '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> ' +
    '<a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>';

  const map = new Map({
    interactions: defaultInteractions().extend([dragAndDropInteraction]),
    layers: [
      new TileLayer({
        source: new XYZ({
          attributions: attributions,
          url:
            'https://api.maptiler.com/tiles/satellite/{z}/{x}/{y}.jpg?key=' + key,
          maxZoom: 20,
        }),
      }),
    ],
    target: 'map',
    view: new View({
      center: [0, 0],
      zoom: 2,
    }),
  });

  dragAndDropInteraction.on('addfeatures', function (event) {
    const vectorSource = new VectorSource({
      features: event.features,
    });
    map.addLayer(
      new VectorImageLayer({
        source: vectorSource,
      })
    );
    map.getView().fit(vectorSource.getExtent());
  });

  const displayFeatureInfo = function (pixel) {
    const features = [];
    map.forEachFeatureAtPixel(pixel, function (feature) {
      features.push(feature);
    });
    if (features.length > 0) {
      const info = [];
      let i, ii;
      for (i = 0, ii = features.length; i < ii; ++i) {
        info.push(features[i].get('name'));
      }
      document.getElementById('info').innerHTML = info.join(', ') || '&nbsp';
    } else {
      document.getElementById('info').innerHTML = '&nbsp;';
    }
  };

  map.on('pointermove', function (evt) {
    if (evt.dragging) {
      return;
    }
    const pixel = map.getEventPixel(evt.originalEvent);
    displayFeatureInfo(pixel);
  });

  map.on('click', function (evt) {
    displayFeatureInfo(evt.pixel);
  });
`,de=`
  {
    "name": "drag-and-drop-image-vector",
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
`;const p=d=>(N("data-v-10c96f6f"),d=d(),B(),d),me={id:"title"},ue=p(()=>r("div",{id:"map",class:"map"},null,-1)),ge=p(()=>r("div",{id:"info"}," ",-1)),fe=p(()=>r("p",null,"Example of using the drag-and-drop interaction with an ol/layer/VectorImage layer. Drag and drop GPX, GeoJSON, IGC, KML, or TopoJSON files on to the map. Each file is rendered to an image on the client.",-1)),he=p(()=>r("h5",{class:"source-heading"},"html",-1)),_e={class:"language-html"},ye=p(()=>r("h5",{class:"source-heading"},"css",-1)),ve={class:"language-css"},we=p(()=>r("h5",{class:"source-heading"},"js",-1)),xe={class:"language-js"},Ie=p(()=>r("h5",{class:"source-heading"},"package.json",-1)),Re={class:"language-json"},Te={__name:"index",setup(d){return G(()=>{const e=new H({formatConstructors:[J,K,X,z,Z]}),n="UvzNAwhugDuwndyxsHmE",i='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',a=new D({interactions:P().extend([e]),layers:[new Y({source:new $({attributions:i,url:"https://api.maptiler.com/tiles/satellite/{z}/{x}/{y}.jpg?key="+n,maxZoom:20})})],target:"map",view:new F({center:[0,0],zoom:2})});e.on("addfeatures",function(o){const t=new U({features:o.features});a.addLayer(new ie({source:t})),a.getView().fit(t.getExtent())});const s=function(o){const t=[];if(a.forEachFeatureAtPixel(o,function(c){t.push(c)}),t.length>0){const c=[];let l,f;for(l=0,f=t.length;l<f;++l)c.push(t[l].get("name"));document.getElementById("info").innerHTML=c.join(", ")||"&nbsp"}else document.getElementById("info").innerHTML="&nbsp;"};a.on("pointermove",function(o){if(o.dragging)return;const t=a.getEventPixel(o.originalEvent);s(t)}),a.on("click",function(o){s(o.pixel)}),Prism.highlightAll()}),(e,n)=>(M(),k(O,null,[r("h4",me,u(g(se)),1),ue,ge,fe,he,r("pre",null,[r("code",_e,u("  "+g(ce).trim()),1)]),ye,r("pre",null,[r("code",ve,u("  "+g(le).trim()),1)]),we,r("pre",null,[r("code",xe,u("  "+g(pe).trim()),1)]),Ie,r("pre",null,[r("code",Re,u("  "+g(de).trim()),1)])],64))}},Ye=j(Te,[["__scopeId","data-v-10c96f6f"]]);export{Ye as default};
