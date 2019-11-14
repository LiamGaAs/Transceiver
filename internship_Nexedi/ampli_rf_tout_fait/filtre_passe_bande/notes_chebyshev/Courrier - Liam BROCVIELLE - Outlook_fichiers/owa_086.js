self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.AttachmentsCompact.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[108],{1024:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var r=n(1460);n.d(t,"c",function(){return r.a});var i=n(2526);n.d(t,"d",function(){return i.a});var o=n(1165);n.d(t,"e",function(){return o.a}),n.d(t,"b",function(){return o.b});var a=n(3),c=new a.c(function(){return n.e(197).then(n.bind(null,3494))}),s=Object(a.d)(c,function(e){return e.CloudIconWithOverlay})},1165:function(e,t,n){"use strict";n.d(t,"b",function(){return s}),n.d(t,"a",function(){return f});var r,i=n(1822),o=n(1460),a=n(494),c={};function s(e){return e in c?c[e]:(c[e]={extraSmall:Object(o.a)(e+"_16x16"),small:Object(o.a)(e+"_20x20"),medium:Object(o.a)(e+"_32x32"),large:Object(o.a)(e+"_64x64"),cdn:-1===p.indexOf(e)?Object(i.a)(e+"_16x16"):Object(i.a)("generic_16x16")},c[e])}var u="generic",l=Object.freeze({".3g2":"video",".3gp":"video",".aac":"audio",".accdb":"accdb",".accdc":"accdb",".accde":"accdb",".accdr":"accdb",".accdt":"accdb",".acs":"accdb",".ai":"vector",".aiff":"audio",".ape":"audio",".asf":"video",".aspx":"code",".asx":"video",".avi":"video",".bmp":"photo",".csv":"csv",".dib":"photo",".dgn":"vector",".doc":"docx",".docm":"docx",".docx":"docx",".dot":"dotx",".dotm":"docx",".dotx":"dotx",".email":"email",".emf":"vector",".eml":"email",".eps":"vector",".exe":"exe",".flac":"audio",".flv":"video",".gdraw":"vector",".gif":"photo",".htm":"code",".html":"code",".ical":"calendar",".icalendar":"calendar",".ico":"photo",".ics":"calendar",".indd":"vector",".indt":"vector",".jfif":"photo",".jpe":"photo",".jpeg":"photo",".jpg":"photo",".log":"txt",".lync":u,".m1v":"video",".m4a":"audio",".mdb":"accdb",".mht":"code",".mov":"video",".mp2":"audio",".mp3":"audio",".mp4":"video",".mpa":"audio",".mpe":"video",".mpeg":"video",".mpg":"video",".mpp":"project",".mpt":"mpt",".mpv2":"video",".msg":"email",".odp":"pptx",".ods":"xlsx",".odt":"docx",".ogg":"audio",".one":"one",".onepkg":"onetoc",".onetoc":"onetoc",".onetoc2":"onetoc",".oxps":"vector",".pd":"vector",".pdf":"pdf",".plt":"vector",".png":"photo",".pot":"pptx",".potm":"pptx",".potx":"potx",".ppa":"pptx",".ppam":"pptx",".pps":"pptx",".ppsm":"pptx",".ppsx":"ppsx",".ppt":"pptx",".pptm":"pptx",".pptx":"pptx",".pro":"vector",".ps":"vector",".psd":"photo",".pub":"pblsh",".rpmsg":"rpmsg",".rtf":"txt",".sketch":"vector",".srt":"video",".svg":"vector",".svgz":"vector",".swf":"video",".tif":"photo",".tiff":"photo",".txt":"txt",".url":"link",".vcs":"calendar",".vdx":"vsdx",".vob":"video",".vsd":"vsdx",".vsdx":"vsdx",".vsl":"vsdx",".vss":"vsdx",".vssx":"vssx",".vst":"vstx",".vstx":"vstx",".wav":"audio",".wm":"audio",".wma":"audio",".wmd":"video",".wmf":"vector",".wms":"video",".wmv":"video",".wmz":"video",".wps":"docx",".wri":"docx",".xcl":"xlsx",".xd":"vector",".xla":"xlsx",".xlam":"xlsx",".xls":"xlsx",".xlsb":"xlsx",".xlsm":"xlsx",".xlsx":"xlsx",".xlt":"xlsx",".xltm":"xlsx",".xltx":"xltx",".xml":"code",".xps":"vector",".xsn":"infopath",".zip":"zip"}),d=Object.freeze({"application/vnd.google-apps.document":"gdoc","application/vnd.google-apps.spreadsheet":"gsheet","application/vnd.google-apps.presentation":"gslide","application/vnd.google-apps.form":"gform","application/onenote":"one","application/pdf":"pdf"}),p=["gdoc","gform","gsheet","gslide"];function f(e,t,n){if(void 0===t&&(t=!1),t)return r=r||{extraSmall:null,small:Object(o.a)("folder_20x20"),medium:Object(o.a)("folder_32x32"),large:Object(o.a)("folder_64x64"),cdn:Object(i.a)("folder_16x16")};var c,p=Object(a.a)(e);return p&&(c=l[p.toLowerCase()]),!c&&n&&n in d&&(c=d[n]),s(c||u)}},11856:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n(1482),o=n(2),a=n(2138),c=n(2675),s=n(6953),u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),t.prototype.render=function(){var e=3===this.props.attachment.type;return o.createElement(o.Fragment,null,o.createElement(c.b,{attachmentId:this.props.attachmentViewState.attachmentId,className:s.iconCompactMode,iconSize:0}),o.createElement(c.a,{attachmentViewState:this.props.attachmentViewState,attachment:this.props.attachment,firstLineStyle:e?s.infoCompactModeFirstLineLink:s.infoCompactModeFirstLine,secondLineStyle:s.infoCompactModeSecondLine,isShortDocView:this.props.isShortDocView}))},t=r.__decorate([Object(a.reactive)({attachment:function(e){return Object(i.a)(e.attachmentViewState.attachmentId)}})],t)}(o.Component),l=n(14),d=n(51),p=n(494),f=n(1024),m=n(6953),h=n(126).bind(m),v=Object(d.a)(function(e){var t=Object(i.a)(e.attachmentViewState.attachmentId).model.Name,n=null,r=Object(f.e)(t),a=Object(l.getIconClassName)("Photo2"),s=r.small;Object(p.d)(t)&&(n=s,a=s);var u=h(m.placeholder,a);return o.createElement("span",null,o.createElement("div",{className:m.imageContainerDiv},o.createElement(c.c,{attachmentViewState:e.attachmentViewState,placeHolderCSSClass:u,fileIconCssClass:n,imageLoadErrorCSSClass:s,thumbnailWidth:64,thumbnailHeight:48})))}),b=n(20),g=n(18),w=n(4323),x=n(321),O=n(6953),P=n(126).bind(O),y=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.onClick=function(e){return r.__awaiter(t,void 0,void 0,function(){return r.__generator(this,function(t){switch(t.label){case 0:return[4,this.props.onPreviewClick(e)];case 1:return t.sent()?[3,3]:[4,x.e.importAndExecute(x.i)];case 2:t.sent(),Object(w.c)(this.props.attachmentViewState,w.a.MailList,this.props.instrumentationContext,this.props.attachmentViewState.parentItemId,!1,null,this.props.createImageGallery),t.label=3;case 3:return[2]}})})},t}return r.__extends(t,e),t.prototype.render=function(){var e={attachmentImageView:this.props.isImage,attachmentDocView:!this.props.isImage,shortAttachmentDocView:this.props.isShortDocView},t=Object(i.a)(this.props.attachmentViewState.attachmentId);return o.createElement("div",{className:P(O.attachmentView,e),onClick:this.onClick,title:t.model.Name},this.props.isImage?o.createElement(v,{attachmentViewState:this.props.attachmentViewState}):o.createElement(u,{attachmentViewState:this.props.attachmentViewState,isShortDocView:this.props.isShortDocView}))},t=r.__decorate([b.observer,Object(g.l)("AttachmentCompactView")],t)}(o.Component);n.d(t,"AttachmentCompactView",function(){return y})},1271:function(e,t,n){"use strict";var r=n(98),i=n(1818),o=n(193);function a(e,t,n,o){void 0===o&&(o=!0);var a=e,c=a.AttachmentId,s=a.Name,l=a.OriginalPermissionType,d=a.PermissionType,p=u(e);switch(t){case 0:case 3:return i.b(c,p,t,n,d,l,o,s);case 1:return e.AttachmentPreviewUrl?e.AttachmentPreviewUrl:i.b(c,p,1,n,d,l,o,s);case 2:return e.AttachmentThumbnailUrl;default:return Object(r.a)(t)}}function c(e,t,n,r){return void 0===n&&(n=!1),void 0===r&&(r=!0),i.a(e.mailboxInfo.routingKey,e,t,n,r)}function s(e,t,n,r,s){void 0===s&&(s=!1);var u=n?a(t,1,r,!1):c(e,1,s,!1);if(n)return{url:u,init:{credentials:"include"}};var l=Object(i.c)(),d=new Headers;return d.set("X-Token",l),d.set("X-OWA-CANARY",Object(o.getOwaCanaryCookie)()),{url:u,init:{headers:d}}}function u(e){var t=null;return(t=e.AttachLongPathName)||(t=e.WebUrl),t}function l(e,t,n,r,i,o){return void 0===o&&(o=!1),r?a(t,n,i):c(e,n,o)}n.d(t,"a",function(){return l}),n.d(t,"b",function(){return c}),n.d(t,"c",function(){return s}),n.d(t,"d",function(){return u})},1282:function(e,t,n){"use strict";var r=n(1271);function i(e){window.open(e,"_blank")}function o(e,t,n,r){if(t)i(e);else{var o=document.createElement("a");o.style.display="none",o.href=e,o.download=r||"",n||(n=document.activeElement&&document.activeElement.parentElement||document.body),n.appendChild(o),o.click(),n.removeChild(o)}}var a=n(747);function c(e,t){o(Object(r.a)(e,t,0,Object(a.b)(t),!1,!0),!1)}var s=n(0),u=n(494),l=n(2561),d=n(2157);function p(e,t){return s.__awaiter(this,void 0,void 0,function(){var n,i;return s.__generator(this,function(o){switch(o.label){case 0:return".pdf"!==Object(u.a)(t.Name).toLowerCase()?[3,1]:(n=Object(r.a)(e,t,3,Object(a.b)(t),!1),window.open(n,"_blank"),[3,3]);case 1:return Object(u.c)(t.Name)?[4,Object(l.a)(e,t,Object(a.b)(t))]:[3,3];case 2:i=o.sent(),d.a.importAndExecute(function(e){var t=document.createElement("div"),n=document.createElement("img");return n.src=e,t.appendChild(n),t.innerHTML}(i),"img {max-width: 100%; max-height: 100%; width: auto;  }"),o.label=3;case 3:return[2]}})})}var f=n(2562),m=n(2563),h=n(944);function v(e){var t=Object(h.f)(e,!0),n=Object(u.a)(e.Name);return Object(m.a)(t,e,n)}function b(e){var t=Object(u.a)(e.Name);return v(e)&&t&&(".pdf"===t.toLowerCase()&&Object(f.a)()||Object(u.c)(e.Name))}n.d(t,"a",function(){return c}),n.d(t,"f",function(){return p}),n.d(t,"d",function(){return b}),n.d(t,"c",function(){return v}),n.d(t,"b",function(){return o}),n.d(t,"e",function(){return i})},1315:function(e){e.exports={b:"sUa",d:"tUa",c:"uUa",a:"vUa"}},1460:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n(3026),i="fileType-icon";function o(e){return r[function(e){return i+"-"+e}(e)]}},1482:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n(993);function i(e){return Object(r.a)().attachments.get(e.Id)}},1586:function(e,t,n){"use strict";var r=n(934),i={BOX:"Box",DROPBOX:"Dropbox",FACEBOOK:"Facebook",GDRIVE:"GDrive",MAILBOX:"Mailbox",ONE_DRIVE_CONSUMER:"OneDriveConsumer",ONE_DRIVE_PRO:"OneDrivePro",RECENT_ATTACHMENTS:"RecentAttachments",WOPI:"Wopi",WOPI_BOX:"WopiBox",WOPI_EGNYTE:"WopiEgnyte"};function o(e){switch(e?e.toLowerCase():null){case i.ONE_DRIVE_PRO.toLowerCase():return 0;case i.GDRIVE.toLowerCase():return 5;case i.ONE_DRIVE_CONSUMER.toLowerCase():return 1;case i.DROPBOX.toLowerCase():return 2;case i.BOX.toLowerCase():return 3;case i.WOPI_BOX.toLowerCase():return 7;case i.WOPI_EGNYTE.toLowerCase():return 8;case i.MAILBOX.toLowerCase():return 4;case i.FACEBOOK.toLowerCase():return 6;default:return null}}function a(e){return null==e?null:{attachmentItemId:e.Id,name:e.Name,size:e.Size,fileType:r.a.AttachmentItem,type:"ItemIdAttachment:#Exchange"}}function c(e){return null==e?null:{fileType:r.a.Cloud,name:e.Name,size:e.Size,providerId:e.AttachmentProviderId,providerType:e.ProviderType,location:e.Location,providerEndpointUrl:e.ProviderEndpointUrl,isFolder:1===e.Type,fileId:e.Id,fileParentId:e.ParentId,thumbnailUrl:e.Thumbnail?e.Thumbnail.Url:"",previewUrl:e.Preview?e.Preview.Url:"",type:e.MimeType}}function s(e){if(!e)return null;for(var t=[],n=0;n<e.length;n++){var i=e[n],o={fileType:r.a.Local,name:i.name,size:i.size,type:i.type,fileObject:i};t.push(o)}return t}function u(e,t,n){var i=[],o={fileType:r.a.MailItem,name:e,size:n||0,mimeContent:t};return i.push(o),i}var l=n(12);function d(e,t,n){if(e.length!=t.length)return l.c.error("The sizes of subjects and latestItemIds are different"),null;for(var i=[],o=0;o<e.length;o++){var a={fileType:r.a.MailItem,name:e[o],size:n&&n[o]||0,itemId:t[o]};i.push(a)}return i}var p=n(494);function f(e){return e.map(function(e){return{fileType:r.a.Uri,name:e.name,type:Object(p.a)(e.url),size:0,uri:e.url}})}n.d(t,"b",function(){return o}),n.d(t,"e",function(){return s}),n.d(t,"g",function(){return d}),n.d(t,"c",function(){return a}),n.d(t,"d",function(){return c}),n.d(t,"h",function(){return f}),n.d(t,"f",function(){return u}),n.d(t,"a",function(){return r.a})},1625:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r={attachmentTypes:{FILE_ATTACHMENT_TYPE:"FileAttachment:#Exchange",ITEM_ATTACHMENT_TYPE:"ItemAttachment:#Exchange",ITEM_ID_ATTACHMENT_TYPE:"ItemIdAttachment:#Exchange",REFERENCE_ATTACHMENT_TYPE:"ReferenceAttachment:#Exchange"}}},1711:function(e){e.exports={a:"R8a",b:"S8a"}},1817:function(e,t,n){"use strict";n.d(t,"a",function(){return f}),n.d(t,"c",function(){return m}),n.d(t,"b",function(){return h});var r=n(0),i=n(4),o=n(2520),a=n(2529),c=n.n(a),s=n(9),u=n(18),l=n(12),d=Object(o.b)({timeBetweenRetryInMS:function(){return 3e4}}),p=function(){function e(e,t,n){var o=this;this.downloadTokenRefreshMinutes=e,this.downloadUrlBase=t,this.refreshDownloadTokenAndRetryInCaseOfFailure=function(){return r.__awaiter(o,void 0,void 0,function(){function e(){return r.__awaiter(this,void 0,void 0,function(){var e;return r.__generator(this,function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,c()()];case 1:return[2,t.sent()];case 2:throw e=t.sent(),l.c.warn("Unable to get the download token "+e),e;case 3:return[2]}})})}var t,n,i,o,a=this;return r.__generator(this,function(c){switch(c.label){case 0:if(this.isRefreshingDownloadToken)return[3,4];this.isRefreshingDownloadToken=!0,t=0,n=d(function(){return r.__awaiter(a,void 0,void 0,function(){var n;return r.__generator(this,function(r){switch(r.label){case 0:return t++,n=this,[4,e()];case 1:return n.downloadToken=r.sent(),this.isRefreshingDownloadToken=!1,[2]}})})}).retriableFunc,i=new u.b("AttachmentRefreshDownloadToken"),c.label=1;case 1:return c.trys.push([1,3,,4]),[4,n()];case 2:return c.sent(),i.addCustomData([t]),i.end(),[3,4];case 3:return o=c.sent(),l.c.warn("Retry to refresh token failed: "+o),i.addCustomData([t]),i.endWithError("ServerError",o),this.isRefreshingDownloadToken=!1,[3,4];case 4:return[2]}})})},this.useDownloadUrlBase=!Object(i.g)(this.downloadUrlBase),this.downloadToken=n,this.downloadTokenRefreshMinutes<1&&(this.downloadTokenRefreshMinutes=1),this.useDownloadUrlBase&&setInterval(this.refreshDownloadTokenAndRetryInCaseOfFailure,6e4*this.downloadTokenRefreshMinutes)}return e.getInstance=function(){if(!e.instance){var t=Object(s.a)().ApplicationSettings;e.instance=new e(t.DownloadTokenRefreshMinutes,t.DownloadUrlBase,t.FirstDownloadToken)}return e.instance},e.resetInstanceForTesting=function(){e.instance=null},e.prototype.getDownloadToken=function(){return this.downloadToken},e.prototype.getUseDownloadUrlBase=function(){return this.useDownloadUrlBase},e.prototype.getDownloadUrlBase=function(){return this.downloadUrlBase},e}();function f(){return p.getInstance().getDownloadToken()}function m(){return p.getInstance().getUseDownloadUrlBase()}function h(){return p.getInstance().getDownloadUrlBase()}},1818:function(e,t,n){"use strict";var r=n(2519);n.d(t,"a",function(){return r.a}),n.d(t,"b",function(){return r.b});var i=n(1817);n.d(t,"c",function(){return i.a})},1822:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=1;function i(e){return"https://r"+(r++%4+1)+".res.outlook.com/owa/prem/images/"+e+".png"}},2154:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r=n(0),i=n(320),o=n(1586),a=[0,1,3,2,6,5,7,8,4];function c(e){var t=null,n=function(n){var i=Object(o.b)(n);return null===i?null:function(){var n,i;if(!t){t={};try{for(var o=r.__values(a),c=o.next();!c.done;c=o.next()){var s=c.value;t[s]=e(s)}}catch(e){n={error:e}}finally{try{c&&!c.done&&(i=o.return)&&i.call(o)}finally{if(n)throw n.error}}}return t}()[i]};return{getDataProviderInfo:n,getDefaultDataProviderInfo:function(e){return n(e?i.l:i.m)}}}},2157:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n(3),i=new r.c(function(){return n.e(327).then(n.bind(null,3497))}),o=new r.a(i,function(e){return e.print})},2303:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default=function(e){return r.__assign({__type:"GetAccessTokenForDataProviderRequest:#Exchange"},e)}},2307:function(e,t,n){var r=n(3014),i=6e4;e.exports=function(e,t){var n=Number(t);return r(e,n*i)}},2519:function(e,t,n){"use strict";var r=n(4),i=n(1817),o=n(56),a=n(193),c="/owa/",s="service.svc/s/GetFileAttachment?id={0}",u="service.svc/s/GetReferenceAttachment?attachmentId={0}&location={1}",l="service.svc/s/GetAttachmentThumbnail?id={0}&thumbnailType=2",d="service.svc/s/GetReferenceAttachment?attachmentId={0}&location={1}&isImagePreview=True",p="service.svc/s/GetAttachmentThumbnail?id={0}",f="pdfprint.aspx?id={0}",m="pdfprint.aspx?id={0}&location={1}",h=n(136),v=n(15);var b=[".bmp",".gif",".jpe",".jpeg",".jpg",".jfif",".dib",".png",".psd",".tiff",".tif"];var g=n(98);function w(e,t,n,i,o,s,l,p){var f;switch(void 0===o&&(o=0),void 0===s&&(s=0),void 0===l&&(l=!0),void 0===p&&(p=null),n){case 0:f=u;break;case 3:f=m;break;case 1:if(!function(e){if(!e)return!1;var t=null,n=e.lastIndexOf(".");return n>0&&(t=e.substr(n).toLowerCase()),!!t&&b.indexOf(t.toLowerCase())>=0}(p))return null;f=d;break;default:Object(g.a)(n)}var h=i?s:o;!h&&o&&(h=o);var v=Object(r.b)("{0}{1}&permissionLevel={2}",c,Object(r.b)(f,encodeURIComponent(e.Id),encodeURIComponent(t)),h);l&&(v=v+"&X-OWA-CANARY="+Object(a.getOwaCanaryCookie)());return v}function x(e,t,n,u,d){var m;switch(void 0===u&&(u=!1),void 0===d&&(d=!0),n){case 0:m=s;break;case 1:m=l;break;case 2:m=p;break;case 3:m=f;break;default:return Object(g.a)(n)}return Object(r.g)(m)?null:Object(r.b)("{0}{1}{2}",function(e,t,n,s,u){if(void 0===u&&(u=!1),!t||!t.Id)return null;var l=Object(r.b)(n,encodeURIComponent(t.Id));if(!Object(i.c)()||u&&"Firefox"===Object(h.a)().browser)return c+l+"&X-OWA-CANARY="+Object(a.getOwaCanaryCookie)();var d="{0}{1}/{2}&owa={3}&scriptVer={4}";Object(o.a)()&&(d+="&isc=1");var p=Object(r.b)(d,Object(i.b)(),e,l,window.location.hostname,Object(v.i)()||"unofficial");return s&&(p+="&X-OWA-CANARY="+Object(a.getOwaCanaryCookie)(),p+="&token="+Object(i.a)()),p}(e,t,m,d,3===n),u?"&isDownload=true":"","&animation=true")}n.d(t,"b",function(){return w}),n.d(t,"a",function(){return x})},2520:function(e,t,n){"use strict";function r(e){void 0===e&&(e={}),function(e){e.timeBetweenRetryInMS=e.timeBetweenRetryInMS||function(){return 6e4}}(e);var t=e.maximumAttempts,n=e.timeBetweenRetryInMS;return function(e){var r=0,i=!1,o=function(a,c){i?c(new Error("The function retry was cancelled")):(r++,e().then(function(e){return a(e)}).catch(function(e){t&&r>=t?c(e):setTimeout(function(){return o(a,c)},n(r))}))};return{retriableFunc:function(){return new Promise(function(e,t){return o(e,t)})},cancel:function(){return i=!0}}}}function i(e){return function(t){return Math.pow(2,t)*e}}n.d(t,"b",function(){return r}),n.d(t,"a",function(){return i})},2526:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r,i=n(1165),o=n(1822);function a(e,t,n,a,c){if(n)return r=r||{extraSmall:Object(i.b)("generic").extraSmall,small:Object(i.b)("generic").small,medium:Object(i.b)("blockedfile").medium,large:Object(i.b)("generic").large,cdn:Object(o.a)("generic_16x16")};switch(c){case"IPM.Note":case"IPM.Note.SMIME":case"IPM.Note.SMIME.MultipartSigned":return Object(i.b)("email");case"IPM.Schedule":case"IPM.Appointment":case"IPM.OLE.CLASS.{00061055-0000-0000-C000-000000000046}":return Object(i.b)("calendar")}return a?Object(i.b)("sharedfolder"):Object(i.a)(e,!1,t)||Object(i.b)("generic")}},2529:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(59);t.default=function(e){return r.makeServiceRequest("GetAttachmentDownloadToken",{},e)}},2537:function(e,t,n){"use strict";var r=n(0),i=n(2154),o=n(2564),a=n(98);var c=Object(i.a)(function(e){switch(e){case 0:return r.__assign({},{supportDownload:!0,supportImageThumbnail:!1,supportPreview:function(e,t){return!0},supportedPermissionLevels:[],requiresFetchingSharingInformation:!1},{supportedPermissionLevels:[2,1],requiresFetchingSharingInformation:!0});case 1:return r.__assign({},{supportDownload:!0,supportImageThumbnail:!1,supportPreview:function(e,t){return!0},supportedPermissionLevels:[],requiresFetchingSharingInformation:!1},{supportImageThumbnail:!0,supportPreview:function(e,t){return t},supportedPermissionLevels:[2,1]});case 3:return r.__assign({},{supportDownload:!0,supportImageThumbnail:!1,supportPreview:function(e,t){return!0},supportedPermissionLevels:[],requiresFetchingSharingInformation:!1},{supportDownload:!1,supportPreview:function(e,t){return!1}});case 2:return r.__assign({},{supportDownload:!0,supportImageThumbnail:!1,supportPreview:function(e,t){return!0},supportedPermissionLevels:[],requiresFetchingSharingInformation:!1},{supportPreview:function(e,t){return!1}});case 6:return{supportDownload:!1,supportImageThumbnail:!0,supportPreview:function(e,t){return!1},supportedPermissionLevels:[],requiresFetchingSharingInformation:!1};case 5:return r.__assign({},{supportDownload:!0,supportImageThumbnail:!1,supportPreview:function(e,t){return!0},supportedPermissionLevels:[],requiresFetchingSharingInformation:!1},{supportDownload:!1,supportImageThumbnail:!1,supportPreview:function(e){return Object(o.a)(e)},supportedPermissionLevels:[4,3]});case 7:case 8:case 9:return r.__assign({},{supportDownload:!0,supportImageThumbnail:!1,supportPreview:function(e,t){return!0},supportedPermissionLevels:[],requiresFetchingSharingInformation:!1},{supportDownload:!1,supportPreview:function(e,t){return!1}});case 4:case 10:return{supportDownload:!1,supportImageThumbnail:!1,supportPreview:function(e,t){return!1},supportedPermissionLevels:[],requiresFetchingSharingInformation:!1};default:return Object(a.a)(e)}}),s=c.getDataProviderInfo;c.getDefaultDataProviderInfo;t.a=s},2539:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(59),i=n(2303);t.default=function(e,t){return void 0===e||e.__type||(e=i.default(e)),r.makeServiceRequest("GetAccessTokenforDataProvider",e,t)}},2558:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(0),i=n(2517),o=n(2568);function a(e){return r.__awaiter(this,void 0,void 0,function(){var t,n;return r.__generator(this,function(r){switch(r.label){case 0:return t=Object(o.a)(e.AttachLongPathName),[4,Object(i.l)(t)];case 1:return[2,(n=r.sent()).result&&n.result.thumbnailLink||null]}})})}},2561:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r=n(0),i=n(320),o=n(2558),a=n(1271);function c(e,t,n){return r.__awaiter(this,void 0,void 0,function(){var c;return r.__generator(this,function(r){switch(r.label){case 0:return n?(c=t).ProviderType===i.f&&c.AttachLongPathName?[4,Object(o.a)(c)]:[3,2]:[2,Object(a.a)(e,t,2,n,!0)];case 1:return[2,r.sent()];case 2:return[2,c.AttachmentThumbnailUrl||null]}})})}},2562:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n(5);function i(e,t,n){var i=e||(window&&window.navigator&&window.navigator.userAgent?window.navigator.userAgent:""),o=-1!==i.indexOf("MSIE")||-1!==i.indexOf("rv:")&&-1!==i.indexOf("Trident"),a=-1===i.indexOf("Edge")&&-1!==i.indexOf("Chrome"),c=-1!==i.indexOf("Firefox"),s=-1!==i.indexOf("Edge");return a?function(e){return(e=e||navigator&&navigator.plugins)&&"function"==typeof e.namedItem&&(null!==e.namedItem("Chrome PDF Viewer")||null!==e.namedItem("Microsoft Edge PDF Viewer"))}(n):o?function(e){try{return null!==e("AcroPDF.PDF")}catch(e){return!1}}(t||function(e){return new ActiveXObject(e)}):c?!(Object(r.d)("doc-SxS-pdfJsPreview")&&Object(r.d)("doc-SxS-pdfJsPreviewDefaultInFirefox")):!s||!(Object(r.d)("doc-SxS-pdfJsPreview")&&Object(r.d)("doc-SxS-pdfJsPreviewDefaultInEdge"))}},2563:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(320),i=n(2537),o=n(944);function a(e,t,n){var a=e.level!==o.c.Block&&e.directFileAccessEnabled;return a&&t.__type===r.n&&(a=function(e,t){if(e.AttachLongPathName){var n=document.createElement("a");if(n.href=e.AttachLongPathName,n.host.indexOf(c,0)>0||n.search.indexOf(s,0)>0)return!1}if(r=e.ProviderType,o=Object(i.a)(r),o&&o.supportDownload&&!e.AttachmentIsFolder)return!function(e,t){return!(e||t&&"application/onenote"!==t&&"image/png"!==t)}(t,e.ContentType);var r,o;return!1}(t,n)),a}var c="safelinks.protection.outlook.com",s="b7780972f918485c8cfc32b1ba7438eb"},2564:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=["application/vnd.google-apps.document","application/vnd.google-apps.spreadsheet","application/vnd.google-apps.presentation"];function i(e){return!!e.ContentType&&r.indexOf(e.ContentType.toLowerCase())>-1}},2568:function(e,t,n){"use strict";function r(e){var t=e.indexOf("/d/");return e.substring(t+3,e.indexOf("/",t+3))}n.d(t,"a",function(){return r})},2675:function(e,t,n){"use strict";n.d(t,"c",function(){return o}),n.d(t,"b",function(){return a}),n.d(t,"a",function(){return c});var r=n(3),i=new r.c(function(){return Promise.all([n.e(2),n.e(6),n.e(9),n.e(11),n.e(107)]).then(n.bind(null,3508))}),o=Object(r.d)(i,function(e){return e.AttachmentThumbnailView}),a=Object(r.d)(i,function(e){return e.AttachmentIconView}),c=Object(r.d)(i,function(e){return e.AttachmentDocInfoView})},3014:function(e,t,n){var r=n(1074);e.exports=function(e,t){var n=r(e).getTime(),i=Number(t);return new Date(n+i)}},4323:function(e,t,n){"use strict";var r=n(0),i=n(297),o=n(1482),a=n(1282),c=n(1015);function s(e,t,n){return r.__awaiter(this,void 0,void 0,function(){var s,u;return r.__generator(this,function(r){switch(r.label){case 0:return(s=Object(o.a)(e))?Object(i.e)(s.model)?[4,c.e.import()]:[3,2]:[2];case 1:return r.sent()(s.model),[3,3];case 2:(u=s.download.url)&&Object(a.b)(u,t,n),r.label=3;case 3:return[2]}})})}var u=n(3),l=n(386);n.d(t,"c",function(){return p}),n.d(t,"d",function(){return f}),n.d(t,"a",function(){return l.c}),n.d(t,"b",function(){return s});var d=new u.c(function(){return Promise.all([n.e(2),n.e(6),n.e(9),n.e(11),n.e(107)]).then(n.bind(null,11894))}),p=new u.a(d,function(e){return e.clickAttachment}).importAndExecute,f=new u.a(d,function(e){return e.previewAttachment})},494:function(e,t,n){"use strict";function r(e){if(!e)return null;var t=e.lastIndexOf(".");return t>0?e.substr(t).toLowerCase():null}function i(e){var t=r(e);return t?t.replace(".",""):null}var o=n(1315),a=n(4);function c(e){var t;return e>=1073741824?(e/=1073741824,t=Object(a.a)(o.b)):e>=1048576?(e/=1048576,t=Object(a.a)(o.d)):e>=1024?(e/=1024,t=Object(a.a)(o.c)):t=Object(a.a)(o.a),Object(a.b)(t,Math.round(e))}function s(e){return e&&(t=e,(n=l.exec(t))&&n.length>1&&u[n[1].toLowerCase()]);var t,n}var u={"image/bmp":".bmp","image/x-ms-bmp":".bmp","image/gif":".gif","image/jpeg":".jpeg","image/png":".png","image/vnd.adobe.photoshop":".psd","image/tiff":".tiff"},l=/^\s*([^;\s]*)(?:;|\s|$)/;var d=[".bmp",".gif",".jpe",".jpeg",".jpg",".jfif",".dib",".png",".psd"];function p(e,t){var n=r(e)||s(t);return!!n&&d.indexOf(n.toLowerCase())>=0}var f=n(5),m=[".pdf",".doc",".docx",".odt",".rtf",".ppt",".pptx",".pptm",".potx",".potm",".pot",".ppxx",".pps",".odp"];function h(e){if(!Object(f.d)("doc-attachment-documentThumbnail"))return!1;var t=r(e);return!!t&&m.indexOf(t.toLowerCase())>=0}n.d(t,"a",function(){return r}),n.d(t,"b",function(){return i}),n.d(t,"e",function(){return c}),n.d(t,"c",function(){return p}),n.d(t,"d",function(){return h})},520:function(e,t,n){"use strict";var r,i,o;n.d(t,"c",function(){return r}),n.d(t,"b",function(){return i}),n.d(t,"a",function(){return o}),function(e){e[e.Compose=0]="Compose",e[e.Extensibility=1]="Extensibility",e[e.ReadingPane=2]="ReadingPane",e[e.Fileshub=3]="Fileshub",e[e.Txp=4]="Txp"}(r||(r={})),function(e){e[e.SmimeSignature=0]="SmimeSignature",e[e.Safety=1]="Safety",e[e.Error=2]="Error",e[e.Info=3]="Info",e[e.Encryption=4]="Encryption",e[e.Translation=5]="Translation",e[e.Sensitivity=6]="Sensitivity"}(i||(i={})),function(e){e[e.Grey=0]="Grey",e[e.Red=1]="Red",e[e.Green=2]="Green",e[e.Yellow=3]="Yellow",e[e.Orange=4]="Orange",e[e.Green20=5]="Green20"}(o||(o={}))},6953:function(e,t,n){var r=n(9330),i=n(44);"string"==typeof r&&(r=[[e.i,r]]);for(var o=0;o<r.length;o++)i.loadStyles(r[o][1],!1);r.locals&&(e.exports=r.locals)},747:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return o});var r=n(994);function i(e){return a(e.type)}function o(e){return a(Object(r.a)(e))}function a(e){return 1===e||3===e}},9330:function(e,t,n){(t=e.exports=n(43)(!1)).push([e.i,'._3BaN6hJwwRs9ZPbGkjnwl7{display:inline-block;position:relative;vertical-align:top}html[dir] ._3BaN6hJwwRs9ZPbGkjnwl7{background:"[theme:neutralLighter, default:#f4f4f4]";border-radius:2px}html[dir=ltr] ._3BaN6hJwwRs9ZPbGkjnwl7{margin:0 4px 0 0}html[dir=rtl] ._3BaN6hJwwRs9ZPbGkjnwl7{margin:0 0 0 4px}html[dir] ._3BaN6hJwwRs9ZPbGkjnwl7 .ms-Image{border-radius:2px}._38DtwB3BVlUvdqhskgUJB8,.MwQXXz8yGngGZjfe8DLaa{height:48px;width:132px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:start;align-content:flex-start;-webkit-box-sizing:border-box;box-sizing:border-box}html[dir] ._38DtwB3BVlUvdqhskgUJB8,html[dir] .MwQXXz8yGngGZjfe8DLaa{padding:8px;background:"[theme:white, default:#ffffff]";border:solid 1px "[theme:neutralTertiaryAlt, default:#c8c8c8]"}._38DtwB3BVlUvdqhskgUJB8:hover,.MwQXXz8yGngGZjfe8DLaa:hover{cursor:pointer}html[dir] ._38DtwB3BVlUvdqhskgUJB8:hover,html[dir] .MwQXXz8yGngGZjfe8DLaa:hover{background:"[theme:neutralLighterAlt, default:#f8f8f8]";border-color:"[theme:themePrimary, default:#0078D4]"}.MwQXXz8yGngGZjfe8DLaa{height:28px}html[dir] .MwQXXz8yGngGZjfe8DLaa{padding:4px 8px}._32PA19jgG4YavHsR-aTkla{width:64px;height:48px}._32PA19jgG4YavHsR-aTkla:hover{cursor:pointer}._3EVpCaxWXDU07i3WmULM0r{font-size:30px;color:"[theme:neutralTertiaryAlt, default:#c8c8c8]"}html[dir] ._3EVpCaxWXDU07i3WmULM0r{background:transparent}._3EVpCaxWXDU07i3WmULM0r+div{display:none}._1z8PLfr8XdRu3RoPTILXnv{height:100%;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}html[dir] ._1z8PLfr8XdRu3RoPTILXnv{border:solid 1px "[theme:neutralTertiaryAlt, default:#c8c8c8]";border-radius:2px}html[dir] ._1z8PLfr8XdRu3RoPTILXnv:hover{border-color:"[theme:themePrimary, default:#0078D4]"}html[dir] ._1z8PLfr8XdRu3RoPTILXnv>span>div{margin:-1px}html[dir=ltr] ._1qh4uzQStpeZ7LvnJ_zssa{margin-right:4px}html[dir=rtl] ._1qh4uzQStpeZ7LvnJ_zssa{margin-left:4px}._1gWe0dBojTxH42lZ5X02pH,._3wbcVgEAyYbnB0Lm1j7Ha2{font-size:12px;font-weight:400;width:94px}._3wbcVgEAyYbnB0Lm1j7Ha2{text-decoration:underline;color:#00e!important;cursor:pointer}._2xfC9F1tdYlsU2uIekAe57{font-size:10px;max-width:94px}html[dir=ltr] ._2xfC9F1tdYlsU2uIekAe57{margin-left:20px}html[dir=rtl] ._2xfC9F1tdYlsU2uIekAe57{margin-right:20px}',""]),t.locals={attachmentView:"_3BaN6hJwwRs9ZPbGkjnwl7",attachmentDocView:"_38DtwB3BVlUvdqhskgUJB8",shortAttachmentDocView:"MwQXXz8yGngGZjfe8DLaa",attachmentImageView:"_32PA19jgG4YavHsR-aTkla",placeholder:"_3EVpCaxWXDU07i3WmULM0r",imageContainerDiv:"_1z8PLfr8XdRu3RoPTILXnv",iconCompactMode:"_1qh4uzQStpeZ7LvnJ_zssa",infoCompactModeFirstLine:"_1gWe0dBojTxH42lZ5X02pH",infoCompactModeFirstLineLink:"_3wbcVgEAyYbnB0Lm1j7Ha2",infoCompactModeSecondLine:"_2xfC9F1tdYlsU2uIekAe57"}},934:function(e,t,n){"use strict";var r;n.d(t,"a",function(){return r}),function(e){e[e.Base64InlineImage=0]="Base64InlineImage",e[e.Cloud=1]="Cloud",e[e.Local=2]="Local",e[e.MailItem=3]="MailItem",e[e.Uri=4]="Uri",e[e.AttachmentItem=5]="AttachmentItem",e[e.CloudSuggestion=6]="CloudSuggestion",e[e.AttachmentItemSuggestion=7]="AttachmentItemSuggestion",e[e.Inline=8]="Inline",e[e.Smime=9]="Smime",e[e.FilesHub=10]="FilesHub",e[e.GroupFilesHub=11]="GroupFilesHub",e[e.MailSearchFileSuggestion=12]="MailSearchFileSuggestion",e[e.Unknown=13]="Unknown"}(r||(r={}))},944:function(e,t,n){"use strict";var r;!function(e){e.InfoRestrictedAccess="infoRestrictedAccess"}(r||(r={}));var i=n(98);function o(e){switch(e){case 0:return r.InfoRestrictedAccess;default:return Object(i.a)(e)}}var a=n(9);function c(e){switch(e){case 0:return(t=Object(a.a)().AttachmentPolicy).ConditionalAccessDirectFileAccessOnPrivateComputersBlocked||t.ConditionalAccessDirectFileAccessOnPublicComputersBlocked||t.ConditionalAccessPrintWithoutDownloadBlocked||t.ConditionalAccessWacViewingOnPrivateComputersBlocked||t.ConditionalAccessWacViewingOnPublicComputersBlocked;default:return Object(i.a)(e)}var t}var s=[0],u=n(1625);function l(){return s.filter(c)}function d(e){return e&&e.length>0&&function(e){return e.some(function(e){return!((t=e).IsInline&&!function(e){return e.__type===u.a.attachmentTypes.REFERENCE_ATTACHMENT_TYPE}(t));var t})}(e)?s.filter(c):[]}var p=n(1711),f=n(4),m=n(520);function h(e){switch(e){case r.InfoRestrictedAccess:return{key:"access_control_info_bar",source:m.c.Compose,rank:m.b.Error,messageParts:[Object(f.a)(p.b),(t="https://docs.microsoft.com/en-us/intune-user-help/use-managed-devices-to-get-work-done",{text:Object(f.a)(p.a),action:function(){window.open(t,"_blank")}})],color:m.a.Red};default:return Object(i.a)(e)}var t}var v,b=n(494);!function(e){e[e.Undefined=0]="Undefined",e[e.Block=1]="Block",e[e.ForceSave=2]="ForceSave",e[e.Allow=3]="Allow",e[e.ConditionalAccess=4]="ConditionalAccess"}(v||(v={}));var g=function(){function e(e,t){this.attachmentPolicy=e,this.shouldTreatAsPublicLogon=t,this.shouldTreatAsPublicLogon?this.directFileAccessEnabled=this.attachmentPolicy.DirectFileAccessOnPublicComputersEnabled:this.directFileAccessEnabled=this.attachmentPolicy.DirectFileAccessOnPrivateComputersEnabled,this.saveAttachmentsToCloudEnabled=this.attachmentPolicy.AttachmentDataProviderAvailable&&this.attachmentPolicy.SaveAttachmentsToCloudEnabled,this.convertClassicToCloudyEnabled=this.attachmentPolicy.AttachmentDataProviderAvailable&&this.attachmentPolicy.ReferenceAttachmentsEnabled,this.convertCloudyToClassicEnabled=this.attachmentPolicy.AttachmentDataProviderAvailable&&this.attachmentPolicy.ClassicAttachmentsEnabled,this.fileTypeToPolicyMap=this.createPolicyMap(this.attachmentPolicy.BlockedFileTypes,this.attachmentPolicy.ForceSaveFileTypes,this.attachmentPolicy.AllowedFileTypes),this.mimeTypeToPolicyMap=this.createPolicyMap(this.attachmentPolicy.BlockedMimeTypes,this.attachmentPolicy.ForceSaveMimeTypes,this.attachmentPolicy.AllowedMimeTypes),this.policyForUnknownTypes=v[this.attachmentPolicy.ActionForUnknownFileAndMIMETypes],this.printWithoutDownloadEnabled=this.attachmentPolicy.PrintWithoutDownloadEnabled}return e.prototype.getPolicyInfo=function(e,t,n,r){e&&(e=e.toLowerCase());var i=this.getFileAccessLevel(e,t),o=!1,a=!1,c=!1,s="ReferenceAttachment:#Exchange"===r;return i!==v.Block&&n&&(this.isWacViewingEnabled(e)&&(o=!0),!this.directFileAccessEnabled&&s&&(o=!1),a=this.isForceBrowserViewingFirst(o),o&&null!=this.attachmentPolicy.WacEditableFileTypes&&null!=e&&(c="FileAttachment:#Exchange"===r?this.attachmentPolicy.WacEditableFileTypes.indexOf(e)>=0||this.attachmentPolicy.WacConvertibleFileTypes.indexOf(e)>=0:this.attachmentPolicy.WacEditableFileTypes.indexOf(e)>=0&&-1===this.attachmentPolicy.WacConvertibleFileTypes.indexOf(e)),o||this.directFileAccessEnabled||(i=v.ConditionalAccess)),{directFileAccessEnabled:this.directFileAccessEnabled,level:i,useWac:o,forceBrowserViewingFirst:a,wacEdit:c}},e.prototype.isPdfPreviewEnabled=function(){return this.shouldTreatAsPublicLogon?this.attachmentPolicy.WacViewingOnPublicComputersEnabled||this.attachmentPolicy.DirectFileAccessOnPublicComputersEnabled:this.attachmentPolicy.WacViewingOnPrivateComputersEnabled||this.attachmentPolicy.DirectFileAccessOnPrivateComputersEnabled},e.prototype.getFileAccessLevel=function(e,t){var n=this.fileTypeToPolicyMap[e];if(n||(n=v.Undefined),n===v.Block)return v.Block;var r=this.mimeTypeToPolicyMap[t];return r===v.Block?v.Block:n===v.ForceSave||r===v.ForceSave?v.ForceSave:n===v.Allow||r===v.Allow?v.Allow:this.policyForUnknownTypes},e.prototype.isWacViewingEnabled=function(e){return(this.shouldTreatAsPublicLogon?this.attachmentPolicy.WacViewingOnPublicComputersEnabled:this.attachmentPolicy.WacViewingOnPrivateComputersEnabled)&&this.attachmentPolicy.WacViewableFileTypes.indexOf(e)>=0},e.prototype.isForceBrowserViewingFirst=function(e){return!!e&&(this.shouldTreatAsPublicLogon?this.attachmentPolicy.ForceWacViewingFirstOnPublicComputers:this.attachmentPolicy.ForceWacViewingFirstOnPrivateComputers)},e.prototype.addPolicyIntoMap=function(e,t,n){t&&t.forEach(function(t){e[t]=n})},e.prototype.createPolicyMap=function(e,t,n){var r={};return this.addPolicyIntoMap(r,n,v.Allow),this.addPolicyIntoMap(r,t,v.ForceSave),this.addPolicyIntoMap(r,e,v.Block),r},e}(),w=null,x=null;function O(){if(!w){var e=Object(a.a)(),t=e.AttachmentPolicy,n=e.SessionSettings.IsPublicLogon||e.PublicComputersDetectionEnabled&&e.SessionSettings.IsPublicComputerSession;w=new g(t,n),n&&(x=w)}return w}function P(e,t){var n=Object(b.a)(e.Name),r=e.ContentType;return O().getPolicyInfo(n,r,t,e.__type)}function y(e,t){var n=Object(b.a)(e.Name),r=e.ContentType;return function(){if(!x){var e=Object(a.a)();if(e.SessionSettings.IsPublicLogon||e.PublicComputersDetectionEnabled&&e.SessionSettings.IsPublicComputerSession)return O();x=new g(e.AttachmentPolicy,!0)}return x}().getPolicyInfo(n,r,t,e.__type)}function I(e,t,n){var r=P(e,!0),i=O();return r.level!==v.Block&&i.saveAttachmentsToCloudEnabled&&!t&&n}n.d(t,"i",function(){return h}),n.d(t,"b",function(){return r}),n.d(t,"d",function(){return l}),n.d(t,"e",function(){return d}),n.d(t,"a",function(){return s}),n.d(t,"h",function(){return o}),n.d(t,"j",function(){return I}),n.d(t,"c",function(){return v}),n.d(t,"f",function(){return P}),n.d(t,"g",function(){return y}),n.d(t,"k",function(){return O})}},0,[2,6,9,11,107,12,37,103,463,87,464,98,197]]);
//# sourceMappingURL=owa.AttachmentsCompact.js.map
self.scriptsLoaded['owa.AttachmentsCompact.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.AttachmentsCompact.js'] = (new Date()).getTime();