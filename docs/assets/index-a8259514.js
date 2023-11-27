import{G as R}from"./GeoJSON-45a42f0d.js";import{I as N,s as P,n as A,k as q,T as O,C as H,m,o as p,p as J,q as T,E as K,M as U,V as z,D as $,r as Q,t as X}from"./Layer-5200258f.js";import{a as B,F as j,V as Y}from"./Vector-296c2e9e.js";import{_ as Z,i as ee,o as te,c as oe,b as c,t as y,g as _,F as ne,j as re,p as se,k as ie}from"./index-c940254e.js";import{c as ae,a as I,F as V,S as ce}from"./featureloader-ed474c2d.js";import"./JSONFeature-755d0ee7.js";import"./MultiPolygon-2ad6ba11.js";import"./Layer-a8143b89.js";const le="Box Selection",de=`
  <div id="map" class="map"></div>
  <div>Selected regions: <span id="info">None</span></div>
`,he=`
  .map {
    width: 100%;
    height: 400px;
  }
`,ue=`
  import GeoJSON from 'ol/format/GeoJSON.js';
  import Map from 'ol/Map.js';
  import VectorLayer from 'ol/layer/Vector.js';
  import VectorSource from 'ol/source/Vector.js';
  import View from 'ol/View.js';
  import {DragBox, Select} from 'ol/interaction.js';
  import {Fill, Stroke, Style} from 'ol/style.js';
  import {getWidth} from 'ol/extent.js';
  import {platformModifierKeyOnly} from 'ol/events/condition.js';

  const vectorSource = new VectorSource({
    url: 'https://openlayers.org/data/vector/ecoregions.json',
    format: new GeoJSON(),
  });

  const style = new Style({
    fill: new Fill({
      color: '#eeeeee',
    }),
  });

  const map = new Map({
    layers: [
      new VectorLayer({
        source: vectorSource,
        background: '#1a2b39',
        style: function (feature) {
          const color = feature.get('COLOR_BIO') || '#eeeeee';
          style.getFill().setColor(color);
          return style;
        },
      }),
    ],
    target: 'map',
    view: new View({
      center: [0, 0],
      zoom: 2,
      constrainRotation: 16,
    }),
  });

  const selectedStyle = new Style({
    fill: new Fill({
      color: 'rgba(255, 255, 255, 0.6)',
    }),
    stroke: new Stroke({
      color: 'rgba(255, 255, 255, 0.7)',
      width: 2,
    }),
  });

  // a normal select interaction to handle click
  const select = new Select({
    style: function (feature) {
      const color = feature.get('COLOR_BIO') || '#eeeeee';
      selectedStyle.getFill().setColor(color);
      return selectedStyle;
    },
  });
  map.addInteraction(select);

  const selectedFeatures = select.getFeatures();

  // a DragBox interaction used to select features by drawing boxes
  const dragBox = new DragBox({
    condition: platformModifierKeyOnly,
  });

  map.addInteraction(dragBox);

  dragBox.on('boxend', function () {
    const boxExtent = dragBox.getGeometry().getExtent();

    // if the extent crosses the antimeridian process each world separately
    const worldExtent = map.getView().getProjection().getExtent();
    const worldWidth = getWidth(worldExtent);
    const startWorld = Math.floor((boxExtent[0] - worldExtent[0]) / worldWidth);
    const endWorld = Math.floor((boxExtent[2] - worldExtent[0]) / worldWidth);

    for (let world = startWorld; world <= endWorld; ++world) {
      const left = Math.max(boxExtent[0] - world * worldWidth, worldExtent[0]);
      const right = Math.min(boxExtent[2] - world * worldWidth, worldExtent[2]);
      const extent = [left, boxExtent[1], right, boxExtent[3]];

      const boxFeatures = vectorSource
        .getFeaturesInExtent(extent)
        .filter(
          (feature) =>
            !selectedFeatures.getArray().includes(feature) &&
            feature.getGeometry().intersectsExtent(extent)
        );

      // features that intersect the box geometry are added to the
      // collection of selected features

      // if the view is not obliquely rotated the box geometry and
      // its extent are equalivalent so intersecting features can
      // be added directly to the collection
      const rotation = map.getView().getRotation();
      const oblique = rotation % (Math.PI / 2) !== 0;

      // when the view is obliquely rotated the box extent will
      // exceed its geometry so both the box and the candidate
      // feature geometries are rotated around a common anchor
      // to confirm that, with the box geometry aligned with its
      // extent, the geometries intersect
      if (oblique) {
        const anchor = [0, 0];
        const geometry = dragBox.getGeometry().clone();
        geometry.translate(-world * worldWidth, 0);
        geometry.rotate(-rotation, anchor);
        const extent = geometry.getExtent();
        boxFeatures.forEach(function (feature) {
          const geometry = feature.getGeometry().clone();
          geometry.rotate(-rotation, anchor);
          if (geometry.intersectsExtent(extent)) {
            selectedFeatures.push(feature);
          }
        });
      } else {
        selectedFeatures.extend(boxFeatures);
      }
    }
  });

  // clear selection when drawing a new box and when clicking on the map
  dragBox.on('boxstart', function () {
    selectedFeatures.clear();
  });

  const infoBox = document.getElementById('info');

  selectedFeatures.on(['add', 'remove'], function () {
    const names = selectedFeatures.getArray().map((feature) => {
      return feature.get('ECO_NAME');
    });
    if (names.length > 0) {
      infoBox.innerHTML = names.join(', ');
    } else {
      infoBox.innerHTML = 'None';
    }
  });
`,ge=`
  {
    "name": "box-selection",
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
`,fe={SELECT:"select"};class me extends K{constructor(e,o,s,r){super(e),this.selected=o,this.deselected=s,this.mapBrowserEvent=r}}const w={};class F extends N{constructor(e){super(),this.on,this.once,this.un,e=e||{},this.boundAddFeature_=this.addFeature_.bind(this),this.boundRemoveFeature_=this.removeFeature_.bind(this),this.condition_=e.condition?e.condition:P,this.addCondition_=e.addCondition?e.addCondition:A,this.removeCondition_=e.removeCondition?e.removeCondition:A,this.toggleCondition_=e.toggleCondition?e.toggleCondition:q,this.multi_=e.multi?e.multi:!1,this.filter_=e.filter?e.filter:O,this.hitTolerance_=e.hitTolerance?e.hitTolerance:0,this.style_=e.style!==void 0?e.style:ye(),this.features_=e.features||new H;let o;if(e.layers)if(typeof e.layers=="function")o=e.layers;else{const s=e.layers;o=function(r){return s.includes(r)}}else o=O;this.layerFilter_=o,this.featureLayerAssociation_={}}addFeatureLayerAssociation_(e,o){this.featureLayerAssociation_[m(e)]=o}getFeatures(){return this.features_}getHitTolerance(){return this.hitTolerance_}getLayer(e){return this.featureLayerAssociation_[m(e)]}setHitTolerance(e){this.hitTolerance_=e}setMap(e){this.getMap()&&this.style_&&this.features_.forEach(this.restorePreviousStyle_.bind(this)),super.setMap(e),e?(this.features_.addEventListener(p.ADD,this.boundAddFeature_),this.features_.addEventListener(p.REMOVE,this.boundRemoveFeature_),this.style_&&this.features_.forEach(this.applySelectedStyle_.bind(this))):(this.features_.removeEventListener(p.ADD,this.boundAddFeature_),this.features_.removeEventListener(p.REMOVE,this.boundRemoveFeature_))}addFeature_(e){const o=e.element;if(this.style_&&this.applySelectedStyle_(o),!this.getLayer(o)){const s=this.getMap().getAllLayers().find(function(r){if(r instanceof B&&r.getSource()&&r.getSource().hasFeature(o))return r});s&&this.addFeatureLayerAssociation_(o,s)}}removeFeature_(e){this.style_&&this.restorePreviousStyle_(e.element)}getStyle(){return this.style_}applySelectedStyle_(e){const o=m(e);o in w||(w[o]=e.getStyle()),e.setStyle(this.style_)}restorePreviousStyle_(e){const o=this.getMap().getInteractions().getArray();for(let r=o.length-1;r>=0;--r){const d=o[r];if(d!==this&&d instanceof F&&d.getStyle()&&d.getFeatures().getArray().lastIndexOf(e)!==-1){e.setStyle(d.getStyle());return}}const s=m(e);e.setStyle(w[s]),delete w[s]}removeFeatureLayerAssociation_(e){delete this.featureLayerAssociation_[m(e)]}handleEvent(e){if(!this.condition_(e))return!0;const o=this.addCondition_(e),s=this.removeCondition_(e),r=this.toggleCondition_(e),d=!o&&!s&&!r,h=e.map,a=this.getFeatures(),u=[],n=[];if(d){J(this.featureLayerAssociation_),h.forEachFeatureAtPixel(e.pixel,(t,i)=>{if(!(!(t instanceof j)||!this.filter_(t,i)))return this.addFeatureLayerAssociation_(t,i),n.push(t),!this.multi_},{layerFilter:this.layerFilter_,hitTolerance:this.hitTolerance_});for(let t=a.getLength()-1;t>=0;--t){const i=a.item(t),x=n.indexOf(i);x>-1?n.splice(x,1):(a.remove(i),u.push(i))}n.length!==0&&a.extend(n)}else{h.forEachFeatureAtPixel(e.pixel,(t,i)=>{if(!(!(t instanceof j)||!this.filter_(t,i)))return(o||r)&&!a.getArray().includes(t)?(this.addFeatureLayerAssociation_(t,i),n.push(t)):(s||r)&&a.getArray().includes(t)&&(u.push(t),this.removeFeatureLayerAssociation_(t)),!this.multi_},{layerFilter:this.layerFilter_,hitTolerance:this.hitTolerance_});for(let t=u.length-1;t>=0;--t)a.remove(u[t]);a.extend(n)}return(n.length>0||u.length>0)&&this.dispatchEvent(new me(fe.SELECT,n,u,e)),!0}}function ye(){const l=ae();return T(l.Polygon,l.LineString),T(l.GeometryCollection,l.LineString),function(e){return e.getGeometry()?l[e.getGeometry().getType()]:null}}const _e=F;const b=l=>(se("data-v-4d3e9677"),l=l(),ie(),l),xe={id:"title"},pe=re('<div id="map" class="map" data-v-4d3e9677></div><div data-v-4d3e9677>Selected regions: <span id="info" data-v-4d3e9677>None</span></div><p data-v-4d3e9677>This example shows how to use a <code data-v-4d3e9677>DragBox</code> interaction to select features. Selected features are added to the feature overlay of a select interaction (<code data-v-4d3e9677>ol/interaction/Select</code>) for highlighting.</p><p data-v-4d3e9677>Use <code data-v-4d3e9677>Ctrl+Drag</code> (<code data-v-4d3e9677>Command+Drag</code> on Mac) to draw boxes.</p><h5 class="source-heading" data-v-4d3e9677>html</h5>',5),we={class:"language-html"},ve=b(()=>c("h5",{class:"source-heading"},"css",-1)),Se={class:"language-css"},Fe=b(()=>c("h5",{class:"source-heading"},"js",-1)),be={class:"language-js"},Ee=b(()=>c("h5",{class:"source-heading"},"package.json",-1)),Me={class:"language-json"},Le={__name:"index",setup(l){return ee(()=>{const e=new Y({url:"https://openlayers.org/data/vector/ecoregions.json",format:new R}),o=new I({fill:new V({color:"#eeeeee"})}),s=new U({layers:[new B({source:e,background:"#1a2b39",style:function(n){const t=n.get("COLOR_BIO")||"#eeeeee";return o.getFill().setColor(t),o}})],target:"map",view:new z({center:[0,0],zoom:2,constrainRotation:16})}),r=new I({fill:new V({color:"rgba(255, 255, 255, 0.6)"}),stroke:new ce({color:"rgba(255, 255, 255, 0.7)",width:2})}),d=new _e({style:function(n){const t=n.get("COLOR_BIO")||"#eeeeee";return r.getFill().setColor(t),r}});s.addInteraction(d);const h=d.getFeatures(),a=new $({condition:Q});s.addInteraction(a),a.on("boxend",function(){const n=a.getGeometry().getExtent(),t=s.getView().getProjection().getExtent(),i=X(t),x=Math.floor((n[0]-t[0])/i),k=Math.floor((n[2]-t[0])/i);for(let g=x;g<=k;++g){const G=Math.max(n[0]-g*i,t[0]),W=Math.min(n[2]-g*i,t[2]),E=[G,n[1],W,n[3]],M=e.getFeaturesInExtent(E).filter(f=>!h.getArray().includes(f)&&f.getGeometry().intersectsExtent(E)),v=s.getView().getRotation();if(v%(Math.PI/2)!==0){const f=[0,0],S=a.getGeometry().clone();S.translate(-g*i,0),S.rotate(-v,f);const D=S.getExtent();M.forEach(function(L){const C=L.getGeometry().clone();C.rotate(-v,f),C.intersectsExtent(D)&&h.push(L)})}else h.extend(M)}}),a.on("boxstart",function(){h.clear()});const u=document.getElementById("info");h.on(["add","remove"],function(){const n=h.getArray().map(t=>t.get("ECO_NAME"));n.length>0?u.innerHTML=n.join(", "):u.innerHTML="None"}),Prism.highlightAll()}),(e,o)=>(te(),oe(ne,null,[c("h4",xe,y(_(le)),1),pe,c("pre",null,[c("code",we,y("  "+_(de).trim()),1)]),ve,c("pre",null,[c("code",Se,y("  "+_(he).trim()),1)]),Fe,c("pre",null,[c("code",be,y("  "+_(ue).trim()),1)]),Ee,c("pre",null,[c("code",Me,y("  "+_(ge).trim()),1)])],64))}},Ge=Z(Le,[["__scopeId","data-v-4d3e9677"]]);export{Ge as default};
