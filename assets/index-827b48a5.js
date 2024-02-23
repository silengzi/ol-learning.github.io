import{aF as T,Y as w,cy as V,k as C,_ as E,aR as x,c7 as L,H as S,aZ as b,a2 as A,M as D,S as F,V as P}from"./Layer-227d2e40.js";import{_ as j,i as G,o as M,c as k,b as r,t as u,g,F as O,p as N,k as B}from"./index-eb0ea342.js";import{D as H,G as J,I as X,T as z}from"./TopoJSON-3f52c9cc.js";import{G as Z}from"./GeoJSON-1b8bad54.js";import{K}from"./KML-9d76c4ba.js";import{T as Y}from"./Tile-69a5f37c.js";import{X as $}from"./XYZ-f63b0d91.js";import{V as U}from"./Vector-dc05cca5.js";import{R as W,B as q}from"./featureloader-41324978.js";import{C as Q,I as ee,f as te}from"./ImageLayer-fec79659.js";import{C as oe}from"./VectorLayer-cfa00b56.js";import"./LineString-72752817.js";import"./MultiPolygon-4cf6e085.js";import"./MultiPoint-97d710ff.js";import"./Feature-315822cb.js";import"./JSONFeature-4dcaaca7.js";import"./GeometryCollection-66a09ebd.js";import"./Style-f78957a3.js";import"./string-30bf5402.js";import"./BaseTile-962ada93.js";import"./TileProperty-167ee2c2.js";import"./TileLayer-94aa49a8.js";import"./Layer-10451559.js";import"./TileImage-97dc110f.js";import"./UrlTile-27538029.js";import"./hitdetect-d04d171e.js";import"./vector-841020ca.js";class re extends Q{constructor(e){super(e),this.vectorRenderer_=new oe(e),this.layerImageRatio_=e.getImageRatio(),this.coordinateToVectorPixelTransform_=T(),this.renderedPixelToCoordinateTransform_=null}disposeInternal(){this.vectorRenderer_.dispose(),super.disposeInternal()}getFeatures(e){if(!this.vectorRenderer_)return Promise.resolve([]);const n=w(this.coordinateToVectorPixelTransform_,w(this.renderedPixelToCoordinateTransform_,e.slice()));return this.vectorRenderer_.getFeatures(n)}handleFontsChanged(){this.vectorRenderer_.handleFontsChanged()}prepareFrame(e){const n=e.pixelRatio,i=e.viewState,a=i.resolution,s=e.viewHints,o=this.vectorRenderer_;let t=e.extent;this.layerImageRatio_!==1&&(t=t.slice(0),V(t,this.layerImageRatio_));const c=C(t)/a,l=E(t)/a;if(!s[x.ANIMATING]&&!s[x.INTERACTING]&&!L(t)){o.useContainer(null,null);const f=o.context,I=e.layerStatesArray[e.layerIndex],R=Object.assign({},I,{opacity:1}),h=Object.assign({},e,{declutterTree:new W(9),extent:t,size:[c,l],viewState:Object.assign({},e.viewState,{rotation:0}),layerStatesArray:[R],layerIndex:0});let v=!0;const m=new ee(t,a,n,f.canvas,function(_){o.prepareFrame(h)&&o.replayGroupChanged&&(o.clipping=!1,o.renderFrame(h,null)&&(o.renderDeclutter(h),v=!1),_())});m.addEventListener(S.CHANGE,()=>{if(m.getState()!==b.LOADED)return;this.image_=v?null:m;const _=m.getPixelRatio(),y=te(m.getResolution())*n/_;this.renderedResolution=y,this.coordinateToVectorPixelTransform_=A(this.coordinateToVectorPixelTransform_,c/2,l/2,1/y,-1/y,0,-i.center[0],-i.center[1])}),m.load()}return this.image_&&(this.renderedPixelToCoordinateTransform_=e.pixelToCoordinateTransform.slice()),!!this.image_}preRender(){}postRender(){}renderDeclutter(){}forEachFeatureAtCoordinate(e,n,i,a,s){return this.vectorRenderer_?this.vectorRenderer_.forEachFeatureAtCoordinate(e,n,i,a,s):super.forEachFeatureAtCoordinate(e,n,i,a,s)}}const ne=re;class ae extends q{constructor(e){e=e||{};const n=Object.assign({},e);delete n.imageRatio,super(n),this.imageRatio_=e.imageRatio!==void 0?e.imageRatio:1}getImageRatio(){return this.imageRatio_}createRenderer(){return new ne(this)}}const ie=ae,se="Drag-and-Drop Image Vector",ce=`
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
`;const p=d=>(N("data-v-10c96f6f"),d=d(),B(),d),me={id:"title"},ue=p(()=>r("div",{id:"map",class:"map"},null,-1)),ge=p(()=>r("div",{id:"info"}," ",-1)),fe=p(()=>r("p",null,"Example of using the drag-and-drop interaction with an ol/layer/VectorImage layer. Drag and drop GPX, GeoJSON, IGC, KML, or TopoJSON files on to the map. Each file is rendered to an image on the client.",-1)),he=p(()=>r("h5",{class:"source-heading"},"html",-1)),_e={class:"language-html"},ye=p(()=>r("h5",{class:"source-heading"},"css",-1)),ve={class:"language-css"},we=p(()=>r("h5",{class:"source-heading"},"js",-1)),xe={class:"language-js"},Ie=p(()=>r("h5",{class:"source-heading"},"package.json",-1)),Re={class:"language-json"},Te={__name:"index",setup(d){return G(()=>{const e=new H({formatConstructors:[J,Z,X,K,z]}),n="UvzNAwhugDuwndyxsHmE",i='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',a=new D({interactions:F().extend([e]),layers:[new Y({source:new $({attributions:i,url:"https://api.maptiler.com/tiles/satellite/{z}/{x}/{y}.jpg?key="+n,maxZoom:20})})],target:"map",view:new P({center:[0,0],zoom:2})});e.on("addfeatures",function(o){const t=new U({features:o.features});a.addLayer(new ie({source:t})),a.getView().fit(t.getExtent())});const s=function(o){const t=[];if(a.forEachFeatureAtPixel(o,function(c){t.push(c)}),t.length>0){const c=[];let l,f;for(l=0,f=t.length;l<f;++l)c.push(t[l].get("name"));document.getElementById("info").innerHTML=c.join(", ")||"&nbsp"}else document.getElementById("info").innerHTML="&nbsp;"};a.on("pointermove",function(o){if(o.dragging)return;const t=a.getEventPixel(o.originalEvent);s(t)}),a.on("click",function(o){s(o.pixel)}),Prism.highlightAll()}),(e,n)=>(M(),k(O,null,[r("h4",me,u(g(se)),1),ue,ge,fe,he,r("pre",null,[r("code",_e,u("  "+g(ce).trim()),1)]),ye,r("pre",null,[r("code",ve,u("  "+g(le).trim()),1)]),we,r("pre",null,[r("code",xe,u("  "+g(pe).trim()),1)]),Ie,r("pre",null,[r("code",Re,u("  "+g(de).trim()),1)])],64))}},qe=j(Te,[["__scopeId","data-v-10c96f6f"]]);export{qe as default};
