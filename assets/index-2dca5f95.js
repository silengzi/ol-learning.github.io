import{V,a as A,M as U}from"./VectorTile-737b3e83.js";import{M as O,g as I,V as z}from"./Layer-5200258f.js";import{T as G}from"./TileProperty-ab86017d.js";import{_ as P,i as Z,o as E,c as L,b as d,t as T,g as S,F as N,p as B,k as D}from"./index-f7249d0d.js";import{T as Q,I as Y,S as J,F as q,a as H}from"./featureloader-ed474c2d.js";import"./MultiPolygon-2ad6ba11.js";import"./_commonjsHelpers-39b5b250.js";import"./TileLayer-7e43e564.js";import"./Layer-a8143b89.js";import"./UrlTile-d31c8ece.js";const K="Advanced Mapbox Vector Tiles",R=`
  <div id="map" class="map"></div>

  <script src="https://openlayers.org/en/v8.1.0/examples/resources/mapbox-streets-v6-style.js"><\/script>
`,X=`
  .map {
    width: 100%;
    height: 400px;
  }
  .map {
    background: #f8f4f0;
  }
`,$=`
  import MVT from 'ol/format/MVT.js';
  import Map from 'ol/Map.js';
  import TileGrid from 'ol/tilegrid/TileGrid.js';
  import VectorTileLayer from 'ol/layer/VectorTile.js';
  import VectorTileSource from 'ol/source/VectorTile.js';
  import View from 'ol/View.js';
  import {Fill, Icon, Stroke, Style, Text} from 'ol/style.js';
  import {get as getProjection} from 'ol/proj.js';

  const key =
    'Your Mapbox access token from https://mapbox.com/ here';

  // Calculation of resolutions that match zoom levels 1, 3, 5, 7, 9, 11, 13, 15.
  const resolutions = [];
  for (let i = 0; i <= 8; ++i) {
    resolutions.push(156543.03392804097 / Math.pow(2, i * 2));
  }
  // Calculation of tile urls for zoom levels 1, 3, 5, 7, 9, 11, 13, 15.
  function tileUrlFunction(tileCoord) {
    return (
      'https://{a-d}.tiles.mapbox.com/v4/mapbox.mapbox-streets-v6/' +
      '{z}/{x}/{y}.vector.pbf?access_token=' +
      key
    )
      .replace('{z}', String(tileCoord[0] * 2 - 1))
      .replace('{x}', String(tileCoord[1]))
      .replace('{y}', String(tileCoord[2]))
      .replace(
        '{a-d}',
        'abcd'.substr(((tileCoord[1] << tileCoord[0]) + tileCoord[2]) % 4, 1)
      );
  }

  const map = new Map({
    layers: [
      new VectorTileLayer({
        source: new VectorTileSource({
          attributions:
            '© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> ' +
            '© <a href="https://www.openstreetmap.org/copyright">' +
            'OpenStreetMap contributors</a>',
          format: new MVT(),
          tileGrid: new TileGrid({
            extent: getProjection('EPSG:3857').getExtent(),
            resolutions: resolutions,
            tileSize: 512,
          }),
          tileUrlFunction: tileUrlFunction,
        }),
        style: createMapboxStreetsV6Style(Style, Fill, Stroke, Icon, Text),
      }),
    ],
    target: 'map',
    view: new View({
      center: [0, 0],
      minZoom: 1,
      zoom: 2,
    }),
  });
`,ee=`
  {
    "name": "mapbox-vector-tiles-advanced",
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
`;function te(m,y,f,W,p){var l=new y({color:""}),e=new f({color:"",width:1}),b=new m({fill:l}),j=new m({fill:l,stroke:e}),n=new m({stroke:e}),a=new m({text:new p({text:"",fill:l,stroke:e})}),k={};function F(i){var c=k[i];return c||(c=new m({image:new W({src:"https://cdn.jsdelivr.net/npm/@mapbox/maki@4.0.0/icons/"+i+"-15.svg",imgSize:[15,15],crossOrigin:"anonymous"})}),k[i]=c),c}var o=[];return function(i,c){var r=0,t=i.get("layer"),s=i.get("class"),_=i.get("type"),g=i.get("scalerank"),v=i.get("labelrank"),w=i.get("admin_level"),C=i.get("maritime"),M=i.get("disputed"),u=i.get("maki"),h=i.getGeometry().getType();return t=="landuse"&&s=="park"?(l.setColor("#d8e8c8"),o[r++]=b):t=="landuse"&&s=="cemetery"?(l.setColor("#e0e4dd"),o[r++]=b):t=="landuse"&&s=="hospital"?(l.setColor("#fde"),o[r++]=b):t=="landuse"&&s=="school"?(l.setColor("#f0e8f8"),o[r++]=b):t=="landuse"&&s=="wood"?(l.setColor("rgb(233,238,223)"),o[r++]=b):t=="waterway"&&s!="river"&&s!="stream"&&s!="canal"||t=="waterway"&&s=="river"?(e.setColor("#a0c8f0"),e.setWidth(1),o[r++]=n):t!="waterway"||s!="stream"&&s!="canal"?t=="water"?(l.setColor("#a0c8f0"),o[r++]=b):t=="aeroway"&&h=="Polygon"?(l.setColor("rgb(242,239,235)"),o[r++]=b):t=="aeroway"&&h=="LineString"&&c<=76.43702828517625?(e.setColor("#f0ede9"),e.setWidth(1),o[r++]=n):t=="building"?(l.setColor("#f2eae2"),e.setColor("#dfdbd7"),e.setWidth(1),o[r++]=j):t=="tunnel"&&s=="motorway_link"?(e.setColor("#e9ac77"),e.setWidth(1),o[r++]=n):t=="tunnel"&&s=="service"?(e.setColor("#cfcdca"),e.setWidth(1),o[r++]=n):t!="tunnel"||s!="street"&&s!="street_limited"?t=="tunnel"&&s=="main"&&c<=1222.99245256282||t=="tunnel"&&s=="motorway"?(e.setColor("#e9ac77"),e.setWidth(1),o[r++]=n):t=="tunnel"&&s=="path"?(e.setColor("#cba"),e.setWidth(1),o[r++]=n):t=="tunnel"&&s=="major_rail"?(e.setColor("#bbb"),e.setWidth(2),o[r++]=n):t=="road"&&s=="motorway_link"?(e.setColor("#e9ac77"),e.setWidth(1),o[r++]=n):t!="road"||s!="street"&&s!="street_limited"||h!="LineString"?t=="road"&&s=="main"&&c<=1222.99245256282||t=="road"&&s=="motorway"&&c<=4891.96981025128?(e.setColor("#e9ac77"),e.setWidth(1),o[r++]=n):t=="road"&&s=="path"?(e.setColor("#cba"),e.setWidth(1),o[r++]=n):t=="road"&&s=="major_rail"?(e.setColor("#bbb"),e.setWidth(2),o[r++]=n):t=="bridge"&&s=="motorway_link"||t=="bridge"&&s=="motorway"?(e.setColor("#e9ac77"),e.setWidth(1),o[r++]=n):t=="bridge"&&s=="service"?(e.setColor("#cfcdca"),e.setWidth(1),o[r++]=n):t!="bridge"||s!="street"&&s!="street_limited"?t=="bridge"&&s=="main"&&c<=1222.99245256282?(e.setColor("#e9ac77"),e.setWidth(1),o[r++]=n):t=="bridge"&&s=="path"?(e.setColor("#cba"),e.setWidth(1),o[r++]=n):t=="bridge"&&s=="major_rail"?(e.setColor("#bbb"),e.setWidth(2),o[r++]=n):t=="admin"&&w>=3&&C===0||t=="admin"&&w==2&&M===0&&C===0||t=="admin"&&w==2&&M===1&&C===0?(e.setColor("#9e9cab"),e.setWidth(1),o[r++]=n):t=="admin"&&w>=3&&C===1||t=="admin"&&w==2&&C===1?(e.setColor("#a0c8f0"),e.setWidth(1),o[r++]=n):t=="country_label"&&g===1?(a.getText().setText(i.get("name_en")),a.getText().setFont('bold 11px "Open Sans", "Arial Unicode MS"'),l.setColor("#334"),e.setColor("rgba(255,255,255,0.8)"),e.setWidth(2),o[r++]=a):t=="country_label"&&g===2&&c<=19567.87924100512?(a.getText().setText(i.get("name_en")),a.getText().setFont('bold 10px "Open Sans", "Arial Unicode MS"'),l.setColor("#334"),e.setColor("rgba(255,255,255,0.8)"),e.setWidth(2),o[r++]=a):t=="country_label"&&g===3&&c<=9783.93962050256?(a.getText().setText(i.get("name_en")),a.getText().setFont('bold 9px "Open Sans", "Arial Unicode MS"'),l.setColor("#334"),e.setColor("rgba(255,255,255,0.8)"),e.setWidth(2),o[r++]=a):t=="country_label"&&g===4&&c<=4891.96981025128?(a.getText().setText(i.get("name_en")),a.getText().setFont('bold 8px "Open Sans", "Arial Unicode MS"'),l.setColor("#334"),e.setColor("rgba(255,255,255,0.8)"),e.setWidth(2),o[r++]=a):t=="marine_label"&&v===1&&h=="Point"||t=="marine_label"&&v===2&&h=="Point"?(a.getText().setText(i.get("name_en")),a.getText().setFont('italic 11px "Open Sans", "Arial Unicode MS"'),l.setColor("#74aee9"),e.setColor("rgba(255,255,255,0.8)"),e.setWidth(1),o[r++]=a):t=="marine_label"&&v===3&&h=="Point"?(a.getText().setText(i.get("name_en")),a.getText().setFont('italic 10px "Open Sans", "Arial Unicode MS"'),l.setColor("#74aee9"),e.setColor("rgba(255,255,255,0.8)"),e.setWidth(1),o[r++]=a):t=="marine_label"&&v===4&&h=="Point"?(a.getText().setText(i.get("name_en")),a.getText().setFont('italic 9px "Open Sans", "Arial Unicode MS"'),l.setColor("#74aee9"),e.setColor("rgba(255,255,255,0.8)"),e.setWidth(1),o[r++]=a):t=="place_label"&&_=="city"&&c<=1222.99245256282?(a.getText().setText(i.get("name_en")),a.getText().setFont('11px "Open Sans", "Arial Unicode MS"'),l.setColor("#333"),e.setColor("rgba(255,255,255,0.8)"),e.setWidth(1),o[r++]=a):t=="place_label"&&_=="town"&&c<=305.748113140705?(a.getText().setText(i.get("name_en")),a.getText().setFont('9px "Open Sans", "Arial Unicode MS"'),l.setColor("#333"),e.setColor("rgba(255,255,255,0.8)"),e.setWidth(1),o[r++]=a):t=="place_label"&&_=="village"&&c<=38.21851414258813?(a.getText().setText(i.get("name_en")),a.getText().setFont('8px "Open Sans", "Arial Unicode MS"'),l.setColor("#333"),e.setColor("rgba(255,255,255,0.8)"),e.setWidth(1),o[r++]=a):t=="place_label"&&c<=19.109257071294063&&(_=="hamlet"||_=="suburb"||_=="neighbourhood")?(a.getText().setText(i.get("name_en")),a.getText().setFont('bold 9px "Arial Narrow"'),l.setColor("#633"),e.setColor("rgba(255,255,255,0.8)"),e.setWidth(1),o[r++]=a):(t=="poi_label"&&c<=19.109257071294063&&g==1&&u!=="marker"||t=="poi_label"&&c<=9.554628535647032&&g==2&&u!=="marker"||t=="poi_label"&&c<=4.777314267823516&&g==3&&u!=="marker"||t=="poi_label"&&c<=2.388657133911758&&g==4&&u!=="marker"||t=="poi_label"&&c<=1.194328566955879&&g>=5&&u!=="marker")&&(o[r++]=F(u)):(e.setColor("#cfcdca"),e.setWidth(1),o[r++]=n):(e.setColor("#cfcdca"),e.setWidth(1),o[r++]=n):(e.setColor("#cfcdca"),e.setWidth(1),o[r++]=n):(e.setColor("#a0c8f0"),e.setWidth(1),o[r++]=n),o.length=r,o}}const x=m=>(B("data-v-fdb8d6d4"),m=m(),D(),m),oe={id:"title"},re=x(()=>d("div",{id:"map",class:"map"},null,-1)),se=x(()=>d("p",null,"矢量瓦片映射，在后续缩放级别中重复使用相同的源瓦片，以节省移动设备上的带宽。注意：当访问令牌过期时，将看不到任何映射",-1)),ae=x(()=>d("h5",{class:"source-heading"},"html",-1)),ie={class:"language-html"},le=x(()=>d("h5",{class:"source-heading"},"css",-1)),ne={class:"language-css"},ce=x(()=>d("h5",{class:"source-heading"},"js",-1)),de={class:"language-js"},pe=x(()=>d("h5",{class:"source-heading"},"package.json",-1)),me={class:"language-json"},ge={__name:"index",setup(m){return Z(()=>{const y="pk.eyJ1Ijoic2lsZW5nIiwiYSI6ImNsb3N5Z2hjdDA0ZWQya2xxN2x5cGd3MTAifQ.Fe6VQp9WZpDi705C_vpBig",f=[];for(let p=0;p<=8;++p)f.push(156543.03392804097/Math.pow(2,p*2));function W(p){return("https://{a-d}.tiles.mapbox.com/v4/mapbox.mapbox-streets-v6/{z}/{x}/{y}.vector.pbf?access_token="+y).replace("{z}",String(p[0]*2-1)).replace("{x}",String(p[1])).replace("{y}",String(p[2])).replace("{a-d}","abcd".substr(((p[1]<<p[0])+p[2])%4,1))}new O({layers:[new V({source:new A({attributions:'© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>',format:new U,tileGrid:new G({extent:I("EPSG:3857").getExtent(),resolutions:f,tileSize:512}),tileUrlFunction:W}),style:te(H,q,J,Y,Q)})],target:"map",view:new z({center:[0,0],minZoom:1,zoom:2})}),Prism.highlightAll()}),(y,f)=>(E(),L(N,null,[d("h4",oe,T(S(K)),1),re,se,ae,d("pre",null,[d("code",ie,T("  "+S(R).trim().toString()),1)]),le,d("pre",null,[d("code",ne,T("  "+S(X).trim().toString()),1)]),ce,d("pre",null,[d("code",de,T("  "+S($).trim().toString()),1)]),pe,d("pre",null,[d("code",me,T("  "+S(ee).trim()),1)])],64))}},ye=P(ge,[["__scopeId","data-v-fdb8d6d4"]]);export{ye as default};
