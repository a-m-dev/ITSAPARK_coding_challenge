import { render, fireEvent, waitFor } from "@testing-library/react";
import AdvanceSolution from "./AdvanceSolution";

describe("<AdvanceSolution />", () => {
  test("should match with snapshot", () => {
    const result = render(<AdvanceSolution />);
    expect(result).toMatchSnapshot();
  });

  test("There are 4 Multiplication of 3 in range of 1 to 12", async () => {
    const { getByTestId } = render(<AdvanceSolution />);

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
    const { getByTestId } = render(<AdvanceSolution />);

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

  test("Checking the functionality of BigInt, There are 41137447078041137447078071137448374 Multiplication of 3 in range of 1 to 123412341234123412341234213412345123", async () => {
    const { getByTestId } = render(<AdvanceSolution />);

    const startNumberInput = getByTestId("startNumber");
    const stopNumberInput = getByTestId("stopNumber");
    const submitButton = getByTestId("submitButton");

    fireEvent.change(startNumberInput, { target: { value: 1n } });
    fireEvent.change(stopNumberInput, {
      target: { value: 123412341234123412341234213412345123n },
    });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(getByTestId("resultCount")).toHaveTextContent(
        41137447078041137447078071137448374n.toLocaleString()
      );
    });
  });
});
