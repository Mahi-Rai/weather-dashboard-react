import { WiStrongWind, WiSunrise, WiSunset } from "react-icons/wi";
import { FaEye } from "react-icons/fa";
function WeatherCard({ weather }) {
  const icon = weather?.weather[0]?.icon;
  const sunrise = weather
    ? new Date(weather.sys.sunrise * 1000).toLocaleTimeString()
    : "";

  const sunset = weather
    ? new Date(weather.sys.sunset * 1000).toLocaleTimeString()
    : "";

  return (
    <div className="weather-card">
      <img
        src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
        alt="Weather Icon"
      />

      <h2>{weather?.name}</h2>
<h1>{weather?.main?.temp}°C</h1>

<div className="weather-details">
  <div>🌡 Feels Like: {weather?.main?.feels_like}°C</div>
  <div>💧 Humidity: {weather?.main?.humidity}%</div>

  <div>🌬 Wind: {weather?.wind?.speed} km/h</div>
  <div>👁 Visibility: {(weather?.visibility / 1000).toFixed(1)} km</div>

  <div>🌅 Sunrise: {sunrise}</div>
  <div>🌇 Sunset: {sunset}</div>
</div>

<p className="location">📍 {weather?.name}, {weather?.sys?.country}</p>
<p className="desc">☁ {weather?.weather[0]?.description}</p>
    </div>
  );
}
export default WeatherCard;