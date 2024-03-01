import{F as I}from"./featureloader-a90a5108.js";import{X as S,f as L,P as j,M as Y,V as F}from"./Layer-3b715193.js";import{S as T}from"./StadiaMaps-e9ded0c3.js";import{T as E}from"./Tile-70490af9.js";import{W as M}from"./PointsLayer-0bfcb464.js";import{p as P}from"./styleparser-870cae1d.js";import{_ as R,i as V,o as A,c as N,b as t,t as r,g as i,F as B,j as C,p as G,k as D}from"./index-92068577.js";import{V as W}from"./Vector-a4e726e1.js";import"./XYZ-80208d03.js";import"./TileImage-1df58d67.js";import"./TileProperty-e33ea24b.js";import"./UrlTile-dc2c26ed.js";import"./OSM-f0f00429.js";import"./BaseTile-8ab94efc.js";import"./TileLayer-7c629c64.js";import"./Layer-37ea9c2e.js";import"./ShaderBuilder-d8651322.js";import"./worldUtil-7fa77630.js";class k extends S{constructor(e){const a=Object.assign({},e);super(a),this.parseResult_=P(e.style),this.styleVariables_=e.style.variables||{},this.hitDetectionDisabled_=!!e.disableHitDetection}createRenderer(){const e=Object.keys(this.parseResult_.attributes).map(a=>({name:a,...this.parseResult_.attributes[a]}));return new M(this,{vertexShader:this.parseResult_.builder.getSymbolVertexShader(),fragmentShader:this.parseResult_.builder.getSymbolFragmentShader(),hitDetectionEnabled:!this.hitDetectionDisabled_,uniforms:this.parseResult_.uniforms,attributes:e})}updateStyleVariables(e){Object.assign(this.styleVariables_,e),this.changed()}}const q=k,O="Filtering features with WebGL",H=`
  <div id="map" class="map"></div>
  <form>
    <div id="status">Show impacts between <span class="min-year"></span> and <span class="max-year"></span></div>

    <label for="min-year">Minimum year:</label>
    <input id="min-year" type="range" min="1850" max="2015" step="1" value="1850"/>
    <label for="max-year">Maximum year:</label>
    <input id="max-year" type="range" min="1850" max="2015" step="1" value="2015"/>
  </form>
`,X=`
  .map {
    width: 100%;
    height: 400px;
  }
`,z=`
  import Feature from 'ol/Feature.js';
  import Map from 'ol/Map.js';
  import Point from 'ol/geom/Point.js';
  import StadiaMaps from 'ol/source/StadiaMaps.js';
  import TileLayer from 'ol/layer/Tile.js';
  import View from 'ol/View.js';
  import WebGLPointsLayer from 'ol/layer/WebGLPoints.js';
  import {Vector} from 'ol/source.js';
  import {fromLonLat} from 'ol/proj.js';

  const vectorSource = new Vector({
    attributions: 'NASA',
  });

  const oldColor = 'rgba(242,56,22,0.61)';
  const newColor = '#ffe52c';
  const period = 12; // animation period in seconds
  const animRatio = [
    '^',
    [
      '/',
      [
        '%',
        [
          '+',
          ['time'],
          ['interpolate', ['linear'], ['get', 'year'], 1850, 0, 2015, period],
        ],
        period,
      ],
      period,
    ],
    0.5,
  ];

  const style = {
    variables: {
      minYear: 1850,
      maxYear: 2015,
    },
    filter: ['between', ['get', 'year'], ['var', 'minYear'], ['var', 'maxYear']],
    'circle-radius': [
      '*',
      ['interpolate', ['linear'], ['get', 'mass'], 0, 4, 200000, 13],
      ['-', 1.75, ['*', animRatio, 0.75]],
    ],
    'circle-fill-color': [
      'interpolate',
      ['linear'],
      animRatio,
      0,
      newColor,
      1,
      oldColor,
    ],
    'circle-opacity': ['-', 1.0, ['*', animRatio, 0.75]],
  };

  // handle input values & events
  const minYearInput = document.getElementById('min-year');
  const maxYearInput = document.getElementById('max-year');

  function updateStatusText() {
    const div = document.getElementById('status');
    div.querySelector('span.min-year').textContent = minYearInput.value;
    div.querySelector('span.max-year').textContent = maxYearInput.value;
  }

  minYearInput.addEventListener('input', function () {
    style.variables.minYear = parseInt(minYearInput.value);
    updateStatusText();
  });
  maxYearInput.addEventListener('input', function () {
    style.variables.maxYear = parseInt(maxYearInput.value);
    updateStatusText();
  });
  updateStatusText();

  // load data;
  const client = new XMLHttpRequest();
  client.open('GET', 'data/csv/meteorite_landings.csv');
  client.onload = function () {
    const csv = client.responseText;
    const features = [];

    let prevIndex = csv.indexOf('\\n') + 1; // scan past the header line

    let curIndex;
    while ((curIndex = csv.indexOf('\\n', prevIndex)) != -1) {
      const line = csv.substr(prevIndex, curIndex - prevIndex).split(',');
      prevIndex = curIndex + 1;

      const coords = fromLonLat([parseFloat(line[4]), parseFloat(line[3])]);
      if (isNaN(coords[0]) || isNaN(coords[1])) {
        // guard against bad data
        continue;
      }

      features.push(
        new Feature({
          mass: parseFloat(line[1]) || 0,
          year: parseInt(line[2]) || 0,
          geometry: new Point(coords),
        }),
      );
    }

    vectorSource.addFeatures(features);
  };
  client.send();

  const map = new Map({
    layers: [
      new TileLayer({
        source: new StadiaMaps({
          layer: 'stamen_toner',
        }),
      }),
      new WebGLPointsLayer({
        style: style,
        source: vectorSource,
        disableHitDetection: true,
      }),
    ],
    target: document.getElementById('map'),
    view: new View({
      center: [0, 0],
      zoom: 2,
    }),
  });

  // animate the map
  function animate() {
    map.render();
    window.requestAnimationFrame(animate);
  }
  animate();
`,$=`
  {
    "name": "filter-points-webgl",
    "dependencies": {
      "ol": "9.0.0"
    },
    "devDependencies": {
      "vite": "^3.2.3"
    },
    "scripts": {
      "start": "vite",
      "build": "vite build"
    }
  }
`;const f=n=>(G("data-v-47b9ecb2"),n=n(),D(),n),J={id:"title"},K=C('<div id="map" class="map" data-v-47b9ecb2></div><form data-v-47b9ecb2><div id="status" data-v-47b9ecb2>Show impacts between <span class="min-year" data-v-47b9ecb2></span> and <span class="max-year" data-v-47b9ecb2></span></div><label for="min-year" data-v-47b9ecb2>Minimum year:</label><input id="min-year" type="range" min="1850" max="2015" step="1" value="1850" data-v-47b9ecb2><label for="max-year" data-v-47b9ecb2>Maximum year:</label><input id="max-year" type="range" min="1850" max="2015" step="1" value="2015" data-v-47b9ecb2></form><p data-v-47b9ecb2>This example shows how to use <code data-v-47b9ecb2>ol/layer/WebGLPoints</code> with a literal style to dynamically filter a large amount of point geometries. The above map is based on a dataset from the NASA containing 45k recorded meteorite landing sites. Each meteorite is marked by a circle on the map (the bigger the circle, the heavier the object). A pulse effect has been added, which is slightly offset by the year of the impact.</p><p data-v-47b9ecb2>Adjusting the sliders causes the objects outside of the date range to be filtered out of the map. This is done by mutating the variables in the style object provided to the WebGL layer. Also note that the last snippet of code is necessary to make sure the map refreshes itself every frame.</p><p data-v-47b9ecb2>（<strong data-v-47b9ecb2>注意：</strong>This example uses features that are not part of the stable API and subject to change between releases. Consult the API documentation to see what is supported in the latest release.）</p><h5 class="source-heading" data-v-47b9ecb2>html</h5>',6),Q={class:"language-html"},U=f(()=>t("h5",{class:"source-heading"},"css",-1)),Z={class:"language-css"},ee=f(()=>t("h5",{class:"source-heading"},"js",-1)),te={class:"language-js"},ae=f(()=>t("h5",{class:"source-heading"},"package.json",-1)),se={class:"language-json"},ne={__name:"index",setup(n){return V(()=>{const e=new W({attributions:"NASA"}),a="rgba(242,56,22,0.61)",_="#ffe52c",d=12,m=["^",["/",["%",["+",["time"],["interpolate",["linear"],["get","year"],1850,0,2015,d]],d],d],.5],p={variables:{minYear:1850,maxYear:2015},filter:["between",["get","year"],["var","minYear"],["var","maxYear"]],"circle-radius":["*",["interpolate",["linear"],["get","mass"],0,4,2e5,13],["-",1.75,["*",m,.75]]],"circle-fill-color":["interpolate",["linear"],m,0,_,1,a],"circle-opacity":["-",1,["*",m,.75]]},u=document.getElementById("min-year"),b=document.getElementById("max-year");function h(){const s=document.getElementById("status");s.querySelector("span.min-year").textContent=u.value,s.querySelector("span.max-year").textContent=b.value}u.addEventListener("input",function(){p.variables.minYear=parseInt(u.value),h()}),b.addEventListener("input",function(){p.variables.maxYear=parseInt(b.value),h()}),h();const o=new XMLHttpRequest;o.open("GET","data/csv/meteorite_landings.csv"),o.onload=function(){const s=o.responseText,x=[];let l=s.indexOf(`
`)+1,y;for(;(y=s.indexOf(`
`,l))!=-1;){const c=s.substr(l,y-l).split(",");l=y+1;const v=L([parseFloat(c[4]),parseFloat(c[3])]);isNaN(v[0])||isNaN(v[1])||x.push(new I({mass:parseFloat(c[1])||0,year:parseInt(c[2])||0,geometry:new j(v)}))}e.addFeatures(x)},o.send();const w=new Y({layers:[new E({source:new T({layer:"stamen_toner"})}),new q({style:p,source:e,disableHitDetection:!0})],target:document.getElementById("map"),view:new F({center:[0,0],zoom:2})});function g(){w.render(),window.requestAnimationFrame(g)}g(),Prism.highlightAll()}),(e,a)=>(A(),N(B,null,[t("h4",J,r(i(O)),1),K,t("pre",null,[t("code",Q,r("  "+i(H).trim()),1)]),U,t("pre",null,[t("code",Z,r("  "+i(X).trim()),1)]),ee,t("pre",null,[t("code",te,r("  "+i(z).trim()),1)]),ae,t("pre",null,[t("code",se,r("  "+i($).trim()),1)])],64))}},Ie=R(ne,[["__scopeId","data-v-47b9ecb2"]]);export{Ie as default};
