import './index.css'

function WeatherInfo5Days({ weather5Days }) {
  console.log(weather5Days)

  let dailyForecast = {}

  for (let forecast of weather5Days.list) {
    const date = new Date(forecast.dt * 1000).toLocaleDateString()

    if(!dailyForecast[date]){
      dailyForecast[date] = forecast
    }
  }

  const next5Days = Object.values(dailyForecast).slice(1,6)

  function convertDate(date){
    const newDate = new Date(date.dt * 1000).toLocaleDateString('pt-BR', {weekday: 'long', day: '2-digit'})

    return newDate
  }

  return (
    <div className='weather-container-5days'>
      <h3>Previsão Próximos 5 dias</h3>
      <div className='weather-list'>
        {next5Days.map( forecast => (
          <div key={forecast.dt} className='weather-item'>
            <p className='day'>{convertDate(forecast)}</p>
            <img src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} alt='Ícone do Clima'/>
            <p className='weather'>{forecast.weather[0].description}</p>
            <div className='weather-min-max'>
              <p>Min: {Math.round(forecast.main.temp_min)}°C</p>
              <p>Max: {Math.round(forecast.main.temp_max)}°C</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WeatherInfo5Days