import { render } from "@testing-library/react";
import Header from "./Header";
import { BrowserRouter } from "react-router-dom";

describe("<Header />", () => {
  test("should match the snapshot", () => {
    const result = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(result).toMatchSnapshot();
  });
});
