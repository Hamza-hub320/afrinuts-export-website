// src/components/WeatherDisplay/WeatherDisplay.js
import React, { useState, useEffect } from 'react';
import { WiDaySunny, WiRain, WiCloudy, WiDayCloudy, WiThunderstorm, WiSnow } from 'react-icons/wi';
import { FaTemperatureHigh, FaTemperatureLow, FaWind, FaTint } from 'react-icons/fa';
import './WeatherDisplay.css';

const WeatherDisplay = ({ location = "Odienne" }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Update time every second
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Fetch weather data
    const fetchWeather = async () => {
      try {
        const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=1441099e284b49248f291111250506&q=${location}&days=1&aqi=no`
      );

      console.log("API response status:", response.status); 
        
      if (!response.ok) {
          const errorData = await response.json();
          console.error("API error response:", errorData);
          throw new Error(errorData.error?.message || 'Weather data not available');
        }
        
        const data = await response.json();
        console.log("API data received:", data);
        setWeatherData(data);
        setLoading(false);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchWeather();

    // Refresh weather data every 30 minutes
    const weatherInterval = setInterval(fetchWeather, 30 * 60 * 1000);

      return () => {
        clearInterval(timeInterval);
      };
    }, [location]);

  const getWeatherIcon = (conditionCode) => {
    switch (conditionCode) {
      case 1000: // Sunny
        return <WiDaySunny className="weather-icon" />;
      case 1003: // Partly cloudy
        return <WiDayCloudy className="weather-icon" />;
      case 1006: // Cloudy
      case 1009: // Overcast
        return <WiCloudy className="weather-icon" />;
      case 1030: // Mist
      case 1135: // Fog
      case 1147: // Freezing fog
        return <WiDayCloudy className="weather-icon" />;
      case 1063: // Patchy rain
      case 1180: // Light rain
      case 1183: // Moderate rain
      case 1186: // Heavy rain
      case 1189: // Light rain
      case 1192: // Moderate rain
      case 1195: // Heavy rain
      case 1240: // Light rain shower
      case 1243: // Moderate rain shower
      case 1246: // Heavy rain shower
        return <WiRain className="weather-icon" />;
      case 1087: // Thunderstorm
      case 1273: // Patchy light rain with thunder
      case 1276: // Moderate or heavy rain with thunder
        return <WiThunderstorm className="weather-icon" />;
      default:
        return <WiDaySunny className="weather-icon" />;
    }
  };

  if (loading) {
    return <div className="weather-loading">Loading weather data...</div>;
  }

  if (error) {
    return <div className="weather-error">Weather data unavailable</div>;
  }

  return (
    <div className="weather-display">
      <div className="weather-header">
        <h3>Current Weather in {location}</h3>
        <div className="current-time">
          {currentTime.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
          })}
        </div>
      </div>
      
      <div className="weather-main">
        {weatherData && (
          <>
            <div className="weather-condition">
              {getWeatherIcon(weatherData.current.condition.code)}
              <span>{weatherData.current.condition.text}</span>
            </div>
            
            <div className="weather-temp">
              <span className="temp-value">{weatherData.current.temp_c}°C</span>
              <span className="temp-feels">Feels like: {weatherData.current.feelslike_c}°C</span>
            </div>
            
            <div className="weather-details">
              <div className="detail-item">
                <FaTemperatureHigh />
                <span>High: {weatherData.forecast?.forecastday[0]?.day.maxtemp_c || 'N/A'}°C</span>
              </div>
              <div className="detail-item">
                <FaTemperatureLow />
                <span>Low: {weatherData.forecast?.forecastday[0]?.day.mintemp_c || 'N/A'}°C</span>
              </div>
              <div className="detail-item">
                <FaWind />
                <span>Wind: {weatherData.current.wind_kph} km/h</span>
              </div>
              <div className="detail-item">
                <FaTint />
                <span>Humidity: {weatherData.current.humidity}%</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default WeatherDisplay;