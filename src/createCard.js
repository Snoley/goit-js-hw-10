import { clearVariables } from './clear';

export default function createCountryCard(data) {
  const el = data[0];
  const countryInfo = document.querySelector('.country-info');
  countryInfo.innerHTML = `<div class="name-container"><img src="${
    el.flags.svg
  }" alt="${el.name.official} flag" class="flag" width="190" height=auto>
      <h2 class="country">${el.name.official}</h2>
      </div>
      <p class="info"><span class="header-span">Capital: </span>${el.capital}</p>
      <p class="info"><span class="header-span">Population: </span>${
        el.population
      }</p>
      <p class="info"><span class="header-span">Languages: </span>${Object.values(
        el.languages
      ).join(', ')}</p>`;
      clearVariables();
}
