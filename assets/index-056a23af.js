import{aw as U,a0 as re,B as Z,ak as oe,ax as _,t as T,ay as C,v as pe,w as V,u as fe,az as $,aA as _e,a5 as J,aB as H,c as W,aC as q,aD as be,E as ce,aE as xe,aq as ee,aF as te,ar as ye,as as we,ae as se,aG as ve,aH as Ie,j as Re,aI as Ee,ad as ne,m as Ae,$ as X,ac as Le,M as Se,V as Me}from"./Layer-5200258f.js";import{C as ze}from"./Layer-a8143b89.js";import{_ as De,i as Te,o as Ce,c as Oe,b as A,t as j,g as k,F as je,j as ke,p as Ne,k as qe}from"./index-7205b445.js";import{p as Pe,g as Be,r as Fe,E as Ge,h as He}from"./TileProperty-ab86017d.js";import{T as We}from"./Tile-aca76f7d.js";import{S as Xe}from"./StadiaMaps-bfb98833.js";import"./BaseTile-53865aab.js";import"./TileLayer-7e43e564.js";import"./XYZ-7263712f.js";import"./TileImage-4a3fae9a.js";import"./UrlTile-d31c8ece.js";import"./OSM-7231e773.js";function Y(r){return Array.isArray(r)?Math.min(...r):r}class Ye extends U{constructor(e,s,t,n,a,i,o){let c=e.getExtent();c&&e.canWrapX()&&(c=c.slice(),c[0]=-1/0,c[2]=1/0);let h=s.getExtent();h&&s.canWrapX()&&(h=h.slice(),h[0]=-1/0,h[2]=1/0);const u=h?re(t,h):t,g=Z(u),y=Pe(e,s,g,n),x=Ge,d=new Be(e,s,u,c,y*x,n),R=d.calculateSourceExtent(),m=oe(R)?null:i(R,y,a),S=m?_.IDLE:_.EMPTY,l=m?m.getPixelRatio():1;super(t,n,l,S),this.targetProj_=s,this.maxSourceExtent_=c,this.triangulation_=d,this.targetResolution_=n,this.targetExtent_=t,this.sourceImage_=m,this.sourcePixelRatio_=l,this.interpolate_=o,this.canvas_=null,this.sourceListenerKey_=null}disposeInternal(){this.state==_.LOADING&&this.unlistenSource_(),super.disposeInternal()}getImage(){return this.canvas_}getProjection(){return this.targetProj_}reproject_(){const e=this.sourceImage_.getState();if(e==_.LOADED){const s=T(this.targetExtent_)/this.targetResolution_,t=C(this.targetExtent_)/this.targetResolution_;this.canvas_=Fe(s,t,this.sourcePixelRatio_,Y(this.sourceImage_.getResolution()),this.maxSourceExtent_,this.targetResolution_,this.targetExtent_,this.triangulation_,[{extent:this.sourceImage_.getExtent(),image:this.sourceImage_.getImage()}],0,void 0,this.interpolate_)}this.state=e,this.changed()}load(){if(this.state==_.IDLE){this.state=_.LOADING,this.changed();const e=this.sourceImage_.getState();e==_.LOADED||e==_.ERROR?this.reproject_():(this.sourceListenerKey_=pe(this.sourceImage_,V.CHANGE,function(s){const t=this.sourceImage_.getState();(t==_.LOADED||t==_.ERROR)&&(this.unlistenSource_(),this.reproject_())},this),this.sourceImage_.load())}}unlistenSource_(){fe(this.sourceListenerKey_),this.sourceListenerKey_=null}}const Ue=Ye,P=4,F={IMAGELOADSTART:"imageloadstart",IMAGELOADEND:"imageloadend",IMAGELOADERROR:"imageloaderror"};class Ze extends ce{constructor(e,s){super(e),this.image=s}}class Ve extends ${constructor(e){super({attributions:e.attributions,projection:e.projection,state:e.state,interpolate:e.interpolate!==void 0?e.interpolate:!0}),this.on,this.once,this.un,this.loader=e.loader||null,this.resolutions_=e.resolutions!==void 0?e.resolutions:null,this.reprojectedImage_=null,this.reprojectedRevision_=0,this.image=null,this.wantedExtent_,this.wantedResolution_,this.static_=e.loader?e.loader.length===0:!1}getResolutions(){return this.resolutions_}setResolutions(e){this.resolutions_=e}findNearestResolution(e){const s=this.getResolutions();if(s){const t=_e(s,e,0);e=s[t]}return e}getImage(e,s,t,n){const a=this.getProjection();if(!a||!n||J(a,n))return a&&(n=a),this.getImageInternal(e,s,t,n);if(this.reprojectedImage_){if(this.reprojectedRevision_==this.getRevision()&&J(this.reprojectedImage_.getProjection(),n)&&this.reprojectedImage_.getResolution()==s&&H(this.reprojectedImage_.getExtent(),e))return this.reprojectedImage_;this.reprojectedImage_.dispose(),this.reprojectedImage_=null}return this.reprojectedImage_=new Ue(a,n,e,s,t,(i,o,c)=>this.getImageInternal(i,o,c,a),this.getInterpolate()),this.reprojectedRevision_=this.getRevision(),this.reprojectedImage_}getImageInternal(e,s,t,n){if(this.loader){const a=$e(e,s,t,1),i=this.findNearestResolution(s);if(this.image&&(this.static_||(this.wantedExtent_&&W(this.wantedExtent_,a)||W(this.image.getExtent(),a))&&(this.wantedResolution_&&Y(this.wantedResolution_)===i||Y(this.image.getResolution())===i)))return this.image;this.wantedExtent_=a,this.wantedResolution_=i,this.image=new U(a,i,t,this.loader),this.image.addEventListener(V.CHANGE,this.handleImageChange.bind(this))}return this.image}handleImageChange(e){const s=e.target;let t;switch(s.getState()){case _.LOADING:this.loading=!0,t=F.IMAGELOADSTART;break;case _.LOADED:this.loading=!1,t=F.IMAGELOADEND;break;case _.ERROR:this.loading=!1,t=F.IMAGELOADERROR;break;default:return}this.hasListener(t)&&this.dispatchEvent(new Ze(t,s))}}function $e(r,e,s,t){const n=e/s,a=Z(r),i=q(T(r)/n,P),o=q(C(r)/n,P),c=q((t-1)*i/2,P),h=i+2*c,u=q((t-1)*o/2,P),g=o+2*u;return be(a,n,0,[h,g])}const le=Ve;class Qe extends U{constructor(e,s,t,n,a){const i=a!==void 0?_.IDLE:_.LOADED;super(e,s,t,i),this.loader_=a!==void 0?a:null,this.canvas_=n,this.error_=null}getError(){return this.error_}handleLoad_(e){e?(this.error_=e,this.state=_.ERROR):this.state=_.LOADED,this.changed()}load(){this.state==_.IDLE&&(this.state=_.LOADING,this.changed(),this.loader_(this.handleLoad_.bind(this)))}getImage(){return this.canvas_}}const Ke=Qe;class Je extends xe{constructor(e){e=e||{},super(e)}}const et=Je;class tt extends ze{constructor(e){super(e),this.image_=null}getImage(){return this.image_?this.image_.getImage():null}prepareFrame(e){const s=e.layerStatesArray[e.layerIndex],t=e.pixelRatio,n=e.viewState,a=n.resolution,i=this.getLayer().getSource(),o=e.viewHints;let c=e.extent;if(s.extent!==void 0&&(c=re(c,ee(s.extent,n.projection))),!o[te.ANIMATING]&&!o[te.INTERACTING]&&!oe(c))if(i){const h=n.projection,u=i.getImage(c,a,t,h);u&&(this.loadImage(u)?this.image_=u:u.getState()===_.EMPTY&&(this.image_=null))}else this.image_=null;return!!this.image_}getData(e){const s=this.frameState;if(!s)return null;const t=this.getLayer(),n=ye(s.pixelToCoordinateTransform,e.slice()),a=t.getExtent();if(a&&!we(a,n))return null;const i=this.image_.getExtent(),o=this.image_.getImage(),c=T(i),h=Math.floor(o.width*((n[0]-i[0])/c));if(h<0||h>=o.width)return null;const u=C(i),g=Math.floor(o.height*((i[3]-n[1])/u));return g<0||g>=o.height?null:this.getImageData(o,h,g)}renderFrame(e,s){const t=this.image_,n=t.getExtent(),a=t.getResolution(),[i,o]=Array.isArray(a)?a:[a,a],c=t.getPixelRatio(),h=e.layerStatesArray[e.layerIndex],u=e.pixelRatio,g=e.viewState,y=g.center,x=g.resolution,d=u*i/(x*c),R=u*o/(x*c),m=e.extent,S=g.resolution,l=g.rotation,f=Math.round(T(m)/S*u),p=Math.round(C(m)/S*u);se(this.pixelTransform,e.size[0]/2,e.size[1]/2,1/u,1/u,l,-f/2,-p/2),ve(this.inversePixelTransform,this.pixelTransform);const w=Ie(this.pixelTransform);this.useContainer(s,w,this.getBackground(e));const b=this.context,E=b.canvas;E.width!=f||E.height!=p?(E.width=f,E.height=p):this.containerReused||b.clearRect(0,0,f,p);let v=!1,L=!0;if(h.extent){const O=ee(h.extent,g.projection);L=Re(O,e.extent),v=L&&!W(O,e.extent),v&&this.clipUnrotated(b,e,O)}const I=t.getImage(),M=se(this.tempTransform,f/2,p/2,d,R,0,c*(n[0]-y[0])/i,c*(y[1]-n[3])/o);this.renderedResolution=o*u/c;const N=I.width*M[0],D=I.height*M[3];if(this.getLayer().getSource().getInterpolate()||(b.imageSmoothingEnabled=!1),this.preRender(b,e),L&&N>=.5&&D>=.5){const O=M[4],me=M[5],B=h.opacity;let K;B!==1&&(K=b.globalAlpha,b.globalAlpha=B),b.drawImage(I,0,0,+I.width,+I.height,O,me,N,D),B!==1&&(b.globalAlpha=K)}return this.postRender(b,e),v&&b.restore(),b.imageSmoothingEnabled=!0,w!==E.style.transform&&(E.style.transform=w),this.container}}const st=tt;class nt extends et{constructor(e){super(e)}createRenderer(){return new st(this)}getData(e){return super.getData(e)}}const he=nt;let ue=!0;try{new ImageData(10,10)}catch{ue=!1}let G;function at(r,e,s){if(ue)return new ImageData(r,e,s);G||(G=document.createElement("canvas").getContext("2d"));const t=G.createImageData(e,s);return t.data.set(r),t}function de(r){let e=!0;try{new ImageData(10,10)}catch{e=!1}function s(t,n,a){return e?new ImageData(t,n,a):{data:t,width:n,height:a}}return function(t){const n=t.buffers,a=t.meta,i=t.imageOps,o=t.width,c=t.height,h=n.length,u=n[0].byteLength;if(i){const d=new Array(h);for(let m=0;m<h;++m)d[m]=s(new Uint8ClampedArray(n[m]),o,c);return r(d,a).data.buffer}const g=new Uint8ClampedArray(u),y=new Array(h),x=new Array(h);for(let d=0;d<h;++d)y[d]=new Uint8ClampedArray(n[d]),x[d]=[0,0,0,0];for(let d=0;d<u;d+=4){for(let m=0;m<h;++m){const S=y[m];x[m][0]=S[d],x[m][1]=S[d+1],x[m][2]=S[d+2],x[m][3]=S[d+3]}const R=r(x,a);g[d]=R[0],g[d+1]=R[1],g[d+2]=R[2],g[d+3]=R[3]}return g.buffer}}function it(r,e){const t=Object.keys(r.lib||{}).map(function(a){return"const "+a+" = "+r.lib[a].toString()+";"}).concat(["const __minion__ = ("+de.toString()+")(",r.operation.toString(),");",'self.addEventListener("message", function(event) {',"  const buffer = __minion__(event.data);","  self.postMessage({buffer: buffer, meta: event.data.meta}, [buffer]);","});"]),n=new Worker(typeof Blob>"u"?"data:text/javascript;base64,"+Buffer.from(t.join(`
`),"binary").toString("base64"):URL.createObjectURL(new Blob(t,{type:"text/javascript"})));return n.addEventListener("message",e),n}function rt(r,e){const s=de(r.operation);let t=!1;return{postMessage:function(n){setTimeout(function(){t||e({data:{buffer:s(n),meta:n.meta}})},0)},terminate:function(){t=!0}}}class ot extends Le{constructor(e){super(),this._imageOps=!!e.imageOps;let s;e.threads===0?s=0:this._imageOps?s=1:s=e.threads||1;const t=new Array(s);if(s)for(let n=0;n<s;++n)t[n]=it(e,this._onWorkerMessage.bind(this,n));else t[0]=rt(e,this._onWorkerMessage.bind(this,0));this._workers=t,this._queue=[],this._maxQueueLength=e.queue||1/0,this._running=0,this._dataLookup={},this._job=null}process(e,s,t){this._enqueue({inputs:e,meta:s,callback:t}),this._dispatch()}_enqueue(e){for(this._queue.push(e);this._queue.length>this._maxQueueLength;)this._queue.shift().callback(null,null)}_dispatch(){if(this._running||this._queue.length===0)return;const e=this._queue.shift();this._job=e;const s=e.inputs[0].width,t=e.inputs[0].height,n=e.inputs.map(function(c){return c.data.buffer}),a=this._workers.length;if(this._running=a,a===1){this._workers[0].postMessage({buffers:n,meta:e.meta,imageOps:this._imageOps,width:s,height:t},n);return}const i=e.inputs[0].data.length,o=4*Math.ceil(i/4/a);for(let c=0;c<a;++c){const h=c*o,u=[];for(let g=0,y=n.length;g<y;++g)u.push(n[g].slice(h,h+o));this._workers[c].postMessage({buffers:u,meta:e.meta,imageOps:this._imageOps,width:s,height:t},u)}}_onWorkerMessage(e,s){this.disposed||(this._dataLookup[e]=s.data,--this._running,this._running===0&&this._resolveJob())}_resolveJob(){const e=this._job,s=this._workers.length;let t,n;if(s===1)t=new Uint8ClampedArray(this._dataLookup[0].buffer),n=this._dataLookup[0].meta;else{const a=e.inputs[0].data.length;t=new Uint8ClampedArray(a),n=new Array(s);const i=4*Math.ceil(a/4/s);for(let o=0;o<s;++o){const c=this._dataLookup[o].buffer,h=o*i;t.set(new Uint8ClampedArray(c),h),n[o]=this._dataLookup[o].meta}}this._job=null,this._dataLookup={},e.callback(null,at(t,e.inputs[0].width,e.inputs[0].height),n),this._dispatch()}disposeInternal(){for(let e=0;e<this._workers.length;++e)this._workers[e].terminate();this._workers.length=0}}const ae={BEFOREOPERATIONS:"beforeoperations",AFTEROPERATIONS:"afteroperations"};class ie extends ce{constructor(e,s,t){super(e),this.extent=s.extent,this.resolution=s.viewState.resolution/s.pixelRatio,this.data=t}}class ge extends le{constructor(e){super({projection:null}),this.on,this.once,this.un,this.processor_=null,this.operationType_=e.operationType!==void 0?e.operationType:"pixel",this.threads_=e.threads!==void 0?e.threads:1,this.layers_=ht(e.sources);const s=this.changed.bind(this);for(let t=0,n=this.layers_.length;t<n;++t)this.layers_[t].addEventListener(V.CHANGE,s);this.useResolutions_=e.resolutions!==null,this.tileQueue_=new Ee(function(){return 1},this.processSources_.bind(this)),this.requestedFrameState_,this.renderedImageCanvas_=null,this.renderedRevision_,this.frameState_={animate:!1,coordinateToPixelTransform:ne(),declutterTree:null,extent:null,index:0,layerIndex:0,layerStatesArray:lt(this.layers_),pixelRatio:1,pixelToCoordinateTransform:ne(),postRenderFunctions:[],size:[0,0],tileQueue:this.tileQueue_,time:Date.now(),usedTiles:{},viewState:{rotation:0},viewHints:[],wantedTiles:{},mapId:Ae(this),renderTargets:{}},this.setAttributions(function(t){const n=[];for(let a=0,i=e.sources.length;a<i;++a){const o=e.sources[a],c=o instanceof $?o:o.getSource();if(!c)continue;const h=c.getAttributions();if(typeof h=="function"){const u=h(t);n.push.apply(n,u)}}return n.length!==0?n:null}),e.operation!==void 0&&this.setOperation(e.operation,e.lib)}setOperation(e,s){this.processor_&&this.processor_.dispose(),this.processor_=new ot({operation:e,imageOps:this.operationType_==="image",queue:1,lib:s,threads:this.threads_}),this.changed()}updateFrameState_(e,s,t){const n=Object.assign({},this.frameState_);n.viewState=Object.assign({},n.viewState);const a=Z(e);n.size[0]=Math.ceil(T(e)/s),n.size[1]=Math.ceil(C(e)/s),n.extent=[a[0]-n.size[0]*s/2,a[1]-n.size[1]*s/2,a[0]+n.size[0]*s/2,a[1]+n.size[1]*s/2],n.time=Date.now();const i=n.viewState;return i.center=a,i.projection=t,i.resolution=s,n}allSourcesReady_(){let e=!0,s;for(let t=0,n=this.layers_.length;t<n;++t)if(s=this.layers_[t].getSource(),!s||s.getState()!=="ready"){e=!1;break}return e}getImage(e,s,t,n){if(!this.allSourcesReady_())return null;this.tileQueue_.loadMoreTiles(16,16),s=this.findNearestResolution(s);const a=this.updateFrameState_(e,s,n);if(this.requestedFrameState_=a,this.renderedImageCanvas_){const i=this.renderedImageCanvas_.getResolution(),o=this.renderedImageCanvas_.getExtent();(s!==i||!H(a.extent,o))&&(this.renderedImageCanvas_=null)}return(!this.renderedImageCanvas_||this.getRevision()!==this.renderedRevision_)&&this.processSources_(),a.animate&&requestAnimationFrame(this.changed.bind(this)),this.renderedImageCanvas_}processSources_(){const e=this.requestedFrameState_,s=this.layers_.length,t=new Array(s);for(let a=0;a<s;++a){e.layerIndex=a,e.renderTargets={};const i=ct(this.layers_[a],e);if(i)t[a]=i;else return}const n={};this.dispatchEvent(new ie(ae.BEFOREOPERATIONS,e,n)),this.processor_.process(t,n,this.onWorkerComplete_.bind(this,e))}onWorkerComplete_(e,s,t,n){if(s||!t)return;const a=e.extent,i=e.viewState.resolution;if(i!==this.requestedFrameState_.viewState.resolution||!H(a,this.requestedFrameState_.extent))return;let o;if(this.renderedImageCanvas_)o=this.renderedImageCanvas_.getImage().getContext("2d");else{const c=Math.round(T(a)/i),h=Math.round(C(a)/i);o=X(c,h),this.renderedImageCanvas_=new Ke(a,i,1,o.canvas)}o.putImageData(t,0,0),e.animate?requestAnimationFrame(this.changed.bind(this)):this.changed(),this.renderedRevision_=this.getRevision(),this.dispatchEvent(new ie(ae.AFTEROPERATIONS,e,n))}getResolutions(e){if(!this.useResolutions_)return null;let s=super.getResolutions();if(!s)for(let t=0,n=this.layers_.length;t<n&&(s=this.layers_[t].getSource().getResolutions(e),!s);++t);return s}disposeInternal(){this.processor_&&this.processor_.dispose(),super.disposeInternal()}}ge.prototype.dispose;let z=null;function ct(r,e){const s=r.getRenderer();if(!s)throw new Error("Unsupported layer type: "+r);if(!s.prepareFrame(e))return null;const t=e.size[0],n=e.size[1];if(t===0||n===0)return null;const a=s.renderFrame(e,null);let i;if(a instanceof HTMLCanvasElement)i=a;else{if(a&&(i=a.firstElementChild),!(i instanceof HTMLCanvasElement))throw new Error("Unsupported rendered element: "+i);if(i.width===t&&i.height===n)return i.getContext("2d").getImageData(0,0,t,n)}if(!z)z=X(t,n,void 0,{willReadFrequently:!0});else{const o=z.canvas;o.width!==t||o.height!==n?z=X(t,n,void 0,{willReadFrequently:!0}):z.clearRect(0,0,t,n)}return z.drawImage(i,0,0,t,n),z.getImageData(0,0,t,n)}function lt(r){return r.map(function(e){return e.getLayerState()})}function ht(r){const e=r.length,s=new Array(e);for(let t=0;t<e;++t)s[t]=ut(r[t]);return s}function ut(r){let e;return r instanceof $?r instanceof He?e=new We({source:r}):r instanceof le&&(e=new he({source:r})):e=r,e}const dt=ge,gt="Attributions",mt=`
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
`,pt=`
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
`,ft=`
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
`,_t=`
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
`;const Q=r=>(Ne("data-v-96b738d4"),r=r(),qe(),r),bt={id:"title"},xt=ke('<div id="map" class="map" data-v-96b738d4></div><table class="controls" data-v-96b738d4><tr data-v-96b738d4><td data-v-96b738d4><label for="hue" data-v-96b738d4>hue</label></td><td data-v-96b738d4><input id="hue" type="range" min="-180" max="180" value="0" data-v-96b738d4></td><td data-v-96b738d4><span id="hueOut" data-v-96b738d4></span> ° </td></tr><tr data-v-96b738d4><td data-v-96b738d4><label for="chroma" data-v-96b738d4>chroma</label></td><td data-v-96b738d4><input id="chroma" type="range" min="0" max="100" value="100" data-v-96b738d4></td><td data-v-96b738d4><span id="chromaOut" data-v-96b738d4></span> %</td></tr><tr data-v-96b738d4><td data-v-96b738d4><label for="lightness" data-v-96b738d4>lightness</label></td><td data-v-96b738d4><input id="lightness" type="range" min="0" max="100" value="100" data-v-96b738d4></td><td data-v-96b738d4><span id="lightnessOut" data-v-96b738d4></span> %</td></tr></table><p data-v-96b738d4>A raster source allows arbitrary manipulation of pixel values. In this example, RGB values on the input tile source are adjusted in a pixel-wise operation before being rendered with a second raster source. The raster operation takes pixels in in RGB space, converts them to HCL color space, adjusts the values based on the controls above, and then converts them back to RGB space for rendering.</p><h5 class="source-heading" data-v-96b738d4>html</h5>',4),yt={class:"language-html"},wt=Q(()=>A("h5",{class:"source-heading"},"css",-1)),vt={class:"language-css"},It=Q(()=>A("h5",{class:"source-heading"},"js",-1)),Rt={class:"language-js"},Et=Q(()=>A("h5",{class:"source-heading"},"package.json",-1)),At={class:"language-json"},Lt={__name:"index",setup(r){return Te(()=>{const n=.13793103448275862,a=6/29,i=3*a*a,o=a*a*a,c=2*Math.PI;function h(l){const f=x(l[0]),p=x(l[1]),w=x(l[2]),b=g((.4124564*f+.3575761*p+.1804375*w)/.95047),E=g((.2126729*f+.7151522*p+.072175*w)/1),v=g((.0193339*f+.119192*p+.9503041*w)/1.08883),L=116*E-16,I=500*(b-E),M=200*(E-v),N=Math.sqrt(I*I+M*M);let D=Math.atan2(M,I);return D<0&&(D+=c),l[0]=D,l[1]=N,l[2]=L,l}function u(l){const f=l[0],p=l[1],w=l[2],b=Math.cos(f)*p,E=Math.sin(f)*p;let v=(w+16)/116,L=isNaN(b)?v:v+b/500,I=isNaN(E)?v:v-E/200;return v=1*y(v),L=.95047*y(L),I=1.08883*y(I),l[0]=d(3.2404542*L-1.5371385*v-.4985314*I),l[1]=d(-.969266*L+1.8760108*v+.041556*I),l[2]=d(.0556434*L-.2040259*v+1.0572252*I),l}function g(l){return l>o?Math.pow(l,1/3):l/i+n}function y(l){return l>a?l*l*l:i*(l-n)}function x(l){return(l/=255)<=.04045?l/12.92:Math.pow((l+.055)/1.055,2.4)}function d(l){return 255*(l<=.0031308?12.92*l:1.055*Math.pow(l,1/2.4)-.055)}const R=new dt({sources:[new Xe({layer:"stamen_watercolor"})],operation:function(l,f){const p=h(l[0]);let w=p[0]+Math.PI*f.hue/180;return w<0?w+=c:w>c&&(w-=c),p[0]=w,p[1]*=f.chroma/100,p[2]*=f.lightness/100,u(p)},lib:{rgb2hcl:h,hcl2rgb:u,rgb2xyz:x,lab2xyz:y,xyz2lab:g,xyz2rgb:d,Xn:.95047,Yn:1,Zn:1.08883,t0:n,t1:a,t2:i,t3:o,twoPi:c}}),m={};R.on("beforeoperations",function(l){const f=l.data;for(const p in m)f[p]=Number(m[p].value)}),new Se({layers:[new he({source:R})],target:"map",view:new Me({center:[0,25e5],zoom:2,maxZoom:18})}),["hue","chroma","lightness"].forEach(function(l){const f=document.getElementById(l),p=document.getElementById(l+"Out");f.addEventListener("input",function(){p.innerText=f.value,R.changed()}),p.innerText=f.value,m[l]=f}),Prism.highlightAll()}),(e,s)=>(Ce(),Oe(je,null,[A("h4",bt,j(k(gt)),1),xt,A("pre",null,[A("code",yt,j("  "+k(mt).trim()),1)]),wt,A("pre",null,[A("code",vt,j("  "+k(pt).trim()),1)]),It,A("pre",null,[A("code",Rt,j("  "+k(ft).trim()),1)]),Et,A("pre",null,[A("code",At,j("  "+k(_t).trim()),1)])],64))}},Bt=De(Lt,[["__scopeId","data-v-96b738d4"]]);export{Bt as default};
