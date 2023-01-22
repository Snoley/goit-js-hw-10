import './css/styles.css';
import fetchCountries from './fetchCountries';
import Notiflix from 'notiflix';
import createCountryCard from './createCard';
import createListCountry from './createCountry';
import { clearCards } from './clear';
import { clearVariables } from './clear';
import { countryStyles } from './styles';

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
  const request = inputForCountry.value.trim();
    clearCards();
    clearVariables();
    if (request !== '') {
  fetchCountries(request)
    .then(data => {
      if (data.length > 10) {
        Notiflix.Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
        clearCards();
        clearVariables();
      } 
      else if (data.length === 0) {
        Notiflix.Notify.failure('Oops, there is no country with that name');
      }
      else if (data.length === 1) {
        createCountryCard(data);
      } else if (data.length >= 2 && data.length <= 10) {
        createListCountry(data);
      }
      
    })
    .catch(() => {});
}
}

