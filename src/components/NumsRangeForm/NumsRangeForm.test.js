import { render, fireEvent, waitFor } from "@testing-library/react";
import NumsRangeForm from "./NumsRangeForm";

describe("<NumsRangeForm />", () => {
  test("should match with snapshot", () => {
    const result = render(<NumsRangeForm />);
    expect(result).toMatchSnapshot();
  });

  test("should render properly", () => {
    const { getByTestId } = render(<NumsRangeForm />);

    const startNumberInput = getByTestId("startNumber");
    const stopNumberInput = getByTestId("stopNumber");
    const submitButton = getByTestId("submitButton");

    expect(startNumberInput).toBeTruthy();
    expect(stopNumberInput).toBeTruthy();
    expect(submitButton).toBeTruthy();

    expect(startNumberInput).toHaveValue("");
    expect(stopNumberInput).toHaveValue("");
    expect(submitButton).toHaveTextContent("Submit");
  });

  test("should show error when submiting with empty values", async () => {
    const { getByTestId } = render(<NumsRangeForm />);

    const submitButton = getByTestId("submitButton");

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(getByTestId("startNumber_error")).toHaveTextContent(
        "Start number is required"
      );
      expect(getByTestId("stopNumber_error")).toHaveTextContent(
        "Stop number is required"
      );
    });
  });

  test("should show error when stop number is less than start number", async () => {
    const { getByTestId } = render(<NumsRangeForm />);

    const submitButton = getByTestId("submitButton");
    const startNumberInput = getByTestId("startNumber");
    const stopNumberInput = getByTestId("stopNumber");

    fireEvent.change(startNumberInput, { target: { value: 100 } });
    fireEvent.change(stopNumberInput, { target: { value: 50 } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(getByTestId("stopNumber_error")).toHaveTextContent(
        "Stop number must be more than start number"
      );
    });
  });

  test("should show error when start number is less than or equal to 0", async () => {
    const { getByTestId } = render(<NumsRangeForm />);

    const submitButton = getByTestId("submitButton");
    const startNumberInput = getByTestId("startNumber");
    const stopNumberInput = getByTestId("stopNumber");

    fireEvent.change(startNumberInput, { target: { value: -20 } });
    fireEvent.change(stopNumberInput, { target: { value: 50 } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(getByTestId("startNumber_error")).toHaveTextContent(
        "Number should be positive value"
      );
    });
  });
});
