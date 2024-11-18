import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
const Searchbox = ({updateInfo}) => {
  let api_url="https://api.openweathermap.org/data/2.5/weather"
  let api_key="85cfe0dcffa37a149b008380876752bd"
    let [city,setCity]=useState("")
    let weatherInfo= async ()=>{
      let response= await fetch(`${api_url}?q=${city}&appid=${api_key}&units=metric`)
      let jsonresp= await response.json()
      console.log(jsonresp)
      let result = {
        city: city,
        feelslike : jsonresp.main.feels_like,
        temp: jsonresp.main.temp,
        tempmax: jsonresp.main.temp_max,
        tempmin: jsonresp.main.temp_min,
        humidity: jsonresp.main.humidity,
        weather: jsonresp.weather[0].description
      }
      console.log(result)
      return result
      
    }
    let handleChange =(e)=>{
        setCity(e.target.value)
    }
    let submitChange=async (evt)=>{
        evt.preventDefault()
        console.log(city)
        setCity("")
       let newInfo = await weatherInfo()
       updateInfo(newInfo)
        
    }
  return (
    <div className='text-center m-4'>
      <h2>Weather App</h2>
        <form onSubmit={submitChange}>
        <TextField className='mt-2' id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange} />
        <br />
        <Button className='mt-2' variant="contained" type='submit'>Search</Button>
        </form>
    </div>
  )
}

export default Searchbox