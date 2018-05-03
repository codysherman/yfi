"use strict";var letsGoRunning=!1,letsGoQueue=[],letsGo=function(e,t,o,n){var s=!1,r=function(e){s&&e&&(letsGoQueue.shift(),0<letsGoQueue.length?l(letsGoQueue[0][0],letsGoQueue[0][1],letsGoQueue[0][2]):letsGoRunning=!1)},u=function(e,t,o){return!t||o?(t=t||"letsGo-hide",-1<(" "+e.className+" ").indexOf(" "+t+" ")):-1<t.indexOf("=")?(t=t.split("="),e.hasAttribute(t[0])&&e.getAttribute(t[0])===t[1]):e.hasAttribute(t)&&""===e.getAttribute(t)},d=function(e){if(-1<e.indexOf(",")){e=e.split(",");for(var t=0;t<e.length;t++)e[t]=Number(e[t].slice(0,-1));e=Math.max.apply(null,e)}else e=Number(e.slice(0,-1));return e},g=function(n,s,e,l,t,o){var i=e?"add":"remove";if(t){var a=function(){n.removeEventListener("animationend",a,!1),e&&n.classList.add(l),n.classList.remove(l+"-"+i),n.classList.remove(l+"-"+i+"-active"),n.classList.remove("letsGo-animate"),r(o)};n.classList.add("letsGo-animate"),n.classList.add(l+"-"+i),e||n.classList.remove(l),setTimeout(function(){if("0s"!==s.transitionDuration||"0s"!==s.animationDuration){n.classList.add(l+"-"+i+"-active");var e=d(s.transitionDuration),t=d(s.animationDuration),o=Math.ceil(1e3*Math.max(e,t));setTimeout(a,o),"0s"!==s.animationDuration&&n.addEventListener("animationend",a,!1)}else a()},0)}else e?-1<l.indexOf("=")?(l=l.split("="),n.setAttribute(l[0],l[1])):n.setAttribute(l,""):-1<l.indexOf("=")?(l=l.split("="),n.removeAttribute(l[0])):n.removeAttribute(l),r(o)},l=function(e,t,o){if(e)if(t)if("string"==typeof e){var n=null,s=null,l=!1;if("#"===e.charAt(0)){if(n="id",e=e.substring(1),null!==(a=document.getElementById(e))){var i=window.getComputedStyle(a,null);"show"===t||"hide"===t?o?console.log("letsGo: using 'show' or 'hide' command can not have an 'attribute' parameter."):"show"===t?g(a,i,!1,"letsGo-hide",!0,!0):"hide"===t&&g(a,i,!0,"letsGo-hide",!0,!0):"add"===t||"remove"===t?o?("."===o.charAt(0)?(s=!0,o=o.substring(1)):"#"===o.charAt(0)&&(o="id="+o.substring(1)),"add"===t?g(a,i,!0,o,s,!0):"remove"===t&&g(a,i,!1,o,s,!0)):console.log("letsGo: using 'add' or 'remove' command must also have an 'attribute' parameter."):"toggle"===t?(o&&"."===o.charAt(0)?(s=!0,o=o.substring(1)):o&&"#"===o.charAt(0)?o="id="+o.substring(1):o||(s=!0,o="letsGo-hide"),u(a,o,s)?g(a,i,!1,o,s,!0):g(a,i,!0,o,s,!0)):console.log("letsGo: 'command' parameter is not the string 'show', 'hide', 'add', 'remove', or 'toggle'.")}else console.log("letsGo: no element of "+n+" '"+e+"' found on page.")}else{var a=[];if("."===e.charAt(0)?(n="class",e=e.substring(1),a=document.getElementsByClassName(e)):(n="tag",a=document.getElementsByTagName(e)),0<a.length)if("show"===t||"hide"===t){if(o)console.log("letsGo: using 'show' or 'hide' command can not have an 'attribute' parameter.");else if("show"===t)for(var r=0;r<a.length;r++){i=window.getComputedStyle(a[r],null);r===a.length-1&&(l=!0),g(a[r],i,!1,"letsGo-hide",!0,l)}else if("hide"===t)for(r=0;r<a.length;r++){i=window.getComputedStyle(a[r],null);r===a.length-1&&(l=!0),g(a[r],i,!0,"letsGo-hide",!0,l)}}else if("add"===t||"remove"===t)if(o){if("."===o.charAt(0)?(s=!0,o=o.substring(1)):"#"===o.charAt(0)&&(o="id="+o.substring(1)),"add"===t)for(r=0;r<a.length;r++){i=window.getComputedStyle(a[r],null);r===a.length-1&&(l=!0),g(a[r],i,!0,o,s,l)}else if("remove"===t)for(r=0;r<a.length;r++){i=window.getComputedStyle(a[r],null);r===a.length-1&&(l=!0),g(a[r],i,!1,o,s,l)}}else console.log("letsGo: using 'add' or 'remove' command must also have an 'attribute' parameter.");else if("toggle"===t){o&&"."===o.charAt(0)?(s=!0,o=o.substring(1)):o&&"#"===o.charAt(0)?o="id="+o.substring(1):o||(s=!0,o="letsGo-hide");for(r=0;r<a.length;r++){i=window.getComputedStyle(a[r],null);r===a.length-1&&(l=!0),u(a[r],o,s)?g(a[r],i,!1,o,s,l):g(a[r],i,!0,o,s,l)}}else console.log("letsGo: 'command' parameter is not the string 'show', 'hide', 'add', 'remove', or 'toggle'.");else console.log("letsGo: no element of "+n+" '"+e+"' found on page.")}}else console.log("letsGo: 'target' parameter is not a string type.");else console.log("letsGo: missing 'command' parameter.");else console.log("letsGo: missing 'target' parameter.")},i=function(e,t,o){setTimeout(function(){letsGoQueue.push([e,t,o]),letsGoRunning||(letsGoRunning=!0,l(letsGoQueue[0][0],letsGoQueue[0][1],letsGoQueue[0][2]))},0)};n||!0===o?(s=!0)===o?i(e,t):"boolean"==typeof n?i(e,t,o):console.log("letsGo: 'queue' parameter is not a boolean"):l(e,t,o)},test=function(){window.getSelection().removeAllRanges();var e=document.querySelector("#password"),t=document.createRange();t.selectNode(e),window.getSelection().addRange(t);try{document.execCommand("copy")}catch(e){console.log("Oops, unable to copy")}window.getSelection().removeAllRanges()};