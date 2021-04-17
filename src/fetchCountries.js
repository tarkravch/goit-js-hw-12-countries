import debounce from 'lodash.debounce';
import countriesItem from './templates/countries-item.hbs';
/* import foundCountry from './templates/found-country.hbs'; */

const inputForm = document.querySelector('.input-field');
/* const bodyElement = document.querySelector('body'); */
const countriesContainer = document.querySelector('.countries-list');


inputForm.addEventListener('input', debounce(event => {
    const searchQuery = event.target.value;
    return fetchCountries(searchQuery);
}, 500));


export default function fetchCountries(searchQuery) {
    return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
        .then(response => {
            return response.json();
        })
        .then(foundCountry => {
            console.log(foundCountry.length);
            if (foundCountry.length <= 10 && foundCountry.length >= 2) {
                countriesContainer.innerHTML = countriesItem(foundCountry);

            };

        });
}