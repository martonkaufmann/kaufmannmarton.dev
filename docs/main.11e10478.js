!function(e){function t(t){for(var c,o,l=t[0],s=t[1],i=t[2],m=0,p=[];m<l.length;m++)o=l[m],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&p.push(n[o][0]),n[o]=0;for(c in s)Object.prototype.hasOwnProperty.call(s,c)&&(e[c]=s[c]);for(u&&u(t);p.length;)p.shift()();return a.push.apply(a,i||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],c=!0,l=1;l<r.length;l++){var s=r[l];0!==n[s]&&(c=!1)}c&&(a.splice(t--,1),e=o(o.s=r[0]))}return e}var c={},n={6:0},a=[];function o(t){if(c[t])return c[t].exports;var r=c[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(e){var t=[],r=n[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,c){r=n[e]=[t,c]}));t.push(r[2]=c);var a,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=function(e){return o.p+"templates/"+({0:"home/circleci/project/src/pages/404",1:"home/circleci/project/src/pages/articles",2:"home/circleci/project/src/pages/contact-success",3:"home/circleci/project/src/pages/index",4:"home/circleci/project/src/pages/projects",5:"home/circleci/project/src/pages/tools"}[e]||e)+"."+{0:"062c884f",1:"7334536d",2:"9c5fdc83",3:"f0008d26",4:"9f66d2c6",5:"8f05dbcb"}[e]+".js"}(e);var s=new Error;a=function(t){l.onerror=l.onload=null,clearTimeout(i);var r=n[e];if(0!==r){if(r){var c=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+c+": "+a+")",s.name="ChunkLoadError",s.type=c,s.request=a,r[1](s)}n[e]=void 0}};var i=setTimeout((function(){a({type:"timeout",target:l})}),12e4);l.onerror=l.onload=a,document.head.appendChild(l)}return Promise.all(t)},o.m=e,o.c=c,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)o.d(r,c,function(t){return e[t]}.bind(null,c));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw console.error(e),e};var l=window.webpackJsonp=window.webpackJsonp||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var i=0;i<l.length;i++)t(l[i]);var u=s;a.push([60,7,8]),r()}({120:function(e,t,r){var c={".":16,"./":16,"./index":16,"./index.js":16};function n(e){var t=a(e);return r(t)}function a(e){if(!r.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}n.keys=function(){return Object.keys(c)},n.resolve=a,e.exports=n,n.id=120},127:function(e,t,r){"use strict";r.r(t),function(e){var c=r(0),n=r.n(c),a=r(28),o=r.n(a),l=r(53),s=r(22);if(t.default=s.a,"undefined"!=typeof document){var i=document.getElementById("root"),u=i.hasChildNodes()?o.a.hydrate:o.a.render,m=function(e){u(n.a.createElement(l.AppContainer,null,n.a.createElement(e,null)),i)};m(s.a),e&&e.hot&&e.hot.accept("./App",(function(){m(s.a)}))}}.call(this,r(128)(e))},22:function(e,t,r){"use strict";var c=r(0),n=r.n(c),a=r(19),o=r(27),l=r(11),s=r(17),i=r(9),u=r.n(i),m=r(30),p=function(){var e=Object(c.useState)(!1),t=u()(e,2),r=t[0],a=t[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement("nav",{className:"".concat(!r&&"shadow"," h-16 w-full bg-white fixed top-0 flex items-center justify-between px-4 z-10")},n.a.createElement("a",{className:"text-lg",href:"/"},n.a.createElement("span",{className:"text-blue-400"},"<"),"Kaufmann Marton"," ",n.a.createElement("span",{className:"text-blue-400"},"/>")),n.a.createElement("button",{className:"block px-2 py-1 sm:hidden",onClick:function(){return a(!r)}},r?n.a.createElement(l.a,{icon:m.b,size:"lg"}):n.a.createElement(l.a,{icon:m.a,size:"lg"})),n.a.createElement("ul",{className:"flex-row hidden sm:flex"},n.a.createElement("li",{className:"mx-2"},n.a.createElement("a",{className:"nav-link",href:"/"},"Contact")),n.a.createElement("li",{className:"mx-2"},n.a.createElement("a",{className:"nav-link",href:"/projects"},"Projects")),n.a.createElement("li",{className:"mx-2"},n.a.createElement("a",{className:"nav-link",href:"/tools"},"Tools")),n.a.createElement("li",{className:"mx-2"},n.a.createElement("a",{className:"nav-link",href:"/articles"},"Articles")))),r&&n.a.createElement("ul",{className:"nav-dropdown bg-white shadow py-4 border-t fixed w-full"},n.a.createElement("li",{className:"text-center mb-2"},n.a.createElement("a",{className:"text-lg",href:"/"},"Contact")),n.a.createElement("li",{className:"text-center mb-2"},n.a.createElement("a",{className:"text-lg",href:"/tools"},"Tools")),n.a.createElement("li",{className:"text-center"},n.a.createElement("a",{className:"text-lg",href:"/projects"},"Projects"))))};r(134);t.a=function(){return n.a.createElement(a.Root,null,n.a.createElement("main",{className:"w-full h-screen flex flex-col pt-16"},n.a.createElement(p,null),n.a.createElement(n.a.Suspense,{fallback:n.a.createElement("div",{className:"loader"},n.a.createElement("div",{className:"loader__bar"}),n.a.createElement("div",{className:"loader__bar"}),n.a.createElement("div",{className:"loader__bar"}))},n.a.createElement(o.Router,{className:"flex flex-1"},n.a.createElement(a.Routes,{path:"*"})),n.a.createElement("footer",{className:"bg-blue-900 px-4 py-3 text-white text-center"},n.a.createElement("a",{className:"mx-4",target:"_blank","aria-label":"Github",rel:"noreferrer noopener",href:"https://github.com/martonkaufmann"},n.a.createElement(l.a,{icon:s.c,size:"lg"})),n.a.createElement("a",{className:"mx-4",target:"_blank","aria-label":"Twitter",rel:"noreferrer noopener",href:"https://twitter.com/kaufmannmrton"},n.a.createElement(l.a,{icon:s.k,size:"lg"})),n.a.createElement("a",{className:"mx-4",target:"_blank","aria-label":"LinkedIn",rel:"noreferrer noopener",href:"https://www.linkedin.com/in/m%C3%A1rton-kaufmann-10b69248"},n.a.createElement(l.a,{icon:s.f,size:"lg"})),n.a.createElement("a",{className:"mx-4",target:"_blank","aria-label":"Codepen",rel:"noreferrer noopener",href:"https://codepen.io/kaufmannmarton"},n.a.createElement(l.a,{icon:s.a,size:"lg"}))))))}},31:function(e,t,r){"use strict";r.r(t);var c=r(51),n=[{location:"/home/circleci/project/node_modules/react-static-plugin-source-filesystem",plugins:[],hooks:{}},{location:"/home/circleci/project/node_modules/react-static-plugin-reach-router",plugins:[],hooks:r.n(c)()({})},{location:"/home/circleci/project/node_modules/react-static-plugin-sitemap/dist",plugins:[],hooks:{}},{location:"/home/circleci/project",plugins:[],hooks:{}}];t.default=n},49:function(e,t,r){"use strict";r.r(t),function(e){r.d(t,"notFoundTemplate",(function(){return b}));var c=r(5),n=r.n(c),a=r(6),o=r.n(a),l=r(0),s=r.n(l),i=r(7),u=r.n(i);Object(i.setHasBabelPlugin)();var m={loading:function(){return null},error:function(e){return console.error(e.error),s.a.createElement("div",null,"An error occurred loading this page's template. More information is available in the console.")},ignoreBabelRename:!0},p=u()(o()({id:"/home/circleci/project/src/pages/404.js",load:function(){return Promise.all([r.e(0).then(r.bind(null,54))]).then((function(e){return e[0]}))},path:function(){return n.a.join(e,"/home/circleci/project/src/pages/404.js")},resolve:function(){return 54},chunkName:function(){return"home/circleci/project/src/pages/404"}}),m);p.template="/home/circleci/project/src/pages/404.js";var f=u()(o()({id:"/home/circleci/project/src/pages/articles.js",load:function(){return Promise.all([r.e(1).then(r.bind(null,55))]).then((function(e){return e[0]}))},path:function(){return n.a.join(e,"/home/circleci/project/src/pages/articles.js")},resolve:function(){return 55},chunkName:function(){return"home/circleci/project/src/pages/articles"}}),m);f.template="/home/circleci/project/src/pages/articles.js";var h=u()(o()({id:"/home/circleci/project/src/pages/contact-success.js",load:function(){return Promise.all([r.e(2).then(r.bind(null,56))]).then((function(e){return e[0]}))},path:function(){return n.a.join(e,"/home/circleci/project/src/pages/contact-success.js")},resolve:function(){return 56},chunkName:function(){return"home/circleci/project/src/pages/contact-success"}}),m);h.template="/home/circleci/project/src/pages/contact-success.js";var d=u()(o()({id:"/home/circleci/project/src/pages/index.js",load:function(){return Promise.all([r.e(3).then(r.bind(null,57))]).then((function(e){return e[0]}))},path:function(){return n.a.join(e,"/home/circleci/project/src/pages/index.js")},resolve:function(){return 57},chunkName:function(){return"home/circleci/project/src/pages/index"}}),m);d.template="/home/circleci/project/src/pages/index.js";var j=u()(o()({id:"/home/circleci/project/src/pages/projects.js",load:function(){return Promise.all([r.e(4).then(r.bind(null,58))]).then((function(e){return e[0]}))},path:function(){return n.a.join(e,"/home/circleci/project/src/pages/projects.js")},resolve:function(){return 58},chunkName:function(){return"home/circleci/project/src/pages/projects"}}),m);j.template="/home/circleci/project/src/pages/projects.js";var g=u()(o()({id:"/home/circleci/project/src/pages/tools.js",load:function(){return Promise.all([r.e(5).then(r.bind(null,59))]).then((function(e){return e[0]}))},path:function(){return n.a.join(e,"/home/circleci/project/src/pages/tools.js")},resolve:function(){return 59},chunkName:function(){return"home/circleci/project/src/pages/tools"}}),m);g.template="/home/circleci/project/src/pages/tools.js",t.default={"/home/circleci/project/src/pages/404.js":p,"/home/circleci/project/src/pages/articles.js":f,"/home/circleci/project/src/pages/contact-success.js":h,"/home/circleci/project/src/pages/index.js":d,"/home/circleci/project/src/pages/projects.js":j,"/home/circleci/project/src/pages/tools.js":g};var b="/home/circleci/project/src/pages/404.js"}.call(this,"/")},60:function(e,t,r){r(61),r(118),e.exports=r(124)}});