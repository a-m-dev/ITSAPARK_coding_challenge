import { render } from "@testing-library/react";
import ResultBox from "./ResultBox";

describe("<ResultBox />", () => {
  test("should match snapshot", () => {
    const result = render(<ResultBox />);
    expect(result).toMatchSnapshot();
  });

  test("should render Properly by default", () => {
    const { getByTestId } = render(<ResultBox />);

    const resultCount = getByTestId("resultCount");
    const timeTooks = getByTestId("timeTook");

    expect(resultCount).toHaveTextContent(0);
    expect(timeTooks).toHaveTextContent(0);
  });

  test("should render Properly with props", () => {
    const fakeData = {
      timeItTakes: 100.21342354,
      count: 5000,
    };

    const { getByTestId } = render(<ResultBox {...fakeData} />);

    const resultCount = getByTestId("resultCount");
    const timeTooks = getByTestId("timeTook");

    expect(resultCount).toHaveTextContent(fakeData.count.toLocaleString());
    expect(timeTooks).toHaveTextContent(fakeData.timeItTakes);
  });

  test("should render Properly with large numbers", () => {
    const fakeData = {
      timeItTakes: 0.23542343240002345023040230402304,
      count: BigInt(
        "123598129834789123749812379847349509813475892734895123984719283478"
      ),
    };

    const { getByTestId } = render(<ResultBox {...fakeData} />);

    const resultCount = getByTestId("resultCount");
    const timeTooks = getByTestId("timeTook");

    expect(resultCount).toHaveTextContent(fakeData.count.toLocaleString());
    expect(timeTooks).toHaveTextContent(fakeData.timeItTakes);
  });
});
