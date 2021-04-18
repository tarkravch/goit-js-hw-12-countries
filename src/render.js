import debounce from 'lodash.debounce';
import countriesItem from './templates/countries-item.hbs';
import countryToFind from './templates/found-country.hbs';

import fetchCountries from './fetchCountries';
import { refs } from './refs';
import '../src/styles.css';
import '../node_modules/@pnotify/core/dist/PNotify.css';
import '../node_modules/@pnotify/mobile/dist/PNotifyMobile.css';
import '../node_modules/@pnotify/core/dist/BrightTheme.css';
import { alert, error, success, defaultModules } from '../node_modules/@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '../node_modules/@pnotify/mobile/dist/PNotifyMobile.js';

export function renderInfo(foundCountry) {

    console.log(foundCountry);
    if (foundCountry.length <= 10 && foundCountry.length >= 2) {
        renderList(foundCountry);
        noticeError('Please try more specific query.');
    }
    if (foundCountry.length === 1) {
        renderCard(foundCountry);
        noticeSuccess('Country successfully found!');
    }
    if (foundCountry.length > 10) {
        clearInputField();
        noticeError('Too many matches found. Please try more specific query.');
    }
    if (foundCountry.status === 404) {
        clearInputField();
        noticeError(foundCountry.message);
    }
}

export function renderList(foundCountry) {
    refs.targetCountry.innerHTML = '';
    refs.countriesContainer.innerHTML = countriesItem(foundCountry);
}

export function renderCard(foundCountry) {
    refs.countriesContainer.innerHTML = '';
    refs.targetCountry.innerHTML = countryToFind(foundCountry);
}

export function clearInputField() {
    refs.countriesContainer.innerHTML = '';
    refs.targetCountry.innerHTML = '';
}

export function noticeSuccess(message) {
    const mySuccess = success({
        text: message,
        delay: 2000,
    });
}

export function noticeError(message) {
    const myError = error({
        text: message,
        delay: 3000,
    });
}