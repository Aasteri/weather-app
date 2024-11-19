const API_KEY = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

const elements = {
  cityInput: document.getElementById('cityInput'),
  searchBtn: document.getElementById('searchBtn'),
  weatherInfo: document.getElementById('weatherInfo'),
  cityName: document.getElementById('cityName'),
  weatherIcon: document.getElementById('weatherIcon'),
  tempC: document.getElementById('tempC'),
  tempF: document.getElementById('tempF'),
  weatherDescription: document.getElementById('weatherDescription'),
  errorMessage: document.getElementById('errorMessage')
};

function kelvinToCelsius(kelvin) {
  return Math.round(kelvin - 273.15);
}

function kelvinToFahrenheit(kelvin) {
  return Math.round((kelvin - 273.15) * 9/5 + 32);
}

function showError(message) {
  elements.errorMessage.textContent = message;
  elements.errorMessage.classList.remove('hidden');
  elements.weatherInfo.classList.add('hidden');
}

function showWeather(data) {
  const tempKelvin = data.main.temp;
  const tempCelsius = kelvinToCelsius(tempKelvin);
  const tempFahrenheit = kelvinToFahrenheit(tempKelvin);
  
  elements.cityName.textContent = `${data.name}, ${data.sys.country}`;
  elements.weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  elements.tempC.textContent = `${tempCelsius}°C`;
  elements.tempF.textContent = `${tempFahrenheit}°F`;
  elements.weatherDescription.textContent = data.weather[0].description
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  elements.weatherInfo.classList.remove('hidden');
  elements.errorMessage.classList.add('hidden');
}

async function getWeather(city) {
  try {
    const response = await fetch(
      `${API_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}`
    );
    
    if (!response.ok) {
      throw new Error(response.status === 404 
        ? 'City not found. Please check the spelling and try again.'
        : 'Failed to fetch weather data. Please try again later.'
      );
    }

    const data = await response.json();
    showWeather(data);
  } catch (error) {
    showError(error.message);
  }
}

function handleSearch() {
  const city = elements.cityInput.value.trim();
  if (!city) {
    showError('Please enter a city name');
    return;
  }
  getWeather(city);
}

// Event Listeners
elements.searchBtn.addEventListener('click', handleSearch);
elements.cityInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    handleSearch();
  }
});