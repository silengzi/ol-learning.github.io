import{T as B}from"./TileImage-4a3fae9a.js";import{g as k,e as C,h as L,j as F,M as P,V as E}from"./Layer-5200258f.js";import{c as Z}from"./UrlTile-d31c8ece.js";import{e as q,c as V,a as K}from"./TileProperty-ab86017d.js";import{T as U}from"./Tile-aca76f7d.js";import{_ as W,i as G,o as H,c as X,b as s,t as p,g as m,F as Y,j as N,p as Q,k as $}from"./index-7205b445.js";import"./BaseTile-53865aab.js";import"./TileLayer-7e43e564.js";import"./Layer-a8143b89.js";function J(o){const e=o[0],t=new Array(e);let i=1<<e-1,a,n;for(a=0;a<e;++a)n=48,o[1]&i&&(n+=1),o[2]&i&&(n+=2),t[a]=String.fromCharCode(n),i>>=1;return t.join("")}const ee='<a class="ol-attribution-bing-tos" href="https://www.microsoft.com/maps/product/terms.html" target="_blank">Terms of Use</a>';class te extends B{constructor(e){const t=e.hidpi!==void 0?e.hidpi:!1;super({cacheSize:e.cacheSize,crossOrigin:"anonymous",interpolate:e.interpolate,opaque:!0,projection:k("EPSG:3857"),reprojectionErrorThreshold:e.reprojectionErrorThreshold,state:"loading",tileLoadFunction:e.tileLoadFunction,tilePixelRatio:t?2:1,wrapX:e.wrapX!==void 0?e.wrapX:!0,transition:e.transition,zDirection:e.zDirection}),this.hidpi_=t,this.culture_=e.culture!==void 0?e.culture:"en-us",this.maxZoom_=e.maxZoom!==void 0?e.maxZoom:-1,this.apiKey_=e.key,this.imagerySet_=e.imagerySet,this.placeholderTiles_=e.placeholderTiles;const i="https://dev.virtualearth.net/REST/v1/Imagery/Metadata/"+this.imagerySet_+"?uriScheme=https&include=ImageryProviders&key="+this.apiKey_+"&c="+this.culture_;fetch(i).then(a=>a.json()).then(a=>this.handleImageryMetadataResponse(a))}getApiKey(){return this.apiKey_}getImagerySet(){return this.imagerySet_}handleImageryMetadataResponse(e){if(e.statusCode!=200||e.statusDescription!="OK"||e.authenticationResultCode!="ValidCredentials"||e.resourceSets.length!=1||e.resourceSets[0].resources.length!=1){this.setState("error");return}const t=e.resourceSets[0].resources[0],i=this.maxZoom_==-1?t.zoomMax:this.maxZoom_,a=this.getProjection(),n=q(a),c=this.hidpi_?2:1,y=t.imageWidth==t.imageHeight?t.imageWidth/c:[t.imageWidth/c,t.imageHeight/c],d=V({extent:n,minZoom:t.zoomMin,maxZoom:i,tileSize:y});this.tileGrid=d;const v=this.culture_,z=this.hidpi_,A=this.placeholderTiles_;if(this.tileUrlFunction=Z(t.imageUrlSubdomains.map(function(f){const u=[0,0,0],h=t.imageUrl.replace("{subdomain}",f).replace("{culture}",v);return function(r,_,M){if(!r)return;K(r[0],r[1],r[2],u);const b=new URL(h.replace("{quadkey}",J(u))),l=b.searchParams;return z&&(l.set("dpi","d1"),l.set("device","mobile")),A===!0?l.delete("n"):A===!1&&l.set("n","z"),b.toString()}})),t.imageryProviders){const f=C(k("EPSG:4326"),this.getProjection());this.setAttributions(u=>{const h=[],r=u.viewState,_=this.getTileGrid(),M=_.getZForResolution(r.resolution,this.zDirection),l=_.getTileCoordForCoordAndZ(r.center,M)[0];return t.imageryProviders.map(function(T){let j=!1;const O=T.coverageAreas;for(let S=0,D=O.length;S<D;++S){const w=O[S];if(l>=w.zoomMin&&l<=w.zoomMax){const g=w.bbox,I=[g[1],g[0],g[3],g[2]],R=L(I,f);if(F(R,u.extent)){j=!0;break}}}j&&h.push(T.attribution)}),h.push(ee),h})}this.setState("ready")}}const ae=te,ie="Bing Maps",se=`
  <div id="map" class="map"></div>
  <select id="layer-select">
    <option value="Aerial">Aerial</option>
    <option value="AerialWithLabelsOnDemand" selected>Aerial with labels</option>
    <option value="RoadOnDemand">Road</option>
    <option value="CanvasDark">Road dark</option>
    <option value="OrdnanceSurvey">Ordnance Survey</option>
  </select>
`,oe=`
  .map {
    width: 100%;
    height: 400px;
  }
`,ne=`
  import BingMaps from 'ol/source/BingMaps.js';
  import Map from 'ol/Map.js';
  import TileLayer from 'ol/layer/Tile.js';
  import View from 'ol/View.js';

  const styles = [
    'RoadOnDemand',
    'Aerial',
    'AerialWithLabelsOnDemand',
    'CanvasDark',
    'OrdnanceSurvey',
  ];
  const layers = [];
  let i, ii;
  for (i = 0, ii = styles.length; i < ii; ++i) {
    layers.push(
      new TileLayer({
        visible: false,
        preload: Infinity,
        source: new BingMaps({
          key: 'Your Bing Maps Key from https://www.bingmapsportal.com/ here',
          imagerySet: styles[i],
          // placeholderTiles: false, // Optional. Prevents showing of BingMaps placeholder tiles
        }),
      })
    );
  }
  const map = new Map({
    layers: layers,
    target: 'map',
    view: new View({
      center: [-6655.5402445057125, 6709968.258934638],
      zoom: 13,
    }),
  });

  const select = document.getElementById('layer-select');
  function onChange() {
    const style = select.value;
    for (let i = 0, ii = layers.length; i < ii; ++i) {
      layers[i].setVisible(styles[i] === style);
    }
  }
  select.addEventListener('change', onChange);
  onChange();

`,re=`
  {
    "name": "bing-maps",
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
`;const x=o=>(Q("data-v-b1a42087"),o=o(),$(),o),le={id:"title"},ce=N('<div id="map" class="map" data-v-b1a42087></div><select id="layer-select" data-v-b1a42087><option value="Aerial" data-v-b1a42087>Aerial</option><option value="AerialWithLabelsOnDemand" selected data-v-b1a42087>Aerial with labels</option><option value="RoadOnDemand" data-v-b1a42087>Road</option><option value="CanvasDark" data-v-b1a42087>Road dark</option><option value="OrdnanceSurvey" data-v-b1a42087>Ordnance Survey</option></select><p data-v-b1a42087>When the Bing Maps tile service doesn&#39;t have tiles for a given resolution and region it returns &quot;placeholder&quot; tiles by default for `Aerial` and `OrdnanceSurvey&#39; styles. If you want OpenLayers to display stretched tiles in place of &quot;placeholder&quot; tiles at zoom levels where Bing Maps does not have tiles available then set <code data-v-b1a42087>placeholderTiles</code> to <code data-v-b1a42087>false</code> in the options passed to <code data-v-b1a42087>ol/source/BingMaps</code>.</p><h5 class="source-heading" data-v-b1a42087>html</h5>',4),de={class:"language-html"},ue=x(()=>s("h5",{class:"source-heading"},"css",-1)),he={class:"language-css"},pe=x(()=>s("h5",{class:"source-heading"},"js",-1)),me={class:"language-js"},ge=x(()=>s("h5",{class:"source-heading"},"package.json",-1)),ye={class:"language-json"},ve={__name:"index",setup(o){return G(()=>{const e=["RoadOnDemand","Aerial","AerialWithLabelsOnDemand","CanvasDark","OrdnanceSurvey"],t=[];let i,a;for(i=0,a=e.length;i<a;++i)t.push(new U({visible:!1,preload:1/0,source:new ae({key:"At0AC5clqqASpeFYI62kMtfRYAlAWKodmuMnyQj9ZzR-F_qHEMeIQALDng0tH7ML",imagerySet:e[i]})}));new P({layers:t,target:"map",view:new E({center:[-6655.5402445057125,6709968258934638e-9],zoom:13})});const n=document.getElementById("layer-select");function c(){const y=n.value;for(let d=0,v=t.length;d<v;++d)t[d].setVisible(e[d]===y)}n.addEventListener("change",c),c(),Prism.highlightAll()}),(e,t)=>(H(),X(Y,null,[s("h4",le,p(m(ie)),1),ce,s("pre",null,[s("code",de,p("  "+m(se).trim()),1)]),ue,s("pre",null,[s("code",he,p("  "+m(oe).trim()),1)]),pe,s("pre",null,[s("code",me,p("  "+m(ne).trim()),1)]),ge,s("pre",null,[s("code",ye,p("  "+m(re).trim()),1)])],64))}},je=W(ve,[["__scopeId","data-v-b1a42087"]]);export{je as default};
