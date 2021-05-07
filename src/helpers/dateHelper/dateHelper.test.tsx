import { dateConverter } from "./index";
const today = new Date();

const RealDate = Date.now;

beforeAll(() => {
  global.Date.now = jest.fn(() => new Date("2021-04-07T10:20:30Z").getTime());
});

afterAll(() => {
  global.Date.now = RealDate;
});

describe("testing date Converter", () => {
  it("should receive a date dd/mm and return a moment object", () => {
    const date = "08/11";
    const actualyear = today.getFullYear();
    const dateFormatted = dateConverter(date);
    expect(dateFormatted.format("L")).toBe("08/11/" + actualyear);
  });

  it("should receive a date dd/mm/yyyy and return a moment object", () => {
    const date = "08/11/2021";
    const dateFormatted = dateConverter(date);
    expect(dateFormatted.format("L")).toBe("08/11/2021");
  });
});
