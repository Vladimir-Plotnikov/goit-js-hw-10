import './css/styles.css';
import { fetchCountries } from './js/components/fetchCountries';
export { refs };
    
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


const DEBOUNCE_DELAY = 300;
