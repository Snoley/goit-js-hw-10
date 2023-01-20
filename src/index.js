import './css/styles.css';
import fetchCountries from './fetchCountries';
import Notiflix from 'notiflix';
import createCountryCard from './createCard';
import createListCountry from './createCountry';
import { clearCard } from './clear';
import { clearList } from './clear';
import { countryStyles } from './style';

let request;

const bodyStyle = document.body;
bodyStyle.insertAdjacentHTML('afterbegin', countryStyles);

const debounce = require('lodash.debounce');
const DELAY = 300;

const inputForCountry = document.querySelector('#search-box');

inputForCountry.addEventListener(
  'input',
  debounce(searchRequest, DELAY)
);

export default function searchRequest() {
  request = inputForCountry.value.trim();
  if (!request) {
    clearCard();
    clearList();
  }
  fetchCountries(request)
    .then(data => {
      if (data.length > 10) {
        Notiflix.Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
      } else if (data.length === 1) {
        createCountryCard(data);
      } else if (data.length > 1 && data.length <= 10) {
        createListCountry(data);
      }
    })
    .catch(() => {});
}

