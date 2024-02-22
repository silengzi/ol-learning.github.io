import{cC as C,t as D,a9 as N,a5 as F,g as U,au as I,a_ as j,as as B,Q as H,R as V,av as P,aI as X,w as Y,v as $,z,M as q,b as K,V as Q}from"./Layer-763025a3.js";import{T as R}from"./Tile-3c7ba04a.js";import{T as Z}from"./TileImage-d65ff5bd.js";import{D as G}from"./common-c2bf7a3a.js";import{c as O}from"./string-30bf5402.js";import{u as J,j as ee}from"./TileProperty-b49a7745.js";import{_ as te,i as se,o as ne,c as re,b as g,t as x,g as E,F as ie,p as oe,k as ae,d as W}from"./index-87bb3bb9.js";import"./BaseTile-115b346f.js";import"./TileLayer-fd6dc420.js";import"./Layer-79bf392c.js";import"./UrlTile-ce5b3cbe.js";function k(p,e){const s=[];Object.keys(e).forEach(function(n){e[n]!==null&&e[n]!==void 0&&s.push(n+"="+encodeURIComponent(e[n]))});const o=s.join("&");return p=p.replace(/[?&]$/,""),p+=p.includes("?")?"&":"?",p+o}const b="1.3.0";function le(p,e,s,o,n){n.WIDTH=s[0],n.HEIGHT=s[1];const c=o.getAxisOrientation();let r;const d=O(n.VERSION,"1.3")>=0;return n[d?"CRS":"SRS"]=o.getCode(),d&&c.substr(0,2)=="ne"?r=[e[1],e[0],e[3],e[2]]:r=e,n.BBOX=r.join(","),k(p,n)}function ce(p,e,s,o,n,c,r){c=Object.assign({REQUEST:"GetMap"},c);const d=e/s,u=[C(D(p)/d,G),C(N(p)/d,G)];if(s!=1)switch(r){case"geoserver":const t=90*s+.5|0;"FORMAT_OPTIONS"in c?c.FORMAT_OPTIONS+=";dpi:"+t:c.FORMAT_OPTIONS="dpi:"+t;break;case"mapserver":c.MAP_RESOLUTION=90*s;break;case"carmentaserver":case"qgis":c.DPI=90*s;break;default:throw new Error("Unknown `serverType` configured")}return le(n,p,u,o,c)}function A(p,e){return Object.assign({REQUEST:e,SERVICE:"WMS",VERSION:b,FORMAT:"image/png",STYLES:"",TRANSPARENT:!0},p)}class de extends Z{constructor(e){e=e||{};const s=Object.assign({},e.params),o="TRANSPARENT"in s?s.TRANSPARENT:!0;super({attributions:e.attributions,attributionsCollapsible:e.attributionsCollapsible,cacheSize:e.cacheSize,crossOrigin:e.crossOrigin,interpolate:e.interpolate,opaque:!o,projection:e.projection,reprojectionErrorThreshold:e.reprojectionErrorThreshold,tileClass:e.tileClass,tileGrid:e.tileGrid,tileLoadFunction:e.tileLoadFunction,url:e.url,urls:e.urls,wrapX:e.wrapX!==void 0?e.wrapX:!0,transition:e.transition,zDirection:e.zDirection}),this.gutter_=e.gutter!==void 0?e.gutter:0,this.params_=s,this.v13_=!0,this.serverType_=e.serverType,this.hidpi_=e.hidpi!==void 0?e.hidpi:!0,this.tmpExtent_=F(),this.updateV13_(),this.setKey(this.getKeyForParams_())}getFeatureInfoUrl(e,s,o,n){const c=U(o),r=this.getProjection()||c;let d=this.getTileGrid();d||(d=this.getTileGridForProjection(r));const u=I(e,c,r),m=J(r,c,e,s),t=d.getZForResolution(m,this.zDirection),a=d.getResolution(t),l=d.getTileCoordForCoordAndZ(u,t);if(d.getResolutions().length<=l[0])return;let i=d.getTileCoordExtent(l,this.tmpExtent_);const h=this.gutter_;h!==0&&(i=j(i,a*h,i));const _={QUERY_LAYERS:this.params_.LAYERS};Object.assign(_,A(this.params_,"GetFeatureInfo"),n);const y=Math.floor((u[0]-i[0])/a),v=Math.floor((i[3]-u[1])/a);return _[this.v13_?"I":"X"]=y,_[this.v13_?"J":"Y"]=v,this.getRequestUrl_(l,i,1,r||c,_)}getLegendUrl(e,s){if(this.urls[0]===void 0)return;const o={SERVICE:"WMS",VERSION:b,REQUEST:"GetLegendGraphic",FORMAT:"image/png"};if(s===void 0||s.LAYER===void 0){const n=this.params_.LAYERS;if(!(!Array.isArray(n)||n.length===1))return;o.LAYER=n}if(e!==void 0){const n=this.getProjection()?this.getProjection().getMetersPerUnit():1,c=28e-5;o.SCALE=e*n/c}return Object.assign(o,s),k(this.urls[0],o)}getGutter(){return this.gutter_}getParams(){return this.params_}getRequestUrl_(e,s,o,n,c){const r=this.urls;if(!r)return;let d;if(r.length==1)d=r[0];else{const u=B(ee(e),r.length);d=r[u]}return ce(s,(this.tileGrid||this.getTileGridForProjection(n)).getResolution(e[0]),o,n,d,c,this.serverType_)}getTilePixelRatio(e){return!this.hidpi_||this.serverType_===void 0?1:e}getKeyForParams_(){let e=0;const s=[];for(const o in this.params_)s[e++]=o+"-"+this.params_[o];return s.join("/")}updateParams(e){Object.assign(this.params_,e),this.updateV13_(),this.setKey(this.getKeyForParams_())}updateV13_(){const e=this.params_.VERSION||b;this.v13_=O(e,"1.3")>=0}tileUrlFunction(e,s,o){let n=this.getTileGrid();if(n||(n=this.getTileGridForProjection(o)),n.getResolutions().length<=e[0])return;s!=1&&(!this.hidpi_||this.serverType_===void 0)&&(s=1);const c=n.getResolution(e[0]);let r=n.getTileCoordExtent(e,this.tmpExtent_);const d=this.gutter_;d!==0&&(r=j(r,c*d,r));const u=Object.assign({},A(this.params_,"GetMap"));return this.getRequestUrl_(e,r,s,o,u)}}const L=de,M="units",ue=[1,2,5],w=25.4/.28;class he extends H{constructor(e){e=e||{};const s=document.createElement("div");s.style.pointerEvents="none",super({element:s,render:e.render,target:e.target}),this.on,this.once,this.un;const o=e.className!==void 0?e.className:e.bar?"ol-scale-bar":"ol-scale-line";this.innerElement_=document.createElement("div"),this.innerElement_.className=o+"-inner",this.element.className=o+" "+V,this.element.appendChild(this.innerElement_),this.viewState_=null,this.minWidth_=e.minWidth!==void 0?e.minWidth:64,this.maxWidth_=e.maxWidth,this.renderedVisible_=!1,this.renderedWidth_=void 0,this.renderedHTML_="",this.addChangeListener(M,this.handleUnitsChanged_),this.setUnits(e.units||"metric"),this.scaleBar_=e.bar||!1,this.scaleBarSteps_=e.steps||4,this.scaleBarText_=e.text||!1,this.dpi_=e.dpi||void 0}getUnits(){return this.get(M)}handleUnitsChanged_(){this.updateElement_()}setUnits(e){this.set(M,e)}setDpi(e){this.dpi_=e}updateElement_(){const e=this.viewState_;if(!e){this.renderedVisible_&&(this.element.style.display="none",this.renderedVisible_=!1);return}const s=e.center,o=e.projection,n=this.getUnits(),c=n=="degrees"?"degrees":"m";let r=P(o,e.resolution,s,c);const d=this.minWidth_*(this.dpi_||w)/w,u=this.maxWidth_!==void 0?this.maxWidth_*(this.dpi_||w)/w:void 0;let m=d*r,t="";if(n=="degrees"){const S=X.degrees;m*=S,m<S/60?(t="″",r*=3600):m<S?(t="′",r*=60):t="°"}else if(n=="imperial")m<.9144?(t="in",r/=.0254):m<1609.344?(t="ft",r/=.3048):(t="mi",r/=1609.344);else if(n=="nautical")r/=1852,t="NM";else if(n=="metric")m<.001?(t="μm",r*=1e6):m<1?(t="mm",r*=1e3):m<1e3?t="m":(t="km",r/=1e3);else if(n=="us")m<.9144?(t="in",r*=39.37):m<1609.344?(t="ft",r/=.30480061):(t="mi",r/=1609.3472);else throw new Error("Invalid units");let a=3*Math.floor(Math.log(d*r)/Math.log(10)),l,i,h,_,y,v;for(;;){h=Math.floor(a/3);const S=Math.pow(10,h);if(l=ue[(a%3+3)%3]*S,i=Math.round(l/r),isNaN(i)){this.element.style.display="none",this.renderedVisible_=!1;return}if(u!==void 0&&i>=u){l=_,i=y,h=v;break}else if(i>=d)break;_=l,y=i,v=h,++a}const T=this.scaleBar_?this.createScaleBar(i,l,t):l.toFixed(h<0?-h:0)+" "+t;this.renderedHTML_!=T&&(this.innerElement_.innerHTML=T,this.renderedHTML_=T),this.renderedWidth_!=i&&(this.innerElement_.style.width=i+"px",this.renderedWidth_=i),this.renderedVisible_||(this.element.style.display="",this.renderedVisible_=!0)}createScaleBar(e,s,o){const n=this.getScaleForResolution(),c=n<1?Math.round(1/n).toLocaleString()+" : 1":"1 : "+Math.round(n).toLocaleString(),r=this.scaleBarSteps_,d=e/r,u=[this.createMarker("absolute")];for(let t=0;t<r;++t){const a=t%2===0?"ol-scale-singlebar-odd":"ol-scale-singlebar-even";u.push(`<div><div class="ol-scale-singlebar ${a}" style="width: ${d}px;"></div>`+this.createMarker("relative")+(t%2===0||r===2?this.createStepText(t,e,!1,s,o):"")+"</div>")}return u.push(this.createStepText(r,e,!0,s,o)),(this.scaleBarText_?`<div class="ol-scale-text" style="width: ${e}px;">`+c+"</div>":"")+u.join("")}createMarker(e){return`<div class="ol-scale-step-marker" style="position: ${e}; top: ${e==="absolute"?3:-10}px;"></div>`}createStepText(e,s,o,n,c){const d=(e===0?0:Math.round(n/this.scaleBarSteps_*e*100)/100)+(e===0?"":" "+c),u=e===0?-3:s/this.scaleBarSteps_*-1,m=e===0?0:s/this.scaleBarSteps_*2;return`<div class="ol-scale-step-text" style="margin-left: ${u}px;text-align: ${e===0?"left":"center"};min-width: ${m}px;left: ${o?s+"px":"unset"};">`+d+"</div>"}getScaleForResolution(){const e=P(this.viewState_.projection,this.viewState_.resolution,this.viewState_.center,"m"),s=this.dpi_||w,o=1e3/25.4;return e*o*s}render(e){const s=e.frameState;s?this.viewState_=s.viewState:this.viewState_=null,this.updateElement_()}}const me=he,pe="Custom Tiled WMS",ge=`
  <div id="map" class="map"></div>
`,_e=`
  .map {
    width: 100%;
    height: 400px;
  }
`,fe=`
  import Map from 'ol/Map.js';
  import Projection from 'ol/proj/Projection.js';
  import TileLayer from 'ol/layer/Tile.js';
  import TileWMS from 'ol/source/TileWMS.js';
  import View from 'ol/View.js';
  import {ScaleLine, defaults as defaultControls} from 'ol/control.js';
  import {
    addCoordinateTransforms,
    addProjection,
    transform,
  } from 'ol/proj.js';

  // By default OpenLayers does not know about the EPSG:21781 (Swiss) projection.
  // So we create a projection instance for EPSG:21781 and pass it to
  // ol/proj~addProjection to make it available to the library for lookup by its
  // code.

  const projection = new Projection({
    code: 'EPSG:21781',
    // The extent is used to determine zoom level 0. Recommended values for a
    // projection's validity extent can be found at https://epsg.io/.
    extent: [485869.5728, 76443.1884, 837076.5648, 299941.7864],
    units: 'm',
  });
  addProjection(projection);

  // We also declare EPSG:21781/EPSG:4326 transform functions. These functions
  // are necessary for the ScaleLine control and when calling ol/proj~transform
  // for setting the view's initial center (see below).

  addCoordinateTransforms(
    'EPSG:4326',
    projection,
    function (coordinate) {
      return [
        WGStoCHy(coordinate[1], coordinate[0]),
        WGStoCHx(coordinate[1], coordinate[0]),
      ];
    },
    function (coordinate) {
      return [
        CHtoWGSlng(coordinate[0], coordinate[1]),
        CHtoWGSlat(coordinate[0], coordinate[1]),
      ];
    }
  );

  const extent = [420000, 30000, 900000, 350000];
  const layers = [
    new TileLayer({
      extent: extent,
      source: new TileWMS({
        url: 'https://wms.geo.admin.ch/',
        crossOrigin: 'anonymous',
        attributions:
          '© <a href="https://shop.swisstopo.admin.ch/en/products/maps/national/lk1000"' +
          'target="_blank">Pixelmap 1:1000000 / geo.admin.ch</a>',
        params: {
          'LAYERS': 'ch.swisstopo.pixelkarte-farbe-pk1000.noscale',
          'FORMAT': 'image/jpeg',
        },
        serverType: 'mapserver',
      }),
    }),
    new TileLayer({
      extent: extent,
      source: new TileWMS({
        url: 'https://wms.geo.admin.ch/',
        crossOrigin: 'anonymous',
        attributions:
          '© <a href="https://www.hydrodaten.admin.ch/en/notes-on-the-flood-alert-maps.html"' +
          'target="_blank">Flood Alert / geo.admin.ch</a>',
        params: {'LAYERS': 'ch.bafu.hydroweb-warnkarte_national'},
        serverType: 'mapserver',
      }),
    }),
  ];

  const map = new Map({
    controls: defaultControls().extend([
      new ScaleLine({
        units: 'metric',
      }),
    ]),
    layers: layers,
    target: 'map',
    view: new View({
      projection: projection,
      center: transform([8.23, 46.86], 'EPSG:4326', 'EPSG:21781'),
      extent: extent,
      zoom: 2,
    }),
  });

  /*
  * Swiss projection transform functions downloaded from
  * https://www.swisstopo.admin.ch/en/knowledge-facts/surveying-geodesy/reference-systems/map-projections.html
  */

  // Convert WGS lat/long (° dec) to CH y
  function WGStoCHy(lat, lng) {
    // Converts degrees dec to sex
    lat = DECtoSEX(lat);
    lng = DECtoSEX(lng);

    // Converts degrees to seconds (sex)
    lat = DEGtoSEC(lat);
    lng = DEGtoSEC(lng);

    // Axillary values (% Bern)
    const lat_aux = (lat - 169028.66) / 10000;
    const lng_aux = (lng - 26782.5) / 10000;

    // Process Y
    const y =
      600072.37 +
      211455.93 * lng_aux -
      10938.51 * lng_aux * lat_aux -
      0.36 * lng_aux * Math.pow(lat_aux, 2) -
      44.54 * Math.pow(lng_aux, 3);

    return y;
  }

  // Convert WGS lat/long (° dec) to CH x
  function WGStoCHx(lat, lng) {
    // Converts degrees dec to sex
    lat = DECtoSEX(lat);
    lng = DECtoSEX(lng);

    // Converts degrees to seconds (sex)
    lat = DEGtoSEC(lat);
    lng = DEGtoSEC(lng);

    // Axillary values (% Bern)
    const lat_aux = (lat - 169028.66) / 10000;
    const lng_aux = (lng - 26782.5) / 10000;

    // Process X
    const x =
      200147.07 +
      308807.95 * lat_aux +
      3745.25 * Math.pow(lng_aux, 2) +
      76.63 * Math.pow(lat_aux, 2) -
      194.56 * Math.pow(lng_aux, 2) * lat_aux +
      119.79 * Math.pow(lat_aux, 3);

    return x;
  }

  // Convert CH y/x to WGS lat
  function CHtoWGSlat(y, x) {
    // Converts military to civil and to unit = 1000km
    // Axillary values (% Bern)
    const y_aux = (y - 600000) / 1000000;
    const x_aux = (x - 200000) / 1000000;

    // Process lat
    let lat =
      16.9023892 +
      3.238272 * x_aux -
      0.270978 * Math.pow(y_aux, 2) -
      0.002528 * Math.pow(x_aux, 2) -
      0.0447 * Math.pow(y_aux, 2) * x_aux -
      0.014 * Math.pow(x_aux, 3);

    // Unit 10000" to 1 " and converts seconds to degrees (dec)
    lat = (lat * 100) / 36;

    return lat;
  }

  // Convert CH y/x to WGS long
  function CHtoWGSlng(y, x) {
    // Converts military to civil and to unit = 1000km
    // Axillary values (% Bern)
    const y_aux = (y - 600000) / 1000000;
    const x_aux = (x - 200000) / 1000000;

    // Process long
    let lng =
      2.6779094 +
      4.728982 * y_aux +
      0.791484 * y_aux * x_aux +
      0.1306 * y_aux * Math.pow(x_aux, 2) -
      0.0436 * Math.pow(y_aux, 3);

    // Unit 10000" to 1 " and converts seconds to degrees (dec)
    lng = (lng * 100) / 36;

    return lng;
  }

  // Convert DEC angle to SEX DMS
  function DECtoSEX(angle) {
    // Extract DMS
    const deg = parseInt(angle, 10);
    const min = parseInt((angle - deg) * 60, 10);
    const sec = ((angle - deg) * 60 - min) * 60;

    // Result in degrees sex (dd.mmss)
    return deg + min / 100 + sec / 10000;
  }

  // Convert Degrees angle to seconds
  function DEGtoSEC(angle) {
    // Extract DMS
    const deg = parseInt(angle, 10);
    let min = parseInt((angle - deg) * 100, 10);
    let sec = ((angle - deg) * 100 - min) * 100;

    // Avoid rounding problems with seconds=0
    const parts = String(angle).split('.');
    if (parts.length == 2 && parts[1].length == 2) {
      min = Number(parts[1]);
      sec = 0;
    }

    // Result in degrees sex (dd.mmss)
    return sec + min * 60 + deg * 3600;
  }
`,Se=`
  {
    "name": "wms-custom-proj",
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
`;const f=p=>(oe("data-v-7dfbf61d"),p=p(),ae(),p),xe={id:"title"},Ee=f(()=>g("div",{id:"map",class:"map"},null,-1)),we=f(()=>g("p",null,[W("With "),g("code",null,"addCoordinateTransforms()"),W(", custom coordinate transform functions can be added to configured projections.")],-1)),ye=f(()=>g("h5",{class:"source-heading"},"html",-1)),ve={class:"language-html"},Te=f(()=>g("h5",{class:"source-heading"},"css",-1)),Me={class:"language-css"},be=f(()=>g("h5",{class:"source-heading"},"js",-1)),Ce={class:"language-js"},je=f(()=>g("h5",{class:"source-heading"},"package.json",-1)),Pe={class:"language-json"},Re={__name:"index",setup(p){return se(()=>{const e=new Y({code:"EPSG:21781",extent:[485869.5728,76443.1884,837076.5648,299941.7864],units:"m"});$(e),z("EPSG:4326",e,function(t){return[n(t[1],t[0]),c(t[1],t[0])]},function(t){return[d(t[0],t[1]),r(t[0],t[1])]});const s=[42e4,3e4,9e5,35e4],o=[new R({extent:s,source:new L({url:"https://wms.geo.admin.ch/",crossOrigin:"anonymous",attributions:'© <a href="https://shop.swisstopo.admin.ch/en/products/maps/national/lk1000"target="_blank">Pixelmap 1:1000000 / geo.admin.ch</a>',params:{LAYERS:"ch.swisstopo.pixelkarte-farbe-pk1000.noscale",FORMAT:"image/jpeg"},serverType:"mapserver"})}),new R({extent:s,source:new L({url:"https://wms.geo.admin.ch/",crossOrigin:"anonymous",attributions:'© <a href="https://www.hydrodaten.admin.ch/en/notes-on-the-flood-alert-maps.html"target="_blank">Flood Alert / geo.admin.ch</a>',params:{LAYERS:"ch.bafu.hydroweb-warnkarte_national"},serverType:"mapserver"})})];new q({controls:K().extend([new me({units:"metric"})]),layers:o,target:"map",view:new Q({projection:e,center:I([8.23,46.86],"EPSG:4326","EPSG:21781"),extent:s,zoom:2})});function n(t,a){t=u(t),a=u(a),t=m(t),a=m(a);const l=(t-169028.66)/1e4,i=(a-26782.5)/1e4;return 600072.37+211455.93*i-10938.51*i*l-.36*i*Math.pow(l,2)-44.54*Math.pow(i,3)}function c(t,a){t=u(t),a=u(a),t=m(t),a=m(a);const l=(t-169028.66)/1e4,i=(a-26782.5)/1e4;return 200147.07+308807.95*l+3745.25*Math.pow(i,2)+76.63*Math.pow(l,2)-194.56*Math.pow(i,2)*l+119.79*Math.pow(l,3)}function r(t,a){const l=(t-6e5)/1e6,i=(a-2e5)/1e6;let h=16.9023892+3.238272*i-.270978*Math.pow(l,2)-.002528*Math.pow(i,2)-.0447*Math.pow(l,2)*i-.014*Math.pow(i,3);return h=h*100/36,h}function d(t,a){const l=(t-6e5)/1e6,i=(a-2e5)/1e6;let h=2.6779094+4.728982*l+.791484*l*i+.1306*l*Math.pow(i,2)-.0436*Math.pow(l,3);return h=h*100/36,h}function u(t){const a=parseInt(t,10),l=parseInt((t-a)*60,10),i=((t-a)*60-l)*60;return a+l/100+i/1e4}function m(t){const a=parseInt(t,10);let l=parseInt((t-a)*100,10),i=((t-a)*100-l)*100;const h=String(t).split(".");return h.length==2&&h[1].length==2&&(l=Number(h[1]),i=0),i+l*60+a*3600}Prism.highlightAll()}),(e,s)=>(ne(),re(ie,null,[g("h4",xe,x(E(pe)),1),Ee,we,ye,g("pre",null,[g("code",ve,x("  "+E(ge).trim()),1)]),Te,g("pre",null,[g("code",Me,x("  "+E(_e).trim()),1)]),be,g("pre",null,[g("code",Ce,x("  "+E(fe).trim()),1)]),je,g("pre",null,[g("code",Pe,x("  "+E(Se).trim()),1)])],64))}},Be=te(Re,[["__scopeId","data-v-7dfbf61d"]]);export{Be as default};
