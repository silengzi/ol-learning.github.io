import{K as E}from"./KML-9d76c4ba.js";import{M as T,S as I,V as L,am as z,k as R,_ as K,W}from"./Layer-227d2e40.js";import{_ as P,i as G,o as B,c as H,b as e,t as i,g as l,F as D,p as A,k as N}from"./index-0efe29ff.js";import{F as g,S as F,a as p,C as x,R as J}from"./Style-f78957a3.js";import{V as O}from"./Vector-1db23811.js";import{C as Q}from"./Cluster-6f33ff9f.js";import{V as U}from"./Vector-dc05cca5.js";import{T as X}from"./Tile-69a5f37c.js";import{S as Y}from"./StadiaMaps-67f6b4d9.js";import{S as Z}from"./Select-94dcaaad.js";import{T as $}from"./featureloader-41324978.js";import"./GeometryCollection-66a09ebd.js";import"./LineString-72752817.js";import"./MultiPolygon-4cf6e085.js";import"./MultiPoint-97d710ff.js";import"./Feature-315822cb.js";import"./string-30bf5402.js";import"./VectorLayer-cfa00b56.js";import"./hitdetect-d04d171e.js";import"./vector-841020ca.js";import"./Layer-10451559.js";import"./BaseTile-962ada93.js";import"./TileProperty-167ee2c2.js";import"./TileLayer-94aa49a8.js";import"./XYZ-f63b0d91.js";import"./TileImage-97dc110f.js";import"./UrlTile-27538029.js";import"./OSM-829eb14e.js";const ee="Earthquake Clusters",te=`
  <div id="map" class="map"></div>
`,re=`
  .map {
    width: 100%;
    height: 400px;
  }
`,ae=`
  import KML from 'ol/format/KML.js';
  import Map from 'ol/Map.js';
  import View from 'ol/View.js';
  import {
    Circle as CircleStyle,
    Fill,
    RegularShape,
    Stroke,
    Style,
    Text,
  } from 'ol/style.js';
  import {Cluster, StadiaMaps, Vector as VectorSource} from 'ol/source.js';
  import {
    Select,
    defaults as defaultInteractions,
  } from 'ol/interaction.js';
  import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';
  import {createEmpty, extend, getHeight, getWidth} from 'ol/extent.js';

  const earthquakeFill = new Fill({
    color: 'rgba(255, 153, 0, 0.8)',
  });
  const earthquakeStroke = new Stroke({
    color: 'rgba(255, 204, 0, 0.2)',
    width: 1,
  });
  const textFill = new Fill({
    color: '#fff',
  });
  const textStroke = new Stroke({
    color: 'rgba(0, 0, 0, 0.6)',
    width: 3,
  });
  const invisibleFill = new Fill({
    color: 'rgba(255, 255, 255, 0.01)',
  });

  function createEarthquakeStyle(feature) {
    // 2012_Earthquakes_Mag5.kml stores the magnitude of each earthquake in a
    // standards-violating <magnitude> tag in each Placemark.  We extract it
    // from the Placemark's name instead.
    const name = feature.get('name');
    const magnitude = parseFloat(name.substr(2));
    const radius = 5 + 20 * (magnitude - 5);

    return new Style({
      geometry: feature.getGeometry(),
      image: new RegularShape({
        radius1: radius,
        radius2: 3,
        points: 5,
        angle: Math.PI,
        fill: earthquakeFill,
        stroke: earthquakeStroke,
      }),
    });
  }

  let maxFeatureCount;
  let vector = null;
  const calculateClusterInfo = function (resolution) {
    maxFeatureCount = 0;
    const features = vector.getSource().getFeatures();
    let feature, radius;
    for (let i = features.length - 1; i >= 0; --i) {
      feature = features[i];
      const originalFeatures = feature.get('features');
      const extent = createEmpty();
      let j, jj;
      for (j = 0, jj = originalFeatures.length; j < jj; ++j) {
        extend(extent, originalFeatures[j].getGeometry().getExtent());
      }
      maxFeatureCount = Math.max(maxFeatureCount, jj);
      radius = (0.25 * (getWidth(extent) + getHeight(extent))) / resolution;
      feature.set('radius', radius);
    }
  };

  let currentResolution;
  function styleFunction(feature, resolution) {
    if (resolution != currentResolution) {
      calculateClusterInfo(resolution);
      currentResolution = resolution;
    }
    let style;
    const size = feature.get('features').length;
    if (size > 1) {
      style = new Style({
        image: new CircleStyle({
          radius: feature.get('radius'),
          fill: new Fill({
            color: [255, 153, 0, Math.min(0.8, 0.4 + size / maxFeatureCount)],
          }),
        }),
        text: new Text({
          text: size.toString(),
          fill: textFill,
          stroke: textStroke,
        }),
      });
    } else {
      const originalFeature = feature.get('features')[0];
      style = createEarthquakeStyle(originalFeature);
    }
    return style;
  }

  function selectStyleFunction(feature) {
    const styles = [
      new Style({
        image: new CircleStyle({
          radius: feature.get('radius'),
          fill: invisibleFill,
        }),
      }),
    ];
    const originalFeatures = feature.get('features');
    let originalFeature;
    for (let i = originalFeatures.length - 1; i >= 0; --i) {
      originalFeature = originalFeatures[i];
      styles.push(createEarthquakeStyle(originalFeature));
    }
    return styles;
  }

  vector = new VectorLayer({
    source: new Cluster({
      distance: 40,
      source: new VectorSource({
        url: 'data/kml/2012_Earthquakes_Mag5.kml',
        format: new KML({
          extractStyles: false,
        }),
      }),
    }),
    style: styleFunction,
  });

  const raster = new TileLayer({
    source: new StadiaMaps({
      layer: 'stamen_toner',
    }),
  });

  const map = new Map({
    layers: [raster, vector],
    interactions: defaultInteractions().extend([
      new Select({
        condition: function (evt) {
          return evt.type == 'pointermove' || evt.type == 'singleclick';
        },
        style: selectStyleFunction,
      }),
    ]),
    target: 'map',
    view: new View({
      center: [0, 0],
      zoom: 2,
    }),
  });
`,se=`
  {
    "name": "earthquake-clusters",
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
`;const n=c=>(A("data-v-fbc889fe"),c=c(),N(),c),oe={id:"title"},ne=n(()=>e("div",{id:"map",class:"map"},null,-1)),ie=n(()=>e("p",null,"This example parses a KML file and renders the features as clusters on a vector layer. The styling in this example is quite involved. Single earthquake locations (rendered as stars) have a size relative to their magnitude. Clusters have an opacity relative to the number of features in the cluster, and a size that represents the extent of the features that make up the cluster. When clicking or hovering on a cluster, the individual features that make up the cluster will be shown.",-1)),le=n(()=>e("p",null,"To achieve this, we make heavy use of style functions.",-1)),ce=n(()=>e("h5",{class:"source-heading"},"html",-1)),ue={class:"language-html"},me=n(()=>e("h5",{class:"source-heading"},"css",-1)),ge={class:"language-css"},de=n(()=>e("h5",{class:"source-heading"},"js",-1)),fe={class:"language-js"},he=n(()=>e("h5",{class:"source-heading"},"package.json",-1)),pe={class:"language-json"},ye={__name:"index",setup(c){return G(()=>{const y=new g({color:"rgba(255, 153, 0, 0.8)"}),_=new F({color:"rgba(255, 204, 0, 0.2)",width:1}),v=new g({color:"#fff"}),j=new F({color:"rgba(0, 0, 0, 0.6)",width:3}),M=new g({color:"rgba(255, 255, 255, 0.01)"});function w(t){const r=t.get("name"),s=5+20*(parseFloat(r.substr(2))-5);return new p({geometry:t.getGeometry(),image:new J({radius1:s,radius2:3,points:5,angle:Math.PI,fill:y,stroke:_})})}let u,d=null;const b=function(t){u=0;const r=d.getSource().getFeatures();let a,s;for(let o=r.length-1;o>=0;--o){a=r[o];const k=a.get("features"),f=W();let m,h;for(m=0,h=k.length;m<h;++m)z(f,k[m].getGeometry().getExtent());u=Math.max(u,h),s=.25*(R(f)+K(f))/t,a.set("radius",s)}};let S;function C(t,r){r!=S&&(b(r),S=r);let a;const s=t.get("features").length;if(s>1)a=new p({image:new x({radius:t.get("radius"),fill:new g({color:[255,153,0,Math.min(.8,.4+s/u)]})}),text:new $({text:s.toString(),fill:v,stroke:j})});else{const o=t.get("features")[0];a=w(o)}return a}function q(t){const r=[new p({image:new x({radius:t.get("radius"),fill:M})})],a=t.get("features");let s;for(let o=a.length-1;o>=0;--o)s=a[o],r.push(w(s));return r}d=new O({source:new Q({distance:40,source:new U({url:"data/kml/2012_Earthquakes_Mag5.kml",format:new E({extractStyles:!1})})}),style:C});const V=new X({source:new Y({layer:"stamen_toner"})});new T({layers:[V,d],interactions:I().extend([new Z({condition:function(t){return t.type=="pointermove"||t.type=="singleclick"},style:q})]),target:"map",view:new L({center:[0,0],zoom:2})}),Prism.highlightAll()}),(y,_)=>(B(),H(D,null,[e("h4",oe,i(l(ee)),1),ne,ie,le,ce,e("pre",null,[e("code",ue,i("  "+l(te).trim()),1)]),me,e("pre",null,[e("code",ge,i("  "+l(re).trim()),1)]),de,e("pre",null,[e("code",fe,i("  "+l(ae).trim()),1)]),he,e("pre",null,[e("code",pe,i("  "+l(se).trim()),1)])],64))}},Je=P(ye,[["__scopeId","data-v-fbc889fe"]]);export{Je as default};
