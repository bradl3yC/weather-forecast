// Dependencies
import React, { Component } from 'react';
import map from 'lodash/map'
import Moment from 'react-moment'
// Externals
import ForecastCard from '../ForecastCard'
// Internals
import './index.css'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      city: "",
      forecast: [],
    }
  }

  componentDidMount() {
    fetch(`http://api.openweathermap.org/data/2.5/forecast?zip=33705,us&units=imperial&appid=${process.env.REACT_APP_WEATHER_API}`)
    .then(res => {
      return res.json()
    })
    .then(data => {
      this.setState({ forecast: data.list, city: data.city.name })
    })
  }

  render() {
    return (
      <div>
        <h3>
          Five Day Forecast beginning:
          <Moment format="MM/DD/YYYY">
            {this.state.forecast.dt_text}
          </Moment>
        </h3>
        {map(this.state.forecast, (weather) => (
          <div className="forecast" key={weather.dt}>
            <div className="card">
              <ForecastCard forecast={weather} />
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
