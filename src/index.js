import './css/styles.css';
import { fetchCountries } from './js/components/fetchCountries';
export { refs };
    
let refs = {
    sBox: document.querySelector('#search-box'),
    cList: document.querySelector('.country-list'),
    cInfo: document.querySelector('.country-info')
}
const debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;
// console.log(refs.cInfo);
refs.sBox.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY))
function onSearch(e) {
    console.dir(e.path[0]);
    e.preventDefault();
    if (e.target.value ==='') {
        refs.cList.innerHTML = '';
        refs.cInfo.innerHTML = '';
    }
    fetchCountries(e.target.value)
}
