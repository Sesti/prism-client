import React from "react";
import "./App.css";
// import "./App_dark.css";
import AppFactory from "./AppFactory";

// @Todo : Fetch this object from settings
let ui = [
  {
    name: "news",
    width: 2,
  },
  {
    name: "weather",
  },
  {
    name: "spotify",
    width: 2,
  },
];

function App() {
  return (
    <div className="dashboard dark-theme">
      {ui.map((app) => (
        <AppFactory key={app.name} {...app} />
      ))}
    </div>
  );
}

export default App;
