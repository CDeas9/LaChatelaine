(function(){var d="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},f="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,g=function(a,b){if(b){var c=f;a=a.split(".");for(var e=0;e<a.length-1;e++){var u=a[e];u in c||(c[u]={});c=c[u]}a=a[a.length-1];e=c[a];b=b(e);b!=e&&null!=b&&d(c,a,{configurable:!0,writable:!0,value:b})}};
g("Array.from",function(a){return a?a:function(a,c,e){c=null!=c?c:function(a){return a};var b=[],k="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];if("function"==typeof k){a=k.call(a);for(var l=0;!(k=a.next()).done;)b.push(c.call(e,k.value,l++))}else for(k=a.length,l=0;l<k;l++)b.push(c.call(e,a[l],l));return b}});var h=this,m=/^[\w+/_-]+[=]{0,2}$/,n=null;var p;a:{var q=h.navigator;if(q){var r=q.userAgent;if(r){p=r;break a}}p=""};var v=function(){this.b="";this.f=t},t={};var w=function(a,b){if(!aa()){var c=Math.random();if(c<b)return c=ba(),a[Math.floor(c*a.length)]}return null},ba=function(){if(!h.crypto)return Math.random();try{var a=new Uint32Array(1);h.crypto.getRandomValues(a);return a[0]/65536/65536}catch(b){return Math.random()}},aa=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){return-1!=p.indexOf("Google Web Preview")||1E-4>Math.random()});var ca=function(a,b){try{for(var c=null;c!=a;c=a,a=a.parent)switch(a.location.protocol){case "https:":return!0;case "file:":return!!b;case "http:":return!1}}catch(e){}return!0}(h)?"https:":"http:";var x={h:1,g:4},y={c:"40004006",a:"40004007"};function da(){return{1:.5,4:.005}}function ea(){var a=z,b=typeof a;if(("object"!=b||null==a)&&"function"!=b)return!1;for(var c in x)if(b=a[x[c]],"number"!=typeof b||0>b||1<b)return!1;return!0};function fa(){var a=h.dcmads;return null!=a.eids?a.eids:h==h.top&&"srcdoc"in h.document.createElement("iframe")?(a=w([y.c,y.a],a.expts[4]))?"4|"+a:"":""};try{h.dcmads=h.dcmads||{};h.dcmads.startTime=(new Date).getTime();var ha=h.dcmads,A=h.dcmads.version,B={loader:120};if(A)if(B.experiment=A.experiment,45==A.number||"p"==A.number)B.number=45;else if(46==A.number||"c"==A.number)B.number=46;if(!B.number){var C=w([45,46],.01);B.experiment=!!C;B.number=C||45}ha.version=B;var ia=h.dcmads,D,z=h.dcmads.expts,E;E=void 0===E?da:E;D=ea()?z:E();ia.expts=D;h.dcmads.eids=fa();var ja="4|"+y.a,F,G=h.dcmads.version,H=G.number,I="";G.experiment&&45==H&&(I="?rxp=45x46");
var ka="impl_v"+H+".js"+I,J=h.document,K=J.currentScript||Array.from(J.getElementsByTagName("script")).pop();F=(0==(K&&K.src||"").indexOf("http:")?"http:":"https:")+"//www.googletagservices.com/dcm/"+ka;if(h.dcmads.eids==ja){var L=h.document,M=L.createElement("script"),N=new v;N.b=F;M.src=N instanceof v&&N.constructor===v&&N.f===t?N.b:"type_error:TrustedResourceUrl";var O;if(null===n)a:{var P=h.document,Q=P.querySelector&&P.querySelector("script[nonce]");if(Q){var R=Q.nonce||Q.getAttribute("nonce");
if(R&&m.test(R)){n=R;break a}}n=""}(O=n)&&M.setAttribute("nonce",O);var S=L.getElementsByTagName("script")[0];S&&S.parentNode&&S.parentNode.insertBefore(M,S)}else h.document.write('<script src="'+F+'">\x3c/script>')}catch(a){if(.01>Math.random()){var T="";try{var U,V=a.toString();a.name&&-1==V.indexOf(a.name)&&(V+=": "+a.name);a.message&&-1==V.indexOf(a.message)&&(V+=": "+a.message);if(a.stack){var W=a.stack,X=V;try{-1==W.indexOf(X)&&(W=X+"\n"+W);for(var Y;W!=Y;)Y=W,W=W.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,
"$1");V=W.replace(/\n */g,"\n")}catch(b){V=X}}U=V;U=U.substring(0,1024);T=encodeURIComponent(U)}catch(b){T="extr"}var Z=h.dcmads.eids;h.document.write('<img style="display:none" src="'+(ca+"//pagead2.googlesyndication.com/pagead/gen_204?id="+("dcmads-err"+("&ver=120&context=dcm.load"+(Z?"&eids="+Z:"")+"&msg="+T)))+'"></img>')}};}).call(this);