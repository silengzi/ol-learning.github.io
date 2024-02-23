import{V as q,F as K}from"./Vector-dc05cca5.js";import{G as Q}from"./GeoJSON-1b8bad54.js";import{M as $,V as ee,f as T,am as te,k as re,_ as oe,P as ne,a as se,W as le}from"./Layer-227d2e40.js";import{_ as ce,i as ie,o as ae,c as ue,b as o,t as v,g as x,F as me,p as ge,k as he}from"./index-0efe29ff.js";import{F,S as A,C as E,a as b}from"./Style-f78957a3.js";import{I as D,T as pe}from"./featureloader-41324978.js";import{C as fe}from"./Cluster-6f33ff9f.js";import{V as M}from"./Vector-1db23811.js";import{T as de}from"./Tile-69a5f37c.js";import{X as we}from"./XYZ-f63b0d91.js";import{L as ye}from"./LineString-72752817.js";import"./GeometryCollection-66a09ebd.js";import"./JSONFeature-4dcaaca7.js";import"./Feature-315822cb.js";import"./MultiPolygon-4cf6e085.js";import"./MultiPoint-97d710ff.js";import"./VectorLayer-cfa00b56.js";import"./hitdetect-d04d171e.js";import"./vector-841020ca.js";import"./Layer-10451559.js";import"./BaseTile-962ada93.js";import"./TileProperty-167ee2c2.js";import"./TileLayer-94aa49a8.js";import"./TileImage-97dc110f.js";import"./UrlTile-27538029.js";const Se="Dynamic clusters",ve=`
  <div id="map" class="map"></div>

  <script src="https://cdn.jsdelivr.net/npm/monotone-chain-convex-hull@1.0.0/lib/index.js"><\/script>
`,xe=`
  .map {
    width: 100%;
    height: 400px;
  }
`,be=`
  import Feature from 'ol/Feature.js';
  import GeoJSON from 'ol/format/GeoJSON.js';
  import Map from 'ol/Map.js';
  import View from 'ol/View.js';
  import {
    Circle as CircleStyle,
    Fill,
    Icon,
    Stroke,
    Style,
    Text,
  } from 'ol/style.js';
  import {Cluster, Vector as VectorSource, XYZ} from 'ol/source.js';
  import {LineString, Point, Polygon} from 'ol/geom.js';
  import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';
  import {createEmpty, extend, getHeight, getWidth} from 'ol/extent.js';
  import {fromLonLat} from 'ol/proj.js';

  const circleDistanceMultiplier = 1;
  const circleFootSeparation = 28;
  const circleStartAngle = Math.PI / 2;

  const convexHullFill = new Fill({
    color: 'rgba(255, 153, 0, 0.4)',
  });
  const convexHullStroke = new Stroke({
    color: 'rgba(204, 85, 0, 1)',
    width: 1.5,
  });
  const outerCircleFill = new Fill({
    color: 'rgba(255, 153, 102, 0.3)',
  });
  const innerCircleFill = new Fill({
    color: 'rgba(255, 165, 0, 0.7)',
  });
  const textFill = new Fill({
    color: '#fff',
  });
  const textStroke = new Stroke({
    color: 'rgba(0, 0, 0, 0.6)',
    width: 3,
  });
  const innerCircle = new CircleStyle({
    radius: 14,
    fill: innerCircleFill,
  });
  const outerCircle = new CircleStyle({
    radius: 20,
    fill: outerCircleFill,
  });
  const darkIcon = new Icon({
    src: 'data/icons/emoticon-cool.svg',
  });
  const lightIcon = new Icon({
    src: 'data/icons/emoticon-cool-outline.svg',
  });

  /**
   * Single feature style, users for clusters with 1 feature and cluster circles.
   * @param {Feature} clusterMember A feature from a cluster.
   * @return {Style} An icon style for the cluster member's location.
   */
  function clusterMemberStyle(clusterMember) {
    return new Style({
      geometry: clusterMember.getGeometry(),
      image: clusterMember.get('LEISTUNG') > 5 ? darkIcon : lightIcon,
    });
  }

  let clickFeature, clickResolution;
  /**
   * Style for clusters with features that are too close to each other, activated on click.
   * @param {Feature} cluster A cluster with overlapping members.
   * @param {number} resolution The current view resolution.
   * @return {Style|null} A style to render an expanded view of the cluster members.
   */
  function clusterCircleStyle(cluster, resolution) {
    if (cluster !== clickFeature || resolution !== clickResolution) {
      return null;
    }
    const clusterMembers = cluster.get('features');
    const centerCoordinates = cluster.getGeometry().getCoordinates();
    return generatePointsCircle(
      clusterMembers.length,
      cluster.getGeometry().getCoordinates(),
      resolution
    ).reduce((styles, coordinates, i) => {
      const point = new Point(coordinates);
      const line = new LineString([centerCoordinates, coordinates]);
      styles.unshift(
        new Style({
          geometry: line,
          stroke: convexHullStroke,
        })
      );
      styles.push(
        clusterMemberStyle(
          new Feature({
            ...clusterMembers[i].getProperties(),
            geometry: point,
          })
        )
      );
      return styles;
    }, []);
  }

  /**
   * From
   * https://github.com/Leaflet/Leaflet.markercluster/blob/31360f2/src/MarkerCluster.Spiderfier.js#L55-L72
   * Arranges points in a circle around the cluster center, with a line pointing from the center to
   * each point.
   * @param {number} count Number of cluster members.
   * @param {Array<number>} clusterCenter Center coordinate of the cluster.
   * @param {number} resolution Current view resolution.
   * @return {Array<Array<number>>} An array of coordinates representing the cluster members.
   */
  function generatePointsCircle(count, clusterCenter, resolution) {
    const circumference =
      circleDistanceMultiplier * circleFootSeparation * (2 + count);
    let legLength = circumference / (Math.PI * 2); //radius from circumference
    const angleStep = (Math.PI * 2) / count;
    const res = [];
    let angle;

    legLength = Math.max(legLength, 35) * resolution; // Minimum distance to get outside the cluster icon.

    for (let i = 0; i < count; ++i) {
      // Clockwise, like spiral.
      angle = circleStartAngle + i * angleStep;
      res.push([
        clusterCenter[0] + legLength * Math.cos(angle),
        clusterCenter[1] + legLength * Math.sin(angle),
      ]);
    }

    return res;
  }

  let hoverFeature;
  /**
   * Style for convex hulls of clusters, activated on hover.
   * @param {Feature} cluster The cluster feature.
   * @return {Style|null} Polygon style for the convex hull of the cluster.
   */
  function clusterHullStyle(cluster) {
    if (cluster !== hoverFeature) {
      return null;
    }
    const originalFeatures = cluster.get('features');
    const points = originalFeatures.map((feature) =>
      feature.getGeometry().getCoordinates()
    );
    return new Style({
      geometry: new Polygon([monotoneChainConvexHull(points)]),
      fill: convexHullFill,
      stroke: convexHullStroke,
    });
  }

  function clusterStyle(feature) {
    const size = feature.get('features').length;
    if (size > 1) {
      return [
        new Style({
          image: outerCircle,
        }),
        new Style({
          image: innerCircle,
          text: new Text({
            text: size.toString(),
            fill: textFill,
            stroke: textStroke,
          }),
        }),
      ];
    }
    const originalFeature = feature.get('features')[0];
    return clusterMemberStyle(originalFeature);
  }

  const vectorSource = new VectorSource({
    format: new GeoJSON(),
    url: 'data/geojson/photovoltaic.json',
  });

  const clusterSource = new Cluster({
    attributions:
      'Data: <a href="https://www.data.gv.at/auftritte/?organisation=stadt-wien">Stadt Wien</a>',
    distance: 35,
    source: vectorSource,
  });

  // Layer displaying the convex hull of the hovered cluster.
  const clusterHulls = new VectorLayer({
    source: clusterSource,
    style: clusterHullStyle,
  });

  // Layer displaying the clusters and individual features.
  const clusters = new VectorLayer({
    source: clusterSource,
    style: clusterStyle,
  });

  // Layer displaying the expanded view of overlapping cluster members.
  const clusterCircles = new VectorLayer({
    source: clusterSource,
    style: clusterCircleStyle,
  });

  const raster = new TileLayer({
    source: new XYZ({
      attributions:
        'Base map: <a target="_blank" href="https://basemap.at/">basemap.at</a>',
      url: 'https://maps{1-4}.wien.gv.at/basemap/bmapgrau/normal/google3857/{z}/{y}/{x}.png',
    }),
  });

  const map = new Map({
    layers: [raster, clusterHulls, clusters, clusterCircles],
    target: 'map',
    view: new View({
      center: [0, 0],
      zoom: 2,
      maxZoom: 19,
      extent: [
        ...fromLonLat([16.1793, 48.1124]),
        ...fromLonLat([16.5559, 48.313]),
      ],
      showFullExtent: true,
    }),
  });

  map.on('pointermove', (event) => {
    clusters.getFeatures(event.pixel).then((features) => {
      if (features[0] !== hoverFeature) {
        // Display the convex hull on hover.
        hoverFeature = features[0];
        clusterHulls.setStyle(clusterHullStyle);
        // Change the cursor style to indicate that the cluster is clickable.
        map.getTargetElement().style.cursor =
          hoverFeature && hoverFeature.get('features').length > 1
            ? 'pointer'
            : '';
      }
    });
  });

  map.on('click', (event) => {
    clusters.getFeatures(event.pixel).then((features) => {
      if (features.length > 0) {
        const clusterMembers = features[0].get('features');
        if (clusterMembers.length > 1) {
          // Calculate the extent of the cluster members.
          const extent = createEmpty();
          clusterMembers.forEach((feature) =>
            extend(extent, feature.getGeometry().getExtent())
          );
          const view = map.getView();
          const resolution = map.getView().getResolution();
          if (
            view.getZoom() === view.getMaxZoom() ||
            (getWidth(extent) < resolution && getHeight(extent) < resolution)
          ) {
            // Show an expanded view of the cluster members.
            clickFeature = features[0];
            clickResolution = resolution;
            clusterCircles.setStyle(clusterCircleStyle);
          } else {
            // Zoom to the extent of the cluster members.
            view.fit(extent, {duration: 500, padding: [50, 50, 50, 50]});
          }
        }
      }
    });
  });
`,Fe=`
  {
    "name": "clusters-dynamic",
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
`;function Ce(t,c={}){c.sorted||t.sort(_e);const m=t.length,a=new Array(m*2);for(var n=0,i=0;i<m;i++){const h=t[i];for(;n>=2&&z(a[n-2],a[n-1],h)<=0;)n--;a[n++]=h}const C=n+1;for(i=m-2;i>=0;i--){const h=t[i];for(;n>=C&&z(a[n-2],a[n-1],h)<=0;)n--;a[n++]=h}return a.slice(0,n-1)}function z(t,c,m){return(c[1]-t[1])*(m[0]-t[0])-(c[0]-t[0])*(m[1]-t[1])}function _e(t,c){return t[0]===c[0]?t[1]-c[1]:t[0]-c[0]}const p=t=>(ge("data-v-c68e0564"),t=t(),he(),t),ke={id:"title"},Me=p(()=>o("div",{id:"map",class:"map"},null,-1)),Le=p(()=>o("p",null,"This example shows open data of subsidized photovoltaic installations in Vienna. Different style functions are used for cluster display, single feature display, convex hull of a cluster, and an expanded view of overlapping features. Hovering over a cluster shows its convex hull. Clicking on a cluster zooms to the extent of the contained features. Clicking on a cluster consisting of features that are very close to each other reveals an expanded view of the features, along a circle around the cluster.",-1)),je=p(()=>o("p",null,"Features are styled differently depending on the power of the photovoltaic installation.",-1)),Ie=p(()=>o("h5",{class:"source-heading"},"html",-1)),Ve={class:"language-html"},He=p(()=>o("h5",{class:"source-heading"},"css",-1)),Pe={class:"language-css"},Ge=p(()=>o("h5",{class:"source-heading"},"js",-1)),Te={class:"language-js"},Ae=p(()=>o("h5",{class:"source-heading"},"package.json",-1)),Ee={class:"language-json"},De={__name:"index",setup(t){return ie(()=>{const a=Math.PI/2,n=new F({color:"rgba(255, 153, 0, 0.4)"}),i=new A({color:"rgba(204, 85, 0, 1)",width:1.5}),C=new F({color:"rgba(255, 153, 102, 0.3)"}),h=new F({color:"rgba(255, 165, 0, 0.7)"}),Z=new F({color:"#fff"}),N=new A({color:"rgba(0, 0, 0, 0.6)",width:3}),R=new E({radius:14,fill:h}),W=new E({radius:20,fill:C}),B=new D({src:"data/icons/emoticon-cool.svg"}),X=new D({src:"data/icons/emoticon-cool-outline.svg"});function L(e){return new b({geometry:e.getGeometry(),image:e.get("LEISTUNG")>5?B:X})}let j,I;function V(e,r){if(e!==j||r!==I)return null;const l=e.get("features"),u=e.getGeometry().getCoordinates();return J(l.length,e.getGeometry().getCoordinates(),r).reduce((s,g,f)=>{const y=new ne(g),S=new ye([u,g]);return s.unshift(new b({geometry:S,stroke:i})),s.push(L(new K({...l[f].getProperties(),geometry:y}))),s},[])}function J(e,r,l){let s=28*(2+e)/(Math.PI*2);const g=Math.PI*2/e,f=[];let y;s=Math.max(s,35)*l;for(let S=0;S<e;++S)y=a+S*g,f.push([r[0]+s*Math.cos(y),r[1]+s*Math.sin(y)]);return f}let d;function H(e){if(e!==d)return null;const l=e.get("features").map(u=>u.getGeometry().getCoordinates());return new b({geometry:new se([Ce(l)]),fill:n,stroke:i})}function O(e){const r=e.get("features").length;if(r>1)return[new b({image:W}),new b({image:R,text:new pe({text:r.toString(),fill:Z,stroke:N})})];const l=e.get("features")[0];return L(l)}const Y=new q({format:new Q,url:"data/geojson/photovoltaic.json"}),_=new fe({attributions:'Data: <a href="https://www.data.gv.at/auftritte/?organisation=stadt-wien">Stadt Wien</a>',distance:35,source:Y}),P=new M({source:_,style:H}),k=new M({source:_,style:O}),G=new M({source:_,style:V}),U=new de({source:new we({attributions:'Base map: <a target="_blank" href="https://basemap.at/">basemap.at</a>',url:"https://maps{1-4}.wien.gv.at/basemap/bmapgrau/normal/google3857/{z}/{y}/{x}.png"})}),w=new $({layers:[U,P,k,G],target:"map",view:new ee({center:[0,0],zoom:2,maxZoom:19,extent:[...T([16.1793,48.1124]),...T([16.5559,48.313])],showFullExtent:!0})});w.on("pointermove",e=>{k.getFeatures(e.pixel).then(r=>{r[0]!==d&&(d=r[0],P.setStyle(H),w.getTargetElement().style.cursor=d&&d.get("features").length>1?"pointer":"")})}),w.on("click",e=>{k.getFeatures(e.pixel).then(r=>{if(r.length>0){const l=r[0].get("features");if(l.length>1){const u=le();l.forEach(f=>te(u,f.getGeometry().getExtent()));const s=w.getView(),g=w.getView().getResolution();s.getZoom()===s.getMaxZoom()||re(u)<g&&oe(u)<g?(j=r[0],I=g,G.setStyle(V)):s.fit(u,{duration:500,padding:[50,50,50,50]})}}})}),Prism.highlightAll()}),(c,m)=>(ae(),ue(me,null,[o("h4",ke,v(x(Se)),1),Me,Le,je,Ie,o("pre",null,[o("code",Ve,v("  "+x(ve).trim()),1)]),He,o("pre",null,[o("code",Pe,v("  "+x(xe).trim()),1)]),Ge,o("pre",null,[o("code",Te,v("  "+x(be).trim()),1)]),Ae,o("pre",null,[o("code",Ee,v("  "+x(Fe).trim()),1)])],64))}},ut=ce(De,[["__scopeId","data-v-c68e0564"]]);export{ut as default};
