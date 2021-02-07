import { render } from "@testing-library/react";
import Loading from "./Loading";

describe("<Loading />", () => {
  test("should match with snapshot", () => {
    const result = render(<Loading />);
    expect(result).toMatchSnapshot();
  });
});
