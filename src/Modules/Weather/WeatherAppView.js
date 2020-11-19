import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherAppView(props) {
  const { temperature, weatherId, weatherMain } = props;
  const iconId = weatherId === "" ? "200" : weatherId.toString();
  return (
    <div className="app-content weather-content">
      <WeatherIcon name="owm" className="weather-icon" iconId={iconId} />
      <div className="weather-temperature">{Math.round(temperature)}&#176;</div>
      <div className="weather-weather">{weatherMain}</div>
    </div>
  );
}
