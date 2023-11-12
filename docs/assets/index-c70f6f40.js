import{F,V as P,t as O,a as R}from"./Vector-3251bb54.js";import{J as T}from"./JSONFeature-1261293e.js";import{t as G,L as Z,b as E,a as N,M as C}from"./MultiPolygon-63e96b1b.js";import{f as M,W as Y,a3 as k,a4 as X,w as U,a5 as v,m as S,l as A,L as V,M as W,V as b,a6 as z}from"./TileLayer-0c9b03f0.js";import{T as J,X as B}from"./Tile-f73a4f5e.js";import{_ as D,i as H,o as q,c as $,b as a,t as g,g as y,F as j,p as K,k as Q,d as L}from"./index-767b6842.js";import{a as ee,F as te,S as re}from"./featureloader-98ee97cf.js";const se="ArcGIS REST Feature Service",ne=`
  <div id="map" class="map"></div>
  <div id="info">&nbsp;<br>&nbsp;</div>
`,oe=`
  .map {
    width: 100%;
    height: 400px;
  }
`,ie=`
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
`,ae=`
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
`,le={Point:me,LineString:pe,Polygon:he,MultiPoint:ge,MultiLineString:fe,MultiPolygon:ye},ce={Point:Se,LineString:_e,Polygon:we,MultiPoint:ve,MultiLineString:Me,MultiPolygon:Le};class ue extends T{constructor(t){t=t||{},super(),this.geometryName_=t.geometryName}readFeatureFromObject(t,r,s){const n=t,o=x(n.geometry,r),i=new F;if(this.geometryName_&&i.setGeometryName(this.geometryName_),i.setGeometry(o),n.attributes){i.setProperties(n.attributes,!0);const c=n.attributes[s];c!==void 0&&i.setId(c)}return i}readFeaturesFromObject(t,r){if(r=r||{},t.features){const s=t,n=[],o=s.features;for(let i=0,c=o.length;i<c;++i)n.push(this.readFeatureFromObject(o[i],r,t.objectIdFieldName));return n}return[this.readFeatureFromObject(t,r)]}readGeometryFromObject(t,r){return x(t,r)}readProjectionFromObject(t){if(t.spatialReference&&t.spatialReference.wkid!==void 0){const s=t.spatialReference.wkid;return M("EPSG:"+s)}return null}writeGeometryObject(t,r){return I(t,this.adaptOptions(r))}writeFeatureObject(t,r){r=this.adaptOptions(r);const s={};if(!t.hasProperties())return s.attributes={},s;const n=t.getProperties(),o=t.getGeometry();if(o){s.geometry=I(o,r);const i=r&&(r.dataProjection||r.featureProjection);i&&(s.geometry.spatialReference={wkid:Number(M(i).getCode().split(":").pop())}),delete n[t.getGeometryName()]}return Y(n)?s.attributes={}:s.attributes=n,s}writeFeaturesObject(t,r){r=this.adaptOptions(r);const s=[];for(let n=0,o=t.length;n<o;++n)s.push(this.writeFeatureObject(t[n],r));return{features:s}}}function x(e,t){if(!e)return null;let r;if(typeof e.x=="number"&&typeof e.y=="number")r="Point";else if(e.points)r="MultiPoint";else if(e.paths)e.paths.length===1?r="LineString":r="MultiLineString";else if(e.rings){const n=e,o=f(n),i=de(n.rings,o);i.length===1?(r="Polygon",e=Object.assign({},e,{rings:i[0]})):(r="MultiPolygon",e=Object.assign({},e,{rings:i}))}const s=le[r];return G(s(e),!1,t)}function de(e,t){const r=[],s=[],n=[];let o,i;for(o=0,i=e.length;o<i;++o)r.length=0,k(r,0,e[o],t.length),X(r,0,r.length,t.length)?s.push([e[o]]):n.push(e[o]);for(;n.length;){const c=n.shift();let u=!1;for(o=s.length-1;o>=0;o--){const _=s[o][0];if(U(new v(_).getExtent(),new v(c).getExtent())){s[o].push(c),u=!0;break}}u||s.push([c.reverse()])}return s}function me(e){let t;return e.m!==void 0&&e.z!==void 0?t=new S([e.x,e.y,e.z,e.m],"XYZM"):e.z!==void 0?t=new S([e.x,e.y,e.z],"XYZ"):e.m!==void 0?t=new S([e.x,e.y,e.m],"XYM"):t=new S([e.x,e.y]),t}function pe(e){const t=f(e);return new Z(e.paths[0],t)}function fe(e){const t=f(e);return new E(e.paths,t)}function f(e){let t="XY";return e.hasZ===!0&&e.hasM===!0?t="XYZM":e.hasZ===!0?t="XYZ":e.hasM===!0&&(t="XYM"),t}function ge(e){const t=f(e);return new N(e.points,t)}function ye(e){const t=f(e);return new C(e.rings,t)}function he(e){const t=f(e);return new A(e.rings,t)}function Se(e,t){const r=e.getCoordinates();let s;const n=e.getLayout();if(n==="XYZ")s={x:r[0],y:r[1],z:r[2]};else if(n==="XYM")s={x:r[0],y:r[1],m:r[2]};else if(n==="XYZM")s={x:r[0],y:r[1],z:r[2],m:r[3]};else if(n==="XY")s={x:r[0],y:r[1]};else throw new Error("Invalid geometry layout");return s}function h(e){const t=e.getLayout();return{hasZ:t==="XYZ"||t==="XYZM",hasM:t==="XYM"||t==="XYZM"}}function _e(e,t){const r=h(e);return{hasZ:r.hasZ,hasM:r.hasM,paths:[e.getCoordinates()]}}function we(e,t){const r=h(e);return{hasZ:r.hasZ,hasM:r.hasM,rings:e.getCoordinates(!1)}}function Me(e,t){const r=h(e);return{hasZ:r.hasZ,hasM:r.hasM,paths:e.getCoordinates()}}function ve(e,t){const r=h(e);return{hasZ:r.hasZ,hasM:r.hasM,points:e.getCoordinates()}}function Le(e,t){const r=h(e),s=e.getCoordinates(!1),n=[];for(let o=0;o<s.length;o++)for(let i=s[o].length-1;i>=0;i--)n.push(s[o][i]);return{hasZ:r.hasZ,hasM:r.hasM,rings:n}}function I(e,t){const r=ce[e.getType()];return r(G(e,!0,t),t)}const xe=ue;const m=e=>(K("data-v-1d7d97d8"),e=e(),Q(),e),Ie={id:"title"},Ge=m(()=>a("div",{id:"map",class:"map"},null,-1)),Fe=m(()=>a("div",{id:"info"},[L(" "),a("br"),L(" ")],-1)),Pe=m(()=>a("p",null,"This example loads new features from ArcGIS REST Feature Service when the view extent changes.",-1)),Oe=m(()=>a("h5",{class:"source-heading"},"html",-1)),Re={class:"language-html"},Te=m(()=>a("h5",{class:"source-heading"},"css",-1)),Ze={class:"language-css"},Ee=m(()=>a("h5",{class:"source-heading"},"js",-1)),Ne={class:"language-js"},Ce=m(()=>a("h5",{class:"source-heading"},"package.json",-1)),Ye={class:"language-json"},ke={__name:"index",setup(e){return H(()=>{const t="https://services-eu1.arcgis.com/NPIbx47lsIiu2pqz/ArcGIS/rest/services/Neptune_Coastline_Campaign_Open_Data_Land_Use_2014/FeatureServer/",r="0",s={"Lost To Sea Since 1965":[0,0,0,1],"Urban/Built-up":[104,104,104,1],Shacks:[115,76,0,1],Industry:[230,0,0,1],Wasteland:[230,0,0,1],Caravans:[0,112,255,.5],Defence:[230,152,0,.5],Transport:[230,152,0,1],"Open Countryside":[255,255,115,1],Woodland:[38,115,0,1],"Managed Recreation/Sport":[85,255,0,1],"Amenity Water":[0,112,255,1],"Inland Water":[0,38,115,1]},n=new ee({fill:new te,stroke:new re({color:[0,0,0,1],width:.5})}),o=new P({format:new xe,url:function(l,p,d){const w=d.getCode().split(":").pop();return t+r+"/query/?f=json&returnGeometry=true&spatialRel=esriSpatialRelIntersects&geometry="+encodeURIComponent('{"xmin":'+l[0]+',"ymin":'+l[1]+',"xmax":'+l[2]+',"ymax":'+l[3]+',"spatialReference":{"wkid":'+w+"}}")+"&geometryType=esriGeometryEnvelope&inSR="+w+"&outFields=*&outSR="+w},strategy:O(V({tileSize:512})),attributions:'University of Leicester (commissioned by the <a href="https://www.arcgis.com/home/item.html?id=d5f05b1dc3dd4d76906c421bc1727805">National Trust</a>)'}),i=new R({source:o,style:function(l){const p=l.get("LU_2014"),d=s[p]||[0,0,0,0];return n.getFill().setColor(d),n},opacity:.7}),c=new J({source:new B({attributions:'Tiles © <a href="https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer">ArcGIS</a>',url:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}"})}),u=new W({layers:[c,i],target:document.getElementById("map"),view:new b({center:z([1.72,52.4]),zoom:14})}),_=function(l){const p=u.forEachFeatureAtPixel(l,function(d){return d});if(p){const d="2014 Land Use: "+p.get("LU_2014")+"<br>1965 Land Use: "+p.get("LU_1965");document.getElementById("info").innerHTML=d,u.getTarget().style.cursor="pointer"}else document.getElementById("info").innerHTML="&nbsp;<br>&nbsp;",u.getTarget().style.cursor=""};u.on(["click","pointermove"],function(l){l.dragging||_(l.pixel)}),Prism.highlightAll()}),(t,r)=>(q(),$(j,null,[a("h4",Ie,g(y(se)),1),Ge,Fe,Pe,Oe,a("pre",null,[a("code",Re,g("  "+y(ne).trim()),1)]),Te,a("pre",null,[a("code",Ze,g("  "+y(oe).trim()),1)]),Ee,a("pre",null,[a("code",Ne,g("  "+y(ie).trim()),1)]),Ce,a("pre",null,[a("code",Ye,g("  "+y(ae).trim()),1)])],64))}},Be=D(ke,[["__scopeId","data-v-1d7d97d8"]]);export{Be as default};
