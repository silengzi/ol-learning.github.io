import{K as p}from"./KML-c43cd689.js";import{aW as g,x as h,Q as _,M as f,V as v}from"./Layer-3b715193.js";import{S as b}from"./StadiaMaps-e9ded0c3.js";import{V as w}from"./Vector-a4e726e1.js";import{_ as y,i as S,o as x,c as I,b as r,t as l,g as u,F as L,j as R,p as E,k as D}from"./index-c958856c.js";import{W as k}from"./PointsLayer-0bfcb464.js";import{S as B}from"./ShaderBuilder-d8651322.js";import{T as M}from"./Tile-70490af9.js";import"./featureloader-a90a5108.js";import"./MultiPolygon-d7736349.js";import"./LineString-eed53b5a.js";import"./length-c6ba5b73.js";import"./MultiPoint-74fca651.js";import"./Feature-627996e0.js";import"./string-30bf5402.js";import"./XYZ-80208d03.js";import"./TileImage-1df58d67.js";import"./TileProperty-e33ea24b.js";import"./UrlTile-dc2c26ed.js";import"./OSM-f0f00429.js";import"./worldUtil-7fa77630.js";import"./BaseTile-8ab94efc.js";import"./TileLayer-7c629c64.js";import"./Layer-37ea9c2e.js";const s={BLUR:"blur",GRADIENT:"gradient",RADIUS:"radius"},T=["#00f","#0ff","#0f0","#ff0","#f00"];class V extends g{constructor(e){e=e||{};const a=Object.assign({},e);delete a.gradient,delete a.radius,delete a.blur,delete a.weight,super(a),this.gradient_=null,this.addChangeListener(s.GRADIENT,this.handleGradientChanged_),this.setGradient(e.gradient?e.gradient:T),this.setBlur(e.blur!==void 0?e.blur:15),this.setRadius(e.radius!==void 0?e.radius:8);const t=e.weight?e.weight:"weight";typeof t=="string"?this.weightFunction_=function(n){return n.get(t)}:this.weightFunction_=t,this.setRenderOrder(null)}getBlur(){return this.get(s.BLUR)}getGradient(){return this.get(s.GRADIENT)}getRadius(){return this.get(s.RADIUS)}handleGradientChanged_(){this.gradient_=C(this.getGradient())}setBlur(e){this.set(s.BLUR,e)}setGradient(e){this.set(s.GRADIENT,e)}setRadius(e){this.set(s.RADIUS,e)}createRenderer(){const e=new B().addAttribute("float a_prop_weight").addVarying("v_prop_weight","float","a_prop_weight").addUniform("float u_size").addUniform("float u_blurSlope").setSymbolSizeExpression("vec2(u_size)").setSymbolColorExpression("vec4(smoothstep(0., 1., (1. - length(coordsPx * 2. / v_quadSizePx)) * u_blurSlope) * v_prop_weight)");return new k(this,{className:this.getClassName(),attributes:[{name:"weight",callback:a=>{const t=this.weightFunction_(a);return t!==void 0?h(t,0,1):1}}],uniforms:{u_size:()=>(this.get(s.RADIUS)+this.get(s.BLUR))*2,u_blurSlope:()=>this.get(s.RADIUS)/Math.max(1,this.get(s.BLUR))},hitDetectionEnabled:!0,vertexShader:e.getSymbolVertexShader(),fragmentShader:e.getSymbolFragmentShader(),postProcesses:[{fragmentShader:`
            precision mediump float;

            uniform sampler2D u_image;
            uniform sampler2D u_gradientTexture;
            uniform float u_opacity;

            varying vec2 v_texCoord;

            void main() {
              vec4 color = texture2D(u_image, v_texCoord);
              gl_FragColor.a = color.a * u_opacity;
              gl_FragColor.rgb = texture2D(u_gradientTexture, vec2(0.5, color.a)).rgb;
              gl_FragColor.rgb *= gl_FragColor.a;
            }`,uniforms:{u_gradientTexture:()=>this.gradient_,u_opacity:()=>this.getOpacity()}}]})}renderDeclutter(){}}function C(i){const t=_(1,256),n=t.createLinearGradient(0,0,1,256),d=1/(i.length-1);for(let o=0,m=i.length;o<m;++o)n.addColorStop(o*d,i[o]);return t.fillStyle=n,t.fillRect(0,0,1,256),t.canvas}const G=V,j="Earthquakes Heatmap",A=`
  <div id="map" class="map"></div>
  <form>
    <label for="radius">radius size</label>
    <input id="radius" type="range" min="1" max="50" step="1" value="5"/>
    <label for="blur">blur size</label>
    <input id="blur" type="range" min="1" max="50" step="1" value="15"/>
  </form>
`,F=`
  .map {
    width: 100%;
    height: 400px;
  }
`,U=`
  import KML from 'ol/format/KML.js';
  import Map from 'ol/Map.js';
  import StadiaMaps from 'ol/source/StadiaMaps.js';
  import VectorSource from 'ol/source/Vector.js';
  import View from 'ol/View.js';
  import {Heatmap as HeatmapLayer, Tile as TileLayer} from 'ol/layer.js';

  const blur = document.getElementById('blur');
  const radius = document.getElementById('radius');

  const vector = new HeatmapLayer({
    source: new VectorSource({
      url: 'data/kml/2012_Earthquakes_Mag5.kml',
      format: new KML({
        extractStyles: false,
      }),
    }),
    blur: parseInt(blur.value, 10),
    radius: parseInt(radius.value, 10),
    weight: function (feature) {
      // 2012_Earthquakes_Mag5.kml stores the magnitude of each earthquake in a
      // standards-violating <magnitude> tag in each Placemark.  We extract it from
      // the Placemark's name instead.
      const name = feature.get('name');
      const magnitude = parseFloat(name.substr(2));
      return magnitude - 5;
    },
  });

  const raster = new TileLayer({
    source: new StadiaMaps({
      layer: 'stamen_toner',
    }),
  });

  new Map({
    layers: [raster, vector],
    target: 'map',
    view: new View({
      center: [0, 0],
      zoom: 2,
    }),
  });

  blur.addEventListener('input', function () {
    vector.setBlur(parseInt(blur.value, 10));
  });

  radius.addEventListener('input', function () {
    vector.setRadius(parseInt(radius.value, 10));
  });
`,z=`
  {
    "name": "heatmap-earthquakes",
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
`;const c=i=>(E("data-v-13a08611"),i=i(),D(),i),N={id:"title"},P=R('<div id="map" class="map" data-v-13a08611></div><form data-v-13a08611><label for="radius" data-v-13a08611>radius size</label><input id="radius" type="range" min="1" max="50" step="1" value="5" data-v-13a08611><label for="blur" data-v-13a08611>blur size</label><input id="blur" type="range" min="1" max="50" step="1" value="15" data-v-13a08611></form><p data-v-13a08611>This example parses a KML file and renders the features as a ol/layer/Heatmap layer.</p><h5 class="source-heading" data-v-13a08611>html</h5>',4),q={class:"language-html"},H=c(()=>r("h5",{class:"source-heading"},"css",-1)),K={class:"language-css"},O=c(()=>r("h5",{class:"source-heading"},"js",-1)),W={class:"language-js"},Q=c(()=>r("h5",{class:"source-heading"},"package.json",-1)),J={class:"language-json"},X={__name:"index",setup(i){return S(()=>{const e=document.getElementById("blur"),a=document.getElementById("radius"),t=new G({source:new w({url:"data/kml/2012_Earthquakes_Mag5.kml",format:new p({extractStyles:!1})}),blur:parseInt(e.value,10),radius:parseInt(a.value,10),weight:function(d){const o=d.get("name");return parseFloat(o.substr(2))-5}}),n=new M({source:new b({layer:"stamen_toner"})});new f({layers:[n,t],target:"map",view:new v({center:[0,0],zoom:2})}),e.addEventListener("input",function(){t.setBlur(parseInt(e.value,10))}),a.addEventListener("input",function(){t.setRadius(parseInt(a.value,10))}),Prism.highlightAll()}),(e,a)=>(x(),I(L,null,[r("h4",N,l(u(j)),1),P,r("pre",null,[r("code",q,l("  "+u(A).trim()),1)]),H,r("pre",null,[r("code",K,l("  "+u(F).trim()),1)]),O,r("pre",null,[r("code",W,l("  "+u(U).trim()),1)]),Q,r("pre",null,[r("code",J,l("  "+u(z).trim()),1)])],64))}},ye=y(X,[["__scopeId","data-v-13a08611"]]);export{ye as default};
