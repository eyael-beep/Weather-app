// Step 1: Select DOM elements
const citySelector = document.querySelector('.city-selector'); // Dropdown for cities
const getWeatherBtn = document.querySelector('.get-weather-btn'); // Button to fetch weather
const cityName = document.querySelector('.city-name'); // Display city name
const temperature = document.querySelector('.temperature'); // Display temperature
const condition = document.querySelector('.condition'); // Display weather condition

// Step 2: Add event listener to the button
getWeatherBtn.addEventListener('click', () => {
  const selectedCity = citySelector.value; // Get coordinates from the dropdown
  fetchWeather(selectedCity); // Call the function to fetch weather data
});

// Step 3: Simulated "fetchWeather" function
function fetchWeather(coordinates) {
  const [lat, lon] = coordinates.split(','); // Split "latitude,longitude"

  // Mock data to simulate an API response
  const mockData = {
    "55.6761,12.5683": {
      name: "Copenhagen",
      main: { temp: 10 },
      weather: [{ description: "cloudy" }],
    },
    "56.1629,10.2039": {
      name: "Aarhus",
      main: { temp: 12 },
      weather: [{ description: "sunny" }],
    },
    "55.4038,10.4024": {
      name: "Odense",
      main: { temp: 9 },
      weather: [{ description: "rainy" }],
    },
    "57.0488,9.9217": {
      name: "Aalborg",
      main: { temp: 7 },
      weather: [{ description: "windy" }],
    },
  };

  // Simulate an asynchronous fetch using Promise
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (mockData[`${lat},${lon}`]) {
        resolve(mockData[`${lat},${lon}`]);
      } else {
        reject("City not found in mock data");
      }
    }, 1000); // Simulate 1 second API delay
  })
    .then((data) => updateWeatherInfo(data)) // Pass mock data to update function
    .catch((error) => console.error('Error:', error)); // Handle errors
}

// Step 4: Function to update the weather information on the page
function updateWeatherInfo(data) {
  cityName.textContent = data.name; // Update city name
  temperature.textContent = `Temperature: ${data.main.temp}°C`; // Update temperature
  condition.textContent = `Condition: ${data.weather[0].description}`; // Update condition
}
