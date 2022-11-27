import { refs } from '../../index';
import Notiflix from 'notiflix';
export { fetchCountries };

function fetchCountries(name) {
    const fields = 'fields=name,capital,population,flags,languages';
    const BASE_URL = 'https://restcountries.com/v3.1/name/'
    return fetch(`${BASE_URL}${name}?${fields}`).then((response) => {
        if (!response.ok) {
            // throw new Error(response.status)
            console.log('error');
        }
        return response.json();
    }).then((countryGetInfo) => {
        // console.dir(data);
        for (const key in countryGetInfo) {
            const countryItems = countryGetInfo[key]
            const { flags, name, capital, languages, population } = countryItems;
            const markupList = `<div class="flag-country-block">
        <img
          class="flag"
          src="${flags.png}"
          alt="flag"
        />
        <h2>${name.common}</h2></div>`
            
            refs.cList.insertAdjacentHTML("beforeend", markupList)

            console.dir(refs.cList.childElementCount);
       
        }
    })
}







    //         const markupSecond = refs.cInfo.innerHTML = `<ul class="country-info-details">
    //     <li class="country-info-item">
    //       <h2>Capital:</h2>
    //       <span class="info-value">${capital}</span>
    //     </li>
    //     <li class="country-info-item">
    //       <h2>Population:</h2>
    //       <span class="info-value">${population}</span
    //       >
    //     </li>
    //     <li class="country-info-item">
    //       <h2>Languages:</h2>
    //       <span class="info-value">${Object.values(languages)}</span
    //       >
    //     </li>
    //   </ul>`
    

        // const flag = data.flags.png;
        // const fullName = data.name.official;
        // const capital = data.capital[0];
        // const popul = data.population;
        // const languages = data.languages;
 






