import{Z as S,Q as ye,w as V,aj as Le,x as we,ar as Fe,K as dt,L as Ie,G as k,cj as gt,as as pt,a3 as I,ck as xt,aI as se,a4 as Ze,cl as Tt,aH as Et,cg as vt,aM as B,aL as ue,ab as mt,ac as Ve,O as Re,cm as yt,aU as Rt,aT as Ue,cn as Pt,aV as Ct,co as St,a1 as Ke,_ as At,$ as Oe,h as bt,aK as Ye,cp as Dt,cq as Lt,cr as wt,cs as pe,ct as Ft,ci as Je,cu as It,cv as qe,ch as Ut,cw as Ot,cx as Nt,cy as m,cz as $t}from"./Layer-3b715193.js";import{n as Gt,q as Mt,E as Bt,r as jt,s as he,t as zt,I as Qe,R as Pe,h as H,d as Xt,a as Ne,L as Ht}from"./TileProperty-e33ea24b.js";function oe(r){return r instanceof Image||r instanceof HTMLCanvasElement||r instanceof HTMLVideoElement||r instanceof ImageBitmap?r:null}function xe(r){return r instanceof Uint8Array||r instanceof Uint8ClampedArray||r instanceof Float32Array||r instanceof DataView?r:null}let j=null;function Wt(r){j||(j=ye(r.width,r.height,void 0,{willReadFrequently:!0}));const e=j.canvas,t=r.width;e.width!==t&&(e.width=t);const n=r.height;return e.height!==n&&(e.height=n),j.clearRect(0,0,t,n),j.drawImage(r,0,0),j.getImageData(0,0,t,n).data}const kt=[256,256];class Zt extends Gt{constructor(e){const t=S.IDLE;super(e.tileCoord,t,{transition:e.transition,interpolate:e.interpolate}),this.loader_=e.loader,this.data_=null,this.error_=null,this.size_=e.size||null}getSize(){if(this.size_)return this.size_;const e=oe(this.data_);return e?[e.width,e.height]:kt}getData(){return this.data_}getError(){return this.error_}load(){if(this.state!==S.IDLE&&this.state!==S.ERROR)return;this.state=S.LOADING,this.changed();const e=this;this.loader_().then(function(t){e.data_=t,e.state=S.LOADED,e.changed()}).catch(function(t){e.error_=t,e.state=S.ERROR,e.changed()})}}const et=Zt;class Vt extends et{constructor(e){super({tileCoord:e.tileCoord,loader:()=>Promise.resolve(new Uint8Array(4)),interpolate:e.interpolate,transition:e.transition}),this.pixelRatio_=e.pixelRatio,this.gutter_=e.gutter,this.reprojData_=null,this.reprojError_=null,this.reprojSize_=void 0,this.sourceTileGrid_=e.sourceTileGrid,this.targetTileGrid_=e.targetTileGrid,this.wrappedTileCoord_=e.wrappedTileCoord||e.tileCoord,this.sourceTiles_=[],this.sourcesListenerKeys_=null,this.sourceZ_=0;const t=this.targetTileGrid_.getTileCoordExtent(this.wrappedTileCoord_),n=this.targetTileGrid_.getExtent();let i=this.sourceTileGrid_.getExtent();const s=n?V(t,n):t;if(Le(s)===0){this.state=S.EMPTY;return}const o=e.sourceProj,a=o.getExtent();a&&(i?i=V(i,a):i=a);const c=this.targetTileGrid_.getResolution(this.wrappedTileCoord_[0]),l=e.targetProj,u=Mt(o,l,s,c);if(!isFinite(u)||u<=0){this.state=S.EMPTY;return}const h=e.errorThreshold!==void 0?e.errorThreshold:Bt;if(this.triangulation_=new jt(o,l,s,i,u*h,c),this.triangulation_.getTriangles().length===0){this.state=S.EMPTY;return}this.sourceZ_=this.sourceTileGrid_.getZForResolution(u);let f=this.triangulation_.calculateSourceExtent();if(i&&(o.canWrapX()?(f[1]=we(f[1],i[1],i[3]),f[3]=we(f[3],i[1],i[3])):f=V(f,i)),!Le(f))this.state=S.EMPTY;else{const _=this.sourceTileGrid_.getTileRangeForExtentAndZ(f,this.sourceZ_),p=e.getTileFunction;for(let R=_.minX;R<=_.maxX;R++)for(let T=_.minY;T<=_.maxY;T++){const y=p(this.sourceZ_,R,T,this.pixelRatio_);y&&this.sourceTiles_.push(y)}this.sourceTiles_.length===0&&(this.state=S.EMPTY)}}getSize(){return this.reprojSize_}getData(){return this.reprojData_}getError(){return this.reprojError_}reproject_(){const e=[];if(this.sourceTiles_.forEach(t=>{if(!t||t.getState()!==S.LOADED)return;const n=t.getSize(),i=this.gutter_;let s;const o=xe(t.getData());o?s=o:s=Wt(oe(t.getData()));const a=[n[0]+2*i,n[1]+2*i],c=s instanceof Float32Array,l=a[0]*a[1],u=c?Float32Array:Uint8Array,h=new u(s.buffer),f=u.BYTES_PER_ELEMENT,_=f*h.length/l,p=h.byteLength/a[1],R=Math.floor(p/f/a[0]),T=l*R;let y=h;if(h.length!==T){y=new u(T);let v=0,g=0;const d=a[0]*R;for(let A=0;A<a[1];++A){for(let x=0;x<d;++x)y[v++]=h[g+x];g+=p/f}}e.push({extent:this.sourceTileGrid_.getTileCoordExtent(t.tileCoord),data:new Uint8Array(y.buffer),dataType:u,bytesPerPixel:_,pixelSize:a})}),this.sourceTiles_.length=0,e.length===0)this.state=S.ERROR;else{const t=this.wrappedTileCoord_[0],n=this.targetTileGrid_.getTileSize(t),i=typeof n=="number"?n:n[0],s=typeof n=="number"?n:n[1],o=this.targetTileGrid_.getResolution(t),a=this.sourceTileGrid_.getResolution(this.sourceZ_),c=this.targetTileGrid_.getTileCoordExtent(this.wrappedTileCoord_);let l,u;const h=e[0].bytesPerPixel,f=Math.ceil(h/3);for(let _=f-1;_>=0;--_){const p=[];for(let d=0,A=e.length;d<A;++d){const x=e[d],E=x.data,P=x.pixelSize,D=P[0],L=P[1],F=ye(D,L,he),O=F.createImageData(D,L),K=O.data;let ee=_*3;for(let M=0,_t=K.length;M<_t;M+=4)K[M]=E[ee],K[M+1]=E[ee+1],K[M+2]=E[ee+2],K[M+3]=255,ee+=h;F.putImageData(O,0,0),p.push({extent:x.extent,image:F.canvas})}const R=zt(i,s,this.pixelRatio_,a,this.sourceTileGrid_.getExtent(),o,c,this.triangulation_,p,this.gutter_,!1,!1,!1,!0);for(let d=0,A=p.length;d<A;++d){const E=p[d].image.getContext("2d");Fe(E),he.push(E.canvas)}const T=R.getContext("2d"),y=T.getImageData(0,0,R.width,R.height);Fe(T),he.push(R),l||(u=new Uint8Array(h*y.width*y.height),l=new e[0].dataType(u.buffer));const v=y.data;let g=_*3;for(let d=0,A=v.length;d<A;d+=4)v[d+3]===255?(u[g]=v[d],u[g+1]=v[d+1],u[g+2]=v[d+2]):(u[g]=0,u[g+1]=0,u[g+2]=0),g+=h}this.reprojData_=l,this.reprojSize_=[Math.round(i*this.pixelRatio_),Math.round(s*this.pixelRatio_)],this.state=S.LOADED}this.changed()}load(){if(this.state!==S.IDLE&&this.state!==S.ERROR)return;this.state=S.LOADING,this.changed();let e=0;this.sourcesListenerKeys_=[],this.sourceTiles_.forEach(t=>{const n=t.getState();if(n!==S.IDLE&&n!==S.LOADING)return;e++;const i=dt(t,k.CHANGE,function(){const s=t.getState();(s==S.LOADED||s==S.ERROR||s==S.EMPTY)&&(Ie(i),e--,e===0&&(this.unlistenSources_(),this.reproject_()))},this);this.sourcesListenerKeys_.push(i)}),e===0?setTimeout(this.reproject_.bind(this),0):this.sourceTiles_.forEach(function(t){t.getState()==S.IDLE&&t.load()})}unlistenSources_(){this.sourcesListenerKeys_.forEach(Ie),this.sourcesListenerKeys_=null}}const tt=Vt,Ce=34962,Se=34963,Kt=35040,Ae=35044,Yt=35048,Jt=5121,qt=5123,Qt=5125,rt=5126,$e=["experimental-webgl","webgl","webkit-3d","moz-webgl"];function er(r,e){e=Object.assign({preserveDrawingBuffer:!0,antialias:!gt},e);const t=$e.length;for(let n=0;n<t;++n)try{const i=r.getContext($e[n],e);if(i)return i}catch{}return null}const tr={STATIC_DRAW:Ae,STREAM_DRAW:Kt,DYNAMIC_DRAW:Yt};class rr{constructor(e,t){this.array_=null,this.type_=e,pt(e===Ce||e===Se,"A `WebGLArrayBuffer` must either be of type `ELEMENT_ARRAY_BUFFER` or `ARRAY_BUFFER`"),this.usage_=t!==void 0?t:tr.STATIC_DRAW}ofSize(e){return this.array_=new(fe(this.type_))(e),this}fromArray(e){return this.array_=fe(this.type_).from(e),this}fromArrayBuffer(e){return this.array_=new(fe(this.type_))(e),this}getType(){return this.type_}getArray(){return this.array_}getUsage(){return this.usage_}getSize(){return this.array_?this.array_.length:0}}function fe(r){switch(r){case Ce:return Float32Array;case Se:return Uint32Array;default:return Float32Array}}const nt=rr,te={LOST:"webglcontextlost",RESTORED:"webglcontextrestored"},nr=`
  precision mediump float;
  
  attribute vec2 a_position;
  varying vec2 v_texCoord;
  varying vec2 v_screenCoord;
  
  uniform vec2 u_screenSize;
   
  void main() {
    v_texCoord = a_position * 0.5 + 0.5;
    v_screenCoord = v_texCoord * u_screenSize;
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`,ir=`
  precision mediump float;
   
  uniform sampler2D u_image;
  uniform float u_opacity;
   
  varying vec2 v_texCoord;
   
  void main() {
    gl_FragColor = texture2D(u_image, v_texCoord) * u_opacity;
  }
`;class sr{constructor(e){this.gl_=e.webGlContext;const t=this.gl_;this.scaleRatio_=e.scaleRatio||1,this.renderTargetTexture_=t.createTexture(),this.renderTargetTextureSize_=null,this.frameBuffer_=t.createFramebuffer(),this.depthBuffer_=t.createRenderbuffer();const n=t.createShader(t.VERTEX_SHADER);t.shaderSource(n,e.vertexShader||nr),t.compileShader(n);const i=t.createShader(t.FRAGMENT_SHADER);t.shaderSource(i,e.fragmentShader||ir),t.compileShader(i),this.renderTargetProgram_=t.createProgram(),t.attachShader(this.renderTargetProgram_,n),t.attachShader(this.renderTargetProgram_,i),t.linkProgram(this.renderTargetProgram_),this.renderTargetVerticesBuffer_=t.createBuffer();const s=[-1,-1,1,-1,-1,1,1,-1,1,1,-1,1];t.bindBuffer(t.ARRAY_BUFFER,this.renderTargetVerticesBuffer_),t.bufferData(t.ARRAY_BUFFER,new Float32Array(s),t.STATIC_DRAW),this.renderTargetAttribLocation_=t.getAttribLocation(this.renderTargetProgram_,"a_position"),this.renderTargetUniformLocation_=t.getUniformLocation(this.renderTargetProgram_,"u_screenSize"),this.renderTargetOpacityLocation_=t.getUniformLocation(this.renderTargetProgram_,"u_opacity"),this.renderTargetTextureLocation_=t.getUniformLocation(this.renderTargetProgram_,"u_image"),this.uniforms_=[],e.uniforms&&Object.keys(e.uniforms).forEach(o=>{this.uniforms_.push({value:e.uniforms[o],location:t.getUniformLocation(this.renderTargetProgram_,o)})})}getGL(){return this.gl_}init(e){const t=this.getGL(),n=[t.drawingBufferWidth*this.scaleRatio_,t.drawingBufferHeight*this.scaleRatio_];if(t.bindFramebuffer(t.FRAMEBUFFER,this.getFrameBuffer()),t.bindRenderbuffer(t.RENDERBUFFER,this.getDepthBuffer()),t.viewport(0,0,n[0],n[1]),!this.renderTargetTextureSize_||this.renderTargetTextureSize_[0]!==n[0]||this.renderTargetTextureSize_[1]!==n[1]){this.renderTargetTextureSize_=n;const i=0,s=t.RGBA,o=0,a=t.RGBA,c=t.UNSIGNED_BYTE,l=null;t.bindTexture(t.TEXTURE_2D,this.renderTargetTexture_),t.texImage2D(t.TEXTURE_2D,i,s,n[0],n[1],o,a,c,l),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,this.renderTargetTexture_,0),t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_COMPONENT16,n[0],n[1]),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,this.depthBuffer_)}}apply(e,t,n,i){const s=this.getGL(),o=e.size;if(s.bindFramebuffer(s.FRAMEBUFFER,t?t.getFrameBuffer():null),s.activeTexture(s.TEXTURE0),s.bindTexture(s.TEXTURE_2D,this.renderTargetTexture_),!t){const c=I(s.canvas);if(!e.renderTargets[c]){const l=s.getContextAttributes();l&&l.preserveDrawingBuffer&&(s.clearColor(0,0,0,0),s.clearDepth(1),s.clear(s.COLOR_BUFFER_BIT|s.DEPTH_BUFFER_BIT)),e.renderTargets[c]=!0}}s.disable(s.DEPTH_TEST),s.enable(s.BLEND),s.blendFunc(s.ONE,s.ONE_MINUS_SRC_ALPHA),s.viewport(0,0,s.drawingBufferWidth,s.drawingBufferHeight),s.bindBuffer(s.ARRAY_BUFFER,this.renderTargetVerticesBuffer_),s.useProgram(this.renderTargetProgram_),s.enableVertexAttribArray(this.renderTargetAttribLocation_),s.vertexAttribPointer(this.renderTargetAttribLocation_,2,s.FLOAT,!1,0,0),s.uniform2f(this.renderTargetUniformLocation_,o[0],o[1]),s.uniform1i(this.renderTargetTextureLocation_,0);const a=e.layerStatesArray[e.layerIndex].opacity;s.uniform1f(this.renderTargetOpacityLocation_,a),this.applyUniforms(e),n&&n(s,e),s.drawArrays(s.TRIANGLES,0,6),i&&i(s,e)}getFrameBuffer(){return this.frameBuffer_}getDepthBuffer(){return this.depthBuffer_}applyUniforms(e){const t=this.getGL();let n,i=1;this.uniforms_.forEach(function(s){if(n=typeof s.value=="function"?s.value(e):s.value,n instanceof HTMLCanvasElement||n instanceof ImageData)s.texture||(s.texture=t.createTexture()),t.activeTexture(t[`TEXTURE${i}`]),t.bindTexture(t.TEXTURE_2D,s.texture),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),n instanceof ImageData?t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,n.width,n.height,0,t.UNSIGNED_BYTE,new Uint8Array(n.data)):t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,n),t.uniform1i(s.location,i++);else if(Array.isArray(n))switch(n.length){case 2:t.uniform2f(s.location,n[0],n[1]);return;case 3:t.uniform3f(s.location,n[0],n[1],n[2]);return;case 4:t.uniform4f(s.location,n[0],n[1],n[2],n[3]);return;default:return}else typeof n=="number"&&t.uniform1f(s.location,n)})}}const Ge=sr;function it(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function st(r,e){return r[0]=e[0],r[1]=e[1],r[4]=e[2],r[5]=e[3],r[12]=e[4],r[13]=e[5],r}const U={PROJECTION_MATRIX:"u_projectionMatrix",SCREEN_TO_WORLD_MATRIX:"u_screenToWorldMatrix",TIME:"u_time",ZOOM:"u_zoom",RESOLUTION:"u_resolution",ROTATION:"u_rotation",VIEWPORT_SIZE_PX:"u_viewportSizePx",PIXEL_RATIO:"u_pixelRatio",HIT_DETECTION:"u_hitDetection"},Y={UNSIGNED_BYTE:Jt,UNSIGNED_SHORT:qt,UNSIGNED_INT:Qt,FLOAT:rt},ae={};function Me(r){return"shared/"+r}let Be=0;function or(){const r="unique/"+Be;return Be+=1,r}function ar(r){let e=ae[r];if(!e){const t=document.createElement("canvas");t.width=1,t.height=1,t.style.position="absolute",t.style.left="0",e={users:0,context:er(t)},ae[r]=e}return e.users+=1,e.context}function lr(r){const e=ae[r];if(!e||(e.users-=1,e.users>0))return;const t=e.context,n=t.getExtension("WEBGL_lose_context");n&&n.loseContext();const i=t.canvas;i.width=1,i.height=1,delete ae[r]}class cr extends xt{constructor(e){super(),e=e||{},this.boundHandleWebGLContextLost_=this.handleWebGLContextLost.bind(this),this.boundHandleWebGLContextRestored_=this.handleWebGLContextRestored.bind(this),this.canvasCacheKey_=e.canvasCacheKey?Me(e.canvasCacheKey):or(),this.gl_=ar(this.canvasCacheKey_),this.bufferCache_={},this.extensionCache_={},this.currentProgram_=null,this.needsToBeRecreated_=!1;const t=this.gl_.canvas;t.addEventListener(te.LOST,this.boundHandleWebGLContextLost_),t.addEventListener(te.RESTORED,this.boundHandleWebGLContextRestored_),this.offsetRotateMatrix_=se(),this.offsetScaleMatrix_=se(),this.tmpMat4_=it(),this.uniformLocationsByProgram_={},this.attribLocationsByProgram_={},this.uniforms_=[],e.uniforms&&this.setUniforms(e.uniforms),this.postProcessPasses_=e.postProcesses?e.postProcesses.map(n=>new Ge({webGlContext:this.gl_,scaleRatio:n.scaleRatio,vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,uniforms:n.uniforms})):[new Ge({webGlContext:this.gl_})],this.shaderCompileErrors_=null,this.startTime_=Date.now()}setUniforms(e){this.uniforms_=[],this.addUniforms(e)}addUniforms(e){for(const t in e)this.uniforms_.push({name:t,value:e[t]})}canvasCacheKeyMatches(e){return this.canvasCacheKey_===Me(e)}getExtension(e){if(e in this.extensionCache_)return this.extensionCache_[e];const t=this.gl_.getExtension(e);return this.extensionCache_[e]=t,t}bindBuffer(e){const t=this.gl_,n=I(e);let i=this.bufferCache_[n];if(!i){const s=t.createBuffer();i={buffer:e,webGlBuffer:s},this.bufferCache_[n]=i}t.bindBuffer(e.getType(),i.webGlBuffer)}flushBufferData(e){const t=this.gl_;this.bindBuffer(e),t.bufferData(e.getType(),e.getArray(),e.getUsage())}deleteBuffer(e){const t=this.gl_,n=I(e),i=this.bufferCache_[n];i&&!t.isContextLost()&&t.deleteBuffer(i.webGlBuffer),delete this.bufferCache_[n]}disposeInternal(){const e=this.gl_.canvas;e.removeEventListener(te.LOST,this.boundHandleWebGLContextLost_),e.removeEventListener(te.RESTORED,this.boundHandleWebGLContextRestored_),lr(this.canvasCacheKey_),delete this.gl_}prepareDraw(e,t,n){const i=this.gl_,s=this.getCanvas(),o=e.size,a=e.pixelRatio;(s.width!==o[0]*a||s.height!==o[1]*a)&&(s.width=o[0]*a,s.height=o[1]*a,s.style.width=o[0]+"px",s.style.height=o[1]+"px");for(let c=this.postProcessPasses_.length-1;c>=0;c--)this.postProcessPasses_[c].init(e);i.bindTexture(i.TEXTURE_2D,null),i.clearColor(0,0,0,0),i.depthRange(0,1),i.clearDepth(1),i.clear(i.COLOR_BUFFER_BIT|i.DEPTH_BUFFER_BIT),i.enable(i.BLEND),i.blendFunc(i.ONE,t?i.ZERO:i.ONE_MINUS_SRC_ALPHA),n?(i.enable(i.DEPTH_TEST),i.depthFunc(i.LEQUAL)):i.disable(i.DEPTH_TEST)}bindTexture(e,t,n){const i=this.gl_;i.activeTexture(i.TEXTURE0+t),i.bindTexture(i.TEXTURE_2D,e),i.uniform1i(this.getUniformLocation(n),t)}prepareDrawToRenderTarget(e,t,n,i){const s=this.gl_,o=t.getSize();s.bindFramebuffer(s.FRAMEBUFFER,t.getFramebuffer()),s.bindRenderbuffer(s.RENDERBUFFER,t.getDepthbuffer()),s.viewport(0,0,o[0],o[1]),s.bindTexture(s.TEXTURE_2D,t.getTexture()),s.clearColor(0,0,0,0),s.depthRange(0,1),s.clearDepth(1),s.clear(s.COLOR_BUFFER_BIT|s.DEPTH_BUFFER_BIT),s.enable(s.BLEND),s.blendFunc(s.ONE,n?s.ZERO:s.ONE_MINUS_SRC_ALPHA),i?(s.enable(s.DEPTH_TEST),s.depthFunc(s.LEQUAL)):s.disable(s.DEPTH_TEST)}drawElements(e,t){const n=this.gl_;this.getExtension("OES_element_index_uint");const i=n.UNSIGNED_INT,s=4,o=t-e,a=e*s;n.drawElements(n.TRIANGLES,o,i,a)}finalizeDraw(e,t,n){for(let i=0,s=this.postProcessPasses_.length;i<s;i++)i===s-1?this.postProcessPasses_[i].apply(e,null,t,n):this.postProcessPasses_[i].apply(e,this.postProcessPasses_[i+1])}getCanvas(){return this.gl_.canvas}getGL(){return this.gl_}applyFrameState(e){const t=e.size,n=e.viewState.rotation,i=e.pixelRatio;this.setUniformFloatValue(U.TIME,(Date.now()-this.startTime_)*.001),this.setUniformFloatValue(U.ZOOM,e.viewState.zoom),this.setUniformFloatValue(U.RESOLUTION,e.viewState.resolution),this.setUniformFloatValue(U.PIXEL_RATIO,i),this.setUniformFloatVec2(U.VIEWPORT_SIZE_PX,[t[0],t[1]]),this.setUniformFloatValue(U.ROTATION,n)}applyHitDetectionUniform(e){const t=this.getUniformLocation(U.HIT_DETECTION);this.getGL().uniform1i(t,e?1:0),e&&this.setUniformFloatValue(U.PIXEL_RATIO,.5)}applyUniforms(e){const t=this.gl_;let n,i=0;this.uniforms_.forEach(s=>{if(n=typeof s.value=="function"?s.value(e):s.value,n instanceof HTMLCanvasElement||n instanceof HTMLImageElement||n instanceof ImageData||n instanceof WebGLTexture){n instanceof WebGLTexture&&!s.texture?(s.prevValue=void 0,s.texture=n):s.texture||(s.prevValue=void 0,s.texture=t.createTexture()),this.bindTexture(s.texture,i,s.name),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE);const o=!(n instanceof HTMLImageElement)||n.complete;!(n instanceof WebGLTexture)&&o&&s.prevValue!==n&&(s.prevValue=n,t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,n)),i++}else if(Array.isArray(n)&&n.length===6)this.setUniformMatrixValue(s.name,st(this.tmpMat4_,n));else if(Array.isArray(n)&&n.length<=4)switch(n.length){case 2:t.uniform2f(this.getUniformLocation(s.name),n[0],n[1]);return;case 3:t.uniform3f(this.getUniformLocation(s.name),n[0],n[1],n[2]);return;case 4:t.uniform4f(this.getUniformLocation(s.name),n[0],n[1],n[2],n[3]);return;default:return}else typeof n=="number"&&t.uniform1f(this.getUniformLocation(s.name),n)})}useProgram(e,t){this.gl_.useProgram(e),this.currentProgram_=e,this.applyFrameState(t),this.applyUniforms(t)}compileShader(e,t){const n=this.gl_,i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}getProgram(e,t){const n=this.gl_,i=this.compileShader(e,n.FRAGMENT_SHADER),s=this.compileShader(t,n.VERTEX_SHADER),o=n.createProgram();if(n.attachShader(o,i),n.attachShader(o,s),n.linkProgram(o),!n.getShaderParameter(i,n.COMPILE_STATUS)){const a=`Fragment shader compilation failed: ${n.getShaderInfoLog(i)}`;throw new Error(a)}if(n.deleteShader(i),!n.getShaderParameter(s,n.COMPILE_STATUS)){const a=`Vertex shader compilation failed: ${n.getShaderInfoLog(s)}`;throw new Error(a)}if(n.deleteShader(s),!n.getProgramParameter(o,n.LINK_STATUS)){const a=`GL program linking failed: ${n.getProgramInfoLog(o)}`;throw new Error(a)}return o}getUniformLocation(e){const t=I(this.currentProgram_);return this.uniformLocationsByProgram_[t]===void 0&&(this.uniformLocationsByProgram_[t]={}),this.uniformLocationsByProgram_[t][e]===void 0&&(this.uniformLocationsByProgram_[t][e]=this.gl_.getUniformLocation(this.currentProgram_,e)),this.uniformLocationsByProgram_[t][e]}getAttributeLocation(e){const t=I(this.currentProgram_);return this.attribLocationsByProgram_[t]===void 0&&(this.attribLocationsByProgram_[t]={}),this.attribLocationsByProgram_[t][e]===void 0&&(this.attribLocationsByProgram_[t][e]=this.gl_.getAttribLocation(this.currentProgram_,e)),this.attribLocationsByProgram_[t][e]}makeProjectionTransform(e,t){const n=e.size,i=e.viewState.rotation,s=e.viewState.resolution,o=e.viewState.center;return Ze(t,0,0,2/(s*n[0]),2/(s*n[1]),-i,-o[0],-o[1]),t}setUniformFloatValue(e,t){this.gl_.uniform1f(this.getUniformLocation(e),t)}setUniformFloatVec2(e,t){this.gl_.uniform2fv(this.getUniformLocation(e),t)}setUniformFloatVec4(e,t){this.gl_.uniform4fv(this.getUniformLocation(e),t)}setUniformMatrixValue(e,t){this.gl_.uniformMatrix4fv(this.getUniformLocation(e),!1,t)}enableAttributeArray_(e,t,n,i,s){const o=this.getAttributeLocation(e);o<0||(this.gl_.enableVertexAttribArray(o),this.gl_.vertexAttribPointer(o,t,n,!1,i,s))}enableAttributes(e){const t=ur(e);let n=0;for(let i=0;i<e.length;i++){const s=e[i];this.enableAttributeArray_(s.name,s.size,s.type||rt,t,n),n+=s.size*ot(s.type)}}handleWebGLContextLost(e){Tt(this.bufferCache_),this.currentProgram_=null,e.preventDefault()}handleWebGLContextRestored(){this.needsToBeRecreated_=!0}needsToBeRecreated(){return this.needsToBeRecreated_}createTexture(e,t,n){const i=this.gl_;n=n||i.createTexture();const s=0,o=i.RGBA,a=0,c=i.RGBA,l=i.UNSIGNED_BYTE;return i.bindTexture(i.TEXTURE_2D,n),t?i.texImage2D(i.TEXTURE_2D,s,o,c,l,t):i.texImage2D(i.TEXTURE_2D,s,o,e[0],e[1],a,c,l,null),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),n}}function ur(r){let e=0;for(let t=0;t<r.length;t++){const n=r[t];e+=n.size*ot(n.type)}return e}function ot(r){switch(r){case Y.UNSIGNED_BYTE:return Uint8Array.BYTES_PER_ELEMENT;case Y.UNSIGNED_SHORT:return Uint16Array.BYTES_PER_ELEMENT;case Y.UNSIGNED_INT:return Uint32Array.BYTES_PER_ELEMENT;case Y.FLOAT:default:return Float32Array.BYTES_PER_ELEMENT}}class be extends Et{constructor(e,t){super(e),t=t||{},this.inversePixelTransform_=se(),this.pixelContext_=null,this.postProcesses_=t.postProcesses,this.uniforms_=t.uniforms,this.helper,e.addChangeListener(vt.MAP,this.removeHelper.bind(this)),this.dispatchPreComposeEvent=this.dispatchPreComposeEvent.bind(this),this.dispatchPostComposeEvent=this.dispatchPostComposeEvent.bind(this)}dispatchPreComposeEvent(e,t){const n=this.getLayer();if(n.hasListener(B.PRECOMPOSE)){const i=new ue(B.PRECOMPOSE,void 0,t,e);n.dispatchEvent(i)}}dispatchPostComposeEvent(e,t){const n=this.getLayer();if(n.hasListener(B.POSTCOMPOSE)){const i=new ue(B.POSTCOMPOSE,void 0,t,e);n.dispatchEvent(i)}}reset(e){this.uniforms_=e.uniforms,this.helper&&this.helper.setUniforms(this.uniforms_)}removeHelper(){this.helper&&(this.helper.dispose(),delete this.helper)}prepareFrame(e){if(this.getLayer().getRenderSource()){let t=!0,n=-1,i;for(let o=0,a=e.layerStatesArray.length;o<a;o++){const c=e.layerStatesArray[o].layer,l=c.getRenderer();if(!(l instanceof be)){t=!0;continue}const u=c.getClassName();if((t||u!==i)&&(n+=1,t=!1),i=u,l===this)break}const s="map/"+e.mapId+"/group/"+n;(!this.helper||!this.helper.canvasCacheKeyMatches(s)||this.helper.needsToBeRecreated())&&(this.removeHelper(),this.helper=new cr({postProcesses:this.postProcesses_,uniforms:this.uniforms_,canvasCacheKey:s}),i&&(this.helper.getCanvas().className=i),this.afterHelperCreated())}return this.prepareFrameInternal(e)}afterHelperCreated(){}prepareFrameInternal(e){return!0}disposeInternal(){this.removeHelper(),super.disposeInternal()}dispatchRenderEvent_(e,t,n){const i=this.getLayer();if(i.hasListener(e)){Ze(this.inversePixelTransform_,0,0,n.pixelRatio,-n.pixelRatio,0,0,-n.size[1]);const s=new ue(e,this.inversePixelTransform_,n,t);i.dispatchEvent(s)}}preRender(e,t){this.dispatchRenderEvent_(B.PRERENDER,e,t)}postRender(e,t){this.dispatchRenderEvent_(B.POSTRENDER,e,t)}}const hr=be;var at={exports:{}};at.exports=le;at.exports.default=le;function le(r,e,t){t=t||2;var n=e&&e.length,i=n?e[0]*t:r.length,s=lt(r,0,i,t,!0),o=[];if(!s||s.next===s.prev)return o;var a,c,l,u,h,f,_;if(n&&(s=pr(r,e,s,t)),r.length>80*t){a=l=r[0],c=u=r[1];for(var p=t;p<i;p+=t)h=r[p],f=r[p+1],h<a&&(a=h),f<c&&(c=f),h>l&&(l=h),f>u&&(u=f);_=Math.max(l-a,u-c),_=_!==0?32767/_:0}return J(s,o,t,a,c,_,0),o}function lt(r,e,t,n,i){var s,o;if(i===ve(r,e,t,n)>0)for(s=e;s<t;s+=n)o=je(s,r[s],r[s+1],o);else for(s=t-n;s>=e;s-=n)o=je(s,r[s],r[s+1],o);return o&&ce(o,o.next)&&(Q(o),o=o.next),o}function G(r,e){if(!r)return r;e||(e=r);var t=r,n;do if(n=!1,!t.steiner&&(ce(t,t.next)||b(t.prev,t,t.next)===0)){if(Q(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function J(r,e,t,n,i,s,o){if(r){!o&&s&&mr(r,n,i,s);for(var a=r,c,l;r.prev!==r.next;){if(c=r.prev,l=r.next,s?_r(r,n,i,s):fr(r)){e.push(c.i/t|0),e.push(r.i/t|0),e.push(l.i/t|0),Q(r),r=l.next,a=l.next;continue}if(r=l,r===a){o?o===1?(r=dr(G(r),e,t),J(r,e,t,n,i,s,2)):o===2&&gr(r,e,t,n,i,s):J(G(r),e,t,n,i,s,1);break}}}}function fr(r){var e=r.prev,t=r,n=r.next;if(b(e,t,n)>=0)return!1;for(var i=e.x,s=t.x,o=n.x,a=e.y,c=t.y,l=n.y,u=i<s?i<o?i:o:s<o?s:o,h=a<c?a<l?a:l:c<l?c:l,f=i>s?i>o?i:o:s>o?s:o,_=a>c?a>l?a:l:c>l?c:l,p=n.next;p!==e;){if(p.x>=u&&p.x<=f&&p.y>=h&&p.y<=_&&Z(i,a,s,c,o,l,p.x,p.y)&&b(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function _r(r,e,t,n){var i=r.prev,s=r,o=r.next;if(b(i,s,o)>=0)return!1;for(var a=i.x,c=s.x,l=o.x,u=i.y,h=s.y,f=o.y,_=a<c?a<l?a:l:c<l?c:l,p=u<h?u<f?u:f:h<f?h:f,R=a>c?a>l?a:l:c>l?c:l,T=u>h?u>f?u:f:h>f?h:f,y=Te(_,p,e,t,n),v=Te(R,T,e,t,n),g=r.prevZ,d=r.nextZ;g&&g.z>=y&&d&&d.z<=v;){if(g.x>=_&&g.x<=R&&g.y>=p&&g.y<=T&&g!==i&&g!==o&&Z(a,u,c,h,l,f,g.x,g.y)&&b(g.prev,g,g.next)>=0||(g=g.prevZ,d.x>=_&&d.x<=R&&d.y>=p&&d.y<=T&&d!==i&&d!==o&&Z(a,u,c,h,l,f,d.x,d.y)&&b(d.prev,d,d.next)>=0))return!1;d=d.nextZ}for(;g&&g.z>=y;){if(g.x>=_&&g.x<=R&&g.y>=p&&g.y<=T&&g!==i&&g!==o&&Z(a,u,c,h,l,f,g.x,g.y)&&b(g.prev,g,g.next)>=0)return!1;g=g.prevZ}for(;d&&d.z<=v;){if(d.x>=_&&d.x<=R&&d.y>=p&&d.y<=T&&d!==i&&d!==o&&Z(a,u,c,h,l,f,d.x,d.y)&&b(d.prev,d,d.next)>=0)return!1;d=d.nextZ}return!0}function dr(r,e,t){var n=r;do{var i=n.prev,s=n.next.next;!ce(i,s)&&ct(i,n,n.next,s)&&q(i,s)&&q(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),Q(n),Q(n.next),n=r=s),n=n.next}while(n!==r);return G(n)}function gr(r,e,t,n,i,s){var o=r;do{for(var a=o.next.next;a!==o.prev;){if(o.i!==a.i&&Pr(o,a)){var c=ut(o,a);o=G(o,o.next),c=G(c,c.next),J(o,e,t,n,i,s,0),J(c,e,t,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function pr(r,e,t,n){var i=[],s,o,a,c,l;for(s=0,o=e.length;s<o;s++)a=e[s]*n,c=s<o-1?e[s+1]*n:r.length,l=lt(r,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(Rr(l));for(i.sort(xr),s=0;s<i.length;s++)t=Tr(i[s],t);return t}function xr(r,e){return r.x-e.x}function Tr(r,e){var t=Er(r,e);if(!t)return e;var n=ut(t,r);return G(n,n.next),G(t,t.next)}function Er(r,e){var t=e,n=r.x,i=r.y,s=-1/0,o;do{if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){var a=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(a<=n&&a>s&&(s=a,o=t.x<t.next.x?t:t.next,a===n))return o}t=t.next}while(t!==e);if(!o)return null;var c=o,l=o.x,u=o.y,h=1/0,f;t=o;do n>=t.x&&t.x>=l&&n!==t.x&&Z(i<u?n:s,i,l,u,i<u?s:n,i,t.x,t.y)&&(f=Math.abs(i-t.y)/(n-t.x),q(t,r)&&(f<h||f===h&&(t.x>o.x||t.x===o.x&&vr(o,t)))&&(o=t,h=f)),t=t.next;while(t!==c);return o}function vr(r,e){return b(r.prev,r,e.prev)<0&&b(e.next,r,r.next)<0}function mr(r,e,t,n){var i=r;do i.z===0&&(i.z=Te(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,yr(i)}function yr(r){var e,t,n,i,s,o,a,c,l=1;do{for(t=r,r=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,c--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,l*=2}while(o>1);return r}function Te(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function Rr(r){var e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Z(r,e,t,n,i,s,o,a){return(i-o)*(e-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(i-o)*(n-a)}function Pr(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!Cr(r,e)&&(q(r,e)&&q(e,r)&&Sr(r,e)&&(b(r.prev,r,e.prev)||b(r,e.prev,e))||ce(r,e)&&b(r.prev,r,r.next)>0&&b(e.prev,e,e.next)>0)}function b(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function ce(r,e){return r.x===e.x&&r.y===e.y}function ct(r,e,t,n){var i=ne(b(r,e,t)),s=ne(b(r,e,n)),o=ne(b(t,n,r)),a=ne(b(t,n,e));return!!(i!==s&&o!==a||i===0&&re(r,t,e)||s===0&&re(r,n,e)||o===0&&re(t,r,n)||a===0&&re(t,e,n))}function re(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function ne(r){return r>0?1:r<0?-1:0}function Cr(r,e){var t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&ct(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function q(r,e){return b(r.prev,r,r.next)<0?b(r,e,r.next)>=0&&b(r,r.prev,e)>=0:b(r,e,r.prev)<0||b(r,r.next,e)<0}function Sr(r,e){var t=r,n=!1,i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function ut(r,e){var t=new Ee(r.i,r.x,r.y),n=new Ee(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function je(r,e,t,n){var i=new Ee(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Q(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Ee(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}le.deviation=function(r,e,t,n){var i=e&&e.length,s=i?e[0]*t:r.length,o=Math.abs(ve(r,0,s,t));if(i)for(var a=0,c=e.length;a<c;a++){var l=e[a]*t,u=a<c-1?e[a+1]*t:r.length;o-=Math.abs(ve(r,l,u,t))}var h=0;for(a=0;a<n.length;a+=3){var f=n[a]*t,_=n[a+1]*t,p=n[a+2]*t;h+=Math.abs((r[f]-r[p])*(r[_+1]-r[f+1])-(r[f]-r[_])*(r[p+1]-r[f+1]))}return o===0&&h===0?0:Math.abs((h-o)/o)};function ve(r,e,t,n){for(var i=0,s=e,o=t-n;s<t;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}le.flatten=function(r){for(var e=r[0][0].length,t={vertices:[],holes:[],dimensions:e},n=0,i=0;i<r.length;i++){for(var s=0;s<r[i].length;s++)for(var o=0;o<e;o++)t.vertices.push(r[i][s][o]);i>0&&(n+=r[i-1].length,t.holes.push(n))}return t};const ze=.985;function qr(r,e){e=e||[];const t=256,n=t-1;return e[0]=Math.floor(r/t/t/t)/n,e[1]=Math.floor(r/t/t)%t/n,e[2]=Math.floor(r/t)%t/n,e[3]=r%t/n,e}function Qr(r){let e=0;const t=256,n=t-1;return e+=Math.round(r[0]*t*t*t*n),e+=Math.round(r[1]*t*t*n),e+=Math.round(r[2]*t*n),e+=Math.round(r[3]*n),e}class Ar{constructor(e,t){this.name=e,this.data=t,this.texture_=null}getTexture(e){if(!this.texture_){const t=e.createTexture();e.bindTexture(e.TEXTURE_2D,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,this.data.length/4,1,0,e.RGBA,e.UNSIGNED_BYTE,this.data),this.texture_=t}return this.texture_}}const br=Ar;class Dr extends mt{constructor(e){super(),this.tile,this.handleTileChange_=this.handleTileChange_.bind(this),this.gutter_=e.gutter||0,this.helper_=e.helper,this.loaded=!1,this.ready=!1}setTile(e){if(e!==this.tile)if(this.tile&&this.tile.removeEventListener(k.CHANGE,this.handleTileChange_),this.tile=e,this.loaded=e.getState()===S.LOADED,this.loaded)this.uploadTile();else{if(e instanceof Qe){const t=e.getImage();t instanceof Image&&!t.crossOrigin&&(t.crossOrigin="anonymous")}e.addEventListener(k.CHANGE,this.handleTileChange_)}}uploadTile(){Ve()}setReady(){this.ready=!0,this.dispatchEvent(k.CHANGE)}handleTileChange_(){this.tile.getState()===S.LOADED&&(this.loaded=!0,this.uploadTile())}disposeInternal(){this.tile.removeEventListener(k.CHANGE,this.handleTileChange_)}}const Lr=Dr;function ht(r,e,t){const n=t?r.LINEAR:r.NEAREST;r.bindTexture(r.TEXTURE_2D,e),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,n),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,n)}function wr(r,e,t,n){ht(r,e,n),r.texImage2D(r.TEXTURE_2D,0,r.RGBA,r.RGBA,r.UNSIGNED_BYTE,t)}function Xe(r,e,t,n,i,s){const o=r.getGL();let a,c;t instanceof Float32Array?(a=o.FLOAT,r.getExtension("OES_texture_float"),c=r.getExtension("OES_texture_float_linear")!==null):(a=o.UNSIGNED_BYTE,c=!0),ht(o,e,s&&c);const l=t.byteLength/n[1];let u=1;l%8===0?u=8:l%4===0?u=4:l%2===0&&(u=2);let h;switch(i){case 1:{h=o.LUMINANCE;break}case 2:{h=o.LUMINANCE_ALPHA;break}case 3:{h=o.RGB;break}case 4:{h=o.RGBA;break}default:throw new Error(`Unsupported number of bands: ${i}`)}const f=o.getParameter(o.UNPACK_ALIGNMENT);o.pixelStorei(o.UNPACK_ALIGNMENT,u),o.texImage2D(o.TEXTURE_2D,0,h,n[0],n[1],0,h,a,t),o.pixelStorei(o.UNPACK_ALIGNMENT,f)}let W=null;function Fr(){W=ye(1,1,void 0,{willReadFrequently:!0})}class Ir extends Lr{constructor(e){super(e),this.textures=[],this.renderSize_=Re(e.grid.getTileSize(e.tile.tileCoord[0])),this.bandCount=NaN;const t=new nt(Ce,Ae);t.fromArray([0,1,1,1,1,0,0,0]),this.helper_.flushBufferData(t),this.coords=t,this.setTile(e.tile)}uploadTile(){const e=this.helper_,t=e.getGL(),n=this.tile;this.textures.length=0;let i;n instanceof Qe||n instanceof Pe?i=n.getImage():i=n.getData();const s=oe(i);if(s){const v=t.createTexture();this.textures.push(v),this.bandCount=4,wr(t,v,s,n.interpolate),this.setReady();return}i=xe(i);const o=n.getSize(),a=[o[0]+2*this.gutter_,o[1]+2*this.gutter_],c=i instanceof Float32Array,l=a[0]*a[1],u=c?Float32Array:Uint8Array,h=u.BYTES_PER_ELEMENT,f=i.byteLength/a[1];this.bandCount=Math.floor(f/h/a[0]);const _=Math.ceil(this.bandCount/4);if(_===1){const v=t.createTexture();this.textures.push(v),Xe(e,v,i,a,this.bandCount,n.interpolate),this.setReady();return}const p=new Array(_);for(let v=0;v<_;++v){const g=t.createTexture();this.textures.push(g);const d=v<_-1?4:(this.bandCount-1)%4+1;p[v]=new u(l*d)}let R=0,T=0;const y=a[0]*this.bandCount;for(let v=0;v<a[1];++v){for(let g=0;g<y;++g){const d=i[T+g],A=Math.floor(R/this.bandCount),x=g%this.bandCount,E=Math.floor(x/4),P=p[E],D=P.length/l,L=x%4;P[A*D+L]=d,++R}T+=f/h}for(let v=0;v<_;++v){const g=this.textures[v],d=p[v],A=d.length/l;Xe(e,g,d,a,A,n.interpolate)}this.setReady()}disposeInternal(){const e=this.helper_.getGL();this.helper_.deleteBuffer(this.coords);for(let t=0;t<this.textures.length;++t)e.deleteTexture(this.textures[t]);this.tile.removeEventListener(k.CHANGE,this.handleTileChange_)}getImagePixelData_(e,t,n){const i=this.gutter_,s=this.renderSize_[0],o=this.renderSize_[1];W||Fr(),W.clearRect(0,0,1,1);const a=e.width,c=e.height,l=a-2*i,u=c-2*i,h=i+Math.floor(l*(t/s)),f=i+Math.floor(u*(n/o));let _;try{W.drawImage(e,h,f,1,1,0,0,1,1),_=W.getImageData(0,0,1,1).data}catch{return W=null,null}return _}getArrayPixelData_(e,t,n,i){const s=this.gutter_,o=this.renderSize_[0],a=this.renderSize_[1],c=t[0],l=t[1],u=c+2*s,h=l+2*s,f=s+Math.floor(c*(n/o)),_=s+Math.floor(l*(i/a));if(e instanceof DataView){const R=e.byteLength/(u*h),T=R*(_*u+f),y=e.buffer.slice(T,T+R);return new DataView(y)}const p=this.bandCount*(_*u+f);return e.slice(p,p+this.bandCount)}getPixelData(e,t){if(!this.loaded)return null;if(this.tile instanceof et){const n=this.tile.getData(),i=xe(n);if(i){const s=this.tile.getSize();return this.getArrayPixelData_(i,s,e,t)}return this.getImagePixelData_(oe(n),e,t)}return this.getImagePixelData_(this.tile.getImage(),e,t)}}const Ur=Ir,Or={TILE_TRANSFORM:"u_tileTransform",TRANSITION_ALPHA:"u_transitionAlpha",DEPTH:"u_depth",RENDER_EXTENT:"u_renderExtent",PATTERN_ORIGIN:"u_patternOrigin",RESOLUTION:"u_resolution",ZOOM:"u_zoom",GLOBAL_ALPHA:"u_globalAlpha",PROJECTION_MATRIX:"u_projectionMatrix",SCREEN_TO_WORLD_MATRIX:"u_screenToWorldMatrix"},Nr={};function He(r){return 1/(r+2)}function $r(){return{tileIds:new Set,representationsByZ:{}}}function We(r,e){return r.tileIds.has(I(e))}function ke(r,e,t){const n=r.representationsByZ;t in n||(n[t]=new Set),n[t].add(e),r.tileIds.add(I(e.tile))}function _e(r,e){const t=r.layerStatesArray[r.layerIndex];t.extent&&(e=V(e,Ke(t.extent,r.viewState.projection)));const n=t.layer.getRenderSource();if(!n.getWrapX()){const i=n.getTileGridForProjection(r.viewState.projection).getExtent();i&&(e=V(e,i))}return e}function me(r,e){return`${r.getKey()},${H(e)}`}class Gr extends hr{constructor(e,t){super(e,{uniforms:t.uniforms,postProcesses:t.postProcesses}),this.renderComplete=!1,this.tileTransform_=se(),this.tempMat4=it(),this.tempTileRange_=new Xt(0,0,0,0),this.tempTileCoord_=Ne(0,0,0),this.tempSize_=[0,0];const n=t.cacheSize!==void 0?t.cacheSize:512;this.tileRepresentationCache=new Ht(n),this.frameState=null,this.projection_=void 0}reset(e){super.reset({uniforms:e.uniforms})}isDrawableTile_(e){const t=this.getLayer(),n=e.getState(),i=t.getUseInterimTilesOnError();return n==S.LOADED||n==S.EMPTY||n==S.ERROR&&!i}prepareFrameInternal(e){this.projection_?e.viewState.projection!==this.projection_&&(this.clearCache(),this.projection_=e.viewState.projection):this.projection_=e.viewState.projection;const n=this.getLayer().getRenderSource();return!n||yt(_e(e,e.extent))?!1:n.getState()==="ready"}createTileRepresentation(e){return Ve()}enqueueTiles(e,t,n,i,s){const o=e.viewState,a=this.getLayer(),c=a.getRenderSource(),l=c.getTileGridForProjection(o.projection),u=c.getGutterForProjection(o.projection),h=I(c);h in e.wantedTiles||(e.wantedTiles[h]={});const f=e.wantedTiles[h],_=this.tileRepresentationCache,p=a.getMapInternal(),R=Math.max(n-s,l.getMinZoom(),l.getZForResolution(Math.min(a.getMaxResolution(),p?p.getView().getResolutionForZoom(Math.max(a.getMinZoom(),0)):l.getResolution(0)),c.zDirection));for(let T=n;T>=R;--T){const y=l.getTileRangeForExtentAndZ(t,T,this.tempTileRange_),v=l.getResolution(T);for(let g=y.minX;g<=y.maxX;++g)for(let d=y.minY;d<=y.maxY;++d){const A=Ne(T,g,d,this.tempTileCoord_),x=me(c,A);let E,P;if(_.containsKey(x)&&(E=_.get(x),P=E.tile),(!E||E.tile.key!==c.getKey())&&(P=c.getTile(T,g,d,e.pixelRatio,o.projection)),We(i,P))continue;if(!E)E=this.createTileRepresentation({tile:P,grid:l,helper:this.helper,gutter:u}),_.set(x,E);else if(this.isDrawableTile_(P))E.setTile(P);else{const L=P.getInterimTile();E.setTile(L)}ke(i,E,T);const D=P.getKey();f[D]=!0,P.getState()===S.IDLE&&(e.tileQueue.isKeyQueued(D)||e.tileQueue.enqueue([P,h,l.getTileCoordCenter(A),v]))}}}beforeTilesRender(e,t){this.helper.prepareDraw(this.frameState,!t,!0)}beforeTilesMaskRender(e){return!1}renderTile(e,t,n,i,s,o,a,c,l,u,h){}renderTileMask(e,t,n,i){}drawTile_(e,t,n,i,s,o,a){if(!t.ready)return;const l=t.tile.tileCoord,u=H(l),h=u in o?o[u]:1,f=a.getResolution(n),_=Re(a.getTileSize(n),this.tempSize_),p=a.getOrigin(n),R=a.getTileCoordExtent(l),T=h<1?-1:He(n);h<1&&(e.animate=!0);const y=e.viewState,v=y.center[0],g=y.center[1],d=_[0]+2*i,A=_[1]+2*i,x=d/A,E=(v-p[0])/(_[0]*f),P=(p[1]-g)/(_[1]*f),D=y.resolution/f,L=l[1],F=l[2];Rt(this.tileTransform_),Ue(this.tileTransform_,2/(e.size[0]*D/d),-2/(e.size[1]*D/d)),Pt(this.tileTransform_,y.rotation),Ue(this.tileTransform_,1,1/x),Ct(this.tileTransform_,(_[0]*(L-E)-i)/d,(_[1]*(F-P)-i)/A),this.renderTile(t,this.tileTransform_,e,s,f,_,p,R,T,i,h)}renderFrame(e){this.frameState=e,this.renderComplete=!0;const t=this.helper.getGL();this.preRender(t,e);const n=e.viewState,i=this.getLayer(),s=i.getRenderSource(),o=s.getTileGridForProjection(n.projection),a=s.getGutterForProjection(n.projection),c=_e(e,e.extent),l=o.getZForResolution(n.resolution,s.zDirection),u=$r(),h=i.getPreload();if(e.nextExtent){const x=o.getZForResolution(n.nextResolution,s.zDirection),E=_e(e,e.nextExtent);this.enqueueTiles(e,E,x,u,h)}this.enqueueTiles(e,c,l,u,0),h>0&&setTimeout(()=>{this.enqueueTiles(e,c,l-1,u,h-1)},0);const f={},_=I(this),p=e.time;let R=!1;for(const x of u.representationsByZ[l]){const E=x.tile;if((E instanceof Pe||E instanceof tt)&&E.getState()===S.EMPTY)continue;const P=E.tileCoord;if(x.ready){const F=E.getAlpha(_,p);if(F===1){E.endTransition(_);continue}R=!0;const O=H(P);f[O]=F}if(this.renderComplete=!1,this.findAltTiles_(o,P,l+1,u))continue;const L=o.getMinZoom();for(let F=l-1;F>=L&&!this.findAltTiles_(o,P,F,u);--F);}const T=u.representationsByZ,y=Object.keys(T).map(Number).sort(St);if(this.beforeTilesMaskRender(e))for(let x=0,E=y.length;x<E;++x){const P=y[x];for(const D of T[P]){const L=D.tile.tileCoord;if(H(L)in f)continue;const O=o.getTileCoordExtent(L);this.renderTileMask(D,P,O,He(P))}}this.beforeTilesRender(e,R);for(let x=0,E=y.length;x<E;++x){const P=y[x];for(const D of T[P]){const L=D.tile.tileCoord;H(L)in f||this.drawTile_(e,D,P,a,c,f,o)}}for(const x of T[l]){const E=x.tile.tileCoord;H(E)in f&&this.drawTile_(e,x,l,a,c,f,o)}this.helper.finalizeDraw(e,this.dispatchPreComposeEvent,this.dispatchPostComposeEvent);const g=this.helper.getCanvas(),d=this.tileRepresentationCache;for(;d.canExpireCache();)d.pop().dispose();const A=function(x,E){s.updateCacheSize(.1,E.viewState.projection),s.expireCache(E.viewState.projection,Nr)};return e.postRenderFunctions.push(A),this.postRender(t,e),g}findAltTiles_(e,t,n,i){const s=e.getTileRangeForTileCoordAndZ(t,n,this.tempTileRange_);if(!s)return!1;let o=!0;const a=this.tileRepresentationCache,c=this.getLayer().getRenderSource();for(let l=s.minX;l<=s.maxX;++l)for(let u=s.minY;u<=s.maxY;++u){const h=me(c,[n,l,u]);let f=!1;if(a.containsKey(h)){const _=a.get(h);_.ready&&!We(i,_.tile)&&(ke(i,_,n),f=!0)}f||(o=!1)}return o}clearCache(){const e=this.tileRepresentationCache;e.forEach(t=>t.dispose()),e.clear()}removeHelper(){this.helper&&this.clearCache(),super.removeHelper()}disposeInternal(){super.disposeInternal(),delete this.frameState}}const Mr=Gr,w={...Or,TILE_TEXTURE_ARRAY:"u_tileTextures",TEXTURE_PIXEL_WIDTH:"u_texturePixelWidth",TEXTURE_PIXEL_HEIGHT:"u_texturePixelHeight",TEXTURE_RESOLUTION:"u_textureResolution",TEXTURE_ORIGIN_X:"u_textureOriginX",TEXTURE_ORIGIN_Y:"u_textureOriginY"},Br={TEXTURE_COORD:"a_textureCoord"},jr=[{name:Br.TEXTURE_COORD,size:2,type:Y.FLOAT}];class zr extends Mr{constructor(e,t){super(e,t),this.program_,this.vertexShader_=t.vertexShader,this.fragmentShader_=t.fragmentShader,this.indices_=new nt(Se,Ae),this.indices_.fromArray([0,1,3,1,2,3]),this.paletteTextures_=t.paletteTextures||[]}reset(e){super.reset(e),this.vertexShader_=e.vertexShader,this.fragmentShader_=e.fragmentShader,this.paletteTextures_=e.paletteTextures||[],this.helper&&(this.program_=this.helper.getProgram(this.fragmentShader_,this.vertexShader_))}afterHelperCreated(){this.program_=this.helper.getProgram(this.fragmentShader_,this.vertexShader_),this.helper.flushBufferData(this.indices_)}createTileRepresentation(e){return new Ur(e)}beforeTilesRender(e,t){super.beforeTilesRender(e,t),this.helper.useProgram(this.program_,e)}renderTile(e,t,n,i,s,o,a,c,l,u,h){const f=this.helper.getGL();this.helper.bindBuffer(e.coords),this.helper.bindBuffer(this.indices_),this.helper.enableAttributes(jr);let _=0;for(;_<e.textures.length;){const x=`${w.TILE_TEXTURE_ARRAY}[${_}]`;this.helper.bindTexture(e.textures[_],_,x),++_}for(let x=0;x<this.paletteTextures_.length;++x){const E=this.paletteTextures_[x],P=E.getTexture(f);this.helper.bindTexture(P,_,E.name),++_}const p=n.viewState,R=o[0]+2*u,T=o[1]+2*u,v=e.tile.tileCoord,g=v[1],d=v[2];this.helper.setUniformMatrixValue(w.TILE_TRANSFORM,st(this.tempMat4,t)),this.helper.setUniformFloatValue(w.TRANSITION_ALPHA,h),this.helper.setUniformFloatValue(w.DEPTH,l);let A=i;u>0&&(A=c,V(A,i,A)),this.helper.setUniformFloatVec4(w.RENDER_EXTENT,A),this.helper.setUniformFloatValue(w.RESOLUTION,p.resolution),this.helper.setUniformFloatValue(w.ZOOM,p.zoom),this.helper.setUniformFloatValue(w.TEXTURE_PIXEL_WIDTH,R),this.helper.setUniformFloatValue(w.TEXTURE_PIXEL_HEIGHT,T),this.helper.setUniformFloatValue(w.TEXTURE_RESOLUTION,s),this.helper.setUniformFloatValue(w.TEXTURE_ORIGIN_X,a[0]+g*o[0]*s-u*s),this.helper.setUniformFloatValue(w.TEXTURE_ORIGIN_Y,a[1]-d*o[1]*s+u*s),this.helper.drawElements(0,this.indices_.getSize())}getData(e){if(!this.helper.getGL())return null;const n=this.frameState;if(!n)return null;const i=this.getLayer(),s=At(n.pixelToCoordinateTransform,e.slice()),o=n.viewState,a=i.getExtent();if(a&&!Oe(Ke(a,o.projection),s))return null;const c=i.getSources(bt([s]),o.resolution);let l,u,h;for(l=c.length-1;l>=0;--l)if(u=c[l],u.getState()==="ready"){if(h=u.getTileGridForProjection(o.projection),u.getWrapX())break;const _=h.getExtent();if(!_||Oe(_,s))break}if(l<0)return null;const f=this.tileRepresentationCache;for(let _=h.getZForResolution(o.resolution);_>=h.getMinZoom();--_){const p=h.getTileCoordForCoordAndZ(s,_),R=me(u,p);if(!f.containsKey(R))continue;const T=f.get(R),y=T.tile;if((y instanceof Pe||y instanceof tt)&&y.getState()===S.EMPTY)return null;if(!T.loaded)continue;const v=h.getOrigin(_),g=Re(h.getTileSize(_)),d=h.getResolution(_),A=(s[0]-v[0])/d-p[1]*g[0],x=(v[1]-s[1])/d-p[2]*g[1];return T.getPixelData(A,x)}return null}disposeInternal(){const e=this.helper;e&&(e.getGL().deleteProgram(this.program_),delete this.program_,e.deleteBuffer(this.indices_)),super.disposeInternal(),delete this.indices_}}const en=zr;function Xr(r,e){return`operator_${r}_${Object.keys(e.functions).length}`}function $(r){const e=r.toString();return e.includes(".")?e:e+".0"}function ft(r){if(r.length<2||r.length>4)throw new Error("`formatArray` can only output `vec2`, `vec3` or `vec4` arrays.");return`vec${r.length}(${r.map($).join(", ")})`}function ie(r){const e=Ye(r),t=e.length>3?e[3]:1;return ft([e[0]/255*t,e[1]/255*t,e[2]/255*t,t])}const de={};let Hr=0;function Wr(r){return r in de||(de[r]=Hr++),de[r]}function N(r){return $(Wr(r))}function kr(r){return"u_var_"+r}function tn(){return{inFragmentShader:!1,variables:{},properties:{},functions:{},bandCount:0,style:{}}}const ge="getBandValue",Zr="u_paletteTextures";function rn(r,e,t,n){const i=Dt(r,t,e);if(Lt(i.type,Nt))throw new Error("No matching type was found");if(!wt(e,i.type)){const s=pe(e),o=pe(i.type);throw new Error(`Expected expression to be of type ${s}, got ${o}`)}return De(i,e,n)}function C(r){return(e,t,n)=>{const i=t.args.length,s=new Array(i);for(let o=0;o<i;++o)s[o]=De(t.args[o],n,e);return r(s,e)}}const Vr={[m.Get]:(r,e)=>{const n=e.args[0].value;return n in r.properties||(r.properties[n]={name:n,type:e.type}),(r.inFragmentShader?"v_prop_":"a_prop_")+n},[m.GeometryType]:(r,e,t)=>{const n="geometryType";return n in r.properties||(r.properties[n]={name:n,type:qe,evaluator:o=>$t(o.getGeometry())}),(r.inFragmentShader?"v_prop_":"a_prop_")+n},[m.Var]:(r,e)=>{const n=e.args[0].value;return n in r.variables||(r.variables[n]={name:n,type:e.type}),kr(n)},[m.Resolution]:()=>"u_resolution",[m.Zoom]:()=>"u_zoom",[m.Time]:()=>"u_time",[m.Any]:C(r=>`(${r.join(" || ")})`),[m.All]:C(r=>`(${r.join(" && ")})`),[m.Not]:C(([r])=>`(!${r})`),[m.Equal]:C(([r,e])=>`(${r} == ${e})`),[m.NotEqual]:C(([r,e])=>`(${r} != ${e})`),[m.GreaterThan]:C(([r,e])=>`(${r} > ${e})`),[m.GreaterThanOrEqualTo]:C(([r,e])=>`(${r} >= ${e})`),[m.LessThan]:C(([r,e])=>`(${r} < ${e})`),[m.LessThanOrEqualTo]:C(([r,e])=>`(${r} <= ${e})`),[m.Multiply]:C(r=>`(${r.join(" * ")})`),[m.Divide]:C(([r,e])=>`(${r} / ${e})`),[m.Add]:C(r=>`(${r.join(" + ")})`),[m.Subtract]:C(([r,e])=>`(${r} - ${e})`),[m.Clamp]:C(([r,e,t])=>`clamp(${r}, ${e}, ${t})`),[m.Mod]:C(([r,e])=>`mod(${r}, ${e})`),[m.Pow]:C(([r,e])=>`pow(${r}, ${e})`),[m.Abs]:C(([r])=>`abs(${r})`),[m.Floor]:C(([r])=>`floor(${r})`),[m.Ceil]:C(([r])=>`ceil(${r})`),[m.Round]:C(([r])=>`floor(${r} + 0.5)`),[m.Sin]:C(([r])=>`sin(${r})`),[m.Cos]:C(([r])=>`cos(${r})`),[m.Atan]:C(([r,e])=>e!==void 0?`atan(${r}, ${e})`:`atan(${r})`),[m.Sqrt]:C(([r])=>`sqrt(${r})`),[m.Match]:C(r=>{const e=r[0],t=r[r.length-1];let n=null;for(let i=r.length-3;i>=1;i-=2){const s=r[i],o=r[i+1];n=`(${e} == ${s} ? ${o} : ${n||t})`}return n}),[m.Between]:C(([r,e,t])=>`(${r} >= ${e} && ${r} <= ${t})`),[m.Interpolate]:C(([r,e,...t])=>{let n="";for(let i=0;i<t.length-2;i+=2){const s=t[i],o=n||t[i+1],a=t[i+2],c=t[i+3];let l;r===$(1)?l=`(${e} - ${s}) / (${a} - ${s})`:l=`(pow(${r}, (${e} - ${s})) - 1.0) / (pow(${r}, (${a} - ${s})) - 1.0)`,n=`mix(${o}, ${c}, clamp(${l}, 0.0, 1.0))`}return n}),[m.Case]:C(r=>{const e=r[r.length-1];let t=null;for(let n=r.length-3;n>=0;n-=2){const i=r[n],s=r[n+1];t=`(${i} ? ${s} : ${t||e})`}return t}),[m.In]:C(([r,...e],t)=>{const n=Xr("in",t),i=[];for(let s=0;s<e.length;s+=1)i.push(`  if (inputValue == ${e[s]}) { return true; }`);return t.functions[n]=`bool ${n}(float inputValue) {
${i.join(`
`)}
  return false;
}`,`${n}(${r})`}),[m.Array]:C(r=>`vec${r.length}(${r.join(", ")})`),[m.Color]:C(r=>{if(r.length===1)return`vec4(vec3(${r[0]} / 255.0), 1.0)`;if(r.length===2)return`(${r[1]} * vec4(vec3(${r[0]} / 255.0), 1.0))`;const e=r.slice(0,3).map(n=>`${n} / 255.0`);return r.length===3?`vec4(${e.join(", ")}, 1.0)`:`(${r[3]} * vec4(${e.join(", ")}, 1.0))`}),[m.Band]:C(([r,e,t],n)=>{if(!(ge in n.functions)){let i="";const s=n.bandCount||1;for(let o=0;o<s;o++){const a=Math.floor(o/4);let c=o%4;o===s-1&&c===1&&(c=3);const l=`${w.TILE_TEXTURE_ARRAY}[${a}]`;i+=`  if (band == ${o+1}.0) {
    return texture2D(${l}, v_textureCoord + vec2(dx, dy))[${c}];
  }
`}n.functions[ge]=`float getBandValue(float band, float xOffset, float yOffset) {
  float dx = xOffset / ${w.TEXTURE_PIXEL_WIDTH};
  float dy = yOffset / ${w.TEXTURE_PIXEL_HEIGHT};
${i}
}`}return`${ge}(${r}, ${e??"0.0"}, ${t??"0.0"})`}),[m.Palette]:(r,e)=>{const[t,...n]=e.args,i=n.length,s=new Uint8Array(i*4);for(let l=0;l<n.length;l++){const u=n[l].value,h=Ye(u),f=l*4;s[f]=h[0],s[f+1]=h[1],s[f+2]=h[2],s[f+3]=h[3]*255}r.paletteTextures||(r.paletteTextures=[]);const o=`${Zr}[${r.paletteTextures.length}]`,a=new br(o,s);r.paletteTextures.push(a);const c=De(t,Je,r);return`texture2D(${o}, vec2((${c} + 0.5) / ${i}.0, 0.5))`}};function De(r,e,t){if(r instanceof Ft){const n=Vr[r.operator];if(n===void 0)throw new Error(`No compiler defined for this operator: ${JSON.stringify(r.operator)}`);return n(t,r,e)}if((r.type&Je)>0)return $(r.value);if((r.type&It)>0)return r.value.toString();if((r.type&qe)>0)return N(r.value.toString());if((r.type&Ut)>0)return ie(r.value);if((r.type&Ot)>0)return ft(r.value);throw new Error(`Unexpected expression ${r.value} (expected type ${pe(e)})`)}function Kr(){return{"fill-color":"rgba(255,255,255,0.4)","stroke-color":"#3399CC","stroke-width":1.25,"circle-radius":5,"circle-fill-color":"rgba(255,255,255,0.4)","circle-stroke-width":1.25,"circle-stroke-color":"#3399CC"}}const z=`#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
uniform mat4 u_projectionMatrix;
uniform mat4 u_screenToWorldMatrix;
uniform vec2 u_viewportSizePx;
uniform float u_pixelRatio;
uniform float u_globalAlpha;
uniform float u_time;
uniform float u_zoom;
uniform float u_resolution;
uniform float u_rotation;
uniform vec4 u_renderExtent;
uniform vec2 u_patternOrigin;
uniform float u_depth;
uniform mediump int u_hitDetection;

const float PI = 3.141592653589793238;
const float TWO_PI = 2.0 * PI;

// this used to produce an alpha-premultiplied color from a texture
vec4 samplePremultiplied(sampler2D sampler, vec2 texCoord) {
  vec4 color = texture2D(sampler, texCoord);
  return vec4(color.rgb * color.a, color.a);
}
`,X=Kr();class nn{constructor(){this.uniforms_=[],this.attributes_=[],this.varyings_=[],this.hasSymbol_=!1,this.symbolSizeExpression_=`vec2(${$(X["circle-radius"])} + ${$(X["circle-stroke-width"]*.5)})`,this.symbolRotationExpression_="0.0",this.symbolOffsetExpression_="vec2(0.0)",this.symbolColorExpression_=ie(X["circle-fill-color"]),this.texCoordExpression_="vec4(0.0, 0.0, 1.0, 1.0)",this.discardExpression_="false",this.symbolRotateWithView_=!1,this.hasStroke_=!1,this.strokeWidthExpression_=$(X["stroke-width"]),this.strokeColorExpression_=ie(X["stroke-color"]),this.strokeOffsetExpression_="0.",this.strokeCapExpression_=N("round"),this.strokeJoinExpression_=N("round"),this.strokeMiterLimitExpression_="10.",this.strokeDistanceFieldExpression_="-1000.",this.hasFill_=!1,this.fillColorExpression_=ie(X["fill-color"]),this.vertexShaderFunctions_=[],this.fragmentShaderFunctions_=[]}addUniform(e){return this.uniforms_.push(e),this}addAttribute(e){return this.attributes_.push(e),this}addVarying(e,t,n){return this.varyings_.push({name:e,type:t,expression:n}),this}setSymbolSizeExpression(e){return this.hasSymbol_=!0,this.symbolSizeExpression_=e,this}getSymbolSizeExpression(){return this.symbolSizeExpression_}setSymbolRotationExpression(e){return this.symbolRotationExpression_=e,this}setSymbolOffsetExpression(e){return this.symbolOffsetExpression_=e,this}getSymbolOffsetExpression(){return this.symbolOffsetExpression_}setSymbolColorExpression(e){return this.hasSymbol_=!0,this.symbolColorExpression_=e,this}getSymbolColorExpression(){return this.symbolColorExpression_}setTextureCoordinateExpression(e){return this.texCoordExpression_=e,this}setFragmentDiscardExpression(e){return this.discardExpression_=e,this}getFragmentDiscardExpression(){return this.discardExpression_}setSymbolRotateWithView(e){return this.symbolRotateWithView_=e,this}setStrokeWidthExpression(e){return this.hasStroke_=!0,this.strokeWidthExpression_=e,this}setStrokeColorExpression(e){return this.hasStroke_=!0,this.strokeColorExpression_=e,this}getStrokeColorExpression(){return this.strokeColorExpression_}setStrokeOffsetExpression(e){return this.strokeOffsetExpression_=e,this}setStrokeCapExpression(e){return this.strokeCapExpression_=e,this}setStrokeJoinExpression(e){return this.strokeJoinExpression_=e,this}setStrokeMiterLimitExpression(e){return this.strokeMiterLimitExpression_=e,this}setStrokeDistanceFieldExpression(e){return this.strokeDistanceFieldExpression_=e,this}setFillColorExpression(e){return this.hasFill_=!0,this.fillColorExpression_=e,this}getFillColorExpression(){return this.fillColorExpression_}addVertexShaderFunction(e){this.vertexShaderFunctions_.includes(e)||this.vertexShaderFunctions_.push(e)}addFragmentShaderFunction(e){this.fragmentShaderFunctions_.includes(e)||this.fragmentShaderFunctions_.push(e)}getSymbolVertexShader(){return this.hasSymbol_?`${z}
${this.uniforms_.map(function(e){return"uniform "+e+";"}).join(`
`)}
attribute vec2 a_position;
attribute float a_index;
attribute vec4 a_prop_hitColor;
${this.attributes_.map(function(e){return"attribute "+e+";"}).join(`
`)}
varying vec2 v_texCoord;
varying vec2 v_quadCoord;
varying vec4 v_prop_hitColor;
varying vec2 v_centerPx;
varying float v_angle;
varying vec2 v_quadSizePx;
${this.varyings_.map(function(e){return"varying "+e.type+" "+e.name+";"}).join(`
`)}
${this.vertexShaderFunctions_.join(`
`)}
vec2 pxToScreen(vec2 coordPx) {
  vec2 scaled = coordPx / u_viewportSizePx / 0.5;
  return scaled;
}

vec2 screenToPx(vec2 coordScreen) {
  return (coordScreen * 0.5 + 0.5) * u_viewportSizePx;
}

void main(void) {
  v_quadSizePx = ${this.symbolSizeExpression_};
  vec2 halfSizePx = v_quadSizePx * 0.5;
  vec2 centerOffsetPx = ${this.symbolOffsetExpression_};
  vec2 offsetPx = centerOffsetPx;
  if (a_index == 0.0) {
    offsetPx -= halfSizePx;
  } else if (a_index == 1.0) {
    offsetPx += halfSizePx * vec2(1., -1.);
  } else if (a_index == 2.0) {
    offsetPx += halfSizePx;
  } else {
    offsetPx += halfSizePx * vec2(-1., 1.);
  }
  float angle = ${this.symbolRotationExpression_};
  ${this.symbolRotateWithView_?"angle += u_rotation;":""}
  float c = cos(-angle);
  float s = sin(-angle);
  offsetPx = vec2(c * offsetPx.x - s * offsetPx.y, s * offsetPx.x + c * offsetPx.y);
  vec4 center = u_projectionMatrix * vec4(a_position, 0.0, 1.0);
  gl_Position = center + vec4(pxToScreen(offsetPx), u_depth, 0.);
  vec4 texCoord = ${this.texCoordExpression_};
  float u = a_index == 0.0 || a_index == 3.0 ? texCoord.s : texCoord.p;
  float v = a_index == 2.0 || a_index == 3.0 ? texCoord.t : texCoord.q;
  v_texCoord = vec2(u, v);
  v_prop_hitColor = a_prop_hitColor;
  v_angle = angle;
  c = cos(-v_angle);
  s = sin(-v_angle);
  centerOffsetPx = vec2(c * centerOffsetPx.x - s * centerOffsetPx.y, s * centerOffsetPx.x + c * centerOffsetPx.y); 
  v_centerPx = screenToPx(center.xy) + centerOffsetPx;
${this.varyings_.map(function(e){return"  "+e.name+" = "+e.expression+";"}).join(`
`)}
}`:null}getSymbolFragmentShader(){return this.hasSymbol_?`${z}
${this.uniforms_.map(function(e){return"uniform "+e+";"}).join(`
`)}
varying vec2 v_texCoord;
varying vec4 v_prop_hitColor;
varying vec2 v_centerPx;
varying float v_angle;
varying vec2 v_quadSizePx;
${this.varyings_.map(function(e){return"varying "+e.type+" "+e.name+";"}).join(`
`)}
${this.fragmentShaderFunctions_.join(`
`)}

void main(void) {
  if (${this.discardExpression_}) { discard; }
  vec2 coordsPx = gl_FragCoord.xy / u_pixelRatio - v_centerPx; // relative to center
  float c = cos(v_angle);
  float s = sin(v_angle);
  coordsPx = vec2(c * coordsPx.x - s * coordsPx.y, s * coordsPx.x + c * coordsPx.y);
  gl_FragColor = ${this.symbolColorExpression_};
  if (u_hitDetection > 0) {
    if (gl_FragColor.a < 0.05) { discard; };
    gl_FragColor = v_prop_hitColor;
  }
}`:null}getStrokeVertexShader(){return this.hasStroke_?`${z}
${this.uniforms_.map(function(e){return"uniform "+e+";"}).join(`
`)}
attribute vec2 a_position;
attribute float a_index;
attribute vec2 a_segmentStart;
attribute vec2 a_segmentEnd;
attribute float a_parameters;
attribute float a_distance;
attribute vec2 a_joinAngles;
attribute vec4 a_prop_hitColor;
${this.attributes_.map(function(e){return"attribute "+e+";"}).join(`
`)}
varying vec2 v_segmentStart;
varying vec2 v_segmentEnd;
varying float v_angleStart;
varying float v_angleEnd;
varying float v_width;
varying vec4 v_prop_hitColor;
varying float v_distanceOffsetPx;
${this.varyings_.map(function(e){return"varying "+e.type+" "+e.name+";"}).join(`
`)}
${this.vertexShaderFunctions_.join(`
`)}
vec2 worldToPx(vec2 worldPos) {
  vec4 screenPos = u_projectionMatrix * vec4(worldPos, 0.0, 1.0);
  return (0.5 * screenPos.xy + 0.5) * u_viewportSizePx;
}

vec4 pxToScreen(vec2 pxPos) {
  vec2 screenPos = 2.0 * pxPos / u_viewportSizePx - 1.0;
  return vec4(screenPos, u_depth, 1.0);
}

bool isCap(float joinAngle) {
  return joinAngle < -0.1;
}

vec2 getJoinOffsetDirection(vec2 normalPx, float joinAngle) {
  float halfAngle = joinAngle / 2.0;
  float c = cos(halfAngle);
  float s = sin(halfAngle);
  vec2 angleBisectorNormal = vec2(s * normalPx.x + c * normalPx.y, -c * normalPx.x + s * normalPx.y);
  float length = 1.0 / s;
  return angleBisectorNormal * length;
}

vec2 getOffsetPoint(vec2 point, vec2 normal, float joinAngle, float offsetPx) {
  // if on a cap or the join angle is too high, offset the line along the segment normal
  if (cos(joinAngle) > 0.998 || isCap(joinAngle)) {
    return point - normal * offsetPx;
  }
  // offset is applied along the inverted normal (positive offset goes "right" relative to line direction)
  return point - getJoinOffsetDirection(normal, joinAngle) * offsetPx;
}

void main(void) {
  v_angleStart = a_joinAngles.x;
  v_angleEnd = a_joinAngles.y;
  float vertexNumber = floor(abs(a_parameters) / 10000. + 0.5);
  // we're reading the fractional part while keeping the sign (so -4.12 gives -0.12, 3.45 gives 0.45)
  float angleTangentSum = fract(abs(a_parameters) / 10000.) * 10000. * sign(a_parameters);

  float lineWidth = ${this.strokeWidthExpression_};
  float lineOffsetPx = ${this.strokeOffsetExpression_};

  // compute segment start/end in px with offset
  vec2 segmentStartPx = worldToPx(a_segmentStart);
  vec2 segmentEndPx = worldToPx(a_segmentEnd);
  vec2 tangentPx = normalize(segmentEndPx - segmentStartPx);
  vec2 normalPx = vec2(-tangentPx.y, tangentPx.x);
  segmentStartPx = getOffsetPoint(segmentStartPx, normalPx, v_angleStart, lineOffsetPx),
  segmentEndPx = getOffsetPoint(segmentEndPx, normalPx, v_angleEnd, lineOffsetPx);
  
  // compute current vertex position
  float normalDir = vertexNumber < 0.5 || (vertexNumber > 1.5 && vertexNumber < 2.5) ? 1.0 : -1.0;
  float tangentDir = vertexNumber < 1.5 ? 1.0 : -1.0;
  float angle = vertexNumber < 1.5 ? v_angleStart : v_angleEnd;
  vec2 joinDirection;
  vec2 positionPx = vertexNumber < 1.5 ? segmentStartPx : segmentEndPx;
  // if angle is too high, do not make a proper join
  if (cos(angle) > ${ze} || isCap(angle)) {
    joinDirection = normalPx * normalDir - tangentPx * tangentDir;
  } else {
    joinDirection = getJoinOffsetDirection(normalPx * normalDir, angle);
  }
  positionPx = positionPx + joinDirection * (lineWidth * 0.5 + 1.); // adding 1 pixel for antialiasing
  gl_Position = pxToScreen(positionPx);

  v_segmentStart = segmentStartPx;
  v_segmentEnd = segmentEndPx;
  v_width = lineWidth;
  v_prop_hitColor = a_prop_hitColor;
  v_distanceOffsetPx = a_distance / u_resolution - (lineOffsetPx * angleTangentSum);
${this.varyings_.map(function(e){return"  "+e.name+" = "+e.expression+";"}).join(`
`)}
}`:null}getStrokeFragmentShader(){return this.hasStroke_?`${z}
${this.uniforms_.map(function(e){return"uniform "+e+";"}).join(`
`)}
varying vec2 v_segmentStart;
varying vec2 v_segmentEnd;
varying float v_angleStart;
varying float v_angleEnd;
varying float v_width;
varying vec4 v_prop_hitColor;
varying float v_distanceOffsetPx;
${this.varyings_.map(function(e){return"varying "+e.type+" "+e.name+";"}).join(`
`)}
${this.fragmentShaderFunctions_.join(`
`)}

vec2 pxToWorld(vec2 pxPos) {
  vec2 screenPos = 2.0 * pxPos / u_viewportSizePx - 1.0;
  return (u_screenToWorldMatrix * vec4(screenPos, 0.0, 1.0)).xy;
}

bool isCap(float joinAngle) {
  return joinAngle < -0.1;
}

float segmentDistanceField(vec2 point, vec2 start, vec2 end, float width) {
  vec2 tangent = normalize(end - start);
  vec2 normal = vec2(-tangent.y, tangent.x);
  vec2 startToPoint = point - start;
  return abs(dot(startToPoint, normal)) - width * 0.5;
}

float buttCapDistanceField(vec2 point, vec2 start, vec2 end) {
  vec2 startToPoint = point - start;
  vec2 tangent = normalize(end - start);
  return dot(startToPoint, -tangent);
}

float squareCapDistanceField(vec2 point, vec2 start, vec2 end, float width) {
  return buttCapDistanceField(point, start, end) - width * 0.5;
}

float roundCapDistanceField(vec2 point, vec2 start, vec2 end, float width) {
  float onSegment = max(0., 1000. * dot(point - start, end - start)); // this is very high when inside the segment
  return length(point - start) - width * 0.5 - onSegment;
}

float roundJoinDistanceField(vec2 point, vec2 start, vec2 end, float width) {
  return roundCapDistanceField(point, start, end, width);
}

float bevelJoinField(vec2 point, vec2 start, vec2 end, float width, float joinAngle) {
  vec2 startToPoint = point - start;
  vec2 tangent = normalize(end - start);
  float c = cos(joinAngle * 0.5);
  float s = sin(joinAngle * 0.5);
  float direction = -sign(sin(joinAngle));
  vec2 bisector = vec2(c * tangent.x - s * tangent.y, s * tangent.x + c * tangent.y);
  float radius = width * 0.5 * s;
  return dot(startToPoint, bisector * direction) - radius;
}

float miterJoinDistanceField(vec2 point, vec2 start, vec2 end, float width, float joinAngle) {
  if (cos(joinAngle) > ${ze}) { // avoid risking a division by zero
    return bevelJoinField(point, start, end, width, joinAngle);
  }
  float miterLength = 1. / sin(joinAngle * 0.5);
  float miterLimit = ${this.strokeMiterLimitExpression_};
  if (miterLength > miterLimit) {
    return bevelJoinField(point, start, end, width, joinAngle);
  }
  return -1000.;
}

float capDistanceField(vec2 point, vec2 start, vec2 end, float width, float capType) {
   if (capType == ${N("butt")}) {
    return buttCapDistanceField(point, start, end);
  } else if (capType == ${N("square")}) {
    return squareCapDistanceField(point, start, end, width);
  }
  return roundCapDistanceField(point, start, end, width);
}

float joinDistanceField(vec2 point, vec2 start, vec2 end, float width, float joinAngle, float joinType) {
  if (joinType == ${N("bevel")}) {
    return bevelJoinField(point, start, end, width, joinAngle);
  } else if (joinType == ${N("miter")}) {
    return miterJoinDistanceField(point, start, end, width, joinAngle);
  }
  return roundJoinDistanceField(point, start, end, width);
}

float computeSegmentPointDistance(vec2 point, vec2 start, vec2 end, float width, float joinAngle, float capType, float joinType) {
  if (isCap(joinAngle)) {
    return capDistanceField(point, start, end, width, capType);
  }
  return joinDistanceField(point, start, end, width, joinAngle, joinType);
}

void main(void) {
  vec2 currentPoint = gl_FragCoord.xy / u_pixelRatio;
  #ifdef GL_FRAGMENT_PRECISION_HIGH
  vec2 worldPos = pxToWorld(currentPoint);
  if (
    abs(u_renderExtent[0] - u_renderExtent[2]) > 0.0 && (
      worldPos[0] < u_renderExtent[0] ||
      worldPos[1] < u_renderExtent[1] ||
      worldPos[0] > u_renderExtent[2] ||
      worldPos[1] > u_renderExtent[3]
    )
  ) {
    discard;
  }
  #endif
  if (${this.discardExpression_}) { discard; }

  float segmentLength = length(v_segmentEnd - v_segmentStart);
  vec2 segmentTangent = (v_segmentEnd - v_segmentStart) / segmentLength;
  vec2 segmentNormal = vec2(-segmentTangent.y, segmentTangent.x);
  vec2 startToPoint = currentPoint - v_segmentStart;
  float currentLengthPx = max(0., min(dot(segmentTangent, startToPoint), segmentLength)) + v_distanceOffsetPx; 
  float currentRadiusPx = abs(dot(segmentNormal, startToPoint));
  float currentRadiusRatio = dot(segmentNormal, startToPoint) * 2. / v_width;
  vec4 color = ${this.strokeColorExpression_} * u_globalAlpha;
  float capType = ${this.strokeCapExpression_};
  float joinType = ${this.strokeJoinExpression_};
  float segmentStartDistance = computeSegmentPointDistance(currentPoint, v_segmentStart, v_segmentEnd, v_width, v_angleStart, capType, joinType);
  float segmentEndDistance = computeSegmentPointDistance(currentPoint, v_segmentEnd, v_segmentStart, v_width, v_angleEnd, capType, joinType);
  float distance = max(
    segmentDistanceField(currentPoint, v_segmentStart, v_segmentEnd, v_width),
    max(segmentStartDistance, segmentEndDistance)
  );
  distance = max(distance, ${this.strokeDistanceFieldExpression_});
  gl_FragColor = color * smoothstep(0.5, -0.5, distance);
  if (u_hitDetection > 0) {
    if (gl_FragColor.a < 0.1) { discard; };
    gl_FragColor = v_prop_hitColor;
  }
}`:null}getFillVertexShader(){return this.hasFill_?`${z}
${this.uniforms_.map(function(e){return"uniform "+e+";"}).join(`
`)}
attribute vec2 a_position;
attribute vec4 a_prop_hitColor;
${this.attributes_.map(function(e){return"attribute "+e+";"}).join(`
`)}
varying vec4 v_prop_hitColor;
${this.varyings_.map(function(e){return"varying "+e.type+" "+e.name+";"}).join(`
`)}
${this.vertexShaderFunctions_.join(`
`)}
void main(void) {
  gl_Position = u_projectionMatrix * vec4(a_position, u_depth, 1.0);
  v_prop_hitColor = a_prop_hitColor;
${this.varyings_.map(function(e){return"  "+e.name+" = "+e.expression+";"}).join(`
`)}
}`:null}getFillFragmentShader(){return this.hasFill_?`${z}
${this.uniforms_.map(function(e){return"uniform "+e+";"}).join(`
`)}
varying vec4 v_prop_hitColor;
${this.varyings_.map(function(e){return"varying "+e.type+" "+e.name+";"}).join(`
`)}
${this.fragmentShaderFunctions_.join(`
`)}
vec2 pxToWorld(vec2 pxPos) {
  vec2 screenPos = 2.0 * pxPos / u_viewportSizePx - 1.0;
  return (u_screenToWorldMatrix * vec4(screenPos, 0.0, 1.0)).xy;
}

vec2 worldToPx(vec2 worldPos) {
  vec4 screenPos = u_projectionMatrix * vec4(worldPos, 0.0, 1.0);
  return (0.5 * screenPos.xy + 0.5) * u_viewportSizePx;
}

void main(void) {
  vec2 pxPos = gl_FragCoord.xy / u_pixelRatio;
  vec2 pxOrigin = worldToPx(u_patternOrigin);
  #ifdef GL_FRAGMENT_PRECISION_HIGH
  vec2 worldPos = pxToWorld(pxPos);
  if (
    abs(u_renderExtent[0] - u_renderExtent[2]) > 0.0 && (
      worldPos[0] < u_renderExtent[0] ||
      worldPos[1] < u_renderExtent[1] ||
      worldPos[0] > u_renderExtent[2] ||
      worldPos[1] > u_renderExtent[3]
    )
  ) {
    discard;
  }
  #endif
  if (${this.discardExpression_}) { discard; }
  gl_FragColor = ${this.fillColorExpression_} * u_globalAlpha;
  if (u_hitDetection > 0) {
    if (gl_FragColor.a < 0.1) { discard; };
    gl_FragColor = v_prop_hitColor;
  }
}`:null}}export{Br as A,et as D,Se as E,Zr as P,tt as R,nn as S,w as U,en as W,ft as a,rn as b,qr as c,Y as d,nt as e,Ce as f,Wr as g,Yt as h,hr as i,it as j,st as k,Qr as l,U as m,tn as n,N as s,kr as u};
