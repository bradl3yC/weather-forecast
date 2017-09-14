import React, { Component } from 'react';
import './index.css';


class App extends Component {

  componentDidMount(){
    console.log(process.env.REACT_APP_WEATHER_API)
    fetch(`http://api.openweathermap.org/data/2.5/forecast?zip=33705,us&appid=${process.env.REACT_APP_WEATHER_API}`)
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      console.log(data)
    })
  }

  render() {
    return (
      <div>
        <h1>Weatherzzz</h1>
      </div>
    );
  }
}

export default App;
