import { render } from "@testing-library/react";
import { useState } from "react";
import Textfield from "./index";

const TestInput = () => {
  const [value, setValue] = useState("");
  const sendInput = (e) => {
    if (e.key === "Enter") {
      console.log(value);
    }
  };
  return (
    <Textfield
      label={"Testando input"}
      value={value}
      handleChange={(e) => setValue(e.target.value)}
      onKeyDown={sendInput}
    />
  );
};

describe("Textfield tests", () => {
  it("should render", () => {
    const { queryByTestId } = render(<TestInput />);

    expect(queryByTestId("textfieldContainer")).toBeTruthy();
    expect(queryByTestId("textfieldLabel")).toBeTruthy();
    expect(queryByTestId("textfield")).toBeTruthy();
  });
});
