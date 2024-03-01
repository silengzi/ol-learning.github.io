import{aI as V,_ as I,cX as C,e as E,a0 as L,aO as x,cm as b,c4 as D,G as A,c2 as S,a4 as P,aW as F,M as G,R as j,V as M}from"./Layer-3b715193.js";import{_ as k,i as O,o as N,c as B,b as o,t as g,g as f,F as H,p as X,k as J}from"./index-92068577.js";import{D as z,G as K,I as Z,T as Y}from"./TopoJSON-61977e9c.js";import{G as $}from"./GeoJSON-690a4bb4.js";import{K as W}from"./KML-c43cd689.js";import{T as U}from"./Tile-70490af9.js";import{X as q}from"./XYZ-80208d03.js";import{V as Q}from"./Vector-a4e726e1.js";import{C as ee,I as te,f as re}from"./ImageLayer-d46d3fc0.js";import{C as oe}from"./VectorLayer-ef6da1be.js";import"./featureloader-a90a5108.js";import"./LineString-eed53b5a.js";import"./length-c6ba5b73.js";import"./MultiPolygon-d7736349.js";import"./MultiPoint-74fca651.js";import"./Feature-627996e0.js";import"./TextFeature-d99bec1a.js";import"./JSONFeature-5a5c1876.js";import"./string-30bf5402.js";import"./BaseTile-8ab94efc.js";import"./TileProperty-e33ea24b.js";import"./TileLayer-7c629c64.js";import"./Layer-37ea9c2e.js";import"./TileImage-1df58d67.js";import"./UrlTile-dc2c26ed.js";import"./hitdetect-486e5612.js";import"./vector-4e067f94.js";class ne extends ee{constructor(e){super(e),this.vectorRenderer_=new oe(e),this.layerImageRatio_=e.getImageRatio(),this.coordinateToVectorPixelTransform_=V(),this.renderedPixelToCoordinateTransform_=null}disposeInternal(){this.vectorRenderer_.dispose(),super.disposeInternal()}getFeatures(e){if(!this.vectorRenderer_)return Promise.resolve([]);const n=I(this.coordinateToVectorPixelTransform_,I(this.renderedPixelToCoordinateTransform_,e.slice()));return this.vectorRenderer_.getFeatures(n)}handleFontsChanged(){this.vectorRenderer_.handleFontsChanged()}prepareFrame(e){const n=e.pixelRatio,i=e.viewState,a=i.resolution,s=e.viewHints,r=this.vectorRenderer_;let t=e.extent;this.layerImageRatio_!==1&&(t=t.slice(0),C(t,this.layerImageRatio_));const c=E(t)/a,l=L(t)/a;if(!s[x.ANIMATING]&&!s[x.INTERACTING]&&!b(t)){r.useContainer(null,null);const h=r.context,R=e.layerStatesArray[e.layerIndex],T=Object.assign({},R,{opacity:1}),u=Object.assign({},e,{extent:t,size:[c,l],viewState:Object.assign({},e.viewState,{rotation:0}),layerStatesArray:[T],layerIndex:0,declutter:null}),v=this.getLayer().getDeclutter();v&&(u.declutter={[v]:new D(9)});let w=!0;const m=new te(t,a,n,h.canvas,function(_){r.prepareFrame(u)&&r.replayGroupChanged&&(r.clipping=!1,r.renderFrame(u,null)&&(r.renderDeclutter(u),r.renderDeferred(u),w=!1),_())});m.addEventListener(A.CHANGE,()=>{if(m.getState()!==S.LOADED)return;this.image_=w?null:m;const _=m.getPixelRatio(),y=re(m.getResolution())*n/_;this.renderedResolution=y,this.coordinateToVectorPixelTransform_=P(this.coordinateToVectorPixelTransform_,c/2,l/2,1/y,-1/y,0,-i.center[0],-i.center[1])}),m.load()}return this.image_&&(this.renderedPixelToCoordinateTransform_=e.pixelToCoordinateTransform.slice()),!!this.image_}preRender(){}postRender(){}renderDeclutter(){}forEachFeatureAtCoordinate(e,n,i,a,s){return this.vectorRenderer_?this.vectorRenderer_.forEachFeatureAtCoordinate(e,n,i,a,s):super.forEachFeatureAtCoordinate(e,n,i,a,s)}}const ae=ne;class ie extends F{constructor(e){e=e||{};const n=Object.assign({},e);delete n.imageRatio,super(n),this.imageRatio_=e.imageRatio!==void 0?e.imageRatio:1}getImageRatio(){return this.imageRatio_}createRenderer(){return new ae(this)}}const se=ie,ce="Drag-and-Drop Image Vector",le=`
  <div id="map" class="map"></div>
  <div id="info">&nbsp;</div>
`,pe=`
  .map {
    width: 100%;
    height: 400px;
  }
`,de=`
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
`,me=`
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
`;const p=d=>(X("data-v-10c96f6f"),d=d(),J(),d),ue={id:"title"},ge=p(()=>o("div",{id:"map",class:"map"},null,-1)),fe=p(()=>o("div",{id:"info"}," ",-1)),he=p(()=>o("p",null,"Example of using the drag-and-drop interaction with an ol/layer/VectorImage layer. Drag and drop GPX, GeoJSON, IGC, KML, or TopoJSON files on to the map. Each file is rendered to an image on the client.",-1)),_e=p(()=>o("h5",{class:"source-heading"},"html",-1)),ye={class:"language-html"},ve=p(()=>o("h5",{class:"source-heading"},"css",-1)),we={class:"language-css"},Ie=p(()=>o("h5",{class:"source-heading"},"js",-1)),xe={class:"language-js"},Re=p(()=>o("h5",{class:"source-heading"},"package.json",-1)),Te={class:"language-json"},Ve={__name:"index",setup(d){return O(()=>{const e=new z({formatConstructors:[K,$,Z,W,Y]}),n="UvzNAwhugDuwndyxsHmE",i='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',a=new G({interactions:j().extend([e]),layers:[new U({source:new q({attributions:i,url:"https://api.maptiler.com/tiles/satellite/{z}/{x}/{y}.jpg?key="+n,maxZoom:20})})],target:"map",view:new M({center:[0,0],zoom:2})});e.on("addfeatures",function(r){const t=new Q({features:r.features});a.addLayer(new se({source:t})),a.getView().fit(t.getExtent())});const s=function(r){const t=[];if(a.forEachFeatureAtPixel(r,function(c){t.push(c)}),t.length>0){const c=[];let l,h;for(l=0,h=t.length;l<h;++l)c.push(t[l].get("name"));document.getElementById("info").innerHTML=c.join(", ")||"&nbsp"}else document.getElementById("info").innerHTML="&nbsp;"};a.on("pointermove",function(r){if(r.dragging)return;const t=a.getEventPixel(r.originalEvent);s(t)}),a.on("click",function(r){s(r.pixel)}),Prism.highlightAll()}),(e,n)=>(N(),B(H,null,[o("h4",ue,g(f(ce)),1),ge,fe,he,_e,o("pre",null,[o("code",ye,g("  "+f(le).trim()),1)]),ve,o("pre",null,[o("code",we,g("  "+f(pe).trim()),1)]),Ie,o("pre",null,[o("code",xe,g("  "+f(de).trim()),1)]),Re,o("pre",null,[o("code",Te,g("  "+f(me).trim()),1)])],64))}},Qe=k(Ve,[["__scopeId","data-v-10c96f6f"]]);export{Qe as default};
