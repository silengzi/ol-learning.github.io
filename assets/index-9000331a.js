import{E as S}from"./EsriJSON-1c6e2c81.js";import{a as v,F as w,S as I,M as L,V as T,f as x}from"./Layer-3b715193.js";import{V as b,t as j}from"./Vector-a4e726e1.js";import{X as U}from"./XYZ-80208d03.js";import{c as M}from"./TileProperty-e33ea24b.js";import{_ as E,i as F,o as A,c as C,b as e,t as n,g as i,F as R,p as V,k,d as u}from"./index-c958856c.js";import{V as G}from"./Vector-6fff18f8.js";import{T as N}from"./Tile-70490af9.js";import"./featureloader-a90a5108.js";import"./JSONFeature-5a5c1876.js";import"./Feature-627996e0.js";import"./MultiPolygon-d7736349.js";import"./LineString-eed53b5a.js";import"./length-c6ba5b73.js";import"./MultiPoint-74fca651.js";import"./TileImage-1df58d67.js";import"./UrlTile-dc2c26ed.js";import"./VectorLayer-ef6da1be.js";import"./hitdetect-486e5612.js";import"./Layer-37ea9c2e.js";import"./vector-4e067f94.js";import"./BaseTile-8ab94efc.js";import"./TileLayer-7c629c64.js";const W="ArcGIS REST Feature Service(ArcGIS REST 要素服务)",B=`
  <div id="map" class="map"></div>
  <div id="info">&nbsp;<br>&nbsp;</div>
`,z=`
  .map {
    width: 100%;
    height: 400px;
  }
`,O=`
  import EsriJSON from 'ol/format/EsriJSON.js';
  import Map from 'ol/Map.js';
  import VectorSource from 'ol/source/Vector.js';
  import View from 'ol/View.js';
  import XYZ from 'ol/source/XYZ.js';
  import {Fill, Stroke, Style} from 'ol/style.js';
  import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';
  import {createXYZ} from 'ol/tilegrid.js';
  import {fromLonLat} from 'ol/proj.js';
  import {tile as tileStrategy} from 'ol/loadingstrategy.js';

  const serviceUrl =
    'https://services-eu1.arcgis.com/NPIbx47lsIiu2pqz/ArcGIS/rest/services/' +
    'Neptune_Coastline_Campaign_Open_Data_Land_Use_2014/FeatureServer/';
  const layer = '0';

  const fillColors = {
    'Lost To Sea Since 1965': [0, 0, 0, 1],
    'Urban/Built-up': [104, 104, 104, 1],
    'Shacks': [115, 76, 0, 1],
    'Industry': [230, 0, 0, 1],
    'Wasteland': [230, 0, 0, 1],
    'Caravans': [0, 112, 255, 0.5],
    'Defence': [230, 152, 0, 0.5],
    'Transport': [230, 152, 0, 1],
    'Open Countryside': [255, 255, 115, 1],
    'Woodland': [38, 115, 0, 1],
    'Managed Recreation/Sport': [85, 255, 0, 1],
    'Amenity Water': [0, 112, 255, 1],
    'Inland Water': [0, 38, 115, 1],
  };

  const style = new Style({
    fill: new Fill(),
    stroke: new Stroke({
      color: [0, 0, 0, 1],
      width: 0.5,
    }),
  });

  const vectorSource = new VectorSource({
    format: new EsriJSON(),
    url: function (extent, resolution, projection) {
      // ArcGIS Server only wants the numeric portion of the projection ID.
      const srid = projection
        .getCode()
        .split(":")
        .pop();

      const url =
        serviceUrl +
        layer +
        '/query/?f=json&' +
        'returnGeometry=true&spatialRel=esriSpatialRelIntersects&geometry=' +
        encodeURIComponent(
          '{"xmin":' +
            extent[0] +
            ',"ymin":' +
            extent[1] +
            ',"xmax":' +
            extent[2] +
            ',"ymax":' +
            extent[3] +
            ',"spatialReference":{"wkid":' +
            srid +
            '}}'
        ) +
        '&geometryType=esriGeometryEnvelope&inSR=' +
        srid +
        '&outFields=*' +
        '&outSR=' +
        srid;

      return url;
    },
    strategy: tileStrategy(
      createXYZ({
        tileSize: 512,
      })
    ),
    attributions:
      'University of Leicester (commissioned by the ' +
      '<a href="https://www.arcgis.com/home/item.html?id=' +
      'd5f05b1dc3dd4d76906c421bc1727805">National Trust</a>)',
  });

  const vector = new VectorLayer({
    source: vectorSource,
    style: function (feature) {
      const classify = feature.get('LU_2014');
      const color = fillColors[classify] || [0, 0, 0, 0];
      style.getFill().setColor(color);
      return style;
    },
    opacity: 0.7,
  });

  const raster = new TileLayer({
    source: new XYZ({
      attributions:
        'Tiles © <a href="https://services.arcgisonline.com/ArcGIS/' +
        'rest/services/World_Topo_Map/MapServer">ArcGIS</a>',
      url:
        'https://server.arcgisonline.com/ArcGIS/rest/services/' +
        'World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
    }),
  });

  const map = new Map({
    layers: [raster, vector],
    target: document.getElementById('map'),
    view: new View({
      center: fromLonLat([1.72, 52.4]),
      zoom: 14,
    }),
  });

  const displayFeatureInfo = function (pixel) {
    const feature = map.forEachFeatureAtPixel(pixel, function (feature) {
      return feature;
    });
    if (feature) {
      const info =
        '2014 Land Use: ' +
        feature.get('LU_2014') +
        '<br>1965 Land Use: ' +
        feature.get('LU_1965');
      document.getElementById('info').innerHTML = info;
      map.getTarget().style.cursor = 'pointer';
    } else {
      document.getElementById('info').innerHTML = '&nbsp;<br>&nbsp;';
      map.getTarget().style.cursor = '';
    }
  };

  map.on(['click', 'pointermove'], function (evt) {
    if (evt.dragging) {
      return;
    }
    displayFeatureInfo(evt.pixel);
  });
`,X=`
  {
    "name": "vector-esri",
    "dependencies": {
      "ol": "8.1.0"
    },
    "devDependencies": {
      "vite": "^3.2.3"
    },
    "scripts": {
      "start": "vite",
      "build": "vite build"
    }
  }
`;const o=a=>(V("data-v-91540a8d"),a=a(),k(),a),D={id:"title"},Y=o(()=>e("div",{id:"map",class:"map"},null,-1)),Z=o(()=>e("div",{id:"info"},[u(" "),e("br"),u(" ")],-1)),P=o(()=>e("p",null,"This example loads new features from ArcGIS REST Feature Service when the view extent changes.",-1)),q=o(()=>e("h5",{class:"source-heading"},"html",-1)),H={class:"language-html"},J=o(()=>e("h5",{class:"source-heading"},"css",-1)),K={class:"language-css"},Q=o(()=>e("h5",{class:"source-heading"},"js",-1)),$={class:"language-js"},ee=o(()=>e("h5",{class:"source-heading"},"package.json",-1)),te={class:"language-json"},re={__name:"index",setup(a){return F(()=>{const p="https://services-eu1.arcgis.com/NPIbx47lsIiu2pqz/ArcGIS/rest/services/Neptune_Coastline_Campaign_Open_Data_Land_Use_2014/FeatureServer/",m="0",f={"Lost To Sea Since 1965":[0,0,0,1],"Urban/Built-up":[104,104,104,1],Shacks:[115,76,0,.5],Industry:[230,0,0,1],Wasteland:[230,0,0,1],Caravans:[0,112,255,.5],Defence:[230,152,0,.5],Transport:[230,152,0,1],"Open Countryside":[255,255,115,1],Woodland:[38,115,0,1],"Managed Recreation/Sport":[85,255,0,1],"Amenity Water":[0,112,255,1],"Inland Water":[0,38,115,1]},d=new v({fill:new w,stroke:new I({color:[0,0,0,1],width:.5})}),_=new b({format:new S,url:function(t,s,r){const l=r.getCode().split(":").pop();return p+m+"/query/?f=json&returnGeometry=true&spatialRel=esriSpatialRelIntersects&geometry="+encodeURIComponent('{"xmin":'+t[0]+',"ymin":'+t[1]+',"xmax":'+t[2]+',"ymax":'+t[3]+',"spatialReference":{"wkid":'+l+"}}")+"&geometryType=esriGeometryEnvelope&inSR="+l+"&outFields=*&outSR="+l},strategy:j(M({tileSize:512})),attributions:'University of Leicester (commissioned by the <a href="https://www.arcgis.com/home/item.html?id=d5f05b1dc3dd4d76906c421bc1727805">National Trust</a>)'}),g=new G({source:_,style:function(t){const s=t.get("LU_2014"),r=f[s]||[0,0,0,0];return d.getFill().setColor(r),d},opacity:.7}),y=new N({source:new U({attributions:'Tiles © <a href="https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer">ArcGIS</a>',url:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}"})}),c=new L({layers:[y,g],target:document.getElementById("map"),view:new T({center:x([1.72,52.4]),zoom:14})}),h=function(t){const s=c.forEachFeatureAtPixel(t,function(r){return r});if(s){const r="2014 Land Use: "+s.get("LU_2014")+"<br>1965 Land Use: "+s.get("LU_1965");document.getElementById("info").innerHTML=r,c.getTarget().style.cursor="pointer"}else document.getElementById("info").innerHTML="&nbsp;<br>&nbsp;",c.getTarget().style.cursor=""};c.on(["click","pointermove"],function(t){t.dragging||h(t.pixel)}),Prism.highlightAll()}),(p,m)=>(A(),C(R,null,[e("h4",D,n(i(W)),1),Y,Z,P,q,e("pre",null,[e("code",H,n("  "+i(B).trim()),1)]),J,e("pre",null,[e("code",K,n("  "+i(z).trim()),1)]),Q,e("pre",null,[e("code",$,n("  "+i(O).trim()),1)]),ee,e("pre",null,[e("code",te,n("  "+i(X).trim()),1)])],64))}},je=E(re,[["__scopeId","data-v-91540a8d"]]);export{je as default};
