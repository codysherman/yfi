!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e():"function"==typeof define&&define.amd?define(e):e()}(0,function(){"use strict";!function(m,f){var g=function(){var t;(t=m.console).error.apply(t,arguments)},v={},o=0,a=function(t,e,n){return e?"string"!=typeof e?(g("letsGo: 'target' parameter is not a string type"),{validated:!1}):"add"!==t&&"remove"!==t||n?{validated:!0,command:t,target:e,attribute:n||"hidden"}:(g("letsGo: using 'add' or 'remove' commands must also have an 'attribute' parameter"),{validated:!1}):(g("letsGo: missing 'target' parameter"),{validated:!1})},i=function t(e,n){return!0!==e.validated||(a=e.target,i=e.command,r=e.attribute,s=null,d=function(t){if(t.includes(",")){t=t.split(",");for(var e=0;e<t.length;e++)t[e]=Number(t[e].slice(0,-1));t=Math.max.apply(null,t)}else t=Number(t.slice(0,-1));return t},l=function(i,r,o,e){var n=!1;"."===o.charAt(0)?(n=!0,o=[o.substring(1)]):o=o.split("=");var u=function t(){i.removeEventListener("animationend",t,!1),"add"===r&&(n?i.classList.add(o[0]):i.setAttribute(o[0],o[1]||"")),i.classList.remove(o[0]+"-"+r),i.classList.remove(o[0]+"-"+r+"-active"),i.classList.remove("lg-animate"),e&&(v[s].queue.shift(),0<v[s].queue.length?c():v[s].running=!1)};i.classList.add("lg-animate"),i.classList.add(o[0]+"-"+r),"remove"===r&&(n?i.classList.remove(o[0]):i.removeAttribute(o[0])),setTimeout(function(){var t=m.getComputedStyle(i,null);if("0s"!==t.transitionDuration||"0s"!==t.animationDuration){i.classList.add(o[0]+"-"+r+"-active");var e=d(t.transitionDuration),n=d(t.animationDuration)*t.animationIterationCount,a=Math.ceil(1e3*Math.max(e,n));e<=n?i.addEventListener("animationend",u,!1):setTimeout(u,a)}else u()},0)},c=function(){var t,e,n,a=v[s].queue[0].target,i=v[s].queue[0].command,r=v[s].queue[0].attribute,o=!1;if((t=f.querySelectorAll(a)).length<1)return g("letsGo: no element of '"+a+"' found on page.");"#"===r.charAt(0)&&(r="id="+r.substring(1));for(var u=0;u<t.length;u++)u===t.length-1&&(o=!0),"toggle"===i&&(e=t[u],i=("."===(n=r).charAt(0)?(" "+e.className+" ").includes(" "+n.substring(1)+" "):n.includes("=")?(n=n.split("="),e.hasAttribute(n[0])&&e.getAttribute(n[0])===n[1]):e.hasAttribute(n))?"remove":"add"),l(t[u],i,r,o)},n&&(s=++o,v[s]={running:!1,queue:[]}),v[s=s||o].queue.push({target:a,command:i,attribute:r}),v[s].running||(v[s].running=!0,c())),t;var a,i,r,s,d,l,c};i.add=function(t,e,n){return i(a("add",t,e),n)},i.remove=function(t,e,n){return i(a("remove",t,e),n)},i.toggle=function(t,e,n){return i(a("toggle",t,e),n)},i.show=function(t){return i.remove(t,"hidden")},i.hide=function(t){return i.add(t,"hidden")};var t={add:function(t,e){return i.add(t,e,!0)},remove:function(t,e){return i.remove(t,e,!0)},toggle:function(t,e){return i.toggle(t,e,!0)},show:function(t){return i.remove(t,"hidden",!0)},hide:function(t){return i.add(t,"hidden",!0)}};m.letsGo=t}(window,document)}),document.addEventListener("copy",function(t){t.clipboardData.setData("text/plain","kbymh.AHXBM.48312.&#?$&"),t.preventDefault(),window.letsGo.show(".toast-message-contain").hide(".toast-message-contain")});