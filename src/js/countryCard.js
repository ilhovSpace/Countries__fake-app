const countryCard = (country) => {
  return `
  <div class="country">
  <div class="country-flag">
    <img src="${country.flag}" alt="${country.name} flag">
  </div>
  <div class="country-info">
    <h5>${country.name}</h5>
    <ul>
      <li>Capital: ${country.capital}</li>
      <li>Region: ${country.region}</li>
      <li>Population: ${country.population}</li>
    </ul>
  </div>
  <div class="country-timezones">
    <h6>Timezones: </h6>
    <ul>
      ${country.timezones
        .map((item) => {
          return `<li>${item}</li>`;
        })
        .join("")}
    </ul>
  </div>
  <div class="country-currencies">
    <h6>Currencies:</h6>
    <ul>
    ${country.currencies
      .map((item) => {
        return `<li>${item.code} ${item.symbol ? item.symbol : ""}</li>`;
      })
      .join("")}
    </ul>
  </div>
  <div class="country-languages">
    <h6>Languages: </h6>
    <ul>
    ${country.translations.de ? `<li>de: ${country.translations.de}</li>` : ""}
    ${country.translations.es ? `<li>es: ${country.translations.es}</li>` : ""}
    ${country.translations.it ? `<li>it: ${country.translations.it}</li>` : ""}
    </ul>
  </div>
</div>
    `;
};

export default countryCard;
