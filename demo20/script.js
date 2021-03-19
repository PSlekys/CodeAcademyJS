const columns = document.querySelector("#content .columns");

function displayItems(array) {
  columns.innerHTML = "";

  array.forEach((property) => {
    columns.innerHTML += `
          <div class="column is-one-quarter">
              <div class="card">
                  <div class="card-image">
                      <figure class="image is-4by3">
                          <img
                          src="${property.image}"
                          alt="${property.city}"
                          />
                      </figure>
                  </div>
                  <div class="card-content">
                      <div class="media">
                          <div class="media-content">
                              <p class="title is-4">${property.price}</p>
                              <p class="subtitle is-6">${property.city}</p>
                          </div>
                      </div>
  
                      <div class="content">
                          ${property.description}
                      </div>
                  </div>
              </div>
          </div>
      `;
  });
}

function getData(city) {
  fetch("https://back-end-js-x8whq.ondigitalocean.app/" + city)
    .then((res) => res.json())
    .then((data) => displayItems(data));
}

getData("");

const cities = ["vilnius", "kaunas", "klaipeda"];
const filters = document.querySelectorAll("#filter > button");
filters.forEach((filter, filterIndex) =>
  filter.addEventListener("click", (e) => {
    cities.forEach((v, i) => filters[i].classList.remove("is-primary"));
    filters[filterIndex].classList.add("is-primary");
    getData(cities[filterIndex]);
  })
);
