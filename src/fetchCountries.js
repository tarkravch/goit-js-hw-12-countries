import debounce from 'lodash.debounce';
import countriesItem from './templates/countries-item.hbs';
import countryToFind from './templates/found-country.hbs';
import '../node_modules/@pnotify/core/dist/PNotify.css';
import '../node_modules/@pnotify/mobile/dist/PNotifyMobile.css';
import { alert, defaultModules } from '../node_modules/@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '../node_modules/@pnotify/mobile/dist/PNotifyMobile.js';


/* import foundCountry from './templates/found-country.hbs'; */

const inputForm = document.querySelector('.input-field');
/* const bodyElement = document.querySelector('body'); */
const countriesContainer = document.querySelector('.countries-list');
const targetCountry = document.querySelector('.found-country');


inputForm.addEventListener('input', debounce(event => {
    const form = event.target;
    const searchQuery = form.value;
    if (searchQuery === '') {
        return form.reset();
    }
    return fetchCountries(searchQuery);

}, 500));


export default function fetchCountries(searchQuery) {
    return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
        .then(response => {
            return response.json();
        })
        .then(foundCountry => {
            console.log(foundCountry);
            if (foundCountry.length <= 10 && foundCountry.length >= 2) {
                targetCountry.innerHTML = '';
                countriesContainer.innerHTML = countriesItem(foundCountry);
                // return notification(not.clarify);
                defaultModules.set(PNotifyMobile, {});
                alert({ text: 'Будь ласка уточніть запит!' });
            }
            if (foundCountry.length === 1) {
                countriesContainer.innerHTML = '';
                targetCountry.innerHTML = countryToFind(foundCountry);
            }
            if (foundCountry.length > 10) {
                countriesContainer.innerHTML = '';
                targetCountry.innerHTML = '';
                defaultModules.set(PNotifyMobile, {});
                alert({ text: 'Будь ласка уточніть запит!' });
            }
        })
        .catch(error => {
            console.log(error);
            defaultModules.set(PNotifyMobile, {});
            alert({ text: `${error}, Будь ласка уточніть запит!` });
        })
        .finally(() => {
            inputForm.value = '';
        })
}

/* const not = {
    clarify: "Будь ласка уточніть запит!",
} */

export function notification(message) {
    return new PNotify({
        title: "Notification!",
        text: message,
    });
}