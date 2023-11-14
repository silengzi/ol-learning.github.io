import{F as le,V as ce,a as ue}from"./Vector-c43c78f5.js";import{m as fe,M as he,V as de}from"./TileLayer-f9f86bd4.js";import{_ as me,i as pe,o as ge,c as _e,b as I,t as ee,g as te,F as ve,p as ye,k as we,d as se}from"./index-4acf93cb.js";import{X as xe,T as Fe}from"./Tile-a0d0c745.js";import{A as be}from"./OSM-cb70612a.js";import{a as Ie,I as ke}from"./featureloader-3de5b58a.js";const Te='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a>',Se='&copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a>',Ae='&copy; <a href="https://stamen.com/" target="_blank">Stamen Design</a>',qe={stamen_terrain:{extension:"png",opaque:!0},stamen_terrain_background:{extension:"png",opaque:!0},stamen_terrain_labels:{extension:"png",opaque:!1},stamen_terrain_lines:{extension:"png",opaque:!1},stamen_toner_background:{extension:"png",opaque:!0},stamen_toner:{extension:"png",opaque:!0},stamen_toner_labels:{extension:"png",opaque:!1},stamen_toner_lines:{extension:"png",opaque:!1},stamen_toner_lite:{extension:"png",opaque:!0},stamen_watercolor:{extension:"jpg",opaque:!0},alidade_smooth:{extension:"png",opaque:!0},alidade_smooth_dark:{extension:"png",opaque:!0},outdoors:{extension:"png",opaque:!0},osm_bright:{extension:"png",opaque:!0}},Ce={stamen_terrain:{minZoom:0,maxZoom:18,retina:!0},stamen_toner:{minZoom:0,maxZoom:20,retina:!0},stamen_watercolor:{minZoom:1,maxZoom:18,retina:!1}};class De extends xe{constructor(c){const T=c.layer.indexOf("-"),q=T==-1?c.layer:c.layer.slice(0,T),S=Ce[q]||{minZoom:0,maxZoom:20,retina:!0},y=qe[c.layer],A=c.apiKey?"?api_key="+c.apiKey:"",e=S.retina&&c.retina?"@2x":"",r=c.url!==void 0?c.url:"https://tiles.stadiamaps.com/tiles/"+c.layer+"/{z}/{x}/{y}"+e+"."+y.extension+A,o=[Te,Se,be];c.layer.startsWith("stamen_")&&o.splice(1,0,Ae),super({attributions:o,cacheSize:c.cacheSize,crossOrigin:"anonymous",interpolate:c.interpolate,maxZoom:c.maxZoom!==void 0?c.maxZoom:S.maxZoom,minZoom:c.minZoom!==void 0?c.minZoom:S.minZoom,opaque:y.opaque,reprojectionErrorThreshold:c.reprojectionErrorThreshold,tileLoadFunction:c.tileLoadFunction,transition:c.transition,url:r,tilePixelRatio:e?2:1,wrapX:c.wrapX,zDirection:c.zDirection})}}const Ve=De;/** gifler.js | github.com/themadcreator/gifler | @license: Apache-2.0 */(function B(c,T,q){function S(e,r){if(!T[e]){if(!c[e]){var o=typeof require=="function"&&require;if(!r&&o)return o(e,!0);if(y)return y(e,!0);var w=new Error("Cannot find module '"+e+"'");throw w.code="MODULE_NOT_FOUND",w}var i=T[e]={exports:{}};c[e][0].call(i.exports,function(t){var n=c[e][1][t];return S(n||t)},i,i.exports,B,c,T,q)}return T[e].exports}for(var y=typeof require=="function"&&require,A=0;A<q.length;A++)S(q[A]);return S})({1:[function(B,c,T){function q(e,r,o,n){function i(m){var v=m.length;if(2>v||v>256||v&v-1)throw"Invalid code/color length, must be power of 2 and 2 .. 256.";return v}var t=0,n=n===void 0?{}:n,s=n.loop===void 0?null:n.loop,a=n.palette===void 0?null:n.palette;if(0>=r||0>=o||r>65535||o>65535)throw"Width/Height invalid.";e[t++]=71,e[t++]=73,e[t++]=70,e[t++]=56,e[t++]=57,e[t++]=97;var l=0,f=0;if(a!==null){for(var _=i(a);_>>=1;)++l;if(_=1<<l,--l,n.background!==void 0){if(f=n.background,f>=_)throw"Background index out of range.";if(f===0)throw"Background index explicitly passed as 0."}}if(e[t++]=255&r,e[t++]=r>>8&255,e[t++]=255&o,e[t++]=o>>8&255,e[t++]=(a!==null?128:0)|l,e[t++]=f,e[t++]=0,a!==null)for(var h=0,F=a.length;F>h;++h){var b=a[h];e[t++]=b>>16&255,e[t++]=b>>8&255,e[t++]=255&b}if(s!==null){if(0>s||s>65535)throw"Loop count invalid.";e[t++]=33,e[t++]=255,e[t++]=11,e[t++]=78,e[t++]=69,e[t++]=84,e[t++]=83,e[t++]=67,e[t++]=65,e[t++]=80,e[t++]=69,e[t++]=50,e[t++]=46,e[t++]=48,e[t++]=3,e[t++]=1,e[t++]=255&s,e[t++]=s>>8&255,e[t++]=0}var d=!1;this.addFrame=function(m,v,k,g,V,p){if(d===!0&&(--t,d=!1),p=p===void 0?{}:p,0>m||0>v||m>65535||v>65535)throw"x/y invalid.";if(0>=k||0>=g||k>65535||g>65535)throw"Width/Height invalid.";if(V.length<k*g)throw"Not enough pixels for the frame size.";var R=!0,E=p.palette;if(E==null&&(R=!1,E=a),E==null)throw"Must supply either a local or global palette.";for(var J=i(E),Z=0;J>>=1;)++Z;J=1<<Z;var K=p.delay===void 0?0:p.delay,N=p.disposal===void 0?0:p.disposal;if(0>N||N>3)throw"Disposal out of range.";var Y=!1,D=0;if(p.transparent!==void 0&&p.transparent!==null&&(Y=!0,D=p.transparent,0>D||D>=J))throw"Transparent color index.";if((N!==0||Y||K!==0)&&(e[t++]=33,e[t++]=249,e[t++]=4,e[t++]=N<<2|(Y===!0?1:0),e[t++]=255&K,e[t++]=K>>8&255,e[t++]=D,e[t++]=0),e[t++]=44,e[t++]=255&m,e[t++]=m>>8&255,e[t++]=255&v,e[t++]=v>>8&255,e[t++]=255&k,e[t++]=k>>8&255,e[t++]=255&g,e[t++]=g>>8&255,e[t++]=R===!0?128|Z-1:0,R===!0)for(var C=0,u=E.length;u>C;++C){var L=E[C];e[t++]=L>>16&255,e[t++]=L>>8&255,e[t++]=255&L}t=S(e,t,2>Z?2:Z,V)},this.end=function(){return d===!1&&(e[t++]=59,d=!0),t}}function S(e,r,o,w){function i(p){for(;h>=p;)e[r++]=255&F,F>>=8,h-=8,r===n+256&&(e[n]=255,n=r++)}function t(p){F|=p<<h,h+=_,i(8)}e[r++]=o;var n=r++,s=1<<o,a=s-1,l=s+1,f=l+1,_=o+1,h=0,F=0,b=w[0]&a,d={};t(s);for(var m=1,v=w.length;v>m;++m){var k=w[m]&a,g=b<<8|k,V=d[g];if(V===void 0){for(F|=b<<h,h+=_;h>=8;)e[r++]=255&F,F>>=8,h-=8,r===n+256&&(e[n]=255,n=r++);f===4096?(t(s),f=l+1,_=o+1,d={}):(f>=1<<_&&++_,d[g]=f++),b=k}else b=V}return t(b),t(l),i(1),n+1===r?e[n]=0:(e[n]=r-n-1,e[r++]=0),r}function y(e){var r=0;if(e[r++]!==71||e[r++]!==73||e[r++]!==70||e[r++]!==56||(e[r++]+1&253)!==56||e[r++]!==97)throw"Invalid GIF 87a/89a header.";var o=e[r++]|e[r++]<<8,w=e[r++]|e[r++]<<8,i=e[r++],t=i>>7,n=7&i,s=1<<n+1;e[r++],e[r++];var a=null;t&&(a=r,r+=3*s);var l=!0,f=[],_=0,h=null,F=0,b=null;for(this.width=o,this.height=w;l&&r<e.length;)switch(e[r++]){case 33:switch(e[r++]){case 255:if(e[r]!==11||e[r+1]==78&&e[r+2]==69&&e[r+3]==84&&e[r+4]==83&&e[r+5]==67&&e[r+6]==65&&e[r+7]==80&&e[r+8]==69&&e[r+9]==50&&e[r+10]==46&&e[r+11]==48&&e[r+12]==3&&e[r+13]==1&&e[r+16]==0)r+=14,b=e[r++]|e[r++]<<8,r++;else for(r+=12;;){var d=e[r++];if(d===0)break;r+=d}break;case 249:if(e[r++]!==4||e[r+4]!==0)throw"Invalid graphics extension block.";var m=e[r++];_=e[r++]|e[r++]<<8,h=e[r++],!(1&m)&&(h=null),F=m>>2&7,r++;break;case 254:for(;;){var d=e[r++];if(d===0)break;r+=d}break;default:throw"Unknown graphic control label: 0x"+e[r-1].toString(16)}break;case 44:var v=e[r++]|e[r++]<<8,k=e[r++]|e[r++]<<8,g=e[r++]|e[r++]<<8,V=e[r++]|e[r++]<<8,p=e[r++],R=p>>7,E=p>>6&1,J=7&p,Z=1<<J+1,K=a,N=!1;if(R){var N=!0;K=r,r+=3*Z}var Y=r;for(r++;;){var d=e[r++];if(d===0)break;r+=d}f.push({x:v,y:k,width:g,height:V,has_local_palette:N,palette_offset:K,data_offset:Y,data_length:r-Y,transparent_index:h,interlaced:!!E,delay:_,disposal:F});break;case 59:l=!1;break;default:throw"Unknown gif block: 0x"+e[r-1].toString(16)}this.numFrames=function(){return f.length},this.loopCount=function(){return b},this.frameInfo=function(D){if(0>D||D>=f.length)throw"Frame index out of range.";return f[D]},this.decodeAndBlitFrameBGRA=function(D,C){var u=this.frameInfo(D),L=u.width*u.height,U=new Uint8Array(L);A(e,u.data_offset,U,L);var O=u.palette_offset,G=u.transparent_index;G===null&&(G=256);var j=u.width,P=o-j,z=j,Q=4*(u.y*o+u.x),re=4*((u.y+u.height)*o+u.x),x=Q,W=4*P;u.interlaced===!0&&(W+=4*o*7);for(var X=8,H=0,ne=U.length;ne>H;++H){var M=U[H];if(z===0&&(x+=W,z=j,x>=re&&(W=4*P+4*o*(X-1),x=Q+(j+P)*(X<<1),X>>=1)),M===G)x+=4;else{var ae=e[O+3*M],ie=e[O+3*M+1],oe=e[O+3*M+2];C[x++]=oe,C[x++]=ie,C[x++]=ae,C[x++]=255}--z}},this.decodeAndBlitFrameRGBA=function(D,C){var u=this.frameInfo(D),L=u.width*u.height,U=new Uint8Array(L);A(e,u.data_offset,U,L);var O=u.palette_offset,G=u.transparent_index;G===null&&(G=256);var j=u.width,P=o-j,z=j,Q=4*(u.y*o+u.x),re=4*((u.y+u.height)*o+u.x),x=Q,W=4*P;u.interlaced===!0&&(W+=4*o*7);for(var X=8,H=0,ne=U.length;ne>H;++H){var M=U[H];if(z===0&&(x+=W,z=j,x>=re&&(W=4*P+4*o*(X-1),x=Q+(j+P)*(X<<1),X>>=1)),M===G)x+=4;else{var ae=e[O+3*M],ie=e[O+3*M+1],oe=e[O+3*M+2];C[x++]=ae,C[x++]=ie,C[x++]=oe,C[x++]=255}--z}}}function A(e,r,o,w){for(var i=e[r++],t=1<<i,n=t+1,s=n+1,a=i+1,l=(1<<a)-1,f=0,_=0,h=0,F=e[r++],b=new Int32Array(4096),d=null;;){for(;16>f&&F!==0;)_|=e[r++]<<f,f+=8,F===1?F=e[r++]:--F;if(a>f)break;var m=_&l;if(_>>=a,f-=a,m!==t){if(m===n)break;for(var v=s>m?m:d,k=0,g=v;g>t;)g=b[g]>>8,++k;var V=g,p=h+k+(v!==m?1:0);if(p>w)return void console.log("Warning, gif stream longer than expected.");o[h++]=V,h+=k;var R=h;for(v!==m&&(o[h++]=V),g=v;k--;)g=b[g],o[--R]=255&g,g>>=8;d!==null&&4096>s&&(b[s++]=d<<8|V,s>=l+1&&12>a&&(++a,l=l<<1|1)),d=m}else s=n+1,a=i+1,l=(1<<a)-1,d=null}return h!==w&&console.log("Warning, gif stream shorter than expected."),o}try{T.GifWriter=q,T.GifReader=y}catch{}},{}],2:[function(B,c,T){var q,S,y,A,e,r,o,w=function(i,t){return function(){return i.apply(t,arguments)}};S=B("omggif").GifReader,r=function(i){var t;return t=new XMLHttpRequest,t.open("GET",i,!0),t.responseType="arraybuffer",{xhr:t,get:function(n){return t.onload=o(n),t.send(),this},animate:function(n){var s;return s=e(n),t.onload=o(function(a){return a.animateInCanvas(s)}),t.send(),this},frames:function(n,s,a){var l;return a==null&&(a=!1),l=e(n),t.onload=o(function(f){return f.onDrawFrame=s,f.animateInCanvas(l,a)}),t.send(),this}}},o=function(i){return function(t){return i(new q(new S(new Uint8Array(this.response))))}},e=function(i){var t,n;if(typeof i=="string"&&((n=t=document.querySelector(i))!=null?n.tagName:void 0)==="CANVAS")return t;if((i!=null?i.tagName:void 0)==="CANVAS")return i;throw new Error("Unexpected selector type. Valid types are query-selector-string/canvas-element")},y=function(i,t,n){var s,a,l;return s=document.createElement("canvas"),a=s.getContext("2d"),s.width=i.width,s.height=i.height,l=a.createImageData(t,n),l.data.set(i.pixels),a.putImageData(l,-i.x,-i.y),s},A=function(i,t){var n;return(function(){n=[];for(var s=0,a=i.numFrames();a>=0?a>s:s>a;a>=0?s++:s--)n.push(s);return n}).apply(this).map(function(s){return function(a){var l;return l=i.frameInfo(a),l.pixels=new Uint8ClampedArray(i.width*i.height*4),i.decodeAndBlitFrameRGBA(a,l.pixels),l}}())},q=function(){function i(t){var n;this._reader=t,this._advanceFrame=w(this._advanceFrame,this),this._nextFrameRender=w(this._nextFrameRender,this),this._nextFrame=w(this._nextFrame,this),n=this._reader,this.width=n.width,this.height=n.height,this._frames=A(this._reader),this._loopCount=this._reader.loopCount(),this._loops=0,this._frameIndex=0,this._running=!1}return i.prototype.start=function(){return this._lastTime=new Date().valueOf(),this._delayCompensation=0,this._running=!0,setTimeout(this._nextFrame,0),this},i.prototype.stop=function(){return this._running=!1,this},i.prototype.reset=function(){return this._frameIndex=0,this._loops=0,this},i.prototype._nextFrame=function(){requestAnimationFrame(this._nextFrameRender)},i.prototype._nextFrameRender=function(){var t,n;if(this._running)return t=this._frames[this._frameIndex],(n=this.onFrame)!=null&&n.apply(this,[t,this._frameIndex]),this._enqueueNextFrame()},i.prototype._advanceFrame=function(){this._frameIndex+=1,this._frameIndex>=this._frames.length&&(this._loopCount!==0&&this._loopCount===this._loops?this.stop():(this._frameIndex=0,this._loops+=1))},i.prototype._enqueueNextFrame=function(){var t,n,s,a;for(this._advanceFrame();this._running;){if(s=this._frames[this._frameIndex],n=new Date().valueOf()-this._lastTime,this._lastTime+=n,this._delayCompensation+=n,a=10*s.delay,t=a-this._delayCompensation,this._delayCompensation-=a,!(0>t)){setTimeout(this._nextFrame,t);break}this._advanceFrame()}},i.prototype.animateInCanvas=function(t,n){var s;return n==null&&(n=!0),n&&(t.width=this.width,t.height=this.height),s=t.getContext("2d"),this.onDrawFrame==null&&(this.onDrawFrame=function(a,l,f){return a.drawImage(l.buffer,l.x,l.y)}),this.onFrame==null&&(this.onFrame=function(a){return function(l,f){var _,h;switch(l.buffer==null&&(l.buffer=y(l,a.width,a.height)),typeof a.disposeFrame=="function"&&a.disposeFrame(),l.disposal){case 2:a.disposeFrame=function(){return s.clearRect(0,0,t.width,t.height)};break;case 3:h=s.getImageData(0,0,t.width,t.height),a.disposeFrame=function(){return s.putImageData(h,0,0)};break;default:a.disposeFrame=null}return(_=a.onDrawFrame)!=null?_.apply(a,[s,l,f]):void 0}}(this)),this.start(),this},i}(),r.Animator=q,r.decodeFrames=A,r.createBufferCanvas=y,typeof window<"u"&&window!==null&&(window.gifler=r),typeof c<"u"&&c!==null&&(c.exports=r)},{omggif:1}]},{},[2]);const Be="Animated GIF",Ee=`
  <div id="map" class="map"></div>

  <script src="https://cdn.jsdelivr.net/npm/gifler@0.1.0/gifler.min.js"><\/script>
`,Le=`
  .map {
    width: 100%;
    height: 400px;
  }
`,je=`
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
`,Me=`
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
`;const $=B=>(ye("data-v-4de56bba"),B=B(),we(),B),Re={id:"title"},Ze=$(()=>I("div",{id:"map",class:"map"},null,-1)),Ne=$(()=>I("p",null,[se("Example of using an animated GIF as an icon. Animation is achieved using the "),I("a",{href:"https://themadcreator.github.io/gifler/",target:"_blank"},"Gifler"),se(" library.")],-1)),Ue=$(()=>I("h5",{class:"source-heading"},"html",-1)),Oe={class:"language-html"},Ge=$(()=>I("h5",{class:"source-heading"},"css",-1)),Pe={class:"language-css"},ze=$(()=>I("h5",{class:"source-heading"},"js",-1)),We={class:"language-js"},Xe=$(()=>I("h5",{class:"source-heading"},"package.json",-1)),He={class:"language-json"},Ke={__name:"index",setup(B){return pe(()=>{const c=new le({geometry:new fe([0,0])}),T=new ce({features:[c]}),q=new ue({source:T}),S=new Fe({source:new Ve({layer:"stamen_toner"})}),y=new he({layers:[S,q],target:document.getElementById("map"),view:new de({center:[0,0],zoom:2})}),A="https://openlayers.org/en/latest/examples/data/globe.gif";gifler(A).frames(document.createElement("canvas"),function(r,o){c.getStyle()||c.setStyle(new Ie({image:new ke({img:r.canvas,opacity:.8})})),r.clearRect(0,0,o.width,o.height),r.drawImage(o.buffer,o.x,o.y),y.render()},!0),y.on("pointermove",function(r){const o=y.getEventPixel(r.originalEvent),w=y.hasFeatureAtPixel(o);y.getTarget().style.cursor=w?"pointer":""}),Prism.highlightAll()}),(c,T)=>(ge(),_e(ve,null,[I("h4",Re,ee(te(Be)),1),Ze,Ne,Ue,I("pre",null,[I("code",Oe,ee("  "+te(Ee).trim()),1)]),Ge,I("pre",null,[I("code",Pe,ee("  "+te(Le).trim()),1)]),ze,I("pre",null,[I("code",We,ee("  "+te(je).trim()),1)]),Xe,I("pre",null,[I("code",He,ee("  "+te(Me).trim()),1)])],64))}},rt=me(Ke,[["__scopeId","data-v-4de56bba"]]);export{rt as default};
