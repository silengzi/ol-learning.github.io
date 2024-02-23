import{G as w}from"./GeoTIFF-de1a380f.js";import{M as V,V as S}from"./Layer-227d2e40.js";import{T as x}from"./WebGLTile-b0f70cc1.js";import{_ as C,i as I,o as P,c as T,b as e,t as l,g as s,d as j,F as z,j as F,p as G,k as N}from"./index-eb0ea342.js";import"./TileProperty-167ee2c2.js";import"./_commonjsHelpers-39b5b250.js";import"./expressions-9328156f.js";import"./BaseTile-962ada93.js";const D="Change Tile Layer Style",E=`
  <div id="map" class="map"></div>
  Set the layer style
  <select id="style">
    <option value="trueColor">True Color</option>
    <option value="falseColor">False Color</option>
    <option value="ndvi">NDVI</option>
    <option value="ndviPalettePlasma">NDVI w/ palette 1</option>
    <option value="ndviPaletteViridis">NDVI w/ palette 2</option>
  </select>
`,L=`
  .map {
    width: 100%;
    height: 400px;
  }
`,M=`
  import GeoTIFF from 'ol/source/GeoTIFF.js';
  import Map from 'ol/Map.js';
  import TileLayer from 'ol/layer/WebGLTile.js';
  import View from 'ol/View.js';

  const max = 3000;
  function normalize(value) {
    return ['/', value, max];
  }

  const red = normalize(['band', 1]);
  const green = normalize(['band', 2]);
  const blue = normalize(['band', 3]);
  const nir = normalize(['band', 4]);

  const trueColor = {
    color: ['array', red, green, blue, 1],
    gamma: 1.1,
  };

  const falseColor = {
    color: ['array', nir, red, green, 1],
    gamma: 1.1,
  };

  const ndvi = {
    color: [
      'interpolate',
      ['linear'],
      ['/', ['-', nir, red], ['+', nir, red]],
      // color ramp for NDVI values, ranging from -1 to 1
      -0.2,
      [191, 191, 191],
      -0.1,
      [219, 219, 219],
      0,
      [255, 255, 224],
      0.025,
      [255, 250, 204],
      0.05,
      [237, 232, 181],
      0.075,
      [222, 217, 156],
      0.1,
      [204, 199, 130],
      0.125,
      [189, 184, 107],
      0.15,
      [176, 194, 97],
      0.175,
      [163, 204, 89],
      0.2,
      [145, 191, 82],
      0.25,
      [128, 179, 71],
      0.3,
      [112, 163, 64],
      0.35,
      [97, 150, 54],
      0.4,
      [79, 138, 46],
      0.45,
      [64, 125, 36],
      0.5,
      [48, 110, 28],
      0.55,
      [33, 97, 18],
      0.6,
      [15, 84, 10],
      0.65,
      [0, 69, 0],
    ],
  };

  const ndviPalettePlasma = {
    color: [
      'palette',
      [
        'interpolate',
        ['linear'],
        ['/', ['-', nir, red], ['+', nir, red]],
        -0.2,
        0,
        0.65,
        4,
      ],
      ['#0d0887', '#7e03a8', '#cb4778', '#f89540', '#f0f921'],
    ],
  };
  const ndviPaletteViridis = {
    color: [
      'palette',
      [
        'interpolate',
        ['linear'],
        ['/', ['-', nir, red], ['+', nir, red]],
        -0.2,
        0,
        0.65,
        4,
      ],
      ['#440154', '#3b528b', '#21918c', '#5ec962', '#fde725'],
    ],
  };

  const layer = new TileLayer({
    style: trueColor,
    source: new GeoTIFF({
      normalize: false,
      sources: [
        {
          url: 'https://s2downloads.eox.at/demo/EOxCloudless/2020/rgbnir/s2cloudless2020-16bits_sinlge-file_z0-4.tif',
        },
      ],
    }),
  });

  const map = new Map({
    target: 'map',
    layers: [layer],
    view: new View({
      projection: 'EPSG:4326',
      center: [0, 0],
      zoom: 2,
      maxZoom: 6,
    }),
  });

  const styles = {
    trueColor,
    falseColor,
    ndvi,
    ndviPalettePlasma,
    ndviPaletteViridis,
  };

  const styleSelector = document.getElementById('style');

  function update() {
    const style = styles[styleSelector.value];
    layer.setStyle(style);
  }
  styleSelector.addEventListener('change', update);
`,k=`
  {
    "name": "cog-style",
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
`;const r=n=>(G("data-v-9f873912"),n=n(),N(),n),B={id:"title"},W=r(()=>e("div",{id:"map",class:"map"},null,-1)),A=F('<select id="style" data-v-9f873912><option value="trueColor" data-v-9f873912>True Color</option><option value="falseColor" data-v-9f873912>False Color</option><option value="ndvi" data-v-9f873912>NDVI</option><option value="ndviPalettePlasma" data-v-9f873912>NDVI w/ palette 1</option><option value="ndviPaletteViridis" data-v-9f873912>NDVI w/ palette 2</option></select><p data-v-9f873912>When you want to change the style of a WebGL tile layer based on some change in your application state, you should use the <code data-v-9f873912>layer.updateStyleVariables()</code> method. A layer can be efficiently rendered even if style variables are changed on every render frame. In cases where you need to completely replace the style of a layer, you can call the <code data-v-9f873912>layer.setStyle()</code> method. This method should not be called in response to frequent user events (e.g. mouse movement, dragging a slider, etc.).</p><p data-v-9f873912>当您希望根据应用程序状态的某些更改来更改WebGL平铺层的样式时，应使用layer.updateStyleVariables()方法。即使在每个渲染帧上更改了样式变量，也可以有效地渲染层。在需要完全替换层的样式的情况下，可以调用layer.setStyle()方法。不应在频繁的用户事件（例如，鼠标移动、拖动滑块等）时调用此方法</p><h5 class="source-heading" data-v-9f873912>html</h5>',4),O={class:"language-html"},Z=r(()=>e("h5",{class:"source-heading"},"css",-1)),q={class:"language-css"},H=r(()=>e("h5",{class:"source-heading"},"js",-1)),J={class:"language-js"},K=r(()=>e("h5",{class:"source-heading"},"package.json",-1)),Q={class:"language-json"},R={__name:"index",setup(n){return I(()=>{function a(i){return["/",i,3e3]}const t=a(["band",1]),c=a(["band",2]),y=a(["band",3]),o=a(["band",4]),d={color:["array",t,c,y,1],gamma:1.1},v={color:["array",o,t,c,1],gamma:1.1},f={color:["interpolate",["linear"],["/",["-",o,t],["+",o,t]],-.2,[191,191,191],-.1,[219,219,219],0,[255,255,224],.025,[255,250,204],.05,[237,232,181],.075,[222,217,156],.1,[204,199,130],.125,[189,184,107],.15,[176,194,97],.175,[163,204,89],.2,[145,191,82],.25,[128,179,71],.3,[112,163,64],.35,[97,150,54],.4,[79,138,46],.45,[64,125,36],.5,[48,110,28],.55,[33,97,18],.6,[15,84,10],.65,[0,69,0]]},h={color:["palette",["interpolate",["linear"],["/",["-",o,t],["+",o,t]],-.2,0,.65,4],["#0d0887","#7e03a8","#cb4778","#f89540","#f0f921"]]},_={color:["palette",["interpolate",["linear"],["/",["-",o,t],["+",o,t]],-.2,0,.65,4],["#440154","#3b528b","#21918c","#5ec962","#fde725"]]},p=new x({style:d,source:new w({normalize:!1,sources:[{url:"https://s2downloads.eox.at/demo/EOxCloudless/2020/rgbnir/s2cloudless2020-16bits_sinlge-file_z0-4.tif"}]})});new V({target:"map",layers:[p],view:new S({projection:"EPSG:4326",center:[0,0],zoom:2,maxZoom:6})});const g={trueColor:d,falseColor:v,ndvi:f,ndviPalettePlasma:h,ndviPaletteViridis:_},m=document.getElementById("style");function b(){const i=g[m.value];p.setStyle(i)}m.addEventListener("change",b),Prism.highlightAll()}),(u,a)=>(P(),T(z,null,[e("h4",B,l(s(D)),1),W,j(" Set the layer style "),A,e("pre",null,[e("code",O,l("  "+s(E).trim()),1)]),Z,e("pre",null,[e("code",q,l("  "+s(L).trim()),1)]),H,e("pre",null,[e("code",J,l("  "+s(M).trim()),1)]),K,e("pre",null,[e("code",Q,l("  "+s(k).trim()),1)])],64))}},le=C(R,[["__scopeId","data-v-9f873912"]]);export{le as default};
