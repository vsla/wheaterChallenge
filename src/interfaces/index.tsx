export interface wheaterInterface {
  min: number;
  max: number;
  date: string;
}

export type wheaterWeekInterface = {
  min: number;
  max: number;
  date: string;
  description: string;
  condition: string;
};

export type cityInterface = string;

export interface stateInterface {
  week: Array<wheaterWeekInterface>;
  city: cityInterface;
  temp: number;
  date: string;
  actualDayImageId: string;
}

// Responses

export interface weatherResponse {
  data: {
    results: {
      temp: number;
      date: string;
      // time: "22:40";
      condition_code: string; // "28";
      description: string; // "Tempo nublado";
      currently: string; //"noite";

      city: string; // "Recife, PE";
      img_id: string; // "28n"; https://assets.hgbrasil.com/weather/images/
      // humidity: 83;
      // wind_speedy: "1.54 km/h";
      // sunrise: "05:22 am";
      // sunset: "05:10 pm";
      // condition_slug: "cloudly_night";
      city_name: "Recife";
      forecast: Array<{
        date: string; //"05/05",
        // "weekday": "Qua",
        max: number;
        min: number;
        description: string;
        condition: string;
      }>;
    };
  };
}

export interface cityVerifyResponse {
  data: {
    country: string;
    name: string;
    region: string;
    woeid: number;
    error?: string;
  };
}

export type conditionInterface =
  | "storm"
  | "snow"
  | "hail"
  | "rain"
  | "fog"
  | "clear_day"
  | "clear_night"
  | "cloud"
  | "cloudly_day"
  | "cloudly_night"
  | "none_day"
  | "none_night";
