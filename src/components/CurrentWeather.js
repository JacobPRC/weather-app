import React from "react";
import "./CurrentW.css";
import OpenWeatherMap from "react-open-weather-map";
import { TweenMax, Power2, TimelineMax, TweenLite, Linear } from "gsap";

class CurrentWeather extends React.Component {
  constructor(props) {
    super(props);
    this.myElement = null;
    this.myTween = null;
    this.state = {
      data: null,
    };
  }
  componentDidMount() {
    const key = "ba9d5371a355cdeb9f7c396fe6d5a83d";
    const cityName = this.props.city;
    const tl = new TimelineMax({ repeat: -1 });
    this.myTween = tl.to(this.myElement, 30, {
      backgroundPosition: "-2247px 0px",
      ease: Linear.easeNone,
    });

    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        cityName +
        "&appid=" +
        key +
        "&units=metric"
    )
      .then((response) => response.json())
      .then((data) => this.setState({ data }, () => console.log(data)))
      .catch((err) => console.log(err));
  }
  componentDidUpdate(prevProps, prevState) {
    const key = "ba9d5371a355cdeb9f7c396fe6d5a83d";
    const cityName = this.props.city;
    if (prevState.data === this.state.data) {
      console.log("updated");
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          cityName +
          "&appid=" +
          key +
          "&units=metric"
      )
        .then((response) => response.json())
        .then((data) => this.setState({ data }, () => console.log(data)))
        .catch((err) => console.log(err));
    }
  }
  render() {
    const iconCode = this.state.data ? this.state.data.weather[0].icon : "";
    const cityName = this.state.data ? this.state.data.name : "";
    const country = this.state.data ? this.state.data.sys.country : "";
    const description = this.state.data
      ? this.state.data.weather[0].description
      : "";
    return (
      <body>
        <div ref={(div) => (this.myElement = div)} className="current-weather">
          <content>
            <div className="row m-6">
              <div className="col-sm-10">
                <div className="card-curr">
                  <div className="card-body-curr">
                    <div className="one">
                      <h5 className="card-title">
                        Weather in {cityName}, {country}
                      </h5>
                    </div>

                    <div className="two">
                      <div className="temp">
                        <img
                          src={`http://openweathermap.org/img/w/${iconCode}.png`}
                        />
                        <p className="card-text-temp">
                          {this.state.data
                            ? Math.round(this.state.data.main.temp)
                            : ""}
                          °C
                        </p>
                      </div>
                      <div className="desc">
                        <p className="card-text">
                          <b>Feels like:</b>{" "}
                          {this.state.data
                            ? Math.round(this.state.data.main.feels_like)
                            : ""}
                          °C
                        </p>
                        <p className="card-text-desc">
                          <i>
                            {description.charAt(0).toUpperCase() +
                              description.slice(1)}
                          </i>{" "}
                        </p>
                      </div>
                    </div>
                    <div className="max-min">
                      <div className="max">
                        <p className="card-text">
                          Max Temp:{" "}
                          {this.state.data
                            ? Math.round(this.state.data.main.temp_max)
                            : ""}
                          °C
                        </p>
                      </div>
                      <div className="min">
                        <p className="card-text">
                          Min Temp:{" "}
                          {this.state.data ? this.state.data.main.temp_min : ""}
                          °C
                        </p>
                      </div>
                    </div>
                    <div className="extras">
                      <p className="card-text">
                        Pressure:{" "}
                        {this.state.data
                          ? Math.round(this.state.data.main.pressure)
                          : ""}{" "}
                        mmHg
                      </p>
                      <p className="card-text">
                        Humidity:{" "}
                        {this.state.data ? this.state.data.main.humidity : ""}%
                      </p>
                      <p className="card-text">
                        Wind speed:{" "}
                        {this.state.data ? this.state.data.wind.speed : ""} m/s
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </content>
        </div>
      </body>
    );
  }
}
export default CurrentWeather;
