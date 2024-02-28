import{R as G,D as F,W as I,u as N,g as X,U as s,P as D,A as b,n as U}from"./ShaderBuilder-d8651322.js";import{O as x,aa as p,G as A,a3 as C,Z as $,g as z,cf as w,cg as H,ch as K,ci as E}from"./Layer-3b715193.js";import{k as M,c as k,e as Z,l as Y,g as V,f as W,i as P,m as y}from"./TileProperty-e33ea24b.js";import{B}from"./BaseTile-8ab94efc.js";import{e as f}from"./styleparser-870cae1d.js";class q extends M{constructor(e){const i=e.projection===void 0?"EPSG:3857":e.projection;let t=e.tileGrid;t===void 0&&i&&(t=k({extent:Z(i),maxResolution:e.maxResolution,maxZoom:e.maxZoom,minZoom:e.minZoom,tileSize:e.tileSize})),super({cacheSize:.1,attributions:e.attributions,attributionsCollapsible:e.attributionsCollapsible,projection:i,tileGrid:t,opaque:e.opaque,state:e.state,wrapX:e.wrapX,transition:e.transition,interpolate:e.interpolate}),this.gutter_=e.gutter!==void 0?e.gutter:0,this.tileSize_=e.tileSize?x(e.tileSize):null,this.tileSizes_=null,this.tileLoadingKeys_={},this.loader_=e.loader,this.handleTileChange_=this.handleTileChange_.bind(this),this.bandCount=e.bandCount===void 0?4:e.bandCount,this.tileGridForProjection_={},this.tileCacheForProjection_={}}setTileSizes(e){this.tileSizes_=e}getTileSize(e){if(this.tileSizes_)return this.tileSizes_[e];if(this.tileSize_)return this.tileSize_;const i=this.getTileGrid();return i?x(i.getTileSize(e)):[256,256]}getGutterForProjection(e){const i=this.getProjection();return!i||p(i,e)?this.gutter_:0}setLoader(e){this.loader_=e}getReprojTile_(e,i,t,r,o){const l=this.getTileCacheForProjection(r),c=P(e,i,t);if(l.containsKey(c)){const _=l.get(c);if(_&&_.key==this.getKey())return _}const u=this.getTileGrid(),d=Math.max.apply(null,u.getResolutions().map((_,m)=>{const S=x(u.getTileSize(m)),R=this.getTileSize(m);return Math.max(R[0]/S[0],R[1]/S[1])})),g=this.getTileGridForProjection(o),n=this.getTileGridForProjection(r),h=[e,i,t],v=this.getTileCoordForTileUrlFunction(h,r),T=Object.assign({sourceProj:o,sourceTileGrid:g,targetProj:r,targetTileGrid:n,tileCoord:h,wrappedTileCoord:v,pixelRatio:d,gutter:this.getGutterForProjection(o),getTileFunction:(_,m,S,R)=>this.getTile(_,m,S,R,o)},this.tileOptions),j=new G(T);return j.key=this.getKey(),j}getTile(e,i,t,r,o){const l=this.getProjection();if(l&&o&&!p(l,o))return this.getReprojTile_(e,i,t,o,l);const c=this.getTileSize(e),u=P(e,i,t);if(this.tileCache.containsKey(u))return this.tileCache.get(u);const d=this.loader_;function g(){return w(function(){return d(e,i,t)})}const n=Object.assign({tileCoord:[e,i,t],loader:g,size:c},this.tileOptions),h=new F(n);return h.key=this.getKey(),h.addEventListener(A.CHANGE,this.handleTileChange_),this.tileCache.set(u,h),h}handleTileChange_(e){const i=e.target,t=C(i),r=i.getState();let o;r==$.LOADING?(this.tileLoadingKeys_[t]=!0,o=y.TILELOADSTART):t in this.tileLoadingKeys_&&(delete this.tileLoadingKeys_[t],o=r==$.ERROR?y.TILELOADERROR:r==$.LOADED?y.TILELOADEND:void 0),o&&this.dispatchEvent(new Y(o,i))}getTileGridForProjection(e){const i=this.getProjection();if(this.tileGrid&&(!i||p(i,e)))return this.tileGrid;const t=C(e);return t in this.tileGridForProjection_||(this.tileGridForProjection_[t]=V(e)),this.tileGridForProjection_[t]}setTileGridForProjection(e,i){const t=z(e);if(t){const r=C(t);r in this.tileGridForProjection_||(this.tileGridForProjection_[r]=i)}}getTileCacheForProjection(e){const i=this.getProjection();if(!i||p(i,e))return this.tileCache;const t=C(e);return t in this.tileCacheForProjection_||(this.tileCacheForProjection_[t]=new W(.1)),this.tileCacheForProjection_[t]}expireCache(e,i){const t=this.getTileCacheForProjection(e);this.tileCache.expireCache(this.tileCache==t?i:{});for(const r in this.tileCacheForProjection_){const o=this.tileCacheForProjection_[r];o.expireCache(o==t?i:{})}}clear(){super.clear();for(const e in this.tileCacheForProjection_)this.tileCacheForProjection_[e].clear()}}const re=q;function O(a,e){const i=`
    attribute vec2 ${b.TEXTURE_COORD};
    uniform mat4 ${s.TILE_TRANSFORM};
    uniform float ${s.TEXTURE_PIXEL_WIDTH};
    uniform float ${s.TEXTURE_PIXEL_HEIGHT};
    uniform float ${s.TEXTURE_RESOLUTION};
    uniform float ${s.TEXTURE_ORIGIN_X};
    uniform float ${s.TEXTURE_ORIGIN_Y};
    uniform float ${s.DEPTH};

    varying vec2 v_textureCoord;
    varying vec2 v_mapCoord;

    void main() {
      v_textureCoord = ${b.TEXTURE_COORD};
      v_mapCoord = vec2(
        ${s.TEXTURE_ORIGIN_X} + ${s.TEXTURE_RESOLUTION} * ${s.TEXTURE_PIXEL_WIDTH} * v_textureCoord[0],
        ${s.TEXTURE_ORIGIN_Y} - ${s.TEXTURE_RESOLUTION} * ${s.TEXTURE_PIXEL_HEIGHT} * v_textureCoord[1]
      );
      gl_Position = ${s.TILE_TRANSFORM} * vec4(${b.TEXTURE_COORD}, ${s.DEPTH}, 1.0);
    }
  `,t={...U(),inFragmentShader:!0,bandCount:e,style:a},r=[];if(a.color!==void 0){const n=f(t,a.color,K);r.push(`color = ${n};`)}if(a.contrast!==void 0){const n=f(t,a.contrast,E);r.push(`color.rgb = clamp((${n} + 1.0) * color.rgb - (${n} / 2.0), vec3(0.0, 0.0, 0.0), vec3(1.0, 1.0, 1.0));`)}if(a.exposure!==void 0){const n=f(t,a.exposure,E);r.push(`color.rgb = clamp((${n} + 1.0) * color.rgb, vec3(0.0, 0.0, 0.0), vec3(1.0, 1.0, 1.0));`)}if(a.saturation!==void 0){const n=f(t,a.saturation,E);r.push(`
      float saturation = ${n} + 1.0;
      float sr = (1.0 - saturation) * 0.2126;
      float sg = (1.0 - saturation) * 0.7152;
      float sb = (1.0 - saturation) * 0.0722;
      mat3 saturationMatrix = mat3(
        sr + saturation, sr, sr,
        sg, sg + saturation, sg,
        sb, sb, sb + saturation
      );
      color.rgb = clamp(saturationMatrix * color.rgb, vec3(0.0, 0.0, 0.0), vec3(1.0, 1.0, 1.0));
    `)}if(a.gamma!==void 0){const n=f(t,a.gamma,E);r.push(`color.rgb = pow(color.rgb, vec3(1.0 / ${n}));`)}if(a.brightness!==void 0){const n=f(t,a.brightness,E);r.push(`color.rgb = clamp(color.rgb + ${n}, vec3(0.0, 0.0, 0.0), vec3(1.0, 1.0, 1.0));`)}const o={},l=Object.keys(t.variables).length;if(l>1&&!a.variables)throw new Error(`Missing variables in style (expected ${t.variables})`);for(let n=0;n<l;++n){const h=t.variables[Object.keys(t.variables)[n]];if(!(h.name in a.variables))throw new Error(`Missing '${h.name}' in style variables`);const v=N(h.name);o[v]=function(){let T=a.variables[h.name];return typeof T=="string"&&(T=X(T)),T!==void 0?T:-9999999}}const c=Object.keys(o).map(function(n){return`uniform float ${n};`}),u=Math.ceil(e/4);c.push(`uniform sampler2D ${s.TILE_TEXTURE_ARRAY}[${u}];`),t.paletteTextures&&c.push(`uniform sampler2D ${D}[${t.paletteTextures.length}];`);const d=Object.keys(t.functions).map(function(n){return t.functions[n]}),g=`
    #ifdef GL_FRAGMENT_PRECISION_HIGH
    precision highp float;
    #else
    precision mediump float;
    #endif

    varying vec2 v_textureCoord;
    varying vec2 v_mapCoord;
    uniform vec4 ${s.RENDER_EXTENT};
    uniform float ${s.TRANSITION_ALPHA};
    uniform float ${s.TEXTURE_PIXEL_WIDTH};
    uniform float ${s.TEXTURE_PIXEL_HEIGHT};
    uniform float ${s.RESOLUTION};
    uniform float ${s.ZOOM};

    ${c.join(`
`)}

    ${d.join(`
`)}

    void main() {
      if (
        v_mapCoord[0] < ${s.RENDER_EXTENT}[0] ||
        v_mapCoord[1] < ${s.RENDER_EXTENT}[1] ||
        v_mapCoord[0] > ${s.RENDER_EXTENT}[2] ||
        v_mapCoord[1] > ${s.RENDER_EXTENT}[3]
      ) {
        discard;
      }

      vec4 color = texture2D(${s.TILE_TEXTURE_ARRAY}[0],  v_textureCoord);

      ${r.join(`
`)}

      gl_FragColor = color;
      gl_FragColor.rgb *= gl_FragColor.a;
      gl_FragColor *= ${s.TRANSITION_ALPHA};
    }`;return{vertexShader:i,fragmentShader:g,uniforms:o,paletteTextures:t.paletteTextures}}class L extends B{constructor(e){e=e?Object.assign({},e):{};const i=e.style||{};delete e.style;const t=e.cacheSize;delete e.cacheSize,super(e),this.sources_=e.sources,this.renderedSource_=null,this.renderedResolution_=NaN,this.style_=i,this.cacheSize_=t,this.styleVariables_=this.style_.variables||{},this.addChangeListener(H.SOURCE,this.handleSourceUpdate_)}getSources(e,i){const t=this.getSource();return this.sources_?typeof this.sources_=="function"?this.sources_(e,i):this.sources_:t?[t]:[]}getRenderSource(){return this.renderedSource_||this.getSource()}getSourceState(){const e=this.getRenderSource();return e?e.getState():"undefined"}handleSourceUpdate_(){this.hasRenderer()&&this.getRenderer().clearCache(),this.getSource()&&this.setStyle(this.style_)}getSourceBandCount_(){const e=Number.MAX_SAFE_INTEGER,i=this.getSources([-e,-e,e,e],e);return i&&i.length&&"bandCount"in i[0]?i[0].bandCount:4}createRenderer(){const e=O(this.style_,this.getSourceBandCount_());return new I(this,{vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,uniforms:e.uniforms,cacheSize:this.cacheSize_,paletteTextures:e.paletteTextures})}renderSources(e,i){const t=this.getRenderer();let r;for(let o=0,l=i.length;o<l;++o)this.renderedSource_=i[o],t.prepareFrame(e)&&(r=t.renderFrame(e));return r}render(e,i){this.rendered=!0;const t=e.viewState,r=this.getSources(e.extent,t.resolution);let o=!0;for(let c=0,u=r.length;c<u;++c){const d=r[c],g=d.getState();if(g=="loading"){const n=()=>{d.getState()=="ready"&&(d.removeEventListener("change",n),this.changed())};d.addEventListener("change",n)}o=o&&g=="ready"}const l=this.renderSources(e,r);if(this.getRenderer().renderComplete&&o)return this.renderedResolution_=t.resolution,l;if(this.renderedResolution_>.5*t.resolution){const c=this.getSources(e.extent,this.renderedResolution_).filter(u=>!r.includes(u));if(c.length>0)return this.renderSources(e,c)}return l}setStyle(e){this.styleVariables_=e.variables||{},this.style_=e;const i=O(this.style_,this.getSourceBandCount_());this.getRenderer().reset({vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,uniforms:i.uniforms,paletteTextures:i.paletteTextures}),this.changed()}updateStyleVariables(e){Object.assign(this.styleVariables_,e),this.changed()}}L.prototype.dispose;const oe=L;export{re as D,oe as T};
