import debounce from 'lodash.debounce';
import countriesItem from './templates/countries-item.hbs';
import countryToFind from './templates/found-country.hbs';

import { refs } from './refs';
import { renderInfo } from './render';
import { noticeError } from './render';
import renderList from './render';
import renderCard from './render';
import clearInputField from './render';

import '../node_modules/@pnotify/core/dist/PNotify.css';
import '../node_modules/@pnotify/mobile/dist/PNotifyMobile.css';
import '../node_modules/@pnotify/core/dist/BrightTheme.css'
import '../src/styles.css';
import { alert, error, success, defaultModules } from '../node_modules/@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '../node_modules/@pnotify/mobile/dist/PNotifyMobile.js';


refs.inputForm.addEventListener('input', debounce(event => {
    const form = event.target;
    const searchQuery = form.value;

    return fetchCountries(searchQuery)
        .then(renderInfo)
        .catch(error => {
            noticeError('There is an error. Please try more specific query.');
        })
        .finally(() => {
            refs.inputForm.value = '';
        })

}, 500));


export function fetchCountries(searchQuery) {
    return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
        .then(response => {
            return response.json();
        })
}