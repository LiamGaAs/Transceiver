self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.HotkeysMap.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[241],{186:function(t,e,o){"use strict";var r=o(8),n=(o(2),o(70)),i=o(450),a=o(3),s=new a.c(function(){return o.e(772).then(o.t.bind(null,11591,7))}),c=new a.b(s,function(t){return t.default}),l=o(27);function u(t){if("string"==typeof t||Array.isArray(t))return t;var e=Object(l.f)().UserOptions,o=(void 0===e?{}:e).KeyboardShortcutsMode;switch(void 0===o?"":o){case 0:return t.hotmail;case 2:return t.yahoo;case 3:return t.gmail;case 4:return t.owa;default:return}}function p(t,e){if(t.ctrlKey||t.altKey||t.metaKey||e)return!1;var o=t.target;return"INPUT"==o.tagName||"SELECT"==o.tagName||"TEXTAREA"==o.tagName||o.contentEditable&&"true"==o.contentEditable}var d="__keydownHandlerMap",h="__keydownHandlerHooksAdded";function f(t,e,o,a){return void 0===e&&(e=!0),void 0===o&&(o=!0),void 0===a&&(a=!1),function(s,l,f){if("object"==typeof window&&(s[d]=s[d]||{},s[d][l]={command:Object(i.a)(t),stopPropagation:e,preventDefault:o,allowHotkeyOnTextFields:a},!s[h])){var m=s.componentDidMount;s.componentDidMount=function(){var t=this;m&&m.call(this);var e,o=c.import(),i=function(){t.__mousetrap&&t.__mousetrap.reset(),e&&e()},a=o.then(function(o){t.__mousetrap=new o(n.findDOMNode(t)),e=Object(r.autorun)(function(t){var e=this;this.__mousetrap.reset();for(var o=t[d],r=Object.keys(o),n=function(n){var a=r[n],s=u(o[a].command);s&&i.__mousetrap.bind(s,function(r){p(r,o[a].allowHotkeyOnTextFields)||(o[a].stopPropagation&&r.stopPropagation(),o[a].preventDefault&&r.preventDefault(),t[a].call(e,r))})},i=this,a=0;a<r.length;a++)n(a)}.bind(t,s))}).catch(i);this.__cleanupMousetrap=a.then(function(){return i})};var y=s.componentWillUnmount;s.componentWillUnmount=function(){y&&y.call(this),this.__cleanupMousetrap&&this.__cleanupMousetrap.then(function(t){return t()})},s[h]=!0}}}var m=o(0);function y(t,e,o){var n=void 0===o?{}:o,a=n.allowHotkeyOnTextFields,s=void 0!==a&&a,l=n.isEnabled,p=n.stopPropagation,d=void 0===p||p,h=n.preventDefault,f=void 0===h||h;return m.__awaiter(this,void 0,void 0,function(){var o,n,a,p;return m.__generator(this,function(h){switch(h.label){case 0:return[4,c.import()];case 1:return o=h.sent(),n=new o(document.body),a=function(t){return u(t=Object(i.a)(t))}(t),p=Object(r.autorun)(function(){!function(t,e,o){t.reset(),e&&t.bind(e,o)}(n,a,b(s,l,d,f,e))}),[2,function(){n.reset(),p()}]}})})}function b(t,e,o,r,n){return function(i){p(i,t)||e&&!e()||(o&&i.stopPropagation(),r&&i.preventDefault(),n())}}o.d(e,"c",function(){return f}),o.d(e,"a",function(){return y}),o.d(e,"b",function(){return i.a})},1887:function(t,e,o){"use strict";o.d(e,"a",function(){return l});var r=o(0),n=o(2),i=o(146),a=o(131),s=o(794),c=Object(i.a)(),l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._link=n.createRef(),e._onClick=function(t){var o=e.props,r=o.onClick;o.disabled?t.preventDefault():r&&r(t)},e}return r.__extends(e,t),e.prototype.render=function(){var t=this,e=this.props,o=e.disabled,i=e.children,a=e.className,l=e.href,u=e.theme,p=e.styles,d=e.keytipProps,h=c(p,{className:a,isButton:!l,isDisabled:o,theme:u}),f=this._getRootType(this.props);return n.createElement(s.a,{keytipProps:d,ariaDescribedBy:this.props["aria-describedby"],disabled:o},function(e){return n.createElement(f,r.__assign({},e,t._adjustPropsForRootType(f,t.props),{className:h.root,onClick:t._onClick,ref:t._link,"aria-disabled":o}),i)})},e.prototype.focus=function(){var t=this._link.current;t&&t.focus&&t.focus()},e.prototype._adjustPropsForRootType=function(t,e){e.children,e.as;var o=e.disabled,n=e.target,i=e.href,a=(e.theme,e.getStyles,e.styles,e.componentRef,r.__rest(e,["children","as","disabled","target","href","theme","getStyles","styles","componentRef"]));return"string"==typeof t?"a"===t?r.__assign({target:n,href:o?void 0:i},a):"button"===t?r.__assign({type:"button",disabled:o},a):r.__assign({},a,{disabled:o}):r.__assign({target:n,href:i,disabled:o},a)},e.prototype._getRootType=function(t){return t.as?t.as:t.href?"a":"button"},e}(a.a)},2521:function(t,e,o){"use strict";var r=o(637),n=o(1887),i=o(14),a={root:"ms-Link"};o.d(e,"a",function(){return s});var s=Object(r.a)(n.a,function(t){var e,o,r,n,s=t.className,c=t.isButton,l=t.isDisabled,u=t.theme,p=u.semanticColors,d=Object(i.getGlobalClassNames)(a,u);return{root:[d.root,u.fonts.medium,{color:p.link,outline:"none",fontSize:"inherit",fontWeight:"inherit",selectors:(e={".ms-Fabric--isFocusVisible &:focus":{boxShadow:"0 0 0 1px "+u.palette.neutralSecondary+" inset",selectors:(o={},o[i.HighContrastSelector]={outline:"1px solid WindowText"},o)}},e[i.HighContrastSelector]={borderBottom:"none"},e)},c&&{background:"none",backgroundColor:"transparent",border:"none",cursor:"pointer",display:"inline",margin:0,overflow:"inherit",padding:0,textAlign:"left",textOverflow:"inherit",userSelect:"text",borderBottom:"1px solid transparent",selectors:(r={},r[i.HighContrastSelectorBlack]={color:"#FFFF00"},r[i.HighContrastSelectorWhite]={color:"#00009F"},r)},!c&&{textDecoration:"none"},l&&["is-disabled",{color:p.disabledText,cursor:"default"},{selectors:{"&:link, &:visited":{pointerEvents:"none"}}}],!l&&{selectors:{"&:active, &:hover, &:active:hover":{color:p.linkHovered,selectors:(n={},n[i.HighContrastSelector]={textDecoration:"underline"},n)},"&:focus":{color:p.link}}},d.root,s]}},void 0,{scope:"Link"})},3207:function(t,e,o){"use strict";o.r(e);var r=o(1),n=Object(r.createStore)("HotkeysMapStore",{isVisible:!1})(),i=Object(r.mutatorAction)("setIsHotkeysMapVisible",function(t){n.isVisible=t}),a=o(0),s=o(8904),c=o(4),l=o(2),u=o(8905);var p=function(t){var e=l.Children.toArray(t.children),o=Math.ceil(e.length/2);return l.createElement(l.Fragment,null,l.createElement("div",{className:u.column},e.slice(0,o)),l.createElement("div",{className:u.column},e.slice(o)))},d=o(27),h=o(186),f=o(5526),m=o(5843),y=o(1166),b=o(2521),_=o(1897),k=o(20),g=o(8907),v=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.onGoToOptionsClick=function(){e.onDismiss(),e.props.goToOptions&&e.props.goToOptions()},e}return a.__extends(e,t),e.prototype.componentDidMount=function(){this.hotkeyDisposePromise=Object(h.a)({hotmail:"?",yahoo:"?",gmail:"?",owa:"?"},this.showHotkeysMap)},e.prototype.componentWillUnmount=function(){this.hotkeyDisposePromise.then(function(t){return t()})},e.prototype.render=function(){var t=!!this.props.goToOptions;return l.createElement(_.a,{isOpen:n.isVisible,onDismiss:this.onDismiss},l.createElement(y.a,{className:g.closeButton,iconProps:{iconName:"Cancel"},onClick:this.onDismiss}),l.createElement("div",{className:t?g.containerWithFooter:g.containerWithoutFooter},l.createElement(p,null,this.renderHotkeyCommandCategories(this.props.commandCategories))),t&&this.renderFooter())},e.prototype.showHotkeysMap=function(){1!==Object(d.f)().UserOptions.KeyboardShortcutsMode&&i(!0)},e.prototype.onDismiss=function(){i(!1)},e.prototype.renderHotkeyCommandCategories=function(t){var e=this;return t.map(function(t){return l.createElement("div",{className:g.commandCategoryContainer,key:t.displayName},l.createElement("h3",null,t.displayName),e.renderCommands(e.getHotkeysForCommand(t)))})},e.prototype.renderCommands=function(t){var e=Object(d.f)().UserOptions.KeyboardShortcutsMode,o=Object(f.a)(e);return t.filter(function(t){return t[o]}).map(function(t){return l.createElement("span",{className:g.shortcut,key:t.description},l.createElement("span",{className:g.description},t.description),l.createElement("span",{className:g.hotkey},Object(m.a)(Object(h.b)(t)[o])))})},e.prototype.renderFooter=function(){var t="";switch(Object(d.f)().UserOptions.KeyboardShortcutsMode){case 0:t=Object(c.a)(s.d);break;case 3:t=Object(c.a)(s.b);break;case 2:t=Object(c.a)(s.f);break;case 4:t=Object(c.a)(s.e)}return l.createElement("div",{className:g.footer},l.createElement("span",null,Object(c.b)(Object(c.a)(s.a),t)),l.createElement(b.a,{onClick:this.onGoToOptionsClick},Object(c.a)(s.c)))},e.prototype.getHotkeysForCommand=function(t){return this.props.hotkeyCommands.filter(function(e){return e.category===t.category})},e=a.__decorate([k.observer],e)}(l.Component);o.d(e,"setIsHotkeysMapVisible",function(){return i}),o.d(e,"HotkeysMap",function(){return v})},450:function(t,e,o){"use strict";var r=o(136);function n(t,e){return t?e(t):t}function i(t){return t.replace(/\bctrl\b/,"command")}var a=[function(t){if(Array.isArray(t)){if(t.includes("del"))return t.concat("backspace")}else if("del"===t)return["del","backspace"];return t},function(t){return Array.isArray(t)?t.map(i):i(t)}];function s(t){return Object(r.i)()?function(t,e){return Array.isArray(t)||"string"==typeof t?e.reduce(function(t,e){return e(t)},t):{hotmail:e.reduce(function(t,e){return n(t,e)},t.hotmail),owa:e.reduce(function(t,e){return n(t,e)},t.owa),gmail:e.reduce(function(t,e){return n(t,e)},t.gmail),yahoo:e.reduce(function(t,e){return n(t,e)},t.yahoo)}}(t,a):t}o.d(e,"a",function(){return s})},5526:function(t,e,o){"use strict";function r(t){switch(t){case 0:return"hotmail";case 3:return"gmail";case 2:return"yahoo";case 4:return"owa";case 1:return null}}o.d(e,"a",function(){return r})},5843:function(t,e,o){"use strict";o.d(e,"a",function(){return a});var r=o(5844),n=o(4),i=o(87);function a(t,e){return"string"==typeof t?s(t,e):t instanceof Array?t.map(function(t){return s(t,e)}).join(" / "):""}function s(t,e){var o=t.split("+");if(1===o.length){var i=t.split(" ");return 1===i.length?c(i[0],e):Object(n.b)(Object(n.a)(r.keyboardShortcutThen),c(i[0],e),c(i[1],e))}var a=[];return o.forEach(function(t){a.push(c(t,e))}),a.join("+")}function c(t,e){var o,a=(void 0===e?{}:e).useMacSymbols;if(void 0===a?Object(i.h)():a)switch(t.toLowerCase()){case"command":return"⌘";case"alt":return"⌥";case"shift":return"⇧"}return Object(n.a)(r["hotkey_keyword_"+t])||(o=t).charAt(0).toUpperCase()+o.slice(1)}},5844:function(t){t.exports={hotkey_keyword_shift:"zba",hotkey_keyword_ctrl:"Aba",hotkey_keyword_alt:"Bba",hotkey_keyword_meta:"Cba",hotkey_keyword_backspace:"Dba",hotkey_keyword_tab:"Eba",hotkey_keyword_enter:"Fba",hotkey_keyword_return:"Gba",hotkey_keyword_capslock:"Hba",hotkey_keyword_esc:"Iba",hotkey_keyword_escape:"Jba",hotkey_keyword_space:"Kba",hotkey_keyword_pageup:"Lba",hotkey_keyword_pagedown:"Mba",hotkey_keyword_end:"Nba",hotkey_keyword_home:"Oba",hotkey_keyword_left:"Pba",hotkey_keyword_up:"Qba",hotkey_keyword_right:"Rba",hotkey_keyword_down:"Sba",hotkey_keyword_ins:"Tba",hotkey_keyword_del:"Uba",hotkey_keyword_command:"Vba",hotkey_keyword_plus:"Wba",keyboardShortcutThen:"Xba"}},8904:function(t){t.exports={d:"iRa",b:"jRa",f:"kRa",e:"lRa",a:"mRa",c:"nRa"}},8905:function(t,e,o){var r=o(8906),n=o(44);"string"==typeof r&&(r=[[t.i,r]]);for(var i=0;i<r.length;i++)n.loadStyles(r[i][1],!1);r.locals&&(t.exports=r.locals)},8906:function(t,e,o){(e=t.exports=o(43)(!1)).push([t.i,".q2y7w0VvwQHpEuwdCjcBC{width:50%}",""]),e.locals={column:"q2y7w0VvwQHpEuwdCjcBC"}},8907:function(t,e,o){var r=o(8908),n=o(44);"string"==typeof r&&(r=[[t.i,r]]);for(var i=0;i<r.length;i++)n.loadStyles(r[i][1],!1);r.locals&&(t.exports=r.locals)},8908:function(t,e,o){(e=t.exports=o(43)(!1)).push([t.i,"html[dir] h3{margin-top:0;margin-bottom:6px}.UFT9SMvUJkbE1Kz0EiMNW{-webkit-touch-callout:text;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;cursor:auto;display:-webkit-box;display:-ms-flexbox;display:flex;width:716px}html[dir=ltr] .UFT9SMvUJkbE1Kz0EiMNW{padding:36px 0 0 36px}html[dir=rtl] .UFT9SMvUJkbE1Kz0EiMNW{padding:36px 36px 0 0}.GED6eltDJQpxdW6LHmp2y{-webkit-touch-callout:text;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;cursor:auto;display:-webkit-box;display:-ms-flexbox;display:flex;width:716px}html[dir=ltr] .GED6eltDJQpxdW6LHmp2y{padding:36px 0 18px 36px}html[dir=rtl] .GED6eltDJQpxdW6LHmp2y{padding:36px 36px 18px 0}html[dir=ltr] ._29tqFc4GgJuTv9fMa2ho6m{float:right;margin:12px 12px 0 0}html[dir=rtl] ._29tqFc4GgJuTv9fMa2ho6m{float:left;margin:12px 0 0 12px}html[dir] ._1DI7X8x5Jai0wSMnhS-cgA{margin-bottom:18px}._2qAgUHu17UOAOqDaR9vuOS{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}._3EEci_VQ_AhFp330enXWFM{font-size:12px;font-weight:400}html[dir=ltr] ._3EEci_VQ_AhFp330enXWFM{margin-right:1em}html[dir=rtl] ._3EEci_VQ_AhFp330enXWFM{margin-left:1em}._1yYs9T4P1EpanAnjaKpl1C{font-size:12px;font-weight:400;width:160px;-ms-flex-negative:0;flex-shrink:0;word-wrap:break-word}html[dir=ltr] ._1yYs9T4P1EpanAnjaKpl1C{text-align:left}html[dir=rtl] ._1yYs9T4P1EpanAnjaKpl1C{text-align:right}html[dir] ._2-dmRHTrTxA5BO2zrujpW0{padding:12px 36px 36px 36px}",""]),e.locals={containerWithFooter:"UFT9SMvUJkbE1Kz0EiMNW",containerWithoutFooter:"GED6eltDJQpxdW6LHmp2y",closeButton:"_29tqFc4GgJuTv9fMa2ho6m",commandCategoryContainer:"_1DI7X8x5Jai0wSMnhS-cgA",shortcut:"_2qAgUHu17UOAOqDaR9vuOS",description:"_3EEci_VQ_AhFp330enXWFM",hotkey:"_1yYs9T4P1EpanAnjaKpl1C",footer:"_2-dmRHTrTxA5BO2zrujpW0"}}}]);
//# sourceMappingURL=owa.HotkeysMap.js.map
self.scriptsLoaded['owa.HotkeysMap.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.HotkeysMap.js'] = (new Date()).getTime();