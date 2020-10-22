import React from 'react'

export default function WeatherIcon({weather}) {
    return(
        <div className="main-weather-icon">
            <img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} className="weather-icon" />
        </div>
    )
}
