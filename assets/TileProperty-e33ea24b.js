import{ab as zt,G as wt,Z as m,ac as Xt,ad as At,ae as Ot,Q,af as Wt,e as C,a8 as ut,ag as Dt,ah as Zt,ai as kt,aj as ht,h as _t,i as Gt,ak as st,al as nt,Y as Ft,am as bt,an as ft,$ as Ct,s as jt,ao as Kt,ap as Nt,a0 as B,aq as qt,ar as ct,w as rt,x as lt,K as Ut,L as mt,as as Y,at as Bt,au as yt,O as z,av as It,aw as $t,ax as Ht,ay as $,az as H,g as Mt,aA as Qt,aB as Vt,aC as Jt,aD as te,aa as ee,aE as ie,aF as se}from"./Layer-3b715193.js";class ne extends zt{constructor(t,e,i){super(),i=i||{},this.tileCoord=t,this.state=e,this.interimTile=null,this.key="",this.transition_=i.transition===void 0?250:i.transition,this.transitionStarts_={},this.interpolate=!!i.interpolate}changed(){this.dispatchEvent(wt.CHANGE)}release(){this.state===m.ERROR&&this.setState(m.EMPTY)}getKey(){return this.key+"/"+this.tileCoord}getInterimTile(){let t=this.interimTile;if(!t)return this;do{if(t.getState()==m.LOADED)return this.transition_=0,t;t=t.interimTile}while(t);return this}refreshInterimChain(){let t=this.interimTile;if(!t)return;let e=this;do{if(t.getState()==m.LOADED){t.interimTile=null;break}t.getState()==m.LOADING?e=t:t.getState()==m.IDLE?e.interimTile=t.interimTile:e=t,t=e.interimTile}while(t)}getTileCoord(){return this.tileCoord}getState(){return this.state}setState(t){if(this.state!==m.ERROR&&this.state>t)throw new Error("Tile load sequence violation");this.state=t,this.changed()}load(){Xt()}getAlpha(t,e){if(!this.transition_)return 1;let i=this.transitionStarts_[t];if(!i)i=e,this.transitionStarts_[t]=i;else if(i===-1)return 1;const s=e-i+1e3/60;return s>=this.transition_?1:At(s/this.transition_)}inTransition(t){return this.transition_?this.transitionStarts_[t]!==-1:!1}endTransition(t){this.transition_&&(this.transitionStarts_[t]=-1)}}const vt=ne;class re extends vt{constructor(t,e,i,s,n,o){super(t,e,o),this.crossOrigin_=s,this.src_=i,this.key=i,this.image_=new Image,s!==null&&(this.image_.crossOrigin=s),this.unlisten_=null,this.tileLoadFunction_=n}getImage(){return this.image_}setImage(t){this.image_=t,this.state=m.LOADED,this.unlistenImage_(),this.changed()}handleImageError_(){this.state=m.ERROR,this.unlistenImage_(),this.image_=oe(),this.changed()}handleImageLoad_(){const t=this.image_;t.naturalWidth&&t.naturalHeight?this.state=m.LOADED:this.state=m.EMPTY,this.unlistenImage_(),this.changed()}load(){this.state==m.ERROR&&(this.state=m.IDLE,this.image_=new Image,this.crossOrigin_!==null&&(this.image_.crossOrigin=this.crossOrigin_)),this.state==m.IDLE&&(this.state=m.LOADING,this.changed(),this.tileLoadFunction_(this,this.src_),this.unlisten_=Ot(this.image_,this.handleImageLoad_.bind(this),this.handleImageError_.bind(this)))}unlistenImage_(){this.unlisten_&&(this.unlisten_(),this.unlisten_=null)}}function oe(){const r=Q(1,1);return r.fillStyle="rgba(0,0,0,0)",r.fillRect(0,0,1,1),r.canvas}const Re=re,ae=.5,he=10,Tt=.25;class le{constructor(t,e,i,s,n,o){this.sourceProj_=t,this.targetProj_=e;let a={};const h=Wt(this.targetProj_,this.sourceProj_);this.transformInv_=function(c){const g=c[0]+"/"+c[1];return a[g]||(a[g]=h(c)),a[g]},this.maxSourceExtent_=s,this.errorThresholdSquared_=n*n,this.triangles_=[],this.wrapsXInSource_=!1,this.canWrapXInSource_=this.sourceProj_.canWrapX()&&!!s&&!!this.sourceProj_.getExtent()&&C(s)>=C(this.sourceProj_.getExtent()),this.sourceWorldWidth_=this.sourceProj_.getExtent()?C(this.sourceProj_.getExtent()):null,this.targetWorldWidth_=this.targetProj_.getExtent()?C(this.targetProj_.getExtent()):null;const l=ut(i),_=Dt(i),T=Zt(i),F=kt(i),I=this.transformInv_(l),u=this.transformInv_(_),d=this.transformInv_(T),E=this.transformInv_(F),p=he+(o?Math.max(0,Math.ceil(Math.log2(ht(i)/(o*o*256*256)))):0);if(this.addQuad_(l,_,T,F,I,u,d,E,p),this.wrapsXInSource_){let c=1/0;this.triangles_.forEach(function(g,x,f){c=Math.min(c,g.source[0][0],g.source[1][0],g.source[2][0])}),this.triangles_.forEach(g=>{if(Math.max(g.source[0][0],g.source[1][0],g.source[2][0])-c>this.sourceWorldWidth_/2){const x=[[g.source[0][0],g.source[0][1]],[g.source[1][0],g.source[1][1]],[g.source[2][0],g.source[2][1]]];x[0][0]-c>this.sourceWorldWidth_/2&&(x[0][0]-=this.sourceWorldWidth_),x[1][0]-c>this.sourceWorldWidth_/2&&(x[1][0]-=this.sourceWorldWidth_),x[2][0]-c>this.sourceWorldWidth_/2&&(x[2][0]-=this.sourceWorldWidth_);const f=Math.min(x[0][0],x[1][0],x[2][0]);Math.max(x[0][0],x[1][0],x[2][0])-f<this.sourceWorldWidth_/2&&(g.source=x)}})}a={}}addTriangle_(t,e,i,s,n,o){this.triangles_.push({source:[s,n,o],target:[t,e,i]})}addQuad_(t,e,i,s,n,o,a,h,l){const _=_t([n,o,a,h]),T=this.sourceWorldWidth_?C(_)/this.sourceWorldWidth_:null,F=this.sourceWorldWidth_,I=this.sourceProj_.canWrapX()&&T>.5&&T<1;let u=!1;if(l>0){if(this.targetProj_.isGlobal()&&this.targetWorldWidth_){const E=_t([t,e,i,s]);u=C(E)/this.targetWorldWidth_>Tt||u}!I&&this.sourceProj_.isGlobal()&&T&&(u=T>Tt||u)}if(!u&&this.maxSourceExtent_&&isFinite(_[0])&&isFinite(_[1])&&isFinite(_[2])&&isFinite(_[3])&&!Gt(_,this.maxSourceExtent_))return;let d=0;if(!u&&(!isFinite(n[0])||!isFinite(n[1])||!isFinite(o[0])||!isFinite(o[1])||!isFinite(a[0])||!isFinite(a[1])||!isFinite(h[0])||!isFinite(h[1]))){if(l>0)u=!0;else if(d=(!isFinite(n[0])||!isFinite(n[1])?8:0)+(!isFinite(o[0])||!isFinite(o[1])?4:0)+(!isFinite(a[0])||!isFinite(a[1])?2:0)+(!isFinite(h[0])||!isFinite(h[1])?1:0),d!=1&&d!=2&&d!=4&&d!=8)return}if(l>0){if(!u){const E=[(t[0]+i[0])/2,(t[1]+i[1])/2],p=this.transformInv_(E);let c;I?c=(st(n[0],F)+st(a[0],F))/2-st(p[0],F):c=(n[0]+a[0])/2-p[0];const g=(n[1]+a[1])/2-p[1];u=c*c+g*g>this.errorThresholdSquared_}if(u){if(Math.abs(t[0]-i[0])<=Math.abs(t[1]-i[1])){const E=[(e[0]+i[0])/2,(e[1]+i[1])/2],p=this.transformInv_(E),c=[(s[0]+t[0])/2,(s[1]+t[1])/2],g=this.transformInv_(c);this.addQuad_(t,e,E,c,n,o,p,g,l-1),this.addQuad_(c,E,i,s,g,p,a,h,l-1)}else{const E=[(t[0]+e[0])/2,(t[1]+e[1])/2],p=this.transformInv_(E),c=[(i[0]+s[0])/2,(i[1]+s[1])/2],g=this.transformInv_(c);this.addQuad_(t,E,c,s,n,p,g,h,l-1),this.addQuad_(E,e,i,c,p,o,a,g,l-1)}return}}if(I){if(!this.canWrapXInSource_)return;this.wrapsXInSource_=!0}d&11||this.addTriangle_(t,i,s,n,a,h),d&14||this.addTriangle_(t,i,e,n,a,o),d&&(d&13||this.addTriangle_(e,s,t,o,h,n),d&7||this.addTriangle_(e,s,i,o,h,a))}calculateSourceExtent(){const t=Ft();return this.triangles_.forEach(function(e,i,s){const n=e.source;nt(t,n[0]),nt(t,n[1]),nt(t,n[2])}),t}getTriangles(){return this.triangles_}}const ue=le;let ot;const Z=[];function xt(r,t,e,i,s){r.beginPath(),r.moveTo(0,0),r.lineTo(t,e),r.lineTo(i,s),r.closePath(),r.save(),r.clip(),r.fillRect(0,0,Math.max(t,i)+1,Math.max(e,s)),r.restore()}function at(r,t){return Math.abs(r[t*4]-210)>2||Math.abs(r[t*4+3]-.75*255)>2}function ce(){if(ot===void 0){const r=Q(6,6,Z);r.globalCompositeOperation="lighter",r.fillStyle="rgba(210, 0, 0, 0.75)",xt(r,4,5,4,0),xt(r,4,5,0,5);const t=r.getImageData(0,0,3,3).data;ot=at(t,0)||at(t,4)||at(t,8),ct(r),Z.push(r.canvas)}return ot}function Et(r,t,e,i){const s=bt(e,t,r);let n=ft(t,i,e);const o=t.getMetersPerUnit();o!==void 0&&(n*=o);const a=r.getMetersPerUnit();a!==void 0&&(n/=a);const h=r.getExtent();if(!h||Ct(h,s)){const l=ft(r,n,s)/n;isFinite(l)&&l>0&&(n/=l)}return n}function de(r,t,e,i){const s=jt(e);let n=Et(r,t,s,i);return(!isFinite(n)||n<=0)&&Kt(e,function(o){return n=Et(r,t,o,i),isFinite(n)&&n>0}),n}function ge(r,t,e,i,s,n,o,a,h,l,_,T,F,I){const u=Q(Math.round(e*r),Math.round(e*t),Z);if(T||(u.imageSmoothingEnabled=!1),h.length===0)return u.canvas;u.scale(e,e);function d(f){return Math.round(f*e)/e}u.globalCompositeOperation="lighter";const E=Ft();h.forEach(function(f,y,M){Nt(E,f.extent)});let p;const c=e/i,g=(T?1:1+Math.pow(2,-24))/c;if(!F||h.length!==1||l!==0){if(p=Q(Math.round(C(E)*c),Math.round(B(E)*c),Z),T||(p.imageSmoothingEnabled=!1),s&&I){const f=(s[0]-E[0])*c,y=-(s[3]-E[3])*c,M=C(s)*c,w=B(s)*c;p.rect(f,y,M,w),p.clip()}h.forEach(function(f,y,M){const w=(f.extent[0]-E[0])*c,X=-(f.extent[3]-E[3])*c,S=C(f.extent)*c,L=B(f.extent)*c;f.image.width>0&&f.image.height>0&&p.drawImage(f.image,l,l,f.image.width-2*l,f.image.height-2*l,T?w:Math.round(w),T?X:Math.round(X),T?S:Math.round(w+S)-Math.round(w),T?L:Math.round(X+L)-Math.round(X))})}const x=ut(o);return a.getTriangles().forEach(function(f,y,M){const w=f.source,X=f.target;let S=w[0][0],L=w[0][1],k=w[1][0],G=w[1][1],b=w[2][0],V=w[2][1];const j=d((X[0][0]-x[0])/n),K=d(-(X[0][1]-x[1])/n),A=d((X[1][0]-x[0])/n),O=d(-(X[1][1]-x[1])/n),J=d((X[2][0]-x[0])/n),tt=d(-(X[2][1]-x[1])/n),et=S,it=L;S=0,L=0,k-=et,G-=it,b-=et,V-=it;const Pt=[[k,G,0,0,A-j],[b,V,0,0,J-j],[0,0,k,G,O-K],[0,0,b,V,tt-K]],N=qt(Pt);if(!N)return;if(u.save(),u.beginPath(),ce()||!T){u.moveTo(A,O);const v=4,U=j-A,gt=K-O;for(let P=0;P<v;P++)u.lineTo(A+d((P+1)*U/v),O+d(P*gt/(v-1))),P!=v-1&&u.lineTo(A+d((P+1)*U/v),O+d((P+1)*gt/(v-1)));u.lineTo(J,tt)}else u.moveTo(A,O),u.lineTo(j,K),u.lineTo(J,tt);u.clip(),u.transform(N[0],N[2],N[1],N[3],j,K),u.translate(E[0]-et,E[3]-it);let q;if(p)q=p.canvas,u.scale(g,-g);else{const v=h[0],U=v.extent;q=v.image,u.scale(C(U)/q.width,-B(U)/q.height)}u.drawImage(q,0,0),u.restore()}),p&&(ct(p),Z.push(p.canvas)),_&&(u.save(),u.globalCompositeOperation="source-over",u.strokeStyle="black",u.lineWidth=1,a.getTriangles().forEach(function(f,y,M){const w=f.target,X=(w[0][0]-x[0])/n,S=-(w[0][1]-x[1])/n,L=(w[1][0]-x[0])/n,k=-(w[1][1]-x[1])/n,G=(w[2][0]-x[0])/n,b=-(w[2][1]-x[1])/n;u.beginPath(),u.moveTo(L,k),u.lineTo(X,S),u.lineTo(G,b),u.closePath(),u.stroke()}),u.restore()),u.canvas}class _e extends vt{constructor(t,e,i,s,n,o,a,h,l,_,T,F){super(n,m.IDLE,F),this.renderEdges_=T!==void 0?T:!1,this.pixelRatio_=a,this.gutter_=h,this.canvas_=null,this.sourceTileGrid_=e,this.targetTileGrid_=s,this.wrappedTileCoord_=o||n,this.sourceTiles_=[],this.sourcesListenerKeys_=null,this.sourceZ_=0;const I=s.getTileCoordExtent(this.wrappedTileCoord_),u=this.targetTileGrid_.getExtent();let d=this.sourceTileGrid_.getExtent();const E=u?rt(I,u):I;if(ht(E)===0){this.state=m.EMPTY;return}const p=t.getExtent();p&&(d?d=rt(d,p):d=p);const c=s.getResolution(this.wrappedTileCoord_[0]),g=de(t,i,E,c);if(!isFinite(g)||g<=0){this.state=m.EMPTY;return}const x=_!==void 0?_:ae;if(this.triangulation_=new ue(t,i,E,d,g*x,c),this.triangulation_.getTriangles().length===0){this.state=m.EMPTY;return}this.sourceZ_=e.getZForResolution(g);let f=this.triangulation_.calculateSourceExtent();if(d&&(t.canWrapX()?(f[1]=lt(f[1],d[1],d[3]),f[3]=lt(f[3],d[1],d[3])):f=rt(f,d)),!ht(f))this.state=m.EMPTY;else{const y=e.getTileRangeForExtentAndZ(f,this.sourceZ_);for(let M=y.minX;M<=y.maxX;M++)for(let w=y.minY;w<=y.maxY;w++){const X=l(this.sourceZ_,M,w,a);X&&this.sourceTiles_.push(X)}this.sourceTiles_.length===0&&(this.state=m.EMPTY)}}getImage(){return this.canvas_}reproject_(){const t=[];if(this.sourceTiles_.forEach(e=>{e&&e.getState()==m.LOADED&&t.push({extent:this.sourceTileGrid_.getTileCoordExtent(e.tileCoord),image:e.getImage()})}),this.sourceTiles_.length=0,t.length===0)this.state=m.ERROR;else{const e=this.wrappedTileCoord_[0],i=this.targetTileGrid_.getTileSize(e),s=typeof i=="number"?i:i[0],n=typeof i=="number"?i:i[1],o=this.targetTileGrid_.getResolution(e),a=this.sourceTileGrid_.getResolution(this.sourceZ_),h=this.targetTileGrid_.getTileCoordExtent(this.wrappedTileCoord_);this.canvas_=ge(s,n,this.pixelRatio_,a,this.sourceTileGrid_.getExtent(),o,h,this.triangulation_,t,this.gutter_,this.renderEdges_,this.interpolate),this.state=m.LOADED}this.changed()}load(){if(this.state==m.IDLE){this.state=m.LOADING,this.changed();let t=0;this.sourcesListenerKeys_=[],this.sourceTiles_.forEach(e=>{const i=e.getState();if(i==m.IDLE||i==m.LOADING){t++;const s=Ut(e,wt.CHANGE,function(n){const o=e.getState();(o==m.LOADED||o==m.ERROR||o==m.EMPTY)&&(mt(s),t--,t===0&&(this.unlistenSources_(),this.reproject_()))},this);this.sourcesListenerKeys_.push(s)}}),t===0?setTimeout(this.reproject_.bind(this),0):this.sourceTiles_.forEach(function(e,i,s){e.getState()==m.IDLE&&e.load()})}}unlistenSources_(){this.sourcesListenerKeys_.forEach(mt),this.sourcesListenerKeys_=null}release(){this.canvas_&&(ct(this.canvas_.getContext("2d")),Z.push(this.canvas_),this.canvas_=null),super.release()}}const Se=_e;class fe{constructor(t){this.highWaterMark=t!==void 0?t:2048,this.count_=0,this.entries_={},this.oldest_=null,this.newest_=null}canExpireCache(){return this.highWaterMark>0&&this.getCount()>this.highWaterMark}expireCache(t){for(;this.canExpireCache();)this.pop()}clear(){this.count_=0,this.entries_={},this.oldest_=null,this.newest_=null}containsKey(t){return this.entries_.hasOwnProperty(t)}forEach(t){let e=this.oldest_;for(;e;)t(e.value_,e.key_,this),e=e.newer}get(t,e){const i=this.entries_[t];return Y(i!==void 0,"Tried to get a value for a key that does not exist in the cache"),i===this.newest_||(i===this.oldest_?(this.oldest_=this.oldest_.newer,this.oldest_.older=null):(i.newer.older=i.older,i.older.newer=i.newer),i.newer=null,i.older=this.newest_,this.newest_.newer=i,this.newest_=i),i.value_}remove(t){const e=this.entries_[t];return Y(e!==void 0,"Tried to get a value for a key that does not exist in the cache"),e===this.newest_?(this.newest_=e.older,this.newest_&&(this.newest_.newer=null)):e===this.oldest_?(this.oldest_=e.newer,this.oldest_&&(this.oldest_.older=null)):(e.newer.older=e.older,e.older.newer=e.newer),delete this.entries_[t],--this.count_,e.value_}getCount(){return this.count_}getKeys(){const t=new Array(this.count_);let e=0,i;for(i=this.newest_;i;i=i.older)t[e++]=i.key_;return t}getValues(){const t=new Array(this.count_);let e=0,i;for(i=this.newest_;i;i=i.older)t[e++]=i.value_;return t}peekLast(){return this.oldest_.value_}peekLastKey(){return this.oldest_.key_}peekFirstKey(){return this.newest_.key_}peek(t){var e;return(e=this.entries_[t])==null?void 0:e.value_}pop(){const t=this.oldest_;return delete this.entries_[t.key_],t.newer&&(t.newer.older=null),this.oldest_=t.newer,this.oldest_||(this.newest_=null),--this.count_,t.value_}replace(t,e){this.get(t),this.entries_[t].value_=e}set(t,e){Y(!(t in this.entries_),"Tried to set a value for a key that is used already");const i={key_:t,newer:null,older:this.newest_,value_:e};this.newest_?this.newest_.newer=i:this.oldest_=i,this.newest_=i,this.entries_[t]=i,++this.count_}setSize(t){this.highWaterMark=t}}const me=fe;function pt(r,t,e,i){return i!==void 0?(i[0]=r,i[1]=t,i[2]=e,i):[r,t,e]}function dt(r,t,e){return r+"/"+t+"/"+e}function Te(r){return dt(r[0],r[1],r[2])}function Le(r){const[t,e,i]=r.substring(r.lastIndexOf("/")+1,r.length).split(",").map(Number);return dt(t,e,i)}function xe(r){return r.split("/").map(Number)}function Pe(r){return(r[1]<<r[0])+r[2]}function Ee(r,t){const e=r[0],i=r[1],s=r[2];if(t.getMinZoom()>e||e>t.getMaxZoom())return!1;const n=t.getFullTileRange(e);return n?n.containsXY(i,s):!0}class pe extends me{clear(){for(;this.getCount()>0;)this.pop().release();super.clear()}expireCache(t){for(;this.canExpireCache()&&!(this.peekLast().getKey()in t);)this.pop().release()}pruneExceptNewestZ(){if(this.getCount()===0)return;const t=this.peekFirstKey(),i=xe(t)[0];this.forEach(s=>{s.tileCoord[0]!==i&&(this.remove(Te(s.tileCoord)),s.release())})}}const we=pe,ze={TILELOADSTART:"tileloadstart",TILELOADEND:"tileloadend",TILELOADERROR:"tileloaderror"};class Yt{constructor(t,e,i,s){this.minX=t,this.maxX=e,this.minY=i,this.maxY=s}contains(t){return this.containsXY(t[1],t[2])}containsTileRange(t){return this.minX<=t.minX&&t.maxX<=this.maxX&&this.minY<=t.minY&&t.maxY<=this.maxY}containsXY(t,e){return this.minX<=t&&t<=this.maxX&&this.minY<=e&&e<=this.maxY}equals(t){return this.minX==t.minX&&this.minY==t.minY&&this.maxX==t.maxX&&this.maxY==t.maxY}extend(t){t.minX<this.minX&&(this.minX=t.minX),t.maxX>this.maxX&&(this.maxX=t.maxX),t.minY<this.minY&&(this.minY=t.minY),t.maxY>this.maxY&&(this.maxY=t.maxY)}getHeight(){return this.maxY-this.minY+1}getSize(){return[this.getWidth(),this.getHeight()]}getWidth(){return this.maxX-this.minX+1}intersects(t){return this.minX<=t.maxX&&this.maxX>=t.minX&&this.minY<=t.maxY&&this.maxY>=t.minY}}function W(r,t,e,i,s){return s!==void 0?(s.minX=r,s.maxX=t,s.minY=e,s.maxY=i,s):new Yt(r,t,e,i)}const Xe=Yt,D=[0,0,0],R=5;class Fe{constructor(t){this.minZoom=t.minZoom!==void 0?t.minZoom:0,this.resolutions_=t.resolutions,Y(Bt(this.resolutions_,(s,n)=>n-s,!0),"`resolutions` must be sorted in descending order");let e;if(!t.origins){for(let s=0,n=this.resolutions_.length-1;s<n;++s)if(!e)e=this.resolutions_[s]/this.resolutions_[s+1];else if(this.resolutions_[s]/this.resolutions_[s+1]!==e){e=void 0;break}}this.zoomFactor_=e,this.maxZoom=this.resolutions_.length-1,this.origin_=t.origin!==void 0?t.origin:null,this.origins_=null,t.origins!==void 0&&(this.origins_=t.origins,Y(this.origins_.length==this.resolutions_.length,"Number of `origins` and `resolutions` must be equal"));const i=t.extent;i!==void 0&&!this.origin_&&!this.origins_&&(this.origin_=ut(i)),Y(!this.origin_&&this.origins_||this.origin_&&!this.origins_,"Either `origin` or `origins` must be configured, never both"),this.tileSizes_=null,t.tileSizes!==void 0&&(this.tileSizes_=t.tileSizes,Y(this.tileSizes_.length==this.resolutions_.length,"Number of `tileSizes` and `resolutions` must be equal")),this.tileSize_=t.tileSize!==void 0?t.tileSize:this.tileSizes_?null:yt,Y(!this.tileSize_&&this.tileSizes_||this.tileSize_&&!this.tileSizes_,"Either `tileSize` or `tileSizes` must be configured, never both"),this.extent_=i!==void 0?i:null,this.fullTileRanges_=null,this.tmpSize_=[0,0],this.tmpExtent_=[0,0,0,0],t.sizes!==void 0?this.fullTileRanges_=t.sizes.map((s,n)=>{const o=new Xe(Math.min(0,s[0]),Math.max(s[0]-1,-1),Math.min(0,s[1]),Math.max(s[1]-1,-1));if(i){const a=this.getTileRangeForExtentAndZ(i,n);o.minX=Math.max(a.minX,o.minX),o.maxX=Math.min(a.maxX,o.maxX),o.minY=Math.max(a.minY,o.minY),o.maxY=Math.min(a.maxY,o.maxY)}return o}):i&&this.calculateTileRanges_(i)}forEachTileCoord(t,e,i){const s=this.getTileRangeForExtentAndZ(t,e);for(let n=s.minX,o=s.maxX;n<=o;++n)for(let a=s.minY,h=s.maxY;a<=h;++a)i([e,n,a])}forEachTileCoordParentTileRange(t,e,i,s){let n,o,a,h=null,l=t[0]-1;for(this.zoomFactor_===2?(o=t[1],a=t[2]):h=this.getTileCoordExtent(t,s);l>=this.minZoom;){if(o!==void 0&&a!==void 0?(o=Math.floor(o/2),a=Math.floor(a/2),n=W(o,o,a,a,i)):n=this.getTileRangeForExtentAndZ(h,l,i),e(l,n))return!0;--l}return!1}getExtent(){return this.extent_}getMaxZoom(){return this.maxZoom}getMinZoom(){return this.minZoom}getOrigin(t){return this.origin_?this.origin_:this.origins_[t]}getResolution(t){return this.resolutions_[t]}getResolutions(){return this.resolutions_}getTileCoordChildTileRange(t,e,i){if(t[0]<this.maxZoom){if(this.zoomFactor_===2){const n=t[1]*2,o=t[2]*2;return W(n,n+1,o,o+1,e)}const s=this.getTileCoordExtent(t,i||this.tmpExtent_);return this.getTileRangeForExtentAndZ(s,t[0]+1,e)}return null}getTileRangeForTileCoordAndZ(t,e,i){if(e>this.maxZoom||e<this.minZoom)return null;const s=t[0],n=t[1],o=t[2];if(e===s)return W(n,o,n,o,i);if(this.zoomFactor_){const h=Math.pow(this.zoomFactor_,e-s),l=Math.floor(n*h),_=Math.floor(o*h);if(e<s)return W(l,l,_,_,i);const T=Math.floor(h*(n+1))-1,F=Math.floor(h*(o+1))-1;return W(l,T,_,F,i)}const a=this.getTileCoordExtent(t,this.tmpExtent_);return this.getTileRangeForExtentAndZ(a,e,i)}getTileRangeForExtentAndZ(t,e,i){this.getTileCoordForXYAndZ_(t[0],t[3],e,!1,D);const s=D[1],n=D[2];this.getTileCoordForXYAndZ_(t[2],t[1],e,!0,D);const o=D[1],a=D[2];return W(s,o,n,a,i)}getTileCoordCenter(t){const e=this.getOrigin(t[0]),i=this.getResolution(t[0]),s=z(this.getTileSize(t[0]),this.tmpSize_);return[e[0]+(t[1]+.5)*s[0]*i,e[1]-(t[2]+.5)*s[1]*i]}getTileCoordExtent(t,e){const i=this.getOrigin(t[0]),s=this.getResolution(t[0]),n=z(this.getTileSize(t[0]),this.tmpSize_),o=i[0]+t[1]*n[0]*s,a=i[1]-(t[2]+1)*n[1]*s,h=o+n[0]*s,l=a+n[1]*s;return It(o,a,h,l,e)}getTileCoordForCoordAndResolution(t,e,i){return this.getTileCoordForXYAndResolution_(t[0],t[1],e,!1,i)}getTileCoordForXYAndResolution_(t,e,i,s,n){const o=this.getZForResolution(i),a=i/this.getResolution(o),h=this.getOrigin(o),l=z(this.getTileSize(o),this.tmpSize_);let _=a*(t-h[0])/i/l[0],T=a*(h[1]-e)/i/l[1];return s?(_=$(_,R)-1,T=$(T,R)-1):(_=H(_,R),T=H(T,R)),pt(o,_,T,n)}getTileCoordForXYAndZ_(t,e,i,s,n){const o=this.getOrigin(i),a=this.getResolution(i),h=z(this.getTileSize(i),this.tmpSize_);let l=(t-o[0])/a/h[0],_=(o[1]-e)/a/h[1];return s?(l=$(l,R)-1,_=$(_,R)-1):(l=H(l,R),_=H(_,R)),pt(i,l,_,n)}getTileCoordForCoordAndZ(t,e,i){return this.getTileCoordForXYAndZ_(t[0],t[1],e,!1,i)}getTileCoordResolution(t){return this.resolutions_[t[0]]}getTileSize(t){return this.tileSize_?this.tileSize_:this.tileSizes_[t]}getFullTileRange(t){return this.fullTileRanges_?this.fullTileRanges_[t]:this.extent_?this.getTileRangeForExtentAndZ(this.extent_,t):null}getZForResolution(t,e){const i=$t(this.resolutions_,t,e||0);return lt(i,this.minZoom,this.maxZoom)}tileCoordIntersectsViewport(t,e){return Ht(e,0,e.length,2,this.getTileCoordExtent(t))}calculateTileRanges_(t){const e=this.resolutions_.length,i=new Array(e);for(let s=this.minZoom;s<e;++s)i[s]=this.getTileRangeForExtentAndZ(t,s);this.fullTileRanges_=i}}const Rt=Fe;function Ce(r){let t=r.getDefaultTileGrid();return t||(t=Me(r),r.setDefaultTileGrid(t)),t}function ye(r,t,e){const i=t[0],s=r.getTileCoordCenter(t),n=Lt(e);if(!Ct(n,s)){const o=C(n),a=Math.ceil((n[0]-s[0])/o);return s[0]+=o*a,r.getTileCoordForCoordAndZ(s,i)}return t}function Ie(r,t,e,i){i=i!==void 0?i:"top-left";const s=St(r,t,e);return new Rt({extent:r,origin:Vt(r,i),resolutions:s,tileSize:e})}function Ae(r){const t=r||{},e=t.extent||Mt("EPSG:3857").getExtent(),i={extent:e,minZoom:t.minZoom,tileSize:t.tileSize,resolutions:St(e,t.maxZoom,t.tileSize,t.maxResolution)};return new Rt(i)}function St(r,t,e,i){t=t!==void 0?t:Jt,e=z(e!==void 0?e:yt);const s=B(r),n=C(r);i=i>0?i:Math.max(n/e[0],s/e[1]);const o=t+1,a=new Array(o);for(let h=0;h<o;++h)a[h]=i/Math.pow(2,h);return a}function Me(r,t,e,i){const s=Lt(r);return Ie(s,t,e,i)}function Lt(r){r=Mt(r);let t=r.getExtent();if(!t){const e=180*Qt.degrees/r.getMetersPerUnit();t=It(-e,-e,e,e)}return t}class ve extends te{constructor(t){super({attributions:t.attributions,attributionsCollapsible:t.attributionsCollapsible,projection:t.projection,state:t.state,wrapX:t.wrapX,interpolate:t.interpolate}),this.on,this.once,this.un,this.opaque_=t.opaque!==void 0?t.opaque:!1,this.tilePixelRatio_=t.tilePixelRatio!==void 0?t.tilePixelRatio:1,this.tileGrid=t.tileGrid!==void 0?t.tileGrid:null;const e=[256,256];this.tileGrid&&z(this.tileGrid.getTileSize(this.tileGrid.getMinZoom()),e),this.tileCache=new we(t.cacheSize||0),this.tmpSize=[0,0],this.key_=t.key||"",this.tileOptions={transition:t.transition,interpolate:t.interpolate},this.zDirection=t.zDirection?t.zDirection:0}canExpireCache(){return this.tileCache.canExpireCache()}expireCache(t,e){const i=this.getTileCacheForProjection(t);i&&i.expireCache(e)}forEachLoadedTile(t,e,i,s){const n=this.getTileCacheForProjection(t);if(!n)return!1;let o=!0,a,h,l;for(let _=i.minX;_<=i.maxX;++_)for(let T=i.minY;T<=i.maxY;++T)h=dt(e,_,T),l=!1,n.containsKey(h)&&(a=n.get(h),l=a.getState()===m.LOADED,l&&(l=s(a)!==!1)),l||(o=!1);return o}getGutterForProjection(t){return 0}getKey(){return this.key_}setKey(t){this.key_!==t&&(this.key_=t,this.changed())}getOpaque(t){return this.opaque_}getResolutions(t){const e=t?this.getTileGridForProjection(t):this.tileGrid;return e?e.getResolutions():null}getTile(t,e,i,s,n){return Xt()}getTileGrid(){return this.tileGrid}getTileGridForProjection(t){return this.tileGrid?this.tileGrid:Ce(t)}getTileCacheForProjection(t){const e=this.getProjection();return Y(e===null||ee(e,t),"A VectorTile source can only be rendered if it has a projection compatible with the view projection."),this.tileCache}getTilePixelRatio(t){return this.tilePixelRatio_}getTilePixelSize(t,e,i){const s=this.getTileGridForProjection(i),n=this.getTilePixelRatio(e),o=z(s.getTileSize(t),this.tmpSize);return n==1?o:ie(o,n,this.tmpSize)}getTileCoordForTileUrlFunction(t,e){e=e!==void 0?e:this.getProjection();const i=this.getTileGridForProjection(e);return this.getWrapX()&&e.isGlobal()&&(t=ye(i,t,e)),Ee(t,i)?t:null}clear(){this.tileCache.clear()}refresh(){this.clear(),super.refresh()}updateCacheSize(t,e){const i=this.getTileCacheForProjection(e);t>i.highWaterMark&&(i.highWaterMark=t)}useTile(t,e,i,s){}}class Oe extends se{constructor(t,e){super(t),this.tile=e}}const We=ve,De={PRELOAD:"preload",USE_INTERIM_TILES_ON_ERROR:"useInterimTilesOnError"};export{ae as E,Re as I,me as L,Se as R,Rt as T,pt as a,De as b,Ae as c,Xe as d,Lt as e,we as f,Ce as g,Te as h,dt as i,Pe as j,We as k,Oe as l,ze as m,vt as n,xe as o,Le as p,de as q,ue as r,Z as s,ge as t,Et as u};
