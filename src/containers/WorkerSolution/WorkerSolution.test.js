import { render, fireEvent, waitFor } from "@testing-library/react";
import WorkerSolution from "./WorkerSolution";
import worker from "workerize-loader!../../../src/workers/computeNum"; // eslint-disable-line import/no-webpack-loader-syntax

jest.mock("workerize-loader!../../../src/workers/computeNum", () => {
  return () => {
    return {
      addEventListener: jest.fn(),
      calculateTheRange: jest.fn(),
    };
  };
});

describe("<WorkerSolution />", () => {
  test("should match with snapshot", () => {
    const result = render(<WorkerSolution />);
    expect(result).toMatchSnapshot();
  });

  test("should render properly", () => {
    const { getByTestId } = render(<WorkerSolution />);

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
});
