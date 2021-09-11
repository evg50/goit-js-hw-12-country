import getRefs from "./refs";
import countriesCardTpl from "../templates/countries.hbs";
import countryCardTpl from "../templates/country.hbs";

import API from "./Api";

const debounce = require("lodash.debounce");
// console.log(debounce);

const refs = getRefs;
refs.input.addEventListener("input", debounce(inputField, 500));
function inputField() {
  const searchQuerry = refs.input.value;
  //   fetch(`https://restcountries.eu/rest/v2/name/canada`)
  //     .then((response) => {
  //       //   console.log(response.json());
  //       return response.json();
  //     })
  //     .then((country) => {
  //       //   console.log(country);
  //       renderCountryCard(country);
  //     });
  API.fetchCountry(searchQuerry).then((country) => {
    if (country.length > 10) {
      renderAlarm();
    }
    if (country.length <= 10 && country.length > 1) {
      renderCountriesCard(country);
    }
    if (country.length === 1) {
      console.log("render country");
      renderCountryCard(country);
    }
  });
}

function renderCountryCard(country) {
  console.log(country);
  const markup = countryCardTpl(country[0]);
  render(markup);
}

function renderCountriesCard(countries) {
  console.log("render list countries");
  console.log(countries);
  const markup = countriesCardTpl(countries);
  render(markup);
}

function renderAlarm() {
    console.log("very much");
    
}

function render(markup) {
  refs.output.innerHTML = markup;
}
