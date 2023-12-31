import{T as v,G as m}from"./WebGLTile-c500d16a.js";import{M as g,V as h}from"./Layer-5200258f.js";import{_,i as f,o as x,c as y,b as e,t,g as n,F as I,j as M,p as w,k as E}from"./index-c940254e.js";import"./TileProperty-ab86017d.js";import"./_commonjsHelpers-39b5b250.js";import"./BaseTile-53865aab.js";const B="Band Contrast Stretch",V=`
  <div id="map" class="map"></div>
  <div class="controls">
    <label for="red">Red channel</label>
    <select id="red">
      <option value="1" selected>visible red</option>
      <option value="2">visible green</option>
      <option value="3">visible blue</option>
      <option value="4">near infrared</option>
    </select>
    <label>max
      <input type="range" id="redMax" value="3000" min="2000" max="5000">
    </label>

    <label for="green">Green channel</label>
    <select id="green">
      <option value="1">visible red</option>
      <option value="2" selected>visible green</option>
      <option value="3">visible blue</option>
      <option value="4">near infrared</option>
    </select>
    <label>max
      <input type="range" id="greenMax" value="3000" min="2000" max="5000">
    </label>

    <label for="blue">Blue channel</label>
    <select id="blue">
      <option value="1">visible red</option>
      <option value="2">visible green</option>
      <option value="3" selected>visible blue</option>
      <option value="4">near infrared</option>
    </select>
    <label>max
      <input type="range" id="blueMax" value="3000" min="2000" max="5000">
    </label>
  </div>
`,j=`
  .map {
    width: 100%;
    height: 400px;
  }
  .controls {
    display: grid;
    grid-template-columns: auto auto 1fr;
    align-items: baseline;
    gap: 0 1em;
  }
`,F=`
  import GeoTIFF from 'ol/source/GeoTIFF.js';
  import Map from 'ol/Map.js';
  import TileLayer from 'ol/layer/WebGLTile.js';
  import View from 'ol/View.js';

  const channels = ['red', 'green', 'blue'];
  for (const channel of channels) {
    const selector = document.getElementById(channel);
    selector.addEventListener('change', update);

    const input = document.getElementById(\`\${channel}Max\`);
    input.addEventListener('input', update);
  }

  function getVariables() {
    const variables = {};
    for (const channel of channels) {
      const selector = document.getElementById(channel);
      variables[channel] = parseInt(selector.value, 10);

      const inputId = \`\${channel}Max\`;
      const input = document.getElementById(inputId);
      variables[inputId] = parseInt(input.value, 10);
    }
    return variables;
  }

  const layer = new TileLayer({
    style: {
      variables: getVariables(),
      color: [
        'array',
        ['/', ['band', ['var', 'red']], ['var', 'redMax']],
        ['/', ['band', ['var', 'green']], ['var', 'greenMax']],
        ['/', ['band', ['var', 'blue']], ['var', 'blueMax']],
        1,
      ],
    },
    source: new GeoTIFF({
      normalize: false,
      sources: [
        {
          url: 'https://s2downloads.eox.at/demo/EOxCloudless/2020/rgbnir/s2cloudless2020-16bits_sinlge-file_z0-4.tif',
        },
      ],
    }),
  });

  function update() {
    layer.updateStyleVariables(getVariables());
  }

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

`,G=`
  {
    "name": "cog-stretch",
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
`;const i=o=>(w("data-v-bca353cc"),o=o(),E(),o),S={id:"title"},T=M('<div id="map" class="map" data-v-bca353cc></div><div class="controls" data-v-bca353cc><label for="red" data-v-bca353cc>Red channel</label><select id="red" data-v-bca353cc><option value="1" selected data-v-bca353cc>visible red</option><option value="2" data-v-bca353cc>visible green</option><option value="3" data-v-bca353cc>visible blue</option><option value="4" data-v-bca353cc>near infrared</option></select><label data-v-bca353cc>max <input type="range" id="redMax" value="3000" min="2000" max="5000" data-v-bca353cc></label><label for="green" data-v-bca353cc>Green channel</label><select id="green" data-v-bca353cc><option value="1" data-v-bca353cc>visible red</option><option value="2" selected data-v-bca353cc>visible green</option><option value="3" data-v-bca353cc>visible blue</option><option value="4" data-v-bca353cc>near infrared</option></select><label data-v-bca353cc>max <input type="range" id="greenMax" value="3000" min="2000" max="5000" data-v-bca353cc></label><label for="blue" data-v-bca353cc>Blue channel</label><select id="blue" data-v-bca353cc><option value="1" data-v-bca353cc>visible red</option><option value="2" data-v-bca353cc>visible green</option><option value="3" selected data-v-bca353cc>visible blue</option><option value="4" data-v-bca353cc>near infrared</option></select><label data-v-bca353cc>max <input type="range" id="blueMax" value="3000" min="2000" max="5000" data-v-bca353cc></label></div><p data-v-bca353cc>This example uses the <code data-v-bca353cc>layer.updateStyleVariables()</code> method to update the rendering of a GeoTIFF based on user selected bands and contrast stretch parameters.</p><h5 class="source-heading" data-v-bca353cc>html</h5>',4),L={class:"language-html"},z=i(()=>e("h5",{class:"source-heading"},"css",-1)),k={class:"language-css"},$=i(()=>e("h5",{class:"source-heading"},"js",-1)),C={class:"language-js"},P=i(()=>e("h5",{class:"source-heading"},"package.json",-1)),D={class:"language-json"},N={__name:"index",setup(o){return f(()=>{const c=["red","green","blue"];for(const a of c)document.getElementById(a).addEventListener("change",d),document.getElementById(`${a}Max`).addEventListener("input",d);function s(){const a={};for(const l of c){const p=document.getElementById(l);a[l]=parseInt(p.value,10);const u=`${l}Max`,b=document.getElementById(u);a[u]=parseInt(b.value,10)}return a}const r=new v({style:{variables:s(),color:["array",["/",["band",["var","red"]],["var","redMax"]],["/",["band",["var","green"]],["var","greenMax"]],["/",["band",["var","blue"]],["var","blueMax"]],1]},source:new m({normalize:!1,sources:[{url:"https://s2downloads.eox.at/demo/EOxCloudless/2020/rgbnir/s2cloudless2020-16bits_sinlge-file_z0-4.tif"}]})});function d(){r.updateStyleVariables(s())}new g({target:"map",layers:[r],view:new h({projection:"EPSG:4326",center:[0,0],zoom:2,maxZoom:6})}),Prism.highlightAll()}),(c,s)=>(x(),y(I,null,[e("h4",S,t(n(B)),1),T,e("pre",null,[e("code",L,t("  "+n(V).trim()),1)]),z,e("pre",null,[e("code",k,t("  "+n(j).trim()),1)]),$,e("pre",null,[e("code",C,t("  "+n(F).trim()),1)]),P,e("pre",null,[e("code",D,t("  "+n(G).trim()),1)])],64))}},H=_(N,[["__scopeId","data-v-bca353cc"]]);export{H as default};
