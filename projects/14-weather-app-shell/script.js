// 14 - Weather App Shell
// Goal: practise API structure. You need an API key for real weather data.

const weatherForm = document.querySelector("#weatherForm");
const cityInput = document.querySelector("#cityInput");
const weatherOutput = document.querySelector("#weatherOutput");

const API_KEY = "PASTE_YOUR_API_KEY_HERE";

async function getWeather(city) {
  // TODO 1: build the API URL.
  // Example service: OpenWeatherMap. Check their docs for current URL format.
  // const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  // TODO 2: fetch the URL.
  // TODO 3: handle response.ok.
  // TODO 4: parse JSON.
  // TODO 5: return the useful data.
}

function renderWeather(data) {
  // TODO 6: display city, temperature, condition, and humidity.
}

weatherForm.addEventListener("submit", async function (event) {
  event.preventDefault();
  const city = cityInput.value.trim();

  // TODO 7: validate city.
  // TODO 8: call getWeather(city) inside try/catch.
  // TODO 9: render the data or show an error.
});
