!function(){var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(n){return n&&n.__esModule?n.default:n}var e={sBox:document.querySelector("#search-box"),cList:document.querySelector(".country-list"),cInfo:document.querySelector(".country-info")},o={},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(n){return n&&n.constructor===Symbol?"symbol":typeof n};var r=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=l||s||Function("return this")(),p=Object.prototype.toString,v=Math.max,y=Math.min,g=function(){return d.Date.now()};function m(n){var e=void 0===n?"undefined":t(i)(n);return!!n&&("object"==e||"function"==e)}function b(n){if("number"==typeof n)return n;if(function(n){return"symbol"==(void 0===n?"undefined":t(i)(n))||function(n){return!!n&&"object"==typeof n}(n)&&"[object Symbol]"==p.call(n)}(n))return NaN;if(m(n)){var e="function"==typeof n.valueOf?n.valueOf():n;n=m(e)?e+"":e}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(r,"");var o=c.test(n);return o||u.test(n)?f(n.slice(2),o?2:8):a.test(n)?NaN:+n}o=function(n,t,e){var o,i,r,a,c,u,f=0,l=!1,s=!1,d=!0;if("function"!=typeof n)throw new TypeError("Expected a function");function p(t){var e=o,r=i;return o=i=void 0,f=t,a=n.apply(r,e)}function h(n){return f=n,c=setTimeout(T,t),l?p(n):a}function j(n){var e=n-u;return void 0===u||e>=t||e<0||s&&n-f>=r}function T(){var n=g();if(j(n))return L(n);c=setTimeout(T,function(n){var e=t-(n-u);return s?y(e,r-(n-f)):e}(n))}function L(n){return c=void 0,d&&o?p(n):(o=i=void 0,a)}function O(){var n=g(),e=j(n);if(o=arguments,i=this,u=n,e){if(void 0===c)return h(u);if(s)return c=setTimeout(T,t),p(u)}return void 0===c&&(c=setTimeout(T,t)),a}return t=b(t)||0,m(e)&&(l=!!e.leading,r=(s="maxWait"in e)?v(b(e.maxWait)||0,t):r,d="trailing"in e?!!e.trailing:d),O.cancel=function(){void 0!==c&&clearTimeout(c),f=0,o=u=i=c=void 0},O.flush=function(){return void 0===c?a:L(g())},O};e.sBox.addEventListener("input",o((function(n){console.dir(n.path[0]),n.preventDefault(),""===n.target.value&&(e.cList.innerHTML="",e.cInfo.innerHTML="");t=n.target.value,fetch("".concat("https://restcountries.com/v3.1/name/").concat(t,"?").concat("fields=name,capital,population,flags,languages")).then((function(n){return n.ok||console.log("error"),n.json()})).then((function(n){var t=n[0].flags.png,o=n[0].name.official,i=n[0].capital[0],r=n[0].population,a=n[0].languages;e.cList.innerHTML='<div class="flag-country-block">\n        <img\n          class="flag"\n          src="'.concat(t,'"\n          alt="flag"\n        />\n        <h2>').concat(o,"</h2></div>"),e.cInfo.innerHTML='<ul class="country-info-details">\n        <li class="country-info-item">\n          <h2>Capital:</h2>\n          <span class="info-value">'.concat(i,'</span>\n        </li>\n        <li class="country-info-item">\n          <h2>Population:</h2>\n          <span class="info-value">').concat(r,'</span\n          >\n        </li>\n        <li class="country-info-item">\n          <h2>Languages:</h2>\n          <span class="info-value">').concat(Object.values(a),"</span\n          >\n        </li>\n      </ul>")}));var t}),300))}();
//# sourceMappingURL=index.59320b5c.js.map
