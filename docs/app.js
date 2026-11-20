var mi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},gi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Gc=0,vl=1,Wc=2;var xl=1,Xc=2,Un=3,Jn=0,an=1,Nn=2,jn=0,Ni=1,yl=2,Ml=3,Sl=4,qc=5,ui=100,$c=101,Yc=102,Zc=103,Jc=104,Kc=200,jc=201,Qc=202,th=203,no=204,io=205,eh=206,nh=207,ih=208,rh=209,sh=210,oh=211,ah=212,lh=213,ch=214,Co=0,Ro=1,Po=2,Fi=3,Io=4,Do=5,Lo=6,Uo=7,bl=0,hh=1,uh=2,Qn=0,dh=1,fh=2,ph=3,mh=4,gh=5,_h=6,vh=7;var El=300,Xi=301,qi=302,No=303,Fo=304,ms=306,ro=1e3,hi=1001,so=1002,xn=1003,xh=1004;var gs=1005;var wn=1006,Oo=1007;var _i=1008;var Rn=1009,Tl=1010,wl=1011,wr=1012,Bo=1013,vi=1014,Fn=1015,Ar=1016,zo=1017,ko=1018,Cr=1020,Al=35902,Cl=35899,Rl=1021,Pl=1022,Mn=1023,_r=1026,Rr=1027,Il=1028,Vo=1029,Dl=1030,Ho=1031;var Go=1033,_s=33776,vs=33777,xs=33778,ys=33779,Wo=35840,Xo=35841,qo=35842,$o=35843,Yo=36196,Zo=37492,Jo=37496,Ko=37808,jo=37809,Qo=37810,ta=37811,ea=37812,na=37813,ia=37814,ra=37815,sa=37816,oa=37817,aa=37818,la=37819,ca=37820,ha=37821,ua=36492,da=36494,fa=36495,pa=36283,ma=36284,ga=36285,_a=36286;var Yr=2300,oo=2301,eo=2302,hl=2400,ul=2401,dl=2402;var yh=3200,Mh=3201;var Ll=0,Sh=1,ti="",fn="srgb",Oi="srgb-linear",Zr="linear",Se="srgb";var Ui=7680;var fl=519,bh=512,Eh=513,Th=514,Ul=515,wh=516,Ah=517,Ch=518,Rh=519,pl=35044;var Nl="300 es",Tn=2e3,Jr=2001;var In=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let r=n[t];if(r!==void 0){let s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}},Je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xc=1234567,mr=Math.PI/180,vr=180/Math.PI;function Pr(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Je[i&255]+Je[i>>8&255]+Je[i>>16&255]+Je[i>>24&255]+"-"+Je[t&255]+Je[t>>8&255]+"-"+Je[t>>16&15|64]+Je[t>>24&255]+"-"+Je[e&63|128]+Je[e>>8&255]+"-"+Je[e>>16&255]+Je[e>>24&255]+Je[n&255]+Je[n>>8&255]+Je[n>>16&255]+Je[n>>24&255]).toLowerCase()}function he(i,t,e){return Math.max(t,Math.min(e,i))}function Fl(i,t){return(i%t+t)%t}function Dd(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function Ld(i,t,e){return i!==t?(e-i)/(t-i):0}function $r(i,t,e){return(1-e)*i+e*t}function Ud(i,t,e,n){return $r(i,t,1-Math.exp(-e*n))}function Nd(i,t=1){return t-Math.abs(Fl(i,t*2)-t)}function Fd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Od(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Bd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function zd(i,t){return i+Math.random()*(t-i)}function kd(i){return i*(.5-Math.random())}function Vd(i){i!==void 0&&(xc=i);let t=xc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Hd(i){return i*mr}function Gd(i){return i*vr}function Wd(i){return(i&i-1)===0&&i!==0}function Xd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function qd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function $d(i,t,e,n,r){let s=Math.cos,o=Math.sin,a=s(e/2),c=o(e/2),l=s((t+n)/2),h=o((t+n)/2),f=s((t-n)/2),m=o((t-n)/2),g=s((n-t)/2),v=o((n-t)/2);switch(r){case"XYX":i.set(a*h,c*f,c*m,a*l);break;case"YZY":i.set(c*m,a*h,c*f,a*l);break;case"ZXZ":i.set(c*f,c*m,a*h,a*l);break;case"XZX":i.set(a*h,c*v,c*g,a*l);break;case"YXY":i.set(c*g,a*h,c*v,a*l);break;case"ZYZ":i.set(c*v,c*g,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function pr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function on(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ms={DEG2RAD:mr,RAD2DEG:vr,generateUUID:Pr,clamp:he,euclideanModulo:Fl,mapLinear:Dd,inverseLerp:Ld,lerp:$r,damp:Ud,pingpong:Nd,smoothstep:Fd,smootherstep:Od,randInt:Bd,randFloat:zd,randFloatSpread:kd,seededRandom:Vd,degToRad:Hd,radToDeg:Gd,isPowerOfTwo:Wd,ceilPowerOfTwo:Xd,floorPowerOfTwo:qd,setQuaternionFromProperEuler:$d,normalize:on,denormalize:pr},ee=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(he(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(he(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},yn=class{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let c=n[r+0],l=n[r+1],h=n[r+2],f=n[r+3],m=s[o+0],g=s[o+1],v=s[o+2],y=s[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f;return}if(a===1){t[e+0]=m,t[e+1]=g,t[e+2]=v,t[e+3]=y;return}if(f!==y||c!==m||l!==g||h!==v){let _=1-a,p=c*m+l*g+h*v+f*y,I=p>=0?1:-1,R=1-p*p;if(R>Number.EPSILON){let U=Math.sqrt(R),L=Math.atan2(U,p*I);_=Math.sin(_*L)/U,a=Math.sin(a*L)/U}let T=a*I;if(c=c*_+m*T,l=l*_+g*T,h=h*_+v*T,f=f*_+y*T,_===1-a){let U=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=U,l*=U,h*=U,f*=U}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,r,s,o){let a=n[r],c=n[r+1],l=n[r+2],h=n[r+3],f=s[o],m=s[o+1],g=s[o+2],v=s[o+3];return t[e]=a*v+h*f+c*g-l*m,t[e+1]=c*v+h*m+l*f-a*g,t[e+2]=l*v+h*g+a*m-c*f,t[e+3]=h*v-a*f-c*m-l*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(r/2),f=a(s/2),m=c(n/2),g=c(r/2),v=c(s/2);switch(o){case"XYZ":this._x=m*h*f+l*g*v,this._y=l*g*f-m*h*v,this._z=l*h*v+m*g*f,this._w=l*h*f-m*g*v;break;case"YXZ":this._x=m*h*f+l*g*v,this._y=l*g*f-m*h*v,this._z=l*h*v-m*g*f,this._w=l*h*f+m*g*v;break;case"ZXY":this._x=m*h*f-l*g*v,this._y=l*g*f+m*h*v,this._z=l*h*v+m*g*f,this._w=l*h*f-m*g*v;break;case"ZYX":this._x=m*h*f-l*g*v,this._y=l*g*f+m*h*v,this._z=l*h*v-m*g*f,this._w=l*h*f+m*g*v;break;case"YZX":this._x=m*h*f+l*g*v,this._y=l*g*f+m*h*v,this._z=l*h*v-m*g*f,this._w=l*h*f-m*g*v;break;case"XZY":this._x=m*h*f-l*g*v,this._y=l*g*f-m*h*v,this._z=l*h*v+m*g*f,this._w=l*h*f+m*g*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],f=e[10],m=n+a+f;if(m>0){let g=.5/Math.sqrt(m+1);this._w=.25/g,this._x=(h-c)*g,this._y=(s-l)*g,this._z=(o-r)*g}else if(n>a&&n>f){let g=2*Math.sqrt(1+n-a-f);this._w=(h-c)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+l)/g}else if(a>f){let g=2*Math.sqrt(1+a-n-f);this._w=(s-l)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(c+h)/g}else{let g=2*Math.sqrt(1+f-n-a);this._w=(o-r)/g,this._x=(s+l)/g,this._y=(c+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(he(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+r*l-s*c,this._y=r*h+o*c+s*a-n*l,this._z=s*h+o*l+n*c-r*a,this._w=o*h-n*a-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,r=this._y,s=this._z,o=this._w,a=o*t._w+n*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let g=1-e;return this._w=g*o+e*this._w,this._x=g*n+e*this._x,this._y=g*r+e*this._y,this._z=g*s+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),f=Math.sin((1-e)*h)/l,m=Math.sin(e*h)/l;return this._w=o*f+this._w*m,this._x=n*f+this._x*m,this._y=r*f+this._y*m,this._z=s*f+this._z*m,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},W=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(yc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(yc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*r-a*n),h=2*(a*e-s*r),f=2*(s*n-o*e);return this.x=e+c*l+o*f-a*h,this.y=n+c*h+a*l-s*f,this.z=r+c*f+s*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this.z=he(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this.z=he(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(he(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ka.copy(this).projectOnVector(t),this.sub(ka)}reflect(t){return this.sub(ka.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(he(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ka=new W,yc=new yn,re=class i{constructor(t,e,n,r,s,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,c,l)}set(t,e,n,r,s,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=r,h[2]=a,h[3]=e,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],f=n[7],m=n[2],g=n[5],v=n[8],y=r[0],_=r[3],p=r[6],I=r[1],R=r[4],T=r[7],U=r[2],L=r[5],F=r[8];return s[0]=o*y+a*I+c*U,s[3]=o*_+a*R+c*L,s[6]=o*p+a*T+c*F,s[1]=l*y+h*I+f*U,s[4]=l*_+h*R+f*L,s[7]=l*p+h*T+f*F,s[2]=m*y+g*I+v*U,s[5]=m*_+g*R+v*L,s[8]=m*p+g*T+v*F,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*s*h+n*a*c+r*s*l-r*o*c}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],f=h*o-a*l,m=a*c-h*s,g=l*s-o*c,v=e*f+n*m+r*g;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/v;return t[0]=f*y,t[1]=(r*l-h*n)*y,t[2]=(a*n-r*o)*y,t[3]=m*y,t[4]=(h*e-r*c)*y,t[5]=(r*s-a*e)*y,t[6]=g*y,t[7]=(n*c-l*e)*y,t[8]=(o*e-n*s)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-r*l,r*c,-r*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Va.makeScale(t,e)),this}rotate(t){return this.premultiply(Va.makeRotation(-t)),this}translate(t,e){return this.premultiply(Va.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Va=new re;function Ol(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Kr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ph(){let i=Kr("canvas");return i.style.display="block",i}var Mc={};function xr(i){i in Mc||(Mc[i]=!0,console.warn(i))}function Ih(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}var Sc=new re().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bc=new re().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Yd(){let i={enabled:!0,workingColorSpace:Oi,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Se&&(r.r=Zn(r.r),r.g=Zn(r.g),r.b=Zn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Se&&(r.r=gr(r.r),r.g=gr(r.g),r.b=gr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ti?Zr:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return xr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return xr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Oi]:{primaries:t,whitePoint:n,transfer:Zr,toXYZ:Sc,fromXYZ:bc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:fn},outputColorSpaceConfig:{drawingBufferColorSpace:fn}},[fn]:{primaries:t,whitePoint:n,transfer:Se,toXYZ:Sc,fromXYZ:bc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:fn}}}),i}var me=Yd();function Zn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function gr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var nr,ao=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{nr===void 0&&(nr=Kr("canvas")),nr.width=t.width,nr.height=t.height;let r=nr.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=nr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Kr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Zn(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Zn(e[n]/255)*255):e[n]=Zn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Zd=0,yr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=Pr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ha(r[o].image)):s.push(Ha(r[o]))}else s=Ha(r);n.url=s}return e||(t.images[this.uuid]=n),n}};function Ha(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ao.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Jd=0,Ga=new W,pn=class i extends In{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=hi,r=hi,s=wn,o=_i,a=Mn,c=Rn,l=i.DEFAULT_ANISOTROPY,h=ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=Pr(),this.name="",this.source=new yr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ee(0,0),this.repeat=new ee(1,1),this.center=new ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ga).x}get height(){return this.source.getSize(Ga).y}get depth(){return this.source.getSize(Ga).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==El)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ro:t.x=t.x-Math.floor(t.x);break;case hi:t.x=t.x<0?0:1;break;case so:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ro:t.y=t.y-Math.floor(t.y);break;case hi:t.y=t.y<0?0:1;break;case so:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=El;pn.DEFAULT_ANISOTROPY=1;var Ne=class i{constructor(t=0,e=0,n=0,r=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s,c=t.elements,l=c[0],h=c[4],f=c[8],m=c[1],g=c[5],v=c[9],y=c[2],_=c[6],p=c[10];if(Math.abs(h-m)<.01&&Math.abs(f-y)<.01&&Math.abs(v-_)<.01){if(Math.abs(h+m)<.1&&Math.abs(f+y)<.1&&Math.abs(v+_)<.1&&Math.abs(l+g+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let R=(l+1)/2,T=(g+1)/2,U=(p+1)/2,L=(h+m)/4,F=(f+y)/4,z=(v+_)/4;return R>T&&R>U?R<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(R),r=L/n,s=F/n):T>U?T<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),n=L/r,s=z/r):U<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(U),n=F/s,r=z/s),this.set(n,r,s,e),this}let I=Math.sqrt((_-v)*(_-v)+(f-y)*(f-y)+(m-h)*(m-h));return Math.abs(I)<.001&&(I=1),this.x=(_-v)/I,this.y=(f-y)/I,this.z=(m-h)/I,this.w=Math.acos((l+g+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this.z=he(this.z,t.z,e.z),this.w=he(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this.z=he(this.z,t,e),this.w=he(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(he(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},lo=class extends In{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ne(0,0,t,e),this.scissorTest=!1,this.viewport=new Ne(0,0,t,e);let r={width:t,height:e,depth:n.depth},s=new pn(r);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:wn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let r=Object.assign({},t.textures[e].image);this.textures[e].source=new yr(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Dn=class extends lo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},jr=class extends pn{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=xn,this.minFilter=xn,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var co=class extends pn{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=xn,this.minFilter=xn,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ln=class{constructor(t=new W(1/0,1/0,1/0),e=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Sn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Sn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Sn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Sn):Sn.fromBufferAttribute(s,o),Sn.applyMatrix4(t.matrixWorld),this.expandByPoint(Sn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ds.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ds.copy(n.boundingBox)),Ds.applyMatrix4(t.matrixWorld),this.union(Ds)}let r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Sn),Sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Hr),Ls.subVectors(this.max,Hr),ir.subVectors(t.a,Hr),rr.subVectors(t.b,Hr),sr.subVectors(t.c,Hr),ri.subVectors(rr,ir),si.subVectors(sr,rr),Pi.subVectors(ir,sr);let e=[0,-ri.z,ri.y,0,-si.z,si.y,0,-Pi.z,Pi.y,ri.z,0,-ri.x,si.z,0,-si.x,Pi.z,0,-Pi.x,-ri.y,ri.x,0,-si.y,si.x,0,-Pi.y,Pi.x,0];return!Wa(e,ir,rr,sr,Ls)||(e=[1,0,0,0,1,0,0,0,1],!Wa(e,ir,rr,sr,Ls))?!1:(Us.crossVectors(ri,si),e=[Us.x,Us.y,Us.z],Wa(e,ir,rr,sr,Ls))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Sn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Sn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Hn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Hn=[new W,new W,new W,new W,new W,new W,new W,new W],Sn=new W,Ds=new Ln,ir=new W,rr=new W,sr=new W,ri=new W,si=new W,Pi=new W,Hr=new W,Ls=new W,Us=new W,Ii=new W;function Wa(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Ii.fromArray(i,s);let a=r.x*Math.abs(Ii.x)+r.y*Math.abs(Ii.y)+r.z*Math.abs(Ii.z),c=t.dot(Ii),l=e.dot(Ii),h=n.dot(Ii);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Kd=new Ln,Gr=new W,Xa=new W,Bi=class{constructor(t=new W,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Kd.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Gr.subVectors(t,this.center);let e=Gr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Gr,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Xa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Gr.copy(t.center).add(Xa)),this.expandByPoint(Gr.copy(t.center).sub(Xa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Gn=new W,qa=new W,Ns=new W,oi=new W,$a=new W,Fs=new W,Ya=new W,zi=class{constructor(t=new W,e=new W(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Gn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Gn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Gn.copy(this.origin).addScaledVector(this.direction,e),Gn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){qa.copy(t).add(e).multiplyScalar(.5),Ns.copy(e).sub(t).normalize(),oi.copy(this.origin).sub(qa);let s=t.distanceTo(e)*.5,o=-this.direction.dot(Ns),a=oi.dot(this.direction),c=-oi.dot(Ns),l=oi.lengthSq(),h=Math.abs(1-o*o),f,m,g,v;if(h>0)if(f=o*c-a,m=o*a-c,v=s*h,f>=0)if(m>=-v)if(m<=v){let y=1/h;f*=y,m*=y,g=f*(f+o*m+2*a)+m*(o*f+m+2*c)+l}else m=s,f=Math.max(0,-(o*m+a)),g=-f*f+m*(m+2*c)+l;else m=-s,f=Math.max(0,-(o*m+a)),g=-f*f+m*(m+2*c)+l;else m<=-v?(f=Math.max(0,-(-o*s+a)),m=f>0?-s:Math.min(Math.max(-s,-c),s),g=-f*f+m*(m+2*c)+l):m<=v?(f=0,m=Math.min(Math.max(-s,-c),s),g=m*(m+2*c)+l):(f=Math.max(0,-(o*s+a)),m=f>0?s:Math.min(Math.max(-s,-c),s),g=-f*f+m*(m+2*c)+l);else m=o>0?-s:s,f=Math.max(0,-(o*m+a)),g=-f*f+m*(m+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(qa).addScaledVector(Ns,m),g}intersectSphere(t,e){Gn.subVectors(t.center,this.origin);let n=Gn.dot(this.direction),r=Gn.dot(Gn)-n*n,s=t.radius*t.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,c,l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,m=this.origin;return l>=0?(n=(t.min.x-m.x)*l,r=(t.max.x-m.x)*l):(n=(t.max.x-m.x)*l,r=(t.min.x-m.x)*l),h>=0?(s=(t.min.y-m.y)*h,o=(t.max.y-m.y)*h):(s=(t.max.y-m.y)*h,o=(t.min.y-m.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(t.min.z-m.z)*f,c=(t.max.z-m.z)*f):(a=(t.max.z-m.z)*f,c=(t.min.z-m.z)*f),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Gn)!==null}intersectTriangle(t,e,n,r,s){$a.subVectors(e,t),Fs.subVectors(n,t),Ya.crossVectors($a,Fs);let o=this.direction.dot(Ya),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;oi.subVectors(this.origin,t);let c=a*this.direction.dot(Fs.crossVectors(oi,Fs));if(c<0)return null;let l=a*this.direction.dot($a.cross(oi));if(l<0||c+l>o)return null;let h=-a*oi.dot(Ya);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Oe=class i{constructor(t,e,n,r,s,o,a,c,l,h,f,m,g,v,y,_){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,c,l,h,f,m,g,v,y,_)}set(t,e,n,r,s,o,a,c,l,h,f,m,g,v,y,_){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=f,p[14]=m,p[3]=g,p[7]=v,p[11]=y,p[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,r=1/or.setFromMatrixColumn(t,0).length(),s=1/or.setFromMatrixColumn(t,1).length(),o=1/or.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){let m=o*h,g=o*f,v=a*h,y=a*f;e[0]=c*h,e[4]=-c*f,e[8]=l,e[1]=g+v*l,e[5]=m-y*l,e[9]=-a*c,e[2]=y-m*l,e[6]=v+g*l,e[10]=o*c}else if(t.order==="YXZ"){let m=c*h,g=c*f,v=l*h,y=l*f;e[0]=m+y*a,e[4]=v*a-g,e[8]=o*l,e[1]=o*f,e[5]=o*h,e[9]=-a,e[2]=g*a-v,e[6]=y+m*a,e[10]=o*c}else if(t.order==="ZXY"){let m=c*h,g=c*f,v=l*h,y=l*f;e[0]=m-y*a,e[4]=-o*f,e[8]=v+g*a,e[1]=g+v*a,e[5]=o*h,e[9]=y-m*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let m=o*h,g=o*f,v=a*h,y=a*f;e[0]=c*h,e[4]=v*l-g,e[8]=m*l+y,e[1]=c*f,e[5]=y*l+m,e[9]=g*l-v,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let m=o*c,g=o*l,v=a*c,y=a*l;e[0]=c*h,e[4]=y-m*f,e[8]=v*f+g,e[1]=f,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=g*f+v,e[10]=m-y*f}else if(t.order==="XZY"){let m=o*c,g=o*l,v=a*c,y=a*l;e[0]=c*h,e[4]=-f,e[8]=l*h,e[1]=m*f+y,e[5]=o*h,e[9]=g*f-v,e[2]=v*f-g,e[6]=a*h,e[10]=y*f+m}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(jd,t,Qd)}lookAt(t,e,n){let r=this.elements;return un.subVectors(t,e),un.lengthSq()===0&&(un.z=1),un.normalize(),ai.crossVectors(n,un),ai.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),ai.crossVectors(n,un)),ai.normalize(),Os.crossVectors(un,ai),r[0]=ai.x,r[4]=Os.x,r[8]=un.x,r[1]=ai.y,r[5]=Os.y,r[9]=un.y,r[2]=ai.z,r[6]=Os.z,r[10]=un.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],f=n[5],m=n[9],g=n[13],v=n[2],y=n[6],_=n[10],p=n[14],I=n[3],R=n[7],T=n[11],U=n[15],L=r[0],F=r[4],z=r[8],b=r[12],E=r[1],N=r[5],q=r[9],Y=r[13],tt=r[2],rt=r[6],et=r[10],_t=r[14],j=r[3],bt=r[7],Ct=r[11],Gt=r[15];return s[0]=o*L+a*E+c*tt+l*j,s[4]=o*F+a*N+c*rt+l*bt,s[8]=o*z+a*q+c*et+l*Ct,s[12]=o*b+a*Y+c*_t+l*Gt,s[1]=h*L+f*E+m*tt+g*j,s[5]=h*F+f*N+m*rt+g*bt,s[9]=h*z+f*q+m*et+g*Ct,s[13]=h*b+f*Y+m*_t+g*Gt,s[2]=v*L+y*E+_*tt+p*j,s[6]=v*F+y*N+_*rt+p*bt,s[10]=v*z+y*q+_*et+p*Ct,s[14]=v*b+y*Y+_*_t+p*Gt,s[3]=I*L+R*E+T*tt+U*j,s[7]=I*F+R*N+T*rt+U*bt,s[11]=I*z+R*q+T*et+U*Ct,s[15]=I*b+R*Y+T*_t+U*Gt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],f=t[6],m=t[10],g=t[14],v=t[3],y=t[7],_=t[11],p=t[15];return v*(+s*c*f-r*l*f-s*a*m+n*l*m+r*a*g-n*c*g)+y*(+e*c*g-e*l*m+s*o*m-r*o*g+r*l*h-s*c*h)+_*(+e*l*f-e*a*g-s*o*f+n*o*g+s*a*h-n*l*h)+p*(-r*a*h-e*c*f+e*a*m+r*o*f-n*o*m+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],f=t[9],m=t[10],g=t[11],v=t[12],y=t[13],_=t[14],p=t[15],I=f*_*l-y*m*l+y*c*g-a*_*g-f*c*p+a*m*p,R=v*m*l-h*_*l-v*c*g+o*_*g+h*c*p-o*m*p,T=h*y*l-v*f*l+v*a*g-o*y*g-h*a*p+o*f*p,U=v*f*c-h*y*c-v*a*m+o*y*m+h*a*_-o*f*_,L=e*I+n*R+r*T+s*U;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/L;return t[0]=I*F,t[1]=(y*m*s-f*_*s-y*r*g+n*_*g+f*r*p-n*m*p)*F,t[2]=(a*_*s-y*c*s+y*r*l-n*_*l-a*r*p+n*c*p)*F,t[3]=(f*c*s-a*m*s-f*r*l+n*m*l+a*r*g-n*c*g)*F,t[4]=R*F,t[5]=(h*_*s-v*m*s+v*r*g-e*_*g-h*r*p+e*m*p)*F,t[6]=(v*c*s-o*_*s-v*r*l+e*_*l+o*r*p-e*c*p)*F,t[7]=(o*m*s-h*c*s+h*r*l-e*m*l-o*r*g+e*c*g)*F,t[8]=T*F,t[9]=(v*f*s-h*y*s-v*n*g+e*y*g+h*n*p-e*f*p)*F,t[10]=(o*y*s-v*a*s+v*n*l-e*y*l-o*n*p+e*a*p)*F,t[11]=(h*a*s-o*f*s-h*n*l+e*f*l+o*n*g-e*a*g)*F,t[12]=U*F,t[13]=(h*y*r-v*f*r+v*n*m-e*y*m-h*n*_+e*f*_)*F,t[14]=(v*a*r-o*y*r-v*n*c+e*y*c+o*n*_-e*a*_)*F,t[15]=(o*f*r-h*a*r+h*n*c-e*f*c-o*n*m+e*a*m)*F,this}scale(t){let e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,c=t.z,l=s*o,h=s*a;return this.set(l*o+n,l*a-r*c,l*c+r*a,0,l*a+r*c,h*a+n,h*c-r*o,0,l*c-r*a,h*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){let r=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,h=o+o,f=a+a,m=s*l,g=s*h,v=s*f,y=o*h,_=o*f,p=a*f,I=c*l,R=c*h,T=c*f,U=n.x,L=n.y,F=n.z;return r[0]=(1-(y+p))*U,r[1]=(g+T)*U,r[2]=(v-R)*U,r[3]=0,r[4]=(g-T)*L,r[5]=(1-(m+p))*L,r[6]=(_+I)*L,r[7]=0,r[8]=(v+R)*F,r[9]=(_-I)*F,r[10]=(1-(m+y))*F,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){let r=this.elements,s=or.set(r[0],r[1],r[2]).length(),o=or.set(r[4],r[5],r[6]).length(),a=or.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],bn.copy(this);let l=1/s,h=1/o,f=1/a;return bn.elements[0]*=l,bn.elements[1]*=l,bn.elements[2]*=l,bn.elements[4]*=h,bn.elements[5]*=h,bn.elements[6]*=h,bn.elements[8]*=f,bn.elements[9]*=f,bn.elements[10]*=f,e.setFromRotationMatrix(bn),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o,a=Tn,c=!1){let l=this.elements,h=2*s/(e-t),f=2*s/(n-r),m=(e+t)/(e-t),g=(n+r)/(n-r),v,y;if(c)v=s/(o-s),y=o*s/(o-s);else if(a===Tn)v=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===Jr)v=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=m,l[12]=0,l[1]=0,l[5]=f,l[9]=g,l[13]=0,l[2]=0,l[6]=0,l[10]=v,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=Tn,c=!1){let l=this.elements,h=2/(e-t),f=2/(n-r),m=-(e+t)/(e-t),g=-(n+r)/(n-r),v,y;if(c)v=1/(o-s),y=o/(o-s);else if(a===Tn)v=-2/(o-s),y=-(o+s)/(o-s);else if(a===Jr)v=-1/(o-s),y=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=m,l[1]=0,l[5]=f,l[9]=0,l[13]=g,l[2]=0,l[6]=0,l[10]=v,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},or=new W,bn=new Oe,jd=new W(0,0,0),Qd=new W(1,1,1),ai=new W,Os=new W,un=new W,Ec=new Oe,Tc=new yn,An=class i{constructor(t=0,e=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let r=t.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],h=r[9],f=r[2],m=r[6],g=r[10];switch(e){case"XYZ":this._y=Math.asin(he(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(m,l),this._z=0);break;case"YXZ":this._x=Math.asin(-he(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(he(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-he(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(m,g),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(he(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-he(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(m,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ec.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ec,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Tc.setFromEuler(this),this.setFromQuaternion(Tc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};An.DEFAULT_ORDER="XYZ";var Qr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},tf=0,wc=new W,ar=new yn,Wn=new Oe,Bs=new W,Wr=new W,ef=new W,nf=new yn,Ac=new W(1,0,0),Cc=new W(0,1,0),Rc=new W(0,0,1),Pc={type:"added"},rf={type:"removed"},lr={type:"childadded",child:null},Za={type:"childremoved",child:null},ke=class i extends In{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tf++}),this.uuid=Pr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new W,e=new An,n=new yn,r=new W(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Oe},normalMatrix:{value:new re}}),this.matrix=new Oe,this.matrixWorld=new Oe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ar.setFromAxisAngle(t,e),this.quaternion.multiply(ar),this}rotateOnWorldAxis(t,e){return ar.setFromAxisAngle(t,e),this.quaternion.premultiply(ar),this}rotateX(t){return this.rotateOnAxis(Ac,t)}rotateY(t){return this.rotateOnAxis(Cc,t)}rotateZ(t){return this.rotateOnAxis(Rc,t)}translateOnAxis(t,e){return wc.copy(t).applyQuaternion(this.quaternion),this.position.add(wc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ac,t)}translateY(t){return this.translateOnAxis(Cc,t)}translateZ(t){return this.translateOnAxis(Rc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Wn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Bs.copy(t):Bs.set(t,e,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wn.lookAt(Wr,Bs,this.up):Wn.lookAt(Bs,Wr,this.up),this.quaternion.setFromRotationMatrix(Wn),r&&(Wn.extractRotation(r.matrixWorld),ar.setFromRotationMatrix(Wn),this.quaternion.premultiply(ar.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Pc),lr.child=t,this.dispatchEvent(lr),lr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(rf),Za.child=t,this.dispatchEvent(Za),Za.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Wn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Wn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Wn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Pc),lr.child=t,this.dispatchEvent(lr),lr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,t,ef),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,nf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let f=c[l];s(t.shapes,f)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];r.animations.push(s(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),f=o(t.shapes),m=o(t.skeletons),g=o(t.animations),v=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),m.length>0&&(n.skeletons=m),g.length>0&&(n.animations=g),v.length>0&&(n.nodes=v)}return n.object=r,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let r=t.children[n];this.add(r.clone())}return this}};ke.DEFAULT_UP=new W(0,1,0);ke.DEFAULT_MATRIX_AUTO_UPDATE=!0;ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var En=new W,Xn=new W,Ja=new W,qn=new W,cr=new W,hr=new W,Ic=new W,Ka=new W,ja=new W,Qa=new W,tl=new Ne,el=new Ne,nl=new Ne,$n=class i{constructor(t=new W,e=new W,n=new W){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),En.subVectors(t,e),r.cross(En);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){En.subVectors(r,e),Xn.subVectors(n,e),Ja.subVectors(t,e);let o=En.dot(En),a=En.dot(Xn),c=En.dot(Ja),l=Xn.dot(Xn),h=Xn.dot(Ja),f=o*l-a*a;if(f===0)return s.set(0,0,0),null;let m=1/f,g=(l*c-a*h)*m,v=(o*h-a*c)*m;return s.set(1-g-v,v,g)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,qn)===null?!1:qn.x>=0&&qn.y>=0&&qn.x+qn.y<=1}static getInterpolation(t,e,n,r,s,o,a,c){return this.getBarycoord(t,e,n,r,qn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,qn.x),c.addScaledVector(o,qn.y),c.addScaledVector(a,qn.z),c)}static getInterpolatedAttribute(t,e,n,r,s,o){return tl.setScalar(0),el.setScalar(0),nl.setScalar(0),tl.fromBufferAttribute(t,e),el.fromBufferAttribute(t,n),nl.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(tl,s.x),o.addScaledVector(el,s.y),o.addScaledVector(nl,s.z),o}static isFrontFacing(t,e,n,r){return En.subVectors(n,e),Xn.subVectors(t,e),En.cross(Xn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return En.subVectors(this.c,this.b),Xn.subVectors(this.a,this.b),En.cross(Xn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return i.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,r=this.b,s=this.c,o,a;cr.subVectors(r,n),hr.subVectors(s,n),Ka.subVectors(t,n);let c=cr.dot(Ka),l=hr.dot(Ka);if(c<=0&&l<=0)return e.copy(n);ja.subVectors(t,r);let h=cr.dot(ja),f=hr.dot(ja);if(h>=0&&f<=h)return e.copy(r);let m=c*f-h*l;if(m<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(cr,o);Qa.subVectors(t,s);let g=cr.dot(Qa),v=hr.dot(Qa);if(v>=0&&g<=v)return e.copy(s);let y=g*l-c*v;if(y<=0&&l>=0&&v<=0)return a=l/(l-v),e.copy(n).addScaledVector(hr,a);let _=h*v-g*f;if(_<=0&&f-h>=0&&g-v>=0)return Ic.subVectors(s,r),a=(f-h)/(f-h+(g-v)),e.copy(r).addScaledVector(Ic,a);let p=1/(_+y+m);return o=y*p,a=m*p,e.copy(n).addScaledVector(cr,o).addScaledVector(hr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Dh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},li={h:0,s:0,l:0},zs={h:0,s:0,l:0};function il(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var se=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=fn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,me.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=me.workingColorSpace){return this.r=t,this.g=e,this.b=n,me.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=me.workingColorSpace){if(t=Fl(t,1),e=he(e,0,1),n=he(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=il(o,s,t+1/3),this.g=il(o,s,t),this.b=il(o,s,t-1/3)}return me.colorSpaceToWorking(this,r),this}setStyle(t,e=fn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=fn){let n=Dh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Zn(t.r),this.g=Zn(t.g),this.b=Zn(t.b),this}copyLinearToSRGB(t){return this.r=gr(t.r),this.g=gr(t.g),this.b=gr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=fn){return me.workingToColorSpace(Ke.copy(this),t),Math.round(he(Ke.r*255,0,255))*65536+Math.round(he(Ke.g*255,0,255))*256+Math.round(he(Ke.b*255,0,255))}getHexString(t=fn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=me.workingColorSpace){me.workingToColorSpace(Ke.copy(this),e);let n=Ke.r,r=Ke.g,s=Ke.b,o=Math.max(n,r,s),a=Math.min(n,r,s),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let f=o-a;switch(l=h<=.5?f/(o+a):f/(2-o-a),o){case n:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-n)/f+2;break;case s:c=(n-r)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=me.workingColorSpace){return me.workingToColorSpace(Ke.copy(this),e),t.r=Ke.r,t.g=Ke.g,t.b=Ke.b,t}getStyle(t=fn){me.workingToColorSpace(Ke.copy(this),t);let e=Ke.r,n=Ke.g,r=Ke.b;return t!==fn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(li),this.setHSL(li.h+t,li.s+e,li.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(li),t.getHSL(zs);let n=$r(li.h,zs.h,e),r=$r(li.s,zs.s,e),s=$r(li.l,zs.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ke=new se;se.NAMES=Dh;var sf=0,Kn=class extends In{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sf++}),this.uuid=Pr(),this.name="",this.type="Material",this.blending=Ni,this.side=Jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=no,this.blendDst=io,this.blendEquation=ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new se(0,0,0),this.blendAlpha=0,this.depthFunc=Fi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ui,this.stencilZFail=Ui,this.stencilZPass=Ui,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ni&&(n.blending=this.blending),this.side!==Jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==no&&(n.blendSrc=this.blendSrc),this.blendDst!==io&&(n.blendDst=this.blendDst),this.blendEquation!==ui&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Fi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ui&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ui&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ui&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(e){let s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ki=class extends Kn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=bl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ze=new W,ks=new ee,of=0,Qe=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:of++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=pl,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ks.fromBufferAttribute(this,e),ks.applyMatrix3(t),this.setXY(e,ks.x,ks.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix3(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix4(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyNormalMatrix(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.transformDirection(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=pr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=on(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=pr(e,this.array)),e}setX(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=pr(e,this.array)),e}setY(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=pr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=pr(e,this.array)),e}setW(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=on(e,this.array),n=on(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=on(e,this.array),n=on(n,this.array),r=on(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=on(e,this.array),n=on(n,this.array),r=on(r,this.array),s=on(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==pl&&(t.usage=this.usage),t}};var ts=class extends Qe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var es=class extends Qe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var qe=class extends Qe{constructor(t,e,n){super(new Float32Array(t),e,n)}},af=0,_n=new Oe,rl=new ke,ur=new W,dn=new Ln,Xr=new Ln,Xe=new W,cn=class i extends In{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:af++}),this.uuid=Pr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ol(t)?es:ts)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new re().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return _n.makeRotationFromQuaternion(t),this.applyMatrix4(_n),this}rotateX(t){return _n.makeRotationX(t),this.applyMatrix4(_n),this}rotateY(t){return _n.makeRotationY(t),this.applyMatrix4(_n),this}rotateZ(t){return _n.makeRotationZ(t),this.applyMatrix4(_n),this}translate(t,e,n){return _n.makeTranslation(t,e,n),this.applyMatrix4(_n),this}scale(t,e,n){return _n.makeScale(t,e,n),this.applyMatrix4(_n),this}lookAt(t){return rl.lookAt(t),rl.updateMatrix(),this.applyMatrix4(rl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ur).negate(),this.translate(ur.x,ur.y,ur.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let r=0,s=t.length;r<s;r++){let o=t[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new qe(n,3))}else{let n=Math.min(t.length,e.count);for(let r=0;r<n;r++){let s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ln);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){let s=e[n];dn.setFromBufferAttribute(s),this.morphTargetsRelative?(Xe.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Xe),Xe.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Xe)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(t){let n=this.boundingSphere.center;if(dn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];Xr.setFromBufferAttribute(a),this.morphTargetsRelative?(Xe.addVectors(dn.min,Xr.min),dn.expandByPoint(Xe),Xe.addVectors(dn.max,Xr.max),dn.expandByPoint(Xe)):(dn.expandByPoint(Xr.min),dn.expandByPoint(Xr.max))}dn.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)Xe.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Xe));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Xe.fromBufferAttribute(a,l),c&&(ur.fromBufferAttribute(t,l),Xe.add(ur)),r=Math.max(r,n.distanceToSquared(Xe))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qe(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let z=0;z<n.count;z++)a[z]=new W,c[z]=new W;let l=new W,h=new W,f=new W,m=new ee,g=new ee,v=new ee,y=new W,_=new W;function p(z,b,E){l.fromBufferAttribute(n,z),h.fromBufferAttribute(n,b),f.fromBufferAttribute(n,E),m.fromBufferAttribute(s,z),g.fromBufferAttribute(s,b),v.fromBufferAttribute(s,E),h.sub(l),f.sub(l),g.sub(m),v.sub(m);let N=1/(g.x*v.y-v.x*g.y);isFinite(N)&&(y.copy(h).multiplyScalar(v.y).addScaledVector(f,-g.y).multiplyScalar(N),_.copy(f).multiplyScalar(g.x).addScaledVector(h,-v.x).multiplyScalar(N),a[z].add(y),a[b].add(y),a[E].add(y),c[z].add(_),c[b].add(_),c[E].add(_))}let I=this.groups;I.length===0&&(I=[{start:0,count:t.count}]);for(let z=0,b=I.length;z<b;++z){let E=I[z],N=E.start,q=E.count;for(let Y=N,tt=N+q;Y<tt;Y+=3)p(t.getX(Y+0),t.getX(Y+1),t.getX(Y+2))}let R=new W,T=new W,U=new W,L=new W;function F(z){U.fromBufferAttribute(r,z),L.copy(U);let b=a[z];R.copy(b),R.sub(U.multiplyScalar(U.dot(b))).normalize(),T.crossVectors(L,b);let N=T.dot(c[z])<0?-1:1;o.setXYZW(z,R.x,R.y,R.z,N)}for(let z=0,b=I.length;z<b;++z){let E=I[z],N=E.start,q=E.count;for(let Y=N,tt=N+q;Y<tt;Y+=3)F(t.getX(Y+0)),F(t.getX(Y+1)),F(t.getX(Y+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Qe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let m=0,g=n.count;m<g;m++)n.setXYZ(m,0,0,0);let r=new W,s=new W,o=new W,a=new W,c=new W,l=new W,h=new W,f=new W;if(t)for(let m=0,g=t.count;m<g;m+=3){let v=t.getX(m+0),y=t.getX(m+1),_=t.getX(m+2);r.fromBufferAttribute(e,v),s.fromBufferAttribute(e,y),o.fromBufferAttribute(e,_),h.subVectors(o,s),f.subVectors(r,s),h.cross(f),a.fromBufferAttribute(n,v),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,_),a.add(h),c.add(h),l.add(h),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(_,l.x,l.y,l.z)}else for(let m=0,g=e.count;m<g;m+=3)r.fromBufferAttribute(e,m+0),s.fromBufferAttribute(e,m+1),o.fromBufferAttribute(e,m+2),h.subVectors(o,s),f.subVectors(r,s),h.cross(f),n.setXYZ(m+0,h.x,h.y,h.z),n.setXYZ(m+1,h.x,h.y,h.z),n.setXYZ(m+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Xe.fromBufferAttribute(t,e),Xe.normalize(),t.setXYZ(e,Xe.x,Xe.y,Xe.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,f=a.normalized,m=new l.constructor(c.length*h),g=0,v=0;for(let y=0,_=c.length;y<_;y++){a.isInterleavedBufferAttribute?g=c[y]*a.data.stride+a.offset:g=c[y]*h;for(let p=0;p<h;p++)m[v++]=l[g++]}return new Qe(m,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=t(c,n);e.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let h=0,f=l.length;h<f;h++){let m=l[h],g=t(m,n);c.push(g)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let f=0,m=l.length;f<m;f++){let g=l[f];h.push(g.toJSON(t.data))}h.length>0&&(r[c]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let r=t.attributes;for(let l in r){let h=r[l];this.setAttribute(l,h.clone(e))}let s=t.morphAttributes;for(let l in s){let h=[],f=s[l];for(let m=0,g=f.length;m<g;m++)h.push(f[m].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Dc=new Oe,Di=new zi,Vs=new Bi,Lc=new W,Hs=new W,Gs=new W,Ws=new W,sl=new W,Xs=new W,Uc=new W,qs=new W,Ye=class extends ke{constructor(t=new cn,e=new ki){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);let a=this.morphTargetInfluences;if(s&&a){Xs.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=a[c],f=s[c];h!==0&&(sl.fromBufferAttribute(f,t),o?Xs.addScaledVector(sl,h):Xs.addScaledVector(sl.sub(e),h))}e.add(Xs)}return e}raycast(t,e){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Vs.copy(n.boundingSphere),Vs.applyMatrix4(s),Di.copy(t.ray).recast(t.near),!(Vs.containsPoint(Di.origin)===!1&&(Di.intersectSphere(Vs,Lc)===null||Di.origin.distanceToSquared(Lc)>(t.far-t.near)**2))&&(Dc.copy(s).invert(),Di.copy(t.ray).applyMatrix4(Dc),!(n.boundingBox!==null&&Di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Di)))}_computeIntersections(t,e,n){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,m=s.groups,g=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,y=m.length;v<y;v++){let _=m[v],p=o[_.materialIndex],I=Math.max(_.start,g.start),R=Math.min(a.count,Math.min(_.start+_.count,g.start+g.count));for(let T=I,U=R;T<U;T+=3){let L=a.getX(T),F=a.getX(T+1),z=a.getX(T+2);r=$s(this,p,t,n,l,h,f,L,F,z),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=_.materialIndex,e.push(r))}}else{let v=Math.max(0,g.start),y=Math.min(a.count,g.start+g.count);for(let _=v,p=y;_<p;_+=3){let I=a.getX(_),R=a.getX(_+1),T=a.getX(_+2);r=$s(this,o,t,n,l,h,f,I,R,T),r&&(r.faceIndex=Math.floor(_/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let v=0,y=m.length;v<y;v++){let _=m[v],p=o[_.materialIndex],I=Math.max(_.start,g.start),R=Math.min(c.count,Math.min(_.start+_.count,g.start+g.count));for(let T=I,U=R;T<U;T+=3){let L=T,F=T+1,z=T+2;r=$s(this,p,t,n,l,h,f,L,F,z),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=_.materialIndex,e.push(r))}}else{let v=Math.max(0,g.start),y=Math.min(c.count,g.start+g.count);for(let _=v,p=y;_<p;_+=3){let I=_,R=_+1,T=_+2;r=$s(this,o,t,n,l,h,f,I,R,T),r&&(r.faceIndex=Math.floor(_/3),e.push(r))}}}};function lf(i,t,e,n,r,s,o,a){let c;if(t.side===an?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,t.side===Jn,a),c===null)return null;qs.copy(a),qs.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(qs);return l<e.near||l>e.far?null:{distance:l,point:qs.clone(),object:i}}function $s(i,t,e,n,r,s,o,a,c,l){i.getVertexPosition(a,Hs),i.getVertexPosition(c,Gs),i.getVertexPosition(l,Ws);let h=lf(i,t,e,n,Hs,Gs,Ws,Uc);if(h){let f=new W;$n.getBarycoord(Uc,Hs,Gs,Ws,f),r&&(h.uv=$n.getInterpolatedAttribute(r,a,c,l,f,new ee)),s&&(h.uv1=$n.getInterpolatedAttribute(s,a,c,l,f,new ee)),o&&(h.normal=$n.getInterpolatedAttribute(o,a,c,l,f,new W),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let m={a,b:c,c:l,normal:new W,materialIndex:0};$n.getNormal(Hs,Gs,Ws,m.normal),h.face=m,h.barycoord=f}return h}var di=class i extends cn{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],h=[],f=[],m=0,g=0;v("z","y","x",-1,-1,n,e,t,o,s,0),v("z","y","x",1,-1,n,e,-t,o,s,1),v("x","z","y",1,1,t,n,e,r,o,2),v("x","z","y",1,-1,t,n,-e,r,o,3),v("x","y","z",1,-1,t,e,n,r,s,4),v("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new qe(l,3)),this.setAttribute("normal",new qe(h,3)),this.setAttribute("uv",new qe(f,2));function v(y,_,p,I,R,T,U,L,F,z,b){let E=T/F,N=U/z,q=T/2,Y=U/2,tt=L/2,rt=F+1,et=z+1,_t=0,j=0,bt=new W;for(let Ct=0;Ct<et;Ct++){let Gt=Ct*N-Y;for(let ae=0;ae<rt;ae++){let ve=ae*E-q;bt[y]=ve*I,bt[_]=Gt*R,bt[p]=tt,l.push(bt.x,bt.y,bt.z),bt[y]=0,bt[_]=0,bt[p]=L>0?1:-1,h.push(bt.x,bt.y,bt.z),f.push(ae/F),f.push(1-Ct/z),_t+=1}}for(let Ct=0;Ct<z;Ct++)for(let Gt=0;Gt<F;Gt++){let ae=m+Gt+rt*Ct,ve=m+Gt+rt*(Ct+1),be=m+(Gt+1)+rt*(Ct+1),ge=m+(Gt+1)+rt*Ct;c.push(ae,ve,ge),c.push(ve,be,ge),j+=6}a.addGroup(g,j,b),g+=j,m+=_t}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function $i(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function tn(i){let t={};for(let e=0;e<i.length;e++){let n=$i(i[e]);for(let r in n)t[r]=n[r]}return t}function cf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Bl(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:me.workingColorSpace}var Lh={clone:$i,merge:tn},hf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Cn=class extends Kn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hf,this.fragmentShader=uf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=$i(t.uniforms),this.uniformsGroups=cf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},ns=class extends ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Oe,this.projectionMatrix=new Oe,this.projectionMatrixInverse=new Oe,this.coordinateSystem=Tn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ci=new W,Nc=new ee,Fc=new ee,je=class extends ns{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=vr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(mr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return vr*2*Math.atan(Math.tan(mr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ci.x,ci.y).multiplyScalar(-t/ci.z),ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ci.x,ci.y).multiplyScalar(-t/ci.z)}getViewSize(t,e){return this.getViewBounds(t,Nc,Fc),e.subVectors(Fc,Nc)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(mr*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,e-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},dr=-90,fr=1,ho=class extends ke{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new je(dr,fr,t,e);r.layers=this.layers,this.add(r);let s=new je(dr,fr,t,e);s.layers=this.layers,this.add(s);let o=new je(dr,fr,t,e);o.layers=this.layers,this.add(o);let a=new je(dr,fr,t,e);a.layers=this.layers,this.add(a);let c=new je(dr,fr,t,e);c.layers=this.layers,this.add(c);let l=new je(dr,fr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,c]=e;for(let l of e)this.remove(l);if(t===Tn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Jr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,h]=this.children,f=t.getRenderTarget(),m=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,c),t.setRenderTarget(n,4,r),t.render(e,l),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,r),t.render(e,h),t.setRenderTarget(f,m,g),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}},is=class extends pn{constructor(t=[],e=Xi,n,r,s,o,a,c,l,h){super(t,e,n,r,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},uo=class extends Dn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new is(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new di(5,5,5),s=new Cn({name:"CubemapFromEquirect",uniforms:$i(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:an,blending:jn});s.uniforms.tEquirect.value=e;let o=new Ye(r,s),a=e.minFilter;return e.minFilter===_i&&(e.minFilter=wn),new ho(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}},Yn=class extends ke{constructor(){super(),this.isGroup=!0,this.type="Group"}},df={type:"move"},Mr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let y of t.hand.values()){let _=e.getJointPose(y,n),p=this._getHandJoint(l,y);_!==null&&(p.matrix.fromArray(_.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=_.radius),p.visible=_!==null}let h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],m=h.position.distanceTo(f.position),g=.02,v=.005;l.inputState.pinching&&m>g+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&m<=g-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(df)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Yn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}};var rs=class extends ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new An,this.environmentIntensity=1,this.environmentRotation=new An,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var ol=new W,ff=new W,pf=new re,vn=class{constructor(t=new W(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let r=ol.subVectors(n,e).cross(ff.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(ol),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||pf.getNormalMatrix(t),r=this.coplanarPoint(ol).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Li=new Bi,mf=new ee(.5,.5),Ys=new W,Sr=class{constructor(t=new vn,e=new vn,n=new vn,r=new vn,s=new vn,o=new vn){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Tn,n=!1){let r=this.planes,s=t.elements,o=s[0],a=s[1],c=s[2],l=s[3],h=s[4],f=s[5],m=s[6],g=s[7],v=s[8],y=s[9],_=s[10],p=s[11],I=s[12],R=s[13],T=s[14],U=s[15];if(r[0].setComponents(l-o,g-h,p-v,U-I).normalize(),r[1].setComponents(l+o,g+h,p+v,U+I).normalize(),r[2].setComponents(l+a,g+f,p+y,U+R).normalize(),r[3].setComponents(l-a,g-f,p-y,U-R).normalize(),n)r[4].setComponents(c,m,_,T).normalize(),r[5].setComponents(l-c,g-m,p-_,U-T).normalize();else if(r[4].setComponents(l-c,g-m,p-_,U-T).normalize(),e===Tn)r[5].setComponents(l+c,g+m,p+_,U+T).normalize();else if(e===Jr)r[5].setComponents(c,m,_,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Li.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Li.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Li)}intersectsSprite(t){Li.center.set(0,0,0);let e=mf.distanceTo(t.center);return Li.radius=.7071067811865476+e,Li.applyMatrix4(t.matrixWorld),this.intersectsSphere(Li)}intersectsSphere(t){let e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let r=e[n];if(Ys.x=r.normal.x>0?t.max.x:t.min.x,Ys.y=r.normal.y>0?t.max.y:t.min.y,Ys.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Ys)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Vi=class extends Kn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new se(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},fo=new W,po=new W,Oc=new Oe,qr=new zi,Zs=new Bi,al=new W,Bc=new W,mo=class extends ke{constructor(t=new cn,e=new Vi){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)fo.fromBufferAttribute(e,r-1),po.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=fo.distanceTo(po);t.setAttribute("lineDistance",new qe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zs.copy(n.boundingSphere),Zs.applyMatrix4(r),Zs.radius+=s,t.ray.intersectsSphere(Zs)===!1)return;Oc.copy(r).invert(),qr.copy(t.ray).applyMatrix4(Oc);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,m=n.attributes.position;if(h!==null){let g=Math.max(0,o.start),v=Math.min(h.count,o.start+o.count);for(let y=g,_=v-1;y<_;y+=l){let p=h.getX(y),I=h.getX(y+1),R=Js(this,t,qr,c,p,I,y);R&&e.push(R)}if(this.isLineLoop){let y=h.getX(v-1),_=h.getX(g),p=Js(this,t,qr,c,y,_,v-1);p&&e.push(p)}}else{let g=Math.max(0,o.start),v=Math.min(m.count,o.start+o.count);for(let y=g,_=v-1;y<_;y+=l){let p=Js(this,t,qr,c,y,y+1,y);p&&e.push(p)}if(this.isLineLoop){let y=Js(this,t,qr,c,v-1,g,v-1);y&&e.push(y)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Js(i,t,e,n,r,s,o){let a=i.geometry.attributes.position;if(fo.fromBufferAttribute(a,r),po.fromBufferAttribute(a,s),e.distanceSqToSegment(fo,po,al,Bc)>n)return;al.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(al);if(!(l<t.near||l>t.far))return{distance:l,point:Bc.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var zc=new W,kc=new W,br=class extends mo{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)zc.fromBufferAttribute(e,r),kc.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+zc.distanceTo(kc);t.setAttribute("lineDistance",new qe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ss=class extends pn{constructor(t,e,n=vi,r,s,o,a=xn,c=xn,l,h=_r,f=1){if(h!==_r&&h!==Rr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let m={width:t,height:e,depth:f};super(m,r,s,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new yr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},os=class extends pn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var Er=class i extends cn{constructor(t=1,e=1,n=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};let l=this;r=Math.floor(r),s=Math.floor(s);let h=[],f=[],m=[],g=[],v=0,y=[],_=n/2,p=0;I(),o===!1&&(t>0&&R(!0),e>0&&R(!1)),this.setIndex(h),this.setAttribute("position",new qe(f,3)),this.setAttribute("normal",new qe(m,3)),this.setAttribute("uv",new qe(g,2));function I(){let T=new W,U=new W,L=0,F=(e-t)/n;for(let z=0;z<=s;z++){let b=[],E=z/s,N=E*(e-t)+t;for(let q=0;q<=r;q++){let Y=q/r,tt=Y*c+a,rt=Math.sin(tt),et=Math.cos(tt);U.x=N*rt,U.y=-E*n+_,U.z=N*et,f.push(U.x,U.y,U.z),T.set(rt,F,et).normalize(),m.push(T.x,T.y,T.z),g.push(Y,1-E),b.push(v++)}y.push(b)}for(let z=0;z<r;z++)for(let b=0;b<s;b++){let E=y[b][z],N=y[b+1][z],q=y[b+1][z+1],Y=y[b][z+1];(t>0||b!==0)&&(h.push(E,N,Y),L+=3),(e>0||b!==s-1)&&(h.push(N,q,Y),L+=3)}l.addGroup(p,L,0),p+=L}function R(T){let U=v,L=new ee,F=new W,z=0,b=T===!0?t:e,E=T===!0?1:-1;for(let q=1;q<=r;q++)f.push(0,_*E,0),m.push(0,E,0),g.push(.5,.5),v++;let N=v;for(let q=0;q<=r;q++){let tt=q/r*c+a,rt=Math.cos(tt),et=Math.sin(tt);F.x=b*et,F.y=_*E,F.z=b*rt,f.push(F.x,F.y,F.z),m.push(0,E,0),L.x=rt*.5+.5,L.y=et*.5*E+.5,g.push(L.x,L.y),v++}for(let q=0;q<r;q++){let Y=U+q,tt=N+q;T===!0?h.push(tt,tt+1,Y):h.push(tt+1,tt,Y),z+=3}l.addGroup(p,z,T===!0?1:2),p+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Ks=new W,js=new W,ll=new W,Qs=new $n,as=class extends cn{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let r=Math.pow(10,4),s=Math.cos(mr*e),o=t.getIndex(),a=t.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],h=["a","b","c"],f=new Array(3),m={},g=[];for(let v=0;v<c;v+=3){o?(l[0]=o.getX(v),l[1]=o.getX(v+1),l[2]=o.getX(v+2)):(l[0]=v,l[1]=v+1,l[2]=v+2);let{a:y,b:_,c:p}=Qs;if(y.fromBufferAttribute(a,l[0]),_.fromBufferAttribute(a,l[1]),p.fromBufferAttribute(a,l[2]),Qs.getNormal(ll),f[0]=`${Math.round(y.x*r)},${Math.round(y.y*r)},${Math.round(y.z*r)}`,f[1]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,f[2]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let I=0;I<3;I++){let R=(I+1)%3,T=f[I],U=f[R],L=Qs[h[I]],F=Qs[h[R]],z=`${T}_${U}`,b=`${U}_${T}`;b in m&&m[b]?(ll.dot(m[b].normal)<=s&&(g.push(L.x,L.y,L.z),g.push(F.x,F.y,F.z)),m[b]=null):z in m||(m[z]={index0:l[I],index1:l[R],normal:ll.clone()})}}for(let v in m)if(m[v]){let{index0:y,index1:_}=m[v];Ks.fromBufferAttribute(a,y),js.fromBufferAttribute(a,_),g.push(Ks.x,Ks.y,Ks.z),g.push(js.x,js.y,js.z)}this.setAttribute("position",new qe(g,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};var Hi=class i extends cn{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};let s=t/2,o=e/2,a=Math.floor(n),c=Math.floor(r),l=a+1,h=c+1,f=t/a,m=e/c,g=[],v=[],y=[],_=[];for(let p=0;p<h;p++){let I=p*m-o;for(let R=0;R<l;R++){let T=R*f-s;v.push(T,-I,0),y.push(0,0,1),_.push(R/a),_.push(1-p/c)}}for(let p=0;p<c;p++)for(let I=0;I<a;I++){let R=I+l*p,T=I+l*(p+1),U=I+1+l*(p+1),L=I+1+l*p;g.push(R,T,L),g.push(T,U,L)}this.setIndex(g),this.setAttribute("position",new qe(v,3)),this.setAttribute("normal",new qe(y,3)),this.setAttribute("uv",new qe(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Gi=class extends Kn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ll,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var go=class extends Kn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},_o=class extends Kn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function to(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function gf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Wi=class{constructor(t,e,n,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,r=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<r)){for(let a=n+2;;){if(r===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=e[++n],t<r)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(r=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=t*r;for(let o=0;o!==r;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},vo=class extends Wi{constructor(t,e,n,r){super(t,e,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:hl,endingEnd:hl}}intervalChanged_(t,e,n){let r=this.parameterPositions,s=t-2,o=t+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case ul:s=t,a=2*e-n;break;case dl:s=r.length-2,a=e+r[s]-r[s+1];break;default:s=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ul:o=t,c=2*n-e;break;case dl:o=1,c=n+r[1]-r[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,f=this._offsetNext,m=this._weightPrev,g=this._weightNext,v=(n-e)/(r-e),y=v*v,_=y*v,p=-m*_+2*m*y-m*v,I=(1+m)*_+(-1.5-2*m)*y+(-.5+m)*v+1,R=(-1-g)*_+(1.5+g)*y+.5*v,T=g*_-g*y;for(let U=0;U!==a;++U)s[U]=p*o[h+U]+I*o[l+U]+R*o[c+U]+T*o[f+U];return s}},xo=class extends Wi{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(r-e),f=1-h;for(let m=0;m!==a;++m)s[m]=o[l+m]*f+o[c+m]*h;return s}},yo=class extends Wi{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t){return this.copySampleValue_(t-1)}},mn=class{constructor(t,e,n,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=to(e,this.TimeBufferType),this.values=to(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:to(t.times,Array),values:to(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(n.interpolation=r)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new yo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new xo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new vo(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Yr:e=this.InterpolantFactoryMethodDiscrete;break;case oo:e=this.InterpolantFactoryMethodLinear;break;case eo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Yr;case this.InterpolantFactoryMethodLinear:return oo;case this.InterpolantFactoryMethodSmooth:return eo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]*=t}return this}trim(t,e){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(r!==void 0&&gf(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===eo,s=t.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(r)c=!0;else{let f=a*n,m=f-n,g=f+n;for(let v=0;v!==n;++v){let y=e[f+v];if(y!==e[m+v]||y!==e[g+v]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let f=a*n,m=o*n;for(let g=0;g!==n;++g)e[m+g]=e[f+g]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,r=new n(this.name,t,e);return r.createInterpolant=this.createInterpolant,r}};mn.prototype.ValueTypeName="";mn.prototype.TimeBufferType=Float32Array;mn.prototype.ValueBufferType=Float32Array;mn.prototype.DefaultInterpolation=oo;var fi=class extends mn{constructor(t,e,n){super(t,e,n)}};fi.prototype.ValueTypeName="bool";fi.prototype.ValueBufferType=Array;fi.prototype.DefaultInterpolation=Yr;fi.prototype.InterpolantFactoryMethodLinear=void 0;fi.prototype.InterpolantFactoryMethodSmooth=void 0;var Mo=class extends mn{constructor(t,e,n,r){super(t,e,n,r)}};Mo.prototype.ValueTypeName="color";var So=class extends mn{constructor(t,e,n,r){super(t,e,n,r)}};So.prototype.ValueTypeName="number";var bo=class extends Wi{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(r-e),l=t*a;for(let h=l+a;l!==h;l+=4)yn.slerpFlat(s,0,o,l-a,o,l,c);return s}},ls=class extends mn{constructor(t,e,n,r){super(t,e,n,r)}InterpolantFactoryMethodLinear(t){return new bo(this.times,this.values,this.getValueSize(),t)}};ls.prototype.ValueTypeName="quaternion";ls.prototype.InterpolantFactoryMethodSmooth=void 0;var pi=class extends mn{constructor(t,e,n){super(t,e,n)}};pi.prototype.ValueTypeName="string";pi.prototype.ValueBufferType=Array;pi.prototype.DefaultInterpolation=Yr;pi.prototype.InterpolantFactoryMethodLinear=void 0;pi.prototype.InterpolantFactoryMethodSmooth=void 0;var Eo=class extends mn{constructor(t,e,n,r){super(t,e,n,r)}};Eo.prototype.ValueTypeName="vector";var To=class{constructor(t,e,n){let r=this,s=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return l.push(h,f),this},this.removeHandler=function(h){let f=l.indexOf(h);return f!==-1&&l.splice(f,2),this},this.getHandler=function(h){for(let f=0,m=l.length;f<m;f+=2){let g=l[f],v=l[f+1];if(g.global&&(g.lastIndex=0),g.test(h))return v}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Uh=new To,wo=class{constructor(t){this.manager=t!==void 0?t:Uh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};wo.DEFAULT_MATERIAL_NAME="__DEFAULT";var cs=class extends ke{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new se(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},hs=class extends cs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.groundColor=new se(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},cl=new Oe,Vc=new W,Hc=new W,ml=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ee(512,512),this.mapType=Rn,this.map=null,this.mapPass=null,this.matrix=new Oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sr,this._frameExtents=new ee(1,1),this._viewportCount=1,this._viewports=[new Ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Vc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Vc),Hc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Hc),e.updateMatrixWorld(),cl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cl,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(cl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var us=class extends ns{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-t,o=n+t,a=r+e,c=r-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},gl=class extends ml{constructor(){super(new us(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ds=class extends cs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.target=new ke,this.shadow=new gl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Ao=class extends je{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var zl="\\[\\]\\.:\\/",_f=new RegExp("["+zl+"]","g"),kl="[^"+zl+"]",vf="[^"+zl.replace("\\.","")+"]",xf=/((?:WC+[\/:])*)/.source.replace("WC",kl),yf=/(WCOD+)?/.source.replace("WCOD",vf),Mf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",kl),Sf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",kl),bf=new RegExp("^"+xf+yf+Mf+Sf+"$"),Ef=["material","materials","bones","map"],_l=class{constructor(t,e,n){let r=n||Le.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Le=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(_f,"")}static parseTrackName(t){let e=bf.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);Ef.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},r=n(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)t[e++]=n[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,r=e.propertyName,s=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[r];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Le.Composite=_l;Le.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Le.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Le.prototype.GetterByBindingType=[Le.prototype._getValue_direct,Le.prototype._getValue_array,Le.prototype._getValue_arrayElement,Le.prototype._getValue_toArray];Le.prototype.SetterByBindingTypeAndVersioning=[[Le.prototype._setValue_direct,Le.prototype._setValue_direct_setNeedsUpdate,Le.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_array,Le.prototype._setValue_array_setNeedsUpdate,Le.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_arrayElement,Le.prototype._setValue_arrayElement_setNeedsUpdate,Le.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_fromArray,Le.prototype._setValue_fromArray_setNeedsUpdate,Le.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var P0=new Float32Array(1);var Tr=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=he(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(he(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var fs=class extends br{constructor(t=10,e=10,n=4473924,r=8947848){n=new se(n),r=new se(r);let s=e/2,o=t/e,a=t/2,c=[],l=[];for(let m=0,g=0,v=-a;m<=e;m++,v+=o){c.push(-a,0,v,a,0,v),c.push(v,0,-a,v,0,a);let y=m===s?n:r;y.toArray(l,g),g+=3,y.toArray(l,g),g+=3,y.toArray(l,g),g+=3,y.toArray(l,g),g+=3}let h=new cn;h.setAttribute("position",new qe(c,3)),h.setAttribute("color",new qe(l,3));let f=new Vi({vertexColors:!0,toneMapped:!1});super(h,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};var ps=class extends In{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function Vl(i,t,e,n){let r=Tf(n);switch(e){case Rl:return i*t;case Il:return i*t/r.components*r.byteLength;case Vo:return i*t/r.components*r.byteLength;case Dl:return i*t*2/r.components*r.byteLength;case Ho:return i*t*2/r.components*r.byteLength;case Pl:return i*t*3/r.components*r.byteLength;case Mn:return i*t*4/r.components*r.byteLength;case Go:return i*t*4/r.components*r.byteLength;case _s:case vs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case xs:case ys:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xo:case $o:return Math.max(i,16)*Math.max(t,8)/4;case Wo:case qo:return Math.max(i,8)*Math.max(t,8)/2;case Yo:case Zo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Jo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ko:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case jo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Qo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ta:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ea:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case na:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ia:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ra:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case sa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case oa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case aa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case la:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ca:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ha:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ua:case da:case fa:return Math.ceil(i/4)*Math.ceil(t/4)*16;case pa:case ma:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ga:case _a:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Tf(i){switch(i){case Rn:case Tl:return{byteLength:1,components:1};case wr:case wl:case Ar:return{byteLength:2,components:1};case zo:case ko:return{byteLength:2,components:4};case vi:case Bo:case Fn:return{byteLength:4,components:1};case Al:case Cl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function ru(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Af(i){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,f=l.byteLength,m=i.createBuffer();i.bindBuffer(c,m),i.bufferData(c,l,h),a.onUploadCallback();let g;if(l instanceof Float32Array)g=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)g=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)g=i.SHORT;else if(l instanceof Uint32Array)g=i.UNSIGNED_INT;else if(l instanceof Int32Array)g=i.INT;else if(l instanceof Int8Array)g=i.BYTE;else if(l instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:m,type:g,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,c,l){let h=c.array,f=c.updateRanges;if(i.bindBuffer(l,a),f.length===0)i.bufferSubData(l,0,h);else{f.sort((g,v)=>g.start-v.start);let m=0;for(let g=1;g<f.length;g++){let v=f[m],y=f[g];y.start<=v.start+v.count+1?v.count=Math.max(v.count,y.start+y.count-v.start):(++m,f[m]=y)}f.length=m+1;for(let g=0,v=f.length;g<v;g++){let y=f[g];i.bufferSubData(l,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var Cf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Pf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,If=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Df=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Lf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Uf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Nf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ff=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Of=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Vf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Hf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Gf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Wf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$f=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Yf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Jf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Kf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,jf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Qf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,tp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ep=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,np=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ip=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rp="gl_FragColor = linearToOutputTexel( gl_FragColor );",sp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,op=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ap=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,cp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,up=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,gp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_p=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,yp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Mp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ep=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,wp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ap=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Cp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Rp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Pp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ip=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Up=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Np=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Op=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Wp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,qp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,$p=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Jp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Kp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,em=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,im=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,om=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,am=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,hm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,um=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,dm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,fm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,mm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,_m=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ym=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Sm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Tm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,wm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Am=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Um=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Nm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Fm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,km=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Hm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,qm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$m=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ym=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Zm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Km=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,jm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ng=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ig=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,og=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,oe={alphahash_fragment:Cf,alphahash_pars_fragment:Rf,alphamap_fragment:Pf,alphamap_pars_fragment:If,alphatest_fragment:Df,alphatest_pars_fragment:Lf,aomap_fragment:Uf,aomap_pars_fragment:Nf,batching_pars_vertex:Ff,batching_vertex:Of,begin_vertex:Bf,beginnormal_vertex:zf,bsdfs:kf,iridescence_fragment:Vf,bumpmap_pars_fragment:Hf,clipping_planes_fragment:Gf,clipping_planes_pars_fragment:Wf,clipping_planes_pars_vertex:Xf,clipping_planes_vertex:qf,color_fragment:$f,color_pars_fragment:Yf,color_pars_vertex:Zf,color_vertex:Jf,common:Kf,cube_uv_reflection_fragment:jf,defaultnormal_vertex:Qf,displacementmap_pars_vertex:tp,displacementmap_vertex:ep,emissivemap_fragment:np,emissivemap_pars_fragment:ip,colorspace_fragment:rp,colorspace_pars_fragment:sp,envmap_fragment:op,envmap_common_pars_fragment:ap,envmap_pars_fragment:lp,envmap_pars_vertex:cp,envmap_physical_pars_fragment:yp,envmap_vertex:hp,fog_vertex:up,fog_pars_vertex:dp,fog_fragment:fp,fog_pars_fragment:pp,gradientmap_pars_fragment:mp,lightmap_pars_fragment:gp,lights_lambert_fragment:_p,lights_lambert_pars_fragment:vp,lights_pars_begin:xp,lights_toon_fragment:Mp,lights_toon_pars_fragment:Sp,lights_phong_fragment:bp,lights_phong_pars_fragment:Ep,lights_physical_fragment:Tp,lights_physical_pars_fragment:wp,lights_fragment_begin:Ap,lights_fragment_maps:Cp,lights_fragment_end:Rp,logdepthbuf_fragment:Pp,logdepthbuf_pars_fragment:Ip,logdepthbuf_pars_vertex:Dp,logdepthbuf_vertex:Lp,map_fragment:Up,map_pars_fragment:Np,map_particle_fragment:Fp,map_particle_pars_fragment:Op,metalnessmap_fragment:Bp,metalnessmap_pars_fragment:zp,morphinstance_vertex:kp,morphcolor_vertex:Vp,morphnormal_vertex:Hp,morphtarget_pars_vertex:Gp,morphtarget_vertex:Wp,normal_fragment_begin:Xp,normal_fragment_maps:qp,normal_pars_fragment:$p,normal_pars_vertex:Yp,normal_vertex:Zp,normalmap_pars_fragment:Jp,clearcoat_normal_fragment_begin:Kp,clearcoat_normal_fragment_maps:jp,clearcoat_pars_fragment:Qp,iridescence_pars_fragment:tm,opaque_fragment:em,packing:nm,premultiplied_alpha_fragment:im,project_vertex:rm,dithering_fragment:sm,dithering_pars_fragment:om,roughnessmap_fragment:am,roughnessmap_pars_fragment:lm,shadowmap_pars_fragment:cm,shadowmap_pars_vertex:hm,shadowmap_vertex:um,shadowmask_pars_fragment:dm,skinbase_vertex:fm,skinning_pars_vertex:pm,skinning_vertex:mm,skinnormal_vertex:gm,specularmap_fragment:_m,specularmap_pars_fragment:vm,tonemapping_fragment:xm,tonemapping_pars_fragment:ym,transmission_fragment:Mm,transmission_pars_fragment:Sm,uv_pars_fragment:bm,uv_pars_vertex:Em,uv_vertex:Tm,worldpos_vertex:wm,background_vert:Am,background_frag:Cm,backgroundCube_vert:Rm,backgroundCube_frag:Pm,cube_vert:Im,cube_frag:Dm,depth_vert:Lm,depth_frag:Um,distanceRGBA_vert:Nm,distanceRGBA_frag:Fm,equirect_vert:Om,equirect_frag:Bm,linedashed_vert:zm,linedashed_frag:km,meshbasic_vert:Vm,meshbasic_frag:Hm,meshlambert_vert:Gm,meshlambert_frag:Wm,meshmatcap_vert:Xm,meshmatcap_frag:qm,meshnormal_vert:$m,meshnormal_frag:Ym,meshphong_vert:Zm,meshphong_frag:Jm,meshphysical_vert:Km,meshphysical_frag:jm,meshtoon_vert:Qm,meshtoon_frag:tg,points_vert:eg,points_frag:ng,shadow_vert:ig,shadow_frag:rg,sprite_vert:sg,sprite_frag:og},Tt={common:{diffuse:{value:new se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new re}},envmap:{envMap:{value:null},envMapRotation:{value:new re},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new re},normalScale:{value:new ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0},uvTransform:{value:new re}},sprite:{diffuse:{value:new se(16777215)},opacity:{value:1},center:{value:new ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}}},On={basic:{uniforms:tn([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.fog]),vertexShader:oe.meshbasic_vert,fragmentShader:oe.meshbasic_frag},lambert:{uniforms:tn([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new se(0)}}]),vertexShader:oe.meshlambert_vert,fragmentShader:oe.meshlambert_frag},phong:{uniforms:tn([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new se(0)},specular:{value:new se(1118481)},shininess:{value:30}}]),vertexShader:oe.meshphong_vert,fragmentShader:oe.meshphong_frag},standard:{uniforms:tn([Tt.common,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.roughnessmap,Tt.metalnessmap,Tt.fog,Tt.lights,{emissive:{value:new se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag},toon:{uniforms:tn([Tt.common,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.gradientmap,Tt.fog,Tt.lights,{emissive:{value:new se(0)}}]),vertexShader:oe.meshtoon_vert,fragmentShader:oe.meshtoon_frag},matcap:{uniforms:tn([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,{matcap:{value:null}}]),vertexShader:oe.meshmatcap_vert,fragmentShader:oe.meshmatcap_frag},points:{uniforms:tn([Tt.points,Tt.fog]),vertexShader:oe.points_vert,fragmentShader:oe.points_frag},dashed:{uniforms:tn([Tt.common,Tt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:oe.linedashed_vert,fragmentShader:oe.linedashed_frag},depth:{uniforms:tn([Tt.common,Tt.displacementmap]),vertexShader:oe.depth_vert,fragmentShader:oe.depth_frag},normal:{uniforms:tn([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,{opacity:{value:1}}]),vertexShader:oe.meshnormal_vert,fragmentShader:oe.meshnormal_frag},sprite:{uniforms:tn([Tt.sprite,Tt.fog]),vertexShader:oe.sprite_vert,fragmentShader:oe.sprite_frag},background:{uniforms:{uvTransform:{value:new re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:oe.background_vert,fragmentShader:oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new re}},vertexShader:oe.backgroundCube_vert,fragmentShader:oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:oe.cube_vert,fragmentShader:oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:oe.equirect_vert,fragmentShader:oe.equirect_frag},distanceRGBA:{uniforms:tn([Tt.common,Tt.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:oe.distanceRGBA_vert,fragmentShader:oe.distanceRGBA_frag},shadow:{uniforms:tn([Tt.lights,Tt.fog,{color:{value:new se(0)},opacity:{value:1}}]),vertexShader:oe.shadow_vert,fragmentShader:oe.shadow_frag}};On.physical={uniforms:tn([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new re},clearcoatNormalScale:{value:new ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new re},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new re},sheen:{value:0},sheenColor:{value:new se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new re},transmissionSamplerSize:{value:new ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new re},attenuationDistance:{value:0},attenuationColor:{value:new se(0)},specularColor:{value:new se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new re},anisotropyVector:{value:new ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new re}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag};var va={r:0,b:0,g:0},Yi=new An,ag=new Oe;function lg(i,t,e,n,r,s,o){let a=new se(0),c=s===!0?0:1,l,h,f=null,m=0,g=null;function v(R){let T=R.isScene===!0?R.background:null;return T&&T.isTexture&&(T=(R.backgroundBlurriness>0?e:t).get(T)),T}function y(R){let T=!1,U=v(R);U===null?p(a,c):U&&U.isColor&&(p(U,1),T=!0);let L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(R,T){let U=v(T);U&&(U.isCubeTexture||U.mapping===ms)?(h===void 0&&(h=new Ye(new di(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:$i(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,F,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Yi.copy(T.backgroundRotation),Yi.x*=-1,Yi.y*=-1,Yi.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Yi.y*=-1,Yi.z*=-1),h.material.uniforms.envMap.value=U,h.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(ag.makeRotationFromEuler(Yi)),h.material.toneMapped=me.getTransfer(U.colorSpace)!==Se,(f!==U||m!==U.version||g!==i.toneMapping)&&(h.material.needsUpdate=!0,f=U,m=U.version,g=i.toneMapping),h.layers.enableAll(),R.unshift(h,h.geometry,h.material,0,0,null)):U&&U.isTexture&&(l===void 0&&(l=new Ye(new Hi(2,2),new Cn({name:"BackgroundMaterial",uniforms:$i(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=U,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=me.getTransfer(U.colorSpace)!==Se,U.matrixAutoUpdate===!0&&U.updateMatrix(),l.material.uniforms.uvTransform.value.copy(U.matrix),(f!==U||m!==U.version||g!==i.toneMapping)&&(l.material.needsUpdate=!0,f=U,m=U.version,g=i.toneMapping),l.layers.enableAll(),R.unshift(l,l.geometry,l.material,0,0,null))}function p(R,T){R.getRGB(va,Bl(i)),n.buffers.color.setClear(va.r,va.g,va.b,T,o)}function I(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(R,T=1){a.set(R),c=T,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(R){c=R,p(a,c)},render:y,addToRenderList:_,dispose:I}}function cg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=m(null),s=r,o=!1;function a(E,N,q,Y,tt){let rt=!1,et=f(Y,q,N);s!==et&&(s=et,l(s.object)),rt=g(E,Y,q,tt),rt&&v(E,Y,q,tt),tt!==null&&t.update(tt,i.ELEMENT_ARRAY_BUFFER),(rt||o)&&(o=!1,T(E,N,q,Y),tt!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(tt).buffer))}function c(){return i.createVertexArray()}function l(E){return i.bindVertexArray(E)}function h(E){return i.deleteVertexArray(E)}function f(E,N,q){let Y=q.wireframe===!0,tt=n[E.id];tt===void 0&&(tt={},n[E.id]=tt);let rt=tt[N.id];rt===void 0&&(rt={},tt[N.id]=rt);let et=rt[Y];return et===void 0&&(et=m(c()),rt[Y]=et),et}function m(E){let N=[],q=[],Y=[];for(let tt=0;tt<e;tt++)N[tt]=0,q[tt]=0,Y[tt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:q,attributeDivisors:Y,object:E,attributes:{},index:null}}function g(E,N,q,Y){let tt=s.attributes,rt=N.attributes,et=0,_t=q.getAttributes();for(let j in _t)if(_t[j].location>=0){let Ct=tt[j],Gt=rt[j];if(Gt===void 0&&(j==="instanceMatrix"&&E.instanceMatrix&&(Gt=E.instanceMatrix),j==="instanceColor"&&E.instanceColor&&(Gt=E.instanceColor)),Ct===void 0||Ct.attribute!==Gt||Gt&&Ct.data!==Gt.data)return!0;et++}return s.attributesNum!==et||s.index!==Y}function v(E,N,q,Y){let tt={},rt=N.attributes,et=0,_t=q.getAttributes();for(let j in _t)if(_t[j].location>=0){let Ct=rt[j];Ct===void 0&&(j==="instanceMatrix"&&E.instanceMatrix&&(Ct=E.instanceMatrix),j==="instanceColor"&&E.instanceColor&&(Ct=E.instanceColor));let Gt={};Gt.attribute=Ct,Ct&&Ct.data&&(Gt.data=Ct.data),tt[j]=Gt,et++}s.attributes=tt,s.attributesNum=et,s.index=Y}function y(){let E=s.newAttributes;for(let N=0,q=E.length;N<q;N++)E[N]=0}function _(E){p(E,0)}function p(E,N){let q=s.newAttributes,Y=s.enabledAttributes,tt=s.attributeDivisors;q[E]=1,Y[E]===0&&(i.enableVertexAttribArray(E),Y[E]=1),tt[E]!==N&&(i.vertexAttribDivisor(E,N),tt[E]=N)}function I(){let E=s.newAttributes,N=s.enabledAttributes;for(let q=0,Y=N.length;q<Y;q++)N[q]!==E[q]&&(i.disableVertexAttribArray(q),N[q]=0)}function R(E,N,q,Y,tt,rt,et){et===!0?i.vertexAttribIPointer(E,N,q,tt,rt):i.vertexAttribPointer(E,N,q,Y,tt,rt)}function T(E,N,q,Y){y();let tt=Y.attributes,rt=q.getAttributes(),et=N.defaultAttributeValues;for(let _t in rt){let j=rt[_t];if(j.location>=0){let bt=tt[_t];if(bt===void 0&&(_t==="instanceMatrix"&&E.instanceMatrix&&(bt=E.instanceMatrix),_t==="instanceColor"&&E.instanceColor&&(bt=E.instanceColor)),bt!==void 0){let Ct=bt.normalized,Gt=bt.itemSize,ae=t.get(bt);if(ae===void 0)continue;let ve=ae.buffer,be=ae.type,ge=ae.bytesPerElement,ot=be===i.INT||be===i.UNSIGNED_INT||bt.gpuType===Bo;if(bt.isInterleavedBufferAttribute){let ut=bt.data,Lt=ut.stride,Kt=bt.offset;if(ut.isInstancedInterleavedBuffer){for(let Ht=0;Ht<j.locationSize;Ht++)p(j.location+Ht,ut.meshPerAttribute);E.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Ht=0;Ht<j.locationSize;Ht++)_(j.location+Ht);i.bindBuffer(i.ARRAY_BUFFER,ve);for(let Ht=0;Ht<j.locationSize;Ht++)R(j.location+Ht,Gt/j.locationSize,be,Ct,Lt*ge,(Kt+Gt/j.locationSize*Ht)*ge,ot)}else{if(bt.isInstancedBufferAttribute){for(let ut=0;ut<j.locationSize;ut++)p(j.location+ut,bt.meshPerAttribute);E.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let ut=0;ut<j.locationSize;ut++)_(j.location+ut);i.bindBuffer(i.ARRAY_BUFFER,ve);for(let ut=0;ut<j.locationSize;ut++)R(j.location+ut,Gt/j.locationSize,be,Ct,Gt*ge,Gt/j.locationSize*ut*ge,ot)}}else if(et!==void 0){let Ct=et[_t];if(Ct!==void 0)switch(Ct.length){case 2:i.vertexAttrib2fv(j.location,Ct);break;case 3:i.vertexAttrib3fv(j.location,Ct);break;case 4:i.vertexAttrib4fv(j.location,Ct);break;default:i.vertexAttrib1fv(j.location,Ct)}}}}I()}function U(){z();for(let E in n){let N=n[E];for(let q in N){let Y=N[q];for(let tt in Y)h(Y[tt].object),delete Y[tt];delete N[q]}delete n[E]}}function L(E){if(n[E.id]===void 0)return;let N=n[E.id];for(let q in N){let Y=N[q];for(let tt in Y)h(Y[tt].object),delete Y[tt];delete N[q]}delete n[E.id]}function F(E){for(let N in n){let q=n[N];if(q[E.id]===void 0)continue;let Y=q[E.id];for(let tt in Y)h(Y[tt].object),delete Y[tt];delete q[E.id]}}function z(){b(),o=!0,s!==r&&(s=r,l(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:z,resetDefaultState:b,dispose:U,releaseStatesOfGeometry:L,releaseStatesOfProgram:F,initAttributes:y,enableAttribute:_,disableUnusedAttributes:I}}function hg(i,t,e){let n;function r(l){n=l}function s(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,f){f!==0&&(i.drawArraysInstanced(n,l,h,f),e.update(h,n,f))}function a(l,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,f);let g=0;for(let v=0;v<f;v++)g+=h[v];e.update(g,n,1)}function c(l,h,f,m){if(f===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let v=0;v<l.length;v++)o(l[v],h[v],m[v]);else{g.multiDrawArraysInstancedWEBGL(n,l,0,h,0,m,0,f);let v=0;for(let y=0;y<f;y++)v+=h[y]*m[y];e.update(v,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function ug(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let F=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(F){return!(F!==Mn&&n.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(F){let z=F===Ar&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==Rn&&n.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Fn&&!z)}function c(F){if(F==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let f=e.logarithmicDepthBuffer===!0,m=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),I=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),U=v>0,L=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:m,maxTextures:g,maxVertexTextures:v,maxTextureSize:y,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:I,maxVaryings:R,maxFragmentUniforms:T,vertexTextures:U,maxSamples:L}}function dg(i){let t=this,e=null,n=0,r=!1,s=!1,o=new vn,a=new re,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,m){let g=f.length!==0||m||n!==0||r;return r=m,n=f.length,g},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,m){e=h(f,m,0)},this.setState=function(f,m,g){let v=f.clippingPlanes,y=f.clipIntersection,_=f.clipShadows,p=i.get(f);if(!r||v===null||v.length===0||s&&!_)s?h(null):l();else{let I=s?0:n,R=I*4,T=p.clippingState||null;c.value=T,T=h(v,m,R,g);for(let U=0;U!==R;++U)T[U]=e[U];p.clippingState=T,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=I}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,m,g,v){let y=f!==null?f.length:0,_=null;if(y!==0){if(_=c.value,v!==!0||_===null){let p=g+y*4,I=m.matrixWorldInverse;a.getNormalMatrix(I),(_===null||_.length<p)&&(_=new Float32Array(p));for(let R=0,T=g;R!==y;++R,T+=4)o.copy(f[R]).applyMatrix4(I,a),o.normal.toArray(_,T),_[T+3]=o.constant}c.value=_,c.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,_}}function fg(i){let t=new WeakMap;function e(o,a){return a===No?o.mapping=Xi:a===Fo&&(o.mapping=qi),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===No||a===Fo)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new uo(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",r),e(l.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}var Dr=4,Nh=[.125,.215,.35,.446,.526,.582],Ki=20,Hl=new us,Fh=new se,Gl=null,Wl=0,Xl=0,ql=!1,Ji=(1+Math.sqrt(5))/2,Ir=1/Ji,Oh=[new W(-Ji,Ir,0),new W(Ji,Ir,0),new W(-Ir,0,Ji),new W(Ir,0,Ji),new W(0,Ji,-Ir),new W(0,Ji,Ir),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)],pg=new W,Ma=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100,s={}){let{size:o=256,position:a=pg}=s;Gl=this._renderer.getRenderTarget(),Wl=this._renderer.getActiveCubeFace(),Xl=this._renderer.getActiveMipmapLevel(),ql=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,r,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Gl,Wl,Xl),this._renderer.xr.enabled=ql,t.scissorTest=!1,xa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Xi||t.mapping===qi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Gl=this._renderer.getRenderTarget(),Wl=this._renderer.getActiveCubeFace(),Xl=this._renderer.getActiveMipmapLevel(),ql=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:wn,minFilter:wn,generateMipmaps:!1,type:Ar,format:Mn,colorSpace:Oi,depthBuffer:!1},r=Bh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bh(t,e,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mg(s)),this._blurMaterial=gg(s,t,e)}return r}_compileMaterial(t){let e=new Ye(this._lodPlanes[0],t);this._renderer.compile(e,Hl)}_sceneToCubeUV(t,e,n,r,s){let c=new je(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,m=f.autoClear,g=f.toneMapping;f.getClearColor(Fh),f.toneMapping=Qn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null));let y=new ki({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1}),_=new Ye(new di,y),p=!1,I=t.background;I?I.isColor&&(y.color.copy(I),t.background=null,p=!0):(y.color.copy(Fh),p=!0);for(let R=0;R<6;R++){let T=R%3;T===0?(c.up.set(0,l[R],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[R],s.y,s.z)):T===1?(c.up.set(0,0,l[R]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[R],s.z)):(c.up.set(0,l[R],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[R]));let U=this._cubeSize;xa(r,T*U,R>2?U:0,U,U),f.setRenderTarget(r),p&&f.render(_,c),f.render(t,c)}_.geometry.dispose(),_.material.dispose(),f.toneMapping=g,f.autoClear=m,t.background=I}_textureToCubeUV(t,e){let n=this._renderer,r=t.mapping===Xi||t.mapping===qi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=kh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zh());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ye(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;let c=this._cubeSize;xa(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Hl)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Oh[(r-s-1)%Oh.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,r,s){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new Ye(this._lodPlanes[r],l),m=l.uniforms,g=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Ki-1),y=s/v,_=isFinite(s)?1+Math.floor(h*y):Ki;_>Ki&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Ki}`);let p=[],I=0;for(let F=0;F<Ki;++F){let z=F/y,b=Math.exp(-z*z/2);p.push(b),F===0?I+=b:F<_&&(I+=2*b)}for(let F=0;F<p.length;F++)p[F]=p[F]/I;m.envMap.value=t.texture,m.samples.value=_,m.weights.value=p,m.latitudinal.value=o==="latitudinal",a&&(m.poleAxis.value=a);let{_lodMax:R}=this;m.dTheta.value=v,m.mipInt.value=R-n;let T=this._sizeLods[r],U=3*T*(r>R-Dr?r-R+Dr:0),L=4*(this._cubeSize-T);xa(e,U,L,3*T,2*T),c.setRenderTarget(e),c.render(f,Hl)}};function mg(i){let t=[],e=[],n=[],r=i,s=i-Dr+1+Nh.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);e.push(a);let c=1/a;o>i-Dr?c=Nh[o-i+Dr-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,f=1+l,m=[h,h,f,h,f,f,h,h,f,f,h,f],g=6,v=6,y=3,_=2,p=1,I=new Float32Array(y*v*g),R=new Float32Array(_*v*g),T=new Float32Array(p*v*g);for(let L=0;L<g;L++){let F=L%3*2/3-1,z=L>2?0:-1,b=[F,z,0,F+2/3,z,0,F+2/3,z+1,0,F,z,0,F+2/3,z+1,0,F,z+1,0];I.set(b,y*v*L),R.set(m,_*v*L);let E=[L,L,L,L,L,L];T.set(E,p*v*L)}let U=new cn;U.setAttribute("position",new Qe(I,y)),U.setAttribute("uv",new Qe(R,_)),U.setAttribute("faceIndex",new Qe(T,p)),t.push(U),r>Dr&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Bh(i,t,e){let n=new Dn(i,t,e);return n.texture.mapping=ms,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function xa(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function gg(i,t,e){let n=new Float32Array(Ki),r=new W(0,1,0);return new Cn({name:"SphericalGaussianBlur",defines:{n:Ki,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function zh(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function kh(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function nc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function _g(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===No||c===Fo,h=c===Xi||c===qi;if(l||h){let f=t.get(a),m=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==m)return e===null&&(e=new Ma(i)),f=l?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{let g=a.image;return l&&g&&g.height>0||h&&g&&r(g)?(e===null&&(e=new Ma(i)),f=l?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function vg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let r=e(n);return r===null&&xr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function xg(i,t,e,n){let r={},s=new WeakMap;function o(f){let m=f.target;m.index!==null&&t.remove(m.index);for(let v in m.attributes)t.remove(m.attributes[v]);m.removeEventListener("dispose",o),delete r[m.id];let g=s.get(m);g&&(t.remove(g),s.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function a(f,m){return r[m.id]===!0||(m.addEventListener("dispose",o),r[m.id]=!0,e.memory.geometries++),m}function c(f){let m=f.attributes;for(let g in m)t.update(m[g],i.ARRAY_BUFFER)}function l(f){let m=[],g=f.index,v=f.attributes.position,y=0;if(g!==null){let I=g.array;y=g.version;for(let R=0,T=I.length;R<T;R+=3){let U=I[R+0],L=I[R+1],F=I[R+2];m.push(U,L,L,F,F,U)}}else if(v!==void 0){let I=v.array;y=v.version;for(let R=0,T=I.length/3-1;R<T;R+=3){let U=R+0,L=R+1,F=R+2;m.push(U,L,L,F,F,U)}}else return;let _=new(Ol(m)?es:ts)(m,1);_.version=y;let p=s.get(f);p&&t.remove(p),s.set(f,_)}function h(f){let m=s.get(f);if(m){let g=f.index;g!==null&&m.version<g.version&&l(f)}else l(f);return s.get(f)}return{get:a,update:c,getWireframeAttribute:h}}function yg(i,t,e){let n;function r(m){n=m}let s,o;function a(m){s=m.type,o=m.bytesPerElement}function c(m,g){i.drawElements(n,g,s,m*o),e.update(g,n,1)}function l(m,g,v){v!==0&&(i.drawElementsInstanced(n,g,s,m*o,v),e.update(g,n,v))}function h(m,g,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,s,m,0,v);let _=0;for(let p=0;p<v;p++)_+=g[p];e.update(_,n,1)}function f(m,g,v,y){if(v===0)return;let _=t.get("WEBGL_multi_draw");if(_===null)for(let p=0;p<m.length;p++)l(m[p]/o,g[p],y[p]);else{_.multiDrawElementsInstancedWEBGL(n,g,0,s,m,0,y,0,v);let p=0;for(let I=0;I<v;I++)p+=g[I]*y[I];e.update(p,n,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function Mg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function Sg(i,t,e){let n=new WeakMap,r=new Ne;function s(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,m=n.get(a);if(m===void 0||m.count!==f){let b=function(){F.dispose(),n.delete(a),a.removeEventListener("dispose",b)};m!==void 0&&m.texture.dispose();let g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,_=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],I=a.morphAttributes.color||[],R=0;g===!0&&(R=1),v===!0&&(R=2),y===!0&&(R=3);let T=a.attributes.position.count*R,U=1;T>t.maxTextureSize&&(U=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);let L=new Float32Array(T*U*4*f),F=new jr(L,T,U,f);F.type=Fn,F.needsUpdate=!0;let z=R*4;for(let E=0;E<f;E++){let N=_[E],q=p[E],Y=I[E],tt=T*U*4*E;for(let rt=0;rt<N.count;rt++){let et=rt*z;g===!0&&(r.fromBufferAttribute(N,rt),L[tt+et+0]=r.x,L[tt+et+1]=r.y,L[tt+et+2]=r.z,L[tt+et+3]=0),v===!0&&(r.fromBufferAttribute(q,rt),L[tt+et+4]=r.x,L[tt+et+5]=r.y,L[tt+et+6]=r.z,L[tt+et+7]=0),y===!0&&(r.fromBufferAttribute(Y,rt),L[tt+et+8]=r.x,L[tt+et+9]=r.y,L[tt+et+10]=r.z,L[tt+et+11]=Y.itemSize===4?r.w:1)}}m={count:f,texture:F,size:new ee(T,U)},n.set(a,m),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let y=0;y<l.length;y++)g+=l[y];let v=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",m.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}return{update:s}}function bg(i,t,e,n){let r=new WeakMap;function s(c){let l=n.render.frame,h=c.geometry,f=t.get(c,h);if(r.get(f)!==l&&(t.update(f),r.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let m=c.skeleton;r.get(m)!==l&&(m.update(),r.set(m,l))}return f}function o(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}var su=new pn,Vh=new ss(1,1),ou=new jr,au=new co,lu=new is,Hh=[],Gh=[],Wh=new Float32Array(16),Xh=new Float32Array(9),qh=new Float32Array(4);function Ur(i,t,e){let n=i[0];if(n<=0||n>0)return i;let r=t*e,s=Hh[r];if(s===void 0&&(s=new Float32Array(r),Hh[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function Ve(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function He(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ba(i,t){let e=Gh[t];e===void 0&&(e=new Int32Array(t),Gh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Eg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Tg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;i.uniform2fv(this.addr,t),He(e,t)}}function wg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ve(e,t))return;i.uniform3fv(this.addr,t),He(e,t)}}function Ag(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;i.uniform4fv(this.addr,t),He(e,t)}}function Cg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),He(e,t)}else{if(Ve(e,n))return;qh.set(n),i.uniformMatrix2fv(this.addr,!1,qh),He(e,n)}}function Rg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),He(e,t)}else{if(Ve(e,n))return;Xh.set(n),i.uniformMatrix3fv(this.addr,!1,Xh),He(e,n)}}function Pg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),He(e,t)}else{if(Ve(e,n))return;Wh.set(n),i.uniformMatrix4fv(this.addr,!1,Wh),He(e,n)}}function Ig(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Dg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;i.uniform2iv(this.addr,t),He(e,t)}}function Lg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;i.uniform3iv(this.addr,t),He(e,t)}}function Ug(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;i.uniform4iv(this.addr,t),He(e,t)}}function Ng(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Fg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;i.uniform2uiv(this.addr,t),He(e,t)}}function Og(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;i.uniform3uiv(this.addr,t),He(e,t)}}function Bg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;i.uniform4uiv(this.addr,t),He(e,t)}}function zg(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Vh.compareFunction=Ul,s=Vh):s=su,e.setTexture2D(t||s,r)}function kg(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||au,r)}function Vg(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||lu,r)}function Hg(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||ou,r)}function Gg(i){switch(i){case 5126:return Eg;case 35664:return Tg;case 35665:return wg;case 35666:return Ag;case 35674:return Cg;case 35675:return Rg;case 35676:return Pg;case 5124:case 35670:return Ig;case 35667:case 35671:return Dg;case 35668:case 35672:return Lg;case 35669:case 35673:return Ug;case 5125:return Ng;case 36294:return Fg;case 36295:return Og;case 36296:return Bg;case 35678:case 36198:case 36298:case 36306:case 35682:return zg;case 35679:case 36299:case 36307:return kg;case 35680:case 36300:case 36308:case 36293:return Vg;case 36289:case 36303:case 36311:case 36292:return Hg}}function Wg(i,t){i.uniform1fv(this.addr,t)}function Xg(i,t){let e=Ur(t,this.size,2);i.uniform2fv(this.addr,e)}function qg(i,t){let e=Ur(t,this.size,3);i.uniform3fv(this.addr,e)}function $g(i,t){let e=Ur(t,this.size,4);i.uniform4fv(this.addr,e)}function Yg(i,t){let e=Ur(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Zg(i,t){let e=Ur(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Jg(i,t){let e=Ur(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Kg(i,t){i.uniform1iv(this.addr,t)}function jg(i,t){i.uniform2iv(this.addr,t)}function Qg(i,t){i.uniform3iv(this.addr,t)}function t_(i,t){i.uniform4iv(this.addr,t)}function e_(i,t){i.uniform1uiv(this.addr,t)}function n_(i,t){i.uniform2uiv(this.addr,t)}function i_(i,t){i.uniform3uiv(this.addr,t)}function r_(i,t){i.uniform4uiv(this.addr,t)}function s_(i,t,e){let n=this.cache,r=t.length,s=ba(e,r);Ve(n,s)||(i.uniform1iv(this.addr,s),He(n,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||su,s[o])}function o_(i,t,e){let n=this.cache,r=t.length,s=ba(e,r);Ve(n,s)||(i.uniform1iv(this.addr,s),He(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||au,s[o])}function a_(i,t,e){let n=this.cache,r=t.length,s=ba(e,r);Ve(n,s)||(i.uniform1iv(this.addr,s),He(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||lu,s[o])}function l_(i,t,e){let n=this.cache,r=t.length,s=ba(e,r);Ve(n,s)||(i.uniform1iv(this.addr,s),He(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||ou,s[o])}function c_(i){switch(i){case 5126:return Wg;case 35664:return Xg;case 35665:return qg;case 35666:return $g;case 35674:return Yg;case 35675:return Zg;case 35676:return Jg;case 5124:case 35670:return Kg;case 35667:case 35671:return jg;case 35668:case 35672:return Qg;case 35669:case 35673:return t_;case 5125:return e_;case 36294:return n_;case 36295:return i_;case 36296:return r_;case 35678:case 36198:case 36298:case 36306:case 35682:return s_;case 35679:case 36299:case 36307:return o_;case 35680:case 36300:case 36308:case 36293:return a_;case 36289:case 36303:case 36311:case 36292:return l_}}var Yl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Gg(e.type)}},Zl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=c_(e.type)}},Jl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(t,e[a.id],n)}}},$l=/(\w+)(\])?(\[|\.)?/g;function $h(i,t){i.seq.push(t),i.map[t.id]=t}function h_(i,t,e){let n=i.name,r=n.length;for($l.lastIndex=0;;){let s=$l.exec(n),o=$l.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){$h(e,l===void 0?new Yl(a,i,t):new Zl(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new Jl(a),$h(e,f)),e=f}}}var Lr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);h_(s,o,this)}}setValue(t,e,n,r){let s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){let r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){let a=e[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,r)}}static seqWithValue(t,e){let n=[];for(let r=0,s=t.length;r!==s;++r){let o=t[r];o.id in e&&n.push(o)}return n}};function Yh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var u_=37297,d_=0;function f_(i,t){let e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Zh=new re;function p_(i){me._getMatrix(Zh,me.workingColorSpace,i);let t=`mat3( ${Zh.elements.map(e=>e.toFixed(4))} )`;switch(me.getTransfer(i)){case Zr:return[t,"LinearTransferOETF"];case Se:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Jh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+f_(i.getShaderSource(t),a)}else return s}function m_(i,t){let e=p_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function g_(i,t){let e;switch(t){case dh:e="Linear";break;case fh:e="Reinhard";break;case ph:e="Cineon";break;case mh:e="ACESFilmic";break;case _h:e="AgX";break;case vh:e="Neutral";break;case gh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ya=new W;function __(){me.getLuminanceCoefficients(ya);let i=ya.x.toFixed(4),t=ya.y.toFixed(4),e=ya.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function v_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ss).join(`
`)}function x_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function y_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(t,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ss(i){return i!==""}function Kh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function jh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var M_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kl(i){return i.replace(M_,b_)}var S_=new Map;function b_(i,t){let e=oe[t];if(e===void 0){let n=S_.get(t);if(n!==void 0)e=oe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Kl(e)}var E_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qh(i){return i.replace(E_,T_)}function T_(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function tu(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function w_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===xl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Xc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Un&&(t="SHADOWMAP_TYPE_VSM"),t}function A_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Xi:case qi:t="ENVMAP_TYPE_CUBE";break;case ms:t="ENVMAP_TYPE_CUBE_UV";break}return t}function C_(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case qi:t="ENVMAP_MODE_REFRACTION";break}return t}function R_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case bl:t="ENVMAP_BLENDING_MULTIPLY";break;case hh:t="ENVMAP_BLENDING_MIX";break;case uh:t="ENVMAP_BLENDING_ADD";break}return t}function P_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function I_(i,t,e,n){let r=i.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,c=w_(e),l=A_(e),h=C_(e),f=R_(e),m=P_(e),g=v_(e),v=x_(s),y=r.createProgram(),_,p,I=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Ss).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Ss).join(`
`),p.length>0&&(p+=`
`)):(_=[tu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ss).join(`
`),p=[tu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Qn?"#define TONE_MAPPING":"",e.toneMapping!==Qn?oe.tonemapping_pars_fragment:"",e.toneMapping!==Qn?g_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",oe.colorspace_pars_fragment,m_("linearToOutputTexel",e.outputColorSpace),__(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ss).join(`
`)),o=Kl(o),o=Kh(o,e),o=jh(o,e),a=Kl(a),a=Kh(a,e),a=jh(a,e),o=Qh(o),a=Qh(a),e.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,_=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",e.glslVersion===Nl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Nl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let R=I+_+o,T=I+p+a,U=Yh(r,r.VERTEX_SHADER,R),L=Yh(r,r.FRAGMENT_SHADER,T);r.attachShader(y,U),r.attachShader(y,L),e.index0AttributeName!==void 0?r.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function F(N){if(i.debug.checkShaderErrors){let q=r.getProgramInfoLog(y)||"",Y=r.getShaderInfoLog(U)||"",tt=r.getShaderInfoLog(L)||"",rt=q.trim(),et=Y.trim(),_t=tt.trim(),j=!0,bt=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,y,U,L);else{let Ct=Jh(r,U,"vertex"),Gt=Jh(r,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+rt+`
`+Ct+`
`+Gt)}else rt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",rt):(et===""||_t==="")&&(bt=!1);bt&&(N.diagnostics={runnable:j,programLog:rt,vertexShader:{log:et,prefix:_},fragmentShader:{log:_t,prefix:p}})}r.deleteShader(U),r.deleteShader(L),z=new Lr(r,y),b=y_(r,y)}let z;this.getUniforms=function(){return z===void 0&&F(this),z};let b;this.getAttributes=function(){return b===void 0&&F(this),b};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(y,u_)),E},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=d_++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=U,this.fragmentShader=L,this}var D_=0,jl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Ql(t),e.set(t,n)),n}},Ql=class{constructor(t){this.id=D_++,this.code=t,this.usedTimes=0}};function L_(i,t,e,n,r,s,o){let a=new Qr,c=new jl,l=new Set,h=[],f=r.logarithmicDepthBuffer,m=r.vertexTextures,g=r.precision,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(b){return l.add(b),b===0?"uv":`uv${b}`}function _(b,E,N,q,Y){let tt=q.fog,rt=Y.geometry,et=b.isMeshStandardMaterial?q.environment:null,_t=(b.isMeshStandardMaterial?e:t).get(b.envMap||et),j=_t&&_t.mapping===ms?_t.image.height:null,bt=v[b.type];b.precision!==null&&(g=r.getMaxPrecision(b.precision),g!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",g,"instead."));let Ct=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,Gt=Ct!==void 0?Ct.length:0,ae=0;rt.morphAttributes.position!==void 0&&(ae=1),rt.morphAttributes.normal!==void 0&&(ae=2),rt.morphAttributes.color!==void 0&&(ae=3);let ve,be,ge,ot;if(bt){let _e=On[bt];ve=_e.vertexShader,be=_e.fragmentShader}else ve=b.vertexShader,be=b.fragmentShader,c.update(b),ge=c.getVertexShaderID(b),ot=c.getFragmentShaderID(b);let ut=i.getRenderTarget(),Lt=i.state.buffers.depth.getReversed(),Kt=Y.isInstancedMesh===!0,Ht=Y.isBatchedMesh===!0,ue=!!b.map,$e=!!b.matcap,D=!!_t,Ae=!!b.aoMap,ne=!!b.lightMap,$t=!!b.bumpMap,Bt=!!b.normalMap,le=!!b.displacementMap,zt=!!b.emissiveMap,jt=!!b.metalnessMap,Be=!!b.roughnessMap,Ue=b.anisotropy>0,A=b.clearcoat>0,x=b.dispersion>0,$=b.iridescence>0,it=b.sheen>0,ht=b.transmission>0,Q=Ue&&!!b.anisotropyMap,Ut=A&&!!b.clearcoatMap,gt=A&&!!b.clearcoatNormalMap,Nt=A&&!!b.clearcoatRoughnessMap,kt=$&&!!b.iridescenceMap,ft=$&&!!b.iridescenceThicknessMap,xt=it&&!!b.sheenColorMap,Yt=it&&!!b.sheenRoughnessMap,St=!!b.specularMap,Mt=!!b.specularColorMap,wt=!!b.specularIntensityMap,O=ht&&!!b.transmissionMap,ct=ht&&!!b.thicknessMap,vt=!!b.gradientMap,Pt=!!b.alphaMap,pt=b.alphaTest>0,lt=!!b.alphaHash,Dt=!!b.extensions,Qt=Qn;b.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(Qt=i.toneMapping);let Me={shaderID:bt,shaderType:b.type,shaderName:b.name,vertexShader:ve,fragmentShader:be,defines:b.defines,customVertexShaderID:ge,customFragmentShaderID:ot,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:g,batching:Ht,batchingColor:Ht&&Y._colorsTexture!==null,instancing:Kt,instancingColor:Kt&&Y.instanceColor!==null,instancingMorph:Kt&&Y.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:ut===null?i.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:Oi,alphaToCoverage:!!b.alphaToCoverage,map:ue,matcap:$e,envMap:D,envMapMode:D&&_t.mapping,envMapCubeUVHeight:j,aoMap:Ae,lightMap:ne,bumpMap:$t,normalMap:Bt,displacementMap:m&&le,emissiveMap:zt,normalMapObjectSpace:Bt&&b.normalMapType===Sh,normalMapTangentSpace:Bt&&b.normalMapType===Ll,metalnessMap:jt,roughnessMap:Be,anisotropy:Ue,anisotropyMap:Q,clearcoat:A,clearcoatMap:Ut,clearcoatNormalMap:gt,clearcoatRoughnessMap:Nt,dispersion:x,iridescence:$,iridescenceMap:kt,iridescenceThicknessMap:ft,sheen:it,sheenColorMap:xt,sheenRoughnessMap:Yt,specularMap:St,specularColorMap:Mt,specularIntensityMap:wt,transmission:ht,transmissionMap:O,thicknessMap:ct,gradientMap:vt,opaque:b.transparent===!1&&b.blending===Ni&&b.alphaToCoverage===!1,alphaMap:Pt,alphaTest:pt,alphaHash:lt,combine:b.combine,mapUv:ue&&y(b.map.channel),aoMapUv:Ae&&y(b.aoMap.channel),lightMapUv:ne&&y(b.lightMap.channel),bumpMapUv:$t&&y(b.bumpMap.channel),normalMapUv:Bt&&y(b.normalMap.channel),displacementMapUv:le&&y(b.displacementMap.channel),emissiveMapUv:zt&&y(b.emissiveMap.channel),metalnessMapUv:jt&&y(b.metalnessMap.channel),roughnessMapUv:Be&&y(b.roughnessMap.channel),anisotropyMapUv:Q&&y(b.anisotropyMap.channel),clearcoatMapUv:Ut&&y(b.clearcoatMap.channel),clearcoatNormalMapUv:gt&&y(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Nt&&y(b.clearcoatRoughnessMap.channel),iridescenceMapUv:kt&&y(b.iridescenceMap.channel),iridescenceThicknessMapUv:ft&&y(b.iridescenceThicknessMap.channel),sheenColorMapUv:xt&&y(b.sheenColorMap.channel),sheenRoughnessMapUv:Yt&&y(b.sheenRoughnessMap.channel),specularMapUv:St&&y(b.specularMap.channel),specularColorMapUv:Mt&&y(b.specularColorMap.channel),specularIntensityMapUv:wt&&y(b.specularIntensityMap.channel),transmissionMapUv:O&&y(b.transmissionMap.channel),thicknessMapUv:ct&&y(b.thicknessMap.channel),alphaMapUv:Pt&&y(b.alphaMap.channel),vertexTangents:!!rt.attributes.tangent&&(Bt||Ue),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!rt.attributes.uv&&(ue||Pt),fog:!!tt,useFog:b.fog===!0,fogExp2:!!tt&&tt.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Lt,skinning:Y.isSkinnedMesh===!0,morphTargets:rt.morphAttributes.position!==void 0,morphNormals:rt.morphAttributes.normal!==void 0,morphColors:rt.morphAttributes.color!==void 0,morphTargetsCount:Gt,morphTextureStride:ae,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:Qt,decodeVideoTexture:ue&&b.map.isVideoTexture===!0&&me.getTransfer(b.map.colorSpace)===Se,decodeVideoTextureEmissive:zt&&b.emissiveMap.isVideoTexture===!0&&me.getTransfer(b.emissiveMap.colorSpace)===Se,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Nn,flipSided:b.side===an,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Dt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&b.extensions.multiDraw===!0||Ht)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Me.vertexUv1s=l.has(1),Me.vertexUv2s=l.has(2),Me.vertexUv3s=l.has(3),l.clear(),Me}function p(b){let E=[];if(b.shaderID?E.push(b.shaderID):(E.push(b.customVertexShaderID),E.push(b.customFragmentShaderID)),b.defines!==void 0)for(let N in b.defines)E.push(N),E.push(b.defines[N]);return b.isRawShaderMaterial===!1&&(I(E,b),R(E,b),E.push(i.outputColorSpace)),E.push(b.customProgramCacheKey),E.join()}function I(b,E){b.push(E.precision),b.push(E.outputColorSpace),b.push(E.envMapMode),b.push(E.envMapCubeUVHeight),b.push(E.mapUv),b.push(E.alphaMapUv),b.push(E.lightMapUv),b.push(E.aoMapUv),b.push(E.bumpMapUv),b.push(E.normalMapUv),b.push(E.displacementMapUv),b.push(E.emissiveMapUv),b.push(E.metalnessMapUv),b.push(E.roughnessMapUv),b.push(E.anisotropyMapUv),b.push(E.clearcoatMapUv),b.push(E.clearcoatNormalMapUv),b.push(E.clearcoatRoughnessMapUv),b.push(E.iridescenceMapUv),b.push(E.iridescenceThicknessMapUv),b.push(E.sheenColorMapUv),b.push(E.sheenRoughnessMapUv),b.push(E.specularMapUv),b.push(E.specularColorMapUv),b.push(E.specularIntensityMapUv),b.push(E.transmissionMapUv),b.push(E.thicknessMapUv),b.push(E.combine),b.push(E.fogExp2),b.push(E.sizeAttenuation),b.push(E.morphTargetsCount),b.push(E.morphAttributeCount),b.push(E.numDirLights),b.push(E.numPointLights),b.push(E.numSpotLights),b.push(E.numSpotLightMaps),b.push(E.numHemiLights),b.push(E.numRectAreaLights),b.push(E.numDirLightShadows),b.push(E.numPointLightShadows),b.push(E.numSpotLightShadows),b.push(E.numSpotLightShadowsWithMaps),b.push(E.numLightProbes),b.push(E.shadowMapType),b.push(E.toneMapping),b.push(E.numClippingPlanes),b.push(E.numClipIntersection),b.push(E.depthPacking)}function R(b,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),E.gradientMap&&a.enable(22),b.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),b.push(a.mask)}function T(b){let E=v[b.type],N;if(E){let q=On[E];N=Lh.clone(q.uniforms)}else N=b.uniforms;return N}function U(b,E){let N;for(let q=0,Y=h.length;q<Y;q++){let tt=h[q];if(tt.cacheKey===E){N=tt,++N.usedTimes;break}}return N===void 0&&(N=new I_(i,E,b,s),h.push(N)),N}function L(b){if(--b.usedTimes===0){let E=h.indexOf(b);h[E]=h[h.length-1],h.pop(),b.destroy()}}function F(b){c.remove(b)}function z(){c.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:T,acquireProgram:U,releaseProgram:L,releaseShaderCache:F,programs:h,dispose:z}}function U_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,c){i.get(o)[a]=c}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function N_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function eu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function nu(){let i=[],t=0,e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(f,m,g,v,y,_){let p=i[t];return p===void 0?(p={id:f.id,object:f,geometry:m,material:g,groupOrder:v,renderOrder:f.renderOrder,z:y,group:_},i[t]=p):(p.id=f.id,p.object=f,p.geometry=m,p.material=g,p.groupOrder=v,p.renderOrder=f.renderOrder,p.z=y,p.group=_),t++,p}function a(f,m,g,v,y,_){let p=o(f,m,g,v,y,_);g.transmission>0?n.push(p):g.transparent===!0?r.push(p):e.push(p)}function c(f,m,g,v,y,_){let p=o(f,m,g,v,y,_);g.transmission>0?n.unshift(p):g.transparent===!0?r.unshift(p):e.unshift(p)}function l(f,m){e.length>1&&e.sort(f||N_),n.length>1&&n.sort(m||eu),r.length>1&&r.sort(m||eu)}function h(){for(let f=t,m=i.length;f<m;f++){let g=i[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:h,sort:l}}function F_(){let i=new WeakMap;function t(n,r){let s=i.get(n),o;return s===void 0?(o=new nu,i.set(n,[o])):r>=s.length?(o=new nu,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function O_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new W,color:new se};break;case"SpotLight":e={position:new W,direction:new W,color:new se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new W,color:new se,distance:0,decay:0};break;case"HemisphereLight":e={direction:new W,skyColor:new se,groundColor:new se};break;case"RectAreaLight":e={color:new se,position:new W,halfWidth:new W,halfHeight:new W};break}return i[t.id]=e,e}}}function B_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var z_=0;function k_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function V_(i){let t=new O_,e=B_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new W);let r=new W,s=new Oe,o=new Oe;function a(l){let h=0,f=0,m=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let g=0,v=0,y=0,_=0,p=0,I=0,R=0,T=0,U=0,L=0,F=0;l.sort(k_);for(let b=0,E=l.length;b<E;b++){let N=l[b],q=N.color,Y=N.intensity,tt=N.distance,rt=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)h+=q.r*Y,f+=q.g*Y,m+=q.b*Y;else if(N.isLightProbe){for(let et=0;et<9;et++)n.probe[et].addScaledVector(N.sh.coefficients[et],Y);F++}else if(N.isDirectionalLight){let et=t.get(N);if(et.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let _t=N.shadow,j=e.get(N);j.shadowIntensity=_t.intensity,j.shadowBias=_t.bias,j.shadowNormalBias=_t.normalBias,j.shadowRadius=_t.radius,j.shadowMapSize=_t.mapSize,n.directionalShadow[g]=j,n.directionalShadowMap[g]=rt,n.directionalShadowMatrix[g]=N.shadow.matrix,I++}n.directional[g]=et,g++}else if(N.isSpotLight){let et=t.get(N);et.position.setFromMatrixPosition(N.matrixWorld),et.color.copy(q).multiplyScalar(Y),et.distance=tt,et.coneCos=Math.cos(N.angle),et.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),et.decay=N.decay,n.spot[y]=et;let _t=N.shadow;if(N.map&&(n.spotLightMap[U]=N.map,U++,_t.updateMatrices(N),N.castShadow&&L++),n.spotLightMatrix[y]=_t.matrix,N.castShadow){let j=e.get(N);j.shadowIntensity=_t.intensity,j.shadowBias=_t.bias,j.shadowNormalBias=_t.normalBias,j.shadowRadius=_t.radius,j.shadowMapSize=_t.mapSize,n.spotShadow[y]=j,n.spotShadowMap[y]=rt,T++}y++}else if(N.isRectAreaLight){let et=t.get(N);et.color.copy(q).multiplyScalar(Y),et.halfWidth.set(N.width*.5,0,0),et.halfHeight.set(0,N.height*.5,0),n.rectArea[_]=et,_++}else if(N.isPointLight){let et=t.get(N);if(et.color.copy(N.color).multiplyScalar(N.intensity),et.distance=N.distance,et.decay=N.decay,N.castShadow){let _t=N.shadow,j=e.get(N);j.shadowIntensity=_t.intensity,j.shadowBias=_t.bias,j.shadowNormalBias=_t.normalBias,j.shadowRadius=_t.radius,j.shadowMapSize=_t.mapSize,j.shadowCameraNear=_t.camera.near,j.shadowCameraFar=_t.camera.far,n.pointShadow[v]=j,n.pointShadowMap[v]=rt,n.pointShadowMatrix[v]=N.shadow.matrix,R++}n.point[v]=et,v++}else if(N.isHemisphereLight){let et=t.get(N);et.skyColor.copy(N.color).multiplyScalar(Y),et.groundColor.copy(N.groundColor).multiplyScalar(Y),n.hemi[p]=et,p++}}_>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Tt.LTC_FLOAT_1,n.rectAreaLTC2=Tt.LTC_FLOAT_2):(n.rectAreaLTC1=Tt.LTC_HALF_1,n.rectAreaLTC2=Tt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=m;let z=n.hash;(z.directionalLength!==g||z.pointLength!==v||z.spotLength!==y||z.rectAreaLength!==_||z.hemiLength!==p||z.numDirectionalShadows!==I||z.numPointShadows!==R||z.numSpotShadows!==T||z.numSpotMaps!==U||z.numLightProbes!==F)&&(n.directional.length=g,n.spot.length=y,n.rectArea.length=_,n.point.length=v,n.hemi.length=p,n.directionalShadow.length=I,n.directionalShadowMap.length=I,n.pointShadow.length=R,n.pointShadowMap.length=R,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=I,n.pointShadowMatrix.length=R,n.spotLightMatrix.length=T+U-L,n.spotLightMap.length=U,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=F,z.directionalLength=g,z.pointLength=v,z.spotLength=y,z.rectAreaLength=_,z.hemiLength=p,z.numDirectionalShadows=I,z.numPointShadows=R,z.numSpotShadows=T,z.numSpotMaps=U,z.numLightProbes=F,n.version=z_++)}function c(l,h){let f=0,m=0,g=0,v=0,y=0,_=h.matrixWorldInverse;for(let p=0,I=l.length;p<I;p++){let R=l[p];if(R.isDirectionalLight){let T=n.directional[f];T.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(_),f++}else if(R.isSpotLight){let T=n.spot[g];T.position.setFromMatrixPosition(R.matrixWorld),T.position.applyMatrix4(_),T.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(_),g++}else if(R.isRectAreaLight){let T=n.rectArea[v];T.position.setFromMatrixPosition(R.matrixWorld),T.position.applyMatrix4(_),o.identity(),s.copy(R.matrixWorld),s.premultiply(_),o.extractRotation(s),T.halfWidth.set(R.width*.5,0,0),T.halfHeight.set(0,R.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),v++}else if(R.isPointLight){let T=n.point[m];T.position.setFromMatrixPosition(R.matrixWorld),T.position.applyMatrix4(_),m++}else if(R.isHemisphereLight){let T=n.hemi[y];T.direction.setFromMatrixPosition(R.matrixWorld),T.direction.transformDirection(_),y++}}}return{setup:a,setupView:c,state:n}}function iu(i){let t=new V_(i),e=[],n=[];function r(h){l.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function H_(i){let t=new WeakMap;function e(r,s=0){let o=t.get(r),a;return o===void 0?(a=new iu(i),t.set(r,[a])):s>=o.length?(a=new iu(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var G_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,W_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function X_(i,t,e){let n=new Sr,r=new ee,s=new ee,o=new Ne,a=new go({depthPacking:Mh}),c=new _o,l={},h=e.maxTextureSize,f={[Jn]:an,[an]:Jn,[Nn]:Nn},m=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ee},radius:{value:4}},vertexShader:G_,fragmentShader:W_}),g=m.clone();g.defines.HORIZONTAL_PASS=1;let v=new cn;v.setAttribute("position",new Qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Ye(v,m),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xl;let p=this.type;this.render=function(L,F,z){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||L.length===0)return;let b=i.getRenderTarget(),E=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),q=i.state;q.setBlending(jn),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);let Y=p!==Un&&this.type===Un,tt=p===Un&&this.type!==Un;for(let rt=0,et=L.length;rt<et;rt++){let _t=L[rt],j=_t.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",_t,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);let bt=j.getFrameExtents();if(r.multiply(bt),s.copy(j.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/bt.x),r.x=s.x*bt.x,j.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/bt.y),r.y=s.y*bt.y,j.mapSize.y=s.y)),j.map===null||Y===!0||tt===!0){let Gt=this.type!==Un?{minFilter:xn,magFilter:xn}:{};j.map!==null&&j.map.dispose(),j.map=new Dn(r.x,r.y,Gt),j.map.texture.name=_t.name+".shadowMap",j.camera.updateProjectionMatrix()}i.setRenderTarget(j.map),i.clear();let Ct=j.getViewportCount();for(let Gt=0;Gt<Ct;Gt++){let ae=j.getViewport(Gt);o.set(s.x*ae.x,s.y*ae.y,s.x*ae.z,s.y*ae.w),q.viewport(o),j.updateMatrices(_t,Gt),n=j.getFrustum(),T(F,z,j.camera,_t,this.type)}j.isPointLightShadow!==!0&&this.type===Un&&I(j,z),j.needsUpdate=!1}p=this.type,_.needsUpdate=!1,i.setRenderTarget(b,E,N)};function I(L,F){let z=t.update(y);m.defines.VSM_SAMPLES!==L.blurSamples&&(m.defines.VSM_SAMPLES=L.blurSamples,g.defines.VSM_SAMPLES=L.blurSamples,m.needsUpdate=!0,g.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Dn(r.x,r.y)),m.uniforms.shadow_pass.value=L.map.texture,m.uniforms.resolution.value=L.mapSize,m.uniforms.radius.value=L.radius,i.setRenderTarget(L.mapPass),i.clear(),i.renderBufferDirect(F,null,z,m,y,null),g.uniforms.shadow_pass.value=L.mapPass.texture,g.uniforms.resolution.value=L.mapSize,g.uniforms.radius.value=L.radius,i.setRenderTarget(L.map),i.clear(),i.renderBufferDirect(F,null,z,g,y,null)}function R(L,F,z,b){let E=null,N=z.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(N!==void 0)E=N;else if(E=z.isPointLight===!0?c:a,i.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){let q=E.uuid,Y=F.uuid,tt=l[q];tt===void 0&&(tt={},l[q]=tt);let rt=tt[Y];rt===void 0&&(rt=E.clone(),tt[Y]=rt,F.addEventListener("dispose",U)),E=rt}if(E.visible=F.visible,E.wireframe=F.wireframe,b===Un?E.side=F.shadowSide!==null?F.shadowSide:F.side:E.side=F.shadowSide!==null?F.shadowSide:f[F.side],E.alphaMap=F.alphaMap,E.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,E.map=F.map,E.clipShadows=F.clipShadows,E.clippingPlanes=F.clippingPlanes,E.clipIntersection=F.clipIntersection,E.displacementMap=F.displacementMap,E.displacementScale=F.displacementScale,E.displacementBias=F.displacementBias,E.wireframeLinewidth=F.wireframeLinewidth,E.linewidth=F.linewidth,z.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let q=i.properties.get(E);q.light=z}return E}function T(L,F,z,b,E){if(L.visible===!1)return;if(L.layers.test(F.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&E===Un)&&(!L.frustumCulled||n.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,L.matrixWorld);let Y=t.update(L),tt=L.material;if(Array.isArray(tt)){let rt=Y.groups;for(let et=0,_t=rt.length;et<_t;et++){let j=rt[et],bt=tt[j.materialIndex];if(bt&&bt.visible){let Ct=R(L,bt,b,E);L.onBeforeShadow(i,L,F,z,Y,Ct,j),i.renderBufferDirect(z,null,Y,Ct,L,j),L.onAfterShadow(i,L,F,z,Y,Ct,j)}}}else if(tt.visible){let rt=R(L,tt,b,E);L.onBeforeShadow(i,L,F,z,Y,rt,null),i.renderBufferDirect(z,null,Y,rt,L,null),L.onAfterShadow(i,L,F,z,Y,rt,null)}}let q=L.children;for(let Y=0,tt=q.length;Y<tt;Y++)T(q[Y],F,z,b,E)}function U(L){L.target.removeEventListener("dispose",U);for(let z in l){let b=l[z],E=L.target.uuid;E in b&&(b[E].dispose(),delete b[E])}}}var q_={[Co]:Ro,[Po]:Lo,[Io]:Uo,[Fi]:Do,[Ro]:Co,[Lo]:Po,[Uo]:Io,[Do]:Fi};function $_(i,t){function e(){let O=!1,ct=new Ne,vt=null,Pt=new Ne(0,0,0,0);return{setMask:function(pt){vt!==pt&&!O&&(i.colorMask(pt,pt,pt,pt),vt=pt)},setLocked:function(pt){O=pt},setClear:function(pt,lt,Dt,Qt,Me){Me===!0&&(pt*=Qt,lt*=Qt,Dt*=Qt),ct.set(pt,lt,Dt,Qt),Pt.equals(ct)===!1&&(i.clearColor(pt,lt,Dt,Qt),Pt.copy(ct))},reset:function(){O=!1,vt=null,Pt.set(-1,0,0,0)}}}function n(){let O=!1,ct=!1,vt=null,Pt=null,pt=null;return{setReversed:function(lt){if(ct!==lt){let Dt=t.get("EXT_clip_control");lt?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT),ct=lt;let Qt=pt;pt=null,this.setClear(Qt)}},getReversed:function(){return ct},setTest:function(lt){lt?ut(i.DEPTH_TEST):Lt(i.DEPTH_TEST)},setMask:function(lt){vt!==lt&&!O&&(i.depthMask(lt),vt=lt)},setFunc:function(lt){if(ct&&(lt=q_[lt]),Pt!==lt){switch(lt){case Co:i.depthFunc(i.NEVER);break;case Ro:i.depthFunc(i.ALWAYS);break;case Po:i.depthFunc(i.LESS);break;case Fi:i.depthFunc(i.LEQUAL);break;case Io:i.depthFunc(i.EQUAL);break;case Do:i.depthFunc(i.GEQUAL);break;case Lo:i.depthFunc(i.GREATER);break;case Uo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Pt=lt}},setLocked:function(lt){O=lt},setClear:function(lt){pt!==lt&&(ct&&(lt=1-lt),i.clearDepth(lt),pt=lt)},reset:function(){O=!1,vt=null,Pt=null,pt=null,ct=!1}}}function r(){let O=!1,ct=null,vt=null,Pt=null,pt=null,lt=null,Dt=null,Qt=null,Me=null;return{setTest:function(_e){O||(_e?ut(i.STENCIL_TEST):Lt(i.STENCIL_TEST))},setMask:function(_e){ct!==_e&&!O&&(i.stencilMask(_e),ct=_e)},setFunc:function(_e,gn,Ze){(vt!==_e||Pt!==gn||pt!==Ze)&&(i.stencilFunc(_e,gn,Ze),vt=_e,Pt=gn,pt=Ze)},setOp:function(_e,gn,Ze){(lt!==_e||Dt!==gn||Qt!==Ze)&&(i.stencilOp(_e,gn,Ze),lt=_e,Dt=gn,Qt=Ze)},setLocked:function(_e){O=_e},setClear:function(_e){Me!==_e&&(i.clearStencil(_e),Me=_e)},reset:function(){O=!1,ct=null,vt=null,Pt=null,pt=null,lt=null,Dt=null,Qt=null,Me=null}}}let s=new e,o=new n,a=new r,c=new WeakMap,l=new WeakMap,h={},f={},m=new WeakMap,g=[],v=null,y=!1,_=null,p=null,I=null,R=null,T=null,U=null,L=null,F=new se(0,0,0),z=0,b=!1,E=null,N=null,q=null,Y=null,tt=null,rt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),et=!1,_t=0,j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?(_t=parseFloat(/^WebGL (\d)/.exec(j)[1]),et=_t>=1):j.indexOf("OpenGL ES")!==-1&&(_t=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),et=_t>=2);let bt=null,Ct={},Gt=i.getParameter(i.SCISSOR_BOX),ae=i.getParameter(i.VIEWPORT),ve=new Ne().fromArray(Gt),be=new Ne().fromArray(ae);function ge(O,ct,vt,Pt){let pt=new Uint8Array(4),lt=i.createTexture();i.bindTexture(O,lt),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Dt=0;Dt<vt;Dt++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(ct,0,i.RGBA,1,1,Pt,0,i.RGBA,i.UNSIGNED_BYTE,pt):i.texImage2D(ct+Dt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pt);return lt}let ot={};ot[i.TEXTURE_2D]=ge(i.TEXTURE_2D,i.TEXTURE_2D,1),ot[i.TEXTURE_CUBE_MAP]=ge(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ot[i.TEXTURE_2D_ARRAY]=ge(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ot[i.TEXTURE_3D]=ge(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ut(i.DEPTH_TEST),o.setFunc(Fi),$t(!1),Bt(vl),ut(i.CULL_FACE),Ae(jn);function ut(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function Lt(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function Kt(O,ct){return f[O]!==ct?(i.bindFramebuffer(O,ct),f[O]=ct,O===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=ct),O===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=ct),!0):!1}function Ht(O,ct){let vt=g,Pt=!1;if(O){vt=m.get(ct),vt===void 0&&(vt=[],m.set(ct,vt));let pt=O.textures;if(vt.length!==pt.length||vt[0]!==i.COLOR_ATTACHMENT0){for(let lt=0,Dt=pt.length;lt<Dt;lt++)vt[lt]=i.COLOR_ATTACHMENT0+lt;vt.length=pt.length,Pt=!0}}else vt[0]!==i.BACK&&(vt[0]=i.BACK,Pt=!0);Pt&&i.drawBuffers(vt)}function ue(O){return v!==O?(i.useProgram(O),v=O,!0):!1}let $e={[ui]:i.FUNC_ADD,[$c]:i.FUNC_SUBTRACT,[Yc]:i.FUNC_REVERSE_SUBTRACT};$e[Zc]=i.MIN,$e[Jc]=i.MAX;let D={[Kc]:i.ZERO,[jc]:i.ONE,[Qc]:i.SRC_COLOR,[no]:i.SRC_ALPHA,[sh]:i.SRC_ALPHA_SATURATE,[ih]:i.DST_COLOR,[eh]:i.DST_ALPHA,[th]:i.ONE_MINUS_SRC_COLOR,[io]:i.ONE_MINUS_SRC_ALPHA,[rh]:i.ONE_MINUS_DST_COLOR,[nh]:i.ONE_MINUS_DST_ALPHA,[oh]:i.CONSTANT_COLOR,[ah]:i.ONE_MINUS_CONSTANT_COLOR,[lh]:i.CONSTANT_ALPHA,[ch]:i.ONE_MINUS_CONSTANT_ALPHA};function Ae(O,ct,vt,Pt,pt,lt,Dt,Qt,Me,_e){if(O===jn){y===!0&&(Lt(i.BLEND),y=!1);return}if(y===!1&&(ut(i.BLEND),y=!0),O!==qc){if(O!==_||_e!==b){if((p!==ui||T!==ui)&&(i.blendEquation(i.FUNC_ADD),p=ui,T=ui),_e)switch(O){case Ni:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case yl:i.blendFunc(i.ONE,i.ONE);break;case Ml:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Sl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Ni:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case yl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ml:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Sl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}I=null,R=null,U=null,L=null,F.set(0,0,0),z=0,_=O,b=_e}return}pt=pt||ct,lt=lt||vt,Dt=Dt||Pt,(ct!==p||pt!==T)&&(i.blendEquationSeparate($e[ct],$e[pt]),p=ct,T=pt),(vt!==I||Pt!==R||lt!==U||Dt!==L)&&(i.blendFuncSeparate(D[vt],D[Pt],D[lt],D[Dt]),I=vt,R=Pt,U=lt,L=Dt),(Qt.equals(F)===!1||Me!==z)&&(i.blendColor(Qt.r,Qt.g,Qt.b,Me),F.copy(Qt),z=Me),_=O,b=!1}function ne(O,ct){O.side===Nn?Lt(i.CULL_FACE):ut(i.CULL_FACE);let vt=O.side===an;ct&&(vt=!vt),$t(vt),O.blending===Ni&&O.transparent===!1?Ae(jn):Ae(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),s.setMask(O.colorWrite);let Pt=O.stencilWrite;a.setTest(Pt),Pt&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),zt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ut(i.SAMPLE_ALPHA_TO_COVERAGE):Lt(i.SAMPLE_ALPHA_TO_COVERAGE)}function $t(O){E!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),E=O)}function Bt(O){O!==Gc?(ut(i.CULL_FACE),O!==N&&(O===vl?i.cullFace(i.BACK):O===Wc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Lt(i.CULL_FACE),N=O}function le(O){O!==q&&(et&&i.lineWidth(O),q=O)}function zt(O,ct,vt){O?(ut(i.POLYGON_OFFSET_FILL),(Y!==ct||tt!==vt)&&(i.polygonOffset(ct,vt),Y=ct,tt=vt)):Lt(i.POLYGON_OFFSET_FILL)}function jt(O){O?ut(i.SCISSOR_TEST):Lt(i.SCISSOR_TEST)}function Be(O){O===void 0&&(O=i.TEXTURE0+rt-1),bt!==O&&(i.activeTexture(O),bt=O)}function Ue(O,ct,vt){vt===void 0&&(bt===null?vt=i.TEXTURE0+rt-1:vt=bt);let Pt=Ct[vt];Pt===void 0&&(Pt={type:void 0,texture:void 0},Ct[vt]=Pt),(Pt.type!==O||Pt.texture!==ct)&&(bt!==vt&&(i.activeTexture(vt),bt=vt),i.bindTexture(O,ct||ot[O]),Pt.type=O,Pt.texture=ct)}function A(){let O=Ct[bt];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function x(){try{i.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function $(){try{i.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function it(){try{i.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ht(){try{i.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Q(){try{i.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ut(){try{i.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function gt(){try{i.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Nt(){try{i.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function kt(){try{i.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ft(){try{i.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function xt(O){ve.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),ve.copy(O))}function Yt(O){be.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),be.copy(O))}function St(O,ct){let vt=l.get(ct);vt===void 0&&(vt=new WeakMap,l.set(ct,vt));let Pt=vt.get(O);Pt===void 0&&(Pt=i.getUniformBlockIndex(ct,O.name),vt.set(O,Pt))}function Mt(O,ct){let Pt=l.get(ct).get(O);c.get(ct)!==Pt&&(i.uniformBlockBinding(ct,Pt,O.__bindingPointIndex),c.set(ct,Pt))}function wt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},bt=null,Ct={},f={},m=new WeakMap,g=[],v=null,y=!1,_=null,p=null,I=null,R=null,T=null,U=null,L=null,F=new se(0,0,0),z=0,b=!1,E=null,N=null,q=null,Y=null,tt=null,ve.set(0,0,i.canvas.width,i.canvas.height),be.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ut,disable:Lt,bindFramebuffer:Kt,drawBuffers:Ht,useProgram:ue,setBlending:Ae,setMaterial:ne,setFlipSided:$t,setCullFace:Bt,setLineWidth:le,setPolygonOffset:zt,setScissorTest:jt,activeTexture:Be,bindTexture:Ue,unbindTexture:A,compressedTexImage2D:x,compressedTexImage3D:$,texImage2D:kt,texImage3D:ft,updateUBOMapping:St,uniformBlockBinding:Mt,texStorage2D:gt,texStorage3D:Nt,texSubImage2D:it,texSubImage3D:ht,compressedTexSubImage2D:Q,compressedTexSubImage3D:Ut,scissor:xt,viewport:Yt,reset:wt}}function Y_(i,t,e,n,r,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ee,h=new WeakMap,f,m=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(A,x){return g?new OffscreenCanvas(A,x):Kr("canvas")}function y(A,x,$){let it=1,ht=Ue(A);if((ht.width>$||ht.height>$)&&(it=$/Math.max(ht.width,ht.height)),it<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let Q=Math.floor(it*ht.width),Ut=Math.floor(it*ht.height);f===void 0&&(f=v(Q,Ut));let gt=x?v(Q,Ut):f;return gt.width=Q,gt.height=Ut,gt.getContext("2d").drawImage(A,0,0,Q,Ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ht.width+"x"+ht.height+") to ("+Q+"x"+Ut+")."),gt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ht.width+"x"+ht.height+")."),A;return A}function _(A){return A.generateMipmaps}function p(A){i.generateMipmap(A)}function I(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function R(A,x,$,it,ht=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Q=x;if(x===i.RED&&($===i.FLOAT&&(Q=i.R32F),$===i.HALF_FLOAT&&(Q=i.R16F),$===i.UNSIGNED_BYTE&&(Q=i.R8)),x===i.RED_INTEGER&&($===i.UNSIGNED_BYTE&&(Q=i.R8UI),$===i.UNSIGNED_SHORT&&(Q=i.R16UI),$===i.UNSIGNED_INT&&(Q=i.R32UI),$===i.BYTE&&(Q=i.R8I),$===i.SHORT&&(Q=i.R16I),$===i.INT&&(Q=i.R32I)),x===i.RG&&($===i.FLOAT&&(Q=i.RG32F),$===i.HALF_FLOAT&&(Q=i.RG16F),$===i.UNSIGNED_BYTE&&(Q=i.RG8)),x===i.RG_INTEGER&&($===i.UNSIGNED_BYTE&&(Q=i.RG8UI),$===i.UNSIGNED_SHORT&&(Q=i.RG16UI),$===i.UNSIGNED_INT&&(Q=i.RG32UI),$===i.BYTE&&(Q=i.RG8I),$===i.SHORT&&(Q=i.RG16I),$===i.INT&&(Q=i.RG32I)),x===i.RGB_INTEGER&&($===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),$===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),$===i.UNSIGNED_INT&&(Q=i.RGB32UI),$===i.BYTE&&(Q=i.RGB8I),$===i.SHORT&&(Q=i.RGB16I),$===i.INT&&(Q=i.RGB32I)),x===i.RGBA_INTEGER&&($===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),$===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),$===i.UNSIGNED_INT&&(Q=i.RGBA32UI),$===i.BYTE&&(Q=i.RGBA8I),$===i.SHORT&&(Q=i.RGBA16I),$===i.INT&&(Q=i.RGBA32I)),x===i.RGB&&($===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),$===i.UNSIGNED_INT_10F_11F_11F_REV&&(Q=i.R11F_G11F_B10F)),x===i.RGBA){let Ut=ht?Zr:me.getTransfer(it);$===i.FLOAT&&(Q=i.RGBA32F),$===i.HALF_FLOAT&&(Q=i.RGBA16F),$===i.UNSIGNED_BYTE&&(Q=Ut===Se?i.SRGB8_ALPHA8:i.RGBA8),$===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),$===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function T(A,x){let $;return A?x===null||x===vi||x===Cr?$=i.DEPTH24_STENCIL8:x===Fn?$=i.DEPTH32F_STENCIL8:x===wr&&($=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===vi||x===Cr?$=i.DEPTH_COMPONENT24:x===Fn?$=i.DEPTH_COMPONENT32F:x===wr&&($=i.DEPTH_COMPONENT16),$}function U(A,x){return _(A)===!0||A.isFramebufferTexture&&A.minFilter!==xn&&A.minFilter!==wn?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function L(A){let x=A.target;x.removeEventListener("dispose",L),z(x),x.isVideoTexture&&h.delete(x)}function F(A){let x=A.target;x.removeEventListener("dispose",F),E(x)}function z(A){let x=n.get(A);if(x.__webglInit===void 0)return;let $=A.source,it=m.get($);if(it){let ht=it[x.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&b(A),Object.keys(it).length===0&&m.delete($)}n.remove(A)}function b(A){let x=n.get(A);i.deleteTexture(x.__webglTexture);let $=A.source,it=m.get($);delete it[x.__cacheKey],o.memory.textures--}function E(A){let x=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(x.__webglFramebuffer[it]))for(let ht=0;ht<x.__webglFramebuffer[it].length;ht++)i.deleteFramebuffer(x.__webglFramebuffer[it][ht]);else i.deleteFramebuffer(x.__webglFramebuffer[it]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[it])}else{if(Array.isArray(x.__webglFramebuffer))for(let it=0;it<x.__webglFramebuffer.length;it++)i.deleteFramebuffer(x.__webglFramebuffer[it]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let it=0;it<x.__webglColorRenderbuffer.length;it++)x.__webglColorRenderbuffer[it]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[it]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let $=A.textures;for(let it=0,ht=$.length;it<ht;it++){let Q=n.get($[it]);Q.__webglTexture&&(i.deleteTexture(Q.__webglTexture),o.memory.textures--),n.remove($[it])}n.remove(A)}let N=0;function q(){N=0}function Y(){let A=N;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),N+=1,A}function tt(A){let x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function rt(A,x){let $=n.get(A);if(A.isVideoTexture&&jt(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&$.__version!==A.version){let it=A.image;if(it===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ot($,A,x);return}}else A.isExternalTexture&&($.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,$.__webglTexture,i.TEXTURE0+x)}function et(A,x){let $=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&$.__version!==A.version){ot($,A,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,$.__webglTexture,i.TEXTURE0+x)}function _t(A,x){let $=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&$.__version!==A.version){ot($,A,x);return}e.bindTexture(i.TEXTURE_3D,$.__webglTexture,i.TEXTURE0+x)}function j(A,x){let $=n.get(A);if(A.version>0&&$.__version!==A.version){ut($,A,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture,i.TEXTURE0+x)}let bt={[ro]:i.REPEAT,[hi]:i.CLAMP_TO_EDGE,[so]:i.MIRRORED_REPEAT},Ct={[xn]:i.NEAREST,[xh]:i.NEAREST_MIPMAP_NEAREST,[gs]:i.NEAREST_MIPMAP_LINEAR,[wn]:i.LINEAR,[Oo]:i.LINEAR_MIPMAP_NEAREST,[_i]:i.LINEAR_MIPMAP_LINEAR},Gt={[bh]:i.NEVER,[Rh]:i.ALWAYS,[Eh]:i.LESS,[Ul]:i.LEQUAL,[Th]:i.EQUAL,[Ch]:i.GEQUAL,[wh]:i.GREATER,[Ah]:i.NOTEQUAL};function ae(A,x){if(x.type===Fn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===wn||x.magFilter===Oo||x.magFilter===gs||x.magFilter===_i||x.minFilter===wn||x.minFilter===Oo||x.minFilter===gs||x.minFilter===_i)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,bt[x.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,bt[x.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,bt[x.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,Ct[x.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,Ct[x.minFilter]),x.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Gt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===xn||x.minFilter!==gs&&x.minFilter!==_i||x.type===Fn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let $=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function ve(A,x){let $=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",L));let it=x.source,ht=m.get(it);ht===void 0&&(ht={},m.set(it,ht));let Q=tt(x);if(Q!==A.__cacheKey){ht[Q]===void 0&&(ht[Q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,$=!0),ht[Q].usedTimes++;let Ut=ht[A.__cacheKey];Ut!==void 0&&(ht[A.__cacheKey].usedTimes--,Ut.usedTimes===0&&b(x)),A.__cacheKey=Q,A.__webglTexture=ht[Q].texture}return $}function be(A,x,$){return Math.floor(Math.floor(A/$)/x)}function ge(A,x,$,it){let Q=A.updateRanges;if(Q.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,$,it,x.data);else{Q.sort((ft,xt)=>ft.start-xt.start);let Ut=0;for(let ft=1;ft<Q.length;ft++){let xt=Q[Ut],Yt=Q[ft],St=xt.start+xt.count,Mt=be(Yt.start,x.width,4),wt=be(xt.start,x.width,4);Yt.start<=St+1&&Mt===wt&&be(Yt.start+Yt.count-1,x.width,4)===Mt?xt.count=Math.max(xt.count,Yt.start+Yt.count-xt.start):(++Ut,Q[Ut]=Yt)}Q.length=Ut+1;let gt=i.getParameter(i.UNPACK_ROW_LENGTH),Nt=i.getParameter(i.UNPACK_SKIP_PIXELS),kt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let ft=0,xt=Q.length;ft<xt;ft++){let Yt=Q[ft],St=Math.floor(Yt.start/4),Mt=Math.ceil(Yt.count/4),wt=St%x.width,O=Math.floor(St/x.width),ct=Mt,vt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,wt),i.pixelStorei(i.UNPACK_SKIP_ROWS,O),e.texSubImage2D(i.TEXTURE_2D,0,wt,O,ct,vt,$,it,x.data)}A.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,gt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Nt),i.pixelStorei(i.UNPACK_SKIP_ROWS,kt)}}function ot(A,x,$){let it=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(it=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(it=i.TEXTURE_3D);let ht=ve(A,x),Q=x.source;e.bindTexture(it,A.__webglTexture,i.TEXTURE0+$);let Ut=n.get(Q);if(Q.version!==Ut.__version||ht===!0){e.activeTexture(i.TEXTURE0+$);let gt=me.getPrimaries(me.workingColorSpace),Nt=x.colorSpace===ti?null:me.getPrimaries(x.colorSpace),kt=x.colorSpace===ti||gt===Nt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);let ft=y(x.image,!1,r.maxTextureSize);ft=Be(x,ft);let xt=s.convert(x.format,x.colorSpace),Yt=s.convert(x.type),St=R(x.internalFormat,xt,Yt,x.colorSpace,x.isVideoTexture);ae(it,x);let Mt,wt=x.mipmaps,O=x.isVideoTexture!==!0,ct=Ut.__version===void 0||ht===!0,vt=Q.dataReady,Pt=U(x,ft);if(x.isDepthTexture)St=T(x.format===Rr,x.type),ct&&(O?e.texStorage2D(i.TEXTURE_2D,1,St,ft.width,ft.height):e.texImage2D(i.TEXTURE_2D,0,St,ft.width,ft.height,0,xt,Yt,null));else if(x.isDataTexture)if(wt.length>0){O&&ct&&e.texStorage2D(i.TEXTURE_2D,Pt,St,wt[0].width,wt[0].height);for(let pt=0,lt=wt.length;pt<lt;pt++)Mt=wt[pt],O?vt&&e.texSubImage2D(i.TEXTURE_2D,pt,0,0,Mt.width,Mt.height,xt,Yt,Mt.data):e.texImage2D(i.TEXTURE_2D,pt,St,Mt.width,Mt.height,0,xt,Yt,Mt.data);x.generateMipmaps=!1}else O?(ct&&e.texStorage2D(i.TEXTURE_2D,Pt,St,ft.width,ft.height),vt&&ge(x,ft,xt,Yt)):e.texImage2D(i.TEXTURE_2D,0,St,ft.width,ft.height,0,xt,Yt,ft.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){O&&ct&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Pt,St,wt[0].width,wt[0].height,ft.depth);for(let pt=0,lt=wt.length;pt<lt;pt++)if(Mt=wt[pt],x.format!==Mn)if(xt!==null)if(O){if(vt)if(x.layerUpdates.size>0){let Dt=Vl(Mt.width,Mt.height,x.format,x.type);for(let Qt of x.layerUpdates){let Me=Mt.data.subarray(Qt*Dt/Mt.data.BYTES_PER_ELEMENT,(Qt+1)*Dt/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,Qt,Mt.width,Mt.height,1,xt,Me)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,0,Mt.width,Mt.height,ft.depth,xt,Mt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,pt,St,Mt.width,Mt.height,ft.depth,0,Mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?vt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,0,Mt.width,Mt.height,ft.depth,xt,Yt,Mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,pt,St,Mt.width,Mt.height,ft.depth,0,xt,Yt,Mt.data)}else{O&&ct&&e.texStorage2D(i.TEXTURE_2D,Pt,St,wt[0].width,wt[0].height);for(let pt=0,lt=wt.length;pt<lt;pt++)Mt=wt[pt],x.format!==Mn?xt!==null?O?vt&&e.compressedTexSubImage2D(i.TEXTURE_2D,pt,0,0,Mt.width,Mt.height,xt,Mt.data):e.compressedTexImage2D(i.TEXTURE_2D,pt,St,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?vt&&e.texSubImage2D(i.TEXTURE_2D,pt,0,0,Mt.width,Mt.height,xt,Yt,Mt.data):e.texImage2D(i.TEXTURE_2D,pt,St,Mt.width,Mt.height,0,xt,Yt,Mt.data)}else if(x.isDataArrayTexture)if(O){if(ct&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Pt,St,ft.width,ft.height,ft.depth),vt)if(x.layerUpdates.size>0){let pt=Vl(ft.width,ft.height,x.format,x.type);for(let lt of x.layerUpdates){let Dt=ft.data.subarray(lt*pt/ft.data.BYTES_PER_ELEMENT,(lt+1)*pt/ft.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,lt,ft.width,ft.height,1,xt,Yt,Dt)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ft.width,ft.height,ft.depth,xt,Yt,ft.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,St,ft.width,ft.height,ft.depth,0,xt,Yt,ft.data);else if(x.isData3DTexture)O?(ct&&e.texStorage3D(i.TEXTURE_3D,Pt,St,ft.width,ft.height,ft.depth),vt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ft.width,ft.height,ft.depth,xt,Yt,ft.data)):e.texImage3D(i.TEXTURE_3D,0,St,ft.width,ft.height,ft.depth,0,xt,Yt,ft.data);else if(x.isFramebufferTexture){if(ct)if(O)e.texStorage2D(i.TEXTURE_2D,Pt,St,ft.width,ft.height);else{let pt=ft.width,lt=ft.height;for(let Dt=0;Dt<Pt;Dt++)e.texImage2D(i.TEXTURE_2D,Dt,St,pt,lt,0,xt,Yt,null),pt>>=1,lt>>=1}}else if(wt.length>0){if(O&&ct){let pt=Ue(wt[0]);e.texStorage2D(i.TEXTURE_2D,Pt,St,pt.width,pt.height)}for(let pt=0,lt=wt.length;pt<lt;pt++)Mt=wt[pt],O?vt&&e.texSubImage2D(i.TEXTURE_2D,pt,0,0,xt,Yt,Mt):e.texImage2D(i.TEXTURE_2D,pt,St,xt,Yt,Mt);x.generateMipmaps=!1}else if(O){if(ct){let pt=Ue(ft);e.texStorage2D(i.TEXTURE_2D,Pt,St,pt.width,pt.height)}vt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,xt,Yt,ft)}else e.texImage2D(i.TEXTURE_2D,0,St,xt,Yt,ft);_(x)&&p(it),Ut.__version=Q.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function ut(A,x,$){if(x.image.length!==6)return;let it=ve(A,x),ht=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+$);let Q=n.get(ht);if(ht.version!==Q.__version||it===!0){e.activeTexture(i.TEXTURE0+$);let Ut=me.getPrimaries(me.workingColorSpace),gt=x.colorSpace===ti?null:me.getPrimaries(x.colorSpace),Nt=x.colorSpace===ti||Ut===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt);let kt=x.isCompressedTexture||x.image[0].isCompressedTexture,ft=x.image[0]&&x.image[0].isDataTexture,xt=[];for(let lt=0;lt<6;lt++)!kt&&!ft?xt[lt]=y(x.image[lt],!0,r.maxCubemapSize):xt[lt]=ft?x.image[lt].image:x.image[lt],xt[lt]=Be(x,xt[lt]);let Yt=xt[0],St=s.convert(x.format,x.colorSpace),Mt=s.convert(x.type),wt=R(x.internalFormat,St,Mt,x.colorSpace),O=x.isVideoTexture!==!0,ct=Q.__version===void 0||it===!0,vt=ht.dataReady,Pt=U(x,Yt);ae(i.TEXTURE_CUBE_MAP,x);let pt;if(kt){O&&ct&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Pt,wt,Yt.width,Yt.height);for(let lt=0;lt<6;lt++){pt=xt[lt].mipmaps;for(let Dt=0;Dt<pt.length;Dt++){let Qt=pt[Dt];x.format!==Mn?St!==null?O?vt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Dt,0,0,Qt.width,Qt.height,St,Qt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Dt,wt,Qt.width,Qt.height,0,Qt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Dt,0,0,Qt.width,Qt.height,St,Mt,Qt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Dt,wt,Qt.width,Qt.height,0,St,Mt,Qt.data)}}}else{if(pt=x.mipmaps,O&&ct){pt.length>0&&Pt++;let lt=Ue(xt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Pt,wt,lt.width,lt.height)}for(let lt=0;lt<6;lt++)if(ft){O?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,xt[lt].width,xt[lt].height,St,Mt,xt[lt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,wt,xt[lt].width,xt[lt].height,0,St,Mt,xt[lt].data);for(let Dt=0;Dt<pt.length;Dt++){let Me=pt[Dt].image[lt].image;O?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Dt+1,0,0,Me.width,Me.height,St,Mt,Me.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Dt+1,wt,Me.width,Me.height,0,St,Mt,Me.data)}}else{O?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,St,Mt,xt[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,wt,St,Mt,xt[lt]);for(let Dt=0;Dt<pt.length;Dt++){let Qt=pt[Dt];O?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Dt+1,0,0,St,Mt,Qt.image[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Dt+1,wt,St,Mt,Qt.image[lt])}}}_(x)&&p(i.TEXTURE_CUBE_MAP),Q.__version=ht.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function Lt(A,x,$,it,ht,Q){let Ut=s.convert($.format,$.colorSpace),gt=s.convert($.type),Nt=R($.internalFormat,Ut,gt,$.colorSpace),kt=n.get(x),ft=n.get($);if(ft.__renderTarget=x,!kt.__hasExternalTextures){let xt=Math.max(1,x.width>>Q),Yt=Math.max(1,x.height>>Q);ht===i.TEXTURE_3D||ht===i.TEXTURE_2D_ARRAY?e.texImage3D(ht,Q,Nt,xt,Yt,x.depth,0,Ut,gt,null):e.texImage2D(ht,Q,Nt,xt,Yt,0,Ut,gt,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),zt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,it,ht,ft.__webglTexture,0,le(x)):(ht===i.TEXTURE_2D||ht>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,it,ht,ft.__webglTexture,Q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Kt(A,x,$){if(i.bindRenderbuffer(i.RENDERBUFFER,A),x.depthBuffer){let it=x.depthTexture,ht=it&&it.isDepthTexture?it.type:null,Q=T(x.stencilBuffer,ht),Ut=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=le(x);zt(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,gt,Q,x.width,x.height):$?i.renderbufferStorageMultisample(i.RENDERBUFFER,gt,Q,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Q,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ut,i.RENDERBUFFER,A)}else{let it=x.textures;for(let ht=0;ht<it.length;ht++){let Q=it[ht],Ut=s.convert(Q.format,Q.colorSpace),gt=s.convert(Q.type),Nt=R(Q.internalFormat,Ut,gt,Q.colorSpace),kt=le(x);$&&zt(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,kt,Nt,x.width,x.height):zt(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,kt,Nt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Nt,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ht(A,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let it=n.get(x.depthTexture);it.__renderTarget=x,(!it.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),rt(x.depthTexture,0);let ht=it.__webglTexture,Q=le(x);if(x.depthTexture.format===_r)zt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ht,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ht,0);else if(x.depthTexture.format===Rr)zt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ht,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ht,0);else throw new Error("Unknown depthTexture format")}function ue(A){let x=n.get(A),$=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){let it=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),it){let ht=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,it.removeEventListener("dispose",ht)};it.addEventListener("dispose",ht),x.__depthDisposeCallback=ht}x.__boundDepthTexture=it}if(A.depthTexture&&!x.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");let it=A.texture.mipmaps;it&&it.length>0?Ht(x.__webglFramebuffer[0],A):Ht(x.__webglFramebuffer,A)}else if($){x.__webglDepthbuffer=[];for(let it=0;it<6;it++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[it]),x.__webglDepthbuffer[it]===void 0)x.__webglDepthbuffer[it]=i.createRenderbuffer(),Kt(x.__webglDepthbuffer[it],A,!1);else{let ht=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=x.__webglDepthbuffer[it];i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,ht,i.RENDERBUFFER,Q)}}else{let it=A.texture.mipmaps;if(it&&it.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Kt(x.__webglDepthbuffer,A,!1);else{let ht=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,ht,i.RENDERBUFFER,Q)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function $e(A,x,$){let it=n.get(A);x!==void 0&&Lt(it.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),$!==void 0&&ue(A)}function D(A){let x=A.texture,$=n.get(A),it=n.get(x);A.addEventListener("dispose",F);let ht=A.textures,Q=A.isWebGLCubeRenderTarget===!0,Ut=ht.length>1;if(Ut||(it.__webglTexture===void 0&&(it.__webglTexture=i.createTexture()),it.__version=x.version,o.memory.textures++),Q){$.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(x.mipmaps&&x.mipmaps.length>0){$.__webglFramebuffer[gt]=[];for(let Nt=0;Nt<x.mipmaps.length;Nt++)$.__webglFramebuffer[gt][Nt]=i.createFramebuffer()}else $.__webglFramebuffer[gt]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){$.__webglFramebuffer=[];for(let gt=0;gt<x.mipmaps.length;gt++)$.__webglFramebuffer[gt]=i.createFramebuffer()}else $.__webglFramebuffer=i.createFramebuffer();if(Ut)for(let gt=0,Nt=ht.length;gt<Nt;gt++){let kt=n.get(ht[gt]);kt.__webglTexture===void 0&&(kt.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&zt(A)===!1){$.__webglMultisampledFramebuffer=i.createFramebuffer(),$.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let gt=0;gt<ht.length;gt++){let Nt=ht[gt];$.__webglColorRenderbuffer[gt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,$.__webglColorRenderbuffer[gt]);let kt=s.convert(Nt.format,Nt.colorSpace),ft=s.convert(Nt.type),xt=R(Nt.internalFormat,kt,ft,Nt.colorSpace,A.isXRRenderTarget===!0),Yt=le(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Yt,xt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,$.__webglColorRenderbuffer[gt])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&($.__webglDepthRenderbuffer=i.createRenderbuffer(),Kt($.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){e.bindTexture(i.TEXTURE_CUBE_MAP,it.__webglTexture),ae(i.TEXTURE_CUBE_MAP,x);for(let gt=0;gt<6;gt++)if(x.mipmaps&&x.mipmaps.length>0)for(let Nt=0;Nt<x.mipmaps.length;Nt++)Lt($.__webglFramebuffer[gt][Nt],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Nt);else Lt($.__webglFramebuffer[gt],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);_(x)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ut){for(let gt=0,Nt=ht.length;gt<Nt;gt++){let kt=ht[gt],ft=n.get(kt),xt=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(xt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(xt,ft.__webglTexture),ae(xt,kt),Lt($.__webglFramebuffer,A,kt,i.COLOR_ATTACHMENT0+gt,xt,0),_(kt)&&p(xt)}e.unbindTexture()}else{let gt=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(gt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(gt,it.__webglTexture),ae(gt,x),x.mipmaps&&x.mipmaps.length>0)for(let Nt=0;Nt<x.mipmaps.length;Nt++)Lt($.__webglFramebuffer[Nt],A,x,i.COLOR_ATTACHMENT0,gt,Nt);else Lt($.__webglFramebuffer,A,x,i.COLOR_ATTACHMENT0,gt,0);_(x)&&p(gt),e.unbindTexture()}A.depthBuffer&&ue(A)}function Ae(A){let x=A.textures;for(let $=0,it=x.length;$<it;$++){let ht=x[$];if(_(ht)){let Q=I(A),Ut=n.get(ht).__webglTexture;e.bindTexture(Q,Ut),p(Q),e.unbindTexture()}}}let ne=[],$t=[];function Bt(A){if(A.samples>0){if(zt(A)===!1){let x=A.textures,$=A.width,it=A.height,ht=i.COLOR_BUFFER_BIT,Q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ut=n.get(A),gt=x.length>1;if(gt)for(let kt=0;kt<x.length;kt++)e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+kt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+kt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer);let Nt=A.texture.mipmaps;Nt&&Nt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer);for(let kt=0;kt<x.length;kt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ht|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ht|=i.STENCIL_BUFFER_BIT)),gt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ut.__webglColorRenderbuffer[kt]);let ft=n.get(x[kt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ft,0)}i.blitFramebuffer(0,0,$,it,0,0,$,it,ht,i.NEAREST),c===!0&&(ne.length=0,$t.length=0,ne.push(i.COLOR_ATTACHMENT0+kt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(ne.push(Q),$t.push(Q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,$t)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ne))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),gt)for(let kt=0;kt<x.length;kt++){e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+kt,i.RENDERBUFFER,Ut.__webglColorRenderbuffer[kt]);let ft=n.get(x[kt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+kt,i.TEXTURE_2D,ft,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){let x=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function le(A){return Math.min(r.maxSamples,A.samples)}function zt(A){let x=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function jt(A){let x=o.render.frame;h.get(A)!==x&&(h.set(A,x),A.update())}function Be(A,x){let $=A.colorSpace,it=A.format,ht=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||$!==Oi&&$!==ti&&(me.getTransfer($)===Se?(it!==Mn||ht!==Rn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),x}function Ue(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=Y,this.resetTextureUnits=q,this.setTexture2D=rt,this.setTexture2DArray=et,this.setTexture3D=_t,this.setTextureCube=j,this.rebindTextures=$e,this.setupRenderTarget=D,this.updateRenderTargetMipmap=Ae,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=ue,this.setupFrameBufferTexture=Lt,this.useMultisampledRTT=zt}function Z_(i,t){function e(n,r=ti){let s,o=me.getTransfer(r);if(n===Rn)return i.UNSIGNED_BYTE;if(n===zo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ko)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Al)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Cl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Tl)return i.BYTE;if(n===wl)return i.SHORT;if(n===wr)return i.UNSIGNED_SHORT;if(n===Bo)return i.INT;if(n===vi)return i.UNSIGNED_INT;if(n===Fn)return i.FLOAT;if(n===Ar)return i.HALF_FLOAT;if(n===Rl)return i.ALPHA;if(n===Pl)return i.RGB;if(n===Mn)return i.RGBA;if(n===_r)return i.DEPTH_COMPONENT;if(n===Rr)return i.DEPTH_STENCIL;if(n===Il)return i.RED;if(n===Vo)return i.RED_INTEGER;if(n===Dl)return i.RG;if(n===Ho)return i.RG_INTEGER;if(n===Go)return i.RGBA_INTEGER;if(n===_s||n===vs||n===xs||n===ys)if(o===Se)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===_s)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===vs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===xs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ys)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===_s)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===vs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===xs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ys)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Wo||n===Xo||n===qo||n===$o)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Wo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Xo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===qo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===$o)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Yo||n===Zo||n===Jo)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Yo||n===Zo)return o===Se?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Jo)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ko||n===jo||n===Qo||n===ta||n===ea||n===na||n===ia||n===ra||n===sa||n===oa||n===aa||n===la||n===ca||n===ha)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ko)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===jo)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Qo)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ta)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ea)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===na)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ia)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ra)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===sa)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===oa)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===aa)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===la)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ca)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ha)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ua||n===da||n===fa)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===ua)return o===Se?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===da)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===fa)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===pa||n===ma||n===ga||n===_a)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===pa)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ma)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ga)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===_a)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Cr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var J_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,K_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,tc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new os(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Cn({vertexShader:J_,fragmentShader:K_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ye(new Hi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ec=class extends In{constructor(t,e){super();let n=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,f=null,m=null,g=null,v=null,y=typeof XRWebGLBinding<"u",_=new tc,p={},I=e.getContextAttributes(),R=null,T=null,U=[],L=[],F=new ee,z=null,b=new je;b.viewport=new Ne;let E=new je;E.viewport=new Ne;let N=[b,E],q=new Ao,Y=null,tt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ot){let ut=U[ot];return ut===void 0&&(ut=new Mr,U[ot]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(ot){let ut=U[ot];return ut===void 0&&(ut=new Mr,U[ot]=ut),ut.getGripSpace()},this.getHand=function(ot){let ut=U[ot];return ut===void 0&&(ut=new Mr,U[ot]=ut),ut.getHandSpace()};function rt(ot){let ut=L.indexOf(ot.inputSource);if(ut===-1)return;let Lt=U[ut];Lt!==void 0&&(Lt.update(ot.inputSource,ot.frame,l||o),Lt.dispatchEvent({type:ot.type,data:ot.inputSource}))}function et(){r.removeEventListener("select",rt),r.removeEventListener("selectstart",rt),r.removeEventListener("selectend",rt),r.removeEventListener("squeeze",rt),r.removeEventListener("squeezestart",rt),r.removeEventListener("squeezeend",rt),r.removeEventListener("end",et),r.removeEventListener("inputsourceschange",_t);for(let ot=0;ot<U.length;ot++){let ut=L[ot];ut!==null&&(L[ot]=null,U[ot].disconnect(ut))}Y=null,tt=null,_.reset();for(let ot in p)delete p[ot];t.setRenderTarget(R),g=null,m=null,f=null,r=null,T=null,ge.stop(),n.isPresenting=!1,t.setPixelRatio(z),t.setSize(F.width,F.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ot){s=ot,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ot){a=ot,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(ot){l=ot},this.getBaseLayer=function(){return m!==null?m:g},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(r,e)),f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(ot){if(r=ot,r!==null){if(R=t.getRenderTarget(),r.addEventListener("select",rt),r.addEventListener("selectstart",rt),r.addEventListener("selectend",rt),r.addEventListener("squeeze",rt),r.addEventListener("squeezestart",rt),r.addEventListener("squeezeend",rt),r.addEventListener("end",et),r.addEventListener("inputsourceschange",_t),I.xrCompatible!==!0&&await e.makeXRCompatible(),z=t.getPixelRatio(),t.getSize(F),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let Lt=null,Kt=null,Ht=null;I.depth&&(Ht=I.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Lt=I.stencil?Rr:_r,Kt=I.stencil?Cr:vi);let ue={colorFormat:e.RGBA8,depthFormat:Ht,scaleFactor:s};f=this.getBinding(),m=f.createProjectionLayer(ue),r.updateRenderState({layers:[m]}),t.setPixelRatio(1),t.setSize(m.textureWidth,m.textureHeight,!1),T=new Dn(m.textureWidth,m.textureHeight,{format:Mn,type:Rn,depthTexture:new ss(m.textureWidth,m.textureHeight,Kt,void 0,void 0,void 0,void 0,void 0,void 0,Lt),stencilBuffer:I.stencil,colorSpace:t.outputColorSpace,samples:I.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{let Lt={antialias:I.antialias,alpha:!0,depth:I.depth,stencil:I.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,e,Lt),r.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),T=new Dn(g.framebufferWidth,g.framebufferHeight,{format:Mn,type:Rn,colorSpace:t.outputColorSpace,stencilBuffer:I.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),ge.setContext(r),ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function _t(ot){for(let ut=0;ut<ot.removed.length;ut++){let Lt=ot.removed[ut],Kt=L.indexOf(Lt);Kt>=0&&(L[Kt]=null,U[Kt].disconnect(Lt))}for(let ut=0;ut<ot.added.length;ut++){let Lt=ot.added[ut],Kt=L.indexOf(Lt);if(Kt===-1){for(let ue=0;ue<U.length;ue++)if(ue>=L.length){L.push(Lt),Kt=ue;break}else if(L[ue]===null){L[ue]=Lt,Kt=ue;break}if(Kt===-1)break}let Ht=U[Kt];Ht&&Ht.connect(Lt)}}let j=new W,bt=new W;function Ct(ot,ut,Lt){j.setFromMatrixPosition(ut.matrixWorld),bt.setFromMatrixPosition(Lt.matrixWorld);let Kt=j.distanceTo(bt),Ht=ut.projectionMatrix.elements,ue=Lt.projectionMatrix.elements,$e=Ht[14]/(Ht[10]-1),D=Ht[14]/(Ht[10]+1),Ae=(Ht[9]+1)/Ht[5],ne=(Ht[9]-1)/Ht[5],$t=(Ht[8]-1)/Ht[0],Bt=(ue[8]+1)/ue[0],le=$e*$t,zt=$e*Bt,jt=Kt/(-$t+Bt),Be=jt*-$t;if(ut.matrixWorld.decompose(ot.position,ot.quaternion,ot.scale),ot.translateX(Be),ot.translateZ(jt),ot.matrixWorld.compose(ot.position,ot.quaternion,ot.scale),ot.matrixWorldInverse.copy(ot.matrixWorld).invert(),Ht[10]===-1)ot.projectionMatrix.copy(ut.projectionMatrix),ot.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{let Ue=$e+jt,A=D+jt,x=le-Be,$=zt+(Kt-Be),it=Ae*D/A*Ue,ht=ne*D/A*Ue;ot.projectionMatrix.makePerspective(x,$,it,ht,Ue,A),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert()}}function Gt(ot,ut){ut===null?ot.matrixWorld.copy(ot.matrix):ot.matrixWorld.multiplyMatrices(ut.matrixWorld,ot.matrix),ot.matrixWorldInverse.copy(ot.matrixWorld).invert()}this.updateCamera=function(ot){if(r===null)return;let ut=ot.near,Lt=ot.far;_.texture!==null&&(_.depthNear>0&&(ut=_.depthNear),_.depthFar>0&&(Lt=_.depthFar)),q.near=E.near=b.near=ut,q.far=E.far=b.far=Lt,(Y!==q.near||tt!==q.far)&&(r.updateRenderState({depthNear:q.near,depthFar:q.far}),Y=q.near,tt=q.far),q.layers.mask=ot.layers.mask|6,b.layers.mask=q.layers.mask&3,E.layers.mask=q.layers.mask&5;let Kt=ot.parent,Ht=q.cameras;Gt(q,Kt);for(let ue=0;ue<Ht.length;ue++)Gt(Ht[ue],Kt);Ht.length===2?Ct(q,b,E):q.projectionMatrix.copy(b.projectionMatrix),ae(ot,q,Kt)};function ae(ot,ut,Lt){Lt===null?ot.matrix.copy(ut.matrixWorld):(ot.matrix.copy(Lt.matrixWorld),ot.matrix.invert(),ot.matrix.multiply(ut.matrixWorld)),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.updateMatrixWorld(!0),ot.projectionMatrix.copy(ut.projectionMatrix),ot.projectionMatrixInverse.copy(ut.projectionMatrixInverse),ot.isPerspectiveCamera&&(ot.fov=vr*2*Math.atan(1/ot.projectionMatrix.elements[5]),ot.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(m===null&&g===null))return c},this.setFoveation=function(ot){c=ot,m!==null&&(m.fixedFoveation=ot),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=ot)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(q)},this.getCameraTexture=function(ot){return p[ot]};let ve=null;function be(ot,ut){if(h=ut.getViewerPose(l||o),v=ut,h!==null){let Lt=h.views;g!==null&&(t.setRenderTargetFramebuffer(T,g.framebuffer),t.setRenderTarget(T));let Kt=!1;Lt.length!==q.cameras.length&&(q.cameras.length=0,Kt=!0);for(let D=0;D<Lt.length;D++){let Ae=Lt[D],ne=null;if(g!==null)ne=g.getViewport(Ae);else{let Bt=f.getViewSubImage(m,Ae);ne=Bt.viewport,D===0&&(t.setRenderTargetTextures(T,Bt.colorTexture,Bt.depthStencilTexture),t.setRenderTarget(T))}let $t=N[D];$t===void 0&&($t=new je,$t.layers.enable(D),$t.viewport=new Ne,N[D]=$t),$t.matrix.fromArray(Ae.transform.matrix),$t.matrix.decompose($t.position,$t.quaternion,$t.scale),$t.projectionMatrix.fromArray(Ae.projectionMatrix),$t.projectionMatrixInverse.copy($t.projectionMatrix).invert(),$t.viewport.set(ne.x,ne.y,ne.width,ne.height),D===0&&(q.matrix.copy($t.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Kt===!0&&q.cameras.push($t)}let Ht=r.enabledFeatures;if(Ht&&Ht.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){f=n.getBinding();let D=f.getDepthInformation(Lt[0]);D&&D.isValid&&D.texture&&_.init(D,r.renderState)}if(Ht&&Ht.includes("camera-access")&&y){t.state.unbindTexture(),f=n.getBinding();for(let D=0;D<Lt.length;D++){let Ae=Lt[D].camera;if(Ae){let ne=p[Ae];ne||(ne=new os,p[Ae]=ne);let $t=f.getCameraImage(Ae);ne.sourceTexture=$t}}}}for(let Lt=0;Lt<U.length;Lt++){let Kt=L[Lt],Ht=U[Lt];Kt!==null&&Ht!==void 0&&Ht.update(Kt,ut,l||o)}ve&&ve(ot,ut),ut.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ut}),v=null}let ge=new ru;ge.setAnimationLoop(be),this.setAnimationLoop=function(ot){ve=ot},this.dispose=function(){}}},Zi=new An,j_=new Oe;function Q_(i,t){function e(_,p){_.matrixAutoUpdate===!0&&_.updateMatrix(),p.value.copy(_.matrix)}function n(_,p){p.color.getRGB(_.fogColor.value,Bl(i)),p.isFog?(_.fogNear.value=p.near,_.fogFar.value=p.far):p.isFogExp2&&(_.fogDensity.value=p.density)}function r(_,p,I,R,T){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(_,p):p.isMeshToonMaterial?(s(_,p),f(_,p)):p.isMeshPhongMaterial?(s(_,p),h(_,p)):p.isMeshStandardMaterial?(s(_,p),m(_,p),p.isMeshPhysicalMaterial&&g(_,p,T)):p.isMeshMatcapMaterial?(s(_,p),v(_,p)):p.isMeshDepthMaterial?s(_,p):p.isMeshDistanceMaterial?(s(_,p),y(_,p)):p.isMeshNormalMaterial?s(_,p):p.isLineBasicMaterial?(o(_,p),p.isLineDashedMaterial&&a(_,p)):p.isPointsMaterial?c(_,p,I,R):p.isSpriteMaterial?l(_,p):p.isShadowMaterial?(_.color.value.copy(p.color),_.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(_,p){_.opacity.value=p.opacity,p.color&&_.diffuse.value.copy(p.color),p.emissive&&_.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(_.map.value=p.map,e(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,e(p.alphaMap,_.alphaMapTransform)),p.bumpMap&&(_.bumpMap.value=p.bumpMap,e(p.bumpMap,_.bumpMapTransform),_.bumpScale.value=p.bumpScale,p.side===an&&(_.bumpScale.value*=-1)),p.normalMap&&(_.normalMap.value=p.normalMap,e(p.normalMap,_.normalMapTransform),_.normalScale.value.copy(p.normalScale),p.side===an&&_.normalScale.value.negate()),p.displacementMap&&(_.displacementMap.value=p.displacementMap,e(p.displacementMap,_.displacementMapTransform),_.displacementScale.value=p.displacementScale,_.displacementBias.value=p.displacementBias),p.emissiveMap&&(_.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,_.emissiveMapTransform)),p.specularMap&&(_.specularMap.value=p.specularMap,e(p.specularMap,_.specularMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest);let I=t.get(p),R=I.envMap,T=I.envMapRotation;R&&(_.envMap.value=R,Zi.copy(T),Zi.x*=-1,Zi.y*=-1,Zi.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Zi.y*=-1,Zi.z*=-1),_.envMapRotation.value.setFromMatrix4(j_.makeRotationFromEuler(Zi)),_.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=p.reflectivity,_.ior.value=p.ior,_.refractionRatio.value=p.refractionRatio),p.lightMap&&(_.lightMap.value=p.lightMap,_.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,_.lightMapTransform)),p.aoMap&&(_.aoMap.value=p.aoMap,_.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,_.aoMapTransform))}function o(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,p.map&&(_.map.value=p.map,e(p.map,_.mapTransform))}function a(_,p){_.dashSize.value=p.dashSize,_.totalSize.value=p.dashSize+p.gapSize,_.scale.value=p.scale}function c(_,p,I,R){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.size.value=p.size*I,_.scale.value=R*.5,p.map&&(_.map.value=p.map,e(p.map,_.uvTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,e(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function l(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.rotation.value=p.rotation,p.map&&(_.map.value=p.map,e(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,e(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function h(_,p){_.specular.value.copy(p.specular),_.shininess.value=Math.max(p.shininess,1e-4)}function f(_,p){p.gradientMap&&(_.gradientMap.value=p.gradientMap)}function m(_,p){_.metalness.value=p.metalness,p.metalnessMap&&(_.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,_.metalnessMapTransform)),_.roughness.value=p.roughness,p.roughnessMap&&(_.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,_.roughnessMapTransform)),p.envMap&&(_.envMapIntensity.value=p.envMapIntensity)}function g(_,p,I){_.ior.value=p.ior,p.sheen>0&&(_.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),_.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(_.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,_.sheenColorMapTransform)),p.sheenRoughnessMap&&(_.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,_.sheenRoughnessMapTransform))),p.clearcoat>0&&(_.clearcoat.value=p.clearcoat,_.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(_.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,_.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(_.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===an&&_.clearcoatNormalScale.value.negate())),p.dispersion>0&&(_.dispersion.value=p.dispersion),p.iridescence>0&&(_.iridescence.value=p.iridescence,_.iridescenceIOR.value=p.iridescenceIOR,_.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(_.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,_.iridescenceMapTransform)),p.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),p.transmission>0&&(_.transmission.value=p.transmission,_.transmissionSamplerMap.value=I.texture,_.transmissionSamplerSize.value.set(I.width,I.height),p.transmissionMap&&(_.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,_.transmissionMapTransform)),_.thickness.value=p.thickness,p.thicknessMap&&(_.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=p.attenuationDistance,_.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(_.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(_.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=p.specularIntensity,_.specularColor.value.copy(p.specularColor),p.specularColorMap&&(_.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,_.specularColorMapTransform)),p.specularIntensityMap&&(_.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,_.specularIntensityMapTransform))}function v(_,p){p.matcap&&(_.matcap.value=p.matcap)}function y(_,p){let I=t.get(p).light;_.referencePosition.value.setFromMatrixPosition(I.matrixWorld),_.nearDistance.value=I.shadow.camera.near,_.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function t0(i,t,e,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(I,R){let T=R.program;n.uniformBlockBinding(I,T)}function l(I,R){let T=r[I.id];T===void 0&&(v(I),T=h(I),r[I.id]=T,I.addEventListener("dispose",_));let U=R.program;n.updateUBOMapping(I,U);let L=t.render.frame;s[I.id]!==L&&(m(I),s[I.id]=L)}function h(I){let R=f();I.__bindingPointIndex=R;let T=i.createBuffer(),U=I.__size,L=I.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,U,L),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,R,T),T}function f(){for(let I=0;I<a;I++)if(o.indexOf(I)===-1)return o.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(I){let R=r[I.id],T=I.uniforms,U=I.__cache;i.bindBuffer(i.UNIFORM_BUFFER,R);for(let L=0,F=T.length;L<F;L++){let z=Array.isArray(T[L])?T[L]:[T[L]];for(let b=0,E=z.length;b<E;b++){let N=z[b];if(g(N,L,b,U)===!0){let q=N.__offset,Y=Array.isArray(N.value)?N.value:[N.value],tt=0;for(let rt=0;rt<Y.length;rt++){let et=Y[rt],_t=y(et);typeof et=="number"||typeof et=="boolean"?(N.__data[0]=et,i.bufferSubData(i.UNIFORM_BUFFER,q+tt,N.__data)):et.isMatrix3?(N.__data[0]=et.elements[0],N.__data[1]=et.elements[1],N.__data[2]=et.elements[2],N.__data[3]=0,N.__data[4]=et.elements[3],N.__data[5]=et.elements[4],N.__data[6]=et.elements[5],N.__data[7]=0,N.__data[8]=et.elements[6],N.__data[9]=et.elements[7],N.__data[10]=et.elements[8],N.__data[11]=0):(et.toArray(N.__data,tt),tt+=_t.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,q,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(I,R,T,U){let L=I.value,F=R+"_"+T;if(U[F]===void 0)return typeof L=="number"||typeof L=="boolean"?U[F]=L:U[F]=L.clone(),!0;{let z=U[F];if(typeof L=="number"||typeof L=="boolean"){if(z!==L)return U[F]=L,!0}else if(z.equals(L)===!1)return z.copy(L),!0}return!1}function v(I){let R=I.uniforms,T=0,U=16;for(let F=0,z=R.length;F<z;F++){let b=Array.isArray(R[F])?R[F]:[R[F]];for(let E=0,N=b.length;E<N;E++){let q=b[E],Y=Array.isArray(q.value)?q.value:[q.value];for(let tt=0,rt=Y.length;tt<rt;tt++){let et=Y[tt],_t=y(et),j=T%U,bt=j%_t.boundary,Ct=j+bt;T+=bt,Ct!==0&&U-Ct<_t.storage&&(T+=U-Ct),q.__data=new Float32Array(_t.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=T,T+=_t.storage}}}let L=T%U;return L>0&&(T+=U-L),I.__size=T,I.__cache={},this}function y(I){let R={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(R.boundary=4,R.storage=4):I.isVector2?(R.boundary=8,R.storage=8):I.isVector3||I.isColor?(R.boundary=16,R.storage=12):I.isVector4?(R.boundary=16,R.storage=16):I.isMatrix3?(R.boundary=48,R.storage=48):I.isMatrix4?(R.boundary=64,R.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),R}function _(I){let R=I.target;R.removeEventListener("dispose",_);let T=o.indexOf(R.__bindingPointIndex);o.splice(T,1),i.deleteBuffer(r[R.id]),delete r[R.id],delete s[R.id]}function p(){for(let I in r)i.deleteBuffer(r[I]);o=[],r={},s={}}return{bind:c,update:l,dispose:p}}var Sa=class{constructor(t={}){let{canvas:e=Ph(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:m=!1}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let v=new Uint32Array(4),y=new Int32Array(4),_=null,p=null,I=[],R=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,U=!1;this._outputColorSpace=fn;let L=0,F=0,z=null,b=-1,E=null,N=new Ne,q=new Ne,Y=null,tt=new se(0),rt=0,et=e.width,_t=e.height,j=1,bt=null,Ct=null,Gt=new Ne(0,0,et,_t),ae=new Ne(0,0,et,_t),ve=!1,be=new Sr,ge=!1,ot=!1,ut=new Oe,Lt=new W,Kt=new Ne,Ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ue=!1;function $e(){return z===null?j:1}let D=n;function Ae(M,k){return e.getContext(M,k)}try{let M={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",vt,!1),e.addEventListener("webglcontextrestored",Pt,!1),e.addEventListener("webglcontextcreationerror",pt,!1),D===null){let k="webgl2";if(D=Ae(k,M),D===null)throw Ae(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let ne,$t,Bt,le,zt,jt,Be,Ue,A,x,$,it,ht,Q,Ut,gt,Nt,kt,ft,xt,Yt,St,Mt,wt;function O(){ne=new vg(D),ne.init(),St=new Z_(D,ne),$t=new ug(D,ne,t,St),Bt=new $_(D,ne),$t.reversedDepthBuffer&&m&&Bt.buffers.depth.setReversed(!0),le=new Mg(D),zt=new U_,jt=new Y_(D,ne,Bt,zt,$t,St,le),Be=new fg(T),Ue=new _g(T),A=new Af(D),Mt=new cg(D,A),x=new xg(D,A,le,Mt),$=new bg(D,x,A,le),ft=new Sg(D,$t,jt),gt=new dg(zt),it=new L_(T,Be,Ue,ne,$t,Mt,gt),ht=new Q_(T,zt),Q=new F_,Ut=new H_(ne),kt=new lg(T,Be,Ue,Bt,$,g,c),Nt=new X_(T,$,$t),wt=new t0(D,le,$t,Bt),xt=new hg(D,ne,le),Yt=new yg(D,ne,le),le.programs=it.programs,T.capabilities=$t,T.extensions=ne,T.properties=zt,T.renderLists=Q,T.shadowMap=Nt,T.state=Bt,T.info=le}O();let ct=new ec(T,D);this.xr=ct,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let M=ne.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=ne.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(M){M!==void 0&&(j=M,this.setSize(et,_t,!1))},this.getSize=function(M){return M.set(et,_t)},this.setSize=function(M,k,Z=!0){if(ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}et=M,_t=k,e.width=Math.floor(M*j),e.height=Math.floor(k*j),Z===!0&&(e.style.width=M+"px",e.style.height=k+"px"),this.setViewport(0,0,M,k)},this.getDrawingBufferSize=function(M){return M.set(et*j,_t*j).floor()},this.setDrawingBufferSize=function(M,k,Z){et=M,_t=k,j=Z,e.width=Math.floor(M*Z),e.height=Math.floor(k*Z),this.setViewport(0,0,M,k)},this.getCurrentViewport=function(M){return M.copy(N)},this.getViewport=function(M){return M.copy(Gt)},this.setViewport=function(M,k,Z,J){M.isVector4?Gt.set(M.x,M.y,M.z,M.w):Gt.set(M,k,Z,J),Bt.viewport(N.copy(Gt).multiplyScalar(j).round())},this.getScissor=function(M){return M.copy(ae)},this.setScissor=function(M,k,Z,J){M.isVector4?ae.set(M.x,M.y,M.z,M.w):ae.set(M,k,Z,J),Bt.scissor(q.copy(ae).multiplyScalar(j).round())},this.getScissorTest=function(){return ve},this.setScissorTest=function(M){Bt.setScissorTest(ve=M)},this.setOpaqueSort=function(M){bt=M},this.setTransparentSort=function(M){Ct=M},this.getClearColor=function(M){return M.copy(kt.getClearColor())},this.setClearColor=function(){kt.setClearColor(...arguments)},this.getClearAlpha=function(){return kt.getClearAlpha()},this.setClearAlpha=function(){kt.setClearAlpha(...arguments)},this.clear=function(M=!0,k=!0,Z=!0){let J=0;if(M){let G=!1;if(z!==null){let mt=z.texture.format;G=mt===Go||mt===Ho||mt===Vo}if(G){let mt=z.texture.type,Et=mt===Rn||mt===vi||mt===wr||mt===Cr||mt===zo||mt===ko,Ft=kt.getClearColor(),Rt=kt.getClearAlpha(),qt=Ft.r,Zt=Ft.g,Vt=Ft.b;Et?(v[0]=qt,v[1]=Zt,v[2]=Vt,v[3]=Rt,D.clearBufferuiv(D.COLOR,0,v)):(y[0]=qt,y[1]=Zt,y[2]=Vt,y[3]=Rt,D.clearBufferiv(D.COLOR,0,y))}else J|=D.COLOR_BUFFER_BIT}k&&(J|=D.DEPTH_BUFFER_BIT),Z&&(J|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",vt,!1),e.removeEventListener("webglcontextrestored",Pt,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),kt.dispose(),Q.dispose(),Ut.dispose(),zt.dispose(),Be.dispose(),Ue.dispose(),$.dispose(),Mt.dispose(),wt.dispose(),it.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",Ze),ct.removeEventListener("sessionend",Si),Bn.stop()};function vt(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function Pt(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;let M=le.autoReset,k=Nt.enabled,Z=Nt.autoUpdate,J=Nt.needsUpdate,G=Nt.type;O(),le.autoReset=M,Nt.enabled=k,Nt.autoUpdate=Z,Nt.needsUpdate=J,Nt.type=G}function pt(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function lt(M){let k=M.target;k.removeEventListener("dispose",lt),Dt(k)}function Dt(M){Qt(M),zt.remove(M)}function Qt(M){let k=zt.get(M).programs;k!==void 0&&(k.forEach(function(Z){it.releaseProgram(Z)}),M.isShaderMaterial&&it.releaseShaderCache(M))}this.renderBufferDirect=function(M,k,Z,J,G,mt){k===null&&(k=Ht);let Et=G.isMesh&&G.matrixWorld.determinant()<0,Ft=Pa(M,k,Z,J,G);Bt.setMaterial(J,Et);let Rt=Z.index,qt=1;if(J.wireframe===!0){if(Rt=x.getWireframeAttribute(Z),Rt===void 0)return;qt=2}let Zt=Z.drawRange,Vt=Z.attributes.position,ce=Zt.start*qt,xe=(Zt.start+Zt.count)*qt;mt!==null&&(ce=Math.max(ce,mt.start*qt),xe=Math.min(xe,(mt.start+mt.count)*qt)),Rt!==null?(ce=Math.max(ce,0),xe=Math.min(xe,Rt.count)):Vt!=null&&(ce=Math.max(ce,0),xe=Math.min(xe,Vt.count));let pe=xe-ce;if(pe<0||pe===1/0)return;Mt.setup(G,J,Ft,Z,Rt);let Ce,ye=xt;if(Rt!==null&&(Ce=A.get(Rt),ye=Yt,ye.setIndex(Ce)),G.isMesh)J.wireframe===!0?(Bt.setLineWidth(J.wireframeLinewidth*$e()),ye.setMode(D.LINES)):ye.setMode(D.TRIANGLES);else if(G.isLine){let Wt=J.linewidth;Wt===void 0&&(Wt=1),Bt.setLineWidth(Wt*$e()),G.isLineSegments?ye.setMode(D.LINES):G.isLineLoop?ye.setMode(D.LINE_LOOP):ye.setMode(D.LINE_STRIP)}else G.isPoints?ye.setMode(D.POINTS):G.isSprite&&ye.setMode(D.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)xr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ye.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(ne.get("WEBGL_multi_draw"))ye.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let Wt=G._multiDrawStarts,Re=G._multiDrawCounts,de=G._multiDrawCount,nn=Rt?A.get(Rt).bytesPerElement:1,ni=zt.get(J).currentProgram.getUniforms();for(let rn=0;rn<de;rn++)ni.setValue(D,"_gl_DrawID",rn),ye.render(Wt[rn]/nn,Re[rn])}else if(G.isInstancedMesh)ye.renderInstances(ce,pe,G.count);else if(Z.isInstancedBufferGeometry){let Wt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Re=Math.min(Z.instanceCount,Wt);ye.renderInstances(ce,pe,Re)}else ye.render(ce,pe)};function Me(M,k,Z){M.transparent===!0&&M.side===Nn&&M.forceSinglePass===!1?(M.side=an,M.needsUpdate=!0,Ei(M,k,Z),M.side=Jn,M.needsUpdate=!0,Ei(M,k,Z),M.side=Nn):Ei(M,k,Z)}this.compile=function(M,k,Z=null){Z===null&&(Z=M),p=Ut.get(Z),p.init(k),R.push(p),Z.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),M!==Z&&M.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),p.setupLights();let J=new Set;return M.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let mt=G.material;if(mt)if(Array.isArray(mt))for(let Et=0;Et<mt.length;Et++){let Ft=mt[Et];Me(Ft,Z,G),J.add(Ft)}else Me(mt,Z,G),J.add(mt)}),p=R.pop(),J},this.compileAsync=function(M,k,Z=null){let J=this.compile(M,k,Z);return new Promise(G=>{function mt(){if(J.forEach(function(Et){zt.get(Et).currentProgram.isReady()&&J.delete(Et)}),J.size===0){G(M);return}setTimeout(mt,10)}ne.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let _e=null;function gn(M){_e&&_e(M)}function Ze(){Bn.stop()}function Si(){Bn.start()}let Bn=new ru;Bn.setAnimationLoop(gn),typeof self<"u"&&Bn.setContext(self),this.setAnimationLoop=function(M){_e=M,ct.setAnimationLoop(M),M===null?Bn.stop():Bn.start()},ct.addEventListener("sessionstart",Ze),ct.addEventListener("sessionend",Si),this.render=function(M,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(k),k=ct.getCamera()),M.isScene===!0&&M.onBeforeRender(T,M,k,z),p=Ut.get(M,R.length),p.init(k),R.push(p),ut.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),be.setFromProjectionMatrix(ut,Tn,k.reversedDepth),ot=this.localClippingEnabled,ge=gt.init(this.clippingPlanes,ot),_=Q.get(M,I.length),_.init(),I.push(_),ct.enabled===!0&&ct.isPresenting===!0){let mt=T.xr.getDepthSensingMesh();mt!==null&&er(mt,k,-1/0,T.sortObjects)}er(M,k,0,T.sortObjects),_.finish(),T.sortObjects===!0&&_.sort(bt,Ct),ue=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,ue&&kt.addToRenderList(_,M),this.info.render.frame++,ge===!0&&gt.beginShadows();let Z=p.state.shadowsArray;Nt.render(Z,M,k),ge===!0&&gt.endShadows(),this.info.autoReset===!0&&this.info.reset();let J=_.opaque,G=_.transmissive;if(p.setupLights(),k.isArrayCamera){let mt=k.cameras;if(G.length>0)for(let Et=0,Ft=mt.length;Et<Ft;Et++){let Rt=mt[Et];bi(J,G,M,Rt)}ue&&kt.render(M);for(let Et=0,Ft=mt.length;Et<Ft;Et++){let Rt=mt[Et];Rs(_,M,Rt,Rt.viewport)}}else G.length>0&&bi(J,G,M,k),ue&&kt.render(M),Rs(_,M,k);z!==null&&F===0&&(jt.updateMultisampleRenderTarget(z),jt.updateRenderTargetMipmap(z)),M.isScene===!0&&M.onAfterRender(T,M,k),Mt.resetDefaultState(),b=-1,E=null,R.pop(),R.length>0?(p=R[R.length-1],ge===!0&&gt.setGlobalState(T.clippingPlanes,p.state.camera)):p=null,I.pop(),I.length>0?_=I[I.length-1]:_=null};function er(M,k,Z,J){if(M.visible===!1)return;if(M.layers.test(k.layers)){if(M.isGroup)Z=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(k);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||be.intersectsSprite(M)){J&&Kt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ut);let Et=$.update(M),Ft=M.material;Ft.visible&&_.push(M,Et,Ft,Z,Kt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||be.intersectsObject(M))){let Et=$.update(M),Ft=M.material;if(J&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Kt.copy(M.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),Kt.copy(Et.boundingSphere.center)),Kt.applyMatrix4(M.matrixWorld).applyMatrix4(ut)),Array.isArray(Ft)){let Rt=Et.groups;for(let qt=0,Zt=Rt.length;qt<Zt;qt++){let Vt=Rt[qt],ce=Ft[Vt.materialIndex];ce&&ce.visible&&_.push(M,Et,ce,Z,Kt.z,Vt)}}else Ft.visible&&_.push(M,Et,Ft,Z,Kt.z,null)}}let mt=M.children;for(let Et=0,Ft=mt.length;Et<Ft;Et++)er(mt[Et],k,Z,J)}function Rs(M,k,Z,J){let G=M.opaque,mt=M.transmissive,Et=M.transparent;p.setupLightsView(Z),ge===!0&&gt.setGlobalState(T.clippingPlanes,Z),J&&Bt.viewport(N.copy(J)),G.length>0&&zn(G,k,Z),mt.length>0&&zn(mt,k,Z),Et.length>0&&zn(Et,k,Z),Bt.buffers.depth.setTest(!0),Bt.buffers.depth.setMask(!0),Bt.buffers.color.setMask(!0),Bt.setPolygonOffset(!1)}function bi(M,k,Z,J){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[J.id]===void 0&&(p.state.transmissionRenderTarget[J.id]=new Dn(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float")?Ar:Rn,minFilter:_i,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:me.workingColorSpace}));let mt=p.state.transmissionRenderTarget[J.id],Et=J.viewport||N;mt.setSize(Et.z*T.transmissionResolutionScale,Et.w*T.transmissionResolutionScale);let Ft=T.getRenderTarget(),Rt=T.getActiveCubeFace(),qt=T.getActiveMipmapLevel();T.setRenderTarget(mt),T.getClearColor(tt),rt=T.getClearAlpha(),rt<1&&T.setClearColor(16777215,.5),T.clear(),ue&&kt.render(Z);let Zt=T.toneMapping;T.toneMapping=Qn;let Vt=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),p.setupLightsView(J),ge===!0&&gt.setGlobalState(T.clippingPlanes,J),zn(M,Z,J),jt.updateMultisampleRenderTarget(mt),jt.updateRenderTargetMipmap(mt),ne.has("WEBGL_multisampled_render_to_texture")===!1){let ce=!1;for(let xe=0,pe=k.length;xe<pe;xe++){let Ce=k[xe],ye=Ce.object,Wt=Ce.geometry,Re=Ce.material,de=Ce.group;if(Re.side===Nn&&ye.layers.test(J.layers)){let nn=Re.side;Re.side=an,Re.needsUpdate=!0,Br(ye,Z,J,Wt,Re,de),Re.side=nn,Re.needsUpdate=!0,ce=!0}}ce===!0&&(jt.updateMultisampleRenderTarget(mt),jt.updateRenderTargetMipmap(mt))}T.setRenderTarget(Ft,Rt,qt),T.setClearColor(tt,rt),Vt!==void 0&&(J.viewport=Vt),T.toneMapping=Zt}function zn(M,k,Z){let J=k.isScene===!0?k.overrideMaterial:null;for(let G=0,mt=M.length;G<mt;G++){let Et=M[G],Ft=Et.object,Rt=Et.geometry,qt=Et.group,Zt=Et.material;Zt.allowOverride===!0&&J!==null&&(Zt=J),Ft.layers.test(Z.layers)&&Br(Ft,k,Z,Rt,Zt,qt)}}function Br(M,k,Z,J,G,mt){M.onBeforeRender(T,k,Z,J,G,mt),M.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),G.onBeforeRender(T,k,Z,J,M,mt),G.transparent===!0&&G.side===Nn&&G.forceSinglePass===!1?(G.side=an,G.needsUpdate=!0,T.renderBufferDirect(Z,k,J,G,M,mt),G.side=Jn,G.needsUpdate=!0,T.renderBufferDirect(Z,k,J,G,M,mt),G.side=Nn):T.renderBufferDirect(Z,k,J,G,M,mt),M.onAfterRender(T,k,Z,J,G,mt)}function Ei(M,k,Z){k.isScene!==!0&&(k=Ht);let J=zt.get(M),G=p.state.lights,mt=p.state.shadowsArray,Et=G.state.version,Ft=it.getParameters(M,G.state,mt,k,Z),Rt=it.getProgramCacheKey(Ft),qt=J.programs;J.environment=M.isMeshStandardMaterial?k.environment:null,J.fog=k.fog,J.envMap=(M.isMeshStandardMaterial?Ue:Be).get(M.envMap||J.environment),J.envMapRotation=J.environment!==null&&M.envMap===null?k.environmentRotation:M.envMapRotation,qt===void 0&&(M.addEventListener("dispose",lt),qt=new Map,J.programs=qt);let Zt=qt.get(Rt);if(Zt!==void 0){if(J.currentProgram===Zt&&J.lightsStateVersion===Et)return Ps(M,Ft),Zt}else Ft.uniforms=it.getUniforms(M),M.onBeforeCompile(Ft,T),Zt=it.acquireProgram(Ft,Rt),qt.set(Rt,Zt),J.uniforms=Ft.uniforms;let Vt=J.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Vt.clippingPlanes=gt.uniform),Ps(M,Ft),J.needsLights=Da(M),J.lightsStateVersion=Et,J.needsLights&&(Vt.ambientLightColor.value=G.state.ambient,Vt.lightProbe.value=G.state.probe,Vt.directionalLights.value=G.state.directional,Vt.directionalLightShadows.value=G.state.directionalShadow,Vt.spotLights.value=G.state.spot,Vt.spotLightShadows.value=G.state.spotShadow,Vt.rectAreaLights.value=G.state.rectArea,Vt.ltc_1.value=G.state.rectAreaLTC1,Vt.ltc_2.value=G.state.rectAreaLTC2,Vt.pointLights.value=G.state.point,Vt.pointLightShadows.value=G.state.pointShadow,Vt.hemisphereLights.value=G.state.hemi,Vt.directionalShadowMap.value=G.state.directionalShadowMap,Vt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Vt.spotShadowMap.value=G.state.spotShadowMap,Vt.spotLightMatrix.value=G.state.spotLightMatrix,Vt.spotLightMap.value=G.state.spotLightMap,Vt.pointShadowMap.value=G.state.pointShadowMap,Vt.pointShadowMatrix.value=G.state.pointShadowMatrix),J.currentProgram=Zt,J.uniformsList=null,Zt}function ei(M){if(M.uniformsList===null){let k=M.currentProgram.getUniforms();M.uniformsList=Lr.seqWithValue(k.seq,M.uniforms)}return M.uniformsList}function Ps(M,k){let Z=zt.get(M);Z.outputColorSpace=k.outputColorSpace,Z.batching=k.batching,Z.batchingColor=k.batchingColor,Z.instancing=k.instancing,Z.instancingColor=k.instancingColor,Z.instancingMorph=k.instancingMorph,Z.skinning=k.skinning,Z.morphTargets=k.morphTargets,Z.morphNormals=k.morphNormals,Z.morphColors=k.morphColors,Z.morphTargetsCount=k.morphTargetsCount,Z.numClippingPlanes=k.numClippingPlanes,Z.numIntersection=k.numClipIntersection,Z.vertexAlphas=k.vertexAlphas,Z.vertexTangents=k.vertexTangents,Z.toneMapping=k.toneMapping}function Pa(M,k,Z,J,G){k.isScene!==!0&&(k=Ht),jt.resetTextureUnits();let mt=k.fog,Et=J.isMeshStandardMaterial?k.environment:null,Ft=z===null?T.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Oi,Rt=(J.isMeshStandardMaterial?Ue:Be).get(J.envMap||Et),qt=J.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Zt=!!Z.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Vt=!!Z.morphAttributes.position,ce=!!Z.morphAttributes.normal,xe=!!Z.morphAttributes.color,pe=Qn;J.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(pe=T.toneMapping);let Ce=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ye=Ce!==void 0?Ce.length:0,Wt=zt.get(J),Re=p.state.lights;if(ge===!0&&(ot===!0||M!==E)){let We=M===E&&J.id===b;gt.setState(J,M,We)}let de=!1;J.version===Wt.__version?(Wt.needsLights&&Wt.lightsStateVersion!==Re.state.version||Wt.outputColorSpace!==Ft||G.isBatchedMesh&&Wt.batching===!1||!G.isBatchedMesh&&Wt.batching===!0||G.isBatchedMesh&&Wt.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Wt.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Wt.instancing===!1||!G.isInstancedMesh&&Wt.instancing===!0||G.isSkinnedMesh&&Wt.skinning===!1||!G.isSkinnedMesh&&Wt.skinning===!0||G.isInstancedMesh&&Wt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Wt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Wt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Wt.instancingMorph===!1&&G.morphTexture!==null||Wt.envMap!==Rt||J.fog===!0&&Wt.fog!==mt||Wt.numClippingPlanes!==void 0&&(Wt.numClippingPlanes!==gt.numPlanes||Wt.numIntersection!==gt.numIntersection)||Wt.vertexAlphas!==qt||Wt.vertexTangents!==Zt||Wt.morphTargets!==Vt||Wt.morphNormals!==ce||Wt.morphColors!==xe||Wt.toneMapping!==pe||Wt.morphTargetsCount!==ye)&&(de=!0):(de=!0,Wt.__version=J.version);let nn=Wt.currentProgram;de===!0&&(nn=Ei(J,k,G));let ni=!1,rn=!1,kn=!1,Pe=nn.getUniforms(),sn=Wt.uniforms;if(Bt.useProgram(nn.program)&&(ni=!0,rn=!0,kn=!0),J.id!==b&&(b=J.id,rn=!0),ni||E!==M){Bt.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),Pe.setValue(D,"projectionMatrix",M.projectionMatrix),Pe.setValue(D,"viewMatrix",M.matrixWorldInverse);let Fe=Pe.map.cameraPosition;Fe!==void 0&&Fe.setValue(D,Lt.setFromMatrixPosition(M.matrixWorld)),$t.logarithmicDepthBuffer&&Pe.setValue(D,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Pe.setValue(D,"isOrthographic",M.isOrthographicCamera===!0),E!==M&&(E=M,rn=!0,kn=!0)}if(G.isSkinnedMesh){Pe.setOptional(D,G,"bindMatrix"),Pe.setOptional(D,G,"bindMatrixInverse");let We=G.skeleton;We&&(We.boneTexture===null&&We.computeBoneTexture(),Pe.setValue(D,"boneTexture",We.boneTexture,jt))}G.isBatchedMesh&&(Pe.setOptional(D,G,"batchingTexture"),Pe.setValue(D,"batchingTexture",G._matricesTexture,jt),Pe.setOptional(D,G,"batchingIdTexture"),Pe.setValue(D,"batchingIdTexture",G._indirectTexture,jt),Pe.setOptional(D,G,"batchingColorTexture"),G._colorsTexture!==null&&Pe.setValue(D,"batchingColorTexture",G._colorsTexture,jt));let ln=Z.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0)&&ft.update(G,Z,nn),(rn||Wt.receiveShadow!==G.receiveShadow)&&(Wt.receiveShadow=G.receiveShadow,Pe.setValue(D,"receiveShadow",G.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(sn.envMap.value=Rt,sn.flipEnvMap.value=Rt.isCubeTexture&&Rt.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&k.environment!==null&&(sn.envMapIntensity.value=k.environmentIntensity),rn&&(Pe.setValue(D,"toneMappingExposure",T.toneMappingExposure),Wt.needsLights&&Ia(sn,kn),mt&&J.fog===!0&&ht.refreshFogUniforms(sn,mt),ht.refreshMaterialUniforms(sn,J,j,_t,p.state.transmissionRenderTarget[M.id]),Lr.upload(D,ei(Wt),sn,jt)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Lr.upload(D,ei(Wt),sn,jt),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Pe.setValue(D,"center",G.center),Pe.setValue(D,"modelViewMatrix",G.modelViewMatrix),Pe.setValue(D,"normalMatrix",G.normalMatrix),Pe.setValue(D,"modelMatrix",G.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){let We=J.uniformsGroups;for(let Fe=0,Ti=We.length;Fe<Ti;Fe++){let Ee=We[Fe];wt.update(Ee,nn),wt.bind(Ee,nn)}}return nn}function Ia(M,k){M.ambientLightColor.needsUpdate=k,M.lightProbe.needsUpdate=k,M.directionalLights.needsUpdate=k,M.directionalLightShadows.needsUpdate=k,M.pointLights.needsUpdate=k,M.pointLightShadows.needsUpdate=k,M.spotLights.needsUpdate=k,M.spotLightShadows.needsUpdate=k,M.rectAreaLights.needsUpdate=k,M.hemisphereLights.needsUpdate=k}function Da(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(M,k,Z){let J=zt.get(M);J.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),zt.get(M.texture).__webglTexture=k,zt.get(M.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:Z,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,k){let Z=zt.get(M);Z.__webglFramebuffer=k,Z.__useDefaultFramebuffer=k===void 0};let zr=D.createFramebuffer();this.setRenderTarget=function(M,k=0,Z=0){z=M,L=k,F=Z;let J=!0,G=null,mt=!1,Et=!1;if(M){let Rt=zt.get(M);if(Rt.__useDefaultFramebuffer!==void 0)Bt.bindFramebuffer(D.FRAMEBUFFER,null),J=!1;else if(Rt.__webglFramebuffer===void 0)jt.setupRenderTarget(M);else if(Rt.__hasExternalTextures)jt.rebindTextures(M,zt.get(M.texture).__webglTexture,zt.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Vt=M.depthTexture;if(Rt.__boundDepthTexture!==Vt){if(Vt!==null&&zt.has(Vt)&&(M.width!==Vt.image.width||M.height!==Vt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");jt.setupDepthRenderbuffer(M)}}let qt=M.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(Et=!0);let Zt=zt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Zt[k])?G=Zt[k][Z]:G=Zt[k],mt=!0):M.samples>0&&jt.useMultisampledRTT(M)===!1?G=zt.get(M).__webglMultisampledFramebuffer:Array.isArray(Zt)?G=Zt[Z]:G=Zt,N.copy(M.viewport),q.copy(M.scissor),Y=M.scissorTest}else N.copy(Gt).multiplyScalar(j).floor(),q.copy(ae).multiplyScalar(j).floor(),Y=ve;if(Z!==0&&(G=zr),Bt.bindFramebuffer(D.FRAMEBUFFER,G)&&J&&Bt.drawBuffers(M,G),Bt.viewport(N),Bt.scissor(q),Bt.setScissorTest(Y),mt){let Rt=zt.get(M.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+k,Rt.__webglTexture,Z)}else if(Et){let Rt=k;for(let qt=0;qt<M.textures.length;qt++){let Zt=zt.get(M.textures[qt]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+qt,Zt.__webglTexture,Z,Rt)}}else if(M!==null&&Z!==0){let Rt=zt.get(M.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Rt.__webglTexture,Z)}b=-1},this.readRenderTargetPixels=function(M,k,Z,J,G,mt,Et,Ft=0){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=zt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Et!==void 0&&(Rt=Rt[Et]),Rt){Bt.bindFramebuffer(D.FRAMEBUFFER,Rt);try{let qt=M.textures[Ft],Zt=qt.format,Vt=qt.type;if(!$t.textureFormatReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$t.textureTypeReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=M.width-J&&Z>=0&&Z<=M.height-G&&(M.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ft),D.readPixels(k,Z,J,G,St.convert(Zt),St.convert(Vt),mt))}finally{let qt=z!==null?zt.get(z).__webglFramebuffer:null;Bt.bindFramebuffer(D.FRAMEBUFFER,qt)}}},this.readRenderTargetPixelsAsync=async function(M,k,Z,J,G,mt,Et,Ft=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=zt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Et!==void 0&&(Rt=Rt[Et]),Rt)if(k>=0&&k<=M.width-J&&Z>=0&&Z<=M.height-G){Bt.bindFramebuffer(D.FRAMEBUFFER,Rt);let qt=M.textures[Ft],Zt=qt.format,Vt=qt.type;if(!$t.textureFormatReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$t.textureTypeReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ce=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,ce),D.bufferData(D.PIXEL_PACK_BUFFER,mt.byteLength,D.STREAM_READ),M.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ft),D.readPixels(k,Z,J,G,St.convert(Zt),St.convert(Vt),0);let xe=z!==null?zt.get(z).__webglFramebuffer:null;Bt.bindFramebuffer(D.FRAMEBUFFER,xe);let pe=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Ih(D,pe,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,ce),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,mt),D.deleteBuffer(ce),D.deleteSync(pe),mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,k=null,Z=0){let J=Math.pow(2,-Z),G=Math.floor(M.image.width*J),mt=Math.floor(M.image.height*J),Et=k!==null?k.x:0,Ft=k!==null?k.y:0;jt.setTexture2D(M,0),D.copyTexSubImage2D(D.TEXTURE_2D,Z,0,0,Et,Ft,G,mt),Bt.unbindTexture()};let kr=D.createFramebuffer(),La=D.createFramebuffer();this.copyTextureToTexture=function(M,k,Z=null,J=null,G=0,mt=null){mt===null&&(G!==0?(xr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),mt=G,G=0):mt=0);let Et,Ft,Rt,qt,Zt,Vt,ce,xe,pe,Ce=M.isCompressedTexture?M.mipmaps[mt]:M.image;if(Z!==null)Et=Z.max.x-Z.min.x,Ft=Z.max.y-Z.min.y,Rt=Z.isBox3?Z.max.z-Z.min.z:1,qt=Z.min.x,Zt=Z.min.y,Vt=Z.isBox3?Z.min.z:0;else{let ln=Math.pow(2,-G);Et=Math.floor(Ce.width*ln),Ft=Math.floor(Ce.height*ln),M.isDataArrayTexture?Rt=Ce.depth:M.isData3DTexture?Rt=Math.floor(Ce.depth*ln):Rt=1,qt=0,Zt=0,Vt=0}J!==null?(ce=J.x,xe=J.y,pe=J.z):(ce=0,xe=0,pe=0);let ye=St.convert(k.format),Wt=St.convert(k.type),Re;k.isData3DTexture?(jt.setTexture3D(k,0),Re=D.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(jt.setTexture2DArray(k,0),Re=D.TEXTURE_2D_ARRAY):(jt.setTexture2D(k,0),Re=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,k.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,k.unpackAlignment);let de=D.getParameter(D.UNPACK_ROW_LENGTH),nn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),ni=D.getParameter(D.UNPACK_SKIP_PIXELS),rn=D.getParameter(D.UNPACK_SKIP_ROWS),kn=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Ce.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ce.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,qt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Zt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Vt);let Pe=M.isDataArrayTexture||M.isData3DTexture,sn=k.isDataArrayTexture||k.isData3DTexture;if(M.isDepthTexture){let ln=zt.get(M),We=zt.get(k),Fe=zt.get(ln.__renderTarget),Ti=zt.get(We.__renderTarget);Bt.bindFramebuffer(D.READ_FRAMEBUFFER,Fe.__webglFramebuffer),Bt.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ti.__webglFramebuffer);for(let Ee=0;Ee<Rt;Ee++)Pe&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,zt.get(M).__webglTexture,G,Vt+Ee),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,zt.get(k).__webglTexture,mt,pe+Ee)),D.blitFramebuffer(qt,Zt,Et,Ft,ce,xe,Et,Ft,D.DEPTH_BUFFER_BIT,D.NEAREST);Bt.bindFramebuffer(D.READ_FRAMEBUFFER,null),Bt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(G!==0||M.isRenderTargetTexture||zt.has(M)){let ln=zt.get(M),We=zt.get(k);Bt.bindFramebuffer(D.READ_FRAMEBUFFER,kr),Bt.bindFramebuffer(D.DRAW_FRAMEBUFFER,La);for(let Fe=0;Fe<Rt;Fe++)Pe?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ln.__webglTexture,G,Vt+Fe):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ln.__webglTexture,G),sn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,We.__webglTexture,mt,pe+Fe):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,We.__webglTexture,mt),G!==0?D.blitFramebuffer(qt,Zt,Et,Ft,ce,xe,Et,Ft,D.COLOR_BUFFER_BIT,D.NEAREST):sn?D.copyTexSubImage3D(Re,mt,ce,xe,pe+Fe,qt,Zt,Et,Ft):D.copyTexSubImage2D(Re,mt,ce,xe,qt,Zt,Et,Ft);Bt.bindFramebuffer(D.READ_FRAMEBUFFER,null),Bt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else sn?M.isDataTexture||M.isData3DTexture?D.texSubImage3D(Re,mt,ce,xe,pe,Et,Ft,Rt,ye,Wt,Ce.data):k.isCompressedArrayTexture?D.compressedTexSubImage3D(Re,mt,ce,xe,pe,Et,Ft,Rt,ye,Ce.data):D.texSubImage3D(Re,mt,ce,xe,pe,Et,Ft,Rt,ye,Wt,Ce):M.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,mt,ce,xe,Et,Ft,ye,Wt,Ce.data):M.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,mt,ce,xe,Ce.width,Ce.height,ye,Ce.data):D.texSubImage2D(D.TEXTURE_2D,mt,ce,xe,Et,Ft,ye,Wt,Ce);D.pixelStorei(D.UNPACK_ROW_LENGTH,de),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,nn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ni),D.pixelStorei(D.UNPACK_SKIP_ROWS,rn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,kn),mt===0&&k.generateMipmaps&&D.generateMipmap(Re),Bt.unbindTexture()},this.initRenderTarget=function(M){zt.get(M).__webglFramebuffer===void 0&&jt.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?jt.setTextureCube(M,0):M.isData3DTexture?jt.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?jt.setTexture2DArray(M,0):jt.setTexture2D(M,0),Bt.unbindTexture()},this.resetState=function(){L=0,F=0,z=null,Bt.reset(),Mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=me._getDrawingBufferColorSpace(t),e.unpackColorSpace=me._getUnpackColorSpace()}};var cu={type:"change"},rc={type:"start"},uu={type:"end"},Ea=new zi,hu=new vn,n0=Math.cos(70*Ms.DEG2RAD),Ge=new W,hn=2*Math.PI,we={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ic=1e-6,Ta=class extends ps{constructor(t,e=null){super(t,e),this.state=we.NONE,this.target=new W,this.cursor=new W,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:mi.ROTATE,MIDDLE:mi.DOLLY,RIGHT:mi.PAN},this.touches={ONE:gi.ROTATE,TWO:gi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new W,this._lastQuaternion=new yn,this._lastTargetPosition=new W,this._quat=new yn().setFromUnitVectors(t.up,new W(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Tr,this._sphericalDelta=new Tr,this._scale=1,this._panOffset=new W,this._rotateStart=new ee,this._rotateEnd=new ee,this._rotateDelta=new ee,this._panStart=new ee,this._panEnd=new ee,this._panDelta=new ee,this._dollyStart=new ee,this._dollyEnd=new ee,this._dollyDelta=new ee,this._dollyDirection=new W,this._mouse=new ee,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=r0.bind(this),this._onPointerDown=i0.bind(this),this._onPointerUp=s0.bind(this),this._onContextMenu=d0.bind(this),this._onMouseWheel=l0.bind(this),this._onKeyDown=c0.bind(this),this._onTouchStart=h0.bind(this),this._onTouchMove=u0.bind(this),this._onMouseDown=o0.bind(this),this._onMouseMove=a0.bind(this),this._interceptControlDown=f0.bind(this),this._interceptControlUp=p0.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(cu),this.update(),this.state=we.NONE}update(t=null){let e=this.object.position;Ge.copy(e).sub(this.target),Ge.applyQuaternion(this._quat),this._spherical.setFromVector3(Ge),this.autoRotate&&this.state===we.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=hn:n>Math.PI&&(n-=hn),r<-Math.PI?r+=hn:r>Math.PI&&(r-=hn),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Ge.setFromSpherical(this._spherical),Ge.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ge),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Ge.length();o=this._clampDistance(a*this._scale);let c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){let a=new W(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;let l=new W(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Ge.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Ea.origin.copy(this.object.position),Ea.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ea.direction))<n0?this.object.lookAt(this.target):(hu.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ea.intersectPlane(hu,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>ic||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ic||this._lastTargetPosition.distanceToSquared(this.target)>ic?(this.dispatchEvent(cu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?hn/60*this.autoRotateSpeed*t:hn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ge.setFromMatrixColumn(e,0),Ge.multiplyScalar(-t),this._panOffset.add(Ge)}_panUp(t,e){this.screenSpacePanning===!0?Ge.setFromMatrixColumn(e,1):(Ge.setFromMatrixColumn(e,0),Ge.crossVectors(this.object.up,Ge)),Ge.multiplyScalar(t),this._panOffset.add(Ge)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;Ge.copy(r).sub(this.target);let s=Ge.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/n.clientHeight,this.object.matrix),this._panUp(2*e*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),r=t-n.left,s=e-n.top,o=n.width,a=n.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(hn*this._rotateDelta.x/e.clientHeight),this._rotateUp(hn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(n,r)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),r=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(hn*this._rotateDelta.x/e.clientHeight),this._rotateUp(hn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ee,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function i0(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function r0(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function s0(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(uu),this.state=we.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function o0(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case mi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=we.DOLLY;break;case mi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=we.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=we.ROTATE}break;case mi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=we.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=we.PAN}break;default:this.state=we.NONE}this.state!==we.NONE&&this.dispatchEvent(rc)}function a0(i){switch(this.state){case we.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case we.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case we.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function l0(i){this.enabled===!1||this.enableZoom===!1||this.state!==we.NONE||(i.preventDefault(),this.dispatchEvent(rc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(uu))}function c0(i){this.enabled!==!1&&this._handleKeyDown(i)}function h0(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case gi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=we.TOUCH_ROTATE;break;case gi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=we.TOUCH_PAN;break;default:this.state=we.NONE}break;case 2:switch(this.touches.TWO){case gi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=we.TOUCH_DOLLY_PAN;break;case gi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=we.TOUCH_DOLLY_ROTATE;break;default:this.state=we.NONE}break;default:this.state=we.NONE}this.state!==we.NONE&&this.dispatchEvent(rc)}function u0(i){switch(this._trackPointer(i),this.state){case we.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case we.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case we.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case we.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=we.NONE}}function d0(i){this.enabled!==!1&&i.preventDefault()}function f0(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function p0(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}async function m0(i={}){var t,e=i,n=!!globalThis.window,r=!!globalThis.WorkerGlobalScope,s=globalThis.process?.versions?.node&&globalThis.process?.type!="renderer";if(s){let{createRequire:u}=await import("node:module");var o=u(import.meta.url)}var a=!1;e.setup=function(){if(a)return;a=!0,e.initTBB();function u(C,B,K=(st=>st)){if(B)for(let st of B)C.push_back(K(st));return C}function d(C,B=(K=>K)){let K=[],st=C.size();for(let It=0;It<st;It++)K.push(B(C.get(It)));return K}function S(C,B=(K=>K)){let K=[],st=C.size();for(let It=0;It<st;It++){let te=C.get(It),fe=te.size(),Ie=[];for(let Te=0;Te<fe;Te++)Ie.push(B(te.get(Te)));K.push(Ie)}return K}function w(C){return C[0].length<3&&(C=[C]),u(new e.Vector2_vec2,C,B=>u(new e.Vector_vec2,B,K=>K instanceof Array?{x:K[0],y:K[1]}:K))}function P(C){for(let B=0;B<C.size();B++)C.get(B).delete();C.delete()}function V(C){return C[0]instanceof Array?{x:C[0][0],y:C[0][1]}:typeof C[0]=="number"?{x:C[0]||0,y:C[1]||0}:C[0]}function H(C){return C[0]instanceof Array?{x:C[0][0],y:C[0][1],z:C[0][2]}:typeof C[0]=="number"?{x:C[0]||0,y:C[1]||0,z:C[2]||0}:C[0]}function X(C){return C=="EvenOdd"?0:C=="NonZero"?1:C=="Negative"?3:2}function nt(C){return C=="Round"?1:C=="Miter"?2:0}let at=e.CrossSection;function dt(C,B="Positive"){if(C instanceof at)return C;{let K=w(C),st=new at(K,X(B));return P(K),st}}e.CrossSection.prototype.translate=function(...C){return this._Translate(V(C))},e.CrossSection.prototype.scale=function(C){return typeof C=="number"?this._Scale({x:C,y:C}):this._Scale(V([C]))},e.CrossSection.prototype.mirror=function(C){return this._Mirror(V([C]))},e.CrossSection.prototype.warp=function(C){let B=Ai(function(st){let It=le(st,"double"),te=le(st+8,"double"),fe=[It,te];C(fe),jt(st,fe[0],"double"),jt(st+8,fe[1],"double")},"vi"),K=this._Warp(B);return Ci(B),K},e.CrossSection.prototype.decompose=function(){let C=this._Decompose(),B=d(C);return C.delete(),B},e.CrossSection.prototype.bounds=function(){let C=this._Bounds();return{min:["x","y"].map(B=>C.min[B]),max:["x","y"].map(B=>C.max[B])}},e.CrossSection.prototype.offset=function(C,B="Round",K=2,st=0){return this._Offset(C,nt(B),K,st)},e.CrossSection.prototype.simplify=function(C=1e-6){return this._Simplify(C)},e.CrossSection.prototype.extrude=function(C,B=0,K=0,st=[1,1],It=!1){st=V([st]);let te=e._Extrude(this._ToPolygons(),C,B,K,st);return It?te.translate([0,0,-C/2]):te},e.CrossSection.prototype.revolve=function(C=0,B=360){return e._Revolve(this._ToPolygons(),C,B)},e.CrossSection.prototype.add=function(C){return this._add(dt(C))},e.CrossSection.prototype.subtract=function(C){return this._subtract(dt(C))},e.CrossSection.prototype.intersect=function(C){return this._intersect(dt(C))},e.CrossSection.prototype.toPolygons=function(){let C=this._ToPolygons(),B=S(C,K=>[K.x,K.y]);return C.delete(),B},e.Manifold.prototype.smoothOut=function(C=52.5,B=0){return this._SmoothOut(C,B)},e.Manifold.prototype.warp=function(C){let B=Ai(function(It){let te=le(It,"double"),fe=le(It+8,"double"),Ie=le(It+16,"double"),Te=[te,fe,Ie];C(Te),jt(It,Te[0],"double"),jt(It+8,Te[1],"double"),jt(It+16,Te[2],"double")},"vi"),K=this._Warp(B);Ci(B);let st=K.status();if(st!=="NoError")throw new e.ManifoldError(st);return K},e.Manifold.prototype.warpBatch=function(C){let B=Ai(function(It,te){let fe=e.HEAPF64??rt;if(!fe)throw new Error("WASM heap is not initialized (HEAPF64 unavailable)");let Ie=new Float64Array(fe.buffer,It,te*3);C(Ie,te)},"vii"),K=this._WarpBatch(B);Ci(B);let st=K.status();if(st!=="NoError")throw new e.ManifoldError(st);return K},e.Manifold.prototype.calculateNormals=function(C=0,B=52.5){return this._CalculateNormals(C,B)},e.Manifold.prototype.smoothByNormals=function(C=0){return this._SmoothByNormals(C)},e.Manifold.prototype.setProperties=function(C,B){let K=this.numProp(),st=Ai(function(te,fe,Ie){let Te=[];for(let De=0;De<C;++De)Te[De]=le(te+8*De,"double");let Pn=[];for(let De=0;De<3;++De)Pn[De]=le(fe+8*De,"double");let ii=[];for(let De=0;De<K;++De)ii[De]=le(Ie+8*De,"double");B(Te,Pn,ii);for(let De=0;De<C;++De)jt(te+8*De,Te[De],"double")},"viii"),It=this._SetProperties(C,st);return Ci(st),It},e.Manifold.prototype.translate=function(...C){return this._Translate(H(C))},e.Manifold.prototype.rotate=function(C,B,K){return Array.isArray(C)?this._Rotate(...C):this._Rotate(C,B||0,K||0)},e.Manifold.prototype.scale=function(C){return typeof C=="number"?this._Scale({x:C,y:C,z:C}):this._Scale(H([C]))},e.Manifold.prototype.mirror=function(C){return this._Mirror(H([C]))},e.Manifold.prototype.trimByPlane=function(C,B=0){return this._TrimByPlane(H([C]),B)},e.Manifold.prototype.slice=function(C=0){let B=this._Slice(C),K=new at(B,X("Positive"));return P(B),K},e.Manifold.prototype.project=function(){let C=this._Project(),B=new at(C,X("Positive"));return P(C),B},e.Manifold.prototype.rayCast=function(C,B){let K=this._RayCast(H([C]),H([B])),st=d(K,It=>({faceID:It.faceID,distance:It.distance,position:["x","y","z"].map(te=>It.position[te]),normal:["x","y","z"].map(te=>It.normal[te])}));return K.delete(),st},e.Manifold.prototype.split=function(C){let B=this._Split(C),K=d(B);return B.delete(),K},e.Manifold.prototype.splitByPlane=function(C,B=0){let K=this._SplitByPlane(H([C]),B),st=d(K);return K.delete(),st},e.Manifold.prototype.decompose=function(){let C=this._Decompose(),B=d(C);return C.delete(),B},e.Manifold.prototype.boundingBox=function(){let C=this._boundingBox();return{min:["x","y","z"].map(B=>C.min[B]),max:["x","y","z"].map(B=>C.max[B])}},e.Manifold.prototype.simplify=function(C=0){return this._Simplify(C)};class yt{constructor({numProp:B=3,triVerts:K=new Uint32Array,vertProperties:st=new Float32Array,mergeFromVert:It,mergeToVert:te,runIndex:fe,runOriginalID:Ie,faceID:Te,halfedgeTangent:Pn,runTransform:ii,runFlags:De,tolerance:za=0}={}){this.numProp=B,this.triVerts=K,this.vertProperties=st,this.mergeFromVert=It,this.mergeToVert=te,this.runIndex=fe,this.runOriginalID=Ie,this.faceID=Te,this.halfedgeTangent=Pn,this.runTransform=ii,this.runFlags=De,this.tolerance=za}get numTri(){return this.triVerts.length/3}get numVert(){return this.vertProperties.length/this.numProp}get numRun(){return this.runOriginalID.length}merge(){let{changed:B,mesh:K}=e._Merge(this);return Object.assign(this,{...K}),B}verts(B){return this.triVerts.subarray(3*B,3*(B+1))}position(B){return this.vertProperties.subarray(this.numProp*B,this.numProp*B+3)}extras(B){return this.vertProperties.subarray(this.numProp*B+3,this.numProp*(B+1))}tangent(B){return this.halfedgeTangent.subarray(4*B,4*(B+1))}transform(B){let K=new Array(16);for(let st of[0,1,2,3])for(let It of[0,1,2])K[4*st+It]=this.runTransform[12*B+3*st+It];return K[15]=1,K}backside(B){return this.runFlags!=null&&B<this.runFlags.length&&(this.runFlags[B]&1)!==0}hasNormals(B){return this.runFlags!=null&&B<this.runFlags.length&&(this.runFlags[B]&2)!==0}}e.Mesh=yt,e.Manifold.prototype.getMesh=function(C=-1){return new yt(this._GetMeshJS(C))},e.ManifoldError=function(B,...K){let st="Unknown error";switch(B){case"NonFiniteVertex":st="Non-finite vertex";break;case"NotManifold":st="Not manifold";break;case"VertexOutOfBounds":st="Vertex index out of bounds";break;case"PropertiesWrongLength":st="Properties have wrong length";break;case"MissingPositionProperties":st="Less than three properties";break;case"MergeVectorsDifferentLengths":st="Merge vectors have different lengths";break;case"MergeIndexOutOfBounds":st="Merge index out of bounds";break;case"TransformWrongLength":st="Transform vector has wrong length";break;case"RunIndexWrongLength":st="Run index vector has wrong length";break;case"FaceIDWrongLength":st="Face ID vector has wrong length";break;case"InvalidConstruction":st="Manifold constructed with invalid parameters";break;case"ResultTooLarge":st="Result exceeds maximum size";break;case"InvalidTangents":st="Invalid halfedge tangents";break}let It=Error.apply(this,[st,...K]);It.name=this.name="ManifoldError",this.message=It.message,this.stack=It.stack,this.code=B},e.ManifoldError.prototype=Object.create(Error.prototype,{constructor:{value:e.ManifoldError,writable:!0,configurable:!0}}),e.CrossSection=function(C,B="Positive"){let K=w(C),st=new at(K,X(B));return P(K),st},e.CrossSection.ofPolygons=function(C,B="Positive"){return new e.CrossSection(C,B)},e.CrossSection.square=function(...C){let B;C.length==0?B={x:1,y:1}:typeof C[0]=="number"?B={x:C[0],y:C[0]}:B=V(C);let K=C[1]||!1;return e._Square(B,K)},e.CrossSection.circle=function(C,B=0){return e._Circle(C,B)};function At(C){return function(...B){B.length==1&&(B=B[0]);let K=new e.Vector_crossSection;for(let It of B)K.push_back(dt(It));let st=e["_crossSection"+C](K);return K.delete(),st}}e.CrossSection.compose=At("Compose"),e.CrossSection.union=At("UnionN"),e.CrossSection.difference=At("DifferenceN"),e.CrossSection.intersection=At("IntersectionN");function Ot(C,B){u(C,B,K=>K instanceof Array?{x:K[0],y:K[1]}:K)}e.CrossSection.hull=function(...C){C.length==1&&(C=C[0]);let B=new e.Vector_vec2;for(let st of C)if(st instanceof at)e._crossSectionCollectVertices(B,st);else if(st instanceof Array&&st.length==2&&typeof st[0]=="number")B.push_back({x:st[0],y:st[1]});else if(st.x)B.push_back(st);else{let te=st[0].length==2&&typeof st[0][0]=="number"||st[0].x?[st]:st;for(let fe of te)Ot(B,fe)}let K=e._crossSectionHullPoints(B);return B.delete(),K},e.CrossSection.prototype=Object.create(at.prototype),Object.defineProperty(e.CrossSection,Symbol.hasInstance,{get:()=>C=>C instanceof at});let Xt=e.Manifold;e.Manifold=function(C){let B=new Xt(C),K=B.status();if(K!=="NoError")throw new e.ManifoldError(K);return B},e.Manifold.ofMesh=function(C){return new e.Manifold(C)},e.Manifold.tetrahedron=function(){return e._Tetrahedron()},e.Manifold.cube=function(...C){let B;C.length==0?B={x:1,y:1,z:1}:typeof C[0]=="number"?B={x:C[0],y:C[0],z:C[0]}:B=H(C);let K=C[1]||!1;return e._Cube(B,K)},e.Manifold.cylinder=function(C,B,K=-1,st=0,It=!1){return e._Cylinder(C,B,K,st,It)},e.Manifold.sphere=function(C,B=0){return e._Sphere(C,B)},e.Manifold.smooth=function(C,B=[]){let K=new e.Vector_smoothness;u(K,B);let st=e._Smooth(C,K);return K.delete(),st},e.Manifold.extrude=function(C,B,K=0,st=0,It=[1,1],te=!1){return(C instanceof at?C:e.CrossSection(C,"Positive")).extrude(B,K,st,It,te)},e.Manifold.revolve=function(C,B=0,K=360){return(C instanceof at?C:e.CrossSection(C,"Positive")).revolve(B,K)},e.Manifold.reserveIDs=function(C){return e._ReserveIDs(C)};function Jt(C){return function(...B){B.length==1&&(B=B[0]);let K=new e.Vector_manifold;for(let It of B)K.push_back(It);let st=e["_manifold"+C+"N"](K);return K.delete(),st}}e.Manifold.union=Jt("Union"),e.Manifold.compose=e.Manifold.union,e.Manifold.difference=Jt("Difference"),e.Manifold.intersection=Jt("Intersection"),e.Manifold.levelSet=function(C,B,K,st=0,It=-1){let te={min:{x:B.min[0],y:B.min[1],z:B.min[2]},max:{x:B.max[0],y:B.max[1],z:B.max[2]}},fe=Ai(function(Te){let Pn=le(Te,"double"),ii=le(Te+8,"double"),De=le(Te+16,"double");return C([Pn,ii,De])},"di"),Ie=e._LevelSet(fe,te,K,st,It);return Ci(fe),Ie},e.ExecutionContext.prototype.fromMesh=function(C){return this._FromMesh(C)},e.ExecutionContext.prototype.smooth=function(C,B=[]){let K=new e.Vector_smoothness;u(K,B);let st=this._Smooth(C,K);return K.delete(),st},e.ExecutionContext.prototype.levelSet=function(C,B,K,st=0,It=-1){let te={min:{x:B.min[0],y:B.min[1],z:B.min[2]},max:{x:B.max[0],y:B.max[1],z:B.max[2]}},fe=Ai(function(Te){let Pn=le(Te,"double"),ii=le(Te+8,"double"),De=le(Te+16,"double");return C([Pn,ii,De])},"di"),Ie=this._LevelSet(fe,te,K,st,It);return Ci(fe),Ie};function ie(C,B){u(C,B,K=>K instanceof Array?{x:K[0],y:K[1],z:K[2]}:K)}e.Manifold.hull=function(...C){C.length==1&&(C=C[0]);let B=new e.Vector_vec3;for(let st of C)st instanceof Xt?e._manifoldCollectVertices(B,st):st instanceof Array&&st.length==3&&typeof st[0]=="number"?B.push_back({x:st[0],y:st[1],z:st[2]}):st.x?B.push_back(st):ie(B,st);let K=e._manifoldHullPoints(B);return B.delete(),K},e.Manifold.prototype=Object.create(Xt.prototype),Object.defineProperty(e.Manifold,Symbol.hasInstance,{get:()=>C=>C instanceof Xt}),e.triangulate=function(C,B=-1,K=!0){let st=w(C),It=d(e._Triangulate(st,B,K),te=>[te[0],te[1],te[2]]);return P(st),It}};var c=[],l="./this.program",h=(u,d)=>{throw d},f=import.meta.url,m="";function g(u){return e.locateFile?e.locateFile(u,m):m+u}var v,y;if(s){var _=o("node:fs");f.startsWith("file:")&&(m=o("node:path").dirname(o("node:url").fileURLToPath(f))+"/"),y=u=>{u=U(u)?new URL(u):u;var d=_.readFileSync(u);return d},v=async(u,d=!0)=>{u=U(u)?new URL(u):u;var S=_.readFileSync(u,d?void 0:"utf8");return S},process.argv.length>1&&(l=process.argv[1].replace(/\\/g,"/")),c=process.argv.slice(2),h=(u,d)=>{throw process.exitCode=u,d}}else if(n||r){try{m=new URL(".",f).href}catch{}r&&(y=u=>{var d=new XMLHttpRequest;return d.open("GET",u,!1),d.responseType="arraybuffer",d.send(null),new Uint8Array(d.response)}),v=async u=>{if(U(u))return new Promise((S,w)=>{var P=new XMLHttpRequest;P.open("GET",u,!0),P.responseType="arraybuffer",P.onload=()=>{if(P.status==200||P.status==0&&P.response){S(P.response);return}w(P.status)},P.onerror=w,P.send(null)});var d=await fetch(u,{credentials:"same-origin"});if(d.ok)return d.arrayBuffer();throw new Error(d.status+" : "+d.url)}}var p=console.log.bind(console),I=console.error.bind(console),R,T=!1,U=u=>u.startsWith("file://"),L,F,z,b,E,N,q,Y,tt,rt,et,_t,j=!1;function bt(){var u=Is.buffer;z=new Int8Array(u),E=new Int16Array(u),b=new Uint8Array(u),N=new Uint16Array(u),q=new Int32Array(u),Y=new Uint32Array(u),tt=new Float32Array(u),rt=new Float64Array(u),et=new BigInt64Array(u),_t=new BigUint64Array(u)}function Ct(){if(e.preRun)for(typeof e.preRun=="function"&&(e.preRun=[e.preRun]);e.preRun.length;)Bt(e.preRun.shift());D($t)}function Gt(){j=!0,Ri.J()}function ae(){if(e.postRun)for(typeof e.postRun=="function"&&(e.postRun=[e.postRun]);e.postRun.length;)ne(e.postRun.shift());D(Ae)}function ve(u){e.onAbort?.(u),u="Aborted("+u+")",I(u),T=!0,u+=". Build with -sASSERTIONS for more info.";var d=new WebAssembly.RuntimeError(u);throw F?.(d),d}var be;function ge(){return e.locateFile?g("manifold.wasm"):new URL("manifold.wasm",import.meta.url).href}function ot(u){if(u==be&&R)return new Uint8Array(R);if(y)return y(u);throw"both async and sync fetching of the wasm failed"}async function ut(u){if(!R)try{var d=await v(u);return new Uint8Array(d)}catch{}return ot(u)}async function Lt(u,d){try{var S=await ut(u),w=await WebAssembly.instantiate(S,d);return w}catch(P){I(`failed to asynchronously prepare wasm: ${P}`),ve(P)}}async function Kt(u,d,S){if(!u&&!U(d)&&!s)try{var w=fetch(d,{credentials:"same-origin"}),P=await WebAssembly.instantiateStreaming(w,S);return P}catch(V){I(`wasm streaming compile failed: ${V}`),I("falling back to ArrayBuffer instantiation")}return Lt(d,S)}function Ht(){var u={a:Rd};return u}async function ue(){function u(V,H){return Ri=V.exports,Ri=Pd(Ri),Cd(Ri),bt(),Ri}function d(V){return u(V.instance)}var S=Ht();if(e.instantiateWasm)return new Promise((V,H)=>{e.instantiateWasm(S,(X,nt)=>{V(u(X,nt))})});be??=ge();var w=await Kt(R,be,S),P=d(w);return P}class $e{name="ExitStatus";constructor(d){this.message=`Program terminated with exit(${d})`,this.status=d}}var D=u=>{for(;u.length>0;)u.shift()(e)},Ae=[],ne=u=>Ae.push(u),$t=[],Bt=u=>$t.push(u);function le(u,d="i8"){switch(d.endsWith("*")&&(d="*"),d){case"i1":return z[u>>>0];case"i8":return z[u>>>0];case"i16":return E[u>>>1>>>0];case"i32":return q[u>>>2>>>0];case"i64":return et[u>>>3>>>0];case"float":return tt[u>>>2>>>0];case"double":return rt[u>>>3>>>0];case"*":return Y[u>>>2>>>0];default:ve(`invalid type for getValue: ${d}`)}}var zt=!0;function jt(u,d,S="i8"){switch(S.endsWith("*")&&(S="*"),S){case"i1":z[u>>>0]=d;break;case"i8":z[u>>>0]=d;break;case"i16":E[u>>>1>>>0]=d;break;case"i32":q[u>>>2>>>0]=d;break;case"i64":et[u>>>3>>>0]=BigInt(d);break;case"float":tt[u>>>2>>>0]=d;break;case"double":rt[u>>>3>>>0]=d;break;case"*":Y[u>>>2>>>0]=d;break;default:ve(`invalid type for setValue: ${S}`)}}class Be{constructor(d){this.excPtr=d,this.ptr=d-24}set_type(d){Y[this.ptr+4>>>2>>>0]=d}get_type(){return Y[this.ptr+4>>>2>>>0]}set_destructor(d){Y[this.ptr+8>>>2>>>0]=d}get_destructor(){return Y[this.ptr+8>>>2>>>0]}set_caught(d){d=d?1:0,z[this.ptr+12>>>0]=d}get_caught(){return z[this.ptr+12>>>0]!=0}set_rethrown(d){d=d?1:0,z[this.ptr+13>>>0]=d}get_rethrown(){return z[this.ptr+13>>>0]!=0}init(d,S){this.set_adjusted_ptr(0),this.set_type(d),this.set_destructor(S)}set_adjusted_ptr(d){Y[this.ptr+16>>>2>>>0]=d}get_adjusted_ptr(){return Y[this.ptr+16>>>2>>>0]}}var Ue=0,A=0;function x(u,d,S){u>>>=0,d>>>=0,S>>>=0;var w=new Be(u);throw w.init(d,S),Ue=u,A++,Ue}var $=()=>ve(""),it={},ht=u=>{for(;u.length;){var d=u.pop(),S=u.pop();S(d)}};function Q(u){return this.fromWireType(Y[u>>>2>>>0])}var Ut={},gt={},Nt={},kt=class extends Error{constructor(d){super(d),this.name="InternalError"}},ft=u=>{throw new kt(u)},xt=(u,d,S)=>{u.forEach(X=>Nt[X]=d);function w(X){var nt=S(X);nt.length!==u.length&&ft("Mismatched type converter count");for(var at=0;at<u.length;++at)ct(u[at],nt[at])}var P=new Array(d.length),V=[],H=0;for(let[X,nt]of d.entries())gt.hasOwnProperty(nt)?P[X]=gt[nt]:(V.push(nt),Ut.hasOwnProperty(nt)||(Ut[nt]=[]),Ut[nt].push(()=>{P[X]=gt[nt],++H,H===V.length&&w(P)}));V.length===0&&w(P)},Yt=function(u){u>>>=0;var d=it[u];delete it[u];var S=d.rawConstructor,w=d.rawDestructor,P=d.fields,V=P.map(H=>H.getterReturnType).concat(P.map(H=>H.setterArgumentType));xt([u],V,H=>{var X={};for(var[nt,at]of P.entries()){let dt=H[nt],yt=at.getter,At=at.getterContext,Ot=H[nt+P.length],Xt=at.setter,Jt=at.setterContext;X[at.fieldName]={read:ie=>dt.fromWireType(yt(At,ie)),write:(ie,C)=>{var B=[];Xt(Jt,ie,Ot.toWireType(B,C)),ht(B)},optional:dt.optional}}return[{name:d.name,fromWireType:dt=>{var yt={};for(var At in X)yt[At]=X[At].read(dt);return w(dt),yt},toWireType:(dt,yt)=>{for(var At in X)if(!(At in yt)&&!X[At].optional)throw new TypeError(`Missing field: "${At}"`);var Ot=S();for(At in X)X[At].write(Ot,yt[At]);return dt!==null&&dt.push(w,Ot),Ot},readValueFromPointer:Q,destructorFunction:w}]})},St=u=>{u>>>=0;for(var d="";;){var S=b[u++>>>0];if(!S)return d;d+=String.fromCharCode(S)}},Mt=class extends Error{constructor(d){super(d),this.name="BindingError"}},wt=u=>{throw new Mt(u)};function O(u,d,S={}){var w=d.name;if(u||wt(`type "${w}" must have a positive integer typeid pointer`),gt.hasOwnProperty(u)){if(S.ignoreDuplicateRegistrations)return;wt(`Cannot register type '${w}' twice`)}if(gt[u]=d,delete Nt[u],Ut.hasOwnProperty(u)){var P=Ut[u];delete Ut[u],P.forEach(V=>V())}}function ct(u,d,S={}){return O(u,d,S)}var vt=(u,d,S)=>{switch(d){case 1:return S?w=>z[w>>>0]:w=>b[w>>>0];case 2:return S?w=>E[w>>>1>>>0]:w=>N[w>>>1>>>0];case 4:return S?w=>q[w>>>2>>>0]:w=>Y[w>>>2>>>0];case 8:return S?w=>et[w>>>3>>>0]:w=>_t[w>>>3>>>0];default:throw new TypeError(`invalid integer width (${d}): ${u}`)}},Pt=function(u,d,S,w,P){u>>>=0,d>>>=0,S>>>=0,d=St(d);let V=w===0n,H=X=>X;if(V){let X=S*8;H=nt=>BigInt.asUintN(X,nt),P=H(P)}ct(u,{name:d,fromWireType:H,toWireType:(X,nt)=>(typeof nt=="number"&&(nt=BigInt(nt)),nt),readValueFromPointer:vt(d,S,!V),destructorFunction:null})};function pt(u,d,S,w){u>>>=0,d>>>=0,d=St(d),ct(u,{name:d,fromWireType:function(P){return!!P},toWireType:function(P,V){return V?S:w},readValueFromPointer:function(P){return this.fromWireType(b[P>>>0])},destructorFunction:null})}var lt=u=>({count:u.count,deleteScheduled:u.deleteScheduled,preservePointerOnDelete:u.preservePointerOnDelete,ptr:u.ptr,ptrType:u.ptrType,smartPtr:u.smartPtr,smartPtrType:u.smartPtrType}),Dt=u=>{function d(S){return S.$$.ptrType.registeredClass.name}wt(d(u)+" instance already deleted")},Qt=!1,Me=u=>{},_e=u=>{u.smartPtr?u.smartPtrType.rawDestructor(u.smartPtr):u.ptrType.registeredClass.rawDestructor(u.ptr)},gn=u=>{u.count.value-=1;var d=u.count.value===0;d&&_e(u)},Ze=u=>globalThis.FinalizationRegistry?(Qt=new FinalizationRegistry(d=>{gn(d.$$)}),Ze=d=>{var S=d.$$,w=!!S.smartPtr;if(w){var P={$$:S};Qt.register(d,P,d)}return d},Me=d=>Qt.unregister(d),Ze(u)):(Ze=d=>d,u),Si=[],Bn=()=>{for(;Si.length;){var u=Si.pop();u.$$.deleteScheduled=!1,u.delete()}},er,Rs=()=>{let u=bi.prototype;Object.assign(u,{isAliasOf(S){if(!(this instanceof bi)||!(S instanceof bi))return!1;var w=this.$$.ptrType.registeredClass,P=this.$$.ptr;S.$$=S.$$;for(var V=S.$$.ptrType.registeredClass,H=S.$$.ptr;w.baseClass;)P=w.upcast(P),w=w.baseClass;for(;V.baseClass;)H=V.upcast(H),V=V.baseClass;return w===V&&P===H},clone(){if(this.$$.ptr||Dt(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var S=Ze(Object.create(Object.getPrototypeOf(this),{$$:{value:lt(this.$$)}}));return S.$$.count.value+=1,S.$$.deleteScheduled=!1,S},delete(){this.$$.ptr||Dt(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&wt("Object already scheduled for deletion"),Me(this),gn(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},isDeleted(){return!this.$$.ptr},deleteLater(){return this.$$.ptr||Dt(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&wt("Object already scheduled for deletion"),Si.push(this),Si.length===1&&er&&er(Bn),this.$$.deleteScheduled=!0,this}});let d=Symbol.dispose;d&&(u[d]=u.delete)};function bi(){}var zn=(u,d)=>Object.defineProperty(d,"name",{value:u}),Br={},Ei=(u,d,S)=>{if(u[d].overloadTable===void 0){var w=u[d];u[d]=function(...P){return u[d].overloadTable.hasOwnProperty(P.length)||wt(`Function '${S}' called with an invalid number of arguments (${P.length}) - expects one of (${u[d].overloadTable})!`),u[d].overloadTable[P.length].apply(this,P)},u[d].overloadTable=[],u[d].overloadTable[w.argCount]=w}},ei=(u,d,S)=>{e.hasOwnProperty(u)?((S===void 0||e[u].overloadTable!==void 0&&e[u].overloadTable[S]!==void 0)&&wt(`Cannot register public name '${u}' twice`),Ei(e,u,u),e[u].overloadTable.hasOwnProperty(S)&&wt(`Cannot register multiple overloads of a function with the same number of arguments (${S})!`),e[u].overloadTable[S]=d):(e[u]=d,e[u].argCount=S)},Ps=48,Pa=57,Ia=u=>{u=u.replace(/[^a-zA-Z0-9_]/g,"$");var d=u.charCodeAt(0);return d>=Ps&&d<=Pa?`_${u}`:u};function Da(u,d,S,w,P,V,H,X){this.name=u,this.constructor=d,this.instancePrototype=S,this.rawDestructor=w,this.baseClass=P,this.getActualType=V,this.upcast=H,this.downcast=X,this.pureVirtualFunctions=[]}var zr=(u,d,S)=>{for(;d!==S;)d.upcast||wt(`Expected null or instance of ${S.name}, got an instance of ${d.name}`),u=d.upcast(u),d=d.baseClass;return u},kr=u=>{if(u===null)return"null";var d=typeof u;return d==="object"||d==="array"||d==="function"?u.toString():""+u};function La(u,d){if(d===null)return this.isReference&&wt(`null is not a valid ${this.name}`),0;d.$$||wt(`Cannot pass "${kr(d)}" as a ${this.name}`),d.$$.ptr||wt(`Cannot pass deleted object as a pointer of type ${this.name}`);var S=d.$$.ptrType.registeredClass,w=zr(d.$$.ptr,S,this.registeredClass);return w}function M(u,d){var S;if(d===null)return this.isReference&&wt(`null is not a valid ${this.name}`),this.isSmartPointer?(S=this.rawConstructor(),u!==null&&u.push(this.rawDestructor,S),S):0;(!d||!d.$$)&&wt(`Cannot pass "${kr(d)}" as a ${this.name}`),d.$$.ptr||wt(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&d.$$.ptrType.isConst&&wt(`Cannot convert argument of type ${d.$$.smartPtrType?d.$$.smartPtrType.name:d.$$.ptrType.name} to parameter type ${this.name}`);var w=d.$$.ptrType.registeredClass;if(S=zr(d.$$.ptr,w,this.registeredClass),this.isSmartPointer)switch(d.$$.smartPtr===void 0&&wt("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:d.$$.smartPtrType===this?S=d.$$.smartPtr:wt(`Cannot convert argument of type ${d.$$.smartPtrType?d.$$.smartPtrType.name:d.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:S=d.$$.smartPtr;break;case 2:if(d.$$.smartPtrType===this)S=d.$$.smartPtr;else{var P=d.clone();S=this.rawShare(S,Ee.toHandle(()=>P.delete())),u!==null&&u.push(this.rawDestructor,S)}break;default:wt("Unsupported sharing policy")}return S}function k(u,d){if(d===null)return this.isReference&&wt(`null is not a valid ${this.name}`),0;d.$$||wt(`Cannot pass "${kr(d)}" as a ${this.name}`),d.$$.ptr||wt(`Cannot pass deleted object as a pointer of type ${this.name}`),d.$$.ptrType.isConst&&wt(`Cannot convert argument of type ${d.$$.ptrType.name} to parameter type ${this.name}`);var S=d.$$.ptrType.registeredClass,w=zr(d.$$.ptr,S,this.registeredClass);return w}var Z=(u,d,S)=>{if(d===S)return u;if(S.baseClass===void 0)return null;var w=Z(u,d,S.baseClass);return w===null?null:S.downcast(w)},J={},G=(u,d)=>{for(d===void 0&&wt("ptr should not be undefined");u.baseClass;)d=u.upcast(d),u=u.baseClass;return d},mt=(u,d)=>(d=G(u,d),J[d]),Et=(u,d)=>{(!d.ptrType||!d.ptr)&&ft("makeClassHandle requires ptr and ptrType");var S=!!d.smartPtrType,w=!!d.smartPtr;return S!==w&&ft("Both smartPtrType and smartPtr must be specified"),d.count={value:1},Ze(Object.create(u,{$$:{value:d,writable:!0}}))};function Ft(u){var d=this.getPointee(u);if(!d)return this.destructor(u),null;var S=mt(this.registeredClass,d);if(S!==void 0){if(S.$$.count.value===0)return S.$$.ptr=d,S.$$.smartPtr=u,S.clone();var w=S.clone();return this.destructor(u),w}function P(){return this.isSmartPointer?Et(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:d,smartPtrType:this,smartPtr:u}):Et(this.registeredClass.instancePrototype,{ptrType:this,ptr:u})}var V=this.registeredClass.getActualType(d),H=Br[V];if(!H)return P.call(this);var X;this.isConst?X=H.constPointerType:X=H.pointerType;var nt=Z(d,this.registeredClass,X.registeredClass);return nt===null?P.call(this):this.isSmartPointer?Et(X.registeredClass.instancePrototype,{ptrType:X,ptr:nt,smartPtrType:this,smartPtr:u}):Et(X.registeredClass.instancePrototype,{ptrType:X,ptr:nt})}var Rt=()=>{Object.assign(qt.prototype,{getPointee(u){return this.rawGetPointee&&(u=this.rawGetPointee(u)),u},destructor(u){this.rawDestructor?.(u)},readValueFromPointer:Q,fromWireType:Ft})};function qt(u,d,S,w,P,V,H,X,nt,at,dt){this.name=u,this.registeredClass=d,this.isReference=S,this.isConst=w,this.isSmartPointer=P,this.pointeeType=V,this.sharingPolicy=H,this.rawGetPointee=X,this.rawConstructor=nt,this.rawShare=at,this.rawDestructor=dt,!P&&d.baseClass===void 0?w?(this.toWireType=La,this.destructorFunction=null):(this.toWireType=k,this.destructorFunction=null):this.toWireType=M}var Zt=(u,d,S)=>{e.hasOwnProperty(u)||ft("Replacing nonexistent public symbol"),e[u].overloadTable!==void 0&&S!==void 0?e[u].overloadTable[S]=d:(e[u]=d,e[u].argCount=S)},Vt=u=>Vr.get(u),ce=(u,d,S=[],w=!1)=>{var P=Vt(d),V=P(...S);function H(X){return u[0]=="p"?X>>>0:X}return H(V)},xe=(u,d,S=!1)=>(...w)=>ce(u,d,w,S),pe=(u,d,S=!1)=>{u=St(u);function w(){if(u.includes("p"))return xe(u,d,S);var V=Vt(d);return V}var P=w();return typeof P!="function"&&wt(`unknown function pointer with signature ${u}: ${d}`),P};class Ce extends Error{}var ye=u=>{var d=vc(u),S=St(d);return Vn(d),S},Wt=(u,d)=>{var S=[],w={};function P(V){if(!w[V]&&!gt[V]){if(Nt[V]){Nt[V].forEach(P);return}S.push(V),w[V]=!0}}throw d.forEach(P),new Ce(`${u}: `+S.map(ye).join([", "]))};function Re(u,d,S,w,P,V,H,X,nt,at,dt,yt,At){u>>>=0,d>>>=0,S>>>=0,w>>>=0,P>>>=0,V>>>=0,H>>>=0,X>>>=0,nt>>>=0,at>>>=0,dt>>>=0,yt>>>=0,At>>>=0,dt=St(dt),V=pe(P,V),X&&=pe(H,X),at&&=pe(nt,at),At=pe(yt,At);var Ot=Ia(dt);ei(Ot,function(){Wt(`Cannot construct ${dt} due to unbound types`,[w])}),xt([u,d,S],w?[w]:[],Xt=>{Xt=Xt[0];var Jt,ie;w?(Jt=Xt.registeredClass,ie=Jt.instancePrototype):ie=bi.prototype;var C=zn(dt,function(...fe){if(Object.getPrototypeOf(this)!==B)throw new Mt(`Use 'new' to construct ${dt}`);if(K.constructor_body===void 0)throw new Mt(`${dt} has no accessible constructor`);var Ie=K.constructor_body[fe.length];if(Ie===void 0)throw new Mt(`Tried to invoke ctor of ${dt} with invalid number of parameters (${fe.length}) - expected (${Object.keys(K.constructor_body).toString()}) parameters instead!`);return Ie.apply(this,fe)}),B=Object.create(ie,{constructor:{value:C}});C.prototype=B;var K=new Da(dt,C,B,At,Jt,V,X,at);K.baseClass&&(K.baseClass.__derivedClasses??=[],K.baseClass.__derivedClasses.push(K));var st=new qt(dt,K,!0,!1,!1),It=new qt(dt+"*",K,!1,!1,!1),te=new qt(dt+" const*",K,!1,!0,!1);return Br[u]={pointerType:It,constPointerType:te},Zt(Ot,C),[st,It,te]})}var de=(u,d)=>{for(var S=[],w=0;w<u;w++)S.push(Y[d+w*4>>>2>>>0]);return S};function nn(u){for(var d=1;d<u.length;++d)if(u[d]!==null&&u[d].destructorFunction===void 0)return!0;return!1}var ni={ftf:function(d,S,w,P,V,H,X){return function(){var nt=w(P),at=H(nt);return at}},tffn:function(d,S,w,P,V,H,X){return function(){var nt=X(null,this);w(P,nt)}},ttfn:function(d,S,w,P,V,H,X){return function(){var nt=X(null,this),at=w(P,nt),dt=H(at);return dt}},ttfnn:function(d,S,w,P,V,H,X,nt){return function(at){var dt=X(null,this),yt=nt(null,at),At=w(P,dt,yt),Ot=H(At);return Ot}},ttfnnn:function(d,S,w,P,V,H,X,nt,at){return function(dt,yt){var At=X(null,this),Ot=nt(null,dt),Xt=at(null,yt),Jt=w(P,At,Ot,Xt),ie=H(Jt);return ie}},ttfnntnnn:function(d,S,w,P,V,H,X,nt,at,dt,yt,At,Ot){return function(Xt,Jt,ie,C,B){var K=X(null,this),st=nt(null,Xt),It=at(null,Jt),te=dt(null,ie),fe=yt(null,C),Ie=At(null,B),Te=w(P,K,st,It,te,fe,Ie);Ot(It);var Pn=H(Te);return Pn}},tffnt:function(d,S,w,P,V,H,X,nt,at){return function(dt){var yt=X(null,this),At=nt(null,dt);w(P,yt,At),at(At)}},tffnnt:function(d,S,w,P,V,H,X,nt,at,dt){return function(yt,At){var Ot=X(null,this),Xt=nt(null,yt),Jt=at(null,At);w(P,Ot,Xt,Jt),dt(Jt)}},ttfnnt:function(d,S,w,P,V,H,X,nt,at,dt){return function(yt,At){var Ot=X(null,this),Xt=nt(null,yt),Jt=at(null,At),ie=w(P,Ot,Xt,Jt);dt(Jt);var C=H(ie);return C}},tffnn:function(d,S,w,P,V,H,X,nt){return function(at){var dt=X(null,this),yt=nt(null,at);w(P,dt,yt)}},tffnnn:function(d,S,w,P,V,H,X,nt,at){return function(dt,yt){var At=X(null,this),Ot=nt(null,dt),Xt=at(null,yt);w(P,At,Ot,Xt)}},ftfnn:function(d,S,w,P,V,H,X,nt,at){return function(dt,yt){var At=nt(null,dt),Ot=at(null,yt),Xt=w(P,At,Ot),Jt=H(Xt);return Jt}},ttfnt:function(d,S,w,P,V,H,X,nt,at){return function(dt){var yt=X(null,this),At=nt(null,dt),Ot=w(P,yt,At);at(At);var Xt=H(Ot);return Xt}},ttfnnnnn:function(d,S,w,P,V,H,X,nt,at,dt,yt){return function(At,Ot,Xt,Jt){var ie=X(null,this),C=nt(null,At),B=at(null,Ot),K=dt(null,Xt),st=yt(null,Jt),It=w(P,ie,C,B,K,st),te=H(It);return te}},ftftn:function(d,S,w,P,V,H,X,nt,at,dt){return function(yt,At){var Ot=nt(null,yt),Xt=at(null,At),Jt=w(P,Ot,Xt);dt(Ot);var ie=H(Jt);return ie}},ftfn:function(d,S,w,P,V,H,X,nt){return function(at){var dt=nt(null,at),yt=w(P,dt),At=H(yt);return At}},fffnn:function(d,S,w,P,V,H,X,nt,at){return function(dt,yt){var At=nt(null,dt),Ot=at(null,yt);w(P,At,Ot)}},ttfntn:function(d,S,w,P,V,H,X,nt,at,dt){return function(yt,At){var Ot=X(null,this),Xt=nt(null,yt),Jt=at(null,At),ie=w(P,Ot,Xt,Jt);dt(Xt);var C=H(ie);return C}},ttfnnnn:function(d,S,w,P,V,H,X,nt,at,dt){return function(yt,At,Ot){var Xt=X(null,this),Jt=nt(null,yt),ie=at(null,At),C=dt(null,Ot),B=w(P,Xt,Jt,ie,C),K=H(B);return K}},ttfntt:function(d,S,w,P,V,H,X,nt,at,dt,yt){return function(At,Ot){var Xt=X(null,this),Jt=nt(null,At),ie=at(null,Ot),C=w(P,Xt,Jt,ie);dt(Jt),yt(ie);var B=H(C);return B}},ftfnnnnn:function(d,S,w,P,V,H,X,nt,at,dt,yt,At){return function(Ot,Xt,Jt,ie,C){var B=nt(null,Ot),K=at(null,Xt),st=dt(null,Jt),It=yt(null,ie),te=At(null,C),fe=w(P,B,K,st,It,te),Ie=H(fe);return Ie}},ftfnnnnt:function(d,S,w,P,V,H,X,nt,at,dt,yt,At,Ot){return function(Xt,Jt,ie,C,B){var K=nt(null,Xt),st=at(null,Jt),It=dt(null,ie),te=yt(null,C),fe=At(null,B),Ie=w(P,K,st,It,te,fe);Ot(fe);var Te=H(Ie);return Te}},ftfnnn:function(d,S,w,P,V,H,X,nt,at,dt){return function(yt,At,Ot){var Xt=nt(null,yt),Jt=at(null,At),ie=dt(null,Ot),C=w(P,Xt,Jt,ie),B=H(C);return B}},ftfntnnn:function(d,S,w,P,V,H,X,nt,at,dt,yt,At,Ot){return function(Xt,Jt,ie,C,B){var K=nt(null,Xt),st=at(null,Jt),It=dt(null,ie),te=yt(null,C),fe=At(null,B),Ie=w(P,K,st,It,te,fe);Ot(st);var Te=H(Ie);return Te}},fffn:function(d,S,w,P,V,H,X,nt){return function(at){var dt=nt(null,at);w(P,dt)}},fff:function(d,S,w,P,V,H,X){return function(){w(P)}}};function rn(u,d,S,w){let P=[d?"t":"f",S?"t":"f",w?"t":"f"];for(let V=d?1:2;V<u.length;++V){let H=u[V],X="";H.destructorFunction===void 0?X="u":H.destructorFunction===null?X="n":X="t",P.push(X)}return P.join("")}function kn(u,d,S,w,P,V){var H=d.length;H<2&&wt("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var X=d[1]!==null&&S!==null,nt=nn(d),at=!d[0].isVoid,dt=d[0],yt=d[1],At=[u,wt,w,P,ht,dt.fromWireType.bind(dt),yt?.toWireType.bind(yt)],Ot=2;Ot<H;++Ot){var Xt=d[Ot];At.push(Xt.toWireType.bind(Xt))}if(!nt)for(var Ot=X?1:2;Ot<d.length;++Ot)d[Ot].destructorFunction!==null&&At.push(d[Ot].destructorFunction);var Jt=rn(d,X,at,V),ie=ni[Jt](...At);return zn(u,ie)}var Pe=function(u,d,S,w,P,V){u>>>=0,S>>>=0,w>>>=0,P>>>=0,V>>>=0;var H=de(d,S);P=pe(w,P),xt([],[u],X=>{X=X[0];var nt=`constructor ${X.name}`;if(X.registeredClass.constructor_body===void 0&&(X.registeredClass.constructor_body=[]),X.registeredClass.constructor_body[d-1]!==void 0)throw new Mt(`Cannot register multiple constructors with identical number of parameters (${d-1}) for class '${X.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return X.registeredClass.constructor_body[d-1]=()=>{Wt(`Cannot construct ${X.name} due to unbound types`,H)},xt([],H,at=>(at.splice(1,0,null),X.registeredClass.constructor_body[d-1]=kn(nt,at,null,P,V),[])),[]})},sn=u=>{u=u.trim();let d=u.indexOf("(");return d===-1?u:u.slice(0,d)},ln=function(u,d,S,w,P,V,H,X,nt,at){u>>>=0,d>>>=0,w>>>=0,P>>>=0,V>>>=0,H>>>=0;var dt=de(S,w);d=St(d),d=sn(d),V=pe(P,V,nt),xt([],[u],yt=>{yt=yt[0];var At=`${yt.name}.${d}`;d.startsWith("@@")&&(d=Symbol[d.substring(2)]),X&&yt.registeredClass.pureVirtualFunctions.push(d);function Ot(){Wt(`Cannot call ${At} due to unbound types`,dt)}var Xt=yt.registeredClass.instancePrototype,Jt=Xt[d];return Jt===void 0||Jt.overloadTable===void 0&&Jt.className!==yt.name&&Jt.argCount===S-2?(Ot.argCount=S-2,Ot.className=yt.name,Xt[d]=Ot):(Ei(Xt,d,At),Xt[d].overloadTable[S-2]=Ot),xt([],dt,ie=>{var C=kn(At,ie,yt,V,H,nt);return Xt[d].overloadTable===void 0?(C.argCount=S-2,Xt[d]=C):Xt[d].overloadTable[S-2]=C,[]}),[]})},We=[],Fe=[0,1,,1,null,1,!0,1,!1,1];function Ti(u){u>>>=0,u>9&&--Fe[u+1]===0&&(Fe[u]=void 0,We.push(u))}var Ee={toValue:u=>(u||wt(`Cannot use deleted val. handle = ${u}`),Fe[u]),toHandle:u=>{switch(u){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{let d=We.pop()||Fe.length;return Fe[d]=u,Fe[d+1]=1,d}}}},hc={name:"emscripten::val",fromWireType:u=>{var d=Ee.toValue(u);return Ti(u),d},toWireType:(u,d)=>Ee.toHandle(d),readValueFromPointer:Q,destructorFunction:null};function Cu(u){return u>>>=0,ct(u,hc)}var Ua=(u,d,S)=>{switch(d){case 1:return S?function(w){return this.fromWireType(z[w>>>0])}:function(w){return this.fromWireType(b[w>>>0])};case 2:return S?function(w){return this.fromWireType(E[w>>>1>>>0])}:function(w){return this.fromWireType(N[w>>>1>>>0])};case 4:return S?function(w){return this.fromWireType(q[w>>>2>>>0])}:function(w){return this.fromWireType(Y[w>>>2>>>0])};default:throw new TypeError(`invalid integer width (${d}): ${u}`)}};function Ru(u){return u===0?"object":u===1?"number":"string"}function Pu(u,d,S,w,P){u>>>=0,d>>>=0,S>>>=0,d=St(d);let V=Ru(P);switch(V){case"object":{let at=function(){};at.values={},ct(u,{name:d,constructor:at,valueType:V,fromWireType:function(dt){return this.constructor.values[dt]},toWireType:(dt,yt)=>yt.value,readValueFromPointer:Ua(d,S,w),destructorFunction:null}),ei(d,at);break}case"number":{var H={};ct(u,{name:d,keysMap:H,valueType:V,fromWireType:at=>at,toWireType:(at,dt)=>dt,readValueFromPointer:Ua(d,S,w),destructorFunction:null}),ei(d,H),delete e[d].argCount;break}case"string":{var X={},nt={},H={};ct(u,{name:d,valuesMap:X,reverseMap:nt,keysMap:H,valueType:V,fromWireType:function(dt){return this.reverseMap[dt]},toWireType:function(dt,yt){return this.valuesMap[yt]},readValueFromPointer:Ua(d,S,w),destructorFunction:null}),ei(d,H),delete e[d].argCount;break}}}var uc=(u,d)=>{var S=gt[u];return S===void 0&&wt(`${d} has unknown type ${ye(u)}`),S};function Iu(u,d,S){u>>>=0,d>>>=0;var w=uc(u,"enum");switch(d=St(d),w.valueType){case"object":{var P=w.constructor,V=Object.create(w.constructor.prototype,{value:{value:S},constructor:{value:zn(`${w.name}_${d}`,function(){})}});P.values[S]=V,P[d]=V;break}case"number":{w.keysMap[d]=S;break}case"string":{w.valuesMap[d]=S,w.reverseMap[S]=d,w.keysMap[d]=d;break}}}var Du=(u,d)=>{switch(d){case 4:return function(S){return this.fromWireType(tt[S>>>2>>>0])};case 8:return function(S){return this.fromWireType(rt[S>>>3>>>0])};default:throw new TypeError(`invalid float width (${d}): ${u}`)}},Lu=function(u,d,S){u>>>=0,d>>>=0,S>>>=0,d=St(d),ct(u,{name:d,fromWireType:w=>w,toWireType:(w,P)=>P,readValueFromPointer:Du(d,S),destructorFunction:null})};function Uu(u,d,S,w,P,V,H,X){u>>>=0,S>>>=0,w>>>=0,P>>>=0,V>>>=0;var nt=de(d,S);u=St(u),u=sn(u),P=pe(w,P,H),ei(u,function(){Wt(`Cannot call ${u} due to unbound types`,nt)},d-1),xt([],nt,at=>{var dt=[at[0],null].concat(at.slice(1));return Zt(u,kn(u,dt,null,P,V,H),d-1),[]})}var Nu=function(u,d,S,w,P){u>>>=0,d>>>=0,S>>>=0,d=St(d);let V=w===0,H=nt=>nt;if(V){var X=32-8*S;H=nt=>nt<<X>>>X,P=H(P)}ct(u,{name:d,fromWireType:H,toWireType:(nt,at)=>at,readValueFromPointer:vt(d,S,w!==0),destructorFunction:null})},Fu=(u,d,S)=>{let w=(P,V)=>{let H=0;return{next(){if(H>=P)return{done:!0};let X=H;return H++,{value:V(X),done:!1}},[Symbol.iterator](){return this}}};u[Symbol.iterator]||(u[Symbol.iterator]=function(){let P=this[d]();return w(P,V=>this[S](V))})},Ou=function(u,d,S,w){u>>>=0,d>>>=0,S>>>=0,w>>>=0,S=St(S),w=St(w),xt([],[u,d],P=>{let V=P[0];return Fu(V.registeredClass.instancePrototype,S,w),[]})};function Bu(u,d,S){u>>>=0,S>>>=0;var w=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array],P=w[d];function V(H){var X=Y[H>>>2>>>0],nt=Y[H+4>>>2>>>0];return new P(z.buffer,nt,X)}S=St(S),ct(u,{name:S,fromWireType:V,readValueFromPointer:V},{ignoreDuplicateRegistrations:!0})}var zu=Object.assign({optional:!0},hc);function ku(u,d){u>>>=0,d>>>=0,ct(u,zu)}var Vu=(u,d,S,w)=>{if(S>>>=0,!(w>0))return 0;for(var P=S,V=S+w-1,H=0;H<u.length;++H){var X=u.codePointAt(H);if(X<=127){if(S>=V)break;d[S++>>>0]=X}else if(X<=2047){if(S+1>=V)break;d[S++>>>0]=192|X>>6,d[S++>>>0]=128|X&63}else if(X<=65535){if(S+2>=V)break;d[S++>>>0]=224|X>>12,d[S++>>>0]=128|X>>6&63,d[S++>>>0]=128|X&63}else{if(S+3>=V)break;d[S++>>>0]=240|X>>18,d[S++>>>0]=128|X>>12&63,d[S++>>>0]=128|X>>6&63,d[S++>>>0]=128|X&63,H++}}return d[S>>>0]=0,S-P},Hu=(u,d,S)=>Vu(u,b,d,S),Gu=u=>{for(var d=0,S=0;S<u.length;++S){var w=u.charCodeAt(S);w<=127?d++:w<=2047?d+=2:w>=55296&&w<=57343?(d+=4,++S):d+=3}return d},dc=globalThis.TextDecoder&&new TextDecoder,fc=(u,d,S,w)=>{var P=d+S;if(w)return P;for(;u[d]&&!(d>=P);)++d;return d},Wu=(u,d=0,S,w)=>{d>>>=0;var P=fc(u,d,S,w);if(P-d>16&&u.buffer&&dc)return dc.decode(u.subarray(d,P));for(var V="";d<P;){var H=u[d++];if(!(H&128)){V+=String.fromCharCode(H);continue}var X=u[d++]&63;if((H&224)==192){V+=String.fromCharCode((H&31)<<6|X);continue}var nt=u[d++]&63;if((H&240)==224?H=(H&15)<<12|X<<6|nt:H=(H&7)<<18|X<<12|nt<<6|u[d++]&63,H<65536)V+=String.fromCharCode(H);else{var at=H-65536;V+=String.fromCharCode(55296|at>>10,56320|at&1023)}}return V},Xu=(u,d,S)=>(u>>>=0,u?Wu(b,u,d,S):"");function qu(u,d){u>>>=0,d>>>=0,d=St(d);var S=!0;ct(u,{name:d,fromWireType(w){var P=Y[w>>>2>>>0],V=w+4,H;if(S)H=Xu(V,P,!0);else{H="";for(var X=0;X<P;++X)H+=String.fromCharCode(b[V+X>>>0])}return Vn(w),H},toWireType(w,P){P instanceof ArrayBuffer&&(P=new Uint8Array(P));var V,H=typeof P=="string";H||ArrayBuffer.isView(P)&&P.BYTES_PER_ELEMENT==1||wt("Cannot pass non-string to std::string"),S&&H?V=Gu(P):V=P.length;var X=Ba(4+V+1),nt=X+4;if(Y[X>>>2>>>0]=V,H)if(S)Hu(P,nt,V+1);else for(var at=0;at<V;++at){var dt=P.charCodeAt(at);dt>255&&(Vn(X),wt("String has UTF-16 code units that do not fit in 8 bits")),b[nt+at>>>0]=dt}else b.set(P,nt>>>0);return w!==null&&w.push(Vn,X),X},readValueFromPointer:Q,destructorFunction(w){Vn(w)}})}var pc=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,$u=(u,d,S)=>{var w=u>>>1,P=fc(N,w,d/2,S);if(P-w>16&&pc)return pc.decode(N.subarray(w>>>0,P>>>0));for(var V="",H=w;H<P;++H){var X=N[H>>>0];V+=String.fromCharCode(X)}return V},Yu=(u,d,S)=>{if(S??=2147483647,S<2)return 0;S-=2;for(var w=d,P=S<u.length*2?S/2:u.length,V=0;V<P;++V){var H=u.charCodeAt(V);E[d>>>1>>>0]=H,d+=2}return E[d>>>1>>>0]=0,d-w},Zu=u=>u.length*2,Ju=(u,d,S)=>{for(var w="",P=u>>>2,V=0;!(V>=d/4);V++){var H=Y[P+V>>>0];if(!H&&!S)break;w+=String.fromCodePoint(H)}return w},Ku=(u,d,S)=>{if(d>>>=0,S??=2147483647,S<4)return 0;for(var w=d,P=w+S-4,V=0;V<u.length;++V){var H=u.codePointAt(V);if(H>65535&&V++,q[d>>>2>>>0]=H,d+=4,d+4>P)break}return q[d>>>2>>>0]=0,d-w},ju=u=>{for(var d=0,S=0;S<u.length;++S){var w=u.codePointAt(S);w>65535&&S++,d+=4}return d};function Qu(u,d,S){u>>>=0,d>>>=0,S>>>=0,S=St(S);var w,P,V;d===2?(w=$u,P=Yu,V=Zu):(w=Ju,P=Ku,V=ju),ct(u,{name:S,fromWireType:H=>{var X=Y[H>>>2>>>0],nt=w(H+4,X*d,!0);return Vn(H),nt},toWireType:(H,X)=>{typeof X!="string"&&wt(`Cannot pass non-string to C++ string type ${S}`);var nt=V(X),at=Ba(4+nt+d);return Y[at>>>2>>>0]=nt/d,P(X,at+4,nt+d),H!==null&&H.push(Vn,at),at},readValueFromPointer:Q,destructorFunction(H){Vn(H)}})}function td(u,d,S,w,P,V){u>>>=0,d>>>=0,S>>>=0,w>>>=0,P>>>=0,V>>>=0,it[u]={name:St(d),rawConstructor:pe(S,w),rawDestructor:pe(P,V),fields:[]}}function ed(u,d,S,w,P,V,H,X,nt,at){u>>>=0,d>>>=0,S>>>=0,w>>>=0,P>>>=0,V>>>=0,H>>>=0,X>>>=0,nt>>>=0,at>>>=0,it[u].fields.push({fieldName:St(d),getterReturnType:S,getter:pe(w,P),getterContext:V,setterArgumentType:H,setter:pe(X,nt),setterContext:at})}var nd=function(u,d){u>>>=0,d>>>=0,d=St(d),ct(u,{isVoid:!0,name:d,fromWireType:()=>{},toWireType:(S,w)=>{}})};function id(u,d){u>>>=0,d>>>=0,u=Ee.toValue(u),d=Ee.toValue(d),u.set(d)}var Na=[],rd=u=>{var d=Na.length;return Na.push(u),d},sd=(u,d)=>{for(var S=new Array(u),w=0;w<u;++w)S[w]=uc(Y[d+w*4>>>2>>>0],`parameter ${w}`);return S},od=(u,d,S)=>{var w=[],P=u(w,S);return w.length&&(Y[d>>>2>>>0]=Ee.toHandle(w)),P},ad={},mc=u=>{var d=ad[u];return d===void 0?St(u):d},ld=function(u,d,S){d>>>=0;var w=8,[P,...V]=sd(u,d),H=P.toWireType.bind(P),X=V.map(yt=>yt.readValueFromPointer.bind(yt));u--;var nt=new Array(u),at=(yt,At,Ot,Xt)=>{for(var Jt=0,ie=0;ie<u;++ie)nt[ie]=X[ie](Xt+Jt),Jt+=w;var C;switch(S){case 0:C=Ee.toValue(yt).apply(null,nt);break;case 2:C=Reflect.construct(Ee.toValue(yt),nt);break;case 3:C=nt[0];break;case 1:C=Ee.toValue(yt)[mc(At)](...nt);break}return od(H,Ot,C)},dt=`methodCaller<(${V.map(yt=>yt.name)}) => ${P.name}>`;return rd(zn(dt,at))};function cd(u,d){return u>>>=0,d>>>=0,u=Ee.toValue(u),d=Ee.toValue(d),u==d}function hd(u,d){return u>>>=0,d>>>=0,u=Ee.toValue(u),d=Ee.toValue(d),Ee.toHandle(u[d])}function ud(u){u>>>=0,u>9&&(Fe[u+1]+=1)}function dd(u,d,S,w,P){return u>>>=0,d>>>=0,S>>>=0,w>>>=0,P>>>=0,Na[u](d,S,w,P)}function fd(u){return u>>>=0,Ee.toHandle(mc(u))}function pd(){return Ee.toHandle({})}function md(u){u>>>=0;var d=Ee.toValue(u);ht(d),Ti(u)}function gd(u,d,S){u>>>=0,d>>>=0,S>>>=0,u=Ee.toValue(u),d=Ee.toValue(d),S=Ee.toValue(S),u[d]=S}var _d=()=>4294901760,vd=(u,d)=>Math.ceil(u/d)*d,xd=u=>{var d=Is.buffer.byteLength,S=(u-d+65535)/65536|0;try{return Is.grow(S),bt(),1}catch{}};function yd(u){u>>>=0;var d=b.length,S=_d();if(u>S)return!1;for(var w=1;w<=4;w*=2){var P=d*(1+.2/w);P=Math.min(P,u+100663296);var V=Math.min(S,vd(Math.max(u,P),65536)),H=xd(V);if(H)return!0}return!1}var Md=(u,d)=>{if(wi)for(var S=u;S<u+d;S++){var w=Vt(S);w&&wi.set(w,S)}},wi,Sd=u=>(wi||(wi=new WeakMap,Md(0,Vr.length)),wi.get(u)||0),Fa=[],bd=()=>Fa.length?Fa.pop():Vr.grow(1),Oa=(u,d)=>Vr.set(u,d),gc=u=>{let d=u.length;return[d%128|128,d>>7,...u]},Ed={i:127,p:127,j:126,f:125,d:124,e:111},_c=u=>gc(Array.from(u,d=>{var S=Ed[d];return S})),Td=(u,d)=>{var S=Uint8Array.of(0,97,115,109,1,0,0,0,1,...gc([1,96,..._c(d.slice(1)),..._c(d[0]==="v"?"":d[0])]),2,7,1,1,101,1,102,0,0,7,5,1,1,102,0,0),w=new WebAssembly.Module(S),P=new WebAssembly.Instance(w,{e:{f:u}}),V=P.exports.f;return V},Ai=(u,d)=>{var S=Sd(u);if(S)return S;var w=bd();try{Oa(w,u)}catch(V){if(!(V instanceof TypeError))throw V;var P=Td(u,d);Oa(w,P)}return wi.set(u,w),w},Ci=u=>{wi.delete(Vt(u)),Oa(u,null),Fa.push(u)};if(Rs(),Rt(),e.noExitRuntime&&(zt=e.noExitRuntime),e.print&&(p=e.print),e.printErr&&(I=e.printErr),e.wasmBinary&&(R=e.wasmBinary),e.arguments&&(c=e.arguments),e.thisProgram&&(l=e.thisProgram),e.preInit)for(typeof e.preInit=="function"&&(e.preInit=[e.preInit]);e.preInit.length>0;)e.preInit.shift()();e.addFunction=Ai,e.removeFunction=Ci;var vc,Ba,Vn,wd,Ad,Is,Vr;function Cd(u){vc=u.K,Ba=u.M,Vn=u.N,wd=Is=u.I,Ad=Vr=u.L}var Rd={l:x,C:$,q:Yt,z:Pt,G:pt,j:Re,i:Pe,a:ln,E:Cu,x:Pu,d:Iu,y:Lu,c:Uu,p:Nu,m:Ou,h:Bu,n:ku,F:qu,w:Qu,r:td,k:ed,H:nd,u:id,g:ld,b:Ti,o:cd,B:hd,t:ud,f:dd,s:fd,A:pd,e:md,v:gd,D:yd};function Pd(u){u=Object.assign({},u);var d=w=>P=>w(P)>>>0,S=w=>()=>w()>>>0;return u.K=d(u.K),u.M=d(u.M),u._emscripten_stack_alloc=d(u._emscripten_stack_alloc),u.emscripten_stack_get_current=S(u.emscripten_stack_get_current),u}function Id(){Ct();function u(){e.calledRun=!0,!T&&(Gt(),L?.(e),e.onRuntimeInitialized?.(),ae())}e.setStatus?(e.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>e.setStatus(""),1),u()},1)):u()}var Ri;return Ri=await ue(),Id(),j?t=e:t=new Promise((u,d)=>{L=u,F=d}),t}var du=m0;var sc="1.0.0",Es={axisHeight:60,fit:.35,penDiameter:14,penLength:140,clampLength:40,clipWall:2.5,clipOpening:.86,laserFootLength:100,laserFootWidth:60,baseThickness:5,slideWidth:50,slideHeight:50,slideThickness:2,slideRim:5,slitBaseDepth:60,paperOrientation:"portrait",paperSlot:2.5,paperSlotDepth:20,screenBaseDepth:80},oc={axisHeight:[35,120],fit:[.1,.8],penDiameter:[10,18],penLength:[60,250],clampLength:[20,80],clipWall:[1.6,5],clipOpening:[.7,.95],laserFootLength:[40,240],laserFootWidth:[40,200],baseThickness:[3,10],slideWidth:[20,120],slideHeight:[20,120],slideThickness:[.5,5],slideRim:[2,15],slitBaseDepth:[30,150],paperSlot:[1,6],paperSlotDepth:[8,40],screenBaseDepth:[40,150]},wa={w:210,h:297},xi=250,fu=96;function g0(i={}){let t={...Es,...i},e=[];for(let[r,[s,o]]of Object.entries(oc)){let a=Number(t[r]);if(Number.isFinite(a)||(a=Es[r],e.push(`${r} \u4E0D\u662F\u6578\u5B57\uFF0C\u5DF2\u6539\u56DE\u9810\u8A2D\u503C ${a}`)),a<s||a>o){let c=Math.min(o,Math.max(s,a));e.push(`${r} \u8D85\u51FA\u7BC4\u570D ${s}\u2013${o}\uFF0C\u5DF2\u6539\u70BA ${c}`),a=c}t[r]=a}t.paperOrientation!=="landscape"&&(t.paperOrientation="portrait");let n=t.penDiameter/2+t.fit+t.clipWall;if(t.axisHeight+t.fit-n<t.baseThickness+2){let r=Math.ceil(t.baseThickness+2+n);e.push(`\u5149\u8EF8\u9AD8\u5EA6\u592A\u4F4E\uFF0C\u96F7\u5C04\u5361\u6263\u6703\u78B0\u5230\u5E95\u5EA7\uFF0C\u5DF2\u63D0\u9AD8\u5230 ${r} mm`),t.axisHeight=r}if(t.axisHeight-t.slideHeight/2<t.baseThickness+2){let r=Math.ceil(t.baseThickness+2+t.slideHeight/2);e.push(`\u72F9\u7E2B\u7247\u592A\u9AD8\uFF0C\u7247\u5B50\u5E95\u7DE3\u6703\u4F4E\u65BC\u5E95\u5EA7\uFF0C\u5DF2\u5C07\u5149\u8EF8\u9AD8\u5EA6\u63D0\u9AD8\u5230 ${r} mm`),t.axisHeight=r}if(t.slideRim*2>=Math.min(t.slideWidth,t.slideHeight)-4){let r=Math.floor((Math.min(t.slideWidth,t.slideHeight)-6)/2);e.push(`\u7A97\u53E3\u908A\u5BEC\u592A\u5927\u6703\u64CB\u4F4F\u5149\uFF0C\u5DF2\u6539\u70BA ${r} mm`),t.slideRim=r}return t.laserFootLength<t.clampLength&&(e.push("\u96F7\u5C04\u5E95\u5EA7\u9577\u5EA6\u4E0D\u53EF\u77ED\u65BC\u593E\u6301\u9577\u5EA6\uFF0C\u5DF2\u6539\u6210\u76F8\u540C"),t.laserFootLength=t.clampLength),{params:t,warnings:e}}var _0=pu([0,1,0,0,0,1,1,0,0,0,0,0]);function pu(i){return[i[0],i[1],i[2],0,i[3],i[4],i[5],0,i[6],i[7],i[8],0,i[9],i[10],i[11],1]}function v0(i,t){let{CrossSection:e,Manifold:n}=i,r=t.penDiameter/2+t.fit,s=r+t.clipWall,o=t.axisHeight+t.fit,a=Math.max(t.laserFootWidth,2*s+10),c=t.baseThickness,l=Math.min(t.clipOpening*t.penDiameter,2*r-.4),h=e.square([2*s*.9,o],!1).translate([-s*.9,0]).add(e.circle(s,fu).translate([0,o])).add(e.square([a,c],!1).translate([-a/2,0]));h=h.subtract(e.circle(r,fu).translate([0,o])).subtract(e.square([l,s+2],!1).translate([-l/2,o]));let f=h.extrude(t.clampLength).transform(_0),m=n.cube([t.laserFootLength,a,c],!1).translate([t.clampLength-t.laserFootLength,-a/2,0]);return f.add(m)}function x0(i,t){let{Manifold:e}=i,n=t.axisHeight,r=t.baseThickness,s=t.fit,o=3,a=8,c=n-t.slideHeight/2,l=c+t.slideHeight*.7,h=t.slideThickness+s,f=h+2*o,m=t.slideWidth+2*s+2*a,g=e.cube([t.slitBaseDepth,m,r],!1).translate([-t.slitBaseDepth/2,-m/2,0]),v=e.cube([f,m,l],!1).translate([-f/2,-m/2,0]),y=e.cube([h,t.slideWidth+2*s,l-c+2],!1).translate([-h/2,-(t.slideWidth/2+s),c]),_=t.slideWidth-2*t.slideRim,p=e.cube([f+2,_,l-c+2],!1).translate([-f/2-1,-_/2,c+t.slideRim]);return g.add(v).subtract(y).subtract(p)}function Aa(i){return i.paperOrientation==="landscape"?{w:wa.h,h:wa.w}:{w:wa.w,h:wa.h}}function y0(i,t){let{Manifold:e}=i,n=t.baseThickness,r=5,s=Math.min(Aa(t).w+10,xi-10),o=t.paperSlot,a=o+2*r,c=n+t.paperSlotDepth,l=e.cube([t.screenBaseDepth,s,n],!1).translate([-t.screenBaseDepth/2,-s/2,0]),h=e.cube([a,s,c],!1).translate([-a/2,-s/2,0]),f=e.cube([o,s+2,t.paperSlotDepth+1],!1).translate([-o/2,-s/2-1,n]),m=e.cube([a+2,3,3],!0).rotate([45,0,0]).translate([0,0,c]);return l.add(h).subtract(f).subtract(m)}function M0(i){return i==="laser"?[0,0,-1,0,1,0,1,0,0,0,0,0]:[1,0,0,0,1,0,0,0,1,0,0,0]}function S0(i,t,e){let n=e.transform(pu(M0(t))),r=n.boundingBox();return n.translate([-(r.min[0]+r.max[0])/2,-(r.min[1]+r.max[1])/2,-r.min[2]])}var b0={laser:"\u96F7\u5C04\u593E\u5EA7",slit:"\u72F9\u7E2B\u7247\u593E\u5EA7",screen:"\u5C4F\u5E55\u67B6"};function mu(i,t){let{params:e,warnings:n}=g0(t),r={laser:v0(i,e),slit:x0(i,e),screen:y0(i,e)},s={};for(let[o,a]of Object.entries(r)){let c=S0(i,o,a),l=c.boundingBox(),h=[0,1,2].map(f=>l.max[f]-l.min[f]);s[o]={name:b0[o],assembled:a,print:c,size:h,tris:c.numTri(),status:c.status(),genus:c.genus(),volume:c.volume(),fitsBed:h[0]<=xi&&h[1]<=xi&&h[2]<=xi}}return{params:e,warnings:n,parts:s}}function ji(i){let t=i.getMesh(),e=t.numProp,n=new Float32Array(t.vertProperties.length/e*3);for(let r=0,s=0;r<t.vertProperties.length;r+=e,s+=3)n[s]=t.vertProperties[r],n[s+1]=t.vertProperties[r+1],n[s+2]=t.vertProperties[r+2];return{positions:n,indices:Uint32Array.from(t.triVerts)}}function ac(i,t="laser-slit-stand"){let{positions:e,indices:n}=ji(i),r=n.length/3,s=new ArrayBuffer(84+r*50),o=new DataView(s);for(let c=0;c<Math.min(80,t.length);c++)o.setUint8(c,t.charCodeAt(c)&127);o.setUint32(80,r,!0);let a=84;for(let c=0;c<r;c++){let l=n[3*c]*3,h=n[3*c+1]*3,f=n[3*c+2]*3,m=e[h]-e[l],g=e[h+1]-e[l+1],v=e[h+2]-e[l+2],y=e[f]-e[l],_=e[f+1]-e[l+1],p=e[f+2]-e[l+2],I=g*p-v*_,R=v*y-m*p,T=m*_-g*y,U=Math.hypot(I,R,T)||1;o.setFloat32(a,I/U,!0),o.setFloat32(a+4,R/U,!0),o.setFloat32(a+8,T/U,!0),a+=12;for(let L of[l,h,f])o.setFloat32(a,e[L],!0),o.setFloat32(a+4,e[L+1],!0),o.setFloat32(a+8,e[L+2],!0),a+=12;o.setUint16(a,0,!0),a+=2}return new Uint8Array(s)}var E0=(()=>{let i=new Uint32Array(256);for(let t=0;t<256;t++){let e=t;for(let n=0;n<8;n++)e=e&1?3988292384^e>>>1:e>>>1;i[t]=e>>>0}return i})();function T0(i){let t=4294967295;for(let e=0;e<i.length;e++)t=E0[(t^i[e])&255]^t>>>8;return(t^4294967295)>>>0}function gu(i){let t=new TextEncoder,e=[],n=[],r=0;for(let{name:h,data:f}of i){let m=t.encode(h),g=T0(f),v=new DataView(new ArrayBuffer(30));v.setUint32(0,67324752,!0),v.setUint16(4,20,!0),v.setUint16(6,2048,!0),v.setUint32(14,g,!0),v.setUint32(18,f.length,!0),v.setUint32(22,f.length,!0),v.setUint16(26,m.length,!0),e.push(new Uint8Array(v.buffer),m,f);let y=new DataView(new ArrayBuffer(46));y.setUint32(0,33639248,!0),y.setUint16(4,20,!0),y.setUint16(6,20,!0),y.setUint16(8,2048,!0),y.setUint32(16,g,!0),y.setUint32(20,f.length,!0),y.setUint32(24,f.length,!0),y.setUint16(28,m.length,!0),y.setUint32(42,r,!0),n.push(new Uint8Array(y.buffer),m),r+=30+m.length+f.length}let s=n.reduce((h,f)=>h+f.length,0),o=new DataView(new ArrayBuffer(22));o.setUint32(0,101010256,!0),o.setUint16(8,i.length,!0),o.setUint16(10,i.length,!0),o.setUint32(12,s,!0),o.setUint32(16,r,!0);let a=[...e,...n,new Uint8Array(o.buffer)],c=new Uint8Array(a.reduce((h,f)=>h+f.length,0)),l=0;for(let h of a)c.set(h,l),l+=h.length;return c}function bs(i,t,e){let{positions:n,indices:r}=i,s=[];for(let o=0;o<r.length;o+=3){let a=r[o]*3,c=r[o+1]*3,l=r[o+2]*3,h=[n[c]-n[a],n[c+1]-n[a+1],n[c+2]-n[a+2]],f=[n[l]-n[a],n[l+1]-n[a+1],n[l+2]-n[a+2]],m=[e[1]*f[2]-e[2]*f[1],e[2]*f[0]-e[0]*f[2],e[0]*f[1]-e[1]*f[0]],g=h[0]*m[0]+h[1]*m[1]+h[2]*m[2];if(Math.abs(g)<1e-12)continue;let v=1/g,y=[t[0]-n[a],t[1]-n[a+1],t[2]-n[a+2]],_=v*(y[0]*m[0]+y[1]*m[1]+y[2]*m[2]);if(_<-1e-9||_>1+1e-9)continue;let p=[y[1]*h[2]-y[2]*h[1],y[2]*h[0]-y[0]*h[2],y[0]*h[1]-y[1]*h[0]],I=v*(e[0]*p[0]+e[1]*p[1]+e[2]*p[2]);if(I<-1e-9||_+I>1+1e-9)continue;let R=v*(f[0]*p[0]+f[1]*p[1]+f[2]*p[2]);R>1e-9&&s.push(R)}return s.sort((o,a)=>o-a)}function _u(i,t){let e=ji(i.laser.assembled),n=ji(i.slit.assembled),r=ji(i.screen.assembled),s=1e3,o=.013,c=s-bs(e,[t.clampLength/2,o,s],[0,0,-1])[0]+t.penDiameter/2,l=bs(e,[-500,o,c],[1,0,0]).length===0,f=s-bs(n,[0,o,s],[0,0,-1])[0]+t.slideHeight/2,m=bs(n,[-500,o,c],[1,0,0]).length===0,g=s-bs(r,[0,o,s],[0,0,-1])[0],v=Aa(t).h;return{penAxis:c,slideCenter:f,paperBottom:g,paperTop:g+v,spotOnPaper:c-g,laserBeamClear:l,slitBeamClear:m,screenCovers:c>g&&c<g+v,maxAxisError:Math.abs(c-f)}}function vu(i){let{positions:t,indices:e}=ji(i),n=l=>`${t[3*l].toFixed(4)},${t[3*l+1].toFixed(4)},${t[3*l+2].toFixed(4)}`,r=new Map,s=new Uint32Array(t.length/3);for(let l=0;l<s.length;l++){let h=n(l);r.has(h)||r.set(h,r.size),s[l]=r.get(h)}let o=new Map;for(let l=0;l<e.length;l+=3)for(let h=0;h<3;h++){let f=s[e[l+h]],m=s[e[l+(h+1)%3]],g=f<m?`${f}_${m}`:`${m}_${f}`,v=o.get(g)||{f:0,b:0};f<m?v.f++:v.b++,o.set(g,v)}let a=0,c=0;for(let l of o.values())l.f+l.b===1?a++:(l.f!==1||l.b!==1)&&c++;return{edges:o.size,open:a,nonManifold:c,closed:a===0&&c===0}}var w0=[["\u5171\u7528",[["axisHeight","\u5149\u8EF8\u96E2\u684C\u9762\u9AD8\u5EA6","mm",1],["fit","\u914D\u5408\u9593\u9699","mm",.05],["baseThickness","\u5E95\u5EA7\u539A\u5EA6","mm",.5]]],["\u2460 \u96F7\u5C04\u593E\u5EA7\uFF08\u593E\u7B46\u7684\u524D\u6BB5\uFF0C\u6309\u9375\u5728\u5F8C\u6BB5\u5916\u9732\uFF09",[["penDiameter","\u96F7\u5C04\u7B46\u76F4\u5F91","mm",.5],["penLength","\u96F7\u5C04\u7B46\u5168\u9577\uFF08\u50C5\u9810\u89BD\uFF09","mm",1],["clampLength","\u593E\u6301\u9577\u5EA6","mm",1],["clipWall","\u5361\u6263\u58C1\u539A","mm",.1],["clipOpening","\u5361\u53E3\u958B\u53E3 \xF7 \u7B46\u5F91","\u500D",.01],["laserFootLength","\u5E95\u5EA7\u9577\u5EA6\uFF08\u5F80\u7B46\u5C3E\u5EF6\u4F38\uFF09","mm",1],["laserFootWidth","\u5E95\u5EA7\u5BEC\u5EA6","mm",1]]],["\u2461 \u72F9\u7E2B\u7247\u593E\u5EA7",[["slideWidth","\u72F9\u7E2B\u7247\u5BEC","mm",.5],["slideHeight","\u72F9\u7E2B\u7247\u9AD8","mm",.5],["slideThickness","\u72F9\u7E2B\u7247\u539A","mm",.1],["slideRim","\u7A97\u53E3\u908A\u5BEC","mm",.5],["slitBaseDepth","\u5E95\u5EA7\u6DF1\u5EA6","mm",1]]],["\u2462 \u5C4F\u5E55\u67B6\uFF08A4 \u7D19\uFF09",[["paperOrientation","\u7D19\u5F35\u65B9\u5411","",0],["paperSlot","\u63D2\u69FD\u5BEC\uFF08\u7D19\uFF0B\u588A\u677F\uFF09","mm",.1],["paperSlotDepth","\u63D2\u69FD\u6DF1\u5EA6","mm",1],["screenBaseDepth","\u5E95\u5EA7\u6DF1\u5EA6","mm",1]]]],Mi=i=>document.querySelector(i),A0=Mi("#app");A0.innerHTML=`
<header><h1>\u96F7\u5C04\u5149\u67B6\u8A2D\u8A08\u5668 <small>v${sc}</small></h1><p>\u55AE\u72F9\u7E2B\uFF0F\u96D9\u72F9\u7E2B\u5E72\u6D89\u7E5E\u5C04\u5BE6\u9A57\u7528\uFF1A\u96F7\u5C04\u593E\u5EA7\u3001\u72F9\u7E2B\u7247\u593E\u5EA7\u3001A4 \u5C4F\u5E55\u67B6\uFF0C3D \u5217\u5370\u3002</p></header>
<main>
  <section class="panel" id="form"></section>
  <section class="view">
    <div class="toolbar">
      <label><input type="radio" name="mode" value="assembled" checked> \u7D44\u88DD\u6AA2\u8996</label>
      <label><input type="radio" name="mode" value="print"> \u5217\u5370\u64FA\u653E\uFF0825\xD725 cm \u5E73\u53F0\uFF09</label>
      <button id="fit">\u91CD\u8A2D\u8996\u89D2</button>
    </div>
    <div id="canvas"></div>
    <div id="warn"></div>
    <div id="info"></div>
    <div class="downloads">
      <button data-dl="laser">\u4E0B\u8F09 \u2460 \u96F7\u5C04\u593E\u5EA7 STL</button>
      <button data-dl="slit">\u4E0B\u8F09 \u2461 \u72F9\u7E2B\u7247\u593E\u5EA7 STL</button>
      <button data-dl="screen">\u4E0B\u8F09 \u2462 \u5C4F\u5E55\u67B6 STL</button>
      <button data-dl="all" class="primary">\u4E00\u9375\u4E0B\u8F09\u5168\u90E8\uFF08ZIP\uFF09</button>
    </div>
    <p class="note">STL \u5DF2\u662F\u5EFA\u8B70\u5217\u5370\u64FA\u653E\uFF1A\u96F7\u5C04\u593E\u5EA7\u4EE5\u524D\u7AEF\u9762\u671D\u4E0B\u300C\u7ACB\u8457\u5370\u300D\uFF08\u5361\u6263\u4E0D\u9700\u652F\u6490\u3001\u5F48\u6027\u65B9\u5411\u8F03\u4E0D\u6613\u65B7\uFF09\uFF0C\u72F9\u7E2B\u7247\u593E\u5EA7\u8207\u5C4F\u5E55\u67B6\u5E73\u653E\u3002A4 \u7D19\u5F88\u8EDF\uFF0C\u5EFA\u8B70\u5728\u7D19\u5F8C\u588A\u4E00\u7247\u588A\u677F\u6216\u539A\u7D19\u677F\u518D\u63D2\u5165\u5C4F\u5E55\u67B6\u3002</p>
  </section>
</main>`;var Fr={...Es},As=Mi("#form");for(let[i,t]of w0){let e=document.createElement("fieldset");e.innerHTML=`<legend>${i}</legend>`;for(let[n,r,s,o]of t){let a=document.createElement("label");if(a.className="row",n==="paperOrientation")a.innerHTML=`<span>${r}</span><select data-k="${n}"><option value="portrait">\u76F4\u653E\uFF08210 \u5BEC \xD7 297 \u9AD8\uFF09</option><option value="landscape">\u6A6B\u653E\uFF08297 \u5BEC \xD7 210 \u9AD8\uFF09</option></select>`;else{let[c,l]=oc[n];a.innerHTML=`<span>${r}</span><input type="number" data-k="${n}" min="${c}" max="${l}" step="${o}" value="${Fr[n]}"><em>${s}</em><small>${c}\u2013${l}</small>`}e.appendChild(a)}As.appendChild(e)}var cc=document.createElement("button");cc.textContent="\u5168\u90E8\u6062\u5FA9\u9810\u8A2D\u503C";As.appendChild(cc);cc.onclick=()=>{Object.assign(Fr,Es),bu(),Tu()};function bu(){for(let i of As.querySelectorAll("[data-k]"))i.value=Fr[i.dataset.k]}As.addEventListener("input",i=>{let t=i.target.dataset.k;if(t){if(t==="paperOrientation")Fr[t]=i.target.value;else{if(i.target.value===""||!Number.isFinite(+i.target.value))return;Fr[t]=+i.target.value}Tu()}});As.addEventListener("change",()=>bu());var Ra=Mi("#canvas"),Or=new Sa({antialias:!0,preserveDrawingBuffer:!0});Or.setPixelRatio(Math.min(2,window.devicePixelRatio||1));Ra.appendChild(Or.domElement);var Cs=new rs;Cs.background=new se(15988215);ke.DEFAULT_UP.set(0,0,1);var tr=new je(35,1,1,1e4);tr.up.set(0,0,1);var xu=new Ta(tr,Or.domElement);Cs.add(new hs(16777215,8952234,1.6));var Eu=new ds(16777215,1.6);Eu.position.set(-300,-500,800);Cs.add(Eu);var en=new Yn;Cs.add(en);var ws={laser:3112895,slit:3971679,screen:13666862};function Ca(i,t){let{positions:e,indices:n}=ji(i),r=new cn;r.setAttribute("position",new Qe(e,3)),r.setIndex(new Qe(n,1));let s=r.toNonIndexed();return s.computeVertexNormals(),new Ye(s,new Gi({color:t,roughness:.6,metalness:.05}))}function Ts(i,t,e,n,r={}){return new Ye(new di(i,t,e),new Gi({color:n,roughness:.8,...r}))}var lc=null,yi=null,yu=0,Nr=null;function Tu(){clearTimeout(yu),yu=setTimeout(Qi,120)}function Qi(){if(!lc)return;yi=mu(lc,Fr);let i=yi.params,t=yi.parts,e=_u(t,i);en.clear();let n=document.querySelector("input[name=mode]:checked").value,r=i.clampLength+160,s=r+320;if(n==="assembled"){let a=Ca(t.laser.assembled,ws.laser);en.add(a);let c=Ca(t.slit.assembled,ws.slit);c.position.x=r,en.add(c);let l=Ca(t.screen.assembled,ws.screen);l.position.x=s,en.add(l);let h=i.clampLength+5,f=e.penAxis,m=new Ye(new Er(i.penDiameter/2,i.penDiameter/2,i.penLength,48),new Gi({color:4474957,metalness:.4,roughness:.4}));m.rotation.z=Math.PI/2,m.position.set(h-i.penLength/2,0,f),en.add(m);let g=Ts(8,5,3,13773868);g.position.set(h-i.penLength+30,0,f+i.penDiameter/2+1),en.add(g);let v=Ts(i.slideThickness,i.slideWidth,i.slideHeight,2236962,{transparent:!0,opacity:.35});v.position.set(r,0,e.slideCenter),en.add(v);let y=Ts(i.slideThickness+.2,.6,i.slideHeight*.6,16777215);y.position.set(r,0,e.slideCenter),en.add(y);let _=Aa(i),p=Ts(.3,_.w,_.h,16777215,{emissive:16777215,emissiveIntensity:.55});p.position.set(s,0,e.paperBottom+_.h/2),en.add(p);let I=s-h,R=new Ye(new Er(.6,.6,I,12),new ki({color:16719904}));R.rotation.z=Math.PI/2,R.position.set(h+I/2,0,f),en.add(R);for(let T=-4;T<=4;T++){let U=Ts(.6,3,6,16724016,{emissive:16711680,emissiveIntensity:.6,transparent:!0,opacity:1-Math.abs(T)*.2});U.position.set(s-.5,T*9,f),en.add(U)}}else{let a=0;for(let c of["laser","slit","screen"]){let l=Ca(t[c].print,ws[c]);l.position.x=a,en.add(l);let h=new br(new as(new Hi(xi,xi)),new Vi({color:8030358}));h.position.set(a,0,0),en.add(h),a+=xi+40}}let o=new fs(2e3,80,12963027,14541543);o.rotation.x=Math.PI/2,o.position.z=-.2,en.add(o),Nr=new Ln;for(let a of en.children)a.isMesh&&Nr.expandByObject(a);(!Qi.framed||Qi.lastMode!==n)&&(wu(),Qi.framed=!0,Qi.lastMode=n),C0(e)}function C0(i){let{parts:t,warnings:e,params:n}=yi;Mi("#warn").innerHTML=e.map(o=>`<div>\u26A0\uFE0F ${o}</div>`).join("");let r=Object.entries(t).map(([o,a])=>{let c=vu(a.print);return`<tr><td><i style="background:#${ws[o].toString(16).padStart(6,"0")}"></i>${a.name}</td><td>${a.size.map(l=>l.toFixed(1)).join(" \xD7 ")}</td><td>${a.tris}</td>
      <td>${c.closed&&a.status==="NoError"?"\u2705 \u5C01\u9589":"\u274C \u6709\u7834\u9762"}</td><td>${a.fitsBed?"\u2705":"\u274C \u8D85\u51FA"}</td></tr>`}).join(""),s=Math.abs(i.penAxis-i.slideCenter)<.05&&i.screenCovers;Mi("#info").innerHTML=`<table><thead><tr><th>\u96F6\u4EF6</th><th>\u5217\u5370\u5C3A\u5BF8 X\xD7Y\xD7Z\uFF08mm\uFF09</th><th>\u4E09\u89D2\u9762</th><th>\u7DB2\u683C</th><th>25 cm \u5E73\u53F0</th></tr></thead><tbody>${r}</tbody></table>
  <p class="axis">${s?"\u2705":"\u26A0\uFE0F"} \u5149\u8EF8\u5BE6\u6E2C\uFF1A\u96F7\u5C04\u7B46\u4E2D\u5FC3 <b>${i.penAxis.toFixed(2)} mm</b>\u3001\u72F9\u7E2B\u7247\u4E2D\u5FC3 <b>${i.slideCenter.toFixed(2)} mm</b>\u3001\u5C4F\u5E55\u7D19\u5F35\u7BC4\u570D ${i.paperBottom.toFixed(1)}\u2013${i.paperTop.toFixed(1)} mm\uFF08\u5149\u9EDE\u96E2\u7D19\u5E95 ${i.spotOnPaper.toFixed(1)} mm\uFF09\u3002
  \u72F9\u7E2B\u7247\u63D2\u69FD\u5BEC ${(n.slideThickness+n.fit).toFixed(2)} mm\uFF0C\u96F7\u5C04\u5361\u6263\u5167\u5F91 ${(n.penDiameter+2*n.fit).toFixed(2)} mm\u3002</p>`}function wu(){if(!Nr||Nr.isEmpty())return;let i=Nr.getCenter(new W),e=Nr.getSize(new W).length()/2/Math.sin(Ms.degToRad(tr.fov/2))*.7;tr.position.set(i.x-e*.5,i.y-e*.7,i.z+e*.45),xu.target.copy(i),xu.update()}function Au(){let i=Ra.clientWidth,t=Ra.clientHeight;Or.setSize(i,t),tr.aspect=i/t,tr.updateProjectionMatrix()}new ResizeObserver(Au).observe(Ra);Au();Or.setAnimationLoop(()=>Or.render(Cs,tr));Mi("#fit").onclick=wu;document.querySelectorAll("input[name=mode]").forEach(i=>i.onchange=Qi);var R0={laser:"1_\u96F7\u5C04\u593E\u5EA7",slit:"2_\u72F9\u7E2B\u7247\u593E\u5EA7",screen:"3_\u5C4F\u5E55\u67B6"};function Mu(i){let t=yi.params;return`${R0[i]}_\u7B46\u5F91${t.penDiameter}_\u5149\u8EF8${t.axisHeight}${i==="screen"?t.paperOrientation==="landscape"?"_A4\u6A6B\u653E":"_A4\u76F4\u653E":""}.stl`}function Su(i,t,e){let n=document.createElement("a");n.href=URL.createObjectURL(new Blob([i],{type:e})),n.download=t,n.click(),setTimeout(()=>URL.revokeObjectURL(n.href),2e3)}document.querySelectorAll("[data-dl]").forEach(i=>i.onclick=()=>{if(!yi)return;let t=i.dataset.dl;t==="all"?Su(gu(["laser","slit","screen"].map(e=>({name:Mu(e),data:ac(yi.parts[e].print)}))),`\u96F7\u5C04\u5149\u67B6_v${sc}.zip`,"application/zip"):Su(ac(yi.parts[t].print),Mu(t),"model/stl")});Mi("#info").textContent="\u6B63\u5728\u8F09\u5165\u5E7E\u4F55\u5F15\u64CE\u2026";du({locateFile:i=>new URL(i,document.baseURI).href}).then(i=>{i.setup(),lc=i,Qi(),window.__ready=!0}).catch(i=>{Mi("#info").textContent="\u5E7E\u4F55\u5F15\u64CE\u8F09\u5165\u5931\u6557\uFF1A"+i.message});
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
