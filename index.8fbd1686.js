!function(){var n={sBox:document.querySelector("#search-box"),cList:document.querySelector(".country-list"),cInfo:document.querySelector(".country-info")};n.sBox.addEventListener("input",(function(a){a.preventDefault(),c=a.target.value,fetch("https://restcountries.com/v3.1/name/".concat(c)).then((function(n){return n.ok||console.log("error"),n.json()})).then((function(a){var c=a[0].flags.png,t=a[0].name.official,o=a[0].capital[0],e=a[0].population,l=a[0].languages;n.cList.innerHTML='<div class="flag-country-block">\n        <img\n          class="flag"\n          src="'.concat(c,'"\n          alt="flag"\n        />\n        <h2>').concat(t,"</h2></div>"),n.cInfo.innerHTML='<ul class="country-info-details">\n        <li class="country-info-item">\n          <h2>Capital:</h2>\n          <span class="info-value">'.concat(o,'</span>\n        </li>\n        <li class="country-info-item">\n          <h2>Population:</h2>\n          <span class="info-value">').concat(e,'</span\n          >\n        </li>\n        <li class="country-info-item">\n          <h2>Languages:</h2>\n          <span class="info-value">').concat(Object.values(l),"</span\n          >\n        </li>\n      </ul>")}));var c}))}();
//# sourceMappingURL=index.8fbd1686.js.map