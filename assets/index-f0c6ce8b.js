import{F as x,a as S,V as w}from"./Vector-296c2e9e.js";import{a$ as b,bo as M,j as R,bp as v,bq as V,br as j,M as F,V as k}from"./Layer-5200258f.js";import{_ as q,i as I,o as L,c as T,b as i,t as h,g as p,F as E,p as O,k as P}from"./index-f7249d0d.js";import{a as A}from"./featureloader-ed474c2d.js";import{T as B}from"./Tile-aca76f7d.js";import{O as G}from"./OSM-7231e773.js";import"./Layer-a8143b89.js";import"./BaseTile-53865aab.js";import"./TileProperty-ab86017d.js";import"./TileLayer-7e43e564.js";import"./XYZ-7263712f.js";import"./TileImage-4a3fae9a.js";import"./UrlTile-d31c8ece.js";class g extends b{constructor(t,e,s){super(),s!==void 0&&e===void 0?this.setFlatCoordinates(s,t):(e=e||0,this.setCenterAndRadius(t,e,s))}clone(){const t=new g(this.flatCoordinates.slice(),void 0,this.layout);return t.applyProperties(this),t}closestPointXY(t,e,s,r){const o=this.flatCoordinates,c=t-o[0],d=e-o[1],a=c*c+d*d;if(a<r){if(a===0)for(let n=0;n<this.stride;++n)s[n]=o[n];else{const n=this.getRadius()/Math.sqrt(a);s[0]=o[0]+n*c,s[1]=o[1]+n*d;for(let l=2;l<this.stride;++l)s[l]=o[l]}return s.length=this.stride,a}return r}containsXY(t,e){const s=this.flatCoordinates,r=t-s[0],o=e-s[1];return r*r+o*o<=this.getRadiusSquared_()}getCenter(){return this.flatCoordinates.slice(0,this.stride)}computeExtent(t){const e=this.flatCoordinates,s=e[this.stride]-e[0];return M(e[0]-s,e[1]-s,e[0]+s,e[1]+s,t)}getRadius(){return Math.sqrt(this.getRadiusSquared_())}getRadiusSquared_(){const t=this.flatCoordinates[this.stride]-this.flatCoordinates[0],e=this.flatCoordinates[this.stride+1]-this.flatCoordinates[1];return t*t+e*e}getType(){return"Circle"}intersectsExtent(t){const e=this.getExtent();if(R(t,e)){const s=this.getCenter();return t[0]<=s[0]&&t[2]>=s[0]||t[1]<=s[1]&&t[3]>=s[1]?!0:v(t,this.intersectsCoordinate.bind(this))}return!1}setCenter(t){const e=this.stride,s=this.flatCoordinates[e]-this.flatCoordinates[0],r=t.slice();r[e]=r[0]+s;for(let o=1;o<e;++o)r[e+o]=t[o];this.setFlatCoordinates(this.layout,r),this.changed()}setCenterAndRadius(t,e,s){this.setLayout(s,t,0),this.flatCoordinates||(this.flatCoordinates=[]);const r=this.flatCoordinates;let o=V(r,0,t,this.stride);r[o++]=r[0]+e;for(let c=1,d=this.stride;c<d;++c)r[o++]=r[c];r.length=o,this.changed()}getCoordinates(){return null}setCoordinates(t,e){}setRadius(t){this.flatCoordinates[this.stride]=this.flatCoordinates[0]+t,this.changed()}rotate(t,e){const s=this.getCenter(),r=this.getStride();this.setCenter(j(s,0,s.length,r,t,e,s)),this.changed()}}g.prototype.transform;const z=g,D="Custom Circle Render",X=`
  <div id="map" class="map"></div>
`,Y=`
  .map {
    width: 100%;
    height: 400px;
  }
`,$=`
  import Feature from 'ol/Feature.js';
  import Map from 'ol/Map.js';
  import View from 'ol/View.js';
  import {Circle} from 'ol/geom.js';
  import {OSM, Vector as VectorSource} from 'ol/source.js';
  import {Style} from 'ol/style.js';
  import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';

  const circleFeature = new Feature({
    geometry: new Circle([12127398.797692968, 4063894.123105166], 50),
  });
  circleFeature.setStyle(
    new Style({
      renderer(coordinates, state) {
        const [[x, y], [x1, y1]] = coordinates;
        const ctx = state.context;
        const dx = x1 - x;
        const dy = y1 - y;
        const radius = Math.sqrt(dx * dx + dy * dy);

        const innerRadius = 0;
        const outerRadius = radius * 1.4;

        const gradient = ctx.createRadialGradient(
          x,
          y,
          innerRadius,
          x,
          y,
          outerRadius
        );
        gradient.addColorStop(0, 'rgba(255,0,0,0)');
        gradient.addColorStop(0.6, 'rgba(255,0,0,0.2)');
        gradient.addColorStop(1, 'rgba(255,0,0,0.8)');
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI, true);
        ctx.fillStyle = gradient;
        ctx.fill();

        ctx.arc(x, y, radius, 0, 2 * Math.PI, true);
        ctx.strokeStyle = 'rgba(255,0,0,1)';
        ctx.stroke();
      },
    })
  );

  new Map({
    layers: [
      new TileLayer({
        source: new OSM(),
        visible: true,
      }),
      new VectorLayer({
        source: new VectorSource({
          features: [circleFeature],
        }),
      }),
    ],
    target: 'map',
    view: new View({
      center: [12127398.797692968, 4063894.123105166],
      zoom: 19,
    }),
  });
`,N=`
  {
    "name": "custom-circle-render",
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
`;const u=f=>(O("data-v-e589eb79"),f=f(),P(),f),U={id:"title"},H=u(()=>i("div",{id:"map",class:"map"},null,-1)),J=u(()=>i("p",null,"This example demonstrates the use of 'ol/style/Style' render option function to render circle feature.",-1)),K=u(()=>i("h5",{class:"source-heading"},"html",-1)),Q={class:"language-html"},W=u(()=>i("h5",{class:"source-heading"},"css",-1)),Z={class:"language-css"},tt=u(()=>i("h5",{class:"source-heading"},"js",-1)),et={class:"language-js"},st=u(()=>i("h5",{class:"source-heading"},"package.json",-1)),rt={class:"language-json"},ot={__name:"index",setup(f){return I(()=>{const t=new x({geometry:new z([12127398797692968e-9,4063894123105166e-9],50)});t.setStyle(new A({renderer(e,s){const[[r,o],[c,d]]=e,a=s.context,n=c-r,l=d-o,_=Math.sqrt(n*n+l*l),y=0,C=_*1.4,m=a.createRadialGradient(r,o,y,r,o,C);m.addColorStop(0,"rgba(255,0,0,0)"),m.addColorStop(.6,"rgba(255,0,0,0.2)"),m.addColorStop(1,"rgba(255,0,0,0.8)"),a.beginPath(),a.arc(r,o,_,0,2*Math.PI,!0),a.fillStyle=m,a.fill(),a.arc(r,o,_,0,2*Math.PI,!0),a.strokeStyle="rgba(255,0,0,1)",a.stroke()}})),new F({layers:[new B({source:new G,visible:!0}),new S({source:new w({features:[t]})})],target:"map",view:new k({center:[12127398797692968e-9,4063894123105166e-9],zoom:19})}),Prism.highlightAll()}),(t,e)=>(L(),T(E,null,[i("h4",U,h(p(D)),1),H,J,K,i("pre",null,[i("code",Q,h("  "+p(X).trim()),1)]),W,i("pre",null,[i("code",Z,h("  "+p(Y).trim()),1)]),tt,i("pre",null,[i("code",et,h("  "+p($).trim()),1)]),st,i("pre",null,[i("code",rt,h("  "+p(N).trim()),1)])],64))}},yt=q(ot,[["__scopeId","data-v-e589eb79"]]);export{yt as default};
