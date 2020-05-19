import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const home = () => (
  <div className="home-design">
    <div className="home">
      <h1>The Weather App</h1>
      <Link to="/current-weather" className="nav-link">
        <button type="button" className="btn btn-primary btn-lg">
          Check the current weather
        </button>
      </Link>
    </div>
  </div>
);

export default home;
