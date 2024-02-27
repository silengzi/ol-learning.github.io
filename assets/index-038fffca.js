import{M as c,d as m,V as p,C as d}from"./Layer-3211d6ef.js";import{O as h}from"./OSM-39b8e613.js";import{T as u}from"./Tile-d932c51d.js";import{i as _,o as g,c as f,b as t,t as e,g as o,F as w}from"./index-8e73cb60.js";import"./XYZ-2a4e8198.js";import"./TileImage-a70beb77.js";import"./TileProperty-f0a52f17.js";import"./UrlTile-7d5bd7ce.js";import"./BaseTile-47530170.js";import"./TileLayer-d6ace1df.js";import"./Layer-8f64fa5e.js";const b="Custom Controls",v=`
  <div id="map" class="map"></div>
`,C=`
  .map {
    width: 100%;
    height: 400px;
  }
  .rotate-north {
    top: 65px;
    left: .5em;
  }
  .ol-touch .rotate-north {
    top: 80px;
  }
`,M=`
  import Map from 'ol/Map.js';
  import OSM from 'ol/source/OSM.js';
  import TileLayer from 'ol/layer/Tile.js';
  import View from 'ol/View.js';
  import {Control, defaults as defaultControls} from 'ol/control.js';

  //
  // Define rotate to north control.
  //

  class RotateNorthControl extends Control {
    /**
     * @param {Object} [opt_options] Control options.
     */
    constructor(opt_options) {
      const options = opt_options || {};

      const button = document.createElement('button');
      button.innerHTML = 'N';

      const element = document.createElement('div');
      element.className = 'rotate-north ol-unselectable ol-control';
      element.appendChild(button);

      super({
        element: element,
        target: options.target,
      });

      button.addEventListener('click', this.handleRotateNorth.bind(this), false);
    }

    handleRotateNorth() {
      this.getMap().getView().setRotation(0);
    }
  }

  //
  // Create map, giving it a rotate to north control.
  //

  const map = new Map({
    controls: defaultControls().extend([new RotateNorthControl()]),
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
    ],
    target: 'map',
    view: new View({
      center: [0, 0],
      zoom: 3,
      rotation: 1,
    }),
  });
`,x=`
  {
    "name": "custom-controls",
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
`;const N={id:"title"},j=t("div",{id:"map",class:"map"},null,-1),y=t("p",null,'This example creates a "rotate to north" button.',-1),R=t("h5",{class:"source-heading"},"html",-1),T={class:"language-html"},V=t("h5",{class:"source-heading"},"css",-1),E={class:"language-css"},L=t("h5",{class:"source-heading"},"js",-1),k={class:"language-js"},O=t("h5",{class:"source-heading"},"package.json",-1),S={class:"language-json"},Q={__name:"index",setup(B){return _(()=>{class a extends d{constructor(l){const i=l||{},n=document.createElement("button");n.innerHTML="N";const s=document.createElement("div");s.className="rotate-north ol-unselectable ol-control",s.appendChild(n),super({element:s,target:i.target}),n.addEventListener("click",this.handleRotateNorth.bind(this),!1)}handleRotateNorth(){this.getMap().getView().setRotation(0)}}new c({controls:m().extend([new a]),layers:[new u({source:new h})],target:"map",view:new p({center:[0,0],zoom:3,rotation:1})}),Prism.highlightAll()}),(a,r)=>(g(),f(w,null,[t("h4",N,e(o(b)),1),j,y,R,t("pre",null,[t("code",T,e("  "+o(v).trim()),1)]),V,t("pre",null,[t("code",E,e("  "+o(C).trim()),1)]),L,t("pre",null,[t("code",k,e("  "+o(M).trim()),1)]),O,t("pre",null,[t("code",S,e("  "+o(x).trim()),1)])],64))}};export{Q as default};
