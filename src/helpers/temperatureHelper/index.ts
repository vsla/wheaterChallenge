import { conditionInterface } from "interfaces";

export function temperatureHelper(temperature: string) {
  return temperature + "°C";
}

export function convertConditionToImageId(
  condition: conditionInterface
): number {
  switch (condition) {
    case "storm":
      return 4;
    case "snow":
      return 16;
    case "hail":
      return 17;
    case "rain":
      return 45;
    case "fog":
      return 20;
    case "clear_day":
      return 27;
    case "clear_night":
      return 27;
    case "cloud":
      return 26;
    case "cloudly_day":
      return 27;
    case "cloudly_night":
      return 27;
    case "none_day":
      return 48;
    case "none_night":
      return 48;
    default:
      return 48;
  }
}
