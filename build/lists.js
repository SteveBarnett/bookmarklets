!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}var r=n(3),a=o(r),i=n(4),l=n(2),s=n(1);!function(){function e(e,t){var n=void 0,o=void 0;switch(t.label){case"dl":n="",o=l.countChildrenWithTagNames(e,["DT","DD"]);break;case"ol":n="list",o=l.countChildrenWithTagNames(e,["LI"]);break;case"ul":n="list",o=l.countChildrenWithTagNames(e,["LI"])}var r={title:"LIST INFO",accName:i.getAccessibleName(e),role:n,props:o+" items"};return s.formatInfo(r)}var t=[{selector:"dl",color:"olive",label:"dl"},{selector:"ol",color:"purple",label:"ol"},{selector:"ul",color:"navy",label:"ul"}],n=t.map(function(e){return e.selector}).join(", "),o={msgTitle:"Lists",msgText:"No list elements ("+n+") found.",targetList:t,cssClass:l.listsCss,getInfo:e,dndFlag:!0},r=new a["default"]("a11yLists",o);r.run()}()},function(e,t){"use strict";function n(){var e,t="undefined"==typeof window.pageXOffset?(((e=document.documentElement)||(e=document.body.parentNode))&&"number"==typeof e.ScrollLeft?e:document.body).ScrollLeft:window.pageXOffset,n="undefined"==typeof window.pageYOffset?(((e=document.documentElement)||(e=document.body.parentNode))&&"number"==typeof e.ScrollTop?e:document.body).ScrollTop:window.pageYOffset;return{x:t,y:n}}function o(e,t,o){function r(t){t||(t=window.event);var o=n();e.style.left=t.clientX+o.x-d+"px",e.style.top=t.clientY+o.y-f+"px",e.style.cursor="move",t.stopPropagation?t.stopPropagation():t.cancelBubble=!0}function a(t){t||(t=window.event),e.style.cursor="grab",e.style.cursor="-moz-grab",e.style.cursor="-webkit-grab",document.removeEventListener?(document.removeEventListener("mouseup",a,!0),document.removeEventListener("mousemove",r,!0)):document.detachEvent&&(e.detachEvent("onlosecapture",a),e.detachEvent("onmouseup",a),e.detachEvent("onmousemove",r),e.releaseCapture()),t.stopPropagation?t.stopPropagation():t.cancelBubble=!0}var i=n(),l=o.clientX+i.x,s=o.clientY+i.y,u=e.offsetLeft,c=e.offsetTop,d=l-u,f=s-c;t&&t(e),document.addEventListener?(document.addEventListener("mousemove",r,!0),document.addEventListener("mouseup",a,!0)):document.attachEvent&&(e.setCapture(),e.attachEvent("onmousemove",r),e.attachEvent("onmouseup",a),e.attachEvent("onlosecapture",a)),o.stopPropagation?o.stopPropagation():o.cancelBubble=!0,o.preventDefault?o.preventDefault():o.returnValue=!1}function r(e){var t="",n=e.title,o=e.element,r=e.accName,a=e.role,i=e.props;return t+="=== "+n+" ===",o&&(t+="\nELEMENT: "+o),r&&(t+="\nACC. NAME: "+r.name+"\nFROM: "+r.source),a&&(t+="\nARIA ROLE: "+a),i&&(t+="\nPROPERTIES: "+i),t}Object.defineProperty(t,"__esModule",{value:!0}),t.getScrollOffsets=n,t.drag=o,t.formatInfo=r},function(e,t,n){"use strict";function o(e){function t(e){for(var t=!0;t;){var n=e;if(o=r=a=i=l=void 0,t=!1,n.nodeType===Node.DOCUMENT_NODE)return!0;var o=window.getComputedStyle(n,null),r=o.getPropertyValue("display"),a=o.getPropertyValue("visibility"),i=n.getAttribute("hidden"),l=n.getAttribute("aria-hidden");if("none"===r||"hidden"===a||null!==i||"true"===l)return!1;e=n.parentNode,t=!0}}return t(e)}function r(e,t){for(var n=0,o=e.firstElementChild;o;)t.indexOf(o.tagName)>-1&&(n+=1),o=o.nextElementSibling;return n}function a(e,t){if("function"==typeof e.closest)for(var n=0;n<t.length;n++)if(e.closest(t[n]))return!0;return!1}function i(e){var t=e.targetList,n=e.cssClass,r=e.getInfo,a=e.dndFlag,i=0;return t.forEach(function(e){var t=document.querySelectorAll(e.selector);"function"==typeof e.filter&&(t=Array.prototype.filter.call(t,e.filter)),Array.prototype.forEach.call(t,function(t){var l,u;o(t)&&(l=t.getBoundingClientRect(),u=s.createOverlay(e,l,n),a&&s.addDragAndDrop(u),r&&(u.title=r(t,e)),document.body.appendChild(u),i+=1)})}),i}function l(e){var t="div."+e,n=document.querySelectorAll(t);Array.prototype.forEach.call(n,function(e){document.body.removeChild(e)})}Object.defineProperty(t,"__esModule",{value:!0}),t.countChildrenWithTagNames=r,t.isDescendantOf=a,t.addNodes=i,t.removeNodes=l;var s=n(6),u="a11yGfdXALm0";t.formsCss=u;var c="a11yGfdXALm1";t.headingsCss=c;var d="a11yGfdXALm2";t.imagesCss=d;var f="a11yGfdXALm3";t.landmarksCss=f;var p="a11yGfdXALm4";t.listsCss=p},function(e,t,n){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(2),l=n(5),s=o(l),u=function(){var e=function(t,n){var o=this;return r(this,e),"object"==typeof window[t]?window[t]:(this.cssClass=n.cssClass,this.msgTitle=n.msgTitle,this.msgText=n.msgText,this.params=n,this.show=!1,window.addEventListener("resize",function(e){i.removeNodes(o.cssClass),s.resize(),o.show=!1}),void(window[t]=this))};return a(e,[{key:"run",value:function(){s.hide(),this.show=!this.show,this.show?0===i.addNodes(this.params)&&(s.show(this.msgTitle,this.msgText),this.show=!1):i.removeNodes(this.cssClass)}}]),e}();t["default"]=u,e.exports=t["default"]},function(e,t){"use strict";function n(e){var t=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;return e.replace(t,"").replace(/\s+/g," ")}function o(e,t){var o=e.getAttribute(t);return null===o?"":n(o)}function r(e){function t(e,r){var a,i,l;switch(e.nodeType){case Node.ELEMENT_NODE:a=e.tagName.toLowerCase(),"img"===a||"area"===a?(i=o(e,"alt"),i.length&&r.push(i)):e.hasChildNodes()&&Array.prototype.forEach.call(e.childNodes,function(e){t(e,r)});break;case Node.TEXT_NODE:l=n(e.textContent),l.length&&r.push(l)}return r}var r;return r=t(e,[]),r.length?r.join(" "):""}function a(e){var t;return null===e?"":(t=r(e),t?t:e.title?n(e.title):"")}function i(e,t){var n,o,r,i,l=e.getAttribute(t),s=[];if(l&&l.length)for(n=l.split(" "),o=0;o<n.length;o++)r=document.getElementById(n[o]),i=a(r),i.length&&s.push(i);return s.length?s.join(" "):""}function l(e){var t;return t=i(e,"aria-labelledby"),t.length?{name:t,source:"aria-labelledby"}:(t=o(e,"aria-label"),t.length?{name:t,source:"aria-label"}:null)}function s(e){var t;return(t=l(e))?t:(t=o(e,"title"),t.length?{name:t,source:"title"}:null)}function u(e){var t;return(t=s(e))?t:(t=r(e),t.length?{name:t,source:"contents"}:null)}function c(e,t){var n;if(n=l(e))return n;if("undefined"!=typeof t){var r=!0,a=!1,i=void 0;try{for(var s,u=t[Symbol.iterator]();!(r=(s=u.next()).done);r=!0){var c=s.value;if(n=o(e,c),n.length)return{name:n,source:c}}}catch(d){a=!0,i=d}finally{try{!r&&u["return"]&&u["return"]()}finally{if(a)throw i}}}return n=o(e,"title"),n.length?{name:n,source:"title"}:null}Object.defineProperty(t,"__esModule",{value:!0}),t.getAttributeValue=o,t.getElementText=r,t.getAccessibleNameAria=l,t.getAccessibleName=s,t.getAccessibleNameUseContent=u,t.getAccessibleNameUseAttributes=c},function(e,t,n){"use strict";function o(e){var t=window.innerWidth/3.2,n=window.innerWidth/2-t/2,o=u.getScrollOffsets();e.style.width=t+"px",e.style.left=o.x+n+"px",e.style.top=o.y+30+"px"}function r(e){var t=document.createElement("div"),n=document.createElement("button");return t.className="oaa-message-dialog",o(t),n.onclick=e,t.appendChild(n),document.body.appendChild(t),t}function a(e){e&&document.body.removeChild(e)}function i(e,t){var n,o;window[c]||(window[c]=r(l)),n=document.createElement("h2"),n.innerHTML=e,window[c].appendChild(n),o=document.createElement("div"),o.innerHTML=t,window[c].appendChild(o)}function l(){window[c]&&(a(window[c]),delete window[c])}function s(){window[c]&&o(window[c])}Object.defineProperty(t,"__esModule",{value:!0}),t.show=i,t.hide=l,t.resize=s;var u=n(1),c="a11yMessageDialog"},function(e,t,n){"use strict";function o(e,t,n){var o=document.createElement("div"),r=a.getScrollOffsets(),l="background-color: "+e.color,s=34,u=27;return o.setAttribute("class",[n,"oaa-element-overlay"].join(" ")),o.startLeft=t.left+r.x+"px",o.startTop=t.top+r.y+"px",o.style.left=o.startLeft,o.style.top=o.startTop,o.style.width=Math.max(t.width,s)+"px",o.style.height=Math.max(t.height,u)+"px",o.style.borderColor=e.color,o.style.zIndex=i,o.innerHTML='<div style="'+l+'">'+e.label+"</div>",o}function r(e){function t(e){var t=100;e.style.zIndex=i+=t}function n(e){e.style.left=e.startLeft,e.style.top=e.startTop}var o=e.firstChild;o.onmousedown=function(e){a.drag(this.parentNode,t,e)},o.ondblclick=function(e){n(this.parentNode)}}Object.defineProperty(t,"__esModule",{value:!0}),t.createOverlay=o,t.addDragAndDrop=r;var a=n(1),i=1e5}]);