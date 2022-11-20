import './css/styles.css';
let refs = {
    sBox: document.querySelector('#search-box'),
    cList: document.querySelector('.country-list'),
    cInfo: document.querySelector('.country-info')
}
// console.log(refs.cInfo);

refs.sBox.addEventListener('input', onSearch)

function onSearch(e){
    e.preventDefault();
    fetchCountries(e.target.value)
}


function fetchCountries(name) {
    return fetch(`https://restcountries.com/v3.1/name/${name}`).then((response) => {
        if (!response.ok) {
            // throw new Error(response.status)
            console.log('error');
        }
        return response.json();
    }).then((data) => {
        const flag = data[0].flags.png;
        const fullName = data[0].name.official;
        const capital = data[0].capital[0];
        const popul = data[0].population;
        const languages = data[0].languages;
        refs.cList.innerHTML = `<div class="flag-country-block">
        <img
          class="flag"
          src="${flag}"
          alt="flag"
        />
        <h2>${fullName}</h2></div>`
        refs.cInfo.innerHTML = `<ul class="country-info-details">
        <li class="country-info-item">
          <h2>Capital:</h2>
          <span class="info-value">${capital}</span>
        </li>
        <li class="country-info-item">
          <h2>Population:</h2>
          <span class="info-value">${popul}</span
          >
        </li>
        <li class="country-info-item">
          <h2>Languages:</h2>
          <span class="info-value">${Object.values(languages)}</span
          >
        </li>
      </ul>`
    })
}

const DEBOUNCE_DELAY = 300;
