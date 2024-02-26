//Making a network request with a callback

const { error, Console } = require("console");
const { json } = require("stream/consumers");

function getWeather(city, callback) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city} `;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      callback(null, data); //pass data (no error)
    })
    .catch((error) => {
      callback(error, null); //pass error (no data)
    });
}

getWeather("Landon", (err, weatherData) => {
  if (err) {
    console.error("Error:", err);
  } else {
    console.log("Weather in London:", weatherData);
  }
});

//   response.json() vs JSON.parse(Response)
// -------------------------------------
//response.json() : async
//JSON.parse(Response) : sync
