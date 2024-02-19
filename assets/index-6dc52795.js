import{c6 as F,co as j,cp as K,cq as Y,a4 as $,a3 as A,cr as z,cs as H,ct as X,c as D,Z as G,E as Z,M as W,C as L,_ as q,$ as U,cu as S,c8 as J,cv as C,V as k,cw as V,ax as Q,aw as ee,aE as te,cx as se,cy as ie,cz as ne,cA as R,ak as oe,k as ae,cB as P,b as le,a9 as re}from"./Layer-bb290663.js";import{O as T}from"./OSM-f492dcb0.js";import{T as N}from"./Tile-ca35e04d.js";import{_ as de,i as ce,o as he,c as pe,b as c,t as w,g as b,F as me,p as ue,k as ge,d as ve}from"./index-ef54e607.js";import"./XYZ-a7932065.js";import"./TileImage-85165a6d.js";import"./TileProperty-b28dfc34.js";import"./UrlTile-a27ffc81.js";import"./BaseTile-7ba8ffb7.js";import"./TileLayer-d436536e.js";import"./Layer-1eda306a.js";const p={ELEMENT:"element",MAP:"map",OFFSET:"offset",POSITION:"position",POSITIONING:"positioning"};class fe extends F{constructor(e){super(),this.on,this.once,this.un,this.options=e,this.id=e.id,this.insertFirst=e.insertFirst!==void 0?e.insertFirst:!0,this.stopEvent=e.stopEvent!==void 0?e.stopEvent:!0,this.element=document.createElement("div"),this.element.className=e.className!==void 0?e.className:"ol-overlay-container "+j,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.autoPan=e.autoPan===!0?{}:e.autoPan||void 0,this.rendered={transform_:"",visible:!0},this.mapPostrenderListenerKey=null,this.addChangeListener(p.ELEMENT,this.handleElementChanged),this.addChangeListener(p.MAP,this.handleMapChanged),this.addChangeListener(p.OFFSET,this.handleOffsetChanged),this.addChangeListener(p.POSITION,this.handlePositionChanged),this.addChangeListener(p.POSITIONING,this.handlePositioningChanged),e.element!==void 0&&this.setElement(e.element),this.setOffset(e.offset!==void 0?e.offset:[0,0]),this.setPositioning(e.positioning||"top-left"),e.position!==void 0&&this.setPosition(e.position)}getElement(){return this.get(p.ELEMENT)}getId(){return this.id}getMap(){return this.get(p.MAP)||null}getOffset(){return this.get(p.OFFSET)}getPosition(){return this.get(p.POSITION)}getPositioning(){return this.get(p.POSITIONING)}handleElementChanged(){K(this.element);const e=this.getElement();e&&this.element.appendChild(e)}handleMapChanged(){this.mapPostrenderListenerKey&&(Y(this.element),$(this.mapPostrenderListenerKey),this.mapPostrenderListenerKey=null);const e=this.getMap();if(e){this.mapPostrenderListenerKey=A(e,z.POSTRENDER,this.render,this),this.updatePixelPosition();const t=this.stopEvent?e.getOverlayContainerStopEvent():e.getOverlayContainer();this.insertFirst?t.insertBefore(this.element,t.childNodes[0]||null):t.appendChild(this.element),this.performAutoPan()}}render(){this.updatePixelPosition()}handleOffsetChanged(){this.updatePixelPosition()}handlePositionChanged(){this.updatePixelPosition(),this.performAutoPan()}handlePositioningChanged(){this.updatePixelPosition()}setElement(e){this.set(p.ELEMENT,e)}setMap(e){this.set(p.MAP,e)}setOffset(e){this.set(p.OFFSET,e)}setPosition(e){this.set(p.POSITION,e)}performAutoPan(){this.autoPan&&this.panIntoView(this.autoPan)}panIntoView(e){const t=this.getMap();if(!t||!t.getTargetElement()||!this.get(p.POSITION))return;const i=this.getRect(t.getTargetElement(),t.getSize()),n=this.getElement(),s=this.getRect(n,[H(n),X(n)]);e=e||{};const a=e.margin===void 0?20:e.margin;if(!D(i,s)){const l=s[0]-i[0],o=i[2]-s[2],r=s[1]-i[1],h=i[3]-s[3],d=[0,0];if(l<0?d[0]=l-a:o<0&&(d[0]=Math.abs(o)+a),r<0?d[1]=r-a:h<0&&(d[1]=Math.abs(h)+a),d[0]!==0||d[1]!==0){const u=t.getView().getCenterInternal(),m=t.getPixelFromCoordinateInternal(u);if(!m)return;const g=[m[0]+d[0],m[1]+d[1]],x=e.animation||{};t.getView().animateInternal({center:t.getCoordinateFromPixelInternal(g),duration:x.duration,easing:x.easing})}}}getRect(e,t){const i=e.getBoundingClientRect(),n=i.left+window.pageXOffset,s=i.top+window.pageYOffset;return[n,s,n+t[0],s+t[1]]}setPositioning(e){this.set(p.POSITIONING,e)}setVisible(e){this.rendered.visible!==e&&(this.element.style.display=e?"":"none",this.rendered.visible=e)}updatePixelPosition(){const e=this.getMap(),t=this.getPosition();if(!e||!e.isRendered()||!t){this.setVisible(!1);return}const i=e.getPixelFromCoordinate(t),n=e.getSize();this.updateRenderedPosition(i,n)}updateRenderedPosition(e,t){const i=this.element.style,n=this.getOffset(),s=this.getPositioning();this.setVisible(!0);const a=Math.round(e[0]+n[0])+"px",l=Math.round(e[1]+n[1])+"px";let o="0%",r="0%";s=="bottom-right"||s=="center-right"||s=="top-right"?o="-100%":(s=="bottom-center"||s=="center-center"||s=="top-center")&&(o="-50%"),s=="bottom-left"||s=="bottom-center"||s=="bottom-right"?r="-100%":(s=="center-left"||s=="center-center"||s=="center-right")&&(r="-50%");const h=`translate(${o}, ${r}) translate(${a}, ${l})`;this.rendered.transform_!=h&&(this.rendered.transform_=h,i.transform=h)}getOptions(){return this.options}}const _e=fe,M=.75,E=.1;class we extends G{constructor(e){e=e||{},super({element:document.createElement("div"),render:e.render,target:e.target}),this.boundHandleRotationChanged_=this.handleRotationChanged_.bind(this),this.collapsed_=e.collapsed!==void 0?e.collapsed:!0,this.collapsible_=e.collapsible!==void 0?e.collapsible:!0,this.collapsible_||(this.collapsed_=!1),this.rotateWithView_=e.rotateWithView!==void 0?e.rotateWithView:!1,this.viewExtent_=void 0;const t=e.className!==void 0?e.className:"ol-overviewmap",i=e.tipLabel!==void 0?e.tipLabel:"Overview map",n=e.collapseLabel!==void 0?e.collapseLabel:"‹";typeof n=="string"?(this.collapseLabel_=document.createElement("span"),this.collapseLabel_.textContent=n):this.collapseLabel_=n;const s=e.label!==void 0?e.label:"›";typeof s=="string"?(this.label_=document.createElement("span"),this.label_.textContent=s):this.label_=s;const a=this.collapsible_&&!this.collapsed_?this.collapseLabel_:this.label_,l=document.createElement("button");l.setAttribute("type","button"),l.title=i,l.appendChild(a),l.addEventListener(Z.CLICK,this.handleClick_.bind(this),!1),this.ovmapDiv_=document.createElement("div"),this.ovmapDiv_.className="ol-overviewmap-map",this.view_=e.view;const o=new W({view:e.view,controls:new L,interactions:new L});this.ovmap_=o,e.layers&&e.layers.forEach(function(v){o.addLayer(v)});const r=document.createElement("div");r.className="ol-overviewmap-box",r.style.boxSizing="border-box",this.boxOverlay_=new _e({position:[0,0],positioning:"center-center",element:r}),this.ovmap_.addOverlay(this.boxOverlay_);const h=t+" "+q+" "+U+(this.collapsed_&&this.collapsible_?" "+S:"")+(this.collapsible_?"":" ol-uncollapsible"),d=this.element;d.className=h,d.appendChild(this.ovmapDiv_),d.appendChild(l);const u=this,m=this.boxOverlay_,g=this.boxOverlay_.getElement(),x=function(v){return{clientX:v.clientX,clientY:v.clientY}},O=function(v){const y=x(v),B=o.getEventCoordinateInternal(y);m.setPosition(B)},I=function(v){const y=o.getEventCoordinateInternal(v);u.getMap().getView().setCenterInternal(y),window.removeEventListener("mousemove",O),window.removeEventListener("mouseup",I)};g.addEventListener("mousedown",function(){window.addEventListener("mousemove",O),window.addEventListener("mouseup",I)})}setMap(e){const t=this.getMap();if(e!==t){if(t){const i=t.getView();i&&this.unbindView_(i),this.ovmap_.setTarget(null)}if(super.setMap(e),e){this.ovmap_.setTarget(this.ovmapDiv_),this.listenerKeys.push(A(e,J.PROPERTYCHANGE,this.handleMapPropertyChange_,this));const i=e.getView();i&&(this.bindView_(i),i.isDef()&&(this.ovmap_.updateSize(),this.resetExtent_())),this.ovmap_.isRendered()||this.updateBoxAfterOvmapIsRendered_()}}}handleMapPropertyChange_(e){if(e.key===C.VIEW){const t=e.oldValue;t&&this.unbindView_(t);const i=this.getMap().getView();this.bindView_(i)}else!this.ovmap_.isRendered()&&(e.key===C.TARGET||e.key===C.SIZE)&&this.ovmap_.updateSize()}bindView_(e){if(!this.view_){const t=new k({projection:e.getProjection()});this.ovmap_.setView(t)}e.addChangeListener(V.ROTATION,this.boundHandleRotationChanged_),this.handleRotationChanged_()}unbindView_(e){e.removeChangeListener(V.ROTATION,this.boundHandleRotationChanged_)}handleRotationChanged_(){this.rotateWithView_&&this.ovmap_.getView().setRotation(this.getMap().getView().getRotation())}validateExtent_(){const e=this.getMap(),t=this.ovmap_;if(!e.isRendered()||!t.isRendered())return;const i=e.getSize(),s=e.getView().calculateExtentInternal(i);if(this.viewExtent_&&Q(s,this.viewExtent_))return;this.viewExtent_=s;const a=t.getSize(),o=t.getView().calculateExtentInternal(a),r=t.getPixelFromCoordinateInternal(ee(s)),h=t.getPixelFromCoordinateInternal(te(s)),d=Math.abs(r[0]-h[0]),u=Math.abs(r[1]-h[1]),m=a[0],g=a[1];d<m*E||u<g*E||d>m*M||u>g*M?this.resetExtent_():D(o,s)||this.recenter_()}resetExtent_(){const e=this.getMap(),t=this.ovmap_,i=e.getSize(),s=e.getView().calculateExtentInternal(i),a=t.getView(),l=Math.log(M/E)/Math.LN2,o=1/(Math.pow(2,l/2)*E);se(s,o),a.fitInternal(ie(s))}recenter_(){const e=this.getMap(),t=this.ovmap_,i=e.getView();t.getView().setCenterInternal(i.getCenterInternal())}updateBox_(){const e=this.getMap(),t=this.ovmap_;if(!e.isRendered()||!t.isRendered())return;const i=e.getSize(),n=e.getView(),s=t.getView(),a=this.rotateWithView_?0:-n.getRotation(),l=this.boxOverlay_,o=this.boxOverlay_.getElement(),r=n.getCenterInternal(),h=n.getResolution(),d=s.getResolution(),u=i[0]*h/d,m=i[1]*h/d;if(l.setPosition(r),o){o.style.width=u+"px",o.style.height=m+"px";const g="rotate("+a+"rad)";o.style.transform=g}}updateBoxAfterOvmapIsRendered_(){this.ovmapPostrenderKey_||(this.ovmapPostrenderKey_=ne(this.ovmap_,z.POSTRENDER,function(e){delete this.ovmapPostrenderKey_,this.updateBox_()},this))}handleClick_(e){e.preventDefault(),this.handleToggle_()}handleToggle_(){this.element.classList.toggle(S),this.collapsed_?R(this.collapseLabel_,this.label_):R(this.label_,this.collapseLabel_),this.collapsed_=!this.collapsed_;const e=this.ovmap_;if(!this.collapsed_){if(e.isRendered()){this.viewExtent_=void 0,e.render();return}e.updateSize(),this.resetExtent_(),this.updateBoxAfterOvmapIsRendered_()}}getCollapsible(){return this.collapsible_}setCollapsible(e){this.collapsible_!==e&&(this.collapsible_=e,this.element.classList.toggle("ol-uncollapsible"),!e&&this.collapsed_&&this.handleToggle_())}setCollapsed(e){!this.collapsible_||this.collapsed_===e||this.handleToggle_()}getCollapsed(){return this.collapsed_}getRotateWithView(){return this.rotateWithView_}setRotateWithView(e){this.rotateWithView_!==e&&(this.rotateWithView_=e,this.getMap().getView().getRotation()!==0&&(this.rotateWithView_?this.handleRotationChanged_():this.ovmap_.getView().setRotation(0),this.viewExtent_=void 0,this.validateExtent_(),this.updateBox_()))}getOverviewMap(){return this.ovmap_}render(e){this.validateExtent_(),this.updateBox_()}}const be=we;class xe extends oe{constructor(e){e=e||{},super(e),this.condition_=e.condition?e.condition:ae,this.lastAngle_=void 0,this.lastMagnitude_=void 0,this.lastScaleDelta_=0,this.duration_=e.duration!==void 0?e.duration:400}handleDragEvent(e){if(!P(e))return;const t=e.map,i=t.getSize(),n=e.pixel,s=n[0]-i[0]/2,a=i[1]/2-n[1],l=Math.atan2(a,s),o=Math.sqrt(s*s+a*a),r=t.getView();if(this.lastAngle_!==void 0){const h=this.lastAngle_-l;r.adjustRotationInternal(h)}this.lastAngle_=l,this.lastMagnitude_!==void 0&&r.adjustResolutionInternal(this.lastMagnitude_/o),this.lastMagnitude_!==void 0&&(this.lastScaleDelta_=this.lastMagnitude_/o),this.lastMagnitude_=o}handleUpEvent(e){if(!P(e))return!0;const i=e.map.getView(),n=this.lastScaleDelta_>1?1:-1;return i.endInteraction(this.duration_,n),this.lastScaleDelta_=0,!1}handleDownEvent(e){return P(e)&&this.condition_(e)?(e.map.getView().beginInteraction(),this.lastAngle_=void 0,this.lastMagnitude_=void 0,!0):!1}}const Ee=xe,ye="Custom Overview Map",Ce=`
  <div id="map" class="map"></div>
  <div><label><input type="checkbox" id="rotateWithView"> Rotate with view</label></div>
`,Pe=`
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
`,Me=`
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
`,Oe=`
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
`;const _=f=>(ue("data-v-dd7e3c09"),f=f(),ge(),f),Ie={id:"title"},Le=_(()=>c("div",{id:"map",class:"map"},null,-1)),Se=_(()=>c("div",null,[c("label",null,[c("input",{type:"checkbox",id:"rotateWithView"}),ve(" Rotate with view")])],-1)),Ve=_(()=>c("p",null,"This example demonstrates how you can customize the overviewmap control using its supported options as well as defining custom CSS. You can also rotate the map using the shift key to see how the overview map reacts.",-1)),Re=_(()=>c("h5",{class:"source-heading"},"html",-1)),Te={class:"language-html"},Ne=_(()=>c("h5",{class:"source-heading"},"css",-1)),Ae={class:"language-css"},ze=_(()=>c("h5",{class:"source-heading"},"js",-1)),De={class:"language-js"},We=_(()=>c("h5",{class:"source-heading"},"package.json",-1)),ke={class:"language-json"},Be={__name:"index",setup(f){return ce(()=>{const e=document.getElementById("rotateWithView"),t=new be({className:"ol-overviewmap ol-custom-overviewmap",layers:[new N({source:new T({url:"https://{a-c}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=eec3b356356248ab93334fd724ccb404"})})],collapseLabel:"»",label:"«",collapsed:!1});e.addEventListener("change",function(){t.setRotateWithView(this.checked)}),new W({controls:le().extend([t]),interactions:re().extend([new Ee]),layers:[new N({source:new T})],target:"map",view:new k({center:[5e5,6e6],zoom:7})}),Prism.highlightAll()}),(e,t)=>(he(),pe(me,null,[c("h4",Ie,w(b(ye)),1),Le,Se,Ve,Re,c("pre",null,[c("code",Te,w("  "+b(Ce).trim()),1)]),Ne,c("pre",null,[c("code",Ae,w("  "+b(Pe).trim()),1)]),ze,c("pre",null,[c("code",De,w("  "+b(Me).trim()),1)]),We,c("pre",null,[c("code",ke,w("  "+b(Oe).trim()),1)])],64))}},Je=de(Be,[["__scopeId","data-v-dd7e3c09"]]);export{Je as default};
