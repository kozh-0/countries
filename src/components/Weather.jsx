import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetWeather, setCapitalWeather } from '../Redux/Weather/weatherActions';

export default function Weather({capitalName}) {

    console.log(useSelector(state => state.weather));
    const {
        currentConditions,
        latitude,
        longitude,
        description,
        // days

    } = useSelector(state => state.weather);
    // console.log(new Date(1650043026 + 840000));
    // console.log(currentConditions);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCapitalWeather(capitalName))
        
        return () => dispatch(resetWeather)
    }, [capitalName, dispatch])


  return (
    <div className='weather'>
      <h1>{capitalName} info & weather</h1>
      <ul className='weather_list'>
        <li><strong>Latitude</strong>: {latitude}</li>
        <li><strong>Longitude</strong>: {longitude}</li>
        {currentConditions && <li><strong>Forecast</strong>: {currentConditions.conditions}; <br />{description}</li>}
        {/* <li>{currentConditions && <p>Time: {new Date(+currentConditions.datetimeEpoch)}</p>}</li> */}
        {currentConditions && <li><strong>Sunrise</strong>: {currentConditions.sunrise}</li>}
        {currentConditions && <li><strong>Sunset</strong>: {currentConditions.sunset}</li>}
      </ul>
    </div>
  )
}
