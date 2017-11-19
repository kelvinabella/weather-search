import axios from "axios"

const API_KEY="8bd780375531bfd7629fbc302bd7793f"
const WEATHER_URL=`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`
export const FETCH_WEATHER="FETCH_WEATHER"


export function fetchWeather(city) {
  const url = `${WEATHER_URL}&q=${city}`
  const request = axios.get(url)

  return {
    type: FETCH_WEATHER,
    payload: request

  }
}
