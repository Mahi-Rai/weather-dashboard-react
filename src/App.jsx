import {useState} from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Forecast from "./components/Forecast";
function App(){
  const[weather, setWeather]=useState(null);
  const[loading,setLoading]=useState(false);
  const[forecast,setForecast]=useState([]);
  return(
    <div className={`container ${weather?.weather[0]?.main?.toLowerCase() || ""}`}>
    < Navbar/>
    < SearchBar setWeather={setWeather} setLoading={setLoading} setForecast={setForecast}/>
    {loading ? (
  <h3>Loading...</h3>
) : (
  <>
    {weather && <WeatherCard weather={weather} />}
    {forecast.length > 0 && <Forecast forecast={forecast} />}
  </>
)}
    </div>
  );
}
export default App;