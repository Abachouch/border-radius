!function(t){var n={};function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)e.d(o,r,function(n){return t[n]}.bind(null,r));return o},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=10)}([function(t,n){t.exports={width:document.getElementById("bubbleWraper").offsetWidth+2,shapes:[{title:"circle",border:{t:50,r:50,b:50,l:50}},{title:"squar",border:{t:100,r:100,b:0,l:0}},{title:"ball",border:{t:100,r:0,b:0,l:100}},{title:"leaf",border:{t:100,r:0,b:0,l:70}},{title:"pizza",border:{t:100,r:0,b:100,l:0}},{title:"egg",border:{t:25,r:50,b:50,l:25}},{title:"!!!",border:{t:28,r:35,b:30,l:50}},{title:"!!",border:{t:80,r:80,b:20,l:20}}],colors:[{title:"solid",color:" #cf7a35"},{title:"solid",color:" #e06262"},{title:"solid ",color:"#d6a334 "},{title:"solid",color:"#eaff30"},{title:"solid",color:"#23aa4c"},{title:"solid",color:"#38dbd3"},{title:"solid",color:"#9bcc84"},{title:"solid ",color:"#3892db "},{title:"solid",color:"#ac3c3c"},{title:"radial",color:" radial-gradient(at top left, rgb(144, 150, 238), rgb(0, 23, 100))"},{title:"radial",color:" radial-gradient(at top left, rgb(235, 144, 238), rgb(100, 0, 87))"},{title:"radial",color:" radial-gradient(at top left, rgb(238, 200, 144), rgb(100, 77, 0)) "},{title:"radial",color:" radial-gradient(at top left, rgb(238, 144, 144), rgb(100, 0, 0)) "},{title:"radial",color:" radial-gradient(at top left, rgb(255, 0, 200), rgb(3, 100, 245))  "},{title:"radial",color:"radial-gradient(at top left, rgb(218, 238, 144), darkgreen) "},{title:"radial",color:" radial-gradient(at top left, rgb(238, 186, 144), rgb(27, 0, 100))  "}],brad:{t:10,r:20,b:30,l:40},topControl:document.getElementById("top"),rightControl:document.getElementById("right"),bottomControl:document.getElementById("bottom"),leftControl:document.getElementById("left"),bubble:document.getElementById("bubble")}},function(t,n,e){t.exports=function(){"use strict";var t={grid:0,filterTarget:null,limit:{x:null,y:null},threshold:0,setCursor:!1,setPosition:!0,smoothDrag:!0,useGPU:!0,onDrag:s,onDragStart:s,onDragEnd:s},n={transform:function(){for(var t=" -o- -ms- -moz- -webkit-".split(" "),n=document.body.style,e=t.length;e--;){var o=t[e]+"transform";if(o in n)return o}}()},e={assign:function(){for(var t=arguments[0],n=arguments.length,e=1;e<n;e++){var o=arguments[e];for(var r in o)t[r]=o[r]}return t},bind:function(t,n){return function(){t.apply(n,arguments)}},on:function(t,n,o){if(n&&o)e.addEvent(t,n,o);else if(n)for(var r in n)e.addEvent(t,r,n[r])},off:function(t,n,o){if(n&&o)e.removeEvent(t,n,o);else if(n)for(var r in n)e.removeEvent(t,r,n[r])},limit:function(t,n){return n instanceof Array?t<(n=[+n[0],+n[1]])[0]?t=n[0]:t>n[1]&&(t=n[1]):t=+n,t},addEvent:"attachEvent"in Element.prototype?function(t,n,e){t.attachEvent("on"+n,e)}:function(t,n,e){t.addEventListener(n,e,!1)},removeEvent:"attachEvent"in Element.prototype?function(t,n,e){t.detachEvent("on"+n,e)}:function(t,n,e){t.removeEventListener(n,e)}};function o(n,o){var r=this,i=e.bind(r.start,r),a=e.bind(r.drag,r),s=e.bind(r.stop,r);if(!l(n))throw new TypeError("Draggable expects argument 0 to be an Element");o=e.assign({},t,o),e.assign(r,{element:n,handle:o.handle&&l(o.handle)?o.handle:n,handlers:{start:{mousedown:i,touchstart:i},move:{mousemove:a,mouseup:s,touchmove:a,touchend:s}},options:o}),r.initialize()}function r(t){return parseInt(t,10)}function i(t){return"currentStyle"in t?t.currentStyle:getComputedStyle(t)}function a(t){return null!=t}function l(t){return t instanceof Element||"undefined"!=typeof HTMLDocument&&t instanceof HTMLDocument}function s(){}return e.assign(o.prototype,{setOption:function(t,n){var e=this;return e.options[t]=n,e.initialize(),e},get:function(){var t=this.dragEvent;return{x:t.x,y:t.y}},set:function(t,n){var e=this.dragEvent;return e.original={x:e.x,y:e.y},this.move(t,n),this},dragEvent:{started:!1,x:0,y:0},initialize:function(){var t,o=this,r=o.element,a=(o.handle,r.style),l=i(r),s=o.options,d=n.transform,c=o._dimensions={height:r.offsetHeight,left:r.offsetLeft,top:r.offsetTop,width:r.offsetWidth};s.useGPU&&d&&("none"===(t=l[d])&&(t=""),a[d]=t+" translate3d(0,0,0)"),s.setPosition&&(a.display="block",a.left=c.left+"px",a.top=c.top+"px",a.width=c.width+"px",a.height=c.height+"px",a.bottom=a.right="auto",a.margin=0,a.position="absolute"),s.setCursor&&(a.cursor="move"),o.setLimit(s.limit),e.assign(o.dragEvent,{x:c.left,y:c.top}),e.on(o.handle,o.handlers.start)},start:function(t){var n=this,o=n.getCursor(t),r=n.element;n.useTarget(t.target||t.srcElement)&&(t.preventDefault&&!t.target.getAttribute("contenteditable")?t.preventDefault():t.target.getAttribute("contenteditable")||(t.returnValue=!1),n.dragEvent.oldZindex=r.style.zIndex,r.style.zIndex=1e4,n.setCursor(o),n.setPosition(),n.setZoom(),e.on(document,n.handlers.move))},drag:function(t){var n=this,e=n.dragEvent,o=n.element,r=n._cursor,i=n._dimensions,a=n.options,l=i.zoom,s=n.getCursor(t),d=a.threshold,c=(s.x-r.x)/l+i.left,u=(s.y-r.y)/l+i.top;!e.started&&d&&Math.abs(r.x-s.x)<d&&Math.abs(r.y-s.y)<d||(e.original||(e.original={x:c,y:u}),e.started||(a.onDragStart(o,c,u,t),e.started=!0),n.move(c,u)&&a.onDrag(o,e.x,e.y,t))},move:function(t,n){var e=this,o=e.dragEvent,r=e.options,i=r.grid,a=e.element.style,l=e.limit(t,n,o.original.x,o.original.y);return!r.smoothDrag&&i&&(l=e.round(l,i)),(l.x!==o.x||l.y!==o.y)&&(o.x=l.x,o.y=l.y,a.left=l.x+"px",a.top=l.y+"px",!0)},stop:function(t){var n,o=this,r=o.dragEvent,i=o.element,a=o.options,l=a.grid;e.off(document,o.handlers.move),i.style.zIndex=r.oldZindex,a.smoothDrag&&l&&(n=o.round({x:r.x,y:r.y},l),o.move(n.x,n.y),e.assign(o.dragEvent,n)),o.dragEvent.started&&a.onDragEnd(i,r.x,r.y,t),o.reset()},reset:function(){this.dragEvent.started=!1},round:function(t){var n=this.options.grid;return{x:n*Math.round(t.x/n),y:n*Math.round(t.y/n)}},getCursor:function(t){return{x:(t.targetTouches?t.targetTouches[0]:t).clientX,y:(t.targetTouches?t.targetTouches[0]:t).clientY}},setCursor:function(t){this._cursor=t},setLimit:function(t){var n=this,o=function(t,n){return{x:t,y:n}};if(t instanceof Function)n.limit=t;else if(l(t)){var r=n._dimensions,i=t.scrollHeight-r.height,s=t.scrollWidth-r.width;n.limit=function(t,n){return{x:e.limit(t,[0,s]),y:e.limit(n,[0,i])}}}else if(t){var d=a(t.x),c=a(t.y);n.limit=d||c?function(n,o){return{x:d?e.limit(n,t.x):n,y:c?e.limit(o,t.y):o}}:o}else n.limit=o},setPosition:function(){var t=this.element,n=t.style;e.assign(this._dimensions,{left:r(n.left)||t.offsetLeft,top:r(n.top)||t.offsetTop})},setZoom:function(){for(var t=this.element,n=1;t=t.offsetParent;){var e=i(t).zoom;if(e&&"normal"!==e){n=e;break}}this._dimensions.zoom=n},useTarget:function(t){var n=this.options.filterTarget;return!(n instanceof Function)||n(t)},destroy:function(){e.off(this.handle,this.handlers.start),e.off(document,this.handlers.move)}}),o}()},function(t,n,e){var o=e(3);"string"==typeof o&&(o=[[t.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(5)(o,r);o.locals&&(t.exports=o.locals)},function(t,n,e){(t.exports=e(4)(!1)).push([t.i,'* {\n  box-sizing: border-box; }\n\nbody {\n  font-family: Nunito;\n  padding-top: 40px;\n  position: relative; }\n\n.container {\n  max-width: 900px;\n  margin: 0 auto; }\n\n.row {\n  display: flex;\n  flex-direction: row-reverse;\n  justify-content: space-around; }\n\n.col-half {\n  width: 50%;\n  padding: 20px; }\n\n.col {\n  padding: 20px; }\n\n@media screen and (max-width: 700px) {\n  .row {\n    flex-direction: column; }\n  .col-half {\n    width: 100%; }\n  .container {\n    max-width: 420px;\n    margin: 0 auto; } }\n\n.app-title {\n  font-style: normal;\n  font-weight: normal;\n  line-height: normal;\n  font-size: 24px;\n  margin: 0; }\n\n.app-description {\n  font-style: normal;\n  font-weight: 300;\n  line-height: normal;\n  font-size: 16px;\n  margin: 0; }\n\n#simpleContainer {\n  margin-top: 48px;\n  margin: 48px auto 0;\n  width: 100%;\n  max-width: 360px; }\n\n#simplesBody {\n  background: rgba(241, 241, 241, 0.11);\n  border-radius: 4px;\n  padding: 10px;\n  padding-bottom: 0;\n  max-height: 225px;\n  overflow-y: auto;\n  /* Track */\n  /* Handle */ }\n  #simplesBody::-webkit-scrollbar {\n    width: 0px; }\n  #simplesBody:hover::-webkit-scrollbar {\n    width: 8px; }\n  #simplesBody::-webkit-scrollbar-track {\n    border-radius: 10px;\n    background: rgba(0, 0, 0, 0.123); }\n  #simplesBody::-webkit-scrollbar-thumb {\n    background: #505050;\n    border-radius: 10px; }\n\n.simple {\n  display: inline-block;\n  padding: 20px; }\n  .simple-tab {\n    font-family: Nunito;\n    display: inline-block;\n    padding: 10px;\n    cursor: pointer;\n    font-style: normal;\n    font-weight: 300;\n    line-height: normal;\n    font-size: 13px; }\n    .simple-tab.active {\n      font-size: 15px;\n      font-weight: normal; }\n  .simple-content {\n    content: \'\';\n    width: 40px;\n    height: 40px;\n    margin: 0 auto;\n    background: #C4C4C4;\n    cursor: pointer; }\n  .simple-title {\n    font-family: Nunito;\n    font-style: normal;\n    font-weight: 300;\n    line-height: normal;\n    font-size: 14px;\n    margin-bottom: 0;\n    margin-top: 8px;\n    text-align: center; }\n\n.color {\n  transition: all 400ms ease-in; }\n\n@media screen and (max-width: 700px) {\n  #simpleContainer {\n    margin-top: 20px;\n    width: 100%;\n    max-width: 100%; }\n  #simplesBody {\n    text-align: center;\n    height: 0;\n    transition: height 200ms ease;\n    padding: 0; }\n    #simplesBody.show {\n      padding: 10px;\n      height: 300px; } }\n\n.widget {\n  position: relative;\n  max-width: 400px;\n  width: 100%;\n  border-spacing: 8px 8px;\n  margin: 0 auto; }\n  .widget-header {\n    font-family: Nunito;\n    font-style: normal;\n    font-weight: normal;\n    line-height: normal;\n    font-size: 14px; }\n  .widget-body {\n    width: 100%;\n    height: 100%;\n    padding: 6px; }\n\n.bubble {\n  width: 100%;\n  height: 100%;\n  content: "";\n  height: 100%;\n  background: #24b4ce; }\n  .bubble-wraper {\n    width: 100%;\n    height: 100%;\n    border: 1px dashed #08aaf5; }\n\n.control {\n  position: absolute;\n  width: 12px;\n  height: 12px;\n  content: "";\n  border: 3px solid #0094FF;\n  background-color: aliceblue;\n  z-index: 1;\n  cursor: -webkit-grab;\n  cursor: grab; }\n  .control:active {\n    cursor: -webkit-grabbing;\n    cursor: grabbing; }\n  .control::before {\n    transition: all 200ms ease-in;\n    content: "";\n    display: block; }\n  .control:hover {\n    border-color: #f700ff; }\n    .control:hover::before {\n      top: -9px;\n      left: -9px;\n      width: 24px;\n      height: 24px;\n      background-color: rgba(46, 184, 12, 0.336);\n      position: relative; }\n\n#top {\n  top: 0px;\n  left: 60px; }\n\n#left {\n  left: 0;\n  top: 40px; }\n\n#right {\n  right: 0;\n  top: 120px; }\n\n#bottom {\n  bottom: 0px;\n  left: 100px; }\n\n@media screen and (max-width: 700px) {\n  .widget-header {\n    margin-top: 0px; } }\n\n.css-wraper {\n  background-color: #fff;\n  border-radius: 4px;\n  padding: 20px;\n  font-family: Nunito;\n  display: flex;\n  justify-content: space-between;\n  max-width: 650px;\n  margin-top: 20px; }\n\n.css-line {\n  padding: 5px 0;\n  display: flex; }\n\n.css-property {\n  font-style: normal;\n  font-weight: 300;\n  line-height: normal;\n  font-size: 15px;\n  flex-shrink: 0;\n  color: #181818; }\n\n.css-value {\n  font-style: normal;\n  font-weight: normal;\n  line-height: normal;\n  font-size: 15px;\n  color: #000000; }\n\n.css-copy {\n  cursor: pointer;\n  font-style: normal;\n  font-weight: 700;\n  line-height: normal;\n  font-size: 14px;\n  color: #000000;\n  margin: 0 30px;\n  border: 0;\n  padding: 0;\n  background: none; }\n\n.message {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  padding: 20px;\n  text-align: center; }\n  .message-text {\n    text-align: center;\n    display: inline-block;\n    margin-top: 150px;\n    font-family: Nunito;\n    color: #181818;\n    padding: 30px;\n    background-color: #fff;\n    border-radius: 4px;\n    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); }\n\n@media screen and (max-width: 700px) {\n  .css-wraper {\n    flex-direction: column; }\n  .css-wraper {\n    margin-top: 50px;\n    max-width: initial;\n    width: 100%;\n    padding-bottom: 0; }\n  .css-copy {\n    padding: 20px; } }\n\n.settings {\n  font-family: \'Nunito\';\n  font-weight: 700;\n  position: absolute;\n  right: 20px;\n  top: 10px;\n  border-radius: 2px;\n  width: 200px;\n  padding-bottom: 10px; }\n  .settings-icon-wraper {\n    content: "";\n    padding: 10px 10px 20px;\n    color: #040518;\n    text-align: right; }\n    .settings-icon-wraper svg {\n      cursor: pointer;\n      width: 24px;\n      height: 24px; }\n  .settings-list {\n    display: none;\n    list-style: none;\n    padding: 0;\n    margin: 0; }\n    .settings-list li {\n      display: flex;\n      flex-direction: row;\n      justify-content: space-between;\n      padding: 12px 20px;\n      cursor: pointer; }\n      .settings-list li:hover {\n        background-color: rgba(0, 0, 0, 0.03); }\n  .settings.active {\n    background-color: #fff;\n    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.192); }\n    .settings.active .settings-icon {\n      color: red; }\n    .settings.active .settings-list {\n      display: block; }\n\n.switch {\n  width: 42px;\n  background-color: #dfdfdf;\n  padding: 1px;\n  box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.1);\n  border-radius: 10px; }\n  .switch .thumb {\n    overflow: hidden;\n    height: 20px;\n    width: 20px;\n    border-radius: 10px;\n    background-color: #909090;\n    transition: margin-left 300ms ease;\n    margin-left: 1px; }\n  .switch.checked .thumb {\n    margin-left: 19px;\n    background-color: blue; }\n\n.dark {\n  background-color: #1A1A1A; }\n  .dark .text {\n    color: #fff !important; }\n  .dark .alt-text {\n    color: #A7A7A7 !important; }\n  .dark .popup {\n    background-color: #313131 !important; }\n  .dark #simplesBody {\n    background: rgba(241, 241, 241, 0.11) !important; }\n  .dark .css-wraper {\n    background: #fff !important; }\n  .dark .settings-icon #icon {\n    fill: #e0e0e0; }\n  .dark .settings-text {\n    color: #ffffff; }\n  .dark .simple-title {\n    color: #A7A7A7 !important; }\n  .dark .settings.active {\n    background-color: #161616; }\n\n.light {\n  background-color: #fafafa !important; }\n  .light .text {\n    color: #03061f !important; }\n  .light .alt-text {\n    color: #3d3d3d !important; }\n  .light .popup {\n    background-color: white !important; }\n  .light #simplesBody {\n    background: rgba(232, 232, 232, 0.502) !important; }\n  .light .css-wraper {\n    background: #e6e6e6 !important; }\n  .light .settings-icon #icon {\n    fill: #A7A7A7; }\n  .light .simple-title {\n    color: #363636 !important; }\n  .light .settings-text {\n    color: #03061f; }\n  .light .settings.active {\n    background-color: #eeeeee; }\n  .light .css-property {\n    color: darkcyan; }\n  .light .css-value {\n    color: #004d2f; }\n',""])},function(t,n){t.exports=function(t){var n=[];return n.toString=function(){return this.map(function(n){var e=function(t,n){var e=t[1]||"",o=t[3];if(!o)return e;if(n&&"function"==typeof btoa){var r=function(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}(o),i=o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"});return[e].concat(i).concat([r]).join("\n")}return[e].join("\n")}(n,t);return n[2]?"@media "+n[2]+"{"+e+"}":e}).join("")},n.i=function(t,e){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&o[a[0]]||(e&&!a[2]?a[2]=e:e&&(a[2]="("+a[2]+") and ("+e+")"),n.push(a))}},n}},function(t,n,e){var o={},r=function(t){var n;return function(){return void 0===n&&(n=t.apply(this,arguments)),n}}(function(){return window&&document&&document.all&&!window.atob}),i=function(t){var n={};return function(t){if("function"==typeof t)return t();if(void 0===n[t]){var e=function(t){return document.querySelector(t)}.call(this,t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}n[t]=e}return n[t]}}(),a=null,l=0,s=[],d=e(6);function c(t,n){for(var e=0;e<t.length;e++){var r=t[e],i=o[r.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](r.parts[a]);for(;a<r.parts.length;a++)i.parts.push(h(r.parts[a],n))}else{var l=[];for(a=0;a<r.parts.length;a++)l.push(h(r.parts[a],n));o[r.id]={id:r.id,refs:1,parts:l}}}}function u(t,n){for(var e=[],o={},r=0;r<t.length;r++){var i=t[r],a=n.base?i[0]+n.base:i[0],l={css:i[1],media:i[2],sourceMap:i[3]};o[a]?o[a].parts.push(l):e.push(o[a]={id:a,parts:[l]})}return e}function p(t,n){var e=i(t.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=s[s.length-1];if("top"===t.insertAt)o?o.nextSibling?e.insertBefore(n,o.nextSibling):e.appendChild(n):e.insertBefore(n,e.firstChild),s.push(n);else if("bottom"===t.insertAt)e.appendChild(n);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=i(t.insertInto+" "+t.insertAt.before);e.insertBefore(n,r)}}function f(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var n=s.indexOf(t);n>=0&&s.splice(n,1)}function g(t){var n=document.createElement("style");return void 0===t.attrs.type&&(t.attrs.type="text/css"),m(n,t.attrs),p(t,n),n}function m(t,n){Object.keys(n).forEach(function(e){t.setAttribute(e,n[e])})}function h(t,n){var e,o,r,i;if(n.transform&&t.css){if(!(i=n.transform(t.css)))return function(){};t.css=i}if(n.singleton){var s=l++;e=a||(a=g(n)),o=x.bind(null,e,s,!1),r=x.bind(null,e,s,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=function(t){var n=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",m(n,t.attrs),p(t,n),n}(n),o=function(t,n,e){var o=e.css,r=e.sourceMap,i=void 0===n.convertToAbsoluteUrls&&r;(n.convertToAbsoluteUrls||i)&&(o=d(o));r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),l=t.href;t.href=URL.createObjectURL(a),l&&URL.revokeObjectURL(l)}.bind(null,e,n),r=function(){f(e),e.href&&URL.revokeObjectURL(e.href)}):(e=g(n),o=function(t,n){var e=n.css,o=n.media;o&&t.setAttribute("media",o);if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}.bind(null,e),r=function(){f(e)});return o(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;o(t=n)}else r()}}t.exports=function(t,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(n=n||{}).attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=r()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var e=u(t,n);return c(e,n),function(t){for(var r=[],i=0;i<e.length;i++){var a=e[i];(l=o[a.id]).refs--,r.push(l)}t&&c(u(t,n),n);for(i=0;i<r.length;i++){var l;if(0===(l=r[i]).refs){for(var s=0;s<l.parts.length;s++)l.parts[s]();delete o[l.id]}}}};var b=function(){var t=[];return function(n,e){return t[n]=e,t.filter(Boolean).join("\n")}}();function x(t,n,e,o){var r=e?"":o.css;if(t.styleSheet)t.styleSheet.cssText=b(n,r);else{var i=document.createTextNode(r),a=t.childNodes;a[n]&&t.removeChild(a[n]),a.length?t.insertBefore(i,a[n]):t.appendChild(i)}}},function(t,n){t.exports=function(t){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var e=n.protocol+"//"+n.host,o=e+n.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,n){var r,i=n.trim().replace(/^"(.*)"$/,function(t,n){return n}).replace(/^'(.*)'$/,function(t,n){return n});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(r=0===i.indexOf("//")?i:0===i.indexOf("/")?e+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},function(t){t.exports={}},function(t,n){document.getElementById("copyBtn").addEventListener("click",function(){!function(){const t=document.getElementById("css").innerText,n=document.createElement("textarea");n.value=t,document.body.appendChild(n),n.select(),document.execCommand("copy"),document.body.removeChild(n),function(){const t=document.createElement("DIV");t.classList.add("message");const n=document.createElement("SPAN");n.classList.add("message-text"),n.innerHTML="Copied To Clip board",t.appendChild(n),document.body.appendChild(t),t.addEventListener("click",function(){document.body.removeChild(t)}),setTimeout(function(){t.style.display="none"},1e3)}()}()})},function(t,n){const e=document.getElementById("nightSwitch"),o=(document.getElementById("thumb"),document.getElementById("settingsIcon"));e.addEventListener("click",function(){e.classList.toggle("checked"),e.classList.contains("checked")?document.body.classList.replace("light","dark"):document.body.classList.replace("dark","light")}),o.addEventListener("click",function(){document.getElementById("settings").classList.toggle("active")})},function(t,n,e){"use strict";e.r(n);e(2);var o=e(0),r=e(1),i=e.n(r);e(7);function a(){var t=document.getElementById("bubbleWraper").offsetWidth+2;o.topControl.style.left=t*o.brad.t/100+"px",o.topControl.style.top="0",o.rightControl.style.top=t*o.brad.r/100+"px",o.rightControl.style.left=t-2+"px",o.bottomControl.style.left=t*o.brad.b/100+"px",o.bottomControl.style.top=t-2+"px",o.leftControl.style.top=t*o.brad.l/100+"px",o.leftControl.style.left="0"}function l(){var t=document.getElementById("bubbleWraper").offsetWidth+2;new i.a(o.topControl,{onDrag:function(n,e,r,i){o.brad.t=Math.ceil(100*e/t),f()},limit:{x:[0,t-2],y:0}}),new i.a(o.rightControl,{onDrag:function(n,e,r,i){o.brad.r=Math.ceil(100*r/t),f()},limit:{x:t-2,y:[0,t-2]}}),new i.a(o.bottomControl,{onDrag:function(n,e,r,i){o.brad.b=Math.ceil(100*e/t),f()},limit:{x:[0,t-2],y:t-2}}),new i.a(o.leftControl,{onDrag:function(n,e,r,i){o.brad.l=Math.ceil(100*r/t),f()},limit:{x:0,y:[0,t-2]}})}function s(t){var n=document.createElement("DIV");n.classList.add("simple");var e=document.createElement("DIV");e.classList.add("simple-content"),e.style.borderRadius=g(t.border);var o=document.createElement("H3");return o.classList.add("simple-title"),o.innerHTML=t.title,n.appendChild(e),e.addEventListener("click",function(){d(t)}),n.appendChild(o),n}bubble.style.height=bubble.offsetWidth+"px",o.brad.t=Math.ceil(100*o.topControl.offsetLeft/o.width),o.brad.r=Math.ceil(100*o.rightControl.offsetTop/o.width),o.brad.b=Math.ceil(100*o.bottomControl.offsetLeft/o.width),o.brad.l=Math.ceil(100*o.leftControl.offsetTop/o.width),f(),l();const d=function(t){o.brad.t=t.border.t,o.brad.r=t.border.r,o.brad.b=t.border.b,o.brad.l=t.border.l,f(),a()};function c(t){const n=document.getElementById("simpleContainer"),e=document.getElementById("simplesBody"),r=document.getElementById("tabColor"),i=document.getElementById("tabShape");switch(e.innerHTML="",document.body.parentNode.offsetWidth<700&&(t===n.dataset.tab?(n.dataset.tab=null,e.classList.remove("show")):(n.dataset.tab=t,e.classList.add("show"))),t){case"colors":i.classList.remove("active"),r.classList.add("active");for(var a=0;a<o.colors.length;a++)e.appendChild(u(o.colors[a]));break;case"shapes":r.classList.remove("active"),i.classList.add("active");for(a=0;a<8;a++){const t=s(o.shapes[a]);t.dataset.index=a,e.appendChild(t)}}}function u(t){var n=document.createElement("DIV");n.classList.add("simple");var e=document.createElement("DIV");e.classList.add("simple-content"),e.classList.add("color"),e.style.borderRadius="50%",e.style.background=t.color;var r=document.createElement("H3");return r.classList.add("simple-title"),r.innerHTML=t.title,n.appendChild(e),n.addEventListener("click",function(){p(t)}),n.addEventListener("mouseenter",function(){e.style.borderRadius=g(o.brad)}),n.addEventListener("mouseleave",function(){e.style.borderRadius="50%"}),n.appendChild(r),n}var p=function(t){bubble.style.background=t.color,document.getElementById("bgValue").innerHTML=t.color+";"};function f(){const t=g(o.brad);bubble.style.borderRadius=t,document.getElementById("brValue").innerHTML=t+";"}function g(t){return t.t+"% "+(100-t.t)+"% "+(100-t.b)+"% "+t.b+"% /  "+t.l+"% "+t.r+"% "+(100-t.r)+"% "+(100-t.l)+"%"}document.body.parentNode.offsetWidth>700&&c("shapes"),document.getElementById("tabColor").addEventListener("click",function(){c("colors")}),document.getElementById("tabShape").addEventListener("click",function(){c("shapes")}),window.onresize=function(){var t=document.getElementById("widget");bubble.style.height=bubble.offsetWidth+"px",t.style.height=t.offsetWidth+"px",l(),a(),document.getElementById("right").style.right="0"};e(8),e(9)}]);