try{var dv_win = window._dv_win || window.parent._dv_win; dv_win['dvCallback_1548369409821471']($dv,window,'0e1ee16bbf8046a4a4c663b7c4072fc3','tps10259.doubleverify.com');}catch(e){try{var image=window.document.createElement('img');image.src=window.location.protocol+'//tps30.doubleverify.com/visit.jpg?ctx=818052&cmp=1619415&dvtagver=6.1.src&dvp_cbError='+encodeURIComponent(e.message)}catch(e){}}$dv.pubSub.subscribe('ImpressionServed', $uid, 'RTN_LatencyTemp', function () {try {var beforeVisitCall = '';var templateStartTime = parent.getCurrentTime();var dv_win = parent.window._dv_win;if (dv_win && dv_win.t2tTimestampData) {if (dv_win.t2tTimestampData.length >= 2) {beforeVisitCall = dv_win.t2tTimestampData[1].beforeVisitCall;}}var latency = 0;if (beforeVisitCall != '' && templateStartTime != '') {latency = templateStartTime - beforeVisitCall;}if(latency > 1000 && latency < 90000) {$dv.registerEventCall($uid, { dvp_ltncy: latency });}} catch (e) {};});$dv.pubSub.subscribe('IABViewableImpression', '0e1ee16bbf8046a4a4c663b7c4072fc3', 'RTN_IABViewableImpression', function(){ var tagServiceUrl = decodeURIComponent('https://ad.doubleclick.net/activity;src=1295336;type=cs;cat=Viewa0;u14=10621604;u15=991238;u16=[DVP_ADID];ord=1?'); tagServiceUrl = $dv.resolveMacros(tagServiceUrl, $dv.tags['0e1ee16bbf8046a4a4c663b7c4072fc3']);  $dv.domUtilities.addImage(tagServiceUrl, $dv.tags['0e1ee16bbf8046a4a4c663b7c4072fc3'].tagElement.parentElement,1);});$dv.pubSub.subscribe('IABViewableImpression', '0e1ee16bbf8046a4a4c663b7c4072fc3', 'RTN_IABViewableImpression', function(){ var tagServiceUrl = decodeURIComponent('https://ad.doubleclick.net/ddm/activity/src=1295336;type=custom;cat=viewa2;u1=[TOTALPAGETIME];u2=[BUCKET_0];u3=[BUCKET_1_9];u4=[BUCKET_10_19];u5=[BUCKET_20_29];u6=[BUCKET_30_39];u7=[BUCKET_40_49];u8=[BUCKET_50_59];u9=[BUCKET_60_69];u10=[BUCKET_70_79];u11=[BUCKET_80_89];u12=[BUCKET_90_99];u13=[BUCKET_100];u14=10621604;u15=991238;u16=[DVP_ADID];u17=;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1? '); tagServiceUrl = $dv.resolveMacros(tagServiceUrl, $dv.tags['0e1ee16bbf8046a4a4c663b7c4072fc3']);  $dv.domUtilities.addImage(tagServiceUrl, $dv.tags['0e1ee16bbf8046a4a4c663b7c4072fc3'].tagElement.parentElement,1);});$dv.pubSub.subscribe ('ImpressionServed', $uid, 'SendAdEntitiesForMA', function() {var tag = $dv.tags[$uid];var targetWin = tag.t2tIframeWindow;if(!targetWin){var t2tIframeId = tag.t2tIframeId;if(t2tIframeId){var iFrame = window.parent.getElementById(t2tIframeId);if(iFrame){targetWin = iFrame.contentWindow;}}}if(targetWin){var dateNow = 0;if(Date.now){dateNow = Date.now();} else {dateNow = +new Date();}var message = {action : 'notifyMultipleAdsAdEntityInformationReady',adEntityInformation : {comparisonItems : [{name : 'cmp', value : 10257001, bitFlag : 1, maxTimeMS : 5000, eventToFire : 'CampaignMultipleAd'},{name : 'clcd', value : 1828362, bitFlag : 2, maxTimeMS : 5000},{name : 'plmt', value : 14738072, bitFlag : 4, maxTimeMS : 5000},{name : 'mp', value : 2623, bitFlag : 8, maxTimeMS : 5000},{name : 'adv', value : 817161, bitFlag : 16, maxTimeMS : 5000, eventToFire : 'LobMultipleAd'},{name : 'cmpMP', value : 3077100318361, bitFlag : 32, maxTimeMS : 5000}],dvTagCreatedTS : tag.t2tIframeCreationTime,visitJSPostMessageTS : dateNow}};var stringifyFunc = null;if(window.JSON){stringifyFunc = window.JSON.stringify;} else {if(window.parent && window.parent.JSON){stringifyFunc = window.parent.JSON.stringify;}}if(!stringifyFunc){return;}var msgString = stringifyFunc(message);targetWin.postMessage(msgString, '*');setTimeout(function(){targetWin.postMessage(msgString, '*');}, 100);setTimeout(function(){targetWin.postMessage(msgString, '*');}, 500);}});    	$dv.pubSub.subscribe ('ImpressionServed', $uid, 'SendAdEntitiesForBSBAConsolidation', function() {
            'use strict';
            var stringifyFunc = null;
			if(window.JSON){
				stringifyFunc = window.JSON.stringify;
			} else {
				if(window.parent && window.parent.JSON){
					stringifyFunc = window.parent.JSON.stringify;
				}
			}
			if(!stringifyFunc){
				return;
			}
            var targetWin;
            var tag = $dv.tags[$uid];
            var bsmsg = {
                action : 'notifyBrandShieldAdEntityInformation',
                bsAdEntityInformation : {
                    comparisonItems : [{name : 'cmp', value : 10257001},{name : 'plmt', value : 14738072}], verboseReporting : false  }
            };
            var bsstring = stringifyFunc(bsmsg);

            var findAndSend = function(){
                if(!targetWin) {
                    if (tag) {
                        targetWin = tag.t2tIframeWindow;
                        if (!targetWin) {
                            var t2tIframeId = tag.t2tIframeId;
                            //get t2t window and post the AdEntities to it.
                            if (t2tIframeId) {
                                var iFrame = window.parent.getElementById(t2tIframeId);
                                if (iFrame) {
                                    targetWin = iFrame.contentWindow;
                                }
                            }
                        }
                    }
                }

                if(targetWin){
                    targetWin.postMessage(bsstring, '*');
                }
            };

            findAndSend();
            setTimeout(findAndSend, 100);
            setTimeout(findAndSend, 500);
        });var dvObj = $dv;function np764531(g,i){function d(){function d(){function f(b,a){b=(i?"dvp_":"")+b;e[b]=a}var e={},a=function(b){for(var a=[],c=0;c<b.length;c+=2)a.push(String.fromCharCode(parseInt(b.charAt(c)+b.charAt(c+1),32)));return a.join("")},h=window[a("3e313m3937313k3f3i")];h&&(a=h[a("3g3c313k363f3i3d")],f("pltfrm",a));(function(){var a=e;e={};dvObj.registerEventCall(g,a,2E3,true)})()}try{d()}catch(f){}}try{dvObj.pubSub.subscribe(dvObj==window.$dv?"ImpressionServed":"BeforeDecisionRender",g,"np764531",d)}catch(f){}}
