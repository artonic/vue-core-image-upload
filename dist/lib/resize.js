!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueCoreImageUpload=t():e.VueCoreImageUpload=t()}(window,(function(){return o={},e.m=t={0:function(e,t){e.exports={isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),setCssText:function(e){var t=[];for(var o in e){var i=e[o];"number"==typeof i&&(i+="px"),t.push(o+": "+i+";")}return t.join("")}}},7:function(e,t,o){"use strict";o.r(t),o.d(t,"default",(function(){return u}));var i=o(0),n=o.n(i).a.isMobile,r=document.body.offsetWidth;function u(e,t,o,i,u){if(t){var d=document.body.offsetHeight,h=1/u,f=parseFloat(window.getComputedStyle(o).width),a=parseFloat(window.getComputedStyle(o).height),l=document.querySelector(".info-aside"),c=(r-f)/2,s=parseFloat(window.getComputedStyle(l).height),p=(d-a-s)/2,g=n?e.changedTouches[0].clientX:e.clientX,w=n?e.changedTouches[0].clientY:e.clientY,y=t.offsetWidth,b=t.offsetHeight,m={};return 1<=u&&g<=c+f?(f<=y&&(m.width=f),m.width=i.w+g-i.x,m.height=y*h,a<f?a<y&&(m.height=a,m.width=a*u):f<a?f<y&&(m.width=f,m.height=f*h):f<=y&&(m.width=f,m.height=f*h)):u<1&&w<p+a+s?(m.height=i.h+w-i.y,m.width=b*u,a<f?a<b&&(m.height=a,m.width=a*u):f<y&&(m.width=f,m.height=f*h)):"auto"==u&&w<=p+a+s&&g<=p+f?(m.height=i.h+w-i.y,m.width=i.w+g-i.x):g<=c+f&&(m.width=i.w+g-i.x,m.height=t.style.width,a<f?a<b&&(m.height=a,m.width=a):f<a?f<y&&(m.width=f,m.height=f):f<y&&(m.width=t.style.height=f)),m}}}},e.c=o,e.d=function(t,o,i){e.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:i})},e.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},e.t=function(t,o){if(1&o&&(t=e(t)),8&o)return t;if(4&o&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(e.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var n in t)e.d(i,n,function(e){return t[e]}.bind(null,n));return i},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},e.p="",e(e.s=7);function e(i){if(o[i])return o[i].exports;var n=o[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var t,o}));