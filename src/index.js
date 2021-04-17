import '../src/styles.css';
import '../node_modules/@pnotify/core/dist/PNotify.css';
import '../node_modules/@pnotify/mobile/dist/PNotifyMobile.css';
import debounce from 'lodash.debounce';
import searchCountries from './fetchCountries';
import notification from './fetchCountries';
import countriesItem from './templates/countries-item.hbs';
import countryToFind from './templates/found-country.hbs';

import { alert, defaultModules } from '../node_modules/@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '../node_modules/@pnotify/mobile/dist/PNotifyMobile.js';