import React from "react";
import { Card } from "react-bootstrap";
import "./Text.css";
import IconDisplay from "./iconDisplay";

const API_KEY = "eba454dfaa723f4363f787c90043f983";

const API_URL = `https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=Leicester,uk&appid=${API_KEY}`;

class WeatherDisplay extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  async componentDidMount(e) {
    const api_call = await fetch(API_URL);
    const response = await api_call.json();
    console.log("state", e, "props", this.props);
    console.log(response);
    // getWeather = async () => {
    //   const api_call = await fetch(
    //     `https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=Leicester,uk&appid=${API_KEY}`
    //   );
    //   const response = await api_call.json();
    //   console.log(response);

    this.setState({
      country: response.sys.country,
      city: response.name,
      weatherType: response.weather[0].main,
      weatherDiscription: response.weather[0].description,
      temp: this.kevintoC(response.main.temp)
    });
  }

  kevintoC(temp) {
    return Math.floor(temp - 273.15);
  }
  render() {
    const { country, city, weatherType, weatherDiscription, temp } = this.state;
    console.log("state", this.state, "props", this.props);
    // console.log("city", this.props.name, this.props);
    return (
      <div className="Weather-field">
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body className="card-style">
          <IconDisplay Icons={this.state} />
          <Card.Title>
            {city} {country}
          </Card.Title>
          <Card.Title>
            {temp}º {weatherType}
          </Card.Title>
          <Card.Text>{weatherDiscription}</Card.Text>
        </Card.Body>
      </div>
    );
  }
}

export default WeatherDisplay;
