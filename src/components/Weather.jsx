import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetWeather, setCapitalWeather } from '../Redux/Weather/weatherActions';


export default function Weather({capitalName}) {

  const {
    currentConditions,
    latitude,
    longitude,
    description,
    days
    
  } = useSelector(state => state.weather);
  const dispatch = useDispatch();

  const theme = useSelector(state => state.theme);
  
    useEffect(() => {
        dispatch(setCapitalWeather(capitalName))
        
        return () => dispatch(resetWeather)
    }, [capitalName, dispatch])


  return (
    <section className='details_bottom'>
      <div className='details_bottom_weather'>
        {theme === 'light' ? <h1 style={{color: 'black', background: '#ff9800'}}>{capitalName}</h1> : <h1 style={{color: 'white'}}>{capitalName}</h1>}
          <ul className='details_bottom_weather_list'>
            {currentConditions && <li><strong>Coordinates</strong>: {latitude}, {longitude}</li>} <br/>
            {currentConditions && <li><strong>Time</strong>: {currentConditions.datetime}</li>} <br/>
            {currentConditions && <li><strong>Forecast</strong>: {currentConditions.conditions}; <br />{description}</li>}<br/>
            {currentConditions && <li><strong>Sunrise</strong>: {currentConditions.sunrise}</li>}<br/>
            {currentConditions && <li><strong>Sunset</strong>: {currentConditions.sunset}</li>}<br/>
          </ul>
      </div>

      <div className='details_bottom_weather'>
        {theme === 'light' ? <h1 style={{color: 'black', background: '#ff9800'}}>Weather today</h1> : <h1 style={{color: 'white'}}>Weather today</h1>}
          <ul className='details_bottom_weather_list'>
            {days && <li><strong>Description</strong>: {days[0].description}</li>} <br/>
            {days && <li><strong>Temperature</strong>: {days[0].temp} °C</li>}<br/>
            {days && <li><strong>Feels like</strong>: {days[0].feelslike} °C</li>} <br/>
            {days && <li><strong>Humidity</strong>: {days[0].humidity} %</li>} <br/>
            {days && <li><strong>Pressure</strong>: {days[0].pressure} hPa</li>} <br/>
            {days && <li><strong>Windspeed</strong>: {days[0].windspeed} km/h</li>} <br/>
            {days && <li><strong>Visibility</strong>: {days[0].visibility} km</li>} <br/>
          </ul>
      </div>
    </section>
  )
}
