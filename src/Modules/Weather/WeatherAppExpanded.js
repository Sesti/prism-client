import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherAppExpanded(props) {
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.getHours() + ":" + date.getMinutes();
  };

  const {
    temperature,
    temperatureMin,
    temperatureMax,
    humidity,
    sunrise,
    sunset,
    weatherId,
    weatherDescription,
    weatherMain,
    windDegrees,
    windSpeed,
    city,
  } = props;
  const iconId = weatherId === "" ? "200" : weatherId.toString();
  return (
    <div className="app-content weather-content">
      <section className="weather-now">
        <WeatherIcon name="owm" className="weather-icon" iconId={iconId} />
        <div>Température minimum : {Math.round(temperatureMin)}&#176;</div>
        <div>Température maximum : {Math.round(temperature)}&#176;</div>
        <div>Température minimum : {Math.round(temperatureMax)}&#176;</div>
        <div>Humidité : {humidity}</div>
        <div>Levé du soleil : {formatDate(sunrise)}</div>
        <div>Couché du soleil : {formatDate(sunset)}</div>
        <div>Détails : {weatherDescription}</div>
        <div>Météo : {weatherMain}</div>
        <div>Degrées du vent : {windDegrees}&#176;</div>
        <div>Vitesse du vent : {windSpeed}</div>
        <div>Ville : {city}</div>
      </section>
      <section className="weather-week"></section>
    </div>
  );
}
