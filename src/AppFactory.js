import React from "react";
import AppContainer from "./AppContainer";
import NewsApp from "./Modules/News/NewsApp";
import SpotifyApp from "./Modules/Spotify/SpotifyApp";
import WeatherModule from "./Modules/Weather/WeatherApp";

const API_URL = "http://10.0.0.161:3005";

const AppFactory = (props) => {
  let app = {
    width: props.width || 1,
    height: props.height || 1,
  };
  switch (props.name.toLowerCase()) {
    case "news":
      app = {
        content: <NewsApp url={API_URL} />,
        classes: ["app-news"],
        ...app,
      };
      break;
    case "weather":
      app = {
        content: <WeatherModule url={API_URL} />,
        classes: ["app-weather"],
        ...app,
      };
      break;
    case "spotify":
      app = {
        content: <SpotifyApp url={API_URL} />,
        classes: ["app-spotify"],
        ...app,
      };
      break;
    default:
      app = {
        content: <p>Wrong widget</p>,
        classes: [],
        ...app,
      };
  }

  return <AppContainer {...app} />;
};

export default AppFactory;
