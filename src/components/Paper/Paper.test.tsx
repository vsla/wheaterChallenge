import { render } from "@testing-library/react";
import Paper from "./index";

describe("testing paper", () => {
  it("should render", () => {
    const { queryByTestId } = render(
      <Paper>
        <div>children</div>
      </Paper>
    );
    const paper = queryByTestId("paper");
    expect(paper).toBeTruthy();
  });

  it("should render a title", () => {
    const { queryByTestId } = render(
      <Paper title="titulo">
        <div>children</div>
      </Paper>
    );
    const title = queryByTestId("paper-title");
    expect(title).toBeTruthy();
    expect(title).toHaveTextContent("titulo");
  });

  it("should render the children", () => {
    const { queryByTestId } = render(
      <Paper>
        <div data-testid="children">children</div>
      </Paper>
    );
    const children = queryByTestId("children");
    expect(children).toBeTruthy();
    expect(children).toHaveTextContent("children");
  });
});
