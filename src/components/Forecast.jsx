function Forecast({ forecast }) {
  return (
    <div className="forecast-container">
      <h2>5-Day Forecast</h2>

      <div className="forecast-cards">
        {forecast.map((day, index) => (
          <div className="forecast-card" key={index}>
            <h4>
              {new Date(day.dt * 1000).toLocaleDateString("en-US", {
                weekday: "short",
              })}
            </h4>

            <img
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
              alt="icon"
            />

            <p>{Math.round(day.main.temp)}°C</p>
            <p>{day.weather[0].main}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;