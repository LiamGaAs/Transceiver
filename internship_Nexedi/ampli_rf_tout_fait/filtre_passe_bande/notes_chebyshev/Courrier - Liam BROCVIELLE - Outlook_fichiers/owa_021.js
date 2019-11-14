self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.SubstrateSuggestions.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[379],{11908:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n(3775),o=n(7),u=n(3558),c=Object(o.action)("execute3SPrimeCall")(function(e){return r.__awaiter(this,void 0,void 0,function(){return r.__generator(this,function(t){switch(t.label){case 0:return e?[4,u.b.importAndExecute()]:[3,2];case 1:t.sent(),t.label=2;case 2:return Object(i.a)("",!1,!1),[2]}})})});n.d(t,"execute3SPrimeCall",function(){return c})},3546:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n(1),i=Object(r.createStore)("linkedInStore",{status:null})},3558:function(e,t,n){"use strict";var r=n(3),i=n(3722),o=n(18);var u=n(3546);function c(){return"Unbound"===Object(u.a)().status}function a(){return"Bound"===Object(u.a)().status}n.d(t,"a",function(){return d}),n.d(t,"b",function(){return l}),n.d(t,"d",function(){return c}),n.d(t,"e",function(){return u.a}),n.d(t,"c",function(){return a});var s=new r.c(function(){return n.e(265).then(n.bind(null,11835))}),d=new r.a(s,function(e){return e.connectToLinkedIn}),l=new r.a(s,function(e){return e.initializeBindStatus});"undefined"!=typeof window&&void 0!==window.Owa&&(window.Owa.completeLinkedInBind=function(e){Object(o.o)("linkedInBindComplete",[e]),Object(i.a)(e?"Unbound":"Bound")})},3722:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n(1),i=n(3546),o=Object(r.mutatorAction)("updateBindStatus",function(e){Object(i.a)().status=e})},3765:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r=["Id","ADObjectId","DisplayName","EmailAddresses","PeopleSubtype","PeopleType","PDLItemId","PersonaId","ImAddress","JobTitle"]},3775:function(e,t,n){"use strict";var r=n(0),i=n(3558);function o(){return"Bound"==Object(i.e)().status}var u=n(5),c=n(94),a=n(75),s=n(56),d=n(3765),l=n(282),f=n(12),b=n(242);n.d(t,"a",function(){return _});var h="/search/api/v1/init?",p="https://outlook.office365.com/search",v="https://substrate.office.com/SubstrateSearch-Internal.ReadWrite",w="/search/api/v1/suggestions?",j="owa.react.compose",O="20",g="5";function _(e,t,n,i,o){return r.__awaiter(this,void 0,void 0,function(){var i,u,s,d;return r.__generator(this,function(r){switch(r.label){case 0:return""!=e?[3,1]:[2,m()];case 1:return[4,k(e,t,n,o)];case 2:return i=r.sent(),u=function(e){return{AppName:"OWA",Scenario:{Name:j},Cvid:Object(c.a)(),EntityRequests:[e]}}(i),s=a.d,d=[w+S(),u,void 0,!1],[4,y()];case 3:return[2,s.apply(void 0,d.concat([r.sent(),void 0,void 0,!1])).then(function(e){return e}).catch(function(e){return f.c.error(e),null})]}})})}function m(){return r.__awaiter(this,void 0,void 0,function(){var e,t,n,i,c,d;return r.__generator(this,function(r){switch(r.label){case 0:return Object(s.a)()&&Object(u.d)("rp-linkedInPeopleSuggestions")&&o()?((e={}).headers=new Headers,[4,Object(l.getDelegationTokenForOwa)(v)]):[3,3];case 1:return t=r.sent(),e.headers.set("X-User-Context","litoken=bearer"),e.headers.set("Authorization","Bearer "+t),(n=Object(b.getDefaultAnchorMailboxCookie)())&&e.headers.append("X-AnchorMailbox",n),e.method="GET",[4,fetch(window.location.origin+h+S(),e)];case 2:return(i=r.sent())&&200==i.status?[2,i]:(f.c.error("makeInitRequest: Unsuccessful response status"),[2,null]);case 3:return c=a.b,d=[h+S(),void 0,!0],[4,y()];case 4:return[2,c.apply(void 0,d.concat([r.sent(),void 0,!1])).then(function(e){return e.json()}).catch(function(e){return f.c.error(e),null})]}})})}function k(e,t,n,i){return r.__awaiter(this,void 0,void 0,function(){var c,a;return r.__generator(this,function(r){return c=Object(u.d)("rp-linkedInPeopleSuggestions")&&o(),a={Query:{QueryString:e},EntityType:"People",Provenances:I(t,c),Size:t?O:g},i&&i.length>0&&(a.Context=function(e){var t={};e&&(t.RecipientsTo=e.toString());return t}(i)),a.Fields=d.a,n&&a.Fields.push("FeatureData"),[2,a]})})}function I(e,t){var n=["Mailbox"];return e&&n.push("Directory"),t&&n.push("LinkedIn"),n}function S(){var e={scenario:j};return Object.keys(e).map(function(t){return t+"="+e[t]}).join("&")}function y(){return r.__awaiter(this,void 0,void 0,function(){return r.__generator(this,function(e){switch(e.label){case 0:return Object(u.d)("rp-linkedInPeopleSuggestions")&&o()?Object(s.a)()?[2,{"X-User-Context":"litoken=bearer"}]:[4,Object(l.getAccessTokenforResource)(p)]:[3,2];case 1:return[2,{"X-User-Context":"litoken="+e.sent()}];case 2:return[2,null]}})})}}},0,[463,87,464,98]]);
//# sourceMappingURL=owa.SubstrateSuggestions.js.map
self.scriptsLoaded['owa.SubstrateSuggestions.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.SubstrateSuggestions.js'] = (new Date()).getTime();