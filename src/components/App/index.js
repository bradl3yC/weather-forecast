import React, { Component } from 'react';
import map from 'lodash/map'
import './index.css';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      city: "",
      forecast: [],
    }
  }

  componentDidMount(){
    fetch(`http://api.openweathermap.org/data/2.5/forecast?zip=33705,us&appid=${process.env.REACT_APP_WEATHER_API}`)
    .then(res => {
      return res.json()
    })
    .then(data => {
      console.log(data)
      this.setState({ forecast: data.list, city: data.city.name })
    })
  }

  render() {
    return (
      <div>
        <h1>Weatherrrzzz</h1>
        {map(this.state.forecast, (weather) => (
            <div key={weather.dt}>
              <p>{weather}</p>
            </div>
        ))}
      </div>
    );
  }
}

export default App;
