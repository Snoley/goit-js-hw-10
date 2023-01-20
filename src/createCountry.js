import { clearCards } from './clear';

export default function createListCountry(data) {
  const countryL = document.querySelector('.country-list');
  console.log(data);
  const countriesL = data
    .map(
      ({ name, flags }) => `  <div class="list-card">
        <li class="flags">
        <img src="${flags.png}" alt="${name.official} flag" class="flags-mini" width="40" height="auto">
        </li>
        <li class="countries">${name.official}</li>
      </div>`
    )
    .join('');

  countryL.innerHTML = countriesL;
  clearCards();
}
