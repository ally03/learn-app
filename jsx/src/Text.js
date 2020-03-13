import React from "react";
import "./Text.css";
import { Form, Button } from "react-bootstrap";

// const api_call = `api.openweathermap.org/data/2.5/weather?q={leicester}&appid=${API_KEY}`;
// const alid = "hey i am here";

class TextHolder extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      city: ""
    };
  }

  handleChange(event) {
    console.log("first", this.state.city);
    this.setState({
      city: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("event:", event);
    this.setState({
      city: this.state.city
    });
  }

  render() {
    console.log("city", this.state.city);
    return (
      <div>
        <Form inline className="Text-field" onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="City"
            className="mr-sm-2"
            value={this.state.city}
            onChange={this.handleChange}
          />
           
          <Button type="submit" city="submit" variant="outline-success">
            Search
          </Button>
          <h1 style={{ color: "red" }}>d:{this.state.city}</h1>
        </Form>
      </div>
    );
  }
}

export default TextHolder;
