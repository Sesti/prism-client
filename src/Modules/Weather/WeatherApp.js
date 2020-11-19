import React, { useState, useEffect } from "react";
import ModuleLoading from "../../ModulesComponents/ModuleLoading";
import WeatherAppView from "./WeatherAppView";
import WeatherAppExpanded from "./WeatherAppExpanded";
import "./WeatherApp.css";

const WeatherApp = (props) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
    setInterval(fetchData, 60000 * 60);
  }, []);

  const fetchData = async () => {
    const res = await fetch(props.url + "/api/v1/weather");

    if (res.ok) {
      const json = await res.json();
      setData({
        temperature: json.main.temp,
        temperatureMin: json.main.temp_min,
        temperatureMax: json.main.temp_max,
        humidity: json.main.humidity,
        sunrise: json.sys.sunrise,
        sunset: json.sys.sunset,
        weatherId: json.weather[0].id,
        weatherIcon: json.weather[0].icon,
        weatherDescription: json.weather[0].description,
        weatherMain: json.weather[0].main,
        windDegrees: json.wind.deg,
        windSpeed: json.wind.speed,
        city: json.name,
      });
      setLoading(false);
    }
  };

  if (loading) return <ModuleLoading />;

  return props.expanded ? (
    <WeatherAppExpanded {...data} />
  ) : (
    <WeatherAppView {...data} />
  );
};

export default WeatherApp;
