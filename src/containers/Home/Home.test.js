import { render } from "@testing-library/react";
import Home from "./Home";

describe("<Home />", () => {
  test("should match with snapshot", () => {
    const result = render(<Home />);
    expect(result).toMatchSnapshot();
  });
});
