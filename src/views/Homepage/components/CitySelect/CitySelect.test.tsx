import { render } from "@testing-library/react";
import CitySelect from "./index";

describe("CitySelect tests", () => {
  it("should render", () => {
    const { queryByTestId, getByText } = render(
      <CitySelect verifyCity={(city) => {}} wrongCity={false} />
    );

    expect(queryByTestId("citySelectroot")).toBeTruthy();
    expect(getByText("Escolha uma cidade:")).toBeTruthy();
  });
});
