self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.GroupsReadUnreadDiagnostics.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[236],{10779:function(e,t,o){var n=o(10780),i=o(44);"string"==typeof n&&(n=[[e.i,n]]);for(var r=0;r<n.length;r++)i.loadStyles(n[r][1],!1);n.locals&&(e.exports=n.locals)},10780:function(e,t,o){(t=e.exports=o(43)(!1)).push([e.i,"._3n-f8Ap1Kc2GX9G5WkichB{font-weight:600;font-size:12px}html[dir=ltr] ._3n-f8Ap1Kc2GX9G5WkichB{padding:15px 0 10px 10px}html[dir=rtl] ._3n-f8Ap1Kc2GX9G5WkichB{padding:15px 10px 10px 0}html[dir=ltr] ._3FcKFiEljg6x-owcifZQA5{padding-left:15px}html[dir=rtl] ._3FcKFiEljg6x-owcifZQA5{padding-right:15px}",""]),t.locals={groupSectionHeader:"_3n-f8Ap1Kc2GX9G5WkichB",detailsList:"_3FcKFiEljg6x-owcifZQA5"}},1701:function(e,t,o){"use strict";o.d(t,"a",function(){return a});var n=o(14),i=o(249),r={root:"ms-Check",circle:"ms-Check-circle",check:"ms-Check-check"},a=function(e){var t,o,a,s,c=e.checkBoxHeight,l=void 0===c?"18px":c,u=e.checked,d=e.className,p=e.theme,h=p.palette,f=p.semanticColors,m=Object(i.a)(),g=Object(n.getGlobalClassNames)(r,p),b={fontSize:l,position:"absolute",left:0,top:0,width:l,height:l,textAlign:"center",verticalAlign:"middle"};return{root:[g.root,p.fonts.medium,{lineHeight:"1",width:l,height:l,verticalAlign:"top",position:"relative",userSelect:"none",selectors:{":before":{content:'""',position:"absolute",top:"1px",right:"1px",bottom:"1px",left:"1px",borderRadius:"50%",opacity:1,background:f.bodyBackground},"$checkHost:hover &, $checkHost:focus &, &:hover, &:focus":{opacity:1}}},u&&["is-checked",{selectors:{":before":{background:h.themePrimary,opacity:1,selectors:(t={},t[n.HighContrastSelector]={background:"Window"},t)}}}],d],circle:[g.circle,b,{color:h.neutralTertiaryAlt,selectors:(o={},o[n.HighContrastSelector]={color:"WindowText"},o)},u&&{color:h.white}],check:[g.check,b,{opacity:0,color:h.neutralTertiaryAlt,fontSize:"16px",left:m?"-0.5px":".5px",selectors:(a={":hover":{opacity:1}},a[n.HighContrastSelector]={MsHighContrastAdjust:"none"},a)},u&&{opacity:1,color:h.white,fontWeight:900,selectors:(s={},s[n.HighContrastSelector]={border:"none",color:"WindowText"},s)}],checkHost:[{}]}}},1887:function(e,t,o){"use strict";o.d(t,"a",function(){return l});var n=o(0),i=o(2),r=o(146),a=o(131),s=o(794),c=Object(r.a)(),l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._link=i.createRef(),t._onClick=function(e){var o=t.props,n=o.onClick;o.disabled?e.preventDefault():n&&n(e)},t}return n.__extends(t,e),t.prototype.render=function(){var e=this,t=this.props,o=t.disabled,r=t.children,a=t.className,l=t.href,u=t.theme,d=t.styles,p=t.keytipProps,h=c(d,{className:a,isButton:!l,isDisabled:o,theme:u}),f=this._getRootType(this.props);return i.createElement(s.a,{keytipProps:p,ariaDescribedBy:this.props["aria-describedby"],disabled:o},function(t){return i.createElement(f,n.__assign({},t,e._adjustPropsForRootType(f,e.props),{className:h.root,onClick:e._onClick,ref:e._link,"aria-disabled":o}),r)})},t.prototype.focus=function(){var e=this._link.current;e&&e.focus&&e.focus()},t.prototype._adjustPropsForRootType=function(e,t){t.children,t.as;var o=t.disabled,i=t.target,r=t.href,a=(t.theme,t.getStyles,t.styles,t.componentRef,n.__rest(t,["children","as","disabled","target","href","theme","getStyles","styles","componentRef"]));return"string"==typeof e?"a"===e?n.__assign({target:i,href:o?void 0:r},a):"button"===e?n.__assign({type:"button",disabled:o},a):n.__assign({},a,{disabled:o}):n.__assign({target:i,href:r,disabled:o},a)},t.prototype._getRootType=function(e){return e.as?e.as:e.href?"a":"button"},t}(a.a)},1898:function(e,t,o){"use strict";o.d(t,"a",function(){return c});var n=o(0),i=o(2),r=o(209),a=o(146),s=Object(a.a)(),c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n.__extends(t,e),t.prototype.render=function(){var e=this.props,t=e.checked,o=e.className,n=e.theme,a=e.styles,c=s(a,{theme:n,className:o,checked:t});return i.createElement("div",{className:c.root},i.createElement(r.a,{iconName:"CircleRing",className:c.circle}),i.createElement(r.a,{iconName:"StatusCircleCheckmark",className:c.check}))},t.defaultProps={checked:!1},t}(i.Component)},2521:function(e,t,o){"use strict";var n=o(637),i=o(1887),r=o(14),a={root:"ms-Link"};o.d(t,"a",function(){return s});var s=Object(n.a)(i.a,function(e){var t,o,n,i,s=e.className,c=e.isButton,l=e.isDisabled,u=e.theme,d=u.semanticColors,p=Object(r.getGlobalClassNames)(a,u);return{root:[p.root,u.fonts.medium,{color:d.link,outline:"none",fontSize:"inherit",fontWeight:"inherit",selectors:(t={".ms-Fabric--isFocusVisible &:focus":{boxShadow:"0 0 0 1px "+u.palette.neutralSecondary+" inset",selectors:(o={},o[r.HighContrastSelector]={outline:"1px solid WindowText"},o)}},t[r.HighContrastSelector]={borderBottom:"none"},t)},c&&{background:"none",backgroundColor:"transparent",border:"none",cursor:"pointer",display:"inline",margin:0,overflow:"inherit",padding:0,textAlign:"left",textOverflow:"inherit",userSelect:"text",borderBottom:"1px solid transparent",selectors:(n={},n[r.HighContrastSelectorBlack]={color:"#FFFF00"},n[r.HighContrastSelectorWhite]={color:"#00009F"},n)},!c&&{textDecoration:"none"},l&&["is-disabled",{color:d.disabledText,cursor:"default"},{selectors:{"&:link, &:visited":{pointerEvents:"none"}}}],!l&&{selectors:{"&:active, &:hover, &:active:hover":{color:d.linkHovered,selectors:(i={},i[r.HighContrastSelector]={textDecoration:"underline"},i)},"&:focus":{color:d.link}}},p.root,s]}},void 0,{scope:"Link"})},3021:function(e,t,o){"use strict";o.d(t,"a",function(){return a});var n=o(637),i=o(1898),r=o(1701),a=Object(n.a)(i.a,r.a,void 0,{scope:"Check"},!0)},7578:function(e,t,o){"use strict";o.r(t);var n=o(1),i=Object(n.action)("addDiagnosticsData",function(e,t,o){return{groupId:e,actionType:t,customData:o}}),r=o(8),a=Object(n.createStore)("groupsReadUnreadDiagnosticsStore",{diagnosticsMap:new r.ObservableMap})(),s=(Object(n.mutator)(i,function(e){var t=e.groupId,o=e.actionType,n=e.customData,i={group:t,actionType:o,timestamp:new Date(Date.now()).toLocaleTimeString(),customData:n};if(a.diagnosticsMap.has(t)){var r=a.diagnosticsMap.get(t);r.push(i),r.length>20&&r.splice(0,1)}else a.diagnosticsMap.set(t,[i])}),o(0)),c=Object(n.action)("addMarkAsReadDiagnostics",function(e,t,o,n,i){return{tableQuery:e,isActingOnAllItemsInTable:t,isReadValueToSet:o,actionSource:n,itemsToUpdate:i}}),l=Object(n.action)("addUnreadCountNotificationDiagnostics",function(e,t){return{groupId:e,notification:t}}),u=Object(n.action)("addUnreadCountSubscriptionDiagnostics",function(e,t,o){return{groupId:e,subscription:t,isUnsubscribe:o}}),d=o(51),p=o(2),h=o.n(p),f=o(3041),m=o(576),g=o(738),b=o(10779),v=[{key:"timestamp",minWidth:80,name:"Time",fieldName:"timestamp",isResizable:!0},{key:"actionType",minWidth:150,name:"Action",fieldName:"actionType",isResizable:!0},{key:"customData",minWidth:650,name:"Details",fieldName:"customData",isResizable:!0}],k=function(e,t,o){return p.createElement("span",null,e[o.key])},y=Object(d.a)(function(){if(0==a.diagnosticsMap.size)return null;var e=s.__spread(a.diagnosticsMap.keys()).sort(function(e,t){return e.localeCompare(t)}),t=[];return e.forEach(function(e){t.push(p.createElement("div",{className:b.groupSectionHeader},e)),t.push(p.createElement(f.a,{className:b.detailsList,items:a.diagnosticsMap.get(e),columns:v,layoutMode:m.e.fixedColumns,selectionMode:g.c.none,constrainMode:m.d.unconstrained,onRenderItemColumn:k}))}),p.createElement("div",{className:"allowTextSelection"},t)}),_=o(816),x=!1,C={name:"Groups read/unread",datapoints:[],type:"Custom"},w=function(){return h.a.createElement(y)};function S(){return s.__awaiter(this,void 0,void 0,function(){return s.__generator(this,function(e){switch(e.label){case 0:return x?[3,2]:(x=!0,[4,_.e.import().then(function(e){_.f.importAndExecute(C,e(),w)})]);case 1:e.sent(),e.label=2;case 2:return[2]}})})}var A=o(165),T=o(13);Object(n.orchestrator)(c,function(e){return s.__awaiter(void 0,void 0,void 0,function(){var t,o,n,r,a,c,l;return s.__generator(this,function(s){switch(s.label){case 0:return t=e.tableQuery,o=e.isActingOnAllItemsInTable,n=e.isReadValueToSet,r=e.actionSource,a=e.itemsToUpdate,Object(A.e)(t)?(c=function(e,t){return e?t?"MarkAllAsRead":"MarkAllAsUnread":t?"MarkAsRead":"MarkAsUnread"}(o,n),l="ListViewType: "+Object(T.y)(t.listViewType)+", ActionSource: "+r,a&&(l+=", Count: "+a.length),[4,S()]):[3,2];case 1:s.sent(),i(t.folderId,c,l),s.label=2;case 2:return[2]}})})});Object(n.orchestrator)(l,function(e){return s.__awaiter(void 0,void 0,void 0,function(){var t,o,n,r;return s.__generator(this,function(a){switch(a.label){case 0:return t=e.groupId,o=e.notification,n=o.EventType?o.EventType:"Unknown",r="UnreadCount: "+o.UnreadCount+", EventType: "+n+", NotificationId: "+o.NotificationId+", BrokerSubscriptionId: "+o.BrokerSubscriptionId,[4,S()];case 1:return a.sent(),i(t,"UnreadCountNotification",r),[2]}})})});Object(n.orchestrator)(u,function(e){return s.__awaiter(void 0,void 0,void 0,function(){var t,o,n,r,a;return s.__generator(this,function(s){switch(s.label){case 0:return t=e.groupId,o=e.subscription,n=e.isUnsubscribe,r=n?"Unsubscribe":"Subscribe",a="ChannelId: "+o.subscriptionParameters.ChannelId,[4,S()];case 1:return s.sent(),i(t,r,a),[2]}})})}),o.d(t,"addMarkAsReadDiagnostics",function(){return c}),o.d(t,"addUnreadCountNotificationDiagnostics",function(){return l}),o.d(t,"addUnreadCountSubscriptionDiagnostics",function(){return u})}},0,[0,1,30,474,155,2,6,172,463,87,464,98]]);
//# sourceMappingURL=owa.GroupsReadUnreadDiagnostics.js.map
self.scriptsLoaded['owa.GroupsReadUnreadDiagnostics.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.GroupsReadUnreadDiagnostics.js'] = (new Date()).getTime();