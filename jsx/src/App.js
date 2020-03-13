import React from "react";
import "./App.css";
import TextHolder from "./Text";
import WeatherDisplay from "./weatherDisplay";
import Kweather from "./kweather.png";

class App extends React.Component {
  render() {
    console.log(this.props.data);
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Weather App <img src={Kweather} alt="icon" />
          </h1>
        </header>
        <TextHolder />
        <WeatherDisplay />
      </div>
    );
  }
}

export default App;
