import api from "services/api";

export const getCityWeather = (city: string) => {
  try {
    const response = api.get("/weather", {
      params: {
        city_name: city,
      },
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const findCityByName = (city: string) => {
  try {
    const response = api.get("/stats/find_woeid", {
      params: {
        city_name: city,
      },
    });
    return response;
  } catch (error) {
    return error;
  }
};
