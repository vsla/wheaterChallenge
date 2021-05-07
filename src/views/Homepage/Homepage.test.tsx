import { render } from "@testing-library/react";
import Homepage from "./index";

describe("Homepage tests", () => {
  it("should render", () => {
    const { queryByTestId } = render(<Homepage />);
    const homepage = queryByTestId("homepage-root");
    expect(homepage).toBeTruthy();
  });
});
