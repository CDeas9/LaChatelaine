(window._vfP=window._vfP||[]).push([[83],{1126:function(a,t,e){a.exports=e.p+"assets/vf-loader-white.487241e2778b011a12327adecdc9ef98.gif"},1127:function(a,t,e){a.exports=e.p+"assets/vf-loader-white-large.7c4c0283a9d380ab1bb4b3f5a190be5a.gif"},1128:function(a,t,e){a.exports=e.p+"assets/vf-loader-gray.b71de4ce3c1d4b2acc8a119e258d96db.gif"},1129:function(a,t,e){a.exports=e.p+"assets/vf-loader-blue.de892768550d3227175c4fd9c146e34c.gif"},1130:function(a,t,e){a.exports=e.p+"assets/vf-loader-gray-blue.ff3683e227980842a8f7c6eed20ede8f.gif"},1152:function(a,t,e){"use strict";e.r(t);e(74);var i=e(373),n=e.n(i);n.a.fn.serializeObject=function(){var a={},t=this.serializeArray();return n.a.each(t,function(){a[this.name]?(a[this.name].push||(a[this.name]=[a[this.name]]),a[this.name].push(this.value||"")):a[this.name]=this.value||""}),a},Function.prototype.bind||(Function.prototype.bind=function(a){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var t=Array.prototype.slice.call(arguments,1),e=this,i=function(){},n=function(){return e.apply(this instanceof i&&a?this:a,t.concat(Array.prototype.slice.call(arguments)))};return i.prototype=this.prototype,n.prototype=new i,n});e(12);for(var o=e(1126),r=e.n(o),s=e(1127),l=e.n(s),f=e(1128),c=e.n(f),d=e(1129),h=e.n(d),p=e(1130),v=e.n(p),u=!1,g=["animationName","webkitAnimationName","mozAnimationName","MSAnimationName","oanimationName"],m=document.createElement("div"),b={white:'<img src="'.concat(r.a,'" alt="loading">'),whitelarge:'<img src="'.concat(l.a,'" alt="loading">'),gray:'<img src="'.concat(c.a,'" alt="loading">'),blue:'<img src="'.concat(h.a,'" alt="loading">'),bluegray:'<img src="'.concat(v.a,'" alt="loading">')},y=0;y<g.length;y++)if(void 0!==m.style[g[y]]){u=!0;break}var w=[];n.a.fn.loader=function(a,t){return 0===this.length?this:(t=t||{},"show"===a?(e=n()("<div>").addClass("vf-loader"),"large"===t.loaderSize&&e.addClass("vf-loader-large"),t.block&&e.addClass("vf-loader-block"),t.gifType||(t.gifType="white"),t.position||(t.position="left"),t.inside?this.html(e):"right"===t.position?(e.addClass("vf-loader-right"),this.after(e)):this.before(e),e.siblings(".vf-loader")[0]&&this.siblings(".vf-loader").remove(),this.siblings(".vf-loader-error")[0]&&this.siblings(".vf-loader-error").each(function(){n()(this).tipsy("remove").remove()}),this.parents(".vf-comment-actions, .vf-flag-container")[0]&&this.parents(".vf-comment-actions, .vf-flag-container").removeClass("vf-force-focus"),function(a,t){u?n()(a).html('<span class="vf-l1"></span><span class="vf-l2"></span><span class="vf-l3"></span>').children().addClass("vf-loading"):n.a.each(b,function(e,i){e===t.gifType&&n()(a).html(i)})}(e,t),n()(this)[0].attributes["data-loader"]=e):"hide"===a?(e=n()(this)[0].attributes["data-loader"])&&(e.remove(),n()(this)[0].attributes["data-loader"]=null):"error"===a&&(n.a.fn.loader.call(this,"hide"),e=n()("<div class='vf-loader-error'>"),this.parents(".vf-comment-actions, .vf-flag-container")[0]&&this.parents(".vf-comment-actions, .vf-flag-container").addClass("vf-force-focus"),"right"===t.position?(e.addClass("vf-loader-right-error"),this.after(e)):this.before(e),w.push(this[0]),function(a){a.html("&#xe602;")}(e),n.a.data(this[0],"loader",e)),e);var e},n.a.fn.loader.hideErrors=function(){for(var a=0;a<w.length;a++)n()(w[a]).loader("hide");return w.length=0,this};var C=e(375);e.d(t,"vfCore",function(){return x});var x=C.a}}]);