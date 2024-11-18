import React, { useState } from 'react'
import Searchbox from './Searchbox'
import InfoBox from './InfoBox'
const WeatherApp = () => {
    let [weather,setWeather]=useState({
        city: "lahore",
        feelslike: 24,
        temp: 25.5,
        tempmin: 25.5,
        tempmax: 25.5,
        humidity:37.04,
        weather:"haze"
    })
    let updateInfo=(newInfo)=>{
setWeather(newInfo)
    }
  return (
    <div>
         <Searchbox updateInfo={updateInfo}/>
         <InfoBox info={weather}/>
    </div>
  )
}

export default WeatherApp