import { useState, useRef } from 'react'
import axios from 'axios'
import './App.css'
import WeatherInfo from './components/WeatherInfo'
import WeatherInfo5Days from './components/WeatherInfo5Days'

function App() {
  const [weather, setWeather] = useState()
  const [weather5Days, setWeather5Days] = useState()

  const inputRef = useRef()

  async function searchCity(){
    const city = inputRef.current.value
    const key = "ad9ac7dd82534372f04c3d84cea3c421"

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
    const url5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`

    const apiWeather = await axios.get(url)
    const apiWeather5Days = await axios.get(url5Days)

    setWeather(apiWeather.data)
    setWeather5Days(apiWeather5Days.data)
  }

  return (
    <div className='container'>
      <h1>Previsão do Tempo</h1>
      <div className='search>'>
        <input ref={inputRef} type='text' placeholder='Cidade'/>
        <button onClick={searchCity}>Buscar</button>
      </div>

      {weather && <WeatherInfo weather={weather}/>}
      {weather5Days && <WeatherInfo5Days weather5Days={weather5Days}/> }
    </div>
  )
}

export default App
