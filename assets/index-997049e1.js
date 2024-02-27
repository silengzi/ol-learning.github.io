import{bR as k,cp as D,cq as j,cr as K,G as Y,F as N,cs as A,ct as G,cu as H,aO as B,C as $,E as X,M as W,bT as L,w as Z,x as q,cv as V,bU as U,cw as C,V as z,cx as R,a2 as J,a1 as Q,aa as ee,cy as te,cz as se,cA as ie,cB as I,d as ne,K as oe}from"./Layer-3211d6ef.js";import{O as S}from"./OSM-39b8e613.js";import{T}from"./Tile-d932c51d.js";import{_ as ae,i as le,o as re,c as ce,b as l,t as w,g as b,F as de,p as he,k as pe,d as me}from"./index-8e73cb60.js";import{D as ue}from"./DragRotateAndZoom-8466e383.js";import"./XYZ-2a4e8198.js";import"./TileImage-a70beb77.js";import"./TileProperty-f0a52f17.js";import"./UrlTile-7d5bd7ce.js";import"./BaseTile-47530170.js";import"./TileLayer-d6ace1df.js";import"./Layer-8f64fa5e.js";const c={ELEMENT:"element",MAP:"map",OFFSET:"offset",POSITION:"position",POSITIONING:"positioning"};class ge extends k{constructor(e){super(),this.on,this.once,this.un,this.options=e,this.id=e.id,this.insertFirst=e.insertFirst!==void 0?e.insertFirst:!0,this.stopEvent=e.stopEvent!==void 0?e.stopEvent:!0,this.element=document.createElement("div"),this.element.className=e.className!==void 0?e.className:"ol-overlay-container "+D,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.autoPan=e.autoPan===!0?{}:e.autoPan||void 0,this.rendered={transform_:"",visible:!0},this.mapPostrenderListenerKey=null,this.addChangeListener(c.ELEMENT,this.handleElementChanged),this.addChangeListener(c.MAP,this.handleMapChanged),this.addChangeListener(c.OFFSET,this.handleOffsetChanged),this.addChangeListener(c.POSITION,this.handlePositionChanged),this.addChangeListener(c.POSITIONING,this.handlePositioningChanged),e.element!==void 0&&this.setElement(e.element),this.setOffset(e.offset!==void 0?e.offset:[0,0]),this.setPositioning(e.positioning||"top-left"),e.position!==void 0&&this.setPosition(e.position)}getElement(){return this.get(c.ELEMENT)}getId(){return this.id}getMap(){return this.get(c.MAP)||null}getOffset(){return this.get(c.OFFSET)}getPosition(){return this.get(c.POSITION)}getPositioning(){return this.get(c.POSITIONING)}handleElementChanged(){j(this.element);const e=this.getElement();e&&this.element.appendChild(e)}handleMapChanged(){this.mapPostrenderListenerKey&&(K(this.element),Y(this.mapPostrenderListenerKey),this.mapPostrenderListenerKey=null);const e=this.getMap();if(e){this.mapPostrenderListenerKey=N(e,A.POSTRENDER,this.render,this),this.updatePixelPosition();const t=this.stopEvent?e.getOverlayContainerStopEvent():e.getOverlayContainer();this.insertFirst?t.insertBefore(this.element,t.childNodes[0]||null):t.appendChild(this.element),this.performAutoPan()}}render(){this.updatePixelPosition()}handleOffsetChanged(){this.updatePixelPosition()}handlePositionChanged(){this.updatePixelPosition(),this.performAutoPan()}handlePositioningChanged(){this.updatePixelPosition()}setElement(e){this.set(c.ELEMENT,e)}setMap(e){this.set(c.MAP,e)}setOffset(e){this.set(c.OFFSET,e)}setPosition(e){this.set(c.POSITION,e)}performAutoPan(){this.autoPan&&this.panIntoView(this.autoPan)}panIntoView(e){const t=this.getMap();if(!t||!t.getTargetElement()||!this.get(c.POSITION))return;const i=this.getRect(t.getTargetElement(),t.getSize()),n=this.getElement(),s=this.getRect(n,[G(n),H(n)]);e=e||{};const r=e.margin===void 0?20:e.margin;if(!B(i,s)){const d=s[0]-i[0],o=i[2]-s[2],h=s[1]-i[1],p=i[3]-s[3],a=[0,0];if(d<0?a[0]=d-r:o<0&&(a[0]=Math.abs(o)+r),h<0?a[1]=h-r:p<0&&(a[1]=Math.abs(p)+r),a[0]!==0||a[1]!==0){const u=t.getView().getCenterInternal(),m=t.getPixelFromCoordinateInternal(u);if(!m)return;const g=[m[0]+a[0],m[1]+a[1]],x=e.animation||{};t.getView().animateInternal({center:t.getCoordinateFromPixelInternal(g),duration:x.duration,easing:x.easing})}}}getRect(e,t){const i=e.getBoundingClientRect(),n=i.left+window.pageXOffset,s=i.top+window.pageYOffset;return[n,s,n+t[0],s+t[1]]}setPositioning(e){this.set(c.POSITIONING,e)}setVisible(e){this.rendered.visible!==e&&(this.element.style.display=e?"":"none",this.rendered.visible=e)}updatePixelPosition(){const e=this.getMap(),t=this.getPosition();if(!e||!e.isRendered()||!t){this.setVisible(!1);return}const i=e.getPixelFromCoordinate(t),n=e.getSize();this.updateRenderedPosition(i,n)}updateRenderedPosition(e,t){const i=this.element.style,n=this.getOffset(),s=this.getPositioning();this.setVisible(!0);const r=Math.round(e[0]+n[0])+"px",d=Math.round(e[1]+n[1])+"px";let o="0%",h="0%";s=="bottom-right"||s=="center-right"||s=="top-right"?o="-100%":(s=="bottom-center"||s=="center-center"||s=="top-center")&&(o="-50%"),s=="bottom-left"||s=="bottom-center"||s=="bottom-right"?h="-100%":(s=="center-left"||s=="center-center"||s=="center-right")&&(h="-50%");const p=`translate(${o}, ${h}) translate(${r}, ${d})`;this.rendered.transform_!=p&&(this.rendered.transform_=p,i.transform=p)}getOptions(){return this.options}}const ve=ge,P=.75,E=.1;class fe extends ${constructor(e){e=e||{},super({element:document.createElement("div"),render:e.render,target:e.target}),this.boundHandleRotationChanged_=this.handleRotationChanged_.bind(this),this.collapsed_=e.collapsed!==void 0?e.collapsed:!0,this.collapsible_=e.collapsible!==void 0?e.collapsible:!0,this.collapsible_||(this.collapsed_=!1),this.rotateWithView_=e.rotateWithView!==void 0?e.rotateWithView:!1,this.viewExtent_=void 0;const t=e.className!==void 0?e.className:"ol-overviewmap",i=e.tipLabel!==void 0?e.tipLabel:"Overview map",n=e.collapseLabel!==void 0?e.collapseLabel:"‹";typeof n=="string"?(this.collapseLabel_=document.createElement("span"),this.collapseLabel_.textContent=n):this.collapseLabel_=n;const s=e.label!==void 0?e.label:"›";typeof s=="string"?(this.label_=document.createElement("span"),this.label_.textContent=s):this.label_=s;const r=this.collapsible_&&!this.collapsed_?this.collapseLabel_:this.label_,d=document.createElement("button");d.setAttribute("type","button"),d.title=i,d.appendChild(r),d.addEventListener(X.CLICK,this.handleClick_.bind(this),!1),this.ovmapDiv_=document.createElement("div"),this.ovmapDiv_.className="ol-overviewmap-map",this.view_=e.view;const o=new W({view:e.view,controls:new L,interactions:new L});this.ovmap_=o,e.layers&&e.layers.forEach(function(v){o.addLayer(v)});const h=document.createElement("div");h.className="ol-overviewmap-box",h.style.boxSizing="border-box",this.boxOverlay_=new ve({position:[0,0],positioning:"center-center",element:h}),this.ovmap_.addOverlay(this.boxOverlay_);const p=t+" "+Z+" "+q+(this.collapsed_&&this.collapsible_?" "+V:"")+(this.collapsible_?"":" ol-uncollapsible"),a=this.element;a.className=p,a.appendChild(this.ovmapDiv_),a.appendChild(d);const u=this,m=this.boxOverlay_,g=this.boxOverlay_.getElement(),x=function(v){return{clientX:v.clientX,clientY:v.clientY}},O=function(v){const y=x(v),F=o.getEventCoordinateInternal(y);m.setPosition(F)},M=function(v){const y=o.getEventCoordinateInternal(v);u.getMap().getView().setCenterInternal(y),window.removeEventListener("mousemove",O),window.removeEventListener("mouseup",M)};g.addEventListener("mousedown",function(){window.addEventListener("mousemove",O),window.addEventListener("mouseup",M)})}setMap(e){const t=this.getMap();if(e!==t){if(t){const i=t.getView();i&&this.unbindView_(i),this.ovmap_.setTarget(null)}if(super.setMap(e),e){this.ovmap_.setTarget(this.ovmapDiv_),this.listenerKeys.push(N(e,U.PROPERTYCHANGE,this.handleMapPropertyChange_,this));const i=e.getView();i&&(this.bindView_(i),i.isDef()&&(this.ovmap_.updateSize(),this.resetExtent_())),this.ovmap_.isRendered()||this.updateBoxAfterOvmapIsRendered_()}}}handleMapPropertyChange_(e){if(e.key===C.VIEW){const t=e.oldValue;t&&this.unbindView_(t);const i=this.getMap().getView();this.bindView_(i)}else!this.ovmap_.isRendered()&&(e.key===C.TARGET||e.key===C.SIZE)&&this.ovmap_.updateSize()}bindView_(e){if(!this.view_){const t=new z({projection:e.getProjection()});this.ovmap_.setView(t)}e.addChangeListener(R.ROTATION,this.boundHandleRotationChanged_),this.handleRotationChanged_()}unbindView_(e){e.removeChangeListener(R.ROTATION,this.boundHandleRotationChanged_)}handleRotationChanged_(){this.rotateWithView_&&this.ovmap_.getView().setRotation(this.getMap().getView().getRotation())}validateExtent_(){const e=this.getMap(),t=this.ovmap_;if(!e.isRendered()||!t.isRendered())return;const i=e.getSize(),s=e.getView().calculateExtentInternal(i);if(this.viewExtent_&&J(s,this.viewExtent_))return;this.viewExtent_=s;const r=t.getSize(),o=t.getView().calculateExtentInternal(r),h=t.getPixelFromCoordinateInternal(Q(s)),p=t.getPixelFromCoordinateInternal(ee(s)),a=Math.abs(h[0]-p[0]),u=Math.abs(h[1]-p[1]),m=r[0],g=r[1];a<m*E||u<g*E||a>m*P||u>g*P?this.resetExtent_():B(o,s)||this.recenter_()}resetExtent_(){const e=this.getMap(),t=this.ovmap_,i=e.getSize(),s=e.getView().calculateExtentInternal(i),r=t.getView(),d=Math.log(P/E)/Math.LN2,o=1/(Math.pow(2,d/2)*E);te(s,o),r.fitInternal(se(s))}recenter_(){const e=this.getMap(),t=this.ovmap_,i=e.getView();t.getView().setCenterInternal(i.getCenterInternal())}updateBox_(){const e=this.getMap(),t=this.ovmap_;if(!e.isRendered()||!t.isRendered())return;const i=e.getSize(),n=e.getView(),s=t.getView(),r=this.rotateWithView_?0:-n.getRotation(),d=this.boxOverlay_,o=this.boxOverlay_.getElement(),h=n.getCenterInternal(),p=n.getResolution(),a=s.getResolution(),u=i[0]*p/a,m=i[1]*p/a;if(d.setPosition(h),o){o.style.width=u+"px",o.style.height=m+"px";const g="rotate("+r+"rad)";o.style.transform=g}}updateBoxAfterOvmapIsRendered_(){this.ovmapPostrenderKey_||(this.ovmapPostrenderKey_=ie(this.ovmap_,A.POSTRENDER,function(e){delete this.ovmapPostrenderKey_,this.updateBox_()},this))}handleClick_(e){e.preventDefault(),this.handleToggle_()}handleToggle_(){this.element.classList.toggle(V),this.collapsed_?I(this.collapseLabel_,this.label_):I(this.label_,this.collapseLabel_),this.collapsed_=!this.collapsed_;const e=this.ovmap_;if(!this.collapsed_){if(e.isRendered()){this.viewExtent_=void 0,e.render();return}e.updateSize(),this.resetExtent_(),this.updateBoxAfterOvmapIsRendered_()}}getCollapsible(){return this.collapsible_}setCollapsible(e){this.collapsible_!==e&&(this.collapsible_=e,this.element.classList.toggle("ol-uncollapsible"),!e&&this.collapsed_&&this.handleToggle_())}setCollapsed(e){!this.collapsible_||this.collapsed_===e||this.handleToggle_()}getCollapsed(){return this.collapsed_}getRotateWithView(){return this.rotateWithView_}setRotateWithView(e){this.rotateWithView_!==e&&(this.rotateWithView_=e,this.getMap().getView().getRotation()!==0&&(this.rotateWithView_?this.handleRotationChanged_():this.ovmap_.getView().setRotation(0),this.viewExtent_=void 0,this.validateExtent_(),this.updateBox_()))}getOverviewMap(){return this.ovmap_}render(e){this.validateExtent_(),this.updateBox_()}}const _e=fe,we="Custom Overview Map",be=`
  <div id="map" class="map"></div>
  <div><label><input type="checkbox" id="rotateWithView"> Rotate with view</label></div>
`,xe=`
  .map {
    width: 100%;
    height: 400px;
  }

  .map .ol-custom-overviewmap,
  .map .ol-custom-overviewmap.ol-uncollapsible {
    bottom: auto;
    left: auto;
    right: 0;
    top: 0;
  }

  .map .ol-custom-overviewmap:not(.ol-collapsed)  {
    border: 1px solid black;
  }

  .map .ol-custom-overviewmap .ol-overviewmap-map {
    border: none;
    width: 300px;
  }

  .map .ol-custom-overviewmap .ol-overviewmap-box {
    border: 2px solid red;
  }

  .map .ol-custom-overviewmap:not(.ol-collapsed) button{
    bottom: auto;
    left: auto;
    right: 1px;
    top: 1px;
  }

  .map .ol-rotate {
    top: 170px;
    right: 0;
  }
`,Ee=`
  import Map from 'ol/Map.js';
  import OSM from 'ol/source/OSM.js';
  import TileLayer from 'ol/layer/Tile.js';
  import View from 'ol/View.js';
  import {
    DragRotateAndZoom,
    defaults as defaultInteractions,
  } from 'ol/interaction.js';
  import {OverviewMap, defaults as defaultControls} from 'ol/control.js';

  const rotateWithView = document.getElementById('rotateWithView');

  const overviewMapControl = new OverviewMap({
    // see in overviewmap-custom.html to see the custom CSS used
    className: 'ol-overviewmap ol-custom-overviewmap',
    layers: [
      new TileLayer({
        source: new OSM({
          'url':
            'https://{a-c}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png' +
            '?apikey=Your API key from https://www.thunderforest.com/docs/apikeys/ here',
        }),
      }),
    ],
    collapseLabel: '»',
    label: '«',
    collapsed: false,
  });

  rotateWithView.addEventListener('change', function () {
    overviewMapControl.setRotateWithView(this.checked);
  });

  const map = new Map({
    controls: defaultControls().extend([overviewMapControl]),
    interactions: defaultInteractions().extend([new DragRotateAndZoom()]),
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
    ],
    target: 'map',
    view: new View({
      center: [500000, 6000000],
      zoom: 7,
    }),
  });
`,ye=`
  {
    "name": "overviewmap-custom",
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
`;const f=_=>(he("data-v-dd7e3c09"),_=_(),pe(),_),Ce={id:"title"},Pe=f(()=>l("div",{id:"map",class:"map"},null,-1)),Oe=f(()=>l("div",null,[l("label",null,[l("input",{type:"checkbox",id:"rotateWithView"}),me(" Rotate with view")])],-1)),Me=f(()=>l("p",null,"This example demonstrates how you can customize the overviewmap control using its supported options as well as defining custom CSS. You can also rotate the map using the shift key to see how the overview map reacts.",-1)),Le=f(()=>l("h5",{class:"source-heading"},"html",-1)),Ve={class:"language-html"},Re=f(()=>l("h5",{class:"source-heading"},"css",-1)),Ie={class:"language-css"},Se=f(()=>l("h5",{class:"source-heading"},"js",-1)),Te={class:"language-js"},Ne=f(()=>l("h5",{class:"source-heading"},"package.json",-1)),Ae={class:"language-json"},Be={__name:"index",setup(_){return le(()=>{const e=document.getElementById("rotateWithView"),t=new _e({className:"ol-overviewmap ol-custom-overviewmap",layers:[new T({source:new S({url:"https://{a-c}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=eec3b356356248ab93334fd724ccb404"})})],collapseLabel:"»",label:"«",collapsed:!1});e.addEventListener("change",function(){t.setRotateWithView(this.checked)}),new W({controls:ne().extend([t]),interactions:oe().extend([new ue]),layers:[new T({source:new S})],target:"map",view:new z({center:[5e5,6e6],zoom:7})}),Prism.highlightAll()}),(e,t)=>(re(),ce(de,null,[l("h4",Ce,w(b(we)),1),Pe,Oe,Me,Le,l("pre",null,[l("code",Ve,w("  "+b(be).trim()),1)]),Re,l("pre",null,[l("code",Ie,w("  "+b(xe).trim()),1)]),Se,l("pre",null,[l("code",Te,w("  "+b(Ee).trim()),1)]),Ne,l("pre",null,[l("code",Ae,w("  "+b(ye).trim()),1)])],64))}},Ze=ae(Be,[["__scopeId","data-v-dd7e3c09"]]);export{Ze as default};