;np764531("0e1ee16bbf8046a4a4c663b7c4072fc3",false);$dv.tags[$uid].dc = $dv.tags[$uid].dc || [];$dv.tags[$uid].dc.push({"rq":{"av":98,"ic":true,"fc":true,"adc":1000,"mla":false,"ldav":30},"rp":{"mt":"ismms","pt":"ispmxpms"}});$dv.pubSub.subscribe('ImpressionServed', $uid, 'OperaVendorChecker', function(){var eventData = {};var mraidObject = $dv.getMraid();var execMrSaf = function(func) {		var rv;		try {			if (typeof func === 'function') {rv = func.call(mraidObject)}		}catch (e) {			eventData = {'dvp_operr': 1}						}		return rv;};try{	if(mraidObject)	{		var vendor = execMrSaf(mraidObject.getVendor);		var vendor_version = execMrSaf(mraidObject.getVendorVersion);		if(vendor != null && vendor_version != null)		{			eventData = {				dvp_sspv: vendor,				dvp_sspvv: vendor_version			};		}	}}catch (e){	eventData = {		dvp_operr: 2	};}$dv.registerEventCall($uid, eventData);});var dvObj=$dv;var impId='0e1ee16bbf8046a4a4c663b7c4072fc3';var htmlRate=10;var runTag=-1;var lab=0;var sources=0;var adid='-7033064310861822271';var urlTypeId=1024;var ddt=1;var date='20190124';var prefix='ch201901';dvObj.pubSub.subscribe('ImpressionServed',impId,'AttributeCollection',function(){try{try{!function(){var e=window,t=0;try{for(;e.parent&&e!=e.parent&&e.parent.document&&(e=e.parent,!(t++>10)););}catch(e){}var r=0;function n(e,t){t&&(r=(r|1<<e)>>>0)}var o=e.document;n(0,e==window.top),n(1,""==o.title),n(2,e.innerWidth>e.screen.width);try{n(3,o.querySelector('script[src*="/coinhive"]')||e.Miner||e.CoinHive||function(){try{return e.localStorage.getItem("coinhive")}catch(e){return!1}}()),n(4,o.querySelector('script[src*="videoadtest.com"]')),n(5,e.CustomWLAdServer&&e.CustomWLAdServer.passbackCallbacks),n(6,e.navigator&&e.navigator.geolocation&&e.navigator.geolocation.getCurrentPosition_&&e.navigator.geolocation.watchPosition_&&e.navigator.geolocation.clearWatch_),n(7,o.querySelector('script[src*="algovid.com"]')),n(8,e.ddcQueryStr&&e.handleFileLoad&&e.handleComplete),n(9,e.location.href.match(/^http:\/\/[^\/]*\/[a-zA-Z-_\/]{40,}\.php$/)),n(10,-1!=o.title.indexOf("</>"));for(var a=o.getElementsByTagName("script"),i=0;i<a.length;i++)-1!=a[i].src.indexOf("172.93.96.99")&&n(11,!0),-1!=a[i].src.indexOf("104.243.38.59")&&n(12,!0);if(n(13,I=o.getElementById("adloaderframe")),n(14,function(){try{var e=o.getElementById("adloaderframe").previousElementSibling,t="VIDEO"==e.tagName&&"none"==e.style.display&&"DIV"==e.previousElementSibling.tagName?e.previousElementSibling.getAttribute("style"):"";return/width: \d+px; height: \d+px; background-color: black;/.test(t)}catch(e){return!1}}()),I){var c=I.previousElementSibling;for(i=0;i<5;i++)n(15,function(){try{var e='<video muted="muted"></video>'==c.outerHTML&&"DIV"==c.previousElementSibling.tagName?c.previousElementSibling.getAttribute("style"):"";return/width: \d+px; height: \d+px; background-color: black;/.test(e)}catch(e){return!1}}()),c=c.previousElementSibling}if(n(16,o.querySelector('iframe[id="adloaderframe"][style*="display: none"]')),n(17,function(){try{return null!=o.querySelector('#header[class="kk"]')&&"rgb(0, 255, 255)"==getComputedStyle(document.body).backgroundColor}catch(e){}}()),n(18,function(){try{return/<!--(.|\n)*checklength(.|\n)*function timer(.|\n)*aol3\.php(.|\n)*--\>/.test(document.documentElement.outerHTML)}catch(e){}}()),n(20,function(){try{return null!=o.querySelector('div[id="kt_player"][hiegth]')}catch(e){}}()),n(21,function(){try{return null!=o.querySelector('div[id="kt_player"][width]')}catch(e){}}()),e.top==e&&e.document.getElementsByClassName("asu").length>0)for(var d=e.document.styleSheets,l=0;l<d.length;l++)try{for(var u=e.document.styleSheets[l].cssRules,s=0;s<u.length;s++)if("div.kk"==u[s].selectorText||"div.asu"==u[s].selectorText){n(19,!0);break}}catch(e){}n(22,function(){try{return null!=o.querySelector('script[src*="./newplayer.js"]')}catch(e){}}())}catch(e){}var p=Object.prototype.toString,m=Function.prototype.toString,h=/^\[object .+?Constructor\]$/,v=RegExp("^"+String(p).replace(/[.*+?^${}()|[\]\/\\]/g,"\\$&").replace(/toString|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function g(e){var t=typeof e;return"function"==t?v.test(m.call(e)):e&&"object"==t&&h.test(p.call(e))||!1}var f=window,y=0,w=!1,b=!1;try{for(;f.parent&&f!=f.parent&&f.parent.document&&(b|=!g(e.document.hasFocus),f=f.parent,w|=g(window.document.hasFocus)!=g(f.document.hasFocus),!(y++>10)););}catch(e){}n(26,e==window.top&&!g(f.document.hasFocus)),n(27,b),n(28,w);var _={dvp_acv:r,dvp_acifd:t};new Date;if(e==window.top){_.dvp_mref=(refm=o.referrer.match(/https?:\/\/(www\.)?([^\/]*)/),null!=refm&&3==refm.length?refm[2]:"");var S=o.head;S&&(S.children&&(_.dvp_acc=S.children.length),S.outerHTML&&(_.dvp_acl=S.outerHTML.length)),e.external&&(_.dvp_acwe=Object.keys(e.external).length);var E=e.innerWidth>e.innerHeight,k=e.screen[E?"height":"width"];if(o.body.offsetWidth>k&&(_.dvp_vpos=o.body.offsetWidth+"-"+k+"-"+(E?1:0)),navigator&&navigator.mediaDevices&&"function"==typeof navigator.mediaDevices.enumerateDevices){var x=[];navigator.mediaDevices.enumerateDevices().then(function(e){e.forEach(function(e){x.push(e.kind.toLowerCase().indexOf("audio")>-1?1:e.kind.toLowerCase().indexOf("video")>-1?2:0)})}).then(function(){dvObj.registerEventCall(impId,{dvp_dvcs:x.join(",")})}).catch(function(e){dvObj.registerEventCall(impId,{dvp_dvcs:encodeURIComponent(e.message)})})}else _.dvp_dvcs="na"}if(dvObj.registerEventCall(impId,_),(new Date).getTime()%100<htmlRate&&(1==lab||1==runTag&&0==(2&urlTypeId)&&(0==sources||(sources&r)>0))){function C(t,n){var o=new XMLHttpRequest;o.open("PUT","https://d23xwq4myz19mk.cloudfront.net/htmldata/"+prefix+"/"+date+"/"+e.location.hostname+"/"+r+"_"+adid+"_"+impId+"_"+n+".html",!0),o.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),o.setRequestHeader("x-amz-acl","public-read"),o.send(t.document.documentElement.outerHTML)}var I;C(e,"top"),e!=window&&C(window,"iframe_tag"),e!=window.parent&&C(window.parent,"iframe_tag_parent"),e!=window.parent.parent&&C(window.parent.parent,"iframe_tag_parent_parent"),(I=o.getElementById("adloaderframe"))&&C(I.contentWindow,"iframe_top_child")}}()}catch(e){dvObj.registerEventCall(impId,{dvp_ace:String(e).substring(0,150)})}}catch(e){}});$dv.CommonData.deviceType = 1;$dv.CommonData.detectedDeliveryType = 1;$dv.tags[$uid].deviceType = 1;$dv.tags[$uid].detectedDeliveryType = 1;try{$dv.pubSub.publish('ImpressionServed', $uid);$dv.pubSub.publish('ImpressionServed', $frmId);}catch(e){}