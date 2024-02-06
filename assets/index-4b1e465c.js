import{as as X,U as rt,B as Z,ag as ot,at as _,t as T,au as C,Y as pt,v as V,Z as ft,av as Q,aw as _t,a0 as J,ax as H,c as W,ay as P,az as bt,E as ct,aA as xt,am as tt,aB as et,an as yt,ao as vt,a9 as st,aC as wt,aD as It,j as Rt,aE as Et,a8 as nt,m as At,S as Y,a7 as Lt,M as St,V as Mt}from"./Layer-668612ec.js";import{C as zt}from"./Layer-5b8d80c5.js";import{_ as Dt,i as Tt,o as Ct,c as Ot,b as A,t as j,g as k,F as jt,j as kt,p as Nt,k as Pt}from"./index-b74f03bf.js";import{p as qt,g as Bt,r as Ft,E as Gt,h as Ht}from"./TileProperty-0d2bd5df.js";import{T as Wt}from"./Tile-769b675a.js";import{S as Yt}from"./StadiaMaps-7bec7645.js";import"./BaseTile-a766243d.js";import"./TileLayer-d843ebf1.js";import"./XYZ-0831ea92.js";import"./TileImage-e3961663.js";import"./UrlTile-bc3de61e.js";import"./OSM-e42fa480.js";function U(r){return Array.isArray(r)?Math.min(...r):r}class Ut extends X{constructor(t,s,e,n,a,i,o){let c=t.getExtent();c&&t.canWrapX()&&(c=c.slice(),c[0]=-1/0,c[2]=1/0);let h=s.getExtent();h&&s.canWrapX()&&(h=h.slice(),h[0]=-1/0,h[2]=1/0);const u=h?rt(e,h):e,g=Z(u),y=qt(t,s,g,n),x=Gt,d=new Bt(t,s,u,c,y*x,n),R=d.calculateSourceExtent(),m=ot(R)?null:i(R,y,a),S=m?_.IDLE:_.EMPTY,l=m?m.getPixelRatio():1;super(e,n,l,S),this.targetProj_=s,this.maxSourceExtent_=c,this.triangulation_=d,this.targetResolution_=n,this.targetExtent_=e,this.sourceImage_=m,this.sourcePixelRatio_=l,this.interpolate_=o,this.canvas_=null,this.sourceListenerKey_=null}disposeInternal(){this.state==_.LOADING&&this.unlistenSource_(),super.disposeInternal()}getImage(){return this.canvas_}getProjection(){return this.targetProj_}reproject_(){const t=this.sourceImage_.getState();if(t==_.LOADED){const s=T(this.targetExtent_)/this.targetResolution_,e=C(this.targetExtent_)/this.targetResolution_;this.canvas_=Ft(s,e,this.sourcePixelRatio_,U(this.sourceImage_.getResolution()),this.maxSourceExtent_,this.targetResolution_,this.targetExtent_,this.triangulation_,[{extent:this.sourceImage_.getExtent(),image:this.sourceImage_.getImage()}],0,void 0,this.interpolate_)}this.state=t,this.changed()}load(){if(this.state==_.IDLE){this.state=_.LOADING,this.changed();const t=this.sourceImage_.getState();t==_.LOADED||t==_.ERROR?this.reproject_():(this.sourceListenerKey_=pt(this.sourceImage_,V.CHANGE,function(s){const e=this.sourceImage_.getState();(e==_.LOADED||e==_.ERROR)&&(this.unlistenSource_(),this.reproject_())},this),this.sourceImage_.load())}}unlistenSource_(){ft(this.sourceListenerKey_),this.sourceListenerKey_=null}}const Xt=Ut,q=4,F={IMAGELOADSTART:"imageloadstart",IMAGELOADEND:"imageloadend",IMAGELOADERROR:"imageloaderror"};class Zt extends ct{constructor(t,s){super(t),this.image=s}}class Vt extends Q{constructor(t){super({attributions:t.attributions,projection:t.projection,state:t.state,interpolate:t.interpolate!==void 0?t.interpolate:!0}),this.on,this.once,this.un,this.loader=t.loader||null,this.resolutions_=t.resolutions!==void 0?t.resolutions:null,this.reprojectedImage_=null,this.reprojectedRevision_=0,this.image=null,this.wantedExtent_,this.wantedResolution_,this.static_=t.loader?t.loader.length===0:!1}getResolutions(){return this.resolutions_}setResolutions(t){this.resolutions_=t}findNearestResolution(t){const s=this.getResolutions();if(s){const e=_t(s,t,0);t=s[e]}return t}getImage(t,s,e,n){const a=this.getProjection();if(!a||!n||J(a,n))return a&&(n=a),this.getImageInternal(t,s,e,n);if(this.reprojectedImage_){if(this.reprojectedRevision_==this.getRevision()&&J(this.reprojectedImage_.getProjection(),n)&&this.reprojectedImage_.getResolution()==s&&H(this.reprojectedImage_.getExtent(),t))return this.reprojectedImage_;this.reprojectedImage_.dispose(),this.reprojectedImage_=null}return this.reprojectedImage_=new Xt(a,n,t,s,e,(i,o,c)=>this.getImageInternal(i,o,c,a),this.getInterpolate()),this.reprojectedRevision_=this.getRevision(),this.reprojectedImage_}getImageInternal(t,s,e,n){if(this.loader){const a=Qt(t,s,e,1),i=this.findNearestResolution(s);if(this.image&&(this.static_||(this.wantedExtent_&&W(this.wantedExtent_,a)||W(this.image.getExtent(),a))&&(this.wantedResolution_&&U(this.wantedResolution_)===i||U(this.image.getResolution())===i)))return this.image;this.wantedExtent_=a,this.wantedResolution_=i,this.image=new X(a,i,e,this.loader),this.image.addEventListener(V.CHANGE,this.handleImageChange.bind(this))}return this.image}handleImageChange(t){const s=t.target;let e;switch(s.getState()){case _.LOADING:this.loading=!0,e=F.IMAGELOADSTART;break;case _.LOADED:this.loading=!1,e=F.IMAGELOADEND;break;case _.ERROR:this.loading=!1,e=F.IMAGELOADERROR;break;default:return}this.hasListener(e)&&this.dispatchEvent(new Zt(e,s))}}function Qt(r,t,s,e){const n=t/s,a=Z(r),i=P(T(r)/n,q),o=P(C(r)/n,q),c=P((e-1)*i/2,q),h=i+2*c,u=P((e-1)*o/2,q),g=o+2*u;return bt(a,n,0,[h,g])}const lt=Vt;class $t extends X{constructor(t,s,e,n,a){const i=a!==void 0?_.IDLE:_.LOADED;super(t,s,e,i),this.loader_=a!==void 0?a:null,this.canvas_=n,this.error_=null}getError(){return this.error_}handleLoad_(t){t?(this.error_=t,this.state=_.ERROR):this.state=_.LOADED,this.changed()}load(){this.state==_.IDLE&&(this.state=_.LOADING,this.changed(),this.loader_(this.handleLoad_.bind(this)))}getImage(){return this.canvas_}}const Kt=$t;class Jt extends xt{constructor(t){t=t||{},super(t)}}const te=Jt;class ee extends zt{constructor(t){super(t),this.image_=null}getImage(){return this.image_?this.image_.getImage():null}prepareFrame(t){const s=t.layerStatesArray[t.layerIndex],e=t.pixelRatio,n=t.viewState,a=n.resolution,i=this.getLayer().getSource(),o=t.viewHints;let c=t.extent;if(s.extent!==void 0&&(c=rt(c,tt(s.extent,n.projection))),!o[et.ANIMATING]&&!o[et.INTERACTING]&&!ot(c))if(i){const h=n.projection,u=i.getImage(c,a,e,h);u&&(this.loadImage(u)?this.image_=u:u.getState()===_.EMPTY&&(this.image_=null))}else this.image_=null;return!!this.image_}getData(t){const s=this.frameState;if(!s)return null;const e=this.getLayer(),n=yt(s.pixelToCoordinateTransform,t.slice()),a=e.getExtent();if(a&&!vt(a,n))return null;const i=this.image_.getExtent(),o=this.image_.getImage(),c=T(i),h=Math.floor(o.width*((n[0]-i[0])/c));if(h<0||h>=o.width)return null;const u=C(i),g=Math.floor(o.height*((i[3]-n[1])/u));return g<0||g>=o.height?null:this.getImageData(o,h,g)}renderFrame(t,s){const e=this.image_,n=e.getExtent(),a=e.getResolution(),[i,o]=Array.isArray(a)?a:[a,a],c=e.getPixelRatio(),h=t.layerStatesArray[t.layerIndex],u=t.pixelRatio,g=t.viewState,y=g.center,x=g.resolution,d=u*i/(x*c),R=u*o/(x*c),m=t.extent,S=g.resolution,l=g.rotation,f=Math.round(T(m)/S*u),p=Math.round(C(m)/S*u);st(this.pixelTransform,t.size[0]/2,t.size[1]/2,1/u,1/u,l,-f/2,-p/2),wt(this.inversePixelTransform,this.pixelTransform);const v=It(this.pixelTransform);this.useContainer(s,v,this.getBackground(t));const b=this.context,E=b.canvas;E.width!=f||E.height!=p?(E.width=f,E.height=p):this.containerReused||b.clearRect(0,0,f,p);let w=!1,L=!0;if(h.extent){const O=tt(h.extent,g.projection);L=Rt(O,t.extent),w=L&&!W(O,t.extent),w&&this.clipUnrotated(b,t,O)}const I=e.getImage(),M=st(this.tempTransform,f/2,p/2,d,R,0,c*(n[0]-y[0])/i,c*(y[1]-n[3])/o);this.renderedResolution=o*u/c;const N=I.width*M[0],D=I.height*M[3];if(this.getLayer().getSource().getInterpolate()||(b.imageSmoothingEnabled=!1),this.preRender(b,t),L&&N>=.5&&D>=.5){const O=M[4],mt=M[5],B=h.opacity;let K;B!==1&&(K=b.globalAlpha,b.globalAlpha=B),b.drawImage(I,0,0,+I.width,+I.height,O,mt,N,D),B!==1&&(b.globalAlpha=K)}return this.postRender(b,t),w&&b.restore(),b.imageSmoothingEnabled=!0,v!==E.style.transform&&(E.style.transform=v),this.container}}const se=ee;class ne extends te{constructor(t){super(t)}createRenderer(){return new se(this)}getData(t){return super.getData(t)}}const ht=ne;let ut=!0;try{new ImageData(10,10)}catch{ut=!1}let G;function ae(r,t,s){if(ut)return new ImageData(r,t,s);G||(G=document.createElement("canvas").getContext("2d"));const e=G.createImageData(t,s);return e.data.set(r),e}function dt(r){let t=!0;try{new ImageData(10,10)}catch{t=!1}function s(e,n,a){return t?new ImageData(e,n,a):{data:e,width:n,height:a}}return function(e){const n=e.buffers,a=e.meta,i=e.imageOps,o=e.width,c=e.height,h=n.length,u=n[0].byteLength;if(i){const d=new Array(h);for(let m=0;m<h;++m)d[m]=s(new Uint8ClampedArray(n[m]),o,c);return r(d,a).data.buffer}const g=new Uint8ClampedArray(u),y=new Array(h),x=new Array(h);for(let d=0;d<h;++d)y[d]=new Uint8ClampedArray(n[d]),x[d]=[0,0,0,0];for(let d=0;d<u;d+=4){for(let m=0;m<h;++m){const S=y[m];x[m][0]=S[d],x[m][1]=S[d+1],x[m][2]=S[d+2],x[m][3]=S[d+3]}const R=r(x,a);g[d]=R[0],g[d+1]=R[1],g[d+2]=R[2],g[d+3]=R[3]}return g.buffer}}function ie(r,t){const e=Object.keys(r.lib||{}).map(function(a){return"const "+a+" = "+r.lib[a].toString()+";"}).concat(["const __minion__ = ("+dt.toString()+")(",r.operation.toString(),");",'self.addEventListener("message", function(event) {',"  const buffer = __minion__(event.data);","  self.postMessage({buffer: buffer, meta: event.data.meta}, [buffer]);","});"]),n=new Worker(typeof Blob>"u"?"data:text/javascript;base64,"+Buffer.from(e.join(`
`),"binary").toString("base64"):URL.createObjectURL(new Blob(e,{type:"text/javascript"})));return n.addEventListener("message",t),n}function re(r,t){const s=dt(r.operation);let e=!1;return{postMessage:function(n){setTimeout(function(){e||t({data:{buffer:s(n),meta:n.meta}})},0)},terminate:function(){e=!0}}}class oe extends Lt{constructor(t){super(),this._imageOps=!!t.imageOps;let s;t.threads===0?s=0:this._imageOps?s=1:s=t.threads||1;const e=new Array(s);if(s)for(let n=0;n<s;++n)e[n]=ie(t,this._onWorkerMessage.bind(this,n));else e[0]=re(t,this._onWorkerMessage.bind(this,0));this._workers=e,this._queue=[],this._maxQueueLength=t.queue||1/0,this._running=0,this._dataLookup={},this._job=null}process(t,s,e){this._enqueue({inputs:t,meta:s,callback:e}),this._dispatch()}_enqueue(t){for(this._queue.push(t);this._queue.length>this._maxQueueLength;)this._queue.shift().callback(null,null)}_dispatch(){if(this._running||this._queue.length===0)return;const t=this._queue.shift();this._job=t;const s=t.inputs[0].width,e=t.inputs[0].height,n=t.inputs.map(function(c){return c.data.buffer}),a=this._workers.length;if(this._running=a,a===1){this._workers[0].postMessage({buffers:n,meta:t.meta,imageOps:this._imageOps,width:s,height:e},n);return}const i=t.inputs[0].data.length,o=4*Math.ceil(i/4/a);for(let c=0;c<a;++c){const h=c*o,u=[];for(let g=0,y=n.length;g<y;++g)u.push(n[g].slice(h,h+o));this._workers[c].postMessage({buffers:u,meta:t.meta,imageOps:this._imageOps,width:s,height:e},u)}}_onWorkerMessage(t,s){this.disposed||(this._dataLookup[t]=s.data,--this._running,this._running===0&&this._resolveJob())}_resolveJob(){const t=this._job,s=this._workers.length;let e,n;if(s===1)e=new Uint8ClampedArray(this._dataLookup[0].buffer),n=this._dataLookup[0].meta;else{const a=t.inputs[0].data.length;e=new Uint8ClampedArray(a),n=new Array(s);const i=4*Math.ceil(a/4/s);for(let o=0;o<s;++o){const c=this._dataLookup[o].buffer,h=o*i;e.set(new Uint8ClampedArray(c),h),n[o]=this._dataLookup[o].meta}}this._job=null,this._dataLookup={},t.callback(null,ae(e,t.inputs[0].width,t.inputs[0].height),n),this._dispatch()}disposeInternal(){for(let t=0;t<this._workers.length;++t)this._workers[t].terminate();this._workers.length=0}}const at={BEFOREOPERATIONS:"beforeoperations",AFTEROPERATIONS:"afteroperations"};class it extends ct{constructor(t,s,e){super(t),this.extent=s.extent,this.resolution=s.viewState.resolution/s.pixelRatio,this.data=e}}class gt extends lt{constructor(t){super({projection:null}),this.on,this.once,this.un,this.processor_=null,this.operationType_=t.operationType!==void 0?t.operationType:"pixel",this.threads_=t.threads!==void 0?t.threads:1,this.layers_=he(t.sources);const s=this.changed.bind(this);for(let e=0,n=this.layers_.length;e<n;++e)this.layers_[e].addEventListener(V.CHANGE,s);this.useResolutions_=t.resolutions!==null,this.tileQueue_=new Et(function(){return 1},this.processSources_.bind(this)),this.requestedFrameState_,this.renderedImageCanvas_=null,this.renderedRevision_,this.frameState_={animate:!1,coordinateToPixelTransform:nt(),declutterTree:null,extent:null,index:0,layerIndex:0,layerStatesArray:le(this.layers_),pixelRatio:1,pixelToCoordinateTransform:nt(),postRenderFunctions:[],size:[0,0],tileQueue:this.tileQueue_,time:Date.now(),usedTiles:{},viewState:{rotation:0},viewHints:[],wantedTiles:{},mapId:At(this),renderTargets:{}},this.setAttributions(function(e){const n=[];for(let a=0,i=t.sources.length;a<i;++a){const o=t.sources[a],c=o instanceof Q?o:o.getSource();if(!c)continue;const h=c.getAttributions();if(typeof h=="function"){const u=h(e);n.push.apply(n,u)}}return n.length!==0?n:null}),t.operation!==void 0&&this.setOperation(t.operation,t.lib)}setOperation(t,s){this.processor_&&this.processor_.dispose(),this.processor_=new oe({operation:t,imageOps:this.operationType_==="image",queue:1,lib:s,threads:this.threads_}),this.changed()}updateFrameState_(t,s,e){const n=Object.assign({},this.frameState_);n.viewState=Object.assign({},n.viewState);const a=Z(t);n.size[0]=Math.ceil(T(t)/s),n.size[1]=Math.ceil(C(t)/s),n.extent=[a[0]-n.size[0]*s/2,a[1]-n.size[1]*s/2,a[0]+n.size[0]*s/2,a[1]+n.size[1]*s/2],n.time=Date.now();const i=n.viewState;return i.center=a,i.projection=e,i.resolution=s,n}allSourcesReady_(){let t=!0,s;for(let e=0,n=this.layers_.length;e<n;++e)if(s=this.layers_[e].getSource(),!s||s.getState()!=="ready"){t=!1;break}return t}getImage(t,s,e,n){if(!this.allSourcesReady_())return null;this.tileQueue_.loadMoreTiles(16,16),s=this.findNearestResolution(s);const a=this.updateFrameState_(t,s,n);if(this.requestedFrameState_=a,this.renderedImageCanvas_){const i=this.renderedImageCanvas_.getResolution(),o=this.renderedImageCanvas_.getExtent();(s!==i||!H(a.extent,o))&&(this.renderedImageCanvas_=null)}return(!this.renderedImageCanvas_||this.getRevision()!==this.renderedRevision_)&&this.processSources_(),a.animate&&requestAnimationFrame(this.changed.bind(this)),this.renderedImageCanvas_}processSources_(){const t=this.requestedFrameState_,s=this.layers_.length,e=new Array(s);for(let a=0;a<s;++a){t.layerIndex=a,t.renderTargets={};const i=ce(this.layers_[a],t);if(i)e[a]=i;else return}const n={};this.dispatchEvent(new it(at.BEFOREOPERATIONS,t,n)),this.processor_.process(e,n,this.onWorkerComplete_.bind(this,t))}onWorkerComplete_(t,s,e,n){if(s||!e)return;const a=t.extent,i=t.viewState.resolution;if(i!==this.requestedFrameState_.viewState.resolution||!H(a,this.requestedFrameState_.extent))return;let o;if(this.renderedImageCanvas_)o=this.renderedImageCanvas_.getImage().getContext("2d");else{const c=Math.round(T(a)/i),h=Math.round(C(a)/i);o=Y(c,h),this.renderedImageCanvas_=new Kt(a,i,1,o.canvas)}o.putImageData(e,0,0),t.animate?requestAnimationFrame(this.changed.bind(this)):this.changed(),this.renderedRevision_=this.getRevision(),this.dispatchEvent(new it(at.AFTEROPERATIONS,t,n))}getResolutions(t){if(!this.useResolutions_)return null;let s=super.getResolutions();if(!s)for(let e=0,n=this.layers_.length;e<n&&(s=this.layers_[e].getSource().getResolutions(t),!s);++e);return s}disposeInternal(){this.processor_&&this.processor_.dispose(),super.disposeInternal()}}gt.prototype.dispose;let z=null;function ce(r,t){const s=r.getRenderer();if(!s)throw new Error("Unsupported layer type: "+r);if(!s.prepareFrame(t))return null;const e=t.size[0],n=t.size[1];if(e===0||n===0)return null;const a=s.renderFrame(t,null);let i;if(a instanceof HTMLCanvasElement)i=a;else{if(a&&(i=a.firstElementChild),!(i instanceof HTMLCanvasElement))throw new Error("Unsupported rendered element: "+i);if(i.width===e&&i.height===n)return i.getContext("2d").getImageData(0,0,e,n)}if(!z)z=Y(e,n,void 0,{willReadFrequently:!0});else{const o=z.canvas;o.width!==e||o.height!==n?z=Y(e,n,void 0,{willReadFrequently:!0}):z.clearRect(0,0,e,n)}return z.drawImage(i,0,0,e,n),z.getImageData(0,0,e,n)}function le(r){return r.map(function(t){return t.getLayerState()})}function he(r){const t=r.length,s=new Array(t);for(let e=0;e<t;++e)s[e]=ue(r[e]);return s}function ue(r){let t;return r instanceof Q?r instanceof Ht?t=new Wt({source:r}):r instanceof lt&&(t=new ht({source:r})):t=r,t}const de=gt,ge="Attributions",me=`
  <div id="map" class="map"></div>
  <table class="controls">
    <tr>
      <td><label for="hue">hue</label></td>
      <td><input id="hue" type="range" min="-180" max="180" value="0"/></td>
      <td><span id="hueOut"></span> °&nbsp;</td>
    </tr>
    <tr>
      <td><label for="chroma">chroma</label></td>
      <td><input id="chroma" type="range" min="0" max="100" value="100"/></td>
      <td><span id="chromaOut"></span> %</td>
    </tr>
    <tr>
      <td><label for="lightness">lightness</label></td>
      <td><input id="lightness" type="range" min="0" max="100" value="100"/></td>
      <td><span id="lightnessOut"></span> %</td>
    </tr>
  </table>
`,pe=`
  .map {
    width: 100%;
    height: 400px;
  }
  table.controls td {
    padding: 2px 5px;
  }
  table.controls td:nth-child(3) {
    text-align: right;
    min-width: 4.5em;
  }
`,fe=`
  import ImageLayer from 'ol/layer/Image.js';
  import Map from 'ol/Map.js';
  import View from 'ol/View.js';
  import {Raster as RasterSource, StadiaMaps} from 'ol/source.js';

  /**
   * Color manipulation functions below are adapted from
   * https://github.com/d3/d3-color.
   */
  const Xn = 0.95047;
  const Yn = 1;
  const Zn = 1.08883;
  const t0 = 4 / 29;
  const t1 = 6 / 29;
  const t2 = 3 * t1 * t1;
  const t3 = t1 * t1 * t1;
  const twoPi = 2 * Math.PI;

  /**
   * Convert an RGB pixel into an HCL pixel.
   * @param {Array<number>} pixel A pixel in RGB space.
   * @return {Array<number>} A pixel in HCL space.
   */
  function rgb2hcl(pixel) {
    const red = rgb2xyz(pixel[0]);
    const green = rgb2xyz(pixel[1]);
    const blue = rgb2xyz(pixel[2]);

    const x = xyz2lab(
      (0.4124564 * red + 0.3575761 * green + 0.1804375 * blue) / Xn
    );
    const y = xyz2lab(
      (0.2126729 * red + 0.7151522 * green + 0.072175 * blue) / Yn
    );
    const z = xyz2lab(
      (0.0193339 * red + 0.119192 * green + 0.9503041 * blue) / Zn
    );

    const l = 116 * y - 16;
    const a = 500 * (x - y);
    const b = 200 * (y - z);

    const c = Math.sqrt(a * a + b * b);
    let h = Math.atan2(b, a);
    if (h < 0) {
      h += twoPi;
    }

    pixel[0] = h;
    pixel[1] = c;
    pixel[2] = l;

    return pixel;
  }

  /**
   * Convert an HCL pixel into an RGB pixel.
   * @param {Array<number>} pixel A pixel in HCL space.
   * @return {Array<number>} A pixel in RGB space.
   */
  function hcl2rgb(pixel) {
    const h = pixel[0];
    const c = pixel[1];
    const l = pixel[2];

    const a = Math.cos(h) * c;
    const b = Math.sin(h) * c;

    let y = (l + 16) / 116;
    let x = isNaN(a) ? y : y + a / 500;
    let z = isNaN(b) ? y : y - b / 200;

    y = Yn * lab2xyz(y);
    x = Xn * lab2xyz(x);
    z = Zn * lab2xyz(z);

    pixel[0] = xyz2rgb(3.2404542 * x - 1.5371385 * y - 0.4985314 * z);
    pixel[1] = xyz2rgb(-0.969266 * x + 1.8760108 * y + 0.041556 * z);
    pixel[2] = xyz2rgb(0.0556434 * x - 0.2040259 * y + 1.0572252 * z);

    return pixel;
  }

  function xyz2lab(t) {
    return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0;
  }

  function lab2xyz(t) {
    return t > t1 ? t * t * t : t2 * (t - t0);
  }

  function rgb2xyz(x) {
    return (x /= 255) <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
  }

  function xyz2rgb(x) {
    return (
      255 * (x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055)
    );
  }

  const raster = new RasterSource({
    sources: [
      new StadiaMaps({
        layer: 'stamen_watercolor',
      }),
    ],
    operation: function (pixels, data) {
      const hcl = rgb2hcl(pixels[0]);

      let h = hcl[0] + (Math.PI * data.hue) / 180;
      if (h < 0) {
        h += twoPi;
      } else if (h > twoPi) {
        h -= twoPi;
      }
      hcl[0] = h;

      hcl[1] *= data.chroma / 100;
      hcl[2] *= data.lightness / 100;

      return hcl2rgb(hcl);
    },
    lib: {
      rgb2hcl: rgb2hcl,
      hcl2rgb: hcl2rgb,
      rgb2xyz: rgb2xyz,
      lab2xyz: lab2xyz,
      xyz2lab: xyz2lab,
      xyz2rgb: xyz2rgb,
      Xn: Xn,
      Yn: Yn,
      Zn: Zn,
      t0: t0,
      t1: t1,
      t2: t2,
      t3: t3,
      twoPi: twoPi,
    },
  });

  const controls = {};

  raster.on('beforeoperations', function (event) {
    const data = event.data;
    for (const id in controls) {
      data[id] = Number(controls[id].value);
    }
  });

  const map = new Map({
    layers: [
      new ImageLayer({
        source: raster,
      }),
    ],
    target: 'map',
    view: new View({
      center: [0, 2500000],
      zoom: 2,
      maxZoom: 18,
    }),
  });

  const controlIds = ['hue', 'chroma', 'lightness'];
  controlIds.forEach(function (id) {
    const control = document.getElementById(id);
    const output = document.getElementById(id + 'Out');
    control.addEventListener('input', function () {
      output.innerText = control.value;
      raster.changed();
    });
    output.innerText = control.value;
    controls[id] = control;
  });
`,_e=`
  {
    "name": "color-manipulation",
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
`;const $=r=>(Nt("data-v-96b738d4"),r=r(),Pt(),r),be={id:"title"},xe=kt('<div id="map" class="map" data-v-96b738d4></div><table class="controls" data-v-96b738d4><tr data-v-96b738d4><td data-v-96b738d4><label for="hue" data-v-96b738d4>hue</label></td><td data-v-96b738d4><input id="hue" type="range" min="-180" max="180" value="0" data-v-96b738d4></td><td data-v-96b738d4><span id="hueOut" data-v-96b738d4></span> ° </td></tr><tr data-v-96b738d4><td data-v-96b738d4><label for="chroma" data-v-96b738d4>chroma</label></td><td data-v-96b738d4><input id="chroma" type="range" min="0" max="100" value="100" data-v-96b738d4></td><td data-v-96b738d4><span id="chromaOut" data-v-96b738d4></span> %</td></tr><tr data-v-96b738d4><td data-v-96b738d4><label for="lightness" data-v-96b738d4>lightness</label></td><td data-v-96b738d4><input id="lightness" type="range" min="0" max="100" value="100" data-v-96b738d4></td><td data-v-96b738d4><span id="lightnessOut" data-v-96b738d4></span> %</td></tr></table><p data-v-96b738d4>A raster source allows arbitrary manipulation of pixel values. In this example, RGB values on the input tile source are adjusted in a pixel-wise operation before being rendered with a second raster source. The raster operation takes pixels in in RGB space, converts them to HCL color space, adjusts the values based on the controls above, and then converts them back to RGB space for rendering.</p><h5 class="source-heading" data-v-96b738d4>html</h5>',4),ye={class:"language-html"},ve=$(()=>A("h5",{class:"source-heading"},"css",-1)),we={class:"language-css"},Ie=$(()=>A("h5",{class:"source-heading"},"js",-1)),Re={class:"language-js"},Ee=$(()=>A("h5",{class:"source-heading"},"package.json",-1)),Ae={class:"language-json"},Le={__name:"index",setup(r){return Tt(()=>{const n=.13793103448275862,a=6/29,i=3*a*a,o=a*a*a,c=2*Math.PI;function h(l){const f=x(l[0]),p=x(l[1]),v=x(l[2]),b=g((.4124564*f+.3575761*p+.1804375*v)/.95047),E=g((.2126729*f+.7151522*p+.072175*v)/1),w=g((.0193339*f+.119192*p+.9503041*v)/1.08883),L=116*E-16,I=500*(b-E),M=200*(E-w),N=Math.sqrt(I*I+M*M);let D=Math.atan2(M,I);return D<0&&(D+=c),l[0]=D,l[1]=N,l[2]=L,l}function u(l){const f=l[0],p=l[1],v=l[2],b=Math.cos(f)*p,E=Math.sin(f)*p;let w=(v+16)/116,L=isNaN(b)?w:w+b/500,I=isNaN(E)?w:w-E/200;return w=1*y(w),L=.95047*y(L),I=1.08883*y(I),l[0]=d(3.2404542*L-1.5371385*w-.4985314*I),l[1]=d(-.969266*L+1.8760108*w+.041556*I),l[2]=d(.0556434*L-.2040259*w+1.0572252*I),l}function g(l){return l>o?Math.pow(l,1/3):l/i+n}function y(l){return l>a?l*l*l:i*(l-n)}function x(l){return(l/=255)<=.04045?l/12.92:Math.pow((l+.055)/1.055,2.4)}function d(l){return 255*(l<=.0031308?12.92*l:1.055*Math.pow(l,1/2.4)-.055)}const R=new de({sources:[new Yt({layer:"stamen_watercolor"})],operation:function(l,f){const p=h(l[0]);let v=p[0]+Math.PI*f.hue/180;return v<0?v+=c:v>c&&(v-=c),p[0]=v,p[1]*=f.chroma/100,p[2]*=f.lightness/100,u(p)},lib:{rgb2hcl:h,hcl2rgb:u,rgb2xyz:x,lab2xyz:y,xyz2lab:g,xyz2rgb:d,Xn:.95047,Yn:1,Zn:1.08883,t0:n,t1:a,t2:i,t3:o,twoPi:c}}),m={};R.on("beforeoperations",function(l){const f=l.data;for(const p in m)f[p]=Number(m[p].value)}),new St({layers:[new ht({source:R})],target:"map",view:new Mt({center:[0,25e5],zoom:2,maxZoom:18})}),["hue","chroma","lightness"].forEach(function(l){const f=document.getElementById(l),p=document.getElementById(l+"Out");f.addEventListener("input",function(){p.innerText=f.value,R.changed()}),p.innerText=f.value,m[l]=f}),Prism.highlightAll()}),(t,s)=>(Ct(),Ot(jt,null,[A("h4",be,j(k(ge)),1),xe,A("pre",null,[A("code",ye,j("  "+k(me).trim()),1)]),ve,A("pre",null,[A("code",we,j("  "+k(pe).trim()),1)]),Ie,A("pre",null,[A("code",Re,j("  "+k(fe).trim()),1)]),Ee,A("pre",null,[A("code",Ae,j("  "+k(_e).trim()),1)])],64))}},Be=Dt(Le,[["__scopeId","data-v-96b738d4"]]);export{Be as default};
