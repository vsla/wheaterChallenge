import { render } from "@testing-library/react";
import ActualDay from "./index";
import weatherResponse from "mock/weatherResponse.json";
import { temperatureHelper } from "helpers/temperatureHelper";

const { city_name, date, temp, img_id, forecast } = weatherResponse.results;
const { min, max } = forecast[0];

const MockActualDay = () => {
  return (
    <ActualDay
      city={city_name}
      actualDay={{ date, min, max }}
      actualTemp={temp}
      actualDayImageId={img_id}
    />
  );
};

describe("ActualDay tests", () => {
  it("should render", () => {
    const { queryByTestId } = render(<MockActualDay />);

    expect(queryByTestId("actualDayRoot")).toBeTruthy();
  });

  it("should render cityName, date, temperature, min and max", () => {
    const { queryByTestId } = render(<MockActualDay />);

    expect(queryByTestId("actualDayRoot")).toBeTruthy();
    expect(queryByTestId("actualDayCity")).toHaveTextContent(city_name);
    expect(queryByTestId("actualDayDate")).toHaveTextContent(
      "5 de mai de 2021 / quarta-feira"
    );
    expect(queryByTestId("actualDayTemperature")).toHaveTextContent(
      temperatureHelper(temp.toString())
    );
    expect(queryByTestId("actualDayMin")).toHaveTextContent(
      temperatureHelper(min.toString())
    );
    expect(queryByTestId("actualDayMax")).toHaveTextContent(
      temperatureHelper(max.toString())
    );
  });
});
