!function(e){function t(n){if(r[n])return r[n].exports;var a=r[n]={exports:{},id:n,loaded:!1};return e[n].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var a=r(6),o=n(a),i=r(1),s=r(8),u=r(3),l=r(4);!function(){function e(e){return"footer"!==e.tagName.toLowerCase()?!0:i.isDescendantOf(e,["article","section"])?!1:!0}function t(e){return"header"!==e.tagName.toLowerCase()?!0:i.isDescendantOf(e,["article","section"])?!1:!0}function r(e,t){var r={title:"LANDMARK INFO",element:u.getElementInfo(e),accName:s.getAccessibleName(e),role:l.getAriaRole(e)};return r}var n=[{selector:'aside:not([role]), [role~="complementary"], [role~="COMPLEMENTARY"]',color:"brown",label:"complementary"},{selector:'footer, [role~="contentinfo"], [role~="CONTENTINFO"]',filter:e,color:"olive",label:"contentinfo"},{selector:'[role~="application"], [role~="APPLICATION"]',color:"teal",label:"application"},{selector:'nav, [role~="navigation"], [role~="NAVIGATION"]',color:"green",label:"navigation"},{selector:'header, [role~="banner"], [role~="BANNER"]',filter:t,color:"gray",label:"banner"},{selector:'[role~="search"], [role~="SEARCH"]',color:"purple",label:"search"},{selector:'main, [role~="main"], [role~="MAIN"]',color:"navy",label:"main"}],a=n.map(function(e){return"<li>"+e.selector+"</li>"}).join(""),c={msgTitle:"Landmarks",msgText:"No elements with ARIA Landmark roles found: <ul>"+a+"</ul>",targetList:n,cssClass:i.landmarksCss,getInfo:r,dndFlag:!0},d=new o["default"]("a11yLandmarks",c);d.run()}()},function(e,t,r){"use strict";function n(e){function t(e){for(var t=!0;t;){var r=e;if(n=a=o=i=s=void 0,t=!1,r.nodeType===Node.DOCUMENT_NODE)return!0;var n=window.getComputedStyle(r,null),a=n.getPropertyValue("display"),o=n.getPropertyValue("visibility"),i=r.getAttribute("hidden"),s=r.getAttribute("aria-hidden");if("none"===a||"hidden"===o||null!==i||"true"===s)return!1;e=r.parentNode,t=!0}}return t(e)}function a(e,t){for(var r=0,n=e.firstElementChild;n;)t.indexOf(n.tagName)>-1&&(r+=1),n=n.nextElementSibling;return r}function o(e,t){return"function"==typeof e.closest?t.some(function(t){return null!==e.closest(t)}):!1}function i(e,t){var r=e.parentElement.tagName.toLowerCase();return r?t.some(function(e){return r===e}):!1}function s(e){var t=e.targetList,r=e.cssClass,a=e.getInfo,o=e.evalInfo,i=e.dndFlag,s=0;return t.forEach(function(e){var t=document.querySelectorAll(e.selector);"function"==typeof e.filter&&(t=Array.prototype.filter.call(t,e.filter)),Array.prototype.forEach.call(t,function(t){if(n(t)){var u=a(t,e);o&&o(u,e);var d=t.getBoundingClientRect(),m=l.createOverlay(e,d,r);i&&l.addDragAndDrop(m),m.title=c.formatInfo(u),document.body.appendChild(m),s+=1}})}),s}function u(e){var t="div."+e,r=document.querySelectorAll(t);Array.prototype.forEach.call(r,function(e){document.body.removeChild(e)})}Object.defineProperty(t,"__esModule",{value:!0}),t.countChildrenWithTagNames=a,t.isDescendantOf=o,t.hasParentWithName=i,t.addNodes=s,t.removeNodes=u;var l=r(9),c=r(3),d="a11yGfdXALm0";t.formsCss=d;var m="a11yGfdXALm1";t.headingsCss=m;var f="a11yGfdXALm2";t.imagesCss=f;var b="a11yGfdXALm3";t.landmarksCss=b;var p="a11yGfdXALm4";t.listsCss=p;var h="a11yGfdXALm5";t.interactiveCss=h},function(e,t){"use strict";function r(e){var t=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;return e.replace(t,"").replace(/\s+/g," ")}function n(e,t){var n=e.getAttribute(t);return null===n?"":r(n)}function a(e){var t=e.tagName.toLowerCase();switch(t){case"img":case"area":return!0;case"input":return e.type&&"image"===e.type}return!1}function o(e){var t=e.getAttribute("alt");return null!==t?0===r(t).length:!1}function i(e){var t=e.tagName.toLowerCase(),r=e.type;switch(t){case"input":switch(r){case"email":case"search":case"tel":case"text":case"url":return!0;default:return!1}break;case"textarea":return!0}return!1}function s(e){var t=e.tagName.toLowerCase(),r=e.type;switch(t){case"input":return"hidden"!==r;case"button":case"keygen":case"meter":case"output":case"progress":case"select":case"textarea":return!0;default:return!1}}function u(e){function t(e,o){var i=void 0,s=void 0;switch(e.nodeType){case Node.ELEMENT_NODE:a(e)?(i=n(e,"alt"),i.length&&o.push(i)):e.hasChildNodes()&&Array.prototype.forEach.call(e.childNodes,function(e){t(e,o)});break;case Node.TEXT_NODE:s=r(e.textContent),s.length&&o.push(s)}return o}var o=void 0;return o=t(e,[]),o.length?o.join(" "):""}function l(e){function t(e,o){var s=void 0,u=void 0,l=void 0;switch(e.nodeType){case Node.ELEMENT_NODE:a(e)?(s=n(e,"alt"),s.length&&o.push(s)):i(e)?(u=r(e.value),u.length&&o.push(u)):e.hasChildNodes()&&Array.prototype.forEach.call(e.childNodes,function(e){t(e,o)});break;case Node.TEXT_NODE:l=r(e.textContent),l.length&&o.push(l)}return o}var o=void 0;return o=t(e,[]),o.length?o.join(" "):""}function c(e,t){var n=[],a=void 0;return Array.prototype.forEach.call(e.childNodes,function(e){switch(e.nodeType){case Node.ELEMENT_NODE:t(e)&&(a=u(e),a.length&&n.push(a));break;case Node.TEXT_NODE:a=r(e.textContent),a.length&&n.push(a)}}),n.length?n.join(" "):""}function d(e,t){var r=void 0;return r=n(e,t),r.length?{name:r,source:t}:null}function m(e){var t=e.getAttribute("alt");return null!==t?(t=r(t),t.length?{name:t,source:"alt"}:{name:"<empty>",source:"alt"}):null}function f(e){var t=void 0;return t=u(e),t.length?{name:t,source:"contents"}:null}function b(e){return e.length?{name:e,source:"default"}:null}function p(e,t){var r=e.querySelector(t);if(r){var n=u(r);if(n.length)return{name:n,source:t+" element"}}return null}function h(e){var t=void 0,r=void 0;return e.id&&(r=document.querySelector('[for="'+e.id+'"]'),r&&(t=l(r),t.length))?{name:t,source:"label [for=id]"}:"function"==typeof e.closest&&(r=e.closest("label"),r&&(t=l(r),t.length))?{name:t,source:"label container"}:null}function g(e){function t(e){return e.hasAttribute("open")}var r=void 0,n=void 0;if(n=e.querySelector("summary"),n&&(r=u(n)),t(e)){if(r+=c(e,function(e){return"summary"!==e.tagName.toLowerCase()}),r.length)return{name:r,source:"contents"}}else if(r.length)return{name:r,source:"summary element"};return null}Object.defineProperty(t,"__esModule",{value:!0}),t.getAttributeValue=n,t.hasEmptyAltText=o,t.isLabelableElement=s,t.getElementContents=u,t.getLabelContents=l,t.nameFromAttribute=d,t.nameFromAltAttribute=m,t.nameFromContents=f,t.nameFromDefault=b,t.nameFromDescendant=p,t.nameFromLabelElement=h,t.nameFromDetailsOrSummary=g},function(e,t,r){"use strict";function n(e){var t=e.tagName.toLowerCase(),r=t;if("input"===t){var n=e.type;n&&n.length&&(r+=' [type="'+n+'"]')}if("label"===t){var a=o.getAttributeValue(e,"for");a.length&&(r+=' [for="'+a+'"]')}if(o.isLabelableElement(e)){var i=e.id;i&&i.length&&(r+=' [id="'+i+'"]')}if(e.hasAttribute("role")){var s=o.getAttributeValue(e,"role");s.length&&(r+=' [role="'+s+'"]')}return r}function a(e){var t="",r=e.title,n=e.element,a=e.accName,o=e.role,i=e.props;return t+="=== "+r+" ===",n&&(t+="\nELEMENT: "+n),a&&(t+="\nACC. NAME: "+a.name+"\nFROM: "+a.source),o&&(t+="\nROLE: "+o),i&&(t+="\nPROPERTIES: "+i),t}Object.defineProperty(t,"__esModule",{value:!0}),t.getElementInfo=n,t.formatInfo=a;var o=r(2)},function(e,t,r){"use strict";function n(e){var t=e.parentElement,r=t.tagName.toLowerCase(),n=t.parentElement.tagName.toLowerCase();return"select"===r?!0:"optgroup"===r&&"select"===n?!0:"datalist"===r?!0:!1}function a(e){for(var t=e.split(" "),r=function(e){var r=t[e].toLowerCase(),n=l.find(function(e){return e===r});return n?{v:n}:void 0},n=0;n<t.length;n++){var a=r(n);if("object"==typeof a)return a.v}return null}function o(e){var t=e.tagName.toLowerCase(),r=e.type;if(e.hasAttribute("role"))return a(u.getAttributeValue(e,"role"));switch(t){case"a":if(e.hasAttribute("href"))return"link";break;case"area":if(e.hasAttribute("href"))return"link";break;case"article":return"article";case"aside":return"complementary";case"body":return"document";case"button":return"button";case"datalist":return"listbox";case"details":return"group";case"dialog":return"dialog";case"dl":return"list";case"fieldset":return"group";case"footer":if(!s.isDescendantOf(e,["article","section"]))return"contentinfo";break;case"form":return"form";case"h1":return"heading";case"h2":return"heading";case"h3":return"heading";case"h4":return"heading";case"h5":return"heading";case"h6":return"heading";case"header":if(!s.isDescendantOf(e,["article","section"]))return"banner";break;case"hr":return"separator";case"img":if(!u.hasEmptyAltText(e))return"img";break;case"input":if("button"===r)return"button";if("checkbox"===r)return"checkbox";if("email"===r)return e.hasAttribute("list")?"combobox":"textbox";if("image"===r)return"button";if("number"===r)return"spinbutton";if("password"===r)return"textbox";if("radio"===r)return"radio";if("range"===r)return"slider";if("reset"===r)return"button";if("search"===r)return e.hasAttribute("list")?"combobox":"textbox";if("submit"===r)return"button";if("tel"===r)return e.hasAttribute("list")?"combobox":"textbox";if("text"===r)return e.hasAttribute("list")?"combobox":"textbox";if("url"===r)return e.hasAttribute("list")?"combobox":"textbox";break;case"li":if(s.hasParentWithName(e,["ol","ul"]))return"listitem";break;case"link":if(e.hasAttribute("href"))return"link";break;case"main":return"main";case"menu":if("toolbar"===r)return"toolbar";break;case"menuitem":if("command"===r)return"menuitem";if("checkbox"===r)return"menuitemcheckbox";if("radio"===r)return"menuitemradio";break;case"meter":return"progressbar";case"nav":return"navigation";case"ol":return"list";case"option":if(n(e))return"option";break;case"output":return"status";case"progress":return"progressbar";case"section":return"region";case"select":return"listbox";case"summary":return"button";case"tbody":return"rowgroup";case"tfoot":return"rowgroup";case"thead":return"rowgroup";case"textarea":return"textbox";case"th":return"columnheader";case"ul":return"list"}return null}function i(e){var t=o(e);if(null===t)return!1;var r=["button","cell","checkbox","columnheader","directory","gridcell","heading","link","listitem","menuitem","menuitemcheckbox","menuitemradio","option","radio","row","rowgroup","rowheader","switch","tab","text","tooltip","treeitem"],n=r.find(function(e){return e===t});return"undefined"!=typeof n}Object.defineProperty(t,"__esModule",{value:!0}),t.getValidRole=a,t.getAriaRole=o,t.nameFromIncludesContents=i;var s=r(1),u=r(2),l=["application","banner","complementary","contentinfo","form","main","navigation","search","alert","alertdialog","button","checkbox","dialog","gridcell","link","log","marquee","menuitem","menuitemcheckbox","menuitemradio","option","progressbar","radio","scrollbar","searchbox","slider","spinbutton","status","switch","tab","tabpanel","textbox","timer","tooltip","treeitem","combobox","grid","listbox","menu","menubar","radiogroup","tablist","tree","treegrid","article","cell","columnheader","definition","directory","document","group","heading","img","list","listitem","math","none","note","presentation","region","row","rowgroup","rowheader","separator","table","text","toolbar"]},function(e,t){"use strict";function r(){var e,t="undefined"==typeof window.pageXOffset?(((e=document.documentElement)||(e=document.body.parentNode))&&"number"==typeof e.ScrollLeft?e:document.body).ScrollLeft:window.pageXOffset,r="undefined"==typeof window.pageYOffset?(((e=document.documentElement)||(e=document.body.parentNode))&&"number"==typeof e.ScrollTop?e:document.body).ScrollTop:window.pageYOffset;return{x:t,y:r}}function n(e,t,n){function a(t){t||(t=window.event);var n=r();e.style.left=t.clientX+n.x-d+"px",e.style.top=t.clientY+n.y-m+"px",e.style.cursor="move",t.stopPropagation?t.stopPropagation():t.cancelBubble=!0}function o(t){t||(t=window.event),e.style.cursor="grab",e.style.cursor="-moz-grab",e.style.cursor="-webkit-grab",document.removeEventListener?(document.removeEventListener("mouseup",o,!0),document.removeEventListener("mousemove",a,!0)):document.detachEvent&&(e.detachEvent("onlosecapture",o),e.detachEvent("onmouseup",o),e.detachEvent("onmousemove",a),e.releaseCapture()),t.stopPropagation?t.stopPropagation():t.cancelBubble=!0}var i=r(),s=n.clientX+i.x,u=n.clientY+i.y,l=e.offsetLeft,c=e.offsetTop,d=s-l,m=u-c;t&&t(e),document.addEventListener?(document.addEventListener("mousemove",a,!0),document.addEventListener("mouseup",o,!0)):document.attachEvent&&(e.setCapture(),e.attachEvent("onmousemove",a),e.attachEvent("onmouseup",o),e.attachEvent("onlosecapture",o)),n.stopPropagation?n.stopPropagation():n.cancelBubble=!0,n.preventDefault?n.preventDefault():n.returnValue=!1}Object.defineProperty(t,"__esModule",{value:!0}),t.getScrollOffsets=r,t.drag=n},function(e,t,r){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t["default"]=e,t}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(1),s=r(7),u=n(s),l=function(){var e=function(t,r){var n=this;return a(this,e),"object"==typeof window[t]?window[t]:(this.cssClass=r.cssClass,this.msgTitle=r.msgTitle,this.msgText=r.msgText,this.params=r,this.show=!1,window.addEventListener("resize",function(e){i.removeNodes(n.cssClass),u.resize(),n.show=!1}),void(window[t]=this))};return o(e,[{key:"run",value:function(){u.hide(),this.show=!this.show,this.show?0===i.addNodes(this.params)&&(u.show(this.msgTitle,this.msgText),this.show=!1):i.removeNodes(this.cssClass)}}]),e}();t["default"]=l,e.exports=t["default"]},function(e,t,r){"use strict";function n(e){var t=window.innerWidth/3.2,r=window.innerWidth/2-t/2,n=l.getScrollOffsets();e.style.width=t+"px",e.style.left=n.x+r+"px",e.style.top=n.y+30+"px"}function a(e){var t=document.createElement("div"),r=document.createElement("button");return t.className="oaa-message-dialog",n(t),r.onclick=e,t.appendChild(r),document.body.appendChild(t),t}function o(e){e&&document.body.removeChild(e)}function i(e,t){var r,n;window[c]||(window[c]=a(s)),r=document.createElement("h2"),r.innerHTML=e,window[c].appendChild(r),n=document.createElement("div"),n.innerHTML=t,window[c].appendChild(n)}function s(){window[c]&&(o(window[c]),delete window[c])}function u(){window[c]&&n(window[c])}Object.defineProperty(t,"__esModule",{value:!0}),t.show=i,t.hide=s,t.resize=u;var l=r(5),c="a11yMessageDialog"},function(e,t,r){"use strict";function n(e,t){for(var r=!0;r;){var n=e,a=t;o=i=u=void 0,r=!1;var o=void 0,i=void 0,u=void 0;if("function"!=typeof n.closest||!(o=n.closest("fieldset")))return a;i=o.querySelector("legend"),i&&(u=s.getElementContents(i),u.length&&(a?(a.name=u+" "+a.name,a.source="fieldset/legend + "+a.source):a={name:u,source:"fieldset/legend"})),e=o.parentNode,t=a,r=!0}}function a(e){var t=void 0===arguments[1]?!1:arguments[1],r=e.tagName.toLowerCase(),n=u.getAriaRole(e),a=null;if(n&&("presentation"===n||"none"===n))return null;switch(r){case"input":switch(e.type){case"hidden":t&&(a=s.nameFromLabelElement(e));break;case"email":case"password":case"search":case"tel":case"text":case"url":a=s.nameFromLabelElement(e),null===a&&(a=s.nameFromAttribute(e,"placeholder"));break;case"button":a=s.nameFromAttribute(e,"value");break;case"reset":a=s.nameFromAttribute(e,"value"),null===a&&(a=s.nameFromDefault("Reset"));break;case"submit":a=s.nameFromAttribute(e,"value"),null===a&&(a=s.nameFromDefault("Submit"));break;case"image":a=s.nameFromAltAttribute(e),null===a&&(a=s.nameFromAttribute(e,"value"));break;default:a=s.nameFromLabelElement(e)}break;case"button":a=s.nameFromContents(e);break;case"label":a=s.nameFromContents(e);break;case"keygen":case"meter":case"output":case"progress":case"select":a=s.nameFromLabelElement(e);break;case"textarea":a=s.nameFromLabelElement(e),null===a&&(a=s.nameFromAttribute(e,"placeholder"));break;case"audio":a={name:"NOT YET IMPLEMENTED",source:""};break;case"embed":a={name:"NOT YET IMPLEMENTED",source:""};break;case"iframe":a=s.nameFromAttribute(e,"title");break;case"img":case"area":a=s.nameFromAltAttribute(e);break;case"object":a={name:"NOT YET IMPLEMENTED",source:""};break;case"svg":a=s.nameFromDescendant(e,"title");break;case"video":a={name:"NOT YET IMPLEMENTED",source:""};break;case"a":a=s.nameFromContents(e);break;case"details":a=s.nameFromDetailsOrSummary(e);break;case"figure":a=s.nameFromDescendant(e,"figcaption");break;case"table":a=s.nameFromDescendant(e,"caption");break;default:(u.nameFromIncludesContents(e)||t)&&(a=s.nameFromContents(e))}return null===a&&(a=s.nameFromAttribute(e,"title")),a}function o(e){var t=e.getAttribute("aria-labelledby"),r=void 0,n=void 0,a=void 0,o=void 0,s=[];if(t&&t.length)for(r=t.split(" "),n=0;n<r.length;n++)a=document.getElementById(r[n]),o=i(a,!0),o&&o.name.length&&s.push(o.name);return s.length?{name:s.join(" "),source:"aria-labelledby"}:null}function i(e){var t=void 0===arguments[1]?!1:arguments[1],r=null;return t||(r=o(e)),null===r&&(r=s.nameFromAttribute(e,"aria-label")),null===r&&(r=a(e,t)),s.isLabelableElement(e)&&(r=n(e,r)),r}Object.defineProperty(t,"__esModule",{value:!0}),t.nameFromNativeSemantics=a,t.getAccessibleName=i;var s=r(2),u=r(4)},function(e,t,r){"use strict";function n(e,t,r){var n=document.createElement("div"),a=o.getScrollOffsets(),s="background-color: "+e.color,u=34,l=27;return n.setAttribute("class",[r,"oaa-element-overlay"].join(" ")),n.startLeft=t.left+a.x+"px",n.startTop=t.top+a.y+"px",n.style.left=n.startLeft,n.style.top=n.startTop,n.style.width=Math.max(t.width,u)+"px",n.style.height=Math.max(t.height,l)+"px",n.style.borderColor=e.color,n.style.zIndex=i,n.innerHTML='<div style="'+s+'">'+e.label+"</div>",n}function a(e){function t(e){var t=100;e.style.zIndex=i+=t}function r(e){e.style.left=e.startLeft,e.style.top=e.startTop}var n=e.firstChild;n.onmousedown=function(e){o.drag(this.parentNode,t,e)},n.ondblclick=function(e){r(this.parentNode)}}Object.defineProperty(t,"__esModule",{value:!0}),t.createOverlay=n,t.addDragAndDrop=a;var o=r(5),i=1e5}]);