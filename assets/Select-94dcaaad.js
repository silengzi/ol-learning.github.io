import{cc as L,cd as A,ce as F,cf as C,bZ as m,bV as E,a1 as d,bX as u,c6 as T,aO as S,aD as b}from"./Layer-227d2e40.js";import{F as v}from"./Vector-dc05cca5.js";import{V as x}from"./Vector-1db23811.js";import{d as M}from"./Style-f78957a3.js";const D={SELECT:"select"};class O extends b{constructor(e,t,r,s){super(e),this.selected=t,this.deselected=r,this.mapBrowserEvent=s}}const y={};class _ extends L{constructor(e){super(),this.on,this.once,this.un,e=e||{},this.boundAddFeature_=this.addFeature_.bind(this),this.boundRemoveFeature_=this.removeFeature_.bind(this),this.condition_=e.condition?e.condition:A,this.addCondition_=e.addCondition?e.addCondition:F,this.removeCondition_=e.removeCondition?e.removeCondition:F,this.toggleCondition_=e.toggleCondition?e.toggleCondition:C,this.multi_=e.multi?e.multi:!1,this.filter_=e.filter?e.filter:m,this.hitTolerance_=e.hitTolerance?e.hitTolerance:0,this.style_=e.style!==void 0?e.style:P(),this.features_=e.features||new E;let t;if(e.layers)if(typeof e.layers=="function")t=e.layers;else{const r=e.layers;t=function(s){return r.includes(s)}}else t=m;this.layerFilter_=t,this.featureLayerAssociation_={}}addFeatureLayerAssociation_(e,t){this.featureLayerAssociation_[d(e)]=t}getFeatures(){return this.features_}getHitTolerance(){return this.hitTolerance_}getLayer(e){return this.featureLayerAssociation_[d(e)]}setHitTolerance(e){this.hitTolerance_=e}setMap(e){this.getMap()&&this.style_&&this.features_.forEach(this.restorePreviousStyle_.bind(this)),super.setMap(e),e?(this.features_.addEventListener(u.ADD,this.boundAddFeature_),this.features_.addEventListener(u.REMOVE,this.boundRemoveFeature_),this.style_&&this.features_.forEach(this.applySelectedStyle_.bind(this))):(this.features_.removeEventListener(u.ADD,this.boundAddFeature_),this.features_.removeEventListener(u.REMOVE,this.boundRemoveFeature_))}addFeature_(e){const t=e.element;if(this.style_&&this.applySelectedStyle_(t),!this.getLayer(t)){const r=this.getMap().getAllLayers().find(function(s){if(s instanceof x&&s.getSource()&&s.getSource().hasFeature(t))return s});r&&this.addFeatureLayerAssociation_(t,r)}}removeFeature_(e){this.style_&&this.restorePreviousStyle_(e.element)}getStyle(){return this.style_}applySelectedStyle_(e){const t=d(e);t in y||(y[t]=e.getStyle()),e.setStyle(this.style_)}restorePreviousStyle_(e){const t=this.getMap().getInteractions().getArray();for(let s=t.length-1;s>=0;--s){const o=t[s];if(o!==this&&o instanceof _&&o.getStyle()&&o.getFeatures().getArray().lastIndexOf(e)!==-1){e.setStyle(o.getStyle());return}}const r=d(e);e.setStyle(y[r]),delete y[r]}removeFeatureLayerAssociation_(e){delete this.featureLayerAssociation_[d(e)]}handleEvent(e){if(!this.condition_(e))return!0;const t=this.addCondition_(e),r=this.removeCondition_(e),s=this.toggleCondition_(e),o=!t&&!r&&!s,f=e.map,l=this.getFeatures(),h=[],n=[];if(o){T(this.featureLayerAssociation_),f.forEachFeatureAtPixel(e.pixel,(i,a)=>{if(!(!(i instanceof v)||!this.filter_(i,a)))return this.addFeatureLayerAssociation_(i,a),n.push(i),!this.multi_},{layerFilter:this.layerFilter_,hitTolerance:this.hitTolerance_});for(let i=l.getLength()-1;i>=0;--i){const a=l.item(i),g=n.indexOf(a);g>-1?n.splice(g,1):(l.remove(a),h.push(a))}n.length!==0&&l.extend(n)}else{f.forEachFeatureAtPixel(e.pixel,(i,a)=>{if(!(!(i instanceof v)||!this.filter_(i,a)))return(t||s)&&!l.getArray().includes(i)?(this.addFeatureLayerAssociation_(i,a),n.push(i)):(r||s)&&l.getArray().includes(i)&&(h.push(i),this.removeFeatureLayerAssociation_(i)),!this.multi_},{layerFilter:this.layerFilter_,hitTolerance:this.hitTolerance_});for(let i=h.length-1;i>=0;--i)l.remove(h[i]);l.extend(n)}return(n.length>0||h.length>0)&&this.dispatchEvent(new O(D.SELECT,n,h,e)),!0}}function P(){const c=M();return S(c.Polygon,c.LineString),S(c.GeometryCollection,c.LineString),function(e){return e.getGeometry()?c[e.getGeometry().getType()]:null}}const G=_;export{G as S};
