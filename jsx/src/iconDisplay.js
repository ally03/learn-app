import React from "react";
import cloudy from "./animated/cloudy.svg";
import rainy from "./animated/rainy-1.svg";
import snowy from "./animated/snowy-1.svg";
import thunder from "./animated/thunder.svg";
import day from "./animated/day.svg";
import weather from "./animated/weather.svg";

class IconDisplay extends React.Component {
  render() {
    let weatherType = this.props.Icons.weatherType;
    const IconGen = () => {
      if (weatherType === "Drizzle") {
        return <img src={weather} alt="drizzle" />;
      } else if (weatherType === "Clouds") {
        return <img src={cloudy} alt="rai" />;
      } else if (weatherType === "Rain") {
        return <img src={rainy} alt="snw" />;
      } else if (weatherType === "Snow") {
        return <img src={snowy} alt="clr" />;
      } else if (weatherType === "Clear") {
        return <img src={day} alt="day" />;
      } else if (weatherType === "Thunderstom") {
        return <img src={thunder} alt="thu" />;
      }
    };

    return (
      <div>
        <h1>{IconGen()}</h1>
      </div>
    );
  }
}

export default IconDisplay;
