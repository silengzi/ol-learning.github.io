import{aT as T,ad as w,cx as V,t as C,af as E,b1 as x,cd as L,E as b,b7 as S,ai as A,M as D,a9 as P,V as F}from"./Layer-d95863ce.js";import{_ as j,i as G,o as M,c as k,b as r,t as u,g,F as O,p as N,k as B}from"./index-ceda08fa.js";import{D as H,G as J,I as X,K as z,T as K}from"./TopoJSON-e16566b9.js";import{G as Z}from"./GeoJSON-18d2e23d.js";import{T as Y}from"./Tile-26a716d9.js";import{X as $}from"./XYZ-73edd6ba.js";import{C as U,V as W}from"./VectorLayer-8feade0f.js";import{R as q,B as Q}from"./featureloader-ea3986d0.js";import{C as ee,I as te,f as oe}from"./ImageLayer-578312e4.js";import"./LineString-da25bcd7.js";import"./MultiPolygon-f37fd2e0.js";import"./Feature-ba88f75c.js";import"./GeometryCollection-e31ac581.js";import"./string-30bf5402.js";import"./JSONFeature-6b9607e0.js";import"./BaseTile-0f70055b.js";import"./TileProperty-0dbbd060.js";import"./TileLayer-121ec467.js";import"./Layer-4850cb8d.js";import"./TileImage-f7288716.js";import"./UrlTile-563a27f8.js";class re extends ee{constructor(e){super(e),this.vectorRenderer_=new U(e),this.layerImageRatio_=e.getImageRatio(),this.coordinateToVectorPixelTransform_=T(),this.renderedPixelToCoordinateTransform_=null}disposeInternal(){this.vectorRenderer_.dispose(),super.disposeInternal()}getFeatures(e){if(!this.vectorRenderer_)return Promise.resolve([]);const n=w(this.coordinateToVectorPixelTransform_,w(this.renderedPixelToCoordinateTransform_,e.slice()));return this.vectorRenderer_.getFeatures(n)}handleFontsChanged(){this.vectorRenderer_.handleFontsChanged()}prepareFrame(e){const n=e.pixelRatio,i=e.viewState,a=i.resolution,s=e.viewHints,o=this.vectorRenderer_;let t=e.extent;this.layerImageRatio_!==1&&(t=t.slice(0),V(t,this.layerImageRatio_));const c=C(t)/a,l=E(t)/a;if(!s[x.ANIMATING]&&!s[x.INTERACTING]&&!L(t)){o.useContainer(null,null);const f=o.context,I=e.layerStatesArray[e.layerIndex],R=Object.assign({},I,{opacity:1}),h=Object.assign({},e,{declutterTree:new q(9),extent:t,size:[c,l],viewState:Object.assign({},e.viewState,{rotation:0}),layerStatesArray:[R],layerIndex:0});let v=!0;const m=new te(t,a,n,f.canvas,function(_){o.prepareFrame(h)&&o.replayGroupChanged&&(o.clipping=!1,o.renderFrame(h,null)&&(o.renderDeclutter(h),v=!1),_())});m.addEventListener(b.CHANGE,()=>{if(m.getState()!==S.LOADED)return;this.image_=v?null:m;const _=m.getPixelRatio(),y=oe(m.getResolution())*n/_;this.renderedResolution=y,this.coordinateToVectorPixelTransform_=A(this.coordinateToVectorPixelTransform_,c/2,l/2,1/y,-1/y,0,-i.center[0],-i.center[1])}),m.load()}return this.image_&&(this.renderedPixelToCoordinateTransform_=e.pixelToCoordinateTransform.slice()),!!this.image_}preRender(){}postRender(){}renderDeclutter(){}forEachFeatureAtCoordinate(e,n,i,a,s){return this.vectorRenderer_?this.vectorRenderer_.forEachFeatureAtCoordinate(e,n,i,a,s):super.forEachFeatureAtCoordinate(e,n,i,a,s)}}const ne=re;class ae extends Q{constructor(e){e=e||{};const n=Object.assign({},e);delete n.imageRatio,super(n),this.imageRatio_=e.imageRatio!==void 0?e.imageRatio:1}getImageRatio(){return this.imageRatio_}createRenderer(){return new ne(this)}}const ie=ae,se="Drag-and-Drop Image Vector",ce=`
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
`;const p=d=>(N("data-v-10c96f6f"),d=d(),B(),d),me={id:"title"},ue=p(()=>r("div",{id:"map",class:"map"},null,-1)),ge=p(()=>r("div",{id:"info"}," ",-1)),fe=p(()=>r("p",null,"Example of using the drag-and-drop interaction with an ol/layer/VectorImage layer. Drag and drop GPX, GeoJSON, IGC, KML, or TopoJSON files on to the map. Each file is rendered to an image on the client.",-1)),he=p(()=>r("h5",{class:"source-heading"},"html",-1)),_e={class:"language-html"},ye=p(()=>r("h5",{class:"source-heading"},"css",-1)),ve={class:"language-css"},we=p(()=>r("h5",{class:"source-heading"},"js",-1)),xe={class:"language-js"},Ie=p(()=>r("h5",{class:"source-heading"},"package.json",-1)),Re={class:"language-json"},Te={__name:"index",setup(d){return G(()=>{const e=new H({formatConstructors:[J,Z,X,z,K]}),n="UvzNAwhugDuwndyxsHmE",i='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',a=new D({interactions:P().extend([e]),layers:[new Y({source:new $({attributions:i,url:"https://api.maptiler.com/tiles/satellite/{z}/{x}/{y}.jpg?key="+n,maxZoom:20})})],target:"map",view:new F({center:[0,0],zoom:2})});e.on("addfeatures",function(o){const t=new W({features:o.features});a.addLayer(new ie({source:t})),a.getView().fit(t.getExtent())});const s=function(o){const t=[];if(a.forEachFeatureAtPixel(o,function(c){t.push(c)}),t.length>0){const c=[];let l,f;for(l=0,f=t.length;l<f;++l)c.push(t[l].get("name"));document.getElementById("info").innerHTML=c.join(", ")||"&nbsp"}else document.getElementById("info").innerHTML="&nbsp;"};a.on("pointermove",function(o){if(o.dragging)return;const t=a.getEventPixel(o.originalEvent);s(t)}),a.on("click",function(o){s(o.pixel)}),Prism.highlightAll()}),(e,n)=>(M(),k(O,null,[r("h4",me,u(g(se)),1),ue,ge,fe,he,r("pre",null,[r("code",_e,u("  "+g(ce).trim()),1)]),ye,r("pre",null,[r("code",ve,u("  "+g(le).trim()),1)]),we,r("pre",null,[r("code",xe,u("  "+g(pe).trim()),1)]),Ie,r("pre",null,[r("code",Re,u("  "+g(de).trim()),1)])],64))}},Ke=j(Te,[["__scopeId","data-v-10c96f6f"]]);export{Ke as default};
