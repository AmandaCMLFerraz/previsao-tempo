import './index.css'

function WeatherInfo({ weather }) {
  return (
    <div className='weather-container'>
      <div className='weather-container-info'>
        <h2>{weather.name}</h2>
        <div className='informations'>
          <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt='Ícone do clima'/>
          <p className='temperature'>{Math.round(weather.main.temp)}°C</p>
        </div>
        <p className='description'>{weather.weather[0].description}</p>
      </div>
      <div className='limite-temperature'>
        <p>Min: {Math.round(weather.main.temp_min)}°C</p> 
        <p>Max: {Math.round(weather.main.temp_max)}°C</p>
      </div>
      <div className='details'>
        <p>Sensação Térmica: {Math.round(weather.main.feels_like)}°C</p>
        <p>Umidade: {weather.main.humidity}%</p>
        <p>Pressão: {weather.main.pressure}</p>
      </div>
    </div>
  )
}

export default WeatherInfo