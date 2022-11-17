import './css/styles.css';
const refs = {
    sb: document.querySelector('#search-box'),
    cList: document.querySelector('.country-list'),
    cInfo: document.querySelector('.country-info')
}
console.log(refs.sb);
console.log(refs.cList);
console.log(refs.cInfo);

const DEBOUNCE_DELAY = 300;
