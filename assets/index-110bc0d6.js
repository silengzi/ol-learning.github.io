import{G as w}from"./GeoTIFF-c269af6e.js";import{M as V,V as x}from"./Layer-bb290663.js";import{T as C}from"./WebGLTile-e76d6d66.js";import{_ as I,i as P,o as S,c as T,b as e,t as s,g as l,d as j,F as z,j as F,p as N,k as D}from"./index-ef54e607.js";import"./TileProperty-b28dfc34.js";import"./_commonjsHelpers-39b5b250.js";import"./BaseTile-7ba8ffb7.js";const E="Change Tile Layer Style",G=`
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
`;const r=n=>(N("data-v-c6a9c9e4"),n=n(),D(),n),B={id:"title"},W=r(()=>e("div",{id:"map",class:"map"},null,-1)),A=F('<select id="style" data-v-c6a9c9e4><option value="trueColor" data-v-c6a9c9e4>True Color</option><option value="falseColor" data-v-c6a9c9e4>False Color</option><option value="ndvi" data-v-c6a9c9e4>NDVI</option><option value="ndviPalettePlasma" data-v-c6a9c9e4>NDVI w/ palette 1</option><option value="ndviPaletteViridis" data-v-c6a9c9e4>NDVI w/ palette 2</option></select><p data-v-c6a9c9e4>When you want to change the style of a WebGL tile layer based on some change in your application state, you should use the <code data-v-c6a9c9e4>layer.updateStyleVariables()</code> method. A layer can be efficiently rendered even if style variables are changed on every render frame. In cases where you need to completely replace the style of a layer, you can call the <code data-v-c6a9c9e4>layer.setStyle()</code> method. This method should not be called in response to frequent user events (e.g. mouse movement, dragging a slider, etc.).</p><h5 class="source-heading" data-v-c6a9c9e4>html</h5>',3),O={class:"language-html"},Z=r(()=>e("h5",{class:"source-heading"},"css",-1)),q={class:"language-css"},H=r(()=>e("h5",{class:"source-heading"},"js",-1)),J={class:"language-js"},K=r(()=>e("h5",{class:"source-heading"},"package.json",-1)),Q={class:"language-json"},R={__name:"index",setup(n){return P(()=>{function a(i){return["/",i,3e3]}const t=a(["band",1]),c=a(["band",2]),y=a(["band",3]),o=a(["band",4]),d={color:["array",t,c,y,1],gamma:1.1},v={color:["array",o,t,c,1],gamma:1.1},h={color:["interpolate",["linear"],["/",["-",o,t],["+",o,t]],-.2,[191,191,191],-.1,[219,219,219],0,[255,255,224],.025,[255,250,204],.05,[237,232,181],.075,[222,217,156],.1,[204,199,130],.125,[189,184,107],.15,[176,194,97],.175,[163,204,89],.2,[145,191,82],.25,[128,179,71],.3,[112,163,64],.35,[97,150,54],.4,[79,138,46],.45,[64,125,36],.5,[48,110,28],.55,[33,97,18],.6,[15,84,10],.65,[0,69,0]]},_={color:["palette",["interpolate",["linear"],["/",["-",o,t],["+",o,t]],-.2,0,.65,4],["#0d0887","#7e03a8","#cb4778","#f89540","#f0f921"]]},g={color:["palette",["interpolate",["linear"],["/",["-",o,t],["+",o,t]],-.2,0,.65,4],["#440154","#3b528b","#21918c","#5ec962","#fde725"]]},p=new C({style:d,source:new w({normalize:!1,sources:[{url:"https://s2downloads.eox.at/demo/EOxCloudless/2020/rgbnir/s2cloudless2020-16bits_sinlge-file_z0-4.tif"}]})});new V({target:"map",layers:[p],view:new x({projection:"EPSG:4326",center:[0,0],zoom:2,maxZoom:6})});const f={trueColor:d,falseColor:v,ndvi:h,ndviPalettePlasma:_,ndviPaletteViridis:g},m=document.getElementById("style");function b(){const i=f[m.value];p.setStyle(i)}m.addEventListener("change",b),Prism.highlightAll()}),(u,a)=>(S(),T(z,null,[e("h4",B,s(l(E)),1),W,j(" Set the layer style "),A,e("pre",null,[e("code",O,s("  "+l(G).trim()),1)]),Z,e("pre",null,[e("code",q,s("  "+l(L).trim()),1)]),H,e("pre",null,[e("code",J,s("  "+l(M).trim()),1)]),K,e("pre",null,[e("code",Q,s("  "+l(k).trim()),1)])],64))}},ae=I(R,[["__scopeId","data-v-c6a9c9e4"]]);export{ae as default};
