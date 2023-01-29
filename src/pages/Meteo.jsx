import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios";

/**
 *
 * @returns
 */
function Meteo() {
  // C 'est notre objet
  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(e.target[0].value);
  };
  const [weather, setWeather] = useState();
  const [city, setCity] = useState();

  useEffect(() => {
    const fetchWeather = async () => {
      const options = {
        method: "GET",
        url: "https://yahoo-weather5.p.rapidapi.com/weather",
        params: { location: city, format: "json", u: "c" },
        headers: {
          "X-RapidAPI-Key":
            "b37daa0afbmsh8f0edf3b0749fc8p15c96cjsn07f4c51d0f89",
          "X-RapidAPI-Host": "yahoo-weather5.p.rapidapi.com",
        },
      };

      const response = await axios.request(options);
      setWeather(response.data);
      console.log(response.data);
    };
    fetchWeather();
  }, [city]);
  return (
    <main>
      <div className="weather_container">
        <div id="display">
          {weather && (
            <h2 id="city">
              {weather.location.city}, {weather.location.country}
            </h2>
          )}

          <div id="infos">
            {weather && (
              <h3 id="conditions">
                {weather.current_observation.condition.text}
              </h3>
            )}
            {weather && (
              <p id="temperature">
                <span>🌡</span>
                température :{" "}
                <span>
                  {weather.current_observation.condition.temperature}°C
                </span>
              </p>
            )}
            {weather && (
              <p id="sunrise">
                <span>☀</span> Sunrise :{" "}
                <span>{weather.current_observation.astronomy.sunrise}</span>
              </p>
            )}
            {weather && (
              <p id="humidity">
                💧 humidity :{" "}
                <span>{weather.current_observation.atmosphere.humidity}%</span>
              </p>
            )}
          </div>
        </div>
        <form className="city_form" onSubmit={(e) => handleSubmit(e)}>
          <input
            className="input_ville"
            type="text"
            id="search"
            placeholder="Saisissez une ville..."
          />
          <input className="submit_ville" type="submit" />
        </form>
      </div>
    </main>
  );
}
export default Meteo;
