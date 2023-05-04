import axios from "axios";

// calling data from openweatherapi
const URL = "https://api.openweathermap.org/data/2.5/weather";

// the api key
const API_KEY = "f33a484cf794d08d0148764789aaba32";

// calling the data from api
export const fetchWeather = async (query) => {
  try {
    const { data } = await axios.get(URL, {
      params: {
        q: query,
        units: "metric",
        APPID: API_KEY,
      },
    });
    return data;
  } catch (error) {
    if (error) throw error;
  }
};
