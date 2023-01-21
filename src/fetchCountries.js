import Notiflix from 'notiflix';
import { clearCards } from './clear';
import { clearVariables } from './clear';

Notiflix.Notify.init({
  position: 'right',
  timeout: 1500,
});

export default function fetchCountries(name) {
  return fetch(
    `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
}