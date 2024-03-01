import{R as S,I as A}from"./Raster-b4feb77a.js";import{M as L,V as X}from"./Layer-3b715193.js";import{_ as Y,i as C,o as E,c as O,b as a,t as p,g as u,F as k,j as G,p as V,k as H}from"./index-92068577.js";import{S as T}from"./StadiaMaps-e9ded0c3.js";import"./ImageLayer-d46d3fc0.js";import"./Layer-37ea9c2e.js";import"./TileProperty-e33ea24b.js";import"./common-c2bf7a3a.js";import"./Tile-70490af9.js";import"./BaseTile-8ab94efc.js";import"./TileLayer-7c629c64.js";import"./XYZ-80208d03.js";import"./TileImage-1df58d67.js";import"./UrlTile-dc2c26ed.js";import"./OSM-f0f00429.js";const q="Color Manipulation",D=`
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
`,F=`
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
`,J=`
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
`,K=`
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
`;const I=h=>(V("data-v-cd51067b"),h=h(),H(),h),Q={id:"title"},U=G('<div id="map" class="map" data-v-cd51067b></div><table class="controls" data-v-cd51067b><tr data-v-cd51067b><td data-v-cd51067b><label for="hue" data-v-cd51067b>hue</label></td><td data-v-cd51067b><input id="hue" type="range" min="-180" max="180" value="0" data-v-cd51067b></td><td data-v-cd51067b><span id="hueOut" data-v-cd51067b></span> ° </td></tr><tr data-v-cd51067b><td data-v-cd51067b><label for="chroma" data-v-cd51067b>chroma</label></td><td data-v-cd51067b><input id="chroma" type="range" min="0" max="100" value="100" data-v-cd51067b></td><td data-v-cd51067b><span id="chromaOut" data-v-cd51067b></span> %</td></tr><tr data-v-cd51067b><td data-v-cd51067b><label for="lightness" data-v-cd51067b>lightness</label></td><td data-v-cd51067b><input id="lightness" type="range" min="0" max="100" value="100" data-v-cd51067b></td><td data-v-cd51067b><span id="lightnessOut" data-v-cd51067b></span> %</td></tr></table><p data-v-cd51067b>A raster source allows arbitrary manipulation of pixel values. In this example, RGB values on the input tile source are adjusted in a pixel-wise operation before being rendered with a second raster source. The raster operation takes pixels in in RGB space, converts them to HCL color space, adjusts the values based on the controls above, and then converts them back to RGB space for rendering.</p><h5 class="source-heading" data-v-cd51067b>html</h5>',4),W={class:"language-html"},$=I(()=>a("h5",{class:"source-heading"},"css",-1)),tt={class:"language-css"},et=I(()=>a("h5",{class:"source-heading"},"js",-1)),nt={class:"language-js"},at=I(()=>a("h5",{class:"source-heading"},"package.json",-1)),ot={class:"language-json"},st={__name:"index",setup(h){return C(()=>{const v=.13793103448275862,c=6/29,f=3*c*c,B=c*c*c,d=2*Math.PI;function P(t){const n=g(t[0]),e=g(t[1]),o=g(t[2]),y=b((.4124564*n+.3575761*e+.1804375*o)/.95047),i=b((.2126729*n+.7151522*e+.072175*o)/1),s=b((.0193339*n+.119192*e+.9503041*o)/1.08883),l=116*i-16,r=500*(y-i),w=200*(i-s),Z=Math.sqrt(r*r+w*w);let M=Math.atan2(w,r);return M<0&&(M+=d),t[0]=M,t[1]=Z,t[2]=l,t}function j(t){const n=t[0],e=t[1],o=t[2],y=Math.cos(n)*e,i=Math.sin(n)*e;let s=(o+16)/116,l=isNaN(y)?s:s+y/500,r=isNaN(i)?s:s-i/200;return s=1*m(s),l=.95047*m(l),r=1.08883*m(r),t[0]=x(3.2404542*l-1.5371385*s-.4985314*r),t[1]=x(-.969266*l+1.8760108*s+.041556*r),t[2]=x(.0556434*l-.2040259*s+1.0572252*r),t}function b(t){return t>B?Math.pow(t,1/3):t/f+v}function m(t){return t>c?t*t*t:f*(t-v)}function g(t){return(t/=255)<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function x(t){return 255*(t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055)}const _=new S({sources:[new T({layer:"stamen_watercolor"})],operation:function(t,n){const e=P(t[0]);let o=e[0]+Math.PI*n.hue/180;return o<0?o+=d:o>d&&(o-=d),e[0]=o,e[1]*=n.chroma/100,e[2]*=n.lightness/100,j(e)},lib:{rgb2hcl:P,hcl2rgb:j,rgb2xyz:g,lab2xyz:m,xyz2lab:b,xyz2rgb:x,Xn:.95047,Yn:1,Zn:1.08883,t0:v,t1:c,t2:f,t3:B,twoPi:d}}),z={};_.on("beforeoperations",function(t){const n=t.data;for(const e in z)n[e]=Number(z[e].value)}),new L({layers:[new A({source:_})],target:"map",view:new X({center:[0,25e5],zoom:2,maxZoom:18})}),["hue","chroma","lightness"].forEach(function(t){const n=document.getElementById(t),e=document.getElementById(t+"Out");n.addEventListener("input",function(){e.innerText=n.value,_.changed()}),e.innerText=n.value,z[t]=n}),Prism.highlightAll()}),(N,R)=>(E(),O(k,null,[a("h4",Q,p(u(q)),1),U,a("pre",null,[a("code",W,p("  "+u(D).trim()),1)]),$,a("pre",null,[a("code",tt,p("  "+u(F).trim()),1)]),et,a("pre",null,[a("code",nt,p("  "+u(J).trim()),1)]),at,a("pre",null,[a("code",ot,p("  "+u(K).trim()),1)])],64))}},wt=Y(st,[["__scopeId","data-v-cd51067b"]]);export{wt as default};
