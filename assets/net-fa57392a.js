import{a3 as p}from"./Layer-3b715193.js";function E(n,e,s,a){const r=document.createElement("script"),t="olc_"+p(e);function i(){delete window[t],r.parentNode.removeChild(r)}r.async=!0,r.src=n+(n.includes("?")?"&":"?")+(a||"callback")+"="+t;const o=setTimeout(function(){i(),s&&s()},1e4);window[t]=function(c){clearTimeout(o),i(),e(c)},document.head.appendChild(r)}class l extends Error{constructor(e){const s="Unexpected response status: "+e.status;super(s),this.name="ResponseError",this.response=e}}class m extends Error{constructor(e){super("Failed to issue request"),this.name="ClientError",this.client=e}}function w(n){return new Promise(function(e,s){function a(i){const o=i.target;if(!o.status||o.status>=200&&o.status<300){let c;try{c=JSON.parse(o.responseText)}catch(u){const d="Error parsing response text as JSON: "+u.message;s(new Error(d));return}e(c);return}s(new l(o))}function r(i){s(new m(i.target))}const t=new XMLHttpRequest;t.addEventListener("load",a),t.addEventListener("error",r),t.open("GET",n),t.setRequestHeader("Accept","application/json"),t.send()})}function g(n,e){return e.includes("://")?e:new URL(e,n).href}export{w as g,E as j,g as r};
