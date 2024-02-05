import{aJ as v,aK as p,aL as E,aM as l,w as f,aN as y,aO as S,v as w,u as R,a3 as L,V as b,M as T,b as C}from"./Layer-5200258f.js";import{O}from"./OSM-7231e773.js";import{T as I}from"./Tile-aca76f7d.js";import{_ as P,i as F,o as M,c as x,b as n,t as d,g as h,F as N,p as V,k as D,d as _}from"./index-b344a3c5.js";import"./XYZ-7263712f.js";import"./TileImage-4a3fae9a.js";import"./TileProperty-ab86017d.js";import"./UrlTile-d31c8ece.js";import"./BaseTile-53865aab.js";import"./TileLayer-7e43e564.js";import"./Layer-a8143b89.js";const c={VERTICAL:0,HORIZONTAL:1};class z extends v{constructor(t){t=t||{},super({target:t.target,element:document.createElement("div"),render:t.render}),this.dragListenerKeys_=[],this.currentResolution_=void 0,this.direction_=c.VERTICAL,this.dragging_,this.heightLimit_=0,this.widthLimit_=0,this.startX_,this.startY_,this.thumbSize_=null,this.sliderInitialized_=!1,this.duration_=t.duration!==void 0?t.duration:200;const e=t.className!==void 0?t.className:"ol-zoomslider",i=document.createElement("button");i.setAttribute("type","button"),i.className=e+"-thumb "+p;const s=this.element;s.className=e+" "+p+" "+E,s.appendChild(i),s.addEventListener(l.POINTERDOWN,this.handleDraggerStart_.bind(this),!1),s.addEventListener(l.POINTERMOVE,this.handleDraggerDrag_.bind(this),!1),s.addEventListener(l.POINTERUP,this.handleDraggerEnd_.bind(this),!1),s.addEventListener(f.CLICK,this.handleContainerClick_.bind(this),!1),i.addEventListener(f.CLICK,y,!1)}setMap(t){super.setMap(t),t&&t.render()}initSlider_(){const t=this.element;let e=t.offsetWidth,i=t.offsetHeight;if(e===0&&i===0)return this.sliderInitialized_=!1;const s=getComputedStyle(t);e-=parseFloat(s.paddingRight)+parseFloat(s.paddingLeft),i-=parseFloat(s.paddingTop)+parseFloat(s.paddingBottom);const o=t.firstElementChild,g=getComputedStyle(o),m=o.offsetWidth+parseFloat(g.marginRight)+parseFloat(g.marginLeft),u=o.offsetHeight+parseFloat(g.marginTop)+parseFloat(g.marginBottom);return this.thumbSize_=[m,u],e>i?(this.direction_=c.HORIZONTAL,this.widthLimit_=e-m):(this.direction_=c.VERTICAL,this.heightLimit_=i-u),this.sliderInitialized_=!0}handleContainerClick_(t){const e=this.getMap().getView(),i=this.getRelativePosition_(t.offsetX-this.thumbSize_[0]/2,t.offsetY-this.thumbSize_[1]/2),s=this.getResolutionForPosition_(i),o=e.getConstrainedZoom(e.getZoomForResolution(s));e.animateInternal({zoom:o,duration:this.duration_,easing:S})}handleDraggerStart_(t){if(!this.dragging_&&t.target===this.element.firstElementChild){const e=this.element.firstElementChild;if(this.getMap().getView().beginInteraction(),this.startX_=t.clientX-parseFloat(e.style.left),this.startY_=t.clientY-parseFloat(e.style.top),this.dragging_=!0,this.dragListenerKeys_.length===0){const i=this.handleDraggerDrag_,s=this.handleDraggerEnd_,o=this.getMap().getOwnerDocument();this.dragListenerKeys_.push(w(o,l.POINTERMOVE,i,this),w(o,l.POINTERUP,s,this))}}}handleDraggerDrag_(t){if(this.dragging_){const e=t.clientX-this.startX_,i=t.clientY-this.startY_,s=this.getRelativePosition_(e,i);this.currentResolution_=this.getResolutionForPosition_(s),this.getMap().getView().setResolution(this.currentResolution_)}}handleDraggerEnd_(t){this.dragging_&&(this.getMap().getView().endInteraction(),this.dragging_=!1,this.startX_=void 0,this.startY_=void 0,this.dragListenerKeys_.forEach(R),this.dragListenerKeys_.length=0)}setThumbPosition_(t){const e=this.getPositionForResolution_(t),i=this.element.firstElementChild;this.direction_==c.HORIZONTAL?i.style.left=this.widthLimit_*e+"px":i.style.top=this.heightLimit_*e+"px"}getRelativePosition_(t,e){let i;return this.direction_===c.HORIZONTAL?i=t/this.widthLimit_:i=e/this.heightLimit_,L(i,0,1)}getResolutionForPosition_(t){return this.getMap().getView().getResolutionForValueFunction()(1-t)}getPositionForResolution_(t){const e=this.getMap().getView().getValueForResolutionFunction();return L(1-e(t),0,1)}render(t){if(!t.frameState||!this.sliderInitialized_&&!this.initSlider_())return;const e=t.frameState.viewState.resolution;this.currentResolution_=e,this.setThumbPosition_(e)}}const A=z,j="Constrained Extent",Z=`
  <div id="map" class="map"></div>
`,k=`
  .map {
    width: 100%;
    height: 400px;
  }
`,K=`
  import Map from 'ol/Map.js';
  import OSM from 'ol/source/OSM.js';
  import TileLayer from 'ol/layer/Tile.js';
  import View from 'ol/View.js';
  import ZoomSlider from 'ol/control/ZoomSlider.js';
  import {defaults as defaultControls} from 'ol/control.js';

  const view = new View({
    center: [328627.563458, 5921296.662223],
    zoom: 8,
    extent: [-572513.341856, 5211017.966314, 916327.095083, 6636950.728974],
  });

  new Map({
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
    ],
    keyboardEventTarget: document,
    target: 'map',
    view: view,
    controls: defaultControls().extend([new ZoomSlider()]),
  });
`,H=`
  {
    "name": "extent-constrained",
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
`;const a=r=>(V("data-v-208dbc1f"),r=r(),D(),r),X={id:"title"},Y=a(()=>n("div",{id:"map",class:"map"},null,-1)),B=a(()=>n("p",null,[_("This map has a view that is constrained in an extent. This is done using the "),n("code",null,"extent"),_(" view option. Please note that specifying "),n("code",null,"constrainOnlyCenter: true"),_(" would only apply the extent restriction to the view center.")],-1)),W=a(()=>n("h5",{class:"source-heading"},"html",-1)),U={class:"language-html"},J=a(()=>n("h5",{class:"source-heading"},"css",-1)),$={class:"language-css"},q=a(()=>n("h5",{class:"source-heading"},"js",-1)),G={class:"language-js"},Q=a(()=>n("h5",{class:"source-heading"},"package.json",-1)),tt={class:"language-json"},et={__name:"index",setup(r){return F(()=>{const t=new b({center:[328627.563458,5921296662223e-6],zoom:8,extent:[-572513.341856,5211017966314e-6,916327.095083,6636950728974e-6]});new T({layers:[new I({source:new O})],keyboardEventTarget:document,target:"map",view:t,controls:C().extend([new A])}),Prism.highlightAll()}),(t,e)=>(M(),x(N,null,[n("h4",X,d(h(j)),1),Y,B,W,n("pre",null,[n("code",U,d("  "+h(Z).trim()),1)]),J,n("pre",null,[n("code",$,d("  "+h(k).trim()),1)]),q,n("pre",null,[n("code",G,d("  "+h(K).trim()),1)]),Q,n("pre",null,[n("code",tt,d("  "+h(H).trim()),1)])],64))}},_t=P(et,[["__scopeId","data-v-208dbc1f"]]);export{_t as default};
