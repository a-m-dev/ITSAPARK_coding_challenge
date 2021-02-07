import { render } from "@testing-library/react";
import Form from "./Form";

describe("<Form />", () => {
  test("should match with the snapshot", () => {
    const result = render(<Form />);
    expect(result).toMatchSnapshot();
  });
});
