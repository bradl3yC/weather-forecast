// Dependencies
import React from 'react';
import Moment from 'react-moment';
// Internals


const ForecastCard = (props) => (
  <div>
    <p>{props.forecast.main.temp_max}</p>
    <p>
      <Moment format="YYYY-MM-DD">{props.forecast.dt_txt}</Moment>
    </p>
    <p>
      <Moment format="HH:mm">{props.forecast.dt_txt}</Moment>
    </p>
  </div>
);

export default ForecastCard;
