import{V,a as A,M as U}from"./VectorTile-737b3e83.js";import{M as O,g as z,V as I}from"./Layer-5200258f.js";import{T as G}from"./TileProperty-ab86017d.js";import{_ as P,i as N,o as Z,c as E,b as d,t as T,g as S,F as L,p as B,k as D}from"./index-c940254e.js";import{T as Q,I as Y,S as q,F as J,a as H}from"./featureloader-ed474c2d.js";import"./MultiPolygon-2ad6ba11.js";import"./_commonjsHelpers-39b5b250.js";import"./TileLayer-7e43e564.js";import"./Layer-a8143b89.js";import"./UrlTile-d31c8ece.js";const K="Advanced Mapbox Vector Tiles",R=`
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
`;function te(m,y,w,W,p){var l=new y({color:""}),e=new w({color:"",width:1}),h=new m({fill:l}),j=new m({fill:l,stroke:e}),n=new m({stroke:e}),a=new m({text:new p({text:"",fill:l,stroke:e})}),k={};function F(i){var c=k[i];return c||(c=new m({image:new W({src:"https://cdn.jsdelivr.net/npm/@mapbox/maki@4.0.0/icons/"+i+"-15.svg",imgSize:[15,15],crossOrigin:"anonymous"})}),k[i]=c),c}var o=[];return function(i,c){var s=0,t=i.get("layer"),r=i.get("class"),u=i.get("type"),g=i.get("scalerank"),v=i.get("labelrank"),f=i.get("admin_level"),C=i.get("maritime"),M=i.get("disputed"),_=i.get("maki"),b=i.getGeometry().getType();return t=="landuse"&&r=="park"?(l.setColor("#d8e8c8"),o[s++]=h):t=="landuse"&&r=="cemetery"?(l.setColor("#e0e4dd"),o[s++]=h):t=="landuse"&&r=="hospital"?(l.setColor("#fde"),o[s++]=h):t=="landuse"&&r=="school"?(l.setColor("#f0e8f8"),o[s++]=h):t=="landuse"&&r=="wood"?(l.setColor("rgb(233,238,223)"),o[s++]=h):t=="waterway"&&r!="river"&&r!="stream"&&r!="canal"||t=="waterway"&&r=="river"?(e.setColor("#a0c8f0"),e.setWidth(1),o[s++]=n):t!="waterway"||r!="stream"&&r!="canal"?t=="water"?(l.setColor("#a0c8f0"),o[s++]=h):t=="aeroway"&&b=="Polygon"?(l.setColor("rgb(242,239,235)"),o[s++]=h):t=="aeroway"&&b=="LineString"&&c<=76.43702828517625?(e.setColor("#f0ede9"),e.setWidth(1),o[s++]=n):t=="building"?(l.setColor("#f2eae2"),e.setColor("#dfdbd7"),e.setWidth(1),o[s++]=j):t=="tunnel"&&r=="motorway_link"?(e.setColor("#e9ac77"),e.setWidth(1),o[s++]=n):t=="tunnel"&&r=="service"?(e.setColor("#cfcdca"),e.setWidth(1),o[s++]=n):t!="tunnel"||r!="street"&&r!="street_limited"?t=="tunnel"&&r=="main"&&c<=1222.99245256282||t=="tunnel"&&r=="motorway"?(e.setColor("#e9ac77"),e.setWidth(1),o[s++]=n):t=="tunnel"&&r=="path"?(e.setColor("#cba"),e.setWidth(1),o[s++]=n):t=="tunnel"&&r=="major_rail"?(e.setColor("#bbb"),e.setWidth(2),o[s++]=n):t=="road"&&r=="motorway_link"?(e.setColor("#e9ac77"),e.setWidth(1),o[s++]=n):t!="road"||r!="street"&&r!="street_limited"||b!="LineString"?t=="road"&&r=="main"&&c<=1222.99245256282||t=="road"&&r=="motorway"&&c<=4891.96981025128?(e.setColor("#e9ac77"),e.setWidth(1),o[s++]=n):t=="road"&&r=="path"?(e.setColor("#cba"),e.setWidth(1),o[s++]=n):t=="road"&&r=="major_rail"?(e.setColor("#bbb"),e.setWidth(2),o[s++]=n):t=="bridge"&&r=="motorway_link"||t=="bridge"&&r=="motorway"?(e.setColor("#e9ac77"),e.setWidth(1),o[s++]=n):t=="bridge"&&r=="service"?(e.setColor("#cfcdca"),e.setWidth(1),o[s++]=n):t!="bridge"||r!="street"&&r!="street_limited"?t=="bridge"&&r=="main"&&c<=1222.99245256282?(e.setColor("#e9ac77"),e.setWidth(1),o[s++]=n):t=="bridge"&&r=="path"?(e.setColor("#cba"),e.setWidth(1),o[s++]=n):t=="bridge"&&r=="major_rail"?(e.setColor("#bbb"),e.setWidth(2),o[s++]=n):t=="admin"&&f>=3&&C===0||t=="admin"&&f==2&&M===0&&C===0||t=="admin"&&f==2&&M===1&&C===0?(e.setColor("#9e9cab"),e.setWidth(1),o[s++]=n):t=="admin"&&f>=3&&C===1||t=="admin"&&f==2&&C===1?(e.setColor("#a0c8f0"),e.setWidth(1),o[s++]=n):t=="country_label"&&g===1?(a.getText().setText(i.get("name_en")),a.getText().setFont('bold 11px "Open Sans", "Arial Unicode MS"'),l.setColor("#334"),e.setColor("rgba(255,255,255,0.8)"),e.setWidth(2),o[s++]=a):t=="country_label"&&g===2&&c<=19567.87924100512?(a.getText().setText(i.get("name_en")),a.getText().setFont('bold 10px "Open Sans", "Arial Unicode MS"'),l.setColor("#334"),e.setColor("rgba(255,255,255,0.8)"),e.setWidth(2),o[s++]=a):t=="country_label"&&g===3&&c<=9783.93962050256?(a.getText().setText(i.get("name_en")),a.getText().setFont('bold 9px "Open Sans", "Arial Unicode MS"'),l.setColor("#334"),e.setColor("rgba(255,255,255,0.8)"),e.setWidth(2),o[s++]=a):t=="country_label"&&g===4&&c<=4891.96981025128?(a.getText().setText(i.get("name_en")),a.getText().setFont('bold 8px "Open Sans", "Arial Unicode MS"'),l.setColor("#334"),e.setColor("rgba(255,255,255,0.8)"),e.setWidth(2),o[s++]=a):t=="marine_label"&&v===1&&b=="Point"||t=="marine_label"&&v===2&&b=="Point"?(a.getText().setText(i.get("name_en")),a.getText().setFont('italic 11px "Open Sans", "Arial Unicode MS"'),l.setColor("#74aee9"),e.setColor("rgba(255,255,255,0.8)"),e.setWidth(1),o[s++]=a):t=="marine_label"&&v===3&&b=="Point"?(a.getText().setText(i.get("name_en")),a.getText().setFont('italic 10px "Open Sans", "Arial Unicode MS"'),l.setColor("#74aee9"),e.setColor("rgba(255,255,255,0.8)"),e.setWidth(1),o[s++]=a):t=="marine_label"&&v===4&&b=="Point"?(a.getText().setText(i.get("name_en")),a.getText().setFont('italic 9px "Open Sans", "Arial Unicode MS"'),l.setColor("#74aee9"),e.setColor("rgba(255,255,255,0.8)"),e.setWidth(1),o[s++]=a):t=="place_label"&&u=="city"&&c<=1222.99245256282?(a.getText().setText(i.get("name_en")),a.getText().setFont('11px "Open Sans", "Arial Unicode MS"'),l.setColor("#333"),e.setColor("rgba(255,255,255,0.8)"),e.setWidth(1),o[s++]=a):t=="place_label"&&u=="town"&&c<=305.748113140705?(a.getText().setText(i.get("name_en")),a.getText().setFont('9px "Open Sans", "Arial Unicode MS"'),l.setColor("#333"),e.setColor("rgba(255,255,255,0.8)"),e.setWidth(1),o[s++]=a):t=="place_label"&&u=="village"&&c<=38.21851414258813?(a.getText().setText(i.get("name_en")),a.getText().setFont('8px "Open Sans", "Arial Unicode MS"'),l.setColor("#333"),e.setColor("rgba(255,255,255,0.8)"),e.setWidth(1),o[s++]=a):t=="place_label"&&c<=19.109257071294063&&(u=="hamlet"||u=="suburb"||u=="neighbourhood")?(a.getText().setText(i.get("name_en")),a.getText().setFont('bold 9px "Arial Narrow"'),l.setColor("#633"),e.setColor("rgba(255,255,255,0.8)"),e.setWidth(1),o[s++]=a):(t=="poi_label"&&c<=19.109257071294063&&g==1&&_!=="marker"||t=="poi_label"&&c<=9.554628535647032&&g==2&&_!=="marker"||t=="poi_label"&&c<=4.777314267823516&&g==3&&_!=="marker"||t=="poi_label"&&c<=2.388657133911758&&g==4&&_!=="marker"||t=="poi_label"&&c<=1.194328566955879&&g>=5&&_!=="marker")&&(o[s++]=F(_)):(e.setColor("#cfcdca"),e.setWidth(1),o[s++]=n):(e.setColor("#cfcdca"),e.setWidth(1),o[s++]=n):(e.setColor("#cfcdca"),e.setWidth(1),o[s++]=n):(e.setColor("#a0c8f0"),e.setWidth(1),o[s++]=n),o.length=s,o}}const x=m=>(B("data-v-260990da"),m=m(),D(),m),oe={id:"title"},se=x(()=>d("div",{id:"map",class:"map"},null,-1)),re=x(()=>d("p",null,"A vector tiles map which reuses the same source tiles for subsequent zoom levels to save bandwidth on mobile devices. Note: No map will be visible when the access token has expired.",-1)),ae=x(()=>d("h5",{class:"source-heading"},"html",-1)),ie={class:"language-html"},le=x(()=>d("h5",{class:"source-heading"},"css",-1)),ne={class:"language-css"},ce=x(()=>d("h5",{class:"source-heading"},"js",-1)),de={class:"language-js"},pe=x(()=>d("h5",{class:"source-heading"},"package.json",-1)),me={class:"language-json"},ge={__name:"index",setup(m){return N(()=>{const y="pk.eyJ1Ijoic2lsZW5nIiwiYSI6ImNsb3N5Z2hjdDA0ZWQya2xxN2x5cGd3MTAifQ.Fe6VQp9WZpDi705C_vpBig",w=[];for(let p=0;p<=8;++p)w.push(156543.03392804097/Math.pow(2,p*2));function W(p){return("https://{a-d}.tiles.mapbox.com/v4/mapbox.mapbox-streets-v6/{z}/{x}/{y}.vector.pbf?access_token="+y).replace("{z}",String(p[0]*2-1)).replace("{x}",String(p[1])).replace("{y}",String(p[2])).replace("{a-d}","abcd".substr(((p[1]<<p[0])+p[2])%4,1))}new O({layers:[new V({source:new A({attributions:'© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>',format:new U,tileGrid:new G({extent:z("EPSG:3857").getExtent(),resolutions:w,tileSize:512}),tileUrlFunction:W}),style:te(H,J,q,Y,Q)})],target:"map",view:new I({center:[0,0],minZoom:1,zoom:2})}),Prism.highlightAll()}),(y,w)=>(Z(),E(L,null,[d("h4",oe,T(S(K)),1),se,re,ae,d("pre",null,[d("code",ie,T("  "+S(R).trim().toString()),1)]),le,d("pre",null,[d("code",ne,T("  "+S(X).trim().toString()),1)]),ce,d("pre",null,[d("code",de,T("  "+S($).trim().toString()),1)]),pe,d("pre",null,[d("code",me,T("  "+S(ee).trim()),1)])],64))}},ye=P(ge,[["__scopeId","data-v-260990da"]]);export{ye as default};
