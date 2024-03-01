import{y as M,G as L,z as x,B as C,c_ as g,cV as b,L as N,dq as _,K as F,M as S,d as k,V as I,f as A}from"./Layer-3b715193.js";import{O}from"./OSM-f0f00429.js";import{T as W}from"./Tile-70490af9.js";import{_ as B,i as R,o as j,c as U,b as n,t as r,g as c,F as q,p as D,k as K}from"./index-92068577.js";import"./XYZ-80208d03.js";import"./TileImage-1df58d67.js";import"./TileProperty-e33ea24b.js";import"./UrlTile-dc2c26ed.js";import"./BaseTile-8ab94efc.js";import"./TileLayer-7c629c64.js";import"./Layer-37ea9c2e.js";const f=["fullscreenchange","webkitfullscreenchange","MSFullscreenChange"],v={ENTERFULLSCREEN:"enterfullscreen",LEAVEFULLSCREEN:"leavefullscreen"};class V extends M{constructor(e){e=e||{},super({element:document.createElement("div"),target:e.target}),this.on,this.once,this.un,this.keys_=e.keys!==void 0?e.keys:!1,this.source_=e.source,this.isInFullscreen_=!1,this.boundHandleMapTargetChange_=this.handleMapTargetChange_.bind(this),this.cssClassName_=e.className!==void 0?e.className:"ol-full-screen",this.documentListeners_=[],this.activeClassName_=e.activeClassName!==void 0?e.activeClassName.split(" "):[this.cssClassName_+"-true"],this.inactiveClassName_=e.inactiveClassName!==void 0?e.inactiveClassName.split(" "):[this.cssClassName_+"-false"];const s=e.label!==void 0?e.label:"⤢";this.labelNode_=typeof s=="string"?document.createTextNode(s):s;const a=e.labelActive!==void 0?e.labelActive:"×";this.labelActiveNode_=typeof a=="string"?document.createTextNode(a):a;const i=e.tipLabel?e.tipLabel:"Toggle full-screen";this.button_=document.createElement("button"),this.button_.title=i,this.button_.setAttribute("type","button"),this.button_.appendChild(this.labelNode_),this.button_.addEventListener(L.CLICK,this.handleClick_.bind(this),!1),this.setClassName_(this.button_,this.isInFullscreen_),this.element.className=`${this.cssClassName_} ${x} ${C}`,this.element.appendChild(this.button_)}handleClick_(e){e.preventDefault(),this.handleFullScreen_()}handleFullScreen_(){const e=this.getMap();if(!e)return;const s=e.getOwnerDocument();if(w(s))if(y(s))P(s);else{let a;this.source_?a=typeof this.source_=="string"?s.getElementById(this.source_):this.source_:a=e.getTargetElement(),this.keys_?H(a):E(a)}}handleFullScreenChange_(){const e=this.getMap();if(!e)return;const s=this.isInFullscreen_;this.isInFullscreen_=y(e.getOwnerDocument()),s!==this.isInFullscreen_&&(this.setClassName_(this.button_,this.isInFullscreen_),this.isInFullscreen_?(g(this.labelActiveNode_,this.labelNode_),this.dispatchEvent(v.ENTERFULLSCREEN)):(g(this.labelNode_,this.labelActiveNode_),this.dispatchEvent(v.LEAVEFULLSCREEN)),e.updateSize())}setClassName_(e,s){s?(e.classList.remove(...this.inactiveClassName_),e.classList.add(...this.activeClassName_)):(e.classList.remove(...this.activeClassName_),e.classList.add(...this.inactiveClassName_))}setMap(e){const s=this.getMap();s&&s.removeChangeListener(b.TARGET,this.boundHandleMapTargetChange_),super.setMap(e),this.handleMapTargetChange_(),e&&e.addChangeListener(b.TARGET,this.boundHandleMapTargetChange_)}handleMapTargetChange_(){const e=this.documentListeners_;for(let a=0,i=e.length;a<i;++a)N(e[a]);e.length=0;const s=this.getMap();if(s){const a=s.getOwnerDocument();w(a)?this.element.classList.remove(_):this.element.classList.add(_);for(let i=0,d=f.length;i<d;++i)e.push(F(a,f[i],this.handleFullScreenChange_,this));this.handleFullScreenChange_()}}}function w(t){const e=t.body;return!!(e.webkitRequestFullscreen||e.requestFullscreen&&t.fullscreenEnabled)}function y(t){return!!(t.webkitIsFullScreen||t.fullscreenElement)}function E(t){t.requestFullscreen?t.requestFullscreen():t.webkitRequestFullscreen&&t.webkitRequestFullscreen()}function H(t){t.webkitRequestFullscreen?t.webkitRequestFullscreen():E(t)}function P(t){t.exitFullscreen?t.exitFullscreen():t.webkitExitFullscreen&&t.webkitExitFullscreen()}const z=V,G="Extent Interaction",$=`
  <div id="map" class="map"></div>
  <input id="external-map-button" type="button" value="Open external map">
  <span id="blocker-notice" hidden>Could not open map in external window. If you are using a popup or ad blocker you may need to disable it for this example.</span>
`,Y=`
  .map {
    width: 100%;
    height: 400px;
  }
`,J=`
  import Map from 'ol/Map.js';
  import OSM from 'ol/source/OSM.js';
  import TileLayer from 'ol/layer/Tile.js';
  import View from 'ol/View.js';
  import {
    Control,
    FullScreen,
    defaults as defaultControls,
  } from 'ol/control.js';
  import {fromLonLat} from 'ol/proj.js';

  class UnusableMask extends Control {
    constructor() {
      super({
        element: document.createElement('div'),
      });
      this.element.setAttribute('hidden', 'hidden');
      this.element.className = 'ol-mask';
      this.element.innerHTML = '<div>Map not usable</div>';
    }
  }

  const localMapTarget = document.getElementById('map');

  const map = new Map({
    target: localMapTarget,
    controls: defaultControls().extend([new FullScreen(), new UnusableMask()]),
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
    ],
    view: new View({
      center: fromLonLat([37.41, 8.82]),
      zoom: 4,
    }),
  });

  let mapWindow;
  function closeMapWindow() {
    if (mapWindow) {
      mapWindow.close();
      mapWindow = undefined;
    }
  }
  // Close external window in case the main page is closed or reloaded
  window.addEventListener('pagehide', closeMapWindow);

  const button = document.getElementById('external-map-button');

  function resetMapTarget() {
    localMapTarget.style.height = '';
    map.setTarget(localMapTarget);
    button.disabled = false;
  }

  function updateOverlay() {
    if (!mapWindow) {
      return;
    }
    const externalMapTarget = mapWindow.document.getElementById('map');
    if (!externalMapTarget) {
      return;
    }
    if (document.visibilityState === 'visible') {
      // Show controls and enable keyboard input
      externalMapTarget.classList.remove('unusable');
      externalMapTarget.setAttribute('tabindex', '0');
      externalMapTarget.focus();
    } else {
      // Hide all controls and disable keyboard input
      externalMapTarget.removeAttribute('tabindex');
      externalMapTarget.classList.add('unusable');
    }
  }
  window.addEventListener('visibilitychange', updateOverlay);

  button.addEventListener('click', function () {
    const blockerNotice = document.getElementById('blocker-notice');
    blockerNotice.setAttribute('hidden', 'hidden');
    button.disabled = true;

    // Reset button and map target in case window did not load or open
    let timeoutKey = setTimeout(function () {
      closeMapWindow();
      resetMapTarget();
      blockerNotice.removeAttribute('hidden');
      timeoutKey = undefined;
    }, 3000);

    mapWindow = window.open(
      'resources/external-map-map.html',
      'MapWindow',
      'toolbar=0,location=0,menubar=0,width=800,height=600',
    );
    mapWindow.addEventListener('DOMContentLoaded', function () {
      const externalMapTarget = mapWindow.document.getElementById('map');
      localMapTarget.style.height = '0px';
      map.setTarget(externalMapTarget);

      if (timeoutKey) {
        timeoutKey = clearTimeout(timeoutKey);
      }
      mapWindow.addEventListener('pagehide', function () {
        resetMapTarget();
        // Close window in case user does a page reload
        closeMapWindow();
      });

      updateOverlay();
    });
  });
`,Q=`
  {
    "name": "external-map",
    "dependencies": {
      "ol": "9.0.0"
    },
    "devDependencies": {
      "vite": "^3.2.3"
    },
    "scripts": {
      "start": "vite",
      "build": "vite build"
    }
  }
`,X=`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Map</title>
    <link rel="stylesheet" type="text/css" href="../theme/ol.css">
    <style>
      body {
        margin: 0;
      }
      .map {
        height: 100vh;
        width: 100vw;
      }
      .map.unusable .ol-mask {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        user-select: none;
        background-color: rgba(0, 0, 0, .7);
        color: white;
        font: bold 3rem 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      }
      .map.unusable .ol-control {
        display: none;
      }
    </style>
  </head>
  <body>
    <div id="map" class="map"></div>
  </body>
</html>
`;const o=t=>(D("data-v-569ce41a"),t=t(),K(),t),Z={id:"title"},ee=o(()=>n("div",{id:"map",class:"map"},null,-1)),te=o(()=>n("input",{id:"external-map-button",type:"button",value:"Open external map"},null,-1)),se=o(()=>n("span",{id:"blocker-notice",hidden:""},"Could not open map in external window. If you are using a popup or ad blocker you may need to disable it for this example.",-1)),ne=o(()=>n("p",null,"Move a map to a separate window.",-1)),ae=o(()=>n("h5",{class:"source-heading"},"html",-1)),ie={class:"language-html"},le=o(()=>n("h5",{class:"source-heading"},"css",-1)),oe={class:"language-css"},re=o(()=>n("h5",{class:"source-heading"},"js",-1)),ce={class:"language-js"},de=o(()=>n("h5",{class:"source-heading"},"resources/external-map-map.html",-1)),ue={class:"language-html"},me=o(()=>n("h5",{class:"source-heading"},"package.json",-1)),he={class:"language-json"},pe={__name:"index",setup(t){return R(()=>{class e extends M{constructor(){super({element:document.createElement("div")}),this.element.setAttribute("hidden","hidden"),this.element.className="ol-mask",this.element.innerHTML="<div>Map not usable</div>"}}const s=document.getElementById("map"),a=new S({target:s,controls:k().extend([new z,new e]),layers:[new W({source:new O})],view:new I({center:A([37.41,8.82]),zoom:4})});let i;function d(){i&&(i.close(),i=void 0)}window.addEventListener("pagehide",d);const m=document.getElementById("external-map-button");function h(){s.style.height="",a.setTarget(s),m.disabled=!1}function p(){if(!i)return;const l=i.document.getElementById("map");l&&(document.visibilityState==="visible"?(l.classList.remove("unusable"),l.setAttribute("tabindex","0"),l.focus()):(l.removeAttribute("tabindex"),l.classList.add("unusable")))}window.addEventListener("visibilitychange",p),m.addEventListener("click",function(){const l=document.getElementById("blocker-notice");l.setAttribute("hidden","hidden"),m.disabled=!0;let u=setTimeout(function(){d(),h(),l.removeAttribute("hidden"),u=void 0},3e3);i=window.open("resources/external-map-map.html","MapWindow","toolbar=0,location=0,menubar=0,width=800,height=600"),i.addEventListener("DOMContentLoaded",function(){const T=i.document.getElementById("map");s.style.height="0px",a.setTarget(T),u&&(u=clearTimeout(u)),i.addEventListener("pagehide",function(){h(),d()}),p()})}),Prism.highlightAll()}),(e,s)=>(j(),U(q,null,[n("h4",Z,r(c(G)),1),ee,te,se,ne,ae,n("pre",null,[n("code",ie,r("  "+c($).trim()),1)]),le,n("pre",null,[n("code",oe,r("  "+c(Y).trim()),1)]),re,n("pre",null,[n("code",ce,r("  "+c(J).trim()),1)]),de,n("pre",null,[n("code",ue,r("  "+c(X).trim()),1)]),me,n("pre",null,[n("code",he,r("  "+c(Q).trim()),1)])],64))}},xe=B(pe,[["__scopeId","data-v-569ce41a"]]);export{xe as default};
