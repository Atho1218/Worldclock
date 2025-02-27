function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDate = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment();
    losAngelesDate.innerHTML = moment()
      .tz("America/Los_Angeles")
      .format("MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime
      .tz("America/Los_Angeles")
      .format("h:mm:ss [<small>]A[</small>]");
  }

  let sydneyElement = document.querySelector("#sydney");
  if (sydneyElement) {
    let sydneyDate = sydneyElement.querySelector(".date");
    let sydneyTimeElement = sydneyElement.querySelector(".time");
    let sydneyTime = moment();
    sydneyDate.innerHTML = moment()
      .tz("Australia/Sydney")
      .format("MMMM Do YYYY");
    sydneyTimeElement.innerHTML = sydneyTime
      .tz("Australia/Sydney")
      .format("h:mm:ss [<small>]A[</small>]");
  }
}
updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHtml = ` 
  <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )}<small>${cityTime.format("A")}</small></div>
        </div>`;
}

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);
