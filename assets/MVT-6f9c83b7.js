import{F as N,t as R}from"./Feature-5468377f.js";import{i as M,L as G}from"./LineString-a90d5a4b.js";import{l as O,a as U,M as L}from"./MultiPolygon-5da1c9b7.js";import{M as X}from"./MultiPoint-32d892b1.js";import{g as j}from"./_commonjsHelpers-39b5b250.js";import{aT as A,aU as H,H as Y,aV as W,aW as $,q as z,g as D,a9 as B,ac as J,aX as K,aO as Q,w as Z,aY as q,a as b,P as tt}from"./Layer-763025a3.js";var m={};/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */m.read=function(t,e,i,r,s){var n,o,f=s*8-r-1,h=(1<<f)-1,u=h>>1,a=-7,l=i?s-1:0,c=i?-1:1,x=t[e+l];for(l+=c,n=x&(1<<-a)-1,x>>=-a,a+=f;a>0;n=n*256+t[e+l],l+=c,a-=8);for(o=n&(1<<-a)-1,n>>=-a,a+=r;a>0;o=o*256+t[e+l],l+=c,a-=8);if(n===0)n=1-u;else{if(n===h)return o?NaN:(x?-1:1)*(1/0);o=o+Math.pow(2,r),n=n-u}return(x?-1:1)*o*Math.pow(2,n-r)};m.write=function(t,e,i,r,s,n){var o,f,h,u=n*8-s-1,a=(1<<u)-1,l=a>>1,c=s===23?Math.pow(2,-24)-Math.pow(2,-77):0,x=r?0:n-1,F=r?1:-1,I=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(f=isNaN(e)?1:0,o=a):(o=Math.floor(Math.log(e)/Math.LN2),e*(h=Math.pow(2,-o))<1&&(o--,h*=2),o+l>=1?e+=c/h:e+=c*Math.pow(2,1-l),e*h>=2&&(o++,h/=2),o+l>=a?(f=0,o=a):o+l>=1?(f=(e*h-1)*Math.pow(2,s),o=o+l):(f=e*Math.pow(2,l-1)*Math.pow(2,s),o=0));s>=8;t[i+x]=f&255,x+=F,f/=256,s-=8);for(o=o<<s|f,u+=s;u>0;t[i+x]=o&255,x+=F,o/=256,u-=8);t[i+x-F]|=I*128};var et=d,_=m;function d(t){this.buf=ArrayBuffer.isView&&ArrayBuffer.isView(t)?t:new Uint8Array(t||0),this.pos=0,this.type=0,this.length=this.buf.length}d.Varint=0;d.Fixed64=1;d.Bytes=2;d.Fixed32=5;var V=65536*65536,v=1/V,it=12,E=typeof TextDecoder>"u"?null:new TextDecoder("utf8");d.prototype={destroy:function(){this.buf=null},readFields:function(t,e,i){for(i=i||this.length;this.pos<i;){var r=this.readVarint(),s=r>>3,n=this.pos;this.type=r&7,t(s,e,this),this.pos===n&&this.skip(r)}return e},readMessage:function(t,e){return this.readFields(t,e,this.readVarint()+this.pos)},readFixed32:function(){var t=P(this.buf,this.pos);return this.pos+=4,t},readSFixed32:function(){var t=S(this.buf,this.pos);return this.pos+=4,t},readFixed64:function(){var t=P(this.buf,this.pos)+P(this.buf,this.pos+4)*V;return this.pos+=8,t},readSFixed64:function(){var t=P(this.buf,this.pos)+S(this.buf,this.pos+4)*V;return this.pos+=8,t},readFloat:function(){var t=_.read(this.buf,this.pos,!0,23,4);return this.pos+=4,t},readDouble:function(){var t=_.read(this.buf,this.pos,!0,52,8);return this.pos+=8,t},readVarint:function(t){var e=this.buf,i,r;return r=e[this.pos++],i=r&127,r<128||(r=e[this.pos++],i|=(r&127)<<7,r<128)||(r=e[this.pos++],i|=(r&127)<<14,r<128)||(r=e[this.pos++],i|=(r&127)<<21,r<128)?i:(r=e[this.pos],i|=(r&15)<<28,rt(i,t,this))},readVarint64:function(){return this.readVarint(!0)},readSVarint:function(){var t=this.readVarint();return t%2===1?(t+1)/-2:t/2},readBoolean:function(){return!!this.readVarint()},readString:function(){var t=this.readVarint()+this.pos,e=this.pos;return this.pos=t,t-e>=it&&E?wt(this.buf,e,t):pt(this.buf,e,t)},readBytes:function(){var t=this.readVarint()+this.pos,e=this.buf.subarray(this.pos,t);return this.pos=t,e},readPackedVarint:function(t,e){if(this.type!==d.Bytes)return t.push(this.readVarint(e));var i=p(this);for(t=t||[];this.pos<i;)t.push(this.readVarint(e));return t},readPackedSVarint:function(t){if(this.type!==d.Bytes)return t.push(this.readSVarint());var e=p(this);for(t=t||[];this.pos<e;)t.push(this.readSVarint());return t},readPackedBoolean:function(t){if(this.type!==d.Bytes)return t.push(this.readBoolean());var e=p(this);for(t=t||[];this.pos<e;)t.push(this.readBoolean());return t},readPackedFloat:function(t){if(this.type!==d.Bytes)return t.push(this.readFloat());var e=p(this);for(t=t||[];this.pos<e;)t.push(this.readFloat());return t},readPackedDouble:function(t){if(this.type!==d.Bytes)return t.push(this.readDouble());var e=p(this);for(t=t||[];this.pos<e;)t.push(this.readDouble());return t},readPackedFixed32:function(t){if(this.type!==d.Bytes)return t.push(this.readFixed32());var e=p(this);for(t=t||[];this.pos<e;)t.push(this.readFixed32());return t},readPackedSFixed32:function(t){if(this.type!==d.Bytes)return t.push(this.readSFixed32());var e=p(this);for(t=t||[];this.pos<e;)t.push(this.readSFixed32());return t},readPackedFixed64:function(t){if(this.type!==d.Bytes)return t.push(this.readFixed64());var e=p(this);for(t=t||[];this.pos<e;)t.push(this.readFixed64());return t},readPackedSFixed64:function(t){if(this.type!==d.Bytes)return t.push(this.readSFixed64());var e=p(this);for(t=t||[];this.pos<e;)t.push(this.readSFixed64());return t},skip:function(t){var e=t&7;if(e===d.Varint)for(;this.buf[this.pos++]>127;);else if(e===d.Bytes)this.pos=this.readVarint()+this.pos;else if(e===d.Fixed32)this.pos+=4;else if(e===d.Fixed64)this.pos+=8;else throw new Error("Unimplemented type: "+e)},writeTag:function(t,e){this.writeVarint(t<<3|e)},realloc:function(t){for(var e=this.length||16;e<this.pos+t;)e*=2;if(e!==this.length){var i=new Uint8Array(e);i.set(this.buf),this.buf=i,this.length=e}},finish:function(){return this.length=this.pos,this.pos=0,this.buf.subarray(0,this.length)},writeFixed32:function(t){this.realloc(4),g(this.buf,t,this.pos),this.pos+=4},writeSFixed32:function(t){this.realloc(4),g(this.buf,t,this.pos),this.pos+=4},writeFixed64:function(t){this.realloc(8),g(this.buf,t&-1,this.pos),g(this.buf,Math.floor(t*v),this.pos+4),this.pos+=8},writeSFixed64:function(t){this.realloc(8),g(this.buf,t&-1,this.pos),g(this.buf,Math.floor(t*v),this.pos+4),this.pos+=8},writeVarint:function(t){if(t=+t||0,t>268435455||t<0){st(t,this);return}this.realloc(4),this.buf[this.pos++]=t&127|(t>127?128:0),!(t<=127)&&(this.buf[this.pos++]=(t>>>=7)&127|(t>127?128:0),!(t<=127)&&(this.buf[this.pos++]=(t>>>=7)&127|(t>127?128:0),!(t<=127)&&(this.buf[this.pos++]=t>>>7&127)))},writeSVarint:function(t){this.writeVarint(t<0?-t*2-1:t*2)},writeBoolean:function(t){this.writeVarint(!!t)},writeString:function(t){t=String(t),this.realloc(t.length*4),this.pos++;var e=this.pos;this.pos=gt(this.buf,t,this.pos);var i=this.pos-e;i>=128&&C(e,i,this),this.pos=e-1,this.writeVarint(i),this.pos+=i},writeFloat:function(t){this.realloc(4),_.write(this.buf,t,this.pos,!0,23,4),this.pos+=4},writeDouble:function(t){this.realloc(8),_.write(this.buf,t,this.pos,!0,52,8),this.pos+=8},writeBytes:function(t){var e=t.length;this.writeVarint(e),this.realloc(e);for(var i=0;i<e;i++)this.buf[this.pos++]=t[i]},writeRawMessage:function(t,e){this.pos++;var i=this.pos;t(e,this);var r=this.pos-i;r>=128&&C(i,r,this),this.pos=i-1,this.writeVarint(r),this.pos+=r},writeMessage:function(t,e,i){this.writeTag(t,d.Bytes),this.writeRawMessage(e,i)},writePackedVarint:function(t,e){e.length&&this.writeMessage(t,at,e)},writePackedSVarint:function(t,e){e.length&&this.writeMessage(t,ht,e)},writePackedBoolean:function(t,e){e.length&&this.writeMessage(t,ut,e)},writePackedFloat:function(t,e){e.length&&this.writeMessage(t,ft,e)},writePackedDouble:function(t,e){e.length&&this.writeMessage(t,dt,e)},writePackedFixed32:function(t,e){e.length&&this.writeMessage(t,lt,e)},writePackedSFixed32:function(t,e){e.length&&this.writeMessage(t,xt,e)},writePackedFixed64:function(t,e){e.length&&this.writeMessage(t,ct,e)},writePackedSFixed64:function(t,e){e.length&&this.writeMessage(t,Ft,e)},writeBytesField:function(t,e){this.writeTag(t,d.Bytes),this.writeBytes(e)},writeFixed32Field:function(t,e){this.writeTag(t,d.Fixed32),this.writeFixed32(e)},writeSFixed32Field:function(t,e){this.writeTag(t,d.Fixed32),this.writeSFixed32(e)},writeFixed64Field:function(t,e){this.writeTag(t,d.Fixed64),this.writeFixed64(e)},writeSFixed64Field:function(t,e){this.writeTag(t,d.Fixed64),this.writeSFixed64(e)},writeVarintField:function(t,e){this.writeTag(t,d.Varint),this.writeVarint(e)},writeSVarintField:function(t,e){this.writeTag(t,d.Varint),this.writeSVarint(e)},writeStringField:function(t,e){this.writeTag(t,d.Bytes),this.writeString(e)},writeFloatField:function(t,e){this.writeTag(t,d.Fixed32),this.writeFloat(e)},writeDoubleField:function(t,e){this.writeTag(t,d.Fixed64),this.writeDouble(e)},writeBooleanField:function(t,e){this.writeVarintField(t,!!e)}};function rt(t,e,i){var r=i.buf,s,n;if(n=r[i.pos++],s=(n&112)>>4,n<128||(n=r[i.pos++],s|=(n&127)<<3,n<128)||(n=r[i.pos++],s|=(n&127)<<10,n<128)||(n=r[i.pos++],s|=(n&127)<<17,n<128)||(n=r[i.pos++],s|=(n&127)<<24,n<128)||(n=r[i.pos++],s|=(n&1)<<31,n<128))return w(t,s,e);throw new Error("Expected varint not more than 10 bytes")}function p(t){return t.type===d.Bytes?t.readVarint()+t.pos:t.pos+1}function w(t,e,i){return i?e*4294967296+(t>>>0):(e>>>0)*4294967296+(t>>>0)}function st(t,e){var i,r;if(t>=0?(i=t%4294967296|0,r=t/4294967296|0):(i=~(-t%4294967296),r=~(-t/4294967296),i^4294967295?i=i+1|0:(i=0,r=r+1|0)),t>=18446744073709552e3||t<-18446744073709552e3)throw new Error("Given varint doesn't fit into 10 bytes");e.realloc(10),nt(i,r,e),ot(r,e)}function nt(t,e,i){i.buf[i.pos++]=t&127|128,t>>>=7,i.buf[i.pos++]=t&127|128,t>>>=7,i.buf[i.pos++]=t&127|128,t>>>=7,i.buf[i.pos++]=t&127|128,t>>>=7,i.buf[i.pos]=t&127}function ot(t,e){var i=(t&7)<<4;e.buf[e.pos++]|=i|((t>>>=3)?128:0),t&&(e.buf[e.pos++]=t&127|((t>>>=7)?128:0),t&&(e.buf[e.pos++]=t&127|((t>>>=7)?128:0),t&&(e.buf[e.pos++]=t&127|((t>>>=7)?128:0),t&&(e.buf[e.pos++]=t&127|((t>>>=7)?128:0),t&&(e.buf[e.pos++]=t&127)))))}function C(t,e,i){var r=e<=16383?1:e<=2097151?2:e<=268435455?3:Math.floor(Math.log(e)/(Math.LN2*7));i.realloc(r);for(var s=i.pos-1;s>=t;s--)i.buf[s+r]=i.buf[s]}function at(t,e){for(var i=0;i<t.length;i++)e.writeVarint(t[i])}function ht(t,e){for(var i=0;i<t.length;i++)e.writeSVarint(t[i])}function ft(t,e){for(var i=0;i<t.length;i++)e.writeFloat(t[i])}function dt(t,e){for(var i=0;i<t.length;i++)e.writeDouble(t[i])}function ut(t,e){for(var i=0;i<t.length;i++)e.writeBoolean(t[i])}function lt(t,e){for(var i=0;i<t.length;i++)e.writeFixed32(t[i])}function xt(t,e){for(var i=0;i<t.length;i++)e.writeSFixed32(t[i])}function ct(t,e){for(var i=0;i<t.length;i++)e.writeFixed64(t[i])}function Ft(t,e){for(var i=0;i<t.length;i++)e.writeSFixed64(t[i])}function P(t,e){return(t[e]|t[e+1]<<8|t[e+2]<<16)+t[e+3]*16777216}function g(t,e,i){t[i]=e,t[i+1]=e>>>8,t[i+2]=e>>>16,t[i+3]=e>>>24}function S(t,e){return(t[e]|t[e+1]<<8|t[e+2]<<16)+(t[e+3]<<24)}function pt(t,e,i){for(var r="",s=e;s<i;){var n=t[s],o=null,f=n>239?4:n>223?3:n>191?2:1;if(s+f>i)break;var h,u,a;f===1?n<128&&(o=n):f===2?(h=t[s+1],(h&192)===128&&(o=(n&31)<<6|h&63,o<=127&&(o=null))):f===3?(h=t[s+1],u=t[s+2],(h&192)===128&&(u&192)===128&&(o=(n&15)<<12|(h&63)<<6|u&63,(o<=2047||o>=55296&&o<=57343)&&(o=null))):f===4&&(h=t[s+1],u=t[s+2],a=t[s+3],(h&192)===128&&(u&192)===128&&(a&192)===128&&(o=(n&15)<<18|(h&63)<<12|(u&63)<<6|a&63,(o<=65535||o>=1114112)&&(o=null))),o===null?(o=65533,f=1):o>65535&&(o-=65536,r+=String.fromCharCode(o>>>10&1023|55296),o=56320|o&1023),r+=String.fromCharCode(o),s+=f}return r}function wt(t,e,i){return E.decode(t.subarray(e,i))}function gt(t,e,i){for(var r=0,s,n;r<e.length;r++){if(s=e.charCodeAt(r),s>55295&&s<57344)if(n)if(s<56320){t[i++]=239,t[i++]=191,t[i++]=189,n=s;continue}else s=n-55296<<10|s-56320|65536,n=null;else{s>56319||r+1===e.length?(t[i++]=239,t[i++]=191,t[i++]=189):n=s;continue}else n&&(t[i++]=239,t[i++]=191,t[i++]=189,n=null);s<128?t[i++]=s:(s<2048?t[i++]=s>>6|192:(s<65536?t[i++]=s>>12|224:(t[i++]=s>>18|240,t[i++]=s>>12&63|128),t[i++]=s>>6&63|128),t[i++]=s&63|128)}return i}const yt=j(et),k=Q();class y{constructor(e,i,r,s,n){this.styleFunction,this.extent_,this.id_=n,this.type_=e,this.flatCoordinates_=i,this.flatInteriorPoints_=null,this.flatMidpoints_=null,this.ends_=r,this.properties_=s}get(e){return this.properties_[e]}getExtent(){return this.extent_||(this.extent_=this.type_==="Point"?A(this.flatCoordinates_):H(this.flatCoordinates_,0,this.flatCoordinates_.length,2)),this.extent_}getFlatInteriorPoint(){if(!this.flatInteriorPoints_){const e=Y(this.getExtent());this.flatInteriorPoints_=W(this.flatCoordinates_,0,this.ends_,2,e,0)}return this.flatInteriorPoints_}getFlatInteriorPoints(){if(!this.flatInteriorPoints_){const e=O(this.flatCoordinates_,0,this.ends_,2);this.flatInteriorPoints_=$(this.flatCoordinates_,0,this.ends_,2,e)}return this.flatInteriorPoints_}getFlatMidpoint(){return this.flatMidpoints_||(this.flatMidpoints_=M(this.flatCoordinates_,0,this.flatCoordinates_.length,2,.5)),this.flatMidpoints_}getFlatMidpoints(){if(!this.flatMidpoints_){this.flatMidpoints_=[];const e=this.flatCoordinates_;let i=0;const r=this.ends_;for(let s=0,n=r.length;s<n;++s){const o=r[s],f=M(e,i,o,2,.5);z(this.flatMidpoints_,f),i=o}}return this.flatMidpoints_}getId(){return this.id_}getOrientedFlatCoordinates(){return this.flatCoordinates_}getGeometry(){return this}getSimplifiedGeometry(e){return this}simplifyTransformed(e,i){return this}getProperties(){return this.properties_}getPropertiesInternal(){return this.properties_}getStride(){return 2}getStyleFunction(){return this.styleFunction}getType(){return this.type_}transform(e){e=D(e);const i=e.getExtent(),r=e.getWorldExtent();if(i&&r){const s=B(r)/B(i);J(k,r[0],r[3],s,-s,0,0,0),K(this.flatCoordinates_,0,this.flatCoordinates_.length,2,k,this.flatCoordinates_)}}getEnds(){return this.ends_}}y.prototype.getEndss=y.prototype.getEnds;y.prototype.getFlatCoordinates=y.prototype.getOrientedFlatCoordinates;const T=y;class _t extends N{constructor(e){super(),e=e||{},this.dataProjection=new Z({code:"",units:"tile-pixels"}),this.featureClass_=e.featureClass?e.featureClass:T,this.geometryName_=e.geometryName,this.layerName_=e.layerName?e.layerName:"layer",this.layers_=e.layers?e.layers:null,this.idProperty_=e.idProperty,this.supportedMediaTypes=["application/vnd.mapbox-vector-tile","application/x-protobuf"]}readRawGeometry_(e,i,r,s){e.pos=i.geometry;const n=e.readVarint()+e.pos;let o=1,f=0,h=0,u=0,a=0,l=0;for(;e.pos<n;){if(!f){const c=e.readVarint();o=c&7,f=c>>3}if(f--,o===1||o===2)h+=e.readSVarint(),u+=e.readSVarint(),o===1&&a>l&&(s.push(a),l=a),r.push(h,u),a+=2;else if(o===7)a>l&&(r.push(r[l],r[l+1]),a+=2);else throw new Error("Invalid command found in the PBF")}a>l&&(s.push(a),l=a)}createFeature_(e,i,r){const s=i.type;if(s===0)return null;let n;const o=i.properties;let f;this.idProperty_?(f=o[this.idProperty_],delete o[this.idProperty_]):f=i.id,o[this.layerName_]=i.layer.name;const h=[],u=[];this.readRawGeometry_(e,i,h,u);const a=Bt(s,u.length);if(this.featureClass_===T)n=new this.featureClass_(a,h,u,o,f),n.transform(r.dataProjection);else{let l;if(a=="Polygon"){const F=q(h,u);l=F.length>1?new U(h,"XY",F):new b(h,"XY",u)}else l=a==="Point"?new tt(h,"XY"):a==="LineString"?new G(h,"XY"):a==="MultiPoint"?new X(h,"XY"):a==="MultiLineString"?new L(h,"XY",u):null;const c=this.featureClass_;n=new c,this.geometryName_&&n.setGeometryName(this.geometryName_);const x=R(l,!1,r);n.setGeometry(x),f!==void 0&&n.setId(f),n.setProperties(o,!0)}return n}getType(){return"arraybuffer"}readFeatures(e,i){const r=this.layers_;i=this.adaptOptions(i);const s=D(i.dataProjection);s.setWorldExtent(i.extent),i.dataProjection=s;const n=new yt(e),o=n.readFields(Pt,{}),f=[];for(const h in o){if(r&&!r.includes(h))continue;const u=o[h],a=u?[0,0,u.extent,u.extent]:null;s.setExtent(a);for(let l=0,c=u.length;l<c;++l){const x=Mt(n,u,l),F=this.createFeature_(n,x,i);F!==null&&f.push(F)}}return f}readProjection(e){return this.dataProjection}setLayers(e){this.layers_=e}}function Pt(t,e,i){if(t===3){const r={keys:[],values:[],features:[]},s=i.readVarint()+i.pos;i.readFields(Vt,r,s),r.length=r.features.length,r.length&&(e[r.name]=r)}}function Vt(t,e,i){if(t===15)e.version=i.readVarint();else if(t===1)e.name=i.readString();else if(t===5)e.extent=i.readVarint();else if(t===2)e.features.push(i.pos);else if(t===3)e.keys.push(i.readString());else if(t===4){let r=null;const s=i.readVarint()+i.pos;for(;i.pos<s;)t=i.readVarint()>>3,r=t===1?i.readString():t===2?i.readFloat():t===3?i.readDouble():t===4?i.readVarint64():t===5?i.readVarint():t===6?i.readSVarint():t===7?i.readBoolean():null;e.values.push(r)}}function mt(t,e,i){if(t==1)e.id=i.readVarint();else if(t==2){const r=i.readVarint()+i.pos;for(;i.pos<r;){const s=e.layer.keys[i.readVarint()],n=e.layer.values[i.readVarint()];e.properties[s]=n}}else t==3?e.type=i.readVarint():t==4&&(e.geometry=i.pos)}function Mt(t,e,i){t.pos=e.features[i];const r=t.readVarint()+t.pos,s={layer:e,type:0,properties:{}};return t.readFields(mt,s,r),s}function Bt(t,e){let i;return t===1?i=e===1?"Point":"MultiPoint":t===2?i=e===1?"LineString":"MultiLineString":t===3&&(i="Polygon"),i}const Et=_t;export{Et as M,T as R};
