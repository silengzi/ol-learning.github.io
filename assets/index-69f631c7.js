import{G as d}from"./GeoJSON-1b8bad54.js";import{M as u,V as g}from"./Layer-227d2e40.js";import{M as h}from"./MultiPoint-97d710ff.js";import{V as f}from"./Vector-1db23811.js";import{V as _}from"./Vector-dc05cca5.js";import{_ as w,i as S,o as F,c as j,b as e,t as o,g as s,F as v,p as P,k as V}from"./index-0efe29ff.js";import{a,S as M,F as i,C as b}from"./Style-f78957a3.js";import"./GeometryCollection-66a09ebd.js";import"./JSONFeature-4dcaaca7.js";import"./Feature-315822cb.js";import"./LineString-72752817.js";import"./featureloader-41324978.js";import"./MultiPolygon-4cf6e085.js";import"./VectorLayer-cfa00b56.js";import"./hitdetect-d04d171e.js";import"./vector-841020ca.js";import"./Layer-10451559.js";const k="Custom Polygon Styles",C=`
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
`;const t=r=>(P("data-v-ca39ff99"),r=r(),V(),r),I={id:"title"},N=t(()=>e("div",{id:"map",class:"map"},null,-1)),J=t(()=>e("p",null,"In this example two different styles are created for the polygons:",-1)),T=t(()=>e("ul",null,[e("li",null,"The first style is for the polygons themselves."),e("li",null,"The second style is to draw the vertices of the polygons.")],-1)),B=t(()=>e("h5",{class:"source-heading"},"html",-1)),E={class:"language-html"},L=t(()=>e("h5",{class:"source-heading"},"css",-1)),z={class:"language-css"},D=t(()=>e("h5",{class:"source-heading"},"js",-1)),A={class:"language-js"},W=t(()=>e("h5",{class:"source-heading"},"package.json",-1)),q={class:"language-json"},H={__name:"index",setup(r){return S(()=>{const n=[new a({stroke:new M({color:"blue",width:3}),fill:new i({color:"rgba(0, 0, 255, 0.1)"})}),new a({image:new b({radius:5,fill:new i({color:"orange"})}),geometry:function(m){const y=m.getGeometry().getCoordinates()[0];return new h(y)}})],l={type:"FeatureCollection",crs:{type:"name",properties:{name:"EPSG:3857"}},features:[{type:"Feature",geometry:{type:"Polygon",coordinates:[[[-5e6,6e6],[-5e6,8e6],[-3e6,8e6],[-3e6,6e6],[-5e6,6e6]]]}},{type:"Feature",geometry:{type:"Polygon",coordinates:[[[-2e6,6e6],[-2e6,8e6],[0,8e6],[0,6e6],[-2e6,6e6]]]}},{type:"Feature",geometry:{type:"Polygon",coordinates:[[[1e6,6e6],[1e6,8e6],[3e6,8e6],[3e6,6e6],[1e6,6e6]]]}},{type:"Feature",geometry:{type:"Polygon",coordinates:[[[-2e6,-1e6],[-1e6,1e6],[0,-1e6],[-2e6,-1e6]]]}}]},c=new _({features:new d().readFeatures(l)}),p=new f({source:c,style:n});new u({layers:[p],target:"map",view:new g({center:[0,3e6],zoom:2})}),Prism.highlightAll()}),(n,l)=>(F(),j(v,null,[e("h4",I,o(s(k)),1),N,J,T,B,e("pre",null,[e("code",E,o("  "+s(C).trim()),1)]),L,e("pre",null,[e("code",z,o("  "+s(x).trim()),1)]),D,e("pre",null,[e("code",A,o("  "+s(G).trim()),1)]),W,e("pre",null,[e("code",q,o("  "+s(O).trim()),1)])],64))}},ce=w(H,[["__scopeId","data-v-ca39ff99"]]);export{ce as default};
