self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.7.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[7],{3583:function(e,t,n){window,e.exports=function(e){function t(t){for(var n,o,i=t[0],a=t[1],u=0,c=[];u<i.length;u++)o=i[u],r[o]&&c.push(r[o][0]),r[o]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(s&&s(t);c.length;)c.shift()()}var n={},r={0:0};function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise(function(t,o){n=r[e]=[t,o]});t.push(n[2]=i);var a,u=document.getElementsByTagName("head")[0],s=document.createElement("script");s.charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.src=function(e){return o.p+""+({1:"vendors~aria-webjs-sdk"}[e]||e)+"_"+{1:"2c2485272112800b952d"}[e]+".js"}(e),0!==s.src.indexOf(window.location.origin+"/")&&(s.crossOrigin="anonymous"),a=function(t){s.onerror=s.onload=null,clearTimeout(c);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+o+": "+i+")");a.type=o,a.request=i,n[1](a)}r[e]=void 0}};var c=setTimeout(function(){a({type:"timeout",target:s})},12e4);s.onerror=s.onload=a,u.appendChild(s)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="https://lpcres.delve.office.com/lpc/versionless/",o.oe=function(e){throw e};var i=window.webpackJsonpLivePersonaCardBootstrapper=window.webpackJsonpLivePersonaCardBootstrapper||[],a=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var s=a;return o(o.s=0)}([function(e,t,n){"use strict";n.r(t);var r,o=function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function u(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(a,u)}s((r=r.apply(e,t||[])).next())})},i=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},a=function(){function e(e){this.bootstrapperConfig=e,this.loggers=new Map}return e.getOrCreate=function(t){return r||(r=new e(t)),r},e.prototype.logEventAsync=function(e,t){return o(this,void 0,void 0,function(){return i(this,function(n){switch(n.label){case 0:return n.trys.push([0,3,,4]),[4,this.getLoggerAsync(t)];case 1:return n.sent().logEvent(e),[4,this.getLogManagerAsync()];case 2:return n.sent().flush(this.noOp),[3,4];case 3:return n.sent(),[3,4];case 4:return[2]}})})},e.prototype.updateContextWithLokiDataAsync=function(e,t){return o(this,void 0,void 0,function(){var n;return i(this,function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,this.getLoggerAsync(t)];case 1:return(n=r.sent()).setContext("LokiUrl",e.LokiUrl),n.setContext("tenantAadObjectId",e.TenantAadObjectId),n.setContext("userAadObjectId",e.UserAadObjectId),n.setContext("userPuid",e.UserPuid),[3,3];case 2:throw r.sent(),new Error("Live Persona Card ERROR: Failed to update Aria's context");case 3:return[2]}})})},e.prototype.getLoggerAsync=function(e){return o(this,void 0,void 0,function(){var t,n,r;return i(this,function(o){switch(o.label){case 0:return(t=this.loggers.get(e))?[3,4]:[4,this.getLogManagerAsync()];case 1:return n=o.sent(),r=void 0,"Blackforest"!==this.bootstrapperConfig.complianceEnvironment?[3,3]:[4,this.getCollectorUrlGermanyAsync()];case 2:r=o.sent(),o.label=3;case 3:(t=n.initialize(e,{collectorUri:r}))||(t=n.getLogger(e)),this.loggers.set(e,t),t.setContext("culture",this.bootstrapperConfig.culture),t.setContext("region",this.bootstrapperConfig.region),t.setContext("clientType",this.bootstrapperConfig.clientType),t.setContext("clientContextType",this.bootstrapperConfig.clientContextType),t.setContext("clientCorrelationId",this.bootstrapperConfig.clientCorrelationId),t.setContext("bootstrapperVersion","1.20190227.10.0"),o.label=4;case 4:return[2,t]}})})},e.prototype.getLogManagerAsync=function(){return o(this,void 0,void 0,function(){return i(this,function(e){switch(e.label){case 0:return[4,n.e(1).then(n.t.bind(null,30,7))];case 1:return[2,e.sent().AWTLogManager]}})})},e.prototype.getCollectorUrlGermanyAsync=function(){return o(this,void 0,void 0,function(){return i(this,function(e){switch(e.label){case 0:return[4,n.e(1).then(n.t.bind(null,30,7))];case 1:return[2,e.sent().AWT_COLLECTOR_URL_GERMANY]}})})},e.prototype.noOp=function(){},e}(),u=function(e,t,n,r,o){this.name=e,this.message=t,this.rootCorrelationId=n,this.statusCode=r,this.numberOfRetries=o};function s(e,t){try{sessionStorage&&sessionStorage.setItem&&sessionStorage.setItem(e,t)}catch(e){}}var c="LokiAuthToken";function l(e,t){return new Promise(function(n,r){e?(s(c,e),n(e)):t(function(e,t){e?(s(c,e),n(e)):r(new u("GetAuthTokenError","Auth token is undefined",t))},function(e,t){r(new u("GetAuthTokenError",e,t))})})}var f="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";function d(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var t=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(window.location.search);return null===t?"":window.decodeURIComponent(t[1].replace(/\+/g," "))}var p=function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function u(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(a,u)}s((r=r.apply(e,t||[])).next())})},h=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},g="https://{0}.loki.delve.office.com/api/v1/configuration/{1}/{2}",v="https://loki.delve.office.de/api/v1/configuration/{0}/{1}",m="https://loki.delve-gcc.office.com/api/v1/configuration/{0}/{1}",y="https://loki.delve.office.com/api/v1/configuration/{0}/{1}",w=6e4,k="LivePersonaCardVersionOverride",b="LivePersonaCardCultureOverride",T="MidgardVersion",C="MidgardBranch",x=2,A=0;function O(e,t){return p(this,void 0,void 0,function(){var n,r;return h(this,function(o){switch(o.label){case 0:return o.trys.push([0,2,,8]),[4,function(e,t){return new Promise(function(n,r){var o=new XMLHttpRequest,i=function(e){var t=d(b),n=t||e.culture;return"ppe"===e.region||"df"===e.region||"msit"===e.region?g.replace("{0}",e.region).replace("{1}",e.clientType).replace("{2}",n):"Blackforest"===e.complianceEnvironment?v.replace("{0}",e.clientType).replace("{1}",n):"GccModerate"===e.complianceEnvironment?m.replace("{0}",e.clientType).replace("{1}",n):y.replace("{0}",e.clientType).replace("{1}",n)}(t);o.open("GET",i,!0),o.setRequestHeader("authToken",e),o.setRequestHeader("Accept","application/json");var a=f.replace(/[xy]/g,function(e){var t;if(window.crypto){var n=new Uint8Array(1);window.crypto.getRandomValues(n),t=n[0]}else t=Math.floor(16*Math.random());return("x"===e?t%16:t%4+8).toString(16)});o.setRequestHeader("X-RootCorrelationId",a),o.setRequestHeader("X-CorrelationId",a),o.setRequestHeader("X-ClientCorrelationId",t.clientCorrelationId),o.setRequestHeader("X-ClientType",t.clientType);var s=d(T)||d(k);s&&o.setRequestHeader(k,s);var c=d(C);c&&o.setRequestHeader(C,c),o.addEventListener("load",function(){if(200===o.status)try{var e=JSON.parse(o.response);e.RootCorrelationId=a,e.LokiVersion=o.getResponseHeader("x-serverversion")||"",n(e)}catch(e){r(new u("GetLokiConfigError","Failed to parse initialization config.",a))}else r(new u("GetLokiConfigError","Couldn't retrieve initialization config. Status code is "+o.status,a,o.status))}),o.addEventListener("error",function(){r(new u("GetLokiConfigError","Couldn't retrieve initialization config, request failed to complete.",a))}),o.addEventListener("timeout",function(){r(new u("GetLokiConfigError","Loki config request timed out after "+w+" ms.",a))}),o.timeout=w,o.send()})}(e,t)];case 1:return n=o.sent(),[3,8];case 2:return(r=o.sent()).statusCode&&401===r.statusCode?[4,l(void 0,t.getAuthToken)]:[3,4];case 3:e=o.sent(),o.label=4;case 4:return A<x?(A++,[4,O(e,t)]):[3,6];case 5:return n=o.sent(),[3,7];case 6:throw r.numberOfRetries=A,r;case 7:return[3,8];case 8:return[2,n]}})})}var L=function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function u(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(a,u)}s((r=r.apply(e,t||[])).next())})},E=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},S=2,P=0;function I(e){return L(this,void 0,void 0,function(){var t;return E(this,function(n){switch(n.label){case 0:return n.trys.push([0,2,,6]),[4,function(e){return new Promise(function(t,n){var r=document.createElement("script");r.type="text/javascript",r.crossOrigin="anonymous",r.src=e,r.addEventListener("load",function(){t()}),r.addEventListener("error",function(){n(new u("LoadScriptError","Unexpected error while loading script on page."))}),document.body.appendChild(r)})}(e)];case 1:return n.sent(),[3,6];case 2:return t=n.sent(),P<S?(P++,[4,I(e)]):[3,4];case 3:return n.sent(),[3,5];case 4:throw t.numberOfRetries=P,t;case 5:return[3,6];case 6:return[2]}})})}var F="livepersonacard_full",_="livepersonacard_global",R="livepersonacardstrings",j="officefeed_feed",M="officefeedstrings";function U(e,t){return new Promise(function(n,r){setTimeout(function(){try{window.LPC||r(new u("StartLivePersonaCardError","window.LPC is undefined.")),window.LivePersonaCardStrings&&window.LivePersonaCardStrings.strings||r(new u("StartLivePersonaCardError","window.LivePersonaCardStrings is undefined."));var o=function(e,t){return{refreshAuthToken:function(e){return function(t){e.getAuthToken(function(e,n){t(e,"",n)},function(e,n){t("",e,n)})}}(t),logToExternalApplication:t.logMessage,contextType:t.clientContextType,strings:window.LivePersonaCardStrings.strings,source:t.clientType,consumerCorrelationId:t.clientCorrelationId,activeFlights:e.Flights,isDebug:!1,culture:t.culture,dataCallbacks:t.dataCallbacks,actionCallbacks:t.actionCallbacks,dataUpdateBroadcaster:t.dataUpdateBroadcaster,privateDataCallbacks:t.privateDataCallbacks,options:t.options?t.options:{isLinkedInIntegrationEnabled:!1,hideDocumentFilter:!1},lokiUrl:e.LokiUrl,lokiVersion:e.LokiVersion,tenantAadObjectId:e.TenantAadObjectId,userAadObjectId:e.UserAadObjectId,userPuid:e.UserPuid,ecsConfigIds:e.EcsConfigIds,ecsETag:e.EcsEtag,loggedInUserUpn:e.Upn,complianceEnvironment:t.complianceEnvironment,userDisplayName:e.UserDisplayName}}(e,t);window.LPC.start(o),n()}catch(e){r(new u("StartLivePersonaCardError",e.name+" "+e.message))}},0)})}var D,G=function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function u(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(a,u)}s((r=r.apply(e,t||[])).next())})},B=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};function q(e,t){return G(this,void 0,void 0,function(){var n;return B(this,function(r){switch(r.label){case 0:return[4,new Promise(function(e){return window.setTimeout(e,0)})];case 1:r.sent();try{if(!window.OfficeFeed)throw new u("StartOfficeFeedError","window.OfficeFeed is undefined.");if(!window.OfficeFeedStrings||!window.OfficeFeedStrings.strings)throw new u("StartOfficeFeedError","window.OfficeFeedStrings is undefined.");return n=function(e,t){return{accountUpn:e.Upn,getLokiToken:function(e){return function(t){return new Promise(function(t,n){e.getAuthToken(function(e,n){t(e)},function(e,t){n("Error getting auth token: "+e+" (authRequestCorrelationId: "+t+")")})})}}(t),options:t.options,hostAppActions:t.hostAppActions,strings:window.OfficeFeedStrings.strings}}(e,t),[2,window.OfficeFeed.start(n)]}catch(e){throw new u("StartOfficeFeedError",e.name+" "+e.message)}return[2]}})})}!function(e){e.getAuthToken="GetAuthTokenDuration",e.getAuthTokenFromStart="GetAuthTokenFromStartDuration",e.getLokiConfig="GetLokiConfigDuration",e.getLokiConfigFromStart="GetLokiConfigFromStartDuration",e.getLpcBundles="GetLpcBundlesDuration",e.getLpcBundlesFromStart="GetLpcBundlesFromStartDuration",e.startLpc="StartLpcDuration",e.startLpcFromStart="StartLpcFromStartDuration",e.getOfficeFeedBundles="GetOfficeFeedBundlesFromStartDuration"}(D||(D={}));var N=function(){function e(){this.start=this.getCurrentTime(),this.timings={}}return e.prototype.measureFromStart=function(e){this.timings[e]=Math.round(this.getCurrentTime()-this.start)},e.prototype.startCustomTiming=function(e){try{window.performance.mark(e+"-start")}catch(e){}},e.prototype.endCustomTiming=function(e){try{window.performance.mark(e+"-end"),window.performance.measure(e,e+"-start",e+"-end");var t=window.performance.getEntriesByName(e)[0];this.timings[e]=Math.round(t.duration)}catch(e){}},e.prototype.getAllTimings=function(){var e=this;try{var t=window.performance.getEntriesByType("resource");t&&t.forEach(function(t){if(t&&t.name){var n=t.name.toLowerCase(),r=!1;-1!==n.indexOf("authtoken/loki")?(n="AuthRequestDuration",r=!0):-1!==n.indexOf("service.svc?action=getclientaccesstoken&ep=1&app=mail")?(n="AuthRequestDuration",r=!0):-1!==n.indexOf("/lpc/versionless/livepersonacard_")?(n="LpcBundleRequestDuration",r=!0):-1!==n.indexOf("/lpc/versionless/livepersonacardstrings")?(n="LpcStringsRequestDuration",r=!0):-1!==n.indexOf("/api/v1/configuration/")&&(n="InitConfigRequestDuration",r=!0),r&&(e.timings[n]=Math.round(t.duration))}})}catch(e){}return this.timings},e.prototype.getCurrentTime=function(){return window.performance&&"function"==typeof window.performance.now?performance.now():Date.now()},e}();function V(e){return void 0===e||"string"!=typeof e||""===e||null===e}function z(e){return void 0===e||"function"!=typeof e}var H=["msit","df","ppe"],W=["Prod","Blackforest","GccModerate"];function J(e){var t="";if(e){var n=[];V(e.culture)&&n.push("culture"),V(e.clientType)&&n.push("clientType"),V(e.clientContextType)&&n.push("clientContextType"),V(e.clientCorrelationId)&&n.push("clientCorrelationId"),z(e.logMessage)&&n.push("logMessage"),z(e.getAuthToken)&&n.push("getAuthToken"),n.length>0&&(t="Invalid required parameter(s): "+n.join(", ")+". Check the values and types you're passing. "),e.region&&-1===H.indexOf(e.region.toLowerCase().trim())&&(t+="Invalid region value. Allowed values are: empty string for production environments, and "+H.join(", ")+" for pre-production environments. "),-1===W.indexOf(e.complianceEnvironment)&&(t+="Environment is missing or wrong. Allowed values are: "+W.join(", ")+". We currently don't support other Sovereign Clouds.")}else t="Config must be defined.";if(t)throw new u("ValidateBootstrapperConfigError",t)}n.d(t,"initializeLivePersonaCardAsync",function(){return ne}),n.d(t,"initializeOfficeFeedAsync",function(){return oe}),n.d(t,"fetchLokiConfigAsync",function(){return ie});var X,$,K=function(){return(K=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},Y=function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function u(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(a,u)}s((r=r.apply(e,t||[])).next())})},Z=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},Q=!1,ee=3e5,te="e5ad760145754ffc9704e67c800087f2-dc72ff20-3e8a-401a-b9a8-ec72e4dd3e22-7257";function ne(e){return Y(this,void 0,void 0,function(){var t,n,r=this;return Z(this,function(o){return!Q&&X?[2,X]:(t=new N,n=a.getOrCreate(e),Q=!1,(X=new Promise(function(o,i){return Y(r,void 0,void 0,function(){var r,a,u,s,c;return Z(this,function(f){switch(f.label){case 0:return f.trys.push([0,9,,10]),J(e),t.startCustomTiming(D.getAuthToken),[4,l(e.authToken,e.getAuthToken)];case 1:return r=f.sent(),t.endCustomTiming(D.getAuthToken),t.measureFromStart(D.getAuthTokenFromStart),t.startCustomTiming(D.getLokiConfig),[4,O(r,e)];case 2:return a=f.sent(),t.endCustomTiming(D.getLokiConfig),t.measureFromStart(D.getLokiConfigFromStart),t.startCustomTiming(D.getLpcBundles),e.scriptsInsertedByHostPromise?[4,e.scriptsInsertedByHostPromise]:[3,4];case 3:return f.sent(),[3,6];case 4:return[4,(d=a,h=d.Resources[R],p="OwaPeopleHub"===d.Workload?d.Resources[_]:d.Resources[F],Promise.all([I(h),I(p)]))];case 5:f.sent(),f.label=6;case 6:return t.endCustomTiming(D.getLpcBundles),t.measureFromStart(D.getLpcBundlesFromStart),t.startCustomTiming(D.startLpc),[4,U(a,e)];case 7:return f.sent(),t.endCustomTiming(D.startLpc),t.measureFromStart(D.startLpcFromStart),[4,n.updateContextWithLokiDataAsync(a,te).catch(function(){})];case 8:return f.sent(),(u=ae(t.getAllTimings())).RootCorrelationId=a.RootCorrelationId,u.isConsumer=e.isConsumer,n.logEventAsync({name:"initializeLivePersonaCard_success",properties:u},te),o(),[3,10];case 9:return s=f.sent(),c=ae(t.getAllTimings()),n.logEventAsync({name:"initializeLivePersonaCard_failure",properties:K({},ue(s),c,{isConsumer:e.isConsumer})},te),i("Failed to initialize Live Persona Card: "+s.name+" "+s.message),[3,10];case 10:return[2]}var d,p,h})})})).catch(function(){setTimeout(function(){Q=!0},ee)}),[2,X])})})}var re=!1;function oe(e){return Y(this,void 0,void 0,function(){var t,n,r=this;return Z(this,function(o){return!re&&$?[2,$]:(t=new N,n=a.getOrCreate(e),re=!1,($=new Promise(function(o,i){return Y(r,void 0,void 0,function(){var r,a,u,s,c,f;return Z(this,function(d){switch(d.label){case 0:return d.trys.push([0,6,,7]),J(e),[4,l(e.authToken,e.getAuthToken)];case 1:return r=d.sent(),t.measureFromStart(D.getAuthTokenFromStart),[4,O(r,e)];case 2:return a=d.sent(),t.measureFromStart(D.getLokiConfigFromStart),[4,(p=a,h=p.Resources[M],g=p.Resources[j],Promise.all([I(h),I(g)]))];case 3:return d.sent(),t.measureFromStart(D.getOfficeFeedBundles),[4,q(a,e)];case 4:return u=d.sent(),[4,n.updateContextWithLokiDataAsync(a,te).catch(function(){})];case 5:return d.sent(),(s=ae(t.getAllTimings())).RootCorrelationId=a.RootCorrelationId,n.logEventAsync({name:"initializeOfficeFeed_success",properties:s},te),o(u),[3,7];case 6:return c=d.sent(),f=ae(t.getAllTimings()),n.logEventAsync({name:"initializeOfficeFeed_failure",properties:K({},ue(c),f)},te),i("Failed to initialize Office Feed: "+c.name),[3,7];case 7:return[2]}var p,h,g})})})).catch(function(){setTimeout(function(){re=!0},ee)}),[2,$])})})}function ie(e){return Y(this,void 0,void 0,function(){return Z(this,function(t){switch(t.label){case 0:return[4,l(e.authToken,e.getAuthToken)];case 1:return[2,O(t.sent(),e)]}})})}function ae(e){var t={};return Object.keys(e).forEach(function(n){t["Perf_"+n]=e[n].toString()}),t}function ue(e){return{ErrorType:e.name,ErrorMessage:e.message||"",RootCorrelationId:e.rootCorrelationId||"",IsClientOnline:navigator&&void 0!==typeof navigator.onLine?navigator.onLine:""}}}])},3769:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(59),o=n(4551);t.default=function(e,t){return void 0===e||e.__type||(e=o.default(e)),r.makeServiceRequest("GetClientAccessToken",e,t)}},3770:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default=function(e){return r.__assign({__type:"GetClientAccessTokenRequest:#Exchange"},e)}},3977:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4920);t.AuthToken=r.AuthToken;var o=n(5679);t.AuthTokenProvider=o.AuthTokenProvider;var i=n(4922);t.getAuthToken=i.getAuthToken,t.setAuthToken=i.setAuthToken,t.setAuthTokenOnUrl=i.setAuthTokenOnUrl,t.clearAuthToken=i.clearAuthToken,t.removeAuthTokenFromUrl=i.removeAuthTokenFromUrl},4550:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(5672);t.isLokiEndpoint=r.isLokiEndpoint;var o=n(5673);t.Base64=o;var i=n(5674);t.Functional=i;var a=n(5675);t.StorageUtils=a;var u=n(4921);t.StringUtils=u;var s=n(5678);t.getUrlParameter=s.getUrlParameter},4551:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default=function(e){return r.__assign({__type:"GetClientAccessTokenJsonRequest:#Exchange"},e)}},4920:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4550),o=n(4550),i=function(){function e(e,t,n){this.value=e,this.scopeName=t,this.logger=n}return e.prototype.isValid=function(){if(!this.value)return!1;var e=this.extractAuthTokenExpiration();return e<=0?(this.logger&&this.logger.logError("InvalidTokenExpirationValue",this.scopeName,{expiryTime:e.toString()}),!1):!(Date.now()>1e3*e-3e5)||(this.logger&&this.logger.logEvent("CachedTokenExpired",this.scopeName),!1)},e.prototype.getValue=function(){return this.value},e.prototype.refresh=function(e){var t=this;return new Promise(function(n,o){var i=window.setTimeout(function(){o("GetAuthTokenTimeout")},1e4);e(function(e,a,u){window.clearTimeout(i),r.StringUtils.isNullOrEmpty(a)?(t.value=e,n(t)):o("Couldn't retrieve token! authRequestCorrelationId: "+u)})})},e.prototype.getLoggableProps=function(){var e=1e3*this.extractAuthTokenExpiration();return{expirationTime:e,expiresIn:e-Date.now()}},e.prototype.getLoggablePropsAsString=function(){return JSON.stringify(this.getLoggableProps())},e.prototype.getTokenLifetimeBuffer=function(){return 3e5},e.prototype.extractAuthTokenOid=function(){var e=this.extractPayload();return e?e.oid:""},e.prototype.extractAuthTokenExpiration=function(){var e=this.extractPayload();return e?e.exp:0},e.prototype.extractPayload=function(){if(!this.value)return null;var e=this.value.split(".");if(3!==e.length)return this.logger&&this.logger.logError("AuthTokenParseError",this.scopeName,{partsCount:e.length.toString()}),null;try{return JSON.parse(o.Base64.decode(e[1]))}catch(e){return this.logger&&this.logger.logError("AuthTokenParseError",this.scopeName,{error:e}),null}},e}();t.AuthToken=i},4921:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="",o="00000000-0000-0000-0000-000000000000",i="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";function a(e){return null==e||e===r}t.isNullOrEmpty=a,t.isNullOrWhitespace=function(e){return null==e||e.trim()===r},t.isGuidNullOrEmpty=function(e){return a(e)||e===o};var u=/(?:[\u3400-\u9FFF\uF900-\uFAFF]|[\uD840-\uD868][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF]|\uD87E[\uDC00-\uDE1F])/;t.isCJK=function(e){return u.test(e)},t.generateGuid=function(){return i.replace(/[xy]/g,function(e){var t;if(window.crypto){var n=new Uint8Array(1);window.crypto.getRandomValues(n),t=n[0]}else t=Math.floor(16*Math.random());return("x"===e?t%16:t%4+8).toString(16)})},t.createCommaDelimitedParamStringFromObject=function(e){if("[object Object]"!==Object.prototype.toString.call(e))throw new TypeError("Param data must be a valid object");for(var t=[],n=0,r=Object.keys(e);n<r.length;n++){var o=r[n];t.push(o+"="+e[o])}return t.join(",")},t.format=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(!e)return r;if(null!=t&&t.length>0)for(var o=0;o<t.length;o++){var i=t[o],a=null==i?r:i.toString(),u=new RegExp("\\{"+o+"\\}","g");e=e.replace(u,a)}return e},t.toUTF8=function(e){return unescape&&encodeURIComponent?unescape(encodeURIComponent(e)):e},t.fromUTF8=function(e){return decodeURIComponent&&escape?decodeURIComponent(escape(e)):e}},4922:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4550),o=r.StorageUtils.getItem,i=r.StorageUtils.setItem,a=r.StorageUtils.removeItem,u="LokiAuthToken";t.setAuthTokenOnUrl=function(e,t){if(t&&r.isLokiEndpoint(e)){var n=e.indexOf("?")>-1?"&":"?";return""+e+n+"AuthToken="+t}return e},t.getAuthToken=function(e){return o(u,e||"")||""},t.setAuthToken=function(e,t){t&&i(u,t,e||"")},t.clearAuthToken=function(e){a(u,e||"")},t.removeAuthTokenFromUrl=function(e){return e?e.replace(/AuthToken=[\w-.]*[&$]?/,""):e}},5672:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4921);t.isLokiEndpoint=function(e){return!r.isNullOrEmpty(e)&&new RegExp("^https://.+.loki.delve.office.com/.*","i").test(e)}},5673:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",o=/<%= spaceCharacters %>/g;function i(e){throw new Error(e).name="InvalidCharacterError",new Error(e)}t.decode=function(e){var t=(e=String(e).replace(o,"")).length;t%4==0&&(t=(e=e.replace(/==?$/,"")).length),(t%4==1||/[^+a-zA-Z0-9\/]/.test(e))&&i("Invalid character: the string to be decoded is not correctly encoded.");for(var n,a=0,u=0,s="",c=-1;++c<t;)n=r.indexOf(e.charAt(c)),u=a%4?64*u+n:n,a++%4&&(s+=String.fromCharCode(255&u>>(-2*a&6)));return s},t.encode=function(e){e=String(e),/[^\0-\xFF]/.test(e)&&i("The string to be encoded contains characters outside of the 'Latin1 range.");for(var t,n=e.length%3,o="",a=-1,u=e.length-n;++a<u;)t=(e.charCodeAt(a)<<16)+(e.charCodeAt(++a)<<8)+e.charCodeAt(++a),o+=r.charAt(t>>18&63)+r.charAt(t>>12&63)+r.charAt(t>>6&63)+r.charAt(63&t);return 2===n?(t=(e.charCodeAt(a)<<8)+e.charCodeAt(++a),o+=r.charAt(t>>10)+r.charAt(t>>4&63)+r.charAt(t<<2&63)+"="):1===n&&(t=e.charCodeAt(a),o+=r.charAt(t>>2)+r.charAt(t<<4&63)+"=="),o}},5674:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.filterOutNull=function(e){return e.filter(function(e){return null!=e})},t.omitEmpty=function(e){return function(e,t){if(null==e)return e;for(var n={},r=0,o=Object.keys(e);r<o.length;r++){var i=o[r];t(e[i])&&(n[i]=e[i])}return n}(e,function(e){return null!=e&&""!==e&&(!(e instanceof Array)||e.length>0)})},t.updateWith=function(e,t){return Object.assign({},e,t)}},5675:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(5676),o=n(5677);t.clear=function(e){r.clear(e),o.clear()},t.setItem=function(e,t,n){r.setItem(e,t,n),o.setItem(e,t)},t.getItem=function(e,t){var n=o.getItem(e);return void 0!==n?n:r.getItem(e,t)},t.removeItem=function(e,t){r.removeItem(e,t),o.removeItem(e)}},5676:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=new Map;t.clear=function(e){r.delete(e)},t.setItem=function(e,t,n){var o=r.get(n)||new Map;o.set(e,t),r.set(n,o)},t.getItem=function(e,t){var n=r.get(t);return n?n.get(e):void 0},t.removeItem=function(e,t){var n=r.get(t);n&&n.delete(e)}},5677:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.clear=function(){if(window.sessionStorage)try{window.sessionStorage.clear()}catch(e){}},t.setItem=function(e,t){if(window.sessionStorage)try{window.sessionStorage.setItem(e,t)}catch(e){}},t.getItem=function(e){if(window.sessionStorage)try{var t=window.sessionStorage.getItem(e);return null===t?void 0:t}catch(e){}},t.removeItem=function(e){if(window.sessionStorage)try{window.sessionStorage.removeItem(e)}catch(e){}}},5678:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getUrlParameter=function(e,t){void 0===t&&(t=window.location.search);var n=t.substr(1).split("&").map(function(e){return e.split("=").map(function(e){return decodeURIComponent(e)})}).filter(function(t){return t[0]===e});return n[0]&&n[0][1]}},5679:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4920),o=n(4922),i=function(){function e(e,t,n,o,i,a){void 0===i&&(i=r.AuthToken),void 0===a&&(a="RESTAuthToken"),this.getAppId=e,this.refreshAuthToken=t,this.logger=n,this.runWithLogMonitor=o,this.authTokenType=i,this.loggingFeature=a,this.getAuthToken()}return e.prototype.getAuthToken=function(){var e=this;return this.authToken&&this.authToken.isValid()?Promise.resolve(this.authToken):(this.authToken=new this.authTokenType(o.getAuthToken(this.getAppId()),this.loggingFeature,this.logger),this.authToken.isValid()?Promise.resolve(this.authToken):(this.authPromise=this.authPromise||new Promise(function(t,n){e.runWithLogMonitor?e.runWithLogMonitor({scenarioName:"LokiGetAuthToken",feature:e.loggingFeature,operation:function(){return e.authToken.refresh(e.refreshAuthToken)},successAction:function(n){e.onRefreshAuthTokenSuccess(n),t(n)},errorAction:function(t){e.onRefreshAuthTokenError(t),n(t)},treatAsExpectedError:function(e){return!!navigator&&!navigator.onLine}}):e.authToken.refresh(e.refreshAuthToken).then(function(n){e.onRefreshAuthTokenSuccess(n),t(n)}).catch(function(t){e.onRefreshAuthTokenError(t),n(t)})}),this.authPromise))},e.prototype.onRefreshAuthTokenSuccess=function(e){this.authPromise=void 0,o.setAuthToken(this.getAppId(),e.getValue()||"")},e.prototype.onRefreshAuthTokenError=function(e){this.authPromise=void 0,this.logger&&this.logger.logError("LokiGetAuthTokenFailed",this.loggingFeature,{message:e})},e}();t.AuthTokenProvider=i}}]);
//# sourceMappingURL=owa.7.js.map
self.scriptsLoaded['owa.7.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.7.js'] = (new Date()).getTime();