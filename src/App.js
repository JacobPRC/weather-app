import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from "./components/Header";
import CurrentWeather from "./components/CurrentWeather";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// make router work on app js and make it home page? And render 5 day + continut css

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentWeatherType: "Current Weather",
      city: "Perth",
    };
  }
  searchHandler = (city) => {
    this.setState({ city });
  };
  render() {
    return (
      <div className="App">
        <Router>
          <Header searchHandler={this.searchHandler} />
          <Switch>
            <Route path="/current-weather">
              <CurrentWeather city={this.state.city} />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
