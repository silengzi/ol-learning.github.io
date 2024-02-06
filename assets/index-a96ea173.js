import{F as lt,V as ct,a as ft}from"./Vector-50ee026e.js";import{P as ut,M as ht,V as dt}from"./Layer-668612ec.js";import{_ as pt,i as mt,o as gt,c as vt,b as F,t as tt,g as et,F as _t,p as wt,k as yt,d as st}from"./index-b74f03bf.js";import{T as xt}from"./Tile-769b675a.js";import{S as Ft}from"./StadiaMaps-7bec7645.js";import{a as It,I as bt}from"./featureloader-f9c16155.js";import"./Layer-5b8d80c5.js";import"./BaseTile-a766243d.js";import"./TileProperty-0d2bd5df.js";import"./TileLayer-d843ebf1.js";import"./XYZ-0831ea92.js";import"./TileImage-e3961663.js";import"./UrlTile-bc3de61e.js";import"./OSM-e42fa480.js";/** gifler.js | github.com/themadcreator/gifler | @license: Apache-2.0 */(function j(b,V,T){function E(t,r){if(!V[t]){if(!b[t]){var s=typeof require=="function"&&require;if(!r&&s)return s(t,!0);if(k)return k(t,!0);var _=new Error("Cannot find module '"+t+"'");throw _.code="MODULE_NOT_FOUND",_}var i=V[t]={exports:{}};b[t][0].call(i.exports,function(e){var n=b[t][1][e];return E(n||e)},i,i.exports,j,b,V,T)}return V[t].exports}for(var k=typeof require=="function"&&require,A=0;A<T.length;A++)E(T[A]);return E})({1:[function(j,b,V){function T(t,r,s,n){function i(d){var v=d.length;if(2>v||v>256||v&v-1)throw"Invalid code/color length, must be power of 2 and 2 .. 256.";return v}var e=0,n=n===void 0?{}:n,o=n.loop===void 0?null:n.loop,a=n.palette===void 0?null:n.palette;if(0>=r||0>=s||r>65535||s>65535)throw"Width/Height invalid.";t[e++]=71,t[e++]=73,t[e++]=70,t[e++]=56,t[e++]=57,t[e++]=97;var l=0,f=0;if(a!==null){for(var g=i(a);g>>=1;)++l;if(g=1<<l,--l,n.background!==void 0){if(f=n.background,f>=g)throw"Background index out of range.";if(f===0)throw"Background index explicitly passed as 0."}}if(t[e++]=255&r,t[e++]=r>>8&255,t[e++]=255&s,t[e++]=s>>8&255,t[e++]=(a!==null?128:0)|l,t[e++]=f,t[e++]=0,a!==null)for(var u=0,y=a.length;y>u;++u){var x=a[u];t[e++]=x>>16&255,t[e++]=x>>8&255,t[e++]=255&x}if(o!==null){if(0>o||o>65535)throw"Loop count invalid.";t[e++]=33,t[e++]=255,t[e++]=11,t[e++]=78,t[e++]=69,t[e++]=84,t[e++]=83,t[e++]=67,t[e++]=65,t[e++]=80,t[e++]=69,t[e++]=50,t[e++]=46,t[e++]=48,t[e++]=3,t[e++]=1,t[e++]=255&o,t[e++]=o>>8&255,t[e++]=0}var h=!1;this.addFrame=function(d,v,I,m,D,p){if(h===!0&&(--e,h=!1),p=p===void 0?{}:p,0>d||0>v||d>65535||v>65535)throw"x/y invalid.";if(0>=I||0>=m||I>65535||m>65535)throw"Width/Height invalid.";if(D.length<I*m)throw"Not enough pixels for the frame size.";var U=!0,L=p.palette;if(L==null&&(U=!1,L=a),L==null)throw"Must supply either a local or global palette.";for(var Z=i(L),G=0;Z>>=1;)++G;Z=1<<G;var K=p.delay===void 0?0:p.delay,N=p.disposal===void 0?0:p.disposal;if(0>N||N>3)throw"Disposal out of range.";var Q=!1,C=0;if(p.transparent!==void 0&&p.transparent!==null&&(Q=!0,C=p.transparent,0>C||C>=Z))throw"Transparent color index.";if((N!==0||Q||K!==0)&&(t[e++]=33,t[e++]=249,t[e++]=4,t[e++]=N<<2|(Q===!0?1:0),t[e++]=255&K,t[e++]=K>>8&255,t[e++]=C,t[e++]=0),t[e++]=44,t[e++]=255&d,t[e++]=d>>8&255,t[e++]=255&v,t[e++]=v>>8&255,t[e++]=255&I,t[e++]=I>>8&255,t[e++]=255&m,t[e++]=m>>8&255,t[e++]=U===!0?128|G-1:0,U===!0)for(var S=0,c=L.length;c>S;++S){var B=L[S];t[e++]=B>>16&255,t[e++]=B>>8&255,t[e++]=255&B}e=E(t,e,2>G?2:G,D)},this.end=function(){return h===!1&&(t[e++]=59,h=!0),e}}function E(t,r,s,_){function i(p){for(;u>=p;)t[r++]=255&y,y>>=8,u-=8,r===n+256&&(t[n]=255,n=r++)}function e(p){y|=p<<u,u+=g,i(8)}t[r++]=s;var n=r++,o=1<<s,a=o-1,l=o+1,f=l+1,g=s+1,u=0,y=0,x=_[0]&a,h={};e(o);for(var d=1,v=_.length;v>d;++d){var I=_[d]&a,m=x<<8|I,D=h[m];if(D===void 0){for(y|=x<<u,u+=g;u>=8;)t[r++]=255&y,y>>=8,u-=8,r===n+256&&(t[n]=255,n=r++);f===4096?(e(o),f=l+1,g=s+1,h={}):(f>=1<<g&&++g,h[m]=f++),x=I}else x=D}return e(x),e(l),i(1),n+1===r?t[n]=0:(t[n]=r-n-1,t[r++]=0),r}function k(t){var r=0;if(t[r++]!==71||t[r++]!==73||t[r++]!==70||t[r++]!==56||(t[r++]+1&253)!==56||t[r++]!==97)throw"Invalid GIF 87a/89a header.";var s=t[r++]|t[r++]<<8,_=t[r++]|t[r++]<<8,i=t[r++],e=i>>7,n=7&i,o=1<<n+1;t[r++],t[r++];var a=null;e&&(a=r,r+=3*o);var l=!0,f=[],g=0,u=null,y=0,x=null;for(this.width=s,this.height=_;l&&r<t.length;)switch(t[r++]){case 33:switch(t[r++]){case 255:if(t[r]!==11||t[r+1]==78&&t[r+2]==69&&t[r+3]==84&&t[r+4]==83&&t[r+5]==67&&t[r+6]==65&&t[r+7]==80&&t[r+8]==69&&t[r+9]==50&&t[r+10]==46&&t[r+11]==48&&t[r+12]==3&&t[r+13]==1&&t[r+16]==0)r+=14,x=t[r++]|t[r++]<<8,r++;else for(r+=12;;){var h=t[r++];if(h===0)break;r+=h}break;case 249:if(t[r++]!==4||t[r+4]!==0)throw"Invalid graphics extension block.";var d=t[r++];g=t[r++]|t[r++]<<8,u=t[r++],!(1&d)&&(u=null),y=d>>2&7,r++;break;case 254:for(;;){var h=t[r++];if(h===0)break;r+=h}break;default:throw"Unknown graphic control label: 0x"+t[r-1].toString(16)}break;case 44:var v=t[r++]|t[r++]<<8,I=t[r++]|t[r++]<<8,m=t[r++]|t[r++]<<8,D=t[r++]|t[r++]<<8,p=t[r++],U=p>>7,L=p>>6&1,Z=7&p,G=1<<Z+1,K=a,N=!1;if(U){var N=!0;K=r,r+=3*G}var Q=r;for(r++;;){var h=t[r++];if(h===0)break;r+=h}f.push({x:v,y:I,width:m,height:D,has_local_palette:N,palette_offset:K,data_offset:Q,data_length:r-Q,transparent_index:u,interlaced:!!L,delay:g,disposal:y});break;case 59:l=!1;break;default:throw"Unknown gif block: 0x"+t[r-1].toString(16)}this.numFrames=function(){return f.length},this.loopCount=function(){return x},this.frameInfo=function(C){if(0>C||C>=f.length)throw"Frame index out of range.";return f[C]},this.decodeAndBlitFrameBGRA=function(C,S){var c=this.frameInfo(C),B=c.width*c.height,q=new Uint8Array(B);A(t,c.data_offset,q,B);var P=c.palette_offset,O=c.transparent_index;O===null&&(O=256);var M=c.width,W=s-M,z=M,$=4*(c.y*s+c.x),rt=4*((c.y+c.height)*s+c.x),w=$,H=4*W;c.interlaced===!0&&(H+=4*s*7);for(var X=8,J=0,nt=q.length;nt>J;++J){var R=q[J];if(z===0&&(w+=H,z=M,w>=rt&&(H=4*W+4*s*(X-1),w=$+(M+W)*(X<<1),X>>=1)),R===O)w+=4;else{var at=t[P+3*R],it=t[P+3*R+1],ot=t[P+3*R+2];S[w++]=ot,S[w++]=it,S[w++]=at,S[w++]=255}--z}},this.decodeAndBlitFrameRGBA=function(C,S){var c=this.frameInfo(C),B=c.width*c.height,q=new Uint8Array(B);A(t,c.data_offset,q,B);var P=c.palette_offset,O=c.transparent_index;O===null&&(O=256);var M=c.width,W=s-M,z=M,$=4*(c.y*s+c.x),rt=4*((c.y+c.height)*s+c.x),w=$,H=4*W;c.interlaced===!0&&(H+=4*s*7);for(var X=8,J=0,nt=q.length;nt>J;++J){var R=q[J];if(z===0&&(w+=H,z=M,w>=rt&&(H=4*W+4*s*(X-1),w=$+(M+W)*(X<<1),X>>=1)),R===O)w+=4;else{var at=t[P+3*R],it=t[P+3*R+1],ot=t[P+3*R+2];S[w++]=at,S[w++]=it,S[w++]=ot,S[w++]=255}--z}}}function A(t,r,s,_){for(var i=t[r++],e=1<<i,n=e+1,o=n+1,a=i+1,l=(1<<a)-1,f=0,g=0,u=0,y=t[r++],x=new Int32Array(4096),h=null;;){for(;16>f&&y!==0;)g|=t[r++]<<f,f+=8,y===1?y=t[r++]:--y;if(a>f)break;var d=g&l;if(g>>=a,f-=a,d!==e){if(d===n)break;for(var v=o>d?d:h,I=0,m=v;m>e;)m=x[m]>>8,++I;var D=m,p=u+I+(v!==d?1:0);if(p>_)return void console.log("Warning, gif stream longer than expected.");s[u++]=D,u+=I;var U=u;for(v!==d&&(s[u++]=D),m=v;I--;)m=x[m],s[--U]=255&m,m>>=8;h!==null&&4096>o&&(x[o++]=h<<8|D,o>=l+1&&12>a&&(++a,l=l<<1|1)),h=d}else o=n+1,a=i+1,l=(1<<a)-1,h=null}return u!==_&&console.log("Warning, gif stream shorter than expected."),s}try{V.GifWriter=T,V.GifReader=k}catch{}},{}],2:[function(j,b,V){var T,E,k,A,t,r,s,_=function(i,e){return function(){return i.apply(e,arguments)}};E=j("omggif").GifReader,r=function(i){var e;return e=new XMLHttpRequest,e.open("GET",i,!0),e.responseType="arraybuffer",{xhr:e,get:function(n){return e.onload=s(n),e.send(),this},animate:function(n){var o;return o=t(n),e.onload=s(function(a){return a.animateInCanvas(o)}),e.send(),this},frames:function(n,o,a){var l;return a==null&&(a=!1),l=t(n),e.onload=s(function(f){return f.onDrawFrame=o,f.animateInCanvas(l,a)}),e.send(),this}}},s=function(i){return function(e){return i(new T(new E(new Uint8Array(this.response))))}},t=function(i){var e,n;if(typeof i=="string"&&((n=e=document.querySelector(i))!=null?n.tagName:void 0)==="CANVAS")return e;if((i!=null?i.tagName:void 0)==="CANVAS")return i;throw new Error("Unexpected selector type. Valid types are query-selector-string/canvas-element")},k=function(i,e,n){var o,a,l;return o=document.createElement("canvas"),a=o.getContext("2d"),o.width=i.width,o.height=i.height,l=a.createImageData(e,n),l.data.set(i.pixels),a.putImageData(l,-i.x,-i.y),o},A=function(i,e){var n;return(function(){n=[];for(var o=0,a=i.numFrames();a>=0?a>o:o>a;a>=0?o++:o--)n.push(o);return n}).apply(this).map(function(o){return function(a){var l;return l=i.frameInfo(a),l.pixels=new Uint8ClampedArray(i.width*i.height*4),i.decodeAndBlitFrameRGBA(a,l.pixels),l}}())},T=function(){function i(e){var n;this._reader=e,this._advanceFrame=_(this._advanceFrame,this),this._nextFrameRender=_(this._nextFrameRender,this),this._nextFrame=_(this._nextFrame,this),n=this._reader,this.width=n.width,this.height=n.height,this._frames=A(this._reader),this._loopCount=this._reader.loopCount(),this._loops=0,this._frameIndex=0,this._running=!1}return i.prototype.start=function(){return this._lastTime=new Date().valueOf(),this._delayCompensation=0,this._running=!0,setTimeout(this._nextFrame,0),this},i.prototype.stop=function(){return this._running=!1,this},i.prototype.reset=function(){return this._frameIndex=0,this._loops=0,this},i.prototype._nextFrame=function(){requestAnimationFrame(this._nextFrameRender)},i.prototype._nextFrameRender=function(){var e,n;if(this._running)return e=this._frames[this._frameIndex],(n=this.onFrame)!=null&&n.apply(this,[e,this._frameIndex]),this._enqueueNextFrame()},i.prototype._advanceFrame=function(){this._frameIndex+=1,this._frameIndex>=this._frames.length&&(this._loopCount!==0&&this._loopCount===this._loops?this.stop():(this._frameIndex=0,this._loops+=1))},i.prototype._enqueueNextFrame=function(){var e,n,o,a;for(this._advanceFrame();this._running;){if(o=this._frames[this._frameIndex],n=new Date().valueOf()-this._lastTime,this._lastTime+=n,this._delayCompensation+=n,a=10*o.delay,e=a-this._delayCompensation,this._delayCompensation-=a,!(0>e)){setTimeout(this._nextFrame,e);break}this._advanceFrame()}},i.prototype.animateInCanvas=function(e,n){var o;return n==null&&(n=!0),n&&(e.width=this.width,e.height=this.height),o=e.getContext("2d"),this.onDrawFrame==null&&(this.onDrawFrame=function(a,l,f){return a.drawImage(l.buffer,l.x,l.y)}),this.onFrame==null&&(this.onFrame=function(a){return function(l,f){var g,u;switch(l.buffer==null&&(l.buffer=k(l,a.width,a.height)),typeof a.disposeFrame=="function"&&a.disposeFrame(),l.disposal){case 2:a.disposeFrame=function(){return o.clearRect(0,0,e.width,e.height)};break;case 3:u=o.getImageData(0,0,e.width,e.height),a.disposeFrame=function(){return o.putImageData(u,0,0)};break;default:a.disposeFrame=null}return(g=a.onDrawFrame)!=null?g.apply(a,[o,l,f]):void 0}}(this)),this.start(),this},i}(),r.Animator=T,r.decodeFrames=A,r.createBufferCanvas=k,typeof window<"u"&&window!==null&&(window.gifler=r),typeof b<"u"&&b!==null&&(b.exports=r)},{omggif:1}]},{},[2]);const kt="Animated GIF",St=`
  <div id="map" class="map"></div>

  <script src="https://cdn.jsdelivr.net/npm/gifler@0.1.0/gifler.min.js"><\/script>
`,At=`
  .map {
    width: 100%;
    height: 400px;
  }
`,Ct=`
  import Feature from 'ol/Feature.js';
  import Map from 'ol/Map.js';
  import Point from 'ol/geom/Point.js';
  import View from 'ol/View.js';
  import {Icon, Style} from 'ol/style.js';
  import {StadiaMaps, Vector as VectorSource} from 'ol/source.js';
  import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';

  const iconFeature = new Feature({
    geometry: new Point([0, 0]),
  });

  const vectorSource = new VectorSource({
    features: [iconFeature],
  });

  const vectorLayer = new VectorLayer({
    source: vectorSource,
  });

  const rasterLayer = new TileLayer({
    source: new StadiaMaps({
      layer: 'stamen_toner',
    }),
  });

  const map = new Map({
    layers: [rasterLayer, vectorLayer],
    target: document.getElementById('map'),
    view: new View({
      center: [0, 0],
      zoom: 2,
    }),
  });

  const gifUrl = 'data/globe.gif';
  const gif = gifler(gifUrl);
  gif.frames(
    document.createElement('canvas'),
    function (ctx, frame) {
      if (!iconFeature.getStyle()) {
        iconFeature.setStyle(
          new Style({
            image: new Icon({
              img: ctx.canvas,
              opacity: 0.8,
            }),
          })
        );
      }
      ctx.clearRect(0, 0, frame.width, frame.height);
      ctx.drawImage(frame.buffer, frame.x, frame.y);
      map.render();
    },
    true
  );

  // change mouse cursor when over icon
  map.on('pointermove', function (e) {
    const pixel = map.getEventPixel(e.originalEvent);
    const hit = map.hasFeatureAtPixel(pixel);
    map.getTarget().style.cursor = hit ? 'pointer' : '';
  });
`,Vt=`
  {
    "name": "animated-gif",
    "dependencies": {
      "ol": "8.1.0"
    },
    "devDependencies": {
      "vite": "^3.2.3"
    },
    "scripts": {
      "start": "vite",
      "build": "vite build"
    }
  }
`;const Y=j=>(wt("data-v-596e7dff"),j=j(),yt(),j),Tt={id:"title"},Dt=Y(()=>F("div",{id:"map",class:"map"},null,-1)),Et=Y(()=>F("p",null,[st("Example of using an animated GIF as an icon. Animation is achieved using the "),F("a",{href:"https://themadcreator.github.io/gifler/",target:"_blank"},"Gifler"),st(" library.")],-1)),Lt=Y(()=>F("h5",{class:"source-heading"},"html",-1)),jt={class:"language-html"},Bt=Y(()=>F("h5",{class:"source-heading"},"css",-1)),Mt={class:"language-css"},Rt=Y(()=>F("h5",{class:"source-heading"},"js",-1)),Ut={class:"language-js"},Gt=Y(()=>F("h5",{class:"source-heading"},"package.json",-1)),Nt={class:"language-json"},qt={__name:"index",setup(j){return mt(()=>{const b=new lt({geometry:new ut([0,0])}),V=new ct({features:[b]}),T=new ft({source:V}),E=new xt({source:new Ft({layer:"stamen_toner"})}),k=new ht({layers:[E,T],target:document.getElementById("map"),view:new dt({center:[0,0],zoom:2})}),A="https://openlayers.org/en/latest/examples/data/globe.gif";gifler(A).frames(document.createElement("canvas"),function(r,s){b.getStyle()||b.setStyle(new It({image:new bt({img:r.canvas,opacity:.8})})),r.clearRect(0,0,s.width,s.height),r.drawImage(s.buffer,s.x,s.y),k.render()},!0),k.on("pointermove",function(r){const s=k.getEventPixel(r.originalEvent),_=k.hasFeatureAtPixel(s);k.getTarget().style.cursor=_?"pointer":""}),Prism.highlightAll()}),(b,V)=>(gt(),vt(_t,null,[F("h4",Tt,tt(et(kt)),1),Dt,Et,Lt,F("pre",null,[F("code",jt,tt("  "+et(St).trim()),1)]),Bt,F("pre",null,[F("code",Mt,tt("  "+et(At).trim()),1)]),Rt,F("pre",null,[F("code",Ut,tt("  "+et(Ct).trim()),1)]),Gt,F("pre",null,[F("code",Nt,tt("  "+et(Vt).trim()),1)])],64))}},re=pt(qt,[["__scopeId","data-v-596e7dff"]]);export{re as default};
