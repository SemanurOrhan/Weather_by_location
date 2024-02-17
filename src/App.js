import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState(" ");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://api.weatherapi.com/v1/forecast.json?key=${
            import.meta.env.VITE_WEATHER_API
          }&q=${location}&days=4&aqi=yes&alerts=yes`
        );
        console.log(response);
        setWeatherData(response.data);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
      if (location) {
        fetchData();
      }
    };
  }, [location]);

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  return (
    <>
      <div className="app-container">
        <h1 className="app-title"> Hava Durumu Uygulaması </h1>
        <div className="input-container">
          <input
            className="location-input"
            type="text"
            placeholder='Şehir giriniz'
            value={location}
            onChange={handleLocationChange}
          />
          {weatherData && (
            

            <div className='weather-container'>
              {weatherData.forecast.forecastday.map()
              }

            </div>

          )}<div>



          </div>
        </div>
      </div>
    </>
  );
}

export default App;
