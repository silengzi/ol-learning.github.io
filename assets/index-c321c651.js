import{G as d}from"./GeoJSON-690a4bb4.js";import{a,S as u,F as i,C as g,M as h,V as f}from"./Layer-3b715193.js";import{M as _}from"./MultiPoint-74fca651.js";import{V as w}from"./Vector-6fff18f8.js";import{V as S}from"./Vector-a4e726e1.js";import{_ as F,i as j,o as v,c as P,b as e,t as o,g as s,F as V,p as M,k as b}from"./index-c958856c.js";import"./featureloader-a90a5108.js";import"./JSONFeature-5a5c1876.js";import"./Feature-627996e0.js";import"./MultiPolygon-d7736349.js";import"./LineString-eed53b5a.js";import"./length-c6ba5b73.js";import"./VectorLayer-ef6da1be.js";import"./hitdetect-486e5612.js";import"./Layer-37ea9c2e.js";import"./vector-4e067f94.js";const k="Custom Polygon Styles",C=`
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
`;const t=r=>(M("data-v-ca39ff99"),r=r(),b(),r),I={id:"title"},N=t(()=>e("div",{id:"map",class:"map"},null,-1)),J=t(()=>e("p",null,"In this example two different styles are created for the polygons:",-1)),T=t(()=>e("ul",null,[e("li",null,"The first style is for the polygons themselves."),e("li",null,"The second style is to draw the vertices of the polygons.")],-1)),B=t(()=>e("h5",{class:"source-heading"},"html",-1)),E={class:"language-html"},L=t(()=>e("h5",{class:"source-heading"},"css",-1)),z={class:"language-css"},D=t(()=>e("h5",{class:"source-heading"},"js",-1)),A={class:"language-js"},W=t(()=>e("h5",{class:"source-heading"},"package.json",-1)),q={class:"language-json"},H={__name:"index",setup(r){return j(()=>{const n=[new a({stroke:new u({color:"blue",width:3}),fill:new i({color:"rgba(0, 0, 255, 0.1)"})}),new a({image:new g({radius:5,fill:new i({color:"orange"})}),geometry:function(m){const y=m.getGeometry().getCoordinates()[0];return new _(y)}})],l={type:"FeatureCollection",crs:{type:"name",properties:{name:"EPSG:3857"}},features:[{type:"Feature",geometry:{type:"Polygon",coordinates:[[[-5e6,6e6],[-5e6,8e6],[-3e6,8e6],[-3e6,6e6],[-5e6,6e6]]]}},{type:"Feature",geometry:{type:"Polygon",coordinates:[[[-2e6,6e6],[-2e6,8e6],[0,8e6],[0,6e6],[-2e6,6e6]]]}},{type:"Feature",geometry:{type:"Polygon",coordinates:[[[1e6,6e6],[1e6,8e6],[3e6,8e6],[3e6,6e6],[1e6,6e6]]]}},{type:"Feature",geometry:{type:"Polygon",coordinates:[[[-2e6,-1e6],[-1e6,1e6],[0,-1e6],[-2e6,-1e6]]]}}]},c=new S({features:new d().readFeatures(l)}),p=new w({source:c,style:n});new h({layers:[p],target:"map",view:new f({center:[0,3e6],zoom:2})}),Prism.highlightAll()}),(n,l)=>(v(),P(V,null,[e("h4",I,o(s(k)),1),N,J,T,B,e("pre",null,[e("code",E,o("  "+s(C).trim()),1)]),L,e("pre",null,[e("code",z,o("  "+s(x).trim()),1)]),D,e("pre",null,[e("code",A,o("  "+s(G).trim()),1)]),W,e("pre",null,[e("code",q,o("  "+s(O).trim()),1)])],64))}},ie=F(H,[["__scopeId","data-v-ca39ff99"]]);export{ie as default};
