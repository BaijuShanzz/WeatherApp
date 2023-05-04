import React, { useState } from "react";
import { fetchWeather } from "../../api/fetchweather";
import "./Main.css";

function Main() {
  // take userinput data
  const [userinput, setUserinput] = useState("");

  // assign the data
  const [weather, setWeather] = useState({});

  const searchWeather = async (e) => {
    // checking the user button clicked
    if (e.key === "Enter") {
      const data = await fetchWeather(userinput);

      // set the data to the state
      setWeather(data);

      // set  empty  as inputbox
      setUserinput("");
    }
  };

  return (
    <div className="main-container">
      <input
        type="text"
        value={userinput}
        onChange={(e) => setUserinput(e.target.value)}
        className="search"
        placeholder="Search..."
        onKeyPress={searchWeather}
      />
      {weather.main && (
        <div className="city">
          <h2 className="city-name">
            {/* weather name */}
            <span>{weather.name}</span>
            {/* country name */}
            <sup>{weather.sys.country}</sup>
          </h2>
          <div className="city-temp">
            {/* set temparatur */}
            {Math.round(weather.main.temp)}
            <sup>&deg;C</sup>
          </div>
          <div className="info">
            {/* weather status image  */}
            <img
              className="city-icon"
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
            />
            {/* weather details                 */}
            <p>{weather.weather[0].description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Main;
