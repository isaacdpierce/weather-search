import axios from 'axios';

const API_KEY = 'e2036983dd8be807ccafd32897c2ebb3';
const ROOT_URL = 
`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

// Create an actionCreator to make api request to fetch weather data
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}