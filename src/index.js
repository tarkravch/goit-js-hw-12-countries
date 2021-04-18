import '../src/styles.css';
import '../node_modules/@pnotify/core/dist/PNotify.css';
import '../node_modules/@pnotify/mobile/dist/PNotifyMobile.css';
import '../node_modules/@pnotify/core/dist/BrightTheme.css';
import debounce from 'lodash.debounce';
import fetchCountries from './fetchCountries';

import { refs } from './refs';


import renderInfo from './render';
import noticeError from './render';
import renderList from './render';
import renderCard from './render';
import clearInputField from './render';

import countriesItem from './templates/countries-item.hbs';
import countryToFind from './templates/found-country.hbs';

import { alert, error, success, defaultModules } from '../node_modules/@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '../node_modules/@pnotify/mobile/dist/PNotifyMobile.js';