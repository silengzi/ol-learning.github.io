import{R as I,D as N,W as F,e as f,u as G,g as X,U as n,P as U,A as b,V as E}from"./expressions-a7c2bfa9.js";import{I as $,a3 as C,E as D,Y as p,T as x,g as A,c2 as z,c3 as M}from"./Layer-3211d6ef.js";import{k as w,c as H,e as K,l as B,g as V,f as Y,i as j,m as P}from"./TileProperty-f0a52f17.js";import{B as Z}from"./BaseTile-47530170.js";class k extends w{constructor(e){const i=e.projection===void 0?"EPSG:3857":e.projection;let t=e.tileGrid;t===void 0&&i&&(t=H({extent:K(i),maxResolution:e.maxResolution,maxZoom:e.maxZoom,minZoom:e.minZoom,tileSize:e.tileSize})),super({cacheSize:.1,attributions:e.attributions,attributionsCollapsible:e.attributionsCollapsible,projection:i,tileGrid:t,opaque:e.opaque,state:e.state,wrapX:e.wrapX,transition:e.transition,interpolate:e.interpolate}),this.gutter_=e.gutter!==void 0?e.gutter:0,this.tileSize_=e.tileSize?$(e.tileSize):null,this.tileSizes_=null,this.tileLoadingKeys_={},this.loader_=e.loader,this.handleTileChange_=this.handleTileChange_.bind(this),this.bandCount=e.bandCount===void 0?4:e.bandCount,this.tileGridForProjection_={},this.tileCacheForProjection_={}}setTileSizes(e){this.tileSizes_=e}getTileSize(e){if(this.tileSizes_)return this.tileSizes_[e];if(this.tileSize_)return this.tileSize_;const i=this.getTileGrid();return i?$(i.getTileSize(e)):[256,256]}getGutterForProjection(e){const i=this.getProjection();return!i||C(i,e)?this.gutter_:0}setLoader(e){this.loader_=e}getReprojTile_(e,i,t,r,o){const l=this.getTileCacheForProjection(r),c=j(e,i,t);if(l.containsKey(c)){const _=l.get(c);if(_&&_.key==this.getKey())return _}const u=this.getTileGrid(),d=Math.max.apply(null,u.getResolutions().map((_,m)=>{const R=$(u.getTileSize(m)),S=this.getTileSize(m);return Math.max(S[0]/R[0],S[1]/R[1])})),g=this.getTileGridForProjection(o),s=this.getTileGridForProjection(r),h=[e,i,t],v=this.getTileCoordForTileUrlFunction(h,r),T=Object.assign({sourceProj:o,sourceTileGrid:g,targetProj:r,targetTileGrid:s,tileCoord:h,wrappedTileCoord:v,pixelRatio:d,gutter:this.getGutterForProjection(o),getTileFunction:(_,m,R,S)=>this.getTile(_,m,R,S,o)},this.tileOptions),L=new I(T);return L.key=this.getKey(),L}getTile(e,i,t,r,o){const l=this.getProjection();if(l&&o&&!C(l,o))return this.getReprojTile_(e,i,t,o,l);const c=this.getTileSize(e),u=j(e,i,t);if(this.tileCache.containsKey(u))return this.tileCache.get(u);const d=this.loader_;function g(){return z(function(){return d(e,i,t)})}const s=Object.assign({tileCoord:[e,i,t],loader:g,size:c},this.tileOptions),h=new N(s);return h.key=this.getKey(),h.addEventListener(D.CHANGE,this.handleTileChange_),this.tileCache.set(u,h),h}handleTileChange_(e){const i=e.target,t=p(i),r=i.getState();let o;r==x.LOADING?(this.tileLoadingKeys_[t]=!0,o=P.TILELOADSTART):t in this.tileLoadingKeys_&&(delete this.tileLoadingKeys_[t],o=r==x.ERROR?P.TILELOADERROR:r==x.LOADED?P.TILELOADEND:void 0),o&&this.dispatchEvent(new B(o,i))}getTileGridForProjection(e){const i=this.getProjection();if(this.tileGrid&&(!i||C(i,e)))return this.tileGrid;const t=p(e);return t in this.tileGridForProjection_||(this.tileGridForProjection_[t]=V(e)),this.tileGridForProjection_[t]}setTileGridForProjection(e,i){const t=A(e);if(t){const r=p(t);r in this.tileGridForProjection_||(this.tileGridForProjection_[r]=i)}}getTileCacheForProjection(e){const i=this.getProjection();if(!i||C(i,e))return this.tileCache;const t=p(e);return t in this.tileCacheForProjection_||(this.tileCacheForProjection_[t]=new Y(.1)),this.tileCacheForProjection_[t]}expireCache(e,i){const t=this.getTileCacheForProjection(e);this.tileCache.expireCache(this.tileCache==t?i:{});for(const r in this.tileCacheForProjection_){const o=this.tileCacheForProjection_[r];o.expireCache(o==t?i:{})}}clear(){super.clear();for(const e in this.tileCacheForProjection_)this.tileCacheForProjection_[e].clear()}}const ee=k;function y(a,e){const i=`
    attribute vec2 ${b.TEXTURE_COORD};
    uniform mat4 ${n.TILE_TRANSFORM};
    uniform float ${n.TEXTURE_PIXEL_WIDTH};
    uniform float ${n.TEXTURE_PIXEL_HEIGHT};
    uniform float ${n.TEXTURE_RESOLUTION};
    uniform float ${n.TEXTURE_ORIGIN_X};
    uniform float ${n.TEXTURE_ORIGIN_Y};
    uniform float ${n.DEPTH};

    varying vec2 v_textureCoord;
    varying vec2 v_mapCoord;

    void main() {
      v_textureCoord = ${b.TEXTURE_COORD};
      v_mapCoord = vec2(
        ${n.TEXTURE_ORIGIN_X} + ${n.TEXTURE_RESOLUTION} * ${n.TEXTURE_PIXEL_WIDTH} * v_textureCoord[0],
        ${n.TEXTURE_ORIGIN_Y} - ${n.TEXTURE_RESOLUTION} * ${n.TEXTURE_PIXEL_HEIGHT} * v_textureCoord[1]
      );
      gl_Position = ${n.TILE_TRANSFORM} * vec4(${b.TEXTURE_COORD}, ${n.DEPTH}, 1.0);
    }
  `,t={inFragmentShader:!0,variables:[],attributes:[],functions:{},bandCount:e,style:a},r=[];if(a.color!==void 0){const s=f(t,a.color,E.COLOR);r.push(`color = ${s};`)}if(a.contrast!==void 0){const s=f(t,a.contrast,E.NUMBER);r.push(`color.rgb = clamp((${s} + 1.0) * color.rgb - (${s} / 2.0), vec3(0.0, 0.0, 0.0), vec3(1.0, 1.0, 1.0));`)}if(a.exposure!==void 0){const s=f(t,a.exposure,E.NUMBER);r.push(`color.rgb = clamp((${s} + 1.0) * color.rgb, vec3(0.0, 0.0, 0.0), vec3(1.0, 1.0, 1.0));`)}if(a.saturation!==void 0){const s=f(t,a.saturation,E.NUMBER);r.push(`
      float saturation = ${s} + 1.0;
      float sr = (1.0 - saturation) * 0.2126;
      float sg = (1.0 - saturation) * 0.7152;
      float sb = (1.0 - saturation) * 0.0722;
      mat3 saturationMatrix = mat3(
        sr + saturation, sr, sr,
        sg, sg + saturation, sg,
        sb, sb, sb + saturation
      );
      color.rgb = clamp(saturationMatrix * color.rgb, vec3(0.0, 0.0, 0.0), vec3(1.0, 1.0, 1.0));
    `)}if(a.gamma!==void 0){const s=f(t,a.gamma,E.NUMBER);r.push(`color.rgb = pow(color.rgb, vec3(1.0 / ${s}));`)}if(a.brightness!==void 0){const s=f(t,a.brightness,E.NUMBER);r.push(`color.rgb = clamp(color.rgb + ${s}, vec3(0.0, 0.0, 0.0), vec3(1.0, 1.0, 1.0));`)}const o={},l=t.variables.length;if(l>1&&!a.variables)throw new Error(`Missing variables in style (expected ${t.variables})`);for(let s=0;s<l;++s){const h=t.variables[s];if(!(h.name in a.variables))throw new Error(`Missing '${h.name}' in style variables`);const v=G(h.name);o[v]=function(){let T=a.variables[h.name];return typeof T=="string"&&(T=X(T)),T!==void 0?T:-9999999}}const c=Object.keys(o).map(function(s){return`uniform float ${s};`}),u=Math.ceil(e/4);c.push(`uniform sampler2D ${n.TILE_TEXTURE_ARRAY}[${u}];`),t.paletteTextures&&c.push(`uniform sampler2D ${U}[${t.paletteTextures.length}];`);const d=Object.keys(t.functions).map(function(s){return t.functions[s]}),g=`
    #ifdef GL_FRAGMENT_PRECISION_HIGH
    precision highp float;
    #else
    precision mediump float;
    #endif

    varying vec2 v_textureCoord;
    varying vec2 v_mapCoord;
    uniform vec4 ${n.RENDER_EXTENT};
    uniform float ${n.TRANSITION_ALPHA};
    uniform float ${n.TEXTURE_PIXEL_WIDTH};
    uniform float ${n.TEXTURE_PIXEL_HEIGHT};
    uniform float ${n.RESOLUTION};
    uniform float ${n.ZOOM};

    ${c.join(`
`)}

    ${d.join(`
`)}

    void main() {
      if (
        v_mapCoord[0] < ${n.RENDER_EXTENT}[0] ||
        v_mapCoord[1] < ${n.RENDER_EXTENT}[1] ||
        v_mapCoord[0] > ${n.RENDER_EXTENT}[2] ||
        v_mapCoord[1] > ${n.RENDER_EXTENT}[3]
      ) {
        discard;
      }

      vec4 color = texture2D(${n.TILE_TEXTURE_ARRAY}[0],  v_textureCoord);

      ${r.join(`
`)}

      gl_FragColor = color;
      gl_FragColor.rgb *= gl_FragColor.a;
      gl_FragColor *= ${n.TRANSITION_ALPHA};
    }`;return{vertexShader:i,fragmentShader:g,uniforms:o,paletteTextures:t.paletteTextures}}class O extends Z{constructor(e){e=e?Object.assign({},e):{};const i=e.style||{};delete e.style;const t=e.cacheSize;delete e.cacheSize,super(e),this.sources_=e.sources,this.renderedSource_=null,this.renderedResolution_=NaN,this.style_=i,this.cacheSize_=t,this.styleVariables_=this.style_.variables||{},this.addChangeListener(M.SOURCE,this.handleSourceUpdate_)}getSources(e,i){const t=this.getSource();return this.sources_?typeof this.sources_=="function"?this.sources_(e,i):this.sources_:t?[t]:[]}getRenderSource(){return this.renderedSource_||this.getSource()}getSourceState(){const e=this.getRenderSource();return e?e.getState():"undefined"}handleSourceUpdate_(){this.hasRenderer()&&this.getRenderer().clearCache(),this.getSource()&&this.setStyle(this.style_)}getSourceBandCount_(){const e=Number.MAX_SAFE_INTEGER,i=this.getSources([-e,-e,e,e],e);return i&&i.length&&"bandCount"in i[0]?i[0].bandCount:4}createRenderer(){const e=y(this.style_,this.getSourceBandCount_());return new F(this,{vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,uniforms:e.uniforms,cacheSize:this.cacheSize_,paletteTextures:e.paletteTextures})}renderSources(e,i){const t=this.getRenderer();let r;for(let o=0,l=i.length;o<l;++o)this.renderedSource_=i[o],t.prepareFrame(e)&&(r=t.renderFrame(e));return r}render(e,i){this.rendered=!0;const t=e.viewState,r=this.getSources(e.extent,t.resolution);let o=!0;for(let c=0,u=r.length;c<u;++c){const d=r[c],g=d.getState();if(g=="loading"){const s=()=>{d.getState()=="ready"&&(d.removeEventListener("change",s),this.changed())};d.addEventListener("change",s)}o=o&&g=="ready"}const l=this.renderSources(e,r);if(this.getRenderer().renderComplete&&o)return this.renderedResolution_=t.resolution,l;if(this.renderedResolution_>.5*t.resolution){const c=this.getSources(e.extent,this.renderedResolution_).filter(u=>!r.includes(u));if(c.length>0)return this.renderSources(e,c)}return l}setStyle(e){this.styleVariables_=e.variables||{},this.style_=e;const i=y(this.style_,this.getSourceBandCount_());this.getRenderer().reset({vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,uniforms:i.uniforms}),this.changed()}updateStyleVariables(e){Object.assign(this.styleVariables_,e),this.changed()}}O.prototype.dispose;const te=O;export{ee as D,te as T};
