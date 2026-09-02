async function searchWeather() {

document.getElementById("weather").innerHTML = `
<div id="weather-card">
    Loading weather...
</div>
`;
    const city = document.getElementById("city").value;

    const response = await fetch(`/api/weather/${city}`);
    const result = await response.json();

    console.log("FULL RESPONSE:", result);

    if (result.status !== 1 || !result.data) {
        document.getElementById("weather").innerHTML =
            result.message || "Error fetching weather";
            document.getElementById("weather").innerHTML = `
<div id="weather-card">
    City not found
</div>
`;
        return;
    }

    const weather = result.data;

    if (!weather.main) {
        document.getElementById("weather").innerHTML =
            "Invalid weather data structure";
        return;
    }

    const icon =
`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

document.getElementById("weather").innerHTML = `
<div id="weather-card">

    <img
        class="weather-icon"
        src="${icon}"
        alt="weather icon"
    >

    <div class="city">
        ${weather.name}
    </div>

    <div class="temp">
        ${Math.round(weather.main.temp)}°C
    </div>

    <div class="condition">
        ${weather.weather[0].description}
    </div>

    <div class="weather-details">

        <div class="detail-box">
            💧<br>
            ${weather.main.humidity}%
        </div>

        <div class="detail-box">
            🌬️<br>
            ${weather.wind.speed} m/s
        </div>

        <div class="detail-box">
            📊<br>
            ${weather.main.pressure}
        </div>

    </div>

</div>
`;
    loadHistory();
}
async function loadHistory() {
    console.log('loadhistory');

    const response =
        await fetch("/api/history");

    const history =
        await response.json();

    document.getElementById("history")
        .innerHTML = history
            .map(item =>
                `<li>${item.city}</li>`
            )
            .join("");
}


async function loadCurrentLocationWeather() {


    document.getElementById("weather")
.innerHTML = `
<div id="weather-card">
    <h3>Detecting your location...</h3>
</div>
`;
    if (!navigator.geolocation) {
        searchWeatherByCity("Indore");
        return;
    }

    navigator.geolocation.getCurrentPosition(
        async (position) => {

            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            const response = await fetch(
                `http://35.154.65.119/api/weather/location?lat=${lat}&lon=${lon}`
            );

            const result = await response.json();

            renderWeather(result.data);
        },

        () => {
            searchWeatherByCity("Indore");
        }
    );
}

function renderWeather(weather) {

    const icon =
    `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

    document.getElementById("weather")
        .innerHTML = `
        <div id="weather-card">

            <img
                src="${icon}"
                class="weather-icon"
            >

            <h2>${weather.name}</h2>

            <div class="temp">
                ${Math.round(weather.main.temp)}°C
            </div>

            <p>
                ${weather.weather[0].description}
            </p>

            <div class="weather-details">

                <div class="detail-box">
                    💧 ${weather.main.humidity}%
                </div>

                <div class="detail-box">
                    🌬️ ${weather.wind.speed}
                </div>

            </div>

        </div>
    `;
}

loadCurrentLocationWeather();
loadHistory();