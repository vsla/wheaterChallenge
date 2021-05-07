import { temperatureHelper } from "./index";

test("temperatureHelper", () => {
  expect(temperatureHelper("23")).toBe("23°C");
  expect(temperatureHelper("40")).toBe("40°C");
});
