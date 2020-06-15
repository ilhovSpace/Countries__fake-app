import countryCard from "./countryCard";

const countries = (arr) => {
  return arr.map((country) => countryCard(country)).join("");
};

export default countries;
