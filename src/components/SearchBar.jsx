import { useState } from "react";

function SearchBar({ setWeather, setLoading, setForecast }) {
  const [city, setCity] = useState("");

  async function searchWeather() {
    const apiKey = import.meta.env.VITE_API_KEY;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    setLoading(true);

    const forecastResponse = await fetch(forecastUrl);
    const forecastData = await forecastResponse.json();

    if (forecastData.list) {
      setForecast(forecastData.list.filter((item, index) => index % 8 === 0));
    }

    const response = await fetch(url);
    const data = await response.json();

    if (data.cod != 200) {
      alert("❌ City Not Found");
      setLoading(false);
      return;
    }

    setWeather(data);
    setLoading(false);
  }

  async function getCurrentLocation() {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;

      const apiKey = import.meta.env.VITE_API_KEY;

      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

      const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

      setLoading(true);

      const forecastResponse = await fetch(forecastUrl);
      const forecastData = await forecastResponse.json();

      if (forecastData.list) {
        setForecast(forecastData.list.filter((item, index) => index % 8 === 0));
      }

      const response = await fetch(url);
      const data = await response.json();

      setWeather(data);
      setLoading(false);
    });
  }

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter city name..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            searchWeather();
          }
        }}
      />

      <button onClick={searchWeather}>Search</button>

      <button onClick={getCurrentLocation}>
        📍 Current Location
      </button>
    </div>
  );
}

export default SearchBar;