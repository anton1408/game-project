var OG=Object.defineProperty;var vG=(Lg,ug,lC)=>ug in Lg?OG(Lg,ug,{enumerable:!0,configurable:!0,writable:!0,value:lC}):Lg[ug]=lC;var FA=(Lg,ug,lC)=>vG(Lg,typeof ug!="symbol"?ug+"":ug,lC);(async()=>{(function(){const B=document.createElement("link").relList;if(B&&B.supports&&B.supports("modulepreload"))return;for(const g of document.querySelectorAll('link[rel="modulepreload"]'))I(g);new MutationObserver(g=>{for(const C of g)if(C.type==="childList")for(const Q of C.addedNodes)Q.tagName==="LINK"&&Q.rel==="modulepreload"&&I(Q)}).observe(document,{childList:!0,subtree:!0});function A(g){const C={};return g.integrity&&(C.integrity=g.integrity),g.referrerPolicy&&(C.referrerPolicy=g.referrerPolicy),g.crossOrigin==="use-credentials"?C.credentials="include":g.crossOrigin==="anonymous"?C.credentials="omit":C.credentials="same-origin",C}function I(g){if(g.ep)return;g.ep=!0;const C=A(g);fetch(g.href,C)}})();const Lg="169",ug=0,lC=1,$s=2,ye=1,AD=2,Hg=3,mg=0,VI=1,Ng=2,CC=0,bC=1,Ue=2,Me=3,Ne=4,ID=5,GC=100,gD=101,CD=102,BD=103,QD=104,ED=200,iD=201,oD=202,eD=203,uE=204,HE=205,tD=206,aD=207,sD=208,DD=209,hD=210,rD=211,SD=212,nD=213,wD=214,mE=0,fE=1,TE=2,OC=3,xE=4,bE=5,OE=6,vE=7,Ke=0,cD=1,lD=2,BC=0,GD=1,kD=2,yD=3,UD=4,MD=5,ND=6,KD=7,Je="attached",JD="detached",Fe=300,vC=301,_C=302,cQ=303,_E=304,lQ=306,ZC=1e3,Kg=1001,GQ=1002,_I=1003,Re=1004,dB=1005,LI=1006,kQ=1007,Jg=1008,fg=1009,pe=1010,de=1011,qB=1012,ZE=1013,kC=1014,XI=1015,Tg=1016,WE=1017,PE=1018,WC=1020,qe=35902,Ye=1021,Le=1022,og=1023,ue=1024,He=1025,PC=1026,jC=1027,jE=1028,VE=1029,me=1030,XE=1031,zE=1033,yQ=33776,UQ=33777,MQ=33778,NQ=33779,$E=35840,Ai=35841,Ii=35842,gi=35843,Ci=36196,Bi=37492,Qi=37496,Ei=37808,ii=37809,oi=37810,ei=37811,ti=37812,ai=37813,si=37814,Di=37815,hi=37816,ri=37817,Si=37818,ni=37819,wi=37820,ci=37821,KQ=36492,li=36494,Gi=36495,fe=36283,ki=36284,yi=36285,Ui=36286,FD=2200,RD=2201,pD=2202,YB=2300,LB=2301,Mi=2302,VC=2400,XC=2401,JQ=2402,Ni=2500,dD=2501,qD=0,Te=1,Ki=2,YD=3200,LD=3201,xe=0,uD=1,QC="",uI="srgb",FI="srgb-linear",Ji="display-p3",FQ="display-p3-linear",RQ="linear",sI="srgb",pQ="rec709",dQ="p3",zC=7680,be=519,HD=512,mD=513,fD=514,Oe=515,TD=516,xD=517,bD=518,OD=519,Fi=35044,ve="300 es",xg=2e3,qQ=2001;class yC{addEventListener(A,I){this._listeners===void 0&&(this._listeners={});const g=this._listeners;g[A]===void 0&&(g[A]=[]),g[A].indexOf(I)===-1&&g[A].push(I)}hasEventListener(A,I){if(this._listeners===void 0)return!1;const g=this._listeners;return g[A]!==void 0&&g[A].indexOf(I)!==-1}removeEventListener(A,I){if(this._listeners===void 0)return;const g=this._listeners[A];if(g!==void 0){const C=g.indexOf(I);C!==-1&&g.splice(C,1)}}dispatchEvent(A){if(this._listeners===void 0)return;const I=this._listeners[A.type];if(I!==void 0){A.target=this;const g=I.slice(0);for(let C=0,Q=g.length;C<Q;C++)g[C].call(this,A);A.target=null}}}const OI=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let _e=1234567;const uB=Math.PI/180,$C=180/Math.PI;function hg(){const B=Math.random()*4294967295|0,A=Math.random()*4294967295|0,I=Math.random()*4294967295|0,g=Math.random()*4294967295|0;return(OI[B&255]+OI[B>>8&255]+OI[B>>16&255]+OI[B>>24&255]+"-"+OI[A&255]+OI[A>>8&255]+"-"+OI[A>>16&15|64]+OI[A>>24&255]+"-"+OI[I&63|128]+OI[I>>8&255]+"-"+OI[I>>16&255]+OI[I>>24&255]+OI[g&255]+OI[g>>8&255]+OI[g>>16&255]+OI[g>>24&255]).toLowerCase()}function TI(B,A,I){return Math.max(A,Math.min(I,B))}function Ri(B,A){return(B%A+A)%A}function vD(B,A,I,g,C){return g+(B-A)*(C-g)/(I-A)}function _D(B,A,I){return B!==A?(I-B)/(A-B):0}function HB(B,A,I){return(1-I)*B+I*A}function ZD(B,A,I,g){return HB(B,A,1-Math.exp(-I*g))}function WD(B,A=1){return A-Math.abs(Ri(B,A*2)-A)}function PD(B,A,I){return B<=A?0:B>=I?1:(B=(B-A)/(I-A),B*B*(3-2*B))}function jD(B,A,I){return B<=A?0:B>=I?1:(B=(B-A)/(I-A),B*B*B*(B*(B*6-15)+10))}function VD(B,A){return B+Math.floor(Math.random()*(A-B+1))}function XD(B,A){return B+Math.random()*(A-B)}function zD(B){return B*(.5-Math.random())}function $D(B){B!==void 0&&(_e=B);let A=_e+=1831565813;return A=Math.imul(A^A>>>15,A|1),A^=A+Math.imul(A^A>>>7,A|61),((A^A>>>14)>>>0)/4294967296}function Ah(B){return B*uB}function Ih(B){return B*$C}function gh(B){return(B&B-1)===0&&B!==0}function Ch(B){return Math.pow(2,Math.ceil(Math.log(B)/Math.LN2))}function Bh(B){return Math.pow(2,Math.floor(Math.log(B)/Math.LN2))}function Qh(B,A,I,g,C){const Q=Math.cos,E=Math.sin,i=Q(I/2),o=E(I/2),e=Q((A+g)/2),t=E((A+g)/2),a=Q((A-g)/2),s=E((A-g)/2),h=Q((g-A)/2),n=E((g-A)/2);switch(C){case"XYX":B.set(i*t,o*a,o*s,i*e);break;case"YZY":B.set(o*s,i*t,o*a,i*e);break;case"ZXZ":B.set(o*a,o*s,i*t,i*e);break;case"XZX":B.set(i*t,o*n,o*h,i*e);break;case"YXY":B.set(o*h,i*t,o*n,i*e);break;case"ZYZ":B.set(o*n,o*h,i*t,i*e);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+C)}}function rg(B,A){switch(A.constructor){case Float32Array:return B;case Uint32Array:return B/4294967295;case Uint16Array:return B/65535;case Uint8Array:return B/255;case Int32Array:return Math.max(B/2147483647,-1);case Int16Array:return Math.max(B/32767,-1);case Int8Array:return Math.max(B/127,-1);default:throw new Error("Invalid component type.")}}function BI(B,A){switch(A.constructor){case Float32Array:return B;case Uint32Array:return Math.round(B*4294967295);case Uint16Array:return Math.round(B*65535);case Uint8Array:return Math.round(B*255);case Int32Array:return Math.round(B*2147483647);case Int16Array:return Math.round(B*32767);case Int8Array:return Math.round(B*127);default:throw new Error("Invalid component type.")}}const Eh={DEG2RAD:uB,RAD2DEG:$C,generateUUID:hg,clamp:TI,euclideanModulo:Ri,mapLinear:vD,inverseLerp:_D,lerp:HB,damp:ZD,pingpong:WD,smoothstep:PD,smootherstep:jD,randInt:VD,randFloat:XD,randFloatSpread:zD,seededRandom:$D,degToRad:Ah,radToDeg:Ih,isPowerOfTwo:gh,ceilPowerOfTwo:Ch,floorPowerOfTwo:Bh,setQuaternionFromProperEuler:Qh,normalize:BI,denormalize:rg};class vA{constructor(A=0,I=0){vA.prototype.isVector2=!0,this.x=A,this.y=I}get width(){return this.x}set width(A){this.x=A}get height(){return this.y}set height(A){this.y=A}set(A,I){return this.x=A,this.y=I,this}setScalar(A){return this.x=A,this.y=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y)}copy(A){return this.x=A.x,this.y=A.y,this}add(A){return this.x+=A.x,this.y+=A.y,this}addScalar(A){return this.x+=A,this.y+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this}subScalar(A){return this.x-=A,this.y-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this}multiply(A){return this.x*=A.x,this.y*=A.y,this}multiplyScalar(A){return this.x*=A,this.y*=A,this}divide(A){return this.x/=A.x,this.y/=A.y,this}divideScalar(A){return this.multiplyScalar(1/A)}applyMatrix3(A){const I=this.x,g=this.y,C=A.elements;return this.x=C[0]*I+C[3]*g+C[6],this.y=C[1]*I+C[4]*g+C[7],this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(A){return this.x*A.x+this.y*A.y}cross(A){return this.x*A.y-this.y*A.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(A){const I=Math.sqrt(this.lengthSq()*A.lengthSq());if(I===0)return Math.PI/2;const g=this.dot(A)/I;return Math.acos(TI(g,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const I=this.x-A.x,g=this.y-A.y;return I*I+g*g}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this}equals(A){return A.x===this.x&&A.y===this.y}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this}rotateAround(A,I){const g=Math.cos(I),C=Math.sin(I),Q=this.x-A.x,E=this.y-A.y;return this.x=Q*g-E*C+A.x,this.y=Q*C+E*g+A.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class fA{constructor(A,I,g,C,Q,E,i,o,e){fA.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],A!==void 0&&this.set(A,I,g,C,Q,E,i,o,e)}set(A,I,g,C,Q,E,i,o,e){const t=this.elements;return t[0]=A,t[1]=C,t[2]=i,t[3]=I,t[4]=Q,t[5]=o,t[6]=g,t[7]=E,t[8]=e,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(A){const I=this.elements,g=A.elements;return I[0]=g[0],I[1]=g[1],I[2]=g[2],I[3]=g[3],I[4]=g[4],I[5]=g[5],I[6]=g[6],I[7]=g[7],I[8]=g[8],this}extractBasis(A,I,g){return A.setFromMatrix3Column(this,0),I.setFromMatrix3Column(this,1),g.setFromMatrix3Column(this,2),this}setFromMatrix4(A){const I=A.elements;return this.set(I[0],I[4],I[8],I[1],I[5],I[9],I[2],I[6],I[10]),this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,I){const g=A.elements,C=I.elements,Q=this.elements,E=g[0],i=g[3],o=g[6],e=g[1],t=g[4],a=g[7],s=g[2],h=g[5],n=g[8],w=C[0],r=C[3],S=C[6],y=C[1],G=C[4],M=C[7],m=C[2],F=C[5],N=C[8];return Q[0]=E*w+i*y+o*m,Q[3]=E*r+i*G+o*F,Q[6]=E*S+i*M+o*N,Q[1]=e*w+t*y+a*m,Q[4]=e*r+t*G+a*F,Q[7]=e*S+t*M+a*N,Q[2]=s*w+h*y+n*m,Q[5]=s*r+h*G+n*F,Q[8]=s*S+h*M+n*N,this}multiplyScalar(A){const I=this.elements;return I[0]*=A,I[3]*=A,I[6]*=A,I[1]*=A,I[4]*=A,I[7]*=A,I[2]*=A,I[5]*=A,I[8]*=A,this}determinant(){const A=this.elements,I=A[0],g=A[1],C=A[2],Q=A[3],E=A[4],i=A[5],o=A[6],e=A[7],t=A[8];return I*E*t-I*i*e-g*Q*t+g*i*o+C*Q*e-C*E*o}invert(){const A=this.elements,I=A[0],g=A[1],C=A[2],Q=A[3],E=A[4],i=A[5],o=A[6],e=A[7],t=A[8],a=t*E-i*e,s=i*o-t*Q,h=e*Q-E*o,n=I*a+g*s+C*h;if(n===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/n;return A[0]=a*w,A[1]=(C*e-t*g)*w,A[2]=(i*g-C*E)*w,A[3]=s*w,A[4]=(t*I-C*o)*w,A[5]=(C*Q-i*I)*w,A[6]=h*w,A[7]=(g*o-e*I)*w,A[8]=(E*I-g*Q)*w,this}transpose(){let A;const I=this.elements;return A=I[1],I[1]=I[3],I[3]=A,A=I[2],I[2]=I[6],I[6]=A,A=I[5],I[5]=I[7],I[7]=A,this}getNormalMatrix(A){return this.setFromMatrix4(A).invert().transpose()}transposeIntoArray(A){const I=this.elements;return A[0]=I[0],A[1]=I[3],A[2]=I[6],A[3]=I[1],A[4]=I[4],A[5]=I[7],A[6]=I[2],A[7]=I[5],A[8]=I[8],this}setUvTransform(A,I,g,C,Q,E,i){const o=Math.cos(Q),e=Math.sin(Q);return this.set(g*o,g*e,-g*(o*E+e*i)+E+A,-C*e,C*o,-C*(-e*E+o*i)+i+I,0,0,1),this}scale(A,I){return this.premultiply(pi.makeScale(A,I)),this}rotate(A){return this.premultiply(pi.makeRotation(-A)),this}translate(A,I){return this.premultiply(pi.makeTranslation(A,I)),this}makeTranslation(A,I){return A.isVector2?this.set(1,0,A.x,0,1,A.y,0,0,1):this.set(1,0,A,0,1,I,0,0,1),this}makeRotation(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,-g,0,g,I,0,0,0,1),this}makeScale(A,I){return this.set(A,0,0,0,I,0,0,0,1),this}equals(A){const I=this.elements,g=A.elements;for(let C=0;C<9;C++)if(I[C]!==g[C])return!1;return!0}fromArray(A,I=0){for(let g=0;g<9;g++)this.elements[g]=A[g+I];return this}toArray(A=[],I=0){const g=this.elements;return A[I]=g[0],A[I+1]=g[1],A[I+2]=g[2],A[I+3]=g[3],A[I+4]=g[4],A[I+5]=g[5],A[I+6]=g[6],A[I+7]=g[7],A[I+8]=g[8],A}clone(){return new this.constructor().fromArray(this.elements)}}const pi=new fA;function Ze(B){for(let A=B.length-1;A>=0;--A)if(B[A]>=65535)return!0;return!1}function mB(B){return document.createElementNS("http://www.w3.org/1999/xhtml",B)}function ih(){const B=mB("canvas");return B.style.display="block",B}const We={};function YQ(B){B in We||(We[B]=!0,console.warn(B))}function oh(B,A,I){return new Promise(function(g,C){function Q(){switch(B.clientWaitSync(A,B.SYNC_FLUSH_COMMANDS_BIT,0)){case B.WAIT_FAILED:C();break;case B.TIMEOUT_EXPIRED:setTimeout(Q,I);break;default:g()}}setTimeout(Q,I)})}function eh(B){const A=B.elements;A[2]=.5*A[2]+.5*A[3],A[6]=.5*A[6]+.5*A[7],A[10]=.5*A[10]+.5*A[11],A[14]=.5*A[14]+.5*A[15]}function th(B){const A=B.elements;A[11]===-1?(A[10]=-A[10]-1,A[14]=-A[14]):(A[10]=-A[10],A[14]=-A[14]+1)}const Pe=new fA().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),je=new fA().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),fB={[FI]:{transfer:RQ,primaries:pQ,luminanceCoefficients:[.2126,.7152,.0722],toReference:B=>B,fromReference:B=>B},[uI]:{transfer:sI,primaries:pQ,luminanceCoefficients:[.2126,.7152,.0722],toReference:B=>B.convertSRGBToLinear(),fromReference:B=>B.convertLinearToSRGB()},[FQ]:{transfer:RQ,primaries:dQ,luminanceCoefficients:[.2289,.6917,.0793],toReference:B=>B.applyMatrix3(je),fromReference:B=>B.applyMatrix3(Pe)},[Ji]:{transfer:sI,primaries:dQ,luminanceCoefficients:[.2289,.6917,.0793],toReference:B=>B.convertSRGBToLinear().applyMatrix3(je),fromReference:B=>B.applyMatrix3(Pe).convertLinearToSRGB()}},ah=new Set([FI,FQ]),jA={enabled:!0,_workingColorSpace:FI,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(B){if(!ah.has(B))throw new Error(`Unsupported working color space, "${B}".`);this._workingColorSpace=B},convert:function(B,A,I){if(this.enabled===!1||A===I||!A||!I)return B;const g=fB[A].toReference,C=fB[I].fromReference;return C(g(B))},fromWorkingColorSpace:function(B,A){return this.convert(B,this._workingColorSpace,A)},toWorkingColorSpace:function(B,A){return this.convert(B,A,this._workingColorSpace)},getPrimaries:function(B){return fB[B].primaries},getTransfer:function(B){return B===QC?RQ:fB[B].transfer},getLuminanceCoefficients:function(B,A=this._workingColorSpace){return B.fromArray(fB[A].luminanceCoefficients)}};function AB(B){return B<.04045?B*.0773993808:Math.pow(B*.9478672986+.0521327014,2.4)}function di(B){return B<.0031308?B*12.92:1.055*Math.pow(B,.41666)-.055}let IB;class sh{static getDataURL(A){if(/^data:/i.test(A.src)||typeof HTMLCanvasElement>"u")return A.src;let I;if(A instanceof HTMLCanvasElement)I=A;else{IB===void 0&&(IB=mB("canvas")),IB.width=A.width,IB.height=A.height;const g=IB.getContext("2d");A instanceof ImageData?g.putImageData(A,0,0):g.drawImage(A,0,0,A.width,A.height),I=IB}return I.width>2048||I.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",A),I.toDataURL("image/jpeg",.6)):I.toDataURL("image/png")}static sRGBToLinear(A){if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const I=mB("canvas");I.width=A.width,I.height=A.height;const g=I.getContext("2d");g.drawImage(A,0,0,A.width,A.height);const C=g.getImageData(0,0,A.width,A.height),Q=C.data;for(let E=0;E<Q.length;E++)Q[E]=AB(Q[E]/255)*255;return g.putImageData(C,0,0),I}else if(A.data){const I=A.data.slice(0);for(let g=0;g<I.length;g++)I instanceof Uint8Array||I instanceof Uint8ClampedArray?I[g]=Math.floor(AB(I[g]/255)*255):I[g]=AB(I[g]);return{data:I,width:A.width,height:A.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),A}}let Dh=0;class Ve{constructor(A=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dh++}),this.uuid=hg(),this.data=A,this.dataReady=!0,this.version=0}set needsUpdate(A){A===!0&&this.version++}toJSON(A){const I=A===void 0||typeof A=="string";if(!I&&A.images[this.uuid]!==void 0)return A.images[this.uuid];const g={uuid:this.uuid,url:""},C=this.data;if(C!==null){let Q;if(Array.isArray(C)){Q=[];for(let E=0,i=C.length;E<i;E++)C[E].isDataTexture?Q.push(qi(C[E].image)):Q.push(qi(C[E]))}else Q=qi(C);g.url=Q}return I||(A.images[this.uuid]=g),g}}function qi(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap?sh.getDataURL(B):B.data?{data:Array.from(B.data),width:B.width,height:B.height,type:B.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hh=0;class HI extends yC{constructor(A=HI.DEFAULT_IMAGE,I=HI.DEFAULT_MAPPING,g=Kg,C=Kg,Q=LI,E=Jg,i=og,o=fg,e=HI.DEFAULT_ANISOTROPY,t=QC){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hh++}),this.uuid=hg(),this.name="",this.source=new Ve(A),this.mipmaps=[],this.mapping=I,this.channel=0,this.wrapS=g,this.wrapT=C,this.magFilter=Q,this.minFilter=E,this.anisotropy=e,this.format=i,this.internalFormat=null,this.type=o,this.offset=new vA(0,0),this.repeat=new vA(1,1),this.center=new vA(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fA,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=t,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(A=null){this.source.data=A}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(A){return this.name=A.name,this.source=A.source,this.mipmaps=A.mipmaps.slice(0),this.mapping=A.mapping,this.channel=A.channel,this.wrapS=A.wrapS,this.wrapT=A.wrapT,this.magFilter=A.magFilter,this.minFilter=A.minFilter,this.anisotropy=A.anisotropy,this.format=A.format,this.internalFormat=A.internalFormat,this.type=A.type,this.offset.copy(A.offset),this.repeat.copy(A.repeat),this.center.copy(A.center),this.rotation=A.rotation,this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrix.copy(A.matrix),this.generateMipmaps=A.generateMipmaps,this.premultiplyAlpha=A.premultiplyAlpha,this.flipY=A.flipY,this.unpackAlignment=A.unpackAlignment,this.colorSpace=A.colorSpace,this.userData=JSON.parse(JSON.stringify(A.userData)),this.needsUpdate=!0,this}toJSON(A){const I=A===void 0||typeof A=="string";if(!I&&A.textures[this.uuid]!==void 0)return A.textures[this.uuid];const g={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(A).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(g.userData=this.userData),I||(A.textures[this.uuid]=g),g}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(A){if(this.mapping!==Fe)return A;if(A.applyMatrix3(this.matrix),A.x<0||A.x>1)switch(this.wrapS){case ZC:A.x=A.x-Math.floor(A.x);break;case Kg:A.x=A.x<0?0:1;break;case GQ:Math.abs(Math.floor(A.x)%2)===1?A.x=Math.ceil(A.x)-A.x:A.x=A.x-Math.floor(A.x);break}if(A.y<0||A.y>1)switch(this.wrapT){case ZC:A.y=A.y-Math.floor(A.y);break;case Kg:A.y=A.y<0?0:1;break;case GQ:Math.abs(Math.floor(A.y)%2)===1?A.y=Math.ceil(A.y)-A.y:A.y=A.y-Math.floor(A.y);break}return this.flipY&&(A.y=1-A.y),A}set needsUpdate(A){A===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(A){A===!0&&this.pmremVersion++}}HI.DEFAULT_IMAGE=null,HI.DEFAULT_MAPPING=Fe,HI.DEFAULT_ANISOTROPY=1;class $A{constructor(A=0,I=0,g=0,C=1){$A.prototype.isVector4=!0,this.x=A,this.y=I,this.z=g,this.w=C}get width(){return this.z}set width(A){this.z=A}get height(){return this.w}set height(A){this.w=A}set(A,I,g,C){return this.x=A,this.y=I,this.z=g,this.w=C,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this.w=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setW(A){return this.w=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;case 2:this.z=I;break;case 3:this.w=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this.w=A.w!==void 0?A.w:1,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this.w+=A.w,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this.w+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this.z=A.z+I.z,this.w=A.w+I.w,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this.z+=A.z*I,this.w+=A.w*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this.w-=A.w,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this.w-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this.z=A.z-I.z,this.w=A.w-I.w,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this.w*=A.w,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this.w*=A,this}applyMatrix4(A){const I=this.x,g=this.y,C=this.z,Q=this.w,E=A.elements;return this.x=E[0]*I+E[4]*g+E[8]*C+E[12]*Q,this.y=E[1]*I+E[5]*g+E[9]*C+E[13]*Q,this.z=E[2]*I+E[6]*g+E[10]*C+E[14]*Q,this.w=E[3]*I+E[7]*g+E[11]*C+E[15]*Q,this}divideScalar(A){return this.multiplyScalar(1/A)}setAxisAngleFromQuaternion(A){this.w=2*Math.acos(A.w);const I=Math.sqrt(1-A.w*A.w);return I<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=A.x/I,this.y=A.y/I,this.z=A.z/I),this}setAxisAngleFromRotationMatrix(A){let I,g,C,Q;const E=A.elements,i=E[0],o=E[4],e=E[8],t=E[1],a=E[5],s=E[9],h=E[2],n=E[6],w=E[10];if(Math.abs(o-t)<.01&&Math.abs(e-h)<.01&&Math.abs(s-n)<.01){if(Math.abs(o+t)<.1&&Math.abs(e+h)<.1&&Math.abs(s+n)<.1&&Math.abs(i+a+w-3)<.1)return this.set(1,0,0,0),this;I=Math.PI;const S=(i+1)/2,y=(a+1)/2,G=(w+1)/2,M=(o+t)/4,m=(e+h)/4,F=(s+n)/4;return S>y&&S>G?S<.01?(g=0,C=.707106781,Q=.707106781):(g=Math.sqrt(S),C=M/g,Q=m/g):y>G?y<.01?(g=.707106781,C=0,Q=.707106781):(C=Math.sqrt(y),g=M/C,Q=F/C):G<.01?(g=.707106781,C=.707106781,Q=0):(Q=Math.sqrt(G),g=m/Q,C=F/Q),this.set(g,C,Q,I),this}let r=Math.sqrt((n-s)*(n-s)+(e-h)*(e-h)+(t-o)*(t-o));return Math.abs(r)<.001&&(r=1),this.x=(n-s)/r,this.y=(e-h)/r,this.z=(t-o)/r,this.w=Math.acos((i+a+w-1)/2),this}setFromMatrixPosition(A){const I=A.elements;return this.x=I[12],this.y=I[13],this.z=I[14],this.w=I[15],this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this.w=Math.min(this.w,A.w),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this.w=Math.max(this.w,A.w),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this.z=Math.max(A.z,Math.min(I.z,this.z)),this.w=Math.max(A.w,Math.min(I.w,this.w)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this.z=Math.max(A,Math.min(I,this.z)),this.w=Math.max(A,Math.min(I,this.w)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z+this.w*A.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this.z+=(A.z-this.z)*I,this.w+=(A.w-this.w)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this.z=A.z+(I.z-A.z)*g,this.w=A.w+(I.w-A.w)*g,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z&&A.w===this.w}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this.z=A[I+2],this.w=A[I+3],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A[I+2]=this.z,A[I+3]=this.w,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this.z=A.getZ(I),this.w=A.getW(I),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rh extends yC{constructor(A=1,I=1,g={}){super(),this.isRenderTarget=!0,this.width=A,this.height=I,this.depth=1,this.scissor=new $A(0,0,A,I),this.scissorTest=!1,this.viewport=new $A(0,0,A,I);const C={width:A,height:I,depth:1};g=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:LI,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},g);const Q=new HI(C,g.mapping,g.wrapS,g.wrapT,g.magFilter,g.minFilter,g.format,g.type,g.anisotropy,g.colorSpace);Q.flipY=!1,Q.generateMipmaps=g.generateMipmaps,Q.internalFormat=g.internalFormat,this.textures=[];const E=g.count;for(let i=0;i<E;i++)this.textures[i]=Q.clone(),this.textures[i].isRenderTargetTexture=!0;this.depthBuffer=g.depthBuffer,this.stencilBuffer=g.stencilBuffer,this.resolveDepthBuffer=g.resolveDepthBuffer,this.resolveStencilBuffer=g.resolveStencilBuffer,this.depthTexture=g.depthTexture,this.samples=g.samples}get texture(){return this.textures[0]}set texture(A){this.textures[0]=A}setSize(A,I,g=1){if(this.width!==A||this.height!==I||this.depth!==g){this.width=A,this.height=I,this.depth=g;for(let C=0,Q=this.textures.length;C<Q;C++)this.textures[C].image.width=A,this.textures[C].image.height=I,this.textures[C].image.depth=g;this.dispose()}this.viewport.set(0,0,A,I),this.scissor.set(0,0,A,I)}clone(){return new this.constructor().copy(this)}copy(A){this.width=A.width,this.height=A.height,this.depth=A.depth,this.scissor.copy(A.scissor),this.scissorTest=A.scissorTest,this.viewport.copy(A.viewport),this.textures.length=0;for(let g=0,C=A.textures.length;g<C;g++)this.textures[g]=A.textures[g].clone(),this.textures[g].isRenderTargetTexture=!0;const I=Object.assign({},A.texture.image);return this.texture.source=new Ve(I),this.depthBuffer=A.depthBuffer,this.stencilBuffer=A.stencilBuffer,this.resolveDepthBuffer=A.resolveDepthBuffer,this.resolveStencilBuffer=A.resolveStencilBuffer,A.depthTexture!==null&&(this.depthTexture=A.depthTexture.clone()),this.samples=A.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class UC extends rh{constructor(A=1,I=1,g={}){super(A,I,g),this.isWebGLRenderTarget=!0}}class Xe extends HI{constructor(A=null,I=1,g=1,C=1){super(null),this.isDataArrayTexture=!0,this.image={data:A,width:I,height:g,depth:C},this.magFilter=_I,this.minFilter=_I,this.wrapR=Kg,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(A){this.layerUpdates.add(A)}clearLayerUpdates(){this.layerUpdates.clear()}}class Sh extends HI{constructor(A=null,I=1,g=1,C=1){super(null),this.isData3DTexture=!0,this.image={data:A,width:I,height:g,depth:C},this.magFilter=_I,this.minFilter=_I,this.wrapR=Kg,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zI{constructor(A=0,I=0,g=0,C=1){this.isQuaternion=!0,this._x=A,this._y=I,this._z=g,this._w=C}static slerpFlat(A,I,g,C,Q,E,i){let o=g[C+0],e=g[C+1],t=g[C+2],a=g[C+3];const s=Q[E+0],h=Q[E+1],n=Q[E+2],w=Q[E+3];if(i===0){A[I+0]=o,A[I+1]=e,A[I+2]=t,A[I+3]=a;return}if(i===1){A[I+0]=s,A[I+1]=h,A[I+2]=n,A[I+3]=w;return}if(a!==w||o!==s||e!==h||t!==n){let r=1-i;const S=o*s+e*h+t*n+a*w,y=S>=0?1:-1,G=1-S*S;if(G>Number.EPSILON){const m=Math.sqrt(G),F=Math.atan2(m,S*y);r=Math.sin(r*F)/m,i=Math.sin(i*F)/m}const M=i*y;if(o=o*r+s*M,e=e*r+h*M,t=t*r+n*M,a=a*r+w*M,r===1-i){const m=1/Math.sqrt(o*o+e*e+t*t+a*a);o*=m,e*=m,t*=m,a*=m}}A[I]=o,A[I+1]=e,A[I+2]=t,A[I+3]=a}static multiplyQuaternionsFlat(A,I,g,C,Q,E){const i=g[C],o=g[C+1],e=g[C+2],t=g[C+3],a=Q[E],s=Q[E+1],h=Q[E+2],n=Q[E+3];return A[I]=i*n+t*a+o*h-e*s,A[I+1]=o*n+t*s+e*a-i*h,A[I+2]=e*n+t*h+i*s-o*a,A[I+3]=t*n-i*a-o*s-e*h,A}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get w(){return this._w}set w(A){this._w=A,this._onChangeCallback()}set(A,I,g,C){return this._x=A,this._y=I,this._z=g,this._w=C,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(A){return this._x=A.x,this._y=A.y,this._z=A.z,this._w=A.w,this._onChangeCallback(),this}setFromEuler(A,I=!0){const g=A._x,C=A._y,Q=A._z,E=A._order,i=Math.cos,o=Math.sin,e=i(g/2),t=i(C/2),a=i(Q/2),s=o(g/2),h=o(C/2),n=o(Q/2);switch(E){case"XYZ":this._x=s*t*a+e*h*n,this._y=e*h*a-s*t*n,this._z=e*t*n+s*h*a,this._w=e*t*a-s*h*n;break;case"YXZ":this._x=s*t*a+e*h*n,this._y=e*h*a-s*t*n,this._z=e*t*n-s*h*a,this._w=e*t*a+s*h*n;break;case"ZXY":this._x=s*t*a-e*h*n,this._y=e*h*a+s*t*n,this._z=e*t*n+s*h*a,this._w=e*t*a-s*h*n;break;case"ZYX":this._x=s*t*a-e*h*n,this._y=e*h*a+s*t*n,this._z=e*t*n-s*h*a,this._w=e*t*a+s*h*n;break;case"YZX":this._x=s*t*a+e*h*n,this._y=e*h*a+s*t*n,this._z=e*t*n-s*h*a,this._w=e*t*a-s*h*n;break;case"XZY":this._x=s*t*a-e*h*n,this._y=e*h*a-s*t*n,this._z=e*t*n+s*h*a,this._w=e*t*a+s*h*n;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+E)}return I===!0&&this._onChangeCallback(),this}setFromAxisAngle(A,I){const g=I/2,C=Math.sin(g);return this._x=A.x*C,this._y=A.y*C,this._z=A.z*C,this._w=Math.cos(g),this._onChangeCallback(),this}setFromRotationMatrix(A){const I=A.elements,g=I[0],C=I[4],Q=I[8],E=I[1],i=I[5],o=I[9],e=I[2],t=I[6],a=I[10],s=g+i+a;if(s>0){const h=.5/Math.sqrt(s+1);this._w=.25/h,this._x=(t-o)*h,this._y=(Q-e)*h,this._z=(E-C)*h}else if(g>i&&g>a){const h=2*Math.sqrt(1+g-i-a);this._w=(t-o)/h,this._x=.25*h,this._y=(C+E)/h,this._z=(Q+e)/h}else if(i>a){const h=2*Math.sqrt(1+i-g-a);this._w=(Q-e)/h,this._x=(C+E)/h,this._y=.25*h,this._z=(o+t)/h}else{const h=2*Math.sqrt(1+a-g-i);this._w=(E-C)/h,this._x=(Q+e)/h,this._y=(o+t)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(A,I){let g=A.dot(I)+1;return g<Number.EPSILON?(g=0,Math.abs(A.x)>Math.abs(A.z)?(this._x=-A.y,this._y=A.x,this._z=0,this._w=g):(this._x=0,this._y=-A.z,this._z=A.y,this._w=g)):(this._x=A.y*I.z-A.z*I.y,this._y=A.z*I.x-A.x*I.z,this._z=A.x*I.y-A.y*I.x,this._w=g),this.normalize()}angleTo(A){return 2*Math.acos(Math.abs(TI(this.dot(A),-1,1)))}rotateTowards(A,I){const g=this.angleTo(A);if(g===0)return this;const C=Math.min(1,I/g);return this.slerp(A,C),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(A){return this._x*A._x+this._y*A._y+this._z*A._z+this._w*A._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let A=this.length();return A===0?(this._x=0,this._y=0,this._z=0,this._w=1):(A=1/A,this._x=this._x*A,this._y=this._y*A,this._z=this._z*A,this._w=this._w*A),this._onChangeCallback(),this}multiply(A){return this.multiplyQuaternions(this,A)}premultiply(A){return this.multiplyQuaternions(A,this)}multiplyQuaternions(A,I){const g=A._x,C=A._y,Q=A._z,E=A._w,i=I._x,o=I._y,e=I._z,t=I._w;return this._x=g*t+E*i+C*e-Q*o,this._y=C*t+E*o+Q*i-g*e,this._z=Q*t+E*e+g*o-C*i,this._w=E*t-g*i-C*o-Q*e,this._onChangeCallback(),this}slerp(A,I){if(I===0)return this;if(I===1)return this.copy(A);const g=this._x,C=this._y,Q=this._z,E=this._w;let i=E*A._w+g*A._x+C*A._y+Q*A._z;if(i<0?(this._w=-A._w,this._x=-A._x,this._y=-A._y,this._z=-A._z,i=-i):this.copy(A),i>=1)return this._w=E,this._x=g,this._y=C,this._z=Q,this;const o=1-i*i;if(o<=Number.EPSILON){const h=1-I;return this._w=h*E+I*this._w,this._x=h*g+I*this._x,this._y=h*C+I*this._y,this._z=h*Q+I*this._z,this.normalize(),this}const e=Math.sqrt(o),t=Math.atan2(e,i),a=Math.sin((1-I)*t)/e,s=Math.sin(I*t)/e;return this._w=E*a+this._w*s,this._x=g*a+this._x*s,this._y=C*a+this._y*s,this._z=Q*a+this._z*s,this._onChangeCallback(),this}slerpQuaternions(A,I,g){return this.copy(A).slerp(I,g)}random(){const A=2*Math.PI*Math.random(),I=2*Math.PI*Math.random(),g=Math.random(),C=Math.sqrt(1-g),Q=Math.sqrt(g);return this.set(C*Math.sin(A),C*Math.cos(A),Q*Math.sin(I),Q*Math.cos(I))}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._w===this._w}fromArray(A,I=0){return this._x=A[I],this._y=A[I+1],this._z=A[I+2],this._w=A[I+3],this._onChangeCallback(),this}toArray(A=[],I=0){return A[I]=this._x,A[I+1]=this._y,A[I+2]=this._z,A[I+3]=this._w,A}fromBufferAttribute(A,I){return this._x=A.getX(I),this._y=A.getY(I),this._z=A.getZ(I),this._w=A.getW(I),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(A=0,I=0,g=0){L.prototype.isVector3=!0,this.x=A,this.y=I,this.z=g}set(A,I,g){return g===void 0&&(g=this.z),this.x=A,this.y=I,this.z=g,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;case 2:this.z=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this.z=A.z+I.z,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this.z+=A.z*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this.z=A.z-I.z,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this}multiplyVectors(A,I){return this.x=A.x*I.x,this.y=A.y*I.y,this.z=A.z*I.z,this}applyEuler(A){return this.applyQuaternion(ze.setFromEuler(A))}applyAxisAngle(A,I){return this.applyQuaternion(ze.setFromAxisAngle(A,I))}applyMatrix3(A){const I=this.x,g=this.y,C=this.z,Q=A.elements;return this.x=Q[0]*I+Q[3]*g+Q[6]*C,this.y=Q[1]*I+Q[4]*g+Q[7]*C,this.z=Q[2]*I+Q[5]*g+Q[8]*C,this}applyNormalMatrix(A){return this.applyMatrix3(A).normalize()}applyMatrix4(A){const I=this.x,g=this.y,C=this.z,Q=A.elements,E=1/(Q[3]*I+Q[7]*g+Q[11]*C+Q[15]);return this.x=(Q[0]*I+Q[4]*g+Q[8]*C+Q[12])*E,this.y=(Q[1]*I+Q[5]*g+Q[9]*C+Q[13])*E,this.z=(Q[2]*I+Q[6]*g+Q[10]*C+Q[14])*E,this}applyQuaternion(A){const I=this.x,g=this.y,C=this.z,Q=A.x,E=A.y,i=A.z,o=A.w,e=2*(E*C-i*g),t=2*(i*I-Q*C),a=2*(Q*g-E*I);return this.x=I+o*e+E*a-i*t,this.y=g+o*t+i*e-Q*a,this.z=C+o*a+Q*t-E*e,this}project(A){return this.applyMatrix4(A.matrixWorldInverse).applyMatrix4(A.projectionMatrix)}unproject(A){return this.applyMatrix4(A.projectionMatrixInverse).applyMatrix4(A.matrixWorld)}transformDirection(A){const I=this.x,g=this.y,C=this.z,Q=A.elements;return this.x=Q[0]*I+Q[4]*g+Q[8]*C,this.y=Q[1]*I+Q[5]*g+Q[9]*C,this.z=Q[2]*I+Q[6]*g+Q[10]*C,this.normalize()}divide(A){return this.x/=A.x,this.y/=A.y,this.z/=A.z,this}divideScalar(A){return this.multiplyScalar(1/A)}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this.z=Math.max(A.z,Math.min(I.z,this.z)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this.z=Math.max(A,Math.min(I,this.z)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this.z+=(A.z-this.z)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this.z=A.z+(I.z-A.z)*g,this}cross(A){return this.crossVectors(this,A)}crossVectors(A,I){const g=A.x,C=A.y,Q=A.z,E=I.x,i=I.y,o=I.z;return this.x=C*o-Q*i,this.y=Q*E-g*o,this.z=g*i-C*E,this}projectOnVector(A){const I=A.lengthSq();if(I===0)return this.set(0,0,0);const g=A.dot(this)/I;return this.copy(A).multiplyScalar(g)}projectOnPlane(A){return Yi.copy(this).projectOnVector(A),this.sub(Yi)}reflect(A){return this.sub(Yi.copy(A).multiplyScalar(2*this.dot(A)))}angleTo(A){const I=Math.sqrt(this.lengthSq()*A.lengthSq());if(I===0)return Math.PI/2;const g=this.dot(A)/I;return Math.acos(TI(g,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const I=this.x-A.x,g=this.y-A.y,C=this.z-A.z;return I*I+g*g+C*C}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)+Math.abs(this.z-A.z)}setFromSpherical(A){return this.setFromSphericalCoords(A.radius,A.phi,A.theta)}setFromSphericalCoords(A,I,g){const C=Math.sin(I)*A;return this.x=C*Math.sin(g),this.y=Math.cos(I)*A,this.z=C*Math.cos(g),this}setFromCylindrical(A){return this.setFromCylindricalCoords(A.radius,A.theta,A.y)}setFromCylindricalCoords(A,I,g){return this.x=A*Math.sin(I),this.y=g,this.z=A*Math.cos(I),this}setFromMatrixPosition(A){const I=A.elements;return this.x=I[12],this.y=I[13],this.z=I[14],this}setFromMatrixScale(A){const I=this.setFromMatrixColumn(A,0).length(),g=this.setFromMatrixColumn(A,1).length(),C=this.setFromMatrixColumn(A,2).length();return this.x=I,this.y=g,this.z=C,this}setFromMatrixColumn(A,I){return this.fromArray(A.elements,I*4)}setFromMatrix3Column(A,I){return this.fromArray(A.elements,I*3)}setFromEuler(A){return this.x=A._x,this.y=A._y,this.z=A._z,this}setFromColor(A){return this.x=A.r,this.y=A.g,this.z=A.b,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this.z=A[I+2],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A[I+2]=this.z,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this.z=A.getZ(I),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const A=Math.random()*Math.PI*2,I=Math.random()*2-1,g=Math.sqrt(1-I*I);return this.x=g*Math.cos(A),this.y=I,this.z=g*Math.sin(A),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Yi=new L,ze=new zI;class bg{constructor(A=new L(1/0,1/0,1/0),I=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=A,this.max=I}set(A,I){return this.min.copy(A),this.max.copy(I),this}setFromArray(A){this.makeEmpty();for(let I=0,g=A.length;I<g;I+=3)this.expandByPoint(Sg.fromArray(A,I));return this}setFromBufferAttribute(A){this.makeEmpty();for(let I=0,g=A.count;I<g;I++)this.expandByPoint(Sg.fromBufferAttribute(A,I));return this}setFromPoints(A){this.makeEmpty();for(let I=0,g=A.length;I<g;I++)this.expandByPoint(A[I]);return this}setFromCenterAndSize(A,I){const g=Sg.copy(I).multiplyScalar(.5);return this.min.copy(A).sub(g),this.max.copy(A).add(g),this}setFromObject(A,I=!1){return this.makeEmpty(),this.expandByObject(A,I)}clone(){return new this.constructor().copy(this)}copy(A){return this.min.copy(A.min),this.max.copy(A.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(A){return this.isEmpty()?A.set(0,0,0):A.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(A){return this.isEmpty()?A.set(0,0,0):A.subVectors(this.max,this.min)}expandByPoint(A){return this.min.min(A),this.max.max(A),this}expandByVector(A){return this.min.sub(A),this.max.add(A),this}expandByScalar(A){return this.min.addScalar(-A),this.max.addScalar(A),this}expandByObject(A,I=!1){A.updateWorldMatrix(!1,!1);const g=A.geometry;if(g!==void 0){const Q=g.getAttribute("position");if(I===!0&&Q!==void 0&&A.isInstancedMesh!==!0)for(let E=0,i=Q.count;E<i;E++)A.isMesh===!0?A.getVertexPosition(E,Sg):Sg.fromBufferAttribute(Q,E),Sg.applyMatrix4(A.matrixWorld),this.expandByPoint(Sg);else A.boundingBox!==void 0?(A.boundingBox===null&&A.computeBoundingBox(),LQ.copy(A.boundingBox)):(g.boundingBox===null&&g.computeBoundingBox(),LQ.copy(g.boundingBox)),LQ.applyMatrix4(A.matrixWorld),this.union(LQ)}const C=A.children;for(let Q=0,E=C.length;Q<E;Q++)this.expandByObject(C[Q],I);return this}containsPoint(A){return A.x>=this.min.x&&A.x<=this.max.x&&A.y>=this.min.y&&A.y<=this.max.y&&A.z>=this.min.z&&A.z<=this.max.z}containsBox(A){return this.min.x<=A.min.x&&A.max.x<=this.max.x&&this.min.y<=A.min.y&&A.max.y<=this.max.y&&this.min.z<=A.min.z&&A.max.z<=this.max.z}getParameter(A,I){return I.set((A.x-this.min.x)/(this.max.x-this.min.x),(A.y-this.min.y)/(this.max.y-this.min.y),(A.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(A){return A.max.x>=this.min.x&&A.min.x<=this.max.x&&A.max.y>=this.min.y&&A.min.y<=this.max.y&&A.max.z>=this.min.z&&A.min.z<=this.max.z}intersectsSphere(A){return this.clampPoint(A.center,Sg),Sg.distanceToSquared(A.center)<=A.radius*A.radius}intersectsPlane(A){let I,g;return A.normal.x>0?(I=A.normal.x*this.min.x,g=A.normal.x*this.max.x):(I=A.normal.x*this.max.x,g=A.normal.x*this.min.x),A.normal.y>0?(I+=A.normal.y*this.min.y,g+=A.normal.y*this.max.y):(I+=A.normal.y*this.max.y,g+=A.normal.y*this.min.y),A.normal.z>0?(I+=A.normal.z*this.min.z,g+=A.normal.z*this.max.z):(I+=A.normal.z*this.max.z,g+=A.normal.z*this.min.z),I<=-A.constant&&g>=-A.constant}intersectsTriangle(A){if(this.isEmpty())return!1;this.getCenter(TB),uQ.subVectors(this.max,TB),gB.subVectors(A.a,TB),CB.subVectors(A.b,TB),BB.subVectors(A.c,TB),EC.subVectors(CB,gB),iC.subVectors(BB,CB),MC.subVectors(gB,BB);let I=[0,-EC.z,EC.y,0,-iC.z,iC.y,0,-MC.z,MC.y,EC.z,0,-EC.x,iC.z,0,-iC.x,MC.z,0,-MC.x,-EC.y,EC.x,0,-iC.y,iC.x,0,-MC.y,MC.x,0];return!Li(I,gB,CB,BB,uQ)||(I=[1,0,0,0,1,0,0,0,1],!Li(I,gB,CB,BB,uQ))?!1:(HQ.crossVectors(EC,iC),I=[HQ.x,HQ.y,HQ.z],Li(I,gB,CB,BB,uQ))}clampPoint(A,I){return I.copy(A).clamp(this.min,this.max)}distanceToPoint(A){return this.clampPoint(A,Sg).distanceTo(A)}getBoundingSphere(A){return this.isEmpty()?A.makeEmpty():(this.getCenter(A.center),A.radius=this.getSize(Sg).length()*.5),A}intersect(A){return this.min.max(A.min),this.max.min(A.max),this.isEmpty()&&this.makeEmpty(),this}union(A){return this.min.min(A.min),this.max.max(A.max),this}applyMatrix4(A){return this.isEmpty()?this:(Og[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(A),Og[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(A),Og[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(A),Og[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(A),Og[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(A),Og[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(A),Og[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(A),Og[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(A),this.setFromPoints(Og),this)}translate(A){return this.min.add(A),this.max.add(A),this}equals(A){return A.min.equals(this.min)&&A.max.equals(this.max)}}const Og=[new L,new L,new L,new L,new L,new L,new L,new L],Sg=new L,LQ=new bg,gB=new L,CB=new L,BB=new L,EC=new L,iC=new L,MC=new L,TB=new L,uQ=new L,HQ=new L,NC=new L;function Li(B,A,I,g,C){for(let Q=0,E=B.length-3;Q<=E;Q+=3){NC.fromArray(B,Q);const i=C.x*Math.abs(NC.x)+C.y*Math.abs(NC.y)+C.z*Math.abs(NC.z),o=A.dot(NC),e=I.dot(NC),t=g.dot(NC);if(Math.max(-Math.max(o,e,t),Math.min(o,e,t))>i)return!1}return!0}const nh=new bg,xB=new L,ui=new L;class Fg{constructor(A=new L,I=-1){this.isSphere=!0,this.center=A,this.radius=I}set(A,I){return this.center.copy(A),this.radius=I,this}setFromPoints(A,I){const g=this.center;I!==void 0?g.copy(I):nh.setFromPoints(A).getCenter(g);let C=0;for(let Q=0,E=A.length;Q<E;Q++)C=Math.max(C,g.distanceToSquared(A[Q]));return this.radius=Math.sqrt(C),this}copy(A){return this.center.copy(A.center),this.radius=A.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(A){return A.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(A){return A.distanceTo(this.center)-this.radius}intersectsSphere(A){const I=this.radius+A.radius;return A.center.distanceToSquared(this.center)<=I*I}intersectsBox(A){return A.intersectsSphere(this)}intersectsPlane(A){return Math.abs(A.distanceToPoint(this.center))<=this.radius}clampPoint(A,I){const g=this.center.distanceToSquared(A);return I.copy(A),g>this.radius*this.radius&&(I.sub(this.center).normalize(),I.multiplyScalar(this.radius).add(this.center)),I}getBoundingBox(A){return this.isEmpty()?(A.makeEmpty(),A):(A.set(this.center,this.center),A.expandByScalar(this.radius),A)}applyMatrix4(A){return this.center.applyMatrix4(A),this.radius=this.radius*A.getMaxScaleOnAxis(),this}translate(A){return this.center.add(A),this}expandByPoint(A){if(this.isEmpty())return this.center.copy(A),this.radius=0,this;xB.subVectors(A,this.center);const I=xB.lengthSq();if(I>this.radius*this.radius){const g=Math.sqrt(I),C=(g-this.radius)*.5;this.center.addScaledVector(xB,C/g),this.radius+=C}return this}union(A){return A.isEmpty()?this:this.isEmpty()?(this.copy(A),this):(this.center.equals(A.center)===!0?this.radius=Math.max(this.radius,A.radius):(ui.subVectors(A.center,this.center).setLength(A.radius),this.expandByPoint(xB.copy(A.center).add(ui)),this.expandByPoint(xB.copy(A.center).sub(ui))),this)}equals(A){return A.center.equals(this.center)&&A.radius===this.radius}clone(){return new this.constructor().copy(this)}}const vg=new L,Hi=new L,mQ=new L,oC=new L,mi=new L,fQ=new L,fi=new L;class TQ{constructor(A=new L,I=new L(0,0,-1)){this.origin=A,this.direction=I}set(A,I){return this.origin.copy(A),this.direction.copy(I),this}copy(A){return this.origin.copy(A.origin),this.direction.copy(A.direction),this}at(A,I){return I.copy(this.origin).addScaledVector(this.direction,A)}lookAt(A){return this.direction.copy(A).sub(this.origin).normalize(),this}recast(A){return this.origin.copy(this.at(A,vg)),this}closestPointToPoint(A,I){I.subVectors(A,this.origin);const g=I.dot(this.direction);return g<0?I.copy(this.origin):I.copy(this.origin).addScaledVector(this.direction,g)}distanceToPoint(A){return Math.sqrt(this.distanceSqToPoint(A))}distanceSqToPoint(A){const I=vg.subVectors(A,this.origin).dot(this.direction);return I<0?this.origin.distanceToSquared(A):(vg.copy(this.origin).addScaledVector(this.direction,I),vg.distanceToSquared(A))}distanceSqToSegment(A,I,g,C){Hi.copy(A).add(I).multiplyScalar(.5),mQ.copy(I).sub(A).normalize(),oC.copy(this.origin).sub(Hi);const Q=A.distanceTo(I)*.5,E=-this.direction.dot(mQ),i=oC.dot(this.direction),o=-oC.dot(mQ),e=oC.lengthSq(),t=Math.abs(1-E*E);let a,s,h,n;if(t>0)if(a=E*o-i,s=E*i-o,n=Q*t,a>=0)if(s>=-n)if(s<=n){const w=1/t;a*=w,s*=w,h=a*(a+E*s+2*i)+s*(E*a+s+2*o)+e}else s=Q,a=Math.max(0,-(E*s+i)),h=-a*a+s*(s+2*o)+e;else s=-Q,a=Math.max(0,-(E*s+i)),h=-a*a+s*(s+2*o)+e;else s<=-n?(a=Math.max(0,-(-E*Q+i)),s=a>0?-Q:Math.min(Math.max(-Q,-o),Q),h=-a*a+s*(s+2*o)+e):s<=n?(a=0,s=Math.min(Math.max(-Q,-o),Q),h=s*(s+2*o)+e):(a=Math.max(0,-(E*Q+i)),s=a>0?Q:Math.min(Math.max(-Q,-o),Q),h=-a*a+s*(s+2*o)+e);else s=E>0?-Q:Q,a=Math.max(0,-(E*s+i)),h=-a*a+s*(s+2*o)+e;return g&&g.copy(this.origin).addScaledVector(this.direction,a),C&&C.copy(Hi).addScaledVector(mQ,s),h}intersectSphere(A,I){vg.subVectors(A.center,this.origin);const g=vg.dot(this.direction),C=vg.dot(vg)-g*g,Q=A.radius*A.radius;if(C>Q)return null;const E=Math.sqrt(Q-C),i=g-E,o=g+E;return o<0?null:i<0?this.at(o,I):this.at(i,I)}intersectsSphere(A){return this.distanceSqToPoint(A.center)<=A.radius*A.radius}distanceToPlane(A){const I=A.normal.dot(this.direction);if(I===0)return A.distanceToPoint(this.origin)===0?0:null;const g=-(this.origin.dot(A.normal)+A.constant)/I;return g>=0?g:null}intersectPlane(A,I){const g=this.distanceToPlane(A);return g===null?null:this.at(g,I)}intersectsPlane(A){const I=A.distanceToPoint(this.origin);return I===0||A.normal.dot(this.direction)*I<0}intersectBox(A,I){let g,C,Q,E,i,o;const e=1/this.direction.x,t=1/this.direction.y,a=1/this.direction.z,s=this.origin;return e>=0?(g=(A.min.x-s.x)*e,C=(A.max.x-s.x)*e):(g=(A.max.x-s.x)*e,C=(A.min.x-s.x)*e),t>=0?(Q=(A.min.y-s.y)*t,E=(A.max.y-s.y)*t):(Q=(A.max.y-s.y)*t,E=(A.min.y-s.y)*t),g>E||Q>C||((Q>g||isNaN(g))&&(g=Q),(E<C||isNaN(C))&&(C=E),a>=0?(i=(A.min.z-s.z)*a,o=(A.max.z-s.z)*a):(i=(A.max.z-s.z)*a,o=(A.min.z-s.z)*a),g>o||i>C)||((i>g||g!==g)&&(g=i),(o<C||C!==C)&&(C=o),C<0)?null:this.at(g>=0?g:C,I)}intersectsBox(A){return this.intersectBox(A,vg)!==null}intersectTriangle(A,I,g,C,Q){mi.subVectors(I,A),fQ.subVectors(g,A),fi.crossVectors(mi,fQ);let E=this.direction.dot(fi),i;if(E>0){if(C)return null;i=1}else if(E<0)i=-1,E=-E;else return null;oC.subVectors(this.origin,A);const o=i*this.direction.dot(fQ.crossVectors(oC,fQ));if(o<0)return null;const e=i*this.direction.dot(mi.cross(oC));if(e<0||o+e>E)return null;const t=-i*oC.dot(fi);return t<0?null:this.at(t/E,Q)}applyMatrix4(A){return this.origin.applyMatrix4(A),this.direction.transformDirection(A),this}equals(A){return A.origin.equals(this.origin)&&A.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class uA{constructor(A,I,g,C,Q,E,i,o,e,t,a,s,h,n,w,r){uA.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],A!==void 0&&this.set(A,I,g,C,Q,E,i,o,e,t,a,s,h,n,w,r)}set(A,I,g,C,Q,E,i,o,e,t,a,s,h,n,w,r){const S=this.elements;return S[0]=A,S[4]=I,S[8]=g,S[12]=C,S[1]=Q,S[5]=E,S[9]=i,S[13]=o,S[2]=e,S[6]=t,S[10]=a,S[14]=s,S[3]=h,S[7]=n,S[11]=w,S[15]=r,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new uA().fromArray(this.elements)}copy(A){const I=this.elements,g=A.elements;return I[0]=g[0],I[1]=g[1],I[2]=g[2],I[3]=g[3],I[4]=g[4],I[5]=g[5],I[6]=g[6],I[7]=g[7],I[8]=g[8],I[9]=g[9],I[10]=g[10],I[11]=g[11],I[12]=g[12],I[13]=g[13],I[14]=g[14],I[15]=g[15],this}copyPosition(A){const I=this.elements,g=A.elements;return I[12]=g[12],I[13]=g[13],I[14]=g[14],this}setFromMatrix3(A){const I=A.elements;return this.set(I[0],I[3],I[6],0,I[1],I[4],I[7],0,I[2],I[5],I[8],0,0,0,0,1),this}extractBasis(A,I,g){return A.setFromMatrixColumn(this,0),I.setFromMatrixColumn(this,1),g.setFromMatrixColumn(this,2),this}makeBasis(A,I,g){return this.set(A.x,I.x,g.x,0,A.y,I.y,g.y,0,A.z,I.z,g.z,0,0,0,0,1),this}extractRotation(A){const I=this.elements,g=A.elements,C=1/QB.setFromMatrixColumn(A,0).length(),Q=1/QB.setFromMatrixColumn(A,1).length(),E=1/QB.setFromMatrixColumn(A,2).length();return I[0]=g[0]*C,I[1]=g[1]*C,I[2]=g[2]*C,I[3]=0,I[4]=g[4]*Q,I[5]=g[5]*Q,I[6]=g[6]*Q,I[7]=0,I[8]=g[8]*E,I[9]=g[9]*E,I[10]=g[10]*E,I[11]=0,I[12]=0,I[13]=0,I[14]=0,I[15]=1,this}makeRotationFromEuler(A){const I=this.elements,g=A.x,C=A.y,Q=A.z,E=Math.cos(g),i=Math.sin(g),o=Math.cos(C),e=Math.sin(C),t=Math.cos(Q),a=Math.sin(Q);if(A.order==="XYZ"){const s=E*t,h=E*a,n=i*t,w=i*a;I[0]=o*t,I[4]=-o*a,I[8]=e,I[1]=h+n*e,I[5]=s-w*e,I[9]=-i*o,I[2]=w-s*e,I[6]=n+h*e,I[10]=E*o}else if(A.order==="YXZ"){const s=o*t,h=o*a,n=e*t,w=e*a;I[0]=s+w*i,I[4]=n*i-h,I[8]=E*e,I[1]=E*a,I[5]=E*t,I[9]=-i,I[2]=h*i-n,I[6]=w+s*i,I[10]=E*o}else if(A.order==="ZXY"){const s=o*t,h=o*a,n=e*t,w=e*a;I[0]=s-w*i,I[4]=-E*a,I[8]=n+h*i,I[1]=h+n*i,I[5]=E*t,I[9]=w-s*i,I[2]=-E*e,I[6]=i,I[10]=E*o}else if(A.order==="ZYX"){const s=E*t,h=E*a,n=i*t,w=i*a;I[0]=o*t,I[4]=n*e-h,I[8]=s*e+w,I[1]=o*a,I[5]=w*e+s,I[9]=h*e-n,I[2]=-e,I[6]=i*o,I[10]=E*o}else if(A.order==="YZX"){const s=E*o,h=E*e,n=i*o,w=i*e;I[0]=o*t,I[4]=w-s*a,I[8]=n*a+h,I[1]=a,I[5]=E*t,I[9]=-i*t,I[2]=-e*t,I[6]=h*a+n,I[10]=s-w*a}else if(A.order==="XZY"){const s=E*o,h=E*e,n=i*o,w=i*e;I[0]=o*t,I[4]=-a,I[8]=e*t,I[1]=s*a+w,I[5]=E*t,I[9]=h*a-n,I[2]=n*a-h,I[6]=i*t,I[10]=w*a+s}return I[3]=0,I[7]=0,I[11]=0,I[12]=0,I[13]=0,I[14]=0,I[15]=1,this}makeRotationFromQuaternion(A){return this.compose(wh,A,ch)}lookAt(A,I,g){const C=this.elements;return gg.subVectors(A,I),gg.lengthSq()===0&&(gg.z=1),gg.normalize(),eC.crossVectors(g,gg),eC.lengthSq()===0&&(Math.abs(g.z)===1?gg.x+=1e-4:gg.z+=1e-4,gg.normalize(),eC.crossVectors(g,gg)),eC.normalize(),xQ.crossVectors(gg,eC),C[0]=eC.x,C[4]=xQ.x,C[8]=gg.x,C[1]=eC.y,C[5]=xQ.y,C[9]=gg.y,C[2]=eC.z,C[6]=xQ.z,C[10]=gg.z,this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,I){const g=A.elements,C=I.elements,Q=this.elements,E=g[0],i=g[4],o=g[8],e=g[12],t=g[1],a=g[5],s=g[9],h=g[13],n=g[2],w=g[6],r=g[10],S=g[14],y=g[3],G=g[7],M=g[11],m=g[15],F=C[0],N=C[4],H=C[8],P=C[12],c=C[1],U=C[5],O=C[9],v=C[13],W=C[2],$=C[6],b=C[10],IA=C[14],Z=C[3],EA=C[7],cA=C[11],KA=C[15];return Q[0]=E*F+i*c+o*W+e*Z,Q[4]=E*N+i*U+o*$+e*EA,Q[8]=E*H+i*O+o*b+e*cA,Q[12]=E*P+i*v+o*IA+e*KA,Q[1]=t*F+a*c+s*W+h*Z,Q[5]=t*N+a*U+s*$+h*EA,Q[9]=t*H+a*O+s*b+h*cA,Q[13]=t*P+a*v+s*IA+h*KA,Q[2]=n*F+w*c+r*W+S*Z,Q[6]=n*N+w*U+r*$+S*EA,Q[10]=n*H+w*O+r*b+S*cA,Q[14]=n*P+w*v+r*IA+S*KA,Q[3]=y*F+G*c+M*W+m*Z,Q[7]=y*N+G*U+M*$+m*EA,Q[11]=y*H+G*O+M*b+m*cA,Q[15]=y*P+G*v+M*IA+m*KA,this}multiplyScalar(A){const I=this.elements;return I[0]*=A,I[4]*=A,I[8]*=A,I[12]*=A,I[1]*=A,I[5]*=A,I[9]*=A,I[13]*=A,I[2]*=A,I[6]*=A,I[10]*=A,I[14]*=A,I[3]*=A,I[7]*=A,I[11]*=A,I[15]*=A,this}determinant(){const A=this.elements,I=A[0],g=A[4],C=A[8],Q=A[12],E=A[1],i=A[5],o=A[9],e=A[13],t=A[2],a=A[6],s=A[10],h=A[14],n=A[3],w=A[7],r=A[11],S=A[15];return n*(+Q*o*a-C*e*a-Q*i*s+g*e*s+C*i*h-g*o*h)+w*(+I*o*h-I*e*s+Q*E*s-C*E*h+C*e*t-Q*o*t)+r*(+I*e*a-I*i*h-Q*E*a+g*E*h+Q*i*t-g*e*t)+S*(-C*i*t-I*o*a+I*i*s+C*E*a-g*E*s+g*o*t)}transpose(){const A=this.elements;let I;return I=A[1],A[1]=A[4],A[4]=I,I=A[2],A[2]=A[8],A[8]=I,I=A[6],A[6]=A[9],A[9]=I,I=A[3],A[3]=A[12],A[12]=I,I=A[7],A[7]=A[13],A[13]=I,I=A[11],A[11]=A[14],A[14]=I,this}setPosition(A,I,g){const C=this.elements;return A.isVector3?(C[12]=A.x,C[13]=A.y,C[14]=A.z):(C[12]=A,C[13]=I,C[14]=g),this}invert(){const A=this.elements,I=A[0],g=A[1],C=A[2],Q=A[3],E=A[4],i=A[5],o=A[6],e=A[7],t=A[8],a=A[9],s=A[10],h=A[11],n=A[12],w=A[13],r=A[14],S=A[15],y=a*r*e-w*s*e+w*o*h-i*r*h-a*o*S+i*s*S,G=n*s*e-t*r*e-n*o*h+E*r*h+t*o*S-E*s*S,M=t*w*e-n*a*e+n*i*h-E*w*h-t*i*S+E*a*S,m=n*a*o-t*w*o-n*i*s+E*w*s+t*i*r-E*a*r,F=I*y+g*G+C*M+Q*m;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/F;return A[0]=y*N,A[1]=(w*s*Q-a*r*Q-w*C*h+g*r*h+a*C*S-g*s*S)*N,A[2]=(i*r*Q-w*o*Q+w*C*e-g*r*e-i*C*S+g*o*S)*N,A[3]=(a*o*Q-i*s*Q-a*C*e+g*s*e+i*C*h-g*o*h)*N,A[4]=G*N,A[5]=(t*r*Q-n*s*Q+n*C*h-I*r*h-t*C*S+I*s*S)*N,A[6]=(n*o*Q-E*r*Q-n*C*e+I*r*e+E*C*S-I*o*S)*N,A[7]=(E*s*Q-t*o*Q+t*C*e-I*s*e-E*C*h+I*o*h)*N,A[8]=M*N,A[9]=(n*a*Q-t*w*Q-n*g*h+I*w*h+t*g*S-I*a*S)*N,A[10]=(E*w*Q-n*i*Q+n*g*e-I*w*e-E*g*S+I*i*S)*N,A[11]=(t*i*Q-E*a*Q-t*g*e+I*a*e+E*g*h-I*i*h)*N,A[12]=m*N,A[13]=(t*w*C-n*a*C+n*g*s-I*w*s-t*g*r+I*a*r)*N,A[14]=(n*i*C-E*w*C-n*g*o+I*w*o+E*g*r-I*i*r)*N,A[15]=(E*a*C-t*i*C+t*g*o-I*a*o-E*g*s+I*i*s)*N,this}scale(A){const I=this.elements,g=A.x,C=A.y,Q=A.z;return I[0]*=g,I[4]*=C,I[8]*=Q,I[1]*=g,I[5]*=C,I[9]*=Q,I[2]*=g,I[6]*=C,I[10]*=Q,I[3]*=g,I[7]*=C,I[11]*=Q,this}getMaxScaleOnAxis(){const A=this.elements,I=A[0]*A[0]+A[1]*A[1]+A[2]*A[2],g=A[4]*A[4]+A[5]*A[5]+A[6]*A[6],C=A[8]*A[8]+A[9]*A[9]+A[10]*A[10];return Math.sqrt(Math.max(I,g,C))}makeTranslation(A,I,g){return A.isVector3?this.set(1,0,0,A.x,0,1,0,A.y,0,0,1,A.z,0,0,0,1):this.set(1,0,0,A,0,1,0,I,0,0,1,g,0,0,0,1),this}makeRotationX(A){const I=Math.cos(A),g=Math.sin(A);return this.set(1,0,0,0,0,I,-g,0,0,g,I,0,0,0,0,1),this}makeRotationY(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,0,g,0,0,1,0,0,-g,0,I,0,0,0,0,1),this}makeRotationZ(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,-g,0,0,g,I,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(A,I){const g=Math.cos(I),C=Math.sin(I),Q=1-g,E=A.x,i=A.y,o=A.z,e=Q*E,t=Q*i;return this.set(e*E+g,e*i-C*o,e*o+C*i,0,e*i+C*o,t*i+g,t*o-C*E,0,e*o-C*i,t*o+C*E,Q*o*o+g,0,0,0,0,1),this}makeScale(A,I,g){return this.set(A,0,0,0,0,I,0,0,0,0,g,0,0,0,0,1),this}makeShear(A,I,g,C,Q,E){return this.set(1,g,Q,0,A,1,E,0,I,C,1,0,0,0,0,1),this}compose(A,I,g){const C=this.elements,Q=I._x,E=I._y,i=I._z,o=I._w,e=Q+Q,t=E+E,a=i+i,s=Q*e,h=Q*t,n=Q*a,w=E*t,r=E*a,S=i*a,y=o*e,G=o*t,M=o*a,m=g.x,F=g.y,N=g.z;return C[0]=(1-(w+S))*m,C[1]=(h+M)*m,C[2]=(n-G)*m,C[3]=0,C[4]=(h-M)*F,C[5]=(1-(s+S))*F,C[6]=(r+y)*F,C[7]=0,C[8]=(n+G)*N,C[9]=(r-y)*N,C[10]=(1-(s+w))*N,C[11]=0,C[12]=A.x,C[13]=A.y,C[14]=A.z,C[15]=1,this}decompose(A,I,g){const C=this.elements;let Q=QB.set(C[0],C[1],C[2]).length();const E=QB.set(C[4],C[5],C[6]).length(),i=QB.set(C[8],C[9],C[10]).length();this.determinant()<0&&(Q=-Q),A.x=C[12],A.y=C[13],A.z=C[14],ng.copy(this);const o=1/Q,e=1/E,t=1/i;return ng.elements[0]*=o,ng.elements[1]*=o,ng.elements[2]*=o,ng.elements[4]*=e,ng.elements[5]*=e,ng.elements[6]*=e,ng.elements[8]*=t,ng.elements[9]*=t,ng.elements[10]*=t,I.setFromRotationMatrix(ng),g.x=Q,g.y=E,g.z=i,this}makePerspective(A,I,g,C,Q,E,i=xg){const o=this.elements,e=2*Q/(I-A),t=2*Q/(g-C),a=(I+A)/(I-A),s=(g+C)/(g-C);let h,n;if(i===xg)h=-(E+Q)/(E-Q),n=-2*E*Q/(E-Q);else if(i===qQ)h=-E/(E-Q),n=-E*Q/(E-Q);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+i);return o[0]=e,o[4]=0,o[8]=a,o[12]=0,o[1]=0,o[5]=t,o[9]=s,o[13]=0,o[2]=0,o[6]=0,o[10]=h,o[14]=n,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(A,I,g,C,Q,E,i=xg){const o=this.elements,e=1/(I-A),t=1/(g-C),a=1/(E-Q),s=(I+A)*e,h=(g+C)*t;let n,w;if(i===xg)n=(E+Q)*a,w=-2*a;else if(i===qQ)n=Q*a,w=-1*a;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+i);return o[0]=2*e,o[4]=0,o[8]=0,o[12]=-s,o[1]=0,o[5]=2*t,o[9]=0,o[13]=-h,o[2]=0,o[6]=0,o[10]=w,o[14]=-n,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(A){const I=this.elements,g=A.elements;for(let C=0;C<16;C++)if(I[C]!==g[C])return!1;return!0}fromArray(A,I=0){for(let g=0;g<16;g++)this.elements[g]=A[g+I];return this}toArray(A=[],I=0){const g=this.elements;return A[I]=g[0],A[I+1]=g[1],A[I+2]=g[2],A[I+3]=g[3],A[I+4]=g[4],A[I+5]=g[5],A[I+6]=g[6],A[I+7]=g[7],A[I+8]=g[8],A[I+9]=g[9],A[I+10]=g[10],A[I+11]=g[11],A[I+12]=g[12],A[I+13]=g[13],A[I+14]=g[14],A[I+15]=g[15],A}}const QB=new L,ng=new uA,wh=new L(0,0,0),ch=new L(1,1,1),eC=new L,xQ=new L,gg=new L,$e=new uA,At=new zI;class eg{constructor(A=0,I=0,g=0,C=eg.DEFAULT_ORDER){this.isEuler=!0,this._x=A,this._y=I,this._z=g,this._order=C}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get order(){return this._order}set order(A){this._order=A,this._onChangeCallback()}set(A,I,g,C=this._order){return this._x=A,this._y=I,this._z=g,this._order=C,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(A){return this._x=A._x,this._y=A._y,this._z=A._z,this._order=A._order,this._onChangeCallback(),this}setFromRotationMatrix(A,I=this._order,g=!0){const C=A.elements,Q=C[0],E=C[4],i=C[8],o=C[1],e=C[5],t=C[9],a=C[2],s=C[6],h=C[10];switch(I){case"XYZ":this._y=Math.asin(TI(i,-1,1)),Math.abs(i)<.9999999?(this._x=Math.atan2(-t,h),this._z=Math.atan2(-E,Q)):(this._x=Math.atan2(s,e),this._z=0);break;case"YXZ":this._x=Math.asin(-TI(t,-1,1)),Math.abs(t)<.9999999?(this._y=Math.atan2(i,h),this._z=Math.atan2(o,e)):(this._y=Math.atan2(-a,Q),this._z=0);break;case"ZXY":this._x=Math.asin(TI(s,-1,1)),Math.abs(s)<.9999999?(this._y=Math.atan2(-a,h),this._z=Math.atan2(-E,e)):(this._y=0,this._z=Math.atan2(o,Q));break;case"ZYX":this._y=Math.asin(-TI(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(s,h),this._z=Math.atan2(o,Q)):(this._x=0,this._z=Math.atan2(-E,e));break;case"YZX":this._z=Math.asin(TI(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-t,e),this._y=Math.atan2(-a,Q)):(this._x=0,this._y=Math.atan2(i,h));break;case"XZY":this._z=Math.asin(-TI(E,-1,1)),Math.abs(E)<.9999999?(this._x=Math.atan2(s,e),this._y=Math.atan2(i,Q)):(this._x=Math.atan2(-t,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+I)}return this._order=I,g===!0&&this._onChangeCallback(),this}setFromQuaternion(A,I,g){return $e.makeRotationFromQuaternion(A),this.setFromRotationMatrix($e,I,g)}setFromVector3(A,I=this._order){return this.set(A.x,A.y,A.z,I)}reorder(A){return At.setFromEuler(this),this.setFromQuaternion(At,A)}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._order===this._order}fromArray(A){return this._x=A[0],this._y=A[1],this._z=A[2],A[3]!==void 0&&(this._order=A[3]),this._onChangeCallback(),this}toArray(A=[],I=0){return A[I]=this._x,A[I+1]=this._y,A[I+2]=this._z,A[I+3]=this._order,A}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}eg.DEFAULT_ORDER="XYZ";class It{constructor(){this.mask=1}set(A){this.mask=(1<<A|0)>>>0}enable(A){this.mask|=1<<A|0}enableAll(){this.mask=-1}toggle(A){this.mask^=1<<A|0}disable(A){this.mask&=~(1<<A|0)}disableAll(){this.mask=0}test(A){return(this.mask&A.mask)!==0}isEnabled(A){return(this.mask&(1<<A|0))!==0}}let lh=0;const gt=new L,EB=new zI,_g=new uA,bQ=new L,bB=new L,Gh=new L,kh=new zI,Ct=new L(1,0,0),Bt=new L(0,1,0),Qt=new L(0,0,1),Et={type:"added"},yh={type:"removed"},iB={type:"childadded",child:null},Ti={type:"childremoved",child:null};class oI extends yC{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lh++}),this.uuid=hg(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=oI.DEFAULT_UP.clone();const A=new L,I=new eg,g=new zI,C=new L(1,1,1);function Q(){g.setFromEuler(I,!1)}function E(){I.setFromQuaternion(g,void 0,!1)}I._onChange(Q),g._onChange(E),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:A},rotation:{configurable:!0,enumerable:!0,value:I},quaternion:{configurable:!0,enumerable:!0,value:g},scale:{configurable:!0,enumerable:!0,value:C},modelViewMatrix:{value:new uA},normalMatrix:{value:new fA}}),this.matrix=new uA,this.matrixWorld=new uA,this.matrixAutoUpdate=oI.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=oI.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new It,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(A){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(A),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(A){return this.quaternion.premultiply(A),this}setRotationFromAxisAngle(A,I){this.quaternion.setFromAxisAngle(A,I)}setRotationFromEuler(A){this.quaternion.setFromEuler(A,!0)}setRotationFromMatrix(A){this.quaternion.setFromRotationMatrix(A)}setRotationFromQuaternion(A){this.quaternion.copy(A)}rotateOnAxis(A,I){return EB.setFromAxisAngle(A,I),this.quaternion.multiply(EB),this}rotateOnWorldAxis(A,I){return EB.setFromAxisAngle(A,I),this.quaternion.premultiply(EB),this}rotateX(A){return this.rotateOnAxis(Ct,A)}rotateY(A){return this.rotateOnAxis(Bt,A)}rotateZ(A){return this.rotateOnAxis(Qt,A)}translateOnAxis(A,I){return gt.copy(A).applyQuaternion(this.quaternion),this.position.add(gt.multiplyScalar(I)),this}translateX(A){return this.translateOnAxis(Ct,A)}translateY(A){return this.translateOnAxis(Bt,A)}translateZ(A){return this.translateOnAxis(Qt,A)}localToWorld(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(this.matrixWorld)}worldToLocal(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(_g.copy(this.matrixWorld).invert())}lookAt(A,I,g){A.isVector3?bQ.copy(A):bQ.set(A,I,g);const C=this.parent;this.updateWorldMatrix(!0,!1),bB.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_g.lookAt(bB,bQ,this.up):_g.lookAt(bQ,bB,this.up),this.quaternion.setFromRotationMatrix(_g),C&&(_g.extractRotation(C.matrixWorld),EB.setFromRotationMatrix(_g),this.quaternion.premultiply(EB.invert()))}add(A){if(arguments.length>1){for(let I=0;I<arguments.length;I++)this.add(arguments[I]);return this}return A===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",A),this):(A&&A.isObject3D?(A.removeFromParent(),A.parent=this,this.children.push(A),A.dispatchEvent(Et),iB.child=A,this.dispatchEvent(iB),iB.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",A),this)}remove(A){if(arguments.length>1){for(let g=0;g<arguments.length;g++)this.remove(arguments[g]);return this}const I=this.children.indexOf(A);return I!==-1&&(A.parent=null,this.children.splice(I,1),A.dispatchEvent(yh),Ti.child=A,this.dispatchEvent(Ti),Ti.child=null),this}removeFromParent(){const A=this.parent;return A!==null&&A.remove(this),this}clear(){return this.remove(...this.children)}attach(A){return this.updateWorldMatrix(!0,!1),_g.copy(this.matrixWorld).invert(),A.parent!==null&&(A.parent.updateWorldMatrix(!0,!1),_g.multiply(A.parent.matrixWorld)),A.applyMatrix4(_g),A.removeFromParent(),A.parent=this,this.children.push(A),A.updateWorldMatrix(!1,!0),A.dispatchEvent(Et),iB.child=A,this.dispatchEvent(iB),iB.child=null,this}getObjectById(A){return this.getObjectByProperty("id",A)}getObjectByName(A){return this.getObjectByProperty("name",A)}getObjectByProperty(A,I){if(this[A]===I)return this;for(let g=0,C=this.children.length;g<C;g++){const Q=this.children[g].getObjectByProperty(A,I);if(Q!==void 0)return Q}}getObjectsByProperty(A,I,g=[]){this[A]===I&&g.push(this);const C=this.children;for(let Q=0,E=C.length;Q<E;Q++)C[Q].getObjectsByProperty(A,I,g);return g}getWorldPosition(A){return this.updateWorldMatrix(!0,!1),A.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bB,A,Gh),A}getWorldScale(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bB,kh,A),A}getWorldDirection(A){this.updateWorldMatrix(!0,!1);const I=this.matrixWorld.elements;return A.set(I[8],I[9],I[10]).normalize()}raycast(){}traverse(A){A(this);const I=this.children;for(let g=0,C=I.length;g<C;g++)I[g].traverse(A)}traverseVisible(A){if(this.visible===!1)return;A(this);const I=this.children;for(let g=0,C=I.length;g<C;g++)I[g].traverseVisible(A)}traverseAncestors(A){const I=this.parent;I!==null&&(A(I),I.traverseAncestors(A))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(A){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||A)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,A=!0);const I=this.children;for(let g=0,C=I.length;g<C;g++)I[g].updateMatrixWorld(A)}updateWorldMatrix(A,I){const g=this.parent;if(A===!0&&g!==null&&g.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),I===!0){const C=this.children;for(let Q=0,E=C.length;Q<E;Q++)C[Q].updateWorldMatrix(!1,!0)}}toJSON(A){const I=A===void 0||typeof A=="string",g={};I&&(A={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},g.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const C={};C.uuid=this.uuid,C.type=this.type,this.name!==""&&(C.name=this.name),this.castShadow===!0&&(C.castShadow=!0),this.receiveShadow===!0&&(C.receiveShadow=!0),this.visible===!1&&(C.visible=!1),this.frustumCulled===!1&&(C.frustumCulled=!1),this.renderOrder!==0&&(C.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(C.userData=this.userData),C.layers=this.layers.mask,C.matrix=this.matrix.toArray(),C.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(C.matrixAutoUpdate=!1),this.isInstancedMesh&&(C.type="InstancedMesh",C.count=this.count,C.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(C.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(C.type="BatchedMesh",C.perObjectFrustumCulled=this.perObjectFrustumCulled,C.sortObjects=this.sortObjects,C.drawRanges=this._drawRanges,C.reservedRanges=this._reservedRanges,C.visibility=this._visibility,C.active=this._active,C.bounds=this._bounds.map(i=>({boxInitialized:i.boxInitialized,boxMin:i.box.min.toArray(),boxMax:i.box.max.toArray(),sphereInitialized:i.sphereInitialized,sphereRadius:i.sphere.radius,sphereCenter:i.sphere.center.toArray()})),C.maxInstanceCount=this._maxInstanceCount,C.maxVertexCount=this._maxVertexCount,C.maxIndexCount=this._maxIndexCount,C.geometryInitialized=this._geometryInitialized,C.geometryCount=this._geometryCount,C.matricesTexture=this._matricesTexture.toJSON(A),this._colorsTexture!==null&&(C.colorsTexture=this._colorsTexture.toJSON(A)),this.boundingSphere!==null&&(C.boundingSphere={center:C.boundingSphere.center.toArray(),radius:C.boundingSphere.radius}),this.boundingBox!==null&&(C.boundingBox={min:C.boundingBox.min.toArray(),max:C.boundingBox.max.toArray()}));function Q(i,o){return i[o.uuid]===void 0&&(i[o.uuid]=o.toJSON(A)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?C.background=this.background.toJSON():this.background.isTexture&&(C.background=this.background.toJSON(A).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(C.environment=this.environment.toJSON(A).uuid);else if(this.isMesh||this.isLine||this.isPoints){C.geometry=Q(A.geometries,this.geometry);const i=this.geometry.parameters;if(i!==void 0&&i.shapes!==void 0){const o=i.shapes;if(Array.isArray(o))for(let e=0,t=o.length;e<t;e++){const a=o[e];Q(A.shapes,a)}else Q(A.shapes,o)}}if(this.isSkinnedMesh&&(C.bindMode=this.bindMode,C.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(Q(A.skeletons,this.skeleton),C.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const i=[];for(let o=0,e=this.material.length;o<e;o++)i.push(Q(A.materials,this.material[o]));C.material=i}else C.material=Q(A.materials,this.material);if(this.children.length>0){C.children=[];for(let i=0;i<this.children.length;i++)C.children.push(this.children[i].toJSON(A).object)}if(this.animations.length>0){C.animations=[];for(let i=0;i<this.animations.length;i++){const o=this.animations[i];C.animations.push(Q(A.animations,o))}}if(I){const i=E(A.geometries),o=E(A.materials),e=E(A.textures),t=E(A.images),a=E(A.shapes),s=E(A.skeletons),h=E(A.animations),n=E(A.nodes);i.length>0&&(g.geometries=i),o.length>0&&(g.materials=o),e.length>0&&(g.textures=e),t.length>0&&(g.images=t),a.length>0&&(g.shapes=a),s.length>0&&(g.skeletons=s),h.length>0&&(g.animations=h),n.length>0&&(g.nodes=n)}return g.object=C,g;function E(i){const o=[];for(const e in i){const t=i[e];delete t.metadata,o.push(t)}return o}}clone(A){return new this.constructor().copy(this,A)}copy(A,I=!0){if(this.name=A.name,this.up.copy(A.up),this.position.copy(A.position),this.rotation.order=A.rotation.order,this.quaternion.copy(A.quaternion),this.scale.copy(A.scale),this.matrix.copy(A.matrix),this.matrixWorld.copy(A.matrixWorld),this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrixWorldAutoUpdate=A.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=A.matrixWorldNeedsUpdate,this.layers.mask=A.layers.mask,this.visible=A.visible,this.castShadow=A.castShadow,this.receiveShadow=A.receiveShadow,this.frustumCulled=A.frustumCulled,this.renderOrder=A.renderOrder,this.animations=A.animations.slice(),this.userData=JSON.parse(JSON.stringify(A.userData)),I===!0)for(let g=0;g<A.children.length;g++){const C=A.children[g];this.add(C.clone())}return this}}oI.DEFAULT_UP=new L(0,1,0),oI.DEFAULT_MATRIX_AUTO_UPDATE=!0,oI.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wg=new L,Zg=new L,xi=new L,Wg=new L,oB=new L,eB=new L,it=new L,bi=new L,Oi=new L,vi=new L,_i=new $A,Zi=new $A,Wi=new $A;class cg{constructor(A=new L,I=new L,g=new L){this.a=A,this.b=I,this.c=g}static getNormal(A,I,g,C){C.subVectors(g,I),wg.subVectors(A,I),C.cross(wg);const Q=C.lengthSq();return Q>0?C.multiplyScalar(1/Math.sqrt(Q)):C.set(0,0,0)}static getBarycoord(A,I,g,C,Q){wg.subVectors(C,I),Zg.subVectors(g,I),xi.subVectors(A,I);const E=wg.dot(wg),i=wg.dot(Zg),o=wg.dot(xi),e=Zg.dot(Zg),t=Zg.dot(xi),a=E*e-i*i;if(a===0)return Q.set(0,0,0),null;const s=1/a,h=(e*o-i*t)*s,n=(E*t-i*o)*s;return Q.set(1-h-n,n,h)}static containsPoint(A,I,g,C){return this.getBarycoord(A,I,g,C,Wg)===null?!1:Wg.x>=0&&Wg.y>=0&&Wg.x+Wg.y<=1}static getInterpolation(A,I,g,C,Q,E,i,o){return this.getBarycoord(A,I,g,C,Wg)===null?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(Q,Wg.x),o.addScaledVector(E,Wg.y),o.addScaledVector(i,Wg.z),o)}static getInterpolatedAttribute(A,I,g,C,Q,E){return _i.setScalar(0),Zi.setScalar(0),Wi.setScalar(0),_i.fromBufferAttribute(A,I),Zi.fromBufferAttribute(A,g),Wi.fromBufferAttribute(A,C),E.setScalar(0),E.addScaledVector(_i,Q.x),E.addScaledVector(Zi,Q.y),E.addScaledVector(Wi,Q.z),E}static isFrontFacing(A,I,g,C){return wg.subVectors(g,I),Zg.subVectors(A,I),wg.cross(Zg).dot(C)<0}set(A,I,g){return this.a.copy(A),this.b.copy(I),this.c.copy(g),this}setFromPointsAndIndices(A,I,g,C){return this.a.copy(A[I]),this.b.copy(A[g]),this.c.copy(A[C]),this}setFromAttributeAndIndices(A,I,g,C){return this.a.fromBufferAttribute(A,I),this.b.fromBufferAttribute(A,g),this.c.fromBufferAttribute(A,C),this}clone(){return new this.constructor().copy(this)}copy(A){return this.a.copy(A.a),this.b.copy(A.b),this.c.copy(A.c),this}getArea(){return wg.subVectors(this.c,this.b),Zg.subVectors(this.a,this.b),wg.cross(Zg).length()*.5}getMidpoint(A){return A.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(A){return cg.getNormal(this.a,this.b,this.c,A)}getPlane(A){return A.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(A,I){return cg.getBarycoord(A,this.a,this.b,this.c,I)}getInterpolation(A,I,g,C,Q){return cg.getInterpolation(A,this.a,this.b,this.c,I,g,C,Q)}containsPoint(A){return cg.containsPoint(A,this.a,this.b,this.c)}isFrontFacing(A){return cg.isFrontFacing(this.a,this.b,this.c,A)}intersectsBox(A){return A.intersectsTriangle(this)}closestPointToPoint(A,I){const g=this.a,C=this.b,Q=this.c;let E,i;oB.subVectors(C,g),eB.subVectors(Q,g),bi.subVectors(A,g);const o=oB.dot(bi),e=eB.dot(bi);if(o<=0&&e<=0)return I.copy(g);Oi.subVectors(A,C);const t=oB.dot(Oi),a=eB.dot(Oi);if(t>=0&&a<=t)return I.copy(C);const s=o*a-t*e;if(s<=0&&o>=0&&t<=0)return E=o/(o-t),I.copy(g).addScaledVector(oB,E);vi.subVectors(A,Q);const h=oB.dot(vi),n=eB.dot(vi);if(n>=0&&h<=n)return I.copy(Q);const w=h*e-o*n;if(w<=0&&e>=0&&n<=0)return i=e/(e-n),I.copy(g).addScaledVector(eB,i);const r=t*n-h*a;if(r<=0&&a-t>=0&&h-n>=0)return it.subVectors(Q,C),i=(a-t)/(a-t+(h-n)),I.copy(C).addScaledVector(it,i);const S=1/(r+w+s);return E=w*S,i=s*S,I.copy(g).addScaledVector(oB,E).addScaledVector(eB,i)}equals(A){return A.a.equals(this.a)&&A.b.equals(this.b)&&A.c.equals(this.c)}}const ot={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},tC={h:0,s:0,l:0},OQ={h:0,s:0,l:0};function Pi(B,A,I){return I<0&&(I+=1),I>1&&(I-=1),I<1/6?B+(A-B)*6*I:I<1/2?A:I<2/3?B+(A-B)*6*(2/3-I):B}class MA{constructor(A,I,g){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(A,I,g)}set(A,I,g){if(I===void 0&&g===void 0){const C=A;C&&C.isColor?this.copy(C):typeof C=="number"?this.setHex(C):typeof C=="string"&&this.setStyle(C)}else this.setRGB(A,I,g);return this}setScalar(A){return this.r=A,this.g=A,this.b=A,this}setHex(A,I=uI){return A=Math.floor(A),this.r=(A>>16&255)/255,this.g=(A>>8&255)/255,this.b=(A&255)/255,jA.toWorkingColorSpace(this,I),this}setRGB(A,I,g,C=jA.workingColorSpace){return this.r=A,this.g=I,this.b=g,jA.toWorkingColorSpace(this,C),this}setHSL(A,I,g,C=jA.workingColorSpace){if(A=Ri(A,1),I=TI(I,0,1),g=TI(g,0,1),I===0)this.r=this.g=this.b=g;else{const Q=g<=.5?g*(1+I):g+I-g*I,E=2*g-Q;this.r=Pi(E,Q,A+1/3),this.g=Pi(E,Q,A),this.b=Pi(E,Q,A-1/3)}return jA.toWorkingColorSpace(this,C),this}setStyle(A,I=uI){function g(Q){Q!==void 0&&parseFloat(Q)<1&&console.warn("THREE.Color: Alpha component of "+A+" will be ignored.")}let C;if(C=/^(\w+)\(([^\)]*)\)/.exec(A)){let Q;const E=C[1],i=C[2];switch(E){case"rgb":case"rgba":if(Q=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return g(Q[4]),this.setRGB(Math.min(255,parseInt(Q[1],10))/255,Math.min(255,parseInt(Q[2],10))/255,Math.min(255,parseInt(Q[3],10))/255,I);if(Q=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return g(Q[4]),this.setRGB(Math.min(100,parseInt(Q[1],10))/100,Math.min(100,parseInt(Q[2],10))/100,Math.min(100,parseInt(Q[3],10))/100,I);break;case"hsl":case"hsla":if(Q=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return g(Q[4]),this.setHSL(parseFloat(Q[1])/360,parseFloat(Q[2])/100,parseFloat(Q[3])/100,I);break;default:console.warn("THREE.Color: Unknown color model "+A)}}else if(C=/^\#([A-Fa-f\d]+)$/.exec(A)){const Q=C[1],E=Q.length;if(E===3)return this.setRGB(parseInt(Q.charAt(0),16)/15,parseInt(Q.charAt(1),16)/15,parseInt(Q.charAt(2),16)/15,I);if(E===6)return this.setHex(parseInt(Q,16),I);console.warn("THREE.Color: Invalid hex color "+A)}else if(A&&A.length>0)return this.setColorName(A,I);return this}setColorName(A,I=uI){const g=ot[A.toLowerCase()];return g!==void 0?this.setHex(g,I):console.warn("THREE.Color: Unknown color "+A),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(A){return this.r=A.r,this.g=A.g,this.b=A.b,this}copySRGBToLinear(A){return this.r=AB(A.r),this.g=AB(A.g),this.b=AB(A.b),this}copyLinearToSRGB(A){return this.r=di(A.r),this.g=di(A.g),this.b=di(A.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(A=uI){return jA.fromWorkingColorSpace(vI.copy(this),A),Math.round(TI(vI.r*255,0,255))*65536+Math.round(TI(vI.g*255,0,255))*256+Math.round(TI(vI.b*255,0,255))}getHexString(A=uI){return("000000"+this.getHex(A).toString(16)).slice(-6)}getHSL(A,I=jA.workingColorSpace){jA.fromWorkingColorSpace(vI.copy(this),I);const g=vI.r,C=vI.g,Q=vI.b,E=Math.max(g,C,Q),i=Math.min(g,C,Q);let o,e;const t=(i+E)/2;if(i===E)o=0,e=0;else{const a=E-i;switch(e=t<=.5?a/(E+i):a/(2-E-i),E){case g:o=(C-Q)/a+(C<Q?6:0);break;case C:o=(Q-g)/a+2;break;case Q:o=(g-C)/a+4;break}o/=6}return A.h=o,A.s=e,A.l=t,A}getRGB(A,I=jA.workingColorSpace){return jA.fromWorkingColorSpace(vI.copy(this),I),A.r=vI.r,A.g=vI.g,A.b=vI.b,A}getStyle(A=uI){jA.fromWorkingColorSpace(vI.copy(this),A);const I=vI.r,g=vI.g,C=vI.b;return A!==uI?`color(${A} ${I.toFixed(3)} ${g.toFixed(3)} ${C.toFixed(3)})`:`rgb(${Math.round(I*255)},${Math.round(g*255)},${Math.round(C*255)})`}offsetHSL(A,I,g){return this.getHSL(tC),this.setHSL(tC.h+A,tC.s+I,tC.l+g)}add(A){return this.r+=A.r,this.g+=A.g,this.b+=A.b,this}addColors(A,I){return this.r=A.r+I.r,this.g=A.g+I.g,this.b=A.b+I.b,this}addScalar(A){return this.r+=A,this.g+=A,this.b+=A,this}sub(A){return this.r=Math.max(0,this.r-A.r),this.g=Math.max(0,this.g-A.g),this.b=Math.max(0,this.b-A.b),this}multiply(A){return this.r*=A.r,this.g*=A.g,this.b*=A.b,this}multiplyScalar(A){return this.r*=A,this.g*=A,this.b*=A,this}lerp(A,I){return this.r+=(A.r-this.r)*I,this.g+=(A.g-this.g)*I,this.b+=(A.b-this.b)*I,this}lerpColors(A,I,g){return this.r=A.r+(I.r-A.r)*g,this.g=A.g+(I.g-A.g)*g,this.b=A.b+(I.b-A.b)*g,this}lerpHSL(A,I){this.getHSL(tC),A.getHSL(OQ);const g=HB(tC.h,OQ.h,I),C=HB(tC.s,OQ.s,I),Q=HB(tC.l,OQ.l,I);return this.setHSL(g,C,Q),this}setFromVector3(A){return this.r=A.x,this.g=A.y,this.b=A.z,this}applyMatrix3(A){const I=this.r,g=this.g,C=this.b,Q=A.elements;return this.r=Q[0]*I+Q[3]*g+Q[6]*C,this.g=Q[1]*I+Q[4]*g+Q[7]*C,this.b=Q[2]*I+Q[5]*g+Q[8]*C,this}equals(A){return A.r===this.r&&A.g===this.g&&A.b===this.b}fromArray(A,I=0){return this.r=A[I],this.g=A[I+1],this.b=A[I+2],this}toArray(A=[],I=0){return A[I]=this.r,A[I+1]=this.g,A[I+2]=this.b,A}fromBufferAttribute(A,I){return this.r=A.getX(I),this.g=A.getY(I),this.b=A.getZ(I),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vI=new MA;MA.NAMES=ot;let Uh=0;class Rg extends yC{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Uh++}),this.uuid=hg(),this.name="",this.type="Material",this.blending=bC,this.side=mg,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uE,this.blendDst=HE,this.blendEquation=GC,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new MA(0,0,0),this.blendAlpha=0,this.depthFunc=OC,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=be,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zC,this.stencilZFail=zC,this.stencilZPass=zC,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(A){this._alphaTest>0!=A>0&&this.version++,this._alphaTest=A}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(A){if(A!==void 0)for(const I in A){const g=A[I];if(g===void 0){console.warn(`THREE.Material: parameter '${I}' has value of undefined.`);continue}const C=this[I];if(C===void 0){console.warn(`THREE.Material: '${I}' is not a property of THREE.${this.type}.`);continue}C&&C.isColor?C.set(g):C&&C.isVector3&&g&&g.isVector3?C.copy(g):this[I]=g}}toJSON(A){const I=A===void 0||typeof A=="string";I&&(A={textures:{},images:{}});const g={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};g.uuid=this.uuid,g.type=this.type,this.name!==""&&(g.name=this.name),this.color&&this.color.isColor&&(g.color=this.color.getHex()),this.roughness!==void 0&&(g.roughness=this.roughness),this.metalness!==void 0&&(g.metalness=this.metalness),this.sheen!==void 0&&(g.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(g.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(g.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(g.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(g.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(g.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(g.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(g.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(g.shininess=this.shininess),this.clearcoat!==void 0&&(g.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(g.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(g.clearcoatMap=this.clearcoatMap.toJSON(A).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(g.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(A).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(g.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(A).uuid,g.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(g.dispersion=this.dispersion),this.iridescence!==void 0&&(g.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(g.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(g.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(g.iridescenceMap=this.iridescenceMap.toJSON(A).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(g.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(A).uuid),this.anisotropy!==void 0&&(g.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(g.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(g.anisotropyMap=this.anisotropyMap.toJSON(A).uuid),this.map&&this.map.isTexture&&(g.map=this.map.toJSON(A).uuid),this.matcap&&this.matcap.isTexture&&(g.matcap=this.matcap.toJSON(A).uuid),this.alphaMap&&this.alphaMap.isTexture&&(g.alphaMap=this.alphaMap.toJSON(A).uuid),this.lightMap&&this.lightMap.isTexture&&(g.lightMap=this.lightMap.toJSON(A).uuid,g.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(g.aoMap=this.aoMap.toJSON(A).uuid,g.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(g.bumpMap=this.bumpMap.toJSON(A).uuid,g.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(g.normalMap=this.normalMap.toJSON(A).uuid,g.normalMapType=this.normalMapType,g.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(g.displacementMap=this.displacementMap.toJSON(A).uuid,g.displacementScale=this.displacementScale,g.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(g.roughnessMap=this.roughnessMap.toJSON(A).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(g.metalnessMap=this.metalnessMap.toJSON(A).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(g.emissiveMap=this.emissiveMap.toJSON(A).uuid),this.specularMap&&this.specularMap.isTexture&&(g.specularMap=this.specularMap.toJSON(A).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(g.specularIntensityMap=this.specularIntensityMap.toJSON(A).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(g.specularColorMap=this.specularColorMap.toJSON(A).uuid),this.envMap&&this.envMap.isTexture&&(g.envMap=this.envMap.toJSON(A).uuid,this.combine!==void 0&&(g.combine=this.combine)),this.envMapRotation!==void 0&&(g.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(g.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(g.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(g.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(g.gradientMap=this.gradientMap.toJSON(A).uuid),this.transmission!==void 0&&(g.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(g.transmissionMap=this.transmissionMap.toJSON(A).uuid),this.thickness!==void 0&&(g.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(g.thicknessMap=this.thicknessMap.toJSON(A).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(g.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(g.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(g.size=this.size),this.shadowSide!==null&&(g.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(g.sizeAttenuation=this.sizeAttenuation),this.blending!==bC&&(g.blending=this.blending),this.side!==mg&&(g.side=this.side),this.vertexColors===!0&&(g.vertexColors=!0),this.opacity<1&&(g.opacity=this.opacity),this.transparent===!0&&(g.transparent=!0),this.blendSrc!==uE&&(g.blendSrc=this.blendSrc),this.blendDst!==HE&&(g.blendDst=this.blendDst),this.blendEquation!==GC&&(g.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(g.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(g.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(g.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(g.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(g.blendAlpha=this.blendAlpha),this.depthFunc!==OC&&(g.depthFunc=this.depthFunc),this.depthTest===!1&&(g.depthTest=this.depthTest),this.depthWrite===!1&&(g.depthWrite=this.depthWrite),this.colorWrite===!1&&(g.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(g.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==be&&(g.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(g.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(g.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zC&&(g.stencilFail=this.stencilFail),this.stencilZFail!==zC&&(g.stencilZFail=this.stencilZFail),this.stencilZPass!==zC&&(g.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(g.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(g.rotation=this.rotation),this.polygonOffset===!0&&(g.polygonOffset=!0),this.polygonOffsetFactor!==0&&(g.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(g.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(g.linewidth=this.linewidth),this.dashSize!==void 0&&(g.dashSize=this.dashSize),this.gapSize!==void 0&&(g.gapSize=this.gapSize),this.scale!==void 0&&(g.scale=this.scale),this.dithering===!0&&(g.dithering=!0),this.alphaTest>0&&(g.alphaTest=this.alphaTest),this.alphaHash===!0&&(g.alphaHash=!0),this.alphaToCoverage===!0&&(g.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(g.premultipliedAlpha=!0),this.forceSinglePass===!0&&(g.forceSinglePass=!0),this.wireframe===!0&&(g.wireframe=!0),this.wireframeLinewidth>1&&(g.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(g.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(g.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(g.flatShading=!0),this.visible===!1&&(g.visible=!1),this.toneMapped===!1&&(g.toneMapped=!1),this.fog===!1&&(g.fog=!1),Object.keys(this.userData).length>0&&(g.userData=this.userData);function C(Q){const E=[];for(const i in Q){const o=Q[i];delete o.metadata,E.push(o)}return E}if(I){const Q=C(A.textures),E=C(A.images);Q.length>0&&(g.textures=Q),E.length>0&&(g.images=E)}return g}clone(){return new this.constructor().copy(this)}copy(A){this.name=A.name,this.blending=A.blending,this.side=A.side,this.vertexColors=A.vertexColors,this.opacity=A.opacity,this.transparent=A.transparent,this.blendSrc=A.blendSrc,this.blendDst=A.blendDst,this.blendEquation=A.blendEquation,this.blendSrcAlpha=A.blendSrcAlpha,this.blendDstAlpha=A.blendDstAlpha,this.blendEquationAlpha=A.blendEquationAlpha,this.blendColor.copy(A.blendColor),this.blendAlpha=A.blendAlpha,this.depthFunc=A.depthFunc,this.depthTest=A.depthTest,this.depthWrite=A.depthWrite,this.stencilWriteMask=A.stencilWriteMask,this.stencilFunc=A.stencilFunc,this.stencilRef=A.stencilRef,this.stencilFuncMask=A.stencilFuncMask,this.stencilFail=A.stencilFail,this.stencilZFail=A.stencilZFail,this.stencilZPass=A.stencilZPass,this.stencilWrite=A.stencilWrite;const I=A.clippingPlanes;let g=null;if(I!==null){const C=I.length;g=new Array(C);for(let Q=0;Q!==C;++Q)g[Q]=I[Q].clone()}return this.clippingPlanes=g,this.clipIntersection=A.clipIntersection,this.clipShadows=A.clipShadows,this.shadowSide=A.shadowSide,this.colorWrite=A.colorWrite,this.precision=A.precision,this.polygonOffset=A.polygonOffset,this.polygonOffsetFactor=A.polygonOffsetFactor,this.polygonOffsetUnits=A.polygonOffsetUnits,this.dithering=A.dithering,this.alphaTest=A.alphaTest,this.alphaHash=A.alphaHash,this.alphaToCoverage=A.alphaToCoverage,this.premultipliedAlpha=A.premultipliedAlpha,this.forceSinglePass=A.forceSinglePass,this.visible=A.visible,this.toneMapped=A.toneMapped,this.userData=JSON.parse(JSON.stringify(A.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(A){A===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class KC extends Rg{constructor(A){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new MA(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new eg,this.combine=Ke,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.map=A.map,this.lightMap=A.lightMap,this.lightMapIntensity=A.lightMapIntensity,this.aoMap=A.aoMap,this.aoMapIntensity=A.aoMapIntensity,this.specularMap=A.specularMap,this.alphaMap=A.alphaMap,this.envMap=A.envMap,this.envMapRotation.copy(A.envMapRotation),this.combine=A.combine,this.reflectivity=A.reflectivity,this.refractionRatio=A.refractionRatio,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.wireframeLinecap=A.wireframeLinecap,this.wireframeLinejoin=A.wireframeLinejoin,this.fog=A.fog,this}}const Pg=Mh();function Mh(){const B=new ArrayBuffer(4),A=new Float32Array(B),I=new Uint32Array(B),g=new Uint32Array(512),C=new Uint32Array(512);for(let o=0;o<256;++o){const e=o-127;e<-27?(g[o]=0,g[o|256]=32768,C[o]=24,C[o|256]=24):e<-14?(g[o]=1024>>-e-14,g[o|256]=1024>>-e-14|32768,C[o]=-e-1,C[o|256]=-e-1):e<=15?(g[o]=e+15<<10,g[o|256]=e+15<<10|32768,C[o]=13,C[o|256]=13):e<128?(g[o]=31744,g[o|256]=64512,C[o]=24,C[o|256]=24):(g[o]=31744,g[o|256]=64512,C[o]=13,C[o|256]=13)}const Q=new Uint32Array(2048),E=new Uint32Array(64),i=new Uint32Array(64);for(let o=1;o<1024;++o){let e=o<<13,t=0;for(;!(e&8388608);)e<<=1,t-=8388608;e&=-8388609,t+=947912704,Q[o]=e|t}for(let o=1024;o<2048;++o)Q[o]=939524096+(o-1024<<13);for(let o=1;o<31;++o)E[o]=o<<23;E[31]=1199570944,E[32]=2147483648;for(let o=33;o<63;++o)E[o]=2147483648+(o-32<<23);E[63]=3347054592;for(let o=1;o<64;++o)o!==32&&(i[o]=1024);return{floatView:A,uint32View:I,baseTable:g,shiftTable:C,mantissaTable:Q,exponentTable:E,offsetTable:i}}function Nh(B){Math.abs(B)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),B=TI(B,-65504,65504),Pg.floatView[0]=B;const A=Pg.uint32View[0],I=A>>23&511;return Pg.baseTable[I]+((A&8388607)>>Pg.shiftTable[I])}function Kh(B){const A=B>>10;return Pg.uint32View[0]=Pg.mantissaTable[Pg.offsetTable[A]+(B&1023)]+Pg.exponentTable[A],Pg.floatView[0]}const vQ={toHalfFloat:Nh,fromHalfFloat:Kh},MI=new L,_Q=new vA;class RI{constructor(A,I,g=!1){if(Array.isArray(A))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=A,this.itemSize=I,this.count=A!==void 0?A.length/I:0,this.normalized=g,this.usage=Fi,this.updateRanges=[],this.gpuType=XI,this.version=0}onUploadCallback(){}set needsUpdate(A){A===!0&&this.version++}setUsage(A){return this.usage=A,this}addUpdateRange(A,I){this.updateRanges.push({start:A,count:I})}clearUpdateRanges(){this.updateRanges.length=0}copy(A){return this.name=A.name,this.array=new A.array.constructor(A.array),this.itemSize=A.itemSize,this.count=A.count,this.normalized=A.normalized,this.usage=A.usage,this.gpuType=A.gpuType,this}copyAt(A,I,g){A*=this.itemSize,g*=I.itemSize;for(let C=0,Q=this.itemSize;C<Q;C++)this.array[A+C]=I.array[g+C];return this}copyArray(A){return this.array.set(A),this}applyMatrix3(A){if(this.itemSize===2)for(let I=0,g=this.count;I<g;I++)_Q.fromBufferAttribute(this,I),_Q.applyMatrix3(A),this.setXY(I,_Q.x,_Q.y);else if(this.itemSize===3)for(let I=0,g=this.count;I<g;I++)MI.fromBufferAttribute(this,I),MI.applyMatrix3(A),this.setXYZ(I,MI.x,MI.y,MI.z);return this}applyMatrix4(A){for(let I=0,g=this.count;I<g;I++)MI.fromBufferAttribute(this,I),MI.applyMatrix4(A),this.setXYZ(I,MI.x,MI.y,MI.z);return this}applyNormalMatrix(A){for(let I=0,g=this.count;I<g;I++)MI.fromBufferAttribute(this,I),MI.applyNormalMatrix(A),this.setXYZ(I,MI.x,MI.y,MI.z);return this}transformDirection(A){for(let I=0,g=this.count;I<g;I++)MI.fromBufferAttribute(this,I),MI.transformDirection(A),this.setXYZ(I,MI.x,MI.y,MI.z);return this}set(A,I=0){return this.array.set(A,I),this}getComponent(A,I){let g=this.array[A*this.itemSize+I];return this.normalized&&(g=rg(g,this.array)),g}setComponent(A,I,g){return this.normalized&&(g=BI(g,this.array)),this.array[A*this.itemSize+I]=g,this}getX(A){let I=this.array[A*this.itemSize];return this.normalized&&(I=rg(I,this.array)),I}setX(A,I){return this.normalized&&(I=BI(I,this.array)),this.array[A*this.itemSize]=I,this}getY(A){let I=this.array[A*this.itemSize+1];return this.normalized&&(I=rg(I,this.array)),I}setY(A,I){return this.normalized&&(I=BI(I,this.array)),this.array[A*this.itemSize+1]=I,this}getZ(A){let I=this.array[A*this.itemSize+2];return this.normalized&&(I=rg(I,this.array)),I}setZ(A,I){return this.normalized&&(I=BI(I,this.array)),this.array[A*this.itemSize+2]=I,this}getW(A){let I=this.array[A*this.itemSize+3];return this.normalized&&(I=rg(I,this.array)),I}setW(A,I){return this.normalized&&(I=BI(I,this.array)),this.array[A*this.itemSize+3]=I,this}setXY(A,I,g){return A*=this.itemSize,this.normalized&&(I=BI(I,this.array),g=BI(g,this.array)),this.array[A+0]=I,this.array[A+1]=g,this}setXYZ(A,I,g,C){return A*=this.itemSize,this.normalized&&(I=BI(I,this.array),g=BI(g,this.array),C=BI(C,this.array)),this.array[A+0]=I,this.array[A+1]=g,this.array[A+2]=C,this}setXYZW(A,I,g,C,Q){return A*=this.itemSize,this.normalized&&(I=BI(I,this.array),g=BI(g,this.array),C=BI(C,this.array),Q=BI(Q,this.array)),this.array[A+0]=I,this.array[A+1]=g,this.array[A+2]=C,this.array[A+3]=Q,this}onUpload(A){return this.onUploadCallback=A,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const A={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(A.name=this.name),this.usage!==Fi&&(A.usage=this.usage),A}}class et extends RI{constructor(A,I,g){super(new Uint16Array(A),I,g)}}class tt extends RI{constructor(A,I,g){super(new Uint32Array(A),I,g)}}class lg extends RI{constructor(A,I,g){super(new Float32Array(A),I,g)}}let Jh=0;const tg=new uA,ji=new oI,tB=new L,Cg=new bg,OB=new bg,mI=new L;class Bg extends yC{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jh++}),this.uuid=hg(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(A){return Array.isArray(A)?this.index=new(Ze(A)?tt:et)(A,1):this.index=A,this}getAttribute(A){return this.attributes[A]}setAttribute(A,I){return this.attributes[A]=I,this}deleteAttribute(A){return delete this.attributes[A],this}hasAttribute(A){return this.attributes[A]!==void 0}addGroup(A,I,g=0){this.groups.push({start:A,count:I,materialIndex:g})}clearGroups(){this.groups=[]}setDrawRange(A,I){this.drawRange.start=A,this.drawRange.count=I}applyMatrix4(A){const I=this.attributes.position;I!==void 0&&(I.applyMatrix4(A),I.needsUpdate=!0);const g=this.attributes.normal;if(g!==void 0){const Q=new fA().getNormalMatrix(A);g.applyNormalMatrix(Q),g.needsUpdate=!0}const C=this.attributes.tangent;return C!==void 0&&(C.transformDirection(A),C.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(A){return tg.makeRotationFromQuaternion(A),this.applyMatrix4(tg),this}rotateX(A){return tg.makeRotationX(A),this.applyMatrix4(tg),this}rotateY(A){return tg.makeRotationY(A),this.applyMatrix4(tg),this}rotateZ(A){return tg.makeRotationZ(A),this.applyMatrix4(tg),this}translate(A,I,g){return tg.makeTranslation(A,I,g),this.applyMatrix4(tg),this}scale(A,I,g){return tg.makeScale(A,I,g),this.applyMatrix4(tg),this}lookAt(A){return ji.lookAt(A),ji.updateMatrix(),this.applyMatrix4(ji.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(tB).negate(),this.translate(tB.x,tB.y,tB.z),this}setFromPoints(A){const I=[];for(let g=0,C=A.length;g<C;g++){const Q=A[g];I.push(Q.x,Q.y,Q.z||0)}return this.setAttribute("position",new lg(I,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bg);const A=this.attributes.position,I=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(A!==void 0){if(this.boundingBox.setFromBufferAttribute(A),I)for(let g=0,C=I.length;g<C;g++){const Q=I[g];Cg.setFromBufferAttribute(Q),this.morphTargetsRelative?(mI.addVectors(this.boundingBox.min,Cg.min),this.boundingBox.expandByPoint(mI),mI.addVectors(this.boundingBox.max,Cg.max),this.boundingBox.expandByPoint(mI)):(this.boundingBox.expandByPoint(Cg.min),this.boundingBox.expandByPoint(Cg.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fg);const A=this.attributes.position,I=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(A){const g=this.boundingSphere.center;if(Cg.setFromBufferAttribute(A),I)for(let Q=0,E=I.length;Q<E;Q++){const i=I[Q];OB.setFromBufferAttribute(i),this.morphTargetsRelative?(mI.addVectors(Cg.min,OB.min),Cg.expandByPoint(mI),mI.addVectors(Cg.max,OB.max),Cg.expandByPoint(mI)):(Cg.expandByPoint(OB.min),Cg.expandByPoint(OB.max))}Cg.getCenter(g);let C=0;for(let Q=0,E=A.count;Q<E;Q++)mI.fromBufferAttribute(A,Q),C=Math.max(C,g.distanceToSquared(mI));if(I)for(let Q=0,E=I.length;Q<E;Q++){const i=I[Q],o=this.morphTargetsRelative;for(let e=0,t=i.count;e<t;e++)mI.fromBufferAttribute(i,e),o&&(tB.fromBufferAttribute(A,e),mI.add(tB)),C=Math.max(C,g.distanceToSquared(mI))}this.boundingSphere.radius=Math.sqrt(C),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const A=this.index,I=this.attributes;if(A===null||I.position===void 0||I.normal===void 0||I.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const g=I.position,C=I.normal,Q=I.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new RI(new Float32Array(4*g.count),4));const E=this.getAttribute("tangent"),i=[],o=[];for(let H=0;H<g.count;H++)i[H]=new L,o[H]=new L;const e=new L,t=new L,a=new L,s=new vA,h=new vA,n=new vA,w=new L,r=new L;function S(H,P,c){e.fromBufferAttribute(g,H),t.fromBufferAttribute(g,P),a.fromBufferAttribute(g,c),s.fromBufferAttribute(Q,H),h.fromBufferAttribute(Q,P),n.fromBufferAttribute(Q,c),t.sub(e),a.sub(e),h.sub(s),n.sub(s);const U=1/(h.x*n.y-n.x*h.y);isFinite(U)&&(w.copy(t).multiplyScalar(n.y).addScaledVector(a,-h.y).multiplyScalar(U),r.copy(a).multiplyScalar(h.x).addScaledVector(t,-n.x).multiplyScalar(U),i[H].add(w),i[P].add(w),i[c].add(w),o[H].add(r),o[P].add(r),o[c].add(r))}let y=this.groups;y.length===0&&(y=[{start:0,count:A.count}]);for(let H=0,P=y.length;H<P;++H){const c=y[H],U=c.start,O=c.count;for(let v=U,W=U+O;v<W;v+=3)S(A.getX(v+0),A.getX(v+1),A.getX(v+2))}const G=new L,M=new L,m=new L,F=new L;function N(H){m.fromBufferAttribute(C,H),F.copy(m);const P=i[H];G.copy(P),G.sub(m.multiplyScalar(m.dot(P))).normalize(),M.crossVectors(F,P);const c=M.dot(o[H])<0?-1:1;E.setXYZW(H,G.x,G.y,G.z,c)}for(let H=0,P=y.length;H<P;++H){const c=y[H],U=c.start,O=c.count;for(let v=U,W=U+O;v<W;v+=3)N(A.getX(v+0)),N(A.getX(v+1)),N(A.getX(v+2))}}computeVertexNormals(){const A=this.index,I=this.getAttribute("position");if(I!==void 0){let g=this.getAttribute("normal");if(g===void 0)g=new RI(new Float32Array(I.count*3),3),this.setAttribute("normal",g);else for(let s=0,h=g.count;s<h;s++)g.setXYZ(s,0,0,0);const C=new L,Q=new L,E=new L,i=new L,o=new L,e=new L,t=new L,a=new L;if(A)for(let s=0,h=A.count;s<h;s+=3){const n=A.getX(s+0),w=A.getX(s+1),r=A.getX(s+2);C.fromBufferAttribute(I,n),Q.fromBufferAttribute(I,w),E.fromBufferAttribute(I,r),t.subVectors(E,Q),a.subVectors(C,Q),t.cross(a),i.fromBufferAttribute(g,n),o.fromBufferAttribute(g,w),e.fromBufferAttribute(g,r),i.add(t),o.add(t),e.add(t),g.setXYZ(n,i.x,i.y,i.z),g.setXYZ(w,o.x,o.y,o.z),g.setXYZ(r,e.x,e.y,e.z)}else for(let s=0,h=I.count;s<h;s+=3)C.fromBufferAttribute(I,s+0),Q.fromBufferAttribute(I,s+1),E.fromBufferAttribute(I,s+2),t.subVectors(E,Q),a.subVectors(C,Q),t.cross(a),g.setXYZ(s+0,t.x,t.y,t.z),g.setXYZ(s+1,t.x,t.y,t.z),g.setXYZ(s+2,t.x,t.y,t.z);this.normalizeNormals(),g.needsUpdate=!0}}normalizeNormals(){const A=this.attributes.normal;for(let I=0,g=A.count;I<g;I++)mI.fromBufferAttribute(A,I),mI.normalize(),A.setXYZ(I,mI.x,mI.y,mI.z)}toNonIndexed(){function A(i,o){const e=i.array,t=i.itemSize,a=i.normalized,s=new e.constructor(o.length*t);let h=0,n=0;for(let w=0,r=o.length;w<r;w++){i.isInterleavedBufferAttribute?h=o[w]*i.data.stride+i.offset:h=o[w]*t;for(let S=0;S<t;S++)s[n++]=e[h++]}return new RI(s,t,a)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const I=new Bg,g=this.index.array,C=this.attributes;for(const i in C){const o=C[i],e=A(o,g);I.setAttribute(i,e)}const Q=this.morphAttributes;for(const i in Q){const o=[],e=Q[i];for(let t=0,a=e.length;t<a;t++){const s=e[t],h=A(s,g);o.push(h)}I.morphAttributes[i]=o}I.morphTargetsRelative=this.morphTargetsRelative;const E=this.groups;for(let i=0,o=E.length;i<o;i++){const e=E[i];I.addGroup(e.start,e.count,e.materialIndex)}return I}toJSON(){const A={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(A.uuid=this.uuid,A.type=this.type,this.name!==""&&(A.name=this.name),Object.keys(this.userData).length>0&&(A.userData=this.userData),this.parameters!==void 0){const o=this.parameters;for(const e in o)o[e]!==void 0&&(A[e]=o[e]);return A}A.data={attributes:{}};const I=this.index;I!==null&&(A.data.index={type:I.array.constructor.name,array:Array.prototype.slice.call(I.array)});const g=this.attributes;for(const o in g){const e=g[o];A.data.attributes[o]=e.toJSON(A.data)}const C={};let Q=!1;for(const o in this.morphAttributes){const e=this.morphAttributes[o],t=[];for(let a=0,s=e.length;a<s;a++){const h=e[a];t.push(h.toJSON(A.data))}t.length>0&&(C[o]=t,Q=!0)}Q&&(A.data.morphAttributes=C,A.data.morphTargetsRelative=this.morphTargetsRelative);const E=this.groups;E.length>0&&(A.data.groups=JSON.parse(JSON.stringify(E)));const i=this.boundingSphere;return i!==null&&(A.data.boundingSphere={center:i.center.toArray(),radius:i.radius}),A}clone(){return new this.constructor().copy(this)}copy(A){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const I={};this.name=A.name;const g=A.index;g!==null&&this.setIndex(g.clone(I));const C=A.attributes;for(const e in C){const t=C[e];this.setAttribute(e,t.clone(I))}const Q=A.morphAttributes;for(const e in Q){const t=[],a=Q[e];for(let s=0,h=a.length;s<h;s++)t.push(a[s].clone(I));this.morphAttributes[e]=t}this.morphTargetsRelative=A.morphTargetsRelative;const E=A.groups;for(let e=0,t=E.length;e<t;e++){const a=E[e];this.addGroup(a.start,a.count,a.materialIndex)}const i=A.boundingBox;i!==null&&(this.boundingBox=i.clone());const o=A.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=A.drawRange.start,this.drawRange.count=A.drawRange.count,this.userData=A.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const at=new uA,JC=new TQ,ZQ=new Fg,st=new L,WQ=new L,PQ=new L,jQ=new L,Vi=new L,VQ=new L,Dt=new L,XQ=new L;class $I extends oI{constructor(A=new Bg,I=new KC){super(),this.isMesh=!0,this.type="Mesh",this.geometry=A,this.material=I,this.updateMorphTargets()}copy(A,I){return super.copy(A,I),A.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=A.morphTargetInfluences.slice()),A.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},A.morphTargetDictionary)),this.material=Array.isArray(A.material)?A.material.slice():A.material,this.geometry=A.geometry,this}updateMorphTargets(){const A=this.geometry.morphAttributes,I=Object.keys(A);if(I.length>0){const g=A[I[0]];if(g!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let C=0,Q=g.length;C<Q;C++){const E=g[C].name||String(C);this.morphTargetInfluences.push(0),this.morphTargetDictionary[E]=C}}}}getVertexPosition(A,I){const g=this.geometry,C=g.attributes.position,Q=g.morphAttributes.position,E=g.morphTargetsRelative;I.fromBufferAttribute(C,A);const i=this.morphTargetInfluences;if(Q&&i){VQ.set(0,0,0);for(let o=0,e=Q.length;o<e;o++){const t=i[o],a=Q[o];t!==0&&(Vi.fromBufferAttribute(a,A),E?VQ.addScaledVector(Vi,t):VQ.addScaledVector(Vi.sub(I),t))}I.add(VQ)}return I}raycast(A,I){const g=this.geometry,C=this.material,Q=this.matrixWorld;C!==void 0&&(g.boundingSphere===null&&g.computeBoundingSphere(),ZQ.copy(g.boundingSphere),ZQ.applyMatrix4(Q),JC.copy(A.ray).recast(A.near),!(ZQ.containsPoint(JC.origin)===!1&&(JC.intersectSphere(ZQ,st)===null||JC.origin.distanceToSquared(st)>(A.far-A.near)**2))&&(at.copy(Q).invert(),JC.copy(A.ray).applyMatrix4(at),!(g.boundingBox!==null&&JC.intersectsBox(g.boundingBox)===!1)&&this._computeIntersections(A,I,JC)))}_computeIntersections(A,I,g){let C;const Q=this.geometry,E=this.material,i=Q.index,o=Q.attributes.position,e=Q.attributes.uv,t=Q.attributes.uv1,a=Q.attributes.normal,s=Q.groups,h=Q.drawRange;if(i!==null)if(Array.isArray(E))for(let n=0,w=s.length;n<w;n++){const r=s[n],S=E[r.materialIndex],y=Math.max(r.start,h.start),G=Math.min(i.count,Math.min(r.start+r.count,h.start+h.count));for(let M=y,m=G;M<m;M+=3){const F=i.getX(M),N=i.getX(M+1),H=i.getX(M+2);C=zQ(this,S,A,g,e,t,a,F,N,H),C&&(C.faceIndex=Math.floor(M/3),C.face.materialIndex=r.materialIndex,I.push(C))}}else{const n=Math.max(0,h.start),w=Math.min(i.count,h.start+h.count);for(let r=n,S=w;r<S;r+=3){const y=i.getX(r),G=i.getX(r+1),M=i.getX(r+2);C=zQ(this,E,A,g,e,t,a,y,G,M),C&&(C.faceIndex=Math.floor(r/3),I.push(C))}}else if(o!==void 0)if(Array.isArray(E))for(let n=0,w=s.length;n<w;n++){const r=s[n],S=E[r.materialIndex],y=Math.max(r.start,h.start),G=Math.min(o.count,Math.min(r.start+r.count,h.start+h.count));for(let M=y,m=G;M<m;M+=3){const F=M,N=M+1,H=M+2;C=zQ(this,S,A,g,e,t,a,F,N,H),C&&(C.faceIndex=Math.floor(M/3),C.face.materialIndex=r.materialIndex,I.push(C))}}else{const n=Math.max(0,h.start),w=Math.min(o.count,h.start+h.count);for(let r=n,S=w;r<S;r+=3){const y=r,G=r+1,M=r+2;C=zQ(this,E,A,g,e,t,a,y,G,M),C&&(C.faceIndex=Math.floor(r/3),I.push(C))}}}}function Fh(B,A,I,g,C,Q,E,i){let o;if(A.side===VI?o=g.intersectTriangle(E,Q,C,!0,i):o=g.intersectTriangle(C,Q,E,A.side===mg,i),o===null)return null;XQ.copy(i),XQ.applyMatrix4(B.matrixWorld);const e=I.ray.origin.distanceTo(XQ);return e<I.near||e>I.far?null:{distance:e,point:XQ.clone(),object:B}}function zQ(B,A,I,g,C,Q,E,i,o,e){B.getVertexPosition(i,WQ),B.getVertexPosition(o,PQ),B.getVertexPosition(e,jQ);const t=Fh(B,A,I,g,WQ,PQ,jQ,Dt);if(t){const a=new L;cg.getBarycoord(Dt,WQ,PQ,jQ,a),C&&(t.uv=cg.getInterpolatedAttribute(C,i,o,e,a,new vA)),Q&&(t.uv1=cg.getInterpolatedAttribute(Q,i,o,e,a,new vA)),E&&(t.normal=cg.getInterpolatedAttribute(E,i,o,e,a,new L),t.normal.dot(g.direction)>0&&t.normal.multiplyScalar(-1));const s={a:i,b:o,c:e,normal:new L,materialIndex:0};cg.getNormal(WQ,PQ,jQ,s.normal),t.face=s,t.barycoord=a}return t}class aB extends Bg{constructor(A=1,I=1,g=1,C=1,Q=1,E=1){super(),this.type="BoxGeometry",this.parameters={width:A,height:I,depth:g,widthSegments:C,heightSegments:Q,depthSegments:E};const i=this;C=Math.floor(C),Q=Math.floor(Q),E=Math.floor(E);const o=[],e=[],t=[],a=[];let s=0,h=0;n("z","y","x",-1,-1,g,I,A,E,Q,0),n("z","y","x",1,-1,g,I,-A,E,Q,1),n("x","z","y",1,1,A,g,I,C,E,2),n("x","z","y",1,-1,A,g,-I,C,E,3),n("x","y","z",1,-1,A,I,g,C,Q,4),n("x","y","z",-1,-1,A,I,-g,C,Q,5),this.setIndex(o),this.setAttribute("position",new lg(e,3)),this.setAttribute("normal",new lg(t,3)),this.setAttribute("uv",new lg(a,2));function n(w,r,S,y,G,M,m,F,N,H,P){const c=M/N,U=m/H,O=M/2,v=m/2,W=F/2,$=N+1,b=H+1;let IA=0,Z=0;const EA=new L;for(let cA=0;cA<b;cA++){const KA=cA*U-v;for(let AI=0;AI<$;AI++){const QI=AI*c-O;EA[w]=QI*y,EA[r]=KA*G,EA[S]=W,e.push(EA.x,EA.y,EA.z),EA[w]=0,EA[r]=0,EA[S]=F>0?1:-1,t.push(EA.x,EA.y,EA.z),a.push(AI/N),a.push(1-cA/H),IA+=1}}for(let cA=0;cA<H;cA++)for(let KA=0;KA<N;KA++){const AI=s+KA+$*cA,QI=s+KA+$*(cA+1),j=s+(KA+1)+$*(cA+1),CA=s+(KA+1)+$*cA;o.push(AI,QI,CA),o.push(QI,j,CA),Z+=6}i.addGroup(h,Z,P),h+=Z,s+=IA}}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new aB(A.width,A.height,A.depth,A.widthSegments,A.heightSegments,A.depthSegments)}}function sB(B){const A={};for(const I in B){A[I]={};for(const g in B[I]){const C=B[I][g];C&&(C.isColor||C.isMatrix3||C.isMatrix4||C.isVector2||C.isVector3||C.isVector4||C.isTexture||C.isQuaternion)?C.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),A[I][g]=null):A[I][g]=C.clone():Array.isArray(C)?A[I][g]=C.slice():A[I][g]=C}}return A}function ZI(B){const A={};for(let I=0;I<B.length;I++){const g=sB(B[I]);for(const C in g)A[C]=g[C]}return A}function Rh(B){const A=[];for(let I=0;I<B.length;I++)A.push(B[I].clone());return A}function ht(B){const A=B.getRenderTarget();return A===null?B.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:jA.workingColorSpace}const ph={clone:sB,merge:ZI};var dh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class aC extends Rg{constructor(A){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dh,this.fragmentShader=qh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,A!==void 0&&this.setValues(A)}copy(A){return super.copy(A),this.fragmentShader=A.fragmentShader,this.vertexShader=A.vertexShader,this.uniforms=sB(A.uniforms),this.uniformsGroups=Rh(A.uniformsGroups),this.defines=Object.assign({},A.defines),this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.fog=A.fog,this.lights=A.lights,this.clipping=A.clipping,this.extensions=Object.assign({},A.extensions),this.glslVersion=A.glslVersion,this}toJSON(A){const I=super.toJSON(A);I.glslVersion=this.glslVersion,I.uniforms={};for(const C in this.uniforms){const Q=this.uniforms[C].value;Q&&Q.isTexture?I.uniforms[C]={type:"t",value:Q.toJSON(A).uuid}:Q&&Q.isColor?I.uniforms[C]={type:"c",value:Q.getHex()}:Q&&Q.isVector2?I.uniforms[C]={type:"v2",value:Q.toArray()}:Q&&Q.isVector3?I.uniforms[C]={type:"v3",value:Q.toArray()}:Q&&Q.isVector4?I.uniforms[C]={type:"v4",value:Q.toArray()}:Q&&Q.isMatrix3?I.uniforms[C]={type:"m3",value:Q.toArray()}:Q&&Q.isMatrix4?I.uniforms[C]={type:"m4",value:Q.toArray()}:I.uniforms[C]={value:Q}}Object.keys(this.defines).length>0&&(I.defines=this.defines),I.vertexShader=this.vertexShader,I.fragmentShader=this.fragmentShader,I.lights=this.lights,I.clipping=this.clipping;const g={};for(const C in this.extensions)this.extensions[C]===!0&&(g[C]=!0);return Object.keys(g).length>0&&(I.extensions=g),I}}class Xi extends oI{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new uA,this.projectionMatrix=new uA,this.projectionMatrixInverse=new uA,this.coordinateSystem=xg}copy(A,I){return super.copy(A,I),this.matrixWorldInverse.copy(A.matrixWorldInverse),this.projectionMatrix.copy(A.projectionMatrix),this.projectionMatrixInverse.copy(A.projectionMatrixInverse),this.coordinateSystem=A.coordinateSystem,this}getWorldDirection(A){return super.getWorldDirection(A).negate()}updateMatrixWorld(A){super.updateMatrixWorld(A),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(A,I){super.updateWorldMatrix(A,I),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const sC=new L,rt=new vA,St=new vA;class WI extends Xi{constructor(A=50,I=1,g=.1,C=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=A,this.zoom=1,this.near=g,this.far=C,this.focus=10,this.aspect=I,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(A,I){return super.copy(A,I),this.fov=A.fov,this.zoom=A.zoom,this.near=A.near,this.far=A.far,this.focus=A.focus,this.aspect=A.aspect,this.view=A.view===null?null:Object.assign({},A.view),this.filmGauge=A.filmGauge,this.filmOffset=A.filmOffset,this}setFocalLength(A){const I=.5*this.getFilmHeight()/A;this.fov=$C*2*Math.atan(I),this.updateProjectionMatrix()}getFocalLength(){const A=Math.tan(uB*.5*this.fov);return .5*this.getFilmHeight()/A}getEffectiveFOV(){return $C*2*Math.atan(Math.tan(uB*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(A,I,g){sC.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),I.set(sC.x,sC.y).multiplyScalar(-A/sC.z),sC.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),g.set(sC.x,sC.y).multiplyScalar(-A/sC.z)}getViewSize(A,I){return this.getViewBounds(A,rt,St),I.subVectors(St,rt)}setViewOffset(A,I,g,C,Q,E){this.aspect=A/I,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=I,this.view.offsetX=g,this.view.offsetY=C,this.view.width=Q,this.view.height=E,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=this.near;let I=A*Math.tan(uB*.5*this.fov)/this.zoom,g=2*I,C=this.aspect*g,Q=-.5*C;const E=this.view;if(this.view!==null&&this.view.enabled){const o=E.fullWidth,e=E.fullHeight;Q+=E.offsetX*C/o,I-=E.offsetY*g/e,C*=E.width/o,g*=E.height/e}const i=this.filmOffset;i!==0&&(Q+=A*i/this.getFilmWidth()),this.projectionMatrix.makePerspective(Q,Q+C,I,I-g,A,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const I=super.toJSON(A);return I.object.fov=this.fov,I.object.zoom=this.zoom,I.object.near=this.near,I.object.far=this.far,I.object.focus=this.focus,I.object.aspect=this.aspect,this.view!==null&&(I.object.view=Object.assign({},this.view)),I.object.filmGauge=this.filmGauge,I.object.filmOffset=this.filmOffset,I}}const DB=-90,hB=1;class Yh extends oI{constructor(A,I,g){super(),this.type="CubeCamera",this.renderTarget=g,this.coordinateSystem=null,this.activeMipmapLevel=0;const C=new WI(DB,hB,A,I);C.layers=this.layers,this.add(C);const Q=new WI(DB,hB,A,I);Q.layers=this.layers,this.add(Q);const E=new WI(DB,hB,A,I);E.layers=this.layers,this.add(E);const i=new WI(DB,hB,A,I);i.layers=this.layers,this.add(i);const o=new WI(DB,hB,A,I);o.layers=this.layers,this.add(o);const e=new WI(DB,hB,A,I);e.layers=this.layers,this.add(e)}updateCoordinateSystem(){const A=this.coordinateSystem,I=this.children.concat(),[g,C,Q,E,i,o]=I;for(const e of I)this.remove(e);if(A===xg)g.up.set(0,1,0),g.lookAt(1,0,0),C.up.set(0,1,0),C.lookAt(-1,0,0),Q.up.set(0,0,-1),Q.lookAt(0,1,0),E.up.set(0,0,1),E.lookAt(0,-1,0),i.up.set(0,1,0),i.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(A===qQ)g.up.set(0,-1,0),g.lookAt(-1,0,0),C.up.set(0,-1,0),C.lookAt(1,0,0),Q.up.set(0,0,1),Q.lookAt(0,1,0),E.up.set(0,0,-1),E.lookAt(0,-1,0),i.up.set(0,-1,0),i.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+A);for(const e of I)this.add(e),e.updateMatrixWorld()}update(A,I){this.parent===null&&this.updateMatrixWorld();const{renderTarget:g,activeMipmapLevel:C}=this;this.coordinateSystem!==A.coordinateSystem&&(this.coordinateSystem=A.coordinateSystem,this.updateCoordinateSystem());const[Q,E,i,o,e,t]=this.children,a=A.getRenderTarget(),s=A.getActiveCubeFace(),h=A.getActiveMipmapLevel(),n=A.xr.enabled;A.xr.enabled=!1;const w=g.texture.generateMipmaps;g.texture.generateMipmaps=!1,A.setRenderTarget(g,0,C),A.render(I,Q),A.setRenderTarget(g,1,C),A.render(I,E),A.setRenderTarget(g,2,C),A.render(I,i),A.setRenderTarget(g,3,C),A.render(I,o),A.setRenderTarget(g,4,C),A.render(I,e),g.texture.generateMipmaps=w,A.setRenderTarget(g,5,C),A.render(I,t),A.setRenderTarget(a,s,h),A.xr.enabled=n,g.texture.needsPMREMUpdate=!0}}class nt extends HI{constructor(A,I,g,C,Q,E,i,o,e,t){A=A!==void 0?A:[],I=I!==void 0?I:vC,super(A,I,g,C,Q,E,i,o,e,t),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(A){this.image=A}}class Lh extends UC{constructor(A=1,I={}){super(A,A,I),this.isWebGLCubeRenderTarget=!0;const g={width:A,height:A,depth:1},C=[g,g,g,g,g,g];this.texture=new nt(C,I.mapping,I.wrapS,I.wrapT,I.magFilter,I.minFilter,I.format,I.type,I.anisotropy,I.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=I.generateMipmaps!==void 0?I.generateMipmaps:!1,this.texture.minFilter=I.minFilter!==void 0?I.minFilter:LI}fromEquirectangularTexture(A,I){this.texture.type=I.type,this.texture.colorSpace=I.colorSpace,this.texture.generateMipmaps=I.generateMipmaps,this.texture.minFilter=I.minFilter,this.texture.magFilter=I.magFilter;const g={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},C=new aB(5,5,5),Q=new aC({name:"CubemapFromEquirect",uniforms:sB(g.uniforms),vertexShader:g.vertexShader,fragmentShader:g.fragmentShader,side:VI,blending:CC});Q.uniforms.tEquirect.value=I;const E=new $I(C,Q),i=I.minFilter;return I.minFilter===Jg&&(I.minFilter=LI),new Yh(1,10,this).update(A,E),I.minFilter=i,E.geometry.dispose(),E.material.dispose(),this}clear(A,I,g,C){const Q=A.getRenderTarget();for(let E=0;E<6;E++)A.setRenderTarget(this,E),A.clear(I,g,C);A.setRenderTarget(Q)}}const zi=new L,uh=new L,Hh=new fA;class FC{constructor(A=new L(1,0,0),I=0){this.isPlane=!0,this.normal=A,this.constant=I}set(A,I){return this.normal.copy(A),this.constant=I,this}setComponents(A,I,g,C){return this.normal.set(A,I,g),this.constant=C,this}setFromNormalAndCoplanarPoint(A,I){return this.normal.copy(A),this.constant=-I.dot(this.normal),this}setFromCoplanarPoints(A,I,g){const C=zi.subVectors(g,I).cross(uh.subVectors(A,I)).normalize();return this.setFromNormalAndCoplanarPoint(C,A),this}copy(A){return this.normal.copy(A.normal),this.constant=A.constant,this}normalize(){const A=1/this.normal.length();return this.normal.multiplyScalar(A),this.constant*=A,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(A){return this.normal.dot(A)+this.constant}distanceToSphere(A){return this.distanceToPoint(A.center)-A.radius}projectPoint(A,I){return I.copy(A).addScaledVector(this.normal,-this.distanceToPoint(A))}intersectLine(A,I){const g=A.delta(zi),C=this.normal.dot(g);if(C===0)return this.distanceToPoint(A.start)===0?I.copy(A.start):null;const Q=-(A.start.dot(this.normal)+this.constant)/C;return Q<0||Q>1?null:I.copy(A.start).addScaledVector(g,Q)}intersectsLine(A){const I=this.distanceToPoint(A.start),g=this.distanceToPoint(A.end);return I<0&&g>0||g<0&&I>0}intersectsBox(A){return A.intersectsPlane(this)}intersectsSphere(A){return A.intersectsPlane(this)}coplanarPoint(A){return A.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(A,I){const g=I||Hh.getNormalMatrix(A),C=this.coplanarPoint(zi).applyMatrix4(A),Q=this.normal.applyMatrix3(g).normalize();return this.constant=-C.dot(Q),this}translate(A){return this.constant-=A.dot(this.normal),this}equals(A){return A.normal.equals(this.normal)&&A.constant===this.constant}clone(){return new this.constructor().copy(this)}}const RC=new Fg,$Q=new L;class $i{constructor(A=new FC,I=new FC,g=new FC,C=new FC,Q=new FC,E=new FC){this.planes=[A,I,g,C,Q,E]}set(A,I,g,C,Q,E){const i=this.planes;return i[0].copy(A),i[1].copy(I),i[2].copy(g),i[3].copy(C),i[4].copy(Q),i[5].copy(E),this}copy(A){const I=this.planes;for(let g=0;g<6;g++)I[g].copy(A.planes[g]);return this}setFromProjectionMatrix(A,I=xg){const g=this.planes,C=A.elements,Q=C[0],E=C[1],i=C[2],o=C[3],e=C[4],t=C[5],a=C[6],s=C[7],h=C[8],n=C[9],w=C[10],r=C[11],S=C[12],y=C[13],G=C[14],M=C[15];if(g[0].setComponents(o-Q,s-e,r-h,M-S).normalize(),g[1].setComponents(o+Q,s+e,r+h,M+S).normalize(),g[2].setComponents(o+E,s+t,r+n,M+y).normalize(),g[3].setComponents(o-E,s-t,r-n,M-y).normalize(),g[4].setComponents(o-i,s-a,r-w,M-G).normalize(),I===xg)g[5].setComponents(o+i,s+a,r+w,M+G).normalize();else if(I===qQ)g[5].setComponents(i,a,w,G).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+I);return this}intersectsObject(A){if(A.boundingSphere!==void 0)A.boundingSphere===null&&A.computeBoundingSphere(),RC.copy(A.boundingSphere).applyMatrix4(A.matrixWorld);else{const I=A.geometry;I.boundingSphere===null&&I.computeBoundingSphere(),RC.copy(I.boundingSphere).applyMatrix4(A.matrixWorld)}return this.intersectsSphere(RC)}intersectsSprite(A){return RC.center.set(0,0,0),RC.radius=.7071067811865476,RC.applyMatrix4(A.matrixWorld),this.intersectsSphere(RC)}intersectsSphere(A){const I=this.planes,g=A.center,C=-A.radius;for(let Q=0;Q<6;Q++)if(I[Q].distanceToPoint(g)<C)return!1;return!0}intersectsBox(A){const I=this.planes;for(let g=0;g<6;g++){const C=I[g];if($Q.x=C.normal.x>0?A.max.x:A.min.x,$Q.y=C.normal.y>0?A.max.y:A.min.y,$Q.z=C.normal.z>0?A.max.z:A.min.z,C.distanceToPoint($Q)<0)return!1}return!0}containsPoint(A){const I=this.planes;for(let g=0;g<6;g++)if(I[g].distanceToPoint(A)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function wt(){let B=null,A=!1,I=null,g=null;function C(Q,E){I(Q,E),g=B.requestAnimationFrame(C)}return{start:function(){A!==!0&&I!==null&&(g=B.requestAnimationFrame(C),A=!0)},stop:function(){B.cancelAnimationFrame(g),A=!1},setAnimationLoop:function(Q){I=Q},setContext:function(Q){B=Q}}}function mh(B){const A=new WeakMap;function I(i,o){const e=i.array,t=i.usage,a=e.byteLength,s=B.createBuffer();B.bindBuffer(o,s),B.bufferData(o,e,t),i.onUploadCallback();let h;if(e instanceof Float32Array)h=B.FLOAT;else if(e instanceof Uint16Array)i.isFloat16BufferAttribute?h=B.HALF_FLOAT:h=B.UNSIGNED_SHORT;else if(e instanceof Int16Array)h=B.SHORT;else if(e instanceof Uint32Array)h=B.UNSIGNED_INT;else if(e instanceof Int32Array)h=B.INT;else if(e instanceof Int8Array)h=B.BYTE;else if(e instanceof Uint8Array)h=B.UNSIGNED_BYTE;else if(e instanceof Uint8ClampedArray)h=B.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+e);return{buffer:s,type:h,bytesPerElement:e.BYTES_PER_ELEMENT,version:i.version,size:a}}function g(i,o,e){const t=o.array,a=o.updateRanges;if(B.bindBuffer(e,i),a.length===0)B.bufferSubData(e,0,t);else{a.sort((h,n)=>h.start-n.start);let s=0;for(let h=1;h<a.length;h++){const n=a[s],w=a[h];w.start<=n.start+n.count+1?n.count=Math.max(n.count,w.start+w.count-n.start):(++s,a[s]=w)}a.length=s+1;for(let h=0,n=a.length;h<n;h++){const w=a[h];B.bufferSubData(e,w.start*t.BYTES_PER_ELEMENT,t,w.start,w.count)}o.clearUpdateRanges()}o.onUploadCallback()}function C(i){return i.isInterleavedBufferAttribute&&(i=i.data),A.get(i)}function Q(i){i.isInterleavedBufferAttribute&&(i=i.data);const o=A.get(i);o&&(B.deleteBuffer(o.buffer),A.delete(i))}function E(i,o){if(i.isInterleavedBufferAttribute&&(i=i.data),i.isGLBufferAttribute){const t=A.get(i);(!t||t.version<i.version)&&A.set(i,{buffer:i.buffer,type:i.type,bytesPerElement:i.elementSize,version:i.version});return}const e=A.get(i);if(e===void 0)A.set(i,I(i,o));else if(e.version<i.version){if(e.size!==i.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");g(e.buffer,i,o),e.version=i.version}}return{get:C,remove:Q,update:E}}class AE extends Bg{constructor(A=1,I=1,g=1,C=1){super(),this.type="PlaneGeometry",this.parameters={width:A,height:I,widthSegments:g,heightSegments:C};const Q=A/2,E=I/2,i=Math.floor(g),o=Math.floor(C),e=i+1,t=o+1,a=A/i,s=I/o,h=[],n=[],w=[],r=[];for(let S=0;S<t;S++){const y=S*s-E;for(let G=0;G<e;G++){const M=G*a-Q;n.push(M,-y,0),w.push(0,0,1),r.push(G/i),r.push(1-S/o)}}for(let S=0;S<o;S++)for(let y=0;y<i;y++){const G=y+e*S,M=y+e*(S+1),m=y+1+e*(S+1),F=y+1+e*S;h.push(G,M,F),h.push(M,m,F)}this.setIndex(h),this.setAttribute("position",new lg(n,3)),this.setAttribute("normal",new lg(w,3)),this.setAttribute("uv",new lg(r,2))}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new AE(A.width,A.height,A.widthSegments,A.heightSegments)}}var fh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Th=`#ifdef USE_ALPHAHASH
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
#endif`,xh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Oh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_h=`#ifdef USE_AOMAP
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
#endif`,Zh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wh=`#ifdef USE_BATCHING
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
#endif`,Ph=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zh=`#ifdef USE_IRIDESCENCE
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
#endif`,$h=`#ifdef USE_BUMPMAP
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
#endif`,Ar=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ir=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gr=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cr=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Br=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qr=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Er=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ir=`#if defined( USE_COLOR_ALPHA )
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
#endif`,or=`#define PI 3.141592653589793
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
} // validated`,er=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,tr=`vec3 transformedNormal = objectNormal;
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
#endif`,ar=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sr=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dr=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hr=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rr="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sr=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nr=`#ifdef USE_ENVMAP
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
#endif`,wr=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cr=`#ifdef USE_ENVMAP
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
#endif`,lr=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gr=`#ifdef USE_ENVMAP
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
#endif`,kr=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yr=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ur=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mr=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nr=`#ifdef USE_GRADIENTMAP
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
}`,Kr=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jr=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fr=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rr=`uniform bool receiveShadow;
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
#endif`,pr=`#ifdef USE_ENVMAP
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
#endif`,dr=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qr=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yr=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Lr=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ur=`PhysicalMaterial material;
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
#endif`,Hr=`struct PhysicalMaterial {
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
}`,mr=`
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
#endif`,fr=`#if defined( RE_IndirectDiffuse )
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
#endif`,Tr=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xr=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,br=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Or=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vr=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_r=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zr=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wr=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Pr=`#if defined( USE_POINTS_UV )
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
#endif`,jr=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vr=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xr=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zr=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$r=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,AS=`#ifdef USE_MORPHTARGETS
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
#endif`,IS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,CS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,BS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ES=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,iS=`#ifdef USE_NORMALMAP
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
#endif`,oS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,eS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,aS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,DS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,hS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,SS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
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
#endif`,GS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,yS=`float getShadowMask() {
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
}`,US=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,MS=`#ifdef USE_SKINNING
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
#endif`,NS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,KS=`#ifdef USE_SKINNING
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
#endif`,JS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,FS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,RS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,dS=`#ifdef USE_TRANSMISSION
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
#endif`,qS=`#ifdef USE_TRANSMISSION
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
#endif`,YS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,LS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,HS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fS=`uniform sampler2D t2D;
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
}`,TS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,bS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vS=`#include <common>
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
}`,_S=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ZS=`#define DISTANCE
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
}`,WS=`#define DISTANCE
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
}`,PS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VS=`uniform float scale;
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
}`,XS=`uniform vec3 diffuse;
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
}`,zS=`#include <common>
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
}`,$S=`uniform vec3 diffuse;
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
}`,An=`#define LAMBERT
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
}`,In=`#define LAMBERT
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
}`,gn=`#define MATCAP
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
}`,Cn=`#define MATCAP
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
}`,Bn=`#define NORMAL
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
}`,Qn=`#define NORMAL
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
}`,En=`#define PHONG
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
}`,on=`#define PHONG
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
}`,en=`#define STANDARD
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
}`,tn=`#define STANDARD
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
}`,an=`#define TOON
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
}`,sn=`#define TOON
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
}`,Dn=`uniform float size;
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
}`,hn=`uniform vec3 diffuse;
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
}`,rn=`#include <common>
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
}`,Sn=`uniform vec3 color;
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
}`,nn=`uniform float rotation;
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
}`,wn=`uniform vec3 diffuse;
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
}`,TA={alphahash_fragment:fh,alphahash_pars_fragment:Th,alphamap_fragment:xh,alphamap_pars_fragment:bh,alphatest_fragment:Oh,alphatest_pars_fragment:vh,aomap_fragment:_h,aomap_pars_fragment:Zh,batching_pars_vertex:Wh,batching_vertex:Ph,begin_vertex:jh,beginnormal_vertex:Vh,bsdfs:Xh,iridescence_fragment:zh,bumpmap_pars_fragment:$h,clipping_planes_fragment:Ar,clipping_planes_pars_fragment:Ir,clipping_planes_pars_vertex:gr,clipping_planes_vertex:Cr,color_fragment:Br,color_pars_fragment:Qr,color_pars_vertex:Er,color_vertex:ir,common:or,cube_uv_reflection_fragment:er,defaultnormal_vertex:tr,displacementmap_pars_vertex:ar,displacementmap_vertex:sr,emissivemap_fragment:Dr,emissivemap_pars_fragment:hr,colorspace_fragment:rr,colorspace_pars_fragment:Sr,envmap_fragment:nr,envmap_common_pars_fragment:wr,envmap_pars_fragment:cr,envmap_pars_vertex:lr,envmap_physical_pars_fragment:pr,envmap_vertex:Gr,fog_vertex:kr,fog_pars_vertex:yr,fog_fragment:Ur,fog_pars_fragment:Mr,gradientmap_pars_fragment:Nr,lightmap_pars_fragment:Kr,lights_lambert_fragment:Jr,lights_lambert_pars_fragment:Fr,lights_pars_begin:Rr,lights_toon_fragment:dr,lights_toon_pars_fragment:qr,lights_phong_fragment:Yr,lights_phong_pars_fragment:Lr,lights_physical_fragment:ur,lights_physical_pars_fragment:Hr,lights_fragment_begin:mr,lights_fragment_maps:fr,lights_fragment_end:Tr,logdepthbuf_fragment:xr,logdepthbuf_pars_fragment:br,logdepthbuf_pars_vertex:Or,logdepthbuf_vertex:vr,map_fragment:_r,map_pars_fragment:Zr,map_particle_fragment:Wr,map_particle_pars_fragment:Pr,metalnessmap_fragment:jr,metalnessmap_pars_fragment:Vr,morphinstance_vertex:Xr,morphcolor_vertex:zr,morphnormal_vertex:$r,morphtarget_pars_vertex:AS,morphtarget_vertex:IS,normal_fragment_begin:gS,normal_fragment_maps:CS,normal_pars_fragment:BS,normal_pars_vertex:QS,normal_vertex:ES,normalmap_pars_fragment:iS,clearcoat_normal_fragment_begin:oS,clearcoat_normal_fragment_maps:eS,clearcoat_pars_fragment:tS,iridescence_pars_fragment:aS,opaque_fragment:sS,packing:DS,premultiplied_alpha_fragment:hS,project_vertex:rS,dithering_fragment:SS,dithering_pars_fragment:nS,roughnessmap_fragment:wS,roughnessmap_pars_fragment:cS,shadowmap_pars_fragment:lS,shadowmap_pars_vertex:GS,shadowmap_vertex:kS,shadowmask_pars_fragment:yS,skinbase_vertex:US,skinning_pars_vertex:MS,skinning_vertex:NS,skinnormal_vertex:KS,specularmap_fragment:JS,specularmap_pars_fragment:FS,tonemapping_fragment:RS,tonemapping_pars_fragment:pS,transmission_fragment:dS,transmission_pars_fragment:qS,uv_pars_fragment:YS,uv_pars_vertex:LS,uv_vertex:uS,worldpos_vertex:HS,background_vert:mS,background_frag:fS,backgroundCube_vert:TS,backgroundCube_frag:xS,cube_vert:bS,cube_frag:OS,depth_vert:vS,depth_frag:_S,distanceRGBA_vert:ZS,distanceRGBA_frag:WS,equirect_vert:PS,equirect_frag:jS,linedashed_vert:VS,linedashed_frag:XS,meshbasic_vert:zS,meshbasic_frag:$S,meshlambert_vert:An,meshlambert_frag:In,meshmatcap_vert:gn,meshmatcap_frag:Cn,meshnormal_vert:Bn,meshnormal_frag:Qn,meshphong_vert:En,meshphong_frag:on,meshphysical_vert:en,meshphysical_frag:tn,meshtoon_vert:an,meshtoon_frag:sn,points_vert:Dn,points_frag:hn,shadow_vert:rn,shadow_frag:Sn,sprite_vert:nn,sprite_frag:wn},QA={common:{diffuse:{value:new MA(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fA},alphaMap:{value:null},alphaMapTransform:{value:new fA},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fA}},envmap:{envMap:{value:null},envMapRotation:{value:new fA},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fA}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fA}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fA},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fA},normalScale:{value:new vA(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fA},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fA}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fA}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fA}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new MA(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new MA(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fA},alphaTest:{value:0},uvTransform:{value:new fA}},sprite:{diffuse:{value:new MA(16777215)},opacity:{value:1},center:{value:new vA(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fA},alphaMap:{value:null},alphaMapTransform:{value:new fA},alphaTest:{value:0}}},pg={basic:{uniforms:ZI([QA.common,QA.specularmap,QA.envmap,QA.aomap,QA.lightmap,QA.fog]),vertexShader:TA.meshbasic_vert,fragmentShader:TA.meshbasic_frag},lambert:{uniforms:ZI([QA.common,QA.specularmap,QA.envmap,QA.aomap,QA.lightmap,QA.emissivemap,QA.bumpmap,QA.normalmap,QA.displacementmap,QA.fog,QA.lights,{emissive:{value:new MA(0)}}]),vertexShader:TA.meshlambert_vert,fragmentShader:TA.meshlambert_frag},phong:{uniforms:ZI([QA.common,QA.specularmap,QA.envmap,QA.aomap,QA.lightmap,QA.emissivemap,QA.bumpmap,QA.normalmap,QA.displacementmap,QA.fog,QA.lights,{emissive:{value:new MA(0)},specular:{value:new MA(1118481)},shininess:{value:30}}]),vertexShader:TA.meshphong_vert,fragmentShader:TA.meshphong_frag},standard:{uniforms:ZI([QA.common,QA.envmap,QA.aomap,QA.lightmap,QA.emissivemap,QA.bumpmap,QA.normalmap,QA.displacementmap,QA.roughnessmap,QA.metalnessmap,QA.fog,QA.lights,{emissive:{value:new MA(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:TA.meshphysical_vert,fragmentShader:TA.meshphysical_frag},toon:{uniforms:ZI([QA.common,QA.aomap,QA.lightmap,QA.emissivemap,QA.bumpmap,QA.normalmap,QA.displacementmap,QA.gradientmap,QA.fog,QA.lights,{emissive:{value:new MA(0)}}]),vertexShader:TA.meshtoon_vert,fragmentShader:TA.meshtoon_frag},matcap:{uniforms:ZI([QA.common,QA.bumpmap,QA.normalmap,QA.displacementmap,QA.fog,{matcap:{value:null}}]),vertexShader:TA.meshmatcap_vert,fragmentShader:TA.meshmatcap_frag},points:{uniforms:ZI([QA.points,QA.fog]),vertexShader:TA.points_vert,fragmentShader:TA.points_frag},dashed:{uniforms:ZI([QA.common,QA.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:TA.linedashed_vert,fragmentShader:TA.linedashed_frag},depth:{uniforms:ZI([QA.common,QA.displacementmap]),vertexShader:TA.depth_vert,fragmentShader:TA.depth_frag},normal:{uniforms:ZI([QA.common,QA.bumpmap,QA.normalmap,QA.displacementmap,{opacity:{value:1}}]),vertexShader:TA.meshnormal_vert,fragmentShader:TA.meshnormal_frag},sprite:{uniforms:ZI([QA.sprite,QA.fog]),vertexShader:TA.sprite_vert,fragmentShader:TA.sprite_frag},background:{uniforms:{uvTransform:{value:new fA},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:TA.background_vert,fragmentShader:TA.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new fA}},vertexShader:TA.backgroundCube_vert,fragmentShader:TA.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:TA.cube_vert,fragmentShader:TA.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:TA.equirect_vert,fragmentShader:TA.equirect_frag},distanceRGBA:{uniforms:ZI([QA.common,QA.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:TA.distanceRGBA_vert,fragmentShader:TA.distanceRGBA_frag},shadow:{uniforms:ZI([QA.lights,QA.fog,{color:{value:new MA(0)},opacity:{value:1}}]),vertexShader:TA.shadow_vert,fragmentShader:TA.shadow_frag}};pg.physical={uniforms:ZI([pg.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fA},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fA},clearcoatNormalScale:{value:new vA(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fA},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fA},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fA},sheen:{value:0},sheenColor:{value:new MA(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fA},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fA},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fA},transmissionSamplerSize:{value:new vA},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fA},attenuationDistance:{value:0},attenuationColor:{value:new MA(0)},specularColor:{value:new MA(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fA},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fA},anisotropyVector:{value:new vA},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fA}}]),vertexShader:TA.meshphysical_vert,fragmentShader:TA.meshphysical_frag};const IE={r:0,b:0,g:0},pC=new eg,cn=new uA;function ln(B,A,I,g,C,Q,E){const i=new MA(0);let o=Q===!0?0:1,e,t,a=null,s=0,h=null;function n(y){let G=y.isScene===!0?y.background:null;return G&&G.isTexture&&(G=(y.backgroundBlurriness>0?I:A).get(G)),G}function w(y){let G=!1;const M=n(y);M===null?S(i,o):M&&M.isColor&&(S(M,1),G=!0);const m=B.xr.getEnvironmentBlendMode();m==="additive"?g.buffers.color.setClear(0,0,0,1,E):m==="alpha-blend"&&g.buffers.color.setClear(0,0,0,0,E),(B.autoClear||G)&&(g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),B.clear(B.autoClearColor,B.autoClearDepth,B.autoClearStencil))}function r(y,G){const M=n(G);M&&(M.isCubeTexture||M.mapping===lQ)?(t===void 0&&(t=new $I(new aB(1,1,1),new aC({name:"BackgroundCubeMaterial",uniforms:sB(pg.backgroundCube.uniforms),vertexShader:pg.backgroundCube.vertexShader,fragmentShader:pg.backgroundCube.fragmentShader,side:VI,depthTest:!1,depthWrite:!1,fog:!1})),t.geometry.deleteAttribute("normal"),t.geometry.deleteAttribute("uv"),t.onBeforeRender=function(m,F,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(t.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),C.update(t)),pC.copy(G.backgroundRotation),pC.x*=-1,pC.y*=-1,pC.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(pC.y*=-1,pC.z*=-1),t.material.uniforms.envMap.value=M,t.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,t.material.uniforms.backgroundBlurriness.value=G.backgroundBlurriness,t.material.uniforms.backgroundIntensity.value=G.backgroundIntensity,t.material.uniforms.backgroundRotation.value.setFromMatrix4(cn.makeRotationFromEuler(pC)),t.material.toneMapped=jA.getTransfer(M.colorSpace)!==sI,(a!==M||s!==M.version||h!==B.toneMapping)&&(t.material.needsUpdate=!0,a=M,s=M.version,h=B.toneMapping),t.layers.enableAll(),y.unshift(t,t.geometry,t.material,0,0,null)):M&&M.isTexture&&(e===void 0&&(e=new $I(new AE(2,2),new aC({name:"BackgroundMaterial",uniforms:sB(pg.background.uniforms),vertexShader:pg.background.vertexShader,fragmentShader:pg.background.fragmentShader,side:mg,depthTest:!1,depthWrite:!1,fog:!1})),e.geometry.deleteAttribute("normal"),Object.defineProperty(e.material,"map",{get:function(){return this.uniforms.t2D.value}}),C.update(e)),e.material.uniforms.t2D.value=M,e.material.uniforms.backgroundIntensity.value=G.backgroundIntensity,e.material.toneMapped=jA.getTransfer(M.colorSpace)!==sI,M.matrixAutoUpdate===!0&&M.updateMatrix(),e.material.uniforms.uvTransform.value.copy(M.matrix),(a!==M||s!==M.version||h!==B.toneMapping)&&(e.material.needsUpdate=!0,a=M,s=M.version,h=B.toneMapping),e.layers.enableAll(),y.unshift(e,e.geometry,e.material,0,0,null))}function S(y,G){y.getRGB(IE,ht(B)),g.buffers.color.setClear(IE.r,IE.g,IE.b,G,E)}return{getClearColor:function(){return i},setClearColor:function(y,G=1){i.set(y),o=G,S(i,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,S(i,o)},render:w,addToRenderList:r}}function Gn(B,A){const I=B.getParameter(B.MAX_VERTEX_ATTRIBS),g={},C=s(null);let Q=C,E=!1;function i(c,U,O,v,W){let $=!1;const b=a(v,O,U);Q!==b&&(Q=b,e(Q.object)),$=h(c,v,O,W),$&&n(c,v,O,W),W!==null&&A.update(W,B.ELEMENT_ARRAY_BUFFER),($||E)&&(E=!1,M(c,U,O,v),W!==null&&B.bindBuffer(B.ELEMENT_ARRAY_BUFFER,A.get(W).buffer))}function o(){return B.createVertexArray()}function e(c){return B.bindVertexArray(c)}function t(c){return B.deleteVertexArray(c)}function a(c,U,O){const v=O.wireframe===!0;let W=g[c.id];W===void 0&&(W={},g[c.id]=W);let $=W[U.id];$===void 0&&($={},W[U.id]=$);let b=$[v];return b===void 0&&(b=s(o()),$[v]=b),b}function s(c){const U=[],O=[],v=[];for(let W=0;W<I;W++)U[W]=0,O[W]=0,v[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:O,attributeDivisors:v,object:c,attributes:{},index:null}}function h(c,U,O,v){const W=Q.attributes,$=U.attributes;let b=0;const IA=O.getAttributes();for(const Z in IA)if(IA[Z].location>=0){const EA=W[Z];let cA=$[Z];if(cA===void 0&&(Z==="instanceMatrix"&&c.instanceMatrix&&(cA=c.instanceMatrix),Z==="instanceColor"&&c.instanceColor&&(cA=c.instanceColor)),EA===void 0||EA.attribute!==cA||cA&&EA.data!==cA.data)return!0;b++}return Q.attributesNum!==b||Q.index!==v}function n(c,U,O,v){const W={},$=U.attributes;let b=0;const IA=O.getAttributes();for(const Z in IA)if(IA[Z].location>=0){let EA=$[Z];EA===void 0&&(Z==="instanceMatrix"&&c.instanceMatrix&&(EA=c.instanceMatrix),Z==="instanceColor"&&c.instanceColor&&(EA=c.instanceColor));const cA={};cA.attribute=EA,EA&&EA.data&&(cA.data=EA.data),W[Z]=cA,b++}Q.attributes=W,Q.attributesNum=b,Q.index=v}function w(){const c=Q.newAttributes;for(let U=0,O=c.length;U<O;U++)c[U]=0}function r(c){S(c,0)}function S(c,U){const O=Q.newAttributes,v=Q.enabledAttributes,W=Q.attributeDivisors;O[c]=1,v[c]===0&&(B.enableVertexAttribArray(c),v[c]=1),W[c]!==U&&(B.vertexAttribDivisor(c,U),W[c]=U)}function y(){const c=Q.newAttributes,U=Q.enabledAttributes;for(let O=0,v=U.length;O<v;O++)U[O]!==c[O]&&(B.disableVertexAttribArray(O),U[O]=0)}function G(c,U,O,v,W,$,b){b===!0?B.vertexAttribIPointer(c,U,O,W,$):B.vertexAttribPointer(c,U,O,v,W,$)}function M(c,U,O,v){w();const W=v.attributes,$=O.getAttributes(),b=U.defaultAttributeValues;for(const IA in $){const Z=$[IA];if(Z.location>=0){let EA=W[IA];if(EA===void 0&&(IA==="instanceMatrix"&&c.instanceMatrix&&(EA=c.instanceMatrix),IA==="instanceColor"&&c.instanceColor&&(EA=c.instanceColor)),EA!==void 0){const cA=EA.normalized,KA=EA.itemSize,AI=A.get(EA);if(AI===void 0)continue;const QI=AI.buffer,j=AI.type,CA=AI.bytesPerElement,nA=j===B.INT||j===B.UNSIGNED_INT||EA.gpuType===ZE;if(EA.isInterleavedBufferAttribute){const sA=EA.data,HA=sA.stride,RA=EA.offset;if(sA.isInstancedInterleavedBuffer){for(let VA=0;VA<Z.locationSize;VA++)S(Z.location+VA,sA.meshPerAttribute);c.isInstancedMesh!==!0&&v._maxInstanceCount===void 0&&(v._maxInstanceCount=sA.meshPerAttribute*sA.count)}else for(let VA=0;VA<Z.locationSize;VA++)r(Z.location+VA);B.bindBuffer(B.ARRAY_BUFFER,QI);for(let VA=0;VA<Z.locationSize;VA++)G(Z.location+VA,KA/Z.locationSize,j,cA,HA*CA,(RA+KA/Z.locationSize*VA)*CA,nA)}else{if(EA.isInstancedBufferAttribute){for(let sA=0;sA<Z.locationSize;sA++)S(Z.location+sA,EA.meshPerAttribute);c.isInstancedMesh!==!0&&v._maxInstanceCount===void 0&&(v._maxInstanceCount=EA.meshPerAttribute*EA.count)}else for(let sA=0;sA<Z.locationSize;sA++)r(Z.location+sA);B.bindBuffer(B.ARRAY_BUFFER,QI);for(let sA=0;sA<Z.locationSize;sA++)G(Z.location+sA,KA/Z.locationSize,j,cA,KA*CA,KA/Z.locationSize*sA*CA,nA)}}else if(b!==void 0){const cA=b[IA];if(cA!==void 0)switch(cA.length){case 2:B.vertexAttrib2fv(Z.location,cA);break;case 3:B.vertexAttrib3fv(Z.location,cA);break;case 4:B.vertexAttrib4fv(Z.location,cA);break;default:B.vertexAttrib1fv(Z.location,cA)}}}}y()}function m(){H();for(const c in g){const U=g[c];for(const O in U){const v=U[O];for(const W in v)t(v[W].object),delete v[W];delete U[O]}delete g[c]}}function F(c){if(g[c.id]===void 0)return;const U=g[c.id];for(const O in U){const v=U[O];for(const W in v)t(v[W].object),delete v[W];delete U[O]}delete g[c.id]}function N(c){for(const U in g){const O=g[U];if(O[c.id]===void 0)continue;const v=O[c.id];for(const W in v)t(v[W].object),delete v[W];delete O[c.id]}}function H(){P(),E=!0,Q!==C&&(Q=C,e(Q.object))}function P(){C.geometry=null,C.program=null,C.wireframe=!1}return{setup:i,reset:H,resetDefaultState:P,dispose:m,releaseStatesOfGeometry:F,releaseStatesOfProgram:N,initAttributes:w,enableAttribute:r,disableUnusedAttributes:y}}function kn(B,A,I){let g;function C(e){g=e}function Q(e,t){B.drawArrays(g,e,t),I.update(t,g,1)}function E(e,t,a){a!==0&&(B.drawArraysInstanced(g,e,t,a),I.update(t,g,a))}function i(e,t,a){if(a===0)return;A.get("WEBGL_multi_draw").multiDrawArraysWEBGL(g,e,0,t,0,a);let s=0;for(let h=0;h<a;h++)s+=t[h];I.update(s,g,1)}function o(e,t,a,s){if(a===0)return;const h=A.get("WEBGL_multi_draw");if(h===null)for(let n=0;n<e.length;n++)E(e[n],t[n],s[n]);else{h.multiDrawArraysInstancedWEBGL(g,e,0,t,0,s,0,a);let n=0;for(let w=0;w<a;w++)n+=t[w];for(let w=0;w<s.length;w++)I.update(n,g,s[w])}}this.setMode=C,this.render=Q,this.renderInstances=E,this.renderMultiDraw=i,this.renderMultiDrawInstances=o}function yn(B,A,I,g){let C;function Q(){if(C!==void 0)return C;if(A.has("EXT_texture_filter_anisotropic")===!0){const N=A.get("EXT_texture_filter_anisotropic");C=B.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else C=0;return C}function E(N){return!(N!==og&&g.convert(N)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT))}function i(N){const H=N===Tg&&(A.has("EXT_color_buffer_half_float")||A.has("EXT_color_buffer_float"));return!(N!==fg&&g.convert(N)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==XI&&!H)}function o(N){if(N==="highp"){if(B.getShaderPrecisionFormat(B.VERTEX_SHADER,B.HIGH_FLOAT).precision>0&&B.getShaderPrecisionFormat(B.FRAGMENT_SHADER,B.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&B.getShaderPrecisionFormat(B.VERTEX_SHADER,B.MEDIUM_FLOAT).precision>0&&B.getShaderPrecisionFormat(B.FRAGMENT_SHADER,B.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let e=I.precision!==void 0?I.precision:"highp";const t=o(e);t!==e&&(console.warn("THREE.WebGLRenderer:",e,"not supported, using",t,"instead."),e=t);const a=I.logarithmicDepthBuffer===!0,s=I.reverseDepthBuffer===!0&&A.has("EXT_clip_control");if(s===!0){const N=A.get("EXT_clip_control");N.clipControlEXT(N.LOWER_LEFT_EXT,N.ZERO_TO_ONE_EXT)}const h=B.getParameter(B.MAX_TEXTURE_IMAGE_UNITS),n=B.getParameter(B.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=B.getParameter(B.MAX_TEXTURE_SIZE),r=B.getParameter(B.MAX_CUBE_MAP_TEXTURE_SIZE),S=B.getParameter(B.MAX_VERTEX_ATTRIBS),y=B.getParameter(B.MAX_VERTEX_UNIFORM_VECTORS),G=B.getParameter(B.MAX_VARYING_VECTORS),M=B.getParameter(B.MAX_FRAGMENT_UNIFORM_VECTORS),m=n>0,F=B.getParameter(B.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:Q,getMaxPrecision:o,textureFormatReadable:E,textureTypeReadable:i,precision:e,logarithmicDepthBuffer:a,reverseDepthBuffer:s,maxTextures:h,maxVertexTextures:n,maxTextureSize:w,maxCubemapSize:r,maxAttributes:S,maxVertexUniforms:y,maxVaryings:G,maxFragmentUniforms:M,vertexTextures:m,maxSamples:F}}function Un(B){const A=this;let I=null,g=0,C=!1,Q=!1;const E=new FC,i=new fA,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(a,s){const h=a.length!==0||s||g!==0||C;return C=s,g=a.length,h},this.beginShadows=function(){Q=!0,t(null)},this.endShadows=function(){Q=!1},this.setGlobalState=function(a,s){I=t(a,s,0)},this.setState=function(a,s,h){const n=a.clippingPlanes,w=a.clipIntersection,r=a.clipShadows,S=B.get(a);if(!C||n===null||n.length===0||Q&&!r)Q?t(null):e();else{const y=Q?0:g,G=y*4;let M=S.clippingState||null;o.value=M,M=t(n,s,G,h);for(let m=0;m!==G;++m)M[m]=I[m];S.clippingState=M,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=y}};function e(){o.value!==I&&(o.value=I,o.needsUpdate=g>0),A.numPlanes=g,A.numIntersection=0}function t(a,s,h,n){const w=a!==null?a.length:0;let r=null;if(w!==0){if(r=o.value,n!==!0||r===null){const S=h+w*4,y=s.matrixWorldInverse;i.getNormalMatrix(y),(r===null||r.length<S)&&(r=new Float32Array(S));for(let G=0,M=h;G!==w;++G,M+=4)E.copy(a[G]).applyMatrix4(y,i),E.normal.toArray(r,M),r[M+3]=E.constant}o.value=r,o.needsUpdate=!0}return A.numPlanes=w,A.numIntersection=0,r}}function Mn(B){let A=new WeakMap;function I(E,i){return i===cQ?E.mapping=vC:i===_E&&(E.mapping=_C),E}function g(E){if(E&&E.isTexture){const i=E.mapping;if(i===cQ||i===_E)if(A.has(E)){const o=A.get(E).texture;return I(o,E.mapping)}else{const o=E.image;if(o&&o.height>0){const e=new Lh(o.height);return e.fromEquirectangularTexture(B,E),A.set(E,e),E.addEventListener("dispose",C),I(e.texture,E.mapping)}else return null}}return E}function C(E){const i=E.target;i.removeEventListener("dispose",C);const o=A.get(i);o!==void 0&&(A.delete(i),o.dispose())}function Q(){A=new WeakMap}return{get:g,dispose:Q}}class Ao extends Xi{constructor(A=-1,I=1,g=1,C=-1,Q=.1,E=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=A,this.right=I,this.top=g,this.bottom=C,this.near=Q,this.far=E,this.updateProjectionMatrix()}copy(A,I){return super.copy(A,I),this.left=A.left,this.right=A.right,this.top=A.top,this.bottom=A.bottom,this.near=A.near,this.far=A.far,this.zoom=A.zoom,this.view=A.view===null?null:Object.assign({},A.view),this}setViewOffset(A,I,g,C,Q,E){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=I,this.view.offsetX=g,this.view.offsetY=C,this.view.width=Q,this.view.height=E,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=(this.right-this.left)/(2*this.zoom),I=(this.top-this.bottom)/(2*this.zoom),g=(this.right+this.left)/2,C=(this.top+this.bottom)/2;let Q=g-A,E=g+A,i=C+I,o=C-I;if(this.view!==null&&this.view.enabled){const e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;Q+=e*this.view.offsetX,E=Q+e*this.view.width,i-=t*this.view.offsetY,o=i-t*this.view.height}this.projectionMatrix.makeOrthographic(Q,E,i,o,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const I=super.toJSON(A);return I.object.zoom=this.zoom,I.object.left=this.left,I.object.right=this.right,I.object.top=this.top,I.object.bottom=this.bottom,I.object.near=this.near,I.object.far=this.far,this.view!==null&&(I.object.view=Object.assign({},this.view)),I}}const rB=4,ct=[.125,.215,.35,.446,.526,.582],dC=20,Io=new Ao,lt=new MA;let go=null,Co=0,Bo=0,Qo=!1;const qC=(1+Math.sqrt(5))/2,SB=1/qC,Gt=[new L(-qC,SB,0),new L(qC,SB,0),new L(-SB,0,qC),new L(SB,0,qC),new L(0,qC,-SB),new L(0,qC,SB),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class kt{constructor(A){this._renderer=A,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(A,I=0,g=.1,C=100){go=this._renderer.getRenderTarget(),Co=this._renderer.getActiveCubeFace(),Bo=this._renderer.getActiveMipmapLevel(),Qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const Q=this._allocateTargets();return Q.depthBuffer=!0,this._sceneToCubeUV(A,g,C,Q),I>0&&this._blur(Q,0,0,I),this._applyPMREM(Q),this._cleanup(Q),Q}fromEquirectangular(A,I=null){return this._fromTexture(A,I)}fromCubemap(A,I=null){return this._fromTexture(A,I)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mt(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ut(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(A){this._lodMax=Math.floor(Math.log2(A)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let A=0;A<this._lodPlanes.length;A++)this._lodPlanes[A].dispose()}_cleanup(A){this._renderer.setRenderTarget(go,Co,Bo),this._renderer.xr.enabled=Qo,A.scissorTest=!1,gE(A,0,0,A.width,A.height)}_fromTexture(A,I){A.mapping===vC||A.mapping===_C?this._setSize(A.image.length===0?16:A.image[0].width||A.image[0].image.width):this._setSize(A.image.width/4),go=this._renderer.getRenderTarget(),Co=this._renderer.getActiveCubeFace(),Bo=this._renderer.getActiveMipmapLevel(),Qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const g=I||this._allocateTargets();return this._textureToCubeUV(A,g),this._applyPMREM(g),this._cleanup(g),g}_allocateTargets(){const A=3*Math.max(this._cubeSize,112),I=4*this._cubeSize,g={magFilter:LI,minFilter:LI,generateMipmaps:!1,type:Tg,format:og,colorSpace:FI,depthBuffer:!1},C=yt(A,I,g);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==A||this._pingPongRenderTarget.height!==I){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yt(A,I,g);const{_lodMax:Q}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Nn(Q)),this._blurMaterial=Kn(Q,A,I)}return C}_compileMaterial(A){const I=new $I(this._lodPlanes[0],A);this._renderer.compile(I,Io)}_sceneToCubeUV(A,I,g,C){const Q=new WI(90,1,I,g),E=[1,-1,1,1,1,1],i=[1,1,1,-1,-1,-1],o=this._renderer,e=o.autoClear,t=o.toneMapping;o.getClearColor(lt),o.toneMapping=BC,o.autoClear=!1;const a=new KC({name:"PMREM.Background",side:VI,depthWrite:!1,depthTest:!1}),s=new $I(new aB,a);let h=!1;const n=A.background;n?n.isColor&&(a.color.copy(n),A.background=null,h=!0):(a.color.copy(lt),h=!0);for(let w=0;w<6;w++){const r=w%3;r===0?(Q.up.set(0,E[w],0),Q.lookAt(i[w],0,0)):r===1?(Q.up.set(0,0,E[w]),Q.lookAt(0,i[w],0)):(Q.up.set(0,E[w],0),Q.lookAt(0,0,i[w]));const S=this._cubeSize;gE(C,r*S,w>2?S:0,S,S),o.setRenderTarget(C),h&&o.render(s,Q),o.render(A,Q)}s.geometry.dispose(),s.material.dispose(),o.toneMapping=t,o.autoClear=e,A.background=n}_textureToCubeUV(A,I){const g=this._renderer,C=A.mapping===vC||A.mapping===_C;C?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mt()),this._cubemapMaterial.uniforms.flipEnvMap.value=A.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ut());const Q=C?this._cubemapMaterial:this._equirectMaterial,E=new $I(this._lodPlanes[0],Q),i=Q.uniforms;i.envMap.value=A;const o=this._cubeSize;gE(I,0,0,3*o,2*o),g.setRenderTarget(I),g.render(E,Io)}_applyPMREM(A){const I=this._renderer,g=I.autoClear;I.autoClear=!1;const C=this._lodPlanes.length;for(let Q=1;Q<C;Q++){const E=Math.sqrt(this._sigmas[Q]*this._sigmas[Q]-this._sigmas[Q-1]*this._sigmas[Q-1]),i=Gt[(C-Q-1)%Gt.length];this._blur(A,Q-1,Q,E,i)}I.autoClear=g}_blur(A,I,g,C,Q){const E=this._pingPongRenderTarget;this._halfBlur(A,E,I,g,C,"latitudinal",Q),this._halfBlur(E,A,g,g,C,"longitudinal",Q)}_halfBlur(A,I,g,C,Q,E,i){const o=this._renderer,e=this._blurMaterial;E!=="latitudinal"&&E!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const t=3,a=new $I(this._lodPlanes[C],e),s=e.uniforms,h=this._sizeLods[g]-1,n=isFinite(Q)?Math.PI/(2*h):2*Math.PI/(2*dC-1),w=Q/n,r=isFinite(Q)?1+Math.floor(t*w):dC;r>dC&&console.warn(`sigmaRadians, ${Q}, is too large and will clip, as it requested ${r} samples when the maximum is set to ${dC}`);const S=[];let y=0;for(let N=0;N<dC;++N){const H=N/w,P=Math.exp(-H*H/2);S.push(P),N===0?y+=P:N<r&&(y+=2*P)}for(let N=0;N<S.length;N++)S[N]=S[N]/y;s.envMap.value=A.texture,s.samples.value=r,s.weights.value=S,s.latitudinal.value=E==="latitudinal",i&&(s.poleAxis.value=i);const{_lodMax:G}=this;s.dTheta.value=n,s.mipInt.value=G-g;const M=this._sizeLods[C],m=3*M*(C>G-rB?C-G+rB:0),F=4*(this._cubeSize-M);gE(I,m,F,3*M,2*M),o.setRenderTarget(I),o.render(a,Io)}}function Nn(B){const A=[],I=[],g=[];let C=B;const Q=B-rB+1+ct.length;for(let E=0;E<Q;E++){const i=Math.pow(2,C);I.push(i);let o=1/i;E>B-rB?o=ct[E-B+rB-1]:E===0&&(o=0),g.push(o);const e=1/(i-2),t=-e,a=1+e,s=[t,t,a,t,a,a,t,t,a,a,t,a],h=6,n=6,w=3,r=2,S=1,y=new Float32Array(w*n*h),G=new Float32Array(r*n*h),M=new Float32Array(S*n*h);for(let F=0;F<h;F++){const N=F%3*2/3-1,H=F>2?0:-1,P=[N,H,0,N+2/3,H,0,N+2/3,H+1,0,N,H,0,N+2/3,H+1,0,N,H+1,0];y.set(P,w*n*F),G.set(s,r*n*F);const c=[F,F,F,F,F,F];M.set(c,S*n*F)}const m=new Bg;m.setAttribute("position",new RI(y,w)),m.setAttribute("uv",new RI(G,r)),m.setAttribute("faceIndex",new RI(M,S)),A.push(m),C>rB&&C--}return{lodPlanes:A,sizeLods:I,sigmas:g}}function yt(B,A,I){const g=new UC(B,A,I);return g.texture.mapping=lQ,g.texture.name="PMREM.cubeUv",g.scissorTest=!0,g}function gE(B,A,I,g,C){B.viewport.set(A,I,g,C),B.scissor.set(A,I,g,C)}function Kn(B,A,I){const g=new Float32Array(dC),C=new L(0,1,0);return new aC({name:"SphericalGaussianBlur",defines:{n:dC,CUBEUV_TEXEL_WIDTH:1/A,CUBEUV_TEXEL_HEIGHT:1/I,CUBEUV_MAX_MIP:`${B}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:g},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:C}},vertexShader:Eo(),fragmentShader:`

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
		`,blending:CC,depthTest:!1,depthWrite:!1})}function Ut(){return new aC({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Eo(),fragmentShader:`

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
		`,blending:CC,depthTest:!1,depthWrite:!1})}function Mt(){return new aC({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Eo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:CC,depthTest:!1,depthWrite:!1})}function Eo(){return`

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
	`}function Jn(B){let A=new WeakMap,I=null;function g(i){if(i&&i.isTexture){const o=i.mapping,e=o===cQ||o===_E,t=o===vC||o===_C;if(e||t){let a=A.get(i);const s=a!==void 0?a.texture.pmremVersion:0;if(i.isRenderTargetTexture&&i.pmremVersion!==s)return I===null&&(I=new kt(B)),a=e?I.fromEquirectangular(i,a):I.fromCubemap(i,a),a.texture.pmremVersion=i.pmremVersion,A.set(i,a),a.texture;if(a!==void 0)return a.texture;{const h=i.image;return e&&h&&h.height>0||t&&h&&C(h)?(I===null&&(I=new kt(B)),a=e?I.fromEquirectangular(i):I.fromCubemap(i),a.texture.pmremVersion=i.pmremVersion,A.set(i,a),i.addEventListener("dispose",Q),a.texture):null}}}return i}function C(i){let o=0;const e=6;for(let t=0;t<e;t++)i[t]!==void 0&&o++;return o===e}function Q(i){const o=i.target;o.removeEventListener("dispose",Q);const e=A.get(o);e!==void 0&&(A.delete(o),e.dispose())}function E(){A=new WeakMap,I!==null&&(I.dispose(),I=null)}return{get:g,dispose:E}}function Fn(B){const A={};function I(g){if(A[g]!==void 0)return A[g];let C;switch(g){case"WEBGL_depth_texture":C=B.getExtension("WEBGL_depth_texture")||B.getExtension("MOZ_WEBGL_depth_texture")||B.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":C=B.getExtension("EXT_texture_filter_anisotropic")||B.getExtension("MOZ_EXT_texture_filter_anisotropic")||B.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":C=B.getExtension("WEBGL_compressed_texture_s3tc")||B.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||B.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":C=B.getExtension("WEBGL_compressed_texture_pvrtc")||B.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:C=B.getExtension(g)}return A[g]=C,C}return{has:function(g){return I(g)!==null},init:function(){I("EXT_color_buffer_float"),I("WEBGL_clip_cull_distance"),I("OES_texture_float_linear"),I("EXT_color_buffer_half_float"),I("WEBGL_multisampled_render_to_texture"),I("WEBGL_render_shared_exponent")},get:function(g){const C=I(g);return C===null&&YQ("THREE.WebGLRenderer: "+g+" extension not supported."),C}}}function Rn(B,A,I,g){const C={},Q=new WeakMap;function E(a){const s=a.target;s.index!==null&&A.remove(s.index);for(const n in s.attributes)A.remove(s.attributes[n]);for(const n in s.morphAttributes){const w=s.morphAttributes[n];for(let r=0,S=w.length;r<S;r++)A.remove(w[r])}s.removeEventListener("dispose",E),delete C[s.id];const h=Q.get(s);h&&(A.remove(h),Q.delete(s)),g.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,I.memory.geometries--}function i(a,s){return C[s.id]===!0||(s.addEventListener("dispose",E),C[s.id]=!0,I.memory.geometries++),s}function o(a){const s=a.attributes;for(const n in s)A.update(s[n],B.ARRAY_BUFFER);const h=a.morphAttributes;for(const n in h){const w=h[n];for(let r=0,S=w.length;r<S;r++)A.update(w[r],B.ARRAY_BUFFER)}}function e(a){const s=[],h=a.index,n=a.attributes.position;let w=0;if(h!==null){const y=h.array;w=h.version;for(let G=0,M=y.length;G<M;G+=3){const m=y[G+0],F=y[G+1],N=y[G+2];s.push(m,F,F,N,N,m)}}else if(n!==void 0){const y=n.array;w=n.version;for(let G=0,M=y.length/3-1;G<M;G+=3){const m=G+0,F=G+1,N=G+2;s.push(m,F,F,N,N,m)}}else return;const r=new(Ze(s)?tt:et)(s,1);r.version=w;const S=Q.get(a);S&&A.remove(S),Q.set(a,r)}function t(a){const s=Q.get(a);if(s){const h=a.index;h!==null&&s.version<h.version&&e(a)}else e(a);return Q.get(a)}return{get:i,update:o,getWireframeAttribute:t}}function pn(B,A,I){let g;function C(s){g=s}let Q,E;function i(s){Q=s.type,E=s.bytesPerElement}function o(s,h){B.drawElements(g,h,Q,s*E),I.update(h,g,1)}function e(s,h,n){n!==0&&(B.drawElementsInstanced(g,h,Q,s*E,n),I.update(h,g,n))}function t(s,h,n){if(n===0)return;A.get("WEBGL_multi_draw").multiDrawElementsWEBGL(g,h,0,Q,s,0,n);let w=0;for(let r=0;r<n;r++)w+=h[r];I.update(w,g,1)}function a(s,h,n,w){if(n===0)return;const r=A.get("WEBGL_multi_draw");if(r===null)for(let S=0;S<s.length;S++)e(s[S]/E,h[S],w[S]);else{r.multiDrawElementsInstancedWEBGL(g,h,0,Q,s,0,w,0,n);let S=0;for(let y=0;y<n;y++)S+=h[y];for(let y=0;y<w.length;y++)I.update(S,g,w[y])}}this.setMode=C,this.setIndex=i,this.render=o,this.renderInstances=e,this.renderMultiDraw=t,this.renderMultiDrawInstances=a}function dn(B){const A={geometries:0,textures:0},I={frame:0,calls:0,triangles:0,points:0,lines:0};function g(Q,E,i){switch(I.calls++,E){case B.TRIANGLES:I.triangles+=i*(Q/3);break;case B.LINES:I.lines+=i*(Q/2);break;case B.LINE_STRIP:I.lines+=i*(Q-1);break;case B.LINE_LOOP:I.lines+=i*Q;break;case B.POINTS:I.points+=i*Q;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",E);break}}function C(){I.calls=0,I.triangles=0,I.points=0,I.lines=0}return{memory:A,render:I,programs:null,autoReset:!0,reset:C,update:g}}function qn(B,A,I){const g=new WeakMap,C=new $A;function Q(E,i,o){const e=E.morphTargetInfluences,t=i.morphAttributes.position||i.morphAttributes.normal||i.morphAttributes.color,a=t!==void 0?t.length:0;let s=g.get(i);if(s===void 0||s.count!==a){let h=function(){H.dispose(),g.delete(i),i.removeEventListener("dispose",h)};s!==void 0&&s.texture.dispose();const n=i.morphAttributes.position!==void 0,w=i.morphAttributes.normal!==void 0,r=i.morphAttributes.color!==void 0,S=i.morphAttributes.position||[],y=i.morphAttributes.normal||[],G=i.morphAttributes.color||[];let M=0;n===!0&&(M=1),w===!0&&(M=2),r===!0&&(M=3);let m=i.attributes.position.count*M,F=1;m>A.maxTextureSize&&(F=Math.ceil(m/A.maxTextureSize),m=A.maxTextureSize);const N=new Float32Array(m*F*4*a),H=new Xe(N,m,F,a);H.type=XI,H.needsUpdate=!0;const P=M*4;for(let c=0;c<a;c++){const U=S[c],O=y[c],v=G[c],W=m*F*4*c;for(let $=0;$<U.count;$++){const b=$*P;n===!0&&(C.fromBufferAttribute(U,$),N[W+b+0]=C.x,N[W+b+1]=C.y,N[W+b+2]=C.z,N[W+b+3]=0),w===!0&&(C.fromBufferAttribute(O,$),N[W+b+4]=C.x,N[W+b+5]=C.y,N[W+b+6]=C.z,N[W+b+7]=0),r===!0&&(C.fromBufferAttribute(v,$),N[W+b+8]=C.x,N[W+b+9]=C.y,N[W+b+10]=C.z,N[W+b+11]=v.itemSize===4?C.w:1)}}s={count:a,texture:H,size:new vA(m,F)},g.set(i,s),i.addEventListener("dispose",h)}if(E.isInstancedMesh===!0&&E.morphTexture!==null)o.getUniforms().setValue(B,"morphTexture",E.morphTexture,I);else{let h=0;for(let w=0;w<e.length;w++)h+=e[w];const n=i.morphTargetsRelative?1:1-h;o.getUniforms().setValue(B,"morphTargetBaseInfluence",n),o.getUniforms().setValue(B,"morphTargetInfluences",e)}o.getUniforms().setValue(B,"morphTargetsTexture",s.texture,I),o.getUniforms().setValue(B,"morphTargetsTextureSize",s.size)}return{update:Q}}function Yn(B,A,I,g){let C=new WeakMap;function Q(o){const e=g.render.frame,t=o.geometry,a=A.get(o,t);if(C.get(a)!==e&&(A.update(a),C.set(a,e)),o.isInstancedMesh&&(o.hasEventListener("dispose",i)===!1&&o.addEventListener("dispose",i),C.get(o)!==e&&(I.update(o.instanceMatrix,B.ARRAY_BUFFER),o.instanceColor!==null&&I.update(o.instanceColor,B.ARRAY_BUFFER),C.set(o,e))),o.isSkinnedMesh){const s=o.skeleton;C.get(s)!==e&&(s.update(),C.set(s,e))}return a}function E(){C=new WeakMap}function i(o){const e=o.target;e.removeEventListener("dispose",i),I.remove(e.instanceMatrix),e.instanceColor!==null&&I.remove(e.instanceColor)}return{update:Q,dispose:E}}class Nt extends HI{constructor(A,I,g,C,Q,E,i,o,e,t=PC){if(t!==PC&&t!==jC)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");g===void 0&&t===PC&&(g=kC),g===void 0&&t===jC&&(g=WC),super(null,C,Q,E,i,o,t,g,e),this.isDepthTexture=!0,this.image={width:A,height:I},this.magFilter=i!==void 0?i:_I,this.minFilter=o!==void 0?o:_I,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(A){return super.copy(A),this.compareFunction=A.compareFunction,this}toJSON(A){const I=super.toJSON(A);return this.compareFunction!==null&&(I.compareFunction=this.compareFunction),I}}const Kt=new HI,Jt=new Nt(1,1),Ft=new Xe,Rt=new Sh,pt=new nt,dt=[],qt=[],Yt=new Float32Array(16),Lt=new Float32Array(9),ut=new Float32Array(4);function nB(B,A,I){const g=B[0];if(g<=0||g>0)return B;const C=A*I;let Q=dt[C];if(Q===void 0&&(Q=new Float32Array(C),dt[C]=Q),A!==0){g.toArray(Q,0);for(let E=1,i=0;E!==A;++E)i+=I,B[E].toArray(Q,i)}return Q}function pI(B,A){if(B.length!==A.length)return!1;for(let I=0,g=B.length;I<g;I++)if(B[I]!==A[I])return!1;return!0}function dI(B,A){for(let I=0,g=A.length;I<g;I++)B[I]=A[I]}function CE(B,A){let I=qt[A];I===void 0&&(I=new Int32Array(A),qt[A]=I);for(let g=0;g!==A;++g)I[g]=B.allocateTextureUnit();return I}function Ln(B,A){const I=this.cache;I[0]!==A&&(B.uniform1f(this.addr,A),I[0]=A)}function un(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(B.uniform2f(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(pI(I,A))return;B.uniform2fv(this.addr,A),dI(I,A)}}function Hn(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(B.uniform3f(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else if(A.r!==void 0)(I[0]!==A.r||I[1]!==A.g||I[2]!==A.b)&&(B.uniform3f(this.addr,A.r,A.g,A.b),I[0]=A.r,I[1]=A.g,I[2]=A.b);else{if(pI(I,A))return;B.uniform3fv(this.addr,A),dI(I,A)}}function mn(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(B.uniform4f(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(pI(I,A))return;B.uniform4fv(this.addr,A),dI(I,A)}}function fn(B,A){const I=this.cache,g=A.elements;if(g===void 0){if(pI(I,A))return;B.uniformMatrix2fv(this.addr,!1,A),dI(I,A)}else{if(pI(I,g))return;ut.set(g),B.uniformMatrix2fv(this.addr,!1,ut),dI(I,g)}}function Tn(B,A){const I=this.cache,g=A.elements;if(g===void 0){if(pI(I,A))return;B.uniformMatrix3fv(this.addr,!1,A),dI(I,A)}else{if(pI(I,g))return;Lt.set(g),B.uniformMatrix3fv(this.addr,!1,Lt),dI(I,g)}}function xn(B,A){const I=this.cache,g=A.elements;if(g===void 0){if(pI(I,A))return;B.uniformMatrix4fv(this.addr,!1,A),dI(I,A)}else{if(pI(I,g))return;Yt.set(g),B.uniformMatrix4fv(this.addr,!1,Yt),dI(I,g)}}function bn(B,A){const I=this.cache;I[0]!==A&&(B.uniform1i(this.addr,A),I[0]=A)}function On(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(B.uniform2i(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(pI(I,A))return;B.uniform2iv(this.addr,A),dI(I,A)}}function vn(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(B.uniform3i(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else{if(pI(I,A))return;B.uniform3iv(this.addr,A),dI(I,A)}}function _n(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(B.uniform4i(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(pI(I,A))return;B.uniform4iv(this.addr,A),dI(I,A)}}function Zn(B,A){const I=this.cache;I[0]!==A&&(B.uniform1ui(this.addr,A),I[0]=A)}function Wn(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(B.uniform2ui(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(pI(I,A))return;B.uniform2uiv(this.addr,A),dI(I,A)}}function Pn(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(B.uniform3ui(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else{if(pI(I,A))return;B.uniform3uiv(this.addr,A),dI(I,A)}}function jn(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(B.uniform4ui(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(pI(I,A))return;B.uniform4uiv(this.addr,A),dI(I,A)}}function Vn(B,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(B.uniform1i(this.addr,C),g[0]=C);let Q;this.type===B.SAMPLER_2D_SHADOW?(Jt.compareFunction=Oe,Q=Jt):Q=Kt,I.setTexture2D(A||Q,C)}function Xn(B,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(B.uniform1i(this.addr,C),g[0]=C),I.setTexture3D(A||Rt,C)}function zn(B,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(B.uniform1i(this.addr,C),g[0]=C),I.setTextureCube(A||pt,C)}function $n(B,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(B.uniform1i(this.addr,C),g[0]=C),I.setTexture2DArray(A||Ft,C)}function Aw(B){switch(B){case 5126:return Ln;case 35664:return un;case 35665:return Hn;case 35666:return mn;case 35674:return fn;case 35675:return Tn;case 35676:return xn;case 5124:case 35670:return bn;case 35667:case 35671:return On;case 35668:case 35672:return vn;case 35669:case 35673:return _n;case 5125:return Zn;case 36294:return Wn;case 36295:return Pn;case 36296:return jn;case 35678:case 36198:case 36298:case 36306:case 35682:return Vn;case 35679:case 36299:case 36307:return Xn;case 35680:case 36300:case 36308:case 36293:return zn;case 36289:case 36303:case 36311:case 36292:return $n}}function Iw(B,A){B.uniform1fv(this.addr,A)}function gw(B,A){const I=nB(A,this.size,2);B.uniform2fv(this.addr,I)}function Cw(B,A){const I=nB(A,this.size,3);B.uniform3fv(this.addr,I)}function Bw(B,A){const I=nB(A,this.size,4);B.uniform4fv(this.addr,I)}function Qw(B,A){const I=nB(A,this.size,4);B.uniformMatrix2fv(this.addr,!1,I)}function Ew(B,A){const I=nB(A,this.size,9);B.uniformMatrix3fv(this.addr,!1,I)}function iw(B,A){const I=nB(A,this.size,16);B.uniformMatrix4fv(this.addr,!1,I)}function ow(B,A){B.uniform1iv(this.addr,A)}function ew(B,A){B.uniform2iv(this.addr,A)}function tw(B,A){B.uniform3iv(this.addr,A)}function aw(B,A){B.uniform4iv(this.addr,A)}function sw(B,A){B.uniform1uiv(this.addr,A)}function Dw(B,A){B.uniform2uiv(this.addr,A)}function hw(B,A){B.uniform3uiv(this.addr,A)}function rw(B,A){B.uniform4uiv(this.addr,A)}function Sw(B,A,I){const g=this.cache,C=A.length,Q=CE(I,C);pI(g,Q)||(B.uniform1iv(this.addr,Q),dI(g,Q));for(let E=0;E!==C;++E)I.setTexture2D(A[E]||Kt,Q[E])}function nw(B,A,I){const g=this.cache,C=A.length,Q=CE(I,C);pI(g,Q)||(B.uniform1iv(this.addr,Q),dI(g,Q));for(let E=0;E!==C;++E)I.setTexture3D(A[E]||Rt,Q[E])}function ww(B,A,I){const g=this.cache,C=A.length,Q=CE(I,C);pI(g,Q)||(B.uniform1iv(this.addr,Q),dI(g,Q));for(let E=0;E!==C;++E)I.setTextureCube(A[E]||pt,Q[E])}function cw(B,A,I){const g=this.cache,C=A.length,Q=CE(I,C);pI(g,Q)||(B.uniform1iv(this.addr,Q),dI(g,Q));for(let E=0;E!==C;++E)I.setTexture2DArray(A[E]||Ft,Q[E])}function lw(B){switch(B){case 5126:return Iw;case 35664:return gw;case 35665:return Cw;case 35666:return Bw;case 35674:return Qw;case 35675:return Ew;case 35676:return iw;case 5124:case 35670:return ow;case 35667:case 35671:return ew;case 35668:case 35672:return tw;case 35669:case 35673:return aw;case 5125:return sw;case 36294:return Dw;case 36295:return hw;case 36296:return rw;case 35678:case 36198:case 36298:case 36306:case 35682:return Sw;case 35679:case 36299:case 36307:return nw;case 35680:case 36300:case 36308:case 36293:return ww;case 36289:case 36303:case 36311:case 36292:return cw}}class Gw{constructor(A,I,g){this.id=A,this.addr=g,this.cache=[],this.type=I.type,this.setValue=Aw(I.type)}}class kw{constructor(A,I,g){this.id=A,this.addr=g,this.cache=[],this.type=I.type,this.size=I.size,this.setValue=lw(I.type)}}class yw{constructor(A){this.id=A,this.seq=[],this.map={}}setValue(A,I,g){const C=this.seq;for(let Q=0,E=C.length;Q!==E;++Q){const i=C[Q];i.setValue(A,I[i.id],g)}}}const io=/(\w+)(\])?(\[|\.)?/g;function Ht(B,A){B.seq.push(A),B.map[A.id]=A}function Uw(B,A,I){const g=B.name,C=g.length;for(io.lastIndex=0;;){const Q=io.exec(g),E=io.lastIndex;let i=Q[1];const o=Q[2]==="]",e=Q[3];if(o&&(i=i|0),e===void 0||e==="["&&E+2===C){Ht(I,e===void 0?new Gw(i,B,A):new kw(i,B,A));break}else{let t=I.map[i];t===void 0&&(t=new yw(i),Ht(I,t)),I=t}}}class BE{constructor(A,I){this.seq=[],this.map={};const g=A.getProgramParameter(I,A.ACTIVE_UNIFORMS);for(let C=0;C<g;++C){const Q=A.getActiveUniform(I,C),E=A.getUniformLocation(I,Q.name);Uw(Q,E,this)}}setValue(A,I,g,C){const Q=this.map[I];Q!==void 0&&Q.setValue(A,g,C)}setOptional(A,I,g){const C=I[g];C!==void 0&&this.setValue(A,g,C)}static upload(A,I,g,C){for(let Q=0,E=I.length;Q!==E;++Q){const i=I[Q],o=g[i.id];o.needsUpdate!==!1&&i.setValue(A,o.value,C)}}static seqWithValue(A,I){const g=[];for(let C=0,Q=A.length;C!==Q;++C){const E=A[C];E.id in I&&g.push(E)}return g}}function mt(B,A,I){const g=B.createShader(A);return B.shaderSource(g,I),B.compileShader(g),g}const Mw=37297;let Nw=0;function Kw(B,A){const I=B.split(`
`),g=[],C=Math.max(A-6,0),Q=Math.min(A+6,I.length);for(let E=C;E<Q;E++){const i=E+1;g.push(`${i===A?">":" "} ${i}: ${I[E]}`)}return g.join(`
`)}function Jw(B){const A=jA.getPrimaries(jA.workingColorSpace),I=jA.getPrimaries(B);let g;switch(A===I?g="":A===dQ&&I===pQ?g="LinearDisplayP3ToLinearSRGB":A===pQ&&I===dQ&&(g="LinearSRGBToLinearDisplayP3"),B){case FI:case FQ:return[g,"LinearTransferOETF"];case uI:case Ji:return[g,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",B),[g,"LinearTransferOETF"]}}function ft(B,A,I){const g=B.getShaderParameter(A,B.COMPILE_STATUS),C=B.getShaderInfoLog(A).trim();if(g&&C==="")return"";const Q=/ERROR: 0:(\d+)/.exec(C);if(Q){const E=parseInt(Q[1]);return I.toUpperCase()+`

`+C+`

`+Kw(B.getShaderSource(A),E)}else return C}function Fw(B,A){const I=Jw(A);return`vec4 ${B}( vec4 value ) { return ${I[0]}( ${I[1]}( value ) ); }`}function Rw(B,A){let I;switch(A){case GD:I="Linear";break;case kD:I="Reinhard";break;case yD:I="Cineon";break;case UD:I="ACESFilmic";break;case ND:I="AgX";break;case KD:I="Neutral";break;case MD:I="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",A),I="Linear"}return"vec3 "+B+"( vec3 color ) { return "+I+"ToneMapping( color ); }"}const QE=new L;function pw(){jA.getLuminanceCoefficients(QE);const B=QE.x.toFixed(4),A=QE.y.toFixed(4),I=QE.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${B}, ${A}, ${I} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dw(B){return[B.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",B.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vB).join(`
`)}function qw(B){const A=[];for(const I in B){const g=B[I];g!==!1&&A.push("#define "+I+" "+g)}return A.join(`
`)}function Yw(B,A){const I={},g=B.getProgramParameter(A,B.ACTIVE_ATTRIBUTES);for(let C=0;C<g;C++){const Q=B.getActiveAttrib(A,C),E=Q.name;let i=1;Q.type===B.FLOAT_MAT2&&(i=2),Q.type===B.FLOAT_MAT3&&(i=3),Q.type===B.FLOAT_MAT4&&(i=4),I[E]={type:Q.type,location:B.getAttribLocation(A,E),locationSize:i}}return I}function vB(B){return B!==""}function Tt(B,A){const I=A.numSpotLightShadows+A.numSpotLightMaps-A.numSpotLightShadowsWithMaps;return B.replace(/NUM_DIR_LIGHTS/g,A.numDirLights).replace(/NUM_SPOT_LIGHTS/g,A.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,A.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,I).replace(/NUM_RECT_AREA_LIGHTS/g,A.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,A.numPointLights).replace(/NUM_HEMI_LIGHTS/g,A.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,A.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,A.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,A.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,A.numPointLightShadows)}function xt(B,A){return B.replace(/NUM_CLIPPING_PLANES/g,A.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,A.numClippingPlanes-A.numClipIntersection)}const Lw=/^[ \t]*#include +<([\w\d./]+)>/gm;function oo(B){return B.replace(Lw,Hw)}const uw=new Map;function Hw(B,A){let I=TA[A];if(I===void 0){const g=uw.get(A);if(g!==void 0)I=TA[g],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',A,g);else throw new Error("Can not resolve #include <"+A+">")}return oo(I)}const mw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bt(B){return B.replace(mw,fw)}function fw(B,A,I,g){let C="";for(let Q=parseInt(A);Q<parseInt(I);Q++)C+=g.replace(/\[\s*i\s*\]/g,"[ "+Q+" ]").replace(/UNROLLED_LOOP_INDEX/g,Q);return C}function Ot(B){let A=`precision ${B.precision} float;
	precision ${B.precision} int;
	precision ${B.precision} sampler2D;
	precision ${B.precision} samplerCube;
	precision ${B.precision} sampler3D;
	precision ${B.precision} sampler2DArray;
	precision ${B.precision} sampler2DShadow;
	precision ${B.precision} samplerCubeShadow;
	precision ${B.precision} sampler2DArrayShadow;
	precision ${B.precision} isampler2D;
	precision ${B.precision} isampler3D;
	precision ${B.precision} isamplerCube;
	precision ${B.precision} isampler2DArray;
	precision ${B.precision} usampler2D;
	precision ${B.precision} usampler3D;
	precision ${B.precision} usamplerCube;
	precision ${B.precision} usampler2DArray;
	`;return B.precision==="highp"?A+=`
#define HIGH_PRECISION`:B.precision==="mediump"?A+=`
#define MEDIUM_PRECISION`:B.precision==="lowp"&&(A+=`
#define LOW_PRECISION`),A}function Tw(B){let A="SHADOWMAP_TYPE_BASIC";return B.shadowMapType===ye?A="SHADOWMAP_TYPE_PCF":B.shadowMapType===AD?A="SHADOWMAP_TYPE_PCF_SOFT":B.shadowMapType===Hg&&(A="SHADOWMAP_TYPE_VSM"),A}function xw(B){let A="ENVMAP_TYPE_CUBE";if(B.envMap)switch(B.envMapMode){case vC:case _C:A="ENVMAP_TYPE_CUBE";break;case lQ:A="ENVMAP_TYPE_CUBE_UV";break}return A}function bw(B){let A="ENVMAP_MODE_REFLECTION";if(B.envMap)switch(B.envMapMode){case _C:A="ENVMAP_MODE_REFRACTION";break}return A}function Ow(B){let A="ENVMAP_BLENDING_NONE";if(B.envMap)switch(B.combine){case Ke:A="ENVMAP_BLENDING_MULTIPLY";break;case cD:A="ENVMAP_BLENDING_MIX";break;case lD:A="ENVMAP_BLENDING_ADD";break}return A}function vw(B){const A=B.envMapCubeUVHeight;if(A===null)return null;const I=Math.log2(A)-2,g=1/A;return{texelWidth:1/(3*Math.max(Math.pow(2,I),7*16)),texelHeight:g,maxMip:I}}function _w(B,A,I,g){const C=B.getContext(),Q=I.defines;let E=I.vertexShader,i=I.fragmentShader;const o=Tw(I),e=xw(I),t=bw(I),a=Ow(I),s=vw(I),h=dw(I),n=qw(Q),w=C.createProgram();let r,S,y=I.glslVersion?"#version "+I.glslVersion+`
`:"";I.isRawShaderMaterial?(r=["#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,n].filter(vB).join(`
`),r.length>0&&(r+=`
`),S=["#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,n].filter(vB).join(`
`),S.length>0&&(S+=`
`)):(r=[Ot(I),"#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,n,I.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",I.batching?"#define USE_BATCHING":"",I.batchingColor?"#define USE_BATCHING_COLOR":"",I.instancing?"#define USE_INSTANCING":"",I.instancingColor?"#define USE_INSTANCING_COLOR":"",I.instancingMorph?"#define USE_INSTANCING_MORPH":"",I.useFog&&I.fog?"#define USE_FOG":"",I.useFog&&I.fogExp2?"#define FOG_EXP2":"",I.map?"#define USE_MAP":"",I.envMap?"#define USE_ENVMAP":"",I.envMap?"#define "+t:"",I.lightMap?"#define USE_LIGHTMAP":"",I.aoMap?"#define USE_AOMAP":"",I.bumpMap?"#define USE_BUMPMAP":"",I.normalMap?"#define USE_NORMALMAP":"",I.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",I.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",I.displacementMap?"#define USE_DISPLACEMENTMAP":"",I.emissiveMap?"#define USE_EMISSIVEMAP":"",I.anisotropy?"#define USE_ANISOTROPY":"",I.anisotropyMap?"#define USE_ANISOTROPYMAP":"",I.clearcoatMap?"#define USE_CLEARCOATMAP":"",I.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",I.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",I.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",I.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",I.specularMap?"#define USE_SPECULARMAP":"",I.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",I.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",I.roughnessMap?"#define USE_ROUGHNESSMAP":"",I.metalnessMap?"#define USE_METALNESSMAP":"",I.alphaMap?"#define USE_ALPHAMAP":"",I.alphaHash?"#define USE_ALPHAHASH":"",I.transmission?"#define USE_TRANSMISSION":"",I.transmissionMap?"#define USE_TRANSMISSIONMAP":"",I.thicknessMap?"#define USE_THICKNESSMAP":"",I.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",I.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",I.mapUv?"#define MAP_UV "+I.mapUv:"",I.alphaMapUv?"#define ALPHAMAP_UV "+I.alphaMapUv:"",I.lightMapUv?"#define LIGHTMAP_UV "+I.lightMapUv:"",I.aoMapUv?"#define AOMAP_UV "+I.aoMapUv:"",I.emissiveMapUv?"#define EMISSIVEMAP_UV "+I.emissiveMapUv:"",I.bumpMapUv?"#define BUMPMAP_UV "+I.bumpMapUv:"",I.normalMapUv?"#define NORMALMAP_UV "+I.normalMapUv:"",I.displacementMapUv?"#define DISPLACEMENTMAP_UV "+I.displacementMapUv:"",I.metalnessMapUv?"#define METALNESSMAP_UV "+I.metalnessMapUv:"",I.roughnessMapUv?"#define ROUGHNESSMAP_UV "+I.roughnessMapUv:"",I.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+I.anisotropyMapUv:"",I.clearcoatMapUv?"#define CLEARCOATMAP_UV "+I.clearcoatMapUv:"",I.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+I.clearcoatNormalMapUv:"",I.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+I.clearcoatRoughnessMapUv:"",I.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+I.iridescenceMapUv:"",I.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+I.iridescenceThicknessMapUv:"",I.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+I.sheenColorMapUv:"",I.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+I.sheenRoughnessMapUv:"",I.specularMapUv?"#define SPECULARMAP_UV "+I.specularMapUv:"",I.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+I.specularColorMapUv:"",I.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+I.specularIntensityMapUv:"",I.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+I.transmissionMapUv:"",I.thicknessMapUv?"#define THICKNESSMAP_UV "+I.thicknessMapUv:"",I.vertexTangents&&I.flatShading===!1?"#define USE_TANGENT":"",I.vertexColors?"#define USE_COLOR":"",I.vertexAlphas?"#define USE_COLOR_ALPHA":"",I.vertexUv1s?"#define USE_UV1":"",I.vertexUv2s?"#define USE_UV2":"",I.vertexUv3s?"#define USE_UV3":"",I.pointsUvs?"#define USE_POINTS_UV":"",I.flatShading?"#define FLAT_SHADED":"",I.skinning?"#define USE_SKINNING":"",I.morphTargets?"#define USE_MORPHTARGETS":"",I.morphNormals&&I.flatShading===!1?"#define USE_MORPHNORMALS":"",I.morphColors?"#define USE_MORPHCOLORS":"",I.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+I.morphTextureStride:"",I.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+I.morphTargetsCount:"",I.doubleSided?"#define DOUBLE_SIDED":"",I.flipSided?"#define FLIP_SIDED":"",I.shadowMapEnabled?"#define USE_SHADOWMAP":"",I.shadowMapEnabled?"#define "+o:"",I.sizeAttenuation?"#define USE_SIZEATTENUATION":"",I.numLightProbes>0?"#define USE_LIGHT_PROBES":"",I.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",I.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vB).join(`
`),S=[Ot(I),"#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,n,I.useFog&&I.fog?"#define USE_FOG":"",I.useFog&&I.fogExp2?"#define FOG_EXP2":"",I.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",I.map?"#define USE_MAP":"",I.matcap?"#define USE_MATCAP":"",I.envMap?"#define USE_ENVMAP":"",I.envMap?"#define "+e:"",I.envMap?"#define "+t:"",I.envMap?"#define "+a:"",s?"#define CUBEUV_TEXEL_WIDTH "+s.texelWidth:"",s?"#define CUBEUV_TEXEL_HEIGHT "+s.texelHeight:"",s?"#define CUBEUV_MAX_MIP "+s.maxMip+".0":"",I.lightMap?"#define USE_LIGHTMAP":"",I.aoMap?"#define USE_AOMAP":"",I.bumpMap?"#define USE_BUMPMAP":"",I.normalMap?"#define USE_NORMALMAP":"",I.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",I.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",I.emissiveMap?"#define USE_EMISSIVEMAP":"",I.anisotropy?"#define USE_ANISOTROPY":"",I.anisotropyMap?"#define USE_ANISOTROPYMAP":"",I.clearcoat?"#define USE_CLEARCOAT":"",I.clearcoatMap?"#define USE_CLEARCOATMAP":"",I.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",I.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",I.dispersion?"#define USE_DISPERSION":"",I.iridescence?"#define USE_IRIDESCENCE":"",I.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",I.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",I.specularMap?"#define USE_SPECULARMAP":"",I.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",I.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",I.roughnessMap?"#define USE_ROUGHNESSMAP":"",I.metalnessMap?"#define USE_METALNESSMAP":"",I.alphaMap?"#define USE_ALPHAMAP":"",I.alphaTest?"#define USE_ALPHATEST":"",I.alphaHash?"#define USE_ALPHAHASH":"",I.sheen?"#define USE_SHEEN":"",I.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",I.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",I.transmission?"#define USE_TRANSMISSION":"",I.transmissionMap?"#define USE_TRANSMISSIONMAP":"",I.thicknessMap?"#define USE_THICKNESSMAP":"",I.vertexTangents&&I.flatShading===!1?"#define USE_TANGENT":"",I.vertexColors||I.instancingColor||I.batchingColor?"#define USE_COLOR":"",I.vertexAlphas?"#define USE_COLOR_ALPHA":"",I.vertexUv1s?"#define USE_UV1":"",I.vertexUv2s?"#define USE_UV2":"",I.vertexUv3s?"#define USE_UV3":"",I.pointsUvs?"#define USE_POINTS_UV":"",I.gradientMap?"#define USE_GRADIENTMAP":"",I.flatShading?"#define FLAT_SHADED":"",I.doubleSided?"#define DOUBLE_SIDED":"",I.flipSided?"#define FLIP_SIDED":"",I.shadowMapEnabled?"#define USE_SHADOWMAP":"",I.shadowMapEnabled?"#define "+o:"",I.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",I.numLightProbes>0?"#define USE_LIGHT_PROBES":"",I.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",I.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",I.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",I.toneMapping!==BC?"#define TONE_MAPPING":"",I.toneMapping!==BC?TA.tonemapping_pars_fragment:"",I.toneMapping!==BC?Rw("toneMapping",I.toneMapping):"",I.dithering?"#define DITHERING":"",I.opaque?"#define OPAQUE":"",TA.colorspace_pars_fragment,Fw("linearToOutputTexel",I.outputColorSpace),pw(),I.useDepthPacking?"#define DEPTH_PACKING "+I.depthPacking:"",`
`].filter(vB).join(`
`)),E=oo(E),E=Tt(E,I),E=xt(E,I),i=oo(i),i=Tt(i,I),i=xt(i,I),E=bt(E),i=bt(i),I.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,r=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+r,S=["#define varying in",I.glslVersion===ve?"":"layout(location = 0) out highp vec4 pc_fragColor;",I.glslVersion===ve?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const G=y+r+E,M=y+S+i,m=mt(C,C.VERTEX_SHADER,G),F=mt(C,C.FRAGMENT_SHADER,M);C.attachShader(w,m),C.attachShader(w,F),I.index0AttributeName!==void 0?C.bindAttribLocation(w,0,I.index0AttributeName):I.morphTargets===!0&&C.bindAttribLocation(w,0,"position"),C.linkProgram(w);function N(U){if(B.debug.checkShaderErrors){const O=C.getProgramInfoLog(w).trim(),v=C.getShaderInfoLog(m).trim(),W=C.getShaderInfoLog(F).trim();let $=!0,b=!0;if(C.getProgramParameter(w,C.LINK_STATUS)===!1)if($=!1,typeof B.debug.onShaderError=="function")B.debug.onShaderError(C,w,m,F);else{const IA=ft(C,m,"vertex"),Z=ft(C,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+C.getError()+" - VALIDATE_STATUS "+C.getProgramParameter(w,C.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+O+`
`+IA+`
`+Z)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(v===""||W==="")&&(b=!1);b&&(U.diagnostics={runnable:$,programLog:O,vertexShader:{log:v,prefix:r},fragmentShader:{log:W,prefix:S}})}C.deleteShader(m),C.deleteShader(F),H=new BE(C,w),P=Yw(C,w)}let H;this.getUniforms=function(){return H===void 0&&N(this),H};let P;this.getAttributes=function(){return P===void 0&&N(this),P};let c=I.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return c===!1&&(c=C.getProgramParameter(w,Mw)),c},this.destroy=function(){g.releaseStatesOfProgram(this),C.deleteProgram(w),this.program=void 0},this.type=I.shaderType,this.name=I.shaderName,this.id=Nw++,this.cacheKey=A,this.usedTimes=1,this.program=w,this.vertexShader=m,this.fragmentShader=F,this}let Zw=0;class Ww{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(A){const I=A.vertexShader,g=A.fragmentShader,C=this._getShaderStage(I),Q=this._getShaderStage(g),E=this._getShaderCacheForMaterial(A);return E.has(C)===!1&&(E.add(C),C.usedTimes++),E.has(Q)===!1&&(E.add(Q),Q.usedTimes++),this}remove(A){const I=this.materialCache.get(A);for(const g of I)g.usedTimes--,g.usedTimes===0&&this.shaderCache.delete(g.code);return this.materialCache.delete(A),this}getVertexShaderID(A){return this._getShaderStage(A.vertexShader).id}getFragmentShaderID(A){return this._getShaderStage(A.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(A){const I=this.materialCache;let g=I.get(A);return g===void 0&&(g=new Set,I.set(A,g)),g}_getShaderStage(A){const I=this.shaderCache;let g=I.get(A);return g===void 0&&(g=new Pw(A),I.set(A,g)),g}}class Pw{constructor(A){this.id=Zw++,this.code=A,this.usedTimes=0}}function jw(B,A,I,g,C,Q,E){const i=new It,o=new Ww,e=new Set,t=[],a=C.logarithmicDepthBuffer,s=C.reverseDepthBuffer,h=C.vertexTextures;let n=C.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function r(c){return e.add(c),c===0?"uv":`uv${c}`}function S(c,U,O,v,W){const $=v.fog,b=W.geometry,IA=c.isMeshStandardMaterial?v.environment:null,Z=(c.isMeshStandardMaterial?I:A).get(c.envMap||IA),EA=Z&&Z.mapping===lQ?Z.image.height:null,cA=w[c.type];c.precision!==null&&(n=C.getMaxPrecision(c.precision),n!==c.precision&&console.warn("THREE.WebGLProgram.getParameters:",c.precision,"not supported, using",n,"instead."));const KA=b.morphAttributes.position||b.morphAttributes.normal||b.morphAttributes.color,AI=KA!==void 0?KA.length:0;let QI=0;b.morphAttributes.position!==void 0&&(QI=1),b.morphAttributes.normal!==void 0&&(QI=2),b.morphAttributes.color!==void 0&&(QI=3);let j,CA,nA,sA;if(cA){const Ig=pg[cA];j=Ig.vertexShader,CA=Ig.fragmentShader}else j=c.vertexShader,CA=c.fragmentShader,o.update(c),nA=o.getVertexShaderID(c),sA=o.getFragmentShaderID(c);const HA=B.getRenderTarget(),RA=W.isInstancedMesh===!0,VA=W.isBatchedMesh===!0,EI=!!c.map,XA=!!c.matcap,R=!!Z,Eg=!!c.aoMap,ZA=!!c.lightMap,zA=!!c.bumpMap,dA=!!c.normalMap,hI=!!c.displacementMap,LA=!!c.emissiveMap,K=!!c.metalnessMap,l=!!c.roughnessMap,f=c.anisotropy>0,X=c.clearcoat>0,AA=c.dispersion>0,V=c.iridescence>0,GA=c.sheen>0,oA=c.transmission>0,rA=f&&!!c.anisotropyMap,WA=X&&!!c.clearcoatMap,BA=X&&!!c.clearcoatNormalMap,wA=X&&!!c.clearcoatRoughnessMap,qA=V&&!!c.iridescenceMap,YA=V&&!!c.iridescenceThicknessMap,DA=GA&&!!c.sheenColorMap,PA=GA&&!!c.sheenRoughnessMap,mA=!!c.specularMap,tI=!!c.specularColorMap,q=!!c.specularIntensityMap,tA=oA&&!!c.transmissionMap,_=oA&&!!c.thicknessMap,z=!!c.gradientMap,eA=!!c.alphaMap,iA=c.alphaTest>0,aI=!!c.alphaHash,JI=!!c.extensions;let Ag=BC;c.toneMapped&&(HA===null||HA.isXRRenderTarget===!0)&&(Ag=B.toneMapping);const II={shaderID:cA,shaderType:c.type,shaderName:c.name,vertexShader:j,fragmentShader:CA,defines:c.defines,customVertexShaderID:nA,customFragmentShaderID:sA,isRawShaderMaterial:c.isRawShaderMaterial===!0,glslVersion:c.glslVersion,precision:n,batching:VA,batchingColor:VA&&W._colorsTexture!==null,instancing:RA,instancingColor:RA&&W.instanceColor!==null,instancingMorph:RA&&W.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:HA===null?B.outputColorSpace:HA.isXRRenderTarget===!0?HA.texture.colorSpace:FI,alphaToCoverage:!!c.alphaToCoverage,map:EI,matcap:XA,envMap:R,envMapMode:R&&Z.mapping,envMapCubeUVHeight:EA,aoMap:Eg,lightMap:ZA,bumpMap:zA,normalMap:dA,displacementMap:h&&hI,emissiveMap:LA,normalMapObjectSpace:dA&&c.normalMapType===uD,normalMapTangentSpace:dA&&c.normalMapType===xe,metalnessMap:K,roughnessMap:l,anisotropy:f,anisotropyMap:rA,clearcoat:X,clearcoatMap:WA,clearcoatNormalMap:BA,clearcoatRoughnessMap:wA,dispersion:AA,iridescence:V,iridescenceMap:qA,iridescenceThicknessMap:YA,sheen:GA,sheenColorMap:DA,sheenRoughnessMap:PA,specularMap:mA,specularColorMap:tI,specularIntensityMap:q,transmission:oA,transmissionMap:tA,thicknessMap:_,gradientMap:z,opaque:c.transparent===!1&&c.blending===bC&&c.alphaToCoverage===!1,alphaMap:eA,alphaTest:iA,alphaHash:aI,combine:c.combine,mapUv:EI&&r(c.map.channel),aoMapUv:Eg&&r(c.aoMap.channel),lightMapUv:ZA&&r(c.lightMap.channel),bumpMapUv:zA&&r(c.bumpMap.channel),normalMapUv:dA&&r(c.normalMap.channel),displacementMapUv:hI&&r(c.displacementMap.channel),emissiveMapUv:LA&&r(c.emissiveMap.channel),metalnessMapUv:K&&r(c.metalnessMap.channel),roughnessMapUv:l&&r(c.roughnessMap.channel),anisotropyMapUv:rA&&r(c.anisotropyMap.channel),clearcoatMapUv:WA&&r(c.clearcoatMap.channel),clearcoatNormalMapUv:BA&&r(c.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:wA&&r(c.clearcoatRoughnessMap.channel),iridescenceMapUv:qA&&r(c.iridescenceMap.channel),iridescenceThicknessMapUv:YA&&r(c.iridescenceThicknessMap.channel),sheenColorMapUv:DA&&r(c.sheenColorMap.channel),sheenRoughnessMapUv:PA&&r(c.sheenRoughnessMap.channel),specularMapUv:mA&&r(c.specularMap.channel),specularColorMapUv:tI&&r(c.specularColorMap.channel),specularIntensityMapUv:q&&r(c.specularIntensityMap.channel),transmissionMapUv:tA&&r(c.transmissionMap.channel),thicknessMapUv:_&&r(c.thicknessMap.channel),alphaMapUv:eA&&r(c.alphaMap.channel),vertexTangents:!!b.attributes.tangent&&(dA||f),vertexColors:c.vertexColors,vertexAlphas:c.vertexColors===!0&&!!b.attributes.color&&b.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!b.attributes.uv&&(EI||eA),fog:!!$,useFog:c.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:c.flatShading===!0,sizeAttenuation:c.sizeAttenuation===!0,logarithmicDepthBuffer:a,reverseDepthBuffer:s,skinning:W.isSkinnedMesh===!0,morphTargets:b.morphAttributes.position!==void 0,morphNormals:b.morphAttributes.normal!==void 0,morphColors:b.morphAttributes.color!==void 0,morphTargetsCount:AI,morphTextureStride:QI,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numClippingPlanes:E.numPlanes,numClipIntersection:E.numIntersection,dithering:c.dithering,shadowMapEnabled:B.shadowMap.enabled&&O.length>0,shadowMapType:B.shadowMap.type,toneMapping:Ag,decodeVideoTexture:EI&&c.map.isVideoTexture===!0&&jA.getTransfer(c.map.colorSpace)===sI,premultipliedAlpha:c.premultipliedAlpha,doubleSided:c.side===Ng,flipSided:c.side===VI,useDepthPacking:c.depthPacking>=0,depthPacking:c.depthPacking||0,index0AttributeName:c.index0AttributeName,extensionClipCullDistance:JI&&c.extensions.clipCullDistance===!0&&g.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(JI&&c.extensions.multiDraw===!0||VA)&&g.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:g.has("KHR_parallel_shader_compile"),customProgramCacheKey:c.customProgramCacheKey()};return II.vertexUv1s=e.has(1),II.vertexUv2s=e.has(2),II.vertexUv3s=e.has(3),e.clear(),II}function y(c){const U=[];if(c.shaderID?U.push(c.shaderID):(U.push(c.customVertexShaderID),U.push(c.customFragmentShaderID)),c.defines!==void 0)for(const O in c.defines)U.push(O),U.push(c.defines[O]);return c.isRawShaderMaterial===!1&&(G(U,c),M(U,c),U.push(B.outputColorSpace)),U.push(c.customProgramCacheKey),U.join()}function G(c,U){c.push(U.precision),c.push(U.outputColorSpace),c.push(U.envMapMode),c.push(U.envMapCubeUVHeight),c.push(U.mapUv),c.push(U.alphaMapUv),c.push(U.lightMapUv),c.push(U.aoMapUv),c.push(U.bumpMapUv),c.push(U.normalMapUv),c.push(U.displacementMapUv),c.push(U.emissiveMapUv),c.push(U.metalnessMapUv),c.push(U.roughnessMapUv),c.push(U.anisotropyMapUv),c.push(U.clearcoatMapUv),c.push(U.clearcoatNormalMapUv),c.push(U.clearcoatRoughnessMapUv),c.push(U.iridescenceMapUv),c.push(U.iridescenceThicknessMapUv),c.push(U.sheenColorMapUv),c.push(U.sheenRoughnessMapUv),c.push(U.specularMapUv),c.push(U.specularColorMapUv),c.push(U.specularIntensityMapUv),c.push(U.transmissionMapUv),c.push(U.thicknessMapUv),c.push(U.combine),c.push(U.fogExp2),c.push(U.sizeAttenuation),c.push(U.morphTargetsCount),c.push(U.morphAttributeCount),c.push(U.numDirLights),c.push(U.numPointLights),c.push(U.numSpotLights),c.push(U.numSpotLightMaps),c.push(U.numHemiLights),c.push(U.numRectAreaLights),c.push(U.numDirLightShadows),c.push(U.numPointLightShadows),c.push(U.numSpotLightShadows),c.push(U.numSpotLightShadowsWithMaps),c.push(U.numLightProbes),c.push(U.shadowMapType),c.push(U.toneMapping),c.push(U.numClippingPlanes),c.push(U.numClipIntersection),c.push(U.depthPacking)}function M(c,U){i.disableAll(),U.supportsVertexTextures&&i.enable(0),U.instancing&&i.enable(1),U.instancingColor&&i.enable(2),U.instancingMorph&&i.enable(3),U.matcap&&i.enable(4),U.envMap&&i.enable(5),U.normalMapObjectSpace&&i.enable(6),U.normalMapTangentSpace&&i.enable(7),U.clearcoat&&i.enable(8),U.iridescence&&i.enable(9),U.alphaTest&&i.enable(10),U.vertexColors&&i.enable(11),U.vertexAlphas&&i.enable(12),U.vertexUv1s&&i.enable(13),U.vertexUv2s&&i.enable(14),U.vertexUv3s&&i.enable(15),U.vertexTangents&&i.enable(16),U.anisotropy&&i.enable(17),U.alphaHash&&i.enable(18),U.batching&&i.enable(19),U.dispersion&&i.enable(20),U.batchingColor&&i.enable(21),c.push(i.mask),i.disableAll(),U.fog&&i.enable(0),U.useFog&&i.enable(1),U.flatShading&&i.enable(2),U.logarithmicDepthBuffer&&i.enable(3),U.reverseDepthBuffer&&i.enable(4),U.skinning&&i.enable(5),U.morphTargets&&i.enable(6),U.morphNormals&&i.enable(7),U.morphColors&&i.enable(8),U.premultipliedAlpha&&i.enable(9),U.shadowMapEnabled&&i.enable(10),U.doubleSided&&i.enable(11),U.flipSided&&i.enable(12),U.useDepthPacking&&i.enable(13),U.dithering&&i.enable(14),U.transmission&&i.enable(15),U.sheen&&i.enable(16),U.opaque&&i.enable(17),U.pointsUvs&&i.enable(18),U.decodeVideoTexture&&i.enable(19),U.alphaToCoverage&&i.enable(20),c.push(i.mask)}function m(c){const U=w[c.type];let O;if(U){const v=pg[U];O=ph.clone(v.uniforms)}else O=c.uniforms;return O}function F(c,U){let O;for(let v=0,W=t.length;v<W;v++){const $=t[v];if($.cacheKey===U){O=$,++O.usedTimes;break}}return O===void 0&&(O=new _w(B,U,c,Q),t.push(O)),O}function N(c){if(--c.usedTimes===0){const U=t.indexOf(c);t[U]=t[t.length-1],t.pop(),c.destroy()}}function H(c){o.remove(c)}function P(){o.dispose()}return{getParameters:S,getProgramCacheKey:y,getUniforms:m,acquireProgram:F,releaseProgram:N,releaseShaderCache:H,programs:t,dispose:P}}function Vw(){let B=new WeakMap;function A(E){return B.has(E)}function I(E){let i=B.get(E);return i===void 0&&(i={},B.set(E,i)),i}function g(E){B.delete(E)}function C(E,i,o){B.get(E)[i]=o}function Q(){B=new WeakMap}return{has:A,get:I,remove:g,update:C,dispose:Q}}function Xw(B,A){return B.groupOrder!==A.groupOrder?B.groupOrder-A.groupOrder:B.renderOrder!==A.renderOrder?B.renderOrder-A.renderOrder:B.material.id!==A.material.id?B.material.id-A.material.id:B.z!==A.z?B.z-A.z:B.id-A.id}function vt(B,A){return B.groupOrder!==A.groupOrder?B.groupOrder-A.groupOrder:B.renderOrder!==A.renderOrder?B.renderOrder-A.renderOrder:B.z!==A.z?A.z-B.z:B.id-A.id}function _t(){const B=[];let A=0;const I=[],g=[],C=[];function Q(){A=0,I.length=0,g.length=0,C.length=0}function E(a,s,h,n,w,r){let S=B[A];return S===void 0?(S={id:a.id,object:a,geometry:s,material:h,groupOrder:n,renderOrder:a.renderOrder,z:w,group:r},B[A]=S):(S.id=a.id,S.object=a,S.geometry=s,S.material=h,S.groupOrder=n,S.renderOrder=a.renderOrder,S.z=w,S.group=r),A++,S}function i(a,s,h,n,w,r){const S=E(a,s,h,n,w,r);h.transmission>0?g.push(S):h.transparent===!0?C.push(S):I.push(S)}function o(a,s,h,n,w,r){const S=E(a,s,h,n,w,r);h.transmission>0?g.unshift(S):h.transparent===!0?C.unshift(S):I.unshift(S)}function e(a,s){I.length>1&&I.sort(a||Xw),g.length>1&&g.sort(s||vt),C.length>1&&C.sort(s||vt)}function t(){for(let a=A,s=B.length;a<s;a++){const h=B[a];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:I,transmissive:g,transparent:C,init:Q,push:i,unshift:o,finish:t,sort:e}}function zw(){let B=new WeakMap;function A(g,C){const Q=B.get(g);let E;return Q===void 0?(E=new _t,B.set(g,[E])):C>=Q.length?(E=new _t,Q.push(E)):E=Q[C],E}function I(){B=new WeakMap}return{get:A,dispose:I}}function $w(){const B={};return{get:function(A){if(B[A.id]!==void 0)return B[A.id];let I;switch(A.type){case"DirectionalLight":I={direction:new L,color:new MA};break;case"SpotLight":I={position:new L,direction:new L,color:new MA,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":I={position:new L,color:new MA,distance:0,decay:0};break;case"HemisphereLight":I={direction:new L,skyColor:new MA,groundColor:new MA};break;case"RectAreaLight":I={color:new MA,position:new L,halfWidth:new L,halfHeight:new L};break}return B[A.id]=I,I}}}function Ac(){const B={};return{get:function(A){if(B[A.id]!==void 0)return B[A.id];let I;switch(A.type){case"DirectionalLight":I={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vA};break;case"SpotLight":I={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vA};break;case"PointLight":I={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vA,shadowCameraNear:1,shadowCameraFar:1e3};break}return B[A.id]=I,I}}}let Ic=0;function gc(B,A){return(A.castShadow?2:0)-(B.castShadow?2:0)+(A.map?1:0)-(B.map?1:0)}function Cc(B){const A=new $w,I=Ac(),g={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)g.probe.push(new L);const C=new L,Q=new uA,E=new uA;function i(e){let t=0,a=0,s=0;for(let P=0;P<9;P++)g.probe[P].set(0,0,0);let h=0,n=0,w=0,r=0,S=0,y=0,G=0,M=0,m=0,F=0,N=0;e.sort(gc);for(let P=0,c=e.length;P<c;P++){const U=e[P],O=U.color,v=U.intensity,W=U.distance,$=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)t+=O.r*v,a+=O.g*v,s+=O.b*v;else if(U.isLightProbe){for(let b=0;b<9;b++)g.probe[b].addScaledVector(U.sh.coefficients[b],v);N++}else if(U.isDirectionalLight){const b=A.get(U);if(b.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const IA=U.shadow,Z=I.get(U);Z.shadowIntensity=IA.intensity,Z.shadowBias=IA.bias,Z.shadowNormalBias=IA.normalBias,Z.shadowRadius=IA.radius,Z.shadowMapSize=IA.mapSize,g.directionalShadow[h]=Z,g.directionalShadowMap[h]=$,g.directionalShadowMatrix[h]=U.shadow.matrix,y++}g.directional[h]=b,h++}else if(U.isSpotLight){const b=A.get(U);b.position.setFromMatrixPosition(U.matrixWorld),b.color.copy(O).multiplyScalar(v),b.distance=W,b.coneCos=Math.cos(U.angle),b.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),b.decay=U.decay,g.spot[w]=b;const IA=U.shadow;if(U.map&&(g.spotLightMap[m]=U.map,m++,IA.updateMatrices(U),U.castShadow&&F++),g.spotLightMatrix[w]=IA.matrix,U.castShadow){const Z=I.get(U);Z.shadowIntensity=IA.intensity,Z.shadowBias=IA.bias,Z.shadowNormalBias=IA.normalBias,Z.shadowRadius=IA.radius,Z.shadowMapSize=IA.mapSize,g.spotShadow[w]=Z,g.spotShadowMap[w]=$,M++}w++}else if(U.isRectAreaLight){const b=A.get(U);b.color.copy(O).multiplyScalar(v),b.halfWidth.set(U.width*.5,0,0),b.halfHeight.set(0,U.height*.5,0),g.rectArea[r]=b,r++}else if(U.isPointLight){const b=A.get(U);if(b.color.copy(U.color).multiplyScalar(U.intensity),b.distance=U.distance,b.decay=U.decay,U.castShadow){const IA=U.shadow,Z=I.get(U);Z.shadowIntensity=IA.intensity,Z.shadowBias=IA.bias,Z.shadowNormalBias=IA.normalBias,Z.shadowRadius=IA.radius,Z.shadowMapSize=IA.mapSize,Z.shadowCameraNear=IA.camera.near,Z.shadowCameraFar=IA.camera.far,g.pointShadow[n]=Z,g.pointShadowMap[n]=$,g.pointShadowMatrix[n]=U.shadow.matrix,G++}g.point[n]=b,n++}else if(U.isHemisphereLight){const b=A.get(U);b.skyColor.copy(U.color).multiplyScalar(v),b.groundColor.copy(U.groundColor).multiplyScalar(v),g.hemi[S]=b,S++}}r>0&&(B.has("OES_texture_float_linear")===!0?(g.rectAreaLTC1=QA.LTC_FLOAT_1,g.rectAreaLTC2=QA.LTC_FLOAT_2):(g.rectAreaLTC1=QA.LTC_HALF_1,g.rectAreaLTC2=QA.LTC_HALF_2)),g.ambient[0]=t,g.ambient[1]=a,g.ambient[2]=s;const H=g.hash;(H.directionalLength!==h||H.pointLength!==n||H.spotLength!==w||H.rectAreaLength!==r||H.hemiLength!==S||H.numDirectionalShadows!==y||H.numPointShadows!==G||H.numSpotShadows!==M||H.numSpotMaps!==m||H.numLightProbes!==N)&&(g.directional.length=h,g.spot.length=w,g.rectArea.length=r,g.point.length=n,g.hemi.length=S,g.directionalShadow.length=y,g.directionalShadowMap.length=y,g.pointShadow.length=G,g.pointShadowMap.length=G,g.spotShadow.length=M,g.spotShadowMap.length=M,g.directionalShadowMatrix.length=y,g.pointShadowMatrix.length=G,g.spotLightMatrix.length=M+m-F,g.spotLightMap.length=m,g.numSpotLightShadowsWithMaps=F,g.numLightProbes=N,H.directionalLength=h,H.pointLength=n,H.spotLength=w,H.rectAreaLength=r,H.hemiLength=S,H.numDirectionalShadows=y,H.numPointShadows=G,H.numSpotShadows=M,H.numSpotMaps=m,H.numLightProbes=N,g.version=Ic++)}function o(e,t){let a=0,s=0,h=0,n=0,w=0;const r=t.matrixWorldInverse;for(let S=0,y=e.length;S<y;S++){const G=e[S];if(G.isDirectionalLight){const M=g.directional[a];M.direction.setFromMatrixPosition(G.matrixWorld),C.setFromMatrixPosition(G.target.matrixWorld),M.direction.sub(C),M.direction.transformDirection(r),a++}else if(G.isSpotLight){const M=g.spot[h];M.position.setFromMatrixPosition(G.matrixWorld),M.position.applyMatrix4(r),M.direction.setFromMatrixPosition(G.matrixWorld),C.setFromMatrixPosition(G.target.matrixWorld),M.direction.sub(C),M.direction.transformDirection(r),h++}else if(G.isRectAreaLight){const M=g.rectArea[n];M.position.setFromMatrixPosition(G.matrixWorld),M.position.applyMatrix4(r),E.identity(),Q.copy(G.matrixWorld),Q.premultiply(r),E.extractRotation(Q),M.halfWidth.set(G.width*.5,0,0),M.halfHeight.set(0,G.height*.5,0),M.halfWidth.applyMatrix4(E),M.halfHeight.applyMatrix4(E),n++}else if(G.isPointLight){const M=g.point[s];M.position.setFromMatrixPosition(G.matrixWorld),M.position.applyMatrix4(r),s++}else if(G.isHemisphereLight){const M=g.hemi[w];M.direction.setFromMatrixPosition(G.matrixWorld),M.direction.transformDirection(r),w++}}}return{setup:i,setupView:o,state:g}}function Zt(B){const A=new Cc(B),I=[],g=[];function C(t){e.camera=t,I.length=0,g.length=0}function Q(t){I.push(t)}function E(t){g.push(t)}function i(){A.setup(I)}function o(t){A.setupView(I,t)}const e={lightsArray:I,shadowsArray:g,camera:null,lights:A,transmissionRenderTarget:{}};return{init:C,state:e,setupLights:i,setupLightsView:o,pushLight:Q,pushShadow:E}}function Bc(B){let A=new WeakMap;function I(C,Q=0){const E=A.get(C);let i;return E===void 0?(i=new Zt(B),A.set(C,[i])):Q>=E.length?(i=new Zt(B),E.push(i)):i=E[Q],i}function g(){A=new WeakMap}return{get:I,dispose:g}}class Qc extends Rg{constructor(A){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=YD,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(A)}copy(A){return super.copy(A),this.depthPacking=A.depthPacking,this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this}}class Ec extends Rg{constructor(A){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(A)}copy(A){return super.copy(A),this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this}}const ic=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,oc=`uniform sampler2D shadow_pass;
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
}`;function ec(B,A,I){let g=new $i;const C=new vA,Q=new vA,E=new $A,i=new Qc({depthPacking:LD}),o=new Ec,e={},t=I.maxTextureSize,a={[mg]:VI,[VI]:mg,[Ng]:Ng},s=new aC({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vA},radius:{value:4}},vertexShader:ic,fragmentShader:oc}),h=s.clone();h.defines.HORIZONTAL_PASS=1;const n=new Bg;n.setAttribute("position",new RI(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new $I(n,s),r=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ye;let S=this.type;this.render=function(F,N,H){if(r.enabled===!1||r.autoUpdate===!1&&r.needsUpdate===!1||F.length===0)return;const P=B.getRenderTarget(),c=B.getActiveCubeFace(),U=B.getActiveMipmapLevel(),O=B.state;O.setBlending(CC),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const v=S!==Hg&&this.type===Hg,W=S===Hg&&this.type!==Hg;for(let $=0,b=F.length;$<b;$++){const IA=F[$],Z=IA.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",IA,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;C.copy(Z.mapSize);const EA=Z.getFrameExtents();if(C.multiply(EA),Q.copy(Z.mapSize),(C.x>t||C.y>t)&&(C.x>t&&(Q.x=Math.floor(t/EA.x),C.x=Q.x*EA.x,Z.mapSize.x=Q.x),C.y>t&&(Q.y=Math.floor(t/EA.y),C.y=Q.y*EA.y,Z.mapSize.y=Q.y)),Z.map===null||v===!0||W===!0){const KA=this.type!==Hg?{minFilter:_I,magFilter:_I}:{};Z.map!==null&&Z.map.dispose(),Z.map=new UC(C.x,C.y,KA),Z.map.texture.name=IA.name+".shadowMap",Z.camera.updateProjectionMatrix()}B.setRenderTarget(Z.map),B.clear();const cA=Z.getViewportCount();for(let KA=0;KA<cA;KA++){const AI=Z.getViewport(KA);E.set(Q.x*AI.x,Q.y*AI.y,Q.x*AI.z,Q.y*AI.w),O.viewport(E),Z.updateMatrices(IA,KA),g=Z.getFrustum(),M(N,H,Z.camera,IA,this.type)}Z.isPointLightShadow!==!0&&this.type===Hg&&y(Z,H),Z.needsUpdate=!1}S=this.type,r.needsUpdate=!1,B.setRenderTarget(P,c,U)};function y(F,N){const H=A.update(w);s.defines.VSM_SAMPLES!==F.blurSamples&&(s.defines.VSM_SAMPLES=F.blurSamples,h.defines.VSM_SAMPLES=F.blurSamples,s.needsUpdate=!0,h.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new UC(C.x,C.y)),s.uniforms.shadow_pass.value=F.map.texture,s.uniforms.resolution.value=F.mapSize,s.uniforms.radius.value=F.radius,B.setRenderTarget(F.mapPass),B.clear(),B.renderBufferDirect(N,null,H,s,w,null),h.uniforms.shadow_pass.value=F.mapPass.texture,h.uniforms.resolution.value=F.mapSize,h.uniforms.radius.value=F.radius,B.setRenderTarget(F.map),B.clear(),B.renderBufferDirect(N,null,H,h,w,null)}function G(F,N,H,P){let c=null;const U=H.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(U!==void 0)c=U;else if(c=H.isPointLight===!0?o:i,B.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){const O=c.uuid,v=N.uuid;let W=e[O];W===void 0&&(W={},e[O]=W);let $=W[v];$===void 0&&($=c.clone(),W[v]=$,N.addEventListener("dispose",m)),c=$}if(c.visible=N.visible,c.wireframe=N.wireframe,P===Hg?c.side=N.shadowSide!==null?N.shadowSide:N.side:c.side=N.shadowSide!==null?N.shadowSide:a[N.side],c.alphaMap=N.alphaMap,c.alphaTest=N.alphaTest,c.map=N.map,c.clipShadows=N.clipShadows,c.clippingPlanes=N.clippingPlanes,c.clipIntersection=N.clipIntersection,c.displacementMap=N.displacementMap,c.displacementScale=N.displacementScale,c.displacementBias=N.displacementBias,c.wireframeLinewidth=N.wireframeLinewidth,c.linewidth=N.linewidth,H.isPointLight===!0&&c.isMeshDistanceMaterial===!0){const O=B.properties.get(c);O.light=H}return c}function M(F,N,H,P,c){if(F.visible===!1)return;if(F.layers.test(N.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&c===Hg)&&(!F.frustumCulled||g.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,F.matrixWorld);const O=A.update(F),v=F.material;if(Array.isArray(v)){const W=O.groups;for(let $=0,b=W.length;$<b;$++){const IA=W[$],Z=v[IA.materialIndex];if(Z&&Z.visible){const EA=G(F,Z,P,c);F.onBeforeShadow(B,F,N,H,O,EA,IA),B.renderBufferDirect(H,null,O,EA,F,IA),F.onAfterShadow(B,F,N,H,O,EA,IA)}}}else if(v.visible){const W=G(F,v,P,c);F.onBeforeShadow(B,F,N,H,O,W,null),B.renderBufferDirect(H,null,O,W,F,null),F.onAfterShadow(B,F,N,H,O,W,null)}}const U=F.children;for(let O=0,v=U.length;O<v;O++)M(U[O],N,H,P,c)}function m(F){F.target.removeEventListener("dispose",m);for(const N in e){const H=e[N],P=F.target.uuid;P in H&&(H[P].dispose(),delete H[P])}}}const tc={[mE]:fE,[TE]:OE,[xE]:vE,[OC]:bE,[fE]:mE,[OE]:TE,[vE]:xE,[bE]:OC};function ac(B){function A(){let q=!1;const tA=new $A;let _=null;const z=new $A(0,0,0,0);return{setMask:function(eA){_!==eA&&!q&&(B.colorMask(eA,eA,eA,eA),_=eA)},setLocked:function(eA){q=eA},setClear:function(eA,iA,aI,JI,Ag){Ag===!0&&(eA*=JI,iA*=JI,aI*=JI),tA.set(eA,iA,aI,JI),z.equals(tA)===!1&&(B.clearColor(eA,iA,aI,JI),z.copy(tA))},reset:function(){q=!1,_=null,z.set(-1,0,0,0)}}}function I(){let q=!1,tA=!1,_=null,z=null,eA=null;return{setReversed:function(iA){tA=iA},setTest:function(iA){iA?nA(B.DEPTH_TEST):sA(B.DEPTH_TEST)},setMask:function(iA){_!==iA&&!q&&(B.depthMask(iA),_=iA)},setFunc:function(iA){if(tA&&(iA=tc[iA]),z!==iA){switch(iA){case mE:B.depthFunc(B.NEVER);break;case fE:B.depthFunc(B.ALWAYS);break;case TE:B.depthFunc(B.LESS);break;case OC:B.depthFunc(B.LEQUAL);break;case xE:B.depthFunc(B.EQUAL);break;case bE:B.depthFunc(B.GEQUAL);break;case OE:B.depthFunc(B.GREATER);break;case vE:B.depthFunc(B.NOTEQUAL);break;default:B.depthFunc(B.LEQUAL)}z=iA}},setLocked:function(iA){q=iA},setClear:function(iA){eA!==iA&&(B.clearDepth(iA),eA=iA)},reset:function(){q=!1,_=null,z=null,eA=null}}}function g(){let q=!1,tA=null,_=null,z=null,eA=null,iA=null,aI=null,JI=null,Ag=null;return{setTest:function(II){q||(II?nA(B.STENCIL_TEST):sA(B.STENCIL_TEST))},setMask:function(II){tA!==II&&!q&&(B.stencilMask(II),tA=II)},setFunc:function(II,Ig,gC){(_!==II||z!==Ig||eA!==gC)&&(B.stencilFunc(II,Ig,gC),_=II,z=Ig,eA=gC)},setOp:function(II,Ig,gC){(iA!==II||aI!==Ig||JI!==gC)&&(B.stencilOp(II,Ig,gC),iA=II,aI=Ig,JI=gC)},setLocked:function(II){q=II},setClear:function(II){Ag!==II&&(B.clearStencil(II),Ag=II)},reset:function(){q=!1,tA=null,_=null,z=null,eA=null,iA=null,aI=null,JI=null,Ag=null}}}const C=new A,Q=new I,E=new g,i=new WeakMap,o=new WeakMap;let e={},t={},a=new WeakMap,s=[],h=null,n=!1,w=null,r=null,S=null,y=null,G=null,M=null,m=null,F=new MA(0,0,0),N=0,H=!1,P=null,c=null,U=null,O=null,v=null;const W=B.getParameter(B.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,b=0;const IA=B.getParameter(B.VERSION);IA.indexOf("WebGL")!==-1?(b=parseFloat(/^WebGL (\d)/.exec(IA)[1]),$=b>=1):IA.indexOf("OpenGL ES")!==-1&&(b=parseFloat(/^OpenGL ES (\d)/.exec(IA)[1]),$=b>=2);let Z=null,EA={};const cA=B.getParameter(B.SCISSOR_BOX),KA=B.getParameter(B.VIEWPORT),AI=new $A().fromArray(cA),QI=new $A().fromArray(KA);function j(q,tA,_,z){const eA=new Uint8Array(4),iA=B.createTexture();B.bindTexture(q,iA),B.texParameteri(q,B.TEXTURE_MIN_FILTER,B.NEAREST),B.texParameteri(q,B.TEXTURE_MAG_FILTER,B.NEAREST);for(let aI=0;aI<_;aI++)q===B.TEXTURE_3D||q===B.TEXTURE_2D_ARRAY?B.texImage3D(tA,0,B.RGBA,1,1,z,0,B.RGBA,B.UNSIGNED_BYTE,eA):B.texImage2D(tA+aI,0,B.RGBA,1,1,0,B.RGBA,B.UNSIGNED_BYTE,eA);return iA}const CA={};CA[B.TEXTURE_2D]=j(B.TEXTURE_2D,B.TEXTURE_2D,1),CA[B.TEXTURE_CUBE_MAP]=j(B.TEXTURE_CUBE_MAP,B.TEXTURE_CUBE_MAP_POSITIVE_X,6),CA[B.TEXTURE_2D_ARRAY]=j(B.TEXTURE_2D_ARRAY,B.TEXTURE_2D_ARRAY,1,1),CA[B.TEXTURE_3D]=j(B.TEXTURE_3D,B.TEXTURE_3D,1,1),C.setClear(0,0,0,1),Q.setClear(1),E.setClear(0),nA(B.DEPTH_TEST),Q.setFunc(OC),ZA(!1),zA(lC),nA(B.CULL_FACE),R(CC);function nA(q){e[q]!==!0&&(B.enable(q),e[q]=!0)}function sA(q){e[q]!==!1&&(B.disable(q),e[q]=!1)}function HA(q,tA){return t[q]!==tA?(B.bindFramebuffer(q,tA),t[q]=tA,q===B.DRAW_FRAMEBUFFER&&(t[B.FRAMEBUFFER]=tA),q===B.FRAMEBUFFER&&(t[B.DRAW_FRAMEBUFFER]=tA),!0):!1}function RA(q,tA){let _=s,z=!1;if(q){_=a.get(tA),_===void 0&&(_=[],a.set(tA,_));const eA=q.textures;if(_.length!==eA.length||_[0]!==B.COLOR_ATTACHMENT0){for(let iA=0,aI=eA.length;iA<aI;iA++)_[iA]=B.COLOR_ATTACHMENT0+iA;_.length=eA.length,z=!0}}else _[0]!==B.BACK&&(_[0]=B.BACK,z=!0);z&&B.drawBuffers(_)}function VA(q){return h!==q?(B.useProgram(q),h=q,!0):!1}const EI={[GC]:B.FUNC_ADD,[gD]:B.FUNC_SUBTRACT,[CD]:B.FUNC_REVERSE_SUBTRACT};EI[BD]=B.MIN,EI[QD]=B.MAX;const XA={[ED]:B.ZERO,[iD]:B.ONE,[oD]:B.SRC_COLOR,[uE]:B.SRC_ALPHA,[hD]:B.SRC_ALPHA_SATURATE,[sD]:B.DST_COLOR,[tD]:B.DST_ALPHA,[eD]:B.ONE_MINUS_SRC_COLOR,[HE]:B.ONE_MINUS_SRC_ALPHA,[DD]:B.ONE_MINUS_DST_COLOR,[aD]:B.ONE_MINUS_DST_ALPHA,[rD]:B.CONSTANT_COLOR,[SD]:B.ONE_MINUS_CONSTANT_COLOR,[nD]:B.CONSTANT_ALPHA,[wD]:B.ONE_MINUS_CONSTANT_ALPHA};function R(q,tA,_,z,eA,iA,aI,JI,Ag,II){if(q===CC){n===!0&&(sA(B.BLEND),n=!1);return}if(n===!1&&(nA(B.BLEND),n=!0),q!==ID){if(q!==w||II!==H){if((r!==GC||G!==GC)&&(B.blendEquation(B.FUNC_ADD),r=GC,G=GC),II)switch(q){case bC:B.blendFuncSeparate(B.ONE,B.ONE_MINUS_SRC_ALPHA,B.ONE,B.ONE_MINUS_SRC_ALPHA);break;case Ue:B.blendFunc(B.ONE,B.ONE);break;case Me:B.blendFuncSeparate(B.ZERO,B.ONE_MINUS_SRC_COLOR,B.ZERO,B.ONE);break;case Ne:B.blendFuncSeparate(B.ZERO,B.SRC_COLOR,B.ZERO,B.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case bC:B.blendFuncSeparate(B.SRC_ALPHA,B.ONE_MINUS_SRC_ALPHA,B.ONE,B.ONE_MINUS_SRC_ALPHA);break;case Ue:B.blendFunc(B.SRC_ALPHA,B.ONE);break;case Me:B.blendFuncSeparate(B.ZERO,B.ONE_MINUS_SRC_COLOR,B.ZERO,B.ONE);break;case Ne:B.blendFunc(B.ZERO,B.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}S=null,y=null,M=null,m=null,F.set(0,0,0),N=0,w=q,H=II}return}eA=eA||tA,iA=iA||_,aI=aI||z,(tA!==r||eA!==G)&&(B.blendEquationSeparate(EI[tA],EI[eA]),r=tA,G=eA),(_!==S||z!==y||iA!==M||aI!==m)&&(B.blendFuncSeparate(XA[_],XA[z],XA[iA],XA[aI]),S=_,y=z,M=iA,m=aI),(JI.equals(F)===!1||Ag!==N)&&(B.blendColor(JI.r,JI.g,JI.b,Ag),F.copy(JI),N=Ag),w=q,H=!1}function Eg(q,tA){q.side===Ng?sA(B.CULL_FACE):nA(B.CULL_FACE);let _=q.side===VI;tA&&(_=!_),ZA(_),q.blending===bC&&q.transparent===!1?R(CC):R(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),Q.setFunc(q.depthFunc),Q.setTest(q.depthTest),Q.setMask(q.depthWrite),C.setMask(q.colorWrite);const z=q.stencilWrite;E.setTest(z),z&&(E.setMask(q.stencilWriteMask),E.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),E.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),hI(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?nA(B.SAMPLE_ALPHA_TO_COVERAGE):sA(B.SAMPLE_ALPHA_TO_COVERAGE)}function ZA(q){P!==q&&(q?B.frontFace(B.CW):B.frontFace(B.CCW),P=q)}function zA(q){q!==ug?(nA(B.CULL_FACE),q!==c&&(q===lC?B.cullFace(B.BACK):q===$s?B.cullFace(B.FRONT):B.cullFace(B.FRONT_AND_BACK))):sA(B.CULL_FACE),c=q}function dA(q){q!==U&&($&&B.lineWidth(q),U=q)}function hI(q,tA,_){q?(nA(B.POLYGON_OFFSET_FILL),(O!==tA||v!==_)&&(B.polygonOffset(tA,_),O=tA,v=_)):sA(B.POLYGON_OFFSET_FILL)}function LA(q){q?nA(B.SCISSOR_TEST):sA(B.SCISSOR_TEST)}function K(q){q===void 0&&(q=B.TEXTURE0+W-1),Z!==q&&(B.activeTexture(q),Z=q)}function l(q,tA,_){_===void 0&&(Z===null?_=B.TEXTURE0+W-1:_=Z);let z=EA[_];z===void 0&&(z={type:void 0,texture:void 0},EA[_]=z),(z.type!==q||z.texture!==tA)&&(Z!==_&&(B.activeTexture(_),Z=_),B.bindTexture(q,tA||CA[q]),z.type=q,z.texture=tA)}function f(){const q=EA[Z];q!==void 0&&q.type!==void 0&&(B.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function X(){try{B.compressedTexImage2D.apply(B,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function AA(){try{B.compressedTexImage3D.apply(B,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function V(){try{B.texSubImage2D.apply(B,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function GA(){try{B.texSubImage3D.apply(B,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function oA(){try{B.compressedTexSubImage2D.apply(B,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function rA(){try{B.compressedTexSubImage3D.apply(B,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function WA(){try{B.texStorage2D.apply(B,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function BA(){try{B.texStorage3D.apply(B,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function wA(){try{B.texImage2D.apply(B,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function qA(){try{B.texImage3D.apply(B,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function YA(q){AI.equals(q)===!1&&(B.scissor(q.x,q.y,q.z,q.w),AI.copy(q))}function DA(q){QI.equals(q)===!1&&(B.viewport(q.x,q.y,q.z,q.w),QI.copy(q))}function PA(q,tA){let _=o.get(tA);_===void 0&&(_=new WeakMap,o.set(tA,_));let z=_.get(q);z===void 0&&(z=B.getUniformBlockIndex(tA,q.name),_.set(q,z))}function mA(q,tA){const _=o.get(tA).get(q);i.get(tA)!==_&&(B.uniformBlockBinding(tA,_,q.__bindingPointIndex),i.set(tA,_))}function tI(){B.disable(B.BLEND),B.disable(B.CULL_FACE),B.disable(B.DEPTH_TEST),B.disable(B.POLYGON_OFFSET_FILL),B.disable(B.SCISSOR_TEST),B.disable(B.STENCIL_TEST),B.disable(B.SAMPLE_ALPHA_TO_COVERAGE),B.blendEquation(B.FUNC_ADD),B.blendFunc(B.ONE,B.ZERO),B.blendFuncSeparate(B.ONE,B.ZERO,B.ONE,B.ZERO),B.blendColor(0,0,0,0),B.colorMask(!0,!0,!0,!0),B.clearColor(0,0,0,0),B.depthMask(!0),B.depthFunc(B.LESS),B.clearDepth(1),B.stencilMask(4294967295),B.stencilFunc(B.ALWAYS,0,4294967295),B.stencilOp(B.KEEP,B.KEEP,B.KEEP),B.clearStencil(0),B.cullFace(B.BACK),B.frontFace(B.CCW),B.polygonOffset(0,0),B.activeTexture(B.TEXTURE0),B.bindFramebuffer(B.FRAMEBUFFER,null),B.bindFramebuffer(B.DRAW_FRAMEBUFFER,null),B.bindFramebuffer(B.READ_FRAMEBUFFER,null),B.useProgram(null),B.lineWidth(1),B.scissor(0,0,B.canvas.width,B.canvas.height),B.viewport(0,0,B.canvas.width,B.canvas.height),e={},Z=null,EA={},t={},a=new WeakMap,s=[],h=null,n=!1,w=null,r=null,S=null,y=null,G=null,M=null,m=null,F=new MA(0,0,0),N=0,H=!1,P=null,c=null,U=null,O=null,v=null,AI.set(0,0,B.canvas.width,B.canvas.height),QI.set(0,0,B.canvas.width,B.canvas.height),C.reset(),Q.reset(),E.reset()}return{buffers:{color:C,depth:Q,stencil:E},enable:nA,disable:sA,bindFramebuffer:HA,drawBuffers:RA,useProgram:VA,setBlending:R,setMaterial:Eg,setFlipSided:ZA,setCullFace:zA,setLineWidth:dA,setPolygonOffset:hI,setScissorTest:LA,activeTexture:K,bindTexture:l,unbindTexture:f,compressedTexImage2D:X,compressedTexImage3D:AA,texImage2D:wA,texImage3D:qA,updateUBOMapping:PA,uniformBlockBinding:mA,texStorage2D:WA,texStorage3D:BA,texSubImage2D:V,texSubImage3D:GA,compressedTexSubImage2D:oA,compressedTexSubImage3D:rA,scissor:YA,viewport:DA,reset:tI}}function Wt(B,A,I,g){const C=sc(g);switch(I){case Ye:return B*A;case ue:return B*A;case He:return B*A*2;case jE:return B*A/C.components*C.byteLength;case VE:return B*A/C.components*C.byteLength;case me:return B*A*2/C.components*C.byteLength;case XE:return B*A*2/C.components*C.byteLength;case Le:return B*A*3/C.components*C.byteLength;case og:return B*A*4/C.components*C.byteLength;case zE:return B*A*4/C.components*C.byteLength;case yQ:case UQ:return Math.floor((B+3)/4)*Math.floor((A+3)/4)*8;case MQ:case NQ:return Math.floor((B+3)/4)*Math.floor((A+3)/4)*16;case Ai:case gi:return Math.max(B,16)*Math.max(A,8)/4;case $E:case Ii:return Math.max(B,8)*Math.max(A,8)/2;case Ci:case Bi:return Math.floor((B+3)/4)*Math.floor((A+3)/4)*8;case Qi:return Math.floor((B+3)/4)*Math.floor((A+3)/4)*16;case Ei:return Math.floor((B+3)/4)*Math.floor((A+3)/4)*16;case ii:return Math.floor((B+4)/5)*Math.floor((A+3)/4)*16;case oi:return Math.floor((B+4)/5)*Math.floor((A+4)/5)*16;case ei:return Math.floor((B+5)/6)*Math.floor((A+4)/5)*16;case ti:return Math.floor((B+5)/6)*Math.floor((A+5)/6)*16;case ai:return Math.floor((B+7)/8)*Math.floor((A+4)/5)*16;case si:return Math.floor((B+7)/8)*Math.floor((A+5)/6)*16;case Di:return Math.floor((B+7)/8)*Math.floor((A+7)/8)*16;case hi:return Math.floor((B+9)/10)*Math.floor((A+4)/5)*16;case ri:return Math.floor((B+9)/10)*Math.floor((A+5)/6)*16;case Si:return Math.floor((B+9)/10)*Math.floor((A+7)/8)*16;case ni:return Math.floor((B+9)/10)*Math.floor((A+9)/10)*16;case wi:return Math.floor((B+11)/12)*Math.floor((A+9)/10)*16;case ci:return Math.floor((B+11)/12)*Math.floor((A+11)/12)*16;case KQ:case li:case Gi:return Math.ceil(B/4)*Math.ceil(A/4)*16;case fe:case ki:return Math.ceil(B/4)*Math.ceil(A/4)*8;case yi:case Ui:return Math.ceil(B/4)*Math.ceil(A/4)*16}throw new Error(`Unable to determine texture byte length for ${I} format.`)}function sc(B){switch(B){case fg:case pe:return{byteLength:1,components:1};case qB:case de:case Tg:return{byteLength:2,components:1};case WE:case PE:return{byteLength:2,components:4};case kC:case ZE:case XI:return{byteLength:4,components:1};case qe:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${B}.`)}function Dc(B,A,I,g,C,Q,E){const i=A.has("WEBGL_multisampled_render_to_texture")?A.get("WEBGL_multisampled_render_to_texture"):null,o=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),e=new vA,t=new WeakMap;let a;const s=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function n(K,l){return h?new OffscreenCanvas(K,l):mB("canvas")}function w(K,l,f){let X=1;const AA=LA(K);if((AA.width>f||AA.height>f)&&(X=f/Math.max(AA.width,AA.height)),X<1)if(typeof HTMLImageElement<"u"&&K instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&K instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&K instanceof ImageBitmap||typeof VideoFrame<"u"&&K instanceof VideoFrame){const V=Math.floor(X*AA.width),GA=Math.floor(X*AA.height);a===void 0&&(a=n(V,GA));const oA=l?n(V,GA):a;return oA.width=V,oA.height=GA,oA.getContext("2d").drawImage(K,0,0,V,GA),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+AA.width+"x"+AA.height+") to ("+V+"x"+GA+")."),oA}else return"data"in K&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+AA.width+"x"+AA.height+")."),K;return K}function r(K){return K.generateMipmaps&&K.minFilter!==_I&&K.minFilter!==LI}function S(K){B.generateMipmap(K)}function y(K,l,f,X,AA=!1){if(K!==null){if(B[K]!==void 0)return B[K];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+K+"'")}let V=l;if(l===B.RED&&(f===B.FLOAT&&(V=B.R32F),f===B.HALF_FLOAT&&(V=B.R16F),f===B.UNSIGNED_BYTE&&(V=B.R8)),l===B.RED_INTEGER&&(f===B.UNSIGNED_BYTE&&(V=B.R8UI),f===B.UNSIGNED_SHORT&&(V=B.R16UI),f===B.UNSIGNED_INT&&(V=B.R32UI),f===B.BYTE&&(V=B.R8I),f===B.SHORT&&(V=B.R16I),f===B.INT&&(V=B.R32I)),l===B.RG&&(f===B.FLOAT&&(V=B.RG32F),f===B.HALF_FLOAT&&(V=B.RG16F),f===B.UNSIGNED_BYTE&&(V=B.RG8)),l===B.RG_INTEGER&&(f===B.UNSIGNED_BYTE&&(V=B.RG8UI),f===B.UNSIGNED_SHORT&&(V=B.RG16UI),f===B.UNSIGNED_INT&&(V=B.RG32UI),f===B.BYTE&&(V=B.RG8I),f===B.SHORT&&(V=B.RG16I),f===B.INT&&(V=B.RG32I)),l===B.RGB_INTEGER&&(f===B.UNSIGNED_BYTE&&(V=B.RGB8UI),f===B.UNSIGNED_SHORT&&(V=B.RGB16UI),f===B.UNSIGNED_INT&&(V=B.RGB32UI),f===B.BYTE&&(V=B.RGB8I),f===B.SHORT&&(V=B.RGB16I),f===B.INT&&(V=B.RGB32I)),l===B.RGBA_INTEGER&&(f===B.UNSIGNED_BYTE&&(V=B.RGBA8UI),f===B.UNSIGNED_SHORT&&(V=B.RGBA16UI),f===B.UNSIGNED_INT&&(V=B.RGBA32UI),f===B.BYTE&&(V=B.RGBA8I),f===B.SHORT&&(V=B.RGBA16I),f===B.INT&&(V=B.RGBA32I)),l===B.RGB&&f===B.UNSIGNED_INT_5_9_9_9_REV&&(V=B.RGB9_E5),l===B.RGBA){const GA=AA?RQ:jA.getTransfer(X);f===B.FLOAT&&(V=B.RGBA32F),f===B.HALF_FLOAT&&(V=B.RGBA16F),f===B.UNSIGNED_BYTE&&(V=GA===sI?B.SRGB8_ALPHA8:B.RGBA8),f===B.UNSIGNED_SHORT_4_4_4_4&&(V=B.RGBA4),f===B.UNSIGNED_SHORT_5_5_5_1&&(V=B.RGB5_A1)}return(V===B.R16F||V===B.R32F||V===B.RG16F||V===B.RG32F||V===B.RGBA16F||V===B.RGBA32F)&&A.get("EXT_color_buffer_float"),V}function G(K,l){let f;return K?l===null||l===kC||l===WC?f=B.DEPTH24_STENCIL8:l===XI?f=B.DEPTH32F_STENCIL8:l===qB&&(f=B.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):l===null||l===kC||l===WC?f=B.DEPTH_COMPONENT24:l===XI?f=B.DEPTH_COMPONENT32F:l===qB&&(f=B.DEPTH_COMPONENT16),f}function M(K,l){return r(K)===!0||K.isFramebufferTexture&&K.minFilter!==_I&&K.minFilter!==LI?Math.log2(Math.max(l.width,l.height))+1:K.mipmaps!==void 0&&K.mipmaps.length>0?K.mipmaps.length:K.isCompressedTexture&&Array.isArray(K.image)?l.mipmaps.length:1}function m(K){const l=K.target;l.removeEventListener("dispose",m),N(l),l.isVideoTexture&&t.delete(l)}function F(K){const l=K.target;l.removeEventListener("dispose",F),P(l)}function N(K){const l=g.get(K);if(l.__webglInit===void 0)return;const f=K.source,X=s.get(f);if(X){const AA=X[l.__cacheKey];AA.usedTimes--,AA.usedTimes===0&&H(K),Object.keys(X).length===0&&s.delete(f)}g.remove(K)}function H(K){const l=g.get(K);B.deleteTexture(l.__webglTexture);const f=K.source,X=s.get(f);delete X[l.__cacheKey],E.memory.textures--}function P(K){const l=g.get(K);if(K.depthTexture&&K.depthTexture.dispose(),K.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(l.__webglFramebuffer[X]))for(let AA=0;AA<l.__webglFramebuffer[X].length;AA++)B.deleteFramebuffer(l.__webglFramebuffer[X][AA]);else B.deleteFramebuffer(l.__webglFramebuffer[X]);l.__webglDepthbuffer&&B.deleteRenderbuffer(l.__webglDepthbuffer[X])}else{if(Array.isArray(l.__webglFramebuffer))for(let X=0;X<l.__webglFramebuffer.length;X++)B.deleteFramebuffer(l.__webglFramebuffer[X]);else B.deleteFramebuffer(l.__webglFramebuffer);if(l.__webglDepthbuffer&&B.deleteRenderbuffer(l.__webglDepthbuffer),l.__webglMultisampledFramebuffer&&B.deleteFramebuffer(l.__webglMultisampledFramebuffer),l.__webglColorRenderbuffer)for(let X=0;X<l.__webglColorRenderbuffer.length;X++)l.__webglColorRenderbuffer[X]&&B.deleteRenderbuffer(l.__webglColorRenderbuffer[X]);l.__webglDepthRenderbuffer&&B.deleteRenderbuffer(l.__webglDepthRenderbuffer)}const f=K.textures;for(let X=0,AA=f.length;X<AA;X++){const V=g.get(f[X]);V.__webglTexture&&(B.deleteTexture(V.__webglTexture),E.memory.textures--),g.remove(f[X])}g.remove(K)}let c=0;function U(){c=0}function O(){const K=c;return K>=C.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+K+" texture units while this GPU supports only "+C.maxTextures),c+=1,K}function v(K){const l=[];return l.push(K.wrapS),l.push(K.wrapT),l.push(K.wrapR||0),l.push(K.magFilter),l.push(K.minFilter),l.push(K.anisotropy),l.push(K.internalFormat),l.push(K.format),l.push(K.type),l.push(K.generateMipmaps),l.push(K.premultiplyAlpha),l.push(K.flipY),l.push(K.unpackAlignment),l.push(K.colorSpace),l.join()}function W(K,l){const f=g.get(K);if(K.isVideoTexture&&dA(K),K.isRenderTargetTexture===!1&&K.version>0&&f.__version!==K.version){const X=K.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{QI(f,K,l);return}}I.bindTexture(B.TEXTURE_2D,f.__webglTexture,B.TEXTURE0+l)}function $(K,l){const f=g.get(K);if(K.version>0&&f.__version!==K.version){QI(f,K,l);return}I.bindTexture(B.TEXTURE_2D_ARRAY,f.__webglTexture,B.TEXTURE0+l)}function b(K,l){const f=g.get(K);if(K.version>0&&f.__version!==K.version){QI(f,K,l);return}I.bindTexture(B.TEXTURE_3D,f.__webglTexture,B.TEXTURE0+l)}function IA(K,l){const f=g.get(K);if(K.version>0&&f.__version!==K.version){j(f,K,l);return}I.bindTexture(B.TEXTURE_CUBE_MAP,f.__webglTexture,B.TEXTURE0+l)}const Z={[ZC]:B.REPEAT,[Kg]:B.CLAMP_TO_EDGE,[GQ]:B.MIRRORED_REPEAT},EA={[_I]:B.NEAREST,[Re]:B.NEAREST_MIPMAP_NEAREST,[dB]:B.NEAREST_MIPMAP_LINEAR,[LI]:B.LINEAR,[kQ]:B.LINEAR_MIPMAP_NEAREST,[Jg]:B.LINEAR_MIPMAP_LINEAR},cA={[HD]:B.NEVER,[OD]:B.ALWAYS,[mD]:B.LESS,[Oe]:B.LEQUAL,[fD]:B.EQUAL,[bD]:B.GEQUAL,[TD]:B.GREATER,[xD]:B.NOTEQUAL};function KA(K,l){if(l.type===XI&&A.has("OES_texture_float_linear")===!1&&(l.magFilter===LI||l.magFilter===kQ||l.magFilter===dB||l.magFilter===Jg||l.minFilter===LI||l.minFilter===kQ||l.minFilter===dB||l.minFilter===Jg)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),B.texParameteri(K,B.TEXTURE_WRAP_S,Z[l.wrapS]),B.texParameteri(K,B.TEXTURE_WRAP_T,Z[l.wrapT]),(K===B.TEXTURE_3D||K===B.TEXTURE_2D_ARRAY)&&B.texParameteri(K,B.TEXTURE_WRAP_R,Z[l.wrapR]),B.texParameteri(K,B.TEXTURE_MAG_FILTER,EA[l.magFilter]),B.texParameteri(K,B.TEXTURE_MIN_FILTER,EA[l.minFilter]),l.compareFunction&&(B.texParameteri(K,B.TEXTURE_COMPARE_MODE,B.COMPARE_REF_TO_TEXTURE),B.texParameteri(K,B.TEXTURE_COMPARE_FUNC,cA[l.compareFunction])),A.has("EXT_texture_filter_anisotropic")===!0){if(l.magFilter===_I||l.minFilter!==dB&&l.minFilter!==Jg||l.type===XI&&A.has("OES_texture_float_linear")===!1)return;if(l.anisotropy>1||g.get(l).__currentAnisotropy){const f=A.get("EXT_texture_filter_anisotropic");B.texParameterf(K,f.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(l.anisotropy,C.getMaxAnisotropy())),g.get(l).__currentAnisotropy=l.anisotropy}}}function AI(K,l){let f=!1;K.__webglInit===void 0&&(K.__webglInit=!0,l.addEventListener("dispose",m));const X=l.source;let AA=s.get(X);AA===void 0&&(AA={},s.set(X,AA));const V=v(l);if(V!==K.__cacheKey){AA[V]===void 0&&(AA[V]={texture:B.createTexture(),usedTimes:0},E.memory.textures++,f=!0),AA[V].usedTimes++;const GA=AA[K.__cacheKey];GA!==void 0&&(AA[K.__cacheKey].usedTimes--,GA.usedTimes===0&&H(l)),K.__cacheKey=V,K.__webglTexture=AA[V].texture}return f}function QI(K,l,f){let X=B.TEXTURE_2D;(l.isDataArrayTexture||l.isCompressedArrayTexture)&&(X=B.TEXTURE_2D_ARRAY),l.isData3DTexture&&(X=B.TEXTURE_3D);const AA=AI(K,l),V=l.source;I.bindTexture(X,K.__webglTexture,B.TEXTURE0+f);const GA=g.get(V);if(V.version!==GA.__version||AA===!0){I.activeTexture(B.TEXTURE0+f);const oA=jA.getPrimaries(jA.workingColorSpace),rA=l.colorSpace===QC?null:jA.getPrimaries(l.colorSpace),WA=l.colorSpace===QC||oA===rA?B.NONE:B.BROWSER_DEFAULT_WEBGL;B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,l.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,l.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,l.unpackAlignment),B.pixelStorei(B.UNPACK_COLORSPACE_CONVERSION_WEBGL,WA);let BA=w(l.image,!1,C.maxTextureSize);BA=hI(l,BA);const wA=Q.convert(l.format,l.colorSpace),qA=Q.convert(l.type);let YA=y(l.internalFormat,wA,qA,l.colorSpace,l.isVideoTexture);KA(X,l);let DA;const PA=l.mipmaps,mA=l.isVideoTexture!==!0,tI=GA.__version===void 0||AA===!0,q=V.dataReady,tA=M(l,BA);if(l.isDepthTexture)YA=G(l.format===jC,l.type),tI&&(mA?I.texStorage2D(B.TEXTURE_2D,1,YA,BA.width,BA.height):I.texImage2D(B.TEXTURE_2D,0,YA,BA.width,BA.height,0,wA,qA,null));else if(l.isDataTexture)if(PA.length>0){mA&&tI&&I.texStorage2D(B.TEXTURE_2D,tA,YA,PA[0].width,PA[0].height);for(let _=0,z=PA.length;_<z;_++)DA=PA[_],mA?q&&I.texSubImage2D(B.TEXTURE_2D,_,0,0,DA.width,DA.height,wA,qA,DA.data):I.texImage2D(B.TEXTURE_2D,_,YA,DA.width,DA.height,0,wA,qA,DA.data);l.generateMipmaps=!1}else mA?(tI&&I.texStorage2D(B.TEXTURE_2D,tA,YA,BA.width,BA.height),q&&I.texSubImage2D(B.TEXTURE_2D,0,0,0,BA.width,BA.height,wA,qA,BA.data)):I.texImage2D(B.TEXTURE_2D,0,YA,BA.width,BA.height,0,wA,qA,BA.data);else if(l.isCompressedTexture)if(l.isCompressedArrayTexture){mA&&tI&&I.texStorage3D(B.TEXTURE_2D_ARRAY,tA,YA,PA[0].width,PA[0].height,BA.depth);for(let _=0,z=PA.length;_<z;_++)if(DA=PA[_],l.format!==og)if(wA!==null)if(mA){if(q)if(l.layerUpdates.size>0){const eA=Wt(DA.width,DA.height,l.format,l.type);for(const iA of l.layerUpdates){const aI=DA.data.subarray(iA*eA/DA.data.BYTES_PER_ELEMENT,(iA+1)*eA/DA.data.BYTES_PER_ELEMENT);I.compressedTexSubImage3D(B.TEXTURE_2D_ARRAY,_,0,0,iA,DA.width,DA.height,1,wA,aI,0,0)}l.clearLayerUpdates()}else I.compressedTexSubImage3D(B.TEXTURE_2D_ARRAY,_,0,0,0,DA.width,DA.height,BA.depth,wA,DA.data,0,0)}else I.compressedTexImage3D(B.TEXTURE_2D_ARRAY,_,YA,DA.width,DA.height,BA.depth,0,DA.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else mA?q&&I.texSubImage3D(B.TEXTURE_2D_ARRAY,_,0,0,0,DA.width,DA.height,BA.depth,wA,qA,DA.data):I.texImage3D(B.TEXTURE_2D_ARRAY,_,YA,DA.width,DA.height,BA.depth,0,wA,qA,DA.data)}else{mA&&tI&&I.texStorage2D(B.TEXTURE_2D,tA,YA,PA[0].width,PA[0].height);for(let _=0,z=PA.length;_<z;_++)DA=PA[_],l.format!==og?wA!==null?mA?q&&I.compressedTexSubImage2D(B.TEXTURE_2D,_,0,0,DA.width,DA.height,wA,DA.data):I.compressedTexImage2D(B.TEXTURE_2D,_,YA,DA.width,DA.height,0,DA.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):mA?q&&I.texSubImage2D(B.TEXTURE_2D,_,0,0,DA.width,DA.height,wA,qA,DA.data):I.texImage2D(B.TEXTURE_2D,_,YA,DA.width,DA.height,0,wA,qA,DA.data)}else if(l.isDataArrayTexture)if(mA){if(tI&&I.texStorage3D(B.TEXTURE_2D_ARRAY,tA,YA,BA.width,BA.height,BA.depth),q)if(l.layerUpdates.size>0){const _=Wt(BA.width,BA.height,l.format,l.type);for(const z of l.layerUpdates){const eA=BA.data.subarray(z*_/BA.data.BYTES_PER_ELEMENT,(z+1)*_/BA.data.BYTES_PER_ELEMENT);I.texSubImage3D(B.TEXTURE_2D_ARRAY,0,0,0,z,BA.width,BA.height,1,wA,qA,eA)}l.clearLayerUpdates()}else I.texSubImage3D(B.TEXTURE_2D_ARRAY,0,0,0,0,BA.width,BA.height,BA.depth,wA,qA,BA.data)}else I.texImage3D(B.TEXTURE_2D_ARRAY,0,YA,BA.width,BA.height,BA.depth,0,wA,qA,BA.data);else if(l.isData3DTexture)mA?(tI&&I.texStorage3D(B.TEXTURE_3D,tA,YA,BA.width,BA.height,BA.depth),q&&I.texSubImage3D(B.TEXTURE_3D,0,0,0,0,BA.width,BA.height,BA.depth,wA,qA,BA.data)):I.texImage3D(B.TEXTURE_3D,0,YA,BA.width,BA.height,BA.depth,0,wA,qA,BA.data);else if(l.isFramebufferTexture){if(tI)if(mA)I.texStorage2D(B.TEXTURE_2D,tA,YA,BA.width,BA.height);else{let _=BA.width,z=BA.height;for(let eA=0;eA<tA;eA++)I.texImage2D(B.TEXTURE_2D,eA,YA,_,z,0,wA,qA,null),_>>=1,z>>=1}}else if(PA.length>0){if(mA&&tI){const _=LA(PA[0]);I.texStorage2D(B.TEXTURE_2D,tA,YA,_.width,_.height)}for(let _=0,z=PA.length;_<z;_++)DA=PA[_],mA?q&&I.texSubImage2D(B.TEXTURE_2D,_,0,0,wA,qA,DA):I.texImage2D(B.TEXTURE_2D,_,YA,wA,qA,DA);l.generateMipmaps=!1}else if(mA){if(tI){const _=LA(BA);I.texStorage2D(B.TEXTURE_2D,tA,YA,_.width,_.height)}q&&I.texSubImage2D(B.TEXTURE_2D,0,0,0,wA,qA,BA)}else I.texImage2D(B.TEXTURE_2D,0,YA,wA,qA,BA);r(l)&&S(X),GA.__version=V.version,l.onUpdate&&l.onUpdate(l)}K.__version=l.version}function j(K,l,f){if(l.image.length!==6)return;const X=AI(K,l),AA=l.source;I.bindTexture(B.TEXTURE_CUBE_MAP,K.__webglTexture,B.TEXTURE0+f);const V=g.get(AA);if(AA.version!==V.__version||X===!0){I.activeTexture(B.TEXTURE0+f);const GA=jA.getPrimaries(jA.workingColorSpace),oA=l.colorSpace===QC?null:jA.getPrimaries(l.colorSpace),rA=l.colorSpace===QC||GA===oA?B.NONE:B.BROWSER_DEFAULT_WEBGL;B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,l.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,l.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,l.unpackAlignment),B.pixelStorei(B.UNPACK_COLORSPACE_CONVERSION_WEBGL,rA);const WA=l.isCompressedTexture||l.image[0].isCompressedTexture,BA=l.image[0]&&l.image[0].isDataTexture,wA=[];for(let z=0;z<6;z++)!WA&&!BA?wA[z]=w(l.image[z],!0,C.maxCubemapSize):wA[z]=BA?l.image[z].image:l.image[z],wA[z]=hI(l,wA[z]);const qA=wA[0],YA=Q.convert(l.format,l.colorSpace),DA=Q.convert(l.type),PA=y(l.internalFormat,YA,DA,l.colorSpace),mA=l.isVideoTexture!==!0,tI=V.__version===void 0||X===!0,q=AA.dataReady;let tA=M(l,qA);KA(B.TEXTURE_CUBE_MAP,l);let _;if(WA){mA&&tI&&I.texStorage2D(B.TEXTURE_CUBE_MAP,tA,PA,qA.width,qA.height);for(let z=0;z<6;z++){_=wA[z].mipmaps;for(let eA=0;eA<_.length;eA++){const iA=_[eA];l.format!==og?YA!==null?mA?q&&I.compressedTexSubImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+z,eA,0,0,iA.width,iA.height,YA,iA.data):I.compressedTexImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+z,eA,PA,iA.width,iA.height,0,iA.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):mA?q&&I.texSubImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+z,eA,0,0,iA.width,iA.height,YA,DA,iA.data):I.texImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+z,eA,PA,iA.width,iA.height,0,YA,DA,iA.data)}}}else{if(_=l.mipmaps,mA&&tI){_.length>0&&tA++;const z=LA(wA[0]);I.texStorage2D(B.TEXTURE_CUBE_MAP,tA,PA,z.width,z.height)}for(let z=0;z<6;z++)if(BA){mA?q&&I.texSubImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,wA[z].width,wA[z].height,YA,DA,wA[z].data):I.texImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,PA,wA[z].width,wA[z].height,0,YA,DA,wA[z].data);for(let eA=0;eA<_.length;eA++){const iA=_[eA].image[z].image;mA?q&&I.texSubImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+z,eA+1,0,0,iA.width,iA.height,YA,DA,iA.data):I.texImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+z,eA+1,PA,iA.width,iA.height,0,YA,DA,iA.data)}}else{mA?q&&I.texSubImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,YA,DA,wA[z]):I.texImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,PA,YA,DA,wA[z]);for(let eA=0;eA<_.length;eA++){const iA=_[eA];mA?q&&I.texSubImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+z,eA+1,0,0,YA,DA,iA.image[z]):I.texImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+z,eA+1,PA,YA,DA,iA.image[z])}}}r(l)&&S(B.TEXTURE_CUBE_MAP),V.__version=AA.version,l.onUpdate&&l.onUpdate(l)}K.__version=l.version}function CA(K,l,f,X,AA,V){const GA=Q.convert(f.format,f.colorSpace),oA=Q.convert(f.type),rA=y(f.internalFormat,GA,oA,f.colorSpace);if(!g.get(l).__hasExternalTextures){const WA=Math.max(1,l.width>>V),BA=Math.max(1,l.height>>V);AA===B.TEXTURE_3D||AA===B.TEXTURE_2D_ARRAY?I.texImage3D(AA,V,rA,WA,BA,l.depth,0,GA,oA,null):I.texImage2D(AA,V,rA,WA,BA,0,GA,oA,null)}I.bindFramebuffer(B.FRAMEBUFFER,K),zA(l)?i.framebufferTexture2DMultisampleEXT(B.FRAMEBUFFER,X,AA,g.get(f).__webglTexture,0,ZA(l)):(AA===B.TEXTURE_2D||AA>=B.TEXTURE_CUBE_MAP_POSITIVE_X&&AA<=B.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&B.framebufferTexture2D(B.FRAMEBUFFER,X,AA,g.get(f).__webglTexture,V),I.bindFramebuffer(B.FRAMEBUFFER,null)}function nA(K,l,f){if(B.bindRenderbuffer(B.RENDERBUFFER,K),l.depthBuffer){const X=l.depthTexture,AA=X&&X.isDepthTexture?X.type:null,V=G(l.stencilBuffer,AA),GA=l.stencilBuffer?B.DEPTH_STENCIL_ATTACHMENT:B.DEPTH_ATTACHMENT,oA=ZA(l);zA(l)?i.renderbufferStorageMultisampleEXT(B.RENDERBUFFER,oA,V,l.width,l.height):f?B.renderbufferStorageMultisample(B.RENDERBUFFER,oA,V,l.width,l.height):B.renderbufferStorage(B.RENDERBUFFER,V,l.width,l.height),B.framebufferRenderbuffer(B.FRAMEBUFFER,GA,B.RENDERBUFFER,K)}else{const X=l.textures;for(let AA=0;AA<X.length;AA++){const V=X[AA],GA=Q.convert(V.format,V.colorSpace),oA=Q.convert(V.type),rA=y(V.internalFormat,GA,oA,V.colorSpace),WA=ZA(l);f&&zA(l)===!1?B.renderbufferStorageMultisample(B.RENDERBUFFER,WA,rA,l.width,l.height):zA(l)?i.renderbufferStorageMultisampleEXT(B.RENDERBUFFER,WA,rA,l.width,l.height):B.renderbufferStorage(B.RENDERBUFFER,rA,l.width,l.height)}}B.bindRenderbuffer(B.RENDERBUFFER,null)}function sA(K,l){if(l&&l.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(I.bindFramebuffer(B.FRAMEBUFFER,K),!(l.depthTexture&&l.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!g.get(l.depthTexture).__webglTexture||l.depthTexture.image.width!==l.width||l.depthTexture.image.height!==l.height)&&(l.depthTexture.image.width=l.width,l.depthTexture.image.height=l.height,l.depthTexture.needsUpdate=!0),W(l.depthTexture,0);const f=g.get(l.depthTexture).__webglTexture,X=ZA(l);if(l.depthTexture.format===PC)zA(l)?i.framebufferTexture2DMultisampleEXT(B.FRAMEBUFFER,B.DEPTH_ATTACHMENT,B.TEXTURE_2D,f,0,X):B.framebufferTexture2D(B.FRAMEBUFFER,B.DEPTH_ATTACHMENT,B.TEXTURE_2D,f,0);else if(l.depthTexture.format===jC)zA(l)?i.framebufferTexture2DMultisampleEXT(B.FRAMEBUFFER,B.DEPTH_STENCIL_ATTACHMENT,B.TEXTURE_2D,f,0,X):B.framebufferTexture2D(B.FRAMEBUFFER,B.DEPTH_STENCIL_ATTACHMENT,B.TEXTURE_2D,f,0);else throw new Error("Unknown depthTexture format")}function HA(K){const l=g.get(K),f=K.isWebGLCubeRenderTarget===!0;if(l.__boundDepthTexture!==K.depthTexture){const X=K.depthTexture;if(l.__depthDisposeCallback&&l.__depthDisposeCallback(),X){const AA=()=>{delete l.__boundDepthTexture,delete l.__depthDisposeCallback,X.removeEventListener("dispose",AA)};X.addEventListener("dispose",AA),l.__depthDisposeCallback=AA}l.__boundDepthTexture=X}if(K.depthTexture&&!l.__autoAllocateDepthBuffer){if(f)throw new Error("target.depthTexture not supported in Cube render targets");sA(l.__webglFramebuffer,K)}else if(f){l.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(I.bindFramebuffer(B.FRAMEBUFFER,l.__webglFramebuffer[X]),l.__webglDepthbuffer[X]===void 0)l.__webglDepthbuffer[X]=B.createRenderbuffer(),nA(l.__webglDepthbuffer[X],K,!1);else{const AA=K.stencilBuffer?B.DEPTH_STENCIL_ATTACHMENT:B.DEPTH_ATTACHMENT,V=l.__webglDepthbuffer[X];B.bindRenderbuffer(B.RENDERBUFFER,V),B.framebufferRenderbuffer(B.FRAMEBUFFER,AA,B.RENDERBUFFER,V)}}else if(I.bindFramebuffer(B.FRAMEBUFFER,l.__webglFramebuffer),l.__webglDepthbuffer===void 0)l.__webglDepthbuffer=B.createRenderbuffer(),nA(l.__webglDepthbuffer,K,!1);else{const X=K.stencilBuffer?B.DEPTH_STENCIL_ATTACHMENT:B.DEPTH_ATTACHMENT,AA=l.__webglDepthbuffer;B.bindRenderbuffer(B.RENDERBUFFER,AA),B.framebufferRenderbuffer(B.FRAMEBUFFER,X,B.RENDERBUFFER,AA)}I.bindFramebuffer(B.FRAMEBUFFER,null)}function RA(K,l,f){const X=g.get(K);l!==void 0&&CA(X.__webglFramebuffer,K,K.texture,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,0),f!==void 0&&HA(K)}function VA(K){const l=K.texture,f=g.get(K),X=g.get(l);K.addEventListener("dispose",F);const AA=K.textures,V=K.isWebGLCubeRenderTarget===!0,GA=AA.length>1;if(GA||(X.__webglTexture===void 0&&(X.__webglTexture=B.createTexture()),X.__version=l.version,E.memory.textures++),V){f.__webglFramebuffer=[];for(let oA=0;oA<6;oA++)if(l.mipmaps&&l.mipmaps.length>0){f.__webglFramebuffer[oA]=[];for(let rA=0;rA<l.mipmaps.length;rA++)f.__webglFramebuffer[oA][rA]=B.createFramebuffer()}else f.__webglFramebuffer[oA]=B.createFramebuffer()}else{if(l.mipmaps&&l.mipmaps.length>0){f.__webglFramebuffer=[];for(let oA=0;oA<l.mipmaps.length;oA++)f.__webglFramebuffer[oA]=B.createFramebuffer()}else f.__webglFramebuffer=B.createFramebuffer();if(GA)for(let oA=0,rA=AA.length;oA<rA;oA++){const WA=g.get(AA[oA]);WA.__webglTexture===void 0&&(WA.__webglTexture=B.createTexture(),E.memory.textures++)}if(K.samples>0&&zA(K)===!1){f.__webglMultisampledFramebuffer=B.createFramebuffer(),f.__webglColorRenderbuffer=[],I.bindFramebuffer(B.FRAMEBUFFER,f.__webglMultisampledFramebuffer);for(let oA=0;oA<AA.length;oA++){const rA=AA[oA];f.__webglColorRenderbuffer[oA]=B.createRenderbuffer(),B.bindRenderbuffer(B.RENDERBUFFER,f.__webglColorRenderbuffer[oA]);const WA=Q.convert(rA.format,rA.colorSpace),BA=Q.convert(rA.type),wA=y(rA.internalFormat,WA,BA,rA.colorSpace,K.isXRRenderTarget===!0),qA=ZA(K);B.renderbufferStorageMultisample(B.RENDERBUFFER,qA,wA,K.width,K.height),B.framebufferRenderbuffer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+oA,B.RENDERBUFFER,f.__webglColorRenderbuffer[oA])}B.bindRenderbuffer(B.RENDERBUFFER,null),K.depthBuffer&&(f.__webglDepthRenderbuffer=B.createRenderbuffer(),nA(f.__webglDepthRenderbuffer,K,!0)),I.bindFramebuffer(B.FRAMEBUFFER,null)}}if(V){I.bindTexture(B.TEXTURE_CUBE_MAP,X.__webglTexture),KA(B.TEXTURE_CUBE_MAP,l);for(let oA=0;oA<6;oA++)if(l.mipmaps&&l.mipmaps.length>0)for(let rA=0;rA<l.mipmaps.length;rA++)CA(f.__webglFramebuffer[oA][rA],K,l,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+oA,rA);else CA(f.__webglFramebuffer[oA],K,l,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+oA,0);r(l)&&S(B.TEXTURE_CUBE_MAP),I.unbindTexture()}else if(GA){for(let oA=0,rA=AA.length;oA<rA;oA++){const WA=AA[oA],BA=g.get(WA);I.bindTexture(B.TEXTURE_2D,BA.__webglTexture),KA(B.TEXTURE_2D,WA),CA(f.__webglFramebuffer,K,WA,B.COLOR_ATTACHMENT0+oA,B.TEXTURE_2D,0),r(WA)&&S(B.TEXTURE_2D)}I.unbindTexture()}else{let oA=B.TEXTURE_2D;if((K.isWebGL3DRenderTarget||K.isWebGLArrayRenderTarget)&&(oA=K.isWebGL3DRenderTarget?B.TEXTURE_3D:B.TEXTURE_2D_ARRAY),I.bindTexture(oA,X.__webglTexture),KA(oA,l),l.mipmaps&&l.mipmaps.length>0)for(let rA=0;rA<l.mipmaps.length;rA++)CA(f.__webglFramebuffer[rA],K,l,B.COLOR_ATTACHMENT0,oA,rA);else CA(f.__webglFramebuffer,K,l,B.COLOR_ATTACHMENT0,oA,0);r(l)&&S(oA),I.unbindTexture()}K.depthBuffer&&HA(K)}function EI(K){const l=K.textures;for(let f=0,X=l.length;f<X;f++){const AA=l[f];if(r(AA)){const V=K.isWebGLCubeRenderTarget?B.TEXTURE_CUBE_MAP:B.TEXTURE_2D,GA=g.get(AA).__webglTexture;I.bindTexture(V,GA),S(V),I.unbindTexture()}}}const XA=[],R=[];function Eg(K){if(K.samples>0){if(zA(K)===!1){const l=K.textures,f=K.width,X=K.height;let AA=B.COLOR_BUFFER_BIT;const V=K.stencilBuffer?B.DEPTH_STENCIL_ATTACHMENT:B.DEPTH_ATTACHMENT,GA=g.get(K),oA=l.length>1;if(oA)for(let rA=0;rA<l.length;rA++)I.bindFramebuffer(B.FRAMEBUFFER,GA.__webglMultisampledFramebuffer),B.framebufferRenderbuffer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+rA,B.RENDERBUFFER,null),I.bindFramebuffer(B.FRAMEBUFFER,GA.__webglFramebuffer),B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0+rA,B.TEXTURE_2D,null,0);I.bindFramebuffer(B.READ_FRAMEBUFFER,GA.__webglMultisampledFramebuffer),I.bindFramebuffer(B.DRAW_FRAMEBUFFER,GA.__webglFramebuffer);for(let rA=0;rA<l.length;rA++){if(K.resolveDepthBuffer&&(K.depthBuffer&&(AA|=B.DEPTH_BUFFER_BIT),K.stencilBuffer&&K.resolveStencilBuffer&&(AA|=B.STENCIL_BUFFER_BIT)),oA){B.framebufferRenderbuffer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.RENDERBUFFER,GA.__webglColorRenderbuffer[rA]);const WA=g.get(l[rA]).__webglTexture;B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,WA,0)}B.blitFramebuffer(0,0,f,X,0,0,f,X,AA,B.NEAREST),o===!0&&(XA.length=0,R.length=0,XA.push(B.COLOR_ATTACHMENT0+rA),K.depthBuffer&&K.resolveDepthBuffer===!1&&(XA.push(V),R.push(V),B.invalidateFramebuffer(B.DRAW_FRAMEBUFFER,R)),B.invalidateFramebuffer(B.READ_FRAMEBUFFER,XA))}if(I.bindFramebuffer(B.READ_FRAMEBUFFER,null),I.bindFramebuffer(B.DRAW_FRAMEBUFFER,null),oA)for(let rA=0;rA<l.length;rA++){I.bindFramebuffer(B.FRAMEBUFFER,GA.__webglMultisampledFramebuffer),B.framebufferRenderbuffer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+rA,B.RENDERBUFFER,GA.__webglColorRenderbuffer[rA]);const WA=g.get(l[rA]).__webglTexture;I.bindFramebuffer(B.FRAMEBUFFER,GA.__webglFramebuffer),B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0+rA,B.TEXTURE_2D,WA,0)}I.bindFramebuffer(B.DRAW_FRAMEBUFFER,GA.__webglMultisampledFramebuffer)}else if(K.depthBuffer&&K.resolveDepthBuffer===!1&&o){const l=K.stencilBuffer?B.DEPTH_STENCIL_ATTACHMENT:B.DEPTH_ATTACHMENT;B.invalidateFramebuffer(B.DRAW_FRAMEBUFFER,[l])}}}function ZA(K){return Math.min(C.maxSamples,K.samples)}function zA(K){const l=g.get(K);return K.samples>0&&A.has("WEBGL_multisampled_render_to_texture")===!0&&l.__useRenderToTexture!==!1}function dA(K){const l=E.render.frame;t.get(K)!==l&&(t.set(K,l),K.update())}function hI(K,l){const f=K.colorSpace,X=K.format,AA=K.type;return K.isCompressedTexture===!0||K.isVideoTexture===!0||f!==FI&&f!==QC&&(jA.getTransfer(f)===sI?(X!==og||AA!==fg)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",f)),l}function LA(K){return typeof HTMLImageElement<"u"&&K instanceof HTMLImageElement?(e.width=K.naturalWidth||K.width,e.height=K.naturalHeight||K.height):typeof VideoFrame<"u"&&K instanceof VideoFrame?(e.width=K.displayWidth,e.height=K.displayHeight):(e.width=K.width,e.height=K.height),e}this.allocateTextureUnit=O,this.resetTextureUnits=U,this.setTexture2D=W,this.setTexture2DArray=$,this.setTexture3D=b,this.setTextureCube=IA,this.rebindTextures=RA,this.setupRenderTarget=VA,this.updateRenderTargetMipmap=EI,this.updateMultisampleRenderTarget=Eg,this.setupDepthRenderbuffer=HA,this.setupFrameBufferTexture=CA,this.useMultisampledRTT=zA}function hc(B,A){function I(g,C=QC){let Q;const E=jA.getTransfer(C);if(g===fg)return B.UNSIGNED_BYTE;if(g===WE)return B.UNSIGNED_SHORT_4_4_4_4;if(g===PE)return B.UNSIGNED_SHORT_5_5_5_1;if(g===qe)return B.UNSIGNED_INT_5_9_9_9_REV;if(g===pe)return B.BYTE;if(g===de)return B.SHORT;if(g===qB)return B.UNSIGNED_SHORT;if(g===ZE)return B.INT;if(g===kC)return B.UNSIGNED_INT;if(g===XI)return B.FLOAT;if(g===Tg)return B.HALF_FLOAT;if(g===Ye)return B.ALPHA;if(g===Le)return B.RGB;if(g===og)return B.RGBA;if(g===ue)return B.LUMINANCE;if(g===He)return B.LUMINANCE_ALPHA;if(g===PC)return B.DEPTH_COMPONENT;if(g===jC)return B.DEPTH_STENCIL;if(g===jE)return B.RED;if(g===VE)return B.RED_INTEGER;if(g===me)return B.RG;if(g===XE)return B.RG_INTEGER;if(g===zE)return B.RGBA_INTEGER;if(g===yQ||g===UQ||g===MQ||g===NQ)if(E===sI)if(Q=A.get("WEBGL_compressed_texture_s3tc_srgb"),Q!==null){if(g===yQ)return Q.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(g===UQ)return Q.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(g===MQ)return Q.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(g===NQ)return Q.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(Q=A.get("WEBGL_compressed_texture_s3tc"),Q!==null){if(g===yQ)return Q.COMPRESSED_RGB_S3TC_DXT1_EXT;if(g===UQ)return Q.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(g===MQ)return Q.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(g===NQ)return Q.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(g===$E||g===Ai||g===Ii||g===gi)if(Q=A.get("WEBGL_compressed_texture_pvrtc"),Q!==null){if(g===$E)return Q.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(g===Ai)return Q.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(g===Ii)return Q.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(g===gi)return Q.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(g===Ci||g===Bi||g===Qi)if(Q=A.get("WEBGL_compressed_texture_etc"),Q!==null){if(g===Ci||g===Bi)return E===sI?Q.COMPRESSED_SRGB8_ETC2:Q.COMPRESSED_RGB8_ETC2;if(g===Qi)return E===sI?Q.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:Q.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(g===Ei||g===ii||g===oi||g===ei||g===ti||g===ai||g===si||g===Di||g===hi||g===ri||g===Si||g===ni||g===wi||g===ci)if(Q=A.get("WEBGL_compressed_texture_astc"),Q!==null){if(g===Ei)return E===sI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:Q.COMPRESSED_RGBA_ASTC_4x4_KHR;if(g===ii)return E===sI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:Q.COMPRESSED_RGBA_ASTC_5x4_KHR;if(g===oi)return E===sI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:Q.COMPRESSED_RGBA_ASTC_5x5_KHR;if(g===ei)return E===sI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:Q.COMPRESSED_RGBA_ASTC_6x5_KHR;if(g===ti)return E===sI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:Q.COMPRESSED_RGBA_ASTC_6x6_KHR;if(g===ai)return E===sI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:Q.COMPRESSED_RGBA_ASTC_8x5_KHR;if(g===si)return E===sI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:Q.COMPRESSED_RGBA_ASTC_8x6_KHR;if(g===Di)return E===sI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:Q.COMPRESSED_RGBA_ASTC_8x8_KHR;if(g===hi)return E===sI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:Q.COMPRESSED_RGBA_ASTC_10x5_KHR;if(g===ri)return E===sI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:Q.COMPRESSED_RGBA_ASTC_10x6_KHR;if(g===Si)return E===sI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:Q.COMPRESSED_RGBA_ASTC_10x8_KHR;if(g===ni)return E===sI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:Q.COMPRESSED_RGBA_ASTC_10x10_KHR;if(g===wi)return E===sI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:Q.COMPRESSED_RGBA_ASTC_12x10_KHR;if(g===ci)return E===sI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:Q.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(g===KQ||g===li||g===Gi)if(Q=A.get("EXT_texture_compression_bptc"),Q!==null){if(g===KQ)return E===sI?Q.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:Q.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(g===li)return Q.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(g===Gi)return Q.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(g===fe||g===ki||g===yi||g===Ui)if(Q=A.get("EXT_texture_compression_rgtc"),Q!==null){if(g===KQ)return Q.COMPRESSED_RED_RGTC1_EXT;if(g===ki)return Q.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(g===yi)return Q.COMPRESSED_RED_GREEN_RGTC2_EXT;if(g===Ui)return Q.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return g===WC?B.UNSIGNED_INT_24_8:B[g]!==void 0?B[g]:null}return{convert:I}}class rc extends WI{constructor(A=[]){super(),this.isArrayCamera=!0,this.cameras=A}}class DC extends oI{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Sc={type:"move"};class eo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new DC,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new DC,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new DC,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(A){return this._targetRay!==null&&this._targetRay.dispatchEvent(A),this._grip!==null&&this._grip.dispatchEvent(A),this._hand!==null&&this._hand.dispatchEvent(A),this}connect(A){if(A&&A.hand){const I=this._hand;if(I)for(const g of A.hand.values())this._getHandJoint(I,g)}return this.dispatchEvent({type:"connected",data:A}),this}disconnect(A){return this.dispatchEvent({type:"disconnected",data:A}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(A,I,g){let C=null,Q=null,E=null;const i=this._targetRay,o=this._grip,e=this._hand;if(A&&I.session.visibilityState!=="visible-blurred"){if(e&&A.hand){E=!0;for(const w of A.hand.values()){const r=I.getJointPose(w,g),S=this._getHandJoint(e,w);r!==null&&(S.matrix.fromArray(r.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=r.radius),S.visible=r!==null}const t=e.joints["index-finger-tip"],a=e.joints["thumb-tip"],s=t.position.distanceTo(a.position),h=.02,n=.005;e.inputState.pinching&&s>h+n?(e.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:A.handedness,target:this})):!e.inputState.pinching&&s<=h-n&&(e.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:A.handedness,target:this}))}else o!==null&&A.gripSpace&&(Q=I.getPose(A.gripSpace,g),Q!==null&&(o.matrix.fromArray(Q.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,Q.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(Q.linearVelocity)):o.hasLinearVelocity=!1,Q.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(Q.angularVelocity)):o.hasAngularVelocity=!1));i!==null&&(C=I.getPose(A.targetRaySpace,g),C===null&&Q!==null&&(C=Q),C!==null&&(i.matrix.fromArray(C.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,C.linearVelocity?(i.hasLinearVelocity=!0,i.linearVelocity.copy(C.linearVelocity)):i.hasLinearVelocity=!1,C.angularVelocity?(i.hasAngularVelocity=!0,i.angularVelocity.copy(C.angularVelocity)):i.hasAngularVelocity=!1,this.dispatchEvent(Sc)))}return i!==null&&(i.visible=C!==null),o!==null&&(o.visible=Q!==null),e!==null&&(e.visible=E!==null),this}_getHandJoint(A,I){if(A.joints[I.jointName]===void 0){const g=new DC;g.matrixAutoUpdate=!1,g.visible=!1,A.joints[I.jointName]=g,A.add(g)}return A.joints[I.jointName]}}const nc=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wc=`
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

}`;class cc{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(A,I,g){if(this.texture===null){const C=new HI,Q=A.properties.get(C);Q.__webglTexture=I.texture,(I.depthNear!=g.depthNear||I.depthFar!=g.depthFar)&&(this.depthNear=I.depthNear,this.depthFar=I.depthFar),this.texture=C}}getMesh(A){if(this.texture!==null&&this.mesh===null){const I=A.cameras[0].viewport,g=new aC({vertexShader:nc,fragmentShader:wc,uniforms:{depthColor:{value:this.texture},depthWidth:{value:I.z},depthHeight:{value:I.w}}});this.mesh=new $I(new AE(20,20),g)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class lc extends yC{constructor(A,I){super();const g=this;let C=null,Q=1,E=null,i="local-floor",o=1,e=null,t=null,a=null,s=null,h=null,n=null;const w=new cc,r=I.getContextAttributes();let S=null,y=null;const G=[],M=[],m=new vA;let F=null;const N=new WI;N.layers.enable(1),N.viewport=new $A;const H=new WI;H.layers.enable(2),H.viewport=new $A;const P=[N,H],c=new rc;c.layers.enable(1),c.layers.enable(2);let U=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let CA=G[j];return CA===void 0&&(CA=new eo,G[j]=CA),CA.getTargetRaySpace()},this.getControllerGrip=function(j){let CA=G[j];return CA===void 0&&(CA=new eo,G[j]=CA),CA.getGripSpace()},this.getHand=function(j){let CA=G[j];return CA===void 0&&(CA=new eo,G[j]=CA),CA.getHandSpace()};function v(j){const CA=M.indexOf(j.inputSource);if(CA===-1)return;const nA=G[CA];nA!==void 0&&(nA.update(j.inputSource,j.frame,e||E),nA.dispatchEvent({type:j.type,data:j.inputSource}))}function W(){C.removeEventListener("select",v),C.removeEventListener("selectstart",v),C.removeEventListener("selectend",v),C.removeEventListener("squeeze",v),C.removeEventListener("squeezestart",v),C.removeEventListener("squeezeend",v),C.removeEventListener("end",W),C.removeEventListener("inputsourceschange",$);for(let j=0;j<G.length;j++){const CA=M[j];CA!==null&&(M[j]=null,G[j].disconnect(CA))}U=null,O=null,w.reset(),A.setRenderTarget(S),h=null,s=null,a=null,C=null,y=null,QI.stop(),g.isPresenting=!1,A.setPixelRatio(F),A.setSize(m.width,m.height,!1),g.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){Q=j,g.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){i=j,g.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return e||E},this.setReferenceSpace=function(j){e=j},this.getBaseLayer=function(){return s!==null?s:h},this.getBinding=function(){return a},this.getFrame=function(){return n},this.getSession=function(){return C},this.setSession=async function(j){if(C=j,C!==null){if(S=A.getRenderTarget(),C.addEventListener("select",v),C.addEventListener("selectstart",v),C.addEventListener("selectend",v),C.addEventListener("squeeze",v),C.addEventListener("squeezestart",v),C.addEventListener("squeezeend",v),C.addEventListener("end",W),C.addEventListener("inputsourceschange",$),r.xrCompatible!==!0&&await I.makeXRCompatible(),F=A.getPixelRatio(),A.getSize(m),C.renderState.layers===void 0){const CA={antialias:r.antialias,alpha:!0,depth:r.depth,stencil:r.stencil,framebufferScaleFactor:Q};h=new XRWebGLLayer(C,I,CA),C.updateRenderState({baseLayer:h}),A.setPixelRatio(1),A.setSize(h.framebufferWidth,h.framebufferHeight,!1),y=new UC(h.framebufferWidth,h.framebufferHeight,{format:og,type:fg,colorSpace:A.outputColorSpace,stencilBuffer:r.stencil})}else{let CA=null,nA=null,sA=null;r.depth&&(sA=r.stencil?I.DEPTH24_STENCIL8:I.DEPTH_COMPONENT24,CA=r.stencil?jC:PC,nA=r.stencil?WC:kC);const HA={colorFormat:I.RGBA8,depthFormat:sA,scaleFactor:Q};a=new XRWebGLBinding(C,I),s=a.createProjectionLayer(HA),C.updateRenderState({layers:[s]}),A.setPixelRatio(1),A.setSize(s.textureWidth,s.textureHeight,!1),y=new UC(s.textureWidth,s.textureHeight,{format:og,type:fg,depthTexture:new Nt(s.textureWidth,s.textureHeight,nA,void 0,void 0,void 0,void 0,void 0,void 0,CA),stencilBuffer:r.stencil,colorSpace:A.outputColorSpace,samples:r.antialias?4:0,resolveDepthBuffer:s.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(o),e=null,E=await C.requestReferenceSpace(i),QI.setContext(C),QI.start(),g.isPresenting=!0,g.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(C!==null)return C.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function $(j){for(let CA=0;CA<j.removed.length;CA++){const nA=j.removed[CA],sA=M.indexOf(nA);sA>=0&&(M[sA]=null,G[sA].disconnect(nA))}for(let CA=0;CA<j.added.length;CA++){const nA=j.added[CA];let sA=M.indexOf(nA);if(sA===-1){for(let RA=0;RA<G.length;RA++)if(RA>=M.length){M.push(nA),sA=RA;break}else if(M[RA]===null){M[RA]=nA,sA=RA;break}if(sA===-1)break}const HA=G[sA];HA&&HA.connect(nA)}}const b=new L,IA=new L;function Z(j,CA,nA){b.setFromMatrixPosition(CA.matrixWorld),IA.setFromMatrixPosition(nA.matrixWorld);const sA=b.distanceTo(IA),HA=CA.projectionMatrix.elements,RA=nA.projectionMatrix.elements,VA=HA[14]/(HA[10]-1),EI=HA[14]/(HA[10]+1),XA=(HA[9]+1)/HA[5],R=(HA[9]-1)/HA[5],Eg=(HA[8]-1)/HA[0],ZA=(RA[8]+1)/RA[0],zA=VA*Eg,dA=VA*ZA,hI=sA/(-Eg+ZA),LA=hI*-Eg;if(CA.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(LA),j.translateZ(hI),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),HA[10]===-1)j.projectionMatrix.copy(CA.projectionMatrix),j.projectionMatrixInverse.copy(CA.projectionMatrixInverse);else{const K=VA+hI,l=EI+hI,f=zA-LA,X=dA+(sA-LA),AA=XA*EI/l*K,V=R*EI/l*K;j.projectionMatrix.makePerspective(f,X,AA,V,K,l),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function EA(j,CA){CA===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(CA.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(C===null)return;let CA=j.near,nA=j.far;w.texture!==null&&(w.depthNear>0&&(CA=w.depthNear),w.depthFar>0&&(nA=w.depthFar)),c.near=H.near=N.near=CA,c.far=H.far=N.far=nA,(U!==c.near||O!==c.far)&&(C.updateRenderState({depthNear:c.near,depthFar:c.far}),U=c.near,O=c.far);const sA=j.parent,HA=c.cameras;EA(c,sA);for(let RA=0;RA<HA.length;RA++)EA(HA[RA],sA);HA.length===2?Z(c,N,H):c.projectionMatrix.copy(N.projectionMatrix),cA(j,c,sA)};function cA(j,CA,nA){nA===null?j.matrix.copy(CA.matrixWorld):(j.matrix.copy(nA.matrixWorld),j.matrix.invert(),j.matrix.multiply(CA.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(CA.projectionMatrix),j.projectionMatrixInverse.copy(CA.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=$C*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return c},this.getFoveation=function(){if(!(s===null&&h===null))return o},this.setFoveation=function(j){o=j,s!==null&&(s.fixedFoveation=j),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=j)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(c)};let KA=null;function AI(j,CA){if(t=CA.getViewerPose(e||E),n=CA,t!==null){const nA=t.views;h!==null&&(A.setRenderTargetFramebuffer(y,h.framebuffer),A.setRenderTarget(y));let sA=!1;nA.length!==c.cameras.length&&(c.cameras.length=0,sA=!0);for(let RA=0;RA<nA.length;RA++){const VA=nA[RA];let EI=null;if(h!==null)EI=h.getViewport(VA);else{const R=a.getViewSubImage(s,VA);EI=R.viewport,RA===0&&(A.setRenderTargetTextures(y,R.colorTexture,s.ignoreDepthValues?void 0:R.depthStencilTexture),A.setRenderTarget(y))}let XA=P[RA];XA===void 0&&(XA=new WI,XA.layers.enable(RA),XA.viewport=new $A,P[RA]=XA),XA.matrix.fromArray(VA.transform.matrix),XA.matrix.decompose(XA.position,XA.quaternion,XA.scale),XA.projectionMatrix.fromArray(VA.projectionMatrix),XA.projectionMatrixInverse.copy(XA.projectionMatrix).invert(),XA.viewport.set(EI.x,EI.y,EI.width,EI.height),RA===0&&(c.matrix.copy(XA.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale)),sA===!0&&c.cameras.push(XA)}const HA=C.enabledFeatures;if(HA&&HA.includes("depth-sensing")){const RA=a.getDepthInformation(nA[0]);RA&&RA.isValid&&RA.texture&&w.init(A,RA,C.renderState)}}for(let nA=0;nA<G.length;nA++){const sA=M[nA],HA=G[nA];sA!==null&&HA!==void 0&&HA.update(sA,CA,e||E)}KA&&KA(j,CA),CA.detectedPlanes&&g.dispatchEvent({type:"planesdetected",data:CA}),n=null}const QI=new wt;QI.setAnimationLoop(AI),this.setAnimationLoop=function(j){KA=j},this.dispose=function(){}}}const YC=new eg,Gc=new uA;function kc(B,A){function I(r,S){r.matrixAutoUpdate===!0&&r.updateMatrix(),S.value.copy(r.matrix)}function g(r,S){S.color.getRGB(r.fogColor.value,ht(B)),S.isFog?(r.fogNear.value=S.near,r.fogFar.value=S.far):S.isFogExp2&&(r.fogDensity.value=S.density)}function C(r,S,y,G,M){S.isMeshBasicMaterial||S.isMeshLambertMaterial?Q(r,S):S.isMeshToonMaterial?(Q(r,S),a(r,S)):S.isMeshPhongMaterial?(Q(r,S),t(r,S)):S.isMeshStandardMaterial?(Q(r,S),s(r,S),S.isMeshPhysicalMaterial&&h(r,S,M)):S.isMeshMatcapMaterial?(Q(r,S),n(r,S)):S.isMeshDepthMaterial?Q(r,S):S.isMeshDistanceMaterial?(Q(r,S),w(r,S)):S.isMeshNormalMaterial?Q(r,S):S.isLineBasicMaterial?(E(r,S),S.isLineDashedMaterial&&i(r,S)):S.isPointsMaterial?o(r,S,y,G):S.isSpriteMaterial?e(r,S):S.isShadowMaterial?(r.color.value.copy(S.color),r.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function Q(r,S){r.opacity.value=S.opacity,S.color&&r.diffuse.value.copy(S.color),S.emissive&&r.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(r.map.value=S.map,I(S.map,r.mapTransform)),S.alphaMap&&(r.alphaMap.value=S.alphaMap,I(S.alphaMap,r.alphaMapTransform)),S.bumpMap&&(r.bumpMap.value=S.bumpMap,I(S.bumpMap,r.bumpMapTransform),r.bumpScale.value=S.bumpScale,S.side===VI&&(r.bumpScale.value*=-1)),S.normalMap&&(r.normalMap.value=S.normalMap,I(S.normalMap,r.normalMapTransform),r.normalScale.value.copy(S.normalScale),S.side===VI&&r.normalScale.value.negate()),S.displacementMap&&(r.displacementMap.value=S.displacementMap,I(S.displacementMap,r.displacementMapTransform),r.displacementScale.value=S.displacementScale,r.displacementBias.value=S.displacementBias),S.emissiveMap&&(r.emissiveMap.value=S.emissiveMap,I(S.emissiveMap,r.emissiveMapTransform)),S.specularMap&&(r.specularMap.value=S.specularMap,I(S.specularMap,r.specularMapTransform)),S.alphaTest>0&&(r.alphaTest.value=S.alphaTest);const y=A.get(S),G=y.envMap,M=y.envMapRotation;G&&(r.envMap.value=G,YC.copy(M),YC.x*=-1,YC.y*=-1,YC.z*=-1,G.isCubeTexture&&G.isRenderTargetTexture===!1&&(YC.y*=-1,YC.z*=-1),r.envMapRotation.value.setFromMatrix4(Gc.makeRotationFromEuler(YC)),r.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1,r.reflectivity.value=S.reflectivity,r.ior.value=S.ior,r.refractionRatio.value=S.refractionRatio),S.lightMap&&(r.lightMap.value=S.lightMap,r.lightMapIntensity.value=S.lightMapIntensity,I(S.lightMap,r.lightMapTransform)),S.aoMap&&(r.aoMap.value=S.aoMap,r.aoMapIntensity.value=S.aoMapIntensity,I(S.aoMap,r.aoMapTransform))}function E(r,S){r.diffuse.value.copy(S.color),r.opacity.value=S.opacity,S.map&&(r.map.value=S.map,I(S.map,r.mapTransform))}function i(r,S){r.dashSize.value=S.dashSize,r.totalSize.value=S.dashSize+S.gapSize,r.scale.value=S.scale}function o(r,S,y,G){r.diffuse.value.copy(S.color),r.opacity.value=S.opacity,r.size.value=S.size*y,r.scale.value=G*.5,S.map&&(r.map.value=S.map,I(S.map,r.uvTransform)),S.alphaMap&&(r.alphaMap.value=S.alphaMap,I(S.alphaMap,r.alphaMapTransform)),S.alphaTest>0&&(r.alphaTest.value=S.alphaTest)}function e(r,S){r.diffuse.value.copy(S.color),r.opacity.value=S.opacity,r.rotation.value=S.rotation,S.map&&(r.map.value=S.map,I(S.map,r.mapTransform)),S.alphaMap&&(r.alphaMap.value=S.alphaMap,I(S.alphaMap,r.alphaMapTransform)),S.alphaTest>0&&(r.alphaTest.value=S.alphaTest)}function t(r,S){r.specular.value.copy(S.specular),r.shininess.value=Math.max(S.shininess,1e-4)}function a(r,S){S.gradientMap&&(r.gradientMap.value=S.gradientMap)}function s(r,S){r.metalness.value=S.metalness,S.metalnessMap&&(r.metalnessMap.value=S.metalnessMap,I(S.metalnessMap,r.metalnessMapTransform)),r.roughness.value=S.roughness,S.roughnessMap&&(r.roughnessMap.value=S.roughnessMap,I(S.roughnessMap,r.roughnessMapTransform)),S.envMap&&(r.envMapIntensity.value=S.envMapIntensity)}function h(r,S,y){r.ior.value=S.ior,S.sheen>0&&(r.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),r.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(r.sheenColorMap.value=S.sheenColorMap,I(S.sheenColorMap,r.sheenColorMapTransform)),S.sheenRoughnessMap&&(r.sheenRoughnessMap.value=S.sheenRoughnessMap,I(S.sheenRoughnessMap,r.sheenRoughnessMapTransform))),S.clearcoat>0&&(r.clearcoat.value=S.clearcoat,r.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(r.clearcoatMap.value=S.clearcoatMap,I(S.clearcoatMap,r.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(r.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,I(S.clearcoatRoughnessMap,r.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(r.clearcoatNormalMap.value=S.clearcoatNormalMap,I(S.clearcoatNormalMap,r.clearcoatNormalMapTransform),r.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===VI&&r.clearcoatNormalScale.value.negate())),S.dispersion>0&&(r.dispersion.value=S.dispersion),S.iridescence>0&&(r.iridescence.value=S.iridescence,r.iridescenceIOR.value=S.iridescenceIOR,r.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],r.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(r.iridescenceMap.value=S.iridescenceMap,I(S.iridescenceMap,r.iridescenceMapTransform)),S.iridescenceThicknessMap&&(r.iridescenceThicknessMap.value=S.iridescenceThicknessMap,I(S.iridescenceThicknessMap,r.iridescenceThicknessMapTransform))),S.transmission>0&&(r.transmission.value=S.transmission,r.transmissionSamplerMap.value=y.texture,r.transmissionSamplerSize.value.set(y.width,y.height),S.transmissionMap&&(r.transmissionMap.value=S.transmissionMap,I(S.transmissionMap,r.transmissionMapTransform)),r.thickness.value=S.thickness,S.thicknessMap&&(r.thicknessMap.value=S.thicknessMap,I(S.thicknessMap,r.thicknessMapTransform)),r.attenuationDistance.value=S.attenuationDistance,r.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(r.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(r.anisotropyMap.value=S.anisotropyMap,I(S.anisotropyMap,r.anisotropyMapTransform))),r.specularIntensity.value=S.specularIntensity,r.specularColor.value.copy(S.specularColor),S.specularColorMap&&(r.specularColorMap.value=S.specularColorMap,I(S.specularColorMap,r.specularColorMapTransform)),S.specularIntensityMap&&(r.specularIntensityMap.value=S.specularIntensityMap,I(S.specularIntensityMap,r.specularIntensityMapTransform))}function n(r,S){S.matcap&&(r.matcap.value=S.matcap)}function w(r,S){const y=A.get(S).light;r.referencePosition.value.setFromMatrixPosition(y.matrixWorld),r.nearDistance.value=y.shadow.camera.near,r.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:g,refreshMaterialUniforms:C}}function yc(B,A,I,g){let C={},Q={},E=[];const i=B.getParameter(B.MAX_UNIFORM_BUFFER_BINDINGS);function o(y,G){const M=G.program;g.uniformBlockBinding(y,M)}function e(y,G){let M=C[y.id];M===void 0&&(n(y),M=t(y),C[y.id]=M,y.addEventListener("dispose",r));const m=G.program;g.updateUBOMapping(y,m);const F=A.render.frame;Q[y.id]!==F&&(s(y),Q[y.id]=F)}function t(y){const G=a();y.__bindingPointIndex=G;const M=B.createBuffer(),m=y.__size,F=y.usage;return B.bindBuffer(B.UNIFORM_BUFFER,M),B.bufferData(B.UNIFORM_BUFFER,m,F),B.bindBuffer(B.UNIFORM_BUFFER,null),B.bindBufferBase(B.UNIFORM_BUFFER,G,M),M}function a(){for(let y=0;y<i;y++)if(E.indexOf(y)===-1)return E.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function s(y){const G=C[y.id],M=y.uniforms,m=y.__cache;B.bindBuffer(B.UNIFORM_BUFFER,G);for(let F=0,N=M.length;F<N;F++){const H=Array.isArray(M[F])?M[F]:[M[F]];for(let P=0,c=H.length;P<c;P++){const U=H[P];if(h(U,F,P,m)===!0){const O=U.__offset,v=Array.isArray(U.value)?U.value:[U.value];let W=0;for(let $=0;$<v.length;$++){const b=v[$],IA=w(b);typeof b=="number"||typeof b=="boolean"?(U.__data[0]=b,B.bufferSubData(B.UNIFORM_BUFFER,O+W,U.__data)):b.isMatrix3?(U.__data[0]=b.elements[0],U.__data[1]=b.elements[1],U.__data[2]=b.elements[2],U.__data[3]=0,U.__data[4]=b.elements[3],U.__data[5]=b.elements[4],U.__data[6]=b.elements[5],U.__data[7]=0,U.__data[8]=b.elements[6],U.__data[9]=b.elements[7],U.__data[10]=b.elements[8],U.__data[11]=0):(b.toArray(U.__data,W),W+=IA.storage/Float32Array.BYTES_PER_ELEMENT)}B.bufferSubData(B.UNIFORM_BUFFER,O,U.__data)}}}B.bindBuffer(B.UNIFORM_BUFFER,null)}function h(y,G,M,m){const F=y.value,N=G+"_"+M;if(m[N]===void 0)return typeof F=="number"||typeof F=="boolean"?m[N]=F:m[N]=F.clone(),!0;{const H=m[N];if(typeof F=="number"||typeof F=="boolean"){if(H!==F)return m[N]=F,!0}else if(H.equals(F)===!1)return H.copy(F),!0}return!1}function n(y){const G=y.uniforms;let M=0;const m=16;for(let N=0,H=G.length;N<H;N++){const P=Array.isArray(G[N])?G[N]:[G[N]];for(let c=0,U=P.length;c<U;c++){const O=P[c],v=Array.isArray(O.value)?O.value:[O.value];for(let W=0,$=v.length;W<$;W++){const b=v[W],IA=w(b),Z=M%m,EA=Z%IA.boundary,cA=Z+EA;M+=EA,cA!==0&&m-cA<IA.storage&&(M+=m-cA),O.__data=new Float32Array(IA.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=M,M+=IA.storage}}}const F=M%m;return F>0&&(M+=m-F),y.__size=M,y.__cache={},this}function w(y){const G={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(G.boundary=4,G.storage=4):y.isVector2?(G.boundary=8,G.storage=8):y.isVector3||y.isColor?(G.boundary=16,G.storage=12):y.isVector4?(G.boundary=16,G.storage=16):y.isMatrix3?(G.boundary=48,G.storage=48):y.isMatrix4?(G.boundary=64,G.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),G}function r(y){const G=y.target;G.removeEventListener("dispose",r);const M=E.indexOf(G.__bindingPointIndex);E.splice(M,1),B.deleteBuffer(C[G.id]),delete C[G.id],delete Q[G.id]}function S(){for(const y in C)B.deleteBuffer(C[y]);E=[],C={},Q={}}return{bind:o,update:e,dispose:S}}class Uc{constructor(A={}){const{canvas:I=ih(),context:g=null,depth:C=!0,stencil:Q=!1,alpha:E=!1,antialias:i=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:e=!1,powerPreference:t="default",failIfMajorPerformanceCaveat:a=!1}=A;this.isWebGLRenderer=!0;let s;if(g!==null){if(typeof WebGLRenderingContext<"u"&&g instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");s=g.getContextAttributes().alpha}else s=E;const h=new Uint32Array(4),n=new Int32Array(4);let w=null,r=null;const S=[],y=[];this.domElement=I,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=uI,this.toneMapping=BC,this.toneMappingExposure=1;const G=this;let M=!1,m=0,F=0,N=null,H=-1,P=null;const c=new $A,U=new $A;let O=null;const v=new MA(0);let W=0,$=I.width,b=I.height,IA=1,Z=null,EA=null;const cA=new $A(0,0,$,b),KA=new $A(0,0,$,b);let AI=!1;const QI=new $i;let j=!1,CA=!1;const nA=new uA,sA=new uA,HA=new L,RA=new $A,VA={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let EI=!1;function XA(){return N===null?IA:1}let R=g;function Eg(k,u){return I.getContext(k,u)}try{const k={alpha:!0,depth:C,stencil:Q,antialias:i,premultipliedAlpha:o,preserveDrawingBuffer:e,powerPreference:t,failIfMajorPerformanceCaveat:a};if("setAttribute"in I&&I.setAttribute("data-engine",`three.js r${Lg}`),I.addEventListener("webglcontextlost",z,!1),I.addEventListener("webglcontextrestored",eA,!1),I.addEventListener("webglcontextcreationerror",iA,!1),R===null){const u="webgl2";if(R=Eg(u,k),R===null)throw Eg(u)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(k){throw console.error("THREE.WebGLRenderer: "+k.message),k}let ZA,zA,dA,hI,LA,K,l,f,X,AA,V,GA,oA,rA,WA,BA,wA,qA,YA,DA,PA,mA,tI,q;function tA(){ZA=new Fn(R),ZA.init(),mA=new hc(R,ZA),zA=new yn(R,ZA,A,mA),dA=new ac(R),zA.reverseDepthBuffer&&dA.buffers.depth.setReversed(!0),hI=new dn(R),LA=new Vw,K=new Dc(R,ZA,dA,LA,zA,mA,hI),l=new Mn(G),f=new Jn(G),X=new mh(R),tI=new Gn(R,X),AA=new Rn(R,X,hI,tI),V=new Yn(R,AA,X,hI),YA=new qn(R,zA,K),BA=new Un(LA),GA=new jw(G,l,f,ZA,zA,tI,BA),oA=new kc(G,LA),rA=new zw,WA=new Bc(ZA),qA=new ln(G,l,f,dA,V,s,o),wA=new ec(G,V,zA),q=new yc(R,hI,zA,dA),DA=new kn(R,ZA,hI),PA=new pn(R,ZA,hI),hI.programs=GA.programs,G.capabilities=zA,G.extensions=ZA,G.properties=LA,G.renderLists=rA,G.shadowMap=wA,G.state=dA,G.info=hI}tA();const _=new lc(G,R);this.xr=_,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const k=ZA.get("WEBGL_lose_context");k&&k.loseContext()},this.forceContextRestore=function(){const k=ZA.get("WEBGL_lose_context");k&&k.restoreContext()},this.getPixelRatio=function(){return IA},this.setPixelRatio=function(k){k!==void 0&&(IA=k,this.setSize($,b,!1))},this.getSize=function(k){return k.set($,b)},this.setSize=function(k,u,T=!0){if(_.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=k,b=u,I.width=Math.floor(k*IA),I.height=Math.floor(u*IA),T===!0&&(I.style.width=k+"px",I.style.height=u+"px"),this.setViewport(0,0,k,u)},this.getDrawingBufferSize=function(k){return k.set($*IA,b*IA).floor()},this.setDrawingBufferSize=function(k,u,T){$=k,b=u,IA=T,I.width=Math.floor(k*T),I.height=Math.floor(u*T),this.setViewport(0,0,k,u)},this.getCurrentViewport=function(k){return k.copy(c)},this.getViewport=function(k){return k.copy(cA)},this.setViewport=function(k,u,T,x){k.isVector4?cA.set(k.x,k.y,k.z,k.w):cA.set(k,u,T,x),dA.viewport(c.copy(cA).multiplyScalar(IA).round())},this.getScissor=function(k){return k.copy(KA)},this.setScissor=function(k,u,T,x){k.isVector4?KA.set(k.x,k.y,k.z,k.w):KA.set(k,u,T,x),dA.scissor(U.copy(KA).multiplyScalar(IA).round())},this.getScissorTest=function(){return AI},this.setScissorTest=function(k){dA.setScissorTest(AI=k)},this.setOpaqueSort=function(k){Z=k},this.setTransparentSort=function(k){EA=k},this.getClearColor=function(k){return k.copy(qA.getClearColor())},this.setClearColor=function(){qA.setClearColor.apply(qA,arguments)},this.getClearAlpha=function(){return qA.getClearAlpha()},this.setClearAlpha=function(){qA.setClearAlpha.apply(qA,arguments)},this.clear=function(k=!0,u=!0,T=!0){let x=0;if(k){let Y=!1;if(N!==null){const gA=N.texture.format;Y=gA===zE||gA===XE||gA===VE}if(Y){const gA=N.texture.type,aA=gA===fg||gA===kC||gA===qB||gA===WC||gA===WE||gA===PE,SA=qA.getClearColor(),lA=qA.getClearAlpha(),pA=SA.r,JA=SA.g,NA=SA.b;aA?(h[0]=pA,h[1]=JA,h[2]=NA,h[3]=lA,R.clearBufferuiv(R.COLOR,0,h)):(n[0]=pA,n[1]=JA,n[2]=NA,n[3]=lA,R.clearBufferiv(R.COLOR,0,n))}else x|=R.COLOR_BUFFER_BIT}u&&(x|=R.DEPTH_BUFFER_BIT,R.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),T&&(x|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(x)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){I.removeEventListener("webglcontextlost",z,!1),I.removeEventListener("webglcontextrestored",eA,!1),I.removeEventListener("webglcontextcreationerror",iA,!1),rA.dispose(),WA.dispose(),LA.dispose(),l.dispose(),f.dispose(),V.dispose(),tI.dispose(),q.dispose(),GA.dispose(),_.dispose(),_.removeEventListener("sessionstart",vs),_.removeEventListener("sessionend",_s),TC.stop()};function z(k){k.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function eA(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const k=hI.autoReset,u=wA.enabled,T=wA.autoUpdate,x=wA.needsUpdate,Y=wA.type;tA(),hI.autoReset=k,wA.enabled=u,wA.autoUpdate=T,wA.needsUpdate=x,wA.type=Y}function iA(k){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",k.statusMessage)}function aI(k){const u=k.target;u.removeEventListener("dispose",aI),JI(u)}function JI(k){Ag(k),LA.remove(k)}function Ag(k){const u=LA.get(k).programs;u!==void 0&&(u.forEach(function(T){GA.releaseProgram(T)}),k.isShaderMaterial&&GA.releaseShaderCache(k))}this.renderBufferDirect=function(k,u,T,x,Y,gA){u===null&&(u=VA);const aA=Y.isMesh&&Y.matrixWorld.determinant()<0,SA=fG(k,u,T,x,Y);dA.setMaterial(x,aA);let lA=T.index,pA=1;if(x.wireframe===!0){if(lA=AA.getWireframeAttribute(T),lA===void 0)return;pA=2}const JA=T.drawRange,NA=T.attributes.position;let iI=JA.start*pA,wI=(JA.start+JA.count)*pA;gA!==null&&(iI=Math.max(iI,gA.start*pA),wI=Math.min(wI,(gA.start+gA.count)*pA)),lA!==null?(iI=Math.max(iI,0),wI=Math.min(wI,lA.count)):NA!=null&&(iI=Math.max(iI,0),wI=Math.min(wI,NA.count));const yI=wI-iI;if(yI<0||yI===1/0)return;tI.setup(Y,x,SA,T,lA);let YI,SI=DA;if(lA!==null&&(YI=X.get(lA),SI=PA,SI.setIndex(YI)),Y.isMesh)x.wireframe===!0?(dA.setLineWidth(x.wireframeLinewidth*XA()),SI.setMode(R.LINES)):SI.setMode(R.TRIANGLES);else if(Y.isLine){let kA=x.linewidth;kA===void 0&&(kA=1),dA.setLineWidth(kA*XA()),Y.isLineSegments?SI.setMode(R.LINES):Y.isLineLoop?SI.setMode(R.LINE_LOOP):SI.setMode(R.LINE_STRIP)}else Y.isPoints?SI.setMode(R.POINTS):Y.isSprite&&SI.setMode(R.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)SI.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(ZA.get("WEBGL_multi_draw"))SI.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const kA=Y._multiDrawStarts,jI=Y._multiDrawCounts,xC=Y._multiDrawCount,Mg=lA?X.get(lA).bytesPerElement:1,pB=LA.get(x).currentProgram.getUniforms();for(let ig=0;ig<xC;ig++)pB.setValue(R,"_gl_DrawID",ig),SI.render(kA[ig]/Mg,jI[ig])}else if(Y.isInstancedMesh)SI.renderInstances(iI,yI,Y.count);else if(T.isInstancedBufferGeometry){const kA=T._maxInstanceCount!==void 0?T._maxInstanceCount:1/0,jI=Math.min(T.instanceCount,kA);SI.renderInstances(iI,yI,jI)}else SI.render(iI,yI)};function II(k,u,T){k.transparent===!0&&k.side===Ng&&k.forceSinglePass===!1?(k.side=VI,k.needsUpdate=!0,YE(k,u,T),k.side=mg,k.needsUpdate=!0,YE(k,u,T),k.side=Ng):YE(k,u,T)}this.compile=function(k,u,T=null){T===null&&(T=k),r=WA.get(T),r.init(u),y.push(r),T.traverseVisible(function(Y){Y.isLight&&Y.layers.test(u.layers)&&(r.pushLight(Y),Y.castShadow&&r.pushShadow(Y))}),k!==T&&k.traverseVisible(function(Y){Y.isLight&&Y.layers.test(u.layers)&&(r.pushLight(Y),Y.castShadow&&r.pushShadow(Y))}),r.setupLights();const x=new Set;return k.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const gA=Y.material;if(gA)if(Array.isArray(gA))for(let aA=0;aA<gA.length;aA++){const SA=gA[aA];II(SA,T,Y),x.add(SA)}else II(gA,T,Y),x.add(gA)}),y.pop(),r=null,x},this.compileAsync=function(k,u,T=null){const x=this.compile(k,u,T);return new Promise(Y=>{function gA(){if(x.forEach(function(aA){LA.get(aA).currentProgram.isReady()&&x.delete(aA)}),x.size===0){Y(k);return}setTimeout(gA,10)}ZA.get("KHR_parallel_shader_compile")!==null?gA():setTimeout(gA,10)})};let Ig=null;function gC(k){Ig&&Ig(k)}function vs(){TC.stop()}function _s(){TC.start()}const TC=new wt;TC.setAnimationLoop(gC),typeof self<"u"&&TC.setContext(self),this.setAnimationLoop=function(k){Ig=k,_.setAnimationLoop(k),k===null?TC.stop():TC.start()},_.addEventListener("sessionstart",vs),_.addEventListener("sessionend",_s),this.render=function(k,u){if(u!==void 0&&u.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),u.parent===null&&u.matrixWorldAutoUpdate===!0&&u.updateMatrixWorld(),_.enabled===!0&&_.isPresenting===!0&&(_.cameraAutoUpdate===!0&&_.updateCamera(u),u=_.getCamera()),k.isScene===!0&&k.onBeforeRender(G,k,u,N),r=WA.get(k,y.length),r.init(u),y.push(r),sA.multiplyMatrices(u.projectionMatrix,u.matrixWorldInverse),QI.setFromProjectionMatrix(sA),CA=this.localClippingEnabled,j=BA.init(this.clippingPlanes,CA),w=rA.get(k,S.length),w.init(),S.push(w),_.enabled===!0&&_.isPresenting===!0){const gA=G.xr.getDepthSensingMesh();gA!==null&&ce(gA,u,-1/0,G.sortObjects)}ce(k,u,0,G.sortObjects),w.finish(),G.sortObjects===!0&&w.sort(Z,EA),EI=_.enabled===!1||_.isPresenting===!1||_.hasDepthSensing()===!1,EI&&qA.addToRenderList(w,k),this.info.render.frame++,j===!0&&BA.beginShadows();const T=r.state.shadowsArray;wA.render(T,k,u),j===!0&&BA.endShadows(),this.info.autoReset===!0&&this.info.reset();const x=w.opaque,Y=w.transmissive;if(r.setupLights(),u.isArrayCamera){const gA=u.cameras;if(Y.length>0)for(let aA=0,SA=gA.length;aA<SA;aA++){const lA=gA[aA];Ws(x,Y,k,lA)}EI&&qA.render(k);for(let aA=0,SA=gA.length;aA<SA;aA++){const lA=gA[aA];Zs(w,k,lA,lA.viewport)}}else Y.length>0&&Ws(x,Y,k,u),EI&&qA.render(k),Zs(w,k,u);N!==null&&(K.updateMultisampleRenderTarget(N),K.updateRenderTargetMipmap(N)),k.isScene===!0&&k.onAfterRender(G,k,u),tI.resetDefaultState(),H=-1,P=null,y.pop(),y.length>0?(r=y[y.length-1],j===!0&&BA.setGlobalState(G.clippingPlanes,r.state.camera)):r=null,S.pop(),S.length>0?w=S[S.length-1]:w=null};function ce(k,u,T,x){if(k.visible===!1)return;if(k.layers.test(u.layers)){if(k.isGroup)T=k.renderOrder;else if(k.isLOD)k.autoUpdate===!0&&k.update(u);else if(k.isLight)r.pushLight(k),k.castShadow&&r.pushShadow(k);else if(k.isSprite){if(!k.frustumCulled||QI.intersectsSprite(k)){x&&RA.setFromMatrixPosition(k.matrixWorld).applyMatrix4(sA);const gA=V.update(k),aA=k.material;aA.visible&&w.push(k,gA,aA,T,RA.z,null)}}else if((k.isMesh||k.isLine||k.isPoints)&&(!k.frustumCulled||QI.intersectsObject(k))){const gA=V.update(k),aA=k.material;if(x&&(k.boundingSphere!==void 0?(k.boundingSphere===null&&k.computeBoundingSphere(),RA.copy(k.boundingSphere.center)):(gA.boundingSphere===null&&gA.computeBoundingSphere(),RA.copy(gA.boundingSphere.center)),RA.applyMatrix4(k.matrixWorld).applyMatrix4(sA)),Array.isArray(aA)){const SA=gA.groups;for(let lA=0,pA=SA.length;lA<pA;lA++){const JA=SA[lA],NA=aA[JA.materialIndex];NA&&NA.visible&&w.push(k,gA,NA,T,RA.z,JA)}}else aA.visible&&w.push(k,gA,aA,T,RA.z,null)}}const Y=k.children;for(let gA=0,aA=Y.length;gA<aA;gA++)ce(Y[gA],u,T,x)}function Zs(k,u,T,x){const Y=k.opaque,gA=k.transmissive,aA=k.transparent;r.setupLightsView(T),j===!0&&BA.setGlobalState(G.clippingPlanes,T),x&&dA.viewport(c.copy(x)),Y.length>0&&qE(Y,u,T),gA.length>0&&qE(gA,u,T),aA.length>0&&qE(aA,u,T),dA.buffers.depth.setTest(!0),dA.buffers.depth.setMask(!0),dA.buffers.color.setMask(!0),dA.setPolygonOffset(!1)}function Ws(k,u,T,x){if((T.isScene===!0?T.overrideMaterial:null)!==null)return;r.state.transmissionRenderTarget[x.id]===void 0&&(r.state.transmissionRenderTarget[x.id]=new UC(1,1,{generateMipmaps:!0,type:ZA.has("EXT_color_buffer_half_float")||ZA.has("EXT_color_buffer_float")?Tg:fg,minFilter:Jg,samples:4,stencilBuffer:Q,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:jA.workingColorSpace}));const Y=r.state.transmissionRenderTarget[x.id],gA=x.viewport||c;Y.setSize(gA.z,gA.w);const aA=G.getRenderTarget();G.setRenderTarget(Y),G.getClearColor(v),W=G.getClearAlpha(),W<1&&G.setClearColor(16777215,.5),G.clear(),EI&&qA.render(T);const SA=G.toneMapping;G.toneMapping=BC;const lA=x.viewport;if(x.viewport!==void 0&&(x.viewport=void 0),r.setupLightsView(x),j===!0&&BA.setGlobalState(G.clippingPlanes,x),qE(k,T,x),K.updateMultisampleRenderTarget(Y),K.updateRenderTargetMipmap(Y),ZA.has("WEBGL_multisampled_render_to_texture")===!1){let pA=!1;for(let JA=0,NA=u.length;JA<NA;JA++){const iI=u[JA],wI=iI.object,yI=iI.geometry,YI=iI.material,SI=iI.group;if(YI.side===Ng&&wI.layers.test(x.layers)){const kA=YI.side;YI.side=VI,YI.needsUpdate=!0,Ps(wI,T,x,yI,YI,SI),YI.side=kA,YI.needsUpdate=!0,pA=!0}}pA===!0&&(K.updateMultisampleRenderTarget(Y),K.updateRenderTargetMipmap(Y))}G.setRenderTarget(aA),G.setClearColor(v,W),lA!==void 0&&(x.viewport=lA),G.toneMapping=SA}function qE(k,u,T){const x=u.isScene===!0?u.overrideMaterial:null;for(let Y=0,gA=k.length;Y<gA;Y++){const aA=k[Y],SA=aA.object,lA=aA.geometry,pA=x===null?aA.material:x,JA=aA.group;SA.layers.test(T.layers)&&Ps(SA,u,T,lA,pA,JA)}}function Ps(k,u,T,x,Y,gA){k.onBeforeRender(G,u,T,x,Y,gA),k.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,k.matrixWorld),k.normalMatrix.getNormalMatrix(k.modelViewMatrix),Y.onBeforeRender(G,u,T,x,k,gA),Y.transparent===!0&&Y.side===Ng&&Y.forceSinglePass===!1?(Y.side=VI,Y.needsUpdate=!0,G.renderBufferDirect(T,u,x,Y,k,gA),Y.side=mg,Y.needsUpdate=!0,G.renderBufferDirect(T,u,x,Y,k,gA),Y.side=Ng):G.renderBufferDirect(T,u,x,Y,k,gA),k.onAfterRender(G,u,T,x,Y,gA)}function YE(k,u,T){u.isScene!==!0&&(u=VA);const x=LA.get(k),Y=r.state.lights,gA=r.state.shadowsArray,aA=Y.state.version,SA=GA.getParameters(k,Y.state,gA,u,T),lA=GA.getProgramCacheKey(SA);let pA=x.programs;x.environment=k.isMeshStandardMaterial?u.environment:null,x.fog=u.fog,x.envMap=(k.isMeshStandardMaterial?f:l).get(k.envMap||x.environment),x.envMapRotation=x.environment!==null&&k.envMap===null?u.environmentRotation:k.envMapRotation,pA===void 0&&(k.addEventListener("dispose",aI),pA=new Map,x.programs=pA);let JA=pA.get(lA);if(JA!==void 0){if(x.currentProgram===JA&&x.lightsStateVersion===aA)return Vs(k,SA),JA}else SA.uniforms=GA.getUniforms(k),k.onBeforeCompile(SA,G),JA=GA.acquireProgram(SA,lA),pA.set(lA,JA),x.uniforms=SA.uniforms;const NA=x.uniforms;return(!k.isShaderMaterial&&!k.isRawShaderMaterial||k.clipping===!0)&&(NA.clippingPlanes=BA.uniform),Vs(k,SA),x.needsLights=xG(k),x.lightsStateVersion=aA,x.needsLights&&(NA.ambientLightColor.value=Y.state.ambient,NA.lightProbe.value=Y.state.probe,NA.directionalLights.value=Y.state.directional,NA.directionalLightShadows.value=Y.state.directionalShadow,NA.spotLights.value=Y.state.spot,NA.spotLightShadows.value=Y.state.spotShadow,NA.rectAreaLights.value=Y.state.rectArea,NA.ltc_1.value=Y.state.rectAreaLTC1,NA.ltc_2.value=Y.state.rectAreaLTC2,NA.pointLights.value=Y.state.point,NA.pointLightShadows.value=Y.state.pointShadow,NA.hemisphereLights.value=Y.state.hemi,NA.directionalShadowMap.value=Y.state.directionalShadowMap,NA.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,NA.spotShadowMap.value=Y.state.spotShadowMap,NA.spotLightMatrix.value=Y.state.spotLightMatrix,NA.spotLightMap.value=Y.state.spotLightMap,NA.pointShadowMap.value=Y.state.pointShadowMap,NA.pointShadowMatrix.value=Y.state.pointShadowMatrix),x.currentProgram=JA,x.uniformsList=null,JA}function js(k){if(k.uniformsList===null){const u=k.currentProgram.getUniforms();k.uniformsList=BE.seqWithValue(u.seq,k.uniforms)}return k.uniformsList}function Vs(k,u){const T=LA.get(k);T.outputColorSpace=u.outputColorSpace,T.batching=u.batching,T.batchingColor=u.batchingColor,T.instancing=u.instancing,T.instancingColor=u.instancingColor,T.instancingMorph=u.instancingMorph,T.skinning=u.skinning,T.morphTargets=u.morphTargets,T.morphNormals=u.morphNormals,T.morphColors=u.morphColors,T.morphTargetsCount=u.morphTargetsCount,T.numClippingPlanes=u.numClippingPlanes,T.numIntersection=u.numClipIntersection,T.vertexAlphas=u.vertexAlphas,T.vertexTangents=u.vertexTangents,T.toneMapping=u.toneMapping}function fG(k,u,T,x,Y){u.isScene!==!0&&(u=VA),K.resetTextureUnits();const gA=u.fog,aA=x.isMeshStandardMaterial?u.environment:null,SA=N===null?G.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:FI,lA=(x.isMeshStandardMaterial?f:l).get(x.envMap||aA),pA=x.vertexColors===!0&&!!T.attributes.color&&T.attributes.color.itemSize===4,JA=!!T.attributes.tangent&&(!!x.normalMap||x.anisotropy>0),NA=!!T.morphAttributes.position,iI=!!T.morphAttributes.normal,wI=!!T.morphAttributes.color;let yI=BC;x.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(yI=G.toneMapping);const YI=T.morphAttributes.position||T.morphAttributes.normal||T.morphAttributes.color,SI=YI!==void 0?YI.length:0,kA=LA.get(x),jI=r.state.lights;if(j===!0&&(CA===!0||k!==P)){const Dg=k===P&&x.id===H;BA.setState(x,k,Dg)}let xC=!1;x.version===kA.__version?(kA.needsLights&&kA.lightsStateVersion!==jI.state.version||kA.outputColorSpace!==SA||Y.isBatchedMesh&&kA.batching===!1||!Y.isBatchedMesh&&kA.batching===!0||Y.isBatchedMesh&&kA.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&kA.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&kA.instancing===!1||!Y.isInstancedMesh&&kA.instancing===!0||Y.isSkinnedMesh&&kA.skinning===!1||!Y.isSkinnedMesh&&kA.skinning===!0||Y.isInstancedMesh&&kA.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&kA.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&kA.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&kA.instancingMorph===!1&&Y.morphTexture!==null||kA.envMap!==lA||x.fog===!0&&kA.fog!==gA||kA.numClippingPlanes!==void 0&&(kA.numClippingPlanes!==BA.numPlanes||kA.numIntersection!==BA.numIntersection)||kA.vertexAlphas!==pA||kA.vertexTangents!==JA||kA.morphTargets!==NA||kA.morphNormals!==iI||kA.morphColors!==wI||kA.toneMapping!==yI||kA.morphTargetsCount!==SI)&&(xC=!0):(xC=!0,kA.__version=x.version);let Mg=kA.currentProgram;xC===!0&&(Mg=YE(x,u,Y));let pB=!1,ig=!1,le=!1;const UI=Mg.getUniforms(),cC=kA.uniforms;if(dA.useProgram(Mg.program)&&(pB=!0,ig=!0,le=!0),x.id!==H&&(H=x.id,ig=!0),pB||P!==k){zA.reverseDepthBuffer?(nA.copy(k.projectionMatrix),eh(nA),th(nA),UI.setValue(R,"projectionMatrix",nA)):UI.setValue(R,"projectionMatrix",k.projectionMatrix),UI.setValue(R,"viewMatrix",k.matrixWorldInverse);const Dg=UI.map.cameraPosition;Dg!==void 0&&Dg.setValue(R,HA.setFromMatrixPosition(k.matrixWorld)),zA.logarithmicDepthBuffer&&UI.setValue(R,"logDepthBufFC",2/(Math.log(k.far+1)/Math.LN2)),(x.isMeshPhongMaterial||x.isMeshToonMaterial||x.isMeshLambertMaterial||x.isMeshBasicMaterial||x.isMeshStandardMaterial||x.isShaderMaterial)&&UI.setValue(R,"isOrthographic",k.isOrthographicCamera===!0),P!==k&&(P=k,ig=!0,le=!0)}if(Y.isSkinnedMesh){UI.setOptional(R,Y,"bindMatrix"),UI.setOptional(R,Y,"bindMatrixInverse");const Dg=Y.skeleton;Dg&&(Dg.boneTexture===null&&Dg.computeBoneTexture(),UI.setValue(R,"boneTexture",Dg.boneTexture,K))}Y.isBatchedMesh&&(UI.setOptional(R,Y,"batchingTexture"),UI.setValue(R,"batchingTexture",Y._matricesTexture,K),UI.setOptional(R,Y,"batchingIdTexture"),UI.setValue(R,"batchingIdTexture",Y._indirectTexture,K),UI.setOptional(R,Y,"batchingColorTexture"),Y._colorsTexture!==null&&UI.setValue(R,"batchingColorTexture",Y._colorsTexture,K));const Ge=T.morphAttributes;if((Ge.position!==void 0||Ge.normal!==void 0||Ge.color!==void 0)&&YA.update(Y,T,Mg),(ig||kA.receiveShadow!==Y.receiveShadow)&&(kA.receiveShadow=Y.receiveShadow,UI.setValue(R,"receiveShadow",Y.receiveShadow)),x.isMeshGouraudMaterial&&x.envMap!==null&&(cC.envMap.value=lA,cC.flipEnvMap.value=lA.isCubeTexture&&lA.isRenderTargetTexture===!1?-1:1),x.isMeshStandardMaterial&&x.envMap===null&&u.environment!==null&&(cC.envMapIntensity.value=u.environmentIntensity),ig&&(UI.setValue(R,"toneMappingExposure",G.toneMappingExposure),kA.needsLights&&TG(cC,le),gA&&x.fog===!0&&oA.refreshFogUniforms(cC,gA),oA.refreshMaterialUniforms(cC,x,IA,b,r.state.transmissionRenderTarget[k.id]),BE.upload(R,js(kA),cC,K)),x.isShaderMaterial&&x.uniformsNeedUpdate===!0&&(BE.upload(R,js(kA),cC,K),x.uniformsNeedUpdate=!1),x.isSpriteMaterial&&UI.setValue(R,"center",Y.center),UI.setValue(R,"modelViewMatrix",Y.modelViewMatrix),UI.setValue(R,"normalMatrix",Y.normalMatrix),UI.setValue(R,"modelMatrix",Y.matrixWorld),x.isShaderMaterial||x.isRawShaderMaterial){const Dg=x.uniformsGroups;for(let ke=0,bG=Dg.length;ke<bG;ke++){const Xs=Dg[ke];q.update(Xs,Mg),q.bind(Xs,Mg)}}return Mg}function TG(k,u){k.ambientLightColor.needsUpdate=u,k.lightProbe.needsUpdate=u,k.directionalLights.needsUpdate=u,k.directionalLightShadows.needsUpdate=u,k.pointLights.needsUpdate=u,k.pointLightShadows.needsUpdate=u,k.spotLights.needsUpdate=u,k.spotLightShadows.needsUpdate=u,k.rectAreaLights.needsUpdate=u,k.hemisphereLights.needsUpdate=u}function xG(k){return k.isMeshLambertMaterial||k.isMeshToonMaterial||k.isMeshPhongMaterial||k.isMeshStandardMaterial||k.isShadowMaterial||k.isShaderMaterial&&k.lights===!0}this.getActiveCubeFace=function(){return m},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(k,u,T){LA.get(k.texture).__webglTexture=u,LA.get(k.depthTexture).__webglTexture=T;const x=LA.get(k);x.__hasExternalTextures=!0,x.__autoAllocateDepthBuffer=T===void 0,x.__autoAllocateDepthBuffer||ZA.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),x.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(k,u){const T=LA.get(k);T.__webglFramebuffer=u,T.__useDefaultFramebuffer=u===void 0},this.setRenderTarget=function(k,u=0,T=0){N=k,m=u,F=T;let x=!0,Y=null,gA=!1,aA=!1;if(k){const SA=LA.get(k);if(SA.__useDefaultFramebuffer!==void 0)dA.bindFramebuffer(R.FRAMEBUFFER,null),x=!1;else if(SA.__webglFramebuffer===void 0)K.setupRenderTarget(k);else if(SA.__hasExternalTextures)K.rebindTextures(k,LA.get(k.texture).__webglTexture,LA.get(k.depthTexture).__webglTexture);else if(k.depthBuffer){const JA=k.depthTexture;if(SA.__boundDepthTexture!==JA){if(JA!==null&&LA.has(JA)&&(k.width!==JA.image.width||k.height!==JA.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(k)}}const lA=k.texture;(lA.isData3DTexture||lA.isDataArrayTexture||lA.isCompressedArrayTexture)&&(aA=!0);const pA=LA.get(k).__webglFramebuffer;k.isWebGLCubeRenderTarget?(Array.isArray(pA[u])?Y=pA[u][T]:Y=pA[u],gA=!0):k.samples>0&&K.useMultisampledRTT(k)===!1?Y=LA.get(k).__webglMultisampledFramebuffer:Array.isArray(pA)?Y=pA[T]:Y=pA,c.copy(k.viewport),U.copy(k.scissor),O=k.scissorTest}else c.copy(cA).multiplyScalar(IA).floor(),U.copy(KA).multiplyScalar(IA).floor(),O=AI;if(dA.bindFramebuffer(R.FRAMEBUFFER,Y)&&x&&dA.drawBuffers(k,Y),dA.viewport(c),dA.scissor(U),dA.setScissorTest(O),gA){const SA=LA.get(k.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+u,SA.__webglTexture,T)}else if(aA){const SA=LA.get(k.texture),lA=u||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,SA.__webglTexture,T||0,lA)}H=-1},this.readRenderTargetPixels=function(k,u,T,x,Y,gA,aA){if(!(k&&k.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let SA=LA.get(k).__webglFramebuffer;if(k.isWebGLCubeRenderTarget&&aA!==void 0&&(SA=SA[aA]),SA){dA.bindFramebuffer(R.FRAMEBUFFER,SA);try{const lA=k.texture,pA=lA.format,JA=lA.type;if(!zA.textureFormatReadable(pA)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!zA.textureTypeReadable(JA)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}u>=0&&u<=k.width-x&&T>=0&&T<=k.height-Y&&R.readPixels(u,T,x,Y,mA.convert(pA),mA.convert(JA),gA)}finally{const lA=N!==null?LA.get(N).__webglFramebuffer:null;dA.bindFramebuffer(R.FRAMEBUFFER,lA)}}},this.readRenderTargetPixelsAsync=async function(k,u,T,x,Y,gA,aA){if(!(k&&k.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let SA=LA.get(k).__webglFramebuffer;if(k.isWebGLCubeRenderTarget&&aA!==void 0&&(SA=SA[aA]),SA){const lA=k.texture,pA=lA.format,JA=lA.type;if(!zA.textureFormatReadable(pA))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!zA.textureTypeReadable(JA))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(u>=0&&u<=k.width-x&&T>=0&&T<=k.height-Y){dA.bindFramebuffer(R.FRAMEBUFFER,SA);const NA=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,NA),R.bufferData(R.PIXEL_PACK_BUFFER,gA.byteLength,R.STREAM_READ),R.readPixels(u,T,x,Y,mA.convert(pA),mA.convert(JA),0);const iI=N!==null?LA.get(N).__webglFramebuffer:null;dA.bindFramebuffer(R.FRAMEBUFFER,iI);const wI=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await oh(R,wI,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,NA),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,gA),R.deleteBuffer(NA),R.deleteSync(wI),gA}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(k,u=null,T=0){k.isTexture!==!0&&(YQ("WebGLRenderer: copyFramebufferToTexture function signature has changed."),u=arguments[0]||null,k=arguments[1]);const x=Math.pow(2,-T),Y=Math.floor(k.image.width*x),gA=Math.floor(k.image.height*x),aA=u!==null?u.x:0,SA=u!==null?u.y:0;K.setTexture2D(k,0),R.copyTexSubImage2D(R.TEXTURE_2D,T,0,0,aA,SA,Y,gA),dA.unbindTexture()},this.copyTextureToTexture=function(k,u,T=null,x=null,Y=0){k.isTexture!==!0&&(YQ("WebGLRenderer: copyTextureToTexture function signature has changed."),x=arguments[0]||null,k=arguments[1],u=arguments[2],Y=arguments[3]||0,T=null);let gA,aA,SA,lA,pA,JA;T!==null?(gA=T.max.x-T.min.x,aA=T.max.y-T.min.y,SA=T.min.x,lA=T.min.y):(gA=k.image.width,aA=k.image.height,SA=0,lA=0),x!==null?(pA=x.x,JA=x.y):(pA=0,JA=0);const NA=mA.convert(u.format),iI=mA.convert(u.type);K.setTexture2D(u,0),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,u.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,u.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,u.unpackAlignment);const wI=R.getParameter(R.UNPACK_ROW_LENGTH),yI=R.getParameter(R.UNPACK_IMAGE_HEIGHT),YI=R.getParameter(R.UNPACK_SKIP_PIXELS),SI=R.getParameter(R.UNPACK_SKIP_ROWS),kA=R.getParameter(R.UNPACK_SKIP_IMAGES),jI=k.isCompressedTexture?k.mipmaps[Y]:k.image;R.pixelStorei(R.UNPACK_ROW_LENGTH,jI.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,jI.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,SA),R.pixelStorei(R.UNPACK_SKIP_ROWS,lA),k.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,Y,pA,JA,gA,aA,NA,iI,jI.data):k.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,Y,pA,JA,jI.width,jI.height,NA,jI.data):R.texSubImage2D(R.TEXTURE_2D,Y,pA,JA,gA,aA,NA,iI,jI),R.pixelStorei(R.UNPACK_ROW_LENGTH,wI),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,yI),R.pixelStorei(R.UNPACK_SKIP_PIXELS,YI),R.pixelStorei(R.UNPACK_SKIP_ROWS,SI),R.pixelStorei(R.UNPACK_SKIP_IMAGES,kA),Y===0&&u.generateMipmaps&&R.generateMipmap(R.TEXTURE_2D),dA.unbindTexture()},this.copyTextureToTexture3D=function(k,u,T=null,x=null,Y=0){k.isTexture!==!0&&(YQ("WebGLRenderer: copyTextureToTexture3D function signature has changed."),T=arguments[0]||null,x=arguments[1]||null,k=arguments[2],u=arguments[3],Y=arguments[4]||0);let gA,aA,SA,lA,pA,JA,NA,iI,wI;const yI=k.isCompressedTexture?k.mipmaps[Y]:k.image;T!==null?(gA=T.max.x-T.min.x,aA=T.max.y-T.min.y,SA=T.max.z-T.min.z,lA=T.min.x,pA=T.min.y,JA=T.min.z):(gA=yI.width,aA=yI.height,SA=yI.depth,lA=0,pA=0,JA=0),x!==null?(NA=x.x,iI=x.y,wI=x.z):(NA=0,iI=0,wI=0);const YI=mA.convert(u.format),SI=mA.convert(u.type);let kA;if(u.isData3DTexture)K.setTexture3D(u,0),kA=R.TEXTURE_3D;else if(u.isDataArrayTexture||u.isCompressedArrayTexture)K.setTexture2DArray(u,0),kA=R.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,u.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,u.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,u.unpackAlignment);const jI=R.getParameter(R.UNPACK_ROW_LENGTH),xC=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Mg=R.getParameter(R.UNPACK_SKIP_PIXELS),pB=R.getParameter(R.UNPACK_SKIP_ROWS),ig=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,yI.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,yI.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,lA),R.pixelStorei(R.UNPACK_SKIP_ROWS,pA),R.pixelStorei(R.UNPACK_SKIP_IMAGES,JA),k.isDataTexture||k.isData3DTexture?R.texSubImage3D(kA,Y,NA,iI,wI,gA,aA,SA,YI,SI,yI.data):u.isCompressedArrayTexture?R.compressedTexSubImage3D(kA,Y,NA,iI,wI,gA,aA,SA,YI,yI.data):R.texSubImage3D(kA,Y,NA,iI,wI,gA,aA,SA,YI,SI,yI),R.pixelStorei(R.UNPACK_ROW_LENGTH,jI),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,xC),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Mg),R.pixelStorei(R.UNPACK_SKIP_ROWS,pB),R.pixelStorei(R.UNPACK_SKIP_IMAGES,ig),Y===0&&u.generateMipmaps&&R.generateMipmap(kA),dA.unbindTexture()},this.initRenderTarget=function(k){LA.get(k).__webglFramebuffer===void 0&&K.setupRenderTarget(k)},this.initTexture=function(k){k.isCubeTexture?K.setTextureCube(k,0):k.isData3DTexture?K.setTexture3D(k,0):k.isDataArrayTexture||k.isCompressedArrayTexture?K.setTexture2DArray(k,0):K.setTexture2D(k,0),dA.unbindTexture()},this.resetState=function(){m=0,F=0,N=null,dA.reset(),tI.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xg}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(A){this._outputColorSpace=A;const I=this.getContext();I.drawingBufferColorSpace=A===Ji?"display-p3":"srgb",I.unpackColorSpace=jA.workingColorSpace===FQ?"display-p3":"srgb"}}class Mc extends oI{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new eg,this.environmentIntensity=1,this.environmentRotation=new eg,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(A,I){return super.copy(A,I),A.background!==null&&(this.background=A.background.clone()),A.environment!==null&&(this.environment=A.environment.clone()),A.fog!==null&&(this.fog=A.fog.clone()),this.backgroundBlurriness=A.backgroundBlurriness,this.backgroundIntensity=A.backgroundIntensity,this.backgroundRotation.copy(A.backgroundRotation),this.environmentIntensity=A.environmentIntensity,this.environmentRotation.copy(A.environmentRotation),A.overrideMaterial!==null&&(this.overrideMaterial=A.overrideMaterial.clone()),this.matrixAutoUpdate=A.matrixAutoUpdate,this}toJSON(A){const I=super.toJSON(A);return this.fog!==null&&(I.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(I.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(I.object.backgroundIntensity=this.backgroundIntensity),I.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(I.object.environmentIntensity=this.environmentIntensity),I.object.environmentRotation=this.environmentRotation.toArray(),I}}class Nc{constructor(A,I){this.isInterleavedBuffer=!0,this.array=A,this.stride=I,this.count=A!==void 0?A.length/I:0,this.usage=Fi,this.updateRanges=[],this.version=0,this.uuid=hg()}onUploadCallback(){}set needsUpdate(A){A===!0&&this.version++}setUsage(A){return this.usage=A,this}addUpdateRange(A,I){this.updateRanges.push({start:A,count:I})}clearUpdateRanges(){this.updateRanges.length=0}copy(A){return this.array=new A.array.constructor(A.array),this.count=A.count,this.stride=A.stride,this.usage=A.usage,this}copyAt(A,I,g){A*=this.stride,g*=I.stride;for(let C=0,Q=this.stride;C<Q;C++)this.array[A+C]=I.array[g+C];return this}set(A,I=0){return this.array.set(A,I),this}clone(A){A.arrayBuffers===void 0&&(A.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hg()),A.arrayBuffers[this.array.buffer._uuid]===void 0&&(A.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const I=new this.array.constructor(A.arrayBuffers[this.array.buffer._uuid]),g=new this.constructor(I,this.stride);return g.setUsage(this.usage),g}onUpload(A){return this.onUploadCallback=A,this}toJSON(A){return A.arrayBuffers===void 0&&(A.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hg()),A.arrayBuffers[this.array.buffer._uuid]===void 0&&(A.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const PI=new L;class to{constructor(A,I,g,C=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=A,this.itemSize=I,this.offset=g,this.normalized=C}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(A){this.data.needsUpdate=A}applyMatrix4(A){for(let I=0,g=this.data.count;I<g;I++)PI.fromBufferAttribute(this,I),PI.applyMatrix4(A),this.setXYZ(I,PI.x,PI.y,PI.z);return this}applyNormalMatrix(A){for(let I=0,g=this.count;I<g;I++)PI.fromBufferAttribute(this,I),PI.applyNormalMatrix(A),this.setXYZ(I,PI.x,PI.y,PI.z);return this}transformDirection(A){for(let I=0,g=this.count;I<g;I++)PI.fromBufferAttribute(this,I),PI.transformDirection(A),this.setXYZ(I,PI.x,PI.y,PI.z);return this}getComponent(A,I){let g=this.array[A*this.data.stride+this.offset+I];return this.normalized&&(g=rg(g,this.array)),g}setComponent(A,I,g){return this.normalized&&(g=BI(g,this.array)),this.data.array[A*this.data.stride+this.offset+I]=g,this}setX(A,I){return this.normalized&&(I=BI(I,this.array)),this.data.array[A*this.data.stride+this.offset]=I,this}setY(A,I){return this.normalized&&(I=BI(I,this.array)),this.data.array[A*this.data.stride+this.offset+1]=I,this}setZ(A,I){return this.normalized&&(I=BI(I,this.array)),this.data.array[A*this.data.stride+this.offset+2]=I,this}setW(A,I){return this.normalized&&(I=BI(I,this.array)),this.data.array[A*this.data.stride+this.offset+3]=I,this}getX(A){let I=this.data.array[A*this.data.stride+this.offset];return this.normalized&&(I=rg(I,this.array)),I}getY(A){let I=this.data.array[A*this.data.stride+this.offset+1];return this.normalized&&(I=rg(I,this.array)),I}getZ(A){let I=this.data.array[A*this.data.stride+this.offset+2];return this.normalized&&(I=rg(I,this.array)),I}getW(A){let I=this.data.array[A*this.data.stride+this.offset+3];return this.normalized&&(I=rg(I,this.array)),I}setXY(A,I,g){return A=A*this.data.stride+this.offset,this.normalized&&(I=BI(I,this.array),g=BI(g,this.array)),this.data.array[A+0]=I,this.data.array[A+1]=g,this}setXYZ(A,I,g,C){return A=A*this.data.stride+this.offset,this.normalized&&(I=BI(I,this.array),g=BI(g,this.array),C=BI(C,this.array)),this.data.array[A+0]=I,this.data.array[A+1]=g,this.data.array[A+2]=C,this}setXYZW(A,I,g,C,Q){return A=A*this.data.stride+this.offset,this.normalized&&(I=BI(I,this.array),g=BI(g,this.array),C=BI(C,this.array),Q=BI(Q,this.array)),this.data.array[A+0]=I,this.data.array[A+1]=g,this.data.array[A+2]=C,this.data.array[A+3]=Q,this}clone(A){if(A===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const I=[];for(let g=0;g<this.count;g++){const C=g*this.data.stride+this.offset;for(let Q=0;Q<this.itemSize;Q++)I.push(this.data.array[C+Q])}return new RI(new this.array.constructor(I),this.itemSize,this.normalized)}else return A.interleavedBuffers===void 0&&(A.interleavedBuffers={}),A.interleavedBuffers[this.data.uuid]===void 0&&(A.interleavedBuffers[this.data.uuid]=this.data.clone(A)),new to(A.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(A){if(A===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const I=[];for(let g=0;g<this.count;g++){const C=g*this.data.stride+this.offset;for(let Q=0;Q<this.itemSize;Q++)I.push(this.data.array[C+Q])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:I,normalized:this.normalized}}else return A.interleavedBuffers===void 0&&(A.interleavedBuffers={}),A.interleavedBuffers[this.data.uuid]===void 0&&(A.interleavedBuffers[this.data.uuid]=this.data.toJSON(A)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Pt=new L,jt=new $A,Vt=new $A,Kc=new L,Xt=new uA,EE=new L,ao=new Fg,zt=new uA,so=new TQ;class Jc extends $I{constructor(A,I){super(A,I),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Je,this.bindMatrix=new uA,this.bindMatrixInverse=new uA,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const A=this.geometry;this.boundingBox===null&&(this.boundingBox=new bg),this.boundingBox.makeEmpty();const I=A.getAttribute("position");for(let g=0;g<I.count;g++)this.getVertexPosition(g,EE),this.boundingBox.expandByPoint(EE)}computeBoundingSphere(){const A=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Fg),this.boundingSphere.makeEmpty();const I=A.getAttribute("position");for(let g=0;g<I.count;g++)this.getVertexPosition(g,EE),this.boundingSphere.expandByPoint(EE)}copy(A,I){return super.copy(A,I),this.bindMode=A.bindMode,this.bindMatrix.copy(A.bindMatrix),this.bindMatrixInverse.copy(A.bindMatrixInverse),this.skeleton=A.skeleton,A.boundingBox!==null&&(this.boundingBox=A.boundingBox.clone()),A.boundingSphere!==null&&(this.boundingSphere=A.boundingSphere.clone()),this}raycast(A,I){const g=this.material,C=this.matrixWorld;g!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ao.copy(this.boundingSphere),ao.applyMatrix4(C),A.ray.intersectsSphere(ao)!==!1&&(zt.copy(C).invert(),so.copy(A.ray).applyMatrix4(zt),!(this.boundingBox!==null&&so.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(A,I,so)))}getVertexPosition(A,I){return super.getVertexPosition(A,I),this.applyBoneTransform(A,I),I}bind(A,I){this.skeleton=A,I===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),I=this.matrixWorld),this.bindMatrix.copy(I),this.bindMatrixInverse.copy(I).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const A=new $A,I=this.geometry.attributes.skinWeight;for(let g=0,C=I.count;g<C;g++){A.fromBufferAttribute(I,g);const Q=1/A.manhattanLength();Q!==1/0?A.multiplyScalar(Q):A.set(1,0,0,0),I.setXYZW(g,A.x,A.y,A.z,A.w)}}updateMatrixWorld(A){super.updateMatrixWorld(A),this.bindMode===Je?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===JD?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(A,I){const g=this.skeleton,C=this.geometry;jt.fromBufferAttribute(C.attributes.skinIndex,A),Vt.fromBufferAttribute(C.attributes.skinWeight,A),Pt.copy(I).applyMatrix4(this.bindMatrix),I.set(0,0,0);for(let Q=0;Q<4;Q++){const E=Vt.getComponent(Q);if(E!==0){const i=jt.getComponent(Q);Xt.multiplyMatrices(g.bones[i].matrixWorld,g.boneInverses[i]),I.addScaledVector(Kc.copy(Pt).applyMatrix4(Xt),E)}}return I.applyMatrix4(this.bindMatrixInverse)}}class $t extends oI{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Do extends HI{constructor(A=null,I=1,g=1,C,Q,E,i,o,e=_I,t=_I,a,s){super(null,E,i,o,e,t,C,Q,a,s),this.isDataTexture=!0,this.image={data:A,width:I,height:g},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Aa=new uA,Fc=new uA;class ho{constructor(A=[],I=[]){this.uuid=hg(),this.bones=A.slice(0),this.boneInverses=I,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const A=this.bones,I=this.boneInverses;if(this.boneMatrices=new Float32Array(A.length*16),I.length===0)this.calculateInverses();else if(A.length!==I.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let g=0,C=this.bones.length;g<C;g++)this.boneInverses.push(new uA)}}calculateInverses(){this.boneInverses.length=0;for(let A=0,I=this.bones.length;A<I;A++){const g=new uA;this.bones[A]&&g.copy(this.bones[A].matrixWorld).invert(),this.boneInverses.push(g)}}pose(){for(let A=0,I=this.bones.length;A<I;A++){const g=this.bones[A];g&&g.matrixWorld.copy(this.boneInverses[A]).invert()}for(let A=0,I=this.bones.length;A<I;A++){const g=this.bones[A];g&&(g.parent&&g.parent.isBone?(g.matrix.copy(g.parent.matrixWorld).invert(),g.matrix.multiply(g.matrixWorld)):g.matrix.copy(g.matrixWorld),g.matrix.decompose(g.position,g.quaternion,g.scale))}}update(){const A=this.bones,I=this.boneInverses,g=this.boneMatrices,C=this.boneTexture;for(let Q=0,E=A.length;Q<E;Q++){const i=A[Q]?A[Q].matrixWorld:Fc;Aa.multiplyMatrices(i,I[Q]),Aa.toArray(g,Q*16)}C!==null&&(C.needsUpdate=!0)}clone(){return new ho(this.bones,this.boneInverses)}computeBoneTexture(){let A=Math.sqrt(this.bones.length*4);A=Math.ceil(A/4)*4,A=Math.max(A,4);const I=new Float32Array(A*A*4);I.set(this.boneMatrices);const g=new Do(I,A,A,og,XI);return g.needsUpdate=!0,this.boneMatrices=I,this.boneTexture=g,this}getBoneByName(A){for(let I=0,g=this.bones.length;I<g;I++){const C=this.bones[I];if(C.name===A)return C}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(A,I){this.uuid=A.uuid;for(let g=0,C=A.bones.length;g<C;g++){const Q=A.bones[g];let E=I[Q];E===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",Q),E=new $t),this.bones.push(E),this.boneInverses.push(new uA().fromArray(A.boneInverses[g]))}return this.init(),this}toJSON(){const A={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};A.uuid=this.uuid;const I=this.bones,g=this.boneInverses;for(let C=0,Q=I.length;C<Q;C++){const E=I[C];A.bones.push(E.uuid);const i=g[C];A.boneInverses.push(i.toArray())}return A}}class ro extends RI{constructor(A,I,g,C=1){super(A,I,g),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=C}copy(A){return super.copy(A),this.meshPerAttribute=A.meshPerAttribute,this}toJSON(){const A=super.toJSON();return A.meshPerAttribute=this.meshPerAttribute,A.isInstancedBufferAttribute=!0,A}}const wB=new uA,Ia=new uA,iE=[],ga=new bg,Rc=new uA,_B=new $I,ZB=new Fg;class pc extends $I{constructor(A,I,g){super(A,I),this.isInstancedMesh=!0,this.instanceMatrix=new ro(new Float32Array(g*16),16),this.instanceColor=null,this.morphTexture=null,this.count=g,this.boundingBox=null,this.boundingSphere=null;for(let C=0;C<g;C++)this.setMatrixAt(C,Rc)}computeBoundingBox(){const A=this.geometry,I=this.count;this.boundingBox===null&&(this.boundingBox=new bg),A.boundingBox===null&&A.computeBoundingBox(),this.boundingBox.makeEmpty();for(let g=0;g<I;g++)this.getMatrixAt(g,wB),ga.copy(A.boundingBox).applyMatrix4(wB),this.boundingBox.union(ga)}computeBoundingSphere(){const A=this.geometry,I=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fg),A.boundingSphere===null&&A.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let g=0;g<I;g++)this.getMatrixAt(g,wB),ZB.copy(A.boundingSphere).applyMatrix4(wB),this.boundingSphere.union(ZB)}copy(A,I){return super.copy(A,I),this.instanceMatrix.copy(A.instanceMatrix),A.morphTexture!==null&&(this.morphTexture=A.morphTexture.clone()),A.instanceColor!==null&&(this.instanceColor=A.instanceColor.clone()),this.count=A.count,A.boundingBox!==null&&(this.boundingBox=A.boundingBox.clone()),A.boundingSphere!==null&&(this.boundingSphere=A.boundingSphere.clone()),this}getColorAt(A,I){I.fromArray(this.instanceColor.array,A*3)}getMatrixAt(A,I){I.fromArray(this.instanceMatrix.array,A*16)}getMorphAt(A,I){const g=I.morphTargetInfluences,C=this.morphTexture.source.data.data,Q=g.length+1,E=A*Q+1;for(let i=0;i<g.length;i++)g[i]=C[E+i]}raycast(A,I){const g=this.matrixWorld,C=this.count;if(_B.geometry=this.geometry,_B.material=this.material,_B.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ZB.copy(this.boundingSphere),ZB.applyMatrix4(g),A.ray.intersectsSphere(ZB)!==!1))for(let Q=0;Q<C;Q++){this.getMatrixAt(Q,wB),Ia.multiplyMatrices(g,wB),_B.matrixWorld=Ia,_B.raycast(A,iE);for(let E=0,i=iE.length;E<i;E++){const o=iE[E];o.instanceId=Q,o.object=this,I.push(o)}iE.length=0}}setColorAt(A,I){this.instanceColor===null&&(this.instanceColor=new ro(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),I.toArray(this.instanceColor.array,A*3)}setMatrixAt(A,I){I.toArray(this.instanceMatrix.array,A*16)}setMorphAt(A,I){const g=I.morphTargetInfluences,C=g.length+1;this.morphTexture===null&&(this.morphTexture=new Do(new Float32Array(C*this.count),C,this.count,jE,XI));const Q=this.morphTexture.source.data.data;let E=0;for(let e=0;e<g.length;e++)E+=g[e];const i=this.geometry.morphTargetsRelative?1:1-E,o=C*A;Q[o]=i,Q.set(g,o+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class oE extends Rg{constructor(A){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new MA(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.map=A.map,this.linewidth=A.linewidth,this.linecap=A.linecap,this.linejoin=A.linejoin,this.fog=A.fog,this}}const eE=new L,tE=new L,Ca=new uA,WB=new TQ,aE=new Fg,So=new L,Ba=new L;class no extends oI{constructor(A=new Bg,I=new oE){super(),this.isLine=!0,this.type="Line",this.geometry=A,this.material=I,this.updateMorphTargets()}copy(A,I){return super.copy(A,I),this.material=Array.isArray(A.material)?A.material.slice():A.material,this.geometry=A.geometry,this}computeLineDistances(){const A=this.geometry;if(A.index===null){const I=A.attributes.position,g=[0];for(let C=1,Q=I.count;C<Q;C++)eE.fromBufferAttribute(I,C-1),tE.fromBufferAttribute(I,C),g[C]=g[C-1],g[C]+=eE.distanceTo(tE);A.setAttribute("lineDistance",new lg(g,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(A,I){const g=this.geometry,C=this.matrixWorld,Q=A.params.Line.threshold,E=g.drawRange;if(g.boundingSphere===null&&g.computeBoundingSphere(),aE.copy(g.boundingSphere),aE.applyMatrix4(C),aE.radius+=Q,A.ray.intersectsSphere(aE)===!1)return;Ca.copy(C).invert(),WB.copy(A.ray).applyMatrix4(Ca);const i=Q/((this.scale.x+this.scale.y+this.scale.z)/3),o=i*i,e=this.isLineSegments?2:1,t=g.index,a=g.attributes.position;if(t!==null){const s=Math.max(0,E.start),h=Math.min(t.count,E.start+E.count);for(let n=s,w=h-1;n<w;n+=e){const r=t.getX(n),S=t.getX(n+1),y=sE(this,A,WB,o,r,S);y&&I.push(y)}if(this.isLineLoop){const n=t.getX(h-1),w=t.getX(s),r=sE(this,A,WB,o,n,w);r&&I.push(r)}}else{const s=Math.max(0,E.start),h=Math.min(a.count,E.start+E.count);for(let n=s,w=h-1;n<w;n+=e){const r=sE(this,A,WB,o,n,n+1);r&&I.push(r)}if(this.isLineLoop){const n=sE(this,A,WB,o,h-1,s);n&&I.push(n)}}}updateMorphTargets(){const A=this.geometry.morphAttributes,I=Object.keys(A);if(I.length>0){const g=A[I[0]];if(g!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let C=0,Q=g.length;C<Q;C++){const E=g[C].name||String(C);this.morphTargetInfluences.push(0),this.morphTargetDictionary[E]=C}}}}}function sE(B,A,I,g,C,Q){const E=B.geometry.attributes.position;if(eE.fromBufferAttribute(E,C),tE.fromBufferAttribute(E,Q),I.distanceSqToSegment(eE,tE,So,Ba)>g)return;So.applyMatrix4(B.matrixWorld);const i=A.ray.origin.distanceTo(So);if(!(i<A.near||i>A.far))return{distance:i,point:Ba.clone().applyMatrix4(B.matrixWorld),index:C,face:null,faceIndex:null,barycoord:null,object:B}}const Qa=new L,Ea=new L;class wo extends no{constructor(A,I){super(A,I),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const A=this.geometry;if(A.index===null){const I=A.attributes.position,g=[];for(let C=0,Q=I.count;C<Q;C+=2)Qa.fromBufferAttribute(I,C),Ea.fromBufferAttribute(I,C+1),g[C]=C===0?0:g[C-1],g[C+1]=g[C]+Qa.distanceTo(Ea);A.setAttribute("lineDistance",new lg(g,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class dc extends no{constructor(A,I){super(A,I),this.isLineLoop=!0,this.type="LineLoop"}}class ia extends Rg{constructor(A){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new MA(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.map=A.map,this.alphaMap=A.alphaMap,this.size=A.size,this.sizeAttenuation=A.sizeAttenuation,this.fog=A.fog,this}}const oa=new uA,co=new TQ,DE=new Fg,hE=new L;class qc extends oI{constructor(A=new Bg,I=new ia){super(),this.isPoints=!0,this.type="Points",this.geometry=A,this.material=I,this.updateMorphTargets()}copy(A,I){return super.copy(A,I),this.material=Array.isArray(A.material)?A.material.slice():A.material,this.geometry=A.geometry,this}raycast(A,I){const g=this.geometry,C=this.matrixWorld,Q=A.params.Points.threshold,E=g.drawRange;if(g.boundingSphere===null&&g.computeBoundingSphere(),DE.copy(g.boundingSphere),DE.applyMatrix4(C),DE.radius+=Q,A.ray.intersectsSphere(DE)===!1)return;oa.copy(C).invert(),co.copy(A.ray).applyMatrix4(oa);const i=Q/((this.scale.x+this.scale.y+this.scale.z)/3),o=i*i,e=g.index,t=g.attributes.position;if(e!==null){const a=Math.max(0,E.start),s=Math.min(e.count,E.start+E.count);for(let h=a,n=s;h<n;h++){const w=e.getX(h);hE.fromBufferAttribute(t,w),ea(hE,w,o,C,A,I,this)}}else{const a=Math.max(0,E.start),s=Math.min(t.count,E.start+E.count);for(let h=a,n=s;h<n;h++)hE.fromBufferAttribute(t,h),ea(hE,h,o,C,A,I,this)}}updateMorphTargets(){const A=this.geometry.morphAttributes,I=Object.keys(A);if(I.length>0){const g=A[I[0]];if(g!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let C=0,Q=g.length;C<Q;C++){const E=g[C].name||String(C);this.morphTargetInfluences.push(0),this.morphTargetDictionary[E]=C}}}}}function ea(B,A,I,g,C,Q,E){const i=co.distanceSqToPoint(B);if(i<I){const o=new L;co.closestPointToPoint(B,o),o.applyMatrix4(g);const e=C.ray.origin.distanceTo(o);if(e<C.near||e>C.far)return;Q.push({distance:e,distanceToRay:Math.sqrt(i),point:o,index:A,face:null,faceIndex:null,barycoord:null,object:E})}}class rE extends Rg{constructor(A){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new MA(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new MA(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xe,this.normalScale=new vA(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new eg,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.defines={STANDARD:""},this.color.copy(A.color),this.roughness=A.roughness,this.metalness=A.metalness,this.map=A.map,this.lightMap=A.lightMap,this.lightMapIntensity=A.lightMapIntensity,this.aoMap=A.aoMap,this.aoMapIntensity=A.aoMapIntensity,this.emissive.copy(A.emissive),this.emissiveMap=A.emissiveMap,this.emissiveIntensity=A.emissiveIntensity,this.bumpMap=A.bumpMap,this.bumpScale=A.bumpScale,this.normalMap=A.normalMap,this.normalMapType=A.normalMapType,this.normalScale.copy(A.normalScale),this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this.roughnessMap=A.roughnessMap,this.metalnessMap=A.metalnessMap,this.alphaMap=A.alphaMap,this.envMap=A.envMap,this.envMapRotation.copy(A.envMapRotation),this.envMapIntensity=A.envMapIntensity,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.wireframeLinecap=A.wireframeLinecap,this.wireframeLinejoin=A.wireframeLinejoin,this.flatShading=A.flatShading,this.fog=A.fog,this}}class dg extends rE{constructor(A){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new vA(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return TI(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(I){this.ior=(1+.4*I)/(1-.4*I)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new MA(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new MA(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new MA(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(A)}get anisotropy(){return this._anisotropy}set anisotropy(A){this._anisotropy>0!=A>0&&this.version++,this._anisotropy=A}get clearcoat(){return this._clearcoat}set clearcoat(A){this._clearcoat>0!=A>0&&this.version++,this._clearcoat=A}get iridescence(){return this._iridescence}set iridescence(A){this._iridescence>0!=A>0&&this.version++,this._iridescence=A}get dispersion(){return this._dispersion}set dispersion(A){this._dispersion>0!=A>0&&this.version++,this._dispersion=A}get sheen(){return this._sheen}set sheen(A){this._sheen>0!=A>0&&this.version++,this._sheen=A}get transmission(){return this._transmission}set transmission(A){this._transmission>0!=A>0&&this.version++,this._transmission=A}copy(A){return super.copy(A),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=A.anisotropy,this.anisotropyRotation=A.anisotropyRotation,this.anisotropyMap=A.anisotropyMap,this.clearcoat=A.clearcoat,this.clearcoatMap=A.clearcoatMap,this.clearcoatRoughness=A.clearcoatRoughness,this.clearcoatRoughnessMap=A.clearcoatRoughnessMap,this.clearcoatNormalMap=A.clearcoatNormalMap,this.clearcoatNormalScale.copy(A.clearcoatNormalScale),this.dispersion=A.dispersion,this.ior=A.ior,this.iridescence=A.iridescence,this.iridescenceMap=A.iridescenceMap,this.iridescenceIOR=A.iridescenceIOR,this.iridescenceThicknessRange=[...A.iridescenceThicknessRange],this.iridescenceThicknessMap=A.iridescenceThicknessMap,this.sheen=A.sheen,this.sheenColor.copy(A.sheenColor),this.sheenColorMap=A.sheenColorMap,this.sheenRoughness=A.sheenRoughness,this.sheenRoughnessMap=A.sheenRoughnessMap,this.transmission=A.transmission,this.transmissionMap=A.transmissionMap,this.thickness=A.thickness,this.thicknessMap=A.thicknessMap,this.attenuationDistance=A.attenuationDistance,this.attenuationColor.copy(A.attenuationColor),this.specularIntensity=A.specularIntensity,this.specularIntensityMap=A.specularIntensityMap,this.specularColor.copy(A.specularColor),this.specularColorMap=A.specularColorMap,this}}function SE(B,A,I){return!B||!I&&B.constructor===A?B:typeof A.BYTES_PER_ELEMENT=="number"?new A(B):Array.prototype.slice.call(B)}function Yc(B){return ArrayBuffer.isView(B)&&!(B instanceof DataView)}function Lc(B){function A(C,Q){return B[C]-B[Q]}const I=B.length,g=new Array(I);for(let C=0;C!==I;++C)g[C]=C;return g.sort(A),g}function ta(B,A,I){const g=B.length,C=new B.constructor(g);for(let Q=0,E=0;E!==g;++Q){const i=I[Q]*A;for(let o=0;o!==A;++o)C[E++]=B[i+o]}return C}function aa(B,A,I,g){let C=1,Q=B[0];for(;Q!==void 0&&Q[g]===void 0;)Q=B[C++];if(Q===void 0)return;let E=Q[g];if(E!==void 0)if(Array.isArray(E))do E=Q[g],E!==void 0&&(A.push(Q.time),I.push.apply(I,E)),Q=B[C++];while(Q!==void 0);else if(E.toArray!==void 0)do E=Q[g],E!==void 0&&(A.push(Q.time),E.toArray(I,I.length)),Q=B[C++];while(Q!==void 0);else do E=Q[g],E!==void 0&&(A.push(Q.time),I.push(E)),Q=B[C++];while(Q!==void 0)}class PB{constructor(A,I,g,C){this.parameterPositions=A,this._cachedIndex=0,this.resultBuffer=C!==void 0?C:new I.constructor(g),this.sampleValues=I,this.valueSize=g,this.settings=null,this.DefaultSettings_={}}evaluate(A){const I=this.parameterPositions;let g=this._cachedIndex,C=I[g],Q=I[g-1];A:{I:{let E;g:{C:if(!(A<C)){for(let i=g+2;;){if(C===void 0){if(A<Q)break C;return g=I.length,this._cachedIndex=g,this.copySampleValue_(g-1)}if(g===i)break;if(Q=C,C=I[++g],A<C)break I}E=I.length;break g}if(!(A>=Q)){const i=I[1];A<i&&(g=2,Q=i);for(let o=g-2;;){if(Q===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(g===o)break;if(C=Q,Q=I[--g-1],A>=Q)break I}E=g,g=0;break g}break A}for(;g<E;){const i=g+E>>>1;A<I[i]?E=i:g=i+1}if(C=I[g],Q=I[g-1],Q===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(C===void 0)return g=I.length,this._cachedIndex=g,this.copySampleValue_(g-1)}this._cachedIndex=g,this.intervalChanged_(g,Q,C)}return this.interpolate_(g,Q,A,C)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(A){const I=this.resultBuffer,g=this.sampleValues,C=this.valueSize,Q=A*C;for(let E=0;E!==C;++E)I[E]=g[Q+E];return I}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class uc extends PB{constructor(A,I,g,C){super(A,I,g,C),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:VC,endingEnd:VC}}intervalChanged_(A,I,g){const C=this.parameterPositions;let Q=A-2,E=A+1,i=C[Q],o=C[E];if(i===void 0)switch(this.getSettings_().endingStart){case XC:Q=A,i=2*I-g;break;case JQ:Q=C.length-2,i=I+C[Q]-C[Q+1];break;default:Q=A,i=g}if(o===void 0)switch(this.getSettings_().endingEnd){case XC:E=A,o=2*g-I;break;case JQ:E=1,o=g+C[1]-C[0];break;default:E=A-1,o=I}const e=(g-I)*.5,t=this.valueSize;this._weightPrev=e/(I-i),this._weightNext=e/(o-g),this._offsetPrev=Q*t,this._offsetNext=E*t}interpolate_(A,I,g,C){const Q=this.resultBuffer,E=this.sampleValues,i=this.valueSize,o=A*i,e=o-i,t=this._offsetPrev,a=this._offsetNext,s=this._weightPrev,h=this._weightNext,n=(g-I)/(C-I),w=n*n,r=w*n,S=-s*r+2*s*w-s*n,y=(1+s)*r+(-1.5-2*s)*w+(-.5+s)*n+1,G=(-1-h)*r+(1.5+h)*w+.5*n,M=h*r-h*w;for(let m=0;m!==i;++m)Q[m]=S*E[t+m]+y*E[e+m]+G*E[o+m]+M*E[a+m];return Q}}class sa extends PB{constructor(A,I,g,C){super(A,I,g,C)}interpolate_(A,I,g,C){const Q=this.resultBuffer,E=this.sampleValues,i=this.valueSize,o=A*i,e=o-i,t=(g-I)/(C-I),a=1-t;for(let s=0;s!==i;++s)Q[s]=E[e+s]*a+E[o+s]*t;return Q}}class Hc extends PB{constructor(A,I,g,C){super(A,I,g,C)}interpolate_(A){return this.copySampleValue_(A-1)}}class qg{constructor(A,I,g,C){if(A===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(I===void 0||I.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+A);this.name=A,this.times=SE(I,this.TimeBufferType),this.values=SE(g,this.ValueBufferType),this.setInterpolation(C||this.DefaultInterpolation)}static toJSON(A){const I=A.constructor;let g;if(I.toJSON!==this.toJSON)g=I.toJSON(A);else{g={name:A.name,times:SE(A.times,Array),values:SE(A.values,Array)};const C=A.getInterpolation();C!==A.DefaultInterpolation&&(g.interpolation=C)}return g.type=A.ValueTypeName,g}InterpolantFactoryMethodDiscrete(A){return new Hc(this.times,this.values,this.getValueSize(),A)}InterpolantFactoryMethodLinear(A){return new sa(this.times,this.values,this.getValueSize(),A)}InterpolantFactoryMethodSmooth(A){return new uc(this.times,this.values,this.getValueSize(),A)}setInterpolation(A){let I;switch(A){case YB:I=this.InterpolantFactoryMethodDiscrete;break;case LB:I=this.InterpolantFactoryMethodLinear;break;case Mi:I=this.InterpolantFactoryMethodSmooth;break}if(I===void 0){const g="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(A!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(g);return console.warn("THREE.KeyframeTrack:",g),this}return this.createInterpolant=I,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return YB;case this.InterpolantFactoryMethodLinear:return LB;case this.InterpolantFactoryMethodSmooth:return Mi}}getValueSize(){return this.values.length/this.times.length}shift(A){if(A!==0){const I=this.times;for(let g=0,C=I.length;g!==C;++g)I[g]+=A}return this}scale(A){if(A!==1){const I=this.times;for(let g=0,C=I.length;g!==C;++g)I[g]*=A}return this}trim(A,I){const g=this.times,C=g.length;let Q=0,E=C-1;for(;Q!==C&&g[Q]<A;)++Q;for(;E!==-1&&g[E]>I;)--E;if(++E,Q!==0||E!==C){Q>=E&&(E=Math.max(E,1),Q=E-1);const i=this.getValueSize();this.times=g.slice(Q,E),this.values=this.values.slice(Q*i,E*i)}return this}validate(){let A=!0;const I=this.getValueSize();I-Math.floor(I)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),A=!1);const g=this.times,C=this.values,Q=g.length;Q===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),A=!1);let E=null;for(let i=0;i!==Q;i++){const o=g[i];if(typeof o=="number"&&isNaN(o)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,i,o),A=!1;break}if(E!==null&&E>o){console.error("THREE.KeyframeTrack: Out of order keys.",this,i,o,E),A=!1;break}E=o}if(C!==void 0&&Yc(C))for(let i=0,o=C.length;i!==o;++i){const e=C[i];if(isNaN(e)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,i,e),A=!1;break}}return A}optimize(){const A=this.times.slice(),I=this.values.slice(),g=this.getValueSize(),C=this.getInterpolation()===Mi,Q=A.length-1;let E=1;for(let i=1;i<Q;++i){let o=!1;const e=A[i],t=A[i+1];if(e!==t&&(i!==1||e!==A[0]))if(C)o=!0;else{const a=i*g,s=a-g,h=a+g;for(let n=0;n!==g;++n){const w=I[a+n];if(w!==I[s+n]||w!==I[h+n]){o=!0;break}}}if(o){if(i!==E){A[E]=A[i];const a=i*g,s=E*g;for(let h=0;h!==g;++h)I[s+h]=I[a+h]}++E}}if(Q>0){A[E]=A[Q];for(let i=Q*g,o=E*g,e=0;e!==g;++e)I[o+e]=I[i+e];++E}return E!==A.length?(this.times=A.slice(0,E),this.values=I.slice(0,E*g)):(this.times=A,this.values=I),this}clone(){const A=this.times.slice(),I=this.values.slice(),g=this.constructor,C=new g(this.name,A,I);return C.createInterpolant=this.createInterpolant,C}}qg.prototype.TimeBufferType=Float32Array,qg.prototype.ValueBufferType=Float32Array,qg.prototype.DefaultInterpolation=LB;class cB extends qg{constructor(A,I,g){super(A,I,g)}}cB.prototype.ValueTypeName="bool",cB.prototype.ValueBufferType=Array,cB.prototype.DefaultInterpolation=YB,cB.prototype.InterpolantFactoryMethodLinear=void 0,cB.prototype.InterpolantFactoryMethodSmooth=void 0;class Da extends qg{}Da.prototype.ValueTypeName="color";class lB extends qg{}lB.prototype.ValueTypeName="number";class mc extends PB{constructor(A,I,g,C){super(A,I,g,C)}interpolate_(A,I,g,C){const Q=this.resultBuffer,E=this.sampleValues,i=this.valueSize,o=(g-I)/(C-I);let e=A*i;for(let t=e+i;e!==t;e+=4)zI.slerpFlat(Q,0,E,e-i,E,e,o);return Q}}class GB extends qg{InterpolantFactoryMethodLinear(A){return new mc(this.times,this.values,this.getValueSize(),A)}}GB.prototype.ValueTypeName="quaternion",GB.prototype.InterpolantFactoryMethodSmooth=void 0;class kB extends qg{constructor(A,I,g){super(A,I,g)}}kB.prototype.ValueTypeName="string",kB.prototype.ValueBufferType=Array,kB.prototype.DefaultInterpolation=YB,kB.prototype.InterpolantFactoryMethodLinear=void 0,kB.prototype.InterpolantFactoryMethodSmooth=void 0;class yB extends qg{}yB.prototype.ValueTypeName="vector";class lo{constructor(A="",I=-1,g=[],C=Ni){this.name=A,this.tracks=g,this.duration=I,this.blendMode=C,this.uuid=hg(),this.duration<0&&this.resetDuration()}static parse(A){const I=[],g=A.tracks,C=1/(A.fps||1);for(let E=0,i=g.length;E!==i;++E)I.push(Tc(g[E]).scale(C));const Q=new this(A.name,A.duration,I,A.blendMode);return Q.uuid=A.uuid,Q}static toJSON(A){const I=[],g=A.tracks,C={name:A.name,duration:A.duration,tracks:I,uuid:A.uuid,blendMode:A.blendMode};for(let Q=0,E=g.length;Q!==E;++Q)I.push(qg.toJSON(g[Q]));return C}static CreateFromMorphTargetSequence(A,I,g,C){const Q=I.length,E=[];for(let i=0;i<Q;i++){let o=[],e=[];o.push((i+Q-1)%Q,i,(i+1)%Q),e.push(0,1,0);const t=Lc(o);o=ta(o,1,t),e=ta(e,1,t),!C&&o[0]===0&&(o.push(Q),e.push(e[0])),E.push(new lB(".morphTargetInfluences["+I[i].name+"]",o,e).scale(1/g))}return new this(A,-1,E)}static findByName(A,I){let g=A;if(!Array.isArray(A)){const C=A;g=C.geometry&&C.geometry.animations||C.animations}for(let C=0;C<g.length;C++)if(g[C].name===I)return g[C];return null}static CreateClipsFromMorphTargetSequences(A,I,g){const C={},Q=/^([\w-]*?)([\d]+)$/;for(let i=0,o=A.length;i<o;i++){const e=A[i],t=e.name.match(Q);if(t&&t.length>1){const a=t[1];let s=C[a];s||(C[a]=s=[]),s.push(e)}}const E=[];for(const i in C)E.push(this.CreateFromMorphTargetSequence(i,C[i],I,g));return E}static parseAnimation(A,I){if(!A)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const g=function(t,a,s,h,n){if(s.length!==0){const w=[],r=[];aa(s,w,r,h),w.length!==0&&n.push(new t(a,w,r))}},C=[],Q=A.name||"default",E=A.fps||30,i=A.blendMode;let o=A.length||-1;const e=A.hierarchy||[];for(let t=0;t<e.length;t++){const a=e[t].keys;if(!(!a||a.length===0))if(a[0].morphTargets){const s={};let h;for(h=0;h<a.length;h++)if(a[h].morphTargets)for(let n=0;n<a[h].morphTargets.length;n++)s[a[h].morphTargets[n]]=-1;for(const n in s){const w=[],r=[];for(let S=0;S!==a[h].morphTargets.length;++S){const y=a[h];w.push(y.time),r.push(y.morphTarget===n?1:0)}C.push(new lB(".morphTargetInfluence["+n+"]",w,r))}o=s.length*E}else{const s=".bones["+I[t].name+"]";g(yB,s+".position",a,"pos",C),g(GB,s+".quaternion",a,"rot",C),g(yB,s+".scale",a,"scl",C)}}return C.length===0?null:new this(Q,o,C,i)}resetDuration(){const A=this.tracks;let I=0;for(let g=0,C=A.length;g!==C;++g){const Q=this.tracks[g];I=Math.max(I,Q.times[Q.times.length-1])}return this.duration=I,this}trim(){for(let A=0;A<this.tracks.length;A++)this.tracks[A].trim(0,this.duration);return this}validate(){let A=!0;for(let I=0;I<this.tracks.length;I++)A=A&&this.tracks[I].validate();return A}optimize(){for(let A=0;A<this.tracks.length;A++)this.tracks[A].optimize();return this}clone(){const A=[];for(let I=0;I<this.tracks.length;I++)A.push(this.tracks[I].clone());return new this.constructor(this.name,this.duration,A,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function fc(B){switch(B.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return lB;case"vector":case"vector2":case"vector3":case"vector4":return yB;case"color":return Da;case"quaternion":return GB;case"bool":case"boolean":return cB;case"string":return kB}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+B)}function Tc(B){if(B.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const A=fc(B.type);if(B.times===void 0){const I=[],g=[];aa(B.keys,I,g,"value"),B.times=I,B.values=g}return A.parse!==void 0?A.parse(B):new A(B.name,B.times,B.values,B.interpolation)}const hC={enabled:!1,files:{},add:function(B,A){this.enabled!==!1&&(this.files[B]=A)},get:function(B){if(this.enabled!==!1)return this.files[B]},remove:function(B){delete this.files[B]},clear:function(){this.files={}}};class xc{constructor(A,I,g){const C=this;let Q=!1,E=0,i=0,o;const e=[];this.onStart=void 0,this.onLoad=A,this.onProgress=I,this.onError=g,this.itemStart=function(t){i++,Q===!1&&C.onStart!==void 0&&C.onStart(t,E,i),Q=!0},this.itemEnd=function(t){E++,C.onProgress!==void 0&&C.onProgress(t,E,i),E===i&&(Q=!1,C.onLoad!==void 0&&C.onLoad())},this.itemError=function(t){C.onError!==void 0&&C.onError(t)},this.resolveURL=function(t){return o?o(t):t},this.setURLModifier=function(t){return o=t,this},this.addHandler=function(t,a){return e.push(t,a),this},this.removeHandler=function(t){const a=e.indexOf(t);return a!==-1&&e.splice(a,2),this},this.getHandler=function(t){for(let a=0,s=e.length;a<s;a+=2){const h=e[a],n=e[a+1];if(h.global&&(h.lastIndex=0),h.test(t))return n}return null}}}const bc=new xc;class rC{constructor(A){this.manager=A!==void 0?A:bc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(A,I){const g=this;return new Promise(function(C,Q){g.load(A,C,I,Q)})}parse(){}setCrossOrigin(A){return this.crossOrigin=A,this}setWithCredentials(A){return this.withCredentials=A,this}setPath(A){return this.path=A,this}setResourcePath(A){return this.resourcePath=A,this}setRequestHeader(A){return this.requestHeader=A,this}}rC.DEFAULT_MATERIAL_NAME="__DEFAULT";const jg={};class Oc extends Error{constructor(A,I){super(A),this.response=I}}class jB extends rC{constructor(A){super(A)}load(A,I,g,C){A===void 0&&(A=""),this.path!==void 0&&(A=this.path+A),A=this.manager.resolveURL(A);const Q=hC.get(A);if(Q!==void 0)return this.manager.itemStart(A),setTimeout(()=>{I&&I(Q),this.manager.itemEnd(A)},0),Q;if(jg[A]!==void 0){jg[A].push({onLoad:I,onProgress:g,onError:C});return}jg[A]=[],jg[A].push({onLoad:I,onProgress:g,onError:C});const E=new Request(A,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),i=this.mimeType,o=this.responseType;fetch(E).then(e=>{if(e.status===200||e.status===0){if(e.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||e.body===void 0||e.body.getReader===void 0)return e;const t=jg[A],a=e.body.getReader(),s=e.headers.get("X-File-Size")||e.headers.get("Content-Length"),h=s?parseInt(s):0,n=h!==0;let w=0;const r=new ReadableStream({start(S){y();function y(){a.read().then(({done:G,value:M})=>{if(G)S.close();else{w+=M.byteLength;const m=new ProgressEvent("progress",{lengthComputable:n,loaded:w,total:h});for(let F=0,N=t.length;F<N;F++){const H=t[F];H.onProgress&&H.onProgress(m)}S.enqueue(M),y()}},G=>{S.error(G)})}}});return new Response(r)}else throw new Oc(`fetch for "${e.url}" responded with ${e.status}: ${e.statusText}`,e)}).then(e=>{switch(o){case"arraybuffer":return e.arrayBuffer();case"blob":return e.blob();case"document":return e.text().then(t=>new DOMParser().parseFromString(t,i));case"json":return e.json();default:if(i===void 0)return e.text();{const t=/charset="?([^;"\s]*)"?/i.exec(i),a=t&&t[1]?t[1].toLowerCase():void 0,s=new TextDecoder(a);return e.arrayBuffer().then(h=>s.decode(h))}}}).then(e=>{hC.add(A,e);const t=jg[A];delete jg[A];for(let a=0,s=t.length;a<s;a++){const h=t[a];h.onLoad&&h.onLoad(e)}}).catch(e=>{const t=jg[A];if(t===void 0)throw this.manager.itemError(A),e;delete jg[A];for(let a=0,s=t.length;a<s;a++){const h=t[a];h.onError&&h.onError(e)}this.manager.itemError(A)}).finally(()=>{this.manager.itemEnd(A)}),this.manager.itemStart(A)}setResponseType(A){return this.responseType=A,this}setMimeType(A){return this.mimeType=A,this}}class vc extends rC{constructor(A){super(A)}load(A,I,g,C){this.path!==void 0&&(A=this.path+A),A=this.manager.resolveURL(A);const Q=this,E=hC.get(A);if(E!==void 0)return Q.manager.itemStart(A),setTimeout(function(){I&&I(E),Q.manager.itemEnd(A)},0),E;const i=mB("img");function o(){t(),hC.add(A,this),I&&I(this),Q.manager.itemEnd(A)}function e(a){t(),C&&C(a),Q.manager.itemError(A),Q.manager.itemEnd(A)}function t(){i.removeEventListener("load",o,!1),i.removeEventListener("error",e,!1)}return i.addEventListener("load",o,!1),i.addEventListener("error",e,!1),A.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(i.crossOrigin=this.crossOrigin),Q.manager.itemStart(A),i.src=A,i}}class _c extends rC{constructor(A){super(A)}load(A,I,g,C){const Q=this,E=new Do,i=new jB(this.manager);return i.setResponseType("arraybuffer"),i.setRequestHeader(this.requestHeader),i.setPath(this.path),i.setWithCredentials(Q.withCredentials),i.load(A,function(o){let e;try{e=Q.parse(o)}catch(t){if(C!==void 0)C(t);else{console.error(t);return}}e.image!==void 0?E.image=e.image:e.data!==void 0&&(E.image.width=e.width,E.image.height=e.height,E.image.data=e.data),E.wrapS=e.wrapS!==void 0?e.wrapS:Kg,E.wrapT=e.wrapT!==void 0?e.wrapT:Kg,E.magFilter=e.magFilter!==void 0?e.magFilter:LI,E.minFilter=e.minFilter!==void 0?e.minFilter:LI,E.anisotropy=e.anisotropy!==void 0?e.anisotropy:1,e.colorSpace!==void 0&&(E.colorSpace=e.colorSpace),e.flipY!==void 0&&(E.flipY=e.flipY),e.format!==void 0&&(E.format=e.format),e.type!==void 0&&(E.type=e.type),e.mipmaps!==void 0&&(E.mipmaps=e.mipmaps,E.minFilter=Jg),e.mipmapCount===1&&(E.minFilter=LI),e.generateMipmaps!==void 0&&(E.generateMipmaps=e.generateMipmaps),E.needsUpdate=!0,I&&I(E,e)},g,C),E}}class Zc extends rC{constructor(A){super(A)}load(A,I,g,C){const Q=new HI,E=new vc(this.manager);return E.setCrossOrigin(this.crossOrigin),E.setPath(this.path),E.load(A,function(i){Q.image=i,Q.needsUpdate=!0,I!==void 0&&I(Q)},g,C),Q}}class Go extends oI{constructor(A,I=1){super(),this.isLight=!0,this.type="Light",this.color=new MA(A),this.intensity=I}dispose(){}copy(A,I){return super.copy(A,I),this.color.copy(A.color),this.intensity=A.intensity,this}toJSON(A){const I=super.toJSON(A);return I.object.color=this.color.getHex(),I.object.intensity=this.intensity,this.groundColor!==void 0&&(I.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(I.object.distance=this.distance),this.angle!==void 0&&(I.object.angle=this.angle),this.decay!==void 0&&(I.object.decay=this.decay),this.penumbra!==void 0&&(I.object.penumbra=this.penumbra),this.shadow!==void 0&&(I.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(I.object.target=this.target.uuid),I}}const ko=new uA,ha=new L,ra=new L;class yo{constructor(A){this.camera=A,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new vA(512,512),this.map=null,this.mapPass=null,this.matrix=new uA,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $i,this._frameExtents=new vA(1,1),this._viewportCount=1,this._viewports=[new $A(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(A){const I=this.camera,g=this.matrix;ha.setFromMatrixPosition(A.matrixWorld),I.position.copy(ha),ra.setFromMatrixPosition(A.target.matrixWorld),I.lookAt(ra),I.updateMatrixWorld(),ko.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ko),g.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),g.multiply(ko)}getViewport(A){return this._viewports[A]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(A){return this.camera=A.camera.clone(),this.intensity=A.intensity,this.bias=A.bias,this.radius=A.radius,this.mapSize.copy(A.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const A={};return this.intensity!==1&&(A.intensity=this.intensity),this.bias!==0&&(A.bias=this.bias),this.normalBias!==0&&(A.normalBias=this.normalBias),this.radius!==1&&(A.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(A.mapSize=this.mapSize.toArray()),A.camera=this.camera.toJSON(!1).object,delete A.camera.matrix,A}}class Wc extends yo{constructor(){super(new WI(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(A){const I=this.camera,g=$C*2*A.angle*this.focus,C=this.mapSize.width/this.mapSize.height,Q=A.distance||I.far;(g!==I.fov||C!==I.aspect||Q!==I.far)&&(I.fov=g,I.aspect=C,I.far=Q,I.updateProjectionMatrix()),super.updateMatrices(A)}copy(A){return super.copy(A),this.focus=A.focus,this}}class Pc extends Go{constructor(A,I,g=0,C=Math.PI/3,Q=0,E=2){super(A,I),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(oI.DEFAULT_UP),this.updateMatrix(),this.target=new oI,this.distance=g,this.angle=C,this.penumbra=Q,this.decay=E,this.map=null,this.shadow=new Wc}get power(){return this.intensity*Math.PI}set power(A){this.intensity=A/Math.PI}dispose(){this.shadow.dispose()}copy(A,I){return super.copy(A,I),this.distance=A.distance,this.angle=A.angle,this.penumbra=A.penumbra,this.decay=A.decay,this.target=A.target.clone(),this.shadow=A.shadow.clone(),this}}const Sa=new uA,VB=new L,Uo=new L;class jc extends yo{constructor(){super(new WI(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new vA(4,2),this._viewportCount=6,this._viewports=[new $A(2,1,1,1),new $A(0,1,1,1),new $A(3,1,1,1),new $A(1,1,1,1),new $A(3,0,1,1),new $A(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(A,I=0){const g=this.camera,C=this.matrix,Q=A.distance||g.far;Q!==g.far&&(g.far=Q,g.updateProjectionMatrix()),VB.setFromMatrixPosition(A.matrixWorld),g.position.copy(VB),Uo.copy(g.position),Uo.add(this._cubeDirections[I]),g.up.copy(this._cubeUps[I]),g.lookAt(Uo),g.updateMatrixWorld(),C.makeTranslation(-VB.x,-VB.y,-VB.z),Sa.multiplyMatrices(g.projectionMatrix,g.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sa)}}class Vc extends Go{constructor(A,I,g=0,C=2){super(A,I),this.isPointLight=!0,this.type="PointLight",this.distance=g,this.decay=C,this.shadow=new jc}get power(){return this.intensity*4*Math.PI}set power(A){this.intensity=A/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(A,I){return super.copy(A,I),this.distance=A.distance,this.decay=A.decay,this.shadow=A.shadow.clone(),this}}class Xc extends yo{constructor(){super(new Ao(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class na extends Go{constructor(A,I){super(A,I),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(oI.DEFAULT_UP),this.updateMatrix(),this.target=new oI,this.shadow=new Xc}dispose(){this.shadow.dispose()}copy(A){return super.copy(A),this.target=A.target.clone(),this.shadow=A.shadow.clone(),this}}class XB{static decodeText(A){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(A);let I="";for(let g=0,C=A.length;g<C;g++)I+=String.fromCharCode(A[g]);try{return decodeURIComponent(escape(I))}catch{return I}}static extractUrlBase(A){const I=A.lastIndexOf("/");return I===-1?"./":A.slice(0,I+1)}static resolveURL(A,I){return typeof A!="string"||A===""?"":(/^https?:\/\//i.test(I)&&/^\//.test(A)&&(I=I.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(A)||/^data:.*,.*$/i.test(A)||/^blob:.*$/i.test(A)?A:I+A)}}class zc extends rC{constructor(A){super(A),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(A){return this.options=A,this}load(A,I,g,C){A===void 0&&(A=""),this.path!==void 0&&(A=this.path+A),A=this.manager.resolveURL(A);const Q=this,E=hC.get(A);if(E!==void 0){if(Q.manager.itemStart(A),E.then){E.then(e=>{I&&I(e),Q.manager.itemEnd(A)}).catch(e=>{C&&C(e)});return}return setTimeout(function(){I&&I(E),Q.manager.itemEnd(A)},0),E}const i={};i.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",i.headers=this.requestHeader;const o=fetch(A,i).then(function(e){return e.blob()}).then(function(e){return createImageBitmap(e,Object.assign(Q.options,{colorSpaceConversion:"none"}))}).then(function(e){return hC.add(A,e),I&&I(e),Q.manager.itemEnd(A),e}).catch(function(e){C&&C(e),hC.remove(A),Q.manager.itemError(A),Q.manager.itemEnd(A)});hC.add(A,o),Q.manager.itemStart(A)}}class $c{constructor(A=!0){this.autoStart=A,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=wa(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let A=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const I=wa();A=(I-this.oldTime)/1e3,this.oldTime=I,this.elapsedTime+=A}return A}}function wa(){return performance.now()}class Al{constructor(A,I,g){this.binding=A,this.valueSize=g;let C,Q,E;switch(I){case"quaternion":C=this._slerp,Q=this._slerpAdditive,E=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(g*6),this._workIndex=5;break;case"string":case"bool":C=this._select,Q=this._select,E=this._setAdditiveIdentityOther,this.buffer=new Array(g*5);break;default:C=this._lerp,Q=this._lerpAdditive,E=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(g*5)}this._mixBufferRegion=C,this._mixBufferRegionAdditive=Q,this._setIdentity=E,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(A,I){const g=this.buffer,C=this.valueSize,Q=A*C+C;let E=this.cumulativeWeight;if(E===0){for(let i=0;i!==C;++i)g[Q+i]=g[i];E=I}else{E+=I;const i=I/E;this._mixBufferRegion(g,Q,0,i,C)}this.cumulativeWeight=E}accumulateAdditive(A){const I=this.buffer,g=this.valueSize,C=g*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(I,C,0,A,g),this.cumulativeWeightAdditive+=A}apply(A){const I=this.valueSize,g=this.buffer,C=A*I+I,Q=this.cumulativeWeight,E=this.cumulativeWeightAdditive,i=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,Q<1){const o=I*this._origIndex;this._mixBufferRegion(g,C,o,1-Q,I)}E>0&&this._mixBufferRegionAdditive(g,C,this._addIndex*I,1,I);for(let o=I,e=I+I;o!==e;++o)if(g[o]!==g[o+I]){i.setValue(g,C);break}}saveOriginalState(){const A=this.binding,I=this.buffer,g=this.valueSize,C=g*this._origIndex;A.getValue(I,C);for(let Q=g,E=C;Q!==E;++Q)I[Q]=I[C+Q%g];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const A=this.valueSize*3;this.binding.setValue(this.buffer,A)}_setAdditiveIdentityNumeric(){const A=this._addIndex*this.valueSize,I=A+this.valueSize;for(let g=A;g<I;g++)this.buffer[g]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const A=this._origIndex*this.valueSize,I=this._addIndex*this.valueSize;for(let g=0;g<this.valueSize;g++)this.buffer[I+g]=this.buffer[A+g]}_select(A,I,g,C,Q){if(C>=.5)for(let E=0;E!==Q;++E)A[I+E]=A[g+E]}_slerp(A,I,g,C){zI.slerpFlat(A,I,A,I,A,g,C)}_slerpAdditive(A,I,g,C,Q){const E=this._workIndex*Q;zI.multiplyQuaternionsFlat(A,E,A,I,A,g),zI.slerpFlat(A,I,A,I,A,E,C)}_lerp(A,I,g,C,Q){const E=1-C;for(let i=0;i!==Q;++i){const o=I+i;A[o]=A[o]*E+A[g+i]*C}}_lerpAdditive(A,I,g,C,Q){for(let E=0;E!==Q;++E){const i=I+E;A[i]=A[i]+A[g+E]*C}}}const Mo="\\[\\]\\.:\\/",Il=new RegExp("["+Mo+"]","g"),No="[^"+Mo+"]",gl="[^"+Mo.replace("\\.","")+"]",Cl=/((?:WC+[\/:])*)/.source.replace("WC",No),Bl=/(WCOD+)?/.source.replace("WCOD",gl),Ql=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",No),El=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",No),il=new RegExp("^"+Cl+Bl+Ql+El+"$"),ol=["material","materials","bones","map"];class el{constructor(A,I,g){const C=g||gI.parseTrackName(I);this._targetGroup=A,this._bindings=A.subscribe_(I,C)}getValue(A,I){this.bind();const g=this._targetGroup.nCachedObjects_,C=this._bindings[g];C!==void 0&&C.getValue(A,I)}setValue(A,I){const g=this._bindings;for(let C=this._targetGroup.nCachedObjects_,Q=g.length;C!==Q;++C)g[C].setValue(A,I)}bind(){const A=this._bindings;for(let I=this._targetGroup.nCachedObjects_,g=A.length;I!==g;++I)A[I].bind()}unbind(){const A=this._bindings;for(let I=this._targetGroup.nCachedObjects_,g=A.length;I!==g;++I)A[I].unbind()}}class gI{constructor(A,I,g){this.path=I,this.parsedPath=g||gI.parseTrackName(I),this.node=gI.findNode(A,this.parsedPath.nodeName),this.rootNode=A,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(A,I,g){return A&&A.isAnimationObjectGroup?new gI.Composite(A,I,g):new gI(A,I,g)}static sanitizeNodeName(A){return A.replace(/\s/g,"_").replace(Il,"")}static parseTrackName(A){const I=il.exec(A);if(I===null)throw new Error("PropertyBinding: Cannot parse trackName: "+A);const g={nodeName:I[2],objectName:I[3],objectIndex:I[4],propertyName:I[5],propertyIndex:I[6]},C=g.nodeName&&g.nodeName.lastIndexOf(".");if(C!==void 0&&C!==-1){const Q=g.nodeName.substring(C+1);ol.indexOf(Q)!==-1&&(g.nodeName=g.nodeName.substring(0,C),g.objectName=Q)}if(g.propertyName===null||g.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+A);return g}static findNode(A,I){if(I===void 0||I===""||I==="."||I===-1||I===A.name||I===A.uuid)return A;if(A.skeleton){const g=A.skeleton.getBoneByName(I);if(g!==void 0)return g}if(A.children){const g=function(Q){for(let E=0;E<Q.length;E++){const i=Q[E];if(i.name===I||i.uuid===I)return i;const o=g(i.children);if(o)return o}return null},C=g(A.children);if(C)return C}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(A,I){A[I]=this.targetObject[this.propertyName]}_getValue_array(A,I){const g=this.resolvedProperty;for(let C=0,Q=g.length;C!==Q;++C)A[I++]=g[C]}_getValue_arrayElement(A,I){A[I]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(A,I){this.resolvedProperty.toArray(A,I)}_setValue_direct(A,I){this.targetObject[this.propertyName]=A[I]}_setValue_direct_setNeedsUpdate(A,I){this.targetObject[this.propertyName]=A[I],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(A,I){this.targetObject[this.propertyName]=A[I],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(A,I){const g=this.resolvedProperty;for(let C=0,Q=g.length;C!==Q;++C)g[C]=A[I++]}_setValue_array_setNeedsUpdate(A,I){const g=this.resolvedProperty;for(let C=0,Q=g.length;C!==Q;++C)g[C]=A[I++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(A,I){const g=this.resolvedProperty;for(let C=0,Q=g.length;C!==Q;++C)g[C]=A[I++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(A,I){this.resolvedProperty[this.propertyIndex]=A[I]}_setValue_arrayElement_setNeedsUpdate(A,I){this.resolvedProperty[this.propertyIndex]=A[I],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(A,I){this.resolvedProperty[this.propertyIndex]=A[I],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(A,I){this.resolvedProperty.fromArray(A,I)}_setValue_fromArray_setNeedsUpdate(A,I){this.resolvedProperty.fromArray(A,I),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(A,I){this.resolvedProperty.fromArray(A,I),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(A,I){this.bind(),this.getValue(A,I)}_setValue_unbound(A,I){this.bind(),this.setValue(A,I)}bind(){let A=this.node;const I=this.parsedPath,g=I.objectName,C=I.propertyName;let Q=I.propertyIndex;if(A||(A=gI.findNode(this.rootNode,I.nodeName),this.node=A),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!A){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(g){let e=I.objectIndex;switch(g){case"materials":if(!A.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!A.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}A=A.material.materials;break;case"bones":if(!A.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}A=A.skeleton.bones;for(let t=0;t<A.length;t++)if(A[t].name===e){e=t;break}break;case"map":if("map"in A){A=A.map;break}if(!A.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!A.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}A=A.material.map;break;default:if(A[g]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}A=A[g]}if(e!==void 0){if(A[e]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,A);return}A=A[e]}}const E=A[C];if(E===void 0){const e=I.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+e+"."+C+" but it wasn't found.",A);return}let i=this.Versioning.None;this.targetObject=A,A.needsUpdate!==void 0?i=this.Versioning.NeedsUpdate:A.matrixWorldNeedsUpdate!==void 0&&(i=this.Versioning.MatrixWorldNeedsUpdate);let o=this.BindingType.Direct;if(Q!==void 0){if(C==="morphTargetInfluences"){if(!A.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!A.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}A.morphTargetDictionary[Q]!==void 0&&(Q=A.morphTargetDictionary[Q])}o=this.BindingType.ArrayElement,this.resolvedProperty=E,this.propertyIndex=Q}else E.fromArray!==void 0&&E.toArray!==void 0?(o=this.BindingType.HasFromToArray,this.resolvedProperty=E):Array.isArray(E)?(o=this.BindingType.EntireArray,this.resolvedProperty=E):this.propertyName=C;this.getValue=this.GetterByBindingType[o],this.setValue=this.SetterByBindingTypeAndVersioning[o][i]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}gI.Composite=el,gI.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},gI.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},gI.prototype.GetterByBindingType=[gI.prototype._getValue_direct,gI.prototype._getValue_array,gI.prototype._getValue_arrayElement,gI.prototype._getValue_toArray],gI.prototype.SetterByBindingTypeAndVersioning=[[gI.prototype._setValue_direct,gI.prototype._setValue_direct_setNeedsUpdate,gI.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[gI.prototype._setValue_array,gI.prototype._setValue_array_setNeedsUpdate,gI.prototype._setValue_array_setMatrixWorldNeedsUpdate],[gI.prototype._setValue_arrayElement,gI.prototype._setValue_arrayElement_setNeedsUpdate,gI.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[gI.prototype._setValue_fromArray,gI.prototype._setValue_fromArray_setNeedsUpdate,gI.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class tl{constructor(A,I,g=null,C=I.blendMode){this._mixer=A,this._clip=I,this._localRoot=g,this.blendMode=C;const Q=I.tracks,E=Q.length,i=new Array(E),o={endingStart:VC,endingEnd:VC};for(let e=0;e!==E;++e){const t=Q[e].createInterpolant(null);i[e]=t,t.settings=o}this._interpolantSettings=o,this._interpolants=i,this._propertyBindings=new Array(E),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=RD,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(A){return this._startTime=A,this}setLoop(A,I){return this.loop=A,this.repetitions=I,this}setEffectiveWeight(A){return this.weight=A,this._effectiveWeight=this.enabled?A:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(A){return this._scheduleFading(A,0,1)}fadeOut(A){return this._scheduleFading(A,1,0)}crossFadeFrom(A,I,g){if(A.fadeOut(I),this.fadeIn(I),g){const C=this._clip.duration,Q=A._clip.duration,E=Q/C,i=C/Q;A.warp(1,E,I),this.warp(i,1,I)}return this}crossFadeTo(A,I,g){return A.crossFadeFrom(this,I,g)}stopFading(){const A=this._weightInterpolant;return A!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(A)),this}setEffectiveTimeScale(A){return this.timeScale=A,this._effectiveTimeScale=this.paused?0:A,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(A){return this.timeScale=this._clip.duration/A,this.stopWarping()}syncWith(A){return this.time=A.time,this.timeScale=A.timeScale,this.stopWarping()}halt(A){return this.warp(this._effectiveTimeScale,0,A)}warp(A,I,g){const C=this._mixer,Q=C.time,E=this.timeScale;let i=this._timeScaleInterpolant;i===null&&(i=C._lendControlInterpolant(),this._timeScaleInterpolant=i);const o=i.parameterPositions,e=i.sampleValues;return o[0]=Q,o[1]=Q+g,e[0]=A/E,e[1]=I/E,this}stopWarping(){const A=this._timeScaleInterpolant;return A!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(A)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(A,I,g,C){if(!this.enabled){this._updateWeight(A);return}const Q=this._startTime;if(Q!==null){const o=(A-Q)*g;o<0||g===0?I=0:(this._startTime=null,I=g*o)}I*=this._updateTimeScale(A);const E=this._updateTime(I),i=this._updateWeight(A);if(i>0){const o=this._interpolants,e=this._propertyBindings;switch(this.blendMode){case dD:for(let t=0,a=o.length;t!==a;++t)o[t].evaluate(E),e[t].accumulateAdditive(i);break;case Ni:default:for(let t=0,a=o.length;t!==a;++t)o[t].evaluate(E),e[t].accumulate(C,i)}}}_updateWeight(A){let I=0;if(this.enabled){I=this.weight;const g=this._weightInterpolant;if(g!==null){const C=g.evaluate(A)[0];I*=C,A>g.parameterPositions[1]&&(this.stopFading(),C===0&&(this.enabled=!1))}}return this._effectiveWeight=I,I}_updateTimeScale(A){let I=0;if(!this.paused){I=this.timeScale;const g=this._timeScaleInterpolant;if(g!==null){const C=g.evaluate(A)[0];I*=C,A>g.parameterPositions[1]&&(this.stopWarping(),I===0?this.paused=!0:this.timeScale=I)}}return this._effectiveTimeScale=I,I}_updateTime(A){const I=this._clip.duration,g=this.loop;let C=this.time+A,Q=this._loopCount;const E=g===pD;if(A===0)return Q===-1?C:E&&(Q&1)===1?I-C:C;if(g===FD){Q===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));A:{if(C>=I)C=I;else if(C<0)C=0;else{this.time=C;break A}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=C,this._mixer.dispatchEvent({type:"finished",action:this,direction:A<0?-1:1})}}else{if(Q===-1&&(A>=0?(Q=0,this._setEndings(!0,this.repetitions===0,E)):this._setEndings(this.repetitions===0,!0,E)),C>=I||C<0){const i=Math.floor(C/I);C-=I*i,Q+=Math.abs(i);const o=this.repetitions-Q;if(o<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,C=A>0?I:0,this.time=C,this._mixer.dispatchEvent({type:"finished",action:this,direction:A>0?1:-1});else{if(o===1){const e=A<0;this._setEndings(e,!e,E)}else this._setEndings(!1,!1,E);this._loopCount=Q,this.time=C,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:i})}}else this.time=C;if(E&&(Q&1)===1)return I-C}return C}_setEndings(A,I,g){const C=this._interpolantSettings;g?(C.endingStart=XC,C.endingEnd=XC):(A?C.endingStart=this.zeroSlopeAtStart?XC:VC:C.endingStart=JQ,I?C.endingEnd=this.zeroSlopeAtEnd?XC:VC:C.endingEnd=JQ)}_scheduleFading(A,I,g){const C=this._mixer,Q=C.time;let E=this._weightInterpolant;E===null&&(E=C._lendControlInterpolant(),this._weightInterpolant=E);const i=E.parameterPositions,o=E.sampleValues;return i[0]=Q,o[0]=I,i[1]=Q+A,o[1]=g,this}}const al=new Float32Array(1);class sl extends yC{constructor(A){super(),this._root=A,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(A,I){const g=A._localRoot||this._root,C=A._clip.tracks,Q=C.length,E=A._propertyBindings,i=A._interpolants,o=g.uuid,e=this._bindingsByRootAndName;let t=e[o];t===void 0&&(t={},e[o]=t);for(let a=0;a!==Q;++a){const s=C[a],h=s.name;let n=t[h];if(n!==void 0)++n.referenceCount,E[a]=n;else{if(n=E[a],n!==void 0){n._cacheIndex===null&&(++n.referenceCount,this._addInactiveBinding(n,o,h));continue}const w=I&&I._propertyBindings[a].binding.parsedPath;n=new Al(gI.create(g,h,w),s.ValueTypeName,s.getValueSize()),++n.referenceCount,this._addInactiveBinding(n,o,h),E[a]=n}i[a].resultBuffer=n.buffer}}_activateAction(A){if(!this._isActiveAction(A)){if(A._cacheIndex===null){const g=(A._localRoot||this._root).uuid,C=A._clip.uuid,Q=this._actionsByClip[C];this._bindAction(A,Q&&Q.knownActions[0]),this._addInactiveAction(A,C,g)}const I=A._propertyBindings;for(let g=0,C=I.length;g!==C;++g){const Q=I[g];Q.useCount++===0&&(this._lendBinding(Q),Q.saveOriginalState())}this._lendAction(A)}}_deactivateAction(A){if(this._isActiveAction(A)){const I=A._propertyBindings;for(let g=0,C=I.length;g!==C;++g){const Q=I[g];--Q.useCount===0&&(Q.restoreOriginalState(),this._takeBackBinding(Q))}this._takeBackAction(A)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const A=this;this.stats={actions:{get total(){return A._actions.length},get inUse(){return A._nActiveActions}},bindings:{get total(){return A._bindings.length},get inUse(){return A._nActiveBindings}},controlInterpolants:{get total(){return A._controlInterpolants.length},get inUse(){return A._nActiveControlInterpolants}}}}_isActiveAction(A){const I=A._cacheIndex;return I!==null&&I<this._nActiveActions}_addInactiveAction(A,I,g){const C=this._actions,Q=this._actionsByClip;let E=Q[I];if(E===void 0)E={knownActions:[A],actionByRoot:{}},A._byClipCacheIndex=0,Q[I]=E;else{const i=E.knownActions;A._byClipCacheIndex=i.length,i.push(A)}A._cacheIndex=C.length,C.push(A),E.actionByRoot[g]=A}_removeInactiveAction(A){const I=this._actions,g=I[I.length-1],C=A._cacheIndex;g._cacheIndex=C,I[C]=g,I.pop(),A._cacheIndex=null;const Q=A._clip.uuid,E=this._actionsByClip,i=E[Q],o=i.knownActions,e=o[o.length-1],t=A._byClipCacheIndex;e._byClipCacheIndex=t,o[t]=e,o.pop(),A._byClipCacheIndex=null;const a=i.actionByRoot,s=(A._localRoot||this._root).uuid;delete a[s],o.length===0&&delete E[Q],this._removeInactiveBindingsForAction(A)}_removeInactiveBindingsForAction(A){const I=A._propertyBindings;for(let g=0,C=I.length;g!==C;++g){const Q=I[g];--Q.referenceCount===0&&this._removeInactiveBinding(Q)}}_lendAction(A){const I=this._actions,g=A._cacheIndex,C=this._nActiveActions++,Q=I[C];A._cacheIndex=C,I[C]=A,Q._cacheIndex=g,I[g]=Q}_takeBackAction(A){const I=this._actions,g=A._cacheIndex,C=--this._nActiveActions,Q=I[C];A._cacheIndex=C,I[C]=A,Q._cacheIndex=g,I[g]=Q}_addInactiveBinding(A,I,g){const C=this._bindingsByRootAndName,Q=this._bindings;let E=C[I];E===void 0&&(E={},C[I]=E),E[g]=A,A._cacheIndex=Q.length,Q.push(A)}_removeInactiveBinding(A){const I=this._bindings,g=A.binding,C=g.rootNode.uuid,Q=g.path,E=this._bindingsByRootAndName,i=E[C],o=I[I.length-1],e=A._cacheIndex;o._cacheIndex=e,I[e]=o,I.pop(),delete i[Q],Object.keys(i).length===0&&delete E[C]}_lendBinding(A){const I=this._bindings,g=A._cacheIndex,C=this._nActiveBindings++,Q=I[C];A._cacheIndex=C,I[C]=A,Q._cacheIndex=g,I[g]=Q}_takeBackBinding(A){const I=this._bindings,g=A._cacheIndex,C=--this._nActiveBindings,Q=I[C];A._cacheIndex=C,I[C]=A,Q._cacheIndex=g,I[g]=Q}_lendControlInterpolant(){const A=this._controlInterpolants,I=this._nActiveControlInterpolants++;let g=A[I];return g===void 0&&(g=new sa(new Float32Array(2),new Float32Array(2),1,al),g.__cacheIndex=I,A[I]=g),g}_takeBackControlInterpolant(A){const I=this._controlInterpolants,g=A.__cacheIndex,C=--this._nActiveControlInterpolants,Q=I[C];A.__cacheIndex=C,I[C]=A,Q.__cacheIndex=g,I[g]=Q}clipAction(A,I,g){const C=I||this._root,Q=C.uuid;let E=typeof A=="string"?lo.findByName(C,A):A;const i=E!==null?E.uuid:A,o=this._actionsByClip[i];let e=null;if(g===void 0&&(E!==null?g=E.blendMode:g=Ni),o!==void 0){const a=o.actionByRoot[Q];if(a!==void 0&&a.blendMode===g)return a;e=o.knownActions[0],E===null&&(E=e._clip)}if(E===null)return null;const t=new tl(this,E,I,g);return this._bindAction(t,e),this._addInactiveAction(t,i,Q),t}existingAction(A,I){const g=I||this._root,C=g.uuid,Q=typeof A=="string"?lo.findByName(g,A):A,E=Q?Q.uuid:A,i=this._actionsByClip[E];return i!==void 0&&i.actionByRoot[C]||null}stopAllAction(){const A=this._actions,I=this._nActiveActions;for(let g=I-1;g>=0;--g)A[g].stop();return this}update(A){A*=this.timeScale;const I=this._actions,g=this._nActiveActions,C=this.time+=A,Q=Math.sign(A),E=this._accuIndex^=1;for(let e=0;e!==g;++e)I[e]._update(C,A,Q,E);const i=this._bindings,o=this._nActiveBindings;for(let e=0;e!==o;++e)i[e].apply(E);return this}setTime(A){this.time=0;for(let I=0;I<this._actions.length;I++)this._actions[I].time=0;return this.update(A)}getRoot(){return this._root}uncacheClip(A){const I=this._actions,g=A.uuid,C=this._actionsByClip,Q=C[g];if(Q!==void 0){const E=Q.knownActions;for(let i=0,o=E.length;i!==o;++i){const e=E[i];this._deactivateAction(e);const t=e._cacheIndex,a=I[I.length-1];e._cacheIndex=null,e._byClipCacheIndex=null,a._cacheIndex=t,I[t]=a,I.pop(),this._removeInactiveBindingsForAction(e)}delete C[g]}}uncacheRoot(A){const I=A.uuid,g=this._actionsByClip;for(const E in g){const i=g[E].actionByRoot,o=i[I];o!==void 0&&(this._deactivateAction(o),this._removeInactiveAction(o))}const C=this._bindingsByRootAndName,Q=C[I];if(Q!==void 0)for(const E in Q){const i=Q[E];i.restoreOriginalState(),this._removeInactiveBinding(i)}}uncacheAction(A,I){const g=this.existingAction(A,I);g!==null&&(this._deactivateAction(g),this._removeInactiveAction(g))}}const nE=new L,cI=new Xi;class Dl extends wo{constructor(A){const I=new Bg,g=new oE({color:16777215,vertexColors:!0,toneMapped:!1}),C=[],Q=[],E={};i("n1","n2"),i("n2","n4"),i("n4","n3"),i("n3","n1"),i("f1","f2"),i("f2","f4"),i("f4","f3"),i("f3","f1"),i("n1","f1"),i("n2","f2"),i("n3","f3"),i("n4","f4"),i("p","n1"),i("p","n2"),i("p","n3"),i("p","n4"),i("u1","u2"),i("u2","u3"),i("u3","u1"),i("c","t"),i("p","c"),i("cn1","cn2"),i("cn3","cn4"),i("cf1","cf2"),i("cf3","cf4");function i(n,w){o(n),o(w)}function o(n){C.push(0,0,0),Q.push(0,0,0),E[n]===void 0&&(E[n]=[]),E[n].push(C.length/3-1)}I.setAttribute("position",new lg(C,3)),I.setAttribute("color",new lg(Q,3)),super(I,g),this.type="CameraHelper",this.camera=A,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=A.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=E,this.update();const e=new MA(16755200),t=new MA(16711680),a=new MA(43775),s=new MA(16777215),h=new MA(3355443);this.setColors(e,t,a,s,h)}setColors(A,I,g,C,Q){const E=this.geometry.getAttribute("color");E.setXYZ(0,A.r,A.g,A.b),E.setXYZ(1,A.r,A.g,A.b),E.setXYZ(2,A.r,A.g,A.b),E.setXYZ(3,A.r,A.g,A.b),E.setXYZ(4,A.r,A.g,A.b),E.setXYZ(5,A.r,A.g,A.b),E.setXYZ(6,A.r,A.g,A.b),E.setXYZ(7,A.r,A.g,A.b),E.setXYZ(8,A.r,A.g,A.b),E.setXYZ(9,A.r,A.g,A.b),E.setXYZ(10,A.r,A.g,A.b),E.setXYZ(11,A.r,A.g,A.b),E.setXYZ(12,A.r,A.g,A.b),E.setXYZ(13,A.r,A.g,A.b),E.setXYZ(14,A.r,A.g,A.b),E.setXYZ(15,A.r,A.g,A.b),E.setXYZ(16,A.r,A.g,A.b),E.setXYZ(17,A.r,A.g,A.b),E.setXYZ(18,A.r,A.g,A.b),E.setXYZ(19,A.r,A.g,A.b),E.setXYZ(20,A.r,A.g,A.b),E.setXYZ(21,A.r,A.g,A.b),E.setXYZ(22,A.r,A.g,A.b),E.setXYZ(23,A.r,A.g,A.b),E.setXYZ(24,I.r,I.g,I.b),E.setXYZ(25,I.r,I.g,I.b),E.setXYZ(26,I.r,I.g,I.b),E.setXYZ(27,I.r,I.g,I.b),E.setXYZ(28,I.r,I.g,I.b),E.setXYZ(29,I.r,I.g,I.b),E.setXYZ(30,I.r,I.g,I.b),E.setXYZ(31,I.r,I.g,I.b),E.setXYZ(32,g.r,g.g,g.b),E.setXYZ(33,g.r,g.g,g.b),E.setXYZ(34,g.r,g.g,g.b),E.setXYZ(35,g.r,g.g,g.b),E.setXYZ(36,g.r,g.g,g.b),E.setXYZ(37,g.r,g.g,g.b),E.setXYZ(38,C.r,C.g,C.b),E.setXYZ(39,C.r,C.g,C.b),E.setXYZ(40,Q.r,Q.g,Q.b),E.setXYZ(41,Q.r,Q.g,Q.b),E.setXYZ(42,Q.r,Q.g,Q.b),E.setXYZ(43,Q.r,Q.g,Q.b),E.setXYZ(44,Q.r,Q.g,Q.b),E.setXYZ(45,Q.r,Q.g,Q.b),E.setXYZ(46,Q.r,Q.g,Q.b),E.setXYZ(47,Q.r,Q.g,Q.b),E.setXYZ(48,Q.r,Q.g,Q.b),E.setXYZ(49,Q.r,Q.g,Q.b),E.needsUpdate=!0}update(){const A=this.geometry,I=this.pointMap,g=1,C=1;cI.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),lI("c",I,A,cI,0,0,-1),lI("t",I,A,cI,0,0,1),lI("n1",I,A,cI,-g,-C,-1),lI("n2",I,A,cI,g,-C,-1),lI("n3",I,A,cI,-g,C,-1),lI("n4",I,A,cI,g,C,-1),lI("f1",I,A,cI,-g,-C,1),lI("f2",I,A,cI,g,-C,1),lI("f3",I,A,cI,-g,C,1),lI("f4",I,A,cI,g,C,1),lI("u1",I,A,cI,g*.7,C*1.1,-1),lI("u2",I,A,cI,-g*.7,C*1.1,-1),lI("u3",I,A,cI,0,C*2,-1),lI("cf1",I,A,cI,-g,0,1),lI("cf2",I,A,cI,g,0,1),lI("cf3",I,A,cI,0,-C,1),lI("cf4",I,A,cI,0,C,1),lI("cn1",I,A,cI,-g,0,-1),lI("cn2",I,A,cI,g,0,-1),lI("cn3",I,A,cI,0,-C,-1),lI("cn4",I,A,cI,0,C,-1),A.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function lI(B,A,I,g,C,Q,E){nE.set(C,Q,E).unproject(g);const i=A[B];if(i!==void 0){const o=I.getAttribute("position");for(let e=0,t=i.length;e<t;e++)o.setXYZ(i[e],nE.x,nE.y,nE.z)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lg}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lg);var zB=function(){var B=0,A=document.createElement("div");A.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",A.addEventListener("click",function(t){t.preventDefault(),g(++B%A.children.length)},!1);function I(t){return A.appendChild(t.dom),t}function g(t){for(var a=0;a<A.children.length;a++)A.children[a].style.display=a===t?"block":"none";B=t}var C=(performance||Date).now(),Q=C,E=0,i=I(new zB.Panel("FPS","#0ff","#002")),o=I(new zB.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var e=I(new zB.Panel("MB","#f08","#201"));return g(0),{REVISION:16,dom:A,addPanel:I,showPanel:g,begin:function(){C=(performance||Date).now()},end:function(){E++;var t=(performance||Date).now();if(o.update(t-C,200),t>=Q+1e3&&(i.update(E*1e3/(t-Q),100),Q=t,E=0,e)){var a=performance.memory;e.update(a.usedJSHeapSize/1048576,a.jsHeapSizeLimit/1048576)}return t},update:function(){C=this.end()},domElement:A,setMode:g}};zB.Panel=function(B,A,I){var g=1/0,C=0,Q=Math.round,E=Q(window.devicePixelRatio||1),i=80*E,o=48*E,e=3*E,t=2*E,a=3*E,s=15*E,h=74*E,n=30*E,w=document.createElement("canvas");w.width=i,w.height=o,w.style.cssText="width:80px;height:48px";var r=w.getContext("2d");return r.font="bold "+9*E+"px Helvetica,Arial,sans-serif",r.textBaseline="top",r.fillStyle=I,r.fillRect(0,0,i,o),r.fillStyle=A,r.fillText(B,e,t),r.fillRect(a,s,h,n),r.fillStyle=I,r.globalAlpha=.9,r.fillRect(a,s,h,n),{dom:w,update:function(S,y){g=Math.min(g,S),C=Math.max(C,S),r.fillStyle=I,r.globalAlpha=1,r.fillRect(0,0,i,s),r.fillStyle=A,r.fillText(Q(S)+" "+B+" ("+Q(g)+"-"+Q(C)+")",e,t),r.drawImage(w,a+E,s,h-E,n,a,s,h-E,n),r.fillRect(a+h-E,s,E,n),r.fillStyle=I,r.globalAlpha=.9,r.fillRect(a+h-E,s,E,Q((1-S/y)*n))}}};let UB=class LE{constructor(A,I,g,C,Q="div"){this.parent=A,this.object=I,this.property=g,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(C),this.$name=document.createElement("div"),this.$name.classList.add("name"),LE.nextNameID=LE.nextNameID||0,this.$name.id="lil-gui-name-"+ ++LE.nextNameID,this.$widget=document.createElement(Q),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(g)}name(A){return this._name=A,this.$name.innerHTML=A,this}onChange(A){return this._onChange=A,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(A){return this._onFinishChange=A,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(A=!0){return this.disable(!A)}disable(A=!0){return A===this._disabled||(this._disabled=A,this.domElement.classList.toggle("disabled",A),this.$disable.toggleAttribute("disabled",A)),this}show(A=!0){return this._hidden=!A,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(A){const I=this.parent.add(this.object,this.property,A);return I.name(this._name),this.destroy(),I}min(A){return this}max(A){return this}step(A){return this}decimals(A){return this}listen(A=!0){return this._listening=A,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const A=this.save();A!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=A}getValue(){return this.object[this.property]}setValue(A){return this.object[this.property]=A,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(A){return this.setValue(A),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}},hl=class extends UB{constructor(B,A,I){super(B,A,I,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}};function Ko(B){let A,I;return(A=B.match(/(#|0x)?([a-f0-9]{6})/i))?I=A[2]:(A=B.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?I=parseInt(A[1]).toString(16).padStart(2,0)+parseInt(A[2]).toString(16).padStart(2,0)+parseInt(A[3]).toString(16).padStart(2,0):(A=B.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(I=A[1]+A[1]+A[2]+A[2]+A[3]+A[3]),!!I&&"#"+I}const rl={isPrimitive:!0,match:B=>typeof B=="string",fromHexString:Ko,toHexString:Ko},$B={isPrimitive:!0,match:B=>typeof B=="number",fromHexString:B=>parseInt(B.substring(1),16),toHexString:B=>"#"+B.toString(16).padStart(6,0)},Sl={isPrimitive:!1,match:Array.isArray,fromHexString(B,A,I=1){const g=$B.fromHexString(B);A[0]=(g>>16&255)/255*I,A[1]=(g>>8&255)/255*I,A[2]=(255&g)/255*I},toHexString:([B,A,I],g=1)=>$B.toHexString(B*(g=255/g)<<16^A*g<<8^I*g<<0)},nl={isPrimitive:!1,match:B=>Object(B)===B,fromHexString(B,A,I=1){const g=$B.fromHexString(B);A.r=(g>>16&255)/255*I,A.g=(g>>8&255)/255*I,A.b=(255&g)/255*I},toHexString:({r:B,g:A,b:I},g=1)=>$B.toHexString(B*(g=255/g)<<16^A*g<<8^I*g<<0)},wl=[rl,$B,Sl,nl];let cl=class extends UB{constructor(B,A,I,g){var C;super(B,A,I,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=(C=this.initialValue,wl.find(Q=>Q.match(C))),this._rgbScale=g,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const Q=Ko(this.$text.value);Q&&this._setValueFromHexString(Q)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(B){if(this._format.isPrimitive){const A=this._format.fromHexString(B);this.setValue(A)}else this._format.fromHexString(B,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(B){return this._setValueFromHexString(B),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}},Jo=class extends UB{constructor(B,A,I){super(B,A,I,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",g=>{g.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}},ll=class extends UB{constructor(B,A,I,g,C,Q){super(B,A,I,"number"),this._initInput(),this.min(g),this.max(C);const E=Q!==void 0;this.step(E?Q:this._getImplicitStep(),E),this.updateDisplay()}decimals(B){return this._decimals=B,this.updateDisplay(),this}min(B){return this._min=B,this._onUpdateMinMax(),this}max(B){return this._max=B,this._onUpdateMinMax(),this}step(B,A=!0){return this._step=B,this._stepExplicit=A,this}updateDisplay(){const B=this.getValue();if(this._hasSlider){let A=(B-this._min)/(this._max-this._min);A=Math.max(0,Math.min(A,1)),this.$fill.style.width=100*A+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?B:B.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const B=e=>{const t=parseFloat(this.$input.value);isNaN(t)||(this._snapClampSetValue(t+e),this.$input.value=this.getValue())};let A,I,g,C,Q,E=!1;const i=e=>{if(E){const t=e.clientX-A,a=e.clientY-I;Math.abs(a)>5?(e.preventDefault(),this.$input.blur(),E=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(t)>5&&o()}if(!E){const t=e.clientY-g;Q-=t*this._step*this._arrowKeyMultiplier(e),C+Q>this._max?Q=this._max-C:C+Q<this._min&&(Q=this._min-C),this._snapClampSetValue(C+Q)}g=e.clientY},o=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",o)};this.$input.addEventListener("input",()=>{let e=parseFloat(this.$input.value);isNaN(e)||(this._stepExplicit&&(e=this._snap(e)),this.setValue(this._clamp(e)))}),this.$input.addEventListener("keydown",e=>{e.code==="Enter"&&this.$input.blur(),e.code==="ArrowUp"&&(e.preventDefault(),B(this._step*this._arrowKeyMultiplier(e))),e.code==="ArrowDown"&&(e.preventDefault(),B(this._step*this._arrowKeyMultiplier(e)*-1))}),this.$input.addEventListener("wheel",e=>{this._inputFocused&&(e.preventDefault(),B(this._step*this._normalizeMouseWheel(e)))},{passive:!1}),this.$input.addEventListener("mousedown",e=>{A=e.clientX,I=g=e.clientY,E=!0,C=this.getValue(),Q=0,window.addEventListener("mousemove",i),window.addEventListener("mouseup",o)}),this.$input.addEventListener("focus",()=>{this._inputFocused=!0}),this.$input.addEventListener("blur",()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()})}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const B=a=>{const s=this.$slider.getBoundingClientRect();let h=(n=a,w=s.left,r=s.right,S=this._min,y=this._max,(n-w)/(r-w)*(y-S)+S);var n,w,r,S,y;this._snapClampSetValue(h)},A=a=>{B(a.clientX)},I=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",A),window.removeEventListener("mouseup",I)};let g,C,Q=!1;const E=a=>{a.preventDefault(),this._setDraggingStyle(!0),B(a.touches[0].clientX),Q=!1},i=a=>{if(Q){const s=a.touches[0].clientX-g,h=a.touches[0].clientY-C;Math.abs(s)>Math.abs(h)?E(a):(window.removeEventListener("touchmove",i),window.removeEventListener("touchend",o))}else a.preventDefault(),B(a.touches[0].clientX)},o=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",i),window.removeEventListener("touchend",o)},e=this._callOnFinishChange.bind(this);let t;this.$slider.addEventListener("mousedown",a=>{this._setDraggingStyle(!0),B(a.clientX),window.addEventListener("mousemove",A),window.addEventListener("mouseup",I)}),this.$slider.addEventListener("touchstart",a=>{a.touches.length>1||(this._hasScrollBar?(g=a.touches[0].clientX,C=a.touches[0].clientY,Q=!0):E(a),window.addEventListener("touchmove",i,{passive:!1}),window.addEventListener("touchend",o))},{passive:!1}),this.$slider.addEventListener("wheel",a=>{if(Math.abs(a.deltaX)<Math.abs(a.deltaY)&&this._hasScrollBar)return;a.preventDefault();const s=this._normalizeMouseWheel(a)*this._step;this._snapClampSetValue(this.getValue()+s),this.$input.value=this.getValue(),clearTimeout(t),t=setTimeout(e,400)},{passive:!1})}_setDraggingStyle(B,A="horizontal"){this.$slider&&this.$slider.classList.toggle("active",B),document.body.classList.toggle("lil-gui-dragging",B),document.body.classList.toggle("lil-gui-"+A,B)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(B){let{deltaX:A,deltaY:I}=B;return Math.floor(B.deltaY)!==B.deltaY&&B.wheelDelta&&(A=0,I=-B.wheelDelta/120,I*=this._stepExplicit?1:10),A+-I}_arrowKeyMultiplier(B){let A=this._stepExplicit?1:10;return B.shiftKey?A*=10:B.altKey&&(A/=10),A}_snap(B){const A=Math.round(B/this._step)*this._step;return parseFloat(A.toPrecision(15))}_clamp(B){return B<this._min&&(B=this._min),B>this._max&&(B=this._max),B}_snapClampSetValue(B){this.setValue(this._clamp(this._snap(B)))}get _hasScrollBar(){const B=this.parent.root.$children;return B.scrollHeight>B.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}},Gl=class extends UB{constructor(B,A,I,g){super(B,A,I,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(g)?g:Object.values(g),this._names=Array.isArray(g)?g:Object.keys(g),this._names.forEach(C=>{const Q=document.createElement("option");Q.innerHTML=C,this.$select.appendChild(Q)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const B=this.getValue(),A=this._values.indexOf(B);return this.$select.selectedIndex=A,this.$display.innerHTML=A===-1?B:this._names[A],this}},kl=class extends UB{constructor(B,A,I){super(B,A,I,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",g=>{g.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}},ca=!1,yl=class zs{constructor({parent:A,autoPlace:I=A===void 0,container:g,width:C,title:Q="Controls",injectStyles:E=!0,touchStyles:i=!0}={}){if(this.parent=A,this.root=A?A.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",o=>{o.code!=="Enter"&&o.code!=="Space"||(o.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(Q),i&&this.domElement.classList.add("allow-touch-styles"),this.parent)return this.parent.children.push(this),this.parent.folders.push(this),void this.parent.$children.appendChild(this.domElement);this.domElement.classList.add("root"),!ca&&E&&(function(o){const e=document.createElement("style");e.innerHTML=o;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}('.lil-gui{--background-color:#1f1f1f;--text-color:#ebebeb;--title-background-color:#111;--title-text-color:#ebebeb;--widget-color:#424242;--hover-color:#4f4f4f;--focus-color:#595959;--number-color:#2cc9ff;--string-color:#a2db3c;--font-size:11px;--input-font-size:11px;--font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;--font-family-mono:Menlo,Monaco,Consolas,"Droid Sans Mono",monospace;--padding:4px;--spacing:4px;--widget-height:20px;--name-width:45%;--slider-knob-width:2px;--slider-input-width:27%;--color-input-width:27%;--slider-input-min-width:45px;--color-input-min-width:45px;--folder-indent:7px;--widget-padding:0 0 0 3px;--widget-border-radius:2px;--checkbox-size:calc(var(--widget-height)*0.75);--scrollbar-width:5px;background-color:var(--background-color);color:var(--text-color);font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-weight:400;line-height:1;text-align:left;touch-action:manipulation;user-select:none;-webkit-user-select:none}.lil-gui,.lil-gui *{box-sizing:border-box;margin:0;padding:0}.lil-gui.root{display:flex;flex-direction:column;width:var(--width,245px)}.lil-gui.root>.title{background:var(--title-background-color);color:var(--title-text-color)}.lil-gui.root>.children{overflow-x:hidden;overflow-y:auto}.lil-gui.root>.children::-webkit-scrollbar{background:var(--background-color);height:var(--scrollbar-width);width:var(--scrollbar-width)}.lil-gui.root>.children::-webkit-scrollbar-thumb{background:var(--focus-color);border-radius:var(--scrollbar-width)}.lil-gui.force-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}.lil-gui.autoPlace{max-height:100%;position:fixed;right:15px;top:0;z-index:1001}.lil-gui .controller{align-items:center;display:flex;margin:var(--spacing) 0;padding:0 var(--padding)}.lil-gui .controller.disabled{opacity:.5}.lil-gui .controller.disabled,.lil-gui .controller.disabled *{pointer-events:none!important}.lil-gui .controller>.name{flex-shrink:0;line-height:var(--widget-height);min-width:var(--name-width);padding-right:var(--spacing);white-space:pre}.lil-gui .controller .widget{align-items:center;display:flex;min-height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.string input{color:var(--string-color)}.lil-gui .controller.boolean .widget{cursor:pointer}.lil-gui .controller.color .display{border-radius:var(--widget-border-radius);height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.color input[type=color]{cursor:pointer;height:100%;opacity:0;width:100%}.lil-gui .controller.color input[type=text]{flex-shrink:0;font-family:var(--font-family-mono);margin-left:var(--spacing);min-width:var(--color-input-min-width);width:var(--color-input-width)}.lil-gui .controller.option select{max-width:100%;opacity:0;position:absolute;width:100%}.lil-gui .controller.option .display{background:var(--widget-color);border-radius:var(--widget-border-radius);height:var(--widget-height);line-height:var(--widget-height);max-width:100%;overflow:hidden;padding-left:.55em;padding-right:1.75em;pointer-events:none;position:relative;word-break:break-all}.lil-gui .controller.option .display.active{background:var(--focus-color)}.lil-gui .controller.option .display:after{bottom:0;content:"\u2195";font-family:lil-gui;padding-right:.375em;position:absolute;right:0;top:0}.lil-gui .controller.option .widget,.lil-gui .controller.option select{cursor:pointer}.lil-gui .controller.number input{color:var(--number-color)}.lil-gui .controller.number.hasSlider input{flex-shrink:0;margin-left:var(--spacing);min-width:var(--slider-input-min-width);width:var(--slider-input-width)}.lil-gui .controller.number .slider{background-color:var(--widget-color);border-radius:var(--widget-border-radius);cursor:ew-resize;height:var(--widget-height);overflow:hidden;padding-right:var(--slider-knob-width);touch-action:pan-y;width:100%}.lil-gui .controller.number .slider.active{background-color:var(--focus-color)}.lil-gui .controller.number .slider.active .fill{opacity:.95}.lil-gui .controller.number .fill{border-right:var(--slider-knob-width) solid var(--number-color);box-sizing:content-box;height:100%}.lil-gui-dragging .lil-gui{--hover-color:var(--widget-color)}.lil-gui-dragging *{cursor:ew-resize!important}.lil-gui-dragging.lil-gui-vertical *{cursor:ns-resize!important}.lil-gui .title{--title-height:calc(var(--widget-height) + var(--spacing)*1.25);-webkit-tap-highlight-color:transparent;text-decoration-skip:objects;cursor:pointer;font-weight:600;height:var(--title-height);line-height:calc(var(--title-height) - 4px);outline:none;padding:0 var(--padding)}.lil-gui .title:before{content:"\u25BE";display:inline-block;font-family:lil-gui;padding-right:2px}.lil-gui .title:active{background:var(--title-background-color);opacity:.75}.lil-gui.root>.title:focus{text-decoration:none!important}.lil-gui.closed>.title:before{content:"\u25B8"}.lil-gui.closed>.children{opacity:0;transform:translateY(-7px)}.lil-gui.closed:not(.transition)>.children{display:none}.lil-gui.transition>.children{overflow:hidden;pointer-events:none;transition-duration:.3s;transition-property:height,opacity,transform;transition-timing-function:cubic-bezier(.2,.6,.35,1)}.lil-gui .children:empty:before{content:"Empty";display:block;font-style:italic;height:var(--widget-height);line-height:var(--widget-height);margin:var(--spacing) 0;opacity:.5;padding:0 var(--padding)}.lil-gui.root>.children>.lil-gui>.title{border-width:0;border-bottom:1px solid var(--widget-color);border-left:0 solid var(--widget-color);border-right:0 solid var(--widget-color);border-top:1px solid var(--widget-color);transition:border-color .3s}.lil-gui.root>.children>.lil-gui.closed>.title{border-bottom-color:transparent}.lil-gui+.controller{border-top:1px solid var(--widget-color);margin-top:0;padding-top:var(--spacing)}.lil-gui .lil-gui .lil-gui>.title{border:none}.lil-gui .lil-gui .lil-gui>.children{border:none;border-left:2px solid var(--widget-color);margin-left:var(--folder-indent)}.lil-gui .lil-gui .controller{border:none}.lil-gui input{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:0;border-radius:var(--widget-border-radius);color:var(--text-color);font-family:var(--font-family);font-size:var(--input-font-size);height:var(--widget-height);outline:none;width:100%}.lil-gui input:disabled{opacity:1}.lil-gui input[type=number],.lil-gui input[type=text]{padding:var(--widget-padding)}.lil-gui input[type=number]:focus,.lil-gui input[type=text]:focus{background:var(--focus-color)}.lil-gui input::-webkit-inner-spin-button,.lil-gui input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.lil-gui input[type=number]{-moz-appearance:textfield}.lil-gui input[type=checkbox]{appearance:none;-webkit-appearance:none;border-radius:var(--widget-border-radius);cursor:pointer;height:var(--checkbox-size);text-align:center;width:var(--checkbox-size)}.lil-gui input[type=checkbox]:checked:before{content:"\u2713";font-family:lil-gui;font-size:var(--checkbox-size);line-height:var(--checkbox-size)}.lil-gui button{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:1px solid var(--widget-color);border-radius:var(--widget-border-radius);color:var(--text-color);cursor:pointer;font-family:var(--font-family);font-size:var(--font-size);height:var(--widget-height);line-height:calc(var(--widget-height) - 4px);outline:none;text-align:center;text-transform:none;width:100%}.lil-gui button:active{background:var(--focus-color)}@font-face{font-family:lil-gui;src:url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff")}@media (pointer:coarse){.lil-gui.allow-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}}@media (hover:hover){.lil-gui .controller.color .display:hover:before{border:1px solid #fff9;border-radius:var(--widget-border-radius);bottom:0;content:" ";display:block;left:0;position:absolute;right:0;top:0}.lil-gui .controller.option .display.focus{background:var(--focus-color)}.lil-gui .controller.option .widget:hover .display{background:var(--hover-color)}.lil-gui .controller.number .slider:hover{background-color:var(--hover-color)}body:not(.lil-gui-dragging) .lil-gui .title:hover{background:var(--title-background-color);opacity:.85}.lil-gui .title:focus{text-decoration:underline var(--focus-color)}.lil-gui input:hover{background:var(--hover-color)}.lil-gui input:active{background:var(--focus-color)}.lil-gui input[type=checkbox]:focus{box-shadow:inset 0 0 0 1px var(--focus-color)}.lil-gui button:hover{background:var(--hover-color);border-color:var(--hover-color)}.lil-gui button:focus{border-color:var(--focus-color)}}'),ca=!0),g?g.appendChild(this.domElement):I&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),C&&this.domElement.style.setProperty("--width",C+"px"),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation())}add(A,I,g,C,Q){if(Object(g)===g)return new Gl(this,A,I,g);const E=A[I];switch(typeof E){case"number":return new ll(this,A,I,g,C,Q);case"boolean":return new hl(this,A,I);case"string":return new kl(this,A,I);case"function":return new Jo(this,A,I)}console.error(`gui.add failed
	property:`,I,`
	object:`,A,`
`,C=function(S,y,G){y=y||1024;let M=S.pos,m=-1,F=0,N="",H=String.fromCharCode.apply(null,new Uint16Array(S.subarray(M,M+128)));for(;0>(m=H.indexOf(g))&&F<y&&M<S.byteLength;)N+=H,F+=H.length,M+=128,H+=String.fromCharCode.apply(null,new Uint16Array(S.subarray(M,M+128)));return-1<m?(S.pos+=F+m+1,N+H.slice(0,m)):!1},Q=function(S){const y=/^#\?(\S+)/,G=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,M=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,m=/^\s*FORMAT=(\S+)\s*$/,F=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,N={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let H,P;for((S.pos>=S.byteLength||!(H=C(S)))&&I(1,"no header found"),(P=H.match(y))||I(3,"bad initial token"),N.valid|=1,N.programtype=P[1],N.string+=H+`
`;H=C(S),H!==!1;){if(N.string+=H+`
`,H.charAt(0)==="#"){N.comments+=H+`
`;continue}if((P=H.match(G))&&(N.gamma=parseFloat(P[1])),(P=H.match(M))&&(N.exposure=parseFloat(P[1])),(P=H.match(m))&&(N.valid|=2,N.format=P[1]),(P=H.match(F))&&(N.valid|=4,N.height=parseInt(P[1],10),N.width=parseInt(P[2],10)),N.valid&2&&N.valid&4)break}return N.valid&2||I(3,"missing format specifier"),N.valid&4||I(3,"missing image size specifier"),N},E=function(S,y,G){const M=y;if(M<8||M>32767||S[0]!==2||S[1]!==2||S[2]&128)return new Uint8Array(S);M!==(S[2]<<8|S[3])&&I(3,"wrong scanline width");const m=new Uint8Array(4*y*G);m.length||I(4,"unable to allocate buffer space");let F=0,N=0;const H=4*M,P=new Uint8Array(4),c=new Uint8Array(H);let U=G;for(;U>0&&N<S.byteLength;){N+4>S.byteLength&&I(1),P[0]=S[N++],P[1]=S[N++],P[2]=S[N++],P[3]=S[N++],(P[0]!=2||P[1]!=2||(P[2]<<8|P[3])!=M)&&I(3,"bad rgbe scanline format");let O=0,v;for(;O<H&&N<S.byteLength;){v=S[N++];const $=v>128;if($&&(v-=128),(v===0||O+v>H)&&I(3,"bad scanline data"),$){const b=S[N++];for(let IA=0;IA<v;IA++)c[O++]=b}else c.set(S.subarray(N,N+v),O),O+=v,N+=v}const W=M;for(let $=0;$<W;$++){let b=0;m[F]=c[$+b],b+=M,m[F+1]=c[$+b],b+=M,m[F+2]=c[$+b],b+=M,m[F+3]=c[$+b],F+=4}U--}return m},i=function(S,y,G,M){const m=S[y+3],F=Math.pow(2,m-128)/255;G[M+0]=S[y+0]*F,G[M+1]=S[y+1]*F,G[M+2]=S[y+2]*F,G[M+3]=1},o=function(S,y,G,M){const m=S[y+3],F=Math.pow(2,m-128)/255;G[M+0]=vQ.toHalfFloat(Math.min(S[y+0]*F,65504)),G[M+1]=vQ.toHalfFloat(Math.min(S[y+1]*F,65504)),G[M+2]=vQ.toHalfFloat(Math.min(S[y+2]*F,65504)),G[M+3]=vQ.toHalfFloat(1)},e=new Uint8Array(A);e.pos=0;const t=Q(e),a=t.width,s=t.height,h=E(e.subarray(e.pos),a,s);let n,w,r;switch(this.type){case XI:r=h.length/4;const S=new Float32Array(r*4);for(let G=0;G<r;G++)i(h,G*4,S,G*4);n=S,w=XI;break;case Tg:r=h.length/4;const y=new Uint16Array(r*4);for(let G=0;G<r;G++)o(h,G*4,y,G*4);n=y,w=Tg;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:a,height:s,data:n,header:t.string,gamma:t.gamma,exposure:t.exposure,type:w}}setDataType(A){return this.type=A,this}load(A,I,g,C){function Q(E,i){switch(E.type){case XI:case Tg:E.colorSpace=FI,E.minFilter=LI,E.magFilter=LI,E.generateMipmaps=!1,E.flipY=!0;break}I&&I(E,i)}return super.load(A,Q,g,C)}}class Wl{constructor(A,I){FA(this,"scene");FA(this,"light");FA(this,"lightHelper");this.scene=A;const g={lightColor:16777215,lightIntensity:Math.PI*1.5,lightPosX:32,lightPosY:32,lightPosZ:18};this.light=new na(g.lightColor,g.lightIntensity),this.light.position.set(g.lightPosX,g.lightPosY,g.lightPosZ),this.light.shadow.camera.far=100,this.light.shadow.camera.left=-15,this.light.shadow.camera.right=15,this.light.shadow.camera.top=10,this.light.shadow.camera.bottom=-10,this.light.shadow.radius=2,this.light.shadow.blurSamples=2,this.light.shadow.mapSize.width=512*3,this.light.shadow.mapSize.height=512*3,this.light.castShadow=!0,this.scene.add(this.light),this.lightHelper=new Dl(this.light.shadow.camera),this.lightHelper.visible=!1,this.scene.add(this.lightHelper),this.setupGUI(I,g)}setupGUI(A,I){const g=A.addFolder("Directional Light");g.add(this.light,"visible").name("Light on/off"),g.add(this.lightHelper,"visible").name("lightHelper on/off"),g.addColor(I,"lightColor").onChange(()=>{this.light.color.set(I.lightColor)}),g.add(this.light,"intensity",0,10,.1).name("Intensity"),g.add(I,"lightPosX",-50,50).name("Position X").onChange(()=>{this.light.position.x=I.lightPosX}),g.add(I,"lightPosY",-50,50).name("Position Y").onChange(()=>{this.light.position.y=I.lightPosY}),g.add(I,"lightPosZ",-50,50).name("Position Z").onChange(()=>{this.light.position.z=I.lightPosZ}),g.add(this.light.shadow.camera,"near",.1,100).name("Shadow Near").onChange(()=>{this.light.shadow.camera.updateProjectionMatrix()}),g.add(this.light.shadow.camera,"far",.1,100).name("Shadow Far").onChange(()=>{this.light.shadow.camera.updateProjectionMatrix()}),g.add(this.light.shadow.camera,"left",-50,50).name("Shadow Left").onChange(()=>{this.light.shadow.camera.updateProjectionMatrix()}),g.add(this.light.shadow.camera,"right",-50,50).name("Shadow Right").onChange(()=>{this.light.shadow.camera.updateProjectionMatrix()}),g.add(this.light.shadow.camera,"top",-50,50).name("Shadow Top").onChange(()=>{this.light.shadow.camera.updateProjectionMatrix()}),g.add(this.light.shadow.camera,"bottom",-50,50).name("Shadow Bottom").onChange(()=>{this.light.shadow.camera.updateProjectionMatrix()}),g.close()}async init(){await new Zl().loadAsync("img/blue_sky_1k.hdr").then(A=>{A.mapping=cQ,this.scene.environment=A,this.scene.background=A,this.scene.environmentIntensity=.1})}}class Pl{constructor(A,I){FA(this,"mesh");FA(this,"world");FA(this,"enabled",!0);this.world=I,this.mesh=new wo(new Bg,new oE({color:16777215,vertexColors:!0})),this.mesh.frustumCulled=!1,A.add(this.mesh)}update(){if(this.enabled){const{vertices:A,colors:I}=this.world.debugRender();this.mesh.geometry.setAttribute("position",new RI(A,3)),this.mesh.geometry.setAttribute("color",new RI(I,4)),this.mesh.visible=!0}else this.mesh.visible=!1}}const De=new WeakMap;class jl extends rC{constructor(A){super(A),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(A){return this.decoderPath=A,this}setDecoderConfig(A){return this.decoderConfig=A,this}setWorkerLimit(A){return this.workerLimit=A,this}load(A,I,g,C){const Q=new jB(this.manager);Q.setPath(this.path),Q.setResponseType("arraybuffer"),Q.setRequestHeader(this.requestHeader),Q.setWithCredentials(this.withCredentials),Q.load(A,E=>{this.parse(E,I,C)},g,C)}parse(A,I,g=()=>{}){this.decodeDracoFile(A,I,null,null,uI,g).catch(g)}decodeDracoFile(A,I,g,C,Q=FI,E=()=>{}){const i={attributeIDs:g||this.defaultAttributeIDs,attributeTypes:C||this.defaultAttributeTypes,useUniqueIDs:!!g,vertexColorSpace:Q};return this.decodeGeometry(A,i).then(I).catch(E)}decodeGeometry(A,I){const g=JSON.stringify(I);if(De.has(A)){const o=De.get(A);if(o.key===g)return o.promise;if(A.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let C;const Q=this.workerNextTaskID++,E=A.byteLength,i=this._getWorker(Q,E).then(o=>(C=o,new Promise((e,t)=>{C._callbacks[Q]={resolve:e,reject:t},C.postMessage({type:"decode",id:Q,taskConfig:I,buffer:A},[A])}))).then(o=>this._createGeometry(o.geometry));return i.catch(()=>!0).then(()=>{C&&Q&&this._releaseTask(C,Q)}),De.set(A,{key:g,promise:i}),i}_createGeometry(A){const I=new Bg;A.index&&I.setIndex(new RI(A.index.array,1));for(let g=0;g<A.attributes.length;g++){const C=A.attributes[g],Q=C.name,E=C.array,i=C.itemSize,o=new RI(E,i);Q==="color"&&(this._assignVertexColorSpace(o,C.vertexColorSpace),o.normalized=!(E instanceof Float32Array)),I.setAttribute(Q,o)}return I}_assignVertexColorSpace(A,I){if(I!==uI)return;const g=new MA;for(let C=0,Q=A.count;C<Q;C++)g.fromBufferAttribute(A,C),jA.toWorkingColorSpace(g,uI),A.setXYZ(C,g.r,g.g,g.b)}_loadLibrary(A,I){const g=new jB(this.manager);return g.setPath(this.decoderPath),g.setResponseType(I),g.setWithCredentials(this.withCredentials),new Promise((C,Q)=>{g.load(A,C,void 0,Q)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const A=typeof WebAssembly!="object"||this.decoderConfig.type==="js",I=[];return A?I.push(this._loadLibrary("draco_decoder.js","text")):(I.push(this._loadLibrary("draco_wasm_wrapper.js","text")),I.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(I).then(g=>{const C=g[0];A||(this.decoderConfig.wasmBinary=g[1]);const Q=Vl.toString(),E=["/* draco decoder */",C,"","/* worker */",Q.substring(Q.indexOf("{")+1,Q.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([E]))}),this.decoderPending}_getWorker(A,I){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const C=new Worker(this.workerSourceURL);C._callbacks={},C._taskCosts={},C._taskLoad=0,C.postMessage({type:"init",decoderConfig:this.decoderConfig}),C.onmessage=function(Q){const E=Q.data;switch(E.type){case"decode":C._callbacks[E.id].resolve(E);break;case"error":C._callbacks[E.id].reject(E);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+E.type+'"')}},this.workerPool.push(C)}else this.workerPool.sort(function(C,Q){return C._taskLoad>Q._taskLoad?-1:1});const g=this.workerPool[this.workerPool.length-1];return g._taskCosts[A]=I,g._taskLoad+=I,g})}_releaseTask(A,I){A._taskLoad-=A._taskCosts[I],delete A._callbacks[I],delete A._taskCosts[I]}debug(){console.log("Task load: ",this.workerPool.map(A=>A._taskLoad))}dispose(){for(let A=0;A<this.workerPool.length;++A)this.workerPool[A].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function Vl(){let B,A;onmessage=function(E){const i=E.data;switch(i.type){case"init":B=i.decoderConfig,A=new Promise(function(t){B.onModuleLoaded=function(a){t({draco:a})},DracoDecoderModule(B)});break;case"decode":const o=i.buffer,e=i.taskConfig;A.then(t=>{const a=t.draco,s=new a.Decoder;try{const h=I(a,s,new Int8Array(o),e),n=h.attributes.map(w=>w.array.buffer);h.index&&n.push(h.index.array.buffer),self.postMessage({type:"decode",id:i.id,geometry:h},n)}catch(h){console.error(h),self.postMessage({type:"error",id:i.id,error:h.message})}finally{a.destroy(s)}});break}};function I(E,i,o,e){const t=e.attributeIDs,a=e.attributeTypes;let s,h;const n=i.GetEncodedGeometryType(o);if(n===E.TRIANGULAR_MESH)s=new E.Mesh,h=i.DecodeArrayToMesh(o,o.byteLength,s);else if(n===E.POINT_CLOUD)s=new E.PointCloud,h=i.DecodeArrayToPointCloud(o,o.byteLength,s);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!h.ok()||s.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+h.error_msg());const w={index:null,attributes:[]};for(const r in t){const S=self[a[r]];let y,G;if(e.useUniqueIDs)G=t[r],y=i.GetAttributeByUniqueId(s,G);else{if(G=i.GetAttributeId(s,E[t[r]]),G===-1)continue;y=i.GetAttribute(s,G)}const M=C(E,i,s,r,S,y);r==="color"&&(M.vertexColorSpace=e.vertexColorSpace),w.attributes.push(M)}return n===E.TRIANGULAR_MESH&&(w.index=g(E,i,s)),E.destroy(s),w}function g(E,i,o){const e=o.num_faces()*3,t=e*4,a=E._malloc(t);i.GetTrianglesUInt32Array(o,t,a);const s=new Uint32Array(E.HEAPF32.buffer,a,e).slice();return E._free(a),{array:s,itemSize:1}}function C(E,i,o,e,t,a){const s=a.num_components(),h=o.num_points()*s,n=h*t.BYTES_PER_ELEMENT,w=Q(E,t),r=E._malloc(n);i.GetAttributeDataArrayForAllPoints(o,a,w,n,r);const S=new t(E.HEAPF32.buffer,r,h).slice();return E._free(r),{name:e,array:S,itemSize:s}}function Q(E,i){switch(i){case Float32Array:return E.DT_FLOAT32;case Int8Array:return E.DT_INT8;case Int16Array:return E.DT_INT16;case Int32Array:return E.DT_INT32;case Uint8Array:return E.DT_UINT8;case Uint16Array:return E.DT_UINT16;case Uint32Array:return E.DT_UINT32}}}function ds(B,A){if(A===qD)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),B;if(A===Ki||A===Te){let I=B.getIndex();if(I===null){const E=[],i=B.getAttribute("position");if(i!==void 0){for(let o=0;o<i.count;o++)E.push(o);B.setIndex(E),I=B.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),B}const g=I.count-2,C=[];if(A===Ki)for(let E=1;E<=g;E++)C.push(I.getX(0)),C.push(I.getX(E)),C.push(I.getX(E+1));else for(let E=0;E<g;E++)E%2===0?(C.push(I.getX(E)),C.push(I.getX(E+1)),C.push(I.getX(E+2))):(C.push(I.getX(E+2)),C.push(I.getX(E+1)),C.push(I.getX(E)));C.length/3!==g&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const Q=B.clone();return Q.setIndex(C),Q.clearGroups(),Q}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",A),B}class Xl extends rC{constructor(A){super(A),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(I){return new gG(I)}),this.register(function(I){return new CG(I)}),this.register(function(I){return new sG(I)}),this.register(function(I){return new DG(I)}),this.register(function(I){return new hG(I)}),this.register(function(I){return new QG(I)}),this.register(function(I){return new EG(I)}),this.register(function(I){return new iG(I)}),this.register(function(I){return new oG(I)}),this.register(function(I){return new IG(I)}),this.register(function(I){return new eG(I)}),this.register(function(I){return new BG(I)}),this.register(function(I){return new aG(I)}),this.register(function(I){return new tG(I)}),this.register(function(I){return new $l(I)}),this.register(function(I){return new rG(I)}),this.register(function(I){return new SG(I)})}load(A,I,g,C){const Q=this;let E;if(this.resourcePath!=="")E=this.resourcePath;else if(this.path!==""){const e=XB.extractUrlBase(A);E=XB.resolveURL(e,this.path)}else E=XB.extractUrlBase(A);this.manager.itemStart(A);const i=function(e){C?C(e):console.error(e),Q.manager.itemError(A),Q.manager.itemEnd(A)},o=new jB(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(A,function(e){try{Q.parse(e,E,function(t){I(t),Q.manager.itemEnd(A)},i)}catch(t){i(t)}},g,i)}setDRACOLoader(A){return this.dracoLoader=A,this}setKTX2Loader(A){return this.ktx2Loader=A,this}setMeshoptDecoder(A){return this.meshoptDecoder=A,this}register(A){return this.pluginCallbacks.indexOf(A)===-1&&this.pluginCallbacks.push(A),this}unregister(A){return this.pluginCallbacks.indexOf(A)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(A),1),this}parse(A,I,g,C){let Q;const E={},i={},o=new TextDecoder;if(typeof A=="string")Q=JSON.parse(A);else if(A instanceof ArrayBuffer)if(o.decode(new Uint8Array(A,0,4))===qs){try{E[OA.KHR_BINARY_GLTF]=new nG(A)}catch(t){C&&C(t);return}Q=JSON.parse(E[OA.KHR_BINARY_GLTF].content)}else Q=JSON.parse(o.decode(A));else Q=A;if(Q.asset===void 0||Q.asset.version[0]<2){C&&C(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const e=new RG(Q,{path:I||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});e.fileLoader.setRequestHeader(this.requestHeader);for(let t=0;t<this.pluginCallbacks.length;t++){const a=this.pluginCallbacks[t](e);a.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),i[a.name]=a,E[a.name]=!0}if(Q.extensionsUsed)for(let t=0;t<Q.extensionsUsed.length;++t){const a=Q.extensionsUsed[t],s=Q.extensionsRequired||[];switch(a){case OA.KHR_MATERIALS_UNLIT:E[a]=new AG;break;case OA.KHR_DRACO_MESH_COMPRESSION:E[a]=new wG(Q,this.dracoLoader);break;case OA.KHR_TEXTURE_TRANSFORM:E[a]=new cG;break;case OA.KHR_MESH_QUANTIZATION:E[a]=new lG;break;default:s.indexOf(a)>=0&&i[a]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+a+'".')}}e.setExtensions(E),e.setPlugins(i),e.parse(g,C)}parseAsync(A,I){const g=this;return new Promise(function(C,Q){g.parse(A,I,C,Q)})}}function zl(){let B={};return{get:function(A){return B[A]},add:function(A,I){B[A]=I},remove:function(A){delete B[A]},removeAll:function(){B={}}}}const OA={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class $l{constructor(A){this.parser=A,this.name=OA.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const A=this.parser,I=this.parser.json.nodes||[];for(let g=0,C=I.length;g<C;g++){const Q=I[g];Q.extensions&&Q.extensions[this.name]&&Q.extensions[this.name].light!==void 0&&A._addNodeRef(this.cache,Q.extensions[this.name].light)}}_loadLight(A){const I=this.parser,g="light:"+A;let C=I.cache.get(g);if(C)return C;const Q=I.json,E=((Q.extensions&&Q.extensions[this.name]||{}).lights||[])[A];let i;const o=new MA(16777215);E.color!==void 0&&o.setRGB(E.color[0],E.color[1],E.color[2],FI);const e=E.range!==void 0?E.range:0;switch(E.type){case"directional":i=new na(o),i.target.position.set(0,0,-1),i.add(i.target);break;case"point":i=new Vc(o),i.distance=e;break;case"spot":i=new Pc(o),i.distance=e,E.spot=E.spot||{},E.spot.innerConeAngle=E.spot.innerConeAngle!==void 0?E.spot.innerConeAngle:0,E.spot.outerConeAngle=E.spot.outerConeAngle!==void 0?E.spot.outerConeAngle:Math.PI/4,i.angle=E.spot.outerConeAngle,i.penumbra=1-E.spot.innerConeAngle/E.spot.outerConeAngle,i.target.position.set(0,0,-1),i.add(i.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+E.type)}return i.position.set(0,0,0),i.decay=2,AC(i,E),E.intensity!==void 0&&(i.intensity=E.intensity),i.name=I.createUniqueName(E.name||"light_"+A),C=Promise.resolve(i),I.cache.add(g,C),C}getDependency(A,I){if(A==="light")return this._loadLight(I)}createNodeAttachment(A){const I=this,g=this.parser,C=g.json.nodes[A],Q=(C.extensions&&C.extensions[this.name]||{}).light;return Q===void 0?null:this._loadLight(Q).then(function(E){return g._getNodeRef(I.cache,Q,E)})}}class AG{constructor(){this.name=OA.KHR_MATERIALS_UNLIT}getMaterialType(){return KC}extendParams(A,I,g){const C=[];A.color=new MA(1,1,1),A.opacity=1;const Q=I.pbrMetallicRoughness;if(Q){if(Array.isArray(Q.baseColorFactor)){const E=Q.baseColorFactor;A.color.setRGB(E[0],E[1],E[2],FI),A.opacity=E[3]}Q.baseColorTexture!==void 0&&C.push(g.assignTexture(A,"map",Q.baseColorTexture,uI))}return Promise.all(C)}}class IG{constructor(A){this.parser=A,this.name=OA.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(A,I){const g=this.parser.json.materials[A];if(!g.extensions||!g.extensions[this.name])return Promise.resolve();const C=g.extensions[this.name].emissiveStrength;return C!==void 0&&(I.emissiveIntensity=C),Promise.resolve()}}class gG{constructor(A){this.parser=A,this.name=OA.KHR_MATERIALS_CLEARCOAT}getMaterialType(A){const I=this.parser.json.materials[A];return!I.extensions||!I.extensions[this.name]?null:dg}extendMaterialParams(A,I){const g=this.parser,C=g.json.materials[A];if(!C.extensions||!C.extensions[this.name])return Promise.resolve();const Q=[],E=C.extensions[this.name];if(E.clearcoatFactor!==void 0&&(I.clearcoat=E.clearcoatFactor),E.clearcoatTexture!==void 0&&Q.push(g.assignTexture(I,"clearcoatMap",E.clearcoatTexture)),E.clearcoatRoughnessFactor!==void 0&&(I.clearcoatRoughness=E.clearcoatRoughnessFactor),E.clearcoatRoughnessTexture!==void 0&&Q.push(g.assignTexture(I,"clearcoatRoughnessMap",E.clearcoatRoughnessTexture)),E.clearcoatNormalTexture!==void 0&&(Q.push(g.assignTexture(I,"clearcoatNormalMap",E.clearcoatNormalTexture)),E.clearcoatNormalTexture.scale!==void 0)){const i=E.clearcoatNormalTexture.scale;I.clearcoatNormalScale=new vA(i,i)}return Promise.all(Q)}}class CG{constructor(A){this.parser=A,this.name=OA.KHR_MATERIALS_DISPERSION}getMaterialType(A){const I=this.parser.json.materials[A];return!I.extensions||!I.extensions[this.name]?null:dg}extendMaterialParams(A,I){const g=this.parser.json.materials[A];if(!g.extensions||!g.extensions[this.name])return Promise.resolve();const C=g.extensions[this.name];return I.dispersion=C.dispersion!==void 0?C.dispersion:0,Promise.resolve()}}class BG{constructor(A){this.parser=A,this.name=OA.KHR_MATERIALS_IRIDESCENCE}getMaterialType(A){const I=this.parser.json.materials[A];return!I.extensions||!I.extensions[this.name]?null:dg}extendMaterialParams(A,I){const g=this.parser,C=g.json.materials[A];if(!C.extensions||!C.extensions[this.name])return Promise.resolve();const Q=[],E=C.extensions[this.name];return E.iridescenceFactor!==void 0&&(I.iridescence=E.iridescenceFactor),E.iridescenceTexture!==void 0&&Q.push(g.assignTexture(I,"iridescenceMap",E.iridescenceTexture)),E.iridescenceIor!==void 0&&(I.iridescenceIOR=E.iridescenceIor),I.iridescenceThicknessRange===void 0&&(I.iridescenceThicknessRange=[100,400]),E.iridescenceThicknessMinimum!==void 0&&(I.iridescenceThicknessRange[0]=E.iridescenceThicknessMinimum),E.iridescenceThicknessMaximum!==void 0&&(I.iridescenceThicknessRange[1]=E.iridescenceThicknessMaximum),E.iridescenceThicknessTexture!==void 0&&Q.push(g.assignTexture(I,"iridescenceThicknessMap",E.iridescenceThicknessTexture)),Promise.all(Q)}}class QG{constructor(A){this.parser=A,this.name=OA.KHR_MATERIALS_SHEEN}getMaterialType(A){const I=this.parser.json.materials[A];return!I.extensions||!I.extensions[this.name]?null:dg}extendMaterialParams(A,I){const g=this.parser,C=g.json.materials[A];if(!C.extensions||!C.extensions[this.name])return Promise.resolve();const Q=[];I.sheenColor=new MA(0,0,0),I.sheenRoughness=0,I.sheen=1;const E=C.extensions[this.name];if(E.sheenColorFactor!==void 0){const i=E.sheenColorFactor;I.sheenColor.setRGB(i[0],i[1],i[2],FI)}return E.sheenRoughnessFactor!==void 0&&(I.sheenRoughness=E.sheenRoughnessFactor),E.sheenColorTexture!==void 0&&Q.push(g.assignTexture(I,"sheenColorMap",E.sheenColorTexture,uI)),E.sheenRoughnessTexture!==void 0&&Q.push(g.assignTexture(I,"sheenRoughnessMap",E.sheenRoughnessTexture)),Promise.all(Q)}}class EG{constructor(A){this.parser=A,this.name=OA.KHR_MATERIALS_TRANSMISSION}getMaterialType(A){const I=this.parser.json.materials[A];return!I.extensions||!I.extensions[this.name]?null:dg}extendMaterialParams(A,I){const g=this.parser,C=g.json.materials[A];if(!C.extensions||!C.extensions[this.name])return Promise.resolve();const Q=[],E=C.extensions[this.name];return E.transmissionFactor!==void 0&&(I.transmission=E.transmissionFactor),E.transmissionTexture!==void 0&&Q.push(g.assignTexture(I,"transmissionMap",E.transmissionTexture)),Promise.all(Q)}}class iG{constructor(A){this.parser=A,this.name=OA.KHR_MATERIALS_VOLUME}getMaterialType(A){const I=this.parser.json.materials[A];return!I.extensions||!I.extensions[this.name]?null:dg}extendMaterialParams(A,I){const g=this.parser,C=g.json.materials[A];if(!C.extensions||!C.extensions[this.name])return Promise.resolve();const Q=[],E=C.extensions[this.name];I.thickness=E.thicknessFactor!==void 0?E.thicknessFactor:0,E.thicknessTexture!==void 0&&Q.push(g.assignTexture(I,"thicknessMap",E.thicknessTexture)),I.attenuationDistance=E.attenuationDistance||1/0;const i=E.attenuationColor||[1,1,1];return I.attenuationColor=new MA().setRGB(i[0],i[1],i[2],FI),Promise.all(Q)}}class oG{constructor(A){this.parser=A,this.name=OA.KHR_MATERIALS_IOR}getMaterialType(A){const I=this.parser.json.materials[A];return!I.extensions||!I.extensions[this.name]?null:dg}extendMaterialParams(A,I){const g=this.parser.json.materials[A];if(!g.extensions||!g.extensions[this.name])return Promise.resolve();const C=g.extensions[this.name];return I.ior=C.ior!==void 0?C.ior:1.5,Promise.resolve()}}class eG{constructor(A){this.parser=A,this.name=OA.KHR_MATERIALS_SPECULAR}getMaterialType(A){const I=this.parser.json.materials[A];return!I.extensions||!I.extensions[this.name]?null:dg}extendMaterialParams(A,I){const g=this.parser,C=g.json.materials[A];if(!C.extensions||!C.extensions[this.name])return Promise.resolve();const Q=[],E=C.extensions[this.name];I.specularIntensity=E.specularFactor!==void 0?E.specularFactor:1,E.specularTexture!==void 0&&Q.push(g.assignTexture(I,"specularIntensityMap",E.specularTexture));const i=E.specularColorFactor||[1,1,1];return I.specularColor=new MA().setRGB(i[0],i[1],i[2],FI),E.specularColorTexture!==void 0&&Q.push(g.assignTexture(I,"specularColorMap",E.specularColorTexture,uI)),Promise.all(Q)}}class tG{constructor(A){this.parser=A,this.name=OA.EXT_MATERIALS_BUMP}getMaterialType(A){const I=this.parser.json.materials[A];return!I.extensions||!I.extensions[this.name]?null:dg}extendMaterialParams(A,I){const g=this.parser,C=g.json.materials[A];if(!C.extensions||!C.extensions[this.name])return Promise.resolve();const Q=[],E=C.extensions[this.name];return I.bumpScale=E.bumpFactor!==void 0?E.bumpFactor:1,E.bumpTexture!==void 0&&Q.push(g.assignTexture(I,"bumpMap",E.bumpTexture)),Promise.all(Q)}}class aG{constructor(A){this.parser=A,this.name=OA.KHR_MATERIALS_ANISOTROPY}getMaterialType(A){const I=this.parser.json.materials[A];return!I.extensions||!I.extensions[this.name]?null:dg}extendMaterialParams(A,I){const g=this.parser,C=g.json.materials[A];if(!C.extensions||!C.extensions[this.name])return Promise.resolve();const Q=[],E=C.extensions[this.name];return E.anisotropyStrength!==void 0&&(I.anisotropy=E.anisotropyStrength),E.anisotropyRotation!==void 0&&(I.anisotropyRotation=E.anisotropyRotation),E.anisotropyTexture!==void 0&&Q.push(g.assignTexture(I,"anisotropyMap",E.anisotropyTexture)),Promise.all(Q)}}class sG{constructor(A){this.parser=A,this.name=OA.KHR_TEXTURE_BASISU}loadTexture(A){const I=this.parser,g=I.json,C=g.textures[A];if(!C.extensions||!C.extensions[this.name])return null;const Q=C.extensions[this.name],E=I.options.ktx2Loader;if(!E){if(g.extensionsRequired&&g.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return I.loadTextureImage(A,Q.source,E)}}class DG{constructor(A){this.parser=A,this.name=OA.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(A){const I=this.name,g=this.parser,C=g.json,Q=C.textures[A];if(!Q.extensions||!Q.extensions[I])return null;const E=Q.extensions[I],i=C.images[E.source];let o=g.textureLoader;if(i.uri){const e=g.options.manager.getHandler(i.uri);e!==null&&(o=e)}return this.detectSupport().then(function(e){if(e)return g.loadTextureImage(A,E.source,o);if(C.extensionsRequired&&C.extensionsRequired.indexOf(I)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return g.loadTexture(A)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(A){const I=new Image;I.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",I.onload=I.onerror=function(){A(I.height===1)}})),this.isSupported}}class hG{constructor(A){this.parser=A,this.name=OA.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(A){const I=this.name,g=this.parser,C=g.json,Q=C.textures[A];if(!Q.extensions||!Q.extensions[I])return null;const E=Q.extensions[I],i=C.images[E.source];let o=g.textureLoader;if(i.uri){const e=g.options.manager.getHandler(i.uri);e!==null&&(o=e)}return this.detectSupport().then(function(e){if(e)return g.loadTextureImage(A,E.source,o);if(C.extensionsRequired&&C.extensionsRequired.indexOf(I)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return g.loadTexture(A)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(A){const I=new Image;I.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",I.onload=I.onerror=function(){A(I.height===1)}})),this.isSupported}}class rG{constructor(A){this.name=OA.EXT_MESHOPT_COMPRESSION,this.parser=A}loadBufferView(A){const I=this.parser.json,g=I.bufferViews[A];if(g.extensions&&g.extensions[this.name]){const C=g.extensions[this.name],Q=this.parser.getDependency("buffer",C.buffer),E=this.parser.options.meshoptDecoder;if(!E||!E.supported){if(I.extensionsRequired&&I.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return Q.then(function(i){const o=C.byteOffset||0,e=C.byteLength||0,t=C.count,a=C.byteStride,s=new Uint8Array(i,o,e);return E.decodeGltfBufferAsync?E.decodeGltfBufferAsync(t,a,s,C.mode,C.filter).then(function(h){return h.buffer}):E.ready.then(function(){const h=new ArrayBuffer(t*a);return E.decodeGltfBuffer(new Uint8Array(h),t,a,s,C.mode,C.filter),h})})}else return null}}class SG{constructor(A){this.name=OA.EXT_MESH_GPU_INSTANCING,this.parser=A}createNodeMesh(A){const I=this.parser.json,g=I.nodes[A];if(!g.extensions||!g.extensions[this.name]||g.mesh===void 0)return null;const C=I.meshes[g.mesh];for(const o of C.primitives)if(o.mode!==sg.TRIANGLES&&o.mode!==sg.TRIANGLE_STRIP&&o.mode!==sg.TRIANGLE_FAN&&o.mode!==void 0)return null;const Q=g.extensions[this.name].attributes,E=[],i={};for(const o in Q)E.push(this.parser.getDependency("accessor",Q[o]).then(e=>(i[o]=e,i[o])));return E.length<1?null:(E.push(this.parser.createNodeMesh(A)),Promise.all(E).then(o=>{const e=o.pop(),t=e.isGroup?e.children:[e],a=o[0].count,s=[];for(const h of t){const n=new uA,w=new L,r=new zI,S=new L(1,1,1),y=new pc(h.geometry,h.material,a);for(let G=0;G<a;G++)i.TRANSLATION&&w.fromBufferAttribute(i.TRANSLATION,G),i.ROTATION&&r.fromBufferAttribute(i.ROTATION,G),i.SCALE&&S.fromBufferAttribute(i.SCALE,G),y.setMatrixAt(G,n.compose(w,r,S));for(const G in i)if(G==="_COLOR_0"){const M=i[G];y.instanceColor=new ro(M.array,M.itemSize,M.normalized)}else G!=="TRANSLATION"&&G!=="ROTATION"&&G!=="SCALE"&&h.geometry.setAttribute(G,i[G]);oI.prototype.copy.call(y,h),this.parser.assignFinalMaterial(y),s.push(y)}return e.isGroup?(e.clear(),e.add(...s),e):s[0]}))}}const qs="glTF",nQ=12,Ys={JSON:1313821514,BIN:5130562};class nG{constructor(A){this.name=OA.KHR_BINARY_GLTF,this.content=null,this.body=null;const I=new DataView(A,0,nQ),g=new TextDecoder;if(this.header={magic:g.decode(new Uint8Array(A.slice(0,4))),version:I.getUint32(4,!0),length:I.getUint32(8,!0)},this.header.magic!==qs)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const C=this.header.length-nQ,Q=new DataView(A,nQ);let E=0;for(;E<C;){const i=Q.getUint32(E,!0);E+=4;const o=Q.getUint32(E,!0);if(E+=4,o===Ys.JSON){const e=new Uint8Array(A,nQ+E,i);this.content=g.decode(e)}else if(o===Ys.BIN){const e=nQ+E;this.body=A.slice(e,e+i)}E+=i}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class wG{constructor(A,I){if(!I)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=OA.KHR_DRACO_MESH_COMPRESSION,this.json=A,this.dracoLoader=I,this.dracoLoader.preload()}decodePrimitive(A,I){const g=this.json,C=this.dracoLoader,Q=A.extensions[this.name].bufferView,E=A.extensions[this.name].attributes,i={},o={},e={};for(const t in E){const a=re[t]||t.toLowerCase();i[a]=E[t]}for(const t in A.attributes){const a=re[t]||t.toLowerCase();if(E[t]!==void 0){const s=g.accessors[A.attributes[t]],h=FB[s.componentType];e[a]=h.name,o[a]=s.normalized===!0}}return I.getDependency("bufferView",Q).then(function(t){return new Promise(function(a,s){C.decodeDracoFile(t,function(h){for(const n in h.attributes){const w=h.attributes[n],r=o[n];r!==void 0&&(w.normalized=r)}a(h)},i,e,FI,s)})})}}class cG{constructor(){this.name=OA.KHR_TEXTURE_TRANSFORM}extendTexture(A,I){return(I.texCoord===void 0||I.texCoord===A.channel)&&I.offset===void 0&&I.rotation===void 0&&I.scale===void 0||(A=A.clone(),I.texCoord!==void 0&&(A.channel=I.texCoord),I.offset!==void 0&&A.offset.fromArray(I.offset),I.rotation!==void 0&&(A.rotation=I.rotation),I.scale!==void 0&&A.repeat.fromArray(I.scale),A.needsUpdate=!0),A}}class lG{constructor(){this.name=OA.KHR_MESH_QUANTIZATION}}class Ls extends PB{constructor(A,I,g,C){super(A,I,g,C)}copySampleValue_(A){const I=this.resultBuffer,g=this.sampleValues,C=this.valueSize,Q=A*C*3+C;for(let E=0;E!==C;E++)I[E]=g[Q+E];return I}interpolate_(A,I,g,C){const Q=this.resultBuffer,E=this.sampleValues,i=this.valueSize,o=i*2,e=i*3,t=C-I,a=(g-I)/t,s=a*a,h=s*a,n=A*e,w=n-e,r=-2*h+3*s,S=h-s,y=1-r,G=S-s+a;for(let M=0;M!==i;M++){const m=E[w+M+i],F=E[w+M+o]*t,N=E[n+M+i],H=E[n+M]*t;Q[M]=y*m+G*F+r*N+S*H}return Q}}const GG=new zI;class kG extends Ls{interpolate_(A,I,g,C){const Q=super.interpolate_(A,I,g,C);return GG.fromArray(Q).normalize().toArray(Q),Q}}const sg={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},FB={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},us={9728:_I,9729:LI,9984:Re,9985:kQ,9986:dB,9987:Jg},Hs={33071:Kg,33648:GQ,10497:ZC},he={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},re={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},wC={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},yG={CUBICSPLINE:void 0,LINEAR:LB,STEP:YB},Se={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function UG(B){return B.DefaultMaterial===void 0&&(B.DefaultMaterial=new rE({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:mg})),B.DefaultMaterial}function fC(B,A,I){for(const g in I.extensions)B[g]===void 0&&(A.userData.gltfExtensions=A.userData.gltfExtensions||{},A.userData.gltfExtensions[g]=I.extensions[g])}function AC(B,A){A.extras!==void 0&&(typeof A.extras=="object"?Object.assign(B.userData,A.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+A.extras))}function MG(B,A,I){let g=!1,C=!1,Q=!1;for(let e=0,t=A.length;e<t;e++){const a=A[e];if(a.POSITION!==void 0&&(g=!0),a.NORMAL!==void 0&&(C=!0),a.COLOR_0!==void 0&&(Q=!0),g&&C&&Q)break}if(!g&&!C&&!Q)return Promise.resolve(B);const E=[],i=[],o=[];for(let e=0,t=A.length;e<t;e++){const a=A[e];if(g){const s=a.POSITION!==void 0?I.getDependency("accessor",a.POSITION):B.attributes.position;E.push(s)}if(C){const s=a.NORMAL!==void 0?I.getDependency("accessor",a.NORMAL):B.attributes.normal;i.push(s)}if(Q){const s=a.COLOR_0!==void 0?I.getDependency("accessor",a.COLOR_0):B.attributes.color;o.push(s)}}return Promise.all([Promise.all(E),Promise.all(i),Promise.all(o)]).then(function(e){const t=e[0],a=e[1],s=e[2];return g&&(B.morphAttributes.position=t),C&&(B.morphAttributes.normal=a),Q&&(B.morphAttributes.color=s),B.morphTargetsRelative=!0,B})}function NG(B,A){if(B.updateMorphTargets(),A.weights!==void 0)for(let I=0,g=A.weights.length;I<g;I++)B.morphTargetInfluences[I]=A.weights[I];if(A.extras&&Array.isArray(A.extras.targetNames)){const I=A.extras.targetNames;if(B.morphTargetInfluences.length===I.length){B.morphTargetDictionary={};for(let g=0,C=I.length;g<C;g++)B.morphTargetDictionary[I[g]]=g}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function KG(B){let A;const I=B.extensions&&B.extensions[OA.KHR_DRACO_MESH_COMPRESSION];if(I?A="draco:"+I.bufferView+":"+I.indices+":"+ne(I.attributes):A=B.indices+":"+ne(B.attributes)+":"+B.mode,B.targets!==void 0)for(let g=0,C=B.targets.length;g<C;g++)A+=":"+ne(B.targets[g]);return A}function ne(B){let A="";const I=Object.keys(B).sort();for(let g=0,C=I.length;g<C;g++)A+=I[g]+":"+B[I[g]]+";";return A}function we(B){switch(B){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function JG(B){return B.search(/\.jpe?g($|\?)/i)>0||B.search(/^data\:image\/jpeg/)===0?"image/jpeg":B.search(/\.webp($|\?)/i)>0||B.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const FG=new uA;class RG{constructor(A={},I={}){this.json=A,this.extensions={},this.plugins={},this.options=I,this.cache=new zl,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let g=!1,C=-1,Q=!1,E=-1;if(typeof navigator<"u"){const i=navigator.userAgent;g=/^((?!chrome|android).)*safari/i.test(i)===!0;const o=i.match(/Version\/(\d+)/);C=g&&o?parseInt(o[1],10):-1,Q=i.indexOf("Firefox")>-1,E=Q?i.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||g&&C<17||Q&&E<98?this.textureLoader=new Zc(this.options.manager):this.textureLoader=new zc(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new jB(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(A){this.extensions=A}setPlugins(A){this.plugins=A}parse(A,I){const g=this,C=this.json,Q=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(E){return E._markDefs&&E._markDefs()}),Promise.all(this._invokeAll(function(E){return E.beforeRoot&&E.beforeRoot()})).then(function(){return Promise.all([g.getDependencies("scene"),g.getDependencies("animation"),g.getDependencies("camera")])}).then(function(E){const i={scene:E[0][C.scene||0],scenes:E[0],animations:E[1],cameras:E[2],asset:C.asset,parser:g,userData:{}};return fC(Q,i,C),AC(i,C),Promise.all(g._invokeAll(function(o){return o.afterRoot&&o.afterRoot(i)})).then(function(){for(const o of i.scenes)o.updateMatrixWorld();A(i)})}).catch(I)}_markDefs(){const A=this.json.nodes||[],I=this.json.skins||[],g=this.json.meshes||[];for(let C=0,Q=I.length;C<Q;C++){const E=I[C].joints;for(let i=0,o=E.length;i<o;i++)A[E[i]].isBone=!0}for(let C=0,Q=A.length;C<Q;C++){const E=A[C];E.mesh!==void 0&&(this._addNodeRef(this.meshCache,E.mesh),E.skin!==void 0&&(g[E.mesh].isSkinnedMesh=!0)),E.camera!==void 0&&this._addNodeRef(this.cameraCache,E.camera)}}_addNodeRef(A,I){I!==void 0&&(A.refs[I]===void 0&&(A.refs[I]=A.uses[I]=0),A.refs[I]++)}_getNodeRef(A,I,g){if(A.refs[I]<=1)return g;const C=g.clone(),Q=(E,i)=>{const o=this.associations.get(E);o!=null&&this.associations.set(i,o);for(const[e,t]of E.children.entries())Q(t,i.children[e])};return Q(g,C),C.name+="_instance_"+A.uses[I]++,C}_invokeOne(A){const I=Object.values(this.plugins);I.push(this);for(let g=0;g<I.length;g++){const C=A(I[g]);if(C)return C}return null}_invokeAll(A){const I=Object.values(this.plugins);I.unshift(this);const g=[];for(let C=0;C<I.length;C++){const Q=A(I[C]);Q&&g.push(Q)}return g}getDependency(A,I){const g=A+":"+I;let C=this.cache.get(g);if(!C){switch(A){case"scene":C=this.loadScene(I);break;case"node":C=this._invokeOne(function(Q){return Q.loadNode&&Q.loadNode(I)});break;case"mesh":C=this._invokeOne(function(Q){return Q.loadMesh&&Q.loadMesh(I)});break;case"accessor":C=this.loadAccessor(I);break;case"bufferView":C=this._invokeOne(function(Q){return Q.loadBufferView&&Q.loadBufferView(I)});break;case"buffer":C=this.loadBuffer(I);break;case"material":C=this._invokeOne(function(Q){return Q.loadMaterial&&Q.loadMaterial(I)});break;case"texture":C=this._invokeOne(function(Q){return Q.loadTexture&&Q.loadTexture(I)});break;case"skin":C=this.loadSkin(I);break;case"animation":C=this._invokeOne(function(Q){return Q.loadAnimation&&Q.loadAnimation(I)});break;case"camera":C=this.loadCamera(I);break;default:if(C=this._invokeOne(function(Q){return Q!=this&&Q.getDependency&&Q.getDependency(A,I)}),!C)throw new Error("Unknown type: "+A);break}this.cache.add(g,C)}return C}getDependencies(A){let I=this.cache.get(A);if(!I){const g=this,C=this.json[A+(A==="mesh"?"es":"s")]||[];I=Promise.all(C.map(function(Q,E){return g.getDependency(A,E)})),this.cache.add(A,I)}return I}loadBuffer(A){const I=this.json.buffers[A],g=this.fileLoader;if(I.type&&I.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+I.type+" buffer type is not supported.");if(I.uri===void 0&&A===0)return Promise.resolve(this.extensions[OA.KHR_BINARY_GLTF].body);const C=this.options;return new Promise(function(Q,E){g.load(XB.resolveURL(I.uri,C.path),Q,void 0,function(){E(new Error('THREE.GLTFLoader: Failed to load buffer "'+I.uri+'".'))})})}loadBufferView(A){const I=this.json.bufferViews[A];return this.getDependency("buffer",I.buffer).then(function(g){const C=I.byteLength||0,Q=I.byteOffset||0;return g.slice(Q,Q+C)})}loadAccessor(A){const I=this,g=this.json,C=this.json.accessors[A];if(C.bufferView===void 0&&C.sparse===void 0){const E=he[C.type],i=FB[C.componentType],o=C.normalized===!0,e=new i(C.count*E);return Promise.resolve(new RI(e,E,o))}const Q=[];return C.bufferView!==void 0?Q.push(this.getDependency("bufferView",C.bufferView)):Q.push(null),C.sparse!==void 0&&(Q.push(this.getDependency("bufferView",C.sparse.indices.bufferView)),Q.push(this.getDependency("bufferView",C.sparse.values.bufferView))),Promise.all(Q).then(function(E){const i=E[0],o=he[C.type],e=FB[C.componentType],t=e.BYTES_PER_ELEMENT,a=t*o,s=C.byteOffset||0,h=C.bufferView!==void 0?g.bufferViews[C.bufferView].byteStride:void 0,n=C.normalized===!0;let w,r;if(h&&h!==a){const S=Math.floor(s/h),y="InterleavedBuffer:"+C.bufferView+":"+C.componentType+":"+S+":"+C.count;let G=I.cache.get(y);G||(w=new e(i,S*h,C.count*h/t),G=new Nc(w,h/t),I.cache.add(y,G)),r=new to(G,o,s%h/t,n)}else i===null?w=new e(C.count*o):w=new e(i,s,C.count*o),r=new RI(w,o,n);if(C.sparse!==void 0){const S=he.SCALAR,y=FB[C.sparse.indices.componentType],G=C.sparse.indices.byteOffset||0,M=C.sparse.values.byteOffset||0,m=new y(E[1],G,C.sparse.count*S),F=new e(E[2],M,C.sparse.count*o);i!==null&&(r=new RI(r.array.slice(),r.itemSize,r.normalized)),r.normalized=!1;for(let N=0,H=m.length;N<H;N++){const P=m[N];if(r.setX(P,F[N*o]),o>=2&&r.setY(P,F[N*o+1]),o>=3&&r.setZ(P,F[N*o+2]),o>=4&&r.setW(P,F[N*o+3]),o>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}r.normalized=n}return r})}loadTexture(A){const I=this.json,g=this.options,C=I.textures[A].source,Q=I.images[C];let E=this.textureLoader;if(Q.uri){const i=g.manager.getHandler(Q.uri);i!==null&&(E=i)}return this.loadTextureImage(A,C,E)}loadTextureImage(A,I,g){const C=this,Q=this.json,E=Q.textures[A],i=Q.images[I],o=(i.uri||i.bufferView)+":"+E.sampler;if(this.textureCache[o])return this.textureCache[o];const e=this.loadImageSource(I,g).then(function(t){t.flipY=!1,t.name=E.name||i.name||"",t.name===""&&typeof i.uri=="string"&&i.uri.startsWith("data:image/")===!1&&(t.name=i.uri);const a=(Q.samplers||{})[E.sampler]||{};return t.magFilter=us[a.magFilter]||LI,t.minFilter=us[a.minFilter]||Jg,t.wrapS=Hs[a.wrapS]||ZC,t.wrapT=Hs[a.wrapT]||ZC,C.associations.set(t,{textures:A}),t}).catch(function(){return null});return this.textureCache[o]=e,e}loadImageSource(A,I){const g=this,C=this.json,Q=this.options;if(this.sourceCache[A]!==void 0)return this.sourceCache[A].then(a=>a.clone());const E=C.images[A],i=self.URL||self.webkitURL;let o=E.uri||"",e=!1;if(E.bufferView!==void 0)o=g.getDependency("bufferView",E.bufferView).then(function(a){e=!0;const s=new Blob([a],{type:E.mimeType});return o=i.createObjectURL(s),o});else if(E.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+A+" is missing URI and bufferView");const t=Promise.resolve(o).then(function(a){return new Promise(function(s,h){let n=s;I.isImageBitmapLoader===!0&&(n=function(w){const r=new HI(w);r.needsUpdate=!0,s(r)}),I.load(XB.resolveURL(a,Q.path),n,void 0,h)})}).then(function(a){return e===!0&&i.revokeObjectURL(o),AC(a,E),a.userData.mimeType=E.mimeType||JG(E.uri),a}).catch(function(a){throw console.error("THREE.GLTFLoader: Couldn't load texture",o),a});return this.sourceCache[A]=t,t}assignTexture(A,I,g,C){const Q=this;return this.getDependency("texture",g.index).then(function(E){if(!E)return null;if(g.texCoord!==void 0&&g.texCoord>0&&(E=E.clone(),E.channel=g.texCoord),Q.extensions[OA.KHR_TEXTURE_TRANSFORM]){const i=g.extensions!==void 0?g.extensions[OA.KHR_TEXTURE_TRANSFORM]:void 0;if(i){const o=Q.associations.get(E);E=Q.extensions[OA.KHR_TEXTURE_TRANSFORM].extendTexture(E,i),Q.associations.set(E,o)}}return C!==void 0&&(E.colorSpace=C),A[I]=E,E})}assignFinalMaterial(A){const I=A.geometry;let g=A.material;const C=I.attributes.tangent===void 0,Q=I.attributes.color!==void 0,E=I.attributes.normal===void 0;if(A.isPoints){const i="PointsMaterial:"+g.uuid;let o=this.cache.get(i);o||(o=new ia,Rg.prototype.copy.call(o,g),o.color.copy(g.color),o.map=g.map,o.sizeAttenuation=!1,this.cache.add(i,o)),g=o}else if(A.isLine){const i="LineBasicMaterial:"+g.uuid;let o=this.cache.get(i);o||(o=new oE,Rg.prototype.copy.call(o,g),o.color.copy(g.color),o.map=g.map,this.cache.add(i,o)),g=o}if(C||Q||E){let i="ClonedMaterial:"+g.uuid+":";C&&(i+="derivative-tangents:"),Q&&(i+="vertex-colors:"),E&&(i+="flat-shading:");let o=this.cache.get(i);o||(o=g.clone(),Q&&(o.vertexColors=!0),E&&(o.flatShading=!0),C&&(o.normalScale&&(o.normalScale.y*=-1),o.clearcoatNormalScale&&(o.clearcoatNormalScale.y*=-1)),this.cache.add(i,o),this.associations.set(o,this.associations.get(g))),g=o}A.material=g}getMaterialType(){return rE}loadMaterial(A){const I=this,g=this.json,C=this.extensions,Q=g.materials[A];let E;const i={},o=Q.extensions||{},e=[];if(o[OA.KHR_MATERIALS_UNLIT]){const a=C[OA.KHR_MATERIALS_UNLIT];E=a.getMaterialType(),e.push(a.extendParams(i,Q,I))}else{const a=Q.pbrMetallicRoughness||{};if(i.color=new MA(1,1,1),i.opacity=1,Array.isArray(a.baseColorFactor)){const s=a.baseColorFactor;i.color.setRGB(s[0],s[1],s[2],FI),i.opacity=s[3]}a.baseColorTexture!==void 0&&e.push(I.assignTexture(i,"map",a.baseColorTexture,uI)),i.metalness=a.metallicFactor!==void 0?a.metallicFactor:1,i.roughness=a.roughnessFactor!==void 0?a.roughnessFactor:1,a.metallicRoughnessTexture!==void 0&&(e.push(I.assignTexture(i,"metalnessMap",a.metallicRoughnessTexture)),e.push(I.assignTexture(i,"roughnessMap",a.metallicRoughnessTexture))),E=this._invokeOne(function(s){return s.getMaterialType&&s.getMaterialType(A)}),e.push(Promise.all(this._invokeAll(function(s){return s.extendMaterialParams&&s.extendMaterialParams(A,i)})))}Q.doubleSided===!0&&(i.side=Ng);const t=Q.alphaMode||Se.OPAQUE;if(t===Se.BLEND?(i.transparent=!0,i.depthWrite=!1):(i.transparent=!1,t===Se.MASK&&(i.alphaTest=Q.alphaCutoff!==void 0?Q.alphaCutoff:.5)),Q.normalTexture!==void 0&&E!==KC&&(e.push(I.assignTexture(i,"normalMap",Q.normalTexture)),i.normalScale=new vA(1,1),Q.normalTexture.scale!==void 0)){const a=Q.normalTexture.scale;i.normalScale.set(a,a)}if(Q.occlusionTexture!==void 0&&E!==KC&&(e.push(I.assignTexture(i,"aoMap",Q.occlusionTexture)),Q.occlusionTexture.strength!==void 0&&(i.aoMapIntensity=Q.occlusionTexture.strength)),Q.emissiveFactor!==void 0&&E!==KC){const a=Q.emissiveFactor;i.emissive=new MA().setRGB(a[0],a[1],a[2],FI)}return Q.emissiveTexture!==void 0&&E!==KC&&e.push(I.assignTexture(i,"emissiveMap",Q.emissiveTexture,uI)),Promise.all(e).then(function(){const a=new E(i);return Q.name&&(a.name=Q.name),AC(a,Q),I.associations.set(a,{materials:A}),Q.extensions&&fC(C,a,Q),a})}createUniqueName(A){const I=gI.sanitizeNodeName(A||"");return I in this.nodeNamesUsed?I+"_"+ ++this.nodeNamesUsed[I]:(this.nodeNamesUsed[I]=0,I)}loadGeometries(A){const I=this,g=this.extensions,C=this.primitiveCache;function Q(i){return g[OA.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(i,I).then(function(o){return ms(o,i,I)})}const E=[];for(let i=0,o=A.length;i<o;i++){const e=A[i],t=KG(e),a=C[t];if(a)E.push(a.promise);else{let s;e.extensions&&e.extensions[OA.KHR_DRACO_MESH_COMPRESSION]?s=Q(e):s=ms(new Bg,e,I),C[t]={primitive:e,promise:s},E.push(s)}}return Promise.all(E)}loadMesh(A){const I=this,g=this.json,C=this.extensions,Q=g.meshes[A],E=Q.primitives,i=[];for(let o=0,e=E.length;o<e;o++){const t=E[o].material===void 0?UG(this.cache):this.getDependency("material",E[o].material);i.push(t)}return i.push(I.loadGeometries(E)),Promise.all(i).then(function(o){const e=o.slice(0,o.length-1),t=o[o.length-1],a=[];for(let h=0,n=t.length;h<n;h++){const w=t[h],r=E[h];let S;const y=e[h];if(r.mode===sg.TRIANGLES||r.mode===sg.TRIANGLE_STRIP||r.mode===sg.TRIANGLE_FAN||r.mode===void 0)S=Q.isSkinnedMesh===!0?new Jc(w,y):new $I(w,y),S.isSkinnedMesh===!0&&S.normalizeSkinWeights(),r.mode===sg.TRIANGLE_STRIP?S.geometry=ds(S.geometry,Te):r.mode===sg.TRIANGLE_FAN&&(S.geometry=ds(S.geometry,Ki));else if(r.mode===sg.LINES)S=new wo(w,y);else if(r.mode===sg.LINE_STRIP)S=new no(w,y);else if(r.mode===sg.LINE_LOOP)S=new dc(w,y);else if(r.mode===sg.POINTS)S=new qc(w,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+r.mode);Object.keys(S.geometry.morphAttributes).length>0&&NG(S,Q),S.name=I.createUniqueName(Q.name||"mesh_"+A),AC(S,Q),r.extensions&&fC(C,S,r),I.assignFinalMaterial(S),a.push(S)}for(let h=0,n=a.length;h<n;h++)I.associations.set(a[h],{meshes:A,primitives:h});if(a.length===1)return Q.extensions&&fC(C,a[0],Q),a[0];const s=new DC;Q.extensions&&fC(C,s,Q),I.associations.set(s,{meshes:A});for(let h=0,n=a.length;h<n;h++)s.add(a[h]);return s})}loadCamera(A){let I;const g=this.json.cameras[A],C=g[g.type];if(!C){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return g.type==="perspective"?I=new WI(Eh.radToDeg(C.yfov),C.aspectRatio||1,C.znear||1,C.zfar||2e6):g.type==="orthographic"&&(I=new Ao(-C.xmag,C.xmag,C.ymag,-C.ymag,C.znear,C.zfar)),g.name&&(I.name=this.createUniqueName(g.name)),AC(I,g),Promise.resolve(I)}loadSkin(A){const I=this.json.skins[A],g=[];for(let C=0,Q=I.joints.length;C<Q;C++)g.push(this._loadNodeShallow(I.joints[C]));return I.inverseBindMatrices!==void 0?g.push(this.getDependency("accessor",I.inverseBindMatrices)):g.push(null),Promise.all(g).then(function(C){const Q=C.pop(),E=C,i=[],o=[];for(let e=0,t=E.length;e<t;e++){const a=E[e];if(a){i.push(a);const s=new uA;Q!==null&&s.fromArray(Q.array,e*16),o.push(s)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',I.joints[e])}return new ho(i,o)})}loadAnimation(A){const I=this.json,g=this,C=I.animations[A],Q=C.name?C.name:"animation_"+A,E=[],i=[],o=[],e=[],t=[];for(let a=0,s=C.channels.length;a<s;a++){const h=C.channels[a],n=C.samplers[h.sampler],w=h.target,r=w.node,S=C.parameters!==void 0?C.parameters[n.input]:n.input,y=C.parameters!==void 0?C.parameters[n.output]:n.output;w.node!==void 0&&(E.push(this.getDependency("node",r)),i.push(this.getDependency("accessor",S)),o.push(this.getDependency("accessor",y)),e.push(n),t.push(w))}return Promise.all([Promise.all(E),Promise.all(i),Promise.all(o),Promise.all(e),Promise.all(t)]).then(function(a){const s=a[0],h=a[1],n=a[2],w=a[3],r=a[4],S=[];for(let y=0,G=s.length;y<G;y++){const M=s[y],m=h[y],F=n[y],N=w[y],H=r[y];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();const P=g._createAnimationTracks(M,m,F,N,H);if(P)for(let c=0;c<P.length;c++)S.push(P[c])}return new lo(Q,void 0,S)})}createNodeMesh(A){const I=this.json,g=this,C=I.nodes[A];return C.mesh===void 0?null:g.getDependency("mesh",C.mesh).then(function(Q){const E=g._getNodeRef(g.meshCache,C.mesh,Q);return C.weights!==void 0&&E.traverse(function(i){if(i.isMesh)for(let o=0,e=C.weights.length;o<e;o++)i.morphTargetInfluences[o]=C.weights[o]}),E})}loadNode(A){const I=this.json,g=this,C=I.nodes[A],Q=g._loadNodeShallow(A),E=[],i=C.children||[];for(let e=0,t=i.length;e<t;e++)E.push(g.getDependency("node",i[e]));const o=C.skin===void 0?Promise.resolve(null):g.getDependency("skin",C.skin);return Promise.all([Q,Promise.all(E),o]).then(function(e){const t=e[0],a=e[1],s=e[2];s!==null&&t.traverse(function(h){h.isSkinnedMesh&&h.bind(s,FG)});for(let h=0,n=a.length;h<n;h++)t.add(a[h]);return t})}_loadNodeShallow(A){const I=this.json,g=this.extensions,C=this;if(this.nodeCache[A]!==void 0)return this.nodeCache[A];const Q=I.nodes[A],E=Q.name?C.createUniqueName(Q.name):"",i=[],o=C._invokeOne(function(e){return e.createNodeMesh&&e.createNodeMesh(A)});return o&&i.push(o),Q.camera!==void 0&&i.push(C.getDependency("camera",Q.camera).then(function(e){return C._getNodeRef(C.cameraCache,Q.camera,e)})),C._invokeAll(function(e){return e.createNodeAttachment&&e.createNodeAttachment(A)}).forEach(function(e){i.push(e)}),this.nodeCache[A]=Promise.all(i).then(function(e){let t;if(Q.isBone===!0?t=new $t:e.length>1?t=new DC:e.length===1?t=e[0]:t=new oI,t!==e[0])for(let a=0,s=e.length;a<s;a++)t.add(e[a]);if(Q.name&&(t.userData.name=Q.name,t.name=E),AC(t,Q),Q.extensions&&fC(g,t,Q),Q.matrix!==void 0){const a=new uA;a.fromArray(Q.matrix),t.applyMatrix4(a)}else Q.translation!==void 0&&t.position.fromArray(Q.translation),Q.rotation!==void 0&&t.quaternion.fromArray(Q.rotation),Q.scale!==void 0&&t.scale.fromArray(Q.scale);return C.associations.has(t)||C.associations.set(t,{}),C.associations.get(t).nodes=A,t}),this.nodeCache[A]}loadScene(A){const I=this.extensions,g=this.json.scenes[A],C=this,Q=new DC;g.name&&(Q.name=C.createUniqueName(g.name)),AC(Q,g),g.extensions&&fC(I,Q,g);const E=g.nodes||[],i=[];for(let o=0,e=E.length;o<e;o++)i.push(C.getDependency("node",E[o]));return Promise.all(i).then(function(o){for(let t=0,a=o.length;t<a;t++)Q.add(o[t]);const e=t=>{const a=new Map;for(const[s,h]of C.associations)(s instanceof Rg||s instanceof HI)&&a.set(s,h);return t.traverse(s=>{const h=C.associations.get(s);h!=null&&a.set(s,h)}),a};return C.associations=e(Q),Q})}_createAnimationTracks(A,I,g,C,Q){const E=[],i=A.name?A.name:A.uuid,o=[];wC[Q.path]===wC.weights?A.traverse(function(s){s.morphTargetInfluences&&o.push(s.name?s.name:s.uuid)}):o.push(i);let e;switch(wC[Q.path]){case wC.weights:e=lB;break;case wC.rotation:e=GB;break;case wC.position:case wC.scale:e=yB;break;default:switch(g.itemSize){case 1:e=lB;break;case 2:case 3:default:e=yB;break}break}const t=C.interpolation!==void 0?yG[C.interpolation]:LB,a=this._getArrayFromAccessor(g);for(let s=0,h=o.length;s<h;s++){const n=new e(o[s]+"."+wC[Q.path],I.array,a,t);C.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(n),E.push(n)}return E}_getArrayFromAccessor(A){let I=A.array;if(A.normalized){const g=we(I.constructor),C=new Float32Array(I.length);for(let Q=0,E=I.length;Q<E;Q++)C[Q]=I[Q]*g;I=C}return I}_createCubicSplineTrackInterpolant(A){A.createInterpolant=function(I){const g=this instanceof GB?kG:Ls;return new g(this.times,this.values,this.getValueSize()/3,I)},A.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function pG(B,A,I){const g=A.attributes,C=new bg;if(g.POSITION!==void 0){const i=I.json.accessors[g.POSITION],o=i.min,e=i.max;if(o!==void 0&&e!==void 0){if(C.set(new L(o[0],o[1],o[2]),new L(e[0],e[1],e[2])),i.normalized){const t=we(FB[i.componentType]);C.min.multiplyScalar(t),C.max.multiplyScalar(t)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const Q=A.targets;if(Q!==void 0){const i=new L,o=new L;for(let e=0,t=Q.length;e<t;e++){const a=Q[e];if(a.POSITION!==void 0){const s=I.json.accessors[a.POSITION],h=s.min,n=s.max;if(h!==void 0&&n!==void 0){if(o.setX(Math.max(Math.abs(h[0]),Math.abs(n[0]))),o.setY(Math.max(Math.abs(h[1]),Math.abs(n[1]))),o.setZ(Math.max(Math.abs(h[2]),Math.abs(n[2]))),s.normalized){const w=we(FB[s.componentType]);o.multiplyScalar(w)}i.max(o)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}C.expandByVector(i)}B.boundingBox=C;const E=new Fg;C.getCenter(E.center),E.radius=C.min.distanceTo(C.max)/2,B.boundingSphere=E}function ms(B,A,I){const g=A.attributes,C=[];function Q(E,i){return I.getDependency("accessor",E).then(function(o){B.setAttribute(i,o)})}for(const E in g){const i=re[E]||E.toLowerCase();i in B.attributes||C.push(Q(g[E],i))}if(A.indices!==void 0&&!B.index){const E=I.getDependency("accessor",A.indices).then(function(i){B.setIndex(i)});C.push(E)}return jA.workingColorSpace!==FI&&"COLOR_0"in g&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${jA.workingColorSpace}" not supported.`),AC(B,A),pG(B,A,I),Promise.all(C).then(function(){return A.targets!==void 0?MG(B,A.targets,I):B})}class dG extends DC{constructor(){super();FA(this,"glTFLoader");FA(this,"animationMixer");const I=new jl;I.setDecoderPath("jsm/libs/draco/"),this.glTFLoader=new Xl,this.glTFLoader.setDRACOLoader(I)}async init(I){const[g,C,Q,E]=await Promise.all([this.glTFLoader.loadAsync("models/ninja$@standing_compressed.glb"),this.glTFLoader.loadAsync("models/ninja@walking.glb"),this.glTFLoader.loadAsync("models/ninja@running.glb"),this.glTFLoader.loadAsync("models/ninja@jumping.glb")]);g.scene.traverse(i=>{i.isMesh&&(i.castShadow=!0)}),E.animations[0].tracks=E.animations[0].tracks.filter(i=>!i.name.endsWith(".position")),this.animationMixer=new sl(g.scene),I.stand=this.animationMixer.clipAction(g.animations[0]),I.walk=this.animationMixer.clipAction(C.animations[0]),I.run=this.animationMixer.clipAction(Q.animations[0]),I.jump=this.animationMixer.clipAction(E.animations[0]),I.stand.play(),this.add(g.scene)}update(I){var g;(g=this.animationMixer)==null||g.update(I)}}class qG{constructor(){FA(this,"keyMap",{});FA(this,"handleKey",A=>{this.keyMap[A.code]=A.type==="keydown",console.log("event.code",A.code)});document.addEventListener("keydown",this.handleKey),document.addEventListener("keyup",this.handleKey)}}class YG{constructor(A,I,g){FA(this,"camera");FA(this,"pivot",new oI);FA(this,"yaw",new oI);FA(this,"pitch",new oI);FA(this,"onDocumentMouseMove",A=>{this.yaw.rotation.y-=A.movementX*.002*2;const I=this.pitch.rotation.x-A.movementY*.002;I>-1&&I<1&&(this.pitch.rotation.x=I)});FA(this,"onDocumentMouseWheel",A=>{A.preventDefault();const I=this.camera.position.z+A.deltaY*.005;I>=.5&&I<=10&&(this.camera.position.z=I)});this.camera=I,this.yaw.position.y=.75,g.domElement.addEventListener("mousemove",this.onDocumentMouseMove),g.domElement.addEventListener("wheel",this.onDocumentMouseWheel),A.add(this.pivot),this.pivot.add(this.yaw),this.yaw.add(this.pitch),this.pitch.add(I)}}class LG{constructor(A,I,g,C,Q,E){FA(this,"scene");FA(this,"camera");FA(this,"renderer");FA(this,"world");FA(this,"gui");FA(this,"characterBody");FA(this,"characterModel");FA(this,"animationActions",{});FA(this,"activeAnimationAction");FA(this,"vector",new L);FA(this,"inputVelocity",new L);FA(this,"euler",new eg);FA(this,"quaternion",new zI);FA(this,"followTarget",new oI);FA(this,"grounded",!0);FA(this,"rotationMatrix",new uA);FA(this,"targetQuaternion",new zI);FA(this,"followCam");FA(this,"keyboard");FA(this,"speed",0);FA(this,"wait",!1);FA(this,"position");this.gui=E,this.scene=A,this.camera=I,this.renderer=g,this.world=C,this.keyboard=new qG,this.followCam=new YG(this.scene,I,g),A.add(this.followTarget),this.position=Q,this.createCharacter(this.position)}createCharacter(A){var g,C;this.characterBody=(g=this.world)==null?void 0:g.createRigidBody(se.RigidBodyDesc.dynamic().setTranslation(...A).enabledRotations(!1,!1,!1).setLinearDamping(4).setCanSleep(!1));const I=se.ColliderDesc.capsule(.7,.15).setTranslation(0,.855,0).setMass(1).setFriction(0).setActiveEvents(tQ.COLLISION_EVENTS);(C=this.world)==null||C.createCollider(I,this.characterBody)}async init(){this.characterModel=new dG,await this.characterModel.init(this.animationActions),this.characterModel.position.y=0,this.activeAnimationAction=this.animationActions.stand,this.scene.add(this.characterModel)}updateAnimation(A){var I,g;if(!this.wait){let C=!1;this.keyboard.keyMap.Space||(I=this.keyboard.keyMap)!=null&&I.test?(C=!0,this.setAction(this.animationActions.jump),this.wait=!0,setTimeout(()=>this.wait=!1,1e3)):!C&&this.keyboard.keyMap.ShiftLeft&&(this.keyboard.keyMap.KeyW||this.keyboard.keyMap.KeyS||this.keyboard.keyMap.KeyA||this.keyboard.keyMap.KeyD)?(C=!0,this.setAction(this.animationActions.run)):(!C&&this.keyboard.keyMap.KeyW||this.keyboard.keyMap.KeyS||this.keyboard.keyMap.KeyA||this.keyboard.keyMap.KeyD)&&(C=!0,this.setAction(this.animationActions.walk)),!C&&this.setAction(this.animationActions.stand)}(g=this.characterModel)==null||g.update(A)}setAction(A){var I;if(A!==this.activeAnimationAction)switch(console.log("action",A),(I=this.activeAnimationAction)==null||I.fadeOut(.1),this.activeAnimationAction=A,console.log("action",A),this.activeAnimationAction.reset().fadeIn(.1).play(),A){case this.animationActions.walk:this.speed=7;break;case this.animationActions.run:case this.animationActions.jump:this.speed=20;break;case this.animationActions.stand:this.speed=0;break}}setGrounded(){var A;(A=this.characterBody)==null||A.setLinearDamping(4),this.grounded=!0,setTimeout(()=>this.wait=!1,250)}playerRestart(){var A,I;(A=this.characterBody)==null||A.setLinvel(new L(...this.position),!0),(I=this.characterBody)==null||I.setTranslation(new L(...this.position),!0)}update(A){var I,g,C,Q,E,i,o,e;this.inputVelocity.set(0,0,0),this.grounded&&(this.keyboard.keyMap.KeyW&&(this.inputVelocity.z=-1),this.keyboard.keyMap.KeyS&&(this.inputVelocity.z=1),this.keyboard.keyMap.KeyA&&(this.inputVelocity.x=-1),this.keyboard.keyMap.KeyD&&(this.inputVelocity.x=1),this.inputVelocity.setLength(A*this.speed),!this.wait&&this.keyboard.keyMap.Space&&((I=this.characterBody)==null||I.setLinearDamping(.05),this.keyboard.keyMap.ShiftLeft?this.inputVelocity.multiplyScalar(2):this.inputVelocity.multiplyScalar(1),this.inputVelocity.y=5,this.grounded=!1)),this.euler.y=this.followCam.yaw.rotation.y,this.quaternion.setFromEuler(this.euler),this.inputVelocity.applyQuaternion(this.quaternion),(g=this.characterBody)==null||g.applyImpulse(this.inputVelocity,!0),this.characterBody&&this.characterBody.translation().y<-10&&this.playerRestart(),this.characterBody&&this.followTarget.position.copy(this.characterBody.translation()),this.followTarget.getWorldPosition(this.vector),this.followCam.pivot.position.lerp(this.vector,A*10),(C=this.characterModel)==null||C.position.lerp(this.vector,A*20),this.rotationMatrix.lookAt(this.followTarget.position,(Q=this.characterModel)==null?void 0:Q.position,(E=this.characterModel)==null?void 0:E.up),this.targetQuaternion.setFromRotationMatrix(this.rotationMatrix),((i=this.characterModel)==null?void 0:i.position.distanceTo(this.followTarget.position))>1e-4&&!((o=this.characterModel)!=null&&o.quaternion.equals(this.targetQuaternion))&&(this.targetQuaternion.z=0,this.targetQuaternion.x=0,this.targetQuaternion.normalize(),(e=this.characterModel)==null||e.quaternion.rotateTowards(this.targetQuaternion,A*20)),this.updateAnimation(A)}}class IC{constructor(A,I,g,C,Q=[0,0,0]){const E=new $I(new aB(...g),new rE);E.castShadow=!0,E.receiveShadow=!0,A.add(E);const i=I.createRigidBody(yg.fixed().setTranslation(...C).setRotation(new zI().setFromEuler(new eg(...Q)))),o=kI.cuboid(g[0]/2,g[1]/2,g[2]/2);I.createCollider(o,i),E.position.copy(i.translation()),E.quaternion.copy(i.rotation())}}class uG{constructor(A,I,g,C){FA(this,"scene");FA(this,"camera");FA(this,"renderer");FA(this,"gui");FA(this,"world");FA(this,"rapierDebugRenderer");FA(this,"eventQueue");FA(this,"player");this.scene=A,this.camera=I,this.renderer=g,this.gui=C}async init(){await se.init();const A=new L(0,-9.81,0);this.world=new SQ(A),this.eventQueue=new Fs(!0),this.rapierDebugRenderer=new Pl(this.scene,this.world),this.rapierDebugRenderer.enabled=!1,this.gui.add(this.rapierDebugRenderer,"enabled").name("Rapier Debug Renderer"),new IC(this.scene,this.world,[10,.2,10],[0,-.5,0]),new IC(this.scene,this.world,[2,.1,4],[-2,0,10]),new IC(this.scene,this.world,[4,.1,2],[4,0,10]),new IC(this.scene,this.world,[2,.1,2],[8,1,11.5]),new IC(this.scene,this.world,[.3,.1,10],[8,1,1]),new IC(this.scene,this.world,[2,.1,2],[8,2,-8]),new IC(this.scene,this.world,[4,.1,2],[3,3,-8]),new IC(this.scene,this.world,[4,.1,2],[-3,4,-8]),new IC(this.scene,this.world,[5,.2,5],[-3,4,-8]);const I=[0,-1,0];this.player=new LG(this.scene,this.camera,this.renderer,this.world,I,this.gui),await this.player.init();const g=new Wl(this.scene,this.gui);await g.init(),g.light.target=this.player.followTarget}update(A){var I,g,C,Q;(I=this.world)==null||I.step(this.eventQueue),(g=this.eventQueue)==null||g.drainCollisionEvents((E,i,o)=>{var e;o&&((e=this.player)==null||e.setGrounded())}),(C=this.player)==null||C.update(A),(Q=this.rapierDebugRenderer)==null||Q.update()}}const fs=new Mc,wQ=new WI(50,window.innerWidth/window.innerHeight,.1,1e3);wQ.position.set(0,1,5);const RB=new Uc;RB.setSize(window.innerWidth,window.innerHeight),RB.shadowMap.enabled=!0,document.body.appendChild(RB.domElement),window.addEventListener("resize",()=>{wQ.aspect=window.innerWidth/window.innerHeight,wQ.updateProjectionMatrix(),RB.setSize(window.innerWidth,window.innerHeight)});const Ts=new zB;document.body.appendChild(Ts.dom);const HG=new yl,xs=new uG(fs,wQ,RB,HG);await xs.init();const mG=new $c;let bs;function Os(){requestAnimationFrame(Os),bs=mG.getDelta(),xs.update(bs),RB.render(fs,wQ),Ts.update()}Os()})();