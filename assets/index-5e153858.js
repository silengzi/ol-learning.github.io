import{K as E}from"./KML-c4ac6c3a.js";import{M as T,K as I,V as L,ah as z,c as R,U as K,Q as P}from"./Layer-3211d6ef.js";import{_ as W,i as G,o as B,c as H,b as e,t as i,g as l,F as D,p as A,k as N}from"./index-8e73cb60.js";import{F as g,S as F,a as p,C as x,R as Q}from"./Style-22e788f3.js";import{V as U}from"./Vector-2de0a908.js";import{C as J}from"./Cluster-dbd18037.js";import{V as O}from"./Vector-163f0152.js";import{T as X}from"./Tile-d932c51d.js";import{S as Y}from"./StadiaMaps-c230dd67.js";import{S as Z}from"./Select-7e786c32.js";import{T as $}from"./featureloader-4f961e27.js";import"./GeometryCollection-03015b2a.js";import"./LineString-d3d6f49c.js";import"./MultiPolygon-f290964a.js";import"./MultiPoint-e6eff345.js";import"./Feature-5a984f38.js";import"./string-30bf5402.js";import"./VectorLayer-f045426f.js";import"./hitdetect-4f776f31.js";import"./vector-01534e8d.js";import"./Layer-8f64fa5e.js";import"./BaseTile-47530170.js";import"./TileProperty-f0a52f17.js";import"./TileLayer-d6ace1df.js";import"./XYZ-2a4e8198.js";import"./TileImage-a70beb77.js";import"./UrlTile-7d5bd7ce.js";import"./OSM-39b8e613.js";const ee="Earthquake Clusters",te=`
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
`;const n=c=>(A("data-v-fbc889fe"),c=c(),N(),c),oe={id:"title"},ne=n(()=>e("div",{id:"map",class:"map"},null,-1)),ie=n(()=>e("p",null,"This example parses a KML file and renders the features as clusters on a vector layer. The styling in this example is quite involved. Single earthquake locations (rendered as stars) have a size relative to their magnitude. Clusters have an opacity relative to the number of features in the cluster, and a size that represents the extent of the features that make up the cluster. When clicking or hovering on a cluster, the individual features that make up the cluster will be shown.",-1)),le=n(()=>e("p",null,"To achieve this, we make heavy use of style functions.",-1)),ce=n(()=>e("h5",{class:"source-heading"},"html",-1)),ue={class:"language-html"},me=n(()=>e("h5",{class:"source-heading"},"css",-1)),ge={class:"language-css"},de=n(()=>e("h5",{class:"source-heading"},"js",-1)),fe={class:"language-js"},he=n(()=>e("h5",{class:"source-heading"},"package.json",-1)),pe={class:"language-json"},ye={__name:"index",setup(c){return G(()=>{const y=new g({color:"rgba(255, 153, 0, 0.8)"}),w=new F({color:"rgba(255, 204, 0, 0.2)",width:1}),v=new g({color:"#fff"}),j=new F({color:"rgba(0, 0, 0, 0.6)",width:3}),M=new g({color:"rgba(255, 255, 255, 0.01)"});function _(t){const r=t.get("name"),s=5+20*(parseFloat(r.substr(2))-5);return new p({geometry:t.getGeometry(),image:new Q({radius1:s,radius2:3,points:5,angle:Math.PI,fill:y,stroke:w})})}let u,d=null;const b=function(t){u=0;const r=d.getSource().getFeatures();let a,s;for(let o=r.length-1;o>=0;--o){a=r[o];const k=a.get("features"),f=P();let m,h;for(m=0,h=k.length;m<h;++m)z(f,k[m].getGeometry().getExtent());u=Math.max(u,h),s=.25*(R(f)+K(f))/t,a.set("radius",s)}};let S;function C(t,r){r!=S&&(b(r),S=r);let a;const s=t.get("features").length;if(s>1)a=new p({image:new x({radius:t.get("radius"),fill:new g({color:[255,153,0,Math.min(.8,.4+s/u)]})}),text:new $({text:s.toString(),fill:v,stroke:j})});else{const o=t.get("features")[0];a=_(o)}return a}function q(t){const r=[new p({image:new x({radius:t.get("radius"),fill:M})})],a=t.get("features");let s;for(let o=a.length-1;o>=0;--o)s=a[o],r.push(_(s));return r}d=new U({source:new J({distance:40,source:new O({url:"data/kml/2012_Earthquakes_Mag5.kml",format:new E({extractStyles:!1})})}),style:C});const V=new X({source:new Y({layer:"stamen_toner"})});new T({layers:[V,d],interactions:I().extend([new Z({condition:function(t){return t.type=="pointermove"||t.type=="singleclick"},style:q})]),target:"map",view:new L({center:[0,0],zoom:2})}),Prism.highlightAll()}),(y,w)=>(B(),H(D,null,[e("h4",oe,i(l(ee)),1),ne,ie,le,ce,e("pre",null,[e("code",ue,i("  "+l(te).trim()),1)]),me,e("pre",null,[e("code",ge,i("  "+l(re).trim()),1)]),de,e("pre",null,[e("code",fe,i("  "+l(ae).trim()),1)]),he,e("pre",null,[e("code",pe,i("  "+l(se).trim()),1)])],64))}},Qe=W(ye,[["__scopeId","data-v-fbc889fe"]]);export{Qe as default};
