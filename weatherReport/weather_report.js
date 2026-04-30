const apiKey = 'YOUR_API_KEY'; // Replace 'YOUR_API_KEY' with your actual API key from https://openweathermap.org/
function showweatherDetails(event) {
    event.preventDefault();
    const city = document.getElementById('city').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                    <p>Temperature: ${data.main.temp} &#8451;</p>
                                    <p>Weather: ${data.weather[0].description}</p>`;
        })
        .catch(error => {
          console.error('Error fetching weather:', error);
          const weatherInfo = document.getElementById('weatherInfo');
          weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
        });
}
function showWeatherByCoordinates(event) {
    event.preventDefault();
    const latitude = document.getElementById('latitude').value;
    const longitude = document.getElementById('longitude').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                    <p>Temperature: ${data.main.temp} &#8451;</p>
                                    <p>Weather: ${data.weather[0].description}</p>`;
        })
        .catch(error => {
            console.error('Error fetching weather:', error);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
        });
        
}
document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );
document.getElementById('weatherFormCoords').addEventListener('submit', showWeatherByCoordinates);