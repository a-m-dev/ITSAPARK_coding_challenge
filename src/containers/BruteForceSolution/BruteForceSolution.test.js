import { render, fireEvent, waitFor } from "@testing-library/react";
import BruteForceSolution from "./BruteForceSolution";

describe("<BruteForceSolution />", () => {
  test("expect to matches with snapshot", () => {
    const result = render(<BruteForceSolution />);
    expect(result).toMatchSnapshot();
  });

  test("There are 4 Multiplication of 3 in range of 1 to 12", async () => {
    const { getByTestId } = render(<BruteForceSolution />);

    const startNumberInput = getByTestId("startNumber");
    const stopNumberInput = getByTestId("stopNumber");
    const submitButton = getByTestId("submitButton");

    fireEvent.change(startNumberInput, { target: { value: 1 } });
    fireEvent.change(stopNumberInput, { target: { value: 12 } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(getByTestId("resultCount")).toHaveTextContent(4);
    });
  });

  test("There are 33 Multiplication of 3 in range of 1 to 100", async () => {
    const { getByTestId } = render(<BruteForceSolution />);

    const startNumberInput = getByTestId("startNumber");
    const stopNumberInput = getByTestId("stopNumber");
    const submitButton = getByTestId("submitButton");

    fireEvent.change(startNumberInput, { target: { value: 1 } });
    fireEvent.change(stopNumberInput, { target: { value: 100 } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(getByTestId("resultCount")).toHaveTextContent(33);
    });
  });
});
