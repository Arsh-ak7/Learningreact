import React, { useEffect, useState } from 'react';
import './assests/css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css';
import WeatherIcon from './assests/WeatherIcon';
const api={
  key:"ae9e15e6e0d244b77e6afc4ea6c67a72",
  base:"https://api.openweathermap.org/data/2.5/"
}
function App() {
  const [query, setquery] = useState('')
  const [weather, setweather] = useState({})
  const [isDawn, setisDawn] = useState(false)
  const dateBuilder = new Date();

  useEffect(() => {
      if(dateBuilder.getHours()>16 || dateBuilder.getHours() <8 )
      setisDawn(true);
      else
      setisDawn(false);
  }, [dateBuilder])

  const search = evt =>{
    if(evt.key==="Enter"){
      fetch(`${api.base}weather?q=${query}&appid=${api.key}`)
      .then(res => res.json())
      .then(result =>{
        setweather(result);
        setquery('');
        console.log(result);
      })
    }
  }
  return (
    <div className={(isDawn) ?'home cold':'home'}>
      <main>
        <div className="search-box">
        <input type = "text" placeholder="Search..." className="search-bar" 
        onChange={e => setquery(e.target.value)}
        value={query} onKeyPress={search}
        />
        </div>
        {(typeof weather.main != "undefined") ? (
          <div>
            <div className="location-box">
              <div className={`location ${(isDawn) ? 'cold' : ''}`}>
              {weather.name}, {weather.sys.country}
              </div>
            <div className={`date ${(isDawn) ? 'cold' : ''}`}>
              {dateBuilder.toDateString()}
            </div>
            </div>
            <div className="weather-box">
              <WeatherIcon weather={weather}/>
              <div className={`temp ${(isDawn) ? 'cold' : ''}`}>{Math.round(weather.main.temp-273.15,2)}&deg;C</div>
              <div className={`weather ${(isDawn) ? 'cold' : ''}`}>{weather.weather[0].main}</div>
            </div>
        </div>
        ):('')}
      </main>
    </div> 
  )
}

export default App;
