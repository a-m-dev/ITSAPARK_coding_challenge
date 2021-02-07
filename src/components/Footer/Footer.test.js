import { render } from "@testing-library/react";
import Footer from "./Footer";

describe("<Footer />", () => {
  test("should match snapshot", () => {
    const result = render(<Footer />);
    expect(result).toMatchSnapshot();
  });
});
