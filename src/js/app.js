import countries from "./countries";
import spinner from "./spinner";
import request from "./request";

const countriesList = document.querySelector(".countries-list");
const filter = document.querySelector(".filter");
const filterItems = document.querySelectorAll(".filter-item > input");
const filterShow = document.querySelector(".filter-show");
const filterClearBtn = document.querySelector(".filter-clear");

const getCountriesFromServer = async (requestValue) => {
  countriesList.innerHTML = spinner();
  const res = await request(requestValue);
  countriesList.innerHTML = countries(res);
};

const showsFilter = () => {
  if (filter.classList.contains("open")) {
    filter.classList.remove("open");
    filterShow.innerHTML = '<i class="fa fa-caret-right"></i>';
  } else {
    filter.classList.add("open");
    filterShow.innerHTML = '<i class="fa fa-caret-left"></i>';
  }
};

filterShow.addEventListener("click", showsFilter);

filter.addEventListener("change", (e) => {
  getCountriesFromServer(`region/${e.target.value}`);
});

filterClearBtn.addEventListener("click", () => {
  filterItems.forEach((item) => {
    item.checked = false;
  });
  getCountriesFromServer("all");
});

getCountriesFromServer("all");
