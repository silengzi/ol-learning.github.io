import{G as d}from"./GeoJSON-1f2a259b.js";import{M as u,V as g}from"./Layer-da76b588.js";import{a as h}from"./MultiPolygon-79cfbc3b.js";import{V as f,a as _}from"./Vector-844a0c6a.js";import{_ as w,i as S,o as F,c as j,b as e,t as o,g as s,F as v,p as P,k as V}from"./index-ceb9aa48.js";import{a as l,S as b,F as i,C as M}from"./featureloader-5ea9ad61.js";import"./JSONFeature-c33571f5.js";import"./LineString-e19dc84a.js";import"./Layer-5d5c7c57.js";const k="Custom Polygon Styles",C=`
  <div id="map" class="map"></div>
`,x=`
  .map {
    width: 100%;
    height: 400px;
  }
`,G=`
  import GeoJSON from 'ol/format/GeoJSON.js';
  import Map from 'ol/Map.js';
  import MultiPoint from 'ol/geom/MultiPoint.js';
  import VectorLayer from 'ol/layer/Vector.js';
  import VectorSource from 'ol/source/Vector.js';
  import View from 'ol/View.js';
  import {Circle as CircleStyle, Fill, Stroke, Style} from 'ol/style.js';

  const styles = [
    /* We are using two different styles for the polygons:
    *  - The first style is for the polygons themselves.
    *  - The second style is to draw the vertices of the polygons.
    *    In a custom \`geometry\` function the vertices of a polygon are
    *    returned as \`MultiPoint\` geometry, which will be used to render
    *    the style.
    */
    new Style({
      stroke: new Stroke({
        color: 'blue',
        width: 3,
      }),
      fill: new Fill({
        color: 'rgba(0, 0, 255, 0.1)',
      }),
    }),
    new Style({
      image: new CircleStyle({
        radius: 5,
        fill: new Fill({
          color: 'orange',
        }),
      }),
      geometry: function (feature) {
        // return the coordinates of the first ring of the polygon
        const coordinates = feature.getGeometry().getCoordinates()[0];
        return new MultiPoint(coordinates);
      },
    }),
  ];

  const geojsonObject = {
    'type': 'FeatureCollection',
    'crs': {
      'type': 'name',
      'properties': {
        'name': 'EPSG:3857',
      },
    },
    'features': [
      {
        'type': 'Feature',
        'geometry': {
          'type': 'Polygon',
          'coordinates': [
            [
              [-5e6, 6e6],
              [-5e6, 8e6],
              [-3e6, 8e6],
              [-3e6, 6e6],
              [-5e6, 6e6],
            ],
          ],
        },
      },
      {
        'type': 'Feature',
        'geometry': {
          'type': 'Polygon',
          'coordinates': [
            [
              [-2e6, 6e6],
              [-2e6, 8e6],
              [0, 8e6],
              [0, 6e6],
              [-2e6, 6e6],
            ],
          ],
        },
      },
      {
        'type': 'Feature',
        'geometry': {
          'type': 'Polygon',
          'coordinates': [
            [
              [1e6, 6e6],
              [1e6, 8e6],
              [3e6, 8e6],
              [3e6, 6e6],
              [1e6, 6e6],
            ],
          ],
        },
      },
      {
        'type': 'Feature',
        'geometry': {
          'type': 'Polygon',
          'coordinates': [
            [
              [-2e6, -1e6],
              [-1e6, 1e6],
              [0, -1e6],
              [-2e6, -1e6],
            ],
          ],
        },
      },
    ],
  };

  const source = new VectorSource({
    features: new GeoJSON().readFeatures(geojsonObject),
  });

  const layer = new VectorLayer({
    source: source,
    style: styles,
  });

  const map = new Map({
    layers: [layer],
    target: 'map',
    view: new View({
      center: [0, 3000000],
      zoom: 2,
    }),
  });
`,O=`
  {
    "name": "polygon-styles",
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
`;const t=r=>(P("data-v-ca39ff99"),r=r(),V(),r),I={id:"title"},N=t(()=>e("div",{id:"map",class:"map"},null,-1)),J=t(()=>e("p",null,"In this example two different styles are created for the polygons:",-1)),T=t(()=>e("ul",null,[e("li",null,"The first style is for the polygons themselves."),e("li",null,"The second style is to draw the vertices of the polygons.")],-1)),B=t(()=>e("h5",{class:"source-heading"},"html",-1)),E={class:"language-html"},L=t(()=>e("h5",{class:"source-heading"},"css",-1)),z={class:"language-css"},D=t(()=>e("h5",{class:"source-heading"},"js",-1)),A={class:"language-js"},W=t(()=>e("h5",{class:"source-heading"},"package.json",-1)),q={class:"language-json"},H={__name:"index",setup(r){return S(()=>{const n=[new l({stroke:new b({color:"blue",width:3}),fill:new i({color:"rgba(0, 0, 255, 0.1)"})}),new l({image:new M({radius:5,fill:new i({color:"orange"})}),geometry:function(y){const m=y.getGeometry().getCoordinates()[0];return new h(m)}})],a={type:"FeatureCollection",crs:{type:"name",properties:{name:"EPSG:3857"}},features:[{type:"Feature",geometry:{type:"Polygon",coordinates:[[[-5e6,6e6],[-5e6,8e6],[-3e6,8e6],[-3e6,6e6],[-5e6,6e6]]]}},{type:"Feature",geometry:{type:"Polygon",coordinates:[[[-2e6,6e6],[-2e6,8e6],[0,8e6],[0,6e6],[-2e6,6e6]]]}},{type:"Feature",geometry:{type:"Polygon",coordinates:[[[1e6,6e6],[1e6,8e6],[3e6,8e6],[3e6,6e6],[1e6,6e6]]]}},{type:"Feature",geometry:{type:"Polygon",coordinates:[[[-2e6,-1e6],[-1e6,1e6],[0,-1e6],[-2e6,-1e6]]]}}]},c=new f({features:new d().readFeatures(a)}),p=new _({source:c,style:n});new u({layers:[p],target:"map",view:new g({center:[0,3e6],zoom:2})}),Prism.highlightAll()}),(n,a)=>(F(),j(v,null,[e("h4",I,o(s(k)),1),N,J,T,B,e("pre",null,[e("code",E,o("  "+s(C).trim()),1)]),L,e("pre",null,[e("code",z,o("  "+s(x).trim()),1)]),D,e("pre",null,[e("code",A,o("  "+s(G).trim()),1)]),W,e("pre",null,[e("code",q,o("  "+s(O).trim()),1)])],64))}},te=w(H,[["__scopeId","data-v-ca39ff99"]]);export{te as default};
