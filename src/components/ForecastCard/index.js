// Dependencies
import React from 'react';
import Moment from 'react-moment';


const ForecastCard = (props) => (
  <div>
    <img src={"http://openweathermap.org/img/w/" + props.forecast.weather[0].icon + ".png"} alt="Current Weather"/>
    <p>Temp: {props.forecast.main.temp} °F</p>
    <p>Outlook: {props.forecast.weather[0].main}</p>
    <p>
      Time: <Moment format="h:mm A">{props.forecast.dt_txt}</Moment> <Moment format="YYYY-MM-DD">{props.forecast.dt_txt}</Moment>
    </p>
  </div>
);

export default ForecastCard;
