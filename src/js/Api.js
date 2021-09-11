const baseUrl = "https://restcountries.eu/rest/v2";

function fetchCountry(countryText) {
  return fetch(`${baseUrl}/name/${countryText}`).then((r) => r.json());
}
export default { fetchCountry };
