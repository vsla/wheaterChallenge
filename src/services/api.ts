import axios from "axios";

const {
  REACT_APP_WEATHER_API_URL,
  REACT_APP_WEATHER_KEY2,
} = process.env;

const api = axios.create({
  baseURL: REACT_APP_WEATHER_API_URL,
  params: {
    format: "json-cors",
    key: "development",
  },
});

export default api;
