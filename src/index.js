import './css/styles.css';
let refs = {
    sBox: document.querySelector('#search-box'),
    cList: document.querySelector('.country-list'),
    cInfo: document.querySelector('.country-info')
}
console.log(refs.cInfo);

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
        // console.log(data[0]);
        console.log(data[0].flag);
        console.log(data[0].altSpellings[2]);
        console.log(data[0].capital[0]);
        console.log(data[0].population);
        console.log(data[0].languages);
    })
}




const DEBOUNCE_DELAY = 300;
