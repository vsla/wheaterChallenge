import { cityVerifyResponse, weatherResponse } from "interfaces";
import api from "services/api";

export const getCityWeather = (city: string): Promise<weatherResponse> => {
  const response = api.get("/weather", {
    params: {
      city_name: city,
    },
  });
  return response;
};

export const findCityByName = (city: string): Promise<cityVerifyResponse> => {
  const response = api.get("/stats/find_woeid", {
    params: {
      city_name: city,
    },
  });
  return response;
};
